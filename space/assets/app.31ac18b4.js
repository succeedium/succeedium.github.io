import{K as ue,j as W,x as ce,O as pe,s as Z,Z as fe,$ as ge,a0 as ve,a1 as he,a2 as ze,a3 as ye,a4 as be,a5 as Ee,a6 as we,a7 as Le,a8 as Ce,d as He,u as Oe,y as Ae,a9 as Se,aa as Te,ab as xe,ac as Pe}from"./chunks/framework.b0cf3bc9.js";import{t as Ie}from"./chunks/theme.ea952a61.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(n[d]=i[d])}return n},x=function(t){return t.tagName==="IMG"},Ne=function(t){return NodeList.prototype.isPrototypeOf(t)},P=function(t){return t&&t.nodeType===1},U=function(t){var i=t.currentSrc||t.src;return i.substr(-4).toLowerCase()===".svg"},Y=function(t){try{return Array.isArray(t)?t.filter(x):Ne(t)?[].slice.call(t).filter(x):P(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},je=function(t){var i=document.createElement("div");return i.classList.add("medium-zoom-overlay"),i.style.background=t,i},Re=function(t){var i=t.getBoundingClientRect(),d=i.top,f=i.left,I=i.width,N=i.height,h=t.cloneNode(),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=d+j+"px",h.style.left=f+O+"px",h.style.width=I+"px",h.style.height=N+"px",h.style.transform="",h},L=function(t,i){var d=b({bubbles:!1,cancelable:!1,detail:void 0},i);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var f=document.createEvent("CustomEvent");return f.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),f},_e=function n(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(o){function a(){}o(a,a)},f=function(o){var a=o.target;if(a===S){z();return}g.indexOf(a)!==-1&&F({target:a})},I=function(){if(!(E||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-o)>m.scrollOffset&&setTimeout(z,150)}},N=function(o){var a=o.key||o.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o;if(o.background&&(S.style.background=o.background),o.container&&o.container instanceof Object&&(a.container=b({},m.container,o.container)),o.template){var s=P(o.template)?o.template:document.querySelector(o.template);a.template=s}return m=b({},m,a),g.forEach(function(l){l.dispatchEvent(L("medium-zoom:update",{detail:{zoom:u}}))}),u},j=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(b({},m,o))},O=function(){for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];var l=a.reduce(function(r,p){return[].concat(r,Y(p))},[]);return l.filter(function(r){return g.indexOf(r)===-1}).forEach(function(r){g.push(r),r.classList.add("medium-zoom-image")}),A.forEach(function(r){var p=r.type,v=r.listener,w=r.options;l.forEach(function(y){y.addEventListener(p,v,w)})}),u},K=function(){for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];e.zoomed&&z();var l=a.length>0?a.reduce(function(r,p){return[].concat(r,Y(p))},[]):g;return l.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:u}}))}),g=g.filter(function(r){return l.indexOf(r)===-1}),u},V=function(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+o,a,s)}),A.push({type:"medium-zoom:"+o,listener:a,options:s}),u},X=function(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+o,a,s)}),A=A.filter(function(l){return!(l.type==="medium-zoom:"+o&&l.listener.toString()===a.toString())}),u},D=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target,s=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,v=void 0;if(m.container)if(m.container instanceof Object)r=b({},r,m.container),p=r.width-r.left-r.right-m.margin*2,v=r.height-r.top-r.bottom-m.margin*2;else{var w=P(m.container)?m.container:document.querySelector(m.container),y=w.getBoundingClientRect(),R=y.width,ee=y.height,te=y.left,oe=y.top;r=b({},r,{width:R,height:ee,left:te,top:oe})}p=p||r.width-m.margin*2,v=v||r.height-m.margin*2;var H=e.zoomedHd||e.original,ne=U(H)?p:H.naturalWidth||p,ae=U(H)?v:H.naturalHeight||v,T=H.getBoundingClientRect(),re=T.top,ie=T.left,_=T.width,k=T.height,de=Math.min(Math.max(_,ne),p)/_,me=Math.min(Math.max(k,ae),v)/k,M=Math.min(de,me),se=(-ie+(p-_)/2+m.margin+r.left)/M,le=(-re+(v-k)/2+m.margin+r.top)/M,B="scale("+M+") translate3d("+se+"px, "+le+"px, 0)";e.zoomed.style.transform=B,e.zoomedHd&&(e.zoomedHd.style.transform=B)};return new d(function(l){if(a&&g.indexOf(a)===-1){l(u);return}var r=function R(){E=!1,e.zoomed.removeEventListener("transitionend",R),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:u}})),l(u)};if(e.zoomed){l(u);return}if(a)e.original=a;else if(g.length>0){var p=g;e.original=p[0]}else{l(u);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:u}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=Re(e.original),document.body.appendChild(S),m.template){var v=P(m.template)?m.template:document.querySelector(m.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,s()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s()})}else s()})},z=function(){return new d(function(o){if(E||!e.original){o(u);return}var a=function s(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",s),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(u)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",a)})},F=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target;return e.original?z():D({target:a})},G=function(){return m},J=function(){return g},Q=function(){return e.original},g=[],A=[],E=!1,q=0,m=i,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?m=t:(t||typeof t=="string")&&O(t),m=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},m);var S=je(m.background);document.addEventListener("click",f),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",z);var u={open:D,close:z,toggle:F,update:h,clone:j,attach:O,detach:K,on:V,off:X,getOptions:G,getImages:J,getZoomedImage:Q};return u};function ke(n,t){t===void 0&&(t={});var i=t.insertAt;if(!(!n||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",i==="top"&&d.firstChild?d.insertBefore(f,d.firstChild):d.appendChild(f),f.styleSheet?f.styleSheet.cssText=n:f.appendChild(document.createTextNode(n))}}var Me=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ke(Me);const Ze=_e;const De={...Ie,setup(){const n=ue(),t=()=>{new Ze("[data-zoomable]",{background:"var(--vp-c-bg)"})};W(()=>{t()}),ce(()=>n.path,()=>pe(()=>t()))}};function $(n){if(n.extends){const t=$(n.extends);return{...t,...n,async enhanceApp(i){t.enhanceApp&&await t.enhanceApp(i),n.enhanceApp&&await n.enhanceApp(i)}}}return n}const C=$(De),Fe=He({name:"VitePressApp",setup(){const{site:n}=Oe();return W(()=>{Ae(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),Se(),Te(),xe(),C.setup&&C.setup(),()=>Pe(C.Layout)}});async function qe(){const n=Ue(),t=Be();t.provide(ge,n);const i=ve(n.route);return t.provide(he,i),t.component("Content",ze),t.component("ClientOnly",ye),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return i.frontmatter.value}},$params:{get(){return i.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:n,siteData:be}),{app:t,router:n,data:i}}function Be(){return Ee(Fe)}function Ue(){let n=Z,t;return we(i=>{let d=Le(i);return d?(n&&(t=d),(n||t===d)&&(d=d.replace(/\.js$/,".lean.js")),Z&&(n=!1),Ce(()=>import(d),[])):null},C.NotFound)}Z&&qe().then(({app:n,router:t,data:i})=>{t.go().then(()=>{fe(t.route,i.site),n.mount("#app")})});export{qe as createApp};
