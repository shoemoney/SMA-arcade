import { rankedScore } from './rankedScore.mjs'
import http from 'node:http'
import { DatabaseSync } from 'node:sqlite'
import { randomBytes, createHash } from 'node:crypto'
import { readFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const registry = JSON.parse(readFileSync(new URL('./games.json', import.meta.url)))
const hash = value => createHash('sha256').update(value).digest('hex')
const failure = (status, message) => Object.assign(new Error(message), { status })
const loopback = address => ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(address)
const DAY = 86400000

export function createArcade({ dbPath, origin = 'https://arcade.shoemoney.com', devOrigin, now = Date.now, rateLimit = 120, tokenLimit = 30 } = {}) {
  if (!dbPath) throw new Error('dbPath is required; keep the database outside application releases')
  const origins = new Set([origin, devOrigin].filter(Boolean).map(value => new URL(value).origin))
  if (dbPath !== ':memory:') mkdirSync(dirname(resolve(dbPath)), { recursive: true })
  const db = new DatabaseSync(dbPath)
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; PRAGMA foreign_keys=ON;
    CREATE TABLE IF NOT EXISTS runs(token_hash TEXT PRIMARY KEY, game TEXT NOT NULL, created INTEGER NOT NULL, expires INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS scores(id INTEGER PRIMARY KEY, token_hash TEXT UNIQUE NOT NULL REFERENCES runs(token_hash), game TEXT NOT NULL, name TEXT NOT NULL, score INTEGER NOT NULL, wave INTEGER NOT NULL, kills INTEGER NOT NULL, headshots INTEGER NOT NULL, duration REAL NOT NULL, created INTEGER NOT NULL, payload TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS leaderboard ON scores(game,score DESC,created,id);
    CREATE INDEX IF NOT EXISTS run_expiry ON runs(expires);`)
  for (const [table, columns] of Object.entries({ runs: { score_version: 'INTEGER NOT NULL DEFAULT 1', result_payload: 'TEXT' }, scores: { score_version: 'INTEGER NOT NULL DEFAULT 1', completed_waves: 'INTEGER', combat_seconds: 'REAL' } })) {
    const present = new Set(db.prepare(`PRAGMA table_info(${table})`).all().map(column => column.name))
    for (const [column, type] of Object.entries(columns)) if (!present.has(column)) db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`)
  }
  db.exec('CREATE INDEX IF NOT EXISTS ranked_board ON scores(game,score_version,score DESC,created,id)')
  const currentVersion = game => game === 'last-engineer' ? 2 : 1
  const validVersion = (game, version) => version === 1 || (game === 'last-engineer' && version === 2)
  const board = (game, version) => db.prepare('SELECT * FROM scores WHERE game=? AND score_version=? ORDER BY score DESC,created ASC,id ASC LIMIT ?').all(game,version,registry[game].limit).map(publicScore)
  const candidateRank = (game, version, score) => db.prepare('SELECT COUNT(*)+1 AS rank FROM scores WHERE game=? AND score_version=? AND score>=?').get(game,version,score).rank
  const buckets = new Map()
  let lastSweep = now()
  function rate(ip, kind, limit) {
    const time = now(), key = `${kind}:${ip}`
    if (time - lastSweep >= 60000) {
      for (const [key, bucket] of buckets) if (time >= bucket.until) buckets.delete(key)
      db.prepare('DELETE FROM runs WHERE expires < ? AND NOT EXISTS(SELECT 1 FROM scores WHERE scores.token_hash=runs.token_hash)').run(time)
      lastSweep = time
    }
    let bucket = buckets.get(key)
    if (!bucket || time >= bucket.until) {
      if (!bucket && buckets.size >= 10000) throw failure(429, 'Server busy; try again shortly')
      bucket = { count: 0, until: time + 60000 }; buckets.set(key, bucket)
    }
    if (++bucket.count > limit) throw failure(429, 'Too many requests; try again in one minute')
  }
  function publicScore(row) { return { id: row.id, name: row.name, score: row.score, scoreVersion: row.score_version, completedWaves: row.completed_waves, combatSeconds: row.combat_seconds, createdAt: new Date(row.created).toISOString() } }
  function accepted(row, replayed = false) {
    const { rank } = db.prepare('SELECT COUNT(*)+1 AS rank FROM scores WHERE game=? AND score_version=? AND (score>? OR (score=? AND (created<? OR (created=? AND id<?))))').get(row.game,row.score_version,row.score,row.score,row.created,row.created,row.id)
    return { accepted: true, replayed, rank, scoreVersion: row.score_version, score: publicScore(row) }
  }
  function validate(body) {
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw failure(400, 'Expected a JSON object')
    if (typeof body.runToken !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(body.runToken)) throw failure(400, 'Invalid run token')
    if (typeof body.name !== 'string') throw failure(400, 'Enter a name with 1–24 printable characters')
    const name = body.name.normalize('NFKC').trim().replace(/ +/g, ' ')
    if ([...name].length < 1 || [...name].length > 24 || /[\p{C}\p{Zl}\p{Zp}]/u.test(name)) throw failure(400, 'Enter a name with 1–24 printable characters')
    for (const [field, max] of Object.entries({ score: 1000000000, wave: 10000, kills: 10000000, headshots: 10000000 })) {
      if (!Number.isSafeInteger(body[field]) || body[field] < 0 || body[field] > max) throw failure(400, `Invalid ${field}`)
    }
    if (!Number.isFinite(body.duration) || body.duration < 0 || body.duration > 86400) throw failure(400, 'Invalid duration')
    if (body.headshots > body.kills) throw failure(400, 'Headshots cannot exceed kills')
    return { name, score: body.score, wave: body.wave, kills: body.kills, headshots: body.headshots, duration: body.duration }
  }
  async function bodyOf(req) {
    if (!(req.headers['content-type'] ?? '').toLowerCase().startsWith('application/json')) throw failure(415, 'Use application/json')
    if (Number(req.headers['content-length']) > 8192) throw failure(413, 'Request body too large')
    const chunks = []; let size = 0
    for await (const chunk of req) { size += chunk.length; if (size > 8192) throw failure(413, 'Request body too large'); chunks.push(chunk) }
    try { return JSON.parse(Buffer.concat(chunks).toString('utf8')) } catch { throw failure(400, 'Invalid JSON') }
  }
  const server = http.createServer(async (req, res) => {
    const send = (status, data) => { res.writeHead(status, { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', ...(status===429?{'Retry-After':'60'}:{}) }); res.end(JSON.stringify(data)) }
    try {
      const ip = loopback(req.socket.remoteAddress) && typeof req.headers['x-real-ip'] === 'string' ? req.headers['x-real-ip'] : req.socket.remoteAddress
      rate(ip, 'request', rateLimit)
      const url = new URL(req.url, 'http://localhost'), path = url.pathname
      if (req.method === 'GET' && path === '/api/health') { db.prepare('SELECT 1').get(); return send(200,{ok:true}) }
      const match = path.match(/^\/api\/games\/([a-z0-9-]+)\/(scores|runs|qualify)$/)
      if (!match || !Object.hasOwn(registry,match[1])) throw failure(404,'Game or endpoint not found')
      const [,game, action] = match
      if (req.headers.origin && !origins.has(req.headers.origin)) throw failure(403,'Origin not allowed')
      if (req.method === 'GET' && action === 'scores') {
        const version = url.searchParams.has('scoreVersion') ? Number(url.searchParams.get('scoreVersion')) : currentVersion(game)
        if (!validVersion(game,version)) throw failure(400,'Invalid score version')
        return send(200,{scores:board(game,version),scoreVersion:version,order:'highest'})
      }
      if (req.method !== 'POST') throw failure(405,'Method not allowed')
      if (!origins.has(req.headers.origin)) throw failure(403,'Origin not allowed')
      const body = await bodyOf(req)
      if (action === 'runs') {
        if (!body || typeof body !== 'object' || Array.isArray(body)) throw failure(400,'Expected a JSON object')
        rate(ip,'run',tokenLimit)
        const runToken = randomBytes(32).toString('base64url'), created = now(), expires = created + DAY
        const version = body.scoreVersion ?? 1
        if (!validVersion(game,version)) throw failure(400,'Invalid score version')
        db.prepare('INSERT INTO runs(token_hash,game,created,expires,score_version) VALUES(?,?,?,?,?)').run(hash(runToken),game,created,expires,version)
        return send(201,{runToken,scoreVersion:version,expiresAt:new Date(expires).toISOString()})
      }
      if (body?.scoreVersion === 2 || action === 'qualify') {
        if (game !== 'last-engineer' || body?.scoreVersion !== 2) throw failure(400,'Invalid score version')
        if (typeof body.runToken !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(body.runToken)) throw failure(400,'Invalid run token')
        const tokenHash = hash(body.runToken)
        db.exec('BEGIN IMMEDIATE')
        try {
          const run = db.prepare('SELECT * FROM runs WHERE token_hash=? AND game=?').get(tokenHash,game)
          if (!run) throw failure(404,'Run not found; start a new run')
          if (run.score_version !== 2) throw failure(409,'Run score version differs')
          if (action === 'qualify') {
            if (run.expires <= now()) throw failure(410,'Run expired; start a new run')
            if (!Number.isSafeInteger(body.completedWaves) || body.completedWaves < 0 || body.completedWaves > 10000 || !Number.isFinite(body.combatSeconds) || body.combatSeconds < 0 || body.combatSeconds > 86400) throw failure(400,'Invalid combat metrics')
            const base = validate({...body,name:'Qualification',score:rankedScore(body.completedWaves,body.combatSeconds)})
            if (body.completedWaves > base.wave || body.combatSeconds > 2 * base.duration + 0.1) throw failure(400,'Inconsistent run metrics')
            const metrics = {score:base.score,wave:base.wave,kills:base.kills,headshots:base.headshots,duration:base.duration,completedWaves:body.completedWaves,combatSeconds:body.combatSeconds}
            const frozen = JSON.stringify(metrics)
            if (run.result_payload && run.result_payload !== frozen) throw failure(409,'Run metrics already finalized')
            db.prepare('UPDATE runs SET result_payload=? WHERE token_hash=?').run(frozen,tokenHash)
            const rank = candidateRank(game,2,metrics.score), qualified = metrics.completedWaves > 0 && rank <= registry[game].limit
            db.exec('COMMIT')
            return send(200,{scoreVersion:2,score:metrics.score,qualified,rank,limit:registry[game].limit,reason:metrics.completedWaves === 0 ? 'complete_wave' : qualified ? null : 'below_cutoff',scores:board(game,2)})
          }
          if (!run.result_payload) throw failure(409,'Qualify this run before submitting')
          const metrics = JSON.parse(run.result_payload)
          const payload = {...validate({...body,...metrics}),completedWaves:metrics.completedWaves,combatSeconds:metrics.combatSeconds}
          const serialized = JSON.stringify(payload)
          const previous = db.prepare('SELECT * FROM scores WHERE token_hash=?').get(tokenHash)
          if (previous) {
            if (previous.payload !== serialized) throw failure(409,'This run already has a different score')
            const response=accepted(previous,true);db.exec('COMMIT');return send(200,response)
          }
          if (run.expires <= now()) throw failure(410,'Run expired; start a new run')
          const rank = candidateRank(game,2,metrics.score)
          if (!metrics.completedWaves || rank > registry[game].limit) {
            db.exec('COMMIT');return send(200,{accepted:false,qualified:false,reason:metrics.completedWaves ? 'board_changed' : 'complete_wave',scoreVersion:2,rank,scores:board(game,2)})
          }
          const result=db.prepare('INSERT INTO scores(token_hash,game,name,score,wave,kills,headshots,duration,created,payload,score_version,completed_waves,combat_seconds) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)').run(tokenHash,game,payload.name,payload.score,payload.wave,payload.kills,payload.headshots,payload.duration,now(),serialized,2,metrics.completedWaves,metrics.combatSeconds)
          const response=accepted(db.prepare('SELECT * FROM scores WHERE id=?').get(result.lastInsertRowid));db.exec('COMMIT');return send(201,response)
        } catch(error) { db.exec('ROLLBACK');throw error }
      }
      if (body?.scoreVersion !== undefined && body.scoreVersion !== 1) throw failure(400,'Invalid score version')
      const payload = validate(body), serialized = JSON.stringify(payload), tokenHash = hash(body.runToken)
      db.exec('BEGIN IMMEDIATE')
      try {
        const run = db.prepare('SELECT * FROM runs WHERE token_hash=? AND game=?').get(tokenHash,game)
        if (!run) throw failure(404,'Run not found; start a new run')
        if (run.score_version !== 1) throw failure(409,'Run score version differs')
        const previous = db.prepare('SELECT * FROM scores WHERE token_hash=?').get(tokenHash)
        if (previous) {
          if (previous.payload !== serialized) throw failure(409,'This run already has a different score')
          const response = accepted(previous,true); db.exec('COMMIT'); return send(200,response)
        }
        if (run.expires <= now()) throw failure(410,'Run expired; start a new run')
        const result = db.prepare('INSERT INTO scores(token_hash,game,name,score,wave,kills,headshots,duration,created,payload) VALUES(?,?,?,?,?,?,?,?,?,?)').run(tokenHash,game,payload.name,payload.score,payload.wave,payload.kills,payload.headshots,payload.duration,now(),serialized)
        const response = accepted(db.prepare('SELECT * FROM scores WHERE id=?').get(result.lastInsertRowid)); db.exec('COMMIT'); return send(201,response)
      } catch(error) { db.exec('ROLLBACK'); throw error }
    } catch(error) { if (!error.status) console.error('[arcade] request failed:',error.message); send(error.status ?? 500,{error:error.status ? error.message : 'Unable to save score; please retry'}) }
  })
  server.requestTimeout=10000; server.headersTimeout=10000
  return { server, close: () => new Promise((resolve,reject)=>server.close(error=>{db.close();error?reject(error):resolve()})) }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const app = createArcade({dbPath:process.env.ARCADE_DB_PATH,origin:process.env.ARCADE_ORIGIN,devOrigin:process.env.ARCADE_DEV_ORIGIN})
  app.server.listen(Number(process.env.PORT ?? 3012),'127.0.0.1',()=>console.log('[arcade] listening on loopback'))
  for (const signal of ['SIGINT','SIGTERM']) process.on(signal,()=>app.close().then(()=>process.exit(0)))
}
