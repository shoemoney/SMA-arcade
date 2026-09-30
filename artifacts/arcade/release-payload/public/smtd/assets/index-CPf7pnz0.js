const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./manual-PE-rZPrM.js","./charts-BM9AjD9k.js","./content-AKTh8b_U.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./content-AKTh8b_U.js";import{S as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,l as _,m as ee,n as te,o as v,p as ne,r as re,s as ie,t as ae,u as y,v as oe,x as b,y as se}from"./three-BL8-NcfE.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ce(e){if(Array.isArray(e))return e}function S(e){if(Array.isArray(e))return x(e)}function le(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,me(r.key),r)}}function ue(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ge(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function T(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function D(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function de(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pe(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e,t){return ce(e)||D(e,t)||ge(e,t)||de()}function A(e){return S(e)||E(e)||ge(e)||fe()}function j(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function me(e){var t=j(e,`string`);return typeof t==`symbol`?t:t+``}function he(e){"@babel/helpers - typeof";return he=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},he(e)}function ge(e,t){if(e){if(typeof e==`string`)return x(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}var _e=function(){},M={},N={},P=null,F={mark:_e,measure:_e};try{typeof window<`u`&&(M=window),typeof document<`u`&&(N=document),typeof MutationObserver<`u`&&(P=MutationObserver),typeof performance<`u`&&(F=performance)}catch{}var I=(M.navigator||{}).userAgent,L=I===void 0?``:I,R=M,z=N,ve=P,B=F;R.document;var V=!!z.documentElement&&!!z.head&&typeof z.addEventListener==`function`&&typeof z.createElement==`function`,ye=~L.indexOf(`MSIE`)||~L.indexOf(`Trident/`),be,xe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Se=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ce={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},we={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Te=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],H=`classic`,Ee=`duotone`,De=`sharp`,Oe=`sharp-duotone`,ke=`chisel`,Ae=`etch`,je=`graphite`,Me=`jelly`,Ne=`jelly-duo`,Pe=`jelly-fill`,Fe=`mosaic`,Ie=`notdog`,Le=`notdog-duo`,Re=`pixel`,ze=`slab`,Be=`slab-duo`,Ve=`slab-press`,He=`slab-press-duo`,Ue=`thumbprint`,We=`utility`,Ge=`utility-duo`,Ke=`utility-fill`,qe=`vellum`,Je=`whiteboard`,Ye=`Classic`,Xe=`Duotone`,Ze=`Sharp`,Qe=`Sharp Duotone`,$e=`Chisel`,et=`Etch`,tt=`Graphite`,nt=`Jelly`,rt=`Jelly Duo`,it=`Jelly Fill`,at=`Mosaic`,ot=`Notdog`,st=`Notdog Duo`,ct=`Pixel`,lt=`Slab`,ut=`Slab Duo`,dt=`Slab Press`,ft=`Slab Press Duo`,pt=`Thumbprint`,mt=`Utility`,ht=`Utility Duo`,gt=`Utility Fill`,_t=`Vellum`,vt=`Whiteboard`,yt=[H,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je];be={},T(T(T(T(T(T(T(T(T(T(be,H,Ye),Ee,Xe),De,Ze),Oe,Qe),ke,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),T(T(T(T(T(T(T(T(T(T(be,Fe,at),Ie,ot),Le,st),Re,ct),ze,lt),Be,ut),Ve,dt),He,ft),Ue,pt),We,mt),T(T(T(T(be,Ge,ht),Ke,gt),qe,_t),Je,vt);var bt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},xt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},St=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Ct={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},wt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Tt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Et=[`kit`];T(T({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Dt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Ot={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},kt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},At={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},jt,Mt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Nt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];jt={},T(T(T(T(T(T(T(T(T(T(jt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),T(T(T(T(T(T(T(T(T(T(jt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),T(T(T(T(jt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),T(T({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Pt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Ft={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},It={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Lt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Nt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Rt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],zt=[1,2,3,4,5,6,7,8,9,10],Bt=zt.concat([11,12,13,14,15,16,17,18,19,20]),Vt=[].concat(A(Object.keys(Ft)),Rt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Mt.GROUP,Mt.SWAP_OPACITY,Mt.PRIMARY,Mt.SECONDARY],zt.map(function(e){return`${e}x`}),Bt.map(function(e){return`w-${e}`})),Ht={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Ut=`___FONT_AWESOME___`,Wt=16,Gt=`fa`,Kt=`svg-inline--fa`,qt=`data-fa-i2svg`,Jt=`data-fa-pseudo-element`,Yt=`data-fa-pseudo-element-pending`,Xt=`data-prefix`,Zt=`data-icon`,Qt=`fontawesome-i2svg`,$t=`async`,en=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],tn=[`::before`,`::after`,`:before`,`:after`],nn=function(){try{return!0}catch{return!1}}();function rn(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[H]}})}var an=O({},Ce);an[H]=O(O(O(O({},{"fa-duotone":`duotone`}),Ce[H]),Tt.kit),Tt[`kit-duotone`]);var on=rn(an),sn=O({},Ct);sn[H]=O(O(O(O({},{duotone:`fad`}),sn[H]),At.kit),At[`kit-duotone`]);var cn=rn(sn),ln=O({},It);ln[H]=O(O({},ln[H]),kt.kit);var un=rn(ln),dn=O({},Pt);dn[H]=O(O({},dn[H]),Dt.kit),rn(dn);var fn=xe,pn=`fa-layers-text`,mn=Se;rn(O({},bt));var hn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],gn=we,_n=[].concat(A(Et),A(Vt)),vn=R.FontAwesomeConfig||{};function yn(e){var t=z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function bn(e){return e===``?!0:e===`false`?!1:e===`true`||e}z&&typeof z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=k(e,2),n=t[0],r=t[1],i=bn(yn(n));i!=null&&(vn[r]=i)});var xn={styleDefault:`solid`,familyDefault:H,cssPrefix:Gt,replacementClass:Kt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var Sn=O(O({},xn),vn);Sn.autoReplaceSvg||(Sn.observeMutations=!1);var U={};Object.keys(xn).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(t){Sn[e]=t,Cn.forEach(function(e){return e(U)})},get:function(){return Sn[e]}})}),Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Sn.cssPrefix=e,Cn.forEach(function(e){return e(U)})},get:function(){return Sn.cssPrefix}}),R.FontAwesomeConfig=U;var Cn=[];function wn(e){return Cn.push(e),function(){Cn.splice(Cn.indexOf(e),1)}}var Tn=Wt,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(e){if(e&&V){var t=z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return z.head.insertBefore(t,r),e}}var On=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function kn(){for(var e=12,t=``;e-->0;)t+=On[Math.random()*62|0];return t}function An(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function jn(e){return e.classList?An(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Mn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Mn(e[n])}" `},``).trim()}function Pn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Fn(e){return e.size!==En.size||e.x!==En.x||e.y!==En.y||e.rotate!==En.rotate||e.flipX||e.flipY}function In(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Ln(e){var t=e.transform,n=e.width,r=n===void 0?Wt:n,i=e.height,a=i===void 0?Wt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&ye?`translate(${t.x/Tn-r/2}em, ${t.y/Tn-a/2}em) `:s?`translate(calc(-50% + ${t.x/Tn}em), calc(-50% + ${t.y/Tn}em)) `:`translate(${t.x/Tn}em, ${t.y/Tn}em) `,c+=`scale(${t.size/Tn*(t.flipX?-1:1)}, ${t.size/Tn*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Rn=`:root, :host {
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
}`;function zn(){var e=Gt,t=Kt,n=U.cssPrefix,r=U.replacementClass,i=Rn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Bn=!1;function Vn(){U.autoAddCss&&!Bn&&(Dn(zn()),Bn=!0)}var Hn={mixout:function(){return{dom:{css:zn,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},Un=R||{};Un[Ut]||(Un[Ut]={}),Un[Ut].styles||(Un[Ut].styles={}),Un[Ut].hooks||(Un[Ut].hooks={}),Un[Ut].shims||(Un[Ut].shims=[]);var W=Un[Ut],Wn=[],Gn=function(){z.removeEventListener(`DOMContentLoaded`,Gn),Kn=1,Wn.map(function(e){return e()})},Kn=!1;V&&(Kn=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Kn||z.addEventListener(`DOMContentLoaded`,Gn));function qn(e){V&&(Kn?setTimeout(e,0):Wn.push(e))}function Jn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Mn(e):`<${t} ${Nn(r)}>${a.map(Jn).join(``)}</${t}>`}function Yn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Xn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Zn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Xn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Qn(e){return A(e).length===1?e.codePointAt(0).toString(16):null}function $n(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function er(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=$n(t);typeof W.hooks.addPack==`function`&&!r?W.hooks.addPack(e,$n(t)):W.styles[e]=O(O({},W.styles[e]||{}),i),e===`fas`&&er(`fa`,t)}var tr=W.styles,nr=W.shims,rr=Object.keys(un),ir=rr.reduce(function(e,t){return e[t]=Object.keys(un[t]),e},{}),ar=null,or={},sr={},cr={},lr={},ur={};function dr(e){return~_n.indexOf(e)}function fr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!dr(i)?i:null}var pr=function(){var e=function(e){return Zn(tr,function(t,n,r){return t[r]=Zn(n,e,{}),t},{})};or=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),sr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),ur=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in tr||U.autoFetchSvg,n=Zn(nr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});cr=n.names,lr=n.unicodes,ar=Sr(U.styleDefault,{family:U.familyDefault})};wn(function(e){ar=Sr(e.styleDefault,{family:U.familyDefault})}),pr();function mr(e,t){return(or[e]||{})[t]}function hr(e,t){return(sr[e]||{})[t]}function gr(e,t){return(ur[e]||{})[t]}function _r(e){return cr[e]||{prefix:null,iconName:null}}function vr(e){var t=lr[e],n=mr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function yr(){return ar}var br=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=H,n=rr.reduce(function(e,t){return e[t]=`${U.cssPrefix}-${t}`,e},{});return yt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return ir[r].includes(e)}))&&(t=r)}),t}function Sr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?H:t,r=on[n][e];if(n===Ee&&!e)return`fad`;var i=cn[n][e]||cn[n][r],a=e in W.styles?e:null;return i||a||null}function Cr(e){var t=[],n=null;return e.forEach(function(e){var r=fr(U.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function wr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Tr=Lt.concat(wt);function Er(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=wr(e.filter(function(e){return Tr.includes(e)})),a=wr(e.filter(function(e){return!Tr.includes(e)})),o=k(i.filter(function(e){return r=e,!Te.includes(e)}),1)[0],s=o===void 0?null:o,c=xr(i),l=O(O({},Cr(a)),{},{prefix:Sr(s,{family:c})});return O(O(O({},l),Ar({values:e,family:c,styles:tr,config:U,canonical:l,givenPrefix:r})),Dr(n,r,l))}function Dr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?_r(i):{},o=gr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!tr.far&&tr.fas&&!U.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Or=yt.filter(function(e){return e!==H||e!==Ee}),kr=Object.keys(It).filter(function(e){return e!==H}).map(function(e){return Object.keys(It[e])}).flat();function Ar(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Ee,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Or.includes(n)&&(Object.keys(s).find(function(e){return kr.includes(e)})||l.autoFetchSvg)&&(r.prefix=St.get(n).defaultShortPrefixId,r.iconName=gr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=yr()||`fas`),r}var jr=function(){function e(){le(this,e),this.definitions={}}return ue(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=O(O({},e.definitions[n]||{}),t[n]),er(n,t[n]);var r=un[H][n];r&&er(r,t[n]),pr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Mr=[],Nr={},Pr={},Fr=Object.keys(Pr);function Ir(e,t){var n=t.mixoutsTo;return Mr=e,Nr={},Object.keys(Pr).forEach(function(e){Fr.indexOf(e)===-1&&delete Pr[e]}),Mr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),he(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Nr[e]||(Nr[e]=[]),Nr[e].push(r[e])})}e.provides&&e.provides(Pr)}),n}function Lr(e,t){var n=[...arguments].slice(2);return(Nr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Rr(e){var t=[...arguments].slice(1);(Nr[e]||[]).forEach(function(e){e.apply(null,t)})}function zr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pr[e]?Pr[e].apply(null,t):void 0}function Br(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||yr();if(t)return t=gr(n,t)||t,Yn(Vr.definitions,n,t)||Yn(W.styles,n,t)}var Vr=new jr,G={noAuto:function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Rr(`noAuto`)},config:U,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(Rr(`beforeI2svg`,e),zr(`pseudoElements2svg`,e),zr(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,qn(function(){Hr({autoReplaceSvgRoot:t}),Rr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(he(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Sr(e[0]);return{prefix:n,iconName:gr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${U.cssPrefix}-`)>-1||e.match(fn))){var r=Er(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||yr(),iconName:gr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=yr();return{prefix:i,iconName:gr(i,e)||e}}}},library:Vr,findIconDefinition:Br,toHtml:Jn},Hr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?z:e;(Object.keys(W.styles).length>0||U.autoFetchSvg)&&V&&U.autoReplaceSvg&&G.dom.i2svg({node:t})};function Ur(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Jn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var t=z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Wr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Fn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Pn(O(O({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Gr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${U.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:O(O({},i),{},{id:o}),children:r}]}]}function Kr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function qr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[U.replacementClass,a?`${U.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:O(O({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Kr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[qt]=``);var _=O(O({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O({},l.styles)}),ee=r.found&&n.found?zr(`generateAbstractMask`,_)||{children:[],attributes:{}}:zr(`generateAbstractIcon`,_)||{children:[],attributes:{}},te=ee.children,v=ee.attributes;return _.children=te,_.attributes=v,s?Gr(_):Wr(_)}function Jr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=O(O({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[qt]=``);var l=O({},a.styles);Fn(i)&&(l.transform=Ln({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Pn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Yr(e){var t=e.content,n=e.extra,r=O(O({},n.attributes),{},{class:n.classes.join(` `)}),i=Pn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Xr=W.styles;function Zr(e){var t=e[0],n=e[1],r=k(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${U.cssPrefix}-${gn.GROUP}`},children:[{tag:`path`,attributes:{class:`${U.cssPrefix}-${gn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${U.cssPrefix}-${gn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Qr={found:!1,width:512,height:512};function $r(e,t){!nn&&!U.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ei(e,t){var n=t;return t===`fa`&&U.styleDefault!==null&&(t=yr()),new Promise(function(r,i){if(n===`fa`){var a=_r(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Xr[t]&&Xr[t][e]){var o=Xr[t][e];return r(Zr(o))}$r(e,t),r(O(O({},Qr),{},{icon:U.showMissingIcons&&e&&zr(`missingIconAbstract`)||{}}))})}var ti=function(){},ni=U.measurePerformance&&B&&B.mark&&B.measure?B:{mark:ti,measure:ti},ri=`FA "7.3.1"`,ii=function(e){return ni.mark(`${ri} ${e} begins`),function(){return ai(e)}},ai=function(e){ni.mark(`${ri} ${e} ends`),ni.measure(`${ri} ${e}`,`${ri} ${e} begins`,`${ri} ${e} ends`)},oi={begin:ii,end:ai},si=function(){};function ci(e){return typeof(e.getAttribute?e.getAttribute(qt):null)==`string`}function li(e){var t=e.getAttribute?e.getAttribute(Xt):null,n=e.getAttribute?e.getAttribute(Zt):null;return t&&n}function ui(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function di(){return U.autoReplaceSvg===!0?gi.replace:gi[U.autoReplaceSvg]||gi.replace}function fi(e){return z.createElementNS(`http://www.w3.org/2000/svg`,e)}function pi(e){return z.createElement(e)}function mi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?fi:pi:t;if(typeof e==`string`)return z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(mi(e,{ceFn:n}))}),r}function hi(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var gi={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(mi(e),t)}),t.getAttribute(qt)===null&&U.keepOriginalSource){var n=z.createComment(hi(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~jn(t).indexOf(U.replacementClass))return gi.replace(e);var r=RegExp(`${U.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===U.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Jn(e)}).join(`
`);t.setAttribute(qt,``),t.innerHTML=a}};function _i(e){e()}function vi(e,t){var n=typeof t==`function`?t:si;if(e.length===0)n();else{var r=_i;U.mutateApproach===$t&&(r=R.requestAnimationFrame||_i),r(function(){var t=di(),r=oi.begin(`mutate`);e.map(t),r(),n()})}}var yi=!1;function bi(){yi=!0}function xi(){yi=!1}var Si=null;function Ci(e){if(ve&&U.observeMutations){var t=e.treeCallback,n=t===void 0?si:t,r=e.nodeCallback,i=r===void 0?si:r,a=e.pseudoElementsCallback,o=a===void 0?si:a,s=e.observeMutationsRoot,c=s===void 0?z:s;Si=new ve(function(e){if(!yi){var t=yr();An(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ci(e.addedNodes[0])&&(U.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&U.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ci(e.target)&&~hn.indexOf(e.attributeName)){if(e.attributeName===`class`&&li(e.target)){var r=Er(jn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Xt,a||t),s&&e.target.setAttribute(Zt,s)}else ui(e.target)&&i(e.target)}})}}),V&&Si.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wi(){Si&&Si.disconnect()}function Ti(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Ei(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Er(jn(e));return i.prefix||=yr(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=hr(i.prefix,e.innerText)||mr(i.prefix,Qn(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Di(e){return An(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Oi(){return{iconName:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ei(e),r=n.iconName,i=n.prefix,a=n.rest,o=Di(e),s=Lr(`parseNodeAttributes`,{},e);return O({iconName:r,prefix:i,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ti(e):[],attributes:o}},s)}var Ai=W.styles;function ji(e){var t=U.autoReplaceSvg===`nest`?ki(e,{styleParser:!1}):ki(e);return~t.extra.classes.indexOf(pn)?zr(`generateLayersText`,e,t):zr(`generateSvgReplacementMutation`,e,t)}function Mi(){return[].concat(A(wt),A(Lt))}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=z.documentElement.classList,r=function(e){return n.add(`${Qt}-${e}`)},i=function(e){return n.remove(`${Qt}-${e}`)},a=U.autoFetchSvg?Mi():Te.concat(Object.keys(Ai));a.includes(`fa`)||a.push(`fa`);var o=[`.${pn}:not([${qt}])`].concat(a.map(function(e){return`.${e}:not([${qt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=An(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=oi.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ji(t);n&&e.push(n)}catch(e){nn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){vi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ji(e).then(function(e){e&&vi([e],t)})}function Fi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Br(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Br(i||{}),e(r,O(O({},n),{},{mask:i}))}}var Ii=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?En:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,ee=e.icon;return Ur(O({type:`icon`},e),function(){return Rr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),qr({icons:{main:Zr(ee),mask:s?Zr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:O(O({},En),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Li={mixout:function(){return{icon:Fi(Ii)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Ni,e.nodeCallback=Pi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?z:t,r=e.callback;return Ni(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ei(n,r),o.iconName?ei(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=k(o,2),u=l[0],d=l[1];t([e,qr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Pn(a);o.length>0&&(n.style=o);var s;return Fn(i)&&(s=zr(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ri={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Ur({type:`layer`},function(){Rr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${U.cssPrefix}-layers`].concat(A(r)).join(` `)},children:n}]})}}}},zi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Ur({type:`counter`,content:e},function(){return Rr(`beforeDOMElementCreation`,{content:e,params:t}),Yr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-counter`].concat(A(a))}})})}}}},Bi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?En:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Ur({type:`text`,content:e},function(){return Rr(`beforeDOMElementCreation`,{content:e,params:t}),Jr({content:e,transform:O(O({},En),r),extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-text`].concat(A(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ye){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Jr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Vi=RegExp(`"`,`ug`),Hi=[1105920,1112319],Ui=O(O(O(O({},{FontAwesome:{normal:`fas`,400:`fas`}}),xt),Ht),Ot),Wi=Object.keys(Ui).reduce(function(e,t){return e[t.toLowerCase()]=Ui[t],e},{}),Gi=Object.keys(Wi).reduce(function(e,t){var n=Wi[t];return e[t]=n[900]||A(Object.entries(n))[0][1],e},{});function Ki(e){return Qn(A(e.replace(Vi,``))[0]||``)}function qi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Vi,``),r=n.codePointAt(0),i=r>=Hi[0]&&r<=Hi[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Ji(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Wi[n]||{})[i]||Gi[n]}function Yi(e,t){var n=`${Yt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=An(e.children).filter(function(e){return e.getAttribute(Jt)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(mn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ji(s,l),p=Ki(d),m=c[0].startsWith(`FontAwesome`),h=qi(o),g=mr(f,p),_=g;if(m){var ee=vr(p);ee.iconName&&ee.prefix&&(g=ee.iconName,f=ee.prefix)}if(g&&!h&&(!a||a.getAttribute(Xt)!==f||a.getAttribute(Zt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var te=Oi(),v=te.extra;v.attributes[Jt]=t,ei(g,f).then(function(i){var a=qr(O(O({},te),{},{icons:{main:i,mask:br()},prefix:f,iconName:_,extra:v,watchable:!0})),o=z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Jn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xi(e){return Promise.all([Yi(e,`::before`),Yi(e,`::after`)])}function Zi(e){return e.parentNode!==document.head&&!~en.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Qi=function(e){return!!e&&tn.some(function(t){return e.includes(t)})},$i=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=w(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Qi(a)){var o=tn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ea(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(V){var n;if(t)n=e;else if(U.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=w(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=w(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=w($i(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){U.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=An(n).filter(Zi).map(Xi),i=oi.begin(`searchPseudoElements`);bi(),Promise.all(r).then(function(){i(),xi(),e()}).catch(function(){i(),xi(),t()})})}}var ta={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ea,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?z:t;U.searchPseudoElements&&ea(n)}}},na=!1,ra={mixout:function(){return{dom:{unwatch:function(){bi(),na=!0}}}},hooks:function(){return{bootstrap:function(){Ci(Lr(`mutationObserverCallbacks`,{}))},noAuto:function(){wi()},watch:function(e){var t=e.observeMutationsRoot;na?xi():Ci(Lr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ia=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},aa={mixout:function(){return{parse:{transform:function(e){return ia(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ia(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:O({},a.outer),children:[{tag:`g`,attributes:O({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:O(O({},t.icon.attributes),a.path)}]}]}}}},oa={x:0,y:0,width:`100%`,height:`100%`};function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ca(e){return e.tag===`g`?e.children:[e]}Ir([Hn,Li,Ri,zi,Bi,ta,ra,aa,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Er(n.split(` `).map(function(e){return e.trim()})):br();return r.prefix||=yr(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=In({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:O(O({},oa),{},{fill:`white`})},p=c.children?{children:c.children.map(sa)}:{},m={tag:`g`,attributes:O({},d.inner),children:[sa(O({tag:c.tag,attributes:O(O({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:O({},d.outer),children:[m]},g=`mask-${a||kn()}`,_=`clip-${a||kn()}`,ee={tag:`mask`,attributes:O(O({},oa),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},te={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ca(u)},ee]};return t.push(te,{tag:`rect`,attributes:O({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},oa)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:O(O({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=O(O({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:O(O({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:O(O({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:O(O({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:O(O({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:O(O({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:O(O({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:O(O({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:G}),G.noAuto,G.config,G.library,G.dom,G.parse,G.findIconDefinition,G.toHtml;var la=G.icon;G.layer,G.text,G.counter;var ua={prefix:`fas`,iconName:`medal`,icon:[448,512,[127941],`f5a2`,`M224.3 128L139.7-12.9c-6.5-10.8-20.1-14.7-31.3-9.1L21.8 21.3C9.9 27.2 5.1 41.6 11 53.5L80.6 192.6c-30.1 33.9-48.3 78.5-48.3 127.4 0 106 86 192 192 192s192-86 192-192c0-48.9-18.3-93.5-48.3-127.4L437.6 53.5c5.9-11.9 1.1-26.3-10.7-32.2L340.2-22.1c-11.2-5.6-24.9-1.6-31.3 9.1L224.3 128zm30.8 142.5c1.4 2.8 4 4.7 7 5.1l50.1 7.3c7.7 1.1 10.7 10.5 5.2 16l-36.3 35.4c-2.2 2.2-3.2 5.2-2.7 8.3l8.6 49.9c1.3 7.6-6.7 13.5-13.6 9.9l-44.8-23.6c-2.7-1.4-6-1.4-8.7 0l-44.8 23.6c-6.9 3.6-14.9-2.2-13.6-9.9l8.6-49.9c.5-3-.5-6.1-2.7-8.3l-36.3-35.4c-5.6-5.4-2.5-14.8 5.2-16l50.1-7.3c3-.4 5.7-2.4 7-5.1l22.4-45.4c3.4-7 13.3-7 16.8 0l22.4 45.4z`]},da={prefix:`fas`,iconName:`expand`,icon:[448,512,[],`f065`,`M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z`]},fa={prefix:`fas`,iconName:`jet-fighter`,icon:[576,512,[`fighter-jet`],`f0fb`,`M496.2 206.8c-10.7-4.5-22.2-6.8-33.8-6.8L362 200 248 48 296 48c13.3 0 24-10.7 24-24S309.3 0 296 0L152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 152-54.4 0-52.8-66c-3-3.8-7.6-6-12.5-6L16 128c-8.8 0-16 7.2-16 16l0 88 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 88c0 8.8 7.2 16 16 16l24.3 0c4.9 0 9.5-2.2 12.5-6l52.8-66 54.4 0 0 152-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 114-152 100.4 0c11.6 0 23.1-2.3 33.8-6.8l65-27.1c8.9-3.7 14.8-12.5 14.8-22.2s-5.8-18.4-14.8-22.2l-65-27.1z`]},pa={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},ma={prefix:`fas`,iconName:`walkie-talkie`,icon:[384,512,[],`f8ef`,`M88-32c13.3 0 24 10.7 24 24l0 72 48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l32 0c0-17.7 14.3-32 32-32s32 14.3 32 32l16 0c26.5 0 48 21.5 48 48l0 160.9c0 9.9-2.3 19.7-6.8 28.6l-20.2 40.4c-3.3 6.7-5.1 14-5.1 21.5l0 84.7c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-84.7c0-7.5-1.7-14.8-5.1-21.5L6.8 301.5C2.3 292.6 0 282.8 0 272.9L0 112C0 85.5 21.5 64 48 64l16 0 0-72c0-13.3 10.7-24 24-24zm32 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z`]},ha={prefix:`fas`,iconName:`play`,icon:[448,512,[9654],`f04b`,`M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z`]},ga={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},_a={prefix:`fas`,iconName:`bomb`,icon:[576,512,[128163],`f1e2`,`M480-16c6.9 0 13 4.4 15.2 10.9l13.5 40.4 40.4 13.5C555.6 51 560 57.1 560 64s-4.4 13-10.9 15.2l-40.4 13.5-13.5 40.4C493 139.6 486.9 144 480 144s-13-4.4-15.2-10.9l-13.5-40.4-40.4-13.5C404.4 77 400 70.9 400 64s4.4-13 10.9-15.2l40.4-13.5 13.5-40.4C467-11.6 473.1-16 480-16zM321.4 97.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-10.9 10.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S32 418.9 32 304 125.1 96 240 96c24.7 0 48.5 4.3 70.5 12.3l10.9-10.9zM144 304c0-53 43-96 96-96 13.3 0 24-10.7 24-24s-10.7-24-24-24c-79.5 0-144 64.5-144 144 0 13.3 10.7 24 24 24s24-10.7 24-24z`]},va={prefix:`fas`,iconName:`volume-xmark`,icon:[576,512,[`volume-mute`,`volume-times`],`f6a9`,`M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z`]},ya={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},ba={prefix:`fas`,iconName:`gun`,icon:[576,512,[],`e19b`,`M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-448 0C14.3 64 0 78.3 0 96L0 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l96 0c14.7 0 27.5-10 31-24.2L217 352 321.4 352c23.7 0 44.8-14.9 52.7-37.2l26.7-74.8 31.1 0c8.5 0 16.6-3.4 22.6-9.4l22.6-22.6 66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8zM321.4 304l-92.5 0 16-64 105 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128l384 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16z`]},xa={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Sa={prefix:`fas`,iconName:`rotate-right`,icon:[512,512,[`redo-alt`,`rotate-forward`],`f2f9`,`M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z`]},Ca={prefix:`fas`,iconName:`flag`,icon:[448,512,[127988,61725],`f024`,`M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z`]},wa={prefix:`fas`,iconName:`volume-high`,icon:[640,512,[128266,`volume-up`],`f028`,`M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z`]},Ta={prefix:`fas`,iconName:`crosshairs`,icon:[576,512,[],`f05b`,`M288-16c17.7 0 32 14.3 32 32l0 18.3c98.1 14 175.7 91.6 189.7 189.7l18.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.3 0c-14 98.1-91.6 175.7-189.7 189.7l0 18.3c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.3C157.9 463.7 80.3 386.1 66.3 288L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.3 0C80.3 125.9 157.9 48.3 256 34.3L256 16c0-17.7 14.3-32 32-32zM131.2 288c12.7 62.7 62.1 112.1 124.8 124.8l0-12.8c0-17.7 14.3-32 32-32s32 14.3 32 32l0 12.8c62.7-12.7 112.1-62.1 124.8-124.8L432 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l12.8 0C432.1 161.3 382.7 111.9 320 99.2l0 12.8c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-12.8C193.3 111.9 143.9 161.3 131.2 224l12.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-12.8 0zM288 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z`]},Ea={prefix:`fas`,iconName:`person-military-rifle`,icon:[448,512,[],`e54b`,`M128 39c0-13 10-23.8 22.9-24.9L302.7 1.4C312 .7 320 8 320 17.4L320 48c0 8.8-7.2 16-16 16L153 64c-13.8 0-25-11.2-25-25zm17.6 57l156.8 0c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16zm228 364.3L320 369.7 320 480c0 1.3-.1 2.5-.2 3.8L145.5 234.9c16.6-7.1 34.6-10.9 53.3-10.9l50.4 0c15.9 0 31.3 2.8 45.8 7.9L389.9 67.7c-7.7-4.4-10.3-14.2-5.9-21.9s14.2-10.3 21.9-5.9l27.7 16c7.7 4.4 10.3 14.2 5.9 21.9l-55.5 96.1 1.6 .9c15.3 8.8 20.6 28.4 11.7 43.7L360.7 282c2 2.8 3.9 5.8 5.7 8.8l76.1 128.8c11.2 19 4.9 43.5-14.1 54.8s-43.5 4.9-54.8-14.1zM288 512l-128 0c-17.7 0-32-14.3-32-32l0-110.3-53.6 90.6c-11.2 19-35.8 25.3-54.8 14.1S-5.7 438.7 5.6 419.7L81.7 290.8c9.4-15.8 21.7-29.3 36-40L299.1 510c-3.5 1.3-7.2 2-11.1 2zM264 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48z`]},Da={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},Oa={prefix:`fas`,iconName:`bolt`,icon:[448,512,[9889,`zap`],`f0e7`,`M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z`]},ka={prefix:`fas`,iconName:`pause`,icon:[384,512,[9208],`f04c`,`M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z`]},Aa={prefix:`fas`,iconName:`coins`,icon:[512,512,[],`f51e`,`M128 96l0-16c0-44.2 86-80 192-80S512 35.8 512 80l0 16c0 30.6-41.3 57.2-102 70.7-2.4-2.8-4.9-5.5-7.4-8-15.5-15.3-35.5-26.9-56.4-35.5-41.9-17.5-96.5-27.1-154.2-27.1-21.9 0-43.3 1.4-63.8 4.1-.2-1.3-.2-2.7-.2-4.1zM432 353l0-46.2c15.1-3.9 29.3-8.5 42.2-13.9 13.2-5.5 26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zm0-96l0-33c0-4.5-.4-8.8-1-13 15.5-3.9 30-8.6 43.2-14.2s26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zM0 240l0-16c0-44.2 86-80 192-80s192 35.8 192 80l0 16c0 44.2-86 80-192 80S0 284.2 0 240zm384 96c0 44.2-86 80-192 80S0 380.2 0 336l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3l0 15.4zm0 80.6l0 15.4c0 44.2-86 80-192 80S0 476.2 0 432l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3z`]},ja={prefix:`fas`,iconName:`screwdriver-wrench`,icon:[576,512,[`tools`],`f7d9`,`M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z`]},Ma={prefix:`fas`,iconName:`book-open`,icon:[512,512,[128214,128366],`f518`,`M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z`]},Na={prefix:`fas`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]},K=60,Pa=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z),Fa=t.slice(1).map((e,n)=>Pa(t[n],e)),Ia=Fa.reduce((e,t)=>e+t,0);function La(e){let n=e;for(let e=0;e<Fa.length;e++){let r=Fa[e];if(n<=r){let i=t[e],a=t[e+1],o=n/r;return{x:i.x+(a.x-i.x)*o,z:i.z+(a.z-i.z)*o}}n-=r}return{...t[t.length-1]}}function Ra(s=7341){if(!Number.isFinite(s)||!Number.isInteger(s))throw Error(`Seed must be a finite integer.`);let c=s>>>0,l=0,u=0,d=`build`,f=!1,p=0,m=100,h=20,g=0,_=0,ee=0,te=0,v=0,ne=null,re=3,ie=0,ae=[],y=[],oe=[],b=[],se=new Map,x=new Map,ce=()=>({kills:0,headshots:0,headshotKills:0,rageProcs:0,damage:0,spent:0,earned:0,leaked:0}),S=ce(),le=()=>l/K,C=()=>d===`victory`||d===`defeat`,ue=()=>{c=c+1831565813>>>0;let e=c;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},w=(e,t,n,r,i,a)=>{oe.push({id:++ee,time:le(),kind:e,from:{x:t.x,z:t.z},to:{x:n.x,z:n.z},...r?{role:r}:{},...i===void 0?{}:{amount:i},...a?{boss:a}:{}})},T=e=>{m+=e,S.earned+=e},E=e=>({ok:!1,reason:e});function D(){p++,u=0,te=0,v=0,ne=null,b=r[p-1].groups.flatMap(e=>Array.from({length:e.count},(t,n)=>({at:Math.round((e.at+e.interval*n)*K),kind:e.kind}))).sort((e,t)=>e.at-t.at),d=`combat`}function de(t){if(!t||typeof t!=`object`)return E(`Invalid command.`);if(t.kind===`restart`)return c=s>>>0,l=0,u=0,d=`build`,f=!1,p=0,m=100,h=20,g=0,_=0,te=0,v=0,ae=[],y=[],oe=[],b=[],ne=null,re=3,ie=0,se.clear(),x.clear(),S=ce(),{ok:!0};if(t.kind===`pause`)return typeof t.value==`boolean`?(f=t.value,{ok:!0}):E(`Pause requires a boolean value.`);if(d===`victory`||d===`defeat`)return E(`Restart to begin another campaign.`);if(t.kind===`airstrike`){if(f||d!==`combat`)return E(`Air support requires active combat.`);if(!y.some(e=>e.hp>0))return E(`No hostiles are currently on the battlefield.`);if(re<=0)return E(`All three airstrikes have been used.`);if(l<ie)return E(`Air support is rearming.`);re--,ie=l+720,w(`airstrike`,{x:0,z:0},{x:0,z:0});for(let e of y)pe(null,e,e.maxHp*.35,!e.boss,!0);return y=y.filter(e=>e.hp>0),{ok:!0}}if(t.kind===`start-wave`)return d!==`build`||p!==0?E(`Later waves launch automatically after intermission.`):(D(),{ok:!0});if(t.kind===`place`){if(!Object.prototype.hasOwnProperty.call(e,t.role))return E(`Unknown soldier.`);let n=i.find(e=>e.id===t.pad);if(!n)return E(`Choose a deployment position.`);if(ae.some(e=>e.pad===t.pad))return E(`This position is occupied.`);let r=e[t.role].ranks[0];if(m<r.cost)return E(`Not enough cash to deploy this soldier.`);m-=r.cost,S.spent+=r.cost;let a={...n,id:++_,pad:n.id,role:t.role,rank:0,cooldown:0,rageUntil:0,targetId:null,policy:`first`,kills:0,damageDealt:0,invested:r.cost};return ae.push(a),se.set(a.id,1),w(`deploy`,a,a,a.role),{ok:!0}}if(t.kind!==`upgrade`&&t.kind!==`sell`&&t.kind!==`target`)return E(`Unknown command.`);let n=ae.find(e=>e.id===t.tower);if(!n)return E(`This soldier is no longer deployed.`);if(t.kind===`target`)return[`first`,`strongest`,`weakest`].includes(t.policy)?(n.policy=t.policy,{ok:!0}):E(`Unknown targeting policy.`);if(t.kind===`sell`)return m+=Math.floor(n.invested*.7),ae=ae.filter(e=>e.id!==n.id),se.delete(n.id),{ok:!0};if(n.rank===3)return E(`This soldier already has all three upgrades.`);let r=n.rank+1,a=e[n.role].ranks[r];return m<a.cost?E(`Not enough cash for this upgrade.`):(m-=a.cost,S.spent+=a.cost,n.invested+=a.cost,n.rank=r,w(`upgrade`,n,n,n.role),{ok:!0})}function fe(){let e=r[p-1];for(;v<b.length&&b[v].at<=u;){let t=b[v++].kind,r=n[t],i=t===`boss`?o[p]??Math.round(r.hp*e.hpMultiplier):Math.round(r.hp*e.hpMultiplier),s={...La(0),id:++_,kind:t,hp:i,maxHp:i,progress:0,armor:r.armor,plating:r.plating,speed:r.speed,slowUntil:0,slowFactor:1,bounty:a(p,t===`boss`),leak:r.leak,boss:t===`boss`};y.push(s),t===`medic`&&x.set(s.id,l+K),te++}}function pe(e,t,n,r=!1,i=!1){if(t.hp<=0)return;let a=i?n:n*(1-t.armor)-t.plating,o=r?t.hp:Math.min(t.hp,Math.max(1,a));t.hp-=o,e&&(e.damageDealt+=o),S.damage+=o,t.hp<=0&&(t.hp=0,e&&e.kills++,S.kills++,T(t.bounty),g+=t.bounty*10,w(`kill`,e??{x:0,z:0},t,e?.role,o,t.boss),x.delete(t.id))}function O(t,n){let r=e[t.role].ranks[t.rank],i=0;if(t.role!==`officer`)for(let n of ae){if(n.role!==`officer`)continue;let r=e.officer.ranks[n.rank];Pa(n,t)<=r.range&&(i=Math.max(i,r.aura??0))}let a=r.damage*(1+i),o=t.role===`sniper`&&ue()<.1,s=t.role===`gunner`&&l>=Math.round(t.rageUntil*K)&&ue()<.05;o&&(S.headshots++,w(`headshot`,t,n,t.role,n.boss?a*5:n.hp)),w(r.splash?`blast`:`shot`,t,n,t.role,a);let c=r.splash?y.filter(e=>e.hp>0&&Pa(e,n)<=r.splash):[n];for(let e of c)if(pe(t,e,o&&e.boss?a*5:a,o&&!e.boss),o&&e.hp===0&&S.headshotKills++,r.slow&&e.hp>0){let t=e.boss?Math.min(r.slow,.15):r.slow;e.slowFactor=Math.min(e.slowFactor,1-t),e.slowUntil=(l+120)/K}s&&(t.rageUntil=(l+300)/K,S.rageProcs++,w(`rage`,t,t,t.role,5))}function k(){if(l++,d===`build`&&ne!==null&&l>=ne&&D(),d!==`combat`){oe=oe.filter(e=>e.time>=le()-1);return}fe();for(let e of y)l>=Math.round(e.slowUntil*K)&&(e.slowFactor=1),e.progress+=e.speed*e.slowFactor/K,Object.assign(e,La(e.progress)),e.progress>=Ia&&(h=Math.max(0,h-e.leak),S.leaked++,e.hp=0,x.delete(e.id),w(`leak`,e,e,void 0,e.leak));if(y=y.filter(e=>e.hp>0),h<=0){d=`defeat`;return}for(let e of y)if(!(e.kind!==`medic`||l<x.get(e.id))){for(let t of y)t.id!==e.id&&!t.boss&&Pa(e,t)<=2.2&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.02));x.set(e.id,l+K)}for(let t of ae){let n=e[t.role].ranks[t.rank],r=y.filter(e=>e.hp>0&&Pa(t,e)<=n.range);r.sort((e,n)=>(t.policy===`strongest`?n.hp-e.hp:t.policy===`weakest`?e.hp-n.hp:n.progress-e.progress)||e.id-n.id),t.targetId=r[0]?.id??null;let i=l<Math.round(t.rageUntil*K)?5:1,a=(se.get(t.id)??0)+n.rate*i/K;for(r.length||(a=Math.min(1,a));a>=1-1e-9&&r.length;){let e=r.find(e=>e.hp>0);if(!e){a=Math.min(1,a);break}O(t,e),--a}se.set(t.id,Math.max(0,a)),t.cooldown=Math.max(0,1-a)/(n.rate*i)}if(y=y.filter(e=>e.hp>0),u++,v===b.length&&y.length===0){let e=r[p-1].reward;T(e),g+=p*100,w(`wave-clear`,t[t.length-1],t[t.length-1],void 0,e),p===r.length?(d=`victory`,g+=h*500):(d=`build`,ne=l+360)}oe=oe.filter(e=>e.time>=le()-1)}return{command:de,advance(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Advance requires a nonnegative integer tick count.`);if(!(f||C()))for(let t=0;t<e&&(k(),!C());t++);},frame(){return{time:le(),phase:d,paused:f,wave:p,waveTime:u/K,cash:m,lives:h,score:g,towers:ae.map(e=>({...e})),enemies:y.map(e=>({...e})),events:oe.map(e=>({...e,from:{...e.from},to:{...e.to}})),stats:{...S},spawned:te,waveTotal:b.length,nextWaveIn:ne===null?null:Math.max(0,(ne-l)/K),airstrikes:re,airstrikeReadyIn:Math.max(0,(ie-l)/K)}}}}var za=24,Ba=16,Va=Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Number(`0x${t.color.slice(1)}`)])),Ha={scout:.82,runner:.68,swarm:.52,armored:1.1,medic:.92,elite:1.13,boss:1.72},Ua=t.slice(1).map((e,n)=>Math.hypot(e.x-t[n].x,e.z-t[n].z));function Wa(e){let n=Math.max(0,e);for(let e=0;e<Ua.length;e++){let r=Ua[e],i=t[e],a=t[e+1];if(n<=r)return{x:(a.x-i.x)/r,z:(a.z-i.z)/r};n-=r}let r=t.length-1,i=t[r-1],a=t[r],o=Math.hypot(a.x-i.x,a.z-i.z)||1;return{x:(a.x-i.x)/o,z:(a.z-i.z)/o}}async function Ga(r,a){let o=new se;o.background=null,o.add(new te(9288157,1.35));let x=new d(16769469,2.6);x.position.set(-7,15,9),o.add(x);let ce=new d(5159144,1.3);ce.position.set(8,10,-8),o.add(ce);let S=new h(-12,12,8,-8,.1,100);S.position.set(0,22,20),S.lookAt(0,0,0);let le=new URLSearchParams(window.location.search).get(`renderer`)===`webgl`,C=new ae({alpha:!0,antialias:!0,forceWebGL:le});C.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),C.setClearColor(398369,0),C.outputColorSpace=oe,await C.init();let ue=C.backend.isWebGPUBackend?`WebGPU`:`WebGL2`,w=C.domElement;w.setAttribute(`aria-hidden`,`true`),Object.assign(w.style,{display:`block`,width:`100%`,height:`100%`,background:`transparent`,outline:`none`}),r.appendChild(w);let T=new Map,E=new Map,D=new Map,de=new Map,fe=new Map,pe=new Map,O=new Map,k=new Map,A=null,j=null,me=0,he=!1,ge=!1,_e=null;function M(e,t){let n=T.get(e);return n||(n=t(),T.set(e,n)),n}function N(e,t,n={}){let r=E.get(e);return r||(r=new ee({color:t,roughness:.7,metalness:.08,...n}),E.set(e,r)),r}function P(e,t,n={}){let r=E.get(e);return r||(r=new ne({color:t,...n}),E.set(e,r)),r}function F(e,t,n,r=[0,0,0],i=[1,1,1]){let a=new p(t,n);return a.position.set(...r),a.scale.set(...i),e.add(a),a}let I=()=>M(`box`,()=>new re(1,1,1)),L=()=>M(`sphere`,()=>new u(1,14,10)),R=()=>M(`cylinder`,()=>new ie(1,1,1,16)),z=()=>M(`capsule`,()=>new l(.18,.42,3,8)),ve=N(`armor`,1848132,{roughness:.64,metalness:.18}),B=N(`plate`,2506576,{roughness:.4,metalness:.45}),V=N(`skin`,13209449,{roughness:.84}),ye=N(`boots`,1320241),be=N(`visor`,727846,{metalness:.42,roughness:.22}),xe=new y;o.add(xe),F(xe,M(`board`,()=>new re(24.32,.42,16.32)),N(`board-edge`,1190714,{transparent:!0,opacity:.2,depthWrite:!1,metalness:.52,roughness:.4}),[0,-.28,0]);let Se=F(xe,M(`floor`,()=>new m(za,Ba)),N(`floor`,1058360,{transparent:!0,opacity:.52,metalness:.12,roughness:.93,depthWrite:!1}),[0,-.045,0]);Se.rotation.x=-Math.PI/2;let Ce=P(`grid-lines`,3233386,{transparent:!0,opacity:.23,depthWrite:!1}),we=new y;for(let e=-11;e<=11;e+=1){let t=new f(M(`grid-v-${e}`,()=>new g().setFromPoints([new s(e,-.033,-8),new s(e,-.033,8)])),Ce);we.add(t)}for(let e=-7;e<=7;e+=1){let t=new f(M(`grid-h-${e}`,()=>new g().setFromPoints([new s(-12,-.033,e),new s(12,-.033,e)])),Ce);we.add(t)}o.add(we);let Te=t.map(e=>new s(e.x,.01,e.z)),H=N(`route-bed`,1519421,{metalness:.2,roughness:.9}),Ee=P(`route-rail`,4055533,{transparent:!0,opacity:.78,toneMapped:!1}),De=new y;for(let e=0;e<Te.length-1;e++){let t=Te[e],n=Te[e+1],r=n.x-t.x,i=n.z-t.z,a=Math.hypot(r,i),o=Math.atan2(r,i),s=(t.x+n.x)*.5,c=(t.z+n.z)*.5,l=i/a,u=-r/a,d=F(De,I(),H,[s,.015,c],[.82,.055,a+.08]);d.rotation.y=o;for(let e of[-1,1]){let t=F(De,I(),Ee,[s+l*e*.36,.055,c+u*e*.36],[.048,.024,a+.08]);t.rotation.y=o}for(let e=.72;e<a-.25;e+=.92){let n=F(De,I(),P(`route-center-mark`,8445154,{transparent:!0,opacity:.6,toneMapped:!1}),[t.x+r/a*e,.052,t.z+i/a*e],[.022,.01,.23]);n.rotation.y=o}}o.add(De);let Oe=P(`edge-light`,1996945,{transparent:!0,opacity:.62,toneMapped:!1});for(let e of[-7.82,7.82]){let t=new f(M(`edge-line-${e}`,()=>new g().setFromPoints([new s(-11.72,.015,e),new s(11.72,.015,e)])),Oe);o.add(t)}for(let e of[-11.82,11.82]){let t=new f(M(`edge-line-${e}`,()=>new g().setFromPoints([new s(e,.015,-7.72),new s(e,.015,7.72)])),Oe);o.add(t)}let ke=N(`sandbag`,5792853,{roughness:.98}),Ae=N(`rock`,3558485,{roughness:1}),je=new y,Me=(e,t,n,r,i=!1)=>{let a=i?Ae:ke;for(let o=0;o<n;o++){let s=F(je,i?M(`rock-shape`,()=>new _(.48,0)):z(),a,[e+Math.cos(r)*(o-(n-1)/2)*.52,i?.28:.19,t+Math.sin(r)*(o-(n-1)/2)*.52],i?[1.2,.72,.88]:[1.15,.62,.72]);s.rotation.y=r,i||(s.rotation.z=Math.PI/2)}};Me(-9.7,5.9,3,.24),Me(9.8,5.8,3,-.32),Me(-9.6,-5.9,2,-.24,!0),Me(9.4,-5.8,3,.4),je.renderOrder=2,o.add(je);let Ne=new y;Ne.position.set(t[0]?.x??-10,0,t[0]?.z??0),F(Ne,R(),N(`entry-foot`,2963522,{metalness:.4}),[0,.08,0],[.62,.16,.62]),F(Ne,M(`entry-ring-geo`,()=>new b(.48,.055,7,36)),P(`entry-ring`,16742762,{toneMapped:!1}),[0,.19,0],[1,1,1]).rotation.x=Math.PI/2,F(Ne,R(),N(`entry-beacon`,15890017,{emissive:7611933,emissiveIntensity:.8}),[0,.42,0],[.09,.44,.09]),F(Ne,L(),P(`entry-lamp`,16753035,{toneMapped:!1}),[0,.67,0],[.13,.13,.13]),o.add(Ne);let Pe=new y,Fe=t[t.length-1]??{x:10,z:0};Pe.position.set(Fe.x,0,Fe.z),F(Pe,R(),N(`hq-foundation`,1391435,{metalness:.4}),[0,.08,0],[1.26,.16,1.04]),F(Pe,M(`hq-ring-geo`,()=>new b(.94,.075,8,40)),P(`hq-ring`,4780270,{toneMapped:!1}),[0,.19,0],[1.14,1,.72]).rotation.x=Math.PI/2,F(Pe,I(),N(`hq-core`,3040881,{metalness:.22,roughness:.5}),[0,.52,0],[.78,.62,.62]),F(Pe,I(),N(`hq-core-light`,4638672,{emissive:1941417,emissiveIntensity:.65,metalness:.25}),[0,.55,.33],[.52,.2,.045]),F(Pe,R(),B,[-.36,.95,-.2],[.045,.66,.045]),F(Pe,M(`hq-antenna`,()=>new u(.09,10,7)),P(`hq-beacon`,6750195,{toneMapped:!1}),[-.36,1.3,-.2],[1,1,1]),o.add(Pe);let Ie=new y,Le=new Map,Re=new Set;for(let e of i){Le.set(e.id,e);let t=new y;t.position.set(e.x,0,e.z),F(t,M(`pad-base`,()=>new ie(.91,1,.25,12,1)),N(`pad-base-mat`,2440781,{metalness:.37,roughness:.5}),[0,.13,0]),F(t,M(`pad-inner`,()=>new ie(.79,.83,.075,24,1)),N(`pad-center`,4350064,{metalness:.24,roughness:.56}),[0,.29,0]),F(t,M(`pad-light-geo`,()=>new b(.82,.026,5,32)),P(`pad-light`,3123132,{toneMapped:!1}),[0,.335,0],[1,1,1]).rotation.x=Math.PI/2;for(let e=0;e<4;e++){let n=Math.PI*.25+e*Math.PI*.5;F(t,L(),P(`pad-stud`,6938349,{toneMapped:!1}),[Math.cos(n)*.7,.35,Math.sin(n)*.7],[.045,.025,.045])}t.userData.padId=e.id,Ie.add(t)}o.add(Ie);let ze={cadet:{lean:0,height:1,width:1},officer:{lean:-.05,height:1,width:1},gunner:{lean:.16,height:.92,width:1.06},sniper:{lean:.06,height:.86,width:1},grenadier:{lean:.02,height:1,width:1},engineer:{lean:.14,height:.95,width:1}};function Be(e){let t=new y,n=Va[e],r=N(`uniform-${e}`,e===`officer`?3425107:2373962,{roughness:.72}),i=N(`role-accent-${e}`,n,{metalness:.25,roughness:.52}),a=new y;t.add(a);for(let e of[-1,1]){let t=F(a,z(),r,[e*.17,.48,0],[.82,.9,.82]);t.rotation.z=e*-.05,F(a,I(),ye,[e*.18,.13,.11],[.26,.19,.42]),F(a,I(),i,[e*.28,1.34,.03],[.2,.12,.2])}F(a,I(),r,[0,1.17,0],[.68,.72,.4]),F(a,I(),ve,[0,1.14,.22],[.5,.42,.12]),F(a,I(),B,[0,1.31,.294],[.28,.15,.025]),F(a,I(),i,[0,1.47,.22],[.55,.06,.1]);for(let t of[-1,1]){let n=F(a,z(),r,[t*.42,1.13,.15],[.78,.76,.76]);if(e===`officer`&&t===1){n.rotation.x=-1.35,n.rotation.z=t*.08,F(a,L(),V,[t*.46,1.58,.02],[.13,.13,.16]);let e=F(a,R(),B,[t*.48,1.72,-.06],[.03,.24,.03]);e.rotation.x=-.35}else n.rotation.x=-.42,n.rotation.z=t*.22,F(a,L(),V,[t*.34,.88,.48],[.13,.13,.16])}F(a,R(),V,[0,1.59,0],[.12,.19,.12]),F(a,L(),V,[0,1.77,.01],[.27,.29,.25]),F(a,I(),be,[0,1.77,.232],[.4,.16,.055]);let o=F(a,L(),i,[0,1.99,-.005],[.34,.19,.32]);F(a,I(),i,[0,1.9,.11],[.49,.055,.35]),F(a,I(),B,[0,2.09,.13],[.16,.07,.13]),e===`officer`&&(o.scale.set(.32,.11,.29),F(a,I(),r,[0,2.02,0],[.42,.12,.38]),F(a,I(),i,[0,2.1,.02],[.2,.06,.2]));let s=N(`weapon-${e}`,1583669,{metalness:.6,roughness:.34}),c=N(`barrel-${e}`,5399403,{metalness:.75,roughness:.24});if(e===`cadet`){F(a,I(),s,[.2,.88,.42],[.09,.11,.17]),F(a,I(),s,[.2,.78,.4],[.045,.13,.06]);let e=F(a,I(),s,[0,1.64,-.38],[.14,.13,1]);e.rotation.y=.75;let t=F(a,R(),c,[-.34,1.64,-.73],[.04,.32,.04]);t.rotation.x=Math.PI/2,t.rotation.y=.75}else if(e===`officer`)F(a,I(),s,[-.26,.83,.1],[.09,.17,.09]),F(a,I(),B,[-.26,.94,.1],[.11,.045,.1]);else if(e===`gunner`){F(a,I(),s,[0,.97,.46],[.2,.16,.66]),F(a,R(),c,[0,.99,.88],[.06,.075,.38]).rotation.x=Math.PI/2,F(a,I(),s,[0,.78,.48],[.14,.28,.17]),F(a,I(),B,[.1,1.11,.42],[.2,.09,.17]);for(let e of[-1,1]){let t=F(a,R(),c,[e*.32,.55,.94],[.026,.5,.026]);t.rotation.z=e*.95,t.rotation.x=.1}}else if(e===`sniper`){F(a,I(),s,[.04,.99,.4],[.13,.12,.95]),F(a,R(),c,[.04,1,1.02],[.03,.045,.55]).rotation.x=Math.PI/2,F(a,I(),s,[.04,.84,.45],[.06,.2,.12]),F(a,R(),B,[.04,1.2,.52],[.055,.34,.055]);for(let e of[-1,1]){let t=F(a,R(),c,[e*.28,.45,.78],[.024,.52,.024]);t.rotation.z=e*.9}}else if(e===`grenadier`){F(a,I(),s,[.14,.94,.42],[.14,.13,.3]);let e=F(a,R(),c,[-.32,1.58,-.14],[.17,.74,.17]);e.rotation.z=.32,e.rotation.x=-.26;let t=F(a,R(),B,[-.5,1.97,-.37],[.2,.11,.2]);t.rotation.z=.32,t.rotation.x=-.26}else F(a,I(),s,[.12,.99,.46],[.15,.12,.58]),F(a,R(),c,[.12,1,.84],[.04,.05,.25]).rotation.x=Math.PI/2,F(a,I(),N(`engineer-pack`,5860438),[0,1.7,-.3],[.5,1.3,.26]),F(a,I(),i,[0,2.25,-.4],[.36,.14,.03]),F(a,R(),B,[-.41,1.03,.07],[.055,.46,.055]).rotation.z=Math.PI/2;F(a,I(),i,[.08,1.44,.31],[.09,.08,.03]);let l=ze[e];return a.rotation.x=l.lean,a.scale.set(l.width,l.height,l.width),a.name=`soldier-body`,t}for(let t of Object.keys(e))de.set(t,Be(t));function Ve(e){let t=new y,r=new y;t.add(r);let i=n[e],a=N(`enemy-${e}`,Number(i.color.replace(`#`,`0x`))||13851470,{roughness:.76,metalness:e===`armored`||e===`boss`?.38:.12}),o=N(`enemy-dark-${e}`,4010034,{roughness:.8}),s=Ha[e];if(e===`boss`){F(r,I(),a,[0,.7,0],[1.9,.8,1.18]);for(let e of[-1,1]){F(r,M(`boss-track-${e}`,()=>new l(.19,1.2,3,8)),o,[e*.85,.34,0],[1,.9,1.3]);for(let t=-1;t<=1;t++)F(r,R(),B,[e*.98,.36,t*.34],[.16,.19,.16])}F(r,R(),a,[0,1.22,0],[.52,.42,.52]),F(r,I(),o,[0,1.26,.61],[.24,.18,.86]),F(r,R(),N(`boss-muzzle`,16097357,{emissive:11751972,emissiveIntensity:.8}),[0,1.26,1.02],[.09,.095,.2]).rotation.x=Math.PI/2}else{let t=e===`swarm`?.6:e===`runner`?.8:1;if(F(r,z(),a,[0,.85*t,0],[1.15*s,1.14*t*s,s]),F(r,L(),a,[0,1.68*t*s,.02],[.27*s,.29*t*s,.25*s]),F(r,L(),o,[0,1.7*t*s,.22*s],[.28*s,.14*s,.055]),e===`scout`&&F(r,I(),N(`scout-pouch`,9071178,{roughness:.9}),[.24*s,.6*s,-.14*s],[.22*s,.22*s,.16*s]),e===`runner`){r.rotation.x=-.32;for(let e of[-1,1]){let t=F(r,I(),o,[e*.17*s,.6*s,-.52*s],[.07*s,.3*s,.05*s]);t.rotation.x=.5}}if(e===`swarm`){r.rotation.x=.2;for(let e of[-1,1]){let t=F(r,z(),a,[e*.34*s,.5*s,.05*s],[.4*s,.4*s,.4*s]);t.rotation.z=e*.9}}if(e===`armored`||e===`elite`){if(F(r,I(),N(`enemy-plate-${e}`,e===`elite`?16751189:7034448,{metalness:.48}),[0,.96,.19],[.75*s,.42*s,.15]),F(r,L(),o,[0,1.95*s,-.03],[.36*s,.22*s,.32*s]),e===`armored`)for(let e of[-1,1])F(r,I(),N(`armored-pauldron`,5786694,{metalness:.4}),[e*.31*s,1.18*s,-.02*s],[.24*s,.3*s,.46*s]);else{let e=F(r,M(`elite-crest`,()=>new v(.13,.52,6)),N(`elite-crest-mat`,16757350,{metalness:.42}),[0,1.98*s,-.22*s],[1,1,1]);e.rotation.x=1.95}}e===`medic`&&(F(r,I(),N(`medic-pack`,15195856),[0,.97,-.27],[.43,.48,.2]),F(r,I(),P(`medic-cross`,15228755),[0,1.02,-.38],[.28,.065,.025]),F(r,I(),P(`medic-cross-vertical`,15228755),[0,1.02,-.385],[.065,.28,.025]))}let c=e===`boss`?1.8:e===`elite`||e===`armored`?1.18:.92,u=F(t,I(),P(`health-back`,1121574,{transparent:!0,opacity:.95}),[0,e===`boss`?2.55:2.32,0],[c,.105,.055]),d=F(t,I(),P(`health-${e}`,e===`boss`?16756053:e===`medic`?8250269:Number(i.color.replace(`#`,`0x`))||14772312,{toneMapped:!1}),[0,e===`boss`?2.55:2.32,.035],[c,.072,.035]);return t.scale.setScalar(e===`boss`?1.45:1),{root:t,body:r,health:d,healthBack:u,kind:e}}function He(e){let t=de.get(e.role).clone(!0),n=t.getObjectByName(`soldier-body`);Ue(t,e.role,e.rank);let r=F(t,I(),P(`hidden-health`,16777215,{transparent:!0,opacity:0}),[0,-40,0],[0,0,0]);return{root:t,body:n,health:r,healthBack:r,kind:`tower:${e.role}`}}function Ue(e,t,n){for(let t of[...e.children])(t.name===`rank-ring`||t.name.startsWith(`rank-mark-`))&&e.remove(t);let r=N(`rank-${t}`,Va[t],{emissive:Va[t],emissiveIntensity:.2,metalness:.3}),i=new p(M(`rank-ring-${n}`,()=>new b(.56+n*.08,.018+n*.006,5,24)),r);i.position.set(0,.39,0),i.rotation.x=Math.PI/2,i.name=`rank-ring`,e.add(i);for(let t=0;t<n;t++){let n=F(e,I(),r,[.18+t*.105,1.52,.32],[.07,.04,.035]);n.rotation.z=Math.PI/4,n.name=`rank-mark-${t}`}e.userData.rank=n}function We(e){let t=e.kind,n=pe.get(t)?.pop();return n||=Ve(t),n.root.visible=!0,o.add(n.root),n}function Ge(){let e=new p(M(`selection-range`,()=>new c(.985,1,64)),P(`selection-range-mat`,5565681,{transparent:!0,opacity:.22,side:2,depthWrite:!1,toneMapped:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.05,e.renderOrder=5,o.add(e),e}function Ke(e,t){if(!e||!t){j&&(j.visible=!1);return}(!j||j.userData.role!==e)&&(j&&o.remove(j),j=de.get(e).clone(!0),j.traverse(t=>{t.isMesh&&(t.material=P(`ghost-${e}`,Va[e],{transparent:!0,opacity:.34,depthWrite:!1,wireframe:!1}))}),j.userData.role=e,o.add(j)),j.visible=!Re.has(t.id),j.position.set(t.x,.27,t.z)}function qe(e){let t=new y;if(e.kind===`airstrike`){let n=new y;n.name=`aircraft`,t.add(n);let r=F(n,I(),P(`airstrike-fuselage`,16765835,{toneMapped:!1}),[0,0,0],[.19,.14,1.05]);F(n,M(`aircraft-wing`,()=>new re(1,.055,.3)),P(`airstrike-wing`,6941178,{toneMapped:!1}),[0,-.025,-.08]),F(n,M(`aircraft-tail`,()=>new re(.48,.05,.19)),P(`airstrike-tail`,16765835,{toneMapped:!1}),[0,.015,-.42]),F(n,I(),P(`airstrike-fin`,6941178,{toneMapped:!1}),[0,.115,-.38],[.08,.19,.22]);let i=F(n,I(),P(`airstrike-trail`,16758863,{transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}),[0,-.01,-1.45],[.045,.045,2.4]);for(let e=0;e<5;e++){let n=new y;n.name=`strike-impact-${e}`,n.userData.fraction=.12+e*.19;let r=F(n,M(`airstrike-ring`,()=>new b(.8,.045,7,32)),P(`airstrike-ring-${e}`,7401978,{transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1}));r.rotation.x=Math.PI/2,r.name=`impact-ring`;let i=F(n,M(`airstrike-ring-outer`,()=>new b(1,.026,5,32)),P(`airstrike-outer-${e}`,16760417,{transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1}));i.rotation.x=Math.PI/2,i.name=`impact-outer`;let a=F(n,M(`airstrike-column`,()=>new ie(.13,.5,1,9)),P(`airstrike-column-${e}`,16753995,{transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1}),[0,.8,0],[1,1.6,1]);a.name=`impact-column`;let o=F(n,L(),P(`airstrike-impact-core-${e}`,9500415,{transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}),[0,.12,0],[.23,.23,.23]);o.name=`impact-core`,n.visible=!1,t.add(n)}return{root:t,core:r,halo:i,expires:e.time+1.4,eventId:e.id,kind:e.kind}}let n=e.kind===`rage`?16757575:e.kind===`headshot`?8838143:e.kind===`blast`?16747091:e.role?Va[e.role]:7919342,r=P(`effect-core-${e.kind}`,n,{transparent:!0,opacity:.94,depthWrite:!1,toneMapped:!1}),i=P(`effect-halo-${e.kind}`,n,{transparent:!0,opacity:.38,depthWrite:!1,toneMapped:!1}),a,o;if(e.kind===`rage`||e.kind===`blast`)a=F(t,M(`fx-ring-${e.kind}`,()=>new b(1,e.kind===`rage`?.055:.075,7,36)),r),a.rotation.x=Math.PI/2,o=F(t,M(`fx-halo-${e.kind}`,()=>new b(1,.025,5,36)),i),o.rotation.x=Math.PI/2;else{a=F(t,M(`fx-tracer`,()=>new ie(.045,.03,1,6)),r),o=F(t,M(`fx-tracer-trail`,()=>new ie(.012,.05,1,6)),i);let n=F(t,M(`fx-muzzle-flash`,()=>new v(.24,.56,7)),P(`effect-flash-${e.kind}`,e.kind===`headshot`?13626111:16757820,{transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),[0,.2,0]);n.name=`muzzle-flash`;let s=F(t,M(`fx-muzzle-spark`,()=>new u(.16,8,6)),P(`effect-spark-${e.kind}`,16776688,{transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));s.name=`muzzle-spark`;let c=F(t,M(`fx-impact`,()=>new u(.1,8,6)),P(`effect-impact-${e.kind}`,e.kind===`headshot`?12577279:16767392,{transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));c.name=`impact-spark`}return{root:t,core:a,halo:o,expires:e.time,eventId:e.id,kind:e.kind}}function Je(e,t){if(![`shot`,`headshot`,`rage`,`blast`,`airstrike`].includes(e.kind))return;let n=e.kind===`airstrike`?1.4:e.kind===`rage`?.62:e.kind===`blast`?.66:.32;if(me>=e.time+n)return;let r=O.get(e.id);r||(r=(k.get(e.kind)??[]).pop()??qe(e),r.kind=e.kind,r.eventId=e.id,r.expires=e.time+n,r.root.visible=!0,o.add(r.root),O.set(e.id,r));let i=new s(e.from.x,.95,e.from.z),a=new s(e.to.x,e.kind===`rage`?.055:.72,e.to.z),c=Math.max(0,me-e.time),l=Math.max(.04,r.expires-e.time),u=Math.min(1,c/l);if(e.kind===`airstrike`){let n=e.id%2==0,i=new s(n?-14:14,0,n?-7:7),a=new s(-i.x,0,-i.z),o=r.root.getObjectByName(`aircraft`),d=u;o.visible=!t,o.position.set(i.x+(a.x-i.x)*d,8.6,i.z+(a.z-i.z)*d),o.rotation.y=Math.atan2(a.x-i.x,a.z-i.z),r.core.material.opacity=.96,r.halo.material.opacity=t?0:(1-Math.max(0,u-.88)/.12)*.82,r.halo.scale.z=Math.min(2.4,u*2.4);for(let e=0;e<5;e++){let n=r.root.getObjectByName(`strike-impact-${e}`),o=n.userData.fraction,s=i.x+(a.x-i.x)*o,u=i.z+(a.z-i.z)*o;n.position.set(s,.04,u);let d=c-o*l;n.visible=t||d>=0&&d<.62;let f=n.getObjectByName(`impact-ring`),p=n.getObjectByName(`impact-outer`),m=n.getObjectByName(`impact-column`),h=n.getObjectByName(`impact-core`);if(t)f.scale.setScalar(.68),p.scale.setScalar(.9),f.material.opacity=.42,p.material.opacity=.32,m.visible=!1,h.visible=!1;else{let e=Math.max(0,d),t=Math.max(0,1-e/.62);f.scale.setScalar(.48+Math.min(e,.62)*2.3),p.scale.setScalar(.3+Math.min(e,.62)*2.8),f.material.opacity=t*.86,p.material.opacity=t*.55,m.visible=d>=0&&d<.34,m.scale.y=Math.max(.08,(1-Math.max(0,d)/.34)*2.5),m.position.y=m.scale.y*.48,m.material.opacity=Math.max(0,.7-Math.max(0,d)*1.9),h.visible=m.visible,h.material.opacity=t*.8,h.scale.setScalar(.18+Math.min(e,.3)*.75)}}}else if(e.kind===`rage`||e.kind===`blast`){r.root.position.set(e.kind===`rage`?e.from.x:e.to.x,.06,e.kind===`rage`?e.from.z:e.to.z);let n=e.kind===`rage`?t?1:.78+u*.24:t?.7:.3+u*1.85;r.core.scale.setScalar(n),r.halo.scale.setScalar(n*1.24),r.core.material.opacity=e.kind===`rage`?.56:(1-u)*.94,r.halo.material.opacity=(1-u)*.36}else{let n=a.clone().sub(i),o=Math.max(.001,n.length());r.root.position.copy(i),r.root.quaternion.setFromUnitVectors(new s(0,1,0),n.clone().normalize());let c=t?1:Math.min(1,u/.7),l=c*o,d=Math.min(.5,o*.32);r.core.scale.set(1,d,1),r.core.position.set(0,Math.max(d*.5,l-d*.5),0),r.core.material.opacity=c>=1?0:e.kind===`headshot`?1:.95;let f=Math.max(.001,l-d);r.halo.scale.set(1,f,1),r.halo.position.set(0,f*.5,0),r.halo.material.opacity=c>=1?0:(1-u)*.2;let p=Math.max(0,1-u/.3),m=r.root.getObjectByName(`muzzle-flash`);m&&(m.material.opacity=t?0:p,m.scale.set(.8+p*.85,.75+p*1.05,.8+p*.85));let h=r.root.getObjectByName(`muzzle-spark`);h&&(h.material.opacity=t?0:p*.9,h.scale.setScalar(.65+p*1.15));let g=r.root.getObjectByName(`impact-spark`);if(g){let t=c>=1?Math.max(0,1-(u-.7)/.3):0;g.position.set(0,o,0),g.material.opacity=t*(e.kind===`headshot`?1:.85),g.scale.setScalar(.55+(1-t)*1.1)}}}function Ye(e,t,n,r){e.root.position.set(t,r,n)}function Xe(){let e=Math.max(1,r.clientWidth),t=Math.max(1,r.clientHeight),n=e/t,i=e<650;S.position.set(i?22:0,i?30:22,i?0:20),S.lookAt(0,0,0);let a=i?Math.max(15.5,19/n):Math.max(14,27/n);S.left=-a*n/2,S.right=a*n/2,S.top=a/2,S.bottom=-a/2,S.updateProjectionMatrix(),C.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),C.setSize(e,t,!1)}Xe();let Ze=new ResizeObserver(Xe);Ze.observe(r);function Qe(){ge||he||(he=!0,a())}C.backend.device?.lost.then(()=>Qe()).catch(()=>Qe());let $e=e=>{e.preventDefault(),Qe()};w.addEventListener(`webglcontextlost`,$e);function et(t,n,r,i){if(ge||he)return;if(_e&&t.time<_e.time){for(let e of O.values()){o.remove(e.root),e.root.visible=!1;let t=k.get(e.kind)??[];t.push(e),k.set(e.kind,t)}O.clear()}me=t.time,_e=t,Re.clear();let a=new Set,s=new Set,c=new Map(t.enemies.map(e=>[e.id,e]));for(let e of t.towers){Re.add(e.pad);let n=`tower:${e.id}`;a.add(n);let r=D.get(n);r||(r=(fe.get(e.role)??[]).pop()??He(e),r.kind!==`tower:${e.role}`&&(r=He(e)),r.root.userData.rank!==e.rank&&Ue(r.root,e.role,e.rank),r.body=r.root.getObjectByName(`soldier-body`),r.root.visible=!0,D.set(n,r),o.add(r.root)),r.root.userData.rank!==e.rank&&Ue(r.root,e.role,e.rank);let i=Le.get(e.pad),s=i?.x??e.x,l=i?.z??e.z;if(Ye(r,s,l,.34),r.body.rotation.y=0,e.targetId!=null){let t=c.get(e.targetId);t&&(r.body.rotation.y=Math.atan2(t.x-s,t.z-l))}let u=t.time<e.rageUntil,d=r.root.getObjectByName(`rage-aura`);u&&!d?(d=F(r.root,M(`rage-aura-geo`,()=>new b(.83,.035,7,48)),P(`rage-aura-mat`,16760153,{transparent:!0,opacity:.76,toneMapped:!1})),d.rotation.x=Math.PI/2,d.position.y=.37,d.name=`rage-aura`):d&&(d.visible=u)}for(let e of t.enemies){let n=`enemy:${e.id}`;s.add(n);let r=D.get(n);r||(r=We(e),D.set(n,r)),Ye(r,e.x,e.z,.02),r.root.rotation.y=0;let i=Wa(e.progress);r.body.rotation.y=Math.atan2(i.x,i.z);let a=Math.max(0,Math.min(1,e.hp/Math.max(1,e.maxHp)));r.health.scale.x=(r.healthBack.scale.x||1)*a,r.health.position.x=-(r.healthBack.scale.x||1)*(1-a)*.5;let o=r.root.getObjectByName(`slow-aura`),c=t.time<e.slowUntil;c&&!o?(o=F(r.root,M(`slow-aura-geo`,()=>new b(.72,.035,7,36)),P(`slow-aura-mat`,5102833,{transparent:!0,opacity:.58,toneMapped:!1})),o.rotation.x=Math.PI/2,o.position.y=.06,o.name=`slow-aura`):o&&(o.visible=c)}for(let[e,t]of[...D.entries()])if(e.startsWith(`enemy:`)&&!s.has(e)){o.remove(t.root),t.root.visible=!1;let n=t.kind,r=pe.get(n)??[];r.push(t),pe.set(n,r),D.delete(e)}else if(e.startsWith(`tower:`)&&!a.has(e)){o.remove(t.root),t.root.visible=!1,D.delete(e);let n=t.kind.slice(6),r=fe.get(n)??[];r.push(t),fe.set(n,r)}let l=n==null?void 0:Le.get(n),u=n==null?void 0:t.towers.find(e=>e.pad===n),d=u?.role??r;if(l&&d){A||=Ge();let t=e[d].ranks[u?.rank??0];A.position.set(l.x,.055,l.z),A.scale.set(t.range,t.range,1)}else A&&(A.visible=!1);A&&l&&d&&(A.visible=!0),Ke(r,l);for(let e of t.events)Je(e,i);for(let[e,n]of[...O.entries()])if(t.time>=n.expires){o.remove(n.root),n.root.visible=!1,O.delete(e);let t=k.get(n.kind)??[];t.push(n),k.set(n.kind,t)}C.render(o,S)}function tt(e){let t=r.getBoundingClientRect(),n=new s(e.x,.35,e.z).project(S);return{x:(n.x*.5+.5)*t.width,y:(-n.y*.5+.5)*t.height}}function nt(){if(!ge){ge=!0,Ze.disconnect(),w.removeEventListener(`webglcontextlost`,$e),C.setAnimationLoop(null),C.dispose(),C.domElement.remove();for(let e of T.values())e.dispose();for(let e of E.values())e.dispose();T.clear(),E.clear(),D.clear(),de.clear(),fe.clear(),pe.clear(),O.clear(),k.clear(),o.clear()}}return{render:et,project:tt,backend:ue,dispose:nt}}var Ka=e=>10**(e/20),qa={pistol:`pistol-shot.wav`,rifle:`rifle-shot.wav`,burst:`gunner-burst.wav`},Ja={combat:8,casing:3,ui:4},Ya={type:`lowpass`,frequency:1500,q:.5},Xa={type:`highpass`,frequency:950,q:.8},Za={type:`bandpass`,frequency:1800,q:1.4},Qa={type:`lowpass`,frequency:260,q:.7},$a={type:`lowpass`,frequency:650,q:.6},eo={type:`lowpass`,frequency:500,q:.5},to=class{context=null;master=null;enabled=!1;loading=null;buffers=new Map;casing=null;detonation=null;muzzle=null;impact=null;voices=new Set;lastShot=-1/0;lastCasing=-1/0;lastImpact=-1/0;lastKill=-1/0;lastRage=-1/0;lastBossArrival=-1/0;lastRoleShot=new Map;rageEnds=new Map;lastSimulationTime=-1/0;async setEnabled(e){if(this.enabled=e,!e){this.context&&this.master&&this.master.gain.setTargetAtTime(0,this.context.currentTime,.008);for(let e of[...this.voices])this.stop(e);return}if(!this.context){this.context=new AudioContext,this.master=this.context.createGain(),this.master.gain.value=0;let e=this.context.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=10,e.ratio.value=8,e.attack.value=.003,e.release.value=.18,this.master.connect(e).connect(this.context.destination),this.casing=this.createCasing(),this.detonation=this.createDetonation(),this.muzzle=this.createMuzzleBlast(),this.impact=this.createImpact()}await this.context.resume(),this.enabled&&this.master.gain.setTargetAtTime(Ka(-10),this.context.currentTime,.02),this.loading??=this.loadClips(),await this.loading}bossArrival(){let e=this.context;if(!this.enabled||!e||e.state!==`running`)return;let t=e.currentTime;t-this.lastBossArrival<1||(this.lastBossArrival=t,this.tone(90,.6,.2,t,`ui`,!0),this.tone(150,.55,.14,t+.09,`ui`,!0),this.tone(45,.85,.22,t+.18,`ui`,!0))}play(e){let t=this.context;if(!this.enabled||!t||t.state!==`running`)return;if(e.time<this.lastSimulationTime){this.rageEnds.clear(),this.lastRoleShot.clear(),this.lastShot=-1/0,this.lastCasing=-1/0,this.lastImpact=-1/0,this.lastKill=-1/0,this.lastRage=-1/0;for(let e of[...this.voices])this.stop(e)}this.lastSimulationTime=e.time;let n=t.currentTime;if(e.kind===`rage`){this.rageEnds.set(`${e.from.x}:${e.from.z}`,e.time+5),this.rageCue(n);return}if(e.kind===`kill`){this.killCue(e,n);return}if((e.kind===`shot`||e.kind===`blast`)&&e.role){let t=e.role,r=t===`gunner`&&e.time<(this.rageEnds.get(`${e.from.x}:${e.from.z}`)??0),i=r?.22:t===`sniper`?.15:.065;if(n-(this.lastRoleShot.get(t)??-1/0)<i||t!==`sniper`&&n-this.lastShot<.045)return;this.lastRoleShot.set(t,n),this.lastShot=n;let a=e.from.x/24,o=!1;if(t===`grenadier`)o=this.sample(`rifle`,n,-9,.42+e.id%3*.01,a,Qa,!0)||this.tone(85,.25,.16,n,`combat`,!0),o&&this.detonation&&this.buffer(this.detonation,n+.045,-6,.95+e.id%5*.01,`combat`,a,$a,!1,0,.34);else if(t===`engineer`)o=this.sample(`pistol`,n,-9,.9+e.id%5*.01,a,Xa,!1)||this.tone(170,.055,.05,n,`combat`,!0);else if(t===`officer`)o=this.sample(`pistol`,n,-8,1.05+e.id%5*.01,a,Za,!1)||this.tone(170,.055,.05,n,`combat`,!0),o&&this.tone(1400,.05,.025,n+.015,`ui`,!1);else{let i=t===`sniper`&&this.buffers.has(`suppressed`),s=i?`suppressed`:t===`sniper`?`rifle`:t===`gunner`?r?`burst`:`rifle`:`pistol`,c=t===`sniper`&&!i?.75:.98+e.id%5*.01,l=i?-8:t===`sniper`?-15:r?-14:s===`rifle`?-11:-7,u=t===`sniper`&&!i?Ya:null;o=this.sample(s,n,l,c,a,u,t===`sniper`)||this.tone(t===`sniper`?95:170,.055,.055,n,`combat`,!0)}if(o&&t!==`grenadier`&&this.muzzle){let r=t===`gunner`||t===`sniper`;this.buffer(this.muzzle,n,r?-13:-16,(t===`sniper`?.82:r?.95:1.12)+e.id%4*.012,`combat`,a,t===`sniper`?Ya:null,!1,0,.2)}if(o&&t!==`grenadier`&&this.impact&&n-this.lastImpact>=.12&&(this.lastImpact=n,this.buffer(this.impact,n+.22,-19,.94+e.id%5*.03,`combat`,a,null,!1,0,.09)),o&&t!==`grenadier`&&n-this.lastCasing>=.2){this.lastCasing=n;let r=(t===`sniper`?.32:t===`gunner`?.2:.18)+e.id%3*.012,i=this.buffers.get(`casing`)??this.casing;this.buffer(i,n+r,this.buffers.has(`casing`)?-18:-6,.96+e.id%7*.012,`casing`,a,null,!1,0,Math.min(i.duration,.85))}return}let r={airstrike:[38,.85,.13],headshot:[800,.12,.07],leak:[120,.3,.085],deploy:[520,.12,.075],upgrade:[750,.18,.08],"wave-clear":[960,.35,.09]}[e.kind];r&&this.tone(...r,n,`ui`,!1,e.kind===`upgrade`)}killCue(e,t){if(!(t-this.lastKill<.045)){if(this.lastKill=t,e.boss){this.tone(200,.55,.22,t,`combat`,!0),this.tone(120,.5,.18,t+.06,`combat`,!0),this.detonation&&this.buffer(this.detonation,t,-4,.5,`combat`,0,eo,!0,0,.4);return}this.tone(1050,.05,.05,t,`ui`,!0,!0),this.tone(1575,.035,.03,t+.016,`ui`,!0,!0)}}rageCue(e){e-this.lastRage<.4||(this.lastRage=e,this.tone(260,.32,.15,e,`ui`,!0,!0),this.tone(390,.26,.1,e+.04,`ui`,!0,!0))}async loadClips(){let e=new URL(`./`,document.baseURI),t=Object.entries(qa).map(([t,n])=>[t,new URL(`audio/${n}`,e)]);location.hostname===`arcade.shoemoney.com`&&t.push([`suppressed`,new URL(`/last-engineer/game/audio/sfx/pistol_suppressed.mp3`,location.origin)],[`casing`,new URL(`/last-engineer/game/audio/sfx/bullet_casing.mp3`,location.origin)]),await Promise.allSettled(t.map(async([e,t])=>{let n=await fetch(t,{signal:AbortSignal.timeout(6e3)});n.ok&&this.buffers.set(e,await this.context.decodeAudioData(await n.arrayBuffer()))}))}sample(e,t,n,r,i,a,o){let s=this.buffers.get(e);if(!s)return!1;let c=e===`suppressed`?s.duration:e===`burst`?.62:a?.44:.58;return this.buffer(s,t,n,r,`combat`,i,a,o,e===`burst`||e===`suppressed`?0:.1,c)}buffer(e,t,n,r,i,a,o=null,s=!1,c=0,l=e.duration){let u=this.context,d=u.createBufferSource();d.buffer=e,d.playbackRate.value=r;let f=this.voice(d,i,s);if(!f)return!1;let p=Math.min(l,e.duration-c)/r;f.gain.gain.setValueAtTime(Ka(n),t),f.gain.gain.setValueAtTime(Ka(n),t+Math.max(0,p-.035)),f.gain.gain.exponentialRampToValueAtTime(1e-4,t+p);let m=d;if(o){let e=u.createBiquadFilter();e.type=o.type,e.frequency.value=o.frequency,e.Q.value=o.q??.5,m.connect(e),m=e,f.nodes.push(e)}let h=u.createStereoPanner();return h.pan.value=Math.max(-.65,Math.min(.65,a)),m.connect(h).connect(f.gain),f.nodes.push(h),d.start(t,c,Math.min(l,e.duration-c)),!0}tone(e,t,n,r,i,a=!1,o=!1){let s=this.context.createOscillator(),c=this.voice(s,i,i===`ui`);return c?(s.type=a?`triangle`:`sine`,s.frequency.setValueAtTime(e,r),s.frequency.exponentialRampToValueAtTime(e*(o?1.5:.5),r+t),c.gain.gain.setValueAtTime(n,r),c.gain.gain.exponentialRampToValueAtTime(1e-4,r+t),s.connect(c.gain),s.start(r),s.stop(r+t),!0):!1}voice(e,t,n){let r=[...this.voices].filter(e=>e.group===t);if(r.length>=Ja[t]){if(!n)return null;this.stop(r[0])}let i=this.context.createGain();i.connect(this.master);let a={source:e,gain:i,nodes:[],group:t};return this.voices.add(a),e.onended=()=>{this.voices.delete(a),e.disconnect(),i.disconnect();for(let e of a.nodes)e.disconnect()},a}stop(e){this.voices.delete(e);try{e.source.stop()}catch{}}createCasing(){let e=this.context.sampleRate,t=this.context.createBuffer(1,Math.round(e*.26),e),n=t.getChannelData(0),r=19;for(let t=0;t<n.length;t++){let i=t/e,a=i<.11?i:i-.11,o=i<.11?.1:.045;r=Math.imul(r,1664525)+1013904223>>>0;let s=r/4294967296*2-1;n[t]=o*Math.exp(-a*45)*(Math.sin(a*4200*Math.PI*2)+Math.sin(a*6700*Math.PI*2)*.55+s*.2)}return t}createMuzzleBlast(){let e=this.context.sampleRate,t=this.context.createBuffer(1,Math.round(e*.24),e),n=t.getChannelData(0),r=8191;for(let t=0;t<n.length;t++){let i=t/e;r=Math.imul(r,1664525)+1013904223>>>0;let a=r/4294967296*2-1,o=Math.min(1,i/.0012),s=a*Math.exp(-i*46)*.85,c=Math.sin(i*132*Math.PI*2)*Math.exp(-i*26)*.5,l=Math.sin(i*1900*Math.PI*2)*Math.exp(-i*150)*.18;n[t]=o*(s+c+l)}return t}createImpact(){let e=this.context.sampleRate,t=this.context.createBuffer(1,Math.round(e*.09),e),n=t.getChannelData(0),r=4099;for(let t=0;t<n.length;t++){let i=t/e;r=Math.imul(r,1664525)+1013904223>>>0;let a=r/4294967296*2-1;n[t]=Math.min(1,i/8e-4)*(Math.sin(i*210*Math.PI*2)*.6+a*.35)*Math.exp(-i*60)}return t}createDetonation(){let e=this.context.sampleRate,t=this.context.createBuffer(1,Math.round(e*.4),e),n=t.getChannelData(0),r=733;for(let t=0;t<n.length;t++){let i=t/e;r=Math.imul(r,1664525)+1013904223>>>0;let a=r/4294967296*2-1,o=Math.sin(i*5200*Math.PI*2)*Math.exp(-i*90)*.25;n[t]=a*Math.exp(-i*9)*.9+o}return t}},no=`modulepreload`,ro=function(e,t){return new URL(e,t).href},io={},ao=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ro(t,n),t=s(t),t in io)return;io[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:no,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},oo={cadet:ba,gunner:Ea,sniper:Ta,grenadier:_a,engineer:ja,officer:ma},q=e=>la(e,{attributes:{"aria-hidden":`true`}}).html.join(``),so=Object.keys(e),co=e=>Math.floor(e).toLocaleString(`en-US`),J=e=>document.querySelector(e),Y=Ra(7341),lo=new to,X=`cadet`,uo=null,fo=null,po=1,mo=!1,ho=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,go=null,_o=!1,vo=-1,yo=new Set,bo=``,xo=!1,So=null,Co=null,wo=0,To=null,Eo=0;try{Eo=Number(localStorage.getItem(`smtd-best-v1`))||0}catch{}J(`#app`).innerHTML=`
  <header class="site-header"><a class="brand" href="https://arcade.shoemoney.com/" aria-label="ShoeMoney Arcade"><img src="./brand/shoemoney.png" alt="" width="52" height="52"><span>SHOEMONEY<span class="brand-sub">ARCADE / ORIGINALS</span></span></a><nav aria-label="Game navigation"><button id="manual-open" class="quiet" aria-label="Field manual">${q(Ma)}<span>Field manual</span></button><button id="sound" class="icon-button" aria-label="Enable sound" aria-pressed="false">${q(va)}</button><a class="icon-button source-link" href="https://github.com/shoemoney/SMA-smtd" aria-label="Open source on GitHub">${q(pa)}</a></nav></header>
  <main>
    <section class="mission-heading"><div><p class="eyebrow"><span class="status-light"></span> OPERATION IRON DIVIDEND</p><h1>HOLD THE <span>LINE.</span></h1></div><p class="mission-intro">Six soldiers. Thirty waves. <br>One outpost worth defending.</p></section>
    <section class="command-layout" aria-label="Tower defense game">
      <div class="battle-column">
        <div class="battle-hud"><div class="hud-stat">${q(Da)}<div><span>BASE INTEGRITY</span><strong id="lives">20 <small>/ 20</small></strong></div></div><div class="hud-stat">${q(Aa)}<div><span>FUNDS</span><strong id="cash">100</strong></div></div><div class="hud-stat">${q(Ca)}<div><span>WAVE</span><strong id="wave">00 <small>/ 30</small></strong></div></div><div class="hud-stat score-stat">${q(ua)}<div><span>SCORE</span><strong id="score">0</strong></div></div></div>
        <div id="battlefield" class="battlefield" aria-label="Guardian Outpost battlefield">
          <img class="robot-backdrop" src="./brand/robot.webp" alt="" aria-hidden="true">
          <div class="battle-grid"></div><div id="scene" class="scene"></div><div id="pads" class="pad-layer" aria-label="Deployment positions"></div>
          <div class="field-caption"><span><span class="status-light"></span> GUARDIAN OUTPOST</span><span id="renderer-status">INITIALIZING</span></div>
          <div class="field-bottom"><span id="field-message">Choose a soldier, then an empty position.</span><button id="fullscreen" class="icon-button" aria-label="Expand game">${q(da)}</button></div>
          <div id="loading" class="field-overlay"><span class="loading-orbit"></span><h2>Preparing the outpost</h2><p>Establishing battlefield visuals.</p></div>
          <div id="pause-overlay" class="field-overlay paused-overlay" hidden><h2>Orders on hold.</h2><p>Your squad is waiting. Take your time.</p><button id="resume" class="primary">${q(ha)} Resume operation</button></div>
        </div>
        <div class="battle-controls"><div class="wave-progress"><span id="phase-label">DEPLOYMENT PHASE</span><div class="progress-track"><div id="wave-progress"></div></div><span id="hostiles">Prepare your squad</span></div><div class="control-actions"><button id="airstrike" class="airstrike-button">${q(fa)} Airstrike · 3</button><button id="speed" class="quiet" aria-label="Switch to double speed">1× speed</button><button id="pause" class="icon-button" aria-label="Pause operation">${q(ka)}</button><button id="send-wave" class="primary">${q(ha)} Send wave 01</button></div></div>
      </div>
      <aside class="command-panel"><div class="panel-kicker">${q(ma)} COMMAND CENTER</div><div id="inspector"></div><div class="intel"><p class="eyebrow">NEXT CONTACT</p><h3 id="intel-title"></h3><p id="intel-brief"></p><div id="intel-tags" class="intel-tags"></div></div><p id="notice" class="notice" role="status" aria-live="polite">Choose a soldier. Select a numbered position to deploy.</p></aside>
    </section>
    <section class="roster-section" aria-labelledby="roster-heading"><div class="section-heading"><h2 id="roster-heading">YOUR SQUAD<span>Choose. Deploy. Upgrade.</span></h2><span class="keyboard-hint">Hover for stats · Keys 1–6</span></div><div class="roster">${so.map((t,n)=>`<button class="unit-card ${t===`cadet`?`selected`:``}" data-role="${t}" aria-pressed="${t===`cadet`}" style="--unit-color:${e[t].color}"><div class="unit-card-top"><span class="unit-icon">${q(oo[t])}</span><span class="unit-key">0${n+1}</span></div><strong>${e[t].name}</strong><span class="unit-tag">${e[t].tag}</span><span class="unit-cost">${q(Aa)} $${co(e[t].ranks[0].cost)}<span class="unit-purchase">DEPLOY</span></span></button>`).join(``)}</div></section>
    <footer class="game-footer"><p>${q(Da)} BUILT TO DEFEND. MADE TO PLAY.</p><div><button id="help-open" class="text-button">How to play</button><button id="restart-open" class="text-button">Restart operation</button><button id="motion" class="text-button" aria-pressed="${ho}">Motion: ${ho?`reduced`:`full`}</button></div></footer>
  </main>
  <div id="unit-tooltip" class="unit-tooltip" role="tooltip" hidden></div>
  <dialog id="manual" class="manual-dialog" aria-labelledby="manual-title"><div class="dialog-heading"><div><p class="eyebrow">SHOEMONEY FIELD MANUAL</p><h2 id="manual-title">Know your battlefield.</h2></div><button class="icon-button" data-close="manual" aria-label="Close field manual">${q(ya)}</button></div><div id="manual-content"></div></dialog>
  <dialog id="help" class="small-dialog" aria-labelledby="help-title"><div class="dialog-heading"><h2 id="help-title">Your first deployment.</h2><button class="icon-button" data-close="help" aria-label="Close help">${q(ya)}</button></div><ol class="help-steps"><li><strong>Choose a soldier.</strong> Select any of the six soldier cards. Hover a card for its stats, or tap to select it. A Cadet is a reliable first recruit.</li><li><strong>Take a position.</strong> Select an empty numbered pad. The blue circle shows the selected soldier's range.</li><li><strong>Launch the operation.</strong> After your first launch, new waves arrive automatically after a six-second break. A boss comes every five waves with escorts.</li><li><strong>Reinforce the line.</strong> Select a deployed soldier to upgrade, change targeting, or sell for 70% of the supplies invested.</li></ol><p>Stop every enemy before it reaches headquarters. Enemies that escape damage base integrity. Defend all 30 waves to win. You start with $100. Cadets cost $10. Normal monsters pay $1 each on wave one, increasing by $1 every three waves.</p><p>You have three airstrikes for the entire run. They clear current normal enemies and remove 35% of each current boss's maximum health. Strikes need 12 seconds to rearm. Future enemies are unaffected.</p><p>Space launches the operation or pauses combat. A calls an airstrike. Escape closes a panel. You can deploy and upgrade during combat. Each soldier has three upgrades.</p><button class="primary" data-close="help">${q(xa)} Ready for duty</button></dialog>
  <dialog id="restart" class="small-dialog" aria-labelledby="restart-title"><div class="dialog-heading"><h2 id="restart-title">Start a fresh operation?</h2><button class="icon-button" data-close="restart" aria-label="Cancel restart">${q(ya)}</button></div><p>Your current squad and wave progress will reset. Your personal best stays saved.</p><div class="dialog-actions"><button class="quiet" data-close="restart">Keep defending</button><button id="restart-confirm" class="primary">${q(Sa)} Restart</button></div></dialog>
  <dialog id="result" class="small-dialog result-dialog" aria-labelledby="result-title"><p class="eyebrow">OPERATION REPORT</p><h2 id="result-title"></h2><p id="result-copy"></p><div class="result-stats" id="result-stats"></div><p id="personal-best"></p><form id="score-form"><label for="player-name">Your name on the arcade board</label><input id="player-name" name="name" maxlength="24" placeholder="Commander" required autocomplete="nickname"><button class="quiet" id="submit-score" type="submit">${q(ua)} Submit score</button><p id="score-message">Scores are reported by your browser.</p></form><div class="dialog-actions"><button class="quiet" data-close="result">Review battlefield</button><button id="play-again" class="primary">${q(Sa)} Play again</button></div></dialog>
`;var Do=i.map(t=>{let n=document.createElement(`button`);return n.className=`pad-button`,n.textContent=String(t.id+1).padStart(2,`0`),n.setAttribute(`aria-label`,`Position ${t.id+1}, ${t.name}, empty`),n.dataset.pad=String(t.id),n.addEventListener(`click`,()=>{if(!_o)return;let n=Y.frame().towers.find(e=>e.pad===t.id);fo=t.id,n?(X=n.role,Z(`${e[n.role].name} selected. Rank ${n.rank+1}.`)):X&&Q({kind:`place`,role:X,pad:t.id}),$(!0)}),J(`#pads`).append(n),n});function Z(e){J(`#notice`).textContent=e}function Q(t){if(!_o&&(t.kind===`airstrike`||t.kind===`start-wave`||t.kind===`pause`&&!t.value))return Z(`Restore the battlefield before resuming the operation.`),!1;let n=Y.command(t);return n.ok?t.kind===`place`?Z(`${e[t.role].name} deployed to position ${t.pad+1}.`):t.kind===`upgrade`?Z(`Promotion confirmed. Your soldier is ready.`):t.kind===`sell`?(fo=null,Z(`Soldier recalled. 70% of invested supplies returned.`)):t.kind===`airstrike`?Z(`Airstrike inbound. Current normal enemies cleared. Bosses hit for 35% of maximum health.`):t.kind===`start-wave`&&(Z(`Wave ${Y.frame().wave} incoming. Hold the line.`),Y.frame().wave===1&&No()):Z(n.reason),$(!0),n.ok}function $(t=!1){let n=Y.frame();J(`#lives`).innerHTML=`${n.lives} <small>/ 20</small>`,J(`#cash`).textContent=`$${co(n.cash)}`,J(`#wave`).innerHTML=`${String(n.wave).padStart(2,`0`)} <small>/ 30</small>`,J(`#score`).textContent=co(n.score),J(`#phase-label`).textContent=n.paused?`OPERATION PAUSED`:n.phase===`build`?`DEPLOYMENT PHASE`:n.phase===`combat`?`CONTACT IN PROGRESS`:n.phase===`victory`?`OUTPOST SECURED`:`OUTPOST LOST`;let o=Math.max(0,n.waveTotal-n.spawned+n.enemies.length);J(`#hostiles`).textContent=n.phase===`combat`?`${o} hostiles remaining`:n.phase===`build`?n.wave?`Next wave in ${Math.ceil(n.nextWaveIn??0)} seconds`:`Prepare your squad`:`${n.stats.kills} hostiles stopped`,J(`#wave-progress`).style.width=`${n.waveTotal?Math.max(0,(n.waveTotal-o)/n.waveTotal*100):0}%`;let s=J(`#send-wave`);s.disabled=!_o||n.phase!==`build`||n.paused||n.wave>0,s.innerHTML=`${q(ha)} ${n.phase===`combat`?`Wave in progress`:n.wave>=30?`Operation complete`:n.wave>0?`Next wave in ${Math.ceil(n.nextWaveIn??0)}s`:`Launch operation`}`;let c=J(`#airstrike`);c.disabled=!_o||n.paused||n.phase!==`combat`||n.airstrikes===0||n.airstrikeReadyIn>0||n.enemies.length===0,c.innerHTML=`${q(fa)} ${n.airstrikeReadyIn>0?`Rearming ${Math.ceil(n.airstrikeReadyIn)}s`:`Airstrike · ${n.airstrikes}`}`,c.setAttribute(`aria-label`,`Call airstrike, ${n.airstrikes} remaining${n.airstrikeReadyIn>0?`, rearming`:``}`),J(`#pause`).innerHTML=q(n.paused?ha:ka),J(`#pause`).setAttribute(`aria-label`,n.paused?`Resume operation`:`Pause operation`),J(`#pause-overlay`).hidden=!n.paused;let l=r[Math.min(n.phase===`combat`?n.wave-1:n.wave,r.length-1)];J(`#intel-title`).textContent=`${String(l.number).padStart(2,`0`)} / ${l.name}`,J(`#intel-brief`).textContent=l.briefing,J(`#intel-tags`).innerHTML=`<span>${l.groups.reduce((e,t)=>e+t.count,0)} contacts</span><span>${q(Aa)} $${l.reward} clear bonus</span><span>$${a(l.number)} per monster</span>${l.bossName?`<span class="danger-tag">BOSS CONTACT</span>`:``}`;let u=uo?void 0:n.towers.find(e=>e.pad===fo),d=uo??u?.role??X??`cadet`,f=e[d],p=u?.rank??0,m=f.ranks[p],h=f.ranks[p+1],g=`${d}:${u?.id}:${p}:${u?.policy}`;(t||g!==bo)&&(bo=g,J(`#inspector`).innerHTML=`<div class="selected-unit" style="--unit-color:${f.color}"><div class="selected-unit-top"><div class="inspector-icon">${q(oo[d])}</div><span class="unit-rank">${u?`RANK ${p+1} / 4`:`READY TO DEPLOY`}</span></div><h2>${f.name}</h2><p class="unit-subtitle">${m.name}</p><p class="unit-description">${f.description}</p><div class="unit-stats"><div><span>DAMAGE</span><strong>${m.damage}</strong></div><div><span>FIRE / SEC</span><strong>${String(m.rate)}</strong></div><div><span>RANGE</span><strong>${m.range.toFixed(1)}m</strong></div></div><div class="special"><span>${q(d===`cadet`?Na:Oa)} ${d===`cadet`?`STANDARD ISSUE`:`SPECIAL ABILITY`}</span><p>${f.special}</p></div>${u?`<label class="target-label" for="target-policy">Target priority</label><select id="target-policy"><option value="first" ${u.policy===`first`?`selected`:``}>First to headquarters</option><option value="strongest" ${u.policy===`strongest`?`selected`:``}>Strongest enemy</option><option value="weakest" ${u.policy===`weakest`?`selected`:``}>Weakest enemy</option></select><div class="promotion">${h?`<button id="upgrade" class="primary">${q(ua)} Upgrade · $${co(h.cost)}</button><p>${h.name} · ${h.damage} damage · ${String(h.rate)} shots/sec</p>`:`<p class="max-rank">Maximum rank. Fully equipped.</p>`}<button id="sell" class="text-button">${q(ga)} Recall for $${co(Math.floor(u.invested*.7))}</button></div>`:`<div class="deploy-prompt">${q(Aa)} <strong>$${m.cost} deployment</strong><p>Select an empty numbered position.</p></div>`}</div>`,J(`#upgrade`)?.addEventListener(`click`,()=>Q({kind:`upgrade`,tower:u.id})),J(`#sell`)?.addEventListener(`click`,()=>Q({kind:`sell`,tower:u.id})),J(`#target-policy`)?.addEventListener(`change`,e=>Q({kind:`target`,tower:u.id,policy:e.target.value})));let _=J(`#upgrade`);_&&(_.disabled=!h||n.cash<h.cost||n.phase===`victory`||n.phase===`defeat`),document.querySelectorAll(`[data-role]`).forEach(t=>{let r=t.dataset.role;t.classList.toggle(`selected`,X===r);let i=n.cash<e[r].ranks[0].cost;t.classList.toggle(`unaffordable`,i),t.setAttribute(`aria-disabled`,String(i)),t.setAttribute(`aria-pressed`,String(X===r)),t.setAttribute(`aria-label`,`${e[r].name}, $${e[r].ranks[0].cost}${n.cash<e[r].ranks[0].cost?`, insufficient funds`:``}`)}),Do.forEach((t,r)=>{let a=n.towers.find(e=>e.pad===i[r].id);t.classList.toggle(`occupied`,!!a),t.classList.toggle(`active`,fo===i[r].id),t.setAttribute(`aria-label`,a?`Position ${i[r].id+1}, ${e[a.role].name}, rank ${a.rank+1}. Select soldier.`:`Deploy ${X?e[X].name:`soldier`} at position ${i[r].id+1}, ${i[r].name}`)}),J(`#field-message`).textContent=n.phase===`combat`?`Select a deployed soldier to promote or retarget.`:`Choose a soldier, then an empty position.`,(n.phase===`victory`||n.phase===`defeat`)&&!xo&&Po(n)}document.querySelectorAll(`[data-role]`).forEach(t=>t.addEventListener(`click`,()=>{let n=t.dataset.role;if(Y.frame().cash<e[n].ranks[0].cost){Oo(t),Z(`You need $${e[n].ranks[0].cost} to deploy a ${e[n].name}.`);return}X=n,uo=null,fo=null,Z(`${e[X].name} selected. Choose an empty position.`),$(!0)}));function Oo(t){uo=t.dataset.role;let n=e[uo],r=n.ranks[0],i=J(`#unit-tooltip`);i.innerHTML=`<strong>${n.name}</strong><div class="tooltip-stats"><span>${r.damage} damage</span><span>${r.rate} shots/sec</span><span>${r.range}m range</span><span>$${r.cost}</span></div><p>${n.special}</p>`,i.hidden=!1,t.setAttribute(`aria-describedby`,`unit-tooltip`);let a=t.getBoundingClientRect(),o=i.offsetWidth;i.style.left=`${Math.max(12,Math.min(a.left,innerWidth-o-12))}px`,i.style.top=`${a.bottom+i.offsetHeight+12<=innerHeight?a.bottom+8:Math.max(12,a.top-i.offsetHeight-8)}px`,$(!0)}function ko(){uo=null,J(`#unit-tooltip`).hidden=!0,document.querySelectorAll(`[aria-describedby="unit-tooltip"]`).forEach(e=>e.removeAttribute(`aria-describedby`)),$(!0)}document.querySelectorAll(`[data-role]`).forEach(e=>{e.addEventListener(`pointerenter`,t=>{t.pointerType!==`touch`&&Oo(e)}),e.addEventListener(`pointerleave`,ko),e.addEventListener(`focus`,()=>Oo(e)),e.addEventListener(`blur`,ko),e.addEventListener(`click`,()=>{J(`#unit-tooltip`).hidden=!0})}),window.addEventListener(`scroll`,()=>{J(`#unit-tooltip`).hidden=!0},{passive:!0}),J(`#airstrike`).addEventListener(`click`,()=>Q({kind:`airstrike`})),J(`#send-wave`).addEventListener(`click`,()=>Q({kind:`start-wave`})),J(`#pause`).addEventListener(`click`,()=>Q({kind:`pause`,value:!Y.frame().paused})),J(`#resume`).addEventListener(`click`,()=>Q({kind:`pause`,value:!1})),J(`#speed`).addEventListener(`click`,()=>{po=po===1?2:1,J(`#speed`).textContent=`${po}× speed`,J(`#speed`).setAttribute(`aria-label`,`Switch to ${po===1?`double`:`normal`} speed`)}),J(`#sound`).addEventListener(`click`,async()=>{mo=!mo;try{await lo.setEnabled(mo)}catch{mo=!1,Z(`Audio is unavailable in this browser.`)}J(`#sound`).innerHTML=q(mo?wa:va),J(`#sound`).setAttribute(`aria-label`,mo?`Mute sound`:`Enable sound`),J(`#sound`).setAttribute(`aria-pressed`,String(mo))}),J(`#motion`).addEventListener(`click`,()=>{ho=!ho,document.documentElement.classList.toggle(`reduced-motion`,ho),J(`#motion`).textContent=`Motion: ${ho?`reduced`:`full`}`,J(`#motion`).setAttribute(`aria-pressed`,String(ho))}),J(`#fullscreen`).addEventListener(`click`,async()=>{try{document.fullscreenElement?await document.exitFullscreen():await J(`main`).requestFullscreen()}catch{Z(`Fullscreen is unavailable. You can keep playing in this window.`)}});var Ao=!1;function jo(e){let t=J(`#${e}`);document.querySelector(`dialog[open]`)||(Ao=Y.frame().paused,Y.command({kind:`pause`,value:!0})),t.open||t.showModal(),$()}document.querySelectorAll(`dialog`).forEach(e=>e.addEventListener(`close`,()=>{!document.querySelector(`dialog[open]`)&&!Ao&&!document.hidden&&_o&&(Y.command({kind:`pause`,value:!1}),$())})),document.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,()=>J(`#${e.dataset.close}`).close())),J(`#help-open`).addEventListener(`click`,()=>jo(`help`)),J(`#restart-open`).addEventListener(`click`,()=>jo(`restart`)),J(`#restart-confirm`).addEventListener(`click`,Mo),J(`#play-again`).addEventListener(`click`,Mo),J(`#manual-open`).addEventListener(`click`,async()=>{jo(`manual`);let e=J(`#manual-content`);if(!e.childElementCount){e.textContent=`Loading field intelligence…`;try{let{mountManual:t}=await ao(async()=>{let{mountManual:e}=await import(`./manual-PE-rZPrM.js`);return{mountManual:e}},__vite__mapDeps([0,1,2]),import.meta.url);t(e)}catch{e.textContent=`Field intelligence could not load. Close this panel and open it again to retry.`}}window.dispatchEvent(new Event(`resize`))}),document.addEventListener(`keydown`,e=>{document.querySelector(`dialog[open]`)||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||(e.code===`Space`&&e.target.tagName!==`BUTTON`&&(e.preventDefault(),Y.frame().phase===`build`&&Y.frame().wave===0&&!Y.frame().paused?Q({kind:`start-wave`}):Q({kind:`pause`,value:!Y.frame().paused})),e.key.toLowerCase()===`a`&&(e.preventDefault(),Q({kind:`airstrike`})),/^[1-6]$/.test(e.key)&&document.querySelector(`[data-role="${so[Number(e.key)-1]}"]`)?.click(),e.key===`Escape`&&(fo=null,$(!0)))}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(Y.command({kind:`pause`,value:!0}),Ao=!0,$())});function Mo(){Y.command({kind:`restart`}),fo=null,X=`cadet`,uo=null,vo=-1,xo=!1,po=1,yo.clear(),wo++,So=null,Co=null,To=null,J(`#speed`).textContent=`1× speed`,J(`#submit-score`).disabled=!1,J(`#score-message`).textContent=`Scores are reported by your browser.`,J(`#score-form`).reset(),document.querySelectorAll(`dialog[open]`).forEach(e=>e.close()),Ao=!1,Z(`Fresh orders received. Deploy your first soldier.`),$(!0)}function No(){if(location.hostname!==`arcade.shoemoney.com`)return;let e=wo;Co=fetch(`/api/games/smtd/runs`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`}).then(async t=>{if(!t.ok)throw Error(`Board unavailable`);let n=await t.json();e===wo&&(So=n.runToken)}).catch(()=>{e===wo&&(So=null)})}function Po(e){xo=!0,Eo=Math.max(Eo,e.score);try{localStorage.setItem(`smtd-best-v1`,String(Eo))}catch{}J(`#result-title`).textContent=e.phase===`victory`?`THE LINE HELD.`:`A LINE WORTH HOLDING.`,J(`#result-copy`).textContent=e.phase===`victory`?`Thirty waves defeated. Guardian Outpost stands because of your squad.`:`The outpost fell. Study the next-contact briefing, adjust your mix, and redeploy.`,J(`#result-stats`).innerHTML=`<div><strong>${co(e.score)}</strong><span>FINAL SCORE</span></div><div><strong>${e.wave}</strong><span>WAVE REACHED</span></div><div><strong>${e.stats.kills}</strong><span>HOSTILES STOPPED</span></div><div><strong>${e.lives}</strong><span>BASE INTEGRITY</span></div>`,J(`#personal-best`).textContent=`Your personal best: ${co(Eo)}`,J(`#score-form`).hidden=location.hostname!==`arcade.shoemoney.com`,jo(`result`)}J(`#score-form`).addEventListener(`submit`,async e=>{e.preventDefault();let t=J(`#submit-score`);if(t.disabled=!0,J(`#score-message`).textContent=`Sending your operation report…`,await Co,!So){J(`#score-message`).textContent=`The score board was unavailable when this run started. Your personal best is saved here.`,t.disabled=!1;return}let n=Y.frame();To??={runToken:So,name:J(`#player-name`).value.trim(),score:Math.floor(n.score),wave:n.wave,kills:n.stats.kills,headshots:n.stats.headshotKills,duration:Math.round(n.time)};try{let e=await fetch(`/api/games/smtd/scores`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(To)});if(!e.ok)throw e.status===400&&(To=null),Error(`Score not accepted`);let t=await e.json();J(`#score-message`).textContent=`Report accepted. You are ranked ${t.rank} on the arcade board.`}catch{J(`#score-message`).textContent=`The report could not be sent. Try again. Your local best is safe.`,t.disabled=!1}});async function Fo(){_o=!1;try{go?.dispose(),go=null,go=await Ga(J(`#scene`),()=>{_o=!1,Y.command({kind:`pause`,value:!0}),J(`#loading`).hidden=!1,J(`#loading`).innerHTML=`<h2>Visual connection interrupted.</h2><p>Your operation is paused.</p><button id="recover" class="primary">Restore battlefield</button>`,J(`#recover`).addEventListener(`click`,Fo),$()}),_o=!0,J(`#renderer-status`).textContent=go.backend===`WebGPU`?`WEBGPU ACTIVE`:`WEBGL2 COMPATIBILITY`,J(`#loading`).hidden=!0,document.documentElement.dataset.renderer=go.backend,$(!0)}catch(e){J(`#loading`).innerHTML=`<h2>Battlefield unavailable.</h2><p>This game needs WebGPU or WebGL2. Enable hardware acceleration, then reload.</p><button id="reload" class="primary">Try again</button>`,J(`#reload`).addEventListener(`click`,()=>location.reload()),console.error(`Battlefield initialization failed`,e)}}$(!0),await Fo();var Io=performance.now(),Lo=0,Ro=0;function zo(e){let t=Math.min((e-Io)/1e3,.1);if(Io=e,go&&_o){Lo+=t*po;let n=Math.min(12,Math.floor(Lo*60));n>0&&(Y.advance(n),Lo-=n/60);let r=Y.frame();go.render(r,fo,X,ho),i.forEach((e,t)=>{let n=go.project(e);Do[t].style.left=`${n.x}px`,Do[t].style.top=`${n.y+22}px`});for(let e of r.events)e.id>vo&&(lo.play(e),vo=e.id);for(let e of r.enemies)e.boss&&!yo.has(e.id)&&(yo.add(e.id),lo.bossArrival());e-Ro>150&&($(),Ro=e)}requestAnimationFrame(zo)}requestAnimationFrame(zo),document.documentElement.classList.toggle(`reduced-motion`,ho);