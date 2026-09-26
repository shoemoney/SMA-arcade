import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { createArcade } from './server.mjs'
import { rankedScore } from './rankedScore.mjs'
const origin='https://arcade.shoemoney.com'
async function setup(t, options={}) {
  const dir=await mkdtemp(join(tmpdir(),'arcade-test-')), dbPath=join(dir,'scores.sqlite')
  let app
  async function boot() { app=createArcade({dbPath,...options}); await new Promise(r=>app.server.listen(0,'127.0.0.1',r)); return `http://127.0.0.1:${app.server.address().port}` }
  let base=await boot()
  t.after(async()=>{await app.close();await rm(dir,{recursive:true,force:true})})
  const request=async(path,body,headers={})=>{const response=await fetch(base+path,{method:body===undefined?'GET':'POST',headers:{origin,'content-type':'application/json',...headers},body:body===undefined?undefined:JSON.stringify(body)});return {status:response.status,data:await response.json(),headers:response.headers}}
  return { request, dbPath, restart:async()=>{await app.close();base=await boot()}, run:async()=>{const r=await request('/api/games/last-engineer/runs',{});assert.equal(r.status,201);return r.data.runToken} }
}
const score=(runToken,n=100,name='Player')=>({runToken,name,score:n,wave:3,kills:10,headshots:2,duration:42.5})
const path='/api/games/last-engineer/scores'
test('real SQLite persists scores and returns highest ten with deterministic ties',async t=>{
  const a=await setup(t)
  for(let i=0;i<11;i++){const result=await a.request(path,score(await a.run(),i));assert.equal(result.status,201);assert.equal(result.data.rank,1)}
  await a.restart()
  const result=await a.request(path+'?scoreVersion=1')
  assert.equal(result.data.order,'highest');assert.deepEqual(result.data.scores.map(s=>s.score),[10,9,8,7,6,5,4,3,2,1])
  assert.equal((await a.request('/api/health')).data.ok,true)
  const tie=await a.request(path,score(await a.run(),10,'Tie'))
  assert.equal(tie.data.rank,2)
  assert.deepEqual((await a.request(path+'?scoreVersion=1')).data.scores.slice(0,2).map(s=>s.name),['Player','Tie'])
})
test('concurrent exact replay is idempotent; changed replay rejected; token stored hashed',async t=>{
  const a=await setup(t), token=await a.run(), payload=score(token)
  const responses=await Promise.all([a.request(path,payload),a.request(path,payload)])
  assert.deepEqual(responses.map(r=>r.status).sort(),[200,201]);assert.equal(responses[0].data.score.id,responses[1].data.score.id)
  assert.equal((await a.request(path,score(token,101))).status,409)
  assert.equal((await a.request(path+'?scoreVersion=1')).data.scores.length,1)
  const db=new DatabaseSync(a.dbPath);assert.notEqual(db.prepare('SELECT token_hash FROM runs').get().token_hash,token);db.close()
  await a.restart();assert.equal((await a.request(path,payload)).data.replayed,true)
})
test('expired and invalid submissions do not consume valid tokens; names stay plain JSON text',async t=>{
  let time=Date.now();const a=await setup(t,{now:()=>time}), token=await a.run()
  for(const changes of [{name:''},{name:'x'.repeat(25)},{name:'bad\nname'},{score:-1},{score:Infinity},{kills:1.1},{headshots:11},{duration:-1},{runToken:'invalid'}]) assert.equal((await a.request(path,{...score(token),...changes})).status,400)
  const valid=await a.request(path,score(token,100,'  <b>Alice</b>  '));assert.equal(valid.status,201);assert.equal(valid.data.score.name,'<b>Alice</b>')
  assert.equal((await a.request(path,score(token,100,'<b>Alice</b>'))).status,200)
  assert.match(valid.headers.get('content-type'),/^application\/json/)
  const expired=await a.run();time+=86400001
  assert.equal((await a.request(path,score(expired))).status,404) // expired unsubmitted rows are cleaned by the request sweep
})
test('origin, body limit, registry and rate limits reject bad requests',async t=>{
  const a=await setup(t,{tokenLimit:2})
  assert.equal((await a.request('/api/games/last-engineer/runs',{}, {origin:'https://evil.example'})).status,403)
  assert.equal((await a.request('/api/games/last-engineer/runs',{}, {origin:''})).status,403)
  assert.equal((await a.request('/api/games/unknown/scores')).status,404)
  assert.equal((await a.request('/api/games/last-engineer/runs',{padding:'x'.repeat(9000)})).status,413)
  await a.run();await a.run();assert.equal((await a.request('/api/games/last-engineer/runs',{})).status,429)
  assert.equal((await a.request(path)).headers.get('access-control-allow-origin'),null)
})

const v2 = (token,waves=1,seconds=60) => ({runToken:token,scoreVersion:2,completedWaves:waves,combatSeconds:seconds,wave:waves+1,kills:20,headshots:2,duration:seconds+30})
async function run2(a) { return (await a.request('/api/games/last-engineer/runs',{scoreVersion:2})).data.runToken }
const qualify='/api/games/last-engineer/qualify'
test('v2 authoritative score, frozen qualification, version isolation and accepted retry after expiry',async t=>{
 let time=Date.now();const a=await setup(t,{now:()=>time})
 await a.request(path,score(await a.run(),999999))
 const token=await run2(a), metrics=v2(token,3,145.25)
 const q=await a.request(qualify,{...metrics,score:99999999})
 assert.equal(q.status,200);assert.equal(q.data.score,30123);assert.equal(q.data.qualified,true)
 assert.equal((await a.request(qualify,{...metrics,combatSeconds:1})).status,409)
 const payload={runToken:token,scoreVersion:2,name:'  Ａlice  Smith '}
 const saved=await a.request(path,payload);assert.equal(saved.status,201);assert.equal(saved.data.score.name,'Alice Smith')
 assert.equal((await a.request(path)).data.scores[0].score,30123)
 assert.equal((await a.request(path+'?scoreVersion=1')).data.scores[0].score,999999)
 time+=86400001
 const retry=await a.request(path,payload);assert.equal(retry.status,200);assert.equal(retry.data.score.id,saved.data.score.id);assert.equal(retry.data.replayed,true)
 assert.equal((await a.request(path,{...payload,name:'Bob'})).status,409)
 await a.restart();assert.equal((await a.request(path)).data.scores.length,1)
})
test('qualification excludes zero completed waves and submission rechecks top ten',async t=>{
 const a=await setup(t,{tokenLimit:100,rateLimit:500})
 const zero=await run2(a);assert.equal((await a.request(qualify,v2(zero,0))).data.reason,'complete_wave')
 const candidate=await run2(a);assert.equal((await a.request(qualify,v2(candidate))).data.qualified,true)
 for(let i=0;i<10;i++){const token=await run2(a);await a.request(qualify,v2(token,2));assert.equal((await a.request(path,{runToken:token,scoreVersion:2,name:'Leader'+i})).status,201)}
 const displaced=await a.request(path,{runToken:candidate,scoreVersion:2,name:'Late'});assert.equal(displaced.status,200);assert.equal(displaced.data.accepted,false);assert.equal(displaced.data.reason,'board_changed')
 const tie=await run2(a);assert.equal((await a.request(qualify,v2(tie,2))).data.qualified,false)
 assert.equal((await a.request(path)).data.scores.length,10)
})
test('SMTD retains v1 contracts and cannot opt into Last Engineer scoring',async t=>{
 const a=await setup(t);const token=(await a.request('/api/games/smtd/runs',{})).data.runToken
 assert.equal((await a.request('/api/games/smtd/scores',score(token))).status,201)
 assert.equal((await a.request('/api/games/smtd/scores')).data.scores[0].score,100)
 assert.equal((await a.request('/api/games/smtd/runs',{scoreVersion:2})).status,400)
})

test('legacy database migration preserves existing rows and repeats safely',async t=>{
 const dir=await mkdtemp(join(tmpdir(),'arcade-legacy-')),dbPath=join(dir,'scores.sqlite')
 const db=new DatabaseSync(dbPath)
 db.exec(`CREATE TABLE runs(token_hash TEXT PRIMARY KEY,game TEXT NOT NULL,created INTEGER NOT NULL,expires INTEGER NOT NULL);
 CREATE TABLE scores(id INTEGER PRIMARY KEY,token_hash TEXT UNIQUE NOT NULL REFERENCES runs(token_hash),game TEXT NOT NULL,name TEXT NOT NULL,score INTEGER NOT NULL,wave INTEGER NOT NULL,kills INTEGER NOT NULL,headshots INTEGER NOT NULL,duration REAL NOT NULL,created INTEGER NOT NULL,payload TEXT NOT NULL);
 INSERT INTO runs VALUES('old','last-engineer',0,9999999999999);
 INSERT INTO scores VALUES(1,'old','last-engineer','Legacy',123,1,1,0,10,0,'{}');`);db.close()
 for(let i=0;i<2;i++){const a=createArcade({dbPath});await new Promise(r=>a.server.listen(0,'127.0.0.1',r));await a.close()}
 const migrated=new DatabaseSync(dbPath);assert.deepEqual({...migrated.prepare('SELECT name,score,score_version FROM scores').get()},{name:'Legacy',score:123,score_version:1});migrated.close();await rm(dir,{recursive:true,force:true})
})
test('concurrent candidates competing for last place cannot both be accepted',async t=>{
 const a=await setup(t,{rateLimit:500,tokenLimit:100})
 for(let i=0;i<9;i++){const token=await run2(a);await a.request(qualify,v2(token,3));await a.request(path,{runToken:token,scoreVersion:2,name:'Leader'+i})}
 const one=await run2(a),two=await run2(a)
 for(const token of [one,two])assert.equal((await a.request(qualify,v2(token,1))).data.qualified,true)
 const results=await Promise.all([one,two].map((runToken,i)=>a.request(path,{runToken,scoreVersion:2,name:'Candidate'+i})))
 assert.equal(results.filter(r=>r.data.accepted).length,1);assert.equal(results.filter(r=>r.data.reason==='board_changed').length,1)
})

test('double-speed simulated combat is valid but impossible time ratios are rejected',async t=>{
 const a=await setup(t)
 const token=await run2(a)
 assert.equal((await a.request(qualify,{...v2(token,1,120),duration:60})).status,200)
 const invalid=await run2(a)
 assert.equal((await a.request(qualify,{...v2(invalid,1,121),duration:60})).status,400)
})

test('combat clock floating point accumulation cannot change equivalent scores',()=>{
 assert.equal(rankedScore(1,19.999999999999506),10300)
 assert.equal(rankedScore(1,20.000000000000146),10300)
})
