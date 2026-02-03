(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var eh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function CS(){if(Dg)return Go;Dg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var wg;function DS(){return wg||(wg=1,eh.exports=CS()),eh.exports}var rs=DS(),nh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function wS(){if(Ug)return oe;Ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,nt,_t){this.props=U,this.context=nt,this.refs=y,this.updater=_t||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function N(U,nt,_t){this.props=U,this.context=nt,this.refs=y,this.updater=_t||A}var O=N.prototype=new P;O.constructor=N,C(O,x.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function R(U,nt,_t){var bt=_t.ref;return{$$typeof:o,type:U,key:nt,ref:bt!==void 0?bt:null,props:_t}}function D(U,nt){return R(U.type,nt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function st(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return nt[_t]})}var at=/\/+/g;function dt(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?st(""+U.key):nt.toString(36)}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,nt,_t,bt,It){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var ct=!1;if(U===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(U.$$typeof){case o:case t:ct=!0;break;case v:return ct=U._init,L(ct(U._payload),nt,_t,bt,It)}}if(ct)return It=It(U),ct=bt===""?"."+dt(U,0):bt,I(It)?(_t="",ct!=null&&(_t=ct.replace(at,"$&/")+"/"),L(It,nt,_t,"",function(Bt){return Bt})):It!=null&&(X(It)&&(It=D(It,_t+(It.key==null||U&&U.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+ct)),nt.push(It)),1;ct=0;var Dt=bt===""?".":bt+":";if(I(U))for(var Vt=0;Vt<U.length;Vt++)bt=U[Vt],et=Dt+dt(bt,Vt),ct+=L(bt,nt,_t,et,It);else if(Vt=E(U),typeof Vt=="function")for(U=Vt.call(U),Vt=0;!(bt=U.next()).done;)bt=bt.value,et=Dt+dt(bt,Vt++),ct+=L(bt,nt,_t,et,It);else if(et==="object"){if(typeof U.then=="function")return L(ut(U),nt,_t,bt,It);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(U,nt,_t){if(U==null)return U;var bt=[],It=0;return L(U,bt,"","",function(et){return nt.call(_t,et,It++)}),bt}function it(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var Mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:H,forEach:function(U,nt,_t){H(U,function(){nt.apply(this,arguments)},_t)},count:function(U){var nt=0;return H(U,function(){nt++}),nt},toArray:function(U){return H(U,function(nt){return nt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return oe.Activity=_,oe.Children=xt,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(U,nt,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var bt=C({},U.props),It=U.key;if(nt!=null)for(et in nt.key!==void 0&&(It=""+nt.key),nt)!Q.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(bt[et]=nt[et]);var et=arguments.length-2;if(et===1)bt.children=_t;else if(1<et){for(var ct=Array(et),Dt=0;Dt<et;Dt++)ct[Dt]=arguments[Dt+2];bt.children=ct}return R(U.type,It,bt)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,nt,_t){var bt,It={},et=null;if(nt!=null)for(bt in nt.key!==void 0&&(et=""+nt.key),nt)Q.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(It[bt]=nt[bt]);var ct=arguments.length-2;if(ct===1)It.children=_t;else if(1<ct){for(var Dt=Array(ct),Vt=0;Vt<ct;Vt++)Dt[Vt]=arguments[Vt+2];It.children=Dt}if(U&&U.defaultProps)for(bt in ct=U.defaultProps,ct)It[bt]===void 0&&(It[bt]=ct[bt]);return R(U,et,It)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=X,oe.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:it}},oe.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},oe.startTransition=function(U){var nt=z.T,_t={};z.T=_t;try{var bt=U(),It=z.S;It!==null&&It(_t,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(B,Mt)}catch(et){Mt(et)}finally{nt!==null&&_t.types!==null&&(nt.types=_t.types),z.T=nt}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(U){return z.H.use(U)},oe.useActionState=function(U,nt,_t){return z.H.useActionState(U,nt,_t)},oe.useCallback=function(U,nt){return z.H.useCallback(U,nt)},oe.useContext=function(U){return z.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,nt){return z.H.useDeferredValue(U,nt)},oe.useEffect=function(U,nt){return z.H.useEffect(U,nt)},oe.useEffectEvent=function(U){return z.H.useEffectEvent(U)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(U,nt,_t){return z.H.useImperativeHandle(U,nt,_t)},oe.useInsertionEffect=function(U,nt){return z.H.useInsertionEffect(U,nt)},oe.useLayoutEffect=function(U,nt){return z.H.useLayoutEffect(U,nt)},oe.useMemo=function(U,nt){return z.H.useMemo(U,nt)},oe.useOptimistic=function(U,nt){return z.H.useOptimistic(U,nt)},oe.useReducer=function(U,nt,_t){return z.H.useReducer(U,nt,_t)},oe.useRef=function(U){return z.H.useRef(U)},oe.useState=function(U){return z.H.useState(U)},oe.useSyncExternalStore=function(U,nt,_t){return z.H.useSyncExternalStore(U,nt,_t)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.4",oe}var Lg;function Od(){return Lg||(Lg=1,nh.exports=wS()),nh.exports}var Ii=Od(),ih={exports:{}},Vo={},ah={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function US(){return Ng||(Ng=1,(function(o){function t(L,H){var it=L.length;L.push(H);t:for(;0<it;){var Mt=it-1>>>1,xt=L[Mt];if(0<l(xt,H))L[Mt]=H,L[it]=xt,it=Mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var H=L[0],it=L.pop();if(it!==H){L[0]=it;t:for(var Mt=0,xt=L.length,U=xt>>>1;Mt<U;){var nt=2*(Mt+1)-1,_t=L[nt],bt=nt+1,It=L[bt];if(0>l(_t,it))bt<xt&&0>l(It,_t)?(L[Mt]=It,L[bt]=it,Mt=bt):(L[Mt]=_t,L[nt]=it,Mt=nt);else if(bt<xt&&0>l(It,it))L[Mt]=It,L[bt]=it,Mt=bt;else break t}}return H}function l(L,H){var it=L.sortIndex-H.sortIndex;return it!==0?it:L.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,E=!1,A=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(L){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=L)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function I(L){if(C=!1,O(L),!A)if(i(m)!==null)A=!0,B||(B=!0,st());else{var H=i(p);H!==null&&ut(I,H.startTime-L)}}var B=!1,z=-1,Q=5,R=-1;function D(){return y?!0:!(o.unstable_now()-R<Q)}function X(){if(y=!1,B){var L=o.unstable_now();R=L;var H=!0;try{t:{A=!1,C&&(C=!1,P(z),z=-1),E=!0;var it=S;try{e:{for(O(L),_=i(m);_!==null&&!(_.expirationTime>L&&D());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,S=_.priorityLevel;var xt=Mt(_.expirationTime<=L);if(L=o.unstable_now(),typeof xt=="function"){_.callback=xt,O(L),H=!0;break e}_===i(m)&&s(m),O(L)}else s(m);_=i(m)}if(_!==null)H=!0;else{var U=i(p);U!==null&&ut(I,U.startTime-L),H=!1}}break t}finally{_=null,S=it,E=!1}H=void 0}}finally{H?st():B=!1}}}var st;if(typeof N=="function")st=function(){N(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=X,st=function(){dt.postMessage(null)}}else st=function(){x(X,0)};function ut(L,H){z=x(function(){L(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var it=S;S=H;try{return L()}finally{S=it}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var it=S;S=L;try{return H()}finally{S=it}},o.unstable_scheduleCallback=function(L,H,it){var Mt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Mt+it:Mt):it=Mt,L){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,L={id:v++,callback:H,priorityLevel:L,startTime:it,expirationTime:xt,sortIndex:-1},it>Mt?(L.sortIndex=it,t(p,L),i(m)===null&&L===i(p)&&(C?(P(z),z=-1):C=!0,ut(I,it-Mt))):(L.sortIndex=xt,t(m,L),A||E||(A=!0,B||(B=!0,st()))),L},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(L){var H=S;return function(){var it=S;S=H;try{return L.apply(this,arguments)}finally{S=it}}}})(sh)),sh}var Og;function LS(){return Og||(Og=1,ah.exports=US()),ah.exports}var rh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function NS(){if(Pg)return On;Pg=1;var o=Od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},On.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.4",On}var zg;function OS(){if(zg)return rh.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rh.exports=NS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function PS(){if(Fg)return Vo;Fg=1;var o=LS(),t=Od(),i=OS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,r=f;break}if(T===r){g=!0,r=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=c;break}if(T===r){g=!0,r=f,a=c;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function U(e){return{current:e}}function nt(e){0>xt||(e.current=Mt[xt],Mt[xt]=null,xt--)}function _t(e,n){xt++,Mt[xt]=e.current,e.current=n}var bt=U(null),It=U(null),et=U(null),ct=U(null);function Dt(e,n){switch(_t(et,n),_t(It,e),_t(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J_(n),e=$_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(bt),_t(bt,e)}function Vt(){nt(bt),nt(It),nt(et)}function Bt(e){e.memoizedState!==null&&_t(ct,e);var n=bt.current,a=$_(n,e.type);n!==a&&(_t(It,e),_t(bt,a))}function me(e){It.current===e&&(nt(bt),nt(It)),ct.current===e&&(nt(ct),Fo._currentValue=it)}var $e,Se;function _e(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+Se}var we=!1;function le(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var F=g.split(`
`),K=T.split(`
`);for(c=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(r===F.length||c===K.length)for(r=F.length-1,c=K.length-1;1<=r&&0<=c&&F[r]!==K[c];)c--;for(;1<=r&&0<=c;r--,c--)if(F[r]!==K[c]){if(r!==1||c!==1)do if(r--,c--,0>c||F[r]!==K[c]){var ft=`
`+F[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return _e("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ke=Object.prototype.hasOwnProperty,Te=o.unstable_scheduleCallback,Pe=o.unstable_cancelCallback,qt=o.unstable_shouldYield,w=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ie=o.unstable_setDisableYieldValue,yt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ie(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,e)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,fe=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ct(e)/fe|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=St(r):(g&=T,g!==0?c=St(g):a||(a=T&~e,a!==0&&(c=St(a))))):(T=r&~f,T!==0?c=St(T):g!==0?c=St(g):a||(a=r&~e,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,r,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,K=e.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;T[ft]=0,F[ft]=-1;var tt=K[ft];if(tt!==null)for(K[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&rl(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function rl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function jr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Is(e,n){var a=n&-n;return a=(a&42)!==0?1:Zr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:yg(e.type))}function Li(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+oi,Mn="__reactProps$"+oi,Mi="__reactContainer$"+oi,Hs="__reactEvents$"+oi,Gs="__reactListeners$"+oi,ol="__reactHandles$"+oi,Qr="__reactResources$"+oi,os="__reactMarker$"+oi;function Jr(e){delete e[ln],delete e[Mn],delete e[Hs],delete e[Gs],delete e[ol]}function ba(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=rg(e);e!==null;){if(a=e[ln])return a;e=rg(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[ln]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ls(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Qr];return n||(n=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(e){e[os]=!0}var q=new Set,rt={};function $(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(rt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Ht(e){return Ke.call(Lt,e)?!0:Ke.call(Ft,e)?!1:wt.test(e)?Lt[e]=!0:(Ft[e]=!0,!1)}function kt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function te(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Ue(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ue(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function se(e){return e.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,r,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?En(e,g,ee(n)):a!=null?En(e,g,ee(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ee(T):e.removeAttribute("name")}function Yi(e,n,a,r,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ye(e)}function En(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Tn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ye(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&An(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,ks=null;function Qd(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Mn]||null;if(!c)throw Error(s(90));yn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&ze(r)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var $c=!1;function Jd(e,n,a){if($c)return e(n,a);$c=!0;try{var r=e(n);return r}finally{if($c=!1,(Xs!==null||ks!==null)&&(Zl(),Xs&&(n=Xs,e=ks,ks=Xs=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Zi)try{var to={};Object.defineProperty(to,"passive",{get:function(){tu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{tu=!1}var Ca=null,eu=null,cl=null;function $d(){if(cl)return cl;var e,n=eu,a=n.length,r,c="value"in Ca?Ca.value:Ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return cl=c.slice(e,1<r?1-r:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function tp(){return!1}function Gn(e){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:tp,this.isPropagationStopped=tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Gn(cs),eo=_({},cs,{view:0,detail:0}),Av=Gn(eo),nu,iu,no,dl=_({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(nu=e.screenX-no.screenX,iu=e.screenY-no.screenY):iu=nu=0,no=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ep=Gn(dl),Rv=_({},dl,{dataTransfer:0}),Cv=Gn(Rv),Dv=_({},eo,{relatedTarget:0}),au=Gn(Dv),wv=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Gn(wv),Lv=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nv=Gn(Lv),Ov=_({},cs,{data:0}),np=Gn(Ov),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fv[e])?!!n[e]:!1}function su(){return Iv}var Bv=_({},eo,{key:function(e){if(e.key){var n=Pv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Gn(Bv),Gv=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Gn(Gv),Vv=_({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Xv=Gn(Vv),kv=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Gn(kv),qv=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=Gn(qv),jv=_({},cs,{newState:0,oldState:0}),Zv=Gn(jv),Kv=[9,13,27,32],ru=Zi&&"CompositionEvent"in window,io=null;Zi&&"documentMode"in document&&(io=document.documentMode);var Qv=Zi&&"TextEvent"in window&&!io,ap=Zi&&(!ru||io&&8<io&&11>=io),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return Kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function Jv(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function $v(e,n){if(Ws)return e==="compositionend"||!ru&&op(e,n)?(e=$d(),cl=eu=Ca=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tx[e.type]:n==="textarea"}function up(e,n,a,r){Xs?ks?ks.push(r):ks=[r]:Xs=r,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var ao=null,so=null;function ex(e){q_(e,0)}function pl(e){var n=ls(e);if(ze(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(Zi){var ou;if(Zi){var lu="oninput"in document;if(!lu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),lu=typeof dp.oninput=="function"}ou=lu}else ou=!1;hp=ou&&(!document.documentMode||9<document.documentMode)}function pp(){ao&&(ao.detachEvent("onpropertychange",mp),so=ao=null)}function mp(e){if(e.propertyName==="value"&&pl(so)){var n=[];up(n,so,e,Jc(e)),Jd(ex,n)}}function nx(e,n,a){e==="focusin"?(pp(),ao=n,so=a,ao.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(so)}function ax(e,n){if(e==="click")return pl(n)}function sx(e,n){if(e==="input"||e==="change")return pl(n)}function rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:rx;function ro(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ke.call(n,c)||!Kn(e[c],n[c]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,n){var a=_p(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ox=Zi&&"documentMode"in document&&11>=document.documentMode,qs=null,uu=null,oo=null,fu=!1;function Sp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||qs==null||qs!==Zt(r)||(r=qs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&ro(oo,r)||(oo=r,r=nc(uu,"onSelect"),0<r.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=qs)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ys={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},hu={},Mp={};Zi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function fs(e){if(hu[e])return hu[e];if(!Ys[e])return e;var n=Ys[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return hu[e]=n[a];return e}var yp=fs("animationend"),Ep=fs("animationiteration"),Tp=fs("animationstart"),lx=fs("transitionrun"),cx=fs("transitionstart"),ux=fs("transitioncancel"),bp=fs("transitionend"),Ap=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Ei(e,n){Ap.set(e,n),$(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],js=0,pu=0;function _l(){for(var e=js,n=pu=js=0;n<e;){var a=ci[n];ci[n++]=null;var r=ci[n];ci[n++]=null;var c=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&Rp(a,c,f)}}function gl(e,n,a,r){ci[js++]=e,ci[js++]=n,ci[js++]=a,ci[js++]=r,pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,a,r){return gl(e,n,a,r),vl(e)}function hs(e,n){return gl(e,null,null,n),vl(e)}function Rp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<wo)throw wo=0,bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function fx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new fx(e,n,a,r)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,r,c,f){var g=0;if(r=e,typeof e=="function")_u(e)&&(g=1);else if(typeof e=="string")g=_S(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Qn(31,a,n,c),e.elementType=R,e.lanes=f,e;case C:return ds(a.children,c,f,n);case y:g=8,c|=24;break;case x:return e=Qn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case I:return e=Qn(13,a,n,c),e.elementType=I,e.lanes=f,e;case B:return e=Qn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:g=10;break t;case P:g=9;break t;case O:g=11;break t;case z:g=14;break t;case Q:g=16,r=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(g,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ds(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function gu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Dp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},wp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Ks=[],Qs=0,Sl=null,lo=0,fi=[],hi=0,Da=null,Ni=1,Oi="";function Qi(e,n){Ks[Qs++]=lo,Ks[Qs++]=Sl,Sl=e,lo=n}function Up(e,n,a){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=Da,Da=e;var r=Ni;e=Oi;var c=32-Ot(r)-1;r&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ni=1<<32-Ot(n)+c|a<<c|r,Oi=f+e}else Ni=1<<f|a<<c|r,Oi=e}function xu(e){e.return!==null&&(Qi(e,1),Up(e,1,0))}function Su(e){for(;e===Sl;)Sl=Ks[--Qs],Ks[Qs]=null,lo=Ks[--Qs],Ks[Qs]=null;for(;e===Da;)Da=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null}function Lp(e,n){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=Da,Ni=n.id,Oi=n.overflow,Da=e}var Rn=null,je=null,Ee=!1,wa=null,di=!1,Mu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(ui(n,e)),Mu}function Np(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[Mn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)ve(Lo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Yi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||K_(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(e,!0)}function Op(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function Js(e){if(e!==Rn)return!1;if(!Ee)return Op(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&je&&Ua(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=sg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=sg(e)}else n===27?(n=je,Wa(e.type)?(e=Wf,Wf=null,je=e):je=n):je=Rn?mi(e.stateNode.nextSibling):null;return!0}function ps(){je=Rn=null,Ee=!1}function yu(){var e=wa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),wa=null),e}function co(e){wa===null?wa=[e]:wa.push(e)}var Eu=U(null),ms=null,Ji=null;function La(e,n,a){_t(Eu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Eu.current,nt(Eu)}function Tu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Tu(f.return,a,e),r||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Tu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function $s(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=c.type;Kn(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===ct.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}c=c.return}e!==null&&bu(n,e,a,r),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){ms=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Pp(ms,e)}function yl(e,n){return ms===null&&_s(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new hx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&dx(px,function(){e.controller.abort()})}var fo=null,Ru=0,tr=0,er=null;function mx(e,n){if(fo===null){var a=fo=[];Ru=0,tr=Uf(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(zp,zp),n}function zp(){if(--Ru===0&&fo!==null){er!==null&&(er.status="fulfilled");var e=fo;fo=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _x(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Fp=L.S;L.S=function(e,n){S_=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mx(e,n),Fp!==null&&Fp(e,n)};var gs=U(null);function Cu(){var e=gs.current;return e!==null?e:qe.pooledCache}function El(e,n){n===null?_t(gs,gs.current):_t(gs,n.pool)}function Ip(){var e=Cu();return e===null?null:{parent:cn._currentValue,pool:e}}var nr=Error(s(460)),Du=Error(s(474)),Tl=Error(s(542)),bl={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw xs=n,nr}}function vs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,nr):a}}var xs=null;function Gp(){if(xs===null)throw Error(s(459));var e=xs;return xs=null,e}function Vp(e){if(e===nr||e===Tl)throw Error(s(483))}var ir=null,ho=0;function Al(e){var n=ho;return ho+=1,ir===null&&(ir=[]),Hp(ir,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Xp(e){function n(Y,V){if(e){var Z=Y.deletions;Z===null?(Y.deletions=[V],Y.flags|=16):Z.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Ki(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Z){return Y.index=Z,e?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<V?(Y.flags|=67108866,V):Z):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,Z,pt){return V===null||V.tag!==6?(V=gu(Z,Y.mode,pt),V.return=Y,V):(V=c(V,Z),V.return=Y,V)}function F(Y,V,Z,pt){var $t=Z.type;return $t===C?ft(Y,V,Z.props.children,pt,Z.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Q&&vs($t)===V.type)?(V=c(V,Z.props),po(V,Z),V.return=Y,V):(V=xl(Z.type,Z.key,Z.props,null,Y.mode,pt),po(V,Z),V.return=Y,V)}function K(Y,V,Z,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=vu(Z,Y.mode,pt),V.return=Y,V):(V=c(V,Z.children||[]),V.return=Y,V)}function ft(Y,V,Z,pt,$t){return V===null||V.tag!==7?(V=ds(Z,Y.mode,pt,$t),V.return=Y,V):(V=c(V,Z),V.return=Y,V)}function mt(Y,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gu(""+V,Y.mode,Z),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return Z=xl(V.type,V.key,V.props,null,Y.mode,Z),po(Z,V),Z.return=Y,Z;case A:return V=vu(V,Y.mode,Z),V.return=Y,V;case Q:return V=vs(V),mt(Y,V,Z)}if(ut(V)||st(V))return V=ds(V,Y.mode,Z,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,Al(V),Z);if(V.$$typeof===N)return mt(Y,yl(Y,V),Z);Rl(Y,V)}return null}function tt(Y,V,Z,pt){var $t=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return $t!==null?null:T(Y,V,""+Z,pt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return Z.key===$t?F(Y,V,Z,pt):null;case A:return Z.key===$t?K(Y,V,Z,pt):null;case Q:return Z=vs(Z),tt(Y,V,Z,pt)}if(ut(Z)||st(Z))return $t!==null?null:ft(Y,V,Z,pt,null);if(typeof Z.then=="function")return tt(Y,V,Al(Z),pt);if(Z.$$typeof===N)return tt(Y,V,yl(Y,Z),pt);Rl(Y,Z)}return null}function ot(Y,V,Z,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Z)||null,T(V,Y,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?Z:pt.key)||null,F(V,Y,pt,$t);case A:return Y=Y.get(pt.key===null?Z:pt.key)||null,K(V,Y,pt,$t);case Q:return pt=vs(pt),ot(Y,V,Z,pt,$t)}if(ut(pt)||st(pt))return Y=Y.get(Z)||null,ft(V,Y,pt,$t,null);if(typeof pt.then=="function")return ot(Y,V,Z,Al(pt),$t);if(pt.$$typeof===N)return ot(Y,V,Z,yl(V,pt),$t);Rl(V,pt)}return null}function Gt(Y,V,Z,pt){for(var $t=null,Re=null,Yt=V,he=V=0,ye=null;Yt!==null&&he<Z.length;he++){Yt.index>he?(ye=Yt,Yt=null):ye=Yt.sibling;var Ce=tt(Y,Yt,Z[he],pt);if(Ce===null){Yt===null&&(Yt=ye);break}e&&Yt&&Ce.alternate===null&&n(Y,Yt),V=f(Ce,V,he),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,Yt=ye}if(he===Z.length)return a(Y,Yt),Ee&&Qi(Y,he),$t;if(Yt===null){for(;he<Z.length;he++)Yt=mt(Y,Z[he],pt),Yt!==null&&(V=f(Yt,V,he),Re===null?$t=Yt:Re.sibling=Yt,Re=Yt);return Ee&&Qi(Y,he),$t}for(Yt=r(Yt);he<Z.length;he++)ye=ot(Yt,Y,he,Z[he],pt),ye!==null&&(e&&ye.alternate!==null&&Yt.delete(ye.key===null?he:ye.key),V=f(ye,V,he),Re===null?$t=ye:Re.sibling=ye,Re=ye);return e&&Yt.forEach(function(Ka){return n(Y,Ka)}),Ee&&Qi(Y,he),$t}function ne(Y,V,Z,pt){if(Z==null)throw Error(s(151));for(var $t=null,Re=null,Yt=V,he=V=0,ye=null,Ce=Z.next();Yt!==null&&!Ce.done;he++,Ce=Z.next()){Yt.index>he?(ye=Yt,Yt=null):ye=Yt.sibling;var Ka=tt(Y,Yt,Ce.value,pt);if(Ka===null){Yt===null&&(Yt=ye);break}e&&Yt&&Ka.alternate===null&&n(Y,Yt),V=f(Ka,V,he),Re===null?$t=Ka:Re.sibling=Ka,Re=Ka,Yt=ye}if(Ce.done)return a(Y,Yt),Ee&&Qi(Y,he),$t;if(Yt===null){for(;!Ce.done;he++,Ce=Z.next())Ce=mt(Y,Ce.value,pt),Ce!==null&&(V=f(Ce,V,he),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Ee&&Qi(Y,he),$t}for(Yt=r(Yt);!Ce.done;he++,Ce=Z.next())Ce=ot(Yt,Y,he,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?he:Ce.key),V=f(Ce,V,he),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(RS){return n(Y,RS)}),Ee&&Qi(Y,he),$t}function ke(Y,V,Z,pt){if(typeof Z=="object"&&Z!==null&&Z.type===C&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:t:{for(var $t=Z.key;V!==null;){if(V.key===$t){if($t=Z.type,$t===C){if(V.tag===7){a(Y,V.sibling),pt=c(V,Z.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Q&&vs($t)===V.type){a(Y,V.sibling),pt=c(V,Z.props),po(pt,Z),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Z.type===C?(pt=ds(Z.props.children,Y.mode,pt,Z.key),pt.return=Y,Y=pt):(pt=xl(Z.type,Z.key,Z.props,null,Y.mode,pt),po(pt,Z),pt.return=Y,Y=pt)}return g(Y);case A:t:{for($t=Z.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a(Y,V.sibling),pt=c(V,Z.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=vu(Z,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case Q:return Z=vs(Z),ke(Y,V,Z,pt)}if(ut(Z))return Gt(Y,V,Z,pt);if(st(Z)){if($t=st(Z),typeof $t!="function")throw Error(s(150));return Z=$t.call(Z),ne(Y,V,Z,pt)}if(typeof Z.then=="function")return ke(Y,V,Al(Z),pt);if(Z.$$typeof===N)return ke(Y,V,yl(Y,Z),pt);Rl(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,V!==null&&V.tag===6?(a(Y,V.sibling),pt=c(V,Z),pt.return=Y,Y=pt):(a(Y,V),pt=gu(Z,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,V)}return function(Y,V,Z,pt){try{ho=0;var $t=ke(Y,V,Z,pt);return ir=null,$t}catch(Yt){if(Yt===nr||Yt===Tl)throw Yt;var Re=Qn(29,Yt,null,Y.mode);return Re.lanes=pt,Re.return=Y,Re}finally{}}}var Ss=Xp(!0),kp=Xp(!1),Na=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=vl(e),Rp(e,null,a),n}return gl(e,r,n,a),vl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,jr(e,a)}}function Lu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function _o(){if(Nu){var e=er;if(e!==null)throw e}}function go(e,n,a,r){Nu=!1;var c=e.updateQueue;Na=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var F=T,K=F.next;F.next=null,g===null?f=K:g.next=K,g=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==g&&(T===null?ft.firstBaseUpdate=K:T.next=K,ft.lastBaseUpdate=F))}if(f!==null){var mt=c.baseState;g=0,ft=K=F=null,T=f;do{var tt=T.lane&-536870913,ot=tt!==T.lane;if(ot?(Me&tt)===tt:(r&tt)===tt){tt!==0&&tt===tr&&(Nu=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=e,ne=T;tt=n;var ke=a;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){mt=Gt.call(ke,mt,tt);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,tt=typeof Gt=="function"?Gt.call(ke,mt,tt):Gt,tt==null)break t;mt=_({},mt,tt);break t;case 2:Na=!0}}tt=T.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(K=ft=ot,F=mt):ft=ft.next=ot,g|=tt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(F=mt),c.baseState=F,c.firstBaseUpdate=K,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ha|=g,e.lanes=g,e.memoizedState=mt}}function Wp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var ar=U(null),Cl=U(0);function Yp(e,n){e=la,_t(Cl,e),_t(ar,n),la=e|n.baseLanes}function Ou(){_t(Cl,la),_t(ar,ar.current)}function Pu(){la=Cl.current,nt(ar),nt(Cl)}var Jn=U(null),pi=null;function za(e){var n=e.alternate;_t(rn,rn.current&1),_t(Jn,e),pi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(pi=e)}function zu(e){_t(rn,rn.current),_t(Jn,e),pi===null&&(pi=e)}function jp(e){e.tag===22?(_t(rn,rn.current),_t(Jn,e),pi===null&&(pi=e)):Fa()}function Fa(){_t(rn,rn.current),_t(Jn,Jn.current)}function $n(e){nt(Jn),pi===e&&(pi=null),nt(rn)}var rn=U(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ce=null,Ve=null,un=null,wl=!1,sr=!1,Ms=!1,Ul=0,vo=0,rr=null,gx=0;function en(){throw Error(s(321))}function Fu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Iu(e,n,a,r,c,f){return ta=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Um:$u,Ms=!1,f=a(r,c),Ms=!1,sr&&(f=Kp(n,a,r,c)),Zp(e),f}function Zp(e){L.H=Mo;var n=Ve!==null&&Ve.next!==null;if(ta=0,un=Ve=ce=null,wl=!1,vo=0,rr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ml(e)&&(fn=!0))}function Kp(e,n,a,r){ce=e;var c=0;do{if(sr&&(rr=null),vo=0,sr=!1,25<=c)throw Error(s(301));if(c+=1,un=Ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Lm,f=n(a,r)}while(sr);return f}function vx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ce.flags|=1024),n}function Bu(){var e=Ul!==0;return Ul=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}ta=0,un=Ve=ce=null,sr=!1,vo=Ul=0,rr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ce.memoizedState=un=e:un=un.next=e,un}function on(){if(Ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=un===null?ce.memoizedState:un.next;if(n!==null)un=n,Ve=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?ce.memoizedState=un=e:un=un.next=e}return un}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,rr===null&&(rr=[]),e=Hp(rr,e,n),n=ce,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Um:$u),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=on();return Xu(n,Ve,e)}function Xu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,F=null,K=n,ft=!1;do{var mt=K.lane&-536870913;if(mt!==K.lane?(Me&mt)===mt:(ta&mt)===mt){var tt=K.revertLane;if(tt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),mt===tr&&(ft=!0);else if((ta&tt)===tt){K=K.next,tt===tr&&(ft=!0);continue}else mt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(T=F=mt,g=f):F=F.next=mt,ce.lanes|=tt,Ha|=tt;mt=K.action,Ms&&a(f,mt),f=K.hasEagerState?K.eagerState:a(f,mt)}else tt={lane:mt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(T=F=tt,g=f):F=F.next=tt,ce.lanes|=mt,Ha|=mt;K=K.next}while(K!==null&&K!==n);if(F===null?g=f:F.next=T,!Kn(f,e.memoizedState)&&(fn=!0,ft&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ku(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Qp(e,n,a){var r=ce,c=on(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Kn((Ve||c).memoizedState,a);if(g&&(c.memoizedState=a,fn=!0),c=c.queue,Yu(tm.bind(null,r,c,e),[e]),c.getSnapshot!==n||g||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},$p.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(ta&127)!==0||Jp(r,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ll(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,r){n.value=a,n.getSnapshot=r,em(n)&&nm(e)}function tm(e,n,a){return a(function(){em(n)&&nm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function nm(e){var n=hs(e,2);n!==null&&qn(n,e,2)}function Wu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ms){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function im(e,n,a,r){return e.baseState=a,Xu(e,Ve,typeof r=="function"?r:ea)}function xx(e,n,a,r,c){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var T=a(c,r),F=L.S;F!==null&&F(g,T),sm(e,n,T)}catch(K){qu(e,n,K)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,r),sm(e,n,f)}catch(K){qu(e,n,K)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){rm(e,n,r)},function(r){return qu(e,n,r)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==r)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Ee){var a=qe.formState;if(a!==null){t:{var r=ce;if(Ee){if(je){e:{for(var c=je,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=mi(c.nextSibling),r=c.data==="F!";break t}}Ua(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=r,a=Cm.bind(null,ce,r),r.dispatch=a,r=Wu(!1),f=Ju.bind(null,ce,!1,r.queue),r=Bn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=xx.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function um(e){var n=on();return fm(n,Ve,e)}function fm(e,n,a){if(n=Xu(e,n,lm)[0],e=Ol(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=xo(n)}catch(g){throw g===nr?Tl:g}else r=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,or(9,{destroy:void 0},Sx.bind(null,c,a),null)),[r,f,e]}function Sx(e,n){e.action=n}function hm(e){var n=on(),a=Ve;if(a!==null)return fm(n,a,e);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function or(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ll(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dm(){return on().memoizedState}function Pl(e,n,a,r){var c=Bn();ce.flags|=e,c.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function zl(e,n,a,r){var c=on();r=r===void 0?null:r;var f=c.memoizedState.inst;Ve!==null&&r!==null&&Fu(r,Ve.memoizedState.deps)?c.memoizedState=or(n,f,a,r):(ce.flags|=e,c.memoizedState=or(1|n,f,a,r))}function pm(e,n){Pl(8390656,8,e,n)}function Yu(e,n){zl(2048,8,e,n)}function Mx(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Ll(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=on().memoizedState;return Mx({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _m(e,n){return zl(4,2,e,n)}function gm(e,n){return zl(4,4,e,n)}function vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,vm.bind(null,n,e),a)}function ju(){}function Sm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Mm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=e(),Ms){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function Zu(e,n,a){return a===void 0||(ta&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=y_(),ce.lanes|=e,Ha|=e,a)}function ym(e,n,a,r){return Kn(a,n)?a:ar.current!==null?(e=Zu(e,a,r),Kn(e,n)||(fn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(Me&261930)===0?(fn=!0,e.memoizedState=a):(e=y_(),ce.lanes|=e,Ha|=e,n)}function Em(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=L.T,T={};L.T=T,Ju(e,!1,n,a);try{var F=c(),K=L.S;if(K!==null&&K(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=_x(F,r);So(e,n,ft,ni(e))}else So(e,n,r,ni(e))}catch(mt){So(e,n,{then:function(){},status:"rejected",reason:mt},ni())}finally{H.p=f,g!==null&&T.types!==null&&(g.types=T.types),L.T=g}}function yx(){}function Ku(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Tm(e).queue;Em(e,c,n,it,a===null?yx:function(){return bm(e),a(r)})}function Tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=Tm(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},ni())}function Qu(){return Cn(Fo)}function Am(){return on().memoizedState}function Rm(){return on().memoizedState}function Ex(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Oa(a);var r=Pa(n,e,a);r!==null&&(qn(r,n,a),mo(r,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function Tx(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Dm(n,a):(a=mu(e,n,a,r),a!==null&&(qn(a,e,r),wm(a,n,r)))}function Cm(e,n,a){var r=ni();So(e,n,a,r)}function So(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Dm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Kn(T,g))return gl(e,n,c,0),qe===null&&_l(),!1}catch{}finally{}if(a=mu(e,n,c,r),a!==null)return qn(a,e,r),wm(a,n,r),!0}return!1}function Ju(e,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=mu(e,a,r,2),n!==null&&qn(n,e,2)}function Fl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Dm(e,n){sr=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function wm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,jr(e,a)}}var Mo={readContext:Cn,use:Nl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Mo.useEffectEvent=en;var Um={readContext:Cn,use:Nl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(Ms){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var c=a(n);if(Ms){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Tx.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Cm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Bn();return Zu(a,e,n)},useTransition:function(){var e=Wu(!1);return e=Em.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,c=Bn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Me&127)!==0||Jp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,pm(tm.bind(null,r,f,e),[e]),r.flags|=2048,or(9,{destroy:void 0},$p.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(Ee){var a=Oi,r=Ni;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Bn().memoizedState=Ex.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Cn,use:Nl,useCallback:Sm,useContext:Cn,useEffect:Yu,useImperativeHandle:xm,useInsertionEffect:_m,useLayoutEffect:gm,useMemo:Mm,useReducer:Ol,useRef:dm,useState:function(){return Ol(ea)},useDebugValue:ju,useDeferredValue:function(e,n){var a=on();return ym(a,Ve.memoizedState,e,n)},useTransition:function(){var e=Ol(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Qu,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=on();return im(a,Ve,e,n)},useMemoCache:Vu,useCacheRefresh:Rm};$u.useEffectEvent=mm;var Lm={readContext:Cn,use:Nl,useCallback:Sm,useContext:Cn,useEffect:Yu,useImperativeHandle:xm,useInsertionEffect:_m,useLayoutEffect:gm,useMemo:Mm,useReducer:ku,useRef:dm,useState:function(){return ku(ea)},useDebugValue:ju,useDeferredValue:function(e,n){var a=on();return Ve===null?Zu(a,e,n):ym(a,Ve.memoizedState,e,n)},useTransition:function(){var e=ku(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Qu,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=on();return Ve!==null?im(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function tf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),c=Oa(r);c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,r),n!==null&&(qn(n,e,r),mo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),c=Oa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,r),n!==null&&(qn(n,e,r),mo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(e,r,a),n!==null&&(qn(n,e,a),mo(n,e,a))}};function Nm(e,n,a,r,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!ro(a,r)||!ro(c,f):!0}function Om(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function ys(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Pm(e){ml(e)}function zm(e){console.error(e)}function Fm(e){ml(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Im(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function Bm(e){return e=Oa(e),e.tag=3,e}function Hm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Im(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Im(n,a,r),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function bx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(e,r,c)),!1;case 22:return a.flags|=65536,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(e,r,c)),!1}throw Error(s(435,a.tag))}return Cf(e,r,c),Kl(),!1}if(Ee)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Mu&&(e=Error(s(422),{cause:r}),co(ui(e,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),co(ui(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ui(r,a),c=nf(e.stateNode,r,c),Lu(e,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=ui(f,a),Do===null?Do=[f]:Do.push(f),nn!==4&&(nn=2),n===null)return!0;r=ui(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=nf(a.stateNode,r,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Bm(c),Hm(c,e,a,r),Lu(a,c),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),fn=!1;function Dn(e,n,a,r){n.child=e===null?kp(n,null,a,r):Ss(n,e.child,a,r)}function Gm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return _s(n),r=Iu(e,n,a,g,f,c),T=Bu(),e!==null&&!fn?(Hu(e,n,c),na(e,n,c)):(Ee&&T&&xu(n),n.flags|=1,Dn(e,n,r,c),n.child)}function Vm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(e,n,f,r,c)):(e=xl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(g,r)&&e.ref===n.ref)return na(e,n,c)}return n.flags|=1,e=Ki(f,r),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(ro(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,hf(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,na(e,n,c)}return sf(e,n,a,r,c)}function km(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Wm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Ou(),jp(n);else return r=n.lanes=536870912,Wm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(El(n,f.cachePool),Yp(n,f),Fa(),n.memoizedState=null):(e!==null&&El(n,null),Ou(),Fa());return Dn(e,n,c,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(e,n,a,r,c){var f=Cu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),Ou(),jp(n),e!==null&&$s(e,n,r,!0),n.childLanes=c,null}function Bl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qm(e,n,a){return Ss(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Ax(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(r.mode==="hidden")return e=Bl(n,r),n.lanes=536870912,yo(null,e);if(zu(n),(e=je)?(e=ag(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Bl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(zu(n),c)if(n.flags&256)n.flags&=-257,n=qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||$s(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(r=qe,r!==null&&(g=Is(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,hs(e,g),qn(r,e,g),af;Kl(),n=qm(e,n,a)}else e=f.treeContext,je=mi(g.nextSibling),Rn=n,Ee=!0,wa=null,di=!1,e!==null&&Lp(n,e),n=Bl(n,r),n.flags|=4096;return n}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,c){return _s(n),a=Iu(e,n,a,r,void 0,c),r=Bu(),e!==null&&!fn?(Hu(e,n,c),na(e,n,c)):(Ee&&r&&xu(n),n.flags|=1,Dn(e,n,a,c),n.child)}function Ym(e,n,a,r,c,f){return _s(n),n.updateQueue=null,a=Kp(n,r,a,c),Zp(e),r=Bu(),e!==null&&!fn?(Hu(e,n,f),na(e,n,f)):(Ee&&r&&xu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function jm(e,n,a,r,c){if(_s(n),n.stateNode===null){var f=Zs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Cn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},wu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Cn(g):Zs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(tf(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ef.enqueueReplaceState(f,f.state,null),go(n,r,f,c),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,F=ys(a,T);f.props=F;var K=f.context,ft=a.contextType;g=Zs,typeof ft=="object"&&ft!==null&&(g=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||K!==g)&&Om(n,f,r,g),Na=!1;var tt=n.memoizedState;f.state=tt,go(n,r,f,c),_o(),K=n.memoizedState,T||tt!==K||Na?(typeof mt=="function"&&(tf(n,a,mt,r),K=n.memoizedState),(F=Na||Nm(n,a,F,r,tt,K,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),f.props=r,f.state=K,f.context=g,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uu(e,n),g=n.memoizedProps,ft=ys(a,g),f.props=ft,mt=n.pendingProps,tt=f.context,K=a.contextType,F=Zs,typeof K=="object"&&K!==null&&(F=Cn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||tt!==F)&&Om(n,f,r,F),Na=!1,tt=n.memoizedState,f.state=tt,go(n,r,f,c),_o();var ot=n.memoizedState;g!==mt||tt!==ot||Na||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof T=="function"&&(tf(n,a,T,r),ot=n.memoizedState),(ft=Na||Nm(n,a,ft,r,tt,ot,F)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=F,r=ft):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Hl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ss(n,e.child,null,c),n.child=Ss(n,null,a,c)):Dn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=na(e,n,c),e}function Zm(e,n,a,r){return ps(),n.flags|=256,Dn(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Ip()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Km(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(c?za(n):Fa(),(e=je)?(e=ag(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Ua(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Fa(),c=n.mode,T=Gl({mode:"hidden",children:T},c),r=ds(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,g,a),n.memoizedState=rf,yo(null,r)):(za(n),cf(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),T=r.fallback,c=n.mode,r=Gl({mode:"visible",children:r.children},c),T=ds(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,Ss(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,g,a),n.memoizedState=rf,n=yo(null,r));else if(za(n),kf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var K=g.dgst;g=K,r=Error(s(419)),r.stack="",r.digest=g,co({value:r,source:null,stack:null}),n=uf(e,n,a)}else if(fn||$s(e,n,a,!1),g=(a&e.childLanes)!==0,fn||g){if(g=qe,g!==null&&(r=Is(g,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,hs(e,r),qn(g,e,r),af;Xf(T)||Kl(),n=uf(e,n,a)}else Xf(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,je=mi(T.nextSibling),Rn=n,Ee=!0,wa=null,di=!1,e!==null&&Lp(n,e),n=cf(n,r.children),n.flags|=4096);return n}return c?(Fa(),T=r.fallback,c=n.mode,F=e.child,K=F.sibling,r=Ki(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,K!==null?T=Ki(K,T):(T=ds(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,yo(null,r),r=n.child,T=e.child.memoizedState,T===null?T=of(a):(c=T.cachePool,c!==null?(F=cn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Ip(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=lf(e,g,a),n.memoizedState=rf,yo(e.child,r)):(za(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return Ss(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Tu(e.return,n,a)}function ff(e,n,a,r,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Jm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=rn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,_t(rn,g),Dn(e,n,r,a),r=Ee?lo:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Rx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),La(n,cn,e.memoizedState.cache),ps();break;case 27:case 5:Bt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(za(n),e=na(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Jm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(rn,rn.current),r)break;return null;case 22:return n.lanes=0,km(e,n,a,n.pendingProps);case 24:La(n,cn,e.memoizedState.cache)}return na(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return fn=!1,Rx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&Up(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=vs(n.elementType),n.type=e,typeof e=="function")_u(e)?(r=ys(e,r),n.tag=1,n=jm(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=Gm(null,n,e,r,a);break t}else if(c===z){n.tag=14,n=Vm(null,n,e,r,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ys(r,n.pendingProps),jm(e,n,r,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Uu(e,n),go(n,r,null,a);var g=n.memoizedState;if(r=g.cache,La(n,cn,r),r!==f.cache&&bu(n,[cn],a,!0),_o(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(e,n,r,a);break t}else if(r!==c){c=ui(Error(s(424)),n),co(c),n=Zm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=mi(e.firstChild),Rn=n,Ee=!0,wa=null,di=!0,a=kp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ps(),r===c){n=na(e,n,a);break t}Dn(e,n,r,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,r=ic(et.current).createElement(a),r[ln]=n,r[Mn]=e,wn(r,a,e),b(r),n.stateNode=r):n.memoizedState=ug(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Bt(n),e===null&&Ee&&(r=n.stateNode=og(n.type,n.pendingProps,et.current),Rn=n,di=!0,c=je,Wa(n.type)?(Wf=c,je=mi(r.firstChild)):je=c),Dn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((c=r=je)&&(r=iS(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,Rn=n,je=mi(r.firstChild),di=!1,c=!0):c=!1),c||Ua(n)),Bt(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Hf(c,f)?r=null:g!==null&&Hf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Iu(e,n,vx,null,null,a),Fo._currentValue=c),Hl(e,n),Dn(e,n,r,a),n.child;case 6:return e===null&&Ee&&((e=a=je)&&(a=aS(a,n.pendingProps,di),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Ua(n)),null;case 13:return Km(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ss(n,null,r,a):Dn(e,n,r,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),Dn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,_s(n),c=Cn(c),r=r(c),n.flags|=1,Dn(e,n,r,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return Ax(e,n,a);case 22:return km(e,n,a,n.pendingProps);case 24:return _s(n),r=Cn(cn),e===null?(c=Cu(),c===null&&(c=qe,f=Au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},wu(n),La(n,cn,c)):((e.lanes&a)!==0&&(Uu(e,n),go(n,null,null,a),_o()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),La(n,cn,r)):(r=f.cache,La(n,cn,r),r!==c.cache&&bu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function df(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(A_())e.flags|=8192;else throw xs=bl,Du}else e.flags&=-16777217}function t_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mg(n))if(A_())e.flags|=8192;else throw xs=bl,Du}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,fr|=n)}function Eo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Cx(e,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(cn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Ze(n),t_(n,f)):(Ze(n),df(n,c,null,r,a))):f?f!==e.memoizedState?(ia(n),Ze(n),t_(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ia(n),Ze(n),df(n,c,e,r,a)),null;case 27:if(me(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=bt.current,Js(n)?Np(n):(e=og(c,r,a),n.stateNode=e,ia(n))}return Ze(n),null;case 5:if(me(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=bt.current,Js(n))Np(n);else{var g=ic(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[ln]=n,f[Mn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(wn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return Ze(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||K_(e.nodeValue,a)),e||Ua(n,!0)}else e=ic(e).createTextNode(r),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Js(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Js(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ze(n),null);case 4:return Vt(),e===null&&Pf(n.stateNode.containerInfo),Ze(n),null;case 10:return $i(n.type),Ze(n),null;case 19:if(nt(rn),r=n.memoizedState,r===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Eo(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,Eo(r,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Cp(a,e),a=a.sibling;return _t(rn,rn.current&1|2),Ee&&Qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Yl&&(n.flags|=128,c=!0,Eo(r,!1),n.lanes=4194304)}else{if(!c)if(e=Dl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),Eo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Ze(n),null}else 2*M()-r.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,c=!0,Eo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=rn.current,_t(rn,c?a&1|2:a&1),Ee&&Qi(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),Pu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&nt(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(cn),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(rn),null;case 4:return Vt(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),Pu(),e!==null&&nt(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function e_(e,n){switch(Su(n),n.tag){case 3:$i(cn),Vt();break;case 26:case 27:case 5:me(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:nt(rn);break;case 10:$i(n.type);break;case 22:case 23:$n(n),Pu(),e!==null&&nt(gs);break;case 24:$i(cn)}}function To(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(T){He(n,n.return,T)}}function Ia(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var F=a,K=T;try{K()}catch(ft){He(c,F,ft)}}}r=r.next}while(r!==f)}}catch(ft){He(n,n.return,ft)}}function n_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(r){He(e,e.return,r)}}}function i_(e,n,a){a.props=ys(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){He(e,n,c)}}function Pi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function a_(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function pf(e,n,a){try{var r=e.stateNode;Qx(r,e.type,a,n),r[Mn]=n}catch(c){He(e,e.return,c)}}function s_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,a),e=e.sibling;e!==null;)_f(e,n,a),e=e.sibling}function Xl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function r_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,r,a),n[ln]=e,n[Mn]=a}catch(f){He(e,e.return,f)}}var aa=!1,hn=!1,gf=!1,o_=typeof WeakSet=="function"?WeakSet:Set,xn=null;function wx(e,n){if(e=e.containerInfo,If=uc,e=xp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,F=-1,K=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(T=g+c),mt!==f||r!==0&&mt.nodeType!==3||(F=g+r),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++K===c&&(T=g),tt===f&&++ft===r&&(F=g),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},uc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=ys(a.type,c);e=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){He(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function l_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),r&4&&To(5,a);break;case 1:if(ra(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){He(a,a.return,g)}else{var c=ys(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){He(a,a.return,g)}}r&64&&n_(a),r&512&&bo(a,a.return);break;case 3:if(ra(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(g){He(a,a.return,g)}}break;case 27:n===null&&r&4&&r_(a);case 26:case 5:ra(e,a),n===null&&r&4&&a_(a),r&512&&bo(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),r&4&&f_(e,a);break;case 13:ra(e,a),r&4&&h_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bx.bind(null,a),sS(e,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||hn,c=aa;var f=hn;aa=r,(hn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=c,hn=f}break;case 30:break;default:ra(e,a)}}function c_(e){var n=e.alternate;n!==null&&(e.alternate=null,c_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Vn=!1;function sa(e,n,a){for(a=a.child;a!==null;)u_(e,n,a),a=a.sibling}function u_(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:hn||Pi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Pi(a,n);var r=Je,c=Vn;Wa(a.type)&&(Je=a.stateNode,Vn=!1),sa(e,n,a),Oo(a.stateNode),Je=r,Vn=c;break;case 5:hn||Pi(a,n);case 6:if(r=Je,c=Vn,Je=null,sa(e,n,a),Je=r,Vn=c,Je!==null)if(Vn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Je!==null&&(Vn?(e=Je,ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):ng(Je,a.stateNode));break;case 4:r=Je,c=Vn,Je=a.stateNode.containerInfo,Vn=!0,sa(e,n,a),Je=r,Vn=c;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),sa(e,n,a);break;case 1:hn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&i_(a,n,r)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,sa(e,n,a),hn=r;break;default:sa(e,n,a)}}function f_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){He(n,n.return,a)}}}function h_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){He(n,n.return,a)}}function Ux(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o_),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=Ux(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Hx.bind(null,e,r);r.then(c,c)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Wa(T.type)){Je=T.stateNode,Vn=!1;break t}break;case 5:Je=T.stateNode,Vn=!1;break t;case 3:case 4:Je=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Je===null)throw Error(s(160));u_(f,g,c),Je=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d_(n,e),n=n.sibling}var Ti=null;function d_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),kn(e),r&4&&(Ia(3,e,e.return),To(3,e),Ia(5,e,e.return));break;case 1:Xn(n,e),kn(e),r&512&&(hn||a===null||Pi(a,a.return)),r&64&&aa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Ti;if(Xn(n,e),kn(e),r&512&&(hn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[os]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,r,a),f[ln]=e,b(f),r=f;break t;case"link":var g=dg("link","href",c).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=dg("meta","content",c).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,b(f),r=f}e.stateNode=r}else pg(c,e.type,e.stateNode);else e.stateNode=hg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?pg(c,e.type,e.stateNode):hg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),kn(e),r&512&&(hn||a===null||Pi(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),kn(e),r&512&&(hn||a===null||Pi(a,a.return)),e.flags&32){c=e.stateNode;try{pn(c,"")}catch(Gt){He(e,e.return,Gt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,pf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(gf=!0);break;case 6:if(Xn(n,e),kn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Gt){He(e,e.return,Gt)}}break;case 3:if(rc=null,c=Ti,Ti=ac(n.containerInfo),Xn(n,e),Ti=c,kn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Gt){He(e,e.return,Gt)}gf&&(gf=!1,p_(e));break;case 4:r=Ti,Ti=ac(e.stateNode.containerInfo),Xn(n,e),kn(e),Ti=r;break;case 12:Xn(n,e),kn(e);break;case 31:Xn(n,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kl(e,r)));break;case 13:Xn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kl(e,r)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,K=aa,ft=hn;if(aa=K||c,hn=ft||F,Xn(n,e),hn=ft,aa=K,kn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||aa||hn||Es(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=F.stateNode;var mt=F.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Gt){He(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Gt){He(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;c?ig(ot,!0):ig(F.stateNode,!1)}catch(Gt){He(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,kl(e,a))));break;case 19:Xn(n,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kl(e,r)));break;case 30:break;case 21:break;default:Xn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(s_(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(e);Xl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(pn(g,""),a.flags&=-33);var T=mf(e);Xl(e,T,g);break;case 3:case 4:var F=a.stateNode.containerInfo,K=mf(e);_f(e,K,F);break;default:throw Error(s(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;p_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l_(e,n.alternate,n),n=n.sibling}function Es(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Es(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i_(n,n.return,a),Es(n);break;case 27:Oo(n.stateNode);case 26:case 5:Pi(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),To(4,f);break;case 1:if(oa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){He(r,r.return,K)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Wp(F[c],T)}catch(K){He(r,r.return,K)}}a&&g&64&&n_(f),bo(f,f.return);break;case 27:r_(f);case 26:case 5:oa(c,f,a),a&&r===null&&g&4&&a_(f),bo(f,f.return);break;case 12:oa(c,f,a);break;case 31:oa(c,f,a),a&&g&4&&f_(c,f);break;case 13:oa(c,f,a),a&&g&4&&h_(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),bo(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m_(e,n,a,r),n=n.sibling}function m_(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),c&2048&&To(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(c&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){He(n,n.return,F)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):Ao(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&vf(g,n);break;case 24:bi(e,n,a,r),c&2048&&xf(n.alternate,n);break;default:bi(e,n,a,r)}}function lr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,F=r,K=g.flags;switch(g.tag){case 0:case 11:case 15:lr(f,g,T,F,c),To(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?lr(f,g,T,F,c):Ao(f,g):(ft._visibility|=2,lr(f,g,T,F,c)),c&&K&2048&&vf(g.alternate,g);break;case 24:lr(f,g,T,F,c),c&&K&2048&&xf(g.alternate,g);break;default:lr(f,g,T,F,c)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:Ao(a,r),c&2048&&vf(r.alternate,r);break;case 24:Ao(a,r),c&2048&&xf(r.alternate,r);break;default:Ao(a,r)}n=n.sibling}}var Ro=8192;function cr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)__(e,n,a),e=e.sibling}function __(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&gS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var r=Ti;Ti=ac(e.stateNode.containerInfo),cr(e,n,a),Ti=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ro,Ro=16777216,cr(e,n,a),Ro=r):cr(e,n,a));break;default:cr(e,n,a)}}function g_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,x_(r,e)}g_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)v_(e),e=e.sibling}function v_(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Co(e);break;default:Co(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,x_(r,e)}g_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function x_(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var c=r.sibling,f=r.return;if(c_(r),r===a){xn=null;break t}if(c!==null){c.return=f,xn=c;break t}xn=f}}}var Lx={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,ge=null,Me=0,Be=0,ti=null,Ba=!1,ur=!1,Sf=!1,la=0,nn=0,Ha=0,Ts=0,Mf=0,ei=0,fr=0,Do=null,Wn=null,yf=!1,ql=0,S_=0,Yl=1/0,jl=null,Ga=null,mn=0,Va=null,hr=null,ca=0,Ef=0,Tf=null,M_=null,wo=0,bf=null;function ni(){return(Ne&2)!==0&&Me!==0?Me&-Me:L.T!==null?Uf():Kr()}function y_(){if(ei===0)if((Me&536870912)===0||Ee){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Xa(e,Me,ei,!1)),Nn(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(Ts|=a),nn===4&&Xa(e,Me,ei,!1)),zi(e))}function E_(e,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),c=r?zx(e,n):Rf(e,n,!0),f=r;do{if(c===0){ur&&!r&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ox(a)){c=Rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=e;c=Do;var F=T.current.memoizedState.isDehydrated;if(F&&(dr(T,g).flags|=256),g=Rf(T,g,!1),g!==2){if(Sf&&!F){T.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){dr(e,0),Xa(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ei,!Ba);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ql+300-M(),10<c)){if(Xa(r,n,ei,!Ba),gt(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=tg(T_.bind(null,r,a,Wn,jl,yf,n,ei,Ts,fr,Ba,f,"Throttled",-0,0),c);break t}T_(r,a,Wn,jl,yf,n,ei,Ts,fr,Ba,f,null,-0,0)}}break}while(!0);zi(e)}function T_(e,n,a,r,c,f,g,T,F,K,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},__(n,f,mt);var Gt=(f&62914560)===f?ql-M():(f&4194048)===f?S_-M():0;if(Gt=vS(mt,Gt),Gt!==null){ca=f,e.cancelPendingCommit=Gt(L_.bind(null,e,n,f,a,r,c,g,T,F,ft,mt,null,tt,ot)),Xa(e,f,g,!K);return}}L_(e,n,f,a,r,c,g,T,F)}function Ox(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,r){n&=~Mf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&rl(e,a,n)}function Zl(){return(Ne&6)===0?(Uo(0),!1):!0}function Af(){if(ge!==null){if(Be===0)var e=ge.return;else e=ge,Ji=ms=null,Gu(e),ir=null,ho=0,e=ge;for(;e!==null;)e_(e.alternate,e),e=e.return;ge=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Af(),qe=e,ge=a=Ki(e.current,null),Me=n,Be=0,ti=null,Ba=!1,ur=At(e,n),Sf=!1,fr=ei=Mf=Ts=Ha=nn=0,Wn=Do=null,yf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ot(r),f=1<<c;n|=e[c],r&=~f}return la=n,_l(),a}function b_(e,n){ce=null,L.H=Mo,n===nr||n===Tl?(n=Gp(),Be=3):n===Du?(n=Gp(),Be=4):Be=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ge===null&&(nn=1,Il(e,ui(n,e.current)))}function A_(){var e=Jn.current;return e===null?!0:(Me&4194048)===Me?pi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===pi:!1}function R_(){var e=L.H;return L.H=Mo,e===null?Mo:e}function C_(){var e=L.A;return L.A=Lx,e}function Kl(){nn=4,Ba||(Me&4194048)!==Me&&Jn.current!==null||(ur=!0),(Ha&134217727)===0&&(Ts&134217727)===0||qe===null||Xa(qe,Me,ei,!1)}function Rf(e,n,a){var r=Ne;Ne|=2;var c=R_(),f=C_();(qe!==e||Me!==n)&&(jl=null,dr(e,n)),n=!1;var g=nn;t:do try{if(Be!==0&&ge!==null){var T=ge,F=ti;switch(Be){case 8:Af(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var K=Be;if(Be=0,ti=null,pr(e,T,F,K),a&&ur){g=0;break t}break;default:K=Be,Be=0,ti=null,pr(e,T,F,K)}}Px(),g=nn;break}catch(ft){b_(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Ji=ms=null,Ne=r,L.H=c,L.A=f,ge===null&&(qe=null,Me=0,_l()),g}function Px(){for(;ge!==null;)D_(ge)}function zx(e,n){var a=Ne;Ne|=2;var r=R_(),c=C_();qe!==e||Me!==n?(jl=null,Yl=M()+500,dr(e,n)):ur=At(e,n);t:do try{if(Be!==0&&ge!==null){n=ge;var f=ti;e:switch(Be){case 1:Be=0,ti=null,pr(e,n,f,1);break;case 2:case 9:if(Bp(f)){Be=0,ti=null,w_(n);break}n=function(){Be!==2&&Be!==9||qe!==e||(Be=7),zi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Bp(f)?(Be=0,ti=null,w_(n)):(Be=0,ti=null,pr(e,n,f,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var T=ge;if(g?mg(g):T.stateNode.complete){Be=0,ti=null;var F=T.sibling;if(F!==null)ge=F;else{var K=T.return;K!==null?(ge=K,Ql(K)):ge=null}break e}}Be=0,ti=null,pr(e,n,f,5);break;case 6:Be=0,ti=null,pr(e,n,f,6);break;case 8:Af(),nn=6;break t;default:throw Error(s(462))}}Fx();break}catch(ft){b_(e,ft)}while(!0);return Ji=ms=null,L.H=r,L.A=c,Ne=a,ge!==null?0:(qe=null,Me=0,_l(),nn)}function Fx(){for(;ge!==null&&!qt();)D_(ge)}function D_(e){var n=$m(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?Ql(e):ge=n}function w_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Gu(n);default:e_(a,n),n=ge=Cp(n,la),n=$m(a,n,la)}e.memoizedProps=e.pendingProps,n===null?Ql(e):ge=n}function pr(e,n,a,r){Ji=ms=null,Gu(n),ir=null,ho=0;var c=n.return;try{if(bx(e,c,n,a,Me)){nn=1,Il(e,ui(a,e.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;nn=1,Il(e,ui(a,e.current)),ge=null;return}n.flags&32768?(Ee||r===1?e=!0:ur||(Me&536870912)!==0?e=!1:(Ba=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),U_(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){U_(n,Ba);return}e=n.return;var a=Cx(n.alternate,n,la);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);nn===0&&(nn=5)}function U_(e,n){do{var a=Dx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);nn=6,ge=null}function L_(e,n,a,r,c,f,g,T,F){e.cancelPendingCommit=null;do Jl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,Si(e,a,f,g,T,F),e===qe&&(ge=qe=null,Me=0),hr=n,Va=e,ca=a,Ef=f,Tf=c,M_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gx(lt,function(){return F_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=H.p,H.p=2,g=Ne,Ne|=4;try{wx(e,n,a)}finally{Ne=g,H.p=c,L.T=r}}mn=1,N_(),O_(),P_()}}function N_(){if(mn===1){mn=0;var e=Va,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=H.p;H.p=2;var c=Ne;Ne|=4;try{d_(n,e);var f=Bf,g=xp(e.containerInfo),T=f.focusedElem,F=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&vp(T.ownerDocument.documentElement,T)){if(F!==null&&cu(T)){var K=F.start,ft=F.end;if(ft===void 0&&(ft=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Gt=T.textContent.length,ne=Math.min(F.start,Gt),ke=F.end===void 0?ne:Math.min(F.end,Gt);!ot.extend&&ne>ke&&(g=ke,ke=ne,ne=g);var Y=gp(T,ne),V=gp(T,ke);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Z=mt.createRange();Z.setStart(Y.node,Y.offset),ot.removeAllRanges(),ne>ke?(ot.addRange(Z),ot.extend(V.node,V.offset)):(Z.setEnd(V.node,V.offset),ot.addRange(Z))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}uc=!!If,Bf=If=null}finally{Ne=c,H.p=r,L.T=a}}e.current=n,mn=2}}function O_(){if(mn===2){mn=0;var e=Va,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=H.p;H.p=2;var c=Ne;Ne|=4;try{l_(e,n.alternate,n)}finally{Ne=c,H.p=r,L.T=a}}mn=3}}function P_(){if(mn===4||mn===3){mn=0,w();var e=Va,n=hr,a=ca,r=M_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,hr=Va=null,z_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ga=null),Bs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=H.p,H.p=2,L.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{L.T=n,H.p=c}}(ca&3)!==0&&Jl(),zi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===bf?wo++:(wo=0,bf=e):wo=0,Uo(0)}}function z_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function Jl(){return N_(),O_(),P_(),F_()}function F_(){if(mn!==5)return!1;var e=Va,n=Ef;Ef=0;var a=Bs(ca),r=L.T,c=H.p;try{H.p=32>a?32:a,L.T=null,a=Tf,Tf=null;var f=Va,g=ca;if(mn=0,hr=Va=null,ca=0,(Ne&6)!==0)throw Error(s(331));var T=Ne;if(Ne|=4,v_(f.current),m_(f,f.current,g,a),Ne=T,Uo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{H.p=c,L.T=r,z_(e,n)}}function I_(e,n,a){n=ui(a,n),n=nf(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(Nn(e,2),zi(e))}function He(e,n,a){if(e.tag===3)I_(e,e,a);else for(;n!==null;){if(n.tag===3){I_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){e=ui(a,e),a=Bm(2),r=Pa(n,a,2),r!==null&&(Hm(a,r,n,e),Nn(r,2),zi(r));break}}n=n.return}}function Cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Nx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Sf=!0,c.add(a),e=Ix.bind(null,e,n,a),n.then(e,e))}function Ix(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Me&a)===a&&(nn===4||nn===3&&(Me&62914560)===Me&&300>M()-ql?(Ne&2)===0&&dr(e,0):Mf|=a,fr===Me&&(fr=0)),zi(e)}function B_(e,n){n===0&&(n=Fe()),e=hs(e,n),e!==null&&(Nn(e,n),zi(e))}function Bx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B_(e,a)}function Hx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),B_(e,a)}function Gx(e,n){return Te(e,n)}var $l=null,mr=null,Df=!1,tc=!1,wf=!1,ka=0;function zi(e){e!==mr&&e.next===null&&(mr===null?$l=mr=e:mr=mr.next=e),tc=!0,Df||(Df=!0,Xx())}function Uo(e,n){if(!wf&&tc){wf=!0;do for(var a=!1,r=$l;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,X_(r,f))}else f=Me,f=gt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,X_(r,f));r=r.next}while(a);wf=!1}}function Vx(){H_()}function H_(){tc=Df=!1;var e=0;ka!==0&&$x()&&(e=ka);for(var n=M(),a=null,r=$l;r!==null;){var c=r.next,f=G_(r,n);f===0?(r.next=null,a===null?$l=c:a.next=c,c===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(tc=!0)),r=c}mn!==0&&mn!==5||Uo(e),ka!==0&&(ka=0)}function G_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ot(f),T=1<<g,F=c[g];F===-1?((T&a)===0||(T&r)!==0)&&(c[g]=ae(T,n)):F<=n&&(e.expiredLanes|=T),f&=~T}if(n=qe,a=Me,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Pe(r),Bs(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return r=V_.bind(null,e),a=Te(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function V_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var r=Me;return r=gt(e,e===qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(E_(e,r,n),G_(e,M()),e.callbackNode!=null&&e.callbackNode===a?V_.bind(null,e):null)}function X_(e,n){if(Jl())return null;E_(e,n,!0)}function Xx(){eS(function(){(Ne&6)!==0?Te(ht,Vx):H_()})}function Uf(){if(ka===0){var e=tr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),ka=e}return ka}function k_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function W_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=k_((c[Mn]||null).action),g=r.submitter;g&&(n=(n=g[Mn]||null)?k_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new hl("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var F=g?W_(c,g):new FormData(c);Ku(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=g?W_(c,g):new FormData(c),Ku(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],Wx=Nf.toLowerCase(),qx=Nf[0].toUpperCase()+Nf.slice(1);Ei(Wx,"on"+qx)}Ei(yp,"onAnimationEnd"),Ei(Ep,"onAnimationIteration"),Ei(Tp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(lx,"onTransitionRun"),Ei(cx,"onTransitionStart"),Ei(ux,"onTransitionCancel"),Ei(bp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function q_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],F=T.instance,K=T.currentTarget;if(T=T.listener,F!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=K;try{f(c)}catch(ft){ml(ft)}c.currentTarget=null,f=F}else for(g=0;g<r.length;g++){if(T=r[g],F=T.instance,K=T.currentTarget,T=T.listener,F!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=K;try{f(c)}catch(ft){ml(ft)}c.currentTarget=null,f=F}}}}function ve(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var r=e+"__bubble";a.has(r)||(Y_(n,e,2,!1),a.add(r))}function Of(e,n,a){var r=0;n&&(r|=4),Y_(a,e,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[ec]){e[ec]=!0,q.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Of("selectionchange",!1,n))}}function Y_(e,n,a,r){switch(yg(n)){case 2:var c=MS;break;case 8:c=yS;break;default:c=Kf}a=c.bind(null,n,a,e),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function zf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=ba(T),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=f=g;continue t}T=T.parentNode}}r=r.return}Jd(function(){var K=f,ft=Jc(a),mt=[];t:{var tt=Ap.get(e);if(tt!==void 0){var ot=hl,Gt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ot=Hv;break;case"focusin":Gt="focus",ot=au;break;case"focusout":Gt="blur",ot=au;break;case"beforeblur":case"afterblur":ot=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Xv;break;case yp:case Ep:case Tp:ot=Uv;break;case bp:ot=Wv;break;case"scroll":case"scrollend":ot=Av;break;case"wheel":ot=Yv;break;case"copy":case"cut":case"paste":ot=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ip;break;case"toggle":case"beforetoggle":ot=Zv}var ne=(n&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),Y=ne?tt!==null?tt+"Capture":null:tt;ne=[];for(var V=K,Z;V!==null;){var pt=V;if(Z=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Z===null||Y===null||(pt=$r(V,Y),pt!=null&&ne.push(No(V,pt,Z))),ke)break;V=V.return}0<ne.length&&(tt=new ot(tt,Gt,null,a,ft),mt.push({event:tt,listeners:ne}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==Qc&&(Gt=a.relatedTarget||a.fromElement)&&(ba(Gt)||Gt[Mi]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=K,Gt=Gt?ba(Gt):null,Gt!==null&&(ke=u(Gt),ne=Gt.tag,Gt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(ot=null,Gt=K),ot!==Gt)){if(ne=ep,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=ip,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),ke=ot==null?tt:ls(ot),Z=Gt==null?tt:ls(Gt),tt=new ne(pt,V+"leave",ot,a,ft),tt.target=ke,tt.relatedTarget=Z,pt=null,ba(ft)===K&&(ne=new ne(Y,V+"enter",Gt,a,ft),ne.target=Z,ne.relatedTarget=ke,pt=ne),ke=pt,ot&&Gt)e:{for(ne=jx,Y=ot,V=Gt,Z=0,pt=Y;pt;pt=ne(pt))Z++;pt=0;for(var $t=V;$t;$t=ne($t))pt++;for(;0<Z-pt;)Y=ne(Y),Z--;for(;0<pt-Z;)V=ne(V),pt--;for(;Z--;){if(Y===V||V!==null&&Y===V.alternate){ne=Y;break e}Y=ne(Y),V=ne(V)}ne=null}else ne=null;ot!==null&&j_(mt,tt,ot,ne,!1),Gt!==null&&ke!==null&&j_(mt,ke,Gt,ne,!0)}}t:{if(tt=K?ls(K):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Re=fp;else if(cp(tt))if(hp)Re=sx;else{Re=ix;var Yt=nx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?K&&yi(K.elementType)&&(Re=fp):Re=ax;if(Re&&(Re=Re(e,K))){up(mt,Re,a,ft);break t}Yt&&Yt(e,tt,K),e==="focusout"&&K&&tt.type==="number"&&K.memoizedProps.value!=null&&En(tt,"number",tt.value)}switch(Yt=K?ls(K):window,e){case"focusin":(cp(Yt)||Yt.contentEditable==="true")&&(qs=Yt,uu=K,oo=null);break;case"focusout":oo=uu=qs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Sp(mt,a,ft);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":Sp(mt,a,ft)}var he;if(ru)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ws?op(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(ap&&a.locale!=="ko"&&(Ws||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ws&&(he=$d()):(Ca=ft,eu="value"in Ca?Ca.value:Ca.textContent,Ws=!0)),Yt=nc(K,ye),0<Yt.length&&(ye=new np(ye,e,null,a,ft),mt.push({event:ye,listeners:Yt}),he?ye.data=he:(he=lp(a),he!==null&&(ye.data=he)))),(he=Qv?Jv(e,a):$v(e,a))&&(ye=nc(K,"onBeforeInput"),0<ye.length&&(Yt=new np("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:ye}),Yt.data=he)),kx(mt,e,K,a,ft)}q_(mt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=$r(e,a),c!=null&&r.unshift(No(e,c,f)),c=$r(e,n),c!=null&&r.push(No(e,c,f))),e.tag===3)return r;e=e.return}return[]}function jx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j_(e,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,F=T.alternate,K=T.stateNode;if(T=T.tag,F!==null&&F===r)break;T!==5&&T!==26&&T!==27||K===null||(F=K,c?(K=$r(a,f),K!=null&&g.unshift(No(a,K,F))):c||(K=$r(a,f),K!=null&&g.push(No(a,K,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Zx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Z_(e){return(typeof e=="string"?e:""+e).replace(Zx,`
`).replace(Kx,"")}function K_(e,n){return n=Z_(n),Z_(e)===n}function Xe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(e,""+r);break;case"className":te(e,"class",r);break;case"tabIndex":te(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,a,r);break;case"style":Vs(e,r,f);break;case"data":if(n!=="object"){te(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ll(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",c.name,c,null),Xe(e,n,"formEncType",c.formEncType,c,null),Xe(e,n,"formMethod",c.formMethod,c,null),Xe(e,n,"formTarget",c.formTarget,c,null)):(Xe(e,n,"encType",c.encType,c,null),Xe(e,n,"method",c.method,c,null),Xe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ll(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),kt(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,kt(e,a,r))}}function Ff(e,n,a,r,c,f){switch(a){case"style":Vs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?pn(e,r):(typeof r=="number"||typeof r=="bigint")&&pn(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):kt(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,g,a,null)}}c&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=g=c=null,F=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":g=ft;break;case"checked":F=ft;break;case"defaultChecked":K=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Xe(e,n,r,ft,a,null)}}Yi(e,f,T,F,K,g,c,!1);return;case"select":ve("invalid",e),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Xe(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!r,n!=null?li(e,!!r,n,!1):a!=null&&li(e,!!r,a,!0);return;case"textarea":ve("invalid",e),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(e,n,g,T,a,null)}Tn(e,r,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,F,r,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<Lo.length;r++)ve(Lo[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,K,r,a,null)}return;default:if(yi(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Ff(e,n,ft,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Xe(e,n,T,r,a,null))}function Qx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,F=null,K=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(ot)||Xe(e,n,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":K=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Xe(e,n,tt,ot,r,mt)}}yn(e,g,T,F,K,ft,f,c);return;case"select":ot=g=T=tt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,F)}for(c in r)if(f=r[c],F=a[c],r.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==F&&Xe(e,n,c,f,r,F)}n=T,a=g,r=ot,tt!=null?li(e,!!a,tt,!1):!!r!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(e,n,T,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(e,n,g,c,r,f)}Ie(e,tt,ot);return;case"option":for(var Gt in a)if(tt=a[Gt],a.hasOwnProperty(Gt)&&tt!=null&&!r.hasOwnProperty(Gt))switch(Gt){case"selected":e.selected=!1;break;default:Xe(e,n,Gt,null,r,tt)}for(F in r)if(tt=r[F],ot=a[F],r.hasOwnProperty(F)&&tt!==ot&&(tt!=null||ot!=null))switch(F){case"selected":e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Xe(e,n,F,tt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)tt=a[ne],a.hasOwnProperty(ne)&&tt!=null&&!r.hasOwnProperty(ne)&&Xe(e,n,ne,null,r,tt);for(K in r)if(tt=r[K],ot=a[K],r.hasOwnProperty(K)&&tt!==ot&&(tt!=null||ot!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Xe(e,n,K,tt,r,ot)}return;default:if(yi(n)){for(var ke in a)tt=a[ke],a.hasOwnProperty(ke)&&tt!==void 0&&!r.hasOwnProperty(ke)&&Ff(e,n,ke,void 0,r,tt);for(ft in r)tt=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Ff(e,n,ft,tt,r,ot);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&Xe(e,n,Y,null,r,tt);for(mt in r)tt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Xe(e,n,mt,tt,r,ot)}function Q_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Q_(g)){for(g=0,T=c.responseEnd,r+=1;r<a.length;r++){var F=a[r],K=F.startTime;if(K>T)break;var ft=F.transferSize,mt=F.initiatorType;ft&&Q_(mt)&&(F=F.responseEnd,g+=ft*(F<T?1:(T-K)/(F-K)))}if(--r,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var If=null,Bf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function J_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function $x(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var tg=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(e){return eg.resolve(null).then(e).catch(nS)}:tg;function nS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function ng(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),xr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[os]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Oo(e.ownerDocument.body);a=c}while(a);xr(n)}function ig(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[os])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function aS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function ag(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Xf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function sg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function rg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function og(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jr(e)}var _i=new Map,lg=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=H.d;H.d={f:rS,r:oS,D:lS,C:cS,L:uS,m:fS,X:dS,S:hS,M:pS};function rS(){var e=ua.f(),n=Zl();return e||n}function oS(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):ua.r(e)}var _r=typeof document>"u"?null:document;function cg(e,n,a){var r=_r;if(r&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),lg.has(c)||(lg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),wn(n,"link",e),b(n),r.head.appendChild(n)))}}function lS(e){ua.D(e),cg("dns-prefetch",e,null)}function cS(e,n){ua.C(e,n),cg("preconnect",e,n)}function uS(e,n,a){ua.L(e,n,a);var r=_r;if(r&&e&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(e)+'"]';var f=c;switch(n){case"style":f=gr(e);break;case"script":f=vr(e)}_i.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Po(f))||n==="script"&&r.querySelector(zo(f))||(n=r.createElement("link"),wn(n,"link",e),b(n),r.head.appendChild(n)))}}function fS(e,n){ua.m(e,n);var a=_r;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!_i.has(f)&&(e=_({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}r=a.createElement("link"),wn(r,"link",e),b(r),a.head.appendChild(r)}}}function hS(e,n,a){ua.S(e,n,a);var r=_r;if(r&&e){var c=Ra(r).hoistableStyles,f=gr(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(Po(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&qf(e,a);var F=g=r.createElement("link");b(F),wn(F,"link",e),F._p=new Promise(function(K,ft){F.onload=K,F.onerror=ft}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,sc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function dS(e,n){ua.X(e,n);var a=_r;if(a&&e){var r=Ra(a).hoistableScripts,c=vr(e),f=r.get(c);f||(f=a.querySelector(zo(c)),f||(e=_({src:e,async:!0},n),(n=_i.get(c))&&Yf(e,n),f=a.createElement("script"),b(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function pS(e,n){ua.M(e,n);var a=_r;if(a&&e){var r=Ra(a).hoistableScripts,c=vr(e),f=r.get(c);f||(f=a.querySelector(zo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(c))&&Yf(e,n),f=a.createElement("script"),b(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ug(e,n,a,r){var c=(c=et.current)?ac(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=Ra(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var f=Ra(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Po(e)))&&!f._p&&(g.instance=f,g.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||mS(c,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Ra(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+se(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function fg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function mS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),b(n),e.head.appendChild(n))}function vr(e){return'[src="'+se(e)+'"]'}function zo(e){return"script[async]"+e}function hg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,b(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),b(r),wn(r,"style",c),sc(r,a.precedence,e),n.instance=r;case"stylesheet":c=gr(a.href);var f=e.querySelector(Po(c));if(f)return n.state.loading|=4,n.instance=f,b(f),f;r=fg(a),(c=_i.get(c))&&qf(r,c),f=(e.ownerDocument||e).createElement("link"),b(f);var g=f;return g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),wn(f,"link",r),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(c=e.querySelector(zo(f)))?(n.instance=c,b(c),c):(r=a,(c=_i.get(f))&&(r=_({},a),Yf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),b(c),wn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,sc(r,a.precedence,e));return n.instance}function sc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function dg(e,n,a){if(rc===null){var r=new Map,c=rc=new Map;c.set(a,r)}else c=rc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[os]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function pg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gr(r.href),f=n.querySelector(Po(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,r=fg(r),(c=_i.get(c))&&qf(r,c),f=f.createElement("link"),b(f);var g=f;g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function vS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*Jx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(xS,e),lc=null,oc.call(e))}function xS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var r=a.get(null);else{a=new Map,lc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=oc.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:N,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function SS(e,n,a,r,c,f,g,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function _g(e,n,a,r,c,f,g,T,F,K,ft,mt){return e=new SS(e,n,a,g,F,K,ft,mt,T),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},wu(f),e}function gg(e){return e?(e=Zs,e):Zs}function vg(e,n,a,r,c,f){c=gg(c),r.context===null?r.context=c:r.pendingContext=c,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(e,r,n),a!==null&&(qn(a,e,n),mo(a,e,n))}function xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){xg(e,n),(e=e.alternate)&&xg(e,n)}function Sg(e){if(e.tag===13||e.tag===31){var n=hs(e,67108864);n!==null&&qn(n,e,67108864),Zf(e,67108864)}}function Mg(e){if(e.tag===13||e.tag===31){var n=ni();n=Zr(n);var a=hs(e,n);a!==null&&qn(a,e,n),Zf(e,n)}}var uc=!0;function MS(e,n,a,r){var c=L.T;L.T=null;var f=H.p;try{H.p=2,Kf(e,n,a,r)}finally{H.p=f,L.T=c}}function yS(e,n,a,r){var c=L.T;L.T=null;var f=H.p;try{H.p=8,Kf(e,n,a,r)}finally{H.p=f,L.T=c}}function Kf(e,n,a,r){if(uc){var c=Qf(r);if(c===null)zf(e,n,r,fc,a),Eg(e,r);else if(TS(c,e,n,a,r))r.stopPropagation();else if(Eg(e,r),n&4&&-1<ES.indexOf(e)){for(;c!==null;){var f=Aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var F=1<<31-Ot(g);T.entanglements[1]|=F,g&=~F}zi(f),(Ne&6)===0&&(Yl=M()+500,Uo(0))}}break;case 31:case 13:T=hs(f,2),T!==null&&qn(T,f,2),Zl(),Zf(f,2)}if(f=Qf(r),f===null&&zf(e,n,r,fc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else zf(e,n,r,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var fc=null;function Jf(e){if(fc=null,e=ba(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var $f=!1,qa=null,Ya=null,ja=null,Io=new Map,Bo=new Map,Za=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Ho(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Aa(n),n!==null&&Sg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function TS(e,n,a,r,c){switch(n){case"focusin":return qa=Ho(qa,e,n,a,r,c),!0;case"dragenter":return Ya=Ho(Ya,e,n,a,r,c),!0;case"mouseover":return ja=Ho(ja,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Io.set(f,Ho(Io.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Bo.set(f,Ho(Bo.get(f)||null,e,n,a,r,c)),!0}return!1}function Tg(e){var n=ba(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Li(e.priority,function(){Mg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Li(e.priority,function(){Mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Aa(a),n!==null&&Sg(n),e.blockedOn=a,!1;n.shift()}return!0}function bg(e,n,a){hc(e)&&a.delete(n)}function bS(){$f=!1,qa!==null&&hc(qa)&&(qa=null),Ya!==null&&hc(Ya)&&(Ya=null),ja!==null&&hc(ja)&&(ja=null),Io.forEach(bg),Bo.forEach(bg)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bS)))}var pc=null;function Ag(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function xr(e){function n(F){return dc(F,e)}qa!==null&&dc(qa,e),Ya!==null&&dc(Ya,e),ja!==null&&dc(ja,e),Io.forEach(n),Bo.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Tg(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[Mn]||null;if(typeof f=="function")g||Ag(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Mn]||null)T=g.formAction;else if(Jf(c)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),Ag(a)}}}function Rg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function th(e){this._internalRoot=e}mc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();vg(a,r,e,n,null,null)},mc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vg(e.current,2,null,e,null,null),Zl(),n[Mi]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Tg(e)}};var Cg=t.version;if(Cg!=="19.2.4")throw Error(s(527,Cg,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var AS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{yt=_c.inject(AS),Et=_c}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Pm,f=zm,g=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=_g(e,1,!1,null,null,a,r,null,c,f,g,Rg),e[Mi]=n.current,Pf(e),new th(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Pm,g=zm,T=Fm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=_g(e,1,!0,n,a??null,r,c,F,f,g,T,Rg),n.context=gg(null),a=n.current,r=ni(),r=Zr(r),c=Oa(r),c.callback=null,Pa(a,c,r),a=r,n.current.lanes=a,Nn(n,a),zi(n),e[Mi]=n.current,Pf(e),new mc(n)},Vo.version="19.2.4",Vo}var Ig;function zS(){if(Ig)return ih.exports;Ig=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=PS(),ih.exports}var FS=zS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="182",Ir={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IS=0,Bg=1,BS=2,Bc=1,HS=2,Fr=3,Ma=0,Zn=1,_a=2,va=0,Br=1,Hg=2,Gg=3,Vg=4,GS=5,Us=100,VS=101,XS=102,kS=103,WS=104,qS=200,YS=201,jS=202,ZS=203,Hh=204,Gh=205,KS=206,QS=207,JS=208,$S=209,tM=210,eM=211,nM=212,iM=213,aM=214,Vh=0,Xh=1,kh=2,Gr=3,Wh=4,qh=5,Yh=6,jh=7,G0=0,sM=1,rM=2,Vi=0,V0=1,X0=2,k0=3,zd=4,W0=5,q0=6,Y0=7,j0=300,Ps=301,Vr=302,Zh=303,Kh=304,jc=306,Qh=1e3,ga=1001,Jh=1002,Un=1003,oM=1004,gc=1005,Fn=1006,oh=1007,Ns=1008,ri=1009,Z0=1010,K0=1011,Qo=1012,Fd=1013,Wi=1014,Hi=1015,ya=1016,Id=1017,Bd=1018,Jo=1020,Q0=35902,J0=35899,$0=1021,tv=1022,wi=1023,Ea=1026,Os=1027,ev=1028,Hd=1029,Xr=1030,Gd=1031,Vd=1033,Hc=33776,Gc=33777,Vc=33778,Xc=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,sd=37496,rd=37488,od=37489,ld=37490,cd=37491,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,_d=37814,gd=37815,vd=37816,xd=37817,Sd=37818,Md=37819,yd=37820,Ed=37821,Td=36492,bd=36494,Ad=36495,Rd=36283,Cd=36284,Dd=36285,wd=36286,lM=3200,nv=0,cM=1,as="",si="srgb",kr="srgb-linear",qc="linear",Ge="srgb",Sr=7680,Xg=519,uM=512,fM=513,hM=514,Xd=515,dM=516,pM=517,kd=518,mM=519,kg=35044,Wg="300 es",Gi=2e3,Yc=2001;function iv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function $o(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _M(){const o=$o("canvas");return o.style.display="block",o}const qg={};function Yg(...o){const t="THREE."+o.shift();console.log(t,...o)}function re(...o){const t="THREE."+o.shift();console.warn(t,...o)}function De(...o){const t="THREE."+o.shift();console.error(t,...o)}function tl(...o){const t=o.join(" ");t in qg||(qg[t]=!0,re(...o))}function gM(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Ud=180/Math.PI;function nl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function xe(o,t,i){return Math.max(t,Math.min(i,o))}function vM(o,t){return(o%t+t)%t}function lh(o,t,i){return(1-i)*o+i*t}function Xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:kc};class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=u[h+0],E=u[h+1],A=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=A,t[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==A){let y=m*S+p*E+v*A+_*C;y<0&&(S=-S,E=-E,A=-A,C=-C,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),N=Math.sin(P);x=Math.sin(x*P)/N,d=Math.sin(d*P)/N,m=m*x+S*d,p=p*x+E*d,v=v*x+A*d,_=_*x+C*d}else{m=m*x+S*d,p=p*x+E*d,v=v*x+A*d,_=_*x+C*d;const P=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=P,p*=P,v*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=u[h],S=u[h+1],E=u[h+2],A=u[h+3];return t[i]=d*A+v*_+m*E-p*S,t[i+1]=m*A+v*S+p*_-d*E,t[i+2]=p*A+v*E+d*S-m*_,t[i+3]=v*A-d*_-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(u/2),S=m(s/2),E=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"YXZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"ZXY":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"ZYX":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"YZX":this._x=S*v*_+p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_-S*E*A;break;case"XZY":this._x=S*v*_-p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_+S*E*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(jg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(jg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-u*_,this.z=l+m*_+u*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new J,jg=new zs;class de{constructor(t,i,s,l,u,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],E=s[5],A=s[8],C=l[0],y=l[3],x=l[6],P=l[1],N=l[4],O=l[7],I=l[2],B=l[5],z=l[8];return u[0]=h*C+d*P+m*I,u[3]=h*y+d*N+m*B,u[6]=h*x+d*O+m*z,u[1]=p*C+v*P+_*I,u[4]=p*y+v*N+_*B,u[7]=p*x+v*O+_*z,u[2]=S*C+E*P+A*I,u[5]=S*y+E*N+A*B,u[8]=S*x+E*O+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,S=d*m-v*u,E=p*u-h*m,A=i*_+s*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new de,Zg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SM(){const o={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ge&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[kr]:{primaries:t,whitePoint:s,transfer:qc,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Ae=SM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Mr;class MM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Mr===void 0&&(Mr=$o("canvas")),Mr.width=t.width,Mr.height=t.height;const l=Mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$o("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=xa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(fh(l[h].image)):u.push(fh(l[h]))}else u=fh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?MM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let EM=0;const hh=new J;class In extends Fs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ga,l=ga,u=Fn,h=Ns,d=wi,m=ri,p=In.DEFAULT_ANISOTROPY,v=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=nl(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=j0;In.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],A=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(E+1)/2,I=(x+1)/2,B=(v+S)/4,z=(_+C)/4,Q=(A+y)/4;return N>O&&N>I?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=B/s,u=z/s):O>I?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=B/l,u=Q/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=z/u,l=Q/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-A)*(y-A)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-A)/P,this.y=(_-C)/P,this.z=(S-v)/P,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Fs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends TM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class av extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(u,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),xc.subVectors(this.max,ko),yr.subVectors(t.a,ko),Er.subVectors(t.b,ko),Tr.subVectors(t.c,ko),Qa.subVectors(Er,yr),Ja.subVectors(Tr,Er),bs.subVectors(yr,Tr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-bs.z,bs.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,bs.z,0,-bs.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-bs.y,bs.x,0];return!dh(i,yr,Er,Tr,xc)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,yr,Er,Tr,xc))?!1:(Sc.crossVectors(Qa,Ja),i=[Sc.x,Sc.y,Sc.z],dh(i,yr,Er,Tr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,vc=new il,yr=new J,Er=new J,Tr=new J,Qa=new J,Ja=new J,bs=new J,ko=new J,xc=new J,Sc=new J,As=new J;function dh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){As.fromArray(o,u);const d=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),p=i.dot(As),v=s.dot(As);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const AM=new il,Wo=new J,ph=new J;class qd{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):AM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(ph)),this.expandByPoint(Wo.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new J,mh=new J,Mc=new J,$a=new J,_h=new J,yc=new J,gh=new J;class sv{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ha.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){mh.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(mh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Mc),d=$a.dot(this.direction),m=-$a.dot(Mc),p=$a.lengthSq(),v=Math.abs(1-h*h);let _,S,E,A;if(v>0)if(_=h*m-d,S=h*d-m,A=u*v,_>=0)if(S>=-A)if(S<=A){const C=1/v;_*=C,S*=C,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(mh).addScaledVector(Mc,S),E}intersectSphere(t,i){ha.subVectors(t.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,h=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,h=(t.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,i,s,l,u){_h.subVectors(i,t),yc.subVectors(s,t),gh.crossVectors(_h,yc);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,t);const m=d*this.direction.dot(yc.crossVectors($a,yc));if(m<0)return null;const p=d*this.direction.dot(_h.cross($a));if(p<0||m+p>h)return null;const v=-d*$a.dot(gh);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y)}set(t,i,s,l,u,h,d,m,p,v,_,S,E,A,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),u=1/br.setFromMatrixColumn(t,1).length(),h=1/br.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=h*v,E=h*_,A=d*v,C=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=E*d-A,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*v,E=h*_,A=d*v,C=d*_;i[0]=m*v,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=C-S*_,i[8]=A*_+E,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=E*_+A,i[10]=S-C*_}else if(t.order==="XZY"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=h*v,i[9]=E*_-A,i[2]=A*_-E,i[6]=d*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RM,t,CM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ts.crossVectors(s,ii),ts.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ts.crossVectors(s,ii)),ts.normalize(),Ec.crossVectors(ii,ts),l[0]=ts.x,l[4]=Ec.x,l[8]=ii.x,l[1]=ts.y,l[5]=Ec.y,l[9]=ii.y,l[2]=ts.z,l[6]=Ec.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],E=s[13],A=s[2],C=s[6],y=s[10],x=s[14],P=s[3],N=s[7],O=s[11],I=s[15],B=l[0],z=l[4],Q=l[8],R=l[12],D=l[1],X=l[5],st=l[9],at=l[13],dt=l[2],ut=l[6],L=l[10],H=l[14],it=l[3],Mt=l[7],xt=l[11],U=l[15];return u[0]=h*B+d*D+m*dt+p*it,u[4]=h*z+d*X+m*ut+p*Mt,u[8]=h*Q+d*st+m*L+p*xt,u[12]=h*R+d*at+m*H+p*U,u[1]=v*B+_*D+S*dt+E*it,u[5]=v*z+_*X+S*ut+E*Mt,u[9]=v*Q+_*st+S*L+E*xt,u[13]=v*R+_*at+S*H+E*U,u[2]=A*B+C*D+y*dt+x*it,u[6]=A*z+C*X+y*ut+x*Mt,u[10]=A*Q+C*st+y*L+x*xt,u[14]=A*R+C*at+y*H+x*U,u[3]=P*B+N*D+O*dt+I*it,u[7]=P*z+N*X+O*ut+I*Mt,u[11]=P*Q+N*st+O*L+I*xt,u[15]=P*R+N*at+O*H+I*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],E=t[14],A=t[3],C=t[7],y=t[11],x=t[15],P=m*E-p*S,N=d*E-p*_,O=d*S-m*_,I=h*E-p*v,B=h*S-m*v,z=h*_-d*v;return i*(C*P-y*N+x*O)-s*(A*P-y*I+x*B)+l*(A*N-C*I+x*z)-u*(A*O-C*B+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],E=t[11],A=t[12],C=t[13],y=t[14],x=t[15],P=_*y*p-C*S*p+C*m*E-d*y*E-_*m*x+d*S*x,N=A*S*p-v*y*p-A*m*E+h*y*E+v*m*x-h*S*x,O=v*C*p-A*_*p+A*d*E-h*C*E-v*d*x+h*_*x,I=A*_*m-v*C*m-A*d*S+h*C*S+v*d*y-h*_*y,B=i*P+s*N+l*O+u*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(C*S*u-_*y*u-C*l*E+s*y*E+_*l*x-s*S*x)*z,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*x+s*m*x)*z,t[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*E-s*m*E)*z,t[4]=N*z,t[5]=(v*y*u-A*S*u+A*l*E-i*y*E-v*l*x+i*S*x)*z,t[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*x-i*m*x)*z,t[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*E+i*m*E)*z,t[8]=O*z,t[9]=(A*_*u-v*C*u-A*s*E+i*C*E+v*s*x-i*_*x)*z,t[10]=(h*C*u-A*d*u+A*s*p-i*C*p-h*s*x+i*d*x)*z,t[11]=(v*d*u-h*_*u-v*s*p+i*_*p+h*s*E-i*d*E)*z,t[12]=I*z,t[13]=(v*C*l-A*_*l+A*s*S-i*C*S-v*s*y+i*_*y)*z,t[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*y-i*d*y)*z,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,_=d+d,S=u*p,E=u*v,A=u*_,C=h*v,y=h*_,x=d*_,P=m*p,N=m*v,O=m*_,I=s.x,B=s.y,z=s.z;return l[0]=(1-(C+x))*I,l[1]=(E+O)*I,l[2]=(A-N)*I,l[3]=0,l[4]=(E-O)*B,l[5]=(1-(S+x))*B,l[6]=(y+P)*B,l[7]=0,l[8]=(A+N)*z,l[9]=(y-P)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=br.set(l[0],l[1],l[2]).length();const h=br.set(l[4],l[5],l[6]).length(),d=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ri.copy(this);const p=1/u,v=1/h,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Gi,m=!1){const p=this.elements,v=2*u/(i-t),_=2*u/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let A,C;if(m)A=u/(h-u),C=h*u/(h-u);else if(d===Gi)A=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Yc)A=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Gi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,C;if(m)A=1/(h-u),C=h/(h-u);else if(d===Gi)A=-2/(h-u),C=-(h+u)/(h-u);else if(d===Yc)A=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const br=new J,Ri=new sn,RM=new J(0,0,0),CM=new J(1,1,1),ts=new J,Ec=new J,ii=new J,Qg=new sn,Jg=new zs;class Ui{constructor(t=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const $g=new J,Ar=new zs,da=new sn,Tc=new J,qo=new J,wM=new J,UM=new zs,t0=new J(1,0,0),e0=new J(0,1,0),n0=new J(0,0,1),i0={type:"added"},LM={type:"removed"},Rr={type:"childadded",child:null},vh={type:"childremoved",child:null};class Ln extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new J,i=new Ui,s=new zs,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new de}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(t0,t)}rotateY(t){return this.rotateOnAxis(e0,t)}rotateZ(t){return this.rotateOnAxis(n0,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t0,t)}translateY(t){return this.translateOnAxis(e0,t)}translateZ(t){return this.translateOnAxis(n0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Tc.copy(t):Tc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(qo,Tc,this.up):da.lookAt(Tc,qo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(da),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(LM),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,wM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,UM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),S=h(t.skeletons),E=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new J(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,pa=new J,xh=new J,ma=new J,Cr=new J,Dr=new J,a0=new J,Sh=new J,Mh=new J,yh=new J,Eh=new an,Th=new an,bh=new an;class Di{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ci.subVectors(l,i),pa.subVectors(s,i),xh.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(pa),m=Ci.dot(xh),p=pa.dot(pa),v=pa.dot(xh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-d*v)*S,A=(h*v-d*m)*S;return u.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Eh.setScalar(0),Th.setScalar(0),bh.setScalar(0),Eh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,s),bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(Th,u.y),h.addScaledVector(bh,u.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),pa.subVectors(t,i),Ci.cross(pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Di.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Cr.subVectors(l,s),Dr.subVectors(u,s),Sh.subVectors(t,s);const m=Cr.dot(Sh),p=Dr.dot(Sh);if(m<=0&&p<=0)return i.copy(s);Mh.subVectors(t,l);const v=Cr.dot(Mh),_=Dr.dot(Mh);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Cr,h);yh.subVectors(t,u);const E=Cr.dot(yh),A=Dr.dot(yh);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Dr,d);const y=v*A-E*_;if(y<=0&&_-v>=0&&E-A>=0)return a0.subVectors(u,l),d=(_-v)/(_-v+(E-A)),i.copy(l).addScaledVector(a0,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Cr,h).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Ah(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=vM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Ah(h,u,t+1/3),this.g=Ah(h,u,t),this.b=Ah(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=ov[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ae.workingToColorSpace(zn.copy(this),t),Math.round(xe(zn.r*255,0,255))*65536+Math.round(xe(zn.g*255,0,255))*256+Math.round(xe(zn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,u=zn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=si){Ae.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(bc);const s=lh(es.h,bc.h,i),l=lh(es.s,bc.s,i),u=lh(es.l,bc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Oe;Oe.NAMES=ov;let NM=0;class al extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Br,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==Ma&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hh&&(s.blendSrc=this.blendSrc),this.blendDst!==Gh&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lv extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,Ac=new ue;let OM=0;class ki{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=kg,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kg&&(t.usage=this.usage),t}}class cv extends ki{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uv extends ki{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Sa extends ki{constructor(t,i,s){super(new Float32Array(t),i,s)}}let PM=0;const gi=new sn,Rh=new Ln,wr=new J,ai=new il,Yo=new il,Sn=new J;class Ta extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iv(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Rh.lookAt(t),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sa(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,Yo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Yo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Yo.min),ai.expandByPoint(Yo.max))}ai.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(wr.fromBufferAttribute(t,p),Sn.add(wr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new J,m[Q]=new J;const p=new J,v=new J,_=new J,S=new ue,E=new ue,A=new ue,C=new J,y=new J;function x(Q,R,D){p.fromBufferAttribute(s,Q),v.fromBufferAttribute(s,R),_.fromBufferAttribute(s,D),S.fromBufferAttribute(u,Q),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,D),v.sub(p),_.sub(p),E.sub(S),A.sub(S);const X=1/(E.x*A.y-A.x*E.y);isFinite(X)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(X),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(X),d[Q].add(C),d[R].add(C),d[D].add(C),m[Q].add(y),m[R].add(y),m[D].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Q=0,R=P.length;Q<R;++Q){const D=P[Q],X=D.start,st=D.count;for(let at=X,dt=X+st;at<dt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new J,O=new J,I=new J,B=new J;function z(Q){I.fromBufferAttribute(l,Q),B.copy(I);const R=d[Q];N.copy(R),N.sub(I.multiplyScalar(I.dot(R))).normalize(),O.crossVectors(B,R);const X=O.dot(m[Q])<0?-1:1;h.setXYZW(Q,N.x,N.y,N.z,X)}for(let Q=0,R=P.length;Q<R;++Q){const D=P[Q],X=D.start,st=D.count;for(let at=X,dt=X+st;at<dt;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,v=new J,_=new J;if(t)for(let S=0,E=t.count;S<E;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let E=0,A=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*v;for(let x=0;x<v;x++)S[A++]=p[E++]}return new ki(S,v,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s0=new sn,Rs=new sv,Rc=new qd,r0=new J,Cc=new J,Dc=new J,wc=new J,Ch=new J,Uc=new J,o0=new J,Lc=new J;class xi extends Ln{constructor(t=new Ta,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],_=u[m];v!==0&&(Ch.fromBufferAttribute(_,t),h?Uc.addScaledVector(Ch,v):Uc.addScaledVector(Ch.sub(i),v))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(u),Rs.copy(t.ray).recast(t.near),!(Rc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Rc,r0)===null||Rs.origin.distanceToSquared(r0)>(t.far-t.near)**2))&&(s0.copy(u).invert(),Rs.copy(t.ray).applyMatrix4(s0),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=h[y.materialIndex],P=Math.max(y.start,E.start),N=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let O=P,I=N;O<I;O+=3){const B=d.getX(O),z=d.getX(O+1),Q=d.getX(O+2);l=Nc(this,x,t,s,p,v,_,B,z,Q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=A,x=C;y<x;y+=3){const P=d.getX(y),N=d.getX(y+1),O=d.getX(y+2);l=Nc(this,h,t,s,p,v,_,P,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const y=S[A],x=h[y.materialIndex],P=Math.max(y.start,E.start),N=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let O=P,I=N;O<I;O+=3){const B=O,z=O+1,Q=O+2;l=Nc(this,x,t,s,p,v,_,B,z,Q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=A,x=C;y<x;y+=3){const P=y,N=y+1,O=y+2;l=Nc(this,h,t,s,p,v,_,P,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zM(o,t,i,s,l,u,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Ma,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:o}}function Nc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Cc),o.getVertexPosition(m,Dc),o.getVertexPosition(p,wc);const v=zM(o,t,i,s,Cc,Dc,wc,o0);if(v){const _=new J;Di.getBarycoord(o0,Cc,Dc,wc,_),l&&(v.uv=Di.getInterpolatedAttribute(l,d,m,p,_,new ue)),u&&(v.uv1=Di.getInterpolatedAttribute(u,d,m,p,_,new ue)),h&&(v.normal=Di.getInterpolatedAttribute(h,d,m,p,_,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Di.getNormal(Cc,Dc,wc,S.normal),v.face=S,v.barycoord=_}return v}class sl extends Ta{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,E=0;A("z","y","x",-1,-1,s,i,t,h,u,0),A("z","y","x",1,-1,s,i,-t,h,u,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Sa(p,3)),this.setAttribute("normal",new Sa(v,3)),this.setAttribute("uv",new Sa(_,2));function A(C,y,x,P,N,O,I,B,z,Q,R){const D=O/z,X=I/Q,st=O/2,at=I/2,dt=B/2,ut=z+1,L=Q+1;let H=0,it=0;const Mt=new J;for(let xt=0;xt<L;xt++){const U=xt*X-at;for(let nt=0;nt<ut;nt++){const _t=nt*D-st;Mt[C]=_t*P,Mt[y]=U*N,Mt[x]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[x]=B>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),_.push(nt/z),_.push(1-xt/Q),H+=1}}for(let xt=0;xt<Q;xt++)for(let U=0;U<z;U++){const nt=S+U+ut*xt,_t=S+U+ut*(xt+1),bt=S+(U+1)+ut*(xt+1),It=S+(U+1)+ut*xt;m.push(nt,_t,It),m.push(_t,bt,It),it+=6}d.addGroup(E,it,R),E+=it,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=Wr(o[i]);for(const l in s)t[l]=s[l]}return t}function FM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function fv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const IM={clone:Wr,merge:Hn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=FM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hv extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new J,l0=new ue,c0=new ue;class vi extends hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,l0,c0),i.subVectors(c0,l0)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(kc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class GM extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const u=new vi(Ur,Lr,t,i);u.layers=this.layers,this.add(u);const h=new vi(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const d=new vi(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new vi(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new vi(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,S,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class dv extends In{constructor(t=[],i=Ps,s,l,u,h,d,m,p,v){super(t,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pv extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new sl(5,5,5),u=new qi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:va});u.uniforms.tEquirect.value=i;const h=new xi(l,u),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Fn),new GM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Oc extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class XM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kM extends In{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Un,v=Un,_,S){super(null,h,d,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new J,WM=new J,qM=new de;class is{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=wh.subVectors(s,i).cross(WM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||qM.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new qd,YM=new ue(.5,.5),Pc=new J;class Yd{constructor(t=new is,i=new is,s=new is,l=new is,u=new is,h=new is){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],A=u[8],C=u[9],y=u[10],x=u[11],P=u[12],N=u[13],O=u[14],I=u[15];if(l[0].setComponents(p-h,E-v,x-A,I-P).normalize(),l[1].setComponents(p+h,E+v,x+A,I+P).normalize(),l[2].setComponents(p+d,E+_,x+C,I+N).normalize(),l[3].setComponents(p-d,E-_,x-C,I-N).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,E-S,x-y,I-O).normalize();else if(l[4].setComponents(p-m,E-S,x-y,I-O).normalize(),i===Gi)l[5].setComponents(p+m,E+S,x+y,I+O).normalize();else if(i===Yc)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=YM.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class el extends In{constructor(t,i,s=Wi,l,u,h,d=Un,m=Un,p,v=Ea,_=1){if(v!==Ea&&v!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jM extends el{constructor(t,i=Wi,s=Ps,l,u,h=Un,d=Un,m,p=Ea){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qr extends Ta{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,S=i/m,E=[],A=[],C=[],y=[];for(let x=0;x<v;x++){const P=x*S-h;for(let N=0;N<p;N++){const O=N*_-u;A.push(O,-P,0),C.push(0,0,1),y.push(N/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const N=P+p*x,O=P+p*(x+1),I=P+1+p*(x+1),B=P+1+p*x;E.push(N,O,B),E.push(O,I,B)}this.setIndex(E),this.setAttribute("position",new Sa(A,3)),this.setAttribute("normal",new Sa(C,3)),this.setAttribute("uv",new Sa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ZM extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _v extends al{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class KM extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class JM{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,_){return p.push(v,_),this},this.removeHandler=function(v){const _=p.indexOf(v);return _!==-1&&p.splice(_,2),this},this.getHandler=function(v){for(let _=0,S=p.length;_<S;_+=2){const E=p[_],A=p[_+1];if(E.global&&(E.lastIndex=0),E.test(v))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $M=new JM;class jd{constructor(t){this.manager=t!==void 0?t:$M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}jd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nr=new WeakMap;class ty extends jd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Uh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let _=Nr.get(h);_===void 0&&(_=[],Nr.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=$o("img");function m(){v(),i&&i(this);const _=Nr.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onLoad&&E.onLoad(this)}Nr.delete(this),u.manager.itemEnd(t)}function p(_){v(),l&&l(_),Uh.remove(`image:${t}`);const S=Nr.get(this)||[];for(let E=0;E<S.length;E++){const A=S[E];A.onError&&A.onError(_)}Nr.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Uh.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class ey extends jd{constructor(t){super(t)}load(t,i,s,l){const u=new In,h=new ty(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class gv extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Lh=new sn,u0=new J,f0=new J;class ny{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;u0.setFromMatrixPosition(t.matrixWorld),i.position.copy(u0),f0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(f0),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zd extends hv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iy extends ny{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ay extends gv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new iy}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class sy extends gv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ry extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class oy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class h0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ly extends Fs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function d0(o,t,i,s){const l=cy(s);switch(i){case $0:return o*t;case ev:return o*t/l.components*l.byteLength;case Hd:return o*t/l.components*l.byteLength;case Xr:return o*t*2/l.components*l.byteLength;case Gd:return o*t*2/l.components*l.byteLength;case tv:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case Vd:return o*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case td:case nd:return Math.max(o,16)*Math.max(t,8)/4;case $h:case ed:return Math.max(o,8)*Math.max(t,8)/2;case id:case ad:case rd:case od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sd:case ld:case cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case yd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Td:case bd:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Dd:case wd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cy(o){switch(o){case ri:case Z0:return{byteLength:1,components:1};case Qo:case K0:case ya:return{byteLength:2,components:1};case Id:case Bd:return{byteLength:2,components:4};case Wi:case Fd:case Hi:return{byteLength:4,components:1};case Q0:case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function uy(o){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<_.length;E++){const A=_[S],C=_[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,A=_.length;E<A;E++){const C=_[E];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,by=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:_y,aomap_fragment:gy,aomap_pars_fragment:vy,batching_pars_vertex:xy,batching_vertex:Sy,begin_vertex:My,beginnormal_vertex:yy,bsdfs:Ey,iridescence_fragment:Ty,bumpmap_pars_fragment:by,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Dy,color_fragment:wy,color_pars_fragment:Uy,color_pars_vertex:Ly,color_vertex:Ny,common:Oy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:zy,displacementmap_pars_vertex:Fy,displacementmap_vertex:Iy,emissivemap_fragment:By,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Vy,envmap_fragment:Xy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Wy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:iE,envmap_vertex:Yy,fog_vertex:jy,fog_pars_vertex:Zy,fog_fragment:Ky,fog_pars_fragment:Qy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:$y,lights_lambert_fragment:tE,lights_lambert_pars_fragment:eE,lights_pars_begin:nE,lights_toon_fragment:aE,lights_toon_pars_fragment:sE,lights_phong_fragment:rE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:_E,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:SE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:yE,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:bE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:DE,normal_pars_fragment:wE,normal_pars_vertex:UE,normal_vertex:LE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:FE,opaque_fragment:IE,packing:BE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:XE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:YE,shadowmap_vertex:jE,shadowmask_pars_fragment:ZE,skinbase_vertex:KE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:tT,specularmap_pars_fragment:eT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:pT,cube_frag:mT,depth_vert:_T,depth_frag:gT,distance_vert:vT,distance_frag:xT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:yT,linedashed_frag:ET,meshbasic_vert:TT,meshbasic_frag:bT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:DT,meshnormal_vert:wT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:PT,meshtoon_vert:zT,meshtoon_frag:FT,points_vert:IT,points_frag:BT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:XT},Nt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const zc={r:0,b:0,g:0},Ds=new Ui,kT=new sn;function WT(o,t,i,s,l,u,h){const d=new Oe(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function A(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:t).get(O)),O}function C(N){let O=!1;const I=A(N);I===null?x(d,m):I&&I.isColor&&(x(I,1),O=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,O){const I=A(O);I&&(I.isCubeTexture||I.mapping===jc)?(v===void 0&&(v=new xi(new sl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Wr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ds.copy(O.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Ds)),v.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Ge,(_!==I||S!==I.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=I,S=I.version,E=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new xi(new qr(2,2),new qi({name:"BackgroundMaterial",uniforms:Wr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(I.colorSpace)!==Ge,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,E=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,O){N.getRGB(zc,fv(o)),s.buffers.color.setClear(zc.r,zc.g,zc.b,O,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),m=O,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:C,addToRenderList:y,dispose:P}}function qT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(D,X,st,at,dt){let ut=!1;const L=_(at,st,X);u!==L&&(u=L,p(u.object)),ut=E(D,at,st,dt),ut&&A(D,at,st,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,O(D,X,st,at),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function _(D,X,st){const at=st.wireframe===!0;let dt=s[D.id];dt===void 0&&(dt={},s[D.id]=dt);let ut=dt[X.id];ut===void 0&&(ut={},dt[X.id]=ut);let L=ut[at];return L===void 0&&(L=S(m()),ut[at]=L),L}function S(D){const X=[],st=[],at=[];for(let dt=0;dt<i;dt++)X[dt]=0,st[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,X,st,at){const dt=u.attributes,ut=X.attributes;let L=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){const xt=dt[it];let U=ut[it];if(U===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;L++}return u.attributesNum!==L||u.index!==at}function A(D,X,st,at){const dt={},ut=X.attributes;let L=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){let xt=ut[it];xt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),dt[it]=U,L++}u.attributes=dt,u.attributesNum=L,u.index=at}function C(){const D=u.newAttributes;for(let X=0,st=D.length;X<st;X++)D[X]=0}function y(D){x(D,0)}function x(D,X){const st=u.newAttributes,at=u.enabledAttributes,dt=u.attributeDivisors;st[D]=1,at[D]===0&&(o.enableVertexAttribArray(D),at[D]=1),dt[D]!==X&&(o.vertexAttribDivisor(D,X),dt[D]=X)}function P(){const D=u.newAttributes,X=u.enabledAttributes;for(let st=0,at=X.length;st<at;st++)X[st]!==D[st]&&(o.disableVertexAttribArray(st),X[st]=0)}function N(D,X,st,at,dt,ut,L){L===!0?o.vertexAttribIPointer(D,X,st,dt,ut):o.vertexAttribPointer(D,X,st,at,dt,ut)}function O(D,X,st,at){C();const dt=at.attributes,ut=st.getAttributes(),L=X.defaultAttributeValues;for(const H in ut){const it=ut[H];if(it.location>=0){let Mt=dt[H];if(Mt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){const xt=Mt.normalized,U=Mt.itemSize,nt=t.get(Mt);if(nt===void 0)continue;const _t=nt.buffer,bt=nt.type,It=nt.bytesPerElement,et=bt===o.INT||bt===o.UNSIGNED_INT||Mt.gpuType===Fd;if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,Dt=ct.stride,Vt=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<it.locationSize;Bt++)x(it.location+Bt,ct.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<it.locationSize;Bt++)y(it.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Bt=0;Bt<it.locationSize;Bt++)N(it.location+Bt,U/it.locationSize,bt,xt,Dt*It,(Vt+U/it.locationSize*Bt)*It,et)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<it.locationSize;ct++)x(it.location+ct,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<it.locationSize;ct++)y(it.location+ct);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let ct=0;ct<it.locationSize;ct++)N(it.location+ct,U/it.locationSize,bt,xt,U*It,U/it.locationSize*ct*It,et)}}else if(L!==void 0){const xt=L[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(it.location,xt);break;case 3:o.vertexAttrib3fv(it.location,xt);break;case 4:o.vertexAttrib4fv(it.location,xt);break;default:o.vertexAttrib1fv(it.location,xt)}}}}P()}function I(){Q();for(const D in s){const X=s[D];for(const st in X){const at=X[st];for(const dt in at)v(at[dt].object),delete at[dt];delete X[st]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const X=s[D.id];for(const st in X){const at=X[st];for(const dt in at)v(at[dt].object),delete at[dt];delete X[st]}delete s[D.id]}function z(D){for(const X in s){const st=s[X];if(st[D.id]===void 0)continue;const at=st[D.id];for(const dt in at)v(at[dt].object),delete at[dt];delete st[D.id]}}function Q(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function YT(o,t,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(o.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A];i.update(E,s,1)}function m(p,v,_,S){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],v[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=v[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Q=z===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ri&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!Q)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:O,maxSamples:I,samples:B}}function ZT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new is,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const A=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const P=u?0:s,N=P*4;let O=x.clippingState||null;m.value=O,O=v(A,S,N,E);for(let I=0;I!==N;++I)O[I]=i[I];x.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,S,E,A){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const x=E+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,O=E;N!==C;++N,O+=4)h.copy(_[N]).applyMatrix4(P,d),h.normal.toArray(y,O),y[O+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function KT(o){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=Ps:d===Kh&&(h.mapping=Vr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new pv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const ss=4,p0=[.125,.215,.35,.446,.526,.582],Ls=20,QT=256,jo=new Zd,m0=new Oe;let Nh=null,Oh=0,Ph=0,zh=!1;const JT=new J;class _0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=JT}=u;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nh,Oh,Ph),this._renderer.xr.enabled=zh,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ya,format:wi,colorSpace:kr,depthBuffer:!1},l=g0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$T(u)),this._blurMaterial=eb(u,t,i),this._ggxMaterial=tb(u,t,i)}return l}_compileMaterial(t){const i=new xi(new Ta,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,u){const m=new vi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(m0),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new sl,new lv({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(m0),x=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[N],u.y,u.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[N]));const I=this._cubeSize;Or(l,O*I,N>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=E,_.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ps||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Or(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:A}=this,C=this._sizeLods[s],y=3*C*(s>A-ss?s-A+ss:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Or(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(d,jo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Or(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ls-1),C=u/A,y=isFinite(u)?1+Math.floor(v*C):Ls;y>Ls&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const x=[];let P=0;for(let z=0;z<Ls;++z){const Q=z/C,R=Math.exp(-Q*Q/2);x.push(R),z===0?P+=R:z<y&&(P+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-s;const O=this._sizeLods[l],I=3*O*(l>N-ss?l-N+ss:0),B=4*(this._cubeSize-O);Or(i,I,B,3*O,2*O),m.setRenderTarget(i),m.render(_,jo)}}function $T(o){const t=[],i=[],s=[];let l=o;const u=o-ss+1+p0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-ss?m=p0[h-o+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,A=6,C=3,y=2,x=1,P=new Float32Array(C*A*E),N=new Float32Array(y*A*E),O=new Float32Array(x*A*E);for(let B=0;B<E;B++){const z=B%3*2/3-1,Q=B>2?0:-1,R=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];P.set(R,C*A*B),N.set(S,y*A*B);const D=[B,B,B,B,B,B];O.set(D,x*A*B)}const I=new Ta;I.setAttribute("position",new ki(P,C)),I.setAttribute("uv",new ki(N,y)),I.setAttribute("faceIndex",new ki(O,x)),s.push(new xi(I,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function g0(o,t,i){const s=new Xi(o,t,i);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Or(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function tb(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function eb(o,t,i){const s=new Float32Array(Ls),l=new J(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function v0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function x0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,v=m===Ps||m===Vr;if(p||v){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new _0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new _0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ib(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function ab(o,t,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(t.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,A=_.attributes.position;let C=0;if(E!==null){const P=E.array;C=E.version;for(let N=0,O=P.length;N<O;N+=3){const I=P[N+0],B=P[N+1],z=P[N+2];S.push(I,B,B,z,z,I)}}else if(A!==void 0){const P=A.array;C=A.version;for(let N=0,O=P.length/3-1;N<O;N+=3){const I=N+0,B=N+1,z=N+2;S.push(I,B,B,z,z,I)}}else return;const y=new(iv(S)?uv:cv)(S,1);y.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function sb(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,u,S*h),i.update(E,s,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(s,E,u,S*h,A),i.update(E,s,A))}function v(S,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,A);let y=0;for(let x=0;x<A;x++)y+=E[x];i.update(y,s,1)}function _(S,E,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,C,0,A);let x=0;for(let P=0;P<A;P++)x+=E[P]*C[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function rb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ob(o,t,i){const s=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let D=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let O=0;A===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let I=d.attributes.position.count*O,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*_),Q=new av(z,I,B,_);Q.type=Hi,Q.needsUpdate=!0;const R=O*4;for(let X=0;X<_;X++){const st=x[X],at=P[X],dt=N[X],ut=I*B*4*X;for(let L=0;L<st.count;L++){const H=L*R;A===!0&&(l.fromBufferAttribute(st,L),z[ut+H+0]=l.x,z[ut+H+1]=l.y,z[ut+H+2]=l.z,z[ut+H+3]=0),C===!0&&(l.fromBufferAttribute(at,L),z[ut+H+4]=l.x,z[ut+H+5]=l.y,z[ut+H+6]=l.z,z[ut+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,L),z[ut+H+8]=l.x,z[ut+H+9]=l.y,z[ut+H+10]=l.z,z[ut+H+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:Q,size:new ue(I,B)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function lb(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const cb={[V0]:"LINEAR_TONE_MAPPING",[X0]:"REINHARD_TONE_MAPPING",[k0]:"CINEON_TONE_MAPPING",[zd]:"ACES_FILMIC_TONE_MAPPING",[q0]:"AGX_TONE_MAPPING",[Y0]:"NEUTRAL_TONE_MAPPING",[W0]:"CUSTOM_TONE_MAPPING"};function ub(o,t,i,s,l){const u=new Xi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Xi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new Ta;d.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new ZM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xi(d,m),v=new Zd(-1,1,1,-1,0,1);let _=null,S=null,E=!1,A,C=null,y=[],x=!1;this.setSize=function(P,N){u.setSize(P,N),h.setSize(P,N);for(let O=0;O<y.length;O++){const I=y[O];I.setSize&&I.setSize(P,N)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const N=u.width,O=u.height;for(let I=0;I<y.length;I++){const B=y[I];B.setSize&&B.setSize(N,O)}},this.begin=function(P,N){if(E||P.toneMapping===Vi&&y.length===0)return!1;if(C=N,N!==null){const O=N.width,I=N.height;(u.width!==O||u.height!==I)&&this.setSize(O,I)}return x===!1&&P.setRenderTarget(u),A=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(P,N){P.toneMapping=A,E=!0;let O=u,I=h;for(let B=0;B<y.length;B++){const z=y[B];if(z.enabled!==!1&&(z.render(P,I,O,N),z.needsSwap!==!1)){const Q=O;O=I,I=Q}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},Ae.getTransfer(_)===Ge&&(m.defines.SRGB_TRANSFER="");const B=cb[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,P.setRenderTarget(C),P.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const xv=new In,Ld=new el(1,1),Sv=new av,Mv=new bM,yv=new dv,S0=[],M0=[],y0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function Yr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=S0[l];if(u===void 0&&(u=new Float32Array(l),S0[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Kc(o,t){let i=M0[t];i===void 0&&(i=new Int32Array(t),M0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function fb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function mb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;T0.set(s),o.uniformMatrix2fv(this.addr,!1,T0),vn(i,s)}}function _b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;E0.set(s),o.uniformMatrix3fv(this.addr,!1,E0),vn(i,s)}}function gb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;y0.set(s),o.uniformMatrix4fv(this.addr,!1,y0),vn(i,s)}}function vb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function Sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function yb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function Tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function Ab(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ld.compareFunction=i.isReversedDepthBuffer()?kd:Xd,u=Ld):u=xv,i.setTexture2D(t||u,l)}function Rb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Mv,l)}function Cb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||yv,l)}function Db(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Sv,l)}function wb(o){switch(o){case 5126:return fb;case 35664:return hb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return _b;case 35676:return gb;case 5124:case 35670:return vb;case 35667:case 35671:return xb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return yb;case 36294:return Eb;case 36295:return Tb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Db}}function Ub(o,t){o.uniform1fv(this.addr,t)}function Lb(o,t){const i=Yr(t,this.size,2);o.uniform2fv(this.addr,i)}function Nb(o,t){const i=Yr(t,this.size,3);o.uniform3fv(this.addr,i)}function Ob(o,t){const i=Yr(t,this.size,4);o.uniform4fv(this.addr,i)}function Pb(o,t){const i=Yr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zb(o,t){const i=Yr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Fb(o,t){const i=Yr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Ib(o,t){o.uniform1iv(this.addr,t)}function Bb(o,t){o.uniform2iv(this.addr,t)}function Hb(o,t){o.uniform3iv(this.addr,t)}function Gb(o,t){o.uniform4iv(this.addr,t)}function Vb(o,t){o.uniform1uiv(this.addr,t)}function Xb(o,t){o.uniform2uiv(this.addr,t)}function kb(o,t){o.uniform3uiv(this.addr,t)}function Wb(o,t){o.uniform4uiv(this.addr,t)}function qb(o,t,i){const s=this.cache,l=t.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ld:h=xv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function Yb(o,t,i){const s=this.cache,l=t.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Mv,u[h])}function jb(o,t,i){const s=this.cache,l=t.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||yv,u[h])}function Zb(o,t,i){const s=this.cache,l=t.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Sv,u[h])}function Kb(o){switch(o){case 5126:return Ub;case 35664:return Lb;case 35665:return Nb;case 35666:return Ob;case 35674:return Pb;case 35675:return zb;case 35676:return Fb;case 5124:case 35670:return Ib;case 35667:case 35671:return Bb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return Xb;case 36295:return kb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wb(i.type)}}class Jb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Kb(i.type)}}class $b{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function b0(o,t){o.seq.push(t),o.map[t.id]=t}function tA(o,t,i){const s=o.name,l=s.length;for(Fh.lastIndex=0;;){const u=Fh.exec(s),h=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){b0(i,p===void 0?new Qb(d,o,t):new Jb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new $b(d),b0(i,_)),i=_}}}class Wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);tA(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function A0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const eA=37297;let nA=0;function iA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const R0=new de;function aA(o){Ae._getMatrix(R0,Ae.workingColorSpace,o);const t=`mat3( ${R0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case qc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function C0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+iA(o.getShaderSource(t),d)}else return u}function sA(o,t){const i=aA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const rA={[V0]:"Linear",[X0]:"Reinhard",[k0]:"Cineon",[zd]:"ACESFilmic",[q0]:"AgX",[Y0]:"Neutral",[W0]:"Custom"};function oA(o,t){const i=rA[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new J;function lA(){Ae.getLuminanceCoefficients(Fc);const o=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function uA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function fA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ko(o){return o!==""}function D0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function w0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(hA,pA)}const dA=new Map;function pA(o,t){let i=pe[t];if(i===void 0){const s=dA.get(t);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(o){return o.replace(mA,_A)}function _A(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function L0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gA={[Bc]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function vA(o){return gA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xA={[Ps]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function SA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":xA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const MA={[Vr]:"ENVMAP_MODE_REFRACTION"};function yA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":MA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EA={[G0]:"ENVMAP_BLENDING_MULTIPLY",[sM]:"ENVMAP_BLENDING_MIX",[rM]:"ENVMAP_BLENDING_ADD"};function TA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":EA[o.combine]||"ENVMAP_BLENDING_NONE"}function bA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function AA(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=vA(i),p=SA(i),v=yA(i),_=TA(i),S=bA(i),E=cA(i),A=uA(u),C=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(y=[L0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[L0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,sA("linearToOutputTexel",i.outputColorSpace),lA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=Nd(h),h=D0(h,i),h=w0(h,i),d=Nd(d),d=D0(d,i),d=w0(d,i),h=U0(h),d=U0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+y+h,O=P+x+d,I=A0(l,l.VERTEX_SHADER,N),B=A0(l,l.FRAGMENT_SHADER,O);l.attachShader(C,I),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(X){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(I)||"",dt=l.getShaderInfoLog(B)||"",ut=st.trim(),L=at.trim(),H=dt.trim();let it=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,I,B);else{const xt=C0(l,I,"vertex"),U=C0(l,B,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+xt+`
`+U)}else ut!==""?re("WebGLProgram: Program Info Log:",ut):(L===""||H==="")&&(Mt=!1);Mt&&(X.diagnostics={runnable:it,programLog:ut,vertexShader:{log:L,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(I),l.deleteShader(B),Q=new Wc(l,C),R=fA(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,eA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=B,this}let RA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DA(t),i.set(t,s)),s}}class DA{constructor(t){this.id=RA++,this.code=t,this.usedTimes=0}}function wA(o,t,i,s,l,u,h){const d=new rv,m=new CA,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,X,st,at){const dt=st.fog,ut=at.geometry,L=R.isMeshStandardMaterial?st.environment:null,H=(R.isMeshStandardMaterial?i:t).get(R.envMap||L),it=H&&H.mapping===jc?H.image.height:null,Mt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,U=xt!==void 0?xt.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let _t,bt,It,et;if(Mt){const be=Bi[Mt];_t=be.vertexShader,bt=be.fragmentShader}else _t=R.vertexShader,bt=R.fragmentShader,m.update(R),It=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Vt=at.isInstancedMesh===!0,Bt=at.isBatchedMesh===!0,me=!!R.map,$e=!!R.matcap,Se=!!H,_e=!!R.aoMap,we=!!R.lightMap,le=!!R.bumpMap,tn=!!R.normalMap,G=!!R.displacementMap,Ke=!!R.emissiveMap,Te=!!R.metalnessMap,Pe=!!R.roughnessMap,qt=R.anisotropy>0,w=R.clearcoat>0,M=R.dispersion>0,W=R.iridescence>0,ht=R.sheen>0,vt=R.transmission>0,lt=qt&&!!R.anisotropyMap,jt=w&&!!R.clearcoatMap,Rt=w&&!!R.clearcoatNormalMap,Xt=w&&!!R.clearcoatRoughnessMap,ie=W&&!!R.iridescenceMap,yt=W&&!!R.iridescenceThicknessMap,Et=ht&&!!R.sheenColorMap,zt=ht&&!!R.sheenRoughnessMap,Ot=!!R.specularMap,Ct=!!R.specularColorMap,fe=!!R.specularIntensityMap,k=vt&&!!R.transmissionMap,Ut=vt&&!!R.thicknessMap,Tt=!!R.gradientMap,Pt=!!R.alphaMap,St=R.alphaTest>0,gt=!!R.alphaHash,At=!!R.extensions;let ae=Vi;R.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Fe={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:_t,fragmentShader:bt,defines:R.defines,customVertexShaderID:It,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Bt,batchingColor:Bt&&at._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&at.instanceColor!==null,instancingMorph:Vt&&at.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:kr,alphaToCoverage:!!R.alphaToCoverage,map:me,matcap:$e,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:we,bumpMap:le,normalMap:tn,displacementMap:G,emissiveMap:Ke,normalMapObjectSpace:tn&&R.normalMapType===cM,normalMapTangentSpace:tn&&R.normalMapType===nv,metalnessMap:Te,roughnessMap:Pe,anisotropy:qt,anisotropyMap:lt,clearcoat:w,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:W,iridescenceMap:ie,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:fe,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===Br&&R.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:gt,combine:R.combine,mapUv:me&&C(R.map.channel),aoMapUv:_e&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:le&&C(R.bumpMap.channel),normalMapUv:tn&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ke&&C(R.emissiveMap.channel),metalnessMapUv:Te&&C(R.metalnessMap.channel),roughnessMapUv:Pe&&C(R.roughnessMap.channel),anisotropyMapUv:lt&&C(R.anisotropyMap.channel),clearcoatMapUv:jt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(R.sheenRoughnessMap.channel),specularMapUv:Ot&&C(R.specularMap.channel),specularColorMapUv:Ct&&C(R.specularColorMap.channel),specularIntensityMapUv:fe&&C(R.specularIntensityMap.channel),transmissionMapUv:k&&C(R.transmissionMap.channel),thicknessMapUv:Ut&&C(R.thicknessMap.channel),alphaMapUv:Pt&&C(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(tn||qt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(me||Pt),fog:!!dt,useFog:R.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:nt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:me&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ke&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===Ge,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===_a,flipSided:R.side===Zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:At&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&R.extensions.multiDraw===!0||Bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function x(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)D.push(X),D.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(P(D,R),N(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function P(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function N(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function O(R){const D=A[R.type];let X;if(D){const st=Bi[D];X=IM.clone(st.uniforms)}else X=R.uniforms;return X}function I(R,D){let X=_.get(D);return X!==void 0?++X.usedTimes:(X=new AA(o,D,R,u),v.push(X),_.set(D,X)),X}function B(R){if(--R.usedTimes===0){const D=v.indexOf(R);v[D]=v[v.length-1],v.pop(),_.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:O,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:Q}}function UA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function LA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function N0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function O0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,A,C,y){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:A,renderOrder:_.renderOrder,z:C,group:y},o[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=C,x.group=y),t++,x}function d(_,S,E,A,C,y){const x=h(_,S,E,A,C,y);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,A,C,y){const x=h(_,S,E,A,C,y);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||LA),s.length>1&&s.sort(S||N0),l.length>1&&l.sort(S||N0)}function v(){for(let _=t,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function NA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new O0,o.set(s,[h])):l>=u.length?(h=new O0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function OA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Oe};break;case"SpotLight":i={position:new J,direction:new J,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function PA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let zA=0;function FA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function IA(o){const t=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new sn,h=new sn;function d(p){let v=0,_=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,y=0,x=0,P=0,N=0,O=0,I=0,B=0,z=0;p.sort(FA);for(let R=0,D=p.length;R<D;R++){const X=p[R],st=X.color,at=X.intensity,dt=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Xr?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=st.r*at,_+=st.g*at,S+=st.b*at;else if(X.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(X.sh.coefficients[L],at);z++}else if(X.isDirectionalLight){const L=t.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.directionalShadow[E]=it,s.directionalShadowMap[E]=ut,s.directionalShadowMatrix[E]=X.shadow.matrix,P++}s.directional[E]=L,E++}else if(X.isSpotLight){const L=t.get(X);L.position.setFromMatrixPosition(X.matrixWorld),L.color.copy(st).multiplyScalar(at),L.distance=dt,L.coneCos=Math.cos(X.angle),L.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),L.decay=X.decay,s.spot[C]=L;const H=X.shadow;if(X.map&&(s.spotLightMap[I]=X.map,I++,H.updateMatrices(X),X.castShadow&&B++),s.spotLightMatrix[C]=H.matrix,X.castShadow){const it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.spotShadow[C]=it,s.spotShadowMap[C]=ut,O++}C++}else if(X.isRectAreaLight){const L=t.get(X);L.color.copy(st).multiplyScalar(at),L.halfWidth.set(X.width*.5,0,0),L.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=L,y++}else if(X.isPointLight){const L=t.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),L.distance=X.distance,L.decay=X.decay,X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,s.pointShadow[A]=it,s.pointShadowMap[A]=ut,s.pointShadowMatrix[A]=X.shadow.matrix,N++}s.point[A]=L,A++}else if(X.isHemisphereLight){const L=t.get(X);L.skyColor.copy(X.color).multiplyScalar(at),L.groundColor.copy(X.groundColor).multiplyScalar(at),s.hemi[x]=L,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const Q=s.hash;(Q.directionalLength!==E||Q.pointLength!==A||Q.spotLength!==C||Q.rectAreaLength!==y||Q.hemiLength!==x||Q.numDirectionalShadows!==P||Q.numPointShadows!==N||Q.numSpotShadows!==O||Q.numSpotMaps!==I||Q.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,Q.directionalLength=E,Q.pointLength=A,Q.spotLength=C,Q.rectAreaLength=y,Q.hemiLength=x,Q.numDirectionalShadows=P,Q.numPointShadows=N,Q.numSpotShadows=O,Q.numSpotMaps=I,Q.numLightProbes=z,s.version=zA++)}function m(p,v){let _=0,S=0,E=0,A=0,C=0;const y=v.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const N=p[x];if(N.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),_++}else if(N.isSpotLight){const O=s.spot[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),E++}else if(N.isRectAreaLight){const O=s.rectArea[A];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function P0(o){const t=new IA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function BA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new P0(o),t.set(l,[d])):u>=h.length?(d=new P0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],XA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],z0=new sn,Zo=new J,Ih=new J;function kA(o,t,i){let s=new Yd;const l=new ue,u=new ue,h=new an,d=new KM,m=new QM,p={},v=i.maxTextureSize,_={[Ma]:Zn,[Zn]:Ma,[_a]:_a},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ta;A.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(B,z,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===HS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Bc);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),st=o.state;st.setBlending(va),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&z.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=B.length;dt<ut;dt++){const L=B[dt],H=L.shadow;if(H===void 0){re("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/it.x),l.x=u.x*it.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/it.y),l.y=u.y*it.y,H.mapSize.y=u.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fr){if(L.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xi(l.x,l.y,{format:Xr,type:ya,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new el(l.x,l.y,Hi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{L.isPointLight?(H.map=new pv(l.x),H.map.depthTexture=new jM(l.x,Wi)):(H.map=new Xi(l.x,l.y),H.map.depthTexture=new el(l.x,l.y,Wi)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=Ea;const xt=o.state.buffers.depth.getReversed();this.type===Bc?(H.map.depthTexture.compareFunction=xt?kd:Xd,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(xt);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),st.viewport(h)}if(L.isPointLight){const U=H.camera,nt=H.matrix,_t=L.distance||U.far;_t!==U.far&&(U.far=_t,U.updateProjectionMatrix()),Zo.setFromMatrixPosition(L.matrixWorld),U.position.copy(Zo),Ih.copy(U.position),Ih.add(VA[xt]),U.up.copy(XA[xt]),U.lookAt(Ih),U.updateMatrixWorld(),nt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),z0.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(z0,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(L);s=H.getFrustum(),O(z,Q,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===Fr&&P(H,Q),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(R,D,X)};function P(B,z){const Q=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Xi(l.x,l.y,{format:Xr,type:ya})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,Q,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,Q,E,C,null)}function N(B,z,Q,R){let D=null;const X=Q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)D=X;else if(D=Q.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const st=D.uuid,at=z.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ut=dt[at];ut===void 0&&(ut=D.clone(),dt[at]=ut,z.addEventListener("dispose",I)),D=ut}if(D.visible=z.visible,D.wireframe=z.wireframe,R===Fr?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const st=o.properties.get(D);st.light=Q}return D}function O(B,z,Q,R,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Fr)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,B.matrixWorld);const at=t.update(B),dt=B.material;if(Array.isArray(dt)){const ut=at.groups;for(let L=0,H=ut.length;L<H;L++){const it=ut[L],Mt=dt[it.materialIndex];if(Mt&&Mt.visible){const xt=N(B,Mt,R,D);B.onBeforeShadow(o,B,z,Q,at,xt,it),o.renderBufferDirect(Q,null,at,xt,B,it),B.onAfterShadow(o,B,z,Q,at,xt,it)}}}else if(dt.visible){const ut=N(B,dt,R,D);B.onBeforeShadow(o,B,z,Q,at,ut,null),o.renderBufferDirect(Q,null,at,ut,B,null),B.onAfterShadow(o,B,z,Q,at,ut,null)}}const st=B.children;for(let at=0,dt=st.length;at<dt;at++)O(st[at],z,Q,R,D)}function I(B){B.target.removeEventListener("dispose",I);for(const Q in p){const R=p[Q],D=B.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const WA={[Vh]:Xh,[kh]:Yh,[Wh]:jh,[Gr]:qh,[Xh]:Vh,[Yh]:kh,[jh]:Wh,[qh]:Gr};function qA(o,t){function i(){let k=!1;const Ut=new an;let Tt=null;const Pt=new an(0,0,0,0);return{setMask:function(St){Tt!==St&&!k&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){k=St},setClear:function(St,gt,At,ae,Fe){Fe===!0&&(St*=ae,gt*=ae,At*=ae),Ut.set(St,gt,At,ae),Pt.equals(Ut)===!1&&(o.clearColor(St,gt,At,ae),Pt.copy(Ut))},reset:function(){k=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(gt){if(Ut!==gt){const At=t.get("EXT_clip_control");gt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=gt;const ae=St;St=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(gt){gt?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(gt){Tt!==gt&&!k&&(o.depthMask(gt),Tt=gt)},setFunc:function(gt){if(Ut&&(gt=WA[gt]),Pt!==gt){switch(gt){case Vh:o.depthFunc(o.NEVER);break;case Xh:o.depthFunc(o.ALWAYS);break;case kh:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case Wh:o.depthFunc(o.EQUAL);break;case qh:o.depthFunc(o.GEQUAL);break;case Yh:o.depthFunc(o.GREATER);break;case jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){St!==gt&&(Ut&&(gt=1-gt),o.clearDepth(gt),St=gt)},reset:function(){k=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,Pt=null,St=null,gt=null,At=null,ae=null,Fe=null;return{setTest:function(be){k||(be?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(be){Ut!==be&&!k&&(o.stencilMask(be),Ut=be)},setFunc:function(be,Nn,Si){(Tt!==be||Pt!==Nn||St!==Si)&&(o.stencilFunc(be,Nn,Si),Tt=be,Pt=Nn,St=Si)},setOp:function(be,Nn,Si){(gt!==be||At!==Nn||ae!==Si)&&(o.stencilOp(be,Nn,Si),gt=be,At=Nn,ae=Si)},setLocked:function(be){k=be},setClear:function(be){Fe!==be&&(o.clearStencil(be),Fe=be)},reset:function(){k=!1,Ut=null,Tt=null,Pt=null,St=null,gt=null,At=null,ae=null,Fe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],A=null,C=!1,y=null,x=null,P=null,N=null,O=null,I=null,B=null,z=new Oe(0,0,0),Q=0,R=!1,D=null,X=null,st=null,at=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),L=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),L=H>=2);let Mt=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),_t=new an().fromArray(U),bt=new an().fromArray(nt);function It(k,Ut,Tt,Pt){const St=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return gt}const et={};et[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Gr),le(!1),tn(Bg),ct(o.CULL_FACE),_e(va);function ct(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Dt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Vt(k,Ut){return _[k]!==Ut?(o.bindFramebuffer(k,Ut),_[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Bt(k,Ut){let Tt=E,Pt=!1;if(k){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=k.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,At=St.length;gt<At;gt++)Tt[gt]=o.COLOR_ATTACHMENT0+gt;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function me(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const $e={[Us]:o.FUNC_ADD,[VS]:o.FUNC_SUBTRACT,[XS]:o.FUNC_REVERSE_SUBTRACT};$e[kS]=o.MIN,$e[WS]=o.MAX;const Se={[qS]:o.ZERO,[YS]:o.ONE,[jS]:o.SRC_COLOR,[Hh]:o.SRC_ALPHA,[tM]:o.SRC_ALPHA_SATURATE,[JS]:o.DST_COLOR,[KS]:o.DST_ALPHA,[ZS]:o.ONE_MINUS_SRC_COLOR,[Gh]:o.ONE_MINUS_SRC_ALPHA,[$S]:o.ONE_MINUS_DST_COLOR,[QS]:o.ONE_MINUS_DST_ALPHA,[eM]:o.CONSTANT_COLOR,[nM]:o.ONE_MINUS_CONSTANT_COLOR,[iM]:o.CONSTANT_ALPHA,[aM]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(k,Ut,Tt,Pt,St,gt,At,ae,Fe,be){if(k===va){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),k!==GS){if(k!==y||be!==R){if((x!==Us||O!==Us)&&(o.blendEquation(o.FUNC_ADD),x=Us,O=Us),be)switch(k){case Br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFunc(o.ONE,o.ONE);break;case Gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",k);break}else switch(k){case Br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gg:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",k);break}P=null,N=null,I=null,B=null,z.set(0,0,0),Q=0,y=k,R=be}return}St=St||Ut,gt=gt||Tt,At=At||Pt,(Ut!==x||St!==O)&&(o.blendEquationSeparate($e[Ut],$e[St]),x=Ut,O=St),(Tt!==P||Pt!==N||gt!==I||At!==B)&&(o.blendFuncSeparate(Se[Tt],Se[Pt],Se[gt],Se[At]),P=Tt,N=Pt,I=gt,B=At),(ae.equals(z)===!1||Fe!==Q)&&(o.blendColor(ae.r,ae.g,ae.b,Fe),z.copy(ae),Q=Fe),y=k,R=!1}function we(k,Ut){k.side===_a?Dt(o.CULL_FACE):ct(o.CULL_FACE);let Tt=k.side===Zn;Ut&&(Tt=!Tt),le(Tt),k.blending===Br&&k.transparent===!1?_e(va):_e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ke(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){D!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),D=k)}function tn(k){k!==IS?(ct(o.CULL_FACE),k!==X&&(k===Bg?o.cullFace(o.BACK):k===BS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),X=k}function G(k){k!==st&&(L&&o.lineWidth(k),st=k)}function Ke(k,Ut,Tt){k?(ct(o.POLYGON_OFFSET_FILL),(at!==Ut||dt!==Tt)&&(o.polygonOffset(Ut,Tt),at=Ut,dt=Tt)):Dt(o.POLYGON_OFFSET_FILL)}function Te(k){k?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Pe(k){k===void 0&&(k=o.TEXTURE0+ut-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function qt(k,Ut,Tt){Tt===void 0&&(Mt===null?Tt=o.TEXTURE0+ut-1:Tt=Mt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(Mt!==Tt&&(o.activeTexture(Tt),Mt=Tt),o.bindTexture(k,Ut||et[k]),Pt.type=k,Pt.texture=Ut)}function w(){const k=xt[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(k){De("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){De("WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){De("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){De("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){De("WebGLState:",k)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){De("WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){De("WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){De("WebGLState:",k)}}function ie(){try{o.texImage2D(...arguments)}catch(k){De("WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){De("WebGLState:",k)}}function Et(k){_t.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),_t.copy(k))}function zt(k){bt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Ot(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(k);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,k.name),Tt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Mt=null,xt={},_={},S=new WeakMap,E=[],A=null,C=!1,y=null,x=null,P=null,N=null,O=null,I=null,B=null,z=new Oe(0,0,0),Q=0,R=!1,D=null,X=null,st=null,at=null,dt=null,_t.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Dt,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:me,setBlending:_e,setMaterial:we,setFlipSided:le,setCullFace:tn,setLineWidth:G,setPolygonOffset:Ke,setScissorTest:Te,activeTexture:Pe,bindTexture:qt,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:ie,texImage3D:yt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:fe}}function YA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,M){return E?new OffscreenCanvas(w,M):$o("canvas")}function C(w,M,W){let ht=1;const vt=qt(w);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const lt=Math.floor(ht*vt.width),jt=Math.floor(ht*vt.height);_===void 0&&(_=A(lt,jt));const Rt=M?A(lt,jt):_;return Rt.width=lt,Rt.height=jt,Rt.getContext("2d").drawImage(w,0,0,lt,jt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),Rt}else return"data"in w&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){o.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(w,M,W,ht,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let lt=M;if(M===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),M===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),M===o.RGBA){const jt=vt?qc:Ae.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=jt===Ge?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function O(w,M){let W;return w?M===null||M===Wi||M===Jo?W=o.DEPTH24_STENCIL8:M===Hi?W=o.DEPTH32F_STENCIL8:M===Qo&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===Jo?W=o.DEPTH_COMPONENT24:M===Hi?W=o.DEPTH_COMPONENT32F:M===Qo&&(W=o.DEPTH_COMPONENT16),W}function I(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Un&&w.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function B(w){const M=w.target;M.removeEventListener("dispose",B),Q(M),M.isVideoTexture&&v.delete(M)}function z(w){const M=w.target;M.removeEventListener("dispose",z),D(M)}function Q(w){const M=s.get(w);if(M.__webglInit===void 0)return;const W=w.source,ht=S.get(W);if(ht){const vt=ht[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(w),Object.keys(ht).length===0&&S.delete(W)}s.remove(w)}function R(w){const M=s.get(w);o.deleteTexture(M.__webglTexture);const W=w.source,ht=S.get(W);delete ht[M.__cacheKey],h.memory.textures--}function D(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let vt=0;vt<M.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=w.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=s.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(W[ht])}s.remove(w)}let X=0;function st(){X=0}function at(){const w=X;return w>=l.maxTextures&&re("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function dt(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ut(w,M){const W=s.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){const ht=w.image;if(ht===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,w,M);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function L(w,M){const W=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){et(W,w,M);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(w,M){const W=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){et(W,w,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function it(w,M){const W=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&W.__version!==w.version){ct(W,w,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const Mt={[Qh]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[Jh]:o.MIRRORED_REPEAT},xt={[Un]:o.NEAREST,[oM]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},U={[uM]:o.NEVER,[mM]:o.ALWAYS,[fM]:o.LESS,[Xd]:o.LEQUAL,[hM]:o.EQUAL,[kd]:o.GEQUAL,[dM]:o.GREATER,[pM]:o.NOTEQUAL};function nt(w,M){if(M.type===Hi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===oh||M.magFilter===gc||M.magFilter===Ns||M.minFilter===Fn||M.minFilter===oh||M.minFilter===gc||M.minFilter===Ns)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Mt[M.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Mt[M.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Mt[M.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==gc&&M.minFilter!==Ns||M.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _t(w,M){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",B));const ht=M.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(M);if(lt!==w.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const jt=vt[w.__cacheKey];jt!==void 0&&(vt[w.__cacheKey].usedTimes--,jt.usedTimes===0&&R(M)),w.__cacheKey=lt,w.__webglTexture=vt[lt].texture}return W}function bt(w,M,W){return Math.floor(Math.floor(w/W)/M)}function It(w,M,W,ht){const lt=w.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ht,M.data);else{lt.sort((yt,Et)=>yt.start-Et.start);let jt=0;for(let yt=1;yt<lt.length;yt++){const Et=lt[jt],zt=lt[yt],Ot=Et.start+Et.count,Ct=bt(zt.start,M.width,4),fe=bt(Et.start,M.width,4);zt.start<=Ot+1&&Ct===fe&&bt(zt.start+zt.count-1,M.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,lt[jt]=zt)}lt.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let yt=0,Et=lt.length;yt<Et;yt++){const zt=lt[yt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),fe=Ot%M.width,k=Math.floor(Ot/M.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,fe,k,Ut,Tt,W,ht,M.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function et(w,M,W){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=_t(w,M),lt=M.source;i.bindTexture(ht,w.__webglTexture,o.TEXTURE0+W);const jt=s.get(lt);if(lt.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Xt=M.colorSpace===as?null:Ae.getPrimaries(M.colorSpace),ie=M.colorSpace===as||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let yt=C(M.image,!1,l.maxTextureSize);yt=Pe(M,yt);const Et=u.convert(M.format,M.colorSpace),zt=u.convert(M.type);let Ot=N(M.internalFormat,Et,zt,M.colorSpace,M.isVideoTexture);nt(ht,M);let Ct;const fe=M.mipmaps,k=M.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,Tt=lt.dataReady,Pt=I(M,yt);if(M.isDepthTexture)Ot=O(M.format===Os,M.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ot,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,null));else if(M.isDataTexture)if(fe.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,fe[0].width,fe[0].height);for(let St=0,gt=fe.length;St<gt;St++)Ct=fe[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);M.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height),Tt&&It(M,yt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,fe[0].width,fe[0].height,yt.depth);for(let St=0,gt=fe.length;St<gt;St++)if(Ct=fe[St],M.format!==wi)if(Et!==null)if(k){if(Tt)if(M.layerUpdates.size>0){const At=d0(Ct.width,Ct.height,M.format,M.type);for(const ae of M.layerUpdates){const Fe=Ct.data.subarray(ae*At/Ct.data.BYTES_PER_ELEMENT,(ae+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ae,Ct.width,Ct.height,1,Et,Fe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,fe[0].width,fe[0].height);for(let St=0,gt=fe.length;St<gt;St++)Ct=fe[St],M.format!==wi?Et!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(M.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,yt.width,yt.height,yt.depth),Tt)if(M.layerUpdates.size>0){const St=d0(yt.width,yt.height,M.format,M.type);for(const gt of M.layerUpdates){const At=yt.data.subarray(gt*St/yt.data.BYTES_PER_ELEMENT,(gt+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Et,zt,At)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(M.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(M.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height);else{let St=yt.width,gt=yt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,gt,0,Et,zt,null),St>>=1,gt>>=1}}else if(fe.length>0){if(k&&Ut){const St=qt(fe[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,gt=fe.length;St<gt;St++)Ct=fe[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);M.generateMipmaps=!1}else if(k){if(Ut){const St=qt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,yt);y(M)&&x(ht),jt.__version=lt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ct(w,M,W){if(M.image.length!==6)return;const ht=_t(w,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+W);const lt=s.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const jt=Ae.getPrimaries(Ae.workingColorSpace),Rt=M.colorSpace===as?null:Ae.getPrimaries(M.colorSpace),Xt=M.colorSpace===as||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ie=M.isCompressedTexture||M.image[0].isCompressedTexture,yt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let gt=0;gt<6;gt++)!ie&&!yt?Et[gt]=C(M.image[gt],!0,l.maxCubemapSize):Et[gt]=yt?M.image[gt].image:M.image[gt],Et[gt]=Pe(M,Et[gt]);const zt=Et[0],Ot=u.convert(M.format,M.colorSpace),Ct=u.convert(M.type),fe=N(M.internalFormat,Ot,Ct,M.colorSpace),k=M.isVideoTexture!==!0,Ut=lt.__version===void 0||ht===!0,Tt=vt.dataReady;let Pt=I(M,zt);nt(o.TEXTURE_CUBE_MAP,M);let St;if(ie){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,fe,zt.width,zt.height);for(let gt=0;gt<6;gt++){St=Et[gt].mipmaps;for(let At=0;At<St.length;At++){const ae=St[At];M.format!==wi?Ot!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,ae.width,ae.height,Ot,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,fe,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,ae.width,ae.height,Ot,Ct,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,fe,ae.width,ae.height,0,Ot,Ct,ae.data)}}}else{if(St=M.mipmaps,k&&Ut){St.length>0&&Pt++;const gt=qt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,fe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Et[gt].width,Et[gt].height,Ot,Ct,Et[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,Et[gt].width,Et[gt].height,0,Ot,Ct,Et[gt].data);for(let At=0;At<St.length;At++){const Fe=St[At].image[gt].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,Fe.width,Fe.height,Ot,Ct,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,fe,Fe.width,Fe.height,0,Ot,Ct,Fe.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot,Ct,Et[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,Ot,Ct,Et[gt]);for(let At=0;At<St.length;At++){const ae=St[At];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,Ot,Ct,ae.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,fe,Ot,Ct,ae.image[gt])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Dt(w,M,W,ht,vt,lt){const jt=u.convert(W.format,W.colorSpace),Rt=u.convert(W.type),Xt=N(W.internalFormat,jt,Rt,W.colorSpace),ie=s.get(M),yt=s.get(W);if(yt.__renderTarget=M,!ie.__hasExternalTextures){const Et=Math.max(1,M.width>>lt),zt=Math.max(1,M.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,M.depth,0,jt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,0,G(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(w,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,w),M.depthBuffer){const ht=M.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=O(M.stencilBuffer,vt),jt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ke(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),lt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),lt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,lt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,w)}else{const ht=M.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],jt=u.convert(lt.format,lt.colorSpace),Rt=u.convert(lt.type),Xt=N(lt.internalFormat,jt,Rt,lt.colorSpace);Ke(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),Xt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),Xt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(w,M,W){const ht=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,M.depthTexture);const ie=u.convert(M.depthTexture.format),yt=u.convert(M.depthTexture.type);let Et;M.depthTexture.format===Ea?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Os&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,M.width,M.height,0,ie,yt,null)}}else ut(M.depthTexture,0);const lt=vt.__webglTexture,jt=G(M),Rt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=M.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ea)Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(M.depthTexture.format===Os)Ke(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function me(w){const M=s.get(w),W=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const ht=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ht}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Bt(M.__webglFramebuffer[ht],w,ht);else{const ht=w.texture.mipmaps;ht&&ht.length>0?Bt(M.__webglFramebuffer[0],w,0):Bt(M.__webglFramebuffer,w,0)}else if(W){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),Vt(M.__webglDepthbuffer[ht],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=w.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Vt(M.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(w,M,W){const ht=s.get(w);M!==void 0&&Dt(ht.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&me(w)}function Se(w){const M=w.texture,W=s.get(w),ht=s.get(M);w.addEventListener("dispose",z);const vt=w.textures,lt=w.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ie=s.get(vt[Rt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Ke(w)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const ie=u.convert(Xt.format,Xt.colorSpace),yt=u.convert(Xt.type),Et=N(Xt.internalFormat,ie,yt,Xt.colorSpace,w.isXRRenderTarget===!0),zt=G(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,M);for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Rt][Xt],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Dt(W.__webglFramebuffer[Rt],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ie=vt[Rt],yt=s.get(ie);let Et=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),nt(Et,ie),Dt(W.__webglFramebuffer,w,ie,o.COLOR_ATTACHMENT0+Rt,Et,0),y(ie)&&x(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),nt(Rt,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Xt],w,M,o.COLOR_ATTACHMENT0,Rt,Xt);else Dt(W.__webglFramebuffer,w,M,o.COLOR_ATTACHMENT0,Rt,0);y(M)&&x(Rt),i.unbindTexture()}w.depthBuffer&&me(w)}function _e(w){const M=w.textures;for(let W=0,ht=M.length;W<ht;W++){const vt=M[W];if(y(vt)){const lt=P(w),jt=s.get(vt).__webglTexture;i.bindTexture(lt,jt),x(lt),i.unbindTexture()}}}const we=[],le=[];function tn(w){if(w.samples>0){if(Ke(w)===!1){const M=w.textures,W=w.width,ht=w.height;let vt=o.COLOR_BUFFER_BIT;const lt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(w),Rt=M.length>1;if(Rt)for(let ie=0;ie<M.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=w.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ie=0;ie<M.length;ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ie]);const yt=s.get(M[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(we.length=0,le.length=0,we.push(o.COLOR_ATTACHMENT0+ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(we.push(lt),le.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ie=0;ie<M.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ie]);const yt=s.get(M[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(w){return Math.min(l.maxSamples,w.samples)}function Ke(w){const M=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(w){const M=h.render.frame;v.get(w)!==M&&(v.set(w,M),w.update())}function Pe(w,M){const W=w.colorSpace,ht=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==kr&&W!==as&&(Ae.getTransfer(W)===Ge?(ht!==wi||vt!==ri)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),M}function qt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=$e,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function jA(o,t){function i(s,l=as){let u;const h=Ae.getTransfer(l);if(s===ri)return o.UNSIGNED_BYTE;if(s===Id)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===J0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z0)return o.BYTE;if(s===K0)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===Fd)return o.INT;if(s===Wi)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===ya)return o.HALF_FLOAT;if(s===$0)return o.ALPHA;if(s===tv)return o.RGB;if(s===wi)return o.RGBA;if(s===Ea)return o.DEPTH_COMPONENT;if(s===Os)return o.DEPTH_STENCIL;if(s===ev)return o.RED;if(s===Hd)return o.RED_INTEGER;if(s===Xr)return o.RG;if(s===Gd)return o.RG_INTEGER;if(s===Vd)return o.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===Xc)if(h===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$h||s===td||s===ed||s===nd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===$h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===td)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===id||s===ad)return h===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===sd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===rd)return u.COMPRESSED_R11_EAC;if(s===od)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ld)return u.COMPRESSED_RG11_EAC;if(s===cd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd||s===xd||s===Sd||s===Md||s===yd||s===Ed)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ud)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yd)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ed)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Td||s===bd||s===Ad)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Td)return h===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rd||s===Cd||s===Dd||s===wd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Rd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new mv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new qr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Fs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",y=new QA,x={},P=i.getContextAttributes();let N=null,O=null;const I=[],B=[],z=new ue;let Q=null;const R=new vi;R.viewport=new an;const D=new vi;D.viewport=new an;const X=[R,D],st=new ry;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=I[et];return ct===void 0&&(ct=new Dh,I[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=I[et];return ct===void 0&&(ct=new Dh,I[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=I[et];return ct===void 0&&(ct=new Dh,I[et]=ct),ct.getHandSpace()};function ut(et){const ct=B.indexOf(et.inputSource);if(ct===-1)return;const Dt=I[ct];Dt!==void 0&&(Dt.update(et.inputSource,et.frame,p||h),Dt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let et=0;et<I.length;et++){const ct=B[et];ct!==null&&(B[et]=null,I[et].disconnect(ct))}at=null,dt=null,y.reset();for(const et in x)delete x[et];t.setRenderTarget(N),E=null,S=null,_=null,l=null,O=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Vt=null,Bt=null;P.depth&&(Bt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=P.stencil?Os:Ea,Vt=P.stencil?Jo:Wi);const me={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(me),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Xi(S.textureWidth,S.textureHeight,{format:wi,type:ri,depthTexture:new el(S.textureWidth,S.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Xi(E.framebufferWidth,E.framebufferHeight,{format:wi,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let ct=0;ct<et.removed.length;ct++){const Dt=et.removed[ct],Vt=B.indexOf(Dt);Vt>=0&&(B[Vt]=null,I[Vt].disconnect(Dt))}for(let ct=0;ct<et.added.length;ct++){const Dt=et.added[ct];let Vt=B.indexOf(Dt);if(Vt===-1){for(let me=0;me<I.length;me++)if(me>=B.length){B.push(Dt),Vt=me;break}else if(B[me]===null){B[me]=Dt,Vt=me;break}if(Vt===-1)break}const Bt=I[Vt];Bt&&Bt.connect(Dt)}}const it=new J,Mt=new J;function xt(et,ct,Dt){it.setFromMatrixPosition(ct.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const Vt=it.distanceTo(Mt),Bt=ct.projectionMatrix.elements,me=Dt.projectionMatrix.elements,$e=Bt[14]/(Bt[10]-1),Se=Bt[14]/(Bt[10]+1),_e=(Bt[9]+1)/Bt[5],we=(Bt[9]-1)/Bt[5],le=(Bt[8]-1)/Bt[0],tn=(me[8]+1)/me[0],G=$e*le,Ke=$e*tn,Te=Vt/(-le+tn),Pe=Te*-le;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Pe),et.translateZ(Te),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Bt[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=$e+Te,w=Se+Te,M=G-Pe,W=Ke+(Vt-Pe),ht=_e*Se/w*qt,vt=we*Se/w*qt;et.projectionMatrix.makePerspective(M,W,ht,vt,qt,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ct=et.near,Dt=et.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),st.near=D.near=R.near=ct,st.far=D.far=R.far=Dt,(at!==st.near||dt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,dt=st.far),st.layers.mask=et.layers.mask|6,R.layers.mask=st.layers.mask&3,D.layers.mask=st.layers.mask&5;const Vt=et.parent,Bt=st.cameras;U(st,Vt);for(let me=0;me<Bt.length;me++)U(Bt[me],Vt);Bt.length===2?xt(st,R,D):st.projectionMatrix.copy(R.projectionMatrix),nt(et,st,Vt)};function nt(et,ct,Dt){Dt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ud*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(st)},this.getCameraTexture=function(et){return x[et]};let _t=null;function bt(et,ct){if(v=ct.getViewerPose(p||h),A=ct,v!==null){const Dt=v.views;E!==null&&(t.setRenderTargetFramebuffer(O,E.framebuffer),t.setRenderTarget(O));let Vt=!1;Dt.length!==st.cameras.length&&(st.cameras.length=0,Vt=!0);for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se];let we=null;if(E!==null)we=E.getViewport(_e);else{const tn=_.getViewSubImage(S,_e);we=tn.viewport,Se===0&&(t.setRenderTargetTextures(O,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(O))}let le=X[Se];le===void 0&&(le=new vi,le.layers.enable(Se),le.viewport=new an,X[Se]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),Se===0&&(st.matrix.copy(le.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Vt===!0&&st.cameras.push(le)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const Se=_.getDepthInformation(Dt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,l.renderState)}if(Bt&&Bt.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se].camera;if(_e){let we=x[_e];we||(we=new mv,x[_e]=we);const le=_.getCameraImage(_e);we.sourceTexture=le}}}}for(let Dt=0;Dt<I.length;Dt++){const Vt=B[Dt],Bt=I[Dt];Vt!==null&&Bt!==void 0&&Bt.update(Vt,ct,p||h)}_t&&_t(et,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),A=null}const It=new vv;It.setAnimationLoop(bt),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const ws=new Ui,$A=new sn;function t1(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,fv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,N,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,O)):x.isMeshMatcapMaterial?(u(y,x),A(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,N):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,O=P.envMapRotation;N&&(y.envMap.value=N,ws.copy(O),ws.x*=-1,ws.y*=-1,ws.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),y.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(ws)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=N*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e1(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const O=N.program;s.uniformBlockBinding(P,O)}function p(P,N){let O=l[P.id];O===void 0&&(A(P),O=v(P),l[P.id]=O,P.addEventListener("dispose",y));const I=N.program;s.updateUBOMapping(P,I);const B=t.render.frame;u[P.id]!==B&&(S(P),u[P.id]=B)}function v(P){const N=_();P.__bindingPointIndex=N;const O=o.createBuffer(),I=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,O),O}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],O=P.uniforms,I=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,z=O.length;B<z;B++){const Q=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,D=Q.length;R<D;R++){const X=Q[R];if(E(X,B,R,I)===!0){const st=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let dt=0;for(let ut=0;ut<at.length;ut++){const L=at[ut],H=C(L);typeof L=="number"||typeof L=="boolean"?(X.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,st+dt,X.__data)):L.isMatrix3?(X.__data[0]=L.elements[0],X.__data[1]=L.elements[1],X.__data[2]=L.elements[2],X.__data[3]=0,X.__data[4]=L.elements[3],X.__data[5]=L.elements[4],X.__data[6]=L.elements[5],X.__data[7]=0,X.__data[8]=L.elements[6],X.__data[9]=L.elements[7],X.__data[10]=L.elements[8],X.__data[11]=0):(L.toArray(X.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,N,O,I){const B=P.value,z=N+"_"+O;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const Q=I[z];if(typeof B=="number"||typeof B=="boolean"){if(Q!==B)return I[z]=B,!0}else if(Q.equals(B)===!1)return Q.copy(B),!0}return!1}function A(P){const N=P.uniforms;let O=0;const I=16;for(let z=0,Q=N.length;z<Q;z++){const R=Array.isArray(N[z])?N[z]:[N[z]];for(let D=0,X=R.length;D<X;D++){const st=R[D],at=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ut=at.length;dt<ut;dt++){const L=at[dt],H=C(L),it=O%I,Mt=it%H.boundary,xt=it+Mt;O+=Mt,xt!==0&&I-xt<H.storage&&(O+=I-xt),st.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=O,O+=H.storage}}}const B=O%I;return B>0&&(O+=I-B),P.__size=O,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),N}function y(P){const N=P.target;N.removeEventListener("dispose",y);const O=h.indexOf(N.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function i1(){return Fi===null&&(Fi=new kM(n1,16,16,Xr,ya),Fi.name="DFG_LUT",Fi.minFilter=Fn,Fi.magFilter=Fn,Fi.wrapS=ga,Fi.wrapT=ga,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class a1{constructor(t={}){const{canvas:i=_M(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=ri}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const C=E,y=new Set([Vd,Gd,Hd]),x=new Set([ri,Wi,Qo,Jo,Id,Bd]),P=new Uint32Array(4),N=new Int32Array(4);let O=null,I=null;const B=[],z=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=si;let X=0,st=0,at=null,dt=-1,ut=null;const L=new an,H=new an;let it=null;const Mt=new Oe(0);let xt=0,U=i.width,nt=i.height,_t=1,bt=null,It=null;const et=new an(0,0,U,nt),ct=new an(0,0,U,nt);let Dt=!1;const Vt=new Yd;let Bt=!1,me=!1;const $e=new sn,Se=new J,_e=new an,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return at===null?_t:1}let G=s;function Ke(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",be,!1),G===null){const q="webgl2";if(G=Ke(q,b),G===null)throw Ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw De("WebGLRenderer: "+b.message),b}let Te,Pe,qt,w,M,W,ht,vt,lt,jt,Rt,Xt,ie,yt,Et,zt,Ot,Ct,fe,k,Ut,Tt,Pt,St;function gt(){Te=new ib(G),Te.init(),Tt=new jA(G,Te),Pe=new jT(G,Te,t,Tt),qt=new qA(G,Te),Pe.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),w=new rb(G),M=new UA,W=new YA(G,Te,qt,M,Pe,Tt,w),ht=new KT(R),vt=new nb(R),lt=new uy(G),Pt=new qT(G,lt),jt=new ab(G,lt,w,Pt),Rt=new lb(G,jt,lt,w),fe=new ob(G,Pe,W),zt=new ZT(M),Xt=new wA(R,ht,vt,Te,Pe,Pt,zt),ie=new t1(R,M),yt=new NA,Et=new BA(Te),Ct=new WT(R,ht,vt,qt,Rt,A,m),Ot=new kA(R,Rt,Pe),St=new e1(G,w,Pe,qt),k=new YT(G,Te,w),Ut=new sb(G,Te,w),w.programs=Xt.programs,R.capabilities=Pe,R.extensions=Te,R.properties=M,R.renderLists=yt,R.shadowMap=Ot,R.state=qt,R.info=w}gt(),C!==ri&&(Q=new ub(C,i.width,i.height,l,u));const At=new JA(R,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(b){b!==void 0&&(_t=b,this.setSize(U,nt,!1))},this.getSize=function(b){return b.set(U,nt)},this.setSize=function(b,q,rt=!0){if(At.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,nt=q,i.width=Math.floor(b*_t),i.height=Math.floor(q*_t),rt===!0&&(i.style.width=b+"px",i.style.height=q+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*_t,nt*_t).floor()},this.setDrawingBufferSize=function(b,q,rt){U=b,nt=q,_t=rt,i.width=Math.floor(b*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,q,rt,$){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,q,rt,$),qt.viewport(L.copy(et).multiplyScalar(_t).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,q,rt,$){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,q,rt,$),qt.scissor(H.copy(ct).multiplyScalar(_t).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){qt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,rt=!0){let $=0;if(b){let j=!1;if(at!==null){const wt=at.texture.format;j=y.has(wt)}if(j){const wt=at.texture.type,Ft=x.has(wt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Lt.r,te=Lt.g,Wt=Lt.b;Ft?(P[0]=kt,P[1]=te,P[2]=Wt,P[3]=Ht,G.clearBufferuiv(G.COLOR,0,P)):(N[0]=kt,N[1]=te,N[2]=Wt,N[3]=Ht,G.clearBufferiv(G.COLOR,0,N))}else $|=G.COLOR_BUFFER_BIT}q&&($|=G.DEPTH_BUFFER_BIT),rt&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),yt.dispose(),Et.dispose(),M.dispose(),ht.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Bs),At.removeEventListener("sessionend",Kr),Li.stop()};function ae(b){b.preventDefault(),Yg("WebGLRenderer: Context Lost."),D=!0}function Fe(){Yg("WebGLRenderer: Context Restored."),D=!1;const b=w.autoReset,q=Ot.enabled,rt=Ot.autoUpdate,$=Ot.needsUpdate,j=Ot.type;gt(),w.autoReset=b,Ot.enabled=q,Ot.autoUpdate=rt,Ot.needsUpdate=$,Ot.type=j}function be(b){De("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){const q=b.target;q.removeEventListener("dispose",Nn),Si(q)}function Si(b){rl(b),M.remove(b)}function rl(b){const q=M.get(b).programs;q!==void 0&&(q.forEach(function(rt){Xt.releaseProgram(rt)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,rt,$,j,wt){q===null&&(q=we);const Ft=j.isMesh&&j.matrixWorld.determinant()<0,Lt=os(b,q,rt,$,j);qt.setMaterial($,Ft);let Ht=rt.index,kt=1;if($.wireframe===!0){if(Ht=jt.getWireframeAttribute(rt),Ht===void 0)return;kt=2}const te=rt.drawRange,Wt=rt.attributes.position;let ee=te.start*kt,Ue=(te.start+te.count)*kt;wt!==null&&(ee=Math.max(ee,wt.start*kt),Ue=Math.min(Ue,(wt.start+wt.count)*kt)),Ht!==null?(ee=Math.max(ee,0),Ue=Math.min(Ue,Ht.count)):Wt!=null&&(ee=Math.max(ee,0),Ue=Math.min(Ue,Wt.count));const Qe=Ue-ee;if(Qe<0||Qe===1/0)return;Pt.setup(j,$,Lt,rt,Ht);let Ye,ze=k;if(Ht!==null&&(Ye=lt.get(Ht),ze=Ut,ze.setIndex(Ye)),j.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*tn()),ze.setMode(G.LINES)):ze.setMode(G.TRIANGLES);else if(j.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),qt.setLineWidth(Zt*tn()),j.isLineSegments?ze.setMode(G.LINES):j.isLineLoop?ze.setMode(G.LINE_LOOP):ze.setMode(G.LINE_STRIP)}else j.isPoints?ze.setMode(G.POINTS):j.isSprite&&ze.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ze.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Le=j._multiDrawCounts,se=j._multiDrawCount,yn=Ht?lt.get(Ht).bytesPerElement:1,Yi=M.get($).currentProgram.getUniforms();for(let En=0;En<se;En++)Yi.setValue(G,"_gl_DrawID",En),ze.render(Zt[En]/yn,Le[En])}else if(j.isInstancedMesh)ze.renderInstances(ee,Qe,j.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,Zt);ze.renderInstances(ee,Qe,Le)}else ze.render(ee,Qe)};function jr(b,q,rt){b.transparent===!0&&b.side===_a&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,Gs(b,q,rt),b.side=Ma,b.needsUpdate=!0,Gs(b,q,rt),b.side=_a):Gs(b,q,rt)}this.compile=function(b,q,rt=null){rt===null&&(rt=b),I=Et.get(rt),I.init(q),z.push(I),rt.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),b!==rt&&b.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),I.setupLights();const $=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const wt=j.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const Lt=wt[Ft];jr(Lt,rt,j),$.add(Lt)}else jr(wt,rt,j),$.add(wt)}),I=z.pop(),$},this.compileAsync=function(b,q,rt=null){const $=this.compile(b,q,rt);return new Promise(j=>{function wt(){if($.forEach(function(Ft){M.get(Ft).currentProgram.isReady()&&$.delete(Ft)}),$.size===0){j(b);return}setTimeout(wt,10)}Te.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Is=null;function Zr(b){Is&&Is(b)}function Bs(){Li.stop()}function Kr(){Li.start()}const Li=new vv;Li.setAnimationLoop(Zr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(b){Is=b,At.setAnimationLoop(b),b===null?Li.stop():Li.start()},At.addEventListener("sessionstart",Bs),At.addEventListener("sessionend",Kr),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=Q!==null&&(at===null||rt)&&Q.begin(R,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,q,at),I=Et.get(b,z.length),I.init(q),z.push(I),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix($e,Gi,q.reversedDepth),me=this.localClippingEnabled,Bt=zt.init(this.clippingPlanes,me),O=yt.get(b,B.length),O.init(),B.push(O),At.enabled===!0&&At.isPresenting===!0){const Ft=R.xr.getDepthSensingMesh();Ft!==null&&oi(Ft,q,-1/0,R.sortObjects)}oi(b,q,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(bt,It),le=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,le&&Ct.addToRenderList(O,b),this.info.render.frame++,Bt===!0&&zt.beginShadows();const j=I.state.shadowsArray;if(Ot.render(j,b,q),Bt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Q.hasRenderPass())===!1){const Ft=O.opaque,Lt=O.transmissive;if(I.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt];Mn(Ft,Lt,b,Wt)}le&&Ct.render(b);for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt];ln(O,b,Wt,Wt.viewport)}}else Lt.length>0&&Mn(Ft,Lt,b,q),le&&Ct.render(b),ln(O,b,q)}at!==null&&st===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),$&&Q.end(R),b.isScene===!0&&b.onAfterRender(R,b,q),Pt.resetDefaultState(),dt=-1,ut=null,z.pop(),z.length>0?(I=z[z.length-1],Bt===!0&&zt.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function oi(b,q,rt,$){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){$&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4($e);const Ft=Rt.update(b),Lt=b.material;Lt.visible&&O.push(b,Ft,Lt,rt,_e.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){const Ft=Rt.update(b),Lt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_e.copy(b.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),_e.copy(Ft.boundingSphere.center)),_e.applyMatrix4(b.matrixWorld).applyMatrix4($e)),Array.isArray(Lt)){const Ht=Ft.groups;for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt],ee=Lt[Wt.materialIndex];ee&&ee.visible&&O.push(b,Ft,ee,rt,_e.z,Wt)}}else Lt.visible&&O.push(b,Ft,Lt,rt,_e.z,null)}}const wt=b.children;for(let Ft=0,Lt=wt.length;Ft<Lt;Ft++)oi(wt[Ft],q,rt,$)}function ln(b,q,rt,$){const{opaque:j,transmissive:wt,transparent:Ft}=b;I.setupLightsView(rt),Bt===!0&&zt.setGlobalState(R.clippingPlanes,rt),$&&qt.viewport(L.copy($)),j.length>0&&Mi(j,q,rt),wt.length>0&&Mi(wt,q,rt),Ft.length>0&&Mi(Ft,q,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Mn(b,q,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[$.id]===void 0){const ee=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:ee?ya:ri,minFilter:Ns,samples:Pe.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=I.state.transmissionRenderTarget[$.id],Ft=$.viewport||L;wt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Ht=R.getActiveCubeFace(),kt=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(Mt),xt=R.getClearAlpha(),xt<1&&R.setClearColor(16777215,.5),R.clear(),le&&Ct.render(rt);const te=R.toneMapping;R.toneMapping=Vi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),I.setupLightsView($),Bt===!0&&zt.setGlobalState(R.clippingPlanes,$),Mi(b,rt,$),W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ue=0,Qe=q.length;Ue<Qe;Ue++){const Ye=q[Ue],{object:ze,geometry:Zt,material:Le,group:se}=Ye;if(Le.side===_a&&ze.layers.test($.layers)){const yn=Le.side;Le.side=Zn,Le.needsUpdate=!0,Hs(ze,rt,$,Zt,Le,se),Le.side=yn,Le.needsUpdate=!0,ee=!0}}ee===!0&&(W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt))}R.setRenderTarget(Lt,Ht,kt),R.setClearColor(Mt,xt),Wt!==void 0&&($.viewport=Wt),R.toneMapping=te}function Mi(b,q,rt){const $=q.isScene===!0?q.overrideMaterial:null;for(let j=0,wt=b.length;j<wt;j++){const Ft=b[j],{object:Lt,geometry:Ht,group:kt}=Ft;let te=Ft.material;te.allowOverride===!0&&$!==null&&(te=$),Lt.layers.test(rt.layers)&&Hs(Lt,q,rt,Ht,te,kt)}}function Hs(b,q,rt,$,j,wt){b.onBeforeRender(R,q,rt,$,j,wt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(R,q,rt,$,b,wt),j.transparent===!0&&j.side===_a&&j.forceSinglePass===!1?(j.side=Zn,j.needsUpdate=!0,R.renderBufferDirect(rt,q,$,j,b,wt),j.side=Ma,j.needsUpdate=!0,R.renderBufferDirect(rt,q,$,j,b,wt),j.side=_a):R.renderBufferDirect(rt,q,$,j,b,wt),b.onAfterRender(R,q,rt,$,j,wt)}function Gs(b,q,rt){q.isScene!==!0&&(q=we);const $=M.get(b),j=I.state.lights,wt=I.state.shadowsArray,Ft=j.state.version,Lt=Xt.getParameters(b,j.state,wt,q,rt),Ht=Xt.getProgramCacheKey(Lt);let kt=$.programs;$.environment=b.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(b.isMeshStandardMaterial?vt:ht).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Nn),kt=new Map,$.programs=kt);let te=kt.get(Ht);if(te!==void 0){if($.currentProgram===te&&$.lightsStateVersion===Ft)return Qr(b,Lt),te}else Lt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Lt,R),te=Xt.acquireProgram(Lt,Ht),kt.set(Ht,te),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),Qr(b,Lt),$.needsLights=ba(b),$.lightsStateVersion=Ft,$.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=te,$.uniformsList=null,te}function ol(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Wc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Qr(b,q){const rt=M.get(b);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function os(b,q,rt,$,j){q.isScene!==!0&&(q=we),W.resetTextureUnits();const wt=q.fog,Ft=$.isMeshStandardMaterial?q.environment:null,Lt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:kr,Ht=($.isMeshStandardMaterial?vt:ht).get($.envMap||Ft),kt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!rt.morphAttributes.position,ee=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let Qe=Vi;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=R.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ze=Ye!==void 0?Ye.length:0,Zt=M.get($),Le=I.state.lights;if(Bt===!0&&(me===!0||b!==ut)){const bn=b===ut&&$.id===dt;zt.setState($,b,bn)}let se=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Le.state.version||Zt.outputColorSpace!==Lt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Ht||$.fog===!0&&Zt.fog!==wt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==kt||Zt.vertexTangents!==te||Zt.morphTargets!==Wt||Zt.morphNormals!==ee||Zt.morphColors!==Ue||Zt.toneMapping!==Qe||Zt.morphTargetsCount!==ze)&&(se=!0):(se=!0,Zt.__version=$.version);let yn=Zt.currentProgram;se===!0&&(yn=Gs($,q,j));let Yi=!1,En=!1,li=!1;const Ie=yn.getUniforms(),Tn=Zt.uniforms;if(qt.useProgram(yn.program)&&(Yi=!0,En=!0,li=!0),$.id!==dt&&(dt=$.id,En=!0),Yi||ut!==b){qt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",b.projectionMatrix),Ie.setValue(G,"viewMatrix",b.matrixWorldInverse);const An=Ie.map.cameraPosition;An!==void 0&&An.setValue(G,Se.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ut!==b&&(ut=b,En=!0,li=!0)}if(Zt.needsLights&&(Le.state.directionalShadowMap.length>0&&Ie.setValue(G,"directionalShadowMap",Le.state.directionalShadowMap,W),Le.state.spotShadowMap.length>0&&Ie.setValue(G,"spotShadowMap",Le.state.spotShadowMap,W),Le.state.pointShadowMap.length>0&&Ie.setValue(G,"pointShadowMap",Le.state.pointShadowMap,W)),j.isSkinnedMesh){Ie.setOptional(G,j,"bindMatrix"),Ie.setOptional(G,j,"bindMatrixInverse");const bn=j.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ie.setValue(G,"boneTexture",bn.boneTexture,W))}j.isBatchedMesh&&(Ie.setOptional(G,j,"batchingTexture"),Ie.setValue(G,"batchingTexture",j._matricesTexture,W),Ie.setOptional(G,j,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",j._indirectTexture,W),Ie.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",j._colorsTexture,W));const pn=rt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(j,rt,yn),(En||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Ie.setValue(G,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=Ht,Tn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=i1()),En&&(Ie.setValue(G,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&Jr(Tn,li),wt&&$.fog===!0&&ie.refreshFogUniforms(Tn,wt),ie.refreshMaterialUniforms(Tn,$,_t,nt,I.state.transmissionRenderTarget[b.id]),Wc.upload(G,ol(Zt),Tn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Wc.upload(G,ol(Zt),Tn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ie.setValue(G,"center",j.center),Ie.setValue(G,"modelViewMatrix",j.modelViewMatrix),Ie.setValue(G,"normalMatrix",j.normalMatrix),Ie.setValue(G,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let An=0,Vs=bn.length;An<Vs;An++){const yi=bn[An];St.update(yi,yn),St.bind(yi,yn)}}return yn}function Jr(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function ba(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,q,rt){const $=M.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(b.texture).__webglTexture=q,M.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const rt=M.get(b);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(b,q=0,rt=0){at=b,X=q,st=rt;let $=null,j=!1,wt=!1;if(b){const Lt=M.get(b);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(b.viewport),H.copy(b.scissor),it=b.scissorTest,qt.viewport(L),qt.scissor(H),qt.setScissorTest(it),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Lt.__hasExternalTextures)W.rebindTextures(b,M.get(b.texture).__webglTexture,M.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const te=b.depthTexture;if(Lt.__boundDepthTexture!==te){if(te!==null&&M.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const kt=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?$=kt[q][rt]:$=kt[q],j=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?$=M.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[rt]:$=kt,L.copy(b.viewport),H.copy(b.scissor),it=b.scissorTest}else L.copy(et).multiplyScalar(_t).floor(),H.copy(ct).multiplyScalar(_t).floor(),it=Dt;if(rt!==0&&($=Aa),qt.bindFramebuffer(G.FRAMEBUFFER,$)&&qt.drawBuffers(b,$),qt.viewport(L),qt.scissor(H),qt.setScissorTest(it),j){const Lt=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,rt)}else if(wt){const Lt=q;for(let Ht=0;Ht<b.textures.length;Ht++){const kt=M.get(b.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,rt,Lt)}}else if(b!==null&&rt!==0){const Lt=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(b,q,rt,$,j,wt,Ft,Lt=0){if(!(b&&b.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const kt=b.textures[Lt],te=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Wt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-$&&rt>=0&&rt<=b.height-j&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,rt,$,j,Tt.convert(te),Tt.convert(Wt),wt))}finally{const kt=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,q,rt,$,j,wt,Ft,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=b.width-$&&rt>=0&&rt<=b.height-j){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const kt=b.textures[Lt],te=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,rt,$,j,Tt.convert(te),Tt.convert(Wt),0);const Ue=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Ue);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await gM(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(ee),G.deleteSync(Qe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,rt=0){const $=Math.pow(2,-rt),j=Math.floor(b.image.width*$),wt=Math.floor(b.image.height*$),Ft=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ft,Lt,j,wt),qt.unbindTexture()};const ls=G.createFramebuffer(),Ra=G.createFramebuffer();this.copyTextureToTexture=function(b,q,rt=null,$=null,j=0,wt=null){wt===null&&(j!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=j,j=0):wt=0);let Ft,Lt,Ht,kt,te,Wt,ee,Ue,Qe;const Ye=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(rt!==null)Ft=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,te=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const pn=Math.pow(2,-j);Ft=Math.floor(Ye.width*pn),Lt=Math.floor(Ye.height*pn),b.isDataArrayTexture?Ht=Ye.depth:b.isData3DTexture?Ht=Math.floor(Ye.depth*pn):Ht=1,kt=0,te=0,Wt=0}$!==null?(ee=$.x,Ue=$.y,Qe=$.z):(ee=0,Ue=0,Qe=0);const ze=Tt.convert(q.format),Zt=Tt.convert(q.type);let Le;q.isData3DTexture?(W.setTexture3D(q,0),Le=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Le=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Le=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Ie=b.isDataArrayTexture||b.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const pn=M.get(b),bn=M.get(q),An=M.get(pn.__renderTarget),Vs=M.get(bn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let yi=0;yi<Ht;yi++)Ie&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(b).__webglTexture,j,Wt+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,wt,Qe+yi)),G.blitFramebuffer(kt,te,Ft,Lt,ee,Ue,Ft,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||M.has(b)){const pn=M.get(b),bn=M.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,ls),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ra);for(let An=0;An<Ht;An++)Ie?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,j,Wt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,j),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,wt,Qe+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,wt),j!==0?G.blitFramebuffer(kt,te,Ft,Lt,ee,Ue,Ft,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(Le,wt,ee,Ue,Qe+An,kt,te,Ft,Lt):G.copyTexSubImage2D(Le,wt,ee,Ue,kt,te,Ft,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Le,wt,ee,Ue,Qe,Ft,Lt,Ht,ze,Zt,Ye.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Le,wt,ee,Ue,Qe,Ft,Lt,Ht,ze,Ye.data):G.texSubImage3D(Le,wt,ee,Ue,Qe,Ft,Lt,Ht,ze,Zt,Ye):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,ee,Ue,Ft,Lt,ze,Zt,Ye.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,ee,Ue,Ye.width,Ye.height,ze,Ye.data):G.texSubImage2D(G.TEXTURE_2D,wt,ee,Ue,Ft,Lt,ze,Zt,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),wt===0&&q.generateMipmaps&&G.generateMipmap(Le),qt.unbindTexture()},this.initRenderTarget=function(b){M.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){X=0,st=0,at=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Kt=new ey;function Qt(o){o.colorSpace=si}function Jt(o){return new _v({map:o,alphaTest:.01,side:Ma,metalness:0,roughness:.4,transparent:!0,opacity:0})}function s1(){return I0[Math.floor(Math.random()*I0.length)]}const F0=new qr(5,7),Pr={back:[Jt(Kt.load("/cards/back_1.png",Qt))],taco:[Jt(Kt.load("/cards/taco_1.png",Qt)),Jt(Kt.load("/cards/taco_2.png",Qt)),Jt(Kt.load("/cards/taco_3.png",Qt)),Jt(Kt.load("/cards/taco_4.png",Qt)),Jt(Kt.load("/cards/taco_5.png",Qt)),Jt(Kt.load("/cards/taco_6.png",Qt)),Jt(Kt.load("/cards/taco_7.png",Qt)),Jt(Kt.load("/cards/taco_8.png",Qt)),Jt(Kt.load("/cards/taco_9.png",Qt)),Jt(Kt.load("/cards/taco_10.png",Qt)),Jt(Kt.load("/cards/taco_10.png",Qt))],cat:[Jt(Kt.load("/cards/cat_1.png",Qt)),Jt(Kt.load("/cards/cat_2.png",Qt)),Jt(Kt.load("/cards/cat_3.png",Qt)),Jt(Kt.load("/cards/cat_4.png",Qt)),Jt(Kt.load("/cards/cat_5.png",Qt)),Jt(Kt.load("/cards/cat_6.png",Qt)),Jt(Kt.load("/cards/cat_7.png",Qt)),Jt(Kt.load("/cards/cat_8.png",Qt)),Jt(Kt.load("/cards/cat_9.png",Qt)),Jt(Kt.load("/cards/cat_10.png",Qt)),Jt(Kt.load("/cards/cat_11.png",Qt))],goat:[Jt(Kt.load("/cards/goat_1.png",Qt)),Jt(Kt.load("/cards/goat_2.png",Qt)),Jt(Kt.load("/cards/goat_3.png",Qt)),Jt(Kt.load("/cards/goat_4.png",Qt)),Jt(Kt.load("/cards/goat_5.png",Qt)),Jt(Kt.load("/cards/goat_6.png",Qt)),Jt(Kt.load("/cards/goat_7.png",Qt)),Jt(Kt.load("/cards/goat_8.png",Qt)),Jt(Kt.load("/cards/goat_9.png",Qt)),Jt(Kt.load("/cards/goat_10.png",Qt)),Jt(Kt.load("/cards/goat_11.png",Qt))],cheese:[Jt(Kt.load("/cards/cheese_1.png",Qt)),Jt(Kt.load("/cards/cheese_2.png",Qt)),Jt(Kt.load("/cards/cheese_3.png",Qt)),Jt(Kt.load("/cards/cheese_4.png",Qt)),Jt(Kt.load("/cards/cheese_5.png",Qt)),Jt(Kt.load("/cards/cheese_6.png",Qt)),Jt(Kt.load("/cards/cheese_7.png",Qt)),Jt(Kt.load("/cards/cheese_8.png",Qt)),Jt(Kt.load("/cards/cheese_9.png",Qt)),Jt(Kt.load("/cards/cheese_10.png",Qt)),Jt(Kt.load("/cards/cheese_10.png",Qt))],pizza:[Jt(Kt.load("/cards/pizza_1.png",Qt)),Jt(Kt.load("/cards/pizza_2.png",Qt)),Jt(Kt.load("/cards/pizza_3.png",Qt)),Jt(Kt.load("/cards/pizza_4.png",Qt)),Jt(Kt.load("/cards/pizza_5.png",Qt)),Jt(Kt.load("/cards/pizza_6.png",Qt)),Jt(Kt.load("/cards/pizza_7.png",Qt)),Jt(Kt.load("/cards/pizza_8.png",Qt)),Jt(Kt.load("/cards/pizza_9.png",Qt)),Jt(Kt.load("/cards/pizza_10.png",Qt)),Jt(Kt.load("/cards/pizza_10.png",Qt))]},I0=[...Pr.taco,...Pr.cat,...Pr.goat,...Pr.cheese,...Pr.pizza],B0={type:"change"},Kd={type:"start"},Ev={type:"end"},Ic=new sv,H0=new is,r1=Math.cos(70*xM.DEG2RAD),_n=new J,jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bh=1e-6;class o1 extends ly{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new zs,this._lastTargetPosition=new J,this._quat=new zs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new h0,this._sphericalDelta=new h0,this._scale=1,this._panOffset=new J,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new J,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=u1.bind(this),this._onContextMenu=g1.bind(this),this._onMouseWheel=d1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=m1.bind(this),this._onTouchMove=_1.bind(this),this._onMouseDown=f1.bind(this),this._onMouseMove=h1.bind(this),this._interceptControlDown=v1.bind(this),this._interceptControlUp=x1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(B0),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<r1?this.object.lookAt(this.target):(H0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(H0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bh||this._lastTargetPosition.distanceToSquared(this.target)>Bh?(this.dispatchEvent(B0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let u=_n.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ue,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function l1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function c1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function u1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ev),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function f1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=We.DOLLY;break;case Ir.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}break;case Ir.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Kd)}function h1(o){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function d1(o){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(o.preventDefault(),this.dispatchEvent(Kd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ev))}function p1(o){this.enabled!==!1&&this._handleKeyDown(o)}function m1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=We.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=We.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Kd)}function _1(o){switch(this._trackPointer(o),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=We.NONE}}function g1(o){this.enabled!==!1&&o.preventDefault()}function v1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S1(o,t){if(t>1.5||t<0)return;let i=new J(Math.sin(o.theta)*8,o.target.y+1.5,Math.cos(o.theta)*8);o.children[0].material.opacity=Math.min(3*t),o.children[1].material.opacity=Math.min(3*t);let s=1-1/(1+Math.exp(5*(t-.5))),l=1-1/(1+Math.exp(20*(t-.9))),u=1-1/(1+Math.exp(15*(t-.7)));o.position.x=i.x*(1-s)+o.target.x*s,o.position.z=i.z*(1-s)+o.target.z*s,o.position.y=i.y*(1-l)+o.target.y*l,o.setRotationFromEuler(new Ui(Math.PI+u*Math.PI,o.theta,0,"YXZ"))}function M1(o){const t=new Ln,i=Pr.back[0],s=new xi(F0,o.clone()),l=new xi(F0,i.clone());return s.castShadow=!0,l.castShadow=!0,s.receiveShadow=!0,l.receiveShadow=!0,s.rotation.x=-Math.PI/2,l.rotation.x=-Math.PI/2,l.rotateY(Math.PI),t.add(s),t.add(l),t.scale.setScalar(.5),t.theta=Math.random()*Math.PI*2,t}const y1=Ii.forwardRef((o,t)=>{const i=Ii.useRef(null),s=Ii.useRef(null),l=Ii.useRef(null),u=Ii.useRef([]);return Ii.useImperativeHandle(t,()=>({add_card:()=>{var h;if(s.current&&l.current){const d=M1(s1());d.created_at=(h=l.current)==null?void 0:h.elapsedTime,d.target=new J(Math.random()-.5,(u.current.length+1)*.01,Math.random()-.5),s.current.add(d),u.current.push(d)}}})),Ii.useEffect(()=>{if(!i.current)return;const h=new XM,d=new oy,m=new vi(60,window.innerWidth/window.innerHeight,.1,1e3),p=new sy(16777215,.5),v=new ay(16777215,2);s.current=h,l.current=d,v.castShadow=!0,v.position.set(2,5,-1),h.add(p),h.add(v),h.add(v.target);const _=new a1({canvas:i.current,alpha:!0});_.shadowMap.enabled=!0,_.shadowMap.type=Fr,_.toneMapping=zd,_.setSize(window.innerWidth,window.innerHeight);const S=new qr(8,8),E=new _v({}),A=new xi(S,E);h.add(A),A.receiveShadow=!0,A.rotation.x=-Math.PI/2,m.position.y=9;const C=new o1(m,_.domElement);function y(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",y);function x(){d.getDelta();for(var P=0;P<u.current.length;P++){const N=u.current[P];S1(N,(d.elapsedTime-N.created_at)*1.5)}C.update(),_.render(h,m)}return _.setAnimationLoop(x),()=>{window.removeEventListener("resize",y),_.setAnimationLoop(null),_.dispose()}},[]),rs.jsx(rs.Fragment,{children:rs.jsx("canvas",{ref:i})})});function E1(){let o=Ii.useRef(null);const t=i=>{var s;i.key===" "&&((s=o.current)==null||s.add_card())};return Ii.useEffect(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}),[]),rs.jsx(rs.Fragment,{children:rs.jsx(y1,{ref:o})})}FS.createRoot(document.getElementById("root")).render(rs.jsx(Ii.StrictMode,{children:rs.jsx(E1,{})}));
