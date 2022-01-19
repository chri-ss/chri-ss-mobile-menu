(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(442),t.b),d=i()(o()),p=c()(l);d.push([n.id,"body {\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  background-image: url("+p+");\n  box-sizing: border-box;\n}\n\n.nav {\n  display: flex;\n  background-color: slategrey;\n  color: white;\n  height: 100vh;\n  width: 10%;\n  flex-direction: column;\n  align-items: space-evenly;\n  opacity: 0.6;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 0;\n}\n\n.inner-link {\n  height: 50%;\n  width: 80%;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: none;\n  transition: background-color 0.5s ease-in;\n}\n\n.inner-link:hover {\n  border: 1px solid rgb(48, 21, 65);\n}\n\n.selected {\n  background-color: rgb(8, 121, 233);\n  opacity: 1;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nimg {\n  opacity: 0;\n  transform: scale(2);\n}\n\n.title {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 16px;\n  height: 10vh;\n  display: flex;\n  align-items: center;\n}\n\n.title img {\n  transform: scale(1.1);\n  width: 100%;\n  opacity: 1;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 60%;\n}\n\n.title-text {\n  display: flex;\n}\n\n.thick {\n  width: 15%;\n}\n\n.wide {\n  width: 100%;\n}\n\n.hidden {\n  opacity: 0;\n  width: 0;\n}",""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},850:(n,e,t)=>{n.exports=t.p+"cffb932643b7cd605b62.svg"},70:(n,e,t)=>{n.exports=t.p+"13fecb14059bbf8ddbaf.svg"},301:(n,e,t)=>{n.exports=t.p+"1a5f5e58f14653f49900.svg"},156:(n,e,t)=>{n.exports=t.p+"9dbc5a3a96ad85a57422.svg"},442:(n,e,t)=>{n.exports=t.p+"4a1476f5e43ba12ddeac.jpeg"},108:(n,e,t)=>{n.exports=t.p+"c1557dbc95ed9688186b.svg"},265:(n,e,t)=>{n.exports=t.p+"b2f031552fe9e6261f63.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(917),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var b=t(850),v=t(70),y=t(301),x=t(108),w=t(265),k=t(156);(()=>{const n=document.querySelector("body"),e=document.createElement("div"),t=document.createElement("div");t.textContent="A nice menu",t.classList.add("title-text","hidden");const r=new Image;r.src=k;const o=document.createElement("a");o.appendChild(r),o.href="#",r.classList.add("menu-link"),e.appendChild(o),e.appendChild(t),e.classList.add("title");const a=document.createElement("ul");a.appendChild(e),a.classList.add("nav");const i=document.createElement("ul");i.classList.add("wrapper"),a.appendChild(i),[b,v,y,x,w].forEach((n=>{const e=document.createElement("li");e.classList.add("tab");const t=document.createElement("a");t.classList.add("inner-link"),t.href="#";const r=new Image;r.src=n,t.appendChild(r),e.appendChild(t),i.appendChild(e)})),a.addEventListener("click",(n=>{"inner-link"===n.target.className&&n.target.classList.toggle("selected")})),a.addEventListener("click",(n=>{if("menu-link"===n.target.classList[0]){const n=Array.from(document.querySelectorAll(".tab")),e=Array.from(document.querySelectorAll(".tab > *"));n.forEach((n=>{n.classList.toggle("wide")})),e.forEach((n=>{n.classList.toggle("wide")})),console.log(e),a.classList.toggle("thick"),t.classList.toggle("hidden")}})),n.appendChild(a)})()})()})();