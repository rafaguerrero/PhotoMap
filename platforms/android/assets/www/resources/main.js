var requirejs,require,define;(function(ga){function ka(e,t,n,r){return r||""}function K(e){return"[object Function]"===Q.call(e)}function L(e){return"[object Array]"===Q.call(e)}function y(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function X(e,t){if(e){var n;for(n=e.length-1;-1<n&&(!e[n]||!t(e[n],n,e));--n);}}function x(e,t){return la.call(e,t)}function e(e,t){return x(e,t)&&e[t]}function D(e,t){for(var n in e)if(x(e,n)&&t(e[n],n))break}function Y(e,t,n,r){return t&&D(t,function(t,i){if(n||!x(e,i))!r||"object"!=typeof t||!t||L(t)||K(t)||t instanceof RegExp?e[i]=t:(e[i]||(e[i]={}),Y(e[i],t,n,r))}),e}function z(e,t){return function(){return t.apply(e,arguments)}}function ha(e){throw e}function ia(e){if(!e)return e;var t=ga;return y(e.split("."),function(e){t=t[e]}),t}function F(e,t,n,r){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=r,n&&(t.originalError=n),t}function ma(t){function n(t,n,r){var i,s,o,u,a,f,l,c;n=n&&n.split("/");var h=A.map,p=h&&h["*"];if(t){t=t.split("/"),s=t.length-1,A.nodeIdCompat&&U.test(t[s])&&(t[s]=t[s].replace(U,"")),"."===t[0].charAt(0)&&n&&(s=n.slice(0,n.length-1),t=s.concat(t)),s=t;for(o=0;o<s.length;o++)u=s[o],"."===u?(s.splice(o,1),--o):".."===u&&0!==o&&(1!==o||".."!==s[2])&&".."!==s[o-1]&&0<o&&(s.splice(o-1,2),o-=2);t=t.join("/")}if(r&&h&&(n||p)){s=t.split("/"),o=s.length;e:for(;0<o;--o){a=s.slice(0,o).join("/");if(n)for(u=n.length;0<u;--u)if(r=e(h,n.slice(0,u).join("/")))if(r=e(r,a)){i=r,f=o;break e}!l&&p&&e(p,a)&&(l=e(p,a),c=o)}!i&&l&&(i=l,f=c),i&&(s.splice(0,f,i),t=s.join("/"))}return(i=e(A.pkgs,t))?i:t}function r(e){E&&y(document.getElementsByTagName("script"),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===T.contextName)return t.parentNode.removeChild(t),!0})}function i(t){var n=e(A.paths,t);if(n&&L(n)&&1<n.length)return n.shift(),T.require.undef(t),T.makeRequire(null,{skipMap:!0})([t]),!0}function s(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function o(t,r,i,o){var u,a,f=null,l=r?r.name:null,c=t,h=!0,p="";return t||(h=!1,t="_@r"+(I+=1)),t=s(t),f=t[0],t=t[1],f&&(f=n(f,l,o),a=e(H,f)),t&&(f?p=a&&a.normalize?a.normalize(t,function(e){return n(e,l,o)}):-1===t.indexOf("!")?n(t,l,o):t:(p=n(t,l,o),t=s(p),f=t[0],p=t[1],i=!0,u=T.nameToUrl(p))),i=!f||a||i?"":"_unnormalized"+(q+=1),{prefix:f,name:p,parentMap:r,unnormalized:!!i,url:u,originalName:c,isDefine:h,id:(f?f+"!"+p:p)+i}}function u(t){var n=t.id,r=e(O,n);return r||(r=O[n]=new T.Module(t)),r}function a(t,n,r){var i=t.id,s=e(O,i);!x(H,i)||s&&!s.defineEmitComplete?(s=u(t),s.error&&"error"===n)?r(s.error):s.on(n,r):"defined"===n&&r(H[i])}function f(t,n){var r=t.requireModules,i=!1;n?n(t):(y(r,function(n){if(n=e(O,n))n.error=t,n.events.error&&(i=!0,n.emit("error",t))}),!i)&&g.onError(t)}function l(){V.length&&(y(V,function(e){var t=e[0];"string"==typeof t&&(T.defQueueMap[t]=!0),P.push(e)}),V=[])}function c(e){delete O[e],delete M[e]}function h(t,n,r){var i=t.map.id;t.error?t.emit("error",t.error):(n[i]=!0,y(t.depMaps,function(i,s){var o=i.id,u=e(O,o);!u||t.depMatched[s]||r[o]||(e(n,o)?(t.defineDep(s,H[o]),t.check()):h(u,n,r))}),r[i]=!0)}function p(){var e,t,n=(e=1e3*A.waitSeconds)&&T.startTime+e<(new Date).getTime(),s=[],o=[],u=!1,a=!0;if(!b){b=!0,D(M,function(e){var f=e.map,l=f.id;if(e.enabled&&(f.isDefine||o.push(e),!e.error))if(!e.inited&&n)i(l)?u=t=!0:(s.push(l),r(l));else if(!e.inited&&e.fetched&&f.isDefine&&(u=!0,!f.prefix))return a=!1});if(n&&s.length)return e=F("timeout","Load timeout for modules: "+s,null,s),e.contextName=T.contextName,f(e);a&&y(o,function(e){h(e,{},{})}),n&&!t||!u||!E&&!ja||k||(k=setTimeout(function(){k=0,p()},50)),b=!1}}function d(e){x(H,e[0])||u(o(e[0],null,!0)).init(e[1],e[2])}function v(e){e=e.currentTarget||e.srcElement;var t=T.onScriptLoad;return e.detachEvent&&!ca?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=T.onScriptError,e.detachEvent&&!ca||e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function m(){var e;for(l();P.length;){e=P.shift();if(null===e[0])return f(F("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));d(e)}T.defQueueMap={}}var b,w,T,C,k,A={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},O={},M={},_={},P=[],H={},B={},j={},I=1,q=1;return C={require:function(e){return e.require?e.require:e.require=T.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?H[e.map.id]=e.exports:e.exports=H[e.map.id]={}},module:function(t){return t.module?t.module:t.module={id:t.map.id,uri:t.map.url,config:function(){return e(A.config,t.map.id)||{}},exports:t.exports||(t.exports={})}}},w=function(t){this.events=e(_,t.id)||{},this.map=t,this.shim=e(A.shim,t.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},w.prototype={init:function(e,t,n,r){r=r||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=z(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,--this.depCount,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,T.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();T.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],z(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;B[e]||(B[e]=!0,T.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id;t=this.depExports;var r=this.exports,i=this.factory;if(!this.inited)x(T.defQueueMap,n)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(K(i)){if(this.events.error&&this.map.isDefine||g.onError!==ha)try{r=T.execCb(n,i,t,r)}catch(s){e=s}else r=T.execCb(n,i,t,r);this.map.isDefine&&void 0===r&&((t=this.module)?r=t.exports:this.usingExports&&(r=this.exports));if(e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",f(this.error=e)}else r=i;this.exports=r;if(this.map.isDefine&&!this.ignore&&(H[n]=r,g.onResourceLoad)){var o=[];y(this.depMaps,function(e){o.push(e.normalizedMap||e)}),g.onResourceLoad(T,this.map,o)}c(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var t=this.map,r=t.id,i=o(t.prefix);this.depMaps.push(i),a(i,"defined",z(this,function(i){var s,l,h=e(j,this.map.id),p=this.map.name,d=this.map.parentMap?this.map.parentMap.name:null,v=T.makeRequire(t.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(i.normalize&&(p=i.normalize(p,function(e){return n(e,d,!0)})||""),l=o(t.prefix+"!"+p,this.map.parentMap),a(l,"defined",z(this,function(e){this.map.normalizedMap=l,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),i=e(O,l.id))this.depMaps.push(l),this.events.error&&i.on("error",z(this,function(e){this.emit("error",e)})),i.enable()}else h?(this.map.url=T.nameToUrl(h),this.load()):(s=z(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),s.error=z(this,function(e){this.inited=!0,this.error=e,e.requireModules=[r],D(O,function(e){0===e.map.id.indexOf(r+"_unnormalized")&&c(e.map.id)}),f(e)}),s.fromText=z(this,function(e,n){var i=t.name,a=o(i),l=S;n&&(e=n),l&&(S=!1),u(a),x(A.config,r)&&(A.config[i]=A.config[r]);try{g.exec(e)}catch(c){return f(F("fromtexteval","fromText eval for "+r+" failed: "+c,c,[r]))}l&&(S=!0),this.depMaps.push(a),T.completeLoad(i),v([i],s)}),i.load(t.name,v,s,A))})),T.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){M[this.map.id]=this,this.enabling=this.enabled=!0,y(this.depMaps,z(this,function(t,n){var r,i;if("string"==typeof t){t=o(t,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[n]=t;if(r=e(C,t.id)){this.depExports[n]=r(this);return}this.depCount+=1,a(t,"defined",z(this,function(e){this.undefed||(this.defineDep(n,e),this.check())})),this.errback?a(t,"error",z(this,this.errback)):this.events.error&&a(t,"error",z(this,function(e){this.emit("error",e)}))}r=t.id,i=O[r],x(C,r)||!i||i.enabled||T.enable(t,this)})),D(this.pluginMaps,z(this,function(t){var n=e(O,t.id);n&&!n.enabled&&T.enable(t,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){y(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},T={config:A,contextName:t,registry:O,defined:H,urlFetched:B,defQueue:P,defQueueMap:{},Module:w,makeModuleMap:o,nextTick:g.nextTick,onError:f,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");if("string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,n){return(-1===n.indexOf("?")?"?":"&")+t}}var n=A.shim,r={paths:!0,bundles:!0,config:!0,map:!0};D(e,function(e,t){r[t]?(A[t]||(A[t]={}),Y(A[t],e,!0,!0)):A[t]=e}),e.bundles&&D(e.bundles,function(e,t){y(e,function(e){e!==t&&(j[e]=t)})}),e.shim&&(D(e.shim,function(e,t){L(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=T.makeShimExports(e)),n[t]=e}),A.shim=n),e.packages&&y(e.packages,function(e){var t;e="string"==typeof e?{name:e}:e,t=e.name,e.location&&(A.paths[t]=e.location),A.pkgs[t]=e.name+"/"+(e.main||"main").replace(na,"").replace(U,"")}),D(O,function(e,t){e.inited||e.map.unnormalized||(e.map=o(t,null,!0))}),(e.deps||e.callback)&&T.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(ga,arguments)),t||e.exports&&ia(e.exports)}},makeRequire:function(i,s){function a(e,n,r){var l,c;return s.enableBuildCallback&&n&&K(n)&&(n.__requireJsBuild=!0),"string"==typeof e?K(n)?f(F("requireargs","Invalid require call"),r):i&&x(C,e)?C[e](O[i.id]):g.get?g.get(T,e,i,a):(l=o(e,i,!1,!0),l=l.id,x(H,l)?H[l]:f(F("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+t+(i?"":". Use require([])")))):(m(),T.nextTick(function(){m(),c=u(o(null,i)),c.skipMap=s.skipMap,c.init(e,n,r,{enabled:!0}),p()}),a)}return s=s||{},Y(a,{isBrowser:E,toUrl:function(e){var t,r=e.lastIndexOf("."),s=e.split("/")[0];return-1!==r&&("."!==s&&".."!==s||1<r)&&(t=e.substring(r,e.length),e=e.substring(0,r)),T.nameToUrl(n(e,i&&i.id,!0),t,!0)},defined:function(e){return x(H,o(e,i,!1,!0).id)},specified:function(e){return e=o(e,i,!1,!0).id,x(H,e)||x(O,e)}}),i||(a.undef=function(t){l();var n=o(t,i,!0),s=e(O,t);s.undefed=!0,r(t),delete H[t],delete B[n.url],delete _[t],X(P,function(e,n){e[0]===t&&P.splice(n,1)}),delete T.defQueueMap[t],s&&(s.events.defined&&(_[t]=s.events),c(t))}),a},enable:function(t){e(O,t.id)&&u(t).enable()},completeLoad:function(t){var n,r,s=e(A.shim,t)||{},o=s.exports;for(l();P.length;){r=P.shift();if(null===r[0]){r[0]=t;if(n)break;n=!0}else r[0]===t&&(n=!0);d(r)}T.defQueueMap={},r=e(O,t);if(!n&&!x(H,t)&&r&&!r.inited){if(!(!A.enforceDefine||o&&ia(o)))return i(t)?void 0:f(F("nodefine","No define call for "+t,null,[t]));d([t,s.deps||[],s.exportsFn])}p()},nameToUrl:function(t,n,r){var i,s,o,u;(i=e(A.pkgs,t))&&(t=i);if(i=e(j,t))return T.nameToUrl(i,n,r);if(g.jsExtRegExp.test(t))i=t+(n||"");else{i=A.paths,s=t.split("/");for(o=s.length;0<o;--o)if(u=s.slice(0,o).join("/"),u=e(i,u)){L(u)&&(u=u[0]),s.splice(0,o,u);break}i=s.join("/"),i+=n||(/^data\:|^blob\:|\?/.test(i)||r?"":".js"),i=("/"===i.charAt(0)||i.match(/^[\w\+\.\-]+:/)?"":A.baseUrl)+i}return A.urlArgs&&!/^blob\:/.test(i)?i+A.urlArgs(t,i):i},load:function(e,t){g.load(T,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if("load"===e.type||oa.test((e.currentTarget||e.srcElement).readyState))N=null,e=v(e),T.completeLoad(e.id)},onScriptError:function(e){var t=v(e);if(!i(t.id)){var n=[];return D(O,function(e,r){0!==r.indexOf("_@r")&&y(e.depMaps,function(e){if(e.id===t.id)return n.push(r),!0})}),f(F("scripterror",'Script error for "'+t.id+(n.length?'", needed by: '+n.join(", "):'"'),e,[t.id]))}}},T.require=T.makeRequire(),T}function pa(){return N&&"interactive"===N.readyState?N:(X(document.getElementsByTagName("script"),function(e){if("interactive"===e.readyState)return N=e}),N)}var g,B,C,H,O,I,N,P,u,T,qa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ra=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,U=/\.js$/,na=/^\.\//;B=Object.prototype;var Q=B.toString,la=B.hasOwnProperty,E="undefined"!=typeof window&&"undefined"!=typeof navigator&&!!window.document,ja=!E&&"undefined"!=typeof importScripts,oa=E&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,ca="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),J={},w={},V=[],S=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(K(requirejs))return;w=requirejs,requirejs=void 0}"undefined"==typeof require||K(require)||(w=require,require=void 0),g=requirejs=function(t,n,r,i){var s,o="_";return L(t)||"string"==typeof t||(s=t,L(n)?(t=n,n=r,r=i):t=[]),s&&s.context&&(o=s.context),(i=e(J,o))||(i=J[o]=g.s.newContext(o)),s&&i.configure(s),i.require(t,n,r)},g.config=function(e){return g(e)},g.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=g),g.version="2.2.0",g.jsExtRegExp=/^\/|:|\?|\.js$/,g.isBrowser=E,B=g.s={contexts:J,newContext:ma},g({}),y(["toUrl","undef","defined","specified"],function(e){g[e]=function(){var t=J._;return t.require[e].apply(t,arguments)}}),E&&(C=B.head=document.getElementsByTagName("head")[0],H=document.getElementsByTagName("base")[0])&&(C=B.head=H.parentNode),g.onError=ha,g.createNode=function(e,t,n){return t=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),t.type=e.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t},g.load=function(e,t,n){var r=e&&e.config||{},i;if(E)return i=g.createNode(r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&0>i.attachEvent.toString().indexOf("[native code")||ca?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(S=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,r.onNodeCreated&&r.onNodeCreated(i,r,t,n),P=i,H?C.insertBefore(i,H):C.appendChild(i),P=null,i;if(ja)try{setTimeout(function(){},0),importScripts(n),e.completeLoad(t)}catch(s){e.onError(F("importscripts","importScripts failed for "+t+" at "+n,s,[t]))}},E&&!w.skipDataMain&&X(document.getElementsByTagName("script"),function(e){C||(C=e.parentNode);if(O=e.getAttribute("data-main"))return u=O,w.baseUrl||-1!==u.indexOf("!")||(I=u.split("/"),u=I.pop(),T=I.length?I.join("/")+"/":"./",w.baseUrl=T),u=u.replace(U,""),g.jsExtRegExp.test(u)&&(u=O),w.deps=w.deps?w.deps.concat(u):[u],!0}),define=function(e,t,n){var r,i;"string"!=typeof e&&(n=t,t=e,e=null),L(t)||(n=t,t=null),!t&&K(n)&&(t=[],n.length&&(n.toString().replace(qa,ka).replace(ra,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),S&&(r=P||pa())&&(e||(e=r.getAttribute("data-requiremodule")),i=J[r.getAttribute("data-requirecontext")]),i?(i.defQueue.push([e,t,n]),i.defQueueMap[e]=!0):V.push([e,t,n])},define.amd={jQuery:!0},g.exec=function(b){return eval(b)},g(w)}})(this),define("requirejs",function(){}),define("Camera",[],function(){function t(){this.element.addEventListener("click",this.openCamera)}var e=function(e){this.element=e,t.call(this)};return e.prototype={element:null,openCamera:function(){alert("Tap Camera")}},e}),define("NewFolder",[],function(){function t(){this.element.addEventListener("click",this.newFolder)}var e=function(e){this.element=e,t.call(this)};return e.prototype={element:null,newFolder:function(){alert("Tap NewFolder")}},e}),require(["Camera","NewFolder"],function(e,t){var n={initialize:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){document.body.classList.remove("loading"),new e(document.querySelector("#openCamera")),new t(document.querySelector("#newFolder"))}};n.initialize()}),define("main",function(){});