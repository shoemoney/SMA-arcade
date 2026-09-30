(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Q={},wt=[],Be=()=>{},no=()=>!1,Zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qn=e=>e.startsWith("onUpdate:"),ce=Object.assign,ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wl=Object.prototype.hasOwnProperty,K=(e,t)=>wl.call(e,t),L=Array.isArray,st=e=>dn(e)==="[object Map]",$n=e=>dn(e)==="[object Set]",Ba=e=>dn(e)==="[object Date]",U=e=>typeof e=="function",ie=e=>typeof e=="string",Ke=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",ro=e=>(V(e)||U(e))&&U(e.then)&&U(e.catch),ao=Object.prototype.toString,dn=e=>ao.call(e),Sl=e=>dn(e).slice(8,-1),io=e=>dn(e)==="[object Object]",ua=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qt=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},_l=/-\w/g,Ce=er(e=>e.replace(_l,t=>t.slice(1).toUpperCase())),Al=/\B([A-Z])/g,It=er(e=>e.replace(Al,"-$1").toLowerCase()),oo=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=er(e=>e?`on${oo(e)}`:""),Ue=(e,t)=>!Object.is(e,t),br=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},so=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Pl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ka;const tr=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?Cl(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ie(e)||V(e))return e}const El=/;(?![^(]*\))/g,Ol=/:([^]+)/,Il=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Cl(e){const t={};return e.replace(Il,n=>n.startsWith("/*")?"":n).split(El).forEach(n=>{if(n){const r=n.split(Ol);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function nr(e){let t="";if(ie(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=nr(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fl=fa(Tl);function lo(e){return!!e||e===""}function kl(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let a=0;r&&a<e.length;a++)r=rr(e[a],t[a],n);return r}function Va(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),a=new Uint8Array(r.length);for(const i of e){let o=-1;for(let s=0;s<r.length;s++)if(!a[s]&&rr(i,r[s],n)){o=s;break}if(o<0)return!1;a[o]=1}return!0}function Ml(e,t,n){let r=st(e),a=st(t);if(r||a||(r=$n(e),a=$n(t),r||a))return r&&a?Va(e,t,n):!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const s in e){const l=e.hasOwnProperty(s),u=t.hasOwnProperty(s);if(l&&!u||!l&&u||!rr(e[s],t[s],n))return!1}return String(e)===String(t)}function Ya(e,t,n,r){n||(n=[new Map,new Map]);const[a,i]=n;if(a.has(e)||i.has(t))return a.get(e)===t&&i.get(t)===e;a.set(e,t),i.set(t,e);const o=r(e,t,n);return a.delete(e),i.delete(t),o}function rr(e,t,n){if(e===t)return!0;let r=Ba(e),a=Ba(t);return r||a?r&&a?e.getTime()===t.getTime():!1:(r=Ke(e),a=Ke(t),r||a?e===t:(r=L(e),a=L(t),r||a?r&&a?Ya(e,t,n,kl):!1:(r=V(e),a=V(t),r||a?!r||!a?!1:Ya(e,t,n,Ml):String(e)===String(t))))}const fo=e=>!!(e&&e.__v_isRef===!0),_e=e=>ie(e)?e:e==null?"":L(e)||V(e)&&(e.toString===ao||!U(e.toString))?fo(e)?_e(e.value):JSON.stringify(e,co,2):String(e),co=(e,t)=>fo(t)?co(e,t.value):st(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[yr(r,i)+" =>"]=a,n),{})}:$n(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yr(n))}:Ke(t)?yr(t):V(t)&&!L(t)&&!io(t)?String(t):t,yr=(e,t="")=>{var n;return Ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let fe;class zl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&fe&&(fe.active?(this.parent=fe,this.index=(fe.scopes||(fe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const a=this.scopes.slice();for(t=0,n=a.length;t<n;t++)a[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=fe;try{return fe=this,t()}finally{fe=n}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){if(this._on>0&&--this._on===0){if(fe===this)fe=this.prevScope;else{let t=fe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const a=this.scopes.slice();for(n=0,r=a.length;n<r;n++)a[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function jl(){return fe}let Z;const xr=new WeakSet;class uo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&(fe.active?fe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xr.has(this)&&(xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||po(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ga(this),ho(this);const t=Z,n=Te;Z=this,Te=!0;try{return this.fn()}finally{go(this),Z=t,Te=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ha(t);this.deps=this.depsTail=void 0,Ga(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nr(this)&&this.run()}get dirty(){return Nr(this)}}let mo=0,Xt,Jt;function po(e,t=!1){if(e.flags|=8,t){e.next=Jt,Jt=e;return}e.next=Xt,Xt=e}function ma(){mo++}function pa(){if(--mo>0)return;if(Jt){let t=Jt;for(Jt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xt;){let t=Xt;for(Xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ho(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function go(e){let t,n=e.depsTail,r=n;for(;r;){const a=r.prevDep;r.version===-1?(r===n&&(n=a),ha(r),Nl(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}e.deps=t,e.depsTail=n}function Nr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(vo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===rn)||(e.globalVersion=rn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Nr(e))))return;e.flags|=2;const t=e.dep,n=Z,r=Te;Z=e,Te=!0;try{ho(e);const a=e.fn(e._value);(t.version===0||Ue(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{Z=n,Te=r,go(e),e.flags&=-3}}function ha(e,t=!1){const{dep:n,prevSub:r,nextSub:a}=e;if(r&&(r.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ha(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Te=!0;const bo=[];function Qe(){bo.push(Te),Te=!1}function et(){const e=bo.pop();Te=e===void 0?!0:e}function Ga(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let rn=0;class Rl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ga{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Z||!Te||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new Rl(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,yo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=r)}return n}trigger(t){this.version++,rn++,this.notify(t)}notify(t){ma();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pa()}}}function yo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)yo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Rr=new WeakMap,_t=Symbol(""),$r=Symbol(""),an=Symbol("");function de(e,t,n){if(Te&&Z){let r=Rr.get(e);r||Rr.set(e,r=new Map);let a=r.get(n);a||(r.set(n,a=new ga),a.map=r,a.key=n),a.track()}}function Ze(e,t,n,r,a,i){const o=Rr.get(e);if(!o){rn++;return}const s=l=>{l&&l.trigger()};if(ma(),t==="clear")o.forEach(s);else{const l=L(e),u=l&&ua(n);if(l&&n==="length"){const c=Number(r);o.forEach((m,v)=>{(v==="length"||v===an||!Ke(v)&&v>=c)&&s(m)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),u&&s(o.get(an)),t){case"add":l?u&&s(o.get("length")):(s(o.get(_t)),st(e)&&s(o.get($r)));break;case"delete":l||(s(o.get(_t)),st(e)&&s(o.get($r)));break;case"set":st(e)&&s(o.get(_t));break}}pa()}function Tt(e){const t=B(e);return t===e||(de(t,"iterate",an),Pe(e))?t:Ve(e)?lt(e)?t.map(n=>ft(Ee(n))):t.map(ft):t.map(Ee)}function ar(e){return de(e=B(e),"iterate",an),e}function De(e,t){return Ve(e)?ft(lt(e)?Ee(t):t):Ee(t)}const $l={__proto__:null,[Symbol.iterator](){return wr(this,Symbol.iterator,e=>De(this,e))},concat(...e){return Tt(this).concat(...e.map(t=>L(t)?Tt(t):t))},entries(){return wr(this,"entries",e=>(e[1]=De(this,e[1]),e))},every(e,t){return Ye(this,"every",e,t,void 0,arguments)},filter(e,t){return Ye(this,"filter",e,t,n=>n.map(r=>De(this,r)),arguments)},find(e,t){return Ye(this,"find",e,t,n=>De(this,n),arguments)},findIndex(e,t){return Ye(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ye(this,"findLast",e,t,n=>De(this,n),arguments)},findLastIndex(e,t){return Ye(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ye(this,"forEach",e,t,void 0,arguments)},includes(...e){return Sr(this,"includes",e)},indexOf(...e){return Sr(this,"indexOf",e)},join(e){return Tt(this).join(e)},lastIndexOf(...e){return Sr(this,"lastIndexOf",e)},map(e,t){return Ye(this,"map",e,t,void 0,arguments)},pop(){return Bt(this,"pop")},push(...e){return Bt(this,"push",e)},reduce(e,...t){return qa(this,"reduce",e,t)},reduceRight(e,...t){return qa(this,"reduceRight",e,t)},shift(){return Bt(this,"shift")},some(e,t){return Ye(this,"some",e,t,void 0,arguments)},splice(...e){return Bt(this,"splice",e)},toReversed(){return Tt(this).toReversed()},toSorted(e){return Tt(this).toSorted(e)},toSpliced(...e){return Tt(this).toSpliced(...e)},unshift(...e){return Bt(this,"unshift",e)},values(){return wr(this,"values",e=>De(this,e))}};function wr(e,t,n){const r=ar(e),a=r[t]();return r!==e&&!Pe(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const Dl=Array.prototype;function Ye(e,t,n,r,a,i){const o=ar(e),s=o!==e&&!Pe(e),l=o[t];if(l!==Dl[t]){const m=l.apply(e,i);return s?Ee(m):m}let u=n;o!==e&&(s?u=function(m,v){return n.call(this,De(e,m),v,e)}:n.length>2&&(u=function(m,v){return n.call(this,m,v,e)}));const c=l.call(o,u,r);return s&&a?a(c):c}function qa(e,t,n,r){const a=ar(e),i=a!==e&&!Pe(e);let o=n,s=!1;a!==e&&(i?(s=r.length===0,o=function(u,c,m){return s&&(s=!1,u=De(e,u)),n.call(this,u,De(e,c),m,e)}):n.length>3&&(o=function(u,c,m){return n.call(this,u,c,m,e)}));const l=a[t](o,...r);return s?De(e,l):l}function Sr(e,t,n){const r=B(e);de(r,"iterate",an);const a=r[t](...n);return(a===-1||a===!1)&&ya(n[0])?(n[0]=B(n[0]),r[t](...n)):a}function Bt(e,t,n=[]){Qe(),ma();const r=B(e)[t].apply(e,n);return pa(),et(),r}const Ll=fa("__proto__,__v_isRef,__isVue"),xo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function Ul(e){Ke(e)||(e=String(e));const t=B(this);return de(t,"has",e),t.hasOwnProperty(e)}class wo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Jl:Po:i?Ao:_o).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=L(t);if(!a){let l;if(o&&(l=$l[n]))return l;if(n==="hasOwnProperty")return Ul}const s=Reflect.get(t,n,me(t)?t:r);if((Ke(n)?xo.has(n):Ll(n))||(a||de(t,"get",n),i))return s;if(me(s)){const l=o&&ua(n)?s:s.value;return a&&V(l)?Lr(l):l}return V(s)?a?Lr(s):on(s):s}}class So extends wo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];const o=L(t)&&ua(n);if(!this._isShallow){const u=Ve(i);if(!Pe(r)&&!Ve(r)&&(i=B(i),r=B(r)),!o&&me(i)&&!me(r))return u||(i.value=r),!0}const s=o?Number(n)<t.length:K(t,n),l=Reflect.set(t,n,r,me(t)?t:a);return t===B(a)&&l&&(s?Ue(r,i)&&Ze(t,"set",n,r):Ze(t,"add",n,r)),l}deleteProperty(t,n){const r=K(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ze(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Ke(n)||!xo.has(n))&&de(t,"has",n),r}ownKeys(t){return de(t,"iterate",L(t)?"length":_t),Reflect.ownKeys(t)}}class Hl extends wo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wl=new So,Bl=new Hl,Kl=new So(!0);const Dr=e=>e,Sn=e=>Reflect.getPrototypeOf(e);function Vl(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=st(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),c=n?Dr:t?ft:Ee;return!t&&de(i,"iterate",l?$r:_t),ce(Object.create(u),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[c(m[0]),c(m[1])]:c(m),done:v}}})}}function _n(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yl(e,t){const n={get(a){const i=this.__v_raw,o=B(i),s=B(a);e||(Ue(a,s)&&de(o,"get",a),de(o,"get",s));const{has:l}=Sn(o),u=t?Dr:e?ft:Ee;if(l.call(o,a))return u(i.get(a));if(l.call(o,s))return u(i.get(s));i!==o&&i.get(a)},get size(){const a=this.__v_raw;return!e&&de(B(a),"iterate",_t),a.size},has(a){const i=this.__v_raw,o=B(i),s=B(a);return e||(Ue(a,s)&&de(o,"has",a),de(o,"has",s)),a===s?i.has(a):i.has(a)||i.has(s)},forEach(a,i){const o=this,s=o.__v_raw,l=B(s),u=t?Dr:e?ft:Ee;return!e&&de(l,"iterate",_t),s.forEach((c,m)=>a.call(i,u(c),u(m),o))}};return ce(n,e?{add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear")}:{add(a){const i=B(this),o=Sn(i),s=B(a),l=!t&&!Pe(a)&&!Ve(a)?s:a;return o.has.call(i,l)||Ue(a,l)&&o.has.call(i,a)||Ue(s,l)&&o.has.call(i,s)||(i.add(l),Ze(i,"add",l,l)),this},set(a,i){!t&&!Pe(i)&&!Ve(i)&&(i=B(i));const o=B(this),{has:s,get:l}=Sn(o);let u=s.call(o,a);u||(a=B(a),u=s.call(o,a));const c=l.call(o,a);return o.set(a,i),u?Ue(i,c)&&Ze(o,"set",a,i):Ze(o,"add",a,i),this},delete(a){const i=B(this),{has:o,get:s}=Sn(i);let l=o.call(i,a);l||(a=B(a),l=o.call(i,a)),s&&s.call(i,a);const u=i.delete(a);return l&&Ze(i,"delete",a,void 0),u},clear(){const a=B(this),i=a.size!==0,o=a.clear();return i&&Ze(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Vl(a,e,t)}),n}function va(e,t){const n=Yl(e,t);return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Gl={get:va(!1,!1)},ql={get:va(!1,!0)},Xl={get:va(!0,!1)};const _o=new WeakMap,Ao=new WeakMap,Po=new WeakMap,Jl=new WeakMap;function Zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function on(e){return Ve(e)?e:ba(e,!1,Wl,Gl,_o)}function Ql(e){return ba(e,!1,Kl,ql,Ao)}function Lr(e){return ba(e,!0,Bl,Xl,Po)}function ba(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=a.get(e);if(i)return i;const o=Zl(Sl(e));if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function lt(e){return Ve(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ve(e){return!!(e&&e.__v_isReadonly)}function Pe(e){return!!(e&&e.__v_isShallow)}function ya(e){return e?!!e.__v_raw:!1}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ef(e){return!K(e,"__v_skip")&&Object.isExtensible(e)&&so(e,"__v_skip",!0),e}const Ee=e=>V(e)?on(e):e,ft=e=>V(e)?Lr(e):e;function me(e){return e?e.__v_isRef===!0:!1}function _r(e){return tf(e,!1)}function tf(e,t){return me(e)?e:new nf(e,t)}class nf{constructor(t,n){this.dep=new ga,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:B(t),this._value=n?t:Ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Pe(t)||Ve(t);t=r?t:B(t),Ue(t,n)&&(this._rawValue=t,this._value=r?t:Ee(t),this.dep.trigger())}}function J(e){return me(e)?e.value:e}const rf={get:(e,t,n)=>t==="__v_raw"?e:J(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Eo(e){return lt(e)?e:new Proxy(e,rf)}class af{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return po(this,!0),!0}get value(){const t=this.dep.track();return vo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function of(e,t,n=!1){let r,a;return U(e)?r=e:(r=e.get,a=e.set),new af(r,a,n)}const An={},Dn=new WeakMap;let yt;function sf(e,t=!1,n=yt){if(n){let r=Dn.get(n);r||Dn.set(n,r=[]),r.push(e)}}function lf(e,t,n=Q){const{immediate:r,deep:a,once:i,scheduler:o,augmentJob:s,call:l}=n,u=O=>a?O:Pe(O)||a===!1||a===0?ot(O,1):ot(O);let c,m,v,y,k=!1,C=!1;if(me(e)?(m=()=>e.value,k=Pe(e)):lt(e)?(m=()=>u(e),k=!0):L(e)?(C=!0,k=e.some(O=>lt(O)||Pe(O)),m=()=>e.map(O=>{if(me(O))return O.value;if(lt(O))return u(O);if(U(O))return l?l(O,2):O()})):U(e)?t?m=l?()=>l(e,2):e:m=()=>{if(v){Qe();try{v()}finally{et()}}const O=yt;yt=c;try{return l?l(e,3,[y]):e(y)}finally{yt=O}}:m=Be,t&&a){const O=m,M=a===!0?1/0:a;m=()=>ot(O(),M)}const $=jl(),g=()=>{c.stop(),$&&$.active&&ca($.effects,c)};if(i&&t){const O=t;t=(...M)=>{const W=O(...M);return g(),W}}let p=C?new Array(e.length).fill(An):An;const E=O=>{if(!(!(c.flags&1)||!c.dirty&&!O))if(t){const M=c.run();if(O||a||k||(C?M.some((W,oe)=>Ue(W,p[oe])):Ue(M,p))){v&&v();const W=yt;yt=c;try{const oe=[M,p===An?void 0:C&&p[0]===An?[]:p,y];p=M,l?l(t,3,oe):t(...oe)}finally{yt=W}}}else c.run()};return s&&s(E),c=new uo(m),c.scheduler=o?()=>o(E,!1):E,y=O=>sf(O,!1,c),v=c.onStop=()=>{const O=Dn.get(c);if(O){if(l)l(O,4);else for(const M of O)M();Dn.delete(c)}},t?r?E(!0):p=c.run():o?o(E.bind(null,!0),!0):c.run(),g.pause=c.pause.bind(c),g.resume=c.resume.bind(c),g.stop=g,g}function ot(e,t=1/0,n){if(t<=0||!V(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,me(e))ot(e.value,t,n);else if(L(e))for(let r=0;r<e.length;r++)ot(e[r],t,n);else if($n(e)||st(e))e.forEach(r=>{ot(r,t,n)});else if(io(e)){for(const r in e)ot(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ot(e[r],t,n)}return e}function mn(e,t,n,r){try{return r?e(...r):e()}catch(a){ir(a,t,n)}}function Fe(e,t,n,r){if(U(e)){const a=mn(e,t,n,r);return a&&ro(a)&&a.catch(i=>{ir(i,t,n)}),a}if(L(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Fe(e[i],t,n,r));return a}}function ir(e,t,n,r=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Q;if(t){let s=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let m=0;m<c.length;m++)if(c[m](e,l,u)===!1)return}s=s.parent}if(i){Qe(),mn(i,null,10,[e,l,u]),et();return}}ff(e,n,a,r,o)}function ff(e,t,n,r=!0,a=!1){if(a)throw e;console.error(e)}const ge=[];let $e=-1;const zt=[];let it=null,kt=0;const Oo=Promise.resolve();let Ln=null;function cf(e){const t=Ln||Oo;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=$e+1,n=ge.length;for(;t<n;){const r=t+n>>>1,a=ge[r],i=sn(a);i<e||i===e&&a.flags&2?t=r+1:n=r}return t}function xa(e){if(!(e.flags&1)){const t=sn(e),n=ge[ge.length-1];!n||!(e.flags&2)&&t>=sn(n)?ge.push(e):ge.splice(uf(t),0,e),e.flags|=1,Io()}}function Io(){Ln||(Ln=Oo.then(To))}function df(e){if(!L(e))it&&e.id===-1?it.splice(kt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)zt.push(e[t]);Io()}function Xa(e,t,n=$e+1){for(;n<ge.length;n++){const r=ge[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Co(e){if(zt.length){const t=[...new Set(zt)].sort((n,r)=>sn(n)-sn(r));if(zt.length=0,it){for(let n=0;n<t.length;n++)it.push(t[n]);return}for(it=t,kt=0;kt<it.length;kt++){const n=it[kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}it=null,kt=0}}const sn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function To(e){try{for($e=0;$e<ge.length;$e++){const t=ge[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<ge.length;$e++){const t=ge[$e];t&&(t.flags&=-2)}$e=-1,ge.length=0,Co(),Ln=null,(ge.length||zt.length)&&To()}}let He=null,Fo=null;function Un(e){const t=He;return He=e,Fo=e&&e.type.__scopeId||null,t}function mf(e,t=He,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Bn(-1);const i=Un(t),o=At.length;let s;try{s=e(...a)}finally{for(let l=At.length;l>o;l--)rs();Un(i),r._d&&Bn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function gt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Qe(),Fe(l,n,8,[e.el,s,e,t]),et())}}function pf(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=dc();if(r||jt){let a=jt?jt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}const hf=Symbol.for("v-scx"),gf=()=>Tn(hf);function Fn(e,t,n){return ko(e,t,n)}function ko(e,t,n=Q){const{immediate:r,deep:a,flush:i,once:o}=n,s=ce({},n),l=t&&r||!t&&i!=="post";let u;if(cn){if(i==="sync"){const y=gf();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=Be,y.resume=Be,y.pause=Be,y}}const c=ve;s.call=(y,k,C)=>Fe(y,c,k,C);let m=!1;i==="post"?s.scheduler=y=>{be(y,c&&c.suspense)}:i!=="sync"&&(m=!0,s.scheduler=(y,k)=>{k?y():xa(y)}),s.augmentJob=y=>{t&&(y.flags|=4),m&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const v=lf(e,t,s);return cn&&(u?u.push(v):l&&v()),v}function vf(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Mo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=pn(this),s=ko(a,i.bind(r),n);return o(),s}function Mo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}const bf=Symbol("_vte"),or=e=>e.__isTeleport,Ar=Symbol("_leaveCb");function yf(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pt){t=n;break}}return t}function zo(e){if(!Sa(e))return or(e.type)&&e.children?yf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&U(n.default))return n.default()}}function wa(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;wa(or(n.type)&&zo(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xf(e,t){return U(e)?ce({name:e.name},t,{setup:e}):e}function jo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ja(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Hn=new WeakMap;function Zt(e,t,n,r,a=!1){if(L(e)){e.forEach((C,$)=>Zt(C,t&&(L(t)?t[$]:t),n,r,a));return}if(Qt(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zt(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Pa(r.component):r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===Q?s.refs={}:s.refs,m=s.setupState,v=B(m),y=m===Q?no:C=>Ja(c,C)?!1:K(v,C),k=(C,$)=>!($&&Ja(c,$));if(u!=null&&u!==l){if(Za(t),ie(u))c[u]=null,y(u)&&(m[u]=null);else if(me(u)){const C=t;k(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(U(l))mn(l,s,12,[o,c]);else{const C=ie(l),$=me(l);if(C||$){const g=()=>{if(e.f){const p=C?y(l)?m[l]:c[l]:k()||!e.k?l.value:c[e.k];if(a)L(p)&&ca(p,i);else if(L(p))p.includes(i)||p.push(i);else if(C)c[l]=[i],y(l)&&(m[l]=c[l]);else{const E=[i];k(l,e.k)&&(l.value=E),e.k&&(c[e.k]=E)}}else C?(c[l]=o,y(l)&&(m[l]=o)):$&&(k(l,e.k)&&(l.value=o),e.k&&(c[e.k]=o))};if(o){const p=()=>{g(),Hn.delete(e)};p.id=-1,Hn.set(e,p),be(p,n)}else Za(e),g()}}}function Za(e){const t=Hn.get(e);t&&(t.flags|=8,Hn.delete(e))}tr().requestIdleCallback;tr().cancelIdleCallback;const Qt=e=>!!e.type.__asyncLoader,Sa=e=>e.type.__isKeepAlive;function wf(e,t){No(e,"a",t)}function Sf(e,t){No(e,"da",t)}function No(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Sa(a.parent.vnode)&&_f(r,t,n,a),a=a.parent}}function _f(e,t,n,r){const a=sr(t,e,r,!0);Do(()=>{ca(r[t],a)},n)}function sr(e,t,n=ve,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Qe();const s=pn(n),l=Fe(t,n,e,o);return s(),et(),l});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=ve)=>{(!cn||e==="sp")&&sr(e,(...r)=>t(...r),n)},Af=rt("bm"),Ro=rt("m"),Pf=rt("bu"),Ef=rt("u"),$o=rt("bum"),Do=rt("um"),Of=rt("sp"),If=rt("rtg"),Cf=rt("rtc");function Tf(e,t=ve){sr("ec",e,t)}const Ff=Symbol.for("v-ndc");function Qa(e,t,n,r){let a;const i=n,o=L(e);if(o||ie(e)){const s=o&&lt(e);let l=!1,u=!1;s&&(l=!Pe(e),u=Ve(e),e=ar(e)),a=new Array(e.length);for(let c=0,m=e.length;c<m;c++)a[c]=t(l?u?ft(Ee(e[c])):Ee(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i)}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);a=new Array(s.length);for(let l=0,u=s.length;l<u;l++){const c=s[l];a[l]=t(e[c],c,l,i)}}else a=[];return a}const Ur=e=>e?is(e)?Pa(e):Ur(e.parent):null,en=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Uo(e),$forceUpdate:e=>e.f||(e.f=()=>{xa(e.update)}),$nextTick:e=>e.n||(e.n=cf.bind(e.proxy)),$watch:e=>vf.bind(e)}),Pr=(e,t)=>e!==Q&&!e.__isScriptSetup&&K(e,t),kf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Pr(r,t))return o[t]=1,r[t];if(a!==Q&&K(a,t))return o[t]=2,a[t];if(K(i,t))return o[t]=3,i[t];if(n!==Q&&K(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const u=en[t];let c,m;if(u)return t==="$attrs"&&de(e.attrs,"get",""),u(e);if((c=s.__cssModules)&&(c=c[t]))return c;if(n!==Q&&K(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,K(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Pr(a,t)?(a[t]=n,!0):r!==Q&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,props:i,type:o}},s){let l;return!!(n[s]||e!==Q&&s[0]!=="$"&&K(e,s)||Pr(t,s)||K(i,s)||K(r,s)||K(en,s)||K(a.config.globalProperties,s)||(l=o.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ei(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hr=!0;function Mf(e){const t=Uo(e),n=e.proxy,r=e.ctx;Hr=!1,t.beforeCreate&&ti(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:m,mounted:v,beforeUpdate:y,updated:k,activated:C,deactivated:$,beforeDestroy:g,beforeUnmount:p,destroyed:E,unmounted:O,render:M,renderTracked:W,renderTriggered:oe,errorCaptured:Se,serverPrefetch:Ct,expose:mt,inheritAttrs:Lt,components:bn,directives:yn,filters:hr}=t;if(u&&zf(u,r,null),o)for(const re in o){const X=o[re];U(X)&&(r[re]=X.bind(n))}if(a){const re=a.call(n,n);V(re)&&(e.data=on(re))}if(Hr=!0,i)for(const re in i){const X=i[re],pt=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Be,xn=!U(X)&&U(X.set)?X.set.bind(n):Be,ht=xt({get:pt,set:xn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Oe=>ht.value=Oe})}if(s)for(const re in s)Lo(s[re],r,n,re);if(l){const re=U(l)?l.call(n):l;Reflect.ownKeys(re).forEach(X=>{pf(X,re[X])})}c&&ti(c,e,"c");function pe(re,X){L(X)?X.forEach(pt=>re(pt.bind(n))):X&&re(X.bind(n))}if(pe(Af,m),pe(Ro,v),pe(Pf,y),pe(Ef,k),pe(wf,C),pe(Sf,$),pe(Tf,Se),pe(Cf,W),pe(If,oe),pe($o,p),pe(Do,O),pe(Of,Ct),L(mt))if(mt.length){const re=e.exposed||(e.exposed={});mt.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:pt=>n[X]=pt,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===Be&&(e.render=M),Lt!=null&&(e.inheritAttrs=Lt),bn&&(e.components=bn),yn&&(e.directives=yn),Ct&&jo(e)}function zf(e,t,n=Be){L(e)&&(e=Wr(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),me(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ti(e,t,n){Fe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lo(e,t,n,r){let a=r.includes(".")?Mo(n,r):()=>n[r];if(ie(e)){const i=t[e];U(i)&&Fn(a,i)}else if(U(e))Fn(a,e.bind(n));else if(V(e))if(L(e))e.forEach(i=>Lo(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&Fn(a,i,e)}}function Uo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Wn(l,u,o,!0)),Wn(l,t,o)),V(t)&&i.set(t,l),l}function Wn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Wn(e,i,n,!0),a&&a.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=jf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const jf={data:ni,props:ri,emits:ri,methods:Vt,computed:Vt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Vt,directives:Vt,watch:Rf,provide:ni,inject:Nf};function ni(e,t){return t?e?function(){return ce(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Nf(e,t){return Vt(Wr(e),Wr(t))}function Wr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ce(Object.create(null),e,t):t}function ri(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ce(Object.create(null),ei(e),ei(t??{})):t}function Rf(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Ho(){return{app:null,config:{isNativeTag:no,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function Df(e,t){return function(r,a=null){U(r)||(r=ce({},r)),a!=null&&!V(a)&&(a=null);const i=Ho(),o=new WeakSet,s=[];let l=!1;const u=i.app={_uid:$f++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bc,get config(){return i.config},set config(c){},use(c,...m){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(u,...m)):U(c)&&(o.add(c),c(u,...m))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,m){return m?(i.components[c]=m,u):i.components[c]},directive(c,m){return m?(i.directives[c]=m,u):i.directives[c]},mount(c,m,v){if(!l){const y=u._ceVNode||ae(r,a);return y.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),e(y,c,v),l=!0,u._container=c,c.__vue_app__=u,Pa(y.component)}},onUnmount(c){s.push(c)},unmount(){l&&(Fe(s,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,m){return i.provides[c]=m,u},runWithContext(c){const m=jt;jt=u;try{return c()}finally{jt=m}}};return u}}let jt=null;const Lf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ce(t)}Modifiers`]||e[`${It(t)}Modifiers`];function Uf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&Lf(r,t.slice(7));o&&(o.trim&&(a=n.map(c=>ie(c)?c.trim():c)),o.number&&(a=a.map(Pl)));let s,l=r[s=vr(t)]||r[s=vr(Ce(t))];!l&&i&&(l=r[s=vr(It(t))]),l&&Fe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Fe(u,e,6,a)}}const Hf=new WeakMap;function Wo(e,t,n=!1){const r=n?Hf:t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=u=>{const c=Wo(u,t,!0);c&&(s=!0,ce(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ce(o,i),V(e)&&r.set(e,o),o)}function lr(e,t){return!e||!Zn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,It(t))||K(e,t))}function ai(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:u,renderCache:c,props:m,data:v,setupState:y,ctx:k,inheritAttrs:C}=e,$=Un(e);let g,p;try{if(n.shapeFlag&4){const O=a||r,M=O;g=Le(u.call(M,O,c,m,y,v,k)),p=s}else{const O=t;g=Le(O.length>1?O(m,{attrs:s,slots:o,emit:l}):O(m,null)),p=t.props?s:Wf(s)}}catch(O){At.length=0,ir(O,e,1),g=ae(Pt)}let E=g;if(p&&C!==!1){const O=Object.keys(p),{shapeFlag:M}=E;O.length&&M&7&&(i&&O.some(Qn)&&(p=Bf(p,i)),E=Rt(E,p,!1,!0))}if(n.dirs&&(E=Rt(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition){const O=or(E.type)&&zo(E)||E;wa(O,n.transition)}return g=E,Un($),g}const Wf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},Bf=(e,t)=>{const n={};for(const r in e)(!Qn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ii(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const v=c[m];if(Bo(o,r,v)&&!lr(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ii(r,o,u):!0:!!o;return!1}function ii(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(Bo(t,e,i)&&!lr(n,i))return!0}return!1}function Bo(e,t,n){const r=e[n],a=t[n];return n==="style"&&V(r)&&V(a)?!rr(r,a):r!==a}function Vf({vnode:e,parent:t,suspense:n},r){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.suspense.vnode.el=a.el=r,e=a),a===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Ko={},Vo=()=>Object.create(Ko),Yo=e=>Object.getPrototypeOf(e)===Ko;function Yf(e,t,n,r=!1){const a={},i=Vo();e.propsDefaults=Object.create(null),Go(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ql(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let v=c[m];if(lr(e.emitsOptions,v))continue;const y=t[v];if(l)if(K(i,v))y!==i[v]&&(i[v]=y,u=!0);else{const k=Ce(v);a[k]=Br(l,s,k,y,e,!1)}else y!==i[v]&&(i[v]=y,u=!0)}}}else{Go(e,t,a,i)&&(u=!0);let c;for(const m in s)(!t||!K(t,m)&&((c=It(m))===m||!K(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=Br(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!K(t,m))&&(delete i[m],u=!0)}u&&Ze(e.attrs,"set","")}function Go(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(qt(l))continue;const u=t[l];let c;a&&K(a,c=Ce(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:lr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||Q;for(let c=0;c<i.length;c++){const m=i[c];n[m]=Br(a,l,m,u[m],e,!K(u,m))}}return o}function Br(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:u}=a;if(n in u)r=u[n];else{const c=pn(a);r=u[n]=l.call(null,t),c()}}else r=l;a.ce&&a.ce._setProp(n,r)}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}const qf=new WeakMap;function qo(e,t,n=!1){const r=n?qf:t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=m=>{l=!0;const[v,y]=qo(m,t,!0);ce(o,v),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return V(e)&&r.set(e,wt),wt;if(L(i))for(let c=0;c<i.length;c++){const m=Ce(i[c]);oi(m)&&(o[m]=Q)}else if(i)for(const c in i){const m=Ce(c);if(oi(m)){const v=i[c],y=o[m]=L(v)||U(v)?{type:v}:ce({},v),k=y.type;let C=!1,$=!0;if(L(k))for(let g=0;g<k.length;++g){const p=k[g],E=U(p)&&p.name;if(E==="Boolean"){C=!0;break}else E==="String"&&($=!1)}else C=U(k)&&k.name==="Boolean";y[0]=C,y[1]=$,(C||K(y,"default"))&&s.push(m)}}const u=[o,s];return V(e)&&r.set(e,u),u}function oi(e){return e[0]!=="$"&&!qt(e)}const _a=e=>e==="_"||e==="_ctx"||e==="$stable",Aa=e=>L(e)?e.map(Le):[Le(e)],Xf=(e,t,n)=>{if(t._n)return t;const r=mf((...a)=>Aa(t(...a)),n);return r._c=!1,r},Xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_a(a))continue;const i=e[a];if(U(i))t[a]=Xf(a,i,r);else if(i!=null){const o=Aa(i);t[a]=()=>o}}},Jo=(e,t)=>{const n=Aa(t);e.slots.default=()=>n},Zo=(e,t,n)=>{for(const r in t)(n||!_a(r))&&(e[r]=t[r])},Jf=(e,t,n)=>{const r=e.slots=Vo();if(e.vnode.shapeFlag&32){const a=t._;a?(Zo(r,t,n),n&&so(r,"_",a,!0)):Xo(t,r)}else t&&Jo(e,t)},Zf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:Zo(a,t,n):(i=!t.$stable,Xo(t,a)),o=t}else t&&(Jo(e,t),o={default:1});if(i)for(const s in a)!_a(s)&&o[s]==null&&delete a[s]},be=rc;function Qf(e){return ec(e)}function ec(e,t){const n=tr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:v,setScopeId:y=Be,insertStaticContent:k}=e,C=(f,d,h,_=null,b=null,w=null,T=void 0,I=null,P=!!d.dynamicChildren)=>{if(f===d)return;f&&!Kt(f,d)&&(_=wn(f),Oe(f,b,w,!0),f=null),d.patchFlag===-2&&(P=!1,d.dynamicChildren=null),d.dynamicChildren&&f&&f.dynamicChildren&&f.dynamicChildren.hasOnce&&(d.dynamicChildren===wt&&(d.dynamicChildren=[]),d.dynamicChildren.hasOnce=!0);const{type:x,ref:R,shapeFlag:F}=d;switch(x){case fr:$(f,d,h,_);break;case Pt:g(f,d,h,_);break;case kn:f==null&&p(d,h,_,T);break;case Ae:bn(f,d,h,_,b,w,T,I,P);break;default:F&1?M(f,d,h,_,b,w,T,I,P):F&6?yn(f,d,h,_,b,w,T,I,P):(F&64||F&128)&&x.process(f,d,h,_,b,w,T,I,P,Ht)}R!=null&&b?Zt(R,f&&f.ref,w,d||f,!d):R==null&&f&&f.ref!=null&&Zt(f.ref,null,w,f,!0)},$=(f,d,h,_)=>{if(f==null)r(d.el=s(d.children),h,_);else{const b=d.el=f.el;d.children!==f.children&&u(b,d.children)}},g=(f,d,h,_)=>{f==null?r(d.el=l(d.children||""),h,_):d.el=f.el},p=(f,d,h,_)=>{[f.el,f.anchor]=k(f.children,d,h,_,f.el,f.anchor)},E=({el:f,anchor:d},h,_)=>{let b;for(;f&&f!==d;)b=v(f),r(f,h,_),f=b;r(d,h,_)},O=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),a(f),f=h;a(d)},M=(f,d,h,_,b,w,T,I,P)=>{if(d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),f==null)W(d,h,_,b,w,T,I,P);else{const x=f.el&&f.el._isVueCE?f.el:null;try{x&&x._beginPatch(),Ct(f,d,b,w,T,I,P)}finally{x&&x._endPatch()}}},W=(f,d,h,_,b,w,T,I)=>{let P,x;const{props:R,shapeFlag:F,transition:j,dirs:D}=f;if(P=f.el=o(f.type,w,R&&R.is,R),F&8?c(P,f.children):F&16&&Se(f.children,P,null,_,b,Er(f,w),T,I),D&&gt(f,null,_,"created"),oe(P,f,f.scopeId,T,_),R){for(const G in R)G!=="value"&&!qt(G)&&i(P,G,null,R[G],w,_);"value"in R&&i(P,"value",null,R.value,w),(x=R.onVnodeBeforeMount)&&Ne(x,_,f)}D&&gt(f,null,_,"beforeMount");const H=tc(b,j);H&&j.beforeEnter(P),r(P,d,h),((x=R&&R.onVnodeMounted)||H||D)&&be(()=>{x&&Ne(x,_,f),H&&j.enter(P),D&&gt(f,null,_,"mounted")},b)},oe=(f,d,h,_,b)=>{if(h&&y(f,h),_)for(let w=0;w<_.length;w++)y(f,_[w]);if(b){let w=b.subTree;if(d===w||ns(w.type)&&(w.ssContent===d||w.ssFallback===d)){const T=b.vnode;oe(f,T,T.scopeId,T.slotScopeIds,b.parent)}}},Se=(f,d,h,_,b,w,T,I,P=0)=>{for(let x=P;x<f.length;x++){const R=f[x]=I?Je(f[x]):Le(f[x]);C(null,R,d,h,_,b,w,T,I)}},Ct=(f,d,h,_,b,w,T)=>{const I=d.el=f.el;let{patchFlag:P,dynamicChildren:x,dirs:R}=d;P|=f.patchFlag&16;const F=f.props||Q,j=d.props||Q;let D;if(h&&vt(h,!1),(D=j.onVnodeBeforeUpdate)&&Ne(D,h,d,f),R&&gt(d,f,h,"beforeUpdate"),h&&vt(h,!0),x&&(!f.dynamicChildren||f.dynamicChildren.length!==x.length)&&(P=0,T=!1,x=null),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&c(I,""),x?mt(f.dynamicChildren,x,I,h,_,Er(d,b),w):T||X(f,d,I,null,h,_,Er(d,b),w,!1),P>0){if(P&16)Lt(I,F,j,h,b);else if(P&2&&F.class!==j.class&&i(I,"class",null,j.class,b),P&4&&i(I,"style",F.style,j.style,b),P&8){const H=d.dynamicProps;for(let G=0;G<H.length;G++){const Y=H[G],se=F[Y],le=j[Y];(le!==se||Y==="value")&&i(I,Y,se,le,b,h)}}P&1&&f.children!==d.children&&c(I,d.children)}else!T&&x==null&&Lt(I,F,j,h,b);((D=j.onVnodeUpdated)||R)&&be(()=>{D&&Ne(D,h,d,f),R&&gt(d,f,h,"updated")},_)},mt=(f,d,h,_,b,w,T)=>{for(let I=0;I<d.length;I++){const P=f[I],x=d[I],R=P.el&&(P.type===Ae||!Kt(P,x)||P.shapeFlag&198)?m(P.el):h;C(P,x,R,null,_,b,w,T,!0)}},Lt=(f,d,h,_,b)=>{if(d!==h){if(d!==Q)for(const w in d)!qt(w)&&!(w in h)&&i(f,w,d[w],null,b,_);for(const w in h){if(qt(w))continue;const T=h[w],I=d[w];T!==I&&w!=="value"&&i(f,w,I,T,b,_)}"value"in h&&i(f,"value",d.value,h.value,b)}},bn=(f,d,h,_,b,w,T,I,P)=>{const x=d.el=f?f.el:s(""),R=d.anchor=f?f.anchor:s("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:D}=d;D&&(I=I?I.concat(D):D),f==null?(r(x,h,_),r(R,h,_),Se(d.children||[],h,R,b,w,T,I,P)):F>0&&F&64&&j&&f.dynamicChildren&&f.dynamicChildren.length===j.length?(mt(f.dynamicChildren,j,h,b,w,T,I),(d.key!=null||b&&d===b.subTree)&&Qo(f,d,!0)):X(f,d,h,R,b,w,T,I,P)},yn=(f,d,h,_,b,w,T,I,P)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?b.ctx.activate(d,h,_,T,P):hr(d,h,_,b,w,T,P):$a(f,d,P)},hr=(f,d,h,_,b,w,T)=>{const I=f.component=uc(f,_,b);if(Sa(f)&&(I.ctx.renderer=Ht),mc(I,!1,T),I.asyncDep){if(b&&b.registerDep(I,pe,T),!f.el){const P=I.subTree=ae(Pt);g(null,P,d,h),f.placeholder=P.el}}else pe(I,f,d,h,b,w,T)},$a=(f,d,h)=>{const _=d.component=f.component;if(Kf(f,d,h))if(_.asyncDep&&!_.asyncResolved){d.el=f.el,re(_,d,h);return}else _.next=d,_.update();else d.el=f.el,_.vnode=d},pe=(f,d,h,_,b,w,T)=>{const I=()=>{if(f.isMounted){let{next:F,bu:j,u:D,parent:H,vnode:G}=f;{const ze=es(f);if(ze){F&&(F.el=G.el,re(f,F,T)),ze.asyncDep.then(()=>{be(()=>{f.isUnmounted||x()},b)});return}}let Y=F,se;vt(f,!1),F?(F.el=G.el,re(f,F,T)):F=G,j&&br(j),(se=F.props&&F.props.onVnodeBeforeUpdate)&&Ne(se,H,F,G),vt(f,!0);const le=ai(f),Me=f.subTree;f.subTree=le,C(Me,le,m(Me.el),wn(Me),f,b,w),F.el=le.el,Y===null&&Vf(f,le.el),D&&be(D,b),(se=F.props&&F.props.onVnodeUpdated)&&be(()=>Ne(se,H,F,G),b)}else{let F;const{el:j,props:D}=d,{bm:H,m:G,parent:Y,root:se,type:le}=f,Me=Qt(d);vt(f,!1),H&&br(H),!Me&&(F=D&&D.onVnodeBeforeMount)&&Ne(F,Y,d),vt(f,!0);{se.ce&&se.ce._hasShadowRoot()&&se.ce._injectChildStyle(le,f.parent?f.parent.type:void 0);const ze=f.subTree=ai(f);C(null,ze,h,_,f,b,w),d.el=ze.el}if(G&&be(G,b),!Me&&(F=D&&D.onVnodeMounted)){const ze=d;be(()=>Ne(F,Y,ze),b)}(d.shapeFlag&256||Y&&Qt(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&be(f.a,b),f.isMounted=!0,d=h=_=null}};f.scope.on();const P=f.effect=new uo(I);f.scope.off();const x=f.update=P.run.bind(P),R=f.job=P.runIfDirty.bind(P);R.i=f,R.id=f.uid,P.scheduler=()=>xa(R),vt(f,!0),x()},re=(f,d,h)=>{d.component=f;const _=f.vnode.props;f.vnode=d,f.next=null,Gf(f,d.props,_,h),Zf(f,d.children,h),Qe(),Xa(f),et()},X=(f,d,h,_,b,w,T,I,P=!1)=>{const x=f&&f.children,R=f?f.shapeFlag:0,F=d.children,{patchFlag:j,shapeFlag:D}=d;if(j>0){if(j&128){xn(x,F,h,_,b,w,T,I,P);return}else if(j&256){pt(x,F,h,_,b,w,T,I,P);return}}D&8?(R&16&&Ut(x,b,w),F!==x&&c(h,F)):R&16?D&16?xn(x,F,h,_,b,w,T,I,P):Ut(x,b,w,!0):(R&8&&c(h,""),D&16&&Se(F,h,_,b,w,T,I,P))},pt=(f,d,h,_,b,w,T,I,P)=>{f=f||wt,d=d||wt;const x=f.length,R=d.length,F=Math.min(x,R);let j;for(j=0;j<F;j++){const D=d[j]=P?Je(d[j]):Le(d[j]);C(f[j],D,h,null,b,w,T,I,P)}x>R?Ut(f,b,w,!0,!1,F):Se(d,h,_,b,w,T,I,P,F)},xn=(f,d,h,_,b,w,T,I,P)=>{let x=0;const R=d.length;let F=f.length-1,j=R-1;for(;x<=F&&x<=j;){const D=f[x],H=d[x]=P?Je(d[x]):Le(d[x]);if(Kt(D,H))C(D,H,h,null,b,w,T,I,P);else break;x++}for(;x<=F&&x<=j;){const D=f[F],H=d[j]=P?Je(d[j]):Le(d[j]);if(Kt(D,H))C(D,H,h,null,b,w,T,I,P);else break;F--,j--}if(x>F){if(x<=j){const D=j+1,H=D<R?d[D].el:_;for(;x<=j;)C(null,d[x]=P?Je(d[x]):Le(d[x]),h,H,b,w,T,I,P),x++}}else if(x>j)for(;x<=F;)Oe(f[x],b,w,!0),x++;else{const D=x,H=x,G=new Map;for(x=H;x<=j;x++){const ye=d[x]=P?Je(d[x]):Le(d[x]);ye.key!=null&&G.set(ye.key,x)}let Y,se=0;const le=j-H+1;let Me=!1,ze=0;const Wt=new Array(le);for(x=0;x<le;x++)Wt[x]=0;for(x=D;x<=F;x++){const ye=f[x];if(se>=le){Oe(ye,b,w,!0);continue}let je;if(ye.key!=null)je=G.get(ye.key);else for(Y=H;Y<=j;Y++)if(Wt[Y-H]===0&&Kt(ye,d[Y])){je=Y;break}je===void 0?Oe(ye,b,w,!0):(Wt[je-H]=x+1,je>=ze?ze=je:Me=!0,C(ye,d[je],h,null,b,w,T,I,P),se++)}const Ua=Me?nc(Wt):wt;for(Y=Ua.length-1,x=le-1;x>=0;x--){const ye=H+x,je=d[ye],Ha=d[ye+1],Wa=ye+1<R?Ha.el||ts(Ha):_;Wt[x]===0?C(null,je,h,Wa,b,w,T,I,P):Me&&(Y<0||x!==Ua[Y]?ht(je,h,Wa,2):Y--)}}},ht=(f,d,h,_,b=null)=>{const{el:w,type:T,transition:I,children:P,shapeFlag:x}=f;if(x&6){ht(f.component.subTree,d,h,_);return}if(x&128){f.suspense.move(d,h,_);return}if(x&64){T.move(f,d,h,Ht);return}if(T===Ae){r(w,d,h);for(let F=0;F<P.length;F++)ht(P[F],d,h,_);r(f.anchor,d,h);return}if(T===kn){E(f,d,h);return}if(_!==2&&x&1&&I)if(_===0)I.persisted&&!w[Ar]?r(w,d,h):(I.beforeEnter(w),r(w,d,h),be(()=>I.enter(w),b));else{const{leave:F,delayLeave:j,afterLeave:D}=I,H=()=>{f.ctx.isUnmounted?a(w):r(w,d,h)},G=()=>{const Y=w._isLeaving||!!w[Ar];w._isLeaving&&w[Ar](!0),I.persisted&&!Y?H():F(w,()=>{H(),D&&D()})};j?j(w,H,G):G()}else r(w,d,h)},Oe=(f,d,h,_=!1,b=!1)=>{const{type:w,props:T,ref:I,children:P,dynamicChildren:x,shapeFlag:R,patchFlag:F,dirs:j,cacheIndex:D,memo:H}=f;if((F===-2||x&&x.hasOnce)&&(b=!1),I!=null&&(Qe(),Zt(I,null,h,f,!0),et()),D!=null&&(!f.ctx||f.ctx===d)&&(d.renderCache[D]=void 0),R&256){d.ctx.deactivate(f);return}const G=R&1&&j,Y=!Qt(f);let se;if(Y&&(se=T&&T.onVnodeBeforeUnmount)&&Ne(se,d,f),R&6)xl(f.component,h,_);else{if(R&128){f.suspense.unmount(h,_);return}G&&gt(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,h,Ht,_):x&&!x.hasOnce&&(w!==Ae||F>0&&F&64)?Ut(x,d,h,!1,!0):(w===Ae&&F&384||!b&&R&16)&&Ut(P,d,h),_&&Da(f)}const le=H!=null&&D==null;(Y&&(se=T&&T.onVnodeUnmounted)||G||le)&&be(()=>{se&&Ne(se,d,f),G&&gt(f,null,d,"unmounted"),le&&(f.el=null)},h)},Da=f=>{const{type:d,el:h,anchor:_,transition:b}=f;if(d===Ae){yl(h,_);return}if(d===kn){O(f),b&&!b.persisted&&b.afterLeave&&b.afterLeave();return}const w=()=>{a(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:I}=b,P=()=>T(h,w);I?I(f.el,w,P):P()}else w()},yl=(f,d)=>{let h;for(;f!==d;)h=v(f),a(f),f=h;a(d)},xl=(f,d,h)=>{const{bum:_,scope:b,job:w,subTree:T,um:I,m:P,a:x}=f;si(P),si(x),_&&br(_),b.stop(),w?(w.flags|=8,Oe(T,f,d,h)):f.vnode.el&&T&&(T.transition=f.vnode.transition,Oe(T,f,d,h)),I&&be(I,d),be(()=>{f.isUnmounted=!0},d)},Ut=(f,d,h,_=!1,b=!1,w=0)=>{for(let T=w;T<f.length;T++)Oe(f[T],d,h,_,b)},wn=f=>{if(f.shapeFlag&6)return wn(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=v(f.anchor||f.el),h=d&&d[bf];return h?v(h):d};let gr=!1;const La=(f,d,h)=>{let _;f==null?d._vnode&&(Oe(d._vnode,null,null,!0),_=d._vnode.component):C(d._vnode||null,f,d,null,null,null,h),d._vnode=f,gr||(gr=!0,Xa(_),Co(),gr=!1)},Ht={p:C,um:Oe,m:ht,r:Da,mt:hr,mc:Se,pc:X,pbc:mt,n:wn,o:e};return{render:La,hydrate:void 0,createApp:Df(La)}}function Er({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function tc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Je(a[i]),s.el=o.el),!n&&s.patchFlag!==-2&&Qo(o,s)),s.type===fr&&(s.patchFlag===-1&&(s=a[i]=Je(s)),s.el=o.el),s.type===Pt&&!s.el&&(s.el=o.el)}}function nc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function es(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:es(t)}function si(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ts(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ts(t.subTree):null}const ns=e=>e.__isSuspense;function rc(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):df(e)}const Ae=Symbol.for("v-fgt"),fr=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),kn=Symbol.for("v-stc"),At=[];let xe=null;function Ge(e=!1){At.push(xe=e?null:[])}function rs(){At.pop(),xe=At[At.length-1]||null}let ln=1;function Bn(e,t=!1){ln+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function ac(e){return e.dynamicChildren=ln>0?xe||wt:null,rs(),ln>0&&xe&&xe.push(e),e}function qe(e,t,n,r,a,i){return ac(S(e,t,n,r,a,i,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const as=({key:e})=>e??null,Mn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||me(e)||U(e)?{i:He,r:e,k:t,f:!!n}:e:null);function S(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&as(t),ref:t&&Mn(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:He};return s?(Vn(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),ln>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const ae=ic;function ic(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ff)&&(e=Pt),Kn(e)){const s=Rt(e,t,!0);return n&&Vn(s,n),ln>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag=-2,s}if(vc(e)&&(e=e.__vccOpts),t){t=oc(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=nr(s)),V(l)&&(ya(l)&&!L(l)&&(l=ce({},l)),t.style=da(l))}const o=ie(e)?1:ns(e)?128:or(e)?64:V(e)?4:U(e)?2:0;return S(e,t,n,r,a,o,i,!0)}function oc(e){return e?ya(e)||Yo(e)?ce({},e):e:null}function Rt(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:o,children:s,transition:l}=e,u=t?lc(a||{},t):a,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&as(u),ref:t&&t.ref?n&&i?L(i)?i.concat(Mn(t)):[i,Mn(t)]:Mn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&wa(c,l.clone(c)),c}function te(e=" ",t=0){return ae(fr,null,e,t)}function sc(e,t){const n=ae(kn,null,e);return n.staticCount=t,n}function Le(e){return e==null||typeof e=="boolean"?ae(Pt):L(e)?ae(Ae,null,e.slice()):Kn(e)?Je(e):ae(fr,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Vn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Vn(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Yo(t)?t._ctx=He:a===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(U(t)){if(r&65){Vn(e,{default:t});return}t={default:t,_ctx:He},n=32}else t=String(t),r&64?(n=16,t=[te(t)]):n=8;e.children=t,e.shapeFlag|=n}function lc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=nr([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))?t[a]=i?[].concat(i,o):o:o==null&&i==null&&!Qn(a)&&(t[a]=o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Fe(e,t,7,[n,r])}const fc=Ho();let cc=0;function uc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||fc,i={uid:cc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(r,a),emitsOptions:Wo(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Uf.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const dc=()=>ve||He;let Yn,fn;{const e=tr(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};Yn=t("__VUE_INSTANCE_SETTERS__",n=>ve=n),fn=t("__VUE_SSR_SETTERS__",n=>cn=n)}const pn=e=>{const t=ve;return Yn(e),e.scope.on(),()=>{e.scope.off(),Yn(t)}},li=()=>{ve&&ve.scope.off(),Yn(null)};function is(e){return e.vnode.shapeFlag&4}let cn=!1;function mc(e,t=!1,n=!1){t&&fn(t);const{props:r,children:a}=e.vnode,i=is(e);Yf(e,r,i,t),Jf(e,a,n||t);const o=i?pc(e,t):void 0;return t&&fn(!1),o}function pc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kf);const{setup:r}=n;if(r){Qe();const a=e.setupContext=r.length>1?gc(e):null,i=pn(e),o=mn(r,e,0,[e.props,a]),s=ro(o);if(et(),i(),(s||e.sp)&&!Qt(e)&&jo(e),s){if(o.then(li,li),t)return o.then(l=>{fn(!0);try{fi(e,l,t)}finally{fn(!1)}}).catch(l=>{ir(l,e,0)});e.asyncDep=o}else fi(e,o)}else os(e)}function fi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Eo(t)),os(e)}function os(e,t,n){const r=e.type;e.render||(e.render=r.render||Be);{const a=pn(e);Qe();try{Mf(e)}finally{et(),a()}}}const hc={get(e,t){return de(e,"get",""),e[t]}};function gc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,hc),slots:e.slots,emit:e.emit,expose:t}}function Pa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Eo(ef(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in en)return en[n](e)},has(t,n){return n in t||n in en}})):e.proxy}function vc(e){return U(e)&&"__vccOpts"in e}const xt=(e,t)=>of(e,t,cn);function zn(e,t,n){try{Bn(-1);const r=arguments.length;return r===2?V(t)&&!L(t)?Kn(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kn(n)&&(n=[n]),ae(e,t,n))}finally{Bn(1)}}const bc="3.5.43";let Kr;const ci=typeof window<"u"&&window.trustedTypes;if(ci)try{Kr=ci.createPolicy("vue",{createHTML:e=>e})}catch{}const ss=Kr?e=>Kr.createHTML(e):e=>e,yc="http://www.w3.org/2000/svg",xc="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,ui=Xe&&Xe.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?Xe.createElementNS(yc,e):t==="mathml"?Xe.createElementNS(xc,e):n?Xe.createElement(e,{is:n}):Xe.createElement(e);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ui.innerHTML=ss(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=ui.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sc=Symbol("_vtc");function _c(e,t,n){const r=e[Sc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const di=Symbol("_vod"),Ac=Symbol("_vsh"),Pc=Symbol(""),Ec=/(?:^|;)\s*display\s*:/;function Oc(e,t,n){const r=e.style,a=ie(n);let i=!1;if(n&&!a){if(t)if(ie(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Yt(r,s,"")}else for(const o in t)n[o]==null&&Yt(r,o,"");for(const o in n){o==="display"&&(i=!0);const s=n[o];s!=null?Cc(e,o,!ie(t)&&t?t[o]:void 0,s)||Yt(r,o,s):Yt(r,o,"")}}else if(a){if(t!==n){const o=r[Pc];o&&(n+=";"+o),r.cssText=n,i=Ec.test(n)}}else t&&e.removeAttribute("style");di in e&&(e[di]=i?r.display:"",e[Ac]&&(r.display="none"))}const Pn=/\s*!important$/;function Yt(e,t,n){if(L(n))n.forEach(r=>Yt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Pn.test(n)?e.setProperty(t,n.replace(Pn,""),"important"):e.setProperty(t,n);else{const r=Ic(e,t);Pn.test(n)?e.setProperty(It(r),n.replace(Pn,""),"important"):e[r]=n}}const mi=["Webkit","Moz","ms"],Or={};function Ic(e,t){const n=Or[t];if(n)return n;let r=Ce(t);if(r!=="filter"&&r in e)return Or[t]=r;r=oo(r);for(let a=0;a<mi.length;a++){const i=mi[a]+r;if(i in e)return Or[t]=i}return t}function Cc(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ie(r)&&n===r}const pi="http://www.w3.org/1999/xlink";function hi(e,t,n,r,a,i=Fl(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pi,t.slice(6,t.length)):e.setAttributeNS(pi,t,n):n==null||i&&!lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ke(n)?String(n):n)}function gi(e,t,n,r,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ss(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=lo(n):n==null&&s==="string"?(n="",o=!0):s==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(a||t)}function Tc(e,t,n,r){e.addEventListener(t,n,r)}function Fc(e,t,n,r){e.removeEventListener(t,n,r)}const vi=Symbol("_vei");function kc(e,t,n,r,a=null){const i=e[vi]||(e[vi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=jc(t);if(r){const u=i[t]=$c(r,a);Tc(e,s,u,l)}else o&&(Fc(e,s,o,l),i[t]=void 0)}}const Mc=/(Once|Passive|Capture)$/,zc=/^on:?(?:Once|Passive|Capture)$/;function jc(e){let t,n;for(;(n=e.match(Mc))&&!zc.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Ir=0;const Nc=Promise.resolve(),Rc=()=>Ir||(Nc.then(()=>Ir=0),Ir=Date.now());function $c(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const a=n.value;if(L(a)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=a.slice(),s=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&Fe(u,t,5,s)}}else Fe(a,t,5,[r])};return n.value=e,n.attached=Rc(),n}const bi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dc=(e,t,n,r,a,i)=>{const o=a==="svg";t==="class"?_c(e,r,o):t==="style"?Oc(e,n,r):Zn(t)?Qn(t)||kc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lc(e,t,r,o))?(gi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hi(e,t,r,o,i,t!=="value")):e._isVueCE&&(Uc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ie(r)))?gi(e,Ce(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hi(e,t,r,o))};function Lc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&bi(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return bi(t)&&ie(n)?!1:t in e}function Uc(e,t){const n=e._def.props;if(!n)return!1;const r=Ce(t);return Array.isArray(n)?n.some(a=>Ce(a)===r):Object.keys(n).some(a=>Ce(a)===r)}const Hc=ce({patchProp:Dc},wc);let yi;function Wc(){return yi||(yi=Qf(Hc))}const Bc=((...e)=>{const t=Wc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Vc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=n(a,!1,Kc(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function Kc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vc(e){return ie(e)?document.querySelector(e):e}const Yc="/brand/shoemoney-logo.webp",Gc="/brand/shoemoney-robot.webp";function Vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function qc(e){if(Array.isArray(e))return e}function Xc(e){if(Array.isArray(e))return Vr(e)}function Jc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ls(r.key),r)}}function Qc(e,t,n){return t&&Zc(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function jn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ea(e))||t){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw i}}}}function N(e,t,n){return(t=ls(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,o,s=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,a=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return s}}function nu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xi(Object(n),!0).forEach(function(r){N(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e,t){return qc(e)||tu(e,t)||Ea(e,t)||nu()}function ke(e){return Xc(e)||eu(e)||Ea(e)||ru()}function au(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ls(e){var t=au(e,"string");return typeof t=="symbol"?t:t+""}function Gn(e){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function Ea(e,t){if(e){if(typeof e=="string")return Vr(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vr(e,t):void 0}}var wi=function(){},Oa={},fs={},cs=null,us={mark:wi,measure:wi};try{typeof window<"u"&&(Oa=window),typeof document<"u"&&(fs=document),typeof MutationObserver<"u"&&(cs=MutationObserver),typeof performance<"u"&&(us=performance)}catch{}var iu=Oa.navigator||{},Si=iu.userAgent,_i=Si===void 0?"":Si,ct=Oa,ee=fs,Ai=cs,En=us;ct.document;var at=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",ds=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),On,ou=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,su=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ms={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},lu={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ps=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],ue="classic",hn="duotone",hs="sharp",gs="sharp-duotone",vs="chisel",bs="etch",ys="graphite",xs="jelly",ws="jelly-duo",Ss="jelly-fill",_s="mosaic",As="notdog",Ps="notdog-duo",Es="pixel",Os="slab",Is="slab-duo",Cs="slab-press",Ts="slab-press-duo",Fs="thumbprint",ks="utility",Ms="utility-duo",zs="utility-fill",js="vellum",Ns="whiteboard",fu="Classic",cu="Duotone",uu="Sharp",du="Sharp Duotone",mu="Chisel",pu="Etch",hu="Graphite",gu="Jelly",vu="Jelly Duo",bu="Jelly Fill",yu="Mosaic",xu="Notdog",wu="Notdog Duo",Su="Pixel",_u="Slab",Au="Slab Duo",Pu="Slab Press",Eu="Slab Press Duo",Ou="Thumbprint",Iu="Utility",Cu="Utility Duo",Tu="Utility Fill",Fu="Vellum",ku="Whiteboard",Rs=[ue,hn,hs,gs,vs,bs,ys,xs,ws,Ss,_s,As,Ps,Es,Os,Is,Cs,Ts,Fs,ks,Ms,zs,js,Ns];On={},N(N(N(N(N(N(N(N(N(N(On,ue,fu),hn,cu),hs,uu),gs,du),vs,mu),bs,pu),ys,hu),xs,gu),ws,vu),Ss,bu),N(N(N(N(N(N(N(N(N(N(On,_s,yu),As,xu),Ps,wu),Es,Su),Os,_u),Is,Au),Cs,Pu),Ts,Eu),Fs,Ou),ks,Iu),N(N(N(N(On,Ms,Cu),zs,Tu),js,Fu),Ns,ku);var Mu={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},zu={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ju=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Nu={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},$s=["fak","fa-kit","fakd","fa-kit-duotone"],Pi={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ru=["kit"],$u="kit",Du="kit-duotone",Lu="Kit",Uu="Kit Duotone";N(N({},$u,Lu),Du,Uu);var Hu={kit:{"fa-kit":"fak"}},Wu={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Bu={kit:{fak:"fa-kit"}},Ei={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},In,Cn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ku=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Vu="classic",Yu="duotone",Gu="sharp",qu="sharp-duotone",Xu="chisel",Ju="etch",Zu="graphite",Qu="jelly",ed="jelly-duo",td="jelly-fill",nd="mosaic",rd="notdog",ad="notdog-duo",id="pixel",od="slab",sd="slab-duo",ld="slab-press",fd="slab-press-duo",cd="thumbprint",ud="utility",dd="utility-duo",md="utility-fill",pd="vellum",hd="whiteboard",gd="Classic",vd="Duotone",bd="Sharp",yd="Sharp Duotone",xd="Chisel",wd="Etch",Sd="Graphite",_d="Jelly",Ad="Jelly Duo",Pd="Jelly Fill",Ed="Mosaic",Od="Notdog",Id="Notdog Duo",Cd="Pixel",Td="Slab",Fd="Slab Duo",kd="Slab Press",Md="Slab Press Duo",zd="Thumbprint",jd="Utility",Nd="Utility Duo",Rd="Utility Fill",$d="Vellum",Dd="Whiteboard";In={},N(N(N(N(N(N(N(N(N(N(In,Vu,gd),Yu,vd),Gu,bd),qu,yd),Xu,xd),Ju,wd),Zu,Sd),Qu,_d),ed,Ad),td,Pd),N(N(N(N(N(N(N(N(N(N(In,nd,Ed),rd,Od),ad,Id),id,Cd),od,Td),sd,Fd),ld,kd),fd,Md),cd,zd),ud,jd),N(N(N(N(In,dd,Nd),md,Rd),pd,$d),hd,Dd);var Ld="kit",Ud="kit-duotone",Hd="Kit",Wd="Kit Duotone";N(N({},Ld,Hd),Ud,Wd);var Bd={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Kd={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Yr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Vd=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ds=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Ku,Vd),Yd=["solid","regular","light","thin","duotone","brands","semibold"],Ls=[1,2,3,4,5,6,7,8,9,10],Gd=Ls.concat([11,12,13,14,15,16,17,18,19,20]),qd=["aw","fw","pull-left","pull-right"],Xd=[].concat(ke(Object.keys(Kd)),Yd,qd,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Cn.GROUP,Cn.SWAP_OPACITY,Cn.PRIMARY,Cn.SECONDARY]).concat(Ls.map(function(e){return"".concat(e,"x")})).concat(Gd.map(function(e){return"w-".concat(e)})),Jd={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},tt="___FONT_AWESOME___",Gr=16,Us="fa",Hs="svg-inline--fa",Et="data-fa-i2svg",qr="data-fa-pseudo-element",Zd="data-fa-pseudo-element-pending",Ia="data-prefix",Ca="data-icon",Oi="fontawesome-i2svg",Qd="async",em=["HTML","HEAD","STYLE","SCRIPT"],Ws=["::before","::after",":before",":after"],Bs=(function(){try{return!0}catch{return!1}})();function gn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var Ks=A({},ms);Ks[ue]=A(A(A(A({},{"fa-duotone":"duotone"}),ms[ue]),Pi.kit),Pi["kit-duotone"]);var tm=gn(Ks),Xr=A({},Nu);Xr[ue]=A(A(A(A({},{duotone:"fad"}),Xr[ue]),Ei.kit),Ei["kit-duotone"]);var Ii=gn(Xr),Jr=A({},Yr);Jr[ue]=A(A({},Jr[ue]),Bu.kit);var Ta=gn(Jr),Zr=A({},Bd);Zr[ue]=A(A({},Zr[ue]),Hu.kit);gn(Zr);var nm=ou,Vs="fa-layers-text",rm=su,am=A({},Mu);gn(am);var im=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Cr=lu,om=[].concat(ke(Ru),ke(Xd)),tn=ct.FontAwesomeConfig||{};function sm(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var fm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fm.forEach(function(e){var t=cr(e,2),n=t[0],r=t[1],a=lm(sm(n));a!=null&&(tn[r]=a)})}var Ys={styleDefault:"solid",familyDefault:ue,cssPrefix:Us,replacementClass:Hs,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var $t=A(A({},Ys),tn);$t.autoReplaceSvg||($t.observeMutations=!1);var z={};Object.keys(Ys).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){$t[e]=n,nn.forEach(function(r){return r(z)})},get:function(){return $t[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){$t.cssPrefix=t,nn.forEach(function(n){return n(z)})},get:function(){return $t.cssPrefix}});ct.FontAwesomeConfig=z;var nn=[];function cm(e){return nn.push(e),function(){nn.splice(nn.indexOf(e),1)}}var Ft=Gr,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function um(e){if(!(!e||!at)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var dm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ci(){for(var e=12,t="";e-- >0;)t+=dm[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Fa(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gs(e[n]),'" ')},"").trim()}function ur(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function pm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function hm(e){var t=e.transform,n=e.width,r=n===void 0?Gr:n,a=e.height,i=a===void 0?Gr:a,o="";return ds?o+="translate(".concat(t.x/Ft-r/2,"em, ").concat(t.y/Ft-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/Ft,"em), calc(-50% + ").concat(t.y/Ft,"em)) "),o+="scale(".concat(t.size/Ft*(t.flipX?-1:1),", ").concat(t.size/Ft*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var gm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function qs(){var e=Us,t=Hs,n=z.cssPrefix,r=z.replacementClass,a=gm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ti=!1;function Tr(){z.autoAddCss&&!Ti&&(um(qs()),Ti=!0)}var vm={mixout:function(){return{dom:{css:qs,insertCss:Tr}}},hooks:function(){return{beforeDOMElementCreation:function(){Tr()},beforeI2svg:function(){Tr()}}}},nt=ct||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var Ie=nt[tt],Xs=[],Js=function(){ee.removeEventListener("DOMContentLoaded",Js),qn=1,Xs.map(function(t){return t()})},qn=!1;at&&(qn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),qn||ee.addEventListener("DOMContentLoaded",Js));function bm(e){at&&(qn?setTimeout(e,0):Xs.push(e))}function vn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Gs(e):"<".concat(t," ").concat(mm(r),">").concat(i.map(vn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function Zs(e){return ke(e).length!==1?null:e.codePointAt(0).toString(16)}function ki(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ki(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,ki(t)):Ie.styles[e]=A(A({},Ie.styles[e]||{}),i),e==="fas"&&Qr("fa",t)}var un=Ie.styles,ym=Ie.shims,Qs=Object.keys(Ta),xm=Qs.reduce(function(e,t){return e[t]=Object.keys(Ta[t]),e},{}),Ma=null,el={},tl={},nl={},rl={},al={};function wm(e){return~om.indexOf(e)}function Sm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!wm(a)?a:null}var il=function(){var t=function(i){return Fr(un,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};el=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),tl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),al=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in un||z.autoFetchSvg,r=Fr(ym,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});nl=r.names,rl=r.unicodes,Ma=dr(z.styleDefault,{family:z.familyDefault})};cm(function(e){Ma=dr(e.styleDefault,{family:z.familyDefault})});il();function za(e,t){return(el[e]||{})[t]}function _m(e,t){return(tl[e]||{})[t]}function St(e,t){return(al[e]||{})[t]}function ol(e){return nl[e]||{prefix:null,iconName:null}}function Am(e){var t=rl[e],n=za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ut(){return Ma}var sl=function(){return{prefix:null,iconName:null,rest:[]}};function Pm(e){var t=ue,n=Qs.reduce(function(r,a){return r[a]="".concat(z.cssPrefix,"-").concat(a),r},{});return Rs.forEach(function(r){(e.includes(n[r])||e.some(function(a){return xm[r].includes(a)}))&&(t=r)}),t}function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,a=tm[r][e];if(r===hn&&!e)return"fad";var i=Ii[r][e]||Ii[r][a],o=e in Ie.styles?e:null,s=i||o||null;return s}function Em(e){var t=[],n=null;return e.forEach(function(r){var a=Sm(z.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Mi(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var zi=Ds.concat($s);function mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=Mi(e.filter(function(y){return zi.includes(y)})),o=Mi(e.filter(function(y){return!zi.includes(y)})),s=i.filter(function(y){return a=y,!ps.includes(y)}),l=cr(s,1),u=l[0],c=u===void 0?null:u,m=Pm(i),v=A(A({},Em(o)),{},{prefix:dr(c,{family:m})});return A(A(A({},v),Tm({values:e,family:m,styles:un,config:z,canonical:v,givenPrefix:a})),Om(r,a,v))}function Om(e,t,n){var r=n.prefix,a=n.iconName;if(e||!r||!a)return{prefix:r,iconName:a};var i=t==="fa"?ol(a):{},o=St(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!un.far&&un.fas&&!z.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var Im=Rs.filter(function(e){return e!==ue||e!==hn}),Cm=Object.keys(Yr).filter(function(e){return e!==ue}).map(function(e){return Object.keys(Yr[e])}).flat();function Tm(e){var t=e.values,n=e.family,r=e.canonical,a=e.givenPrefix,i=a===void 0?"":a,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=n===hn,m=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",y=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(m||v||y)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Im.includes(n)){var k=Object.keys(s).find(function($){return Cm.includes($)});if(k||u.autoFetchSvg){var C=ju.get(n).defaultShortPrefixId;r.prefix=C,r.iconName=St(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=ut()||"fas"),r}var Fm=(function(){function e(){Jc(this,e),this.definitions={}}return Qc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Qr(s,o[s]);var l=Ta[ue][s];l&&Qr(l,o[s]),il()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}])})(),ji=[],Mt={},Nt={},km=Object.keys(Nt);function Mm(e,t){var n=t.mixoutsTo;return ji=e,Mt={},Object.keys(Nt).forEach(function(r){km.indexOf(r)===-1&&delete Nt[r]}),ji.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Gn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(i[o])})}r.provides&&r.provides(Nt)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function dt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ut();if(t)return t=St(n,t)||t,Fi(ll.definitions,n,t)||Fi(Ie.styles,n,t)}var ll=new Fm,zm=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ot("noAuto")},jm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(Ot("beforeI2svg",t),dt("pseudoElements2svg",t),dt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,bm(function(){Rm({autoReplaceSvgRoot:n}),Ot("watch",t)})}},Nm={icon:function(t){if(t===null)return null;if(Gn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=dr(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(nm))){var a=mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ut(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ut();return{prefix:i,iconName:St(i,t)||t}}}},we={noAuto:zm,config:z,dom:jm,parse:Nm,library:ll,findIconDefinition:ta,toHtml:vn},Rm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ie.styles).length>0||z.autoFetchSvg)&&at&&z.autoReplaceSvg&&we.dom.i2svg({node:r})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return vn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $m(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=ur(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Dm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function Lm(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,m=c===void 0?!1:c,v=r.found?r:n,y=v.width,k=v.height,C=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(M){return u.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(u.classes).join(" "),$={children:[],attributes:A(A({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:u.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(k)})};!Lm(u.attributes)&&!u.attributes["aria-hidden"]&&($.attributes["aria-hidden"]="true"),m&&($.attributes[Et]="");var g=A(A({},$),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:A({},u.styles)}),p=r.found&&n.found?dt("generateAbstractMask",g)||{children:[],attributes:{}}:dt("generateAbstractIcon",g)||{children:[],attributes:{}},E=p.children,O=p.attributes;return g.children=E,g.attributes=O,s?Dm(g):$m(g)}function Ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=A(A({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Et]="");var u=A({},i.styles);ka(a)&&(u.transform=hm({transform:a,width:n,height:r}),u["-webkit-transform"]=u.transform);var c=ur(u);c.length>0&&(l.style=c);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),m}function Um(e){var t=e.content,n=e.extra,r=A(A({},n.attributes),{},{class:n.classes.join(" ")}),a=ur(n.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var kr=Ie.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),a=cr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Cr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Cr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Cr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Hm={found:!1,width:512,height:512};function Wm(e,t){!Bs&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=ut()),new Promise(function(r,a){if(n==="fa"){var i=ol(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kr[t]&&kr[t][e]){var o=kr[t][e];return r(na(o))}Wm(e,t),r(A(A({},Hm),{},{icon:z.showMissingIcons&&e?dt("missingIconAbstract")||{}:{}}))})}var Ri=function(){},aa=z.measurePerformance&&En&&En.mark&&En.measure?En:{mark:Ri,measure:Ri},Gt='FA "7.3.1"',Bm=function(t){return aa.mark("".concat(Gt," ").concat(t," begins")),function(){return fl(t)}},fl=function(t){aa.mark("".concat(Gt," ").concat(t," ends")),aa.measure("".concat(Gt," ").concat(t),"".concat(Gt," ").concat(t," begins"),"".concat(Gt," ").concat(t," ends"))},Na={begin:Bm,end:fl},Nn=function(){};function $i(e){var t=e.getAttribute?e.getAttribute(Et):null;return typeof t=="string"}function Km(e){var t=e.getAttribute?e.getAttribute(Ia):null,n=e.getAttribute?e.getAttribute(Ca):null;return t&&n}function Vm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Ym(){if(z.autoReplaceSvg===!0)return Rn.replace;var e=Rn[z.autoReplaceSvg];return e||Rn.replace}function Gm(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function qm(e){return ee.createElement(e)}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gm:qm:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cl(o,{ceFn:r}))}),a}function Xm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cl(a),n)}),n.getAttribute(Et)===null&&z.keepOriginalSource){var r=ee.createComment(Xm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Fa(n).indexOf(z.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return vn(s)}).join(`
`);n.setAttribute(Et,""),n.innerHTML=o}};function Di(e){e()}function ul(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=Di;z.mutateApproach===Qd&&(r=ct.requestAnimationFrame||Di),r(function(){var a=Ym(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ra=!1;function dl(){Ra=!0}function ia(){Ra=!1}var Xn=null;function Li(e){if(Ai&&z.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;Xn=new Ai(function(u){if(!Ra){var c=ut();Dt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$i(m.addedNodes[0])&&(z.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&z.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&$i(m.target)&&~im.indexOf(m.attributeName))if(m.attributeName==="class"&&Km(m.target)){var v=mr(Fa(m.target)),y=v.prefix,k=v.iconName;m.target.setAttribute(Ia,y||c),k&&m.target.setAttribute(Ca,k)}else Vm(m.target)&&a(m.target)})}}),at&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jm(){Xn&&Xn.disconnect()}function Zm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Qm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=mr(Fa(e));return a.prefix||(a.prefix=ut()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=_m(a.prefix,e.innerText)||za(a.prefix,Zs(e.innerText))),!a.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ep(e){var t=Dt(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return t}function tp(){return{iconName:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qm(e),r=n.iconName,a=n.prefix,i=n.rest,o=ep(e),s=ea("parseNodeAttributes",{},e),l=t.styleParser?Zm(e):[];return A({iconName:r,prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var np=Ie.styles;function ml(e){var t=z.autoReplaceSvg==="nest"?Ui(e,{styleParser:!1}):Ui(e);return~t.extra.classes.indexOf(Vs)?dt("generateLayersText",e,t):dt("generateSvgReplacementMutation",e,t)}function rp(){return[].concat(ke($s),ke(Ds))}function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Oi,"-").concat(m))},a=function(m){return n.remove("".concat(Oi,"-").concat(m))},i=z.autoFetchSvg?rp():ps.concat(Object.keys(np));i.includes("fa")||i.push("fa");var o=[".".concat(Vs,":not([").concat(Et,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Et,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),u=s.reduce(function(c,m){try{var v=ml(m);v&&c.push(v)}catch(y){Bs||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(v){ul(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(v){l(),m(v)})})}function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ml(e).then(function(n){n&&ul([n],t)})}function ip(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ta(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ta(a||{})),e(r,A(A({},n),{},{mask:a}))}}var op=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,m=n.classes,v=m===void 0?[]:m,y=n.attributes,k=y===void 0?{}:y,C=n.styles,$=C===void 0?{}:C;if(t){var g=t.prefix,p=t.iconName,E=t.icon;return pr(A({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),ja({icons:{main:na(E),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:A(A({},We),a),symbol:o,maskId:c,extra:{attributes:k,styles:$,classes:v}})})}},sp={mixout:function(){return{icon:ip(op)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hi,n.nodeCallback=ap,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Hi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(m,v){Promise.all([ra(a,i),l.iconName?ra(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var k=cr(y,2),C=k[0],$=k[1];m([n,ja({icons:{main:C,mask:$},prefix:i,iconName:a,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ur(s);l.length>0&&(a.style=l);var u;return ka(o)&&(u=dt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},lp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return pr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(ke(i)).join(" ")},children:o}]})}}}},fp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var a=r.classes,i=a===void 0?[]:a,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return pr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Um({content:n.toString(),extra:{attributes:s,styles:u,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(ke(i))}})})}}}},cp={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return pr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Ni({content:n,transform:A(A({},We),i),extra:{attributes:u,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(ke(s))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.transform,i=r.extra,o=null,s=null;if(ds){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([n,Ni({content:n.innerHTML,width:o,height:s,transform:a,extra:i,watchable:!0})])}}},pl=new RegExp('"',"ug"),Wi=[1105920,1112319],Bi=A(A(A(A({},{FontAwesome:{normal:"fas",400:"fas"}}),zu),Jd),Wu),oa=Object.keys(Bi).reduce(function(e,t){return e[t.toLowerCase()]=Bi[t],e},{}),up=Object.keys(oa).reduce(function(e,t){var n=oa[t];return e[t]=n[900]||ke(Object.entries(n))[0][1],e},{});function dp(e){var t=e.replace(pl,"");return Zs(ke(t)[0]||"")}function mp(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),r=n.replace(pl,""),a=r.codePointAt(0),i=a>=Wi[0]&&a<=Wi[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function pp(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(oa[n]||{})[a]||up[n]}function Ki(e,t){var n="".concat(Zd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),o=i.filter(function(W){return W.getAttribute(qr)===t})[0],s=ct.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(rm),c=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&m!=="none"&&m!==""){var v=s.getPropertyValue("content"),y=pp(l,c),k=dp(v),C=u[0].startsWith("FontAwesome"),$=mp(s),g=za(y,k),p=g;if(C){var E=Am(k);E.iconName&&E.prefix&&(g=E.iconName,y=E.prefix)}if(g&&!$&&(!o||o.getAttribute(Ia)!==y||o.getAttribute(Ca)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var O=tp(),M=O.extra;M.attributes[qr]=t,ra(g,y).then(function(W){var oe=ja(A(A({},O),{},{icons:{main:W,mask:sl()},prefix:y,iconName:p,extra:M,watchable:!0})),Se=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Se,e.firstChild):e.appendChild(Se),Se.outerHTML=oe.map(function(Ct){return vn(Ct)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function hp(e){return Promise.all([Ki(e,"::before"),Ki(e,"::after")])}function gp(e){return e.parentNode!==document.head&&!~em.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var vp=function(t){return!!t&&Ws.some(function(n){return t.includes(n)})},bp=function(t){if(!t)return[];var n=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var a=jn(r),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;if(vp(o)){var s=Ws.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&n.add(s)}}}catch(l){a.e(l)}finally{a.f()}return n};function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(at){var n;if(t)n=e;else if(z.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var r=new Set,a=jn(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=jn(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=bp(u.selectorText),m=jn(c),v;try{for(m.s();!(v=m.n()).done;){var y=v.value;r.add(y)}}catch(C){m.e(C)}finally{m.f()}}}catch(C){s.e(C)}finally{s.f()}}catch(C){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){a.e(C)}finally{a.f()}if(!r.size)return;var k=Array.from(r).join(", ");try{n=e.querySelectorAll(k)}catch{}}return new Promise(function(C,$){var g=Dt(n).filter(gp).map(hp),p=Na.begin("searchPseudoElements");dl(),Promise.all(g).then(function(){p(),ia(),C()}).catch(function(){p(),ia(),$()})})}}var yp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;z.searchPseudoElements&&Vi(a)}}},Yi=!1,xp={mixout:function(){return{dom:{unwatch:function(){dl(),Yi=!0}}}},hooks:function(){return{bootstrap:function(){Li(ea("mutationObserverCallbacks",{}))},noAuto:function(){Jm()},watch:function(n){var r=n.observeMutationsRoot;Yi?ia():Li(ea("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},wp={mixout:function(){return{parse:{transform:function(n){return Gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:v};return{tag:"g",attributes:A({},y.outer),children:[{tag:"g",attributes:A({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),y.path)}]}]}}}},Mr={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Sp(e){return e.tag==="g"?e.children:[e]}var _p={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?mr(a.split(" ").map(function(o){return o.trim()})):sl();return i.prefix||(i.prefix=ut()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,m=o.width,v=o.icon,y=pm({transform:l,containerWidth:m,iconWidth:u}),k={tag:"rect",attributes:A(A({},Mr),{},{fill:"white"})},C=c.children?{children:c.children.map(qi)}:{},$={tag:"g",attributes:A({},y.inner),children:[qi(A({tag:c.tag,attributes:A(A({},c.attributes),y.path)},C))]},g={tag:"g",attributes:A({},y.outer),children:[$]},p="mask-".concat(s||Ci()),E="clip-".concat(s||Ci()),O={tag:"mask",attributes:A(A({},Mr),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Sp(v)},O]};return r.push(M,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(p,")")},Mr)}),{children:r,attributes:a}}}},Ap={provides:function(t){var n=!1;ct.matchMedia&&(n=ct.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Pp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ep=[vm,sp,lp,fp,cp,yp,xp,wp,_p,Ap,Pp];Mm(Ep,{mixoutsTo:we});we.noAuto;we.config;we.library;we.dom;var sa=we.parse;we.findIconDefinition;we.toHtml;var Op=we.icon;we.layer;we.text;we.counter;function la(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ip(e){if(Array.isArray(e))return la(e)}function q(e,t,n){return(t=zp(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xi(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zr(e,t){if(e==null)return{};var n,r,a=Fp(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Fp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function kp(e){return Ip(e)||Cp(e)||jp(e)||Tp()}function Mp(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zp(e){var t=Mp(e,"string");return typeof t=="symbol"?t:t+""}function Jn(e){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function jp(e,t){if(e){if(typeof e=="string")return la(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?la(e,t):void 0}}function jr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?q({},e,t):{}}function Np(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},q(q(q(q(q(q(q(q(q(q(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),q(q(q(q(q(q(q(q(q(q(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto),"fa-canvas-square",e.canvasSquare),"fa-canvas-roomy",e.canvasRoomy),"fa-flip-360",e.flip360),"fa-buzz",e.buzz),"fa-float",e.float),"fa-jello",e.jello),q(q(q(q(q(t,"fa-spin-snap",e.spinSnap),"fa-spin-snap-4",e.spinSnap4),"fa-spin-snap-8",e.spinSnap8),"fa-swing",e.swing),"fa-wag",e.wag));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var Rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl={exports:{}};(function(e){(function(t){var n=function(g,p,E){if(!u(p)||m(p)||v(p)||y(p)||l(p))return p;var O,M=0,W=0;if(c(p))for(O=[],W=p.length;M<W;M++)O.push(n(g,p[M],E));else{O={};for(var oe in p)Object.prototype.hasOwnProperty.call(p,oe)&&(O[g(oe,E)]=n(g,p[oe],E))}return O},r=function(g,p){p=p||{};var E=p.separator||"_",O=p.split||/(?=[A-Z])/;return g.split(O).join(E)},a=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(p,E){return E?E.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var p=a(g);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(g,p){return r(g,p).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},u=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},m=function(g){return s.call(g)=="[object Date]"},v=function(g){return s.call(g)=="[object RegExp]"},y=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},C=function(g,p){var E=p&&"process"in p?p.process:p;return typeof E!="function"?g:function(O,M){return E(O,g,M)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,p){return n(C(a,p),g)},decamelizeKeys:function(g,p){return n(C(o,p),g,p)},pascalizeKeys:function(g,p){return n(C(i,p),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Rp)})(hl);var $p=hl.exports,Dp=["gradientFill"],Lp=["class","style"],Up=["type","stops","id"];function Hp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=$p.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Wp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Bp(e,t){return zn("stop",ne({key:"".concat(t,"-").concat(e.offset),offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function gl(e){if(typeof e=="string")return e;var t=(e.children||[]).map(gl);return e.tag==="path"&&e.attributes&&"fill"in e.attributes?ne(ne({},e),{},{attributes:ne(ne({},e.attributes),{},{fill:void 0}),children:t}):ne(ne({},e),{},{children:t})}function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=t.gradientFill,a=r===void 0?null:r,i=zr(t,Dp),o=!!a||"fill"in n,s=o?gl(e):e,l=(s.children||[]).map(function(O){return vl(O,{},{})}),u=Object.keys(s.attributes||{}).reduce(function(O,M){var W=s.attributes[M];switch(M){case"class":O.class=Wp(W);break;case"style":O.style=Hp(W);break;default:O.attrs[M]=W}return O},{attrs:{},class:{},style:{}});n.class;var c=n.style,m=c===void 0?{}:c,v=zr(n,Lp);if(a&&a.id&&(a.type==="linear"||a.type==="radial")){var y=a.type,k=a.stops,C=k===void 0?[]:k,$=a.id,g=zr(a,Up),p=y==="linear"?"linearGradient":"radialGradient",E=zn(p,ne(ne({},g),{},{id:$}),C.map(Bp));return zn(s.tag,ne(ne(ne(ne({},i),{},{class:u.class,style:ne(ne({},u.style),m)},u.attrs),v),{},{fill:"url(#".concat($,")")}),[E].concat(kp(l)))}return zn(e.tag,ne(ne(ne({},i),{},{class:u.class,style:ne(ne({},u.style),m)},u.attrs),v),l)}var bl=!1;try{bl=!0}catch{}function Ji(){if(!bl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zi(e){if(e&&Jn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(sa.icon)return sa.icon(e);if(e===null)return null;if(Jn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Re=xf({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(t){return typeof t.id!="string"||!t.id?(console.warn("FontAwesomeIcon: gradientFill.id must be a non-empty string"),!1):t.type!=="linear"&&t.type!=="radial"?(console.warn('FontAwesomeIcon: gradientFill.type must be "linear" or "radial"'),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=xt(function(){return Zi(t.icon)}),i=xt(function(){return jr("classes",Np(t))}),o=xt(function(){return jr("transform",typeof t.transform=="string"?sa.transform(t.transform):t.transform)}),s=xt(function(){return jr("mask",Zi(t.mask))}),l=xt(function(){var c=ne(ne(ne(ne({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return c.title=t.title,c.titleId=t.titleId,Op(a.value,c)});Fn(l,function(c){if(!c)return Ji("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0}),t.gradientFill&&t.symbol&&Ji("gradientFill is not supported when symbol is true and will be ignored");var u=xt(function(){return l.value?vl(l.value.abstract[0],{gradientFill:t.symbol?null:t.gradientFill},r):null});return function(){return u.value}}});var Qi={prefix:"fas",iconName:"trophy",icon:[512,512,[127942],"f091","M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z"]},Kp={prefix:"fas",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},eo={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},Vp={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},Yp={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},Gp={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},qp={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]},to={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]};const Xp=[{slug:"last-engineer",title:"Last Engineer",description:"One engineer. No backup. An overrun subway and one very bad night. How long can you hold the line?",preview:"/brand/last-engineer-gameplay.gif",poster:"/brand/last-engineer-gameplay.png",href:"/last-engineer/",genre:"Survival shooter"},{slug:"smtd",title:"ShoeMoney Tower Defense",description:"Six soldiers. Thirty waves. One outpost. Build your squad, upgrade your firepower, and call in an airstrike when the line is about to break.",genre:"Military tower defense",preview:"/brand/smtd-gameplay.gif",poster:"/brand/smtd-gameplay.png",href:"/smtd/"},{slug:"shoplifter",title:"Shoplifter",description:"Twenty-four people. Eight seats. Every trip you make, the other side sends more. Kills score nothing here — only who you bring home.",genre:"Helicopter rescue",preview:"/brand/shoplifter-gameplay.gif",poster:"/brand/shoplifter-gameplay.png",href:"/shoplifter/"},{slug:"smduel",title:"smduel",description:"One car. One driver. Sixteen cities and a highway that wants you dead. Bolt on the armor, pick your guns, and win the arena before the road wins you.",genre:"Vehicular combat RPG",preview:"/brand/smduel-gameplay.gif",poster:"/brand/smduel-gameplay.png",href:"/smduel/"},{slug:"shoeateka",title:"Shoeateka",description:"A cliff, a fortress, and no weapon but your hands. Six strikes across three heights, guards who read what you keep throwing, and one bow you should not skip. How far up can you get?",genre:"Martial-arts action",preview:"/brand/shoeateka-gameplay.gif",poster:"/brand/shoeateka-gameplay.png",href:"/shoeateka/"},{slug:"karate-kids",title:"SM Karate Kids: Asmongold vs HasanAbi",description:"Two sticks, no buttons, one clean point. Asmongold in white, HasanAbi in red: read the wind-up, close the distance, and land the strike before he does. No health bars. First to two points takes the bout.",genre:"Tournament karate",preview:"/brand/karate-kids-gameplay.gif",poster:"/brand/karate-kids-gameplay.png",href:"/karate-kids/"},{slug:"reactorfall",title:"Reactorfall",description:"Defend the last reactor against endless mutant waves. Build specialized towers, command your squad, and push your score higher with every stand.",genre:"Endless tower defense",preview:"/brand/reactorfall-gameplay.gif",poster:"/brand/reactorfall-gameplay.png",href:"/reactorfall/"},{slug:"skat3",title:"SKAT3",description:"Port Carverton: 137 spots and a million boards to sell. Build speed down the Spillway, kickflip the half-pipe, grind the rainbow rails — and every trick is named after what the deck actually did, not what you asked it to do.",genre:"Arcade skateboarding",preview:"/brand/skat3-gameplay.gif",poster:"/brand/skat3-gameplay.png",href:"/skat3/"}],bt=Xp;async function Jp(e,t){let n=!1,r=0,a=!0,i,o;const s={x:.5,y:.5},l=u=>{s.x=u.clientX/innerWidth,s.y=u.clientY/innerHeight};try{const u=await navigator.gpu?.requestAdapter({powerPreference:"low-power"});if(!u)throw new Error("WebGPU unavailable");i=await u.requestDevice();const c=e.getContext("webgpu"),m=navigator.gpu.getPreferredCanvasFormat();c.configure({device:i,format:m,alphaMode:"premultiplied"});const v=i.createShaderModule({code:`
      struct Params { size: vec2f, time: f32, pad: f32, pointer: vec2f, pad2: vec2f }
      @group(0) @binding(0) var<uniform> u: Params;
      @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
        var p = array<vec2f, 3>(vec2f(-1.,-1.),vec2f(3.,-1.),vec2f(-1.,3.));
        return vec4f(p[i],0.,1.);
      }
      @fragment fn fs(@builtin(position) p: vec4f) -> @location(0) vec4f {
        let uv = p.xy / u.size;
        let aspect = u.size.x / u.size.y;
        let center = vec2f(.64 + (u.pointer.x-.5)*.035,.40+(u.pointer.y-.5)*.025);
        let q = (uv-center)*vec2f(aspect,1.);
        let r = length(q);
        let a = atan2(q.y,q.x);
        let tunnel = 1. / max(r,.055);
        let rings = pow(max(0.,sin(tunnel*1.65-u.time*.42)),30.)*.075;
        let spokes = pow(max(0.,cos(a*16.+sin(u.time*.13)*.3)),55.)*.042;
        let fade = smoothstep(.08,.30,r)*(1.-smoothstep(.55,1.5,r));
        let cyan = vec3f(.04,.67,.92);
        let amber = vec3f(1.,.48,.08);
        let haze = exp(-r*3.8)*.085;
        let beam = exp(-abs(q.y+.10*sin(q.x*2.+u.time*.18))*40.)*.025;
        let color = vec3f(.022,.035,.054)+cyan*((rings+spokes)*fade+haze+beam)+amber*exp(-length(q-vec2f(-.7,.25))*5.)*.04;
        return vec4f(color,1.);
      }
    `}),y=i.createRenderPipeline({layout:"auto",vertex:{module:v,entryPoint:"vs"},fragment:{module:v,entryPoint:"fs",targets:[{format:m}]},primitive:{topology:"triangle-list"}}),k=i.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),C=i.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:k}}]}),$=()=>{const M=Math.min(devicePixelRatio,1.25);e.width=Math.round(innerWidth*M),e.height=Math.round(innerHeight*M),a=!0};o=new ResizeObserver($),o.observe(document.documentElement),$(),window.addEventListener("pointermove",l,{passive:!0});let g=0,p=0,E=0;e.dataset.backend="webgpu";const O=M=>{if(n||(r=requestAnimationFrame(O),document.hidden||M-p<32)||(t()||(g+=Math.min((M-p)/1e3,.1)),p=M,t()&&E>0&&!a))return;i.queue.writeBuffer(k,0,new Float32Array([e.width,e.height,g,0,s.x,s.y,0,0]));const W=i.createCommandEncoder(),oe=W.beginRenderPass({colorAttachments:[{view:c.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:.02,g:.03,b:.05,a:1}}]});oe.setPipeline(y),oe.setBindGroup(0,C),oe.draw(3),oe.end(),i.queue.submit([W.finish()]),a=!1,e.dataset.frames=String(++E)};r=requestAnimationFrame(O),i.lost.then(()=>{n||(e.dataset.backend="fallback",e.style.opacity="0",cancelAnimationFrame(r))})}catch{e.dataset.backend="fallback",e.style.opacity="0"}return()=>{n=!0,cancelAnimationFrame(r),o?.disconnect(),window.removeEventListener("pointermove",l),i?.destroy()}}const Zp={class:"site-header"},Qp={"aria-label":"Main navigation"},eh=["aria-pressed","aria-label"],th={class:"hero","aria-labelledby":"hero-title"},nh={class:"hero-copy"},rh={class:"primary-button",href:"#games"},ah={class:"robot-stage","aria-hidden":"true"},ih={class:"signal-badge"},oh={id:"games",class:"games-section","aria-labelledby":"games-title"},sh={class:"section-heading"},lh={class:"game-count"},fh=["aria-labelledby"],ch={class:"game-feature"},uh={class:"screen-top"},dh={class:"screen-picture"},mh=["src","alt","onError"],ph={class:"preview-badge"},hh={class:"game-description"},gh={class:"eyebrow"},vh=["id"],bh=["href"],yh=["aria-label"],xh={class:"score-heading"},wh={class:"trophy-frame"},Sh={"aria-live":"polite",class:"score-content"},_h={key:0,class:"score-state"},Ah={key:1,class:"score-state"},Ph=["onClick"],Eh={key:2,class:"empty-board"},Oh={class:"empty-trophy"},Ih=["href"],Ch={key:3,class:"scores"},Th={class:"rank"},Fh={class:"player-name"},kh={class:"open-source"},Mh={class:"code-badge"},zh={class:"secondary-button",href:"https://github.com/shoemoney?q=SMA-"},jh={style:{"font-size":"20px","line-height":"1.5"}},Nh={__name:"App",setup(e){const t=_r(null),n=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"America/Chicago"}).format(new Date),r=_r(matchMedia("(prefers-reduced-motion: reduce)").matches),a=_r(r.value),i=on(Object.fromEntries(bt.map(g=>[g.slug,{status:"loading",rows:[]}]))),o=on({});let s=()=>{};const l=new Set,u=new Set,c=typeof BroadcastChannel=="function"?new BroadcastChannel("shoemoney-arcade-scores"):null,m=()=>{document.visibilityState!=="hidden"&&bt.forEach(g=>y(g.slug))},v=g=>{bt.some(p=>p.slug===g.data?.game)&&y(g.data.game)};async function y(g){if(u.has(g))return;u.add(g),i[g].rows.length||(i[g].status="loading");const p=new AbortController;l.add(p);const E=setTimeout(()=>p.abort(),1e4);try{const O=await fetch(`/api/games/${encodeURIComponent(g)}/scores`,{signal:p.signal});if(!O.ok)throw new Error("Scores unavailable");const M=await O.json();if(!Array.isArray(M.scores))throw new Error("Invalid scores");i[g].rows=M.scores.filter(W=>typeof W.name=="string"&&Number.isFinite(W.score)).slice(0,10),i[g].status="ready"}catch{i[g].status="error"}finally{clearTimeout(E),l.delete(p),u.delete(g)}}function k(){a.value=!a.value,document.documentElement.classList.toggle("motion-paused",a.value)}function C(g){if(a.value||g.pointerType==="touch")return;const p=g.currentTarget.getBoundingClientRect();g.currentTarget.style.setProperty("--tilt-x",`${(g.clientY-p.top-p.height/2)/75}deg`),g.currentTarget.style.setProperty("--tilt-y",`${-(g.clientX-p.left-p.width/2)/90}deg`)}function $(g){g.currentTarget.style.setProperty("--tilt-x","0deg"),g.currentTarget.style.setProperty("--tilt-y","0deg")}return Ro(async()=>{document.documentElement.classList.toggle("motion-paused",a.value),bt.forEach(g=>y(g.slug)),window.addEventListener("focus",m),document.addEventListener("visibilitychange",m),c?.addEventListener("message",v),s=await Jp(t.value,()=>a.value)}),$o(()=>{window.removeEventListener("focus",m),document.removeEventListener("visibilitychange",m),c?.close(),s(),l.forEach(g=>g.abort())}),(g,p)=>(Ge(),qe(Ae,null,[S("canvas",{ref_key:"field",ref:t,class:"gpu-field","aria-hidden":"true"},null,512),p[31]||(p[31]=S("div",{class:"ambient-grid","aria-hidden":"true"},null,-1)),S("header",Zp,[p[2]||(p[2]=S("a",{class:"brand",href:"/","aria-label":"ShoeMoney Arcade home"},[S("img",{class:"brand-stamp",src:Yc,alt:"",width:"161",height:"130"}),S("span",null,[S("strong",null,"SHOEMONEY"),S("span",{class:"brand-sub"},"ARCADE")])],-1)),S("nav",Qp,[p[0]||(p[0]=S("a",{href:"#games"},"The games",-1)),p[1]||(p[1]=S("a",{class:"home-link",href:"https://www.shoemoney.com"},"ShoeMoney.com",-1)),S("button",{class:"motion-button",onClick:k,"aria-pressed":a.value,"aria-label":a.value?"Resume ambient animation":"Pause ambient animation"},[ae(J(Re),{icon:a.value?J(Yp):J(Kp)},null,8,["icon"]),S("span",null,_e(a.value?"Motion off":"Motion on"),1)],8,eh)])]),S("main",null,[S("section",th,[S("div",nh,[p[4]||(p[4]=S("p",{class:"eyebrow"},[S("span",{class:"live-light"}),te(" THE SHOEMONEY ARCADE")],-1)),p[5]||(p[5]=S("h1",{id:"hero-title"},[te("ALL GAME."),S("br"),S("span",null,"NO QUARTERS.")],-1)),p[6]||(p[6]=S("p",{class:"hero-description"},[te("Built for the love of the game."),S("br"),te("Played for the bragging rights.")],-1)),S("a",rh,[ae(J(Re),{icon:J(to)},null,8,["icon"]),p[3]||(p[3]=te(" Pick your game",-1))]),p[7]||(p[7]=S("p",{class:"hero-note"},"Free to play. Right in your browser.",-1))]),S("div",ah,[p[9]||(p[9]=sc('<div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="robot-halo"></div><img class="robot" src="'+Gc+'" alt="" width="1400" height="1126"><div class="robot-ground"></div>',5)),S("div",ih,[ae(J(Re),{icon:J(qp)},null,8,["icon"]),p[8]||(p[8]=te(" CHALLENGE ACCEPTED",-1))])]),p[10]||(p[10]=S("div",{class:"hero-bottom"},[S("span",null,"HUMAN SKILL. MACHINE ATTITUDE."),S("span",{class:"quarter-line"}),S("span",null,"EST. SHOEMONEY")],-1))]),S("section",oh,[S("div",sh,[p[11]||(p[11]=S("div",null,[S("p",{class:"eyebrow"},"STEP UP. STAND OUT."),S("h2",{id:"games-title"},[te("Choose your challenge"),S("span",null,".")])],-1)),S("span",lh,_e(J(bt).length===1?"One game. Zero excuses.":`${J(bt).length} games. Zero excuses.`),1)]),(Ge(!0),qe(Ae,null,Qa(J(bt),(E,O)=>(Ge(),qe("article",{key:E.slug,class:nr(["game-row",{reverse:O%2}]),"aria-labelledby":`${E.slug}-title`},[S("div",ch,[S("div",{class:"game-screen",onPointermove:C,onPointerleave:$},[S("div",uh,[S("span",null,[p[12]||(p[12]=S("span",{class:"live-light"},null,-1)),te(" "+_e(E.genre),1)]),p[13]||(p[13]=S("span",null,"SHOEMONEY ORIGINAL",-1))]),S("div",dh,[S("img",{src:a.value||o[E.slug]?E.poster:E.preview,alt:`${E.title} gameplay`,width:"1280",height:"720",onError:M=>o[E.slug]=!0},null,40,mh),p[14]||(p[14]=S("div",{class:"screen-vignette"},null,-1)),S("div",ph,[ae(J(Re),{icon:J(Vp)},null,8,["icon"]),te(" "+_e(a.value||o[E.slug]?"Gameplay capture":"Gameplay preview"),1)])]),p[15]||(p[15]=S("div",{class:"screen-base"},[S("span",{class:"screen-dot"}),S("span",null,"PLAY HARD. LEAVE YOUR MARK."),S("span",{class:"screen-dot"})],-1))],32),S("div",hh,[S("p",gh,_e(E.genre),1),S("h3",{id:`${E.slug}-title`},_e(E.title),9,vh),S("p",null,_e(E.description),1),S("a",{class:"primary-button play-button",href:E.href},[ae(J(Re),{icon:J(to)},null,8,["icon"]),p[16]||(p[16]=te(" Test your skill",-1))],8,bh)])]),S("aside",{class:"score-panel","aria-label":`${E.title} high scores`},[S("div",xh,[S("span",wh,[ae(J(Re),{icon:J(Qi)},null,8,["icon"])]),p[17]||(p[17]=S("div",null,[S("p",{class:"eyebrow"},"PUT YOUR NAME UP HERE"),S("h3",null,"The score board")],-1))]),p[22]||(p[22]=S("div",{class:"board-title"},[S("span",null,"TOP 10 SCORES"),S("span",null,"YOUR NEXT TARGET")],-1)),S("div",Sh,[i[E.slug].status==="loading"?(Ge(),qe("p",_h,"Warming up the score board…")):i[E.slug].status==="error"?(Ge(),qe("div",Ah,[p[19]||(p[19]=S("p",null,"The score board is taking a breather.",-1)),S("button",{class:"text-button",onClick:M=>y(E.slug)},[ae(J(Re),{icon:J(Gp)},null,8,["icon"]),p[18]||(p[18]=te(" Try again",-1))],8,Ph)])):i[E.slug].rows.length?(Ge(),qe("ol",Ch,[(Ge(!0),qe(Ae,null,Qa(i[E.slug].rows,(M,W)=>(Ge(),qe("li",{key:`${M.createdAt}-${W}`},[S("span",Th,_e(String(W+1).padStart(2,"0")),1),S("span",Fh,_e(M.name),1),S("strong",null,_e(new Intl.NumberFormat().format(M.score)),1)]))),128))])):(Ge(),qe("div",Eh,[S("span",Oh,[ae(J(Re),{icon:J(Qi)},null,8,["icon"])]),p[20]||(p[20]=S("h4",null,[te("A clean slate."),S("br"),te("A new legend.")],-1)),p[21]||(p[21]=S("p",null,"No scores yet. Your first run could be the one that starts it all.",-1)),S("a",{href:E.href,class:"text-button"},"Set the first score",8,Ih)]))]),p[23]||(p[23]=S("p",{class:"board-footer"},[te("Reach the top ten. Enter your name."),S("br"),te("Give the next player something to beat."),S("br"),S("span",{class:"score-integrity"},"Scores are reported by each player’s browser.")],-1))],8,yh)],10,fh))),128))]),S("section",kh,[S("div",Mh,[ae(J(Re),{icon:J(eo)},null,8,["icon"])]),p[25]||(p[25]=S("div",null,[S("p",{class:"eyebrow"},"MADE TO PLAY. OPEN TO BUILD."),S("h2",null,[te("Great games start with"),S("br"),te("“what if?”")]),S("p",null,[te("This is our playground. More games are on the way."),S("br"),te("Choose a mission. Make it yours.")])],-1)),S("a",zh,[ae(J(Re),{icon:J(eo)},null,8,["icon"]),p[24]||(p[24]=te(" Get the source",-1))])])]),S("footer",null,[p[28]||(p[28]=S("a",{class:"footer-brand",href:"https://www.shoemoney.com"},[te("SHOEMONEY"),S("span",null,"ARCADE")],-1)),p[29]||(p[29]=S("p",null,"Free games. Serious bragging rights.",-1)),S("p",jh,[p[26]||(p[26]=te("Copyright Jeremy Schoemaker & ",-1)),p[27]||(p[27]=S("a",{href:"https://shoemoney.com"},"ShoeMoney",-1)),te(" INC "+_e(J(n)),1)]),p[30]||(p[30]=S("a",{href:"#games"},"Back to the games",-1))])],64))}};Bc(Nh).mount("#app");
