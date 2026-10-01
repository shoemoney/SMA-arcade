import{_ as E}from"./phaser-D3izK-R_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();function Gt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function er(e){if(Array.isArray(e))return e}function tr(e){if(Array.isArray(e))return Gt(e)}function ar(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nr(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,In(n.key),n)}}function ir(e,t,a){return t&&nr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ot(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=pa(e))||t){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,s=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var c=a.next();return s=c.done,c},e:function(c){o=!0,r=c},f:function(){try{s||a.return==null||a.return()}finally{if(o)throw r}}}}function x(e,t,a){return(t=In(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,i,r,s,o=[],c=!0,l=!1;try{if(r=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=r.call(a)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(f){l=!0,i=f}finally{try{if(!c&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(l)throw i}}return o}}function or(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ja(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ja(Object(a),!0).forEach(function(n){x(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ja(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function kt(e,t){return er(e)||sr(e,t)||pa(e,t)||or()}function re(e){return tr(e)||rr(e)||pa(e)||lr()}function cr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function In(e){var t=cr(e,"string");return typeof t=="symbol"?t:t+""}function pt(e){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(e)}function pa(e,t){if(e){if(typeof e=="string")return Gt(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Gt(e,t):void 0}}var _a=function(){},ha={},En={},Rn=null,Tn={mark:_a,measure:_a};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(En=document),typeof MutationObserver<"u"&&(Rn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}var dr=ha.navigator||{},Wa=dr.userAgent,Ha=Wa===void 0?"":Wa,ge=ha,z=En,Ba=Rn,et=Tn;ge.document;var ue=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",Pn=~Ha.indexOf("MSIE")||~Ha.indexOf("Trident/"),tt,fr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ur=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,zn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},mr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],H="classic",Ve="duotone",Nn="sharp",On="sharp-duotone",Dn="chisel",Fn="etch",jn="graphite",_n="jelly",Wn="jelly-duo",Hn="jelly-fill",Bn="mosaic",Un="notdog",Yn="notdog-duo",qn="pixel",Gn="slab",Xn="slab-duo",Vn="slab-press",Kn="slab-press-duo",Jn="thumbprint",Qn="utility",Zn="utility-duo",ei="utility-fill",ti="vellum",ai="whiteboard",pr="Classic",hr="Duotone",gr="Sharp",yr="Sharp Duotone",vr="Chisel",br="Etch",wr="Graphite",xr="Jelly",kr="Jelly Duo",Sr="Jelly Fill",Mr="Mosaic",Ar="Notdog",Cr="Notdog Duo",$r="Pixel",Ir="Slab",Er="Slab Duo",Rr="Slab Press",Tr="Slab Press Duo",Pr="Thumbprint",zr="Utility",Lr="Utility Duo",Nr="Utility Fill",Or="Vellum",Dr="Whiteboard",ni=[H,Ve,Nn,On,Dn,Fn,jn,_n,Wn,Hn,Bn,Un,Yn,qn,Gn,Xn,Vn,Kn,Jn,Qn,Zn,ei,ti,ai];tt={},x(x(x(x(x(x(x(x(x(x(tt,H,pr),Ve,hr),Nn,gr),On,yr),Dn,vr),Fn,br),jn,wr),_n,xr),Wn,kr),Hn,Sr),x(x(x(x(x(x(x(x(x(x(tt,Bn,Mr),Un,Ar),Yn,Cr),qn,$r),Gn,Ir),Xn,Er),Vn,Rr),Kn,Tr),Jn,Pr),Qn,zr),x(x(x(x(tt,Zn,Lr),ei,Nr),ti,Or),ai,Dr);var Fr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},jr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_r=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Wr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},ii=["fak","fa-kit","fakd","fa-kit-duotone"],Ua={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Hr=["kit"],Br="kit",Ur="kit-duotone",Yr="Kit",qr="Kit Duotone";x(x({},Br,Yr),Ur,qr);var Gr={kit:{"fa-kit":"fak"}},Xr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vr={kit:{fak:"fa-kit"}},Ya={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},at,nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Jr="classic",Qr="duotone",Zr="sharp",es="sharp-duotone",ts="chisel",as="etch",ns="graphite",is="jelly",rs="jelly-duo",ss="jelly-fill",os="mosaic",ls="notdog",cs="notdog-duo",ds="pixel",fs="slab",us="slab-duo",ms="slab-press",ps="slab-press-duo",hs="thumbprint",gs="utility",ys="utility-duo",vs="utility-fill",bs="vellum",ws="whiteboard",xs="Classic",ks="Duotone",Ss="Sharp",Ms="Sharp Duotone",As="Chisel",Cs="Etch",$s="Graphite",Is="Jelly",Es="Jelly Duo",Rs="Jelly Fill",Ts="Mosaic",Ps="Notdog",zs="Notdog Duo",Ls="Pixel",Ns="Slab",Os="Slab Duo",Ds="Slab Press",Fs="Slab Press Duo",js="Thumbprint",_s="Utility",Ws="Utility Duo",Hs="Utility Fill",Bs="Vellum",Us="Whiteboard";at={},x(x(x(x(x(x(x(x(x(x(at,Jr,xs),Qr,ks),Zr,Ss),es,Ms),ts,As),as,Cs),ns,$s),is,Is),rs,Es),ss,Rs),x(x(x(x(x(x(x(x(x(x(at,os,Ts),ls,Ps),cs,zs),ds,Ls),fs,Ns),us,Os),ms,Ds),ps,Fs),hs,js),gs,_s),x(x(x(x(at,ys,Ws),vs,Hs),bs,Bs),ws,Us);var Ys="kit",qs="kit-duotone",Gs="Kit",Xs="Kit Duotone";x(x({},Ys,Gs),qs,Xs);var Vs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ks={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Xt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Js=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ri=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Kr,Js),Qs=["solid","regular","light","thin","duotone","brands","semibold"],si=[1,2,3,4,5,6,7,8,9,10],Zs=si.concat([11,12,13,14,15,16,17,18,19,20]),eo=["aw","fw","pull-left","pull-right"],to=[].concat(re(Object.keys(Ks)),Qs,eo,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY]).concat(si.map(function(e){return"".concat(e,"x")})).concat(Zs.map(function(e){return"w-".concat(e)})),ao={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},de="___FONT_AWESOME___",Vt=16,oi="fa",li="svg-inline--fa",$e="data-fa-i2svg",Kt="data-fa-pseudo-element",no="data-fa-pseudo-element-pending",ga="data-prefix",ya="data-icon",qa="fontawesome-i2svg",io="async",ro=["HTML","HEAD","STYLE","SCRIPT"],ci=["::before","::after",":before",":after"],di=(function(){try{return!0}catch{return!1}})();function Ke(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[H]}})}var fi=g({},zn);fi[H]=g(g(g(g({},{"fa-duotone":"duotone"}),zn[H]),Ua.kit),Ua["kit-duotone"]);var so=Ke(fi),Jt=g({},Wr);Jt[H]=g(g(g(g({},{duotone:"fad"}),Jt[H]),Ya.kit),Ya["kit-duotone"]);var Ga=Ke(Jt),Qt=g({},Xt);Qt[H]=g(g({},Qt[H]),Vr.kit);var va=Ke(Qt),Zt=g({},Vs);Zt[H]=g(g({},Zt[H]),Gr.kit);Ke(Zt);var oo=fr,ui="fa-layers-text",lo=ur,co=g({},Fr);Ke(co);var fo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tt=mr,uo=[].concat(re(Hr),re(to)),Be=ge.FontAwesomeConfig||{};function mo(e){var t=z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function po(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(z&&typeof z.querySelector=="function"){var ho=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ho.forEach(function(e){var t=kt(e,2),a=t[0],n=t[1],i=po(mo(a));i!=null&&(Be[n]=i)})}var mi={styleDefault:"solid",familyDefault:H,cssPrefix:oi,replacementClass:li,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Ne=g(g({},mi),Be);Ne.autoReplaceSvg||(Ne.observeMutations=!1);var w={};Object.keys(mi).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(a){Ne[e]=a,Ue.forEach(function(n){return n(w)})},get:function(){return Ne[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){Ne.cssPrefix=t,Ue.forEach(function(a){return a(w)})},get:function(){return Ne.cssPrefix}});ge.FontAwesomeConfig=w;var Ue=[];function go(e){return Ue.push(e),function(){Ue.splice(Ue.indexOf(e),1)}}var Ee=Vt,oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yo(e){if(!(!e||!ue)){var t=z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=z.head.childNodes,n=null,i=a.length-1;i>-1;i--){var r=a[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=r)}return z.head.insertBefore(t,n),e}}var vo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xa(){for(var e=12,t="";e-- >0;)t+=vo[Math.random()*62|0];return t}function je(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function ba(e){return e.classList?je(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bo(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(pi(e[a]),'" ')},"").trim()}function St(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function wa(e){return e.size!==oe.size||e.x!==oe.x||e.y!==oe.y||e.rotate!==oe.rotate||e.flipX||e.flipY}function wo(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(r," ").concat(s," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:c,path:l}}function xo(e){var t=e.transform,a=e.width,n=a===void 0?Vt:a,i=e.height,r=i===void 0?Vt:i,s="";return Pn?s+="translate(".concat(t.x/Ee-n/2,"em, ").concat(t.y/Ee-r/2,"em) "):s+="translate(calc(-50% + ".concat(t.x/Ee,"em), calc(-50% + ").concat(t.y/Ee,"em)) "),s+="scale(".concat(t.size/Ee*(t.flipX?-1:1),", ").concat(t.size/Ee*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var ko=`:root, :host {
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
}`;function hi(){var e=oi,t=li,a=w.cssPrefix,n=w.replacementClass,i=ko;if(a!==e||n!==t){var r=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(r,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(o,".".concat(n))}return i}var Va=!1;function Pt(){w.autoAddCss&&!Va&&(yo(hi()),Va=!0)}var So={mixout:function(){return{dom:{css:hi,insertCss:Pt}}},hooks:function(){return{beforeDOMElementCreation:function(){Pt()},beforeI2svg:function(){Pt()}}}},fe=ge||{};fe[de]||(fe[de]={});fe[de].styles||(fe[de].styles={});fe[de].hooks||(fe[de].hooks={});fe[de].shims||(fe[de].shims=[]);var ne=fe[de],gi=[],yi=function(){z.removeEventListener("DOMContentLoaded",yi),ht=1,gi.map(function(t){return t()})},ht=!1;ue&&(ht=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),ht||z.addEventListener("DOMContentLoaded",yi));function Mo(e){ue&&(ht?setTimeout(e,0):gi.push(e))}function Je(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,i=e.children,r=i===void 0?[]:i;return typeof e=="string"?pi(e):"<".concat(t," ").concat(bo(n),">").concat(r.map(Je).join(""),"</").concat(t,">")}function Ka(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var zt=function(t,a,n,i){var r=Object.keys(t),s=r.length,o=a,c,l,f;for(n===void 0?(c=1,f=t[r[0]]):(c=0,f=n);c<s;c++)l=r[c],f=o(f,t[l],l,t);return f};function vi(e){return re(e).length!==1?null:e.codePointAt(0).toString(16)}function Ja(e){return Object.keys(e).reduce(function(t,a){var n=e[a],i=!!n.icon;return i?t[n.iconName]=n.icon:t[a]=n,t},{})}function ea(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,i=n===void 0?!1:n,r=Ja(t);typeof ne.hooks.addPack=="function"&&!i?ne.hooks.addPack(e,Ja(t)):ne.styles[e]=g(g({},ne.styles[e]||{}),r),e==="fas"&&ea("fa",t)}var Ge=ne.styles,Ao=ne.shims,bi=Object.keys(va),Co=bi.reduce(function(e,t){return e[t]=Object.keys(va[t]),e},{}),xa=null,wi={},xi={},ki={},Si={},Mi={};function $o(e){return~uo.indexOf(e)}function Io(e,t){var a=t.split("-"),n=a[0],i=a.slice(1).join("-");return n===e&&i!==""&&!$o(i)?i:null}var Ai=function(){var t=function(r){return zt(Ge,function(s,o,c){return s[c]=zt(o,r,{}),s},{})};wi=t(function(i,r,s){if(r[3]&&(i[r[3]]=s),r[2]){var o=r[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),xi=t(function(i,r,s){if(i[s]=s,r[2]){var o=r[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),Mi=t(function(i,r,s){var o=r[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var a="far"in Ge||w.autoFetchSvg,n=zt(Ao,function(i,r){var s=r[0],o=r[1],c=r[2];return o==="far"&&!a&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});ki=n.names,Si=n.unicodes,xa=Mt(w.styleDefault,{family:w.familyDefault})};go(function(e){xa=Mt(e.styleDefault,{family:w.familyDefault})});Ai();function ka(e,t){return(wi[e]||{})[t]}function Eo(e,t){return(xi[e]||{})[t]}function Se(e,t){return(Mi[e]||{})[t]}function Ci(e){return ki[e]||{prefix:null,iconName:null}}function Ro(e){var t=Si[e],a=ka("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function ye(){return xa}var $i=function(){return{prefix:null,iconName:null,rest:[]}};function To(e){var t=H,a=bi.reduce(function(n,i){return n[i]="".concat(w.cssPrefix,"-").concat(i),n},{});return ni.forEach(function(n){(e.includes(a[n])||e.some(function(i){return Co[n].includes(i)}))&&(t=n)}),t}function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?H:a,i=so[n][e];if(n===Ve&&!e)return"fad";var r=Ga[n][e]||Ga[n][i],s=e in ne.styles?e:null,o=r||s||null;return o}function Po(e){var t=[],a=null;return e.forEach(function(n){var i=Io(w.cssPrefix,n);i?a=i:n&&t.push(n)}),{iconName:a,rest:t}}function Qa(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var Za=ri.concat(ii);function At(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,i=null,r=Qa(e.filter(function(m){return Za.includes(m)})),s=Qa(e.filter(function(m){return!Za.includes(m)})),o=r.filter(function(m){return i=m,!Ln.includes(m)}),c=kt(o,1),l=c[0],f=l===void 0?null:l,u=To(r),p=g(g({},Po(s)),{},{prefix:Mt(f,{family:u})});return g(g(g({},p),Oo({values:e,family:u,styles:Ge,config:w,canonical:p,givenPrefix:i})),zo(n,i,p))}function zo(e,t,a){var n=a.prefix,i=a.iconName;if(e||!n||!i)return{prefix:n,iconName:i};var r=t==="fa"?Ci(i):{},s=Se(n,i);return i=r.iconName||s||i,n=r.prefix||n,n==="far"&&!Ge.far&&Ge.fas&&!w.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}var Lo=ni.filter(function(e){return e!==H||e!==Ve}),No=Object.keys(Xt).filter(function(e){return e!==H}).map(function(e){return Object.keys(Xt[e])}).flat();function Oo(e){var t=e.values,a=e.family,n=e.canonical,i=e.givenPrefix,r=i===void 0?"":i,s=e.styles,o=s===void 0?{}:s,c=e.config,l=c===void 0?{}:c,f=a===Ve,u=t.includes("fa-duotone")||t.includes("fad"),p=l.familyDefault==="duotone",m=n.prefix==="fad"||n.prefix==="fa-duotone";if(!f&&(u||p||m)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Lo.includes(a)){var v=Object.keys(o).find(function(A){return No.includes(A)});if(v||l.autoFetchSvg){var y=_r.get(a).defaultShortPrefixId;n.prefix=y,n.iconName=Se(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||r==="fa")&&(n.prefix=ye()||"fas"),n}var Do=(function(){function e(){ar(this,e),this.definitions={}}return ir(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){a.definitions[o]=g(g({},a.definitions[o]||{}),s[o]),ea(o,s[o]);var c=va[H][o];c&&ea(c,s[o]),Ai()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(r){var s=i[r],o=s.prefix,c=s.iconName,l=s.icon,f=l[2];a[o]||(a[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(a[o][u]=l)}),a[o][c]=l}),a}}])})(),en=[],Pe={},ze={},Fo=Object.keys(ze);function jo(e,t){var a=t.mixoutsTo;return en=e,Pe={},Object.keys(ze).forEach(function(n){Fo.indexOf(n)===-1&&delete ze[n]}),en.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(a[s]=i[s]),pt(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){a[s]||(a[s]={}),a[s][o]=i[s][o]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(s){Pe[s]||(Pe[s]=[]),Pe[s].push(r[s])})}n.provides&&n.provides(ze)}),a}function ta(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];var r=Pe[e]||[];return r.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function Ie(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var i=Pe[e]||[];i.forEach(function(r){r.apply(null,a)})}function ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ze[e]?ze[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||ye();if(t)return t=Se(a,t)||t,Ka(Ii.definitions,a,t)||Ka(ne.styles,a,t)}var Ii=new Do,_o=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,Ie("noAuto")},Wo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ue?(Ie("beforeI2svg",t),ve("pseudoElements2svg",t),ve("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Mo(function(){Bo({autoReplaceSvgRoot:a}),Ie("watch",t)})}},Ho={icon:function(t){if(t===null)return null;if(pt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Se(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Mt(t[0]);return{prefix:n,iconName:Se(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match(oo))){var i=At(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ye(),iconName:Se(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var r=ye();return{prefix:r,iconName:Se(r,t)||t}}}},K={noAuto:_o,config:w,dom:Wo,parse:Ho,library:Ii,findIconDefinition:aa,toHtml:Je},Bo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?z:a;(Object.keys(ne.styles).length>0||w.autoFetchSvg)&&ue&&w.autoReplaceSvg&&K.dom.i2svg({node:n})};function Ct(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Je(n)})}}),Object.defineProperty(e,"node",{get:function(){if(ue){var n=z.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Uo(e){var t=e.children,a=e.main,n=e.mask,i=e.attributes,r=e.styles,s=e.transform;if(wa(s)&&a.found&&!n.found){var o=a.width,c=a.height,l={x:o/c/2,y:.5};i.style=St(g(g({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Yo(e){var t=e.prefix,a=e.iconName,n=e.children,i=e.attributes,r=e.symbol,s=r===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},i),{},{id:s}),children:n}]}]}function qo(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Sa(e){var t=e.icons,a=t.main,n=t.mask,i=e.prefix,r=e.iconName,s=e.transform,o=e.symbol,c=e.maskId,l=e.extra,f=e.watchable,u=f===void 0?!1:f,p=n.found?n:a,m=p.width,v=p.height,y=[w.replacementClass,r?"".concat(w.cssPrefix,"-").concat(r):""].filter(function(N){return l.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(l.classes).join(" "),A={children:[],attributes:g(g({},l.attributes),{},{"data-prefix":i,"data-icon":r,class:y,role:l.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(v)})};!qo(l.attributes)&&!l.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),u&&(A.attributes[$e]="");var S=g(g({},A),{},{prefix:i,iconName:r,main:a,mask:n,maskId:c,transform:s,symbol:o,styles:g({},l.styles)}),k=n.found&&a.found?ve("generateAbstractMask",S)||{children:[],attributes:{}}:ve("generateAbstractIcon",S)||{children:[],attributes:{}},$=k.children,C=k.attributes;return S.children=$,S.attributes=C,o?Yo(S):Uo(S)}function tn(e){var t=e.content,a=e.width,n=e.height,i=e.transform,r=e.extra,s=e.watchable,o=s===void 0?!1:s,c=g(g({},r.attributes),{},{class:r.classes.join(" ")});o&&(c[$e]="");var l=g({},r.styles);wa(i)&&(l.transform=xo({transform:i,width:a,height:n}),l["-webkit-transform"]=l.transform);var f=St(l);f.length>0&&(c.style=f);var u=[];return u.push({tag:"span",attributes:c,children:[t]}),u}function Go(e){var t=e.content,a=e.extra,n=g(g({},a.attributes),{},{class:a.classes.join(" ")}),i=St(a.styles);i.length>0&&(n.style=i);var r=[];return r.push({tag:"span",attributes:n,children:[t]}),r}var Lt=ne.styles;function na(e){var t=e[0],a=e[1],n=e.slice(4),i=kt(n,1),r=i[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(Tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Tt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Tt.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:a,icon:s}}var Xo={found:!1,width:512,height:512};function Vo(e,t){!di&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ia(e,t){var a=t;return t==="fa"&&w.styleDefault!==null&&(t=ye()),new Promise(function(n,i){if(a==="fa"){var r=Ci(e)||{};e=r.iconName||e,t=r.prefix||t}if(e&&t&&Lt[t]&&Lt[t][e]){var s=Lt[t][e];return n(na(s))}Vo(e,t),n(g(g({},Xo),{},{icon:w.showMissingIcons&&e?ve("missingIconAbstract")||{}:{}}))})}var an=function(){},ra=w.measurePerformance&&et&&et.mark&&et.measure?et:{mark:an,measure:an},We='FA "7.3.1"',Ko=function(t){return ra.mark("".concat(We," ").concat(t," begins")),function(){return Ei(t)}},Ei=function(t){ra.mark("".concat(We," ").concat(t," ends")),ra.measure("".concat(We," ").concat(t),"".concat(We," ").concat(t," begins"),"".concat(We," ").concat(t," ends"))},Ma={begin:Ko,end:Ei},lt=function(){};function nn(e){var t=e.getAttribute?e.getAttribute($e):null;return typeof t=="string"}function Jo(e){var t=e.getAttribute?e.getAttribute(ga):null,a=e.getAttribute?e.getAttribute(ya):null;return t&&a}function Qo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function Zo(){if(w.autoReplaceSvg===!0)return ct.replace;var e=ct[w.autoReplaceSvg];return e||ct.replace}function el(e){return z.createElementNS("http://www.w3.org/2000/svg",e)}function tl(e){return z.createElement(e)}function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?el:tl:a;if(typeof e=="string")return z.createTextNode(e);var i=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var r=e.children||[];return r.forEach(function(s){i.appendChild(Ri(s,{ceFn:n}))}),i}function al(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ct={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(i){a.parentNode.insertBefore(Ri(i),a)}),a.getAttribute($e)===null&&w.keepOriginalSource){var n=z.createComment(al(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~ba(a).indexOf(w.replacementClass))return ct.replace(t);var i=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(o,c){return c===w.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var s=n.map(function(o){return Je(o)}).join(`
`);a.setAttribute($e,""),a.innerHTML=s}};function rn(e){e()}function Ti(e,t){var a=typeof t=="function"?t:lt;if(e.length===0)a();else{var n=rn;w.mutateApproach===io&&(n=ge.requestAnimationFrame||rn),n(function(){var i=Zo(),r=Ma.begin("mutate");e.map(i),r(),a()})}}var Aa=!1;function Pi(){Aa=!0}function sa(){Aa=!1}var gt=null;function sn(e){if(Ba&&w.observeMutations){var t=e.treeCallback,a=t===void 0?lt:t,n=e.nodeCallback,i=n===void 0?lt:n,r=e.pseudoElementsCallback,s=r===void 0?lt:r,o=e.observeMutationsRoot,c=o===void 0?z:o;gt=new Ba(function(l){if(!Aa){var f=ye();je(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!nn(u.addedNodes[0])&&(w.searchPseudoElements&&s(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&w.searchPseudoElements&&s([u.target],!0),u.type==="attributes"&&nn(u.target)&&~fo.indexOf(u.attributeName))if(u.attributeName==="class"&&Jo(u.target)){var p=At(ba(u.target)),m=p.prefix,v=p.iconName;u.target.setAttribute(ga,m||f),v&&u.target.setAttribute(ya,v)}else Qo(u.target)&&i(u.target)})}}),ue&&gt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nl(){gt&&gt.disconnect()}function il(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,i){var r=i.split(":"),s=r[0],o=r.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),a}function rl(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=At(ba(e));return i.prefix||(i.prefix=ye()),t&&a&&(i.prefix=t,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Eo(i.prefix,e.innerText)||ka(i.prefix,vi(e.innerText))),!i.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function sl(e){var t=je(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function ol(){return{iconName:null,prefix:null,transform:oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=rl(e),n=a.iconName,i=a.prefix,r=a.rest,s=sl(e),o=ta("parseNodeAttributes",{},e),c=t.styleParser?il(e):[];return g({iconName:n,prefix:i,transform:oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:s}},o)}var ll=ne.styles;function zi(e){var t=w.autoReplaceSvg==="nest"?on(e,{styleParser:!1}):on(e);return~t.extra.classes.indexOf(ui)?ve("generateLayersText",e,t):ve("generateSvgReplacementMutation",e,t)}function cl(){return[].concat(re(ii),re(ri))}function ln(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ue)return Promise.resolve();var a=z.documentElement.classList,n=function(u){return a.add("".concat(qa,"-").concat(u))},i=function(u){return a.remove("".concat(qa,"-").concat(u))},r=w.autoFetchSvg?cl():Ln.concat(Object.keys(ll));r.includes("fa")||r.push("fa");var s=[".".concat(ui,":not([").concat($e,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat($e,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=je(e.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();var c=Ma.begin("onTree"),l=o.reduce(function(f,u){try{var p=zi(u);p&&f.push(p)}catch(m){di||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(p){Ti(p,function(){n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(p){c(),u(p)})})}function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zi(e).then(function(a){a&&Ti([a],t)})}function fl(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:aa(t||{}),i=a.mask;return i&&(i=(i||{}).icon?i:aa(i||{})),e(n,g(g({},a),{},{mask:i}))}}var ul=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,i=n===void 0?oe:n,r=a.symbol,s=r===void 0?!1:r,o=a.mask,c=o===void 0?null:o,l=a.maskId,f=l===void 0?null:l,u=a.classes,p=u===void 0?[]:u,m=a.attributes,v=m===void 0?{}:m,y=a.styles,A=y===void 0?{}:y;if(t){var S=t.prefix,k=t.iconName,$=t.icon;return Ct(g({type:"icon"},t),function(){return Ie("beforeDOMElementCreation",{iconDefinition:t,params:a}),Sa({icons:{main:na($),mask:c?na(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:k,transform:g(g({},oe),i),symbol:s,maskId:f,extra:{attributes:v,styles:A,classes:p}})})}},ml={mixout:function(){return{icon:fl(ul)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=ln,a.nodeCallback=dl,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,i=n===void 0?z:n,r=a.callback,s=r===void 0?function(){}:r;return ln(i,s)},t.generateSvgReplacementMutation=function(a,n){var i=n.iconName,r=n.prefix,s=n.transform,o=n.symbol,c=n.mask,l=n.maskId,f=n.extra;return new Promise(function(u,p){Promise.all([ia(i,r),c.iconName?ia(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var v=kt(m,2),y=v[0],A=v[1];u([a,Sa({icons:{main:y,mask:A},prefix:r,iconName:i,transform:s,symbol:o,maskId:l,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(a){var n=a.children,i=a.attributes,r=a.main,s=a.transform,o=a.styles,c=St(o);c.length>0&&(i.style=c);var l;return wa(s)&&(l=ve("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},pl={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,r=i===void 0?[]:i;return Ct({type:"layer"},function(){Ie("beforeDOMElementCreation",{assembler:a,params:n});var s=[];return a(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(re(r)).join(" ")},children:s}]})}}}},hl={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var i=n.classes,r=i===void 0?[]:i,s=n.attributes,o=s===void 0?{}:s,c=n.styles,l=c===void 0?{}:c;return Ct({type:"counter",content:a},function(){return Ie("beforeDOMElementCreation",{content:a,params:n}),Go({content:a.toString(),extra:{attributes:o,styles:l,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(re(r))}})})}}}},gl={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?oe:i,s=n.classes,o=s===void 0?[]:s,c=n.attributes,l=c===void 0?{}:c,f=n.styles,u=f===void 0?{}:f;return Ct({type:"text",content:a},function(){return Ie("beforeDOMElementCreation",{content:a,params:n}),tn({content:a,transform:g(g({},oe),r),extra:{attributes:l,styles:u,classes:["".concat(w.cssPrefix,"-layers-text")].concat(re(o))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var i=n.transform,r=n.extra,s=null,o=null;if(Pn){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,o=l.height/c}return Promise.resolve([a,tn({content:a.innerHTML,width:s,height:o,transform:i,extra:r,watchable:!0})])}}},Li=new RegExp('"',"ug"),cn=[1105920,1112319],dn=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),jr),ao),Xr),oa=Object.keys(dn).reduce(function(e,t){return e[t.toLowerCase()]=dn[t],e},{}),yl=Object.keys(oa).reduce(function(e,t){var a=oa[t];return e[t]=a[900]||re(Object.entries(a))[0][1],e},{});function vl(e){var t=e.replace(Li,"");return vi(re(t)[0]||"")}function bl(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Li,""),i=n.codePointAt(0),r=i>=cn[0]&&i<=cn[1],s=n.length===2?n[0]===n[1]:!1;return r||s||t}function wl(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),i=isNaN(n)?"normal":n;return(oa[a]||{})[i]||yl[a]}function fn(e,t){var a="".concat(no).concat(t.replace(":","-"));return new Promise(function(n,i){if(e.getAttribute(a)!==null)return n();var r=je(e.children),s=r.filter(function(U){return U.getAttribute(Kt)===t})[0],o=ge.getComputedStyle(e,t),c=o.getPropertyValue("font-family"),l=c.match(lo),f=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),n();if(l&&u!=="none"&&u!==""){var p=o.getPropertyValue("content"),m=wl(c,f),v=vl(p),y=l[0].startsWith("FontAwesome"),A=bl(o),S=ka(m,v),k=S;if(y){var $=Ro(v);$.iconName&&$.prefix&&(S=$.iconName,m=$.prefix)}if(S&&!A&&(!s||s.getAttribute(ga)!==m||s.getAttribute(ya)!==k)){e.setAttribute(a,k),s&&e.removeChild(s);var C=ol(),N=C.extra;N.attributes[Kt]=t,ia(S,m).then(function(U){var M=Sa(g(g({},C),{},{icons:{main:U,mask:$i()},prefix:m,iconName:k,extra:N,watchable:!0})),I=z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=M.map(function(Z){return Je(Z)}).join(`
`),e.removeAttribute(a),n()}).catch(i)}else n()}else n()})}function xl(e){return Promise.all([fn(e,"::before"),fn(e,"::after")])}function kl(e){return e.parentNode!==document.head&&!~ro.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Sl=function(t){return!!t&&ci.some(function(a){return t.includes(a)})},Ml=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(c){return c.trim()});n=n.flatMap(function(c){return c.includes("(")?c:c.split(",").map(function(l){return l.trim()})});var i=ot(n),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;if(Sl(s)){var o=ci.reduce(function(c,l){return c.replace(l,"")},s);o!==""&&o!=="*"&&a.add(o)}}}catch(c){i.e(c)}finally{i.f()}return a};function un(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ue){var a;if(t)a=e;else if(w.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,i=ot(document.styleSheets),r;try{for(i.s();!(r=i.n()).done;){var s=r.value;try{var o=ot(s.cssRules),c;try{for(o.s();!(c=o.n()).done;){var l=c.value,f=Ml(l.selectorText),u=ot(f),p;try{for(u.s();!(p=u.n()).done;){var m=p.value;n.add(m)}}catch(y){u.e(y)}finally{u.f()}}}catch(y){o.e(y)}finally{o.f()}}catch(y){w.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){i.e(y)}finally{i.f()}if(!n.size)return;var v=Array.from(n).join(", ");try{a=e.querySelectorAll(v)}catch{}}return new Promise(function(y,A){var S=je(a).filter(kl).map(xl),k=Ma.begin("searchPseudoElements");Pi(),Promise.all(S).then(function(){k(),sa(),y()}).catch(function(){k(),sa(),A()})})}}var Al={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=un,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,i=n===void 0?z:n;w.searchPseudoElements&&un(i)}}},mn=!1,Cl={mixout:function(){return{dom:{unwatch:function(){Pi(),mn=!0}}}},hooks:function(){return{bootstrap:function(){sn(ta("mutationObserverCallbacks",{}))},noAuto:function(){nl()},watch:function(a){var n=a.observeMutationsRoot;mn?sa():sn(ta("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},pn=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,i){var r=i.toLowerCase().split("-"),s=r[0],o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},a)},$l={mixout:function(){return{parse:{transform:function(a){return pn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-transform");return i&&(a.transform=pn(i)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,i=a.transform,r=a.containerWidth,s=a.iconWidth,o={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(c," ").concat(l," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:u,path:p};return{tag:"g",attributes:g({},m.outer),children:[{tag:"g",attributes:g({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),m.path)}]}]}}}},Nt={x:0,y:0,width:"100%",height:"100%"};function hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Il(e){return e.tag==="g"?e.children:[e]}var El={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-mask"),r=i?At(i.split(" ").map(function(s){return s.trim()})):$i();return r.prefix||(r.prefix=ye()),a.mask=r,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,i=a.attributes,r=a.main,s=a.mask,o=a.maskId,c=a.transform,l=r.width,f=r.icon,u=s.width,p=s.icon,m=wo({transform:c,containerWidth:u,iconWidth:l}),v={tag:"rect",attributes:g(g({},Nt),{},{fill:"white"})},y=f.children?{children:f.children.map(hn)}:{},A={tag:"g",attributes:g({},m.inner),children:[hn(g({tag:f.tag,attributes:g(g({},f.attributes),m.path)},y))]},S={tag:"g",attributes:g({},m.outer),children:[A]},k="mask-".concat(o||Xa()),$="clip-".concat(o||Xa()),C={tag:"mask",attributes:g(g({},Nt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,S]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:Il(p)},C]};return n.push(N,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(k,")")},Nt)}),{children:n,attributes:i}}}},Rl={provides:function(t){var a=!1;ge.matchMedia&&(a=ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=g(g({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:g(g({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:g(g({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:g(g({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Tl={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return a.symbol=r,a}}}},Pl=[So,ml,pl,hl,gl,Al,Cl,$l,El,Rl,Tl];jo(Pl,{mixoutsTo:K});K.noAuto;K.config;K.library;K.dom;K.parse;K.findIconDefinition;K.toHtml;var zl=K.icon;K.layer;K.text;K.counter;var Ll={prefix:"fas",iconName:"trophy",icon:[512,512,[127942],"f091","M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z"]},Nl={prefix:"fas",iconName:"boxes-stacked",icon:[512,512,[62625,"boxes","boxes-alt"],"f468","M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"]},Ol={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Dl={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 427.4c58.5-44 96-111.6 96-187.4 0-132.5-114.6-240-256-240S0 107.5 0 240c0 75.8 37.5 143.4 96 187.4L96 464c0 26.5 21.5 48 48 48l32 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 64 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c26.5 0 48-21.5 48-48l0-36.6zM96 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Fl={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},jl={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},_l={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Wl={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"]},Hl={prefix:"fas",iconName:"heart-pulse",icon:[512,512,["heartbeat"],"f21e","M256 107.9L241 87.1C216 52.5 175.9 32 133.1 32 59.6 32 0 91.6 0 165.1l0 2.6c0 23.6 6.2 48 16.6 72.3l106 0c3.2 0 6.1-1.9 7.4-4.9l31.8-76.3c3.7-8.8 12.3-14.6 21.8-14.8s18.3 5.4 22.2 14.1l51.3 113.9 41.4-82.8c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l123.6 0c10.5-24.3 16.6-48.7 16.6-72.3l0-2.6C512 91.6 452.4 32 378.9 32 336.2 32 296 52.5 271 87.1l-15 20.7zM469.6 288l-97.8 0c-21.2 0-40.6-12-50.1-31l-1.7-3.4-42.5 85.1c-4.1 8.3-12.7 13.5-22 13.3s-17.6-5.7-21.4-14.1l-49.3-109.5-10.5 25.2c-8.7 20.9-29.1 34.5-51.7 34.5l-80.2 0c47.2 73.8 123 141.7 170.4 177.9 12.4 9.4 27.6 14.1 43.1 14.1s30.8-4.6 43.1-14.1C346.6 429.7 422.4 361.8 469.6 288z"]},Bl={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Ul={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Yl={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ql={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},Gl={prefix:"fas",iconName:"wrench",icon:[576,512,[128295],"f0ad","M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"]},Xl={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"]},Vl={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},Kl={prefix:"fas",iconName:"snowflake",icon:[512,512,[10052,10054],"f2dc","M288.2 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 62.1-15-15c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l49 49 0 70.6-61.2-35.3-17.9-66.9c-3.4-12.8-16.6-20.4-29.4-17S95.3 98 98.7 110.8l5.5 20.5-53.7-31C35.2 91.5 15.6 96.7 6.8 112s-3.6 34.9 11.7 43.7l53.7 31-20.5 5.5c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l66.9-17.9 61.2 35.3-61.2 35.3-66.9-17.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l20.5 5.5-53.7 31C3.2 365.1-2 384.7 6.8 400s28.4 20.6 43.7 11.7l53.7-31-5.5 20.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l17.9-66.9 61.2-35.3 0 70.6-49 49c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l15-15 0 62.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-62.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-70.6 61.2 35.3 17.9 66.9c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-5.5-20.5 53.7 31c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7l-53.7-31 20.5-5.5c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-66.9 17.9-61.2-35.3 61.2-35.3 66.9 17.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-20.5-5.5 53.7-31c15.3-8.8 20.6-28.4 11.7-43.7s-28.4-20.5-43.7-11.7l-53.7 31 5.5-20.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-17.9 66.9-61.2 35.3 0-70.6 49-49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-15 15 0-62.1z"]},Jl={prefix:"fas",iconName:"bomb",icon:[576,512,[128163],"f1e2","M480-16c6.9 0 13 4.4 15.2 10.9l13.5 40.4 40.4 13.5C555.6 51 560 57.1 560 64s-4.4 13-10.9 15.2l-40.4 13.5-13.5 40.4C493 139.6 486.9 144 480 144s-13-4.4-15.2-10.9l-13.5-40.4-40.4-13.5C404.4 77 400 70.9 400 64s4.4-13 10.9-15.2l40.4-13.5 13.5-40.4C467-11.6 473.1-16 480-16zM321.4 97.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-10.9 10.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S32 418.9 32 304 125.1 96 240 96c24.7 0 48.5 4.3 70.5 12.3l10.9-10.9zM144 304c0-53 43-96 96-96 13.3 0 24-10.7 24-24s-10.7-24-24-24c-79.5 0-144 64.5-144 144 0 13.3 10.7 24 24 24s24-10.7 24-24z"]},Ql={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},Zl={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},ec={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},tc={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z"]},ac={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z"]},gn={prefix:"fas",iconName:"crosshairs",icon:[576,512,[],"f05b","M288-16c17.7 0 32 14.3 32 32l0 18.3c98.1 14 175.7 91.6 189.7 189.7l18.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.3 0c-14 98.1-91.6 175.7-189.7 189.7l0 18.3c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.3C157.9 463.7 80.3 386.1 66.3 288L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.3 0C80.3 125.9 157.9 48.3 256 34.3L256 16c0-17.7 14.3-32 32-32zM131.2 288c12.7 62.7 62.1 112.1 124.8 124.8l0-12.8c0-17.7 14.3-32 32-32s32 14.3 32 32l0 12.8c62.7-12.7 112.1-62.1 124.8-124.8L432 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l12.8 0C432.1 161.3 382.7 111.9 320 99.2l0 12.8c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-12.8C193.3 111.9 143.9 161.3 131.2 224l12.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-12.8 0zM288 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},nc={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},ic={prefix:"fas",iconName:"person-military-rifle",icon:[448,512,[],"e54b","M128 39c0-13 10-23.8 22.9-24.9L302.7 1.4C312 .7 320 8 320 17.4L320 48c0 8.8-7.2 16-16 16L153 64c-13.8 0-25-11.2-25-25zm17.6 57l156.8 0c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16zm228 364.3L320 369.7 320 480c0 1.3-.1 2.5-.2 3.8L145.5 234.9c16.6-7.1 34.6-10.9 53.3-10.9l50.4 0c15.9 0 31.3 2.8 45.8 7.9L389.9 67.7c-7.7-4.4-10.3-14.2-5.9-21.9s14.2-10.3 21.9-5.9l27.7 16c7.7 4.4 10.3 14.2 5.9 21.9l-55.5 96.1 1.6 .9c15.3 8.8 20.6 28.4 11.7 43.7L360.7 282c2 2.8 3.9 5.8 5.7 8.8l76.1 128.8c11.2 19 4.9 43.5-14.1 54.8s-43.5 4.9-54.8-14.1zM288 512l-128 0c-17.7 0-32-14.3-32-32l0-110.3-53.6 90.6c-11.2 19-35.8 25.3-54.8 14.1S-5.7 438.7 5.6 419.7L81.7 290.8c9.4-15.8 21.7-29.3 36-40L299.1 510c-3.5 1.3-7.2 2-11.1 2zM264 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},yn={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},rc={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},sc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},oc={prefix:"fas",iconName:"radiation",icon:[576,512,[],"f7b9","M446.2 34.5c-14.2-10.1-33.5-4.6-42.2 10.5L331.6 170.3c31.3 15.8 52.8 48.3 52.8 85.7l144 0c17.7 0 32.2-14.4 30.1-31.9-9.1-78.1-51.4-146.1-112.3-189.6zM172.7 44.9C164 29.8 144.7 24.3 130.5 34.5 69.6 77.9 27.3 145.9 18.2 224.1 16.1 241.6 30.7 256 48.3 256l144 0c0-37.5 21.5-69.9 52.8-85.7L172.7 44.9zm-9.4 416.8c-8.7 15.1-3.8 34.5 12 41.8 34.4 15.7 72.7 24.5 113 24.5s78.6-8.8 113-24.5c15.8-7.2 20.7-26.7 12-41.8L341 336.3c-15.1 9.9-33.2 15.7-52.6 15.7s-37.5-5.8-52.6-15.7L163.3 461.7zM288.3 304a48 48 0 1 0 -.7-96 48 48 0 1 0 .7 96z"]},lc={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]},cc={prefix:"fas",iconName:"hammer",icon:[640,512,[128296],"f6e3","M246.9 18.3L271 3.8c21.6-13 46.3-19.8 71.5-19.8 36.8 0 72.2 14.6 98.2 40.7l63.9 63.9c15 15 23.4 35.4 23.4 56.6l0 30.9 19.7 19.7 0 0c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-64 64c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L464 240 433.1 240c-21.2 0-41.6-8.4-56.6-23.4l-49.1-49.1c-15-15-23.4-35.4-23.4-56.6l0-12.7c0-11.2-5.9-21.7-15.5-27.4l-41.6-25c-10.4-6.2-10.4-21.2 0-27.4zM50.7 402.7l222.1-222.1 90.5 90.5-222.1 222.1c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5z"]},dc={prefix:"fas",iconName:"pause",icon:[384,512,[9208],"f04c","M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]},fc={prefix:"fas",iconName:"coins",icon:[512,512,[],"f51e","M128 96l0-16c0-44.2 86-80 192-80S512 35.8 512 80l0 16c0 30.6-41.3 57.2-102 70.7-2.4-2.8-4.9-5.5-7.4-8-15.5-15.3-35.5-26.9-56.4-35.5-41.9-17.5-96.5-27.1-154.2-27.1-21.9 0-43.3 1.4-63.8 4.1-.2-1.3-.2-2.7-.2-4.1zM432 353l0-46.2c15.1-3.9 29.3-8.5 42.2-13.9 13.2-5.5 26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zm0-96l0-33c0-4.5-.4-8.8-1-13 15.5-3.9 30-8.6 43.2-14.2s26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zM0 240l0-16c0-44.2 86-80 192-80s192 35.8 192 80l0 16c0 44.2-86 80-192 80S0 284.2 0 240zm384 96c0 44.2-86 80-192 80S0 380.2 0 336l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3l0 15.4zm0 80.6l0 15.4c0 44.2-86 80-192 80S0 476.2 0 432l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3z"]},uc={prefix:"fas",iconName:"screwdriver-wrench",icon:[576,512,["tools"],"f7d9","M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"]},mc={prefix:"fas",iconName:"stopwatch",icon:[448,512,[9201],"f2f2","M168.5 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 25.3c-108 11.9-192 103.5-192 214.7 0 119.3 96.7 216 216 216s216-96.7 216-216c0-39.8-10.8-77.1-29.6-109.2l28.2-28.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-23.4 23.4c-32.9-30.2-75.2-50.3-122-55.5l0-25.3 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm80 184l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},pc={prefix:"fas",iconName:"satellite-dish",icon:[512,512,[128225],"f7c0","M232 0c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24S218.7 0 232 0zM208 120c0-13.3 10.7-24 24-24 101.6 0 184 82.4 184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1-60.9-136-136-136-13.3 0-24-10.7-24-24zM26.4 142.7c8.8-17.9 32.4-19.9 46.5-5.8l128.5 128.5 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32 128.5 128.5c14.1 14.1 12 37.6-5.8 46.5-34.2 16.9-72.6 26.4-113.3 26.4-141.4 0-256-114.6-256-256 0-40.7 9.5-79.2 26.4-113.3z"]},hc={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]},gc={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};const Re=1e3,dt=800,Ye=30,Ni=16,Ca=12,yt=5,G=[{x:-30,y:145},{x:245,y:145},{x:245,y:345},{x:760,y:345},{x:760,y:580},{x:395,y:580},{x:395,y:730},{x:860,y:730}],P=[{id:0,x:135,y:260},{id:1,x:360,y:235},{id:2,x:530,y:235},{id:3,x:650,y:235},{id:4,x:870,y:430},{id:5,x:635,y:460},{id:6,x:485,y:465},{id:7,x:285,y:460},{id:8,x:190,y:590},{id:9,x:505,y:680},{id:10,x:650,y:685},{id:11,x:845,y:625}],ae=[{id:0,x:245,y:245},{id:1,x:545,y:345},{id:2,x:610,y:580}],He=G.slice(1).map((e,t)=>Math.hypot(e.x-G[t].x,e.y-G[t].y)),Me=He.reduce((e,t)=>e+t,0);function xe(e){if(!Number.isFinite(e)||e<=0)return{...G[0]};let t=e;for(let a=0;a<He.length;a++){if(t<=He[a]){const n=t/He[a];return{x:G[a].x+(G[a+1].x-G[a].x)*n,y:G[a].y+(G[a+1].y-G[a].y)*n}}t-=He[a]}return{...G[G.length-1]}}const L={gun:{name:"Machine Gun",role:"Rapid fire",description:"Reliable fire against ground hordes.",color:"#43f4e8",cost:75,range:210,damage:12,interval:.35,branches:[{name:"Heavy Rounds",description:"More damage and armor piercing."},{name:"Overdrive",description:"Faster firing."}]},cannon:{name:"Cannon",role:"Blast damage",description:"Hits packed groups.",color:"#7fd4e8",cost:105,range:190,damage:34,interval:1.4,branches:[{name:"Siege Shell",description:"Larger blast radius."},{name:"Shrapnel",description:"More blast damage."}]},cryo:{name:"Cryo Emitter",role:"Slow",description:"Slows a cluster of enemies.",color:"#2b8fd6",cost:90,range:175,damage:5,interval:.9,branches:[{name:"Deep Freeze",description:"Stronger slowing."},{name:"Cold Front",description:"Wider chill field."}]},rail:{name:"Railgun",role:"Armor pierce",description:"Long range precision against tanks.",color:"#9fd0e0",cost:130,range:270,damage:62,interval:1.7,branches:[{name:"Penetrator",description:"Pierces armor and a second target."},{name:"Capacitor",description:"Heavy critical strikes."}]},arc:{name:"Arc Coil",role:"Chain damage",description:"Electric fire jumps between threats.",color:"#a8d8e6",cost:115,range:175,damage:20,interval:.9,branches:[{name:"Forked Current",description:"More chain targets."},{name:"Surge",description:"Higher chain damage."}]},missile:{name:"Missile Array",role:"Anti air",description:"Tracks flying enemies and distant threats.",color:"#6d7d88",cost:125,range:280,damage:42,interval:1.25,branches:[{name:"Flak",description:"Area damage near flying targets."},{name:"Interceptor",description:"Faster anti air bursts."}]}},Y={drifter:{name:"Drifter",color:"#a8452c",hp:42,speed:54,armor:0,bounty:5,threat:2,leak:2,unlock:1,flying:!1},skitter:{name:"Skitter",color:"#e08a3c",hp:30,speed:105,armor:0,bounty:5,threat:3,leak:3,unlock:2,flying:!1},ironback:{name:"Ironback",color:"#c06a2e",hp:125,speed:42,armor:11,bounty:8,threat:8,leak:7,unlock:3,flying:!1},spitter:{name:"Spitter",color:"#d8a83c",hp:58,speed:58,armor:1,bounty:7,threat:5,leak:3,unlock:4,flying:!1},broodcarrier:{name:"Broodcarrier",color:"#c9762c",hp:105,speed:49,armor:2,bounty:8,threat:8,leak:4,unlock:5,flying:!1},screecher:{name:"Screecher",color:"#cf7a4a",hp:72,speed:63,armor:1,bounty:8,threat:8,leak:4,unlock:6,flying:!1},ashwing:{name:"Ashwing",color:"#b45a3c",hp:48,speed:115,armor:0,bounty:7,threat:6,leak:3,unlock:7,flying:!0},burrower:{name:"Burrower",color:"#a86a2c",hp:84,speed:69,armor:4,bounty:8,threat:7,leak:4,unlock:8,flying:!1},behemoth:{name:"Siege Behemoth",color:"#c4482c",hp:950,speed:32,armor:13,bounty:70,threat:110,leak:22,unlock:10,flying:!1},matriarch:{name:"Hive Matriarch",color:"#9b5cc4",hp:780,speed:39,armor:5,bounty:70,threat:110,leak:18,unlock:20,flying:!1}},X={ranger:{name:"Ranger",role:"Generalist",description:"A reliable rifle squad at the rally point.",color:"#70cde9"},bulwark:{name:"Bulwark",role:"Defender",description:"Shields the reactor and delays nearby monsters.",color:"#92b9ed"},engineer:{name:"Engineer",role:"Repair",description:"Repairs reactor integrity between attacks.",color:"#c8b48a"},medic:{name:"Medic",role:"Support",description:"Keeps the squad active and restores integrity.",color:"#a6e6cc"},sharpshooter:{name:"Sharpshooter",role:"Elite hunter",description:"Prioritizes armored and elite threats.",color:"#c6a6e8"},drone:{name:"Drone Handler",role:"Air support",description:"Sends a drone after airborne targets.",color:"#a6d7f0"}},$a=[{id:"damage",name:"Hotter Barrels",description:"+20% tower damage.",icon:"burst"},{id:"range",name:"Rangefinders",description:"+15% tower range.",icon:"bullseye"},{id:"fireRate",name:"Fast Reload",description:"+15% fire rate.",icon:"stopwatch"},{id:"bounty",name:"Salvage Crews",description:"+20% scrap from kills.",icon:"coins"},{id:"slow",name:"Deep Chill",description:"Cryo slow lasts longer.",icon:"snowflake"},{id:"pulse",name:"Reactor Pulse",description:"Commander pulse strikes harder.",icon:"bolt"},{id:"integrity",name:"Hull Plates",description:"Restore 20 reactor integrity.",icon:"shield"},{id:"scrap",name:"Supply Cache",description:"Gain 90 scrap.",icon:"boxes-stacked"}],Ia=300,Ea=300,yc=512,Qe=1e12,la=Qe-1e3,Ra=Number.MAX_SAFE_INTEGER,Xe=105,vn=15,vc=62,bc=Object.keys(L),bn=Object.keys(Y),wc=Object.keys(X),ca=new Set($a.map(e=>e.id));function Ta(e,t,a){return Math.min(a,Math.max(t,Number.isFinite(e)?e:a))}function Pa(e){let t=2166136261;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),16777619);return t>>>0||2654435769}function xc(e){let t=e.rng>>>0;return t^=t<<13,t^=t>>>17,t^=t<<5,e.rng=t>>>0||2654435769,e.rng/4294967296}function kc(e,t){let a=Pa(`${t}:${e}`);return a^=a<<13,a^=a>>>17,a^=a<<5,(a>>>0)/4294967296}function q(e,t){e.length<yc&&e.push(t)}function T(e){return{ok:!1,message:e,events:[]}}function J(e,t,a=[]){return e.revision++,{ok:!0,message:t,events:a}}function Ae(e,t){return Ta(e+t,0,Qe)}function Q(e){return Ta(Math.round(e*1e3)/1e3,0,Qe)}function Oi(e){return ae.find(t=>t.id===e.ally.rallyId)??ae[0]}function Oe(e){return Y[e].flying}function Sc(e){const t=1+.06*Math.min(e-1,9);return Math.min(1e6,t*1.14**Math.min(110,Math.max(0,e-10)))}function Di(e,t){const a=Y[t.kind],n=Math.max(1,Q(a.hp*t.hpScale*(t.elite?1.5:1))),i=xe(0);return{id:e.nextId++,kind:t.kind,x:i.x,y:i.y,hp:n,maxHp:n,distance:0,speed:a.speed*(1+Math.min(.35,Math.max(0,e.wave-10)*.014)),armor:a.armor+(t.elite?3:0),slowUntil:0,slowFactor:1,nextAction:e.time+2.5,elite:t.elite}}function Fi(e){const t=xe(e.distance);e.x=t.x,e.y=t.y+(e.kind==="ashwing"?-45:e.kind==="burrower"?22:0)}function ji(e){const t=typeof e=="string"&&e.length<=80&&e.length>0?e:"reactorfall";return{schema:1,ruleset:"reactorfall-1",seed:t,rng:Pa(t),revision:0,wave:0,phase:"prep",paused:!1,speed:1,time:0,waveTime:0,nextWaveCountdown:null,scrap:200,integrity:100,kills:0,score:0,nextId:1,towers:[],enemies:[],ally:{kind:"ranger",rallyId:0,cooldown:0,hp:100,maxHp:100,respawnAt:0},pending:[],spawnIndex:0,spawnTimer:0,abilityCooldown:0,repairCooldown:0,cards:[],upgrades:[],warnings:[],modifiers:{damage:1,range:1,fireRate:1,bounty:1,slow:1,pulse:1}}}function za(e){return e.tier===1?60+Math.round(L[e.kind].cost*.3):e.tier===2?105+Math.round(L[e.kind].cost*.5):0}function La(e,t){return L[t.kind].range*(1+(t.tier-1)*.1)*e.modifiers.range}const _i=[["drifter"],["drifter","skitter"],["ironback","drifter","ironback"],["skitter","ironback","spitter"],["drifter","broodcarrier"],["skitter","screecher"],["drifter","ashwing"],["ironback","burrower"],["ashwing","spitter","screecher"],["drifter","ironback","behemoth"]];function Mc(e,t){if(e<=10)return _i[Math.max(0,e-1)];const a=Math.floor(kc(e,t)*4);return[["drifter","skitter","broodcarrier","screecher"],["ironback","spitter","burrower"],["ashwing","skitter","spitter"],["drifter","ironback","ashwing","burrower","screecher"]][a].concat(e%10===0?[e%20===0?"matriarch":"behemoth"]:[])}function Ac(e,t){const a=Ta(Math.floor(e),1,Ra),n=Wi(a,t),i=[...new Set(n.map(f=>f.kind))],r=a%10===0,s=[["First Contact","Drifters stay on the road. Set a machine gun by the first bend."],["Fast Movers","Skitter speed tests your first line. Use overlapping gun coverage."],["Armored Advance","Ironback plating shrugs off light fire. Add a railgun or heavy rounds."],["Ranged Pressure","Spitters pressure the reactor from afar. Stop them early."],["Brood Swarm","Broodcarriers release Skitters when destroyed. Prepare area damage."],["Screecher Chorus","Screechers speed nearby monsters. Focus them first."],["Air Raid","Ashwings fly over ground fire. Build missiles or an arc coil."],["Underground Advance","Burrowers hide for part of the route. Cover their exit."],["Mixed Assault","Air and ranged threats arrive together. Diversify your defenses."],["Siege Behemoth","The boss warns before disabling nearby towers. Spread your fire."]],o=i.includes("ashwing")?["Air Raid","Missiles and arc coils counter Ashwings."]:i.includes("ironback")?["Armored Convoy","Railguns pierce the Ironbacks at the front."]:i.includes("broodcarrier")?["Brood Swarm","Cannon blasts handle the released Skitters."]:["Horde Rush","Use overlapping fire and cryo to hold the road."],[c,l]=a<=10?s[a-1]:r?[i.includes("matriarch")?"Hive Matriarch":"Siege Behemoth","A boss joins the wave. Keep a commander pulse ready."]:o;return{title:c,description:l,count:n.length,kinds:i,boss:r}}function Wi(e,t){const a=e<=10?_i[e-1].filter(s=>s!=="behemoth"):Mc(e,t).filter(s=>s!=="behemoth"&&s!=="matriarch"),n=e%10===0?e%20===0?"matriarch":"behemoth":null,i=[],r=Sc(e);if(e<=10){const s=Math.min(30,4+e*2+Math.min(2,e-1));for(let o=0;o<s;o++)i.push({kind:a[o%a.length],hpScale:r,elite:!1})}else{let s=Pa(`${t}:plan:${e}`);const o=()=>(s^=s<<13,s^=s>>>17,s^=s<<5,(s>>>0)/4294967296),c=Math.min(e,1e3);let l=Math.min(1500-(n?Y[n].threat:0),80+8*c+Math.floor(.25*c*c));const f=Ea-(n?1:0);for(;i.length<f;){const u=a.filter(v=>Y[v].threat<=l);if(!u.length)break;const p=u[Math.floor(o()*u.length)],m=i.length%Math.max(3,7-Math.floor(Math.min(e,40)/10))===0;i.push({kind:p,hpScale:r,elite:m}),l-=Y[p].threat}if(l>0&&i.length===f){const u=1+Math.min(1,l/1500);for(const p of i)p.elite&&(p.hpScale=Math.min(1e6,p.hpScale*u))}}return n&&i.splice(Math.floor(i.length*.45),0,{kind:n,hpScale:Math.min(1e6,r*1.4),elite:!1}),i}function ke(e,t,a,n,i){if(t.hp<=0)return;const r=Math.max(1,Q(a-Math.max(0,t.armor-n)));if(t.hp=Math.max(0,Q(t.hp-r)),q(i,{type:"hit",x:t.x,y:t.y,id:t.id,kind:t.kind}),t.hp<=0){e.kills=Ae(e.kills,1);const s=Math.round(Y[t.kind].bounty*e.modifiers.bounty*(t.elite?1.5:1));if(e.scrap=Ae(e.scrap,s),e.score=Ae(e.score,s*10),q(i,{type:"death",x:t.x,y:t.y,id:t.id,kind:t.kind}),t.kind==="broodcarrier"&&e.pending.length<=Ea-3){const o={kind:"skitter",hpScale:Math.max(1,t.maxHp/Y.broodcarrier.hp*.38),elite:!1};e.pending.splice(e.spawnIndex,0,{...o},{...o},{...o})}}}function le(e,t,a){return(e.x-t.x)**2+(e.y-t.y)**2<=a**2}function Cc(e,t){return t.kind==="burrower"&&t.distance%320<90?!1:t.kind!=="ashwing"||e.kind==="missile"||e.kind==="arc"}function $c(e,t,a){return e.target==="strongest"?a.maxHp-t.maxHp||t.id-a.id:e.target==="last"?t.distance-a.distance||t.id-a.id:a.distance-t.distance||t.id-a.id}function Hi(e,t,a){if(!a){const r=P[t.padId];if(!r)return;a=r}const n=La(e,t),i=e.enemies.filter(r=>r.hp>0&&Cc(t,r)&&le(a,r,n));return t.kind==="missile"?i.sort((r,s)=>Number(Oe(s.kind))-Number(Oe(r.kind))||$c(t,r,s)):t.target==="strongest"?i.sort((r,s)=>s.maxHp-r.maxHp||r.id-s.id):t.target==="last"?i.sort((r,s)=>r.distance-s.distance||r.id-s.id):i.sort((r,s)=>s.distance-r.distance||r.id-s.id),i[0]}function Ic(e,t,a){if(e.time<t.cooldown||e.time<t.disabledUntil)return;const n=P.find(f=>f.id===t.padId),i=Hi(e,t,n);if(!i)return;const r=L[t.kind],s=t.tier===1?1:t.tier===2?1.75:2.7,o=t.branch==="a"&&(t.kind==="gun"||t.kind==="arc")?1.3:t.branch==="b"&&(t.kind==="cannon"||t.kind==="rail"||t.kind==="arc")?1.25:1,c=Q(r.damage*s*e.modifiers.damage*o*(Oe(i.kind)&&t.kind==="gun"?.55:1)),l=t.kind==="gun"&&t.branch==="b"?1.4:t.kind==="missile"&&t.branch==="b"?1.25:1;if(t.cooldown=e.time+r.interval/(e.modifiers.fireRate*l*(1+(t.tier-1)*.08)),q(a,{type:"shot",x:n.x,y:n.y,tx:i.x,ty:i.y,kind:t.kind}),t.kind==="cannon"||t.kind==="missile"){const f=t.kind==="cannon"?t.branch==="a"?110:76:t.branch==="a"?85:55;for(const u of e.enemies)u.hp>0&&le(u,i,f)&&ke(e,u,c,t.kind==="missile"?4:0,a)}else if(t.kind==="cryo")for(const f of e.enemies)f.hp>0&&!Oe(f.kind)&&le(f,i,t.branch==="b"?98:70)&&(ke(e,f,c,0,a),f.slowFactor=t.branch==="a"?.43:.61,f.slowUntil=Math.max(f.slowUntil,e.time+2.4*e.modifiers.slow));else if(t.kind==="arc"){const f=e.enemies.filter(u=>u.hp>0&&le(u,i,115)).sort((u,p)=>u.id-p.id).slice(0,t.branch==="a"?5:3);f.includes(i)||f.unshift(i),f.forEach((u,p)=>ke(e,u,c*(1-p*.16),2,a))}else if(ke(e,i,c,t.kind==="rail"?999:t.branch==="a"?7:0,a),t.kind==="rail"&&t.branch==="a"){const f=e.enemies.find(u=>u.id!==i.id&&u.hp>0&&le(u,i,85));f&&ke(e,f,c*.65,999,a)}}function Ec(e,t){const a=e.ally;if(a.hp<=0)if(e.time>=a.respawnAt)a.hp=a.maxHp;else return;if(e.time<a.cooldown)return;const n=Oi(e),i=a.kind==="sharpshooter"?300:a.kind==="drone"?245:205,r=e.enemies.filter(c=>c.hp>0&&le(n,c,i));if(a.kind==="engineer"){e.integrity<100&&(e.integrity=Math.min(100,e.integrity+.5),a.cooldown=e.time+4,q(t,{type:"repair",x:n.x,y:n.y}));return}if(a.kind==="medic"&&(a.cooldown=e.time+.75,e.integrity<100&&(e.integrity=Math.min(100,e.integrity+.25)),a.hp=Math.min(a.maxHp,a.hp+4)),!r.length)return;a.kind==="sharpshooter"?r.sort((c,l)=>l.maxHp-c.maxHp||c.id-l.id):a.kind==="drone"?r.sort((c,l)=>Number(Oe(l.kind))-Number(Oe(c.kind))||l.distance-c.distance):r.sort((c,l)=>l.distance-c.distance);const s=r[0];a.cooldown=e.time+(a.kind==="sharpshooter"?1.7:a.kind==="bulwark"?1.1:.75);const o=a.kind==="sharpshooter"?47:a.kind==="drone"?22:a.kind==="bulwark"?12:a.kind==="medic"?8:17;ke(e,s,o,a.kind==="sharpshooter"?999:0,t),a.kind==="bulwark"&&(s.slowFactor=.5,s.slowUntil=Math.max(s.slowUntil,e.time+1.5)),q(t,{type:"shot",x:n.x,y:n.y,tx:s.x,ty:s.y,kind:a.kind})}function Rc(e,t){switch(t){case"damage":e.modifiers.damage=Math.min(8,e.modifiers.damage*1.2);break;case"range":e.modifiers.range=Math.min(2.5,e.modifiers.range*1.15);break;case"fireRate":e.modifiers.fireRate=Math.min(4,e.modifiers.fireRate*1.15);break;case"bounty":e.modifiers.bounty=Math.min(5,e.modifiers.bounty*1.2);break;case"slow":e.modifiers.slow=Math.min(3,e.modifiers.slow*1.3);break;case"pulse":e.modifiers.pulse=Math.min(6,e.modifiers.pulse*1.25);break;case"integrity":e.integrity=Math.min(100,e.integrity+20);break;case"scrap":e.scrap=Ae(e.scrap,90);break}}function Tc(e,t){const a=Oi(e);let n=160,i=90*e.modifiers.pulse;e.ally.kind==="sharpshooter"&&(n=125,i*=1.9),e.ally.kind==="drone"&&(n=210),e.ally.kind==="engineer"&&(e.integrity=Math.min(100,e.integrity+9)),e.ally.kind==="medic"&&(e.integrity=Math.min(100,e.integrity+6),e.ally.hp=e.ally.maxHp);for(const r of e.enemies)r.hp>0&&le(a,r,n)&&(ke(e,r,i,6,t),e.ally.kind==="bulwark"&&(r.slowFactor=.35,r.slowUntil=e.time+4));q(t,{type:"ability",x:a.x,y:a.y,radius:n})}function ce(e,t){if(e.phase==="defeat")return T("The reactor has fallen. Start a new run.");if(t.type==="pause")return e.paused=!e.paused,J(e,e.paused?"Paused.":"Resumed.");if(t.type==="speed")return e.speed=e.speed===1?2:1,J(e,`${e.speed}x speed.`);if(t.type==="card")return e.phase!=="reward"||!e.cards.includes(t.id)||!ca.has(t.id)?T("Choose one offered card."):(Rc(e,t.id),e.upgrades.push(t.id),e.upgrades.length>1e3&&e.upgrades.splice(0,e.upgrades.length-1e3),e.cards=[],e.phase="prep",e.nextWaveCountdown=yt,J(e,"Upgrade applied."));if(e.paused&&t.type!=="build"&&t.type!=="upgrade"&&t.type!=="sell")return T("Resume the run first.");if(t.type==="build"){const a=P.find(i=>i.id===t.padId),n=L[t.kind];return!a||!n?T("Unknown build pad or tower."):e.towers.some(i=>i.padId===a.id)?T("This pad is occupied."):e.scrap<n.cost?T("Not enough scrap."):e.towers.length>=P.length?T("All pads are occupied."):(e.scrap-=n.cost,e.towers.push({id:e.nextId++,padId:a.id,kind:t.kind,tier:1,branch:null,target:"first",cooldown:0,spent:n.cost,disabledUntil:0}),J(e,`${n.name} built.`,[{type:"build",x:a.x,y:a.y,kind:t.kind}]))}if(t.type==="upgrade"){const a=e.towers.find(r=>r.id===t.towerId);if(!a)return T("Tower not found.");if(a.tier===3)return T("Tower is fully upgraded.");if(a.tier===1&&t.branch!=="a"&&t.branch!=="b")return T("Choose an upgrade branch.");if(a.tier===2&&t.branch&&t.branch!==a.branch)return T("This tower is committed to its branch.");const n=za(a);if(e.scrap<n)return T("Not enough scrap.");e.scrap-=n,a.spent+=n,a.tier=a.tier+1,a.tier===2&&(a.branch=t.branch);const i=P.find(r=>r.id===a.padId);return J(e,`${L[a.kind].name} upgraded.`,[{type:"upgrade",x:i.x,y:i.y,kind:a.kind}])}if(t.type==="sell"){const a=e.towers.findIndex(r=>r.id===t.towerId);if(a<0)return T("Tower not found.");const[n]=e.towers.splice(a,1);e.scrap=Ae(e.scrap,Math.floor(n.spent*.7));const i=P.find(r=>r.id===n.padId);return J(e,"Tower sold.",[{type:"death",x:i.x,y:i.y,kind:n.kind}])}if(t.type==="target"){const a=e.towers.find(n=>n.id===t.towerId);return!a||!["first","strongest","last"].includes(t.target)?T("Unknown target mode or tower."):(a.target=t.target,J(e,"Target mode changed."))}if(t.type==="rally")return ae.some(a=>a.id===t.rallyId)?(e.ally.rallyId=t.rallyId,J(e,"Squad rallied.")):T("Unknown rally point.");if(t.type==="ally")return X[t.kind]?e.phase!=="prep"?T("Change squads between waves."):(e.ally={kind:t.kind,rallyId:e.ally.rallyId,cooldown:0,hp:100,maxHp:100,respawnAt:0},J(e,`${X[t.kind].name} selected.`)):T("Unknown squad.");if(t.type==="repair")return e.time<e.repairCooldown?T("Repair crew is recharging."):e.integrity>=100?T("Reactor integrity is full."):e.scrap<Ye?T("Not enough scrap."):(e.scrap-=Ye,e.integrity=Math.min(100,e.integrity+Ni),e.repairCooldown=e.time+Ca,J(e,"Reactor repaired.",[{type:"repair",x:880,y:730}]));if(t.type==="ability"){if(e.phase!=="combat")return T("Commander pulse is available during combat.");if(e.time<e.abilityCooldown)return T("Commander pulse is recharging.");const a=[];return Tc(e,a),e.enemies=e.enemies.filter(n=>n.hp>0),e.abilityCooldown=e.time+24,J(e,"Commander pulse activated.",a)}return t.type==="start"?e.phase!=="prep"?T("Finish the current wave first."):e.wave>=Ra?T("The wave counter reached JavaScript’s exact integer limit."):(e.wave++,e.pending=Wi(e.wave,e.seed),e.spawnIndex=0,e.spawnTimer=0,e.waveTime=0,e.phase="combat",e.nextWaveCountdown=null,J(e,`Wave ${e.wave} started.`,[{type:"wave",kind:String(e.wave)}])):T("Unknown command.")}function Pc(e,t){e.enemies=[],e.pending=[],e.spawnIndex=0;const a=Math.min(300,18+e.wave*2);if(e.scrap=Ae(e.scrap,a),e.score=Ae(e.score,e.wave*100),e.phase=e.wave%5===0?"reward":"prep",e.nextWaveCountdown=e.phase==="prep"?yt:null,e.phase==="reward"){const n=[...$a.map(i=>i.id)];for(e.cards=[];e.cards.length<3;)e.cards.push(n.splice(Math.floor(xc(e)*n.length),1)[0])}q(t,{type:"clear",kind:String(e.wave)})}function wn(e,t,a){const n=Y[t.kind].leak*(t.elite?1.5:1),i=e.ally.kind==="bulwark"?Math.max(1,Math.ceil(n*.6)):n;e.integrity=Math.max(0,Q(e.integrity-i)),q(a,{type:"leak",x:880,y:730,kind:t.kind,id:t.id})}function zc(e,t,a){if(t.kind==="spitter"&&e.time>=t.nextAction&&t.distance>420&&(e.integrity=Math.max(0,Q(e.integrity-1.3)),t.nextAction=e.time+4.2,q(a,{type:"shot",x:t.x,y:t.y,tx:880,ty:730,kind:"spitter"})),t.kind==="behemoth"&&e.time>=t.nextAction){const n=e.towers.find(i=>le(P[i.padId],t,245));if(n){const i=P[n.padId];e.warnings.length<32&&(e.warnings.push({x:i.x,y:i.y,radius:100,resolvesAt:e.time+1.7,sourceId:t.id}),q(a,{type:"warning",x:i.x,y:i.y,radius:100,kind:"behemoth"}))}t.nextAction=e.time+8}if(t.kind==="matriarch"&&e.time>=t.nextAction){if(e.enemies.length<Ia-2)for(let n=0;n<2;n++){const i=Di(e,{kind:"skitter",hpScale:Math.min(1e6,t.maxHp/700),elite:!1});i.distance=Math.max(0,t.distance-25-n*16),Fi(i),e.enemies.push(i)}t.nextAction=e.time+7}}function Lc(e,t){if(e.paused||!Number.isFinite(t)||t<=0)return[];const a=Math.min(.05,t);if(e.phase==="prep"){if(e.time=Math.min(la,Q(e.time+a)),e.nextWaveCountdown!==null&&(e.nextWaveCountdown=Math.max(0,Q(e.nextWaveCountdown-a)),e.nextWaveCountdown===0)){e.nextWaveCountdown=null;const r=ce(e,{type:"start"});if(r.ok)return r.events}return e.revision++,[]}if(e.phase!=="combat")return[];const n=[];if(e.time=Math.min(la,Q(e.time+a)),e.waveTime=Q(e.waveTime+a),e.spawnIndex<e.pending.length&&(e.spawnTimer=Math.max(0,e.spawnTimer-a)),e.spawnIndex<e.pending.length&&e.enemies.length<Ia&&e.spawnTimer<=0){const r=e.pending[e.spawnIndex++],s=Di(e,r),o=e.enemies[0];!o||o.distance>=vc?(e.enemies.push(s),q(n,{type:"warning",x:s.x,y:s.y,kind:r.kind,id:s.id}),e.spawnTimer=Math.max(.18,Math.min(.8-.12*(Math.min(e.wave,6)-1),85/e.pending.length))):(e.spawnIndex--,e.spawnTimer=.08)}for(const r of e.enemies){if(r.hp<=0)continue;const s=e.enemies.some(c=>c.kind==="screecher"&&c.hp>0&&c.id!==r.id&&le(c,r,140))?1.22:1,o=e.time<r.slowUntil?r.slowFactor:1;r.distance=Math.min(Me+1,r.distance+r.speed*s*o*a),Fi(r),zc(e,r,n)}for(const r of e.warnings)if(r.resolvesAt<=e.time){for(const s of e.towers)le(P[s.padId],r,r.radius)&&(s.disabledUntil=Math.max(s.disabledUntil,e.time+3));q(n,{type:"hit",x:r.x,y:r.y,radius:r.radius,kind:"behemoth"})}e.warnings=e.warnings.filter(r=>r.resolvesAt>e.time);for(const r of e.towers)Ic(e,r,n);Ec(e,n);const i=[];for(const r of e.enemies)r.hp<=0||(r.distance>=Me?wn(e,r,n):i.push(r));if(e.enemies=i,e.integrity<=0)e.phase="defeat",e.integrity=0,e.nextWaveCountdown=null,q(n,{type:"defeat",x:880,y:730});else if(e.spawnIndex>=e.pending.length&&e.enemies.length===0||e.waveTime>=Xe){if(e.waveTime>=Xe){for(const r of e.enemies)wn(e,r,n);for(let r=e.spawnIndex;r<e.pending.length;r++){const s=e.pending[r],o=Y[s.kind].leak*(s.elite?1.5:1);e.integrity=Math.max(0,Q(e.integrity-o)),q(n,{type:"leak",x:880,y:730,kind:s.kind})}}e.integrity<=0?(e.phase="defeat",e.integrity=0,e.nextWaveCountdown=null,q(n,{type:"defeat"})):Pc(e,n)}return e.revision++,n}const Nc=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&Object.getPrototypeOf(e)===Object.prototype,R=(e,t=0,a=Qe)=>typeof e=="number"&&Number.isFinite(e)&&e>=t&&e<=a,ee=(e,t=0,a=Qe)=>R(e,t,a)&&Number.isInteger(e),pe=(e,t)=>Nc(e)&&t.every(a=>Object.hasOwn(e,a));function xn(e,t,a,n){const i=L[e],r=t===1?1:t===2?1.75:2.7,s=a==="a"&&(e==="gun"||e==="arc")?1.3:a==="b"&&(e==="cannon"||e==="rail"||e==="arc")?1.25:1,o=e==="gun"&&a==="b"?1.4:e==="missile"&&a==="b"?1.25:1;return{damage:Q(i.damage*r*n.damage*s),interval:i.interval/(n.fireRate*o*(1+(t-1)*.08))}}function Oc(e){if(!pe(e,["schema","ruleset","seed","rng","revision","wave","phase","paused","speed","time","waveTime","scrap","integrity","kills","score","nextId","towers","enemies","ally","pending","spawnIndex","spawnTimer","abilityCooldown","cards","upgrades","warnings","modifiers"])||e.arcade!==void 0&&(!pe(e.arcade,["id","eligible"])||typeof e.arcade.id!="string"||!/^[a-f0-9-]{36}$/.test(e.arcade.id)||typeof e.arcade.eligible!="boolean")||e.schema!==1||e.ruleset!=="reactorfall-1"||typeof e.seed!="string"||!e.seed||e.seed.length>80||!ee(e.rng,0,4294967295)||!ee(e.revision)||!ee(e.wave,0,Ra)||!["prep","combat","reward","defeat"].includes(e.phase)||typeof e.paused!="boolean"||e.speed!==1&&e.speed!==2)return null;const t=Object.hasOwn(e,"nextWaveCountdown")?e.nextWaveCountdown:e.phase==="prep"&&e.wave>0?yt:null;if(t!==null&&!R(t,0,yt)||t!==null&&(e.phase!=="prep"||e.wave===0))return null;const a=Object.hasOwn(e,"repairCooldown")?e.repairCooldown:0;if(!R(a,0,e.time+Ca))return null;for(const o of["time","waveTime","scrap","integrity","kills","score","nextId","spawnIndex","spawnTimer","abilityCooldown"])if(!R(e[o]))return null;if(e.time>la||e.waveTime>Xe+.1||e.spawnTimer>Xe||e.abilityCooldown>e.time+120||!ee(e.nextId,1)||!ee(e.spawnIndex)||!ee(e.kills)||!ee(e.score)||e.integrity>100||!Array.isArray(e.towers)||e.towers.length>P.length||!Array.isArray(e.enemies)||e.enemies.length>Ia||!Array.isArray(e.pending)||e.pending.length>Ea||!Array.isArray(e.warnings)||e.warnings.length>32||!Array.isArray(e.cards)||e.cards.length>3||!Array.isArray(e.upgrades)||e.upgrades.length>1e4||e.spawnIndex>e.pending.length)return null;const n=new Set,i=new Set;for(const o of e.towers){if(!pe(o,["id","padId","kind","tier","branch","target","cooldown","spent","disabledUntil"])||!ee(o.id,1)||n.has(o.id)||!ee(o.padId,0,P.length-1)||i.has(o.padId)||!bc.includes(o.kind)||![1,2,3].includes(o.tier)||!(o.branch===null||o.branch==="a"||o.branch==="b")||o.tier!==1&&o.branch===null||o.tier===1&&o.branch!==null||!["first","last","strongest"].includes(o.target)||!R(o.cooldown,0,e.time+120)||!R(o.spent)||!R(o.disabledUntil,0,e.time+120))return null;n.add(o.id),i.add(o.padId)}for(const o of e.enemies){if(!pe(o,["id","kind","x","y","hp","maxHp","distance","speed","armor","slowUntil","slowFactor","nextAction","elite"])||!ee(o.id,1)||n.has(o.id)||!bn.includes(o.kind)||!R(o.x,-1e3,2e3)||!R(o.y,-1e3,2e3)||!R(o.hp)||!R(o.maxHp,1)||o.hp>o.maxHp||!R(o.distance,0,Me+1)||!R(o.speed)||!R(o.armor)||!R(o.slowUntil,0,e.time+120)||!R(o.slowFactor,.3,1)||!R(o.nextAction,0,e.time+120)||typeof o.elite!="boolean")return null;n.add(o.id)}if(n.size&&e.nextId<=Math.max(...n))return null;for(const o of e.pending)if(!pe(o,["kind","hpScale","elite"])||!bn.includes(o.kind)||!R(o.hpScale,.001,1e6)||typeof o.elite!="boolean")return null;if(!pe(e.ally,["kind","rallyId","cooldown","hp","maxHp","respawnAt"]))return null;const r=e.ally;if(!wc.includes(r.kind)||!ae.some(o=>o.id===r.rallyId)||!R(r.cooldown,0,e.time+120)||!R(r.hp)||!R(r.maxHp,1)||r.hp>r.maxHp||!R(r.respawnAt,0,e.time+120)||!e.cards.every(o=>typeof o=="string"&&ca.has(o))||!e.upgrades.every(o=>typeof o=="string"&&ca.has(o))||new Set(e.cards).size!==e.cards.length||e.phase==="reward"&&e.cards.length!==3||e.phase!=="reward"&&e.cards.length!==0)return null;for(const o of e.warnings)if(!pe(o,["x","y","radius","resolvesAt","sourceId"])||!R(o.x,-1e3,2e3)||!R(o.y,-1e3,2e3)||!R(o.radius,1,500)||!R(o.resolvesAt,0,e.time+120)||!ee(o.sourceId,1))return null;if(!pe(e.modifiers,["damage","range","fireRate","bounty","slow","pulse"]))return null;const s={damage:8,range:2.5,fireRate:4,bounty:5,slow:3,pulse:6};for(const o of["damage","range","fireRate","bounty","slow","pulse"])if(!R(e.modifiers[o],1,s[o]))return null;return e.phase==="combat"&&e.wave<1?null:{...e,nextWaveCountdown:t,repairCooldown:a}}const Dc=[{key:"units",image:"assets/library/craftpix-units.png",data:"assets/library/craftpix-units.json"},{key:"bosses",image:"assets/library/craftpix-bosses.png",data:"assets/library/craftpix-bosses.json"},{key:"effects",image:"assets/library/craftpix-effects.png",data:"assets/library/craftpix-effects.json"}],Ot={drifter:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"drifter/walk/",count:9},death:{prefix:"drifter/death/",count:6}},skitter:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"skitter/walk/",count:9},death:{prefix:"skitter/death/",count:6}},ironback:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"ironback/walk/",count:9},death:{prefix:"ironback/death/",count:6}},screecher:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"screecher/walk/",count:9},death:{prefix:"screecher/death/",count:6}},burrower:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"burrower/walk/",count:9},death:{prefix:"burrower/death/",count:6}},spitter:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"spitter/walk/",count:9},death:{prefix:"spitter/death/",count:6}},broodcarrier:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"broodcarrier/walk/",count:9},death:{prefix:"broodcarrier/death/",count:6}},behemoth:{atlas:"bosses",frameWidth:192,frameHeight:192,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"behemoth/walk/",count:8},death:{prefix:"behemoth/death/",count:10}},matriarch:{atlas:"bosses",frameWidth:192,frameHeight:192,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"matriarch/walk/",count:8},death:{prefix:"matriarch/death/",count:10}},ranger:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"ranger/walk/",count:6}},sharpshooter:{atlas:"units",frameWidth:128,frameHeight:128,originX:.5,originY:.5,rotationOffset:-1.5707963267948966,walk:{prefix:"sharpshooter/walk/",count:6}}},Dt={gun:{atlas:"units",frame:"turret/gun/0",originX:.5,originY:.6},cannon:{atlas:"units",frame:"turret/cannon/0",originX:.5,originY:.6},cryo:{atlas:"units",frame:"turret/cryo/0",originX:.5,originY:.6},rail:{atlas:"units",frame:"turret/rail/0",originX:.5,originY:.6},arc:{atlas:"units",frame:"turret/arc/0",originX:.5,originY:.6},missile:{atlas:"units",frame:"turret/missile/0",originX:.5,originY:.6}},it={atlas:"effects",prefix:"explosion/cannon/",count:6,frameWidth:128,frameHeight:128},Fc={"gen-pad":"pad-a.png","gen-reactor":"reactor-core.png","gen-turret-gun":"tower-gun.png","gen-turret-cannon":"tower-cannon.png","gen-turret-cryo":"tower-cryo.png","gen-turret-rail":"tower-rail.png","gen-turret-arc":"tower-arc.png","gen-turret-missile":"tower-missile.png","gen-enemy-drifter":"enemy-drifter.png","gen-enemy-skitter":"enemy-skitter.png","gen-enemy-ironback":"enemy-ironback.png","gen-enemy-screecher":"enemy-screecher.png","gen-enemy-burrower":"enemy-burrower.png","gen-enemy-spitter":"enemy-spitter.png","gen-enemy-broodcarrier":"enemy-broodcarrier.png","gen-enemy-ashwing":"enemy-ashwing.png","gen-enemy-behemoth":"enemy-behemoth.png","gen-enemy-matriarch":"enemy-matriarch.png","gen-ally-ranger":"ally-ranger.png","gen-ally-bulwark":"ally-bulwark.png","gen-ally-engineer":"ally-engineer.png","gen-ally-medic":"ally-medic.png","gen-ally-sharpshooter":"ally-sharpshooter.png","gen-ally-drone":"ally-drone.png","gen-prop-barrel":"prop-barrel.png","gen-prop-crate":"prop-crate.png","gen-prop-pipe":"prop-pipe.png","gen-prop-vent":"prop-vent.png","gen-prop-tank":"prop-tank.png"};function jc(){return"assets/gen/ground-a.png"}function _c(e){return`assets/gen/${e}`}function Wc(){return"assets/gen/road-a.png"}function Ft(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}const Te={groundDeep:1317407,groundBase:2305075,groundLight:3688015,amber:14715452};class Hc{scene;worldW;worldH;reactorX;reactorY;grade;fogCircles=[];steamT=0;constructor(t,a,n,i,r){this.scene=t,this.worldW=a,this.worldH=n,this.reactorX=i,this.reactorY=r}ensureGlowTexture(t,a,n,i){if(this.scene.textures.exists(t))return;const r=this.scene.make.graphics({x:0,y:0},!1),s=32,o=E.Display.Color.HexStringToColor(n),c=E.Display.Color.HexStringToColor(i),l=Array.from({length:s},(f,u)=>{const p=u/s;return .012+.95*p*p}).reduce((f,u)=>f+u,0);for(let f=0;f<s;f++){const u=f/s,p=(.012+.95*u*u)/l,m=E.Display.Color.Interpolate.ColorWithColor(c,o,100,u);r.fillStyle(E.Display.Color.GetColor(m.r,m.g,m.b),p*Math.pow(1-u,1.6)),r.fillCircle(a/2,a/2,a/2*(1-u*.97))}r.generateTexture(t,a,a),r.destroy()}drawGround(t){const a=this.scene;if(a.textures.exists("gen-ground-a")){const i=a.add.tileSprite(this.worldW/2,this.worldH/2,this.worldW,this.worldH,"gen-ground-a").setDepth(t).setAlpha(1);i.setTileScale(1,1),i.setTint(9413552)}else{const i=a.add.graphics().setDepth(t);i.fillGradientStyle(Te.groundDeep,Te.groundBase,Te.groundBase,Te.groundDeep,1),i.fillRect(0,0,this.worldW,this.worldH),i.fillStyle(Te.groundLight,.06);const r=Ft(7);for(let s=0;s<40;s++){const o=r()*this.worldW,c=r()*this.worldH,l=40+r()*90,f=20+r()*40;i.fillRect(o,c,l,f)}}}drawPanelSeams(t){const a=this.scene.add.graphics().setDepth(t);a.lineStyle(1,856340,.28);for(let n=0;n<=this.worldW;n+=128)a.lineBetween(n,0,n,this.worldH);for(let n=0;n<=this.worldH;n+=128)a.lineBetween(0,n,this.worldW,n);a.lineStyle(1,4872803,.06);for(let n=64;n<=this.worldW;n+=128)a.lineBetween(n,0,n,this.worldH)}drawLighting(t,a){this.ensureGlowTexture("fx-glow-warm",512,"#9ceaea","#2e7f8c"),this.scene.add.image(this.reactorX,this.reactorY,"fx-glow-warm").setDepth(t).setBlendMode(E.BlendModes.ADD).setScale(2.5).setAlpha(1),this.ensureGlowTexture("fx-glow-core",256,"#d6ffff","#3fb4b4"),this.scene.add.image(this.reactorX,this.reactorY,"fx-glow-core").setDepth(t).setBlendMode(E.BlendModes.ADD).setScale(.9).setAlpha(.85);const n=this.scene.add.graphics().setDepth(a),i=34;for(let r=0;r<i;r++){const s=r/i,o=Math.pow(1-s,1.6)*130,c=.018+s*.03;n.fillStyle(461325,c),n.fillRect(o,o,this.worldW-o*2,6),n.fillRect(o,this.worldH-o-6,this.worldW-o*2,6),n.fillRect(o,o,6,this.worldH-o*2),n.fillRect(this.worldW-o-6,o,6,this.worldH-o*2)}for(const[r,s]of[[0,0],[this.worldW,0],[0,this.worldH],[this.worldW,this.worldH]])for(let o=0;o<14;o++)n.fillStyle(461325,.018),n.fillCircle(r,s,46+o*14);this.grade=n}scatterProps(t,a,n){const i=[["gen-prop-barrel",92,128,.9],["gen-prop-crate",214,116,.85],["gen-prop-pipe",468,108,1],["gen-prop-vent",690,132,.9],["gen-prop-barrel",918,176,.85],["gen-prop-crate",74,372,.9],["gen-prop-tank",236,470,.95],["gen-prop-barrel",760,452,.8],["gen-prop-crate",940,418,.85],["gen-prop-vent",78,606,.9],["gen-prop-pipe",470,758,.95],["gen-prop-crate",620,690,.85],["gen-prop-barrel",306,726,.8],["gen-prop-tank",866,640,.9]],r=Ft(97),s=46;for(const[o,c,l,f]of i){if(!this.scene.textures.exists(o)||a.some(y=>Math.hypot(y.x-c,y.y-l)<y.r+46)||n&&this.nearRoute(c,l,n,s))continue;const u=(r()-.5)*18,p=(r()-.5)*12,m=c+u,v=l+p;this.scene.add.ellipse(m+3,v+8,46*f,18*f,461325,.34).setDepth(t-.1),this.scene.add.image(m,v,o).setDepth(t).setDisplaySize(74*f,74*f)}}nearRoute(t,a,n,i){for(let r=1;r<n.length;r++){const s=n[r-1],o=n[r],c=o.x-s.x,l=o.y-s.y,f=c*c+l*l;if(f===0)continue;const u=Math.max(0,Math.min(1,((t-s.x)*c+(a-s.y)*l)/f)),p=s.x+c*u,m=s.y+l*u;if(Math.hypot(t-p,a-m)<i)return!0}return!1}seedFog(t){this.ensureGlowTexture("fx-fog",128,"#7fc3cc","#3d7f8c");const a=Ft(21);for(let n=0;n<t;n++){const i=a()*this.worldW,r=a()*this.worldH,s=.5+a()*1.4,o=this.scene.add.image(i,r,"fx-fog").setBlendMode(E.BlendModes.ADD).setDepth(6).setScale(s).setAlpha(.05+a()*.07);this.fogCircles.push(o)}}tick(t,a){if(!a){this.steamT+=t;for(let n=0;n<this.fogCircles.length;n++){const i=this.fogCircles[n];i instanceof E.GameObjects.Image&&(i.x+=t*.006*(n%3+1),i.y-=t*.004,i.x>this.worldW+80&&(i.x=-80),i.y<-80&&(i.y=this.worldH+80))}}}destroy(){for(const t of this.fogCircles)t.destroy();this.fogCircles=[]}}const se={cyan:4453608},kn=["gun","gun-alt","cannon","cryo","arc","rail","missile","hit","build","upgrade","repair","wave","ability","breach","defeat","ambience"],Bc=new Set(["build","upgrade","repair","wave","ability","breach","defeat"]),jt=e=>10**(e/20),Sn=880,Mn=730,Uc=e=>Math.atan2(Math.sin(e),Math.cos(e));function Yc(e,t){const a=t*.78,n=e%5,i=e*2.399963%(Math.PI*2);return{x:Math.cos(i)*a,y:Math.sin(i)*a*.8+(n-2)*1.4}}const we={gun:4453608,cannon:8377576,cryo:2854870,rail:10473696,arc:11065574,missile:7175560},rt={drifter:11027756,skitter:14715452,ironback:12610094,spitter:14198844,broodcarrier:13202988,screecher:13597258,ashwing:11819580,burrower:11037228,behemoth:12863532,matriarch:10181828};class qc extends E.Scene{hooks;accumulator=0;selectedPad=null;reducedMotion=!1;audioEnabled=!0;unlockedAudio=!1;audioLoops=[];audioReady=!1;audioBuses={};audioCompressor;audioVoices=new Set;audioTake=0;duckUntil=0;hidden=!1;contextLost=!1;ready;signalReady;documentGesture=()=>this.unlockAudio();contextLoss=t=>{t.preventDefault(),this.contextLost=!0,this.accumulator=0,window.dispatchEvent(new CustomEvent("reactorfall:context-lost"))};contextRestore=()=>{this.contextLost=!1,this.accumulator=0,window.dispatchEvent(new CustomEvent("reactorfall:context-restored"))};terrain;details;routeLights;scenery;routeProgress=0;selectionRing;reactorGlow;units=new Map;towers=new Map;visuals=[];soundLast=new Map;pulse=0;previousEnemies=new Set;targetScanAt=new Map;targetAngles=new Map;constructor(t){super({key:"battlefield"}),this.hooks=t,this.ready=new Promise(a=>{this.signalReady=a})}preload(){this.hooks.onLoadProgress?.(0),this.load.on("progress",t=>this.hooks.onLoadProgress?.(t));for(const t of kn)this.load.audio(t,`assets/audio/${t}.wav`);this.load.image("gen-ground-a",jc()),this.load.image("gen-road",Wc());for(const[t,a]of Object.entries(Fc))this.load.image(t,_c(a));for(const t of Dc)this.load.atlas(t.key,t.image,t.data)}create(){this.cameras.main.setBackgroundColor("#141a1f"),document.addEventListener("pointerdown",this.documentGesture,!0),document.addEventListener("keydown",this.documentGesture,!0),this.game.canvas.addEventListener("webglcontextlost",this.contextLoss),this.game.canvas.addEventListener("webglcontextrestored",this.contextRestore),this.createTextures(),this.makeTowerBaseTexture(),this.scenery=new Hc(this,Re,dt,Sn,Mn),this.scenery.drawGround(0),this.scenery.drawPanelSeams(.5),this.drawRoute(),this.drawPads(),this.drawRallies(),this.drawReactor(),this.drawIndustrialSetDressing(this.add.graphics().setDepth(4.5)),this.scenery.scatterProps(1.5,[...P.map(t=>({x:t.x,y:t.y,r:60})),...ae.map(t=>({x:t.x,y:t.y,r:44}))],G),this.scenery.drawLighting(5.2,900),this.scenery.seedFog(9),this.selectionRing=this.add.graphics().setDepth(20),this.routeLights=this.add.graphics().setDepth(3),this.input.on("pointerdown",t=>this.handlePointer(t)),this.input.on("pointerup",()=>this.unlockAudio()),this.scale.on("resize",()=>this.cameras.main.setViewport(0,0,this.scale.width,this.scale.height)),this.sound.once("unlocked",()=>{this.unlockedAudio=!0,this.startAmbience()}),this.sound.setMute(!this.audioEnabled),this.setupAudioMix(),this.events.once(E.Scenes.Events.SHUTDOWN,this.teardown,this),this.audioReady=kn.every(t=>this.cache.audio.exists(t)),this.hooks.onLoadProgress?.(1),this.hooks.onReady(),this.signalReady()}update(t,a){const n=this.hooks.getState();document.hidden!==this.hidden&&(this.hidden=document.hidden,this.hidden&&(this.accumulator=0));const i=!this.hidden&&!this.contextLost&&!n.paused&&n.phase!=="defeat",r=this.audioBuses.ambience;if(r&&r.gain.setTargetAtTime(jt(this.time.now<this.duckUntil?-25:i?-15:-23),r.context.currentTime,.25),i){this.accumulator+=Math.min(a,250)*(n.phase==="prep"?1:n.speed);let s=0;for(;this.accumulator>=50&&s<5;){const o=this.hooks.onTick(.05);this.showEvents(o),this.accumulator-=50,s++}s===5&&this.accumulator>=50&&(this.accumulator=0)}else this.accumulator=0;i&&(this.pulse+=Math.min(a,50)),this.scenery?.tick(i?a:0,this.reducedMotion),this.syncWorld(n,i?a:0),this.updateVisuals(i?a*n.speed:0)}setSelection(t){this.selectedPad=t,this.drawSelection()}setAudio(t){if(this.audioEnabled=t,this.sound.setMute(!t),t&&this.unlockedAudio&&this.startAmbience(),!t){for(const a of this.audioLoops)a.destroy();this.audioLoops.length=0;for(const a of[...this.audioVoices])a.destroy()}}setReducedMotion(t){this.reducedMotion=t}setDisplayScale(t,a,n){const i=this.game,r=Math.round(t*n),s=Math.round(a*n);(i.scale.width!==r||i.scale.height!==s)&&i.scale.resize(r,s);const o=Math.min(r/Re,s/dt),c=this.cameras.main;c.setZoom(o),c.centerOn(Re/2,dt/2),c.setViewport(0,0,r,s)}destroyForOwner(){this.game.destroy(!0)}showEvents(t){if(t.length)for(const a of t.slice(0,512)){const n=a.x??500,i=a.y??400;switch(a.type){case"shot":this.shot(a,n,i);break;case"hit":this.hit(a,n,i),this.play("hit",220,.09,n);break;case"death":this.deathFx(a,n,i);break;case"leak":this.breach(n,i),this.play("breach",130,.4);break;case"build":this.burst(n,i,30,se.cyan),this.play("build",100,.48);break;case"upgrade":this.burst(n,i,42,16240242),this.play("upgrade",180,.5);break;case"wave":this.play("wave",250,.5);break;case"clear":this.burst(n,i,54,se.cyan);break;case"ability":this.abilityFx(n,i,a.radius??110),this.play("ability",300,.55);break;case"warning":this.warningFx(n,i,a.radius??70);break;case"defeat":this.burst(880,730,120,15759444),this.play("defeat",500,.65);break;case"repair":this.beam(n,i,a.tx??n,a.ty??i,se.cyan,450),this.play("repair",1500,.22);break}}}createTextures(){for(const t of Object.keys(rt))this.makeTexture(`enemy-${t}`,rt[t],t);for(const t of Object.keys(we))this.makeTowerTexture(t);for(const t of Object.keys(X))this.makeTexture(`ally-${t}`,+`0x${X[t].color.replace("#","")}`,t)}makeTexture(t,a,n){if(this.textures.exists(t))return;const i=this.make.graphics({x:0,y:0}),s=n==="behemoth"||n==="matriarch"?1.48:1;if(i.fillStyle(1581087,.32),i.fillEllipse(32,54,44*s,13*s),i.fillStyle(a,1),["ranger","bulwark","engineer","medic","sharpshooter","drone"].includes(n))this.drawAlly(i,a,n);else if(n==="ashwing")i.fillPoints([{x:32,y:30},{x:5,y:12},{x:15,y:39},{x:32,y:35},{x:49,y:39},{x:59,y:12}].map(o=>new E.Math.Vector2(o.x,o.y)),!0),i.fillEllipse(32,31,15,24);else if(n==="skitter")i.fillEllipse(32,36,22,30),i.fillTriangle(22,26,26,9,31,26),i.fillTriangle(34,25,40,9,42,29),i.fillStyle(2894113),i.fillCircle(27,35,2),i.fillCircle(37,35,2);else if(n==="ironback"||n==="behemoth")i.fillEllipse(32,36,39*s,32*s),i.fillStyle(5660748),i.fillTriangle(11,32,17,13,26,27),i.fillTriangle(33,27,46,11,52,33),i.fillStyle(16760168),i.fillCircle(24,39,2.4),i.fillCircle(40,39,2.4);else if(n==="matriarch"){i.fillEllipse(32,37,40,40),i.fillStyle(15967453),i.fillTriangle(12,24,17,4,27,24),i.fillTriangle(36,24,47,4,53,26);for(let o=0;o<5;o++)i.fillCircle(19+o*6,40+o%2*6,2)}else n==="burrower"?(i.fillEllipse(32,38,40,24),i.fillTriangle(12,38,32,11,52,38),i.fillCircle(32,23,5)):n==="broodcarrier"?(i.fillEllipse(32,37,39,34),i.fillCircle(17,22,8),i.fillCircle(46,22,8),i.fillCircle(17,22,3),i.fillCircle(46,22,3)):n==="screecher"?(i.fillEllipse(32,39,24,34),i.fillTriangle(20,25,32,1,31,29),i.fillTriangle(33,28,48,8,41,32),i.fillCircle(25,38,2),i.fillCircle(39,38,2)):n==="spitter"?(i.fillEllipse(32,37,30,31),i.fillStyle(13954917),i.fillCircle(32,31,9),i.fillStyle(2701610),i.fillCircle(32,31,4)):(i.fillEllipse(32,37,25,34),i.fillEllipse(32,24,20,17),i.fillStyle(15064213),i.fillTriangle(24,16,21,4,30,16),i.fillTriangle(35,16,43,5,39,20),i.fillStyle(2498329),i.fillCircle(27,24,2),i.fillCircle(37,24,2));i.lineStyle(3,2633774,.9),i.lineBetween(25,49,21,60),i.lineBetween(38,49,43,60),i.lineBetween(27,47,31,59),i.lineBetween(36,47,33,59),i.generateTexture(t,64,64),i.destroy()}drawAlly(t,a,n){t.fillStyle(1515550,.34),t.fillEllipse(32,55,38,11),t.lineStyle(5,3357753,1),t.lineBetween(27,44,24,57),t.lineBetween(37,44,40,57),t.fillStyle(4084046),t.fillRoundedRect(20,26,24,25,6),t.fillStyle(a),t.fillRoundedRect(22,28,20,19,5),t.fillStyle(2240815),t.fillRoundedRect(24,9,16,15,5),t.fillStyle(10402218),t.fillRoundedRect(22,8,20,10,4),t.fillStyle(2502701),t.fillRoundedRect(27,14,3,3,1),t.fillRoundedRect(34,14,3,3,1),t.fillStyle(4714726),t.fillCircle(21,31,3),t.fillCircle(43,31,3),t.lineStyle(5,3754052,1),t.lineBetween(21,30,13,39),t.lineBetween(43,30,51,38),t.lineStyle(3,13095098,.95),t.lineBetween(18,39,12,34),t.fillStyle(2109485),t.fillRoundedRect(9,32,5,13,2),n==="bulwark"?(t.fillStyle(9878991),t.fillPoints([{x:48,y:27},{x:58,y:30},{x:57,y:44},{x:49,y:50},{x:45,y:39}].map(i=>new E.Math.Vector2(i.x,i.y)),!0),t.lineStyle(2,14678516),t.strokeCircle(52,37,4)):n==="engineer"?(t.fillStyle(15382108),t.fillRoundedRect(9,26,9,16,2),t.lineStyle(2,5327934),t.lineBetween(12,30,16,37)):n==="medic"?(t.fillStyle(15135464),t.fillRoundedRect(26,33,12,10,2),t.fillStyle(3385756),t.fillRect(30,34,4,8),t.fillRect(28,36,8,4)):n==="sharpshooter"?(t.lineStyle(3,14144194),t.lineBetween(43,37,61,31),t.lineStyle(2,9365215),t.lineBetween(49,35,51,30),t.fillCircle(55,33,3)):n==="drone"?(t.lineStyle(2,11982033),t.lineBetween(40,25,49,18),t.fillStyle(10204593),t.fillCircle(51,16,6),t.lineStyle(2,4517604),t.lineBetween(43,16,59,16),t.lineBetween(51,9,51,23)):(t.lineStyle(3,2436652),t.lineBetween(50,38,61,32),t.lineStyle(2,10414559),t.lineBetween(53,35,63,35))}makeTowerTexture(t){const a=`tower-${t}`;if(this.textures.exists(a))return;const n=we[t],i=this.make.graphics({x:0,y:0});i.fillStyle(1581087,.5),i.fillEllipse(32,52,54,18),i.fillStyle(5857370),i.fillRoundedRect(9,22,46,32,8),i.fillStyle(2963511),i.fillCircle(32,36,18),i.lineStyle(3,11383715,.8),i.strokeCircle(32,36,15),i.fillStyle(n),i.fillCircle(32,36,t==="cannon"?10:8),i.fillStyle(2238503),i.fillRoundedRect(30,8,t==="rail"?7:5,t==="missile"?23:32,2),t==="gun"&&(i.fillRoundedRect(22,11,4,21,2),i.fillRoundedRect(39,11,4,21,2)),t==="missile"&&(i.fillTriangle(25,15,32,5,39,15),i.fillTriangle(25,24,32,34,39,24)),t==="arc"&&(i.lineStyle(2,16382893,1),i.lineBetween(20,32,44,39),i.lineBetween(22,42,40,29)),t==="cryo"&&(i.lineStyle(2,14745599,1),i.strokeCircle(32,36,5)),i.generateTexture(a,64,64),i.destroy()}makeTowerBaseTexture(){if(this.textures.exists("tower-base"))return;const t=this.make.graphics({x:0,y:0});t.fillStyle(2305075),t.fillRoundedRect(9,12,46,32,8),t.fillStyle(3688015),t.fillRoundedRect(12,15,40,26,6),t.lineStyle(2,7175560,.55),t.strokeRoundedRect(9,12,46,32,8),t.generateTexture("tower-base",64,64),t.destroy()}drawIndustrialSetDressing(t){const a=(i,r,s)=>{t.fillStyle(856598,.4),t.fillEllipse(i+5,r+9,s*1.7,s*.55),t.fillStyle(4015952),t.fillPoints([{x:i,y:r+s*.4},{x:i+s*.4,y:r},{x:i+s,y:r+s*.1},{x:i+s*1.25,y:r+s*.48},{x:i+s*.8,y:r+s*.9},{x:i+s*.18,y:r+s*.78}].map(o=>new E.Math.Vector2(o.x,o.y)),!0),t.lineStyle(2,7175560,.5),t.lineBetween(i+s*.3,r+s*.3,i+s*.9,r+s*.65)};for(const[i,r,s]of[[65,62,27],[360,78,30],[565,87,24],[914,92,34],[930,345,29],[84,394,34],[100,690,25],[324,648,19],[559,740,21],[959,594,33],[713,144,19],[443,145,16]])a(i,r,s);const n=(i,r,s,o)=>{t.fillStyle(724755,.5),t.fillRoundedRect(i+5,r+7,s,o,3),t.fillStyle(3884368),t.fillRoundedRect(i,r,s,o,3),t.lineStyle(2,6253944,.7),t.strokeRoundedRect(i+3,r+3,s-6,o-6,2),t.lineBetween(i+5,r+5,i+s-5,r+o-5),t.lineBetween(i+s-5,r+5,i+5,r+o-5)};n(61,227,30,26),n(95,220,20,32),n(910,222,34,27),n(920,255,27,20),n(800,515,30,26),n(825,509,23,31),this.drawFence(t,55,286,174,!0),this.drawFence(t,805,297,135,!0),this.drawFence(t,67,621,135,!0),this.drawFence(t,930,488,160,!1),this.drawFactory(t,84,480,108,74),this.drawFactory(t,870,500,75,56)}drawFence(t,a,n,i,r){t.lineStyle(4,2305075,.95),r?t.lineBetween(a,n,a+i,n):t.lineBetween(a,n,a,n+i),t.lineStyle(2,6253944,.6);for(let s=0;s<=i;s+=27)r?(t.lineBetween(a+s,n-7,a+s,n+7),t.fillStyle(13214247,.85),t.fillCircle(a+s,n,2)):(t.lineBetween(a-7,n+s,a+7,n+s),t.fillStyle(13214247,.85),t.fillCircle(a,n+s,2))}drawFactory(t,a,n,i,r){t.fillStyle(922392,.5),t.fillRoundedRect(a+6,n+7,i,r,4),t.fillStyle(4147538),t.fillRoundedRect(a,n,i,r,3),t.fillStyle(2831420),t.fillRect(a+8,n+9,i-16,r-16),t.lineStyle(2,7175560,.65),t.strokeRect(a+5,n+5,i-10,r-10),t.fillStyle(1712682),t.fillRect(a+i*.32,n+r*.4,i*.35,r*.6),t.fillStyle(4453608,.5),t.fillRect(a+i*.14,n+r*.16,7,13),t.fillRect(a+i*.76,n+r*.16,7,13)}drawRoute(){const t=G,a=this.add.graphics().setDepth(2),n=this.textures.exists("gen-road"),i=66,r=i/2-4;if(a.lineStyle(88,329739,.62),a.beginPath(),a.moveTo(t[0].x,t[0].y),t.slice(1).forEach(o=>a.lineTo(o.x,o.y)),a.strokePath(),a.lineStyle(72,659477,.5),a.beginPath(),a.moveTo(t[0].x,t[0].y),t.slice(1).forEach(o=>a.lineTo(o.x,o.y)),a.strokePath(),n){for(let c=1;c<t.length;c++){const l=t[c-1],f=t[c],u=f.x-l.x,p=f.y-l.y,m=Math.hypot(u,p);if(m<1)continue;const v=this.add.image((l.x+f.x)/2,(l.y+f.y)/2,"gen-road").setDepth(2.1).setRotation(Math.atan2(p,u)).setTint(15924223);v.setDisplaySize(m,i),v.setCrop(0,146/2,256,110)}for(let c=1;c<t.length-1;c++){const l=t[c],f=t[c-1],u=t[c+1],p=Math.atan2(l.y-f.y,l.x-f.x),m=Math.atan2(u.y-l.y,u.x-l.x),v=p+Uc(m-p)/2;this.add.image(l.x,l.y,"gen-road").setDepth(2.15).setRotation(v).setDisplaySize(i,i).setTint(14346994).setCrop(73,73,110,110)}}else a.lineStyle(i,3095106,1),a.beginPath(),a.moveTo(t[0].x,t[0].y),t.slice(1).forEach(o=>a.lineTo(o.x,o.y)),a.strokePath();const s=this.add.graphics().setDepth(2.3);for(const o of[-1,1]){s.lineStyle(2,8825528,.85);for(let c=1;c<t.length;c++){const l=t[c-1],f=t[c],u=f.x-l.x,p=f.y-l.y,m=Math.hypot(u,p);if(m<1)continue;const v=-p/m,y=u/m;s.lineBetween(l.x+v*o*r,l.y+y*o*r,f.x+v*o*r,f.y+y*o*r)}}for(let o=1;o<t.length;o++){const c=t[o-1],l=t[o],f=l.x-c.x,u=l.y-c.y,p=Math.hypot(f,u);if(p<1)continue;const m=f/p,v=u/p;for(let y=14;y<p-8;y+=34){const A=c.x+m*y,S=c.y+v*y,k=c.x+m*(y+17),$=c.y+v*(y+17);s.lineStyle(3,13625072,.5),s.lineBetween(A,S,k,$)}}}drawPads(){const t=this.add.graphics().setDepth(4),a=this.textures.exists("gen-pad");for(const n of P)t.fillStyle(724755,.5),t.fillEllipse(n.x+2,n.y+9,91,31),a||(t.fillStyle(4147538),t.fillCircle(n.x,n.y,37),t.fillStyle(5068896),t.fillCircle(n.x,n.y-2,32),t.lineStyle(2,7175560,.7),t.strokeCircle(n.x,n.y-2,29),t.fillStyle(2831420),t.fillCircle(n.x,n.y-2,16),t.lineStyle(1,7175560,.6),t.strokeCircle(n.x,n.y-2,14));if(a)for(const n of P){const i=this.add.graphics().setDepth(4.05);i.fillStyle(329739,.5),i.fillCircle(n.x,n.y,58),i.lineStyle(2,660504,.85),i.strokeCircle(n.x,n.y,55),this.add.image(n.x,n.y-2,"gen-pad").setDepth(4.1).setDisplaySize(104,104).setTint(8229020).setData("padId",n.id)}this.input.on("pointerdown",n=>{const i=this.cameras.main.getWorldPoint(n.x,n.y);if(Math.hypot(i.x-880,i.y-730)<45)return;const r=P.find(s=>Math.hypot(s.x-i.x,s.y-i.y)<37);if(r)this.hooks.onPad(r.id);else{const s=ae.find(o=>Math.hypot(o.x-i.x,o.y-i.y)<32);s&&this.hooks.onRally(s.id)}})}drawRallies(){const t=this.add.graphics().setDepth(4);for(const a of ae)t.fillStyle(1713443,.4),t.fillCircle(a.x+2,a.y+4,18),t.fillStyle(2588540,.78),t.fillCircle(a.x,a.y,15),t.lineStyle(3,8454128,.95),t.strokeCircle(a.x,a.y,12),t.lineStyle(2,14155763,.9),t.lineBetween(a.x-6,a.y,a.x+6,a.y),t.lineBetween(a.x,a.y-6,a.x,a.y+6)}drawReactor(){const t=this.add.graphics().setDepth(5),a=Sn,n=Mn;if(t.fillStyle(724755,.6),t.fillEllipse(a,n+26,150,54),this.textures.exists("gen-reactor"))this.add.image(a,n,"gen-reactor").setDepth(5.1).setDisplaySize(128,128);else{t.fillStyle(2831420),t.fillCircle(a,n,60),t.lineStyle(6,4872032),t.strokeCircle(a,n,57),t.fillStyle(4147538),t.fillCircle(a,n,48),t.lineStyle(3,7175560,.9),t.strokeCircle(a,n,43);for(let r=0;r<12;r++){const s=r*Math.PI/6,o=Math.cos(s),c=Math.sin(s);t.fillStyle(r%3===0?4453608:5924976),t.fillRoundedRect(a+o*49-4,n+c*49-7,8,14,2)}t.fillStyle(993836),t.fillCircle(a,n,34),t.lineStyle(5,2868923),t.strokeCircle(a,n,29),t.fillStyle(6881264,.9),t.fillCircle(a,n,22)}this.reactorGlow=this.add.circle(a,n,40,3801072,.09).setBlendMode(E.BlendModes.ADD).setDepth(5.3);const i=this.add.graphics().setDepth(6);for(let r=0;r<12;r++){const s=r*Math.PI/6,o=70+r%2*7;i.fillStyle(4586477,r%3===0?.95:.4),i.fillCircle(a+Math.cos(s)*o,n+Math.sin(s)*o,r%3===0?2.8:1.6)}}handlePointer(t){this.unlockAudio()}unlockAudio(){this.unlockedAudio||(this.sound.unlock(),!this.sound.locked&&(this.unlockedAudio=!0,this.startAmbience()))}startAmbience(){if(!this.audioEnabled||!this.unlockedAudio||!this.audioReady||this.audioLoops.length)return;const t=this.sound.add("ambience",{loop:!0,volume:.45});this.routeAudio(t,"ambience"),t.play(),this.audioLoops.push(t)}setupAudioMix(){if(!(this.sound instanceof E.Sound.WebAudioSoundManager))return;const t=this.sound;this.audioCompressor=t.context.createDynamicsCompressor(),this.audioCompressor.threshold.value=-8,this.audioCompressor.knee.value=6,this.audioCompressor.ratio.value=12,this.audioCompressor.attack.value=.003,this.audioCompressor.release.value=.18,t.masterVolumeNode.disconnect(),t.masterVolumeNode.connect(this.audioCompressor),this.audioCompressor.connect(t.context.destination),t.setVolume(jt(-3));for(const[a,n]of Object.entries({effects:-3,alerts:-1,ambience:-15})){const i=t.context.createGain();i.gain.value=jt(n),i.connect(t.destination),this.audioBuses[a]=i}}routeAudio(t,a){const n=this.audioBuses[a];if(n&&t instanceof E.Sound.WebAudioSound){const i=t.pannerNode||t.volumeNode;i.disconnect(),i.connect(n)}}play(t,a,n,i=Re/2){if(!this.audioEnabled||!this.unlockedAudio||!this.audioReady)return;const r=this.time.now;if(r-(this.soundLast.get(t)??-1/0)<a)return;const s=Bc.has(t);if(this.audioVoices.size>=(s?18:12))return;this.soundLast.set(t,r);const o=t==="gun"&&this.audioTake++%4===3?"gun-alt":t;if(!this.cache.audio.exists(o))return;const c=this.sound.add(o,{volume:n,rate:s?1:.96+Math.random()*.08,pan:s?0:E.Math.Clamp((i/Re-.5)*.85,-.5,.5)});this.routeAudio(c,s?"alerts":"effects"),this.audioVoices.add(c),c.once(E.Sound.Events.COMPLETE,()=>c.destroy()),c.once(E.Sound.Events.DESTROY,()=>this.audioVoices.delete(c)),c.play()||c.destroy(),s&&(this.duckUntil=r+900)}syncWorld(t,a){if(this.reducedMotion?this.reactorGlow.setAlpha(.08):(this.reactorGlow.setAlpha(.05+(Math.sin(this.pulse/130)+1)*.065),this.reactorGlow.setScale(.93+.1*(Math.sin(this.pulse/240)+1)/2)),this.routeProgress+=a*.022,this.routeLights.clear(),!this.reducedMotion)for(let l=0;l<13;l++){const f=(this.routeProgress+l/13)%1,u=xe(f*Me);this.routeLights.fillStyle(se.cyan,.26+l%3*.08),this.routeLights.fillCircle(u.x,u.y,2+l%2)}const n=new Set;for(const l of t.towers){n.add(l.id);const f=P.find(y=>y.id===l.padId);if(!f)continue;let u=this.towers.get(l.id);u&&u.getData("kind")!==l.kind&&(u.destroy(),this.towers.delete(l.id),u=void 0),u||(u=this.makeTower(l.kind,f.x,f.y-4),this.towers.set(l.id,u)),u.setDepth(f.y+12);const p=u.getData("tierMark");p.clear(),p.fillStyle(we[l.kind]);for(let y=0;y<l.tier;y++)p.fillRoundedRect(-20+y*9,-5,7,7,2);const m=u.getData("turret");if(Dt[l.kind]&&m.texture.key===Dt[l.kind].atlas?m.setDisplaySize(88+(l.tier-1)*7,88+(l.tier-1)*7):m.texture.key===`gen-turret-${l.kind}`&&m.setDisplaySize(94+(l.tier-1)*8,94+(l.tier-1)*8),this.pulse>=(this.targetScanAt.get(l.id)??0)){this.targetScanAt.set(l.id,this.pulse+170);const y=Hi(t,l,f);y&&this.targetAngles.set(l.id,Math.atan2(y.y-f.y,y.x-f.x)+Math.PI/2)}const v=this.targetAngles.get(l.id);v!==void 0&&(m.setRotation(v),m.getData("rim")?.setRotation(v))}for(const[l,f]of this.towers)n.has(l)||(f.destroy(),this.towers.delete(l),this.targetAngles.delete(l),this.targetScanAt.delete(l));const i=new Set;for(const l of t.enemies){i.add(l.id);const f=l.kind==="behemoth"||l.kind==="matriarch",u=`gen-enemy-${l.kind}`,p=this.textures.exists(u);let m=this.units.get(l.id);m||(m=this.makeUnit(p?u:`enemy-${l.kind}`,l.kind),this.units.set(l.id,m));const v=Ot[l.kind],y=!p&&v&&this.textures.exists(v.atlas);if(m.legs.clear(),p){const A=xe(Math.min(Me,l.distance+3)),S=xe(Math.max(0,l.distance-3)),k=Math.atan2(A.y-S.y,A.x-S.x)+Math.PI/2,$=this.reducedMotion?0:Math.sin(this.pulse/(f?200:150)+l.id*1.7)*(f?1.6:2.2),C=(f?104:l.kind==="skitter"?44:50)*(l.elite?1.1:1),N=Yc(l.id,C);m.body.setTexture(u).setOrigin(.5,.5).setPosition(l.x+N.x,l.y+$+N.y).setDisplaySize(C,C).setRotation(k).setDepth(l.y+18),m.body.setTint(l.elite?16767400:16777215),m.body.setAlpha(l.kind==="burrower"&&l.distance%320<90?.28:1),m.shadow.setDisplaySize(f?80:42,f?46:26),l.elite?(m.legs.lineStyle(2,Te.amber,.8),m.legs.strokeCircle(l.x,l.y,C*.55),m.legs.setDepth(l.y+11)):(m.legs.lineStyle(3,724755,.5),m.legs.strokeCircle(l.x,l.y,C*.46),m.legs.setDepth(l.y+11))}else if(y){const A=Math.floor(t.time*(l.kind==="skitter"?16:11)+l.id*2)%v.walk.count,S=xe(Math.min(Me,l.distance+3)),k=xe(Math.max(0,l.distance-3)),$=Math.atan2(S.y-k.y,S.x-k.x)+v.rotationOffset,C=(f?114:l.kind==="broodcarrier"||l.kind==="spitter"?70:62)*(l.elite?1.1:1);m.body.setTexture(v.atlas,`${v.walk.prefix}${A}`).setOrigin(v.originX,v.originY).setPosition(l.x,l.y).setDisplaySize(C,C).setRotation($).setDepth(l.y+18),m.body.setAlpha(l.kind==="burrower"&&l.distance%320<90?.3:1),m.shadow.setDisplaySize(f?73:38,f?44:24),(l.kind==="screecher"||l.kind==="spitter"||l.kind==="broodcarrier")&&(m.legs.lineStyle(2,rt[l.kind],.75),m.legs.strokeCircle(l.x,l.y,C*.35),m.legs.setDepth(l.y+11))}else{const A=this.reducedMotion?0:Math.sin(this.pulse/(f?170:92)+l.id)*(f?1.8:2.4);m.body.setTexture(`enemy-${l.kind}`).setOrigin(.5,.62).setPosition(l.x,l.y-(f?5:2)+A).setDepth(l.y+18).setScale((f?1.38:l.kind==="ashwing"?.84:.78)*(l.elite?1.08:1)),m.body.setRotation(l.kind==="ashwing"?Math.sin(this.pulse/290+l.id)*.13:0)}m.shadow.setPosition(l.x,l.y+5).setDepth(l.y+10),this.drawHealth(m.health,l.x,l.y-(f?78:p?46:y?40:34),l.hp/Math.max(1,l.maxHp),f,l.elite,l.y+60),!this.previousEnemies.has(l.id)&&l.distance<30&&this.spawnLight(l.x,l.y)}for(const[l,f]of this.units)l>=0&&!i.has(l)&&(f.body.destroy(),f.shadow.destroy(),f.legs.destroy(),f.health.destroy(),this.units.delete(l));this.previousEnemies=i;const r=t.ally,s=ae.find(l=>l.id===r.rallyId)??ae[0];[[0,-12],[-18,1],[18,1]].forEach(([l,f],u)=>{const p=-1-u,m=`gen-ally-${r.kind}`,v=this.textures.exists(m);let y=this.units.get(p);y||(y=this.makeUnit(v?m:`ally-${r.kind}`,r.kind),this.units.set(p,y));const A=this.reducedMotion?0:Math.sin(this.pulse/230+u*2)*2,S=s.x+l+A,k=s.y+f,$=Ot[r.kind];if(v){const C=t.enemies.reduce((M,I)=>!M||Math.hypot(I.x-S,I.y-k)<Math.hypot(M.x-S,M.y-k)?I:M,void 0),N=C?Math.atan2(C.y-k,C.x-S)+Math.PI/2:-Math.PI/2,U=u===0?78:66;y.body.setTexture(m).setOrigin(.5,.5).setPosition(S,k-4).setDepth(k+20).setDisplaySize(U,U).setRotation(N).clearTint()}else if($&&this.textures.exists($.atlas)){const C=t.enemies.reduce((M,I)=>!M||Math.hypot(I.x-S,I.y-k)<Math.hypot(M.x-S,M.y-k)?I:M,void 0),N=C?Math.atan2(C.y-k,C.x-S)+$.rotationOffset:-Math.PI/2,U=t.phase==="combat"&&C?Math.floor(t.time*10+u)%$.walk.count:0;y.body.setTexture($.atlas,`${$.walk.prefix}${U}`).setOrigin($.originX,$.originY).setPosition(S,k-4).setDepth(k+20).setDisplaySize(u===0?60:52,u===0?60:52).setRotation(N).clearTint()}else y.body.setTexture(`ally-${r.kind}`).setOrigin(.5,.62).setRotation(0).setPosition(S,k-7).setDepth(k+20).setScale(u===0?.8:.72).clearTint();if(y.shadow.setPosition(S,k+4).setDepth(k+10),y.legs.clear(),v&&(y.legs.fillStyle(4453608,.1),y.legs.fillEllipse(S,k+6,u===0?62:52,26),y.legs.setDepth(k+9)),!this.reducedMotion&&!$&&!v){y.legs.lineStyle(2.2,2566437,.95);const C=Math.sin(this.pulse/90+u)*2;y.legs.lineBetween(S-5,k+7,S-8-C,k+14),y.legs.lineBetween(S+5,k+7,S+8+C,k+14),y.legs.setDepth(k+11)}y.health.clear(),y.health.setVisible(!1)});const c=t.integrity/100;this.reactorGlow.setFillStyle(c<.3?16742496:5636081,this.reactorGlow.fillAlpha),this.drawSelection()}makeUnit(t,a){const n=this.add.ellipse(0,0,31,11,527375,.42),i=this.add.sprite(0,0,t).setOrigin(.5,.62),r=this.add.graphics();(a==="behemoth"||a==="matriarch")&&i.setScale(1.4),a==="bulwark"&&i.setTint(12052479),a==="engineer"&&i.setTint(11123912),a==="medic"&&i.setTint(15331045),a==="sharpshooter"&&i.setTint(8890592),a==="drone"&&i.setTint(8381951);const s=this.add.graphics();return{body:i,shadow:n,legs:r,health:s}}makeTower(t,a,n){const i=this.add.ellipse(2,18,66,26,658961,.55),r=this.add.graphics();r.fillStyle(461325,.5),r.fillEllipse(2,16,78,30);const s=(m,v=8,y=0)=>Array.from({length:v},(A,S)=>{const k=y+S/v*Math.PI*2;return new E.Math.Vector2(Math.cos(k)*m,Math.sin(k)*m)});r.fillStyle(1778731,1),r.fillPoints(s(34),!0),r.fillStyle(2569019,1),r.fillPoints(s(30),!0),r.lineStyle(2,5070184,.75),r.strokePoints(s(30),!0);const o=`gen-turret-${t}`;let c,l=null;if(this.textures.exists(o))c=this.add.image(0,0,o).setDisplaySize(94,94),l=this.add.graphics(),l.fillStyle(3112850,.5),l.fillEllipse(0,6,96,78),l.fillStyle(4453608,.2),l.fillEllipse(0,4,72,58),l.lineStyle(2,7336166,.5),l.strokeCircle(0,0,43);else{const m=Dt[t];c=m&&this.textures.exists(m.atlas)?this.add.image(0,0,m.atlas,m.frame).setOrigin(m.originX,m.originY).setDisplaySize(88,88):this.add.image(0,0,`tower-${t}`).setScale(1.05)}const f=this.add.graphics();f.fillStyle(we[t]),f.fillRoundedRect(-20,-5,7,7,2);const u=l?[i,r,l,c,f]:[i,r,c,f],p=this.add.container(a,n,u);return p.setSize(56,52),p.setData("kind",t),p.setData("turret",c),p.setData("tierMark",f),l&&c.setData("rim",l),p}drawHealth(t,a,n,i,r,s,o){if(t.setVisible(r||s||i<.999),!r&&!s&&i>=.999){t.clear();return}const c=r?58:s?40:32;t.clear(),t.fillStyle(724755,.82),t.fillRoundedRect(a-c/2,n,c,r?7:5,2),t.fillStyle(i>.55?14715452:i>.25?15774812:14699068,.95),t.fillRoundedRect(a-c/2+1,n+1,Math.max(0,(c-2)*i),r?5:3,2),r&&(t.lineStyle(1,16766860),t.strokeRoundedRect(a-c/2,n,c,7,2)),t.setDepth(o)}drawSelection(){if(!this.selectionRing||(this.selectionRing.clear(),this.selectedPad===null))return;const t=P.find(i=>i.id===this.selectedPad);if(!t)return;this.selectionRing.lineStyle(3,6619120,.92),this.selectionRing.strokeCircle(t.x,t.y-4,40);const a=this.hooks.getState(),n=a.towers.find(i=>i.padId===t.id);if(n){const i=La(a,n);this.selectionRing.lineStyle(2,we[n.kind],.26),this.selectionRing.strokeCircle(t.x,t.y-4,i)}this.selectionRing.setDepth(1e3)}shot(t,a,n){const i=we[t.kind]??se.cyan,r=t.tx??a+38,s=t.ty??n-10;if(this.beam(a,n,r,s,i,110),(t.kind==="cannon"||t.kind==="missile")&&this.textures.exists(it.atlas)){const l=t.kind==="cannon"?88:66,f=this.add.sprite(r,s,it.atlas,`${it.prefix}0`).setDisplaySize(l,l).setDepth(s+45);this.addVisual(f,440,it)}const o=this.add.circle(a,n-8,9,i,.85).setBlendMode(E.BlendModes.ADD).setDepth(n+28);this.addVisual(o,100);const c=t.kind==="gun"||!t.kind?"gun":t.kind;this.play(c,c==="gun"?90:140,c==="gun"?.28:c==="rail"?.48:.34,a)}hit(t,a,n){const i=we[t.kind]??se.cyan,r=this.add.circle(a,n,t.radius&&t.radius>20?15:5,i,.75).setBlendMode(E.BlendModes.ADD).setDepth(n+30);this.addVisual(r,140),t.radius&&t.radius>18&&this.burst(a,n,Math.min(t.radius,68),i)}deathFx(t,a,n){const i=Ot[t.kind],r=t.id!==void 0?this.units.get(t.id):void 0;if(i?.death&&this.textures.exists(i.atlas)){const s=t.kind==="behemoth"||t.kind==="matriarch",o=r?.body.displayWidth??(s?114:62),c=this.add.sprite(a,n,i.atlas,`${i.death.prefix}0`).setOrigin(i.originX,i.originY).setDisplaySize(o,o).setRotation(r?.body.rotation??i.rotationOffset).setDepth(n+8);this.addVisual(c,this.reducedMotion?180:650,i.death)}else this.burst(a,n,24,rt[t.kind]??se.cyan)}beam(t,a,n,i,r,s){const o=this.add.graphics().setDepth(Math.max(a,i)+50);o.lineStyle(7,r,.16),o.lineBetween(t,a-8,n,i),o.lineStyle(2.4,r,.92),o.lineBetween(t,a-8,n,i),o.fillStyle(16252912,.95),o.fillCircle(n,i,3),this.addVisual(o,s)}burst(t,a,n,i){const r=this.add.graphics().setDepth(a+40);r.lineStyle(4,i,.85),r.strokeCircle(t,a,n*.48),r.lineStyle(2,16771506,.75),r.strokeCircle(t,a,n*.68);for(let s=0;s<9;s++){const o=s*Math.PI*2/9;r.fillStyle(i,.9),r.fillCircle(t+Math.cos(o)*n*.46,a+Math.sin(o)*n*.46,2+s%3)}this.addVisual(r,360)}abilityFx(t,a,n){const i=this.add.graphics().setDepth(980);i.lineStyle(5,se.cyan,.85),i.strokeCircle(t,a,n),i.lineStyle(2,14221308,.85),i.strokeCircle(t,a,n*.84);for(let r=0;r<12;r++){const s=r*Math.PI/6;i.fillStyle(se.cyan,.8),i.fillCircle(t+Math.cos(s)*n,a+Math.sin(s)*n,4)}this.addVisual(i,650)}warningFx(t,a,n){const i=this.add.graphics().setDepth(980);i.lineStyle(3,16736854,.9),i.strokeCircle(t,a,n),i.lineStyle(1,16765558,.75),i.strokeCircle(t,a,n*.76);for(let r=0;r<8;r++){const s=r*Math.PI/4;i.fillStyle(16736333,.85),i.fillCircle(t+Math.cos(s)*n,a+Math.sin(s)*n,3)}this.addVisual(i,800)}breach(t,a){const n=this.add.graphics().setDepth(1e3);n.lineStyle(5,16739410,.9),n.strokeCircle(t,a,28),n.lineStyle(2,16771491),n.lineBetween(t-9,a-12,t+9,a+12),n.lineBetween(t+9,a-12,t-9,a+12),this.addVisual(n,520)}spawnLight(t,a){const n=this.add.circle(t,a,15,se.cyan,.3).setBlendMode(E.BlendModes.ADD).setDepth(a+8);this.addVisual(n,300)}addVisual(t,a,n){this.visuals.length>=512&&this.visuals.shift()?.object.destroy(),t.setData("maxLife",a),this.visuals.push({object:t,life:a,max:a,frames:n})}updateVisuals(t){const a=Math.min(t,100);for(let n=this.visuals.length-1;n>=0;n--){const i=this.visuals[n];if(i.life-=a,i.life<=0){i.object.destroy(),this.visuals.splice(n,1);continue}const r=i.life/i.max;if(i.frames&&i.object instanceof E.GameObjects.Sprite){const s=Math.min(i.frames.count-1,Math.floor((1-r)*i.frames.count));i.object.setFrame(`${i.frames.prefix}${s}`)}"setAlpha"in i.object&&typeof i.object.setAlpha=="function"&&i.object.setAlpha(r)}}teardown(){document.removeEventListener("pointerdown",this.documentGesture,!0),document.removeEventListener("keydown",this.documentGesture,!0),this.game.canvas.removeEventListener("webglcontextlost",this.contextLoss),this.game.canvas.removeEventListener("webglcontextrestored",this.contextRestore);for(const t of this.audioLoops)t.destroy();this.audioLoops.length=0;for(const t of[...this.audioVoices])t.destroy();for(const t of Object.values(this.audioBuses))t?.disconnect();this.audioCompressor?.disconnect();for(const t of this.visuals)t.object.destroy();this.visuals.length=0,this.units.clear(),this.towers.clear(),this.scenery?.destroy()}}async function Gc(e,t){const a=new qc(t),n=()=>{const c=e.getBoundingClientRect(),l=Math.max(1,Math.round(c.width||e.clientWidth||Re)),f=Math.max(1,Math.round(c.height||e.clientHeight||dt)),u=Math.min(3,Math.max(1,typeof devicePixelRatio=="number"?devicePixelRatio:1));return{w:l,h:f,dpr:u}},i=n(),r=new E.Game({type:E.AUTO,parent:e,width:Math.round(i.w*i.dpr),height:Math.round(i.h*i.dpr),backgroundColor:"#141a1f",scale:{mode:E.Scale.NONE,autoCenter:E.Scale.NO_CENTER},render:{antialias:!0,pixelArt:!1,roundPixels:!1},scene:[a],audio:{disableWebAudio:!1}});await a.ready,a.setDisplayScale(i.w,i.h,i.dpr);const s=()=>{const c=n();r.scale.resize(Math.round(c.w*c.dpr),Math.round(c.h*c.dpr)),a.setDisplayScale(c.w,c.h,c.dpr)};window.addEventListener("resize",s);const o=a.destroyForOwner;return{setSelection:c=>a.setSelection(c),setAudio:c=>a.setAudio(c),setReducedMotion:c=>a.setReducedMotion(c),showEvents:c=>a.showEvents(c),destroy:()=>{window.removeEventListener("resize",s),o()}}}const Xc="reactorfall-save-v1",vt="snapshots",An=2*1024*1024,Vc=3e3;class Bi extends Error{constructor(t){super(t),this.name="SaveConflictError"}}function ft(e){try{return Oc(e)}catch{return null}}function Na(e){const t=ft(e);if(!t)throw new Error("This file is not a valid Reactorfall saved run.");return t}function Ui(e){if(e.length>An||new TextEncoder().encode(e).byteLength>An)throw new Error("Saved run files must be no larger than 2 MB.")}function Kc(e){const t=JSON.stringify(Na(structuredClone(e)));return Ui(t),t}function Jc(e){Ui(e);let t;try{t=JSON.parse(e)}catch{throw new Error("The saved run file contains invalid JSON.")}return Na(t)}function Qc(){return new Promise((e,t)=>{if(typeof indexedDB>"u"){t(new Error("Saved runs are unavailable in this browser."));return}let a,n=!1;const i=s=>{n||(n=!0,clearTimeout(r),t(s))},r=setTimeout(()=>i(new Error("Opening saved runs timed out. Close other Reactorfall tabs and try again.")),Vc);try{a=indexedDB.open(Xc,1)}catch(s){i(s);return}a.onblocked=()=>i(new Error("Saved runs are blocked by another tab. Close other Reactorfall tabs and try again.")),a.onerror=()=>i(a.error??new Error("The saved-run database could not be opened.")),a.onupgradeneeded=()=>{if(n){a.transaction?.abort();return}a.result.objectStoreNames.contains(vt)||a.result.createObjectStore(vt)},a.onsuccess=()=>{if(n){a.result.close();return}n=!0,clearTimeout(r),e(a.result)}})}function _t(e,t,a){return new Promise((n,i)=>{const r=e.transaction(vt,t);let s;const o=c=>{s=c,r.abort()};r.oncomplete=()=>n(),r.onabort=()=>i(s??r.error??new Error("The saved-run transaction was interrupted.")),r.onerror=()=>{s??=r.error};try{a(r.objectStore(vt),o)}catch(c){o(c)}})}class Zc{queue=Promise.resolve();enqueue(t){const a=this.queue.then(async()=>{const n=await Qc();try{return await t(n)}finally{n.close()}});return this.queue=a.catch(()=>{}),a}load(){return this.enqueue(async t=>{let a,n;await _t(t,"readonly",s=>{s.get("current").onsuccess=o=>{a=o.target.result},s.get("previous").onsuccess=o=>{n=o.target.result}});const i=ft(a);if(i)return{state:i,recovered:!1};const r=ft(n);if(r)return{state:r,recovered:!0};if(a!==void 0||n!==void 0)throw new Error("The saved run is damaged and no valid previous snapshot is available.");return{state:null,recovered:!1}})}save(t){let a;try{a=Na(structuredClone(t))}catch(n){return Promise.reject(n)}return this.enqueue(n=>_t(n,"readwrite",(i,r)=>{const s=i.get("current");s.onsuccess=()=>{try{const o=ft(s.result);if(o?.seed===a.seed&&o.revision>a.revision)throw new Bi("A newer revision of this run is already saved.");if(o?.seed===a.seed&&o.revision===a.revision)return;o&&o.seed===a.seed&&i.put(o,"previous"),i.put(a,"current")}catch(o){r(o)}}}))}clear(){return this.enqueue(t=>_t(t,"readwrite",a=>{a.clear()}))}}const ed="/api/games/reactorfall";class te extends Error{constructor(t,a=0){super(t),this.status=a}status}async function da(e,t){try{const a=await fetch(`${ed}/${e}`,{method:t?"POST":"GET",headers:t?{"Content-Type":"application/json"}:{},body:t?JSON.stringify(t):void 0,signal:AbortSignal.timeout(1e4),cache:"no-store"}),n=await a.json();if(!a.ok)throw new te(n.error||"The score board is unavailable. Please retry.",a.status);return n}catch(a){throw a instanceof te?a:new te("Could not reach the arcade. Your result is saved here; please retry.")}}async function td(){const e=await da("scores");if(!Array.isArray(e.scores))throw new te("The score board is unavailable. Please retry.");return e.scores.filter(t=>typeof t.name=="string"&&Number.isSafeInteger(t.score)).slice(0,10)}function ad(){try{return localStorage.getItem("reactorfall.player-name")||""}catch{return""}}class nd{constructor(t,a={getItem:n=>localStorage.getItem(n),setItem:(n,i)=>localStorage.setItem(n,i)}){this.storage=a,this.key=`reactorfall.arcade.${t}`;try{const n=JSON.parse(a.getItem(this.key)||"{}");n&&typeof n=="object"&&!Array.isArray(n)&&(this.record=n)}catch{}}storage;record={};flight=null;key;get pendingName(){return this.record.pending?.name}get receipt(){return this.record.receipt}persist(){try{this.storage.setItem(this.key,JSON.stringify(this.record))}catch{throw new te("Enable browser storage to save your score safely, then retry.")}}submit(t,a){return this.flight?this.flight:(this.flight=this.send(t,a).finally(()=>{this.flight=null}),this.flight)}async send(t,a){if(t.phase!=="defeat"||!t.arcade?.eligible)throw new te("Finish a new run on this device to post a score. Imported runs are practice runs.");if(this.record.receipt)return this.record.receipt;if(a=(this.record.pending?.name??a).normalize("NFKC").trim().replace(/ +/g," "),![...a].length||[...a].length>24||/[\p{C}\p{Zl}\p{Zp}]/u.test(a))throw new te("Enter a name with 1–24 printable characters.");if(t.score>1e9||t.wave>1e4||t.kills>1e7||t.time>86400)throw new te("This run exceeds the arcade’s score limits. Your local result is kept.");if(!this.record.token){const n=await da("runs",{});if(typeof n.runToken!="string"||!/^[A-Za-z0-9_-]{43}$/.test(n.runToken))throw new te("The arcade did not return a run token. Please retry.");this.record.token=n.runToken}this.record.pending??={runToken:this.record.token,name:a,score:t.score,wave:t.wave,kills:t.kills,headshots:0,duration:Math.round(t.time)},this.persist();try{const n=await da("scores",this.record.pending);if(n.accepted!==!0||!Number.isSafeInteger(n.rank)||!n.score)throw new te("The arcade response was incomplete. Please retry.");this.record.receipt=n,this.persist();try{localStorage.setItem("reactorfall.player-name",a);const i=new BroadcastChannel("shoemoney-arcade-scores");i.postMessage({game:"reactorfall"}),i.close()}catch{}return n}catch(n){throw n instanceof te&&(n.status===400||n.status===410)&&(n.status===410&&delete this.record.token,delete this.record.pending,this.persist()),n}}}const id={radiation:oc,pause:dc,play:ql,sound:ac,muted:Ql,settings:Ul,scrap:fc,shield:yn,wave:gc,skull:Dl,clock:jl,gun:gn,cannon:Jl,cryo:Kl,rail:Bl,arc:lc,missile:_l,flag:tc,plus:sc,repair:Gl,help:Yl,close:Zl,save:Ol,download:nc,upload:rc,restart:ec,ranger:ic,bulwark:yn,engineer:uc,medic:Hl,sharpshooter:gn,drone:pc,stopwatch:mc,boxes:Nl,hammer:cc,gamepad:hc,expand:Fl,check:Vl,sell:Xl,fire:Wl,trophy:Ll},b=e=>zl(id[e],{attributes:{"aria-hidden":"true"}}).html.join(""),Ce=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),he=e=>Intl.NumberFormat("en",{notation:e>=1e5?"compact":"standard",maximumFractionDigits:0}).format(e),_e=()=>`RF-${crypto.getRandomValues(new Uint32Array(1))[0].toString(36).toUpperCase()}`,$t=new Zc;let d=ji(_e()),V,Yi,bt=!1;function Oa(e=!0){d.arcade||(d.arcade={id:crypto.randomUUID(),eligible:e},d.revision++),Yi=new nd(d.arcade.id),bt=!1}let j=null,_=null,wt="",fa="",xt="",qe=0,ut=!0,Wt=!1,Ht="",It=!1,Bt="",mt=!1;const rd=performance.now();let Ut,Le=0;const qi=matchMedia("(prefers-reduced-motion: reduce)");let W={sound:!0,reducedMotion:qi.matches},Gi=!1,Cn=!1;qi.addEventListener?.("change",e=>{Gi||(W.reducedMotion=e.matches,V?.setReducedMotion(e.matches))});try{const e=JSON.parse(localStorage.getItem("reactorfall.settings")||"{}");typeof e.sound=="boolean"&&(W.sound=e.sound),typeof e.reducedMotion=="boolean"&&(W.reducedMotion=e.reducedMotion),Le=Math.max(0,Number(localStorage.getItem("reactorfall.bestWave"))||0)}catch{}document.querySelector("#app").innerHTML=`
  <main class="shell">
    <header class="brand-row">
      <div class="brand"><div class="brand-mark">${b("radiation")}</div><div><a class="brand-meta" href="https://arcade.shoemoney.com/">SHOEMONEY ARCADE</a><h1>REACTOR<span>FALL</span></h1></div></div>
      <div class="edition"><i></i> Endless tower defense</div>
      <nav class="toolbar" aria-label="Game controls">
        <button id="pause" aria-label="Pause game">${b("pause")}<span class="toolbar-label">Pause</span></button>
        <button id="speed" aria-label="Game speed, 1x">1×</button>
        <button id="sound" class="icon-only" aria-label="Mute sound">${b("sound")}</button>
        <button id="high-scores" class="icon-only" aria-label="High scores">${b("trophy")}</button>
        <button id="help" class="icon-only" aria-label="How to play">${b("help")}</button>
        <button id="settings" class="icon-only" aria-label="Settings and saves">${b("settings")}</button>
      </nav>
    </header>
    <section class="status-row" aria-label="Run status">
      <div class="stat">${b("wave")}<div><div class="stat-label">Wave</div><div class="stat-value" id="wave-value">01 <small>ready</small></div></div></div>
      <div class="stat">${b("scrap")}<div><div class="stat-label">Scrap</div><div class="stat-value" id="scrap-value">200</div></div></div>
      <div class="stat reactor" id="stat-reactor">${b("shield")}<div><div class="stat-label">Reactor</div><div class="stat-value" id="integrity-value">100 <small>/ 100</small></div><div class="integrity-bar" id="integrity-bar" role="progressbar" aria-label="Reactor integrity" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-valuetext="100 of 100"><span id="integrity-fill" style="width:100%"></span></div></div></div>
      <div class="stat threat">${b("skull")}<div><div class="stat-label" id="threat-label">Next threat</div><div class="stat-value" id="threat-value">Drifter swarm</div></div></div>
    </section>
    <div class="workspace">
      <section class="battle-column" aria-label="Defense battlefield">
        <div class="battle-panel">
          <div class="toast" id="toast" hidden></div>
          <div class="battle-heading"><div class="sector">${b("radiation")} SECTOR 07 <span class="muted">/ The last reactor</span></div><div class="map-status" id="map-status"><i></i> Preparation</div><div class="wave-intel" id="wave-intel" role="group" aria-label="Incoming wave"></div></div>
          <div class="battlefield" id="battlefield">
            <div id="game-canvas" role="img" aria-label="Battlefield" aria-describedby="board-summary"></div>
            <p class="sr-only" id="board-summary" aria-live="off"></p>
            <div class="pad-layer" id="pad-layer" aria-label="Build pads and rally points"></div>
            <div class="loading" id="loading"><div>${b("radiation")}Powering the reactor…</div></div>
          </div>
          <div class="canvas-overlay" id="canvas-overlay" hidden></div>
          <div class="rally-controls" id="rally-controls" aria-label="Move your allied squad"></div>
          <div class="map-foot"><p id="map-hint"><strong>Hold the line.</strong> Select a numbered pad to build.</p><span class="seed" id="seed-label"></span></div>
        </div>
        <div class="battle-actions">
          <span class="battle-control"><button class="ability" id="ability" aria-label="Reactor pulse" aria-describedby="ability-tip">${b("arc")}</button><span class="action-tooltip" role="tooltip" id="ability-tip"></span></span>
          <span class="battle-control"><button class="repair" id="repair" aria-label="Repair reactor" aria-describedby="repair-tip">${b("repair")}</button><span class="action-tooltip" role="tooltip" id="repair-tip"></span></span>
          <span class="battle-control"><button class="primary start-wave" id="start-wave" aria-label="Send wave 01" aria-describedby="start-wave-tip">${b("play")}</button><span class="action-tooltip" role="tooltip" id="start-wave-tip"></span></span>
        </div>
      </section>
      <aside id="sidebar" tabindex="0" role="region" aria-label="Defense controls" class="sidebar">
        <section class="panel defense-panel" id="defense-panel"></section>
        <section class="panel intel" id="intel-panel"></section>
        <section class="panel squad-panel" id="squad-panel"></section>
      </aside>
    </div>
    <footer class="footnote"><span id="save-status">${b("save")} Saves on this device <span class="muted">·</span> <span id="best-label">Your first stand</span></span><div><span id="score-value" aria-label="Current score">Score 0</span><button id="new-run">${b("restart")} New run</button><button id="fullscreen">${b("expand")} Fullscreen</button></div></footer>
  </main>
  <!-- Permanent live regions. The visible toast is display:none while hidden,
       so a screen reader never sees text written into it; these are always in
       the accessibility tree and carry the same messages. -->
  <p class="sr-only" role="status" aria-live="polite" id="live-polite"></p>
  <p class="sr-only" role="alert" aria-live="assertive" id="live-alert"></p>
  <dialog id="dialog" aria-labelledby="dialog-title"></dialog>
  <input class="file-input" type="file" id="import-file" accept="application/json,.json" tabindex="-1" aria-hidden="true" />
`;const h=e=>document.getElementById(e),O=h("dialog");let De=!1,Et="",Yt=[],qt=!1;function Da(e,t=!1){const a={region:t?"live-alert":"live-polite",text:e};if(Yt=[...Yt,a].slice(-3),qt)return;qt=!0;const n=()=>{const i=Yt.shift();if(!i){qt=!1;return}const r=h(i.region);r.textContent="",requestAnimationFrame(()=>{r.textContent=i.text}),setTimeout(n,400)};n()}function B(e,t=!1){const a=h("toast");if(a.textContent=e,a.classList.toggle("error",t),a.hidden=!1,Da(e,t),a.querySelector(".toast-close"))a.querySelector(".toast-close")?.remove();else{const n=document.createElement("button");n.className="toast-close",n.type="button",n.setAttribute("aria-label","Dismiss message"),n.textContent="×",n.onclick=()=>{a.hidden=!0,clearTimeout(Ut)},a.append(n)}clearTimeout(Ut),Ut=setTimeout(()=>{a.hidden=!0},t?7e3:3200)}function st(e){Da(e)}function Xi(e){const t=Math.round(Math.max(0,Math.min(1,e))*100);h("startup-fill").style.width=`${t}%`,h("startup-progress").setAttribute("aria-valuenow",String(t)),h("startup-percent").textContent=`${t}%`}async function sd(){Xi(1),h("startup-label").textContent="Ready",await new Promise(e=>setTimeout(e,Math.max(0,900-(performance.now()-rd)))),h("startup-splash").classList.add("leaving"),await new Promise(e=>setTimeout(e,W.reducedMotion?0:220)),h("startup-splash").hidden=!0,h("app").removeAttribute("inert"),h("app").removeAttribute("aria-hidden"),mt=!0}async function ie(){if(It){h("save-status").innerHTML=`${b("save")} Saved run needs recovery · open Settings`;return}try{await $t.save(d),ut=!0,Wt=!1,h("save-status").innerHTML=`${b("save")} Saved on this device <span class="muted">·</span> ${Le?`Best wave ${he(Le)}`:"Your first stand"}`}catch(e){if(e instanceof Bi){Wt||(Wt=!0,B("This run was updated in another tab. Close it to keep saving here.",!0));return}ut&&B("Device storage is unavailable. Export your run from Settings.",!0),ut=!1,h("save-status").innerHTML=`${b("download")} Export your run to keep it`}}function F(e,t=!1){const a=ce(d,e);return a.ok?(V?.showEvents(a.events),!t&&a.message&&!["pause","speed","start","target"].includes(e.type)&&B(a.message),e.type==="start"&&(_=null),D(!0),ie(),!0):(B(a.message||"That action is not available yet.",!0),!1)}function Vi(e){d.phase==="defeat"||O.open||(j=e,V?.setSelection(e),_&&!d.towers.some(t=>t.padId===e)&&F({type:"build",padId:e,kind:_})&&(_=null),D(!0))}function be(e,t,a,n=!0){const i=O.open;Et=a,i||(De=!d.paused&&(d.phase==="combat"||d.phase==="prep"&&d.nextWaveCountdown!==null),De&&ce(d,{type:"pause"})),O.innerHTML=`<div class="dialog-heading"><h2 id="dialog-title">${e}</h2>${n?`<button class="close" data-close aria-label="Close dialog">${b("close")}</button>`:""}</div>${t}`,O.querySelector("[data-close]")?.addEventListener("click",()=>O.close()),i||O.showModal(),D(),ie()}O.addEventListener("close",()=>{if(O.open)return;const e=De;De=!1,Et="",e&&d.paused&&(d.phase==="combat"||d.phase==="prep")&&ce(d,{type:"pause"}),D(!0)});O.addEventListener("cancel",e=>{Et==="reward"&&e.preventDefault()});function od(){const e=d.towers.find(s=>s.padId===j),t=JSON.stringify([j,_,d.towers.length,e&&[e.id,e.kind,e.tier,e.branch,e.target,e.spent],d.phase==="defeat",d.modifiers.range]),a=j!==null||_!==null;if(document.body.toggleAttribute("data-tray",a),a?requestAnimationFrame(()=>{const s=document.querySelector(".battlefield")?.getBoundingClientRect();if(!s)return;const o=Math.max(140,Math.round(window.innerHeight-s.bottom-10));document.body.style.setProperty("--tray-h",`${o}px`)}):document.body.style.removeProperty("--tray-h"),t===wt){$n();return}wt=t;const i=document.activeElement?.id||null,r=h("defense-panel");if(e){const s=L[e.kind],o=za(e),c={damage:d.modifiers.damage,fireRate:d.modifiers.fireRate},l=xn(e.kind,e.tier,e.branch,c),f=p=>{const m=xn(e.kind,Math.min(3,e.tier+1),p,c),v=Math.round(m.damage)-Math.round(l.damage),y=l.interval-m.interval,A=[];return v!==0&&A.push(`${v>0?"+":""}${v} damage`),y>5e-4&&A.push(`+${y.toFixed(2)}s faster`),A.length?A.join(" · "):"Specialisation"},u=e.tier===1?s.branches.map((p,m)=>{const v=m===0?"a":"b";return`<button class="upgrade-choice" id="upgrade-${v}" data-upgrade="${v}"><strong>${p.name}</strong><span>${p.description}</span><em class="upgrade-effect">${f(v)}</em><b>${b("scrap")} ${o} scrap</b></button>`}).join(""):e.tier===2?`<button class="upgrade-choice" id="upgrade-${e.branch}" data-upgrade="${e.branch}"><strong>Upgrade to tier III</strong><span>Strengthen ${s.branches[e.branch==="a"?0:1].name.toLowerCase()}.</span><b>${b("scrap")} ${o} scrap</b></button>`:'<p class="panel-note">Fully upgraded. Ready for the next siege.</p>';r.innerHTML=`<div class="tower-detail" style="--tower-color:${s.color}"><button class="back-build" id="clear-selection">${b("hammer")} Build another defense</button><div class="detail-icon">${b(e.kind)}<div><div class="tier">PAD ${String(e.padId+1).padStart(2,"0")} · TIER ${["I","II","III"][e.tier-1]}</div><h2>${s.name}</h2></div></div><p class="role">${s.description}</p><div class="detail-stats"><div><strong>${he(La(d,e))}</strong><span>Range</span></div><div><strong>${e.branch?s.branches[e.branch==="a"?0:1].name:"Standard"}</strong><span>Specialization</span></div></div><label class="field-label" for="target-mode">Target priority</label><select id="target-mode"><option value="first" ${e.target==="first"?"selected":""}>First to the reactor</option><option value="strongest" ${e.target==="strongest"?"selected":""}>Strongest enemy</option><option value="last" ${e.target==="last"?"selected":""}>Last in the horde</option></select><div class="upgrade-options">${u}</div><button class="sell-button" id="sell-tower">${b("sell")} Sell · recover ${Math.floor(e.spent*.7)} scrap</button></div>`,h("clear-selection").onclick=()=>{j=null,V?.setSelection(null),D(!0)},h("target-mode").onchange=p=>F({type:"target",towerId:e.id,target:p.target.value}),r.querySelectorAll("[data-upgrade]").forEach(p=>{p.onclick=()=>F({type:"upgrade",towerId:e.id,branch:p.dataset.upgrade})}),h("sell-tower").onclick=()=>F({type:"sell",towerId:e.id})}else{const s=d.towers.length,o=s>=P.length;r.innerHTML=`<div class="panel-kicker">DEFENSE CONTROL <span class="badge">${j===null?`${d.towers.length} / ${P.length}`:`PAD ${String(j+1).padStart(2,"0")}`}</span></div><h2>${j===null?o?"Your layout is complete":s>0?"Finish your defense":"Build your defense":"Choose a defense"}</h2><p class="panel-intro">${j===null?o?`All ${P.length} pads built. Tap one to upgrade or sell it.`:s>0?`${P.length-s} pad${P.length-s===1?"":"s"} left. Tap a pad to upgrade it, or add another.`:"Pick a tower, then tap a numbered pad. Or tap a pad first.":"Choose a tower to place on this pad."}</p><div class="tower-grid">${Object.keys(L).map(c=>`<button class="tower-buy ${_===c?"selected":""}" id="build-${c}" data-build="${c}" aria-pressed="${_===c}" aria-label="Build ${L[c].name}, ${L[c].cost} scrap" style="--tower-color:${L[c].color}"><span class="tower-icon">${b(c)}</span><strong>${L[c].name}</strong><span class="price">${b("scrap")} ${L[c].cost}</span></button>`).join("")}</div><p class="panel-note">${b("hammer")} Towers fire automatically. Combine their strengths.</p>`,r.querySelectorAll("[data-build]").forEach(c=>{c.onclick=()=>{const l=c.dataset.build;if(d.scrap<L[l].cost){B(`You need ${L[l].cost} scrap for ${L[l].name}.`,!0);return}j!==null?(F({type:"build",padId:j,kind:l}),_=null):(_=l,B(`Select a numbered pad for your ${L[l].name.toLowerCase()}.`),D(!0))}})}if($n(),i){const s=document.getElementById(i);s&&r.contains(s)&&s.focus({preventScroll:!0})}}function $n(){const e=h("defense-panel"),t=d.towers.find(n=>n.padId===j),a=d.phase==="defeat";if(t){const n=za(t);e.querySelectorAll("[data-upgrade]").forEach(i=>{i.disabled=d.scrap<n})}else e.querySelectorAll("[data-build]").forEach(n=>{const i=n.dataset.build;n.disabled=a||d.scrap<L[i].cost,n.classList.toggle("unaffordable",d.scrap<L[i].cost)})}function D(e=!1){h("score-value").textContent=`Score ${he(d.score)}`,h("high-scores").disabled=d.phase==="reward";const t=d.phase==="combat"||d.phase==="defeat"?d.wave:d.wave+1;h("wave-value").innerHTML=`${String(t).padStart(2,"0")} <small>${d.phase==="combat"?"active":d.phase==="defeat"?"fallen":"ready"}</small>`,h("scrap-value").textContent=he(d.scrap);const a=Math.max(0,Math.ceil(d.integrity)),n=a<=30;h("integrity-value").innerHTML=`${a} <small>/ 100</small>`,h("integrity-fill").style.width=`${Math.max(0,d.integrity)}%`,h("integrity-fill").style.background=n?"var(--red)":"var(--lime)";const i=h("integrity-bar");i.setAttribute("aria-valuenow",String(a)),i.setAttribute("aria-valuetext",n?`${a} of 100 — critical`:`${a} of 100`),i.classList.toggle("is-critical",n),h("stat-reactor").classList.toggle("is-critical",n),n!==Cn&&(Cn=n,n&&Da("Reactor integrity critical.",!0)),h("integrity-fill").parentElement.setAttribute("aria-valuenow",String(Math.ceil(d.integrity))),h("pause").innerHTML=`${b(d.paused?"play":"pause")}<span class="toolbar-label">${d.paused?"Resume":"Pause"}</span>`,h("pause").setAttribute("aria-label",d.paused?"Resume game":"Pause game"),h("pause").disabled=d.phase==="defeat",h("speed").textContent=`${d.speed}×`,h("speed").setAttribute("aria-label",`Game speed, ${d.speed}x`),h("speed").classList.toggle("active",d.speed===2),h("sound").innerHTML=b(W.sound?"sound":"muted"),h("sound").setAttribute("aria-label",W.sound?"Mute sound":"Enable sound"),h("seed-label").textContent=d.seed;const r=d.phase==="prep"&&d.nextWaveCountdown!==null?Math.ceil(d.nextWaveCountdown):null,s=d.phase==="combat"?Math.max(0,Xe-d.waveTime):null,o=s===null?"":s<=vn?` · ${Math.ceil(s)}s left!`:` · ${Math.ceil(s)}s`,c=d.phase==="defeat"?"Reactor lost":d.paused?"Paused":d.phase==="reward"?"Reinforcements":d.phase==="combat"?`${d.enemies.length+d.pending.length-d.spawnIndex} left in wave${o}`:r!==null?`Next wave in ${r}s`:"Preparation";h("map-status").classList.toggle("is-urgent",s!==null&&s<=vn),h("map-status").innerHTML=`<i></i> ${c}`;const l=`Battlefield. Wave ${d.wave}. ${c}. Reactor integrity ${Math.round(d.integrity)} of 100. ${d.towers.length} of ${P.length} pads built. ${X[d.ally.kind].name} squad is at point ${d.ally.rallyId+1}.`,f=h("board-summary");f.textContent!==l&&(f.textContent=l),h("map-hint").innerHTML=_?`<strong>${L[_].name} selected.</strong> Choose a numbered pad.`:d.phase==="combat"?`<strong>${d.towers.length}/${P.length} pads built.</strong> Tap a tower to upgrade it any time.`:`<strong>${d.scrap} scrap</strong> · next wave starts on its own. Pause to plan.`;const u=h("ability"),p=Math.max(0,d.abilityCooldown-d.time);u.innerHTML=`${b("arc")}${p>0?`<span class="action-timer">${Math.ceil(p)}</span>`:""}`,u.disabled=d.phase!=="combat"||d.paused||p>0,u.setAttribute("aria-label",p>0?`Reactor pulse · ${Math.ceil(p)}s`:"Reactor pulse"),h("ability-tip").textContent=`Reactor pulse — strikes around your squad. ${p>0?`Ready in ${Math.ceil(p)}s.`:d.phase!=="combat"?"Available during combat.":d.paused?"Resume to fire.":"Ready to fire."}`;const m=h("repair"),v=Math.max(0,d.repairCooldown-d.time);m.innerHTML=`${b("repair")}${v>0?`<span class="action-timer">${Math.ceil(v)}</span>`:""}`,m.disabled=d.paused||d.scrap<Ye||d.integrity>=100||d.phase==="defeat"||v>0,m.setAttribute("aria-label",`Repair reactor · ${Ye} scrap${v>0?` · ${Math.ceil(v)}s`:""}`),h("repair-tip").textContent=`Repair — ${Ye} scrap restores ${Ni} integrity. ${v>0?`Crew ready in ${Math.ceil(v)}s.`:d.integrity>=100?"Reactor is already full.":`Crew recharges for ${Ca}s after use.`}`;const y=h("start-wave"),A=d.phase==="combat"?"Wave in progress":d.phase==="reward"?"Choose a reinforcement":d.phase==="defeat"?"Reactor offline":r!==null?`Wave ${String(d.wave+1).padStart(2,"0")} in ${r}s · Send now`:`Send wave ${String(d.wave+1).padStart(2,"0")}`,S=d.phase==="combat",k=d.phase!=="prep";y.innerHTML=S?`${b("shield")}${d.paused?'<span class="action-timer">Paused</span>':""}`:`${b("play")}${r!==null?`<span class="action-timer">${r}</span>`:""}`,y.setAttribute("aria-label",S?d.paused?"Wave in progress, game paused":"Wave in progress":A),h("start-wave-tip").textContent=S?d.paused?"Wave in progress. The game is paused — use Pause to resume.":"Wave in progress. Your towers are firing.":`${A}. ${d.phase==="prep"?d.paused?"Countdown paused. Send now resumes the game.":"Send immediately, or wait for the countdown.":""}`,y.disabled=k,y.classList.toggle("is-idle",k),y.classList.toggle("is-paused",S&&d.paused),document.querySelectorAll("[data-pad]").forEach(M=>{const I=Number(M.dataset.pad),Z=d.towers.find(Ze=>Ze.padId===I);M.classList.toggle("selected",I===j),M.classList.toggle("occupied",!!Z),M.setAttribute("aria-label",`Pad ${I+1}, ${Z?`${L[Z.kind].name}, tier ${Z.tier}`:"empty, build a tower"}`)}),document.querySelectorAll("[data-rally]").forEach(M=>{const I=Number(M.dataset.rally)===d.ally.rallyId;M.classList.toggle("active",I),M.setAttribute("aria-pressed",String(I)),M.setAttribute("aria-label",I?`${X[d.ally.kind].name} squad is at rally ${d.ally.rallyId+1}`:`Move ${X[d.ally.kind].name} squad to rally ${Number(M.dataset.rally)+1}`),M.querySelector("span").textContent=`${I?"Squad":"Move"} ${Number(M.dataset.rally)+1}`});const $=`${t}-${d.seed}`;if(xt!==$||e){xt=$;const M=Ac(t,d.seed);h("intel-panel").innerHTML=`<div class="panel-kicker">${b("skull")} ${M.boss?"BOSS INBOUND":"INCOMING TRANSMISSION"}</div><h3>${Ce(M.title)}</h3><p>${Ce(M.description)}</p><div class="enemy-preview">${M.kinds.slice(0,3).map(I=>`<span class="enemy-tag" style="--enemy-color:${Y[I].color}"><i></i>${Y[I].name}</span>`).join("")}</div>`,h("wave-intel").innerHTML=`<span class="wave-intel-title ${M.boss?"is-boss":""}">${M.boss?`${b("clock")} INCOMING BOSS`:`INCOMING · ${Ce(M.title)}`}</span>`+M.kinds.slice(0,3).map(I=>`<span class="enemy-tag" style="--enemy-color:${Y[I].color}"><i></i>${Y[I].name}</span>`).join(""),d.phase!=="combat"&&(h("threat-value").textContent=M.title)}if(h("threat-label").textContent=d.phase==="combat"?"In the field":"Next threat",d.phase==="combat"){const M=d.pending.length-d.spawnIndex;h("threat-value").textContent=`${d.enemies.length} on field${M>0?` · ${M} incoming`:""} · ${he(d.kills)} defeated`}const C=`${d.ally.kind}-${d.phase}-${d.ally.rallyId}`;fa!==C&&(fa=C,h("squad-panel").innerHTML=`<div class="squad"><div class="squad-icon">${b(d.ally.kind)}</div><div><h3>${X[d.ally.kind].name} squad</h3><p>At Squad ${d.ally.rallyId+1} · fights automatically</p></div></div><button class="small-button" id="change-squad" ${d.phase==="combat"||d.phase==="defeat"?"disabled":""}>${b("flag")} Change squad</button><p class="squad-guidance">Tap a blue Move flag to reposition this squad. Reactor Pulse strikes around it.</p>`,h("change-squad").onclick=cd),od();const N=h("canvas-overlay"),U=d.phase==="defeat"?"defeat":d.paused&&!O.open?"pause":"";if(N.dataset.mode!==U)if(N.dataset.mode=U,document.getElementById("battlefield")?.setAttribute("data-planning",U==="pause"?"true":"false"),N.hidden=!U,U==="pause"){const M=d.enemies.filter(me=>me.hp>0),I=M.reduce((me,Fa)=>!me||Fa.distance>me.distance?Fa:me,void 0),Z=I?Math.min(100,Math.round(I.distance/Me*100)):0,Ze=M.find(me=>me.kind==="behemoth"||me.kind==="matriarch"),Zi=d.phase==="combat"?`<div class="overlay-threat">
             <div class="overlay-threat-row"><span>Hostiles on the field</span><strong>${M.length}</strong></div>
             <div class="overlay-threat-row"><span>Closest hostile to reactor</span><strong>${Z}% travelled · ${100-Z}% to go</strong></div>
             <div class="overlay-threat-bar" role="meter" aria-label="Closest hostile progress along the route" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Z}"><i style="width:${Z}%"></i></div>
             <div class="overlay-threat-row"><span>Reactor integrity</span><strong class="${d.integrity<=30?"is-critical":""}">${Math.ceil(d.integrity)} / 100</strong></div>
             ${Ze?`<div class="overlay-threat-boss">${b("skull")} ACTIVE HEAVY: ${Y[Ze.kind].name}</div>`:""}
           </div>`:'<div class="overlay-threat"><div class="overlay-threat-row"><span>No hostiles on the field</span></div></div>';N.innerHTML=`<div class="overlay-card">${b("pause")}<h2>The line can wait.</h2><p>Your defense is suspended.</p>${Zi}<button class="primary" id="resume-overlay">${b("play")} Resume defense</button></div>`,h("resume-overlay").onclick=()=>F({type:"pause"},!0)}else U==="defeat"&&(N.innerHTML=`<div class="overlay-card">${b("radiation")}<h2>The last light falls.</h2><p>You reached wave ${d.wave} and defeated ${he(d.kills)} mutants.</p><button id="result-overlay">${b("trophy")} Save score</button><button class="primary" id="restart-overlay">${b("restart")} Make another stand</button></div>`,h("result-overlay").onclick=ua,h("restart-overlay").onclick=()=>Rt(_e()));if(mt&&d.phase==="defeat"&&!bt&&!O.open&&(bt=!0,st(`Reactor lost on wave ${d.wave}. ${he(d.kills)} mutants defeated.`),ua()),mt&&d.phase==="reward"&&Et!=="reward"&&ld(),Ht!==d.phase){const M=Ht;Ht=d.phase,mt&&M!==""&&(d.phase==="combat"?st(`Wave ${d.wave} incoming. ${d.enemies.length+d.pending.length-d.spawnIndex} hostiles.`):d.phase==="reward"&&M==="combat"?st(`Wave ${d.wave} cleared. Choose a reinforcement.`):d.phase==="prep"&&M==="combat"&&st(`Wave ${d.wave} cleared.`))}}function ua(){bt=!0;const e=Yi,t=structuredClone(d),a=e.receipt,n=d.arcade?.eligible;be("The last light falls.",`<div class="result-stats"><div><strong>${Intl.NumberFormat("en").format(d.score)}</strong><span>Final score</span></div><div><strong>${d.wave}</strong><span>Wave reached</span></div><div><strong>${he(d.kills)}</strong><span>Mutants stopped</span></div></div><p class="hint">Earn points from mutant bounties and every completed wave.</p>${n?`<form id="score-form"><label class="field-label" for="player-name">Your name on the arcade board</label><input type="text" id="player-name" name="name" autocomplete="nickname" maxlength="24" required value="${Ce(e.pendingName??ad())}" ${e.pendingName||a?"readonly":""} aria-describedby="score-message"><p id="score-message" role="status" aria-live="polite">${a?`Score saved to ShoeMoney Arcade. Rank ${a.rank}.`:"Save your final score to the shared high-score board."}</p><button class="primary" type="submit" id="submit-score" ${a?"disabled":""}>${b("trophy")} ${a?"Score saved":e.pendingName?"Retry saving score":"Save high score"}</button></form>`:"<p>Imported runs are practice runs. Start a new defense to compete on the arcade board.</p>"}<div class="actions"><button id="result-board">${b("trophy")} High scores</button><button id="result-new">${b("restart")} Play again</button></div>`,"result"),h("result-board").onclick=Ki,h("result-new").onclick=()=>Rt(_e());const i=document.getElementById("score-form");i&&(i.onsubmit=async r=>{r.preventDefault();const s=i.querySelector("#submit-score"),o=i.querySelector("#player-name"),c=i.querySelector("#score-message");s.disabled=!0,o.readOnly=!0,c.textContent="Saving to ShoeMoney Arcade…";try{const l=await e.submit(t,o.value);c.textContent=`Score saved to ShoeMoney Arcade. Rank ${l.rank}.`,s.textContent="Score saved"}catch(l){c.textContent=l instanceof Error?l.message:"Could not save your score. Please retry.",o.readOnly=!!e.pendingName,s.disabled=!1,s.textContent="Retry saving score"}})}function Ki(){be("Reactorfall high scores",'<p>Top ten defenders on ShoeMoney Arcade.</p><div id="leaderboard-content" aria-live="polite"><p>Loading scores…</p></div><p class="hint">Scores are reported by each player’s browser.</p><div class="actions">'+(d.phase==="defeat"?'<button id="back-result">Your result</button>':"")+'<button id="refresh-board">'+b("restart")+" Refresh scores</button></div>","leaderboard");const e=h("leaderboard-content"),t=h("refresh-board");async function a(){t.disabled=!0;try{const n=await td();e.innerHTML=n.length?`<ol class="leaderboard">${n.map((i,r)=>`<li><span class="board-rank">${r+1}</span><span class="board-name">${Ce(i.name)}</span><strong>${Intl.NumberFormat("en").format(i.score)}</strong></li>`).join("")}</ol>`:"<p>No scores yet. Make your first stand.</p>"}catch(n){e.textContent=n instanceof Error?n.message:"Scores unavailable. Please retry."}finally{t.disabled=!1}}t.onclick=a,document.getElementById("back-result")?.addEventListener("click",ua),a()}function ld(){const e={damage:"fire",range:"rail",fireRate:"stopwatch",bounty:"scrap",slow:"cryo",pulse:"arc",integrity:"shield",scrap:"boxes"};be("Reinforcements have arrived.",`<p>Wave ${d.wave} held. Choose one upgrade for the rest of this run.</p><div class="reward-cards">${d.cards.map(t=>{const a=$a.find(n=>n.id===t);return`<button class="reward-card" data-card="${t}">${b(e[t]||"boxes")}<div><strong>${a.name}</strong><span>${a.description}</span></div></button>`}).join("")}</div>`,"reward",!1),O.querySelectorAll("[data-card]").forEach(t=>{t.onclick=()=>{const a=ce(d,{type:"card",id:t.dataset.card});a.ok&&(V?.showEvents(a.events),O.close(),D(!0),ie(),B(a.message||"Reinforcement applied."))}})}function cd(){be("Choose your squad",'<p>Switch squads between waves. Use a blue Move control to reposition your squad. It attacks automatically, and Reactor Pulse strikes around it.</p><div class="squad-choices">'+Object.keys(X).map(e=>`<button class="squad-choice ${d.ally.kind===e?"active":""}" data-ally="${e}"><strong>${b(e)} ${X[e].name}</strong><span>${X[e].description}</span></button>`).join("")+"</div>","squads"),O.querySelectorAll("[data-ally]").forEach(e=>{e.onclick=()=>{F({type:"ally",kind:e.dataset.ally})&&O.close()}})}function dd(){be("Keep the last reactor alive.",`<p>Mutants follow the road. Your defenses are all that stand between them and the last light.</p><ol class="help-steps"><li><strong>Build.</strong> Select a numbered pad, then a tower. Start with Machine Guns near the entrance. Later waves begin automatically after a five-second breather. Pause to plan.</li><li><strong>Counter the horde.</strong> Cannons hit groups. Cryo slows them. Railguns crack armor. Arc chains between enemies. Missiles cover the skies.</li><li><strong>Upgrade.</strong> Select a tower to choose a permanent specialization, change targets, or sell for 70% of its total cost.</li><li><strong>Command.</strong> Blue Move flags reposition your allied squad. The Squad flag shows its current location. Allies attack automatically; Reactor Pulse strikes enemies near your squad. Reposition the squad before firing. Repair restores integrity; the crew must recharge before another repair.</li><li><strong>Push further.</strong> Choose a reinforcement every five waves. Prepare for a boss every ten. Survive as long as you can.</li></ol><p class="hint">Keyboard controls. <kbd class="help-key">Space</kbd> starts or pauses. <kbd class="help-key">1–6</kbd> selects a tower. <kbd class="help-key">P</kbd> pauses. Sound and reduced motion are in Settings.</p><div class="actions"><button class="primary" id="help-done">${b("check")} Ready to defend</button></div>`,"help"),h("help-done").onclick=()=>O.close()}function ma(){V?.setAudio(W.sound),V?.setReducedMotion(W.reducedMotion);try{localStorage.setItem("reactorfall.settings",JSON.stringify(W))}catch{}D()}function fd(){be("Settings & saved run",`<label class="toggle-row" for="setting-sound"><span>${b("sound")} Sound & ambience</span><input type="checkbox" id="setting-sound" ${W.sound?"checked":""}></label><label class="toggle-row" for="setting-motion"><span>Reduced motion</span><input type="checkbox" id="setting-motion" ${W.reducedMotion?"checked":""}></label><h3>Keep your progress</h3><p>Your run saves on this browser. Export a copy to move it to another device.</p><p class="hint">Seed ${Ce(d.seed)} · Wave ${d.wave}. Finished scores can be saved to the arcade. Imported runs are practice runs.</p><div class="actions"><button id="export-run">${b("download")} Export run</button><button id="import-run">${b("upload")} Import run</button></div>`,"settings"),h("setting-sound").onchange=e=>{W.sound=e.target.checked,ma()},h("setting-motion").onchange=e=>{W.reducedMotion=e.target.checked,Gi=!0,ma()},h("export-run").onclick=()=>{try{const e=URL.createObjectURL(new Blob([Kc(d)],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download=`reactorfall-${d.seed.replace(/[^a-z0-9-]/gi,"")}-wave-${d.wave}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),B("Your run has been exported.")}catch{B("This run could not be exported. Try reloading your saved run.",!0)}},h("import-run").onclick=()=>h("import-file").click()}async function Rt(e){O.open&&(De=!1,O.close()),d=ji(e.trim().slice(0,64)||_e()),Oa(),j=null,_=null,wt="",xt="",fa="",V?.setSelection(null),await $t.clear().catch(()=>{}),It=!1,qe=0,D(!0),ie()}h("pause").onclick=()=>F({type:"pause"},!0);h("speed").onclick=()=>F({type:"speed"},!0);h("sound").onclick=()=>{W.sound=!W.sound,ma()};h("help").onclick=dd;h("high-scores").onclick=Ki;h("settings").onclick=fd;h("ability").onclick=()=>F({type:"ability"});const Fe=document.querySelector(".battle-actions");Fe.addEventListener("keydown",e=>{e.key==="Escape"&&Fe.classList.add("tooltips-dismissed")});Fe.addEventListener("pointerleave",()=>Fe.classList.remove("tooltips-dismissed"));Fe.addEventListener("focusin",()=>Fe.classList.remove("tooltips-dismissed"));h("repair").onclick=()=>F({type:"repair"});h("start-wave").onclick=()=>{d.paused&&ce(d,{type:"pause"}),F({type:"start"},!0)};h("new-run").onclick=()=>{be("Start a new defense?",'<p>This replaces the run saved on this device. You can export your current run in Settings first.</p><label class="field-label" for="new-seed">Run seed</label><input type="text" id="new-seed" maxlength="64" value="'+_e()+'"><p class="hint">The same seed gives the same waves and reinforcement choices.</p><div class="actions"><button id="cancel-new">Keep this run</button><button class="primary" id="confirm-new">'+b("restart")+" Start new run</button></div>","new"),h("cancel-new").onclick=()=>O.close(),h("confirm-new").onclick=()=>Rt(h("new-seed").value)};h("fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>B("Fullscreen is not available in this browser."))};h("import-file").onchange=async e=>{const t=e.target,a=t.files?.[0];if(a){try{if(a.size>2e6)throw new Error("Save file is too large.");const n=Jc(await a.text());O.open&&(De=!1,O.close()),await $t.clear(),It=!1,d=n,d.arcade={id:crypto.randomUUID(),eligible:!1},d.revision++,Oa(!1),!d.paused&&(d.phase==="combat"||d.phase==="prep"&&d.nextWaveCountdown!==null)&&ce(d,{type:"pause"}),j=null,_=null,wt="",xt="",qe=d.time,V?.setSelection(null),D(!0),await ie(),B(`Save loaded · wave ${String(d.wave).padStart(2,"0")} · ${d.towers.length} towers${d.paused?" · paused":""}`,!1)}catch(n){B(n instanceof Error?n.message:"This is not a valid Reactorfall save.",!0)}t.value=""}};document.addEventListener("keydown",e=>{if(O.open)return;const t=e.target,a=t instanceof HTMLElement?t.tagName:"";a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||a==="BUTTON"&&(e.code==="Space"||e.key==="Enter")||(e.code==="Space"&&(e.preventDefault(),d.paused?F({type:"pause"},!0):d.phase==="prep"?F({type:"start"},!0):d.phase==="combat"&&F({type:"pause"},!0)),e.key.toLowerCase()==="p"&&F({type:"pause"},!0),/^[1-6]$/.test(e.key)&&(_=Object.keys(L)[Number(e.key)-1],j=null,V?.setSelection(null),D(!0)),e.key==="Escape"&&(j=null,_=null,V?.setSelection(null),D(!0)))});document.addEventListener("visibilitychange",()=>{document.hidden&&(!d.paused&&(d.phase==="combat"||d.phase==="prep"&&d.nextWaveCountdown!==null)&&ce(d,{type:"pause"}),ie(),D())});window.addEventListener("pagehide",()=>{ie()});window.addEventListener("reactorfall:context-lost",()=>{!d.paused&&(d.phase==="combat"||d.phase==="prep"&&d.nextWaveCountdown!==null)&&ce(d,{type:"pause"}),ie(),D(),B("Graphics were interrupted. Your defense is paused.",!0)});window.addEventListener("reactorfall:context-restored",()=>{D(!0),B("Graphics restored. Resume when you are ready.")});h("pad-layer").innerHTML=P.map(e=>`<button class="pad-button" data-pad="${e.id}" aria-label="Pad ${e.id+1}, empty, build a tower" style="left:${e.x/10}%;top:${e.y/8}%"><span>${String(e.id+1).padStart(2,"0")}</span></button>`).join("")+ae.map(e=>`<button class="rally-button" data-rally="${e.id}" data-marker="${e.id+1}" aria-label="Rally squad at point ${e.id+1}" style="left:${e.x/10}%;top:${e.y/8}%">${b("flag")}<span>${e.id===d.ally.rallyId?"Squad":"Move"} ${e.id+1}</span></button>`).join("");h("pad-layer").insertAdjacentHTML("beforeend",ae.map(e=>`<span class="rally-number" aria-hidden="true" style="left:${e.x/10}%;top:${e.y/8}%">${e.id+1}</span>`).join(""));const Ji=matchMedia("(max-width:560px)");function Qi(){const e=h(Ji.matches?"rally-controls":"pad-layer");document.querySelectorAll("[data-rally]").forEach(t=>e.append(t)),D(!0)}Ji.addEventListener("change",Qi);Qi();document.querySelectorAll("[data-pad]").forEach(e=>{e.onclick=()=>Vi(Number(e.dataset.pad))});document.querySelectorAll("[data-rally]").forEach(e=>{e.onclick=()=>{F({type:"rally",rallyId:Number(e.dataset.rally)},!0)&&B(`${X[d.ally.kind].name} squad moved. It attacks nearby enemies; Pulse strikes here.`)}});async function ud(){try{const e=await $t.load();e.state&&(d=e.state,qe=d.time,!d.paused&&(d.phase==="combat"||d.phase==="prep"&&d.nextWaveCountdown!==null)&&ce(d,{type:"pause"}),e.recovered&&B("Recovered your previous saved run."))}catch(e){ut=!1,It=!0,Bt=e instanceof Error?e.message:"Your saved run could not be read."}Oa(),D(!0),V=await Gc(h("game-canvas"),{getState:()=>d,onPad:Vi,onRally:e=>{F({type:"rally",rallyId:e},!0)&&B(`${X[d.ally.kind].name} squad moved. Pulse strikes here.`)},onTick:e=>{const t=d.phase,a=Lc(d,e);if(d.phase!==t){if(d.phase==="combat"&&(_=null),(d.phase==="prep"||d.phase==="reward")&&d.wave>Le){Le=d.wave;try{localStorage.setItem("reactorfall.bestWave",String(Le))}catch{}}ie(),D(!0)}else d.time-qe>=12&&(qe=d.time,ie());return a},onReady:()=>{h("loading").hidden=!0},onLoadProgress:Xi}),V.setAudio(W.sound),V.setReducedMotion(W.reducedMotion),await sd(),D(!0),setInterval(()=>{document.hidden||D()},150),ie(),Bt&&(be("Your saved run needs attention.",`<p>${Ce(Bt)}</p><p>The existing save has been kept. Import a backup, retry loading, or explicitly start a new run.</p><div class="actions"><button id="recovery-import">${b("upload")} Import backup</button><button id="recovery-retry">${b("restart")} Retry</button><button class="primary" id="recovery-new">Start a new run</button></div>`,"recovery"),h("recovery-import").onclick=()=>h("import-file").click(),h("recovery-retry").onclick=()=>location.reload(),h("recovery-new").onclick=()=>Rt(_e()))}ud().catch(e=>{console.error(e),h("startup-label").textContent="Unable to load the game",h("startup-percent").textContent="";const t=document.createElement("button");t.className="startup-retry",t.textContent="Reload",t.onclick=()=>location.reload(),h("startup-splash").querySelector(".startup-content").append(t),h("loading").innerHTML=`<div>${b("radiation")}The reactor could not start.<p>Reload this page to try again.</p></div>`});
