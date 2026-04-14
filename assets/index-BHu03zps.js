(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Kf={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function SS(){if(b0)return zo;b0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var A0;function MS(){return A0||(A0=1,Kf.exports=SS()),Kf.exports}var gn=MS(),Qf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function yS(){if(R0)return se;R0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(U,it,gt){this.props=U,this.context=it,this.refs=M,this.updater=gt||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,it){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,it,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function N(U,it,gt){this.props=U,this.context=it,this.refs=M,this.updater=gt||A}var L=N.prototype=new P;L.constructor=N,C(L,x.prototype),L.isPureReactComponent=!0;var F=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function R(U,it,gt){var bt=gt.ref;return{$$typeof:o,type:U,key:it,ref:bt!==void 0?bt:null,props:gt}}function w(U,it){return R(U.type,it,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function J(U){var it={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return it[gt]})}var $=/\/+/g;function ct(U,it){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):it.toString(36)}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(it){U.status==="pending"&&(U.status="fulfilled",U.value=it)},function(it){U.status==="pending"&&(U.status="rejected",U.reason=it)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,it,gt,bt,Bt){var nt=typeof U;(nt==="undefined"||nt==="boolean")&&(U=null);var ft=!1;if(U===null)ft=!0;else switch(nt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(U.$$typeof){case o:case e:ft=!0;break;case _:return ft=U._init,O(ft(U._payload),it,gt,bt,Bt)}}if(ft)return Bt=Bt(U),ft=bt===""?"."+ct(U,0):bt,F(Bt)?(gt="",ft!=null&&(gt=ft.replace($,"$&/")+"/"),O(Bt,it,gt,"",function(It){return It})):Bt!=null&&(X(Bt)&&(Bt=w(Bt,gt+(Bt.key==null||U&&U.key===Bt.key?"":(""+Bt.key).replace($,"$&/")+"/")+ft)),it.push(Bt)),1;ft=0;var wt=bt===""?".":bt+":";if(F(U))for(var Vt=0;Vt<U.length;Vt++)bt=U[Vt],nt=wt+ct(bt,Vt),ft+=O(bt,it,gt,nt,Bt);else if(Vt=E(U),typeof Vt=="function")for(U=Vt.call(U),Vt=0;!(bt=U.next()).done;)bt=bt.value,nt=wt+ct(bt,Vt++),ft+=O(bt,it,gt,nt,Bt);else if(nt==="object"){if(typeof U.then=="function")return O(ut(U),it,gt,bt,Bt);throw it=String(U),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(U,it,gt){if(U==null)return U;var bt=[],Bt=0;return O(U,bt,"","",function(nt){return it.call(gt,nt,Bt++)}),bt}function at(U){if(U._status===-1){var it=U._result;it=it(),it.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=it)}if(U._status===1)return U._result.default;throw U._result}var Mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:H,forEach:function(U,it,gt){H(U,function(){it.apply(this,arguments)},gt)},count:function(U){var it=0;return H(U,function(){it++}),it},toArray:function(U){return H(U,function(it){return it})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return se.Activity=g,se.Children=xt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=N,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(U,it,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var bt=C({},U.props),Bt=U.key;if(it!=null)for(nt in it.key!==void 0&&(Bt=""+it.key),it)!j.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(bt[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)bt.children=gt;else if(1<nt){for(var ft=Array(nt),wt=0;wt<nt;wt++)ft[wt]=arguments[wt+2];bt.children=ft}return R(U.type,Bt,bt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},se.createElement=function(U,it,gt){var bt,Bt={},nt=null;if(it!=null)for(bt in it.key!==void 0&&(nt=""+it.key),it)j.call(it,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Bt[bt]=it[bt]);var ft=arguments.length-2;if(ft===1)Bt.children=gt;else if(1<ft){for(var wt=Array(ft),Vt=0;Vt<ft;Vt++)wt[Vt]=arguments[Vt+2];Bt.children=wt}if(U&&U.defaultProps)for(bt in ft=U.defaultProps,ft)Bt[bt]===void 0&&(Bt[bt]=ft[bt]);return R(U,nt,Bt)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=X,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:at}},se.memo=function(U,it){return{$$typeof:p,type:U,compare:it===void 0?null:it}},se.startTransition=function(U){var it=z.T,gt={};z.T=gt;try{var bt=U(),Bt=z.S;Bt!==null&&Bt(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(I,Mt)}catch(nt){Mt(nt)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),z.T=it}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(U){return z.H.use(U)},se.useActionState=function(U,it,gt){return z.H.useActionState(U,it,gt)},se.useCallback=function(U,it){return z.H.useCallback(U,it)},se.useContext=function(U){return z.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,it){return z.H.useDeferredValue(U,it)},se.useEffect=function(U,it){return z.H.useEffect(U,it)},se.useEffectEvent=function(U){return z.H.useEffectEvent(U)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(U,it,gt){return z.H.useImperativeHandle(U,it,gt)},se.useInsertionEffect=function(U,it){return z.H.useInsertionEffect(U,it)},se.useLayoutEffect=function(U,it){return z.H.useLayoutEffect(U,it)},se.useMemo=function(U,it){return z.H.useMemo(U,it)},se.useOptimistic=function(U,it){return z.H.useOptimistic(U,it)},se.useReducer=function(U,it,gt){return z.H.useReducer(U,it,gt)},se.useRef=function(U){return z.H.useRef(U)},se.useState=function(U){return z.H.useState(U)},se.useSyncExternalStore=function(U,it,gt){return z.H.useSyncExternalStore(U,it,gt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.4",se}var C0;function Dd(){return C0||(C0=1,Qf.exports=yS()),Qf.exports}var Ye=Dd(),Jf={exports:{}},Fo={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function ES(){return w0||(w0=1,(function(o){function e(O,H){var at=O.length;O.push(H);t:for(;0<at;){var Mt=at-1>>>1,xt=O[Mt];if(0<l(xt,H))O[Mt]=H,O[at]=xt,at=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],at=O.pop();if(at!==H){O[0]=at;t:for(var Mt=0,xt=O.length,U=xt>>>1;Mt<U;){var it=2*(Mt+1)-1,gt=O[it],bt=it+1,Bt=O[bt];if(0>l(gt,at))bt<xt&&0>l(Bt,gt)?(O[Mt]=Bt,O[bt]=at,Mt=bt):(O[Mt]=gt,O[it]=at,Mt=it);else if(bt<xt&&0>l(Bt,at))O[Mt]=Bt,O[bt]=at,Mt=bt;else break t}}return H}function l(O,H){var at=O.sortIndex-H.sortIndex;return at!==0?at:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,S=3,E=!1,A=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=O)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(O){if(C=!1,L(O),!A)if(i(m)!==null)A=!0,I||(I=!0,J());else{var H=i(p);H!==null&&ut(F,H.startTime-O)}}var I=!1,z=-1,j=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<j)}function X(){if(M=!1,I){var O=o.unstable_now();R=O;var H=!0;try{t:{A=!1,C&&(C=!1,P(z),z=-1),E=!0;var at=S;try{e:{for(L(O),g=i(m);g!==null&&!(g.expirationTime>O&&w());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,S=g.priorityLevel;var xt=Mt(g.expirationTime<=O);if(O=o.unstable_now(),typeof xt=="function"){g.callback=xt,L(O),H=!0;break e}g===i(m)&&r(m),L(O)}else r(m);g=i(m)}if(g!==null)H=!0;else{var U=i(p);U!==null&&ut(F,U.startTime-O),H=!1}}break t}finally{g=null,S=at,E=!1}H=void 0}}finally{H?J():I=!1}}}var J;if(typeof N=="function")J=function(){N(X)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=X,J=function(){ct.postMessage(null)}}else J=function(){x(X,0)};function ut(O,H){z=x(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var at=S;S=H;try{return O()}finally{S=at}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var at=S;S=O;try{return H()}finally{S=at}},o.unstable_scheduleCallback=function(O,H,at){var Mt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Mt+at:Mt):at=Mt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,O={id:_++,callback:H,priorityLevel:O,startTime:at,expirationTime:xt,sortIndex:-1},at>Mt?(O.sortIndex=at,e(p,O),i(m)===null&&O===i(p)&&(C?(P(z),z=-1):C=!0,ut(F,at-Mt))):(O.sortIndex=xt,e(m,O),A||E||(A=!0,I||(I=!0,J()))),O},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(O){var H=S;return function(){var at=S;S=H;try{return O.apply(this,arguments)}finally{S=at}}}})(th)),th}var D0;function TS(){return D0||(D0=1,$f.exports=ES()),$f.exports}var eh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function bS(){if(U0)return On;U0=1;var o=Dd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.4",On}var L0;function AS(){if(L0)return eh.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=bS(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function RS(){if(N0)return Fo;N0=1;var o=TS(),e=Dd(),i=AS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var ut=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function U(t){return{current:t}}function it(t){0>xt||(t.current=Mt[xt],Mt[xt]=null,xt--)}function gt(t,n){xt++,Mt[xt]=t.current,t.current=n}var bt=U(null),Bt=U(null),nt=U(null),ft=U(null);function wt(t,n){switch(gt(nt,n),gt(Bt,t),gt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(bt),gt(bt,t)}function Vt(){it(bt),it(Bt),it(nt)}function It(t){t.memoizedState!==null&&gt(ft,t);var n=bt.current,a=jg(n,t.type);n!==a&&(gt(Bt,t),gt(bt,a))}function pe(t){Bt.current===t&&(it(bt),it(Bt)),ft.current===t&&(it(ft),Lo._currentValue=at)}var $e,ve;function me(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+ve}var we=!1;function le(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var et=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){et=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),Q=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===Q.length)for(s=B.length-1,u=Q.length-1;1<=s&&0<=u&&B[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==Q[u]){var ht=`
`+B[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return me("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ke=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Pe=o.unstable_cancelCallback,qt=o.unstable_shouldYield,D=o.unstable_requestPaint,y=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ie=o.unstable_setDisableYieldValue,yt=null,Et=null;function zt(t){if(typeof Xt=="function"&&ie(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,t)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,ce=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Ct(t)/ce|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=St(s):(v&=T,v!==0?u=St(v):a||(a=T&~t,a!==0&&(u=St(a))))):(T=s&~f,T!==0?u=St(T):v!==0?u=St(v):a||(a=s&~t,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,Q=t.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Ot(a),mt=1<<ht;T[ht]=0,B[ht]=-1;var et=Q[ht];if(et!==null)for(Q[ht]=null,ht=0;ht<et.length;ht++){var ot=et[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&il(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function il(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Xs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Pr(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:v0(t.type))}function Ui(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+oi,Mn="__reactProps$"+oi,Si="__reactContainer$"+oi,Fr="__reactEvents$"+oi,Br="__reactListeners$"+oi,al="__reactHandles$"+oi,qs="__reactResources$"+oi,ar="__reactMarker$"+oi;function Ys(t){delete t[ln],delete t[Mn],delete t[Fr],delete t[Br],delete t[al]}function Ta(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=n0(t);t!==null;){if(a=t[ln])return a;t=n0(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[ln]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Aa(t){var n=t[qs];return n||(n=t[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[ar]=!0}var q=new Set,st={};function tt(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Ht(t){return Ke.call(Lt,t)?!0:Ke.call(Ft,t)?!1:Dt.test(t)?Lt[t]=!0:(Ft[t]=!0,!1)}function kt(t,n,a){if(Ht(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function te(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){if(!t._valueTracker){var n=De(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function ze(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=De(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function re(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?En(t,v,ee(n)):a!=null?En(t,v,ee(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ee(T):t.removeAttribute("name")}function Wi(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(t);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),qe(t)}function En(t,n,a){n==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function li(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Be(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function Tn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),qe(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ir(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&An(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&An(t,f,n[f])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return _v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var qu=null;function Yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,Gr=null;function Yd(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Mn]||null;if(!u)throw Error(r(90));yn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ze(s)}break t;case"textarea":Be(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(t,!!a.multiple,n,!1)}}}var Zu=!1;function Zd(t,n,a){if(Zu)return t(n,a);Zu=!0;try{var s=t(n);return s}finally{if(Zu=!1,(Hr!==null||Gr!==null)&&(ql(),Hr&&(n=Hr,t=Gr,Gr=Hr=null,Yd(n),t)))for(n=0;n<t.length;n++)Yd(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Mn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(Yi)try{var js={};Object.defineProperty(js,"passive",{get:function(){ju=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{ju=!1}var Ra=null,Ku=null,sl=null;function jd(){if(sl)return sl;var t,n=Ku,a=n.length,s,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return sl=u.slice(t,1<s?1-s:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Kd(){return!1}function Gn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:Kd,this.isPropagationStopped=Kd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Gn(sr),Ks=g({},sr,{view:0,detail:0}),vv=Gn(Ks),Qu,Ju,Qs,cl=g({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Qu=t.screenX-Qs.screenX,Ju=t.screenY-Qs.screenY):Ju=Qu=0,Qs=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Qd=Gn(cl),xv=g({},cl,{dataTransfer:0}),Sv=Gn(xv),Mv=g({},Ks,{relatedTarget:0}),$u=Gn(Mv),yv=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Gn(yv),Tv=g({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=Gn(Tv),Av=g({},sr,{data:0}),Jd=Gn(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wv[t])?!!n[t]:!1}function tc(){return Dv}var Uv=g({},Ks,{key:function(t){if(t.key){var n=Rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=Gn(Uv),Nv=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Gn(Nv),Ov=g({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Pv=Gn(Ov),zv=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=Gn(zv),Bv=g({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Gn(Bv),Hv=g({},sr,{newState:0,oldState:0}),Gv=Gn(Hv),Vv=[9,13,27,32],ec=Yi&&"CompositionEvent"in window,Js=null;Yi&&"documentMode"in document&&(Js=document.documentMode);var Xv=Yi&&"TextEvent"in window&&!Js,tp=Yi&&(!ec||Js&&8<Js&&11>=Js),ep=" ",np=!1;function ip(t,n){switch(t){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function kv(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return t=n.data,t===ep&&np?null:t;default:return null}}function Wv(t,n){if(Vr)return t==="compositionend"||!ec&&ip(t,n)?(t=jd(),sl=Ku=Ra=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qv[t.type]:n==="textarea"}function sp(t,n,a,s){Hr?Gr?Gr.push(s):Gr=[s]:Hr=s,n=$l(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var $s=null,to=null;function Yv(t){Vg(t,0)}function fl(t){var n=rr(t);if(ze(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(Yi){var nc;if(Yi){var ic="oninput"in document;if(!ic){var up=document.createElement("div");up.setAttribute("oninput","return;"),ic=typeof up.oninput=="function"}nc=ic}else nc=!1;lp=nc&&(!document.documentMode||9<document.documentMode)}function cp(){$s&&($s.detachEvent("onpropertychange",fp),to=$s=null)}function fp(t){if(t.propertyName==="value"&&fl(to)){var n=[];sp(n,to,t,Yu(t)),Zd(Yv,n)}}function Zv(t,n,a){t==="focusin"?(cp(),$s=n,to=a,$s.attachEvent("onpropertychange",fp)):t==="focusout"&&cp()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(to)}function Kv(t,n){if(t==="click")return fl(n)}function Qv(t,n){if(t==="input"||t==="change")return fl(n)}function Jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Jv;function eo(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ke.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=hp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=jt(t.document)}return n}function ac(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $v=Yi&&"documentMode"in document&&11>=document.documentMode,Xr=null,rc=null,no=null,sc=!1;function gp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||Xr==null||Xr!==jt(s)||(s=Xr,"selectionStart"in s&&ac(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),no&&eo(no,s)||(no=s,s=$l(rc,"onSelect"),0<s.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Xr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var kr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},oc={},_p={};Yi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function lr(t){if(oc[t])return oc[t];if(!kr[t])return t;var n=kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return oc[t]=n[a];return t}var vp=lr("animationend"),xp=lr("animationiteration"),Sp=lr("animationstart"),tx=lr("transitionrun"),ex=lr("transitionstart"),nx=lr("transitioncancel"),Mp=lr("transitionend"),yp=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function yi(t,n){yp.set(t,n),tt(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],Wr=0,uc=0;function dl(){for(var t=Wr,n=uc=Wr=0;n<t;){var a=ui[n];ui[n++]=null;var s=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Ep(a,u,f)}}function pl(t,n,a,s){ui[Wr++]=t,ui[Wr++]=n,ui[Wr++]=a,ui[Wr++]=s,uc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function cc(t,n,a,s){return pl(t,n,a,s),ml(t)}function ur(t,n){return pl(t,null,null,n),ml(t)}function Ep(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ot(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<bo)throw bo=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qr={};function ix(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new ix(t,n,a,s)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")fc(t)&&(v=1);else if(typeof t=="string")v=lS(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Kn(31,a,n,u),t.elementType=R,t.lanes=f,t;case C:return cr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=Kn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case F:return t=Kn(13,a,n,u),t.elementType=F,t.lanes=f,t;case I:return t=Kn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:v=10;break t;case P:v=9;break t;case L:v=11;break t;case z:v=14;break t;case j:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function cr(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function hc(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function bp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function dc(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ap=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Yr=[],Zr=0,_l=null,io=0,fi=[],hi=0,Ca=null,Li=1,Ni="";function ji(t,n){Yr[Zr++]=io,Yr[Zr++]=_l,_l=t,io=n}function Rp(t,n,a){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=Ca,Ca=t;var s=Li;t=Ni;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Li=1<<32-Ot(n)+u|a<<u|s,Ni=f+t}else Li=1<<f|a<<u|s,Ni=t}function pc(t){t.return!==null&&(ji(t,1),Rp(t,1,0))}function mc(t){for(;t===_l;)_l=Yr[--Zr],Yr[Zr]=null,io=Yr[--Zr],Yr[Zr]=null;for(;t===Ca;)Ca=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null,Li=fi[--hi],fi[hi]=null}function Cp(t,n){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=Ca,Li=n.id,Ni=n.overflow,Ca=t}var Rn=null,Ze=null,Me=!1,wa=null,di=!1,gc=Error(r(519));function Da(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ci(n,t)),gc}function wp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ln]=t,n[Mn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)_e(Ro[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Wi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Tn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||qg(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Da(t,!0)}function Dp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function jr(t){if(t!==Rn)return!1;if(!Me)return Dp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Da(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=e0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=e0(t)}else n===27?(n=Ze,ka(t.type)?(t=Hf,Hf=null,Ze=t):Ze=n):Ze=Rn?mi(t.stateNode.nextSibling):null;return!0}function fr(){Ze=Rn=null,Me=!1}function _c(){var t=wa;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),wa=null),t}function ao(t){wa===null?wa=[t]:wa.push(t)}var vc=U(null),hr=null,Ki=null;function Ua(t,n,a){gt(vc,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=vc.current,it(vc)}function xc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Sc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xc(f.return,a,t),s||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),xc(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Kr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;jn(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Sc(n,t,a,s),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){hr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Up(hr,t)}function xl(t,n){return hr===null&&dr(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(r(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rx=o.unstable_scheduleCallback,sx=o.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mc(){return{controller:new ax,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&rx(sx,function(){t.controller.abort()})}var so=null,yc=0,Qr=0,Jr=null;function ox(t,n){if(so===null){var a=so=[];yc=0,Qr=Af(),Jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yc++,n.then(Lp,Lp),n}function Lp(){if(--yc===0&&so!==null){Jr!==null&&(Jr.status="fulfilled");var t=so;so=null,Qr=0,Jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Np=O.S;O.S=function(t,n){gg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(t,n),Np!==null&&Np(t,n)};var pr=U(null);function Ec(){var t=pr.current;return t!==null?t:We.pooledCache}function Sl(t,n){n===null?gt(pr,pr.current):gt(pr,n.pool)}function Op(){var t=Ec();return t===null?null:{parent:un._currentValue,pool:t}}var $r=Error(r(460)),Tc=Error(r(474)),Ml=Error(r(542)),yl={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t}throw gr=n,$r}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,$r):a}}var gr=null;function Fp(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function Bp(t){if(t===$r||t===Ml)throw Error(r(483))}var ts=null,oo=0;function El(t){var n=oo;return oo+=1,ts===null&&(ts=[]),zp(ts,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ip(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Zi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,K,pt){return V===null||V.tag!==6?(V=hc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function B(Y,V,K,pt){var $t=K.type;return $t===C?ht(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===j&&mr($t)===V.type)?(V=u(V,K.props),lo(V,K),V.return=Y,V):(V=gl(K.type,K.key,K.props,null,Y.mode,pt),lo(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=dc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function ht(Y,V,K,pt,$t){return V===null||V.tag!==7?(V=cr(K,Y.mode,pt,$t),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function mt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=hc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=gl(V.type,V.key,V.props,null,Y.mode,K),lo(K,V),K.return=Y,K;case A:return V=dc(V,Y.mode,K),V.return=Y,V;case j:return V=mr(V),mt(Y,V,K)}if(ut(V)||J(V))return V=cr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,El(V),K);if(V.$$typeof===N)return mt(Y,xl(Y,V),K);Tl(Y,V)}return null}function et(Y,V,K,pt){var $t=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return $t!==null?null:T(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===$t?B(Y,V,K,pt):null;case A:return K.key===$t?Q(Y,V,K,pt):null;case j:return K=mr(K),et(Y,V,K,pt)}if(ut(K)||J(K))return $t!==null?null:ht(Y,V,K,pt,null);if(typeof K.then=="function")return et(Y,V,El(K),pt);if(K.$$typeof===N)return et(Y,V,xl(Y,K),pt);Tl(Y,K)}return null}function ot(Y,V,K,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(V,Y,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?K:pt.key)||null,B(V,Y,pt,$t);case A:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,$t);case j:return pt=mr(pt),ot(Y,V,K,pt,$t)}if(ut(pt)||J(pt))return Y=Y.get(K)||null,ht(V,Y,pt,$t,null);if(typeof pt.then=="function")return ot(Y,V,K,El(pt),$t);if(pt.$$typeof===N)return ot(Y,V,K,xl(V,pt),$t);Tl(V,pt)}return null}function Gt(Y,V,K,pt){for(var $t=null,Ae=null,Yt=V,fe=V=0,Se=null;Yt!==null&&fe<K.length;fe++){Yt.index>fe?(Se=Yt,Yt=null):Se=Yt.sibling;var Re=et(Y,Yt,K[fe],pt);if(Re===null){Yt===null&&(Yt=Se);break}t&&Yt&&Re.alternate===null&&n(Y,Yt),V=f(Re,V,fe),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re,Yt=Se}if(fe===K.length)return a(Y,Yt),Me&&ji(Y,fe),$t;if(Yt===null){for(;fe<K.length;fe++)Yt=mt(Y,K[fe],pt),Yt!==null&&(V=f(Yt,V,fe),Ae===null?$t=Yt:Ae.sibling=Yt,Ae=Yt);return Me&&ji(Y,fe),$t}for(Yt=s(Yt);fe<K.length;fe++)Se=ot(Yt,Y,fe,K[fe],pt),Se!==null&&(t&&Se.alternate!==null&&Yt.delete(Se.key===null?fe:Se.key),V=f(Se,V,fe),Ae===null?$t=Se:Ae.sibling=Se,Ae=Se);return t&&Yt.forEach(function(ja){return n(Y,ja)}),Me&&ji(Y,fe),$t}function ne(Y,V,K,pt){if(K==null)throw Error(r(151));for(var $t=null,Ae=null,Yt=V,fe=V=0,Se=null,Re=K.next();Yt!==null&&!Re.done;fe++,Re=K.next()){Yt.index>fe?(Se=Yt,Yt=null):Se=Yt.sibling;var ja=et(Y,Yt,Re.value,pt);if(ja===null){Yt===null&&(Yt=Se);break}t&&Yt&&ja.alternate===null&&n(Y,Yt),V=f(ja,V,fe),Ae===null?$t=ja:Ae.sibling=ja,Ae=ja,Yt=Se}if(Re.done)return a(Y,Yt),Me&&ji(Y,fe),$t;if(Yt===null){for(;!Re.done;fe++,Re=K.next())Re=mt(Y,Re.value,pt),Re!==null&&(V=f(Re,V,fe),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return Me&&ji(Y,fe),$t}for(Yt=s(Yt);!Re.done;fe++,Re=K.next())Re=ot(Yt,Y,fe,Re.value,pt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?fe:Re.key),V=f(Re,V,fe),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(xS){return n(Y,xS)}),Me&&ji(Y,fe),$t}function ke(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var $t=K.key;V!==null;){if(V.key===$t){if($t=K.type,$t===C){if(V.tag===7){a(Y,V.sibling),pt=u(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===j&&mr($t)===V.type){a(Y,V.sibling),pt=u(V,K.props),lo(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===C?(pt=cr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=gl(K.type,K.key,K.props,null,Y.mode,pt),lo(pt,K),pt.return=Y,Y=pt)}return v(Y);case A:t:{for($t=K.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=u(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=dc(K,Y.mode,pt),pt.return=Y,Y=pt}return v(Y);case j:return K=mr(K),ke(Y,V,K,pt)}if(ut(K))return Gt(Y,V,K,pt);if(J(K)){if($t=J(K),typeof $t!="function")throw Error(r(150));return K=$t.call(K),ne(Y,V,K,pt)}if(typeof K.then=="function")return ke(Y,V,El(K),pt);if(K.$$typeof===N)return ke(Y,V,xl(Y,K),pt);Tl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=hc(K,Y.mode,pt),pt.return=Y,Y=pt),v(Y)):a(Y,V)}return function(Y,V,K,pt){try{oo=0;var $t=ke(Y,V,K,pt);return ts=null,$t}catch(Yt){if(Yt===$r||Yt===Ml)throw Yt;var Ae=Kn(29,Yt,null,Y.mode);return Ae.lanes=pt,Ae.return=Y,Ae}finally{}}}var _r=Ip(!0),Hp=Ip(!1),La=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ml(t),Ep(t,null,a),n}return pl(t,s,n,a),ml(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}function Rc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cc=!1;function co(){if(Cc){var t=Jr;if(t!==null)throw t}}function fo(t,n,a,s){Cc=!1;var u=t.updateQueue;La=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,Q=B.next;B.next=null,v===null?f=Q:v.next=Q,v=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=Q:T.next=Q,ht.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;v=0,ht=Q=B=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(xe&et)===et:(s&et)===et){et!==0&&et===Qr&&(Cc=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,ne=T;et=n;var ke=a;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){mt=Gt.call(ke,mt,et);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,et=typeof Gt=="function"?Gt.call(ke,mt,et):Gt,et==null)break t;mt=g({},mt,et);break t;case 2:La=!0}}et=T.callback,et!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(Q=ht=ot,B=mt):ht=ht.next=ot,v|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ia|=v,t.lanes=v,t.memoizedState=mt}}function Gp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var es=U(null),bl=U(0);function Xp(t,n){t=sa,gt(bl,t),gt(es,n),sa=t|n.baseLanes}function wc(){gt(bl,sa),gt(es,es.current)}function Dc(){sa=bl.current,it(es),it(bl)}var Qn=U(null),pi=null;function Pa(t){var n=t.alternate;gt(sn,sn.current&1),gt(Qn,t),pi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(pi=t)}function Uc(t){gt(sn,sn.current),gt(Qn,t),pi===null&&(pi=t)}function kp(t){t.tag===22?(gt(sn,sn.current),gt(Qn,t),pi===null&&(pi=t)):za()}function za(){gt(sn,sn.current),gt(Qn,Qn.current)}function Jn(t){it(Qn),pi===t&&(pi=null),it(sn)}var sn=U(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,ue=null,Ve=null,cn=null,Rl=!1,ns=!1,vr=!1,Cl=0,ho=0,is=null,ux=0;function en(){throw Error(r(321))}function Lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Nc(t,n,a,s,u,f){return Ji=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Rm:Zc,vr=!1,f=a(s,u),vr=!1,ns&&(f=qp(n,a,s,u)),Wp(t),f}function Wp(t){O.H=go;var n=Ve!==null&&Ve.next!==null;if(Ji=0,cn=Ve=ue=null,Rl=!1,ho=0,is=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&vl(t)&&(fn=!0))}function qp(t,n,a,s){ue=t;var u=0;do{if(ns&&(is=null),ho=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ve=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Cm,f=n(a,s)}while(ns);return f}function cx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(ue.flags|=1024),n}function Oc(){var t=Cl!==0;return Cl=0,t}function Pc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zc(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}Ji=0,cn=Ve=ue=null,ns=!1,ho=Cl=0,is=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ue.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Ve===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?ue.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?ue.memoizedState=cn=t:cn=cn.next=t}return cn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,is===null&&(is=[]),t=zp(is,t,n),n=ue,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Rm:Zc),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===N)return Cn(t)}throw Error(r(438,String(t)))}function Fc(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=on();return Bc(n,Ve,t)}function Bc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,B=null,Q=n,ht=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(xe&mt)===mt:(Ji&mt)===mt){var et=Q.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Qr&&(ht=!0);else if((Ji&et)===et){Q=Q.next,et===Qr&&(ht=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=mt,v=f):B=B.next=mt,ue.lanes|=et,Ia|=et;mt=Q.action,vr&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else et={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=et,v=f):B=B.next=et,ue.lanes|=mt,Ia|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?v=f:B.next=T,!jn(f,t.memoizedState)&&(fn=!0,ht&&(a=Jr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ic(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Yp(t,n,a){var s=ue,u=on(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!jn((Ve||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,Vc(Kp.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},jp.bind(null,s,u,a,n),null),We===null)throw Error(r(349));f||(Ji&127)!==0||Zp(s,n,a)}return a}function Zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=wl(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jp(t,n,a,s){n.value=a,n.getSnapshot=s,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Jp(t){var n=ur(t,2);n!==null&&qn(n,t,2)}function Hc(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),vr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function $p(t,n,a,s){return t.baseState=a,Bc(t,Ve,typeof s=="function"?s:$i)}function fx(t,n,a,s,u){if(Ol(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var T=a(u,s),B=O.S;B!==null&&B(v,T),em(t,n,T)}catch(Q){Gc(t,n,Q)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,s),em(t,n,f)}catch(Q){Gc(t,n,Q)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){nm(t,n,s)},function(s){return Gc(t,n,s)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Gc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==s)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function rm(t,n){if(Me){var a=We.formState;if(a!==null){t:{var s=ue;if(Me){if(Ze){e:{for(var u=Ze,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=mi(u.nextSibling),s=u.data==="F!";break t}}Da(s)}s=!1}s&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=s,a=Tm.bind(null,ue,s),s.dispatch=a,s=Hc(!1),f=Yc.bind(null,ue,!1,s.queue),s=In(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=fx.bind(null,ue,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function sm(t){var n=on();return om(n,Ve,t)}function om(t,n,a){if(n=Bc(t,n,am)[0],t=Ul($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=po(n)}catch(v){throw v===$r?Ml:v}else s=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,as(9,{destroy:void 0},hx.bind(null,u,a),null)),[s,f,t]}function hx(t,n){t.action=n}function lm(t){var n=on(),a=Ve;if(a!==null)return om(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function as(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=wl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function um(){return on().memoizedState}function Ll(t,n,a,s){var u=In();ue.flags|=t,u.memoizedState=as(1|n,{destroy:void 0},a,s===void 0?null:s)}function Nl(t,n,a,s){var u=on();s=s===void 0?null:s;var f=u.memoizedState.inst;Ve!==null&&s!==null&&Lc(s,Ve.memoizedState.deps)?u.memoizedState=as(n,f,a,s):(ue.flags|=t,u.memoizedState=as(1|n,f,a,s))}function cm(t,n){Ll(8390656,8,t,n)}function Vc(t,n){Nl(2048,8,t,n)}function dx(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=wl(),ue.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fm(t){var n=on().memoizedState;return dx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function hm(t,n){return Nl(4,2,t,n)}function dm(t,n){return Nl(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,pm.bind(null,n,t),a)}function Xc(){}function gm(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function _m(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lc(n,s[1]))return s[0];if(s=t(),vr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s}function kc(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=vg(),ue.lanes|=t,Ia|=t,a)}function vm(t,n,a,s){return jn(a,n)?a:es.current!==null?(t=kc(t,a,s),jn(t,n)||(fn=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(xe&261930)===0?(fn=!0,t.memoizedState=a):(t=vg(),ue.lanes|=t,Ia|=t,n)}function xm(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=O.T,T={};O.T=T,Yc(t,!1,n,a);try{var B=u(),Q=O.S;if(Q!==null&&Q(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=lx(B,s);mo(t,n,ht,ei(t))}else mo(t,n,s,ei(t))}catch(mt){mo(t,n,{then:function(){},status:"rejected",reason:mt},ei())}finally{H.p=f,v!==null&&T.types!==null&&(v.types=T.types),O.T=v}}function px(){}function Wc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Sm(t).queue;xm(t,u,n,at,a===null?px:function(){return Mm(t),a(s)})}function Sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mm(t){var n=Sm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},ei())}function qc(){return Cn(Lo)}function ym(){return on().memoizedState}function Em(){return on().memoizedState}function mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Na(a);var s=Oa(n,t,a);s!==null&&(qn(s,n,a),uo(s,n,a)),n={cache:Mc()},t.payload=n;return}n=n.return}}function gx(t,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?bm(n,a):(a=cc(t,n,a,s),a!==null&&(qn(a,t,s),Am(a,n,s)))}function Tm(t,n,a){var s=ei();mo(t,n,a,s)}function mo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,v))return pl(t,n,u,0),We===null&&dl(),!1}catch{}finally{}if(a=cc(t,n,u,s),a!==null)return qn(a,t,s),Am(a,n,s),!0}return!1}function Yc(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(r(479))}else n=cc(t,a,s,2),n!==null&&qn(n,t,2)}function Ol(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function bm(t,n){ns=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}var go={readContext:Cn,use:Dl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};go.useEffectEvent=en;var Rm={readContext:Cn,use:Dl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var s=t();if(vr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=In();if(a!==void 0){var u=a(n);if(vr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=gx.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Hc(t);var n=t.queue,a=Tm.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xc,useDeferredValue:function(t,n){var a=In();return kc(a,t,n)},useTransition:function(){var t=Hc(!1);return t=xm.bind(null,ue,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,u=In();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(xe&127)!==0||Zp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,cm(Kp.bind(null,s,f,t),[t]),s.flags|=2048,as(9,{destroy:void 0},jp.bind(null,s,f,a,n),null),a},useId:function(){var t=In(),n=We.identifierPrefix;if(Me){var a=Ni,s=Li;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ux++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qc,useFormState:rm,useActionState:rm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yc.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fc,useCacheRefresh:function(){return In().memoizedState=mx.bind(null,ue)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zc={readContext:Cn,use:Dl,useCallback:gm,useContext:Cn,useEffect:Vc,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Ul,useRef:um,useState:function(){return Ul($i)},useDebugValue:Xc,useDeferredValue:function(t,n){var a=on();return vm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ul($i)[0],n=on().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qc,useFormState:sm,useActionState:sm,useOptimistic:function(t,n){var a=on();return $p(a,Ve,t,n)},useMemoCache:Fc,useCacheRefresh:Em};Zc.useEffectEvent=fm;var Cm={readContext:Cn,use:Dl,useCallback:gm,useContext:Cn,useEffect:Vc,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Ic,useRef:um,useState:function(){return Ic($i)},useDebugValue:Xc,useDeferredValue:function(t,n){var a=on();return Ve===null?kc(a,t,n):vm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ic($i)[0],n=on().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qc,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=on();return Ve!==null?$p(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:Em};Cm.useEffectEvent=fm;function jc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Kc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Na(s);u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,s),n!==null&&(qn(n,t,s),uo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Na(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,s),n!==null&&(qn(n,t,s),uo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),s=Na(a);s.tag=2,n!=null&&(s.callback=n),n=Oa(t,s,a),n!==null&&(qn(n,t,a),uo(n,t,a))}};function wm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!eo(a,s)||!eo(u,f):!0}function Dm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Kc.enqueueReplaceState(n,n.state,null)}function xr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Um(t){hl(t)}function Lm(t){console.error(t)}function Nm(t){hl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Om(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qc(t,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Pm(t){return t=Na(t),t.tag=3,t}function zm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Om(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Om(n,a,s),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function _x(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Yl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,u)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,u)),!1}throw Error(r(435,a.tag))}return Ef(t,s,u),Yl(),!1}if(Me)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==gc&&(t=Error(r(422),{cause:s}),ao(ci(t,a)))):(s!==gc&&(n=Error(r(423),{cause:s}),ao(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ci(s,a),u=Qc(t.stateNode,s,u),Rc(t,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ci(f,a),To===null?To=[f]:To.push(f),nn!==4&&(nn=2),n===null)return!0;s=ci(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Qc(a.stateNode,s,t),Rc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),zm(u,t,a,s),Rc(a,u),!1}a=a.return}while(a!==null);return!1}var Jc=Error(r(461)),fn=!1;function wn(t,n,a,s){n.child=t===null?Hp(n,null,a,s):_r(n,t.child,a,s)}function Fm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return dr(n),s=Nc(t,n,a,v,f,u),T=Oc(),t!==null&&!fn?(Pc(t,n,u),ta(t,n,u)):(Me&&T&&pc(n),n.flags|=1,wn(t,n,s,u),n.child)}function Bm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!fc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(t,n,f,s,u)):(t=gl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(v,s)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Im(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(eo(f,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=f,of(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ta(t,n,u)}return $c(t,n,a,s,u)}function Hm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Gm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):wc(),kp(n);else return s=n.lanes=536870912,Gm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Sl(n,f.cachePool),Xp(n,f),za(),n.memoizedState=null):(t!==null&&Sl(n,null),wc(),za());return wn(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(t,n,a,s,u){var f=Ec();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),wc(),kp(n),t!==null&&Kr(t,n,s,!0),n.childLanes=u,null}function zl(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return _r(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function vx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=zl(n,s),n.lanes=536870912,_o(null,t);if(Uc(n),(t=Ze)?(t=t0(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Rn=n,Ze=null)):t=null,t===null)throw Da(n);return n.lanes=536870912,null}return zl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Uc(n),u)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Kr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(s=We,s!==null&&(v=Pr(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ur(t,v),qn(s,t,v),Jc;Yl(),n=Vm(t,n,a)}else t=f.treeContext,Ze=mi(v.nextSibling),Rn=n,Me=!0,wa=null,di=!1,t!==null&&Cp(n,t),n=zl(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $c(t,n,a,s,u){return dr(n),a=Nc(t,n,a,s,void 0,u),s=Oc(),t!==null&&!fn?(Pc(t,n,u),ta(t,n,u)):(Me&&s&&pc(n),n.flags|=1,wn(t,n,a,u),n.child)}function Xm(t,n,a,s,u,f){return dr(n),n.updateQueue=null,a=qp(n,s,a,u),Wp(t),s=Oc(),t!==null&&!fn?(Pc(t,n,f),ta(t,n,f)):(Me&&s&&pc(n),n.flags|=1,wn(t,n,a,f),n.child)}function km(t,n,a,s,u){if(dr(n),n.stateNode===null){var f=qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Kc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(jc(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Kc.enqueueReplaceState(f,f.state,null),fo(n,s,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=xr(a,T);f.props=B;var Q=f.context,ht=a.contextType;v=qr,typeof ht=="object"&&ht!==null&&(v=Cn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==v)&&Dm(n,f,s,v),La=!1;var et=n.memoizedState;f.state=et,fo(n,s,f,u),co(),Q=n.memoizedState,T||et!==Q||La?(typeof mt=="function"&&(jc(n,a,mt,s),Q=n.memoizedState),(B=La||wm(n,a,B,s,et,Q,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ac(t,n),v=n.memoizedProps,ht=xr(a,v),f.props=ht,mt=n.pendingProps,et=f.context,Q=a.contextType,B=qr,typeof Q=="object"&&Q!==null&&(B=Cn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||et!==B)&&Dm(n,f,s,B),La=!1,et=n.memoizedState,f.state=et,fo(n,s,f,u),co();var ot=n.memoizedState;v!==mt||et!==ot||La||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof T=="function"&&(jc(n,a,T,s),ot=n.memoizedState),(ht=La||wm(n,a,ht,s,et,ot,B)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=ht):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Fl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=_r(n,t.child,null,u),n.child=_r(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function Wm(t,n,a,s){return fr(),n.flags|=256,wn(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Op()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function qm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Pa(n):za(),(t=Ze)?(t=t0(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Rn=n,Ze=null)):t=null,t===null)throw Da(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(za(),u=n.mode,T=Bl({mode:"hidden",children:T},u),s=cr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,v,a),n.memoizedState=tf,_o(null,s)):(Pa(n),af(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),T=s.fallback,u=n.mode,s=Bl({mode:"visible",children:s.children},u),T=cr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,_r(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,v,a),n.memoizedState=tf,n=_o(null,s));else if(Pa(n),If(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var Q=v.dgst;v=Q,s=Error(r(419)),s.stack="",s.digest=v,ao({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(fn||Kr(t,n,a,!1),v=(a&t.childLanes)!==0,fn||v){if(v=We,v!==null&&(s=Pr(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,ur(t,s),qn(v,t,s),Jc;Bf(T)||Yl(),n=rf(t,n,a)}else Bf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ze=mi(T.nextSibling),Rn=n,Me=!0,wa=null,di=!1,t!==null&&Cp(n,t),n=af(n,s.children),n.flags|=4096);return n}return u?(za(),T=s.fallback,u=n.mode,B=t.child,Q=B.sibling,s=Zi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,Q!==null?T=Zi(Q,T):(T=cr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,_o(null,s),s=n.child,T=t.child.memoizedState,T===null?T=ef(a):(u=T.cachePool,u!==null?(B=un._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Op(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=nf(t,v,a),n.memoizedState=tf,_o(t.child,s)):(Pa(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return _r(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ym(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xc(t.return,n,a)}function sf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Zm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=sn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,gt(sn,v),wn(t,n,s,a),s=Me?io:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,a,n);else if(t.tag===19)Ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Kr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function xx(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ua(n,un,t.memoizedState.cache),fr();break;case 27:case 5:It(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(t,n,a):(Pa(n),t=ta(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Kr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Zm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(sn,sn.current),s)break;return null;case 22:return n.lanes=0,Hm(t,n,a,n.pendingProps);case 24:Ua(n,un,t.memoizedState.cache)}return ta(t,n,a)}function jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!of(t,a)&&(n.flags&128)===0)return fn=!1,xx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Me&&(n.flags&1048576)!==0&&Rp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")fc(t)?(s=xr(t,s),n.tag=1,n=km(null,n,t,s,a)):(n.tag=0,n=$c(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Fm(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=Bm(null,n,t,s,a);break t}}throw n=ct(t)||t,Error(r(306,n,""))}}return n;case 0:return $c(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=xr(s,n.pendingProps),km(t,n,s,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Ac(t,n),fo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ua(n,un,s),s!==f.cache&&Sc(n,[un],a,!0),co(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(t,n,s,a);break t}else if(s!==u){u=ci(Error(r(424)),n),ao(u),n=Wm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=mi(t.firstChild),Rn=n,Me=!0,wa=null,di=!0,a=Hp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),s===u){n=ta(t,n,a);break t}wn(t,n,s,a)}n=n.child}return n;case 26:return Fl(t,n),t===null?(a=s0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=tu(nt.current).createElement(a),s[ln]=n,s[Mn]=t,Dn(s,a,t),b(s),n.stateNode=s):n.memoizedState=s0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return It(n),t===null&&Me&&(s=n.stateNode=i0(n.type,n.pendingProps,nt.current),Rn=n,di=!0,u=Ze,ka(n.type)?(Hf=u,Ze=mi(s.firstChild)):Ze=u),wn(t,n,n.pendingProps.children,a),Fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=Ze)&&(s=jx(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,Rn=n,Ze=mi(s.firstChild),di=!1,u=!0):u=!1),u||Da(n)),It(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Pf(u,f)?s=null:v!==null&&Pf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Nc(t,n,cx,null,null,a),Lo._currentValue=u),Fl(t,n),wn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ze)&&(a=Kx(a,n.pendingProps,di),a!==null?(n.stateNode=a,Rn=n,Ze=null,t=!0):t=!1),t||Da(n)),null;case 13:return qm(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=_r(n,null,s,a):wn(t,n,s,a),n.child;case 11:return Fm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ua(n,n.type,s.value),wn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,dr(n),u=Cn(u),s=s(u),n.flags|=1,wn(t,n,s,a),n.child;case 14:return Bm(t,n,n.type,n.pendingProps,a);case 15:return Im(t,n,n.type,n.pendingProps,a);case 19:return Zm(t,n,a);case 31:return vx(t,n,a);case 22:return Hm(t,n,a,n.pendingProps);case 24:return dr(n),s=Cn(un),t===null?(u=Ec(),u===null&&(u=We,f=Mc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},bc(n),Ua(n,un,u)):((t.lanes&a)!==0&&(Ac(t,n),fo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,un,s)):(s=f.cache,Ua(n,un,s),s!==u.cache&&Sc(n,[un],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(t){t.flags|=4}function lf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(yg())t.flags|=8192;else throw gr=yl,Tc}else t.flags&=-16777217}function Km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f0(n))if(yg())t.flags|=8192;else throw gr=yl,Tc}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,ls|=n)}function vo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Sx(t,n,a){var s=n.pendingProps;switch(mc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Qi(un),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_c())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(je(n),Km(n,f)):(je(n),lf(n,u,null,s,a))):f?f!==t.memoizedState?(ea(n),je(n),Km(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ea(n),je(n),lf(n,u,t,s,a)),null;case 27:if(pe(n),a=nt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}t=bt.current,jr(n)?wp(n):(t=i0(u,s,a),n.stateNode=t,ea(n))}return je(n),null;case 5:if(pe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(f=bt.current,jr(n))wp(n);else{var v=tu(nt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[ln]=n,f[Mn]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ea(n)}}return je(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||qg(t.nodeValue,a)),t||Da(n,!0)}else t=tu(t).createTextNode(s),t[ln]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=jr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=_c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),je(n),null);case 4:return Vt(),t===null&&Df(n.stateNode.containerInfo),je(n),null;case 10:return Qi(n.type),je(n),null;case 19:if(it(sn),s=n.memoizedState,s===null)return je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)vo(s,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,vo(s,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Tp(a,t),a=a.sibling;return gt(sn,sn.current&1|2),Me&&ji(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>kl&&(n.flags|=128,u=!0,vo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return je(n),null}else 2*y()-s.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,vo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=sn.current,gt(sn,u?a&1|2:a&1),Me&&ji(n,s.treeForkCount),t):(je(n),null);case 22:case 23:return Jn(n),Dc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(un),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Mx(t,n){switch(mc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(un),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(sn),null;case 4:return Vt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Jn(n),Dc(),t!==null&&it(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(un),null;case 25:return null;default:return null}}function Qm(t,n){switch(mc(n),n.tag){case 3:Qi(un),Vt();break;case 26:case 27:case 5:pe(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:it(sn);break;case 10:Qi(n.type);break;case 22:case 23:Jn(n),Dc(),t!==null&&it(pr);break;case 24:Qi(un)}}function xo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function Fa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var B=a,Q=T;try{Q()}catch(ht){He(u,B,ht)}}}s=s.next}while(s!==f)}}catch(ht){He(n,n.return,ht)}}function Jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(s){He(t,t.return,s)}}}function $m(t,n,a){a.props=xr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){He(t,n,u)}}function Oi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function tg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function uf(t,n,a){try{var s=t.stateNode;Xx(s,t.type,a,n),s[Mn]=n}catch(u){He(t,t.return,u)}}function eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(s!==4&&(s===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Hl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function ng(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,s,a),n[ln]=t,n[Mn]=a}catch(f){He(t,t.return,f)}}var na=!1,hn=!1,hf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,xn=null;function yx(t,n){if(t=t.containerInfo,Nf=ou,t=mp(t),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,Q=0,ht=0,mt=t,et=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(T=v+u),mt!==f||s!==0&&mt.nodeType!==3||(B=v+s),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)et=mt,mt=ot;for(;;){if(mt===t)break e;if(et===a&&++Q===u&&(T=v),et===f&&++ht===s&&(B=v),(ot=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},ou=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=xr(a.type,u);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ne){He(a,a.return,ne)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function ag(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),s&4&&xo(5,a);break;case 1:if(aa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){He(a,a.return,v)}else{var u=xr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){He(a,a.return,v)}}s&64&&Jm(a),s&512&&So(a,a.return);break;case 3:if(aa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(v){He(a,a.return,v)}}break;case 27:n===null&&s&4&&ng(a);case 26:case 5:aa(t,a),n===null&&s&4&&tg(a),s&512&&So(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),s&4&&og(t,a);break;case 13:aa(t,a),s&4&&lg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ux.bind(null,a),Qx(t,a))));break;case 22:if(s=a.memoizedState!==null||na,!s){n=n!==null&&n.memoizedState!==null||hn,u=na;var f=hn;na=s,(hn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=u,hn=f}break;case 30:break;default:aa(t,a)}}function rg(t){var n=t.alternate;n!==null&&(t.alternate=null,rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ys(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Vn=!1;function ia(t,n,a){for(a=a.child;a!==null;)sg(t,n,a),a=a.sibling}function sg(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:hn||Oi(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Oi(a,n);var s=Je,u=Vn;ka(a.type)&&(Je=a.stateNode,Vn=!1),ia(t,n,a),wo(a.stateNode),Je=s,Vn=u;break;case 5:hn||Oi(a,n);case 6:if(s=Je,u=Vn,Je=null,ia(t,n,a),Je=s,Vn=u,Je!==null)if(Vn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Je!==null&&(Vn?(t=Je,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gs(t)):Jg(Je,a.stateNode));break;case 4:s=Je,u=Vn,Je=a.stateNode.containerInfo,Vn=!0,ia(t,n,a),Je=s,Vn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),hn||Fa(4,a,n),ia(t,n,a);break;case 1:hn||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&$m(a,n,s)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:hn=(s=hn)||a.memoizedState!==null,ia(t,n,a),hn=s;break;default:ia(t,n,a)}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gs(t)}catch(a){He(n,n.return,a)}}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gs(t)}catch(a){He(n,n.return,a)}}function Ex(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ig),n;default:throw Error(r(435,t.tag))}}function Gl(t,n){var a=Ex(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Lx.bind(null,t,s);s.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(ka(T.type)){Je=T.stateNode,Vn=!1;break t}break;case 5:Je=T.stateNode,Vn=!1;break t;case 3:case 4:Je=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));sg(f,v,u),Je=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,t),n=n.sibling}var Ei=null;function ug(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),kn(t),s&4&&(Fa(3,t,t.return),xo(3,t),Fa(5,t,t.return));break;case 1:Xn(n,t),kn(t),s&512&&(hn||a===null||Oi(a,a.return)),s&64&&na&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ei;if(Xn(n,t),kn(t),s&512&&(hn||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ar]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,s,a),f[ln]=t,b(f),s=f;break t;case"link":var v=u0("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(s),Dn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=u0("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(s),Dn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=t,b(f),s=f}t.stateNode=s}else c0(u,t.type,t.stateNode);else t.stateNode=l0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?c0(u,t.type,t.stateNode):l0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),kn(t),s&512&&(hn||a===null||Oi(a,a.return)),a!==null&&s&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),kn(t),s&512&&(hn||a===null||Oi(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(Gt){He(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,uf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(hf=!0);break;case 6:if(Xn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){He(t,t.return,Gt)}}break;case 3:if(iu=null,u=Ei,Ei=eu(n.containerInfo),Xn(n,t),Ei=u,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(Gt){He(t,t.return,Gt)}hf&&(hf=!1,cg(t));break;case 4:s=Ei,Ei=eu(t.stateNode.containerInfo),Xn(n,t),kn(t),Ei=s;break;case 12:Xn(n,t),kn(t);break;case 31:Xn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gl(t,s)));break;case 13:Xn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gl(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=na,ht=hn;if(na=Q||u,hn=ht||B,Xn(n,t),hn=ht,na=Q,kn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||na||hn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Gt){He(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Gt){He(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?$g(ot,!0):$g(B.stateNode,!1)}catch(Gt){He(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gl(t,a))));break;case 19:Xn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gl(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(eg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=cf(t);Hl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var T=cf(t);Hl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=cf(t);ff(t,Q,B);break;default:throw Error(r(161))}}catch(ht){He(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Sr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),Sr(n);break;case 27:wo(n.stateNode);case 26:case 5:Oi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),xo(4,f);break;case 1:if(ra(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){He(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Gp(B[u],T)}catch(Q){He(s,s.return,Q)}}a&&v&64&&Jm(f),So(f,f.return);break;case 27:ng(f);case 26:case 5:ra(u,f,a),a&&s===null&&v&4&&tg(f),So(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&v&4&&og(u,f);break;case 13:ra(u,f,a),a&&v&4&&lg(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),So(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ti(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,a,s),n=n.sibling}function fg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,s),u&2048&&xo(9,n);break;case 1:Ti(t,n,a,s);break;case 3:Ti(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){Ti(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){He(n,n.return,B)}}else Ti(t,n,a,s);break;case 31:Ti(t,n,a,s);break;case 13:Ti(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,s):Mo(t,n):f._visibility&2?Ti(t,n,a,s):(f._visibility|=2,rs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(v,n);break;case 24:Ti(t,n,a,s),u&2048&&pf(n.alternate,n);break;default:Ti(t,n,a,s)}}function rs(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=s,Q=v.flags;switch(v.tag){case 0:case 11:case 15:rs(f,v,T,B,u),xo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?rs(f,v,T,B,u):Mo(f,v):(ht._visibility|=2,rs(f,v,T,B,u)),u&&Q&2048&&df(v.alternate,v);break;case 24:rs(f,v,T,B,u),u&&Q&2048&&pf(v.alternate,v);break;default:rs(f,v,T,B,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Mo(a,s),u&2048&&df(s.alternate,s);break;case 24:Mo(a,s),u&2048&&pf(s.alternate,s);break;default:Mo(a,s)}n=n.sibling}}var yo=8192;function ss(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)hg(t,n,a),t=t.sibling}function hg(t,n,a){switch(t.tag){case 26:ss(t,n,a),t.flags&yo&&t.memoizedState!==null&&uS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:ss(t,n,a);break;case 3:case 4:var s=Ei;Ei=eu(t.stateNode.containerInfo),ss(t,n,a),Ei=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=yo,yo=16777216,ss(t,n,a),yo=s):ss(t,n,a));break;default:ss(t,n,a)}}function dg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,mg(s,t)}dg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):Eo(t);break;default:Eo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];xn=s,mg(s,t)}dg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function mg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ro(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,xn=s;else t:for(a=t;xn!==null;){s=xn;var u=s.sibling,f=s.return;if(rg(s),s===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Tx={getCacheForType:function(t){var n=Cn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ge=null,xe=0,Ie=0,$n=null,Ba=!1,os=!1,mf=!1,sa=0,nn=0,Ia=0,Mr=0,gf=0,ti=0,ls=0,To=null,Wn=null,_f=!1,Xl=0,gg=0,kl=1/0,Wl=null,Ha=null,mn=0,Ga=null,us=null,oa=0,vf=0,xf=null,_g=null,bo=0,Sf=null;function ei(){return(Le&2)!==0&&xe!==0?xe&-xe:O.T!==null?Af():Ws()}function vg(){if(ti===0)if((xe&536870912)===0||Me){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ti=t}else ti=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ti}function qn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(cs(t,0),Va(t,xe,ti,!1)),Nn(t,a),((Le&2)===0||t!==We)&&(t===We&&((Le&2)===0&&(Mr|=a),nn===4&&Va(t,xe,ti,!1)),Pi(t))}function xg(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||At(t,n),u=s?Cx(t,n):yf(t,n,!0),f=s;do{if(u===0){os&&!s&&Va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ax(a)){u=yf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=To;var B=T.current.memoizedState.isDehydrated;if(B&&(cs(T,v).flags|=256),v=yf(T,v,!1),v!==2){if(mf&&!B){T.errorRecoveryDisabledLanes|=f,Mr|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){cs(t,0),Va(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Va(s,n,ti,!Ba);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Xl+300-y(),10<u)){if(Va(s,n,ti,!Ba),_t(s,0,!0)!==0)break t;oa=n,s.timeoutHandle=Kg(Sg.bind(null,s,a,Wn,Wl,_f,n,ti,Mr,ls,Ba,f,"Throttled",-0,0),u);break t}Sg(s,a,Wn,Wl,_f,n,ti,Mr,ls,Ba,f,null,-0,0)}}break}while(!0);Pi(t)}function Sg(t,n,a,s,u,f,v,T,B,Q,ht,mt,et,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},hg(n,f,mt);var Gt=(f&62914560)===f?Xl-y():(f&4194048)===f?gg-y():0;if(Gt=cS(mt,Gt),Gt!==null){oa=f,t.cancelPendingCommit=Gt(Cg.bind(null,t,n,f,a,s,u,v,T,B,ht,mt,null,et,ot)),Va(t,f,v,!Q);return}}Cg(t,n,f,a,s,u,v,T,B)}function Ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(t,n,a,s){n&=~gf,n&=~Mr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&il(t,a,n)}function ql(){return(Le&6)===0?(Ao(0),!1):!0}function Mf(){if(ge!==null){if(Ie===0)var t=ge.return;else t=ge,Ki=hr=null,zc(t),ts=null,oo=0,t=ge;for(;t!==null;)Qm(t.alternate,t),t=t.return;ge=null}}function cs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,Mf(),We=t,ge=a=Zi(t.current,null),xe=n,Ie=0,$n=null,Ba=!1,os=At(t,n),mf=!1,ls=ti=gf=Mr=Ia=nn=0,Wn=To=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=t[u],s&=~f}return sa=n,dl(),a}function Mg(t,n){ue=null,O.H=go,n===$r||n===Ml?(n=Fp(),Ie=3):n===Tc?(n=Fp(),Ie=4):Ie=n===Jc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ge===null&&(nn=1,Pl(t,ci(n,t.current)))}function yg(){var t=Qn.current;return t===null?!0:(xe&4194048)===xe?pi===null:(xe&62914560)===xe||(xe&536870912)!==0?t===pi:!1}function Eg(){var t=O.H;return O.H=go,t===null?go:t}function Tg(){var t=O.A;return O.A=Tx,t}function Yl(){nn=4,Ba||(xe&4194048)!==xe&&Qn.current!==null||(os=!0),(Ia&134217727)===0&&(Mr&134217727)===0||We===null||Va(We,xe,ti,!1)}function yf(t,n,a){var s=Le;Le|=2;var u=Eg(),f=Tg();(We!==t||xe!==n)&&(Wl=null,cs(t,n)),n=!1;var v=nn;t:do try{if(Ie!==0&&ge!==null){var T=ge,B=$n;switch(Ie){case 8:Mf(),v=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var Q=Ie;if(Ie=0,$n=null,fs(t,T,B,Q),a&&os){v=0;break t}break;default:Q=Ie,Ie=0,$n=null,fs(t,T,B,Q)}}Rx(),v=nn;break}catch(ht){Mg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ki=hr=null,Le=s,O.H=u,O.A=f,ge===null&&(We=null,xe=0,dl()),v}function Rx(){for(;ge!==null;)bg(ge)}function Cx(t,n){var a=Le;Le|=2;var s=Eg(),u=Tg();We!==t||xe!==n?(Wl=null,kl=y()+500,cs(t,n)):os=At(t,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=$n;e:switch(Ie){case 1:Ie=0,$n=null,fs(t,n,f,1);break;case 2:case 9:if(Pp(f)){Ie=0,$n=null,Ag(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Pi(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Pp(f)?(Ie=0,$n=null,Ag(n)):(Ie=0,$n=null,fs(t,n,f,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var T=ge;if(v?f0(v):T.stateNode.complete){Ie=0,$n=null;var B=T.sibling;if(B!==null)ge=B;else{var Q=T.return;Q!==null?(ge=Q,Zl(Q)):ge=null}break e}}Ie=0,$n=null,fs(t,n,f,5);break;case 6:Ie=0,$n=null,fs(t,n,f,6);break;case 8:Mf(),nn=6;break t;default:throw Error(r(462))}}wx();break}catch(ht){Mg(t,ht)}while(!0);return Ki=hr=null,O.H=s,O.A=u,Le=a,ge!==null?0:(We=null,xe=0,dl(),nn)}function wx(){for(;ge!==null&&!qt();)bg(ge)}function bg(t){var n=jm(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?Zl(t):ge=n}function Ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:zc(n);default:Qm(a,n),n=ge=Tp(n,sa),n=jm(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?Zl(t):ge=n}function fs(t,n,a,s){Ki=hr=null,zc(n),ts=null,oo=0;var u=n.return;try{if(_x(t,u,n,a,xe)){nn=1,Pl(t,ci(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;nn=1,Pl(t,ci(a,t.current)),ge=null;return}n.flags&32768?(Me||s===1?t=!0:os||(xe&536870912)!==0?t=!1:(Ba=t=!0,(s===2||s===9||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Rg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){Rg(n,Ba);return}t=n.return;var a=Sx(n.alternate,n,sa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);nn===0&&(nn=5)}function Rg(t,n){do{var a=Mx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);nn=6,ge=null}function Cg(t,n,a,s,u,f,v,T,B){t.cancelPendingCommit=null;do jl();while(mn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uc,xi(t,a,f,v,T,B),t===We&&(ge=We=null,xe=0),us=n,Ga=t,oa=a,vf=f,xf=u,_g=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nx(lt,function(){return Ng(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=H.p,H.p=2,v=Le,Le|=4;try{yx(t,n,a)}finally{Le=v,H.p=u,O.T=s}}mn=1,wg(),Dg(),Ug()}}function wg(){if(mn===1){mn=0;var t=Ga,n=us,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=H.p;H.p=2;var u=Le;Le|=4;try{ug(n,t);var f=Of,v=mp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&pp(T.ownerDocument.documentElement,T)){if(B!==null&&ac(T)){var Q=B.start,ht=B.end;if(ht===void 0&&(ht=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Gt=T.textContent.length,ne=Math.min(B.start,Gt),ke=B.end===void 0?ne:Math.min(B.end,Gt);!ot.extend&&ne>ke&&(v=ke,ke=ne,ne=v);var Y=dp(T,ne),V=dp(T,ke);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),ne>ke?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ou=!!Nf,Of=Nf=null}finally{Le=u,H.p=s,O.T=a}}t.current=n,mn=2}}function Dg(){if(mn===2){mn=0;var t=Ga,n=us,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=H.p;H.p=2;var u=Le;Le|=4;try{ag(t,n.alternate,n)}finally{Le=u,H.p=s,O.T=a}}mn=3}}function Ug(){if(mn===4||mn===3){mn=0,D();var t=Ga,n=us,a=oa,s=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,us=Ga=null,Lg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ha=null),zr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{O.T=n,H.p=u}}(oa&3)!==0&&jl(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Sf?bo++:(bo=0,Sf=t):bo=0,Ao(0)}}function Lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function jl(){return wg(),Dg(),Ug(),Ng()}function Ng(){if(mn!==5)return!1;var t=Ga,n=vf;vf=0;var a=zr(oa),s=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=xf,xf=null;var f=Ga,v=oa;if(mn=0,us=Ga=null,oa=0,(Le&6)!==0)throw Error(r(331));var T=Le;if(Le|=4,pg(f.current),fg(f,f.current,v,a),Le=T,Ao(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{H.p=u,O.T=s,Lg(t,n)}}function Og(t,n,a){n=ci(a,n),n=Qc(t.stateNode,n,2),t=Oa(t,n,2),t!==null&&(Nn(t,2),Pi(t))}function He(t,n,a){if(t.tag===3)Og(t,t,a);else for(;n!==null;){if(n.tag===3){Og(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))){t=ci(a,t),a=Pm(2),s=Oa(n,a,2),s!==null&&(zm(a,s,n,t),Nn(s,2),Pi(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new bx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(mf=!0,u.add(a),t=Dx.bind(null,t,n,a),n.then(t,t))}function Dx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(xe&a)===a&&(nn===4||nn===3&&(xe&62914560)===xe&&300>y()-Xl?(Le&2)===0&&cs(t,0):gf|=a,ls===xe&&(ls=0)),Pi(t)}function Pg(t,n){n===0&&(n=Fe()),t=ur(t,n),t!==null&&(Nn(t,n),Pi(t))}function Ux(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(t,a)}function Lx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Pg(t,a)}function Nx(t,n){return Ee(t,n)}var Kl=null,hs=null,Tf=!1,Ql=!1,bf=!1,Xa=0;function Pi(t){t!==hs&&t.next===null&&(hs===null?Kl=hs=t:hs=hs.next=t),Ql=!0,Tf||(Tf=!0,Px())}function Ao(t,n){if(!bf&&Ql){bf=!0;do for(var a=!1,s=Kl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ig(s,f))}else f=xe,f=_t(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||At(s,f)||(a=!0,Ig(s,f));s=s.next}while(a);bf=!1}}function Ox(){zg()}function zg(){Ql=Tf=!1;var t=0;Xa!==0&&Wx()&&(t=Xa);for(var n=y(),a=null,s=Kl;s!==null;){var u=s.next,f=Fg(s,n);f===0?(s.next=null,a===null?Kl=u:a.next=u,u===null&&(hs=a)):(a=s,(t!==0||(f&3)!==0)&&(Ql=!0)),s=u}mn!==0&&mn!==5||Ao(t),Xa!==0&&(Xa=0)}function Fg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Ot(f),T=1<<v,B=u[v];B===-1?((T&a)===0||(T&s)!==0)&&(u[v]=ae(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=We,a=xe,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Pe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||At(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Pe(s),zr(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return s=Bg.bind(null,t),a=Ee(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Pe(s),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var s=xe;return s=_t(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(xg(t,s,n),Fg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Bg.bind(null,t):null)}function Ig(t,n){if(jl())return null;xg(t,n,!0)}function Px(){Yx(function(){(Le&6)!==0?Ee(dt,Ox):zg()})}function Af(){if(Xa===0){var t=Qr;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Xa=t}return Xa}function Hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function Gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hg((u[Mn]||null).action),v=s.submitter;v&&(n=(n=v[Mn]||null)?Hg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ul("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Xa!==0){var B=v?Gg(u,v):new FormData(u);Wc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?Gg(u,v):new FormData(u),Wc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Rf=0;Rf<lc.length;Rf++){var Cf=lc[Rf],Fx=Cf.toLowerCase(),Bx=Cf[0].toUpperCase()+Cf.slice(1);yi(Fx,"on"+Bx)}yi(vp,"onAnimationEnd"),yi(xp,"onAnimationIteration"),yi(Sp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(tx,"onTransitionRun"),yi(ex,"onTransitionStart"),yi(nx,"onTransitionCancel"),yi(Mp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,Q=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){hl(ht)}u.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,Q=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){hl(ht)}u.currentTarget=null,f=B}}}}function _e(t,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var s=t+"__bubble";a.has(s)||(Xg(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),Xg(a,t,s,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[Jl]){t[Jl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,wf("selectionchange",!1,n))}}function Xg(t,n,a,s){switch(v0(n)){case 2:var u=dS;break;case 8:u=pS;break;default:u=Wf}a=u.bind(null,n,a,t),u=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ta(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue t}T=T.parentNode}}s=s.return}Zd(function(){var Q=f,ht=Yu(a),mt=[];t:{var et=yp.get(t);if(et!==void 0){var ot=ul,Gt=t;switch(t){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ot=Lv;break;case"focusin":Gt="focus",ot=$u;break;case"focusout":Gt="blur",ot=$u;break;case"beforeblur":case"afterblur":ot=$u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Pv;break;case vp:case xp:case Sp:ot=Ev;break;case Mp:ot=Fv;break;case"scroll":case"scrollend":ot=vv;break;case"wheel":ot=Iv;break;case"copy":case"cut":case"paste":ot=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=$d;break;case"toggle":case"beforetoggle":ot=Gv}var ne=(n&4)!==0,ke=!ne&&(t==="scroll"||t==="scrollend"),Y=ne?et!==null?et+"Capture":null:et;ne=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Zs(V,Y),pt!=null&&ne.push(Co(V,pt,K))),ke)break;V=V.return}0<ne.length&&(et=new ot(et,Gt,null,a,ht),mt.push({event:et,listeners:ne}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",et&&a!==qu&&(Gt=a.relatedTarget||a.fromElement)&&(Ta(Gt)||Gt[Si]))break t;if((ot||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=Q,Gt=Gt?Ta(Gt):null,Gt!==null&&(ke=c(Gt),ne=Gt.tag,Gt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(ot=null,Gt=Q),ot!==Gt)){if(ne=Qd,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(ne=$d,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),ke=ot==null?et:rr(ot),K=Gt==null?et:rr(Gt),et=new ne(pt,V+"leave",ot,a,ht),et.target=ke,et.relatedTarget=K,pt=null,Ta(ht)===Q&&(ne=new ne(Y,V+"enter",Gt,a,ht),ne.target=K,ne.relatedTarget=ke,pt=ne),ke=pt,ot&&Gt)e:{for(ne=Hx,Y=ot,V=Gt,K=0,pt=Y;pt;pt=ne(pt))K++;pt=0;for(var $t=V;$t;$t=ne($t))pt++;for(;0<K-pt;)Y=ne(Y),K--;for(;0<pt-K;)V=ne(V),pt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){ne=Y;break e}Y=ne(Y),V=ne(V)}ne=null}else ne=null;ot!==null&&kg(mt,et,ot,ne,!1),Gt!==null&&ke!==null&&kg(mt,ke,Gt,ne,!0)}}t:{if(et=Q?rr(Q):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ae=op;else if(rp(et))if(lp)Ae=Qv;else{Ae=jv;var Yt=Zv}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Mi(Q.elementType)&&(Ae=op):Ae=Kv;if(Ae&&(Ae=Ae(t,Q))){sp(mt,Ae,a,ht);break t}Yt&&Yt(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&En(et,"number",et.value)}switch(Yt=Q?rr(Q):window,t){case"focusin":(rp(Yt)||Yt.contentEditable==="true")&&(Xr=Yt,rc=Q,no=null);break;case"focusout":no=rc=Xr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,gp(mt,a,ht);break;case"selectionchange":if($v)break;case"keydown":case"keyup":gp(mt,a,ht)}var fe;if(ec)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vr?ip(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(tp&&a.locale!=="ko"&&(Vr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vr&&(fe=jd()):(Ra=ht,Ku="value"in Ra?Ra.value:Ra.textContent,Vr=!0)),Yt=$l(Q,Se),0<Yt.length&&(Se=new Jd(Se,t,null,a,ht),mt.push({event:Se,listeners:Yt}),fe?Se.data=fe:(fe=ap(a),fe!==null&&(Se.data=fe)))),(fe=Xv?kv(t,a):Wv(t,a))&&(Se=$l(Q,"onBeforeInput"),0<Se.length&&(Yt=new Jd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Yt,listeners:Se}),Yt.data=fe)),zx(mt,t,Q,a,ht)}Vg(mt,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zs(t,a),u!=null&&s.unshift(Co(t,u,f)),u=Zs(t,n),u!=null&&s.push(Co(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kg(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,Q=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||Q===null||(B=Q,u?(Q=Zs(a,f),Q!=null&&v.unshift(Co(a,Q,B))):u||(Q=Zs(a,f),Q!=null&&v.push(Co(a,Q,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function qg(t,n){return n=Wg(n),Wg(t)===n}function Xe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pn(t,""+s);break;case"className":te(t,"class",s);break;case"tabIndex":te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":te(t,a,s);break;case"style":Ir(t,s,f);break;case"data":if(n!=="object"){te(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=rl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=rl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),kt(t,"popover",s);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,kt(t,a,s))}}function Lf(t,n,a,s,u,f){switch(a){case"style":Ir(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pn(t,s):(typeof s=="number"||typeof s=="bigint")&&pn(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):kt(t,a,s)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,f,v,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),s&&Xe(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=v=u=null,B=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":v=ht;break;case"checked":B=ht;break;case"defaultChecked":Q=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Xe(t,n,s,ht,a,null)}}Wi(t,f,T,B,Q,v,u,!1);return;case"select":_e("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Xe(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?li(t,!!s,n,!1):a!=null&&li(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Xe(t,n,v,T,a,null)}Tn(t,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xe(t,n,B,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<Ro.length;s++)_e(Ro[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,Q,s,a,null)}return;default:if(Mi(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Lf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Xe(t,n,T,s,a,null))}function Xx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,B=null,Q=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:s.hasOwnProperty(ot)||Xe(t,n,ot,null,s,mt)}}for(var et in s){var ot=s[et];if(mt=a[et],s.hasOwnProperty(et)&&(ot!=null||mt!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Xe(t,n,et,ot,s,mt)}}yn(t,v,T,B,Q,ht,f,u);return;case"select":ot=v=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||Xe(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Xe(t,n,u,f,s,B)}n=T,a=v,s=ot,et!=null?li(t,!!a,et,!1):!!s!=!!a&&(n!=null?li(t,!!a,n,!0):li(t,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xe(t,n,v,u,s,f)}Be(t,et,ot);return;case"option":for(var Gt in a)if(et=a[Gt],a.hasOwnProperty(Gt)&&et!=null&&!s.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Xe(t,n,Gt,null,s,et)}for(B in s)if(et=s[B],ot=a[B],s.hasOwnProperty(B)&&et!==ot&&(et!=null||ot!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Xe(t,n,B,et,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne)&&Xe(t,n,ne,null,s,et);for(Q in s)if(et=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&et!==ot&&(et!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Xe(t,n,Q,et,s,ot)}return;default:if(Mi(n)){for(var ke in a)et=a[ke],a.hasOwnProperty(ke)&&et!==void 0&&!s.hasOwnProperty(ke)&&Lf(t,n,ke,void 0,s,et);for(ht in s)et=s[ht],ot=a[ht],!s.hasOwnProperty(ht)||et===ot||et===void 0&&ot===void 0||Lf(t,n,ht,et,s,ot);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!s.hasOwnProperty(Y)&&Xe(t,n,Y,null,s,et);for(mt in s)et=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||et===ot||et==null&&ot==null||Xe(t,n,mt,et,s,ot)}function Yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&Yg(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],Q=B.startTime;if(Q>T)break;var ht=B.transferSize,mt=B.initiatorType;ht&&Yg(mt)&&(B=B.responseEnd,v+=ht*(B<T?1:(T-Q)/(B-Q)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function Zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Wx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(Zx)}:Kg;function Zx(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function Jg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ar]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);gs(n)}function $g(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jx(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function t0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function e0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function n0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function i0(t,n,a){switch(n=tu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ys(t)}var gi=new Map,a0=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=H.d;H.d={f:Jx,r:$x,D:tS,C:eS,L:nS,m:iS,X:rS,S:aS,M:sS};function Jx(){var t=la.f(),n=ql();return t||n}function $x(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?Mm(n):la.r(t)}var ds=typeof document>"u"?null:document;function r0(t,n,a){var s=ds;if(s&&typeof n=="string"&&n){var u=re(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Dn(n,"link",t),b(n),s.head.appendChild(n)))}}function tS(t){la.D(t),r0("dns-prefetch",t,null)}function eS(t,n){la.C(t,n),r0("preconnect",t,n)}function nS(t,n,a){la.L(t,n,a);var s=ds;if(s&&t&&n){var u='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+re(a.imageSizes)+'"]')):u+='[href="'+re(t)+'"]';var f=u;switch(n){case"style":f=ps(t);break;case"script":f=ms(t)}gi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),gi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Do(f))||n==="script"&&s.querySelector(Uo(f))||(n=s.createElement("link"),Dn(n,"link",t),b(n),s.head.appendChild(n)))}}function iS(t,n){la.m(t,n);var a=ds;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+re(s)+'"][href="'+re(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(t)}if(!gi.has(f)&&(t=g({rel:"modulepreload",href:t},n),gi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}s=a.createElement("link"),Dn(s,"link",t),b(s),a.head.appendChild(s)}}}function aS(t,n,a){la.S(t,n,a);var s=ds;if(s&&t){var u=Aa(s).hoistableStyles,f=ps(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(Do(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=gi.get(f))&&Gf(t,a);var B=v=s.createElement("link");b(B),Dn(B,"link",t),B._p=new Promise(function(Q,ht){B.onload=Q,B.onerror=ht}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,nu(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function rS(t,n){la.X(t,n);var a=ds;if(a&&t){var s=Aa(a).hoistableScripts,u=ms(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=g({src:t,async:!0},n),(n=gi.get(u))&&Vf(t,n),f=a.createElement("script"),b(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function sS(t,n){la.M(t,n);var a=ds;if(a&&t){var s=Aa(a).hoistableScripts,u=ms(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&Vf(t,n),f=a.createElement("script"),b(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function s0(t,n,a,s){var u=(u=nt.current)?eu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=Aa(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ps(a.href);var f=Aa(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Do(t)))&&!f._p&&(v.instance=f,v.state.loading=5),gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(t,a),f||oS(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=Aa(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ps(t){return'href="'+re(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function o0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function oS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Dn(n,"link",a),b(n),t.head.appendChild(n))}function ms(t){return'[src="'+re(t)+'"]'}function Uo(t){return"script[async]"+t}function l0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+re(a.href)+'"]');if(s)return n.instance=s,b(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),b(s),Dn(s,"style",u),nu(s,a.precedence,t),n.instance=s;case"stylesheet":u=ps(a.href);var f=t.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,b(f),f;s=o0(a),(u=gi.get(u))&&Gf(s,u),f=(t.ownerDocument||t).createElement("link"),b(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Dn(f,"link",s),n.state.loading|=4,nu(f,a.precedence,t),n.instance=f;case"script":return f=ms(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,b(u),u):(s=a,(u=gi.get(f))&&(s=g({},a),Vf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),b(u),Dn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,nu(s,a.precedence,t));return n.instance}function nu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var iu=null;function u0(t,n,a){if(iu===null){var s=new Map,u=iu=new Map;u.set(a,s)}else u=iu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ar]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function c0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(s.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=au.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,s=o0(s),(u=gi.get(u))&&Gf(s,u),f=f.createElement("link"),b(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Dn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=au.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function cS(t,n){return t.stylesheets&&t.count===0&&su(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&su(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*kx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&su(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function su(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,n.forEach(fS,t),ru=null,au.call(t))}function fS(t,n){if(!(n.state.loading&4)){var a=ru.get(t);if(a)var s=a.get(null);else{a=new Map,ru.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=au.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function hS(t,n,a,s,u,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function h0(t,n,a,s,u,f,v,T,B,Q,ht,mt){return t=new hS(t,n,a,v,B,Q,ht,mt,T),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Mc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bc(f),t}function d0(t){return t?(t=qr,t):qr}function p0(t,n,a,s,u,f){u=d0(u),s.context===null?s.context=u:s.pendingContext=u,s=Na(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Oa(t,s,n),a!==null&&(qn(a,t,n),uo(a,t,n))}function m0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){m0(t,n),(t=t.alternate)&&m0(t,n)}function g0(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&qn(n,t,67108864),kf(t,67108864)}}function _0(t){if(t.tag===13||t.tag===31){var n=ei();n=ks(n);var a=ur(t,n);a!==null&&qn(a,t,n),kf(t,n)}}var ou=!0;function dS(t,n,a,s){var u=O.T;O.T=null;var f=H.p;try{H.p=2,Wf(t,n,a,s)}finally{H.p=f,O.T=u}}function pS(t,n,a,s){var u=O.T;O.T=null;var f=H.p;try{H.p=8,Wf(t,n,a,s)}finally{H.p=f,O.T=u}}function Wf(t,n,a,s){if(ou){var u=qf(s);if(u===null)Uf(t,n,s,lu,a),x0(t,s);else if(gS(u,t,n,a,s))s.stopPropagation();else if(x0(t,s),n&4&&-1<mS.indexOf(t)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=St(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Ot(v);T.entanglements[1]|=B,v&=~B}Pi(f),(Le&6)===0&&(kl=y()+500,Ao(0))}}break;case 31:case 13:T=ur(f,2),T!==null&&qn(T,f,2),ql(),kf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,lu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=Yu(t),Yf(t)}var lu=null;function Yf(t){if(lu=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lu=t,null}function v0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case dt:return 2;case vt:return 8;case lt:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Zf=!1,Wa=null,qa=null,Ya=null,No=new Map,Oo=new Map,Za=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&g0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gS(t,n,a,s,u){switch(n){case"focusin":return Wa=Po(Wa,t,n,a,s,u),!0;case"dragenter":return qa=Po(qa,t,n,a,s,u),!0;case"mouseover":return Ya=Po(Ya,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Po(No.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,s,u)),!0}return!1}function S0(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){_0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){_0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qu=s,a.target.dispatchEvent(s),qu=null}else return n=ba(a),n!==null&&g0(n),t.blockedOn=a,!1;n.shift()}return!0}function M0(t,n,a){uu(t)&&a.delete(n)}function _S(){Zf=!1,Wa!==null&&uu(Wa)&&(Wa=null),qa!==null&&uu(qa)&&(qa=null),Ya!==null&&uu(Ya)&&(Ya=null),No.forEach(M0),Oo.forEach(M0)}function cu(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var fu=null;function y0(t){fu!==t&&(fu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fu===t&&(fu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=ba(a);f!==null&&(t.splice(n,3),n-=3,Wc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function gs(t){function n(B){return cu(B,t)}Wa!==null&&cu(Wa,t),qa!==null&&cu(qa,t),Ya!==null&&cu(Ya,t),No.forEach(n),Oo.forEach(n);for(var a=0;a<Za.length;a++){var s=Za[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[Mn]||null;if(typeof f=="function")v||y0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Mn]||null)T=v.formAction;else if(Yf(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),y0(a)}}}function E0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jf(t){this._internalRoot=t}hu.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();p0(a,s,t,n,null,null)},hu.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p0(t.current,2,null,t,null,null),ql(),n[Si]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&S0(t)}};var T0=e.version;if(T0!=="19.2.4")throw Error(r(527,T0,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var vS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{yt=du.inject(vS),Et=du}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Um,f=Lm,v=Nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=h0(t,1,!1,null,null,a,s,null,u,f,v,E0),t[Si]=n.current,Df(t),new jf(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Um,v=Lm,T=Nm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=h0(t,1,!0,n,a??null,s,u,B,f,v,T,E0),n.context=d0(null),a=n.current,s=ei(),s=ks(s),u=Na(s),u.callback=null,Oa(a,u,s),a=s,n.current.lanes=a,Nn(n,a),Pi(n),t[Si]=n.current,Df(t),new hu(n)},Fo.version="19.2.4",Fo}var O0;function CS(){if(O0)return Jf.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=RS(),Jf.exports}var wS=CS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="182",DS=0,P0=1,US=2,Pu=1,LS=2,Ns=3,Sa=0,Zn=1,ma=2,_a=0,Os=1,z0=2,F0=3,B0=4,NS=5,wr=100,OS=101,PS=102,zS=103,FS=104,BS=200,IS=201,HS=202,GS=203,Ph=204,zh=205,VS=206,XS=207,kS=208,WS=209,qS=210,YS=211,ZS=212,jS=213,KS=214,Fh=0,Bh=1,Ih=2,zs=3,Hh=4,Gh=5,Vh=6,Xh=7,P_=0,QS=1,JS=2,Hi=0,z_=1,F_=2,B_=3,Ld=4,I_=5,H_=6,G_=7,V_=300,Nr=301,Fs=302,kh=303,Wh=304,Xu=306,qh=1e3,ga=1001,Yh=1002,Un=1003,$S=1004,pu=1005,Fn=1006,nh=1007,Ur=1008,ri=1009,X_=1010,k_=1011,Yo=1012,Nd=1013,Xi=1014,Bi=1015,Ma=1016,Od=1017,Pd=1018,Zo=1020,W_=35902,q_=35899,Y_=1021,Z_=1022,wi=1023,ya=1026,Lr=1027,j_=1028,zd=1029,Bs=1030,Fd=1031,Bd=1033,zu=33776,Fu=33777,Bu=33778,Iu=33779,Zh=35840,jh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,td=37496,ed=37488,nd=37489,id=37490,ad=37491,rd=37808,sd=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,xd=36492,Sd=36494,Md=36495,yd=36283,Ed=36284,Td=36285,bd=36286,tM=3200,K_=0,eM=1,nr="",ai="srgb",Is="srgb-linear",Gu="linear",Ge="srgb",_s=7680,I0=519,nM=512,iM=513,aM=514,Id=515,rM=516,sM=517,Hd=518,oM=519,H0=35044,G0="300 es",Ii=2e3,Vu=2001;function Q_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function jo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function lM(){const o=jo("canvas");return o.style.display="block",o}const V0={};function X0(...o){const e="THREE."+o.shift();console.log(e,...o)}function oe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ce(...o){const e="THREE."+o.shift();console.error(e,...o)}function Ko(...o){const e=o.join(" ");e in V0||(V0[e]=!0,oe(...o))}function uM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Ad=180/Math.PI;function Jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function cM(o,e){return(o%e+e)%e}function ah(o,e,i){return(1-i)*o+i*e}function Bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,i=0){Oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=c[h+0],E=c[h+1],A=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=A,e[i+3]=C;return}if(g!==C||m!==S||p!==E||_!==A){let M=m*S+p*E+_*A+g*C;M<0&&(S=-S,E=-E,A=-A,C=-C,M=-M);let x=1-d;if(M<.9995){const P=Math.acos(M),N=Math.sin(P);x=Math.sin(x*P)/N,d=Math.sin(d*P)/N,m=m*x+S*d,p=p*x+E*d,_=_*x+A*d,g=g*x+C*d}else{m=m*x+S*d,p=p*x+E*d,_=_*x+A*d,g=g*x+C*d;const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],S=c[h+1],E=c[h+2],A=c[h+3];return e[i]=d*A+_*g+m*E-p*S,e[i+1]=m*A+_*S+p*g-d*E,e[i+2]=p*A+_*E+d*S-m*g,e[i+3]=_*A-d*g-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),S=m(r/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=S*_*g+p*E*A,this._y=p*E*g-S*_*A,this._z=p*_*A+S*E*g,this._w=p*_*g-S*E*A;break;case"YXZ":this._x=S*_*g+p*E*A,this._y=p*E*g-S*_*A,this._z=p*_*A-S*E*g,this._w=p*_*g+S*E*A;break;case"ZXY":this._x=S*_*g-p*E*A,this._y=p*E*g+S*_*A,this._z=p*_*A+S*E*g,this._w=p*_*g-S*E*A;break;case"ZYX":this._x=S*_*g-p*E*A,this._y=p*E*g+S*_*A,this._z=p*_*A-S*E*g,this._w=p*_*g+S*E*A;break;case"YZX":this._x=S*_*g+p*E*A,this._y=p*E*g+S*_*A,this._z=p*_*A-S*E*g,this._w=p*_*g-S*E*A;break;case"XZY":this._x=S*_*g-p*E*A,this._y=p*E*g-S*_*A,this._z=p*_*A+S*E*g,this._w=p*_*g+S*E*A;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+d+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(r>d&&r>g){const E=2*Math.sqrt(1+r-d-g);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>g){const E=2*Math.sqrt(1+d-r-g);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+g-r-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(k0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(k0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new rt,k0=new $o;class he{constructor(e,i,r,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],E=r[5],A=r[8],C=l[0],M=l[3],x=l[6],P=l[1],N=l[4],L=l[7],F=l[2],I=l[5],z=l[8];return c[0]=h*C+d*P+m*F,c[3]=h*M+d*N+m*I,c[6]=h*x+d*L+m*z,c[1]=p*C+_*P+g*F,c[4]=p*M+_*N+g*I,c[7]=p*x+_*L+g*z,c[2]=S*C+E*P+A*F,c[5]=S*M+E*N+A*I,c[8]=S*x+E*L+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,S=d*m-_*c,E=p*c-h*m,A=i*g+r*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(sh.makeScale(e,i)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,i){return this.premultiply(sh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new he,W0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const o={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===nr?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Is]:{primaries:e,whitePoint:r,transfer:Gu,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const be=fM();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vs;class hM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=jo("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=jo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(oh(l[h].image)):c.push(oh(l[h]))}else c=oh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let pM=0;const lh=new rt;class Bn extends Gs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ga,l=ga,c=Fn,h=Ur,d=wi,m=ri,p=Bn.DEFAULT_ANISOTROPY,_=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Jo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=V_;Bn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],E=m[5],A=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,L=(E+1)/2,F=(x+1)/2,I=(_+S)/4,z=(g+C)/4,j=(A+M)/4;return N>L&&N>F?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=I/r,c=z/r):L>F?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=I/l,c=j/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=z/c,l=j/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-A)*(M-A)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(M-A)/P,this.y=(g-C)/P,this.z=(S-_)/P,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Gs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends mM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class J_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,bi):bi.fromBufferAttribute(c,h),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mu.copy(r.boundingBox)),mu.applyMatrix4(e.matrixWorld),this.union(mu)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),gu.subVectors(this.max,Io),xs.subVectors(e.a,Io),Ss.subVectors(e.b,Io),Ms.subVectors(e.c,Io),Ka.subVectors(Ss,xs),Qa.subVectors(Ms,Ss),yr.subVectors(xs,Ms);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-yr.z,yr.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,yr.z,0,-yr.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-yr.y,yr.x,0];return!uh(i,xs,Ss,Ms,gu)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,xs,Ss,Ms,gu))?!1:(_u.crossVectors(Ka,Qa),i=[_u.x,_u.y,_u.z],uh(i,xs,Ss,Ms,gu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],bi=new rt,mu=new tl,xs=new rt,Ss=new rt,Ms=new rt,Ka=new rt,Qa=new rt,yr=new rt,Io=new rt,gu=new rt,_u=new rt,Er=new rt;function uh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Er.fromArray(o,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),_=r.dot(Er);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const _M=new tl,Ho=new rt,ch=new rt;class Vd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):_M.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(ch)),this.expandByPoint(Ho.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new rt,fh=new rt,vu=new rt,Ja=new rt,hh=new rt,xu=new rt,dh=new rt;class vM{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){fh.copy(e).add(i).multiplyScalar(.5),vu.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(fh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(vu),d=Ja.dot(this.direction),m=-Ja.dot(vu),p=Ja.lengthSq(),_=Math.abs(1-h*h);let g,S,E,A;if(_>0)if(g=h*m-d,S=h*d-m,A=c*_,g>=0)if(S>=-A)if(S<=A){const C=1/_;g*=C,S*=C,E=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(fh).addScaledVector(vu,S),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){hh.subVectors(i,e),xu.subVectors(r,e),dh.crossVectors(hh,xu);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ja.subVectors(this.origin,e);const m=d*this.direction.dot(xu.crossVectors(Ja,xu));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Ja));if(p<0||m+p>h)return null;const _=-d*Ja.dot(dh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,c,h,d,m,p,_,g,S,E,A,C,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,S,E,A,C,M)}set(e,i,r,l,c,h,d,m,p,_,g,S,E,A,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),h=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=h*_,E=h*g,A=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,E=m*g,A=p*_,C=p*g;i[0]=S+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=E*d-A,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,E=m*g,A=p*_,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,E=h*g,A=d*_,C=d*g;i[0]=m*_,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=C-S*g,i[8]=A*g+E,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*g+A,i[10]=S-C*g}else if(e.order==="XZY"){const S=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=h*_,i[9]=E*g-A,i[2]=A*g-E,i[6]=d*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,SM)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),$a.crossVectors(r,ni),$a.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),$a.crossVectors(r,ni)),$a.normalize(),Su.crossVectors(ni,$a),l[0]=$a.x,l[4]=Su.x,l[8]=ni.x,l[1]=$a.y,l[5]=Su.y,l[9]=ni.y,l[2]=$a.z,l[6]=Su.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],E=r[13],A=r[2],C=r[6],M=r[10],x=r[14],P=r[3],N=r[7],L=r[11],F=r[15],I=l[0],z=l[4],j=l[8],R=l[12],w=l[1],X=l[5],J=l[9],$=l[13],ct=l[2],ut=l[6],O=l[10],H=l[14],at=l[3],Mt=l[7],xt=l[11],U=l[15];return c[0]=h*I+d*w+m*ct+p*at,c[4]=h*z+d*X+m*ut+p*Mt,c[8]=h*j+d*J+m*O+p*xt,c[12]=h*R+d*$+m*H+p*U,c[1]=_*I+g*w+S*ct+E*at,c[5]=_*z+g*X+S*ut+E*Mt,c[9]=_*j+g*J+S*O+E*xt,c[13]=_*R+g*$+S*H+E*U,c[2]=A*I+C*w+M*ct+x*at,c[6]=A*z+C*X+M*ut+x*Mt,c[10]=A*j+C*J+M*O+x*xt,c[14]=A*R+C*$+M*H+x*U,c[3]=P*I+N*w+L*ct+F*at,c[7]=P*z+N*X+L*ut+F*Mt,c[11]=P*j+N*J+L*O+F*xt,c[15]=P*R+N*$+L*H+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],E=e[14],A=e[3],C=e[7],M=e[11],x=e[15],P=m*E-p*S,N=d*E-p*g,L=d*S-m*g,F=h*E-p*_,I=h*S-m*_,z=h*g-d*_;return i*(C*P-M*N+x*L)-r*(A*P-M*F+x*I)+l*(A*N-C*F+x*z)-c*(A*L-C*I+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],E=e[11],A=e[12],C=e[13],M=e[14],x=e[15],P=g*M*p-C*S*p+C*m*E-d*M*E-g*m*x+d*S*x,N=A*S*p-_*M*p-A*m*E+h*M*E+_*m*x-h*S*x,L=_*C*p-A*g*p+A*d*E-h*C*E-_*d*x+h*g*x,F=A*g*m-_*C*m-A*d*S+h*C*S+_*d*M-h*g*M,I=i*P+r*N+l*L+c*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=P*z,e[1]=(C*S*c-g*M*c-C*l*E+r*M*E+g*l*x-r*S*x)*z,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*x+r*m*x)*z,e[3]=(g*m*c-d*S*c-g*l*p+r*S*p+d*l*E-r*m*E)*z,e[4]=N*z,e[5]=(_*M*c-A*S*c+A*l*E-i*M*E-_*l*x+i*S*x)*z,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*x-i*m*x)*z,e[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*E+i*m*E)*z,e[8]=L*z,e[9]=(A*g*c-_*C*c-A*r*E+i*C*E+_*r*x-i*g*x)*z,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*x+i*d*x)*z,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*E-i*d*E)*z,e[12]=F*z,e[13]=(_*C*l-A*g*l+A*r*S-i*C*S-_*r*M+i*g*M)*z,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*z,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*S+i*d*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,S=c*p,E=c*_,A=c*g,C=h*_,M=h*g,x=d*g,P=m*p,N=m*_,L=m*g,F=r.x,I=r.y,z=r.z;return l[0]=(1-(C+x))*F,l[1]=(E+L)*F,l[2]=(A-N)*F,l[3]=0,l[4]=(E-L)*I,l[5]=(1-(S+x))*I,l[6]=(M+P)*I,l[7]=0,l[8]=(A+N)*z,l[9]=(M-P)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const h=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ii,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let A,C;if(m)A=c/(h-c),C=h*c/(h-c);else if(d===Ii)A=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Vu)A=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ii,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,C;if(m)A=1/(h-c),C=h/(h-c);else if(d===Ii)A=-2/(h-c),C=-(h+c)/(h-c);else if(d===Vu)A=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new rt,Ai=new rn,xM=new rt(0,0,0),SM=new rt(1,1,1),$a=new rt,Su=new rt,ni=new rt,Y0=new rn,Z0=new $o;class Di{constructor(e=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const j0=new rt,Es=new $o,fa=new rn,Mu=new rt,Go=new rt,yM=new rt,EM=new $o,K0=new rt(1,0,0),Q0=new rt(0,1,0),J0=new rt(0,0,1),$0={type:"added"},TM={type:"removed"},Ts={type:"childadded",child:null},ph={type:"childremoved",child:null};class Ln extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new rt,i=new Di,r=new $o,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new he}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Q0,e)}rotateZ(e){return this.rotateOnAxis(J0,e)}translateOnAxis(e,i){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Q0,e)}translateZ(e){return this.translateOnAxis(J0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Go,Mu,this.up):fa.lookAt(Mu,Go,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(fa),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(TM),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,EM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),S=h(e.skeletons),E=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new rt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new rt,ha=new rt,mh=new rt,da=new rt,bs=new rt,As=new rt,t_=new rt,gh=new rt,_h=new rt,vh=new rt,xh=new an,Sh=new an,Mh=new an;class Ci{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ha.subVectors(r,i),mh.subVectors(e,i);const h=Ri.dot(Ri),d=Ri.dot(ha),m=Ri.dot(mh),p=ha.dot(ha),_=ha.dot(mh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,E=(p*m-d*_)*S,A=(h*_-d*m)*S;return c.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return xh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),xh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,r),Mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(xh,c.x),h.addScaledVector(Sh,c.y),h.addScaledVector(Mh,c.z),h}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;bs.subVectors(l,r),As.subVectors(c,r),gh.subVectors(e,r);const m=bs.dot(gh),p=As.dot(gh);if(m<=0&&p<=0)return i.copy(r);_h.subVectors(e,l);const _=bs.dot(_h),g=As.dot(_h);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(bs,h);vh.subVectors(e,c);const E=bs.dot(vh),A=As.dot(vh);if(A>=0&&E<=A)return i.copy(c);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(As,d);const M=_*A-E*g;if(M<=0&&g-_>=0&&E-A>=0)return t_.subVectors(c,l),d=(g-_)/(g-_+(E-A)),i.copy(l).addScaledVector(t_,d);const x=1/(M+C+S);return h=C*x,d=S*x,i.copy(r).addScaledVector(bs,h).addScaledVector(As,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},yu={h:0,s:0,l:0};function yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ne{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=cM(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yh(h,c,e+1/3),this.g=yh(h,c,e),this.b=yh(h,c,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=tv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return be.workingToColorSpace(zn.copy(this),e),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ai){be.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(yu);const r=ah(tr.h,yu.h,i),l=ah(tr.s,yu.s,i),c=ah(tr.l,yu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ne;Ne.NAMES=tv;let bM=0;class el extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Os,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=zh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Sa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ph&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ev extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new rt,Eu=new Oe;let AM=0;class Vi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=H0,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Eu.fromBufferAttribute(this,i),Eu.applyMatrix3(e),this.setXY(i,Eu.x,Eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==H0&&(e.usage=this.usage),e}}class nv extends Vi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iv extends Vi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xa extends Vi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let RM=0;const _i=new rn,Eh=new Ln,Rs=new rt,ii=new tl,Vo=new tl,Sn=new rt;class Ea extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ii.min,Vo.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,Vo.max),ii.expandByPoint(Sn)):(ii.expandByPoint(Vo.min),ii.expandByPoint(Vo.max))}ii.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(Rs.fromBufferAttribute(e,p),Sn.add(Rs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new rt,m[j]=new rt;const p=new rt,_=new rt,g=new rt,S=new Oe,E=new Oe,A=new Oe,C=new rt,M=new rt;function x(j,R,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,w),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,R),A.fromBufferAttribute(c,w),_.sub(p),g.sub(p),E.sub(S),A.sub(S);const X=1/(E.x*A.y-A.x*E.y);isFinite(X)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(g,-E.y).multiplyScalar(X),M.copy(g).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(X),d[j].add(C),d[R].add(C),d[w].add(C),m[j].add(M),m[R].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,R=P.length;j<R;++j){const w=P[j],X=w.start,J=w.count;for(let $=X,ct=X+J;$<ct;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const N=new rt,L=new rt,F=new rt,I=new rt;function z(j){F.fromBufferAttribute(l,j),I.copy(F);const R=d[j];N.copy(R),N.sub(F.multiplyScalar(F.dot(R))).normalize(),L.crossVectors(I,R);const X=L.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,X)}for(let j=0,R=P.length;j<R;++j){const w=P[j],X=w.start,J=w.count;for(let $=X,ct=X+J;$<ct;$+=3)z(e.getX($+0)),z(e.getX($+1)),z(e.getX($+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,_=new rt,g=new rt;if(e)for(let S=0,E=e.count;S<E;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,S=new p.constructor(m.length*_);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*_;for(let x=0;x<_;x++)S[A++]=p[E++]}return new Vi(S,_,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ea,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const S=p[_],E=e(S,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const E=p[g];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let S=0,E=g.length;S<E;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e_=new rn,Tr=new vM,Tu=new Vd,n_=new rt,bu=new rt,Au=new rt,Ru=new rt,Th=new rt,Cu=new rt,i_=new rt,wu=new rt;class si extends Ln{constructor(e=new Ea,i=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Th.fromBufferAttribute(g,e),h?Cu.addScaledVector(Th,_):Cu.addScaledVector(Th.sub(i),_))}i.add(Cu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(c),Tr.copy(e.ray).recast(e.near),!(Tu.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Tu,n_)===null||Tr.origin.distanceToSquared(n_)>(e.far-e.near)**2))&&(e_.copy(c).invert(),Tr.copy(e.ray).applyMatrix4(e_),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Tr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=h[M.materialIndex],P=Math.max(M.start,E.start),N=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let L=P,F=N;L<F;L+=3){const I=d.getX(L),z=d.getX(L+1),j=d.getX(L+2);l=Du(this,x,e,r,p,_,g,I,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const P=d.getX(M),N=d.getX(M+1),L=d.getX(M+2);l=Du(this,h,e,r,p,_,g,P,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=h[M.materialIndex],P=Math.max(M.start,E.start),N=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let L=P,F=N;L<F;L+=3){const I=L,z=L+1,j=L+2;l=Du(this,x,e,r,p,_,g,I,z,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const P=M,N=M+1,L=M+2;l=Du(this,h,e,r,p,_,g,P,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function CM(o,e,i,r,l,c,h,d){let m;if(e.side===Zn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Sa,d),m===null)return null;wu.copy(d),wu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:o}}function Du(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,bu),o.getVertexPosition(m,Au),o.getVertexPosition(p,Ru);const _=CM(o,e,i,r,bu,Au,Ru,i_);if(_){const g=new rt;Ci.getBarycoord(i_,bu,Au,Ru,g),l&&(_.uv=Ci.getInterpolatedAttribute(l,d,m,p,g,new Oe)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,d,m,p,g,new Oe)),h&&(_.normal=Ci.getInterpolatedAttribute(h,d,m,p,g,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};Ci.getNormal(bu,Au,Ru,S.normal),_.face=S,_.barycoord=g}return _}class nl extends Ea{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let S=0,E=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new xa(p,3)),this.setAttribute("normal",new xa(_,3)),this.setAttribute("uv",new xa(g,2));function A(C,M,x,P,N,L,F,I,z,j,R){const w=L/z,X=F/j,J=L/2,$=F/2,ct=I/2,ut=z+1,O=j+1;let H=0,at=0;const Mt=new rt;for(let xt=0;xt<O;xt++){const U=xt*X-$;for(let it=0;it<ut;it++){const gt=it*w-J;Mt[C]=gt*P,Mt[M]=U*N,Mt[x]=ct,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[M]=0,Mt[x]=I>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),g.push(it/z),g.push(1-xt/j),H+=1}}for(let xt=0;xt<j;xt++)for(let U=0;U<z;U++){const it=S+U+ut*xt,gt=S+U+ut*(xt+1),bt=S+(U+1)+ut*(xt+1),Bt=S+(U+1)+ut*xt;m.push(it,gt,Bt),m.push(gt,bt,Bt),at+=6}d.addGroup(E,at,R),E+=at,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const r=Hs(o[i]);for(const l in r)e[l]=r[l]}return e}function wM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function av(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const DM={clone:Hs,merge:Hn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class rv extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new rt,a_=new Oe,r_=new Oe;class vi extends rv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,i){return this.getViewBounds(e,a_,r_),i.subVectors(r_,a_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ih*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class NM extends Ln{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Cs,ws,e,i);l.layers=this.layers,this.add(l);const c=new vi(Cs,ws,e,i);c.layers=this.layers,this.add(c);const h=new vi(Cs,ws,e,i);h.layers=this.layers,this.add(h);const d=new vi(Cs,ws,e,i);d.layers=this.layers,this.add(d);const m=new vi(Cs,ws,e,i);m.layers=this.layers,this.add(m);const p=new vi(Cs,ws,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,S,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class sv extends Bn{constructor(e=[],i=Nr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ov extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:_a});c.uniforms.tEquirect.value=i;const h=new si(l,c),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Fn),new NM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Uu extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class PM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class zM extends Bn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=Un,_=Un,g,S){super(null,h,d,m,p,_,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new rt,FM=new rt,BM=new he;class Cr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ah.subVectors(r,i).cross(FM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BM.getNormalMatrix(e),l=this.coplanarPoint(Ah).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Vd,IM=new Oe(.5,.5),Lu=new rt;class Xd{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,h=new Cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],S=c[6],E=c[7],A=c[8],C=c[9],M=c[10],x=c[11],P=c[12],N=c[13],L=c[14],F=c[15];if(l[0].setComponents(p-h,E-_,x-A,F-P).normalize(),l[1].setComponents(p+h,E+_,x+A,F+P).normalize(),l[2].setComponents(p+d,E+g,x+C,F+N).normalize(),l[3].setComponents(p-d,E-g,x-C,F-N).normalize(),r)l[4].setComponents(m,S,M,L).normalize(),l[5].setComponents(p-m,E-S,x-M,F-L).normalize();else if(l[4].setComponents(p-m,E-S,x-M,F-L).normalize(),i===Ii)l[5].setComponents(p+m,E+S,x+M,F+L).normalize();else if(i===Vu)l[5].setComponents(m,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const i=IM.distanceTo(e.center);return br.radius=.7071067811865476+i,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lu.x=l.normal.x>0?e.max.x:e.min.x,Lu.y=l.normal.y>0?e.max.y:e.min.y,Lu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends Bn{constructor(e,i,r=Xi,l,c,h,d=Un,m=Un,p,_=ya,g=1){if(_!==ya&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class HM extends Qo{constructor(e,i=Xi,r=Nr,l,c,h=Un,d=Un,m,p=ya){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,S=i/m,E=[],A=[],C=[],M=[];for(let x=0;x<_;x++){const P=x*S-h;for(let N=0;N<p;N++){const L=N*g-c;A.push(L,-P,0),C.push(0,0,1),M.push(N/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const N=P+p*x,L=P+p*(x+1),F=P+1+p*(x+1),I=P+1+p*x;E.push(N,L,I),E.push(L,F,I)}this.setIndex(E),this.setAttribute("position",new xa(A,3)),this.setAttribute("normal",new xa(C,3)),this.setAttribute("uv",new xa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class GM extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kd extends el{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K_,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VM extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class uv{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,S=p.length;g<S;g+=2){const E=p[g],A=p[g+1];if(E.global&&(E.lastIndex=0),E.test(_))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kM=new uv;class Wd{constructor(e){this.manager=e!==void 0?e:kM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class WM extends Wd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Rh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Ds.get(h);g===void 0&&(g=[],Ds.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=jo("img");function m(){_(),i&&i(this);const g=Ds.get(this)||[];for(let S=0;S<g.length;S++){const E=g[S];E.onLoad&&E.onLoad(this)}Ds.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Rh.remove(`image:${e}`);const S=Ds.get(this)||[];for(let E=0;E<S.length;E++){const A=S[E];A.onError&&A.onError(g)}Ds.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Rh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class qM extends Wd{constructor(e){super(e)}load(e,i,r,l){const c=new Bn,h=new WM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class cv extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ch=new rn,s_=new rt,o_=new rt;class YM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;s_.setFromMatrixPosition(e.matrixWorld),i.position.copy(s_),o_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(o_),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qd extends rv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZM extends YM{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jM extends cv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ZM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class KM extends cv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class QM extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class JM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function l_(o,e,i,r){const l=$M(r);switch(i){case Y_:return o*e;case j_:return o*e/l.components*l.byteLength;case zd:return o*e/l.components*l.byteLength;case Bs:return o*e*2/l.components*l.byteLength;case Fd:return o*e*2/l.components*l.byteLength;case Z_:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Bd:return o*e*4/l.components*l.byteLength;case zu:case Fu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bu:case Iu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:case Qh:return Math.max(o,16)*Math.max(e,8)/4;case Zh:case Kh:return Math.max(o,8)*Math.max(e,8)/2;case Jh:case $h:case ed:case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case td:case id:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xd:case Sd:case Md:return Math.ceil(o/4)*Math.ceil(e/4)*16;case yd:case Ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Td:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(o){switch(o){case ri:case X_:return{byteLength:1,components:1};case Yo:case k_:case Ma:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Xi:case Nd:case Bi:return{byteLength:4,components:1};case W_:case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ty(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<g.length;E++){const A=g[S],C=g[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,g[S]=C)}g.length=S+1;for(let E=0,A=g.length;E<A;E++){const C=g[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ay=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
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
}`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,$y=`uniform sampler2D dfgLUT;
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
}`,tE=`
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,uT=`#define DISTANCE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,ST=`#define NORMAL
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
}`,MT=`#define NORMAL
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
}`,yT=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,TT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,RT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:ey,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ay,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:oy,aomap_pars_fragment:ly,batching_pars_vertex:uy,batching_vertex:cy,begin_vertex:fy,beginnormal_vertex:hy,bsdfs:dy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:vy,clipping_planes_vertex:xy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:yy,color_vertex:Ey,common:Ty,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Ry,displacementmap_vertex:Cy,emissivemap_fragment:wy,emissivemap_pars_fragment:Dy,colorspace_fragment:Uy,colorspace_pars_fragment:Ly,envmap_fragment:Ny,envmap_common_pars_fragment:Oy,envmap_pars_fragment:Py,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Yy,envmap_vertex:Fy,fog_vertex:By,fog_pars_vertex:Iy,fog_fragment:Hy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Xy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:Wy,lights_pars_begin:qy,lights_toon_fragment:Zy,lights_toon_pars_fragment:jy,lights_phong_fragment:Ky,lights_phong_pars_fragment:Qy,lights_physical_fragment:Jy,lights_physical_pars_fragment:$y,lights_fragment_begin:tE,lights_fragment_maps:eE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:uE,map_particle_pars_fragment:cE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:dE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:SE,normal_pars_vertex:ME,normal_vertex:yE,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:CE,packing:wE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:LE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:FE,shadowmap_vertex:BE,shadowmask_pars_fragment:IE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:XE,specularmap_fragment:kE,specularmap_pars_fragment:WE,tonemapping_fragment:qE,tonemapping_pars_fragment:YE,transmission_fragment:ZE,transmission_pars_fragment:jE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:rT,depth_vert:sT,depth_frag:oT,distance_vert:lT,distance_frag:uT,equirect_vert:cT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:MT,meshphong_vert:yT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:bT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Nt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Fi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Fi.physical={uniforms:Hn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Nu={r:0,b:0,g:0},Ar=new Di,OT=new rn;function PT(o,e,i,r,l,c,h){const d=new Ne(0);let m=c===!0?0:1,p,_,g=null,S=0,E=null;function A(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?i:e).get(L)),L}function C(N){let L=!1;const F=A(N);F===null?x(d,m):F&&F.isColor&&(x(F,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,L){const F=A(L);F&&(F.isCubeTexture||F.mapping===Xu)?(_===void 0&&(_=new si(new nl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Hs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ar.copy(L.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Ar)),_.material.toneMapped=be.getTransfer(F.colorSpace)!==Ge,(g!==F||S!==F.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,g=F,S=F.version,E=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new si(new Or(2,2),new ki({name:"BackgroundMaterial",uniforms:Hs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,L){N.getRGB(Nu,av(o)),r.buffers.color.setClear(Nu.r,Nu.g,Nu.b,L,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,L=1){d.set(N),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:C,addToRenderList:M,dispose:P}}function zT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(w,X,J,$,ct){let ut=!1;const O=g($,J,X);c!==O&&(c=O,p(c.object)),ut=E(w,$,J,ct),ut&&A(w,$,J,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,L(w,X,J,$),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,X,J){const $=J.wireframe===!0;let ct=r[w.id];ct===void 0&&(ct={},r[w.id]=ct);let ut=ct[X.id];ut===void 0&&(ut={},ct[X.id]=ut);let O=ut[$];return O===void 0&&(O=S(m()),ut[$]=O),O}function S(w){const X=[],J=[],$=[];for(let ct=0;ct<i;ct++)X[ct]=0,J[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:$,object:w,attributes:{},index:null}}function E(w,X,J,$){const ct=c.attributes,ut=X.attributes;let O=0;const H=J.getAttributes();for(const at in H)if(H[at].location>=0){const xt=ct[at];let U=ut[at];if(U===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;O++}return c.attributesNum!==O||c.index!==$}function A(w,X,J,$){const ct={},ut=X.attributes;let O=0;const H=J.getAttributes();for(const at in H)if(H[at].location>=0){let xt=ut[at];xt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),ct[at]=U,O++}c.attributes=ct,c.attributesNum=O,c.index=$}function C(){const w=c.newAttributes;for(let X=0,J=w.length;X<J;X++)w[X]=0}function M(w){x(w,0)}function x(w,X){const J=c.newAttributes,$=c.enabledAttributes,ct=c.attributeDivisors;J[w]=1,$[w]===0&&(o.enableVertexAttribArray(w),$[w]=1),ct[w]!==X&&(o.vertexAttribDivisor(w,X),ct[w]=X)}function P(){const w=c.newAttributes,X=c.enabledAttributes;for(let J=0,$=X.length;J<$;J++)X[J]!==w[J]&&(o.disableVertexAttribArray(J),X[J]=0)}function N(w,X,J,$,ct,ut,O){O===!0?o.vertexAttribIPointer(w,X,J,ct,ut):o.vertexAttribPointer(w,X,J,$,ct,ut)}function L(w,X,J,$){C();const ct=$.attributes,ut=J.getAttributes(),O=X.defaultAttributeValues;for(const H in ut){const at=ut[H];if(at.location>=0){let Mt=ct[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const xt=Mt.normalized,U=Mt.itemSize,it=e.get(Mt);if(it===void 0)continue;const gt=it.buffer,bt=it.type,Bt=it.bytesPerElement,nt=bt===o.INT||bt===o.UNSIGNED_INT||Mt.gpuType===Nd;if(Mt.isInterleavedBufferAttribute){const ft=Mt.data,wt=ft.stride,Vt=Mt.offset;if(ft.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)x(at.location+It,ft.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let It=0;It<at.locationSize;It++)M(at.location+It);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let It=0;It<at.locationSize;It++)N(at.location+It,U/at.locationSize,bt,xt,wt*Bt,(Vt+U/at.locationSize*It)*Bt,nt)}else{if(Mt.isInstancedBufferAttribute){for(let ft=0;ft<at.locationSize;ft++)x(at.location+ft,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ft=0;ft<at.locationSize;ft++)M(at.location+ft);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ft=0;ft<at.locationSize;ft++)N(at.location+ft,U/at.locationSize,bt,xt,U*Bt,U/at.locationSize*ft*Bt,nt)}}else if(O!==void 0){const xt=O[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}P()}function F(){j();for(const w in r){const X=r[w];for(const J in X){const $=X[J];for(const ct in $)_($[ct].object),delete $[ct];delete X[J]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const J in X){const $=X[J];for(const ct in $)_($[ct].object),delete $[ct];delete X[J]}delete r[w.id]}function z(w){for(const X in r){const J=r[X];if(J[w.id]===void 0)continue;const $=J[w.id];for(const ct in $)_($[ct].object),delete $[ct];delete J[w.id]}}function j(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function FT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A];i.update(E,r,1)}function m(p,_,g,S){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],_[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let A=0;for(let C=0;C<g;C++)A+=_[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==wi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ri&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Bi&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(oe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:F,samples:I}}function IT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Cr,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||r!==0||l;return l=S,r=g.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,E){const A=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||A===null||A.length===0||c&&!M)c?_(null):p();else{const P=c?0:r,N=P*4;let L=x.clippingState||null;m.value=L,L=_(A,S,N,E);for(let F=0;F!==N;++F)L[F]=i[F];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,E,A){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const x=E+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,L=E;N!==C;++N,L+=4)h.copy(g[N]).applyMatrix4(P,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function HT(o){let e=new WeakMap;function i(h,d){return d===kh?h.mapping=Nr:d===Wh&&(h.mapping=Fs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ov(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ir=4,u_=[.125,.215,.35,.446,.526,.582],Dr=20,GT=256,Xo=new qd,c_=new Ne;let wh=null,Dh=0,Uh=0,Lh=!1;const VT=new rt;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=VT}=c;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ma,format:wi,colorSpace:Is,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XT(c)),this._blurMaterial=WT(c,e,i),this._ggxMaterial=kT(c,e,i)}return l}_compileMaterial(e){const i=new si(new Ea,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new vi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,E=g.toneMapping;g.getClearColor(c_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new nl,new ev({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(c_),x=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):L===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const F=this._cubeSize;Us(l,L*F,N>2?F:0,F,F),g.setRenderTarget(l),x&&g.render(C,m),g.render(e,m)}g.toneMapping=E,g.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Us(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,E=g*S,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-ir?r-A+ir:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,Us(c,M,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Us(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Xo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Dr-1),C=c/A,M=isFinite(c)?1+Math.floor(_*C):Dr;M>Dr&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Dr}`);const x=[];let P=0;for(let z=0;z<Dr;++z){const j=z/C,R=Math.exp(-j*j/2);x.push(R),z===0?P+=R:z<M&&(P+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-r;const L=this._sizeLods[l],F=3*L*(l>N-ir?l-N+ir:0),I=4*(this._cubeSize-L);Us(i,F,I,3*L,2*L),m.setRenderTarget(i),m.render(g,Xo)}}function XT(o){const e=[],i=[],r=[];let l=o;const c=o-ir+1+u_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ir?m=u_[h-o+ir-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],E=6,A=6,C=3,M=2,x=1,P=new Float32Array(C*A*E),N=new Float32Array(M*A*E),L=new Float32Array(x*A*E);for(let I=0;I<E;I++){const z=I%3*2/3-1,j=I>2?0:-1,R=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];P.set(R,C*A*I),N.set(S,M*A*I);const w=[I,I,I,I,I,I];L.set(w,x*A*I)}const F=new Ea;F.setAttribute("position",new Vi(P,C)),F.setAttribute("uv",new Vi(N,M)),F.setAttribute("faceIndex",new Vi(L,x)),r.push(new si(F,null)),l>ir&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function h_(o,e,i){const r=new Gi(o,e,i);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Us(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function kT(o,e,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function WT(o,e,i){const r=new Float32Array(Dr),l=new rt(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ku(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function d_(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function p_(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function qT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Wh,_=m===Nr||m===Fs;if(p||_){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new f_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new f_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function YT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ko("WebGLRenderer: "+r+" extension not supported."),l}}}function ZT(o,e,i,r){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(g){const S=[],E=g.index,A=g.attributes.position;let C=0;if(E!==null){const P=E.array;C=E.version;for(let N=0,L=P.length;N<L;N+=3){const F=P[N+0],I=P[N+1],z=P[N+2];S.push(F,I,I,z,z,F)}}else if(A!==void 0){const P=A.array;C=A.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const F=N+0,I=N+1,z=N+2;S.push(F,I,I,z,z,F)}}else return;const M=new(Q_(S)?iv:nv)(S,1);M.version=C;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const S=c.get(g);if(S){const E=g.index;E!==null&&S.version<E.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function jT(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(r,E,c,S*h),i.update(E,r,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(r,E,c,S*h,A),i.update(E,r,A))}function _(S,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,r,1)}function g(S,E,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,C,0,A);let x=0;for(let P=0;P<A;P++)x+=E[P]*C[P];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function KT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function QT(o,e,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;A===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let F=d.attributes.position.count*L,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*I*4*g),j=new J_(z,F,I,g);j.type=Bi,j.needsUpdate=!0;const R=L*4;for(let X=0;X<g;X++){const J=x[X],$=P[X],ct=N[X],ut=F*I*4*X;for(let O=0;O<J.count;O++){const H=O*R;A===!0&&(l.fromBufferAttribute(J,O),z[ut+H+0]=l.x,z[ut+H+1]=l.y,z[ut+H+2]=l.z,z[ut+H+3]=0),C===!0&&(l.fromBufferAttribute($,O),z[ut+H+4]=l.x,z[ut+H+5]=l.y,z[ut+H+6]=l.z,z[ut+H+7]=0),M===!0&&(l.fromBufferAttribute(ct,O),z[ut+H+8]=l.x,z[ut+H+9]=l.y,z[ut+H+10]=l.z,z[ut+H+11]=ct.itemSize===4?l.w:1)}}S={count:g,texture:j,size:new Oe(F,I)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function JT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const $T={[z_]:"LINEAR_TONE_MAPPING",[F_]:"REINHARD_TONE_MAPPING",[B_]:"CINEON_TONE_MAPPING",[Ld]:"ACES_FILMIC_TONE_MAPPING",[H_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[I_]:"CUSTOM_TONE_MAPPING"};function tb(o,e,i,r,l){const c=new Gi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Gi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),d=new Ea;d.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new GM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new si(d,m),_=new qd(-1,1,1,-1,0,1);let g=null,S=null,E=!1,A,C=null,M=[],x=!1;this.setSize=function(P,N){c.setSize(P,N),h.setSize(P,N);for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(P,N)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const N=c.width,L=c.height;for(let F=0;F<M.length;F++){const I=M[F];I.setSize&&I.setSize(N,L)}},this.begin=function(P,N){if(E||P.toneMapping===Hi&&M.length===0)return!1;if(C=N,N!==null){const L=N.width,F=N.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return x===!1&&P.setRenderTarget(c),A=P.toneMapping,P.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(P,N){P.toneMapping=A,E=!0;let L=c,F=h;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(P,F,L,N),z.needsSwap!==!1)){const j=L;L=F,F=j}}if(g!==P.outputColorSpace||S!==P.toneMapping){g=P.outputColorSpace,S=P.toneMapping,m.defines={},be.getTransfer(g)===Ge&&(m.defines.SRGB_TRANSFER="");const I=$T[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(C),P.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const hv=new Bn,Rd=new Qo(1,1),dv=new J_,pv=new gM,mv=new sv,m_=[],g_=[],__=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function Vs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=m_[l];if(c===void 0&&(c=new Float32Array(l),m_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Wu(o,e){let i=g_[e];i===void 0&&(i=new Int32Array(e),g_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function eb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function rb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;x_.set(r),o.uniformMatrix2fv(this.addr,!1,x_),vn(i,r)}}function sb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;v_.set(r),o.uniformMatrix3fv(this.addr,!1,v_),vn(i,r)}}function ob(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;__.set(r),o.uniformMatrix4fv(this.addr,!1,__),vn(i,r)}}function lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function hb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function gb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Rd.compareFunction=i.isReversedDepthBuffer()?Hd:Id,c=Rd):c=hv,i.setTexture2D(e||c,l)}function _b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||pv,l)}function vb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||mv,l)}function xb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||dv,l)}function Sb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return ub;case 35668:case 35672:return cb;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}function Mb(o,e){o.uniform1fv(this.addr,e)}function yb(o,e){const i=Vs(e,this.size,2);o.uniform2fv(this.addr,i)}function Eb(o,e){const i=Vs(e,this.size,3);o.uniform3fv(this.addr,i)}function Tb(o,e){const i=Vs(e,this.size,4);o.uniform4fv(this.addr,i)}function bb(o,e){const i=Vs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Ab(o,e){const i=Vs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Rb(o,e){const i=Vs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Cb(o,e){o.uniform1iv(this.addr,e)}function wb(o,e){o.uniform2iv(this.addr,e)}function Db(o,e){o.uniform3iv(this.addr,e)}function Ub(o,e){o.uniform4iv(this.addr,e)}function Lb(o,e){o.uniform1uiv(this.addr,e)}function Nb(o,e){o.uniform2uiv(this.addr,e)}function Ob(o,e){o.uniform3uiv(this.addr,e)}function Pb(o,e){o.uniform4uiv(this.addr,e)}function zb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Rd:h=hv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function Fb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||pv,c[h])}function Bb(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||mv,c[h])}function Ib(o,e,i){const r=this.cache,l=e.length,c=Wu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||dv,c[h])}function Hb(o){switch(o){case 5126:return Mb;case 35664:return yb;case 35665:return Eb;case 35666:return Tb;case 35674:return bb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return wb;case 35668:case 35672:return Db;case 35669:case 35673:return Ub;case 5125:return Lb;case 36294:return Nb;case 36295:return Ob;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return Ib}}class Gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Sb(i.type)}}class Vb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Hb(i.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function S_(o,e){o.seq.push(e),o.map[e.id]=e}function kb(o,e,i){const r=o.name,l=r.length;for(Nh.lastIndex=0;;){const c=Nh.exec(r),h=Nh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){S_(i,p===void 0?new Gb(d,o,e):new Vb(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new Xb(d),S_(i,g)),i=g}}}class Hu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);kb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function M_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Wb=37297;let qb=0;function Yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const y_=new he;function Zb(o){be._getMatrix(y_,be.workingColorSpace,o);const e=`mat3( ${y_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Gu:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function E_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Yb(o.getShaderSource(e),d)}else return c}function jb(o,e){const i=Zb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Kb={[z_]:"Linear",[F_]:"Reinhard",[B_]:"Cineon",[Ld]:"ACESFilmic",[H_]:"AgX",[G_]:"Neutral",[I_]:"Custom"};function Qb(o,e){const i=Kb[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new rt;function Jb(){be.getLuminanceCoefficients(Ou);const o=Ou.x.toFixed(4),e=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function tA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function eA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function qo(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(o){return o.replace(nA,aA)}const iA=new Map;function aA(o,e){let i=de[e];if(i===void 0){const r=iA.get(e);if(r!==void 0)i=de[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cd(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(o){return o.replace(rA,sA)}function sA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oA={[Pu]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function lA(o){return oA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uA={[Nr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function cA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const fA={[Fs]:"ENVMAP_MODE_REFRACTION"};function hA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":fA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dA={[P_]:"ENVMAP_BLENDING_MULTIPLY",[QS]:"ENVMAP_BLENDING_MIX",[JS]:"ENVMAP_BLENDING_ADD"};function pA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":dA[o.combine]||"ENVMAP_BLENDING_NONE"}function mA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function gA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=lA(i),p=cA(i),_=hA(i),g=pA(i),S=mA(i),E=$b(i),A=tA(c),C=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(qo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(qo).join(`
`),x.length>0&&(x+=`
`)):(M=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),x=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?de.tonemapping_pars_fragment:"",i.toneMapping!==Hi?Qb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,jb("linearToOutputTexel",i.outputColorSpace),Jb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Cd(h),h=T_(h,i),h=b_(h,i),d=Cd(d),d=T_(d,i),d=b_(d,i),h=A_(h),d=A_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+M+h,L=P+x+d,F=M_(l,l.VERTEX_SHADER,N),I=M_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,F),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(X){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",$=l.getShaderInfoLog(F)||"",ct=l.getShaderInfoLog(I)||"",ut=J.trim(),O=$.trim(),H=ct.trim();let at=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,I);else{const xt=E_(l,F,"vertex"),U=E_(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+xt+`
`+U)}else ut!==""?oe("WebGLProgram: Program Info Log:",ut):(O===""||H==="")&&(Mt=!1);Mt&&(X.diagnostics={runnable:at,programLog:ut,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(I),j=new Hu(l,C),R=eA(l,C)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Wb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=I,this}let _A=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new xA(e),i.set(e,r)),r}}class xA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function SA(o,e,i,r,l,c,h){const d=new $_,m=new vA,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,X,J,$){const ct=J.fog,ut=$.geometry,O=R.isMeshStandardMaterial?J.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||O),at=H&&H.mapping===Xu?H.image.height:null,Mt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&oe("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,U=xt!==void 0?xt.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let gt,bt,Bt,nt;if(Mt){const Te=Fi[Mt];gt=Te.vertexShader,bt=Te.fragmentShader}else gt=R.vertexShader,bt=R.fragmentShader,m.update(R),Bt=m.getVertexShaderID(R),nt=m.getFragmentShaderID(R);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Vt=$.isInstancedMesh===!0,It=$.isBatchedMesh===!0,pe=!!R.map,$e=!!R.matcap,ve=!!H,me=!!R.aoMap,we=!!R.lightMap,le=!!R.bumpMap,tn=!!R.normalMap,G=!!R.displacementMap,Ke=!!R.emissiveMap,Ee=!!R.metalnessMap,Pe=!!R.roughnessMap,qt=R.anisotropy>0,D=R.clearcoat>0,y=R.dispersion>0,W=R.iridescence>0,dt=R.sheen>0,vt=R.transmission>0,lt=qt&&!!R.anisotropyMap,Zt=D&&!!R.clearcoatMap,Rt=D&&!!R.clearcoatNormalMap,Xt=D&&!!R.clearcoatRoughnessMap,ie=W&&!!R.iridescenceMap,yt=W&&!!R.iridescenceThicknessMap,Et=dt&&!!R.sheenColorMap,zt=dt&&!!R.sheenRoughnessMap,Ot=!!R.specularMap,Ct=!!R.specularColorMap,ce=!!R.specularIntensityMap,k=vt&&!!R.transmissionMap,Ut=vt&&!!R.thicknessMap,Tt=!!R.gradientMap,Pt=!!R.alphaMap,St=R.alphaTest>0,_t=!!R.alphaHash,At=!!R.extensions;let ae=Hi;R.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Fe={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:bt,defines:R.defines,customVertexShaderID:Bt,customFragmentShaderID:nt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:It,batchingColor:It&&$._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&$.instanceColor!==null,instancingMorph:Vt&&$.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Is,alphaToCoverage:!!R.alphaToCoverage,map:pe,matcap:$e,envMap:ve,envMapMode:ve&&H.mapping,envMapCubeUVHeight:at,aoMap:me,lightMap:we,bumpMap:le,normalMap:tn,displacementMap:G,emissiveMap:Ke,normalMapObjectSpace:tn&&R.normalMapType===eM,normalMapTangentSpace:tn&&R.normalMapType===K_,metalnessMap:Ee,roughnessMap:Pe,anisotropy:qt,anisotropyMap:lt,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:y,iridescence:W,iridescenceMap:ie,iridescenceThicknessMap:yt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:ce,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:R.combine,mapUv:pe&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:le&&C(R.bumpMap.channel),normalMapUv:tn&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ke&&C(R.emissiveMap.channel),metalnessMapUv:Ee&&C(R.metalnessMap.channel),roughnessMapUv:Pe&&C(R.roughnessMap.channel),anisotropyMapUv:lt&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(R.sheenRoughnessMap.channel),specularMapUv:Ot&&C(R.specularMap.channel),specularColorMapUv:Ct&&C(R.specularColorMap.channel),specularIntensityMapUv:ce&&C(R.specularIntensityMap.channel),transmissionMapUv:k&&C(R.transmissionMap.channel),thicknessMapUv:Ut&&C(R.thicknessMap.channel),alphaMapUv:Pt&&C(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(tn||qt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ut.attributes.uv&&(pe||Pt),fog:!!ct,useFog:R.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:$.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&R.map.isVideoTexture===!0&&be.getTransfer(R.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ke&&R.emissiveMap.isVideoTexture===!0&&be.getTransfer(R.emissiveMap.colorSpace)===Ge,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===Zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:At&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&R.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)w.push(X),w.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(P(w,R),N(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function P(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function N(R,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function L(R){const w=A[R.type];let X;if(w){const J=Fi[w];X=DM.clone(J.uniforms)}else X=R.uniforms;return X}function F(R,w){let X=g.get(w);return X!==void 0?++X.usedTimes:(X=new gA(o,w,R,c),_.push(X),g.set(w,X)),X}function I(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:_,dispose:j}}function MA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function yA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function w_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,S,E,A,C,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:S,material:E,groupOrder:A,renderOrder:g.renderOrder,z:C,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=g.renderOrder,x.z=C,x.group=M),e++,x}function d(g,S,E,A,C,M){const x=h(g,S,E,A,C,M);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(g,S,E,A,C,M){const x=h(g,S,E,A,C,M);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||yA),r.length>1&&r.sort(S||C_),l.length>1&&l.sort(S||C_)}function _(){for(let g=e,S=o.length;g<S;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function EA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new w_,o.set(r,[h])):l>=c.length?(h=new w_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function TA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ne};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function bA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let AA=0;function RA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CA(o){const e=new TA,i=bA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new rn,h=new rn;function d(p){let _=0,g=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,x=0,P=0,N=0,L=0,F=0,I=0,z=0;p.sort(RA);for(let R=0,w=p.length;R<w;R++){const X=p[R],J=X.color,$=X.intensity,ct=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Bs?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=J.r*$,g+=J.g*$,S+=J.b*$;else if(X.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(X.sh.coefficients[O],$);z++}else if(X.isDirectionalLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,at=i.get(X);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.directionalShadow[E]=at,r.directionalShadowMap[E]=ut,r.directionalShadowMatrix[E]=X.shadow.matrix,P++}r.directional[E]=O,E++}else if(X.isSpotLight){const O=e.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(J).multiplyScalar($),O.distance=ct,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,r.spot[C]=O;const H=X.shadow;if(X.map&&(r.spotLightMap[F]=X.map,F++,H.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[C]=H.matrix,X.castShadow){const at=i.get(X);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.spotShadow[C]=at,r.spotShadowMap[C]=ut,L++}C++}else if(X.isRectAreaLight){const O=e.get(X);O.color.copy(J).multiplyScalar($),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=O,M++}else if(X.isPointLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const H=X.shadow,at=i.get(X);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,r.pointShadow[A]=at,r.pointShadowMap[A]=ut,r.pointShadowMatrix[A]=X.shadow.matrix,N++}r.point[A]=O,A++}else if(X.isHemisphereLight){const O=e.get(X);O.skyColor.copy(X.color).multiplyScalar($),O.groundColor.copy(X.groundColor).multiplyScalar($),r.hemi[x]=O,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==E||j.pointLength!==A||j.spotLength!==C||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==P||j.numPointShadows!==N||j.numSpotShadows!==L||j.numSpotMaps!==F||j.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,j.directionalLength=E,j.pointLength=A,j.spotLength=C,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=P,j.numPointShadows=N,j.numSpotShadows=L,j.numSpotMaps=F,j.numLightProbes=z,r.version=AA++)}function m(p,_){let g=0,S=0,E=0,A=0,C=0;const M=_.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const N=p[x];if(N.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(N.isSpotLight){const L=r.spot[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function D_(o){const e=new CA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function wA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new D_(o),e.set(l,[d])):c>=h.length?(d=new D_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const DA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`,LA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],NA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],U_=new rn,ko=new rt,Oh=new rt;function OA(o,e,i){let r=new Xd;const l=new Oe,c=new Oe,h=new an,d=new VM,m=new XM,p={},_=i.maxTextureSize,g={[Sa]:Zn,[Zn]:Sa,[ma]:ma},S=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:DA,fragmentShader:UA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ea;A.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new si(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let x=this.type;this.render=function(I,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===LS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Pu);const R=o.getRenderTarget(),w=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),J=o.state;J.setBlending(_a),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=x!==this.type;$&&z.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(ut=>ut.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,ut=I.length;ct<ut;ct++){const O=I[ct],H=O.shadow;if(H===void 0){oe("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ns){if(O.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gi(l.x,l.y,{format:Bs,type:Ma,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Qo(l.x,l.y,Bi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{O.isPointLight?(H.map=new ov(l.x),H.map.depthTexture=new HM(l.x,Xi)):(H.map=new Gi(l.x,l.y),H.map.depthTexture=new Qo(l.x,l.y,Xi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=ya;const xt=o.state.buffers.depth.getReversed();this.type===Pu?(H.map.depthTexture.compareFunction=xt?Hd:Id,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(xt);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),J.viewport(h)}if(O.isPointLight){const U=H.camera,it=H.matrix,gt=O.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),ko.setFromMatrixPosition(O.matrixWorld),U.position.copy(ko),Oh.copy(U.position),Oh.add(LA[xt]),U.up.copy(NA[xt]),U.lookAt(Oh),U.updateMatrixWorld(),it.makeTranslation(-ko.x,-ko.y,-ko.z),U_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(U_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),L(z,j,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Ns&&P(H,j),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,X)};function P(I,z){const j=e.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gi(l.x,l.y,{format:Bs,type:Ma})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,j,E,C,null)}function N(I,z,j,R){let w=null;const X=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)w=X;else if(w=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=w.uuid,$=z.uuid;let ct=p[J];ct===void 0&&(ct={},p[J]=ct);let ut=ct[$];ut===void 0&&(ut=w.clone(),ct[$]=ut,z.addEventListener("dispose",F)),w=ut}if(w.visible=z.visible,w.wireframe=z.wireframe,R===Ns?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=o.properties.get(w);J.light=j}return w}function L(I,z,j,R,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ns)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const $=e.update(I),ct=I.material;if(Array.isArray(ct)){const ut=$.groups;for(let O=0,H=ut.length;O<H;O++){const at=ut[O],Mt=ct[at.materialIndex];if(Mt&&Mt.visible){const xt=N(I,Mt,R,w);I.onBeforeShadow(o,I,z,j,$,xt,at),o.renderBufferDirect(j,null,$,xt,I,at),I.onAfterShadow(o,I,z,j,$,xt,at)}}}else if(ct.visible){const ut=N(I,ct,R,w);I.onBeforeShadow(o,I,z,j,$,ut,null),o.renderBufferDirect(j,null,$,ut,I,null),I.onAfterShadow(o,I,z,j,$,ut,null)}}const J=I.children;for(let $=0,ct=J.length;$<ct;$++)L(J[$],z,j,R,w)}function F(I){I.target.removeEventListener("dispose",F);for(const j in p){const R=p[j],w=I.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const PA={[Fh]:Bh,[Ih]:Vh,[Hh]:Xh,[zs]:Gh,[Bh]:Fh,[Vh]:Ih,[Xh]:Hh,[Gh]:zs};function zA(o,e){function i(){let k=!1;const Ut=new an;let Tt=null;const Pt=new an(0,0,0,0);return{setMask:function(St){Tt!==St&&!k&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ae,Fe){Fe===!0&&(St*=ae,_t*=ae,At*=ae),Ut.set(St,_t,At,ae),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ae),Pt.copy(Ut))},reset:function(){k=!1,Tt=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=e.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ae=St;St=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(_t){_t?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=PA[_t]),Pt!==_t){switch(_t){case Fh:o.depthFunc(o.NEVER);break;case Bh:o.depthFunc(o.ALWAYS);break;case Ih:o.depthFunc(o.LESS);break;case zs:o.depthFunc(o.LEQUAL);break;case Hh:o.depthFunc(o.EQUAL);break;case Gh:o.depthFunc(o.GEQUAL);break;case Vh:o.depthFunc(o.GREATER);break;case Xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){k=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ae=null,Fe=null;return{setTest:function(Te){k||(Te?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!k&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,Nn,xi){(Tt!==Te||Pt!==Nn||St!==xi)&&(o.stencilFunc(Te,Nn,xi),Tt=Te,Pt=Nn,St=xi)},setOp:function(Te,Nn,xi){(_t!==Te||At!==Nn||ae!==xi)&&(o.stencilOp(Te,Nn,xi),_t=Te,At=Nn,ae=xi)},setLocked:function(Te){k=Te},setClear:function(Te){Fe!==Te&&(o.clearStencil(Te),Fe=Te)},reset:function(){k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ae=null,Fe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,P=null,N=null,L=null,F=null,I=null,z=new Ne(0,0,0),j=0,R=!1,w=null,X=null,J=null,$=null,ct=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),O=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),O=H>=2);let Mt=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),gt=new an().fromArray(U),bt=new an().fromArray(it);function Bt(k,Ut,Tt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const nt={};nt[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(zs),le(!1),tn(P0),ft(o.CULL_FACE),me(_a);function ft(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Vt(k,Ut){return g[k]!==Ut?(o.bindFramebuffer(k,Ut),g[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(k,Ut){let Tt=E,Pt=!1;if(k){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=k.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function pe(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const $e={[wr]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};$e[zS]=o.MIN,$e[FS]=o.MAX;const ve={[BS]:o.ZERO,[IS]:o.ONE,[HS]:o.SRC_COLOR,[Ph]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[kS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[XS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[ZS]:o.ONE_MINUS_CONSTANT_COLOR,[jS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function me(k,Ut,Tt,Pt,St,_t,At,ae,Fe,Te){if(k===_a){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),k!==NS){if(k!==M||Te!==R){if((x!==wr||L!==wr)&&(o.blendEquation(o.FUNC_ADD),x=wr,L=wr),Te)switch(k){case Os:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case z0:o.blendFunc(o.ONE,o.ONE);break;case F0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case z0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case F0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",k);break}P=null,N=null,F=null,I=null,z.set(0,0,0),j=0,M=k,R=Te}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==x||St!==L)&&(o.blendEquationSeparate($e[Ut],$e[St]),x=Ut,L=St),(Tt!==P||Pt!==N||_t!==F||At!==I)&&(o.blendFuncSeparate(ve[Tt],ve[Pt],ve[_t],ve[At]),P=Tt,N=Pt,F=_t,I=At),(ae.equals(z)===!1||Fe!==j)&&(o.blendColor(ae.r,ae.g,ae.b,Fe),z.copy(ae),j=Fe),M=k,R=!1}function we(k,Ut){k.side===ma?wt(o.CULL_FACE):ft(o.CULL_FACE);let Tt=k.side===Zn;Ut&&(Tt=!Tt),le(Tt),k.blending===Os&&k.transparent===!1?me(_a):me(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ke(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function tn(k){k!==DS?(ft(o.CULL_FACE),k!==X&&(k===P0?o.cullFace(o.BACK):k===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),X=k}function G(k){k!==J&&(O&&o.lineWidth(k),J=k)}function Ke(k,Ut,Tt){k?(ft(o.POLYGON_OFFSET_FILL),($!==Ut||ct!==Tt)&&(o.polygonOffset(Ut,Tt),$=Ut,ct=Tt)):wt(o.POLYGON_OFFSET_FILL)}function Ee(k){k?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Pe(k){k===void 0&&(k=o.TEXTURE0+ut-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function qt(k,Ut,Tt){Tt===void 0&&(Mt===null?Tt=o.TEXTURE0+ut-1:Tt=Mt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(Mt!==Tt&&(o.activeTexture(Tt),Mt=Tt),o.bindTexture(k,Ut||nt[k]),Pt.type=k,Pt.texture=Ut)}function D(){const k=xt[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function dt(){try{o.texSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function ie(){try{o.texImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function zt(k){bt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Ot(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(k);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,k.name),Tt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,xt={},g={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,P=null,N=null,L=null,F=null,I=null,z=new Ne(0,0,0),j=0,R=!1,w=null,X=null,J=null,$=null,ct=null,gt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:Vt,drawBuffers:It,useProgram:pe,setBlending:me,setMaterial:we,setFlipSided:le,setCullFace:tn,setLineWidth:G,setPolygonOffset:Ke,setScissorTest:Ee,activeTexture:Pe,bindTexture:qt,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:ie,texImage3D:yt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Et,viewport:zt,reset:ce}}function FA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,_=new WeakMap;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,y){return E?new OffscreenCanvas(D,y):jo("canvas")}function C(D,y,W){let dt=1;const vt=qt(D);if((vt.width>W||vt.height>W)&&(dt=W/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(dt*vt.width),Zt=Math.floor(dt*vt.height);g===void 0&&(g=A(lt,Zt));const Rt=y?A(lt,Zt):g;return Rt.width=lt,Rt.height=Zt,Rt.getContext("2d").drawImage(D,0,0,lt,Zt),oe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Zt+")."),Rt}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,y,W,dt,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=y;if(y===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),y===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),y===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),y===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),y===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),y===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),y===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),y===o.RGBA){const Zt=vt?Gu:be.getTransfer(dt);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=Zt===Ge?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function L(D,y){let W;return D?y===null||y===Xi||y===Zo?W=o.DEPTH24_STENCIL8:y===Bi?W=o.DEPTH32F_STENCIL8:y===Yo&&(W=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===Zo?W=o.DEPTH_COMPONENT24:y===Bi?W=o.DEPTH_COMPONENT32F:y===Yo&&(W=o.DEPTH_COMPONENT16),W}function F(D,y){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function I(D){const y=D.target;y.removeEventListener("dispose",I),j(y),y.isVideoTexture&&_.delete(y)}function z(D){const y=D.target;y.removeEventListener("dispose",z),w(y)}function j(D){const y=r.get(D);if(y.__webglInit===void 0)return;const W=D.source,dt=S.get(W);if(dt){const vt=dt[y.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(D),Object.keys(dt).length===0&&S.delete(W)}r.remove(D)}function R(D){const y=r.get(D);o.deleteTexture(y.__webglTexture);const W=D.source,dt=S.get(W);delete dt[y.__cacheKey],h.memory.textures--}function w(D){const y=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(y.__webglFramebuffer[dt]))for(let vt=0;vt<y.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(y.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(y.__webglFramebuffer[dt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[dt])}else{if(Array.isArray(y.__webglFramebuffer))for(let dt=0;dt<y.__webglFramebuffer.length;dt++)o.deleteFramebuffer(y.__webglFramebuffer[dt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let dt=0;dt<y.__webglColorRenderbuffer.length;dt++)y.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[dt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=D.textures;for(let dt=0,vt=W.length;dt<vt;dt++){const lt=r.get(W[dt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(W[dt])}r.remove(D)}let X=0;function J(){X=0}function $(){const D=X;return D>=l.maxTextures&&oe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function ct(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function ut(D,y){const W=r.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const dt=D.image;if(dt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(W,D,y);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+y)}function O(D,y){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){nt(W,D,y);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+y)}function H(D,y){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){nt(W,D,y);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+y)}function at(D,y){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ft(W,D,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+y)}const Mt={[qh]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[Yh]:o.MIRRORED_REPEAT},xt={[Un]:o.NEAREST,[$S]:o.NEAREST_MIPMAP_NEAREST,[pu]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[Ur]:o.LINEAR_MIPMAP_LINEAR},U={[nM]:o.NEVER,[oM]:o.ALWAYS,[iM]:o.LESS,[Id]:o.LEQUAL,[aM]:o.EQUAL,[Hd]:o.GEQUAL,[rM]:o.GREATER,[sM]:o.NOTEQUAL};function it(D,y){if(y.type===Bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===nh||y.magFilter===pu||y.magFilter===Ur||y.minFilter===Fn||y.minFilter===nh||y.minFilter===pu||y.minFilter===Ur)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==pu&&y.minFilter!==Ur||y.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function gt(D,y){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",I));const dt=y.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const lt=ct(y);if(lt!==D.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const Zt=vt[D.__cacheKey];Zt!==void 0&&(vt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(y)),D.__cacheKey=lt,D.__webglTexture=vt[lt].texture}return W}function bt(D,y,W){return Math.floor(Math.floor(D/W)/y)}function Bt(D,y,W,dt){const lt=D.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,W,dt,y.data);else{lt.sort((yt,Et)=>yt.start-Et.start);let Zt=0;for(let yt=1;yt<lt.length;yt++){const Et=lt[Zt],zt=lt[yt],Ot=Et.start+Et.count,Ct=bt(zt.start,y.width,4),ce=bt(Et.start,y.width,4);zt.start<=Ot+1&&Ct===ce&&bt(zt.start+zt.count-1,y.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++Zt,lt[Zt]=zt)}lt.length=Zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let yt=0,Et=lt.length;yt<Et;yt++){const zt=lt[yt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),ce=Ot%y.width,k=Math.floor(Ot/y.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ce,k,Ut,Tt,W,dt,y.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function nt(D,y,W){let dt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=gt(D,y),lt=y.source;i.bindTexture(dt,D.__webglTexture,o.TEXTURE0+W);const Zt=r.get(lt);if(lt.version!==Zt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Rt=be.getPrimaries(be.workingColorSpace),Xt=y.colorSpace===nr?null:be.getPrimaries(y.colorSpace),ie=y.colorSpace===nr||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let yt=C(y.image,!1,l.maxTextureSize);yt=Pe(y,yt);const Et=c.convert(y.format,y.colorSpace),zt=c.convert(y.type);let Ot=N(y.internalFormat,Et,zt,y.colorSpace,y.isVideoTexture);it(dt,y);let Ct;const ce=y.mipmaps,k=y.isVideoTexture!==!0,Ut=Zt.__version===void 0||vt===!0,Tt=lt.dataReady,Pt=F(y,yt);if(y.isDepthTexture)Ot=L(y.format===Lr,y.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ot,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,null));else if(y.isDataTexture)if(ce.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);y.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height),Tt&&Bt(y,yt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,ce[0].width,ce[0].height,yt.depth);for(let St=0,_t=ce.length;St<_t;St++)if(Ct=ce[St],y.format!==wi)if(Et!==null)if(k){if(Tt)if(y.layerUpdates.size>0){const At=l_(Ct.width,Ct.height,y.format,y.type);for(const ae of y.layerUpdates){const Fe=Ct.data.subarray(ae*At/Ct.data.BYTES_PER_ELEMENT,(ae+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ae,Ct.width,Ct.height,1,Et,Fe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],y.format!==wi?Et!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(y.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,yt.width,yt.height,yt.depth),Tt)if(y.layerUpdates.size>0){const St=l_(yt.width,yt.height,y.format,y.type);for(const _t of y.layerUpdates){const At=yt.data.subarray(_t*St/yt.data.BYTES_PER_ELEMENT,(_t+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Et,zt,At)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(y.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(y.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height);else{let St=yt.width,_t=yt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(ce.length>0){if(k&&Ut){const St=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);y.generateMipmaps=!1}else if(k){if(Ut){const St=qt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,yt);M(y)&&x(dt),Zt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ft(D,y,W){if(y.image.length!==6)return;const dt=gt(D,y),vt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const lt=r.get(vt);if(vt.version!==lt.__version||dt===!0){i.activeTexture(o.TEXTURE0+W);const Zt=be.getPrimaries(be.workingColorSpace),Rt=y.colorSpace===nr?null:be.getPrimaries(y.colorSpace),Xt=y.colorSpace===nr||Zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ie=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ie&&!yt?Et[_t]=C(y.image[_t],!0,l.maxCubemapSize):Et[_t]=yt?y.image[_t].image:y.image[_t],Et[_t]=Pe(y,Et[_t]);const zt=Et[0],Ot=c.convert(y.format,y.colorSpace),Ct=c.convert(y.type),ce=N(y.internalFormat,Ot,Ct,y.colorSpace),k=y.isVideoTexture!==!0,Ut=lt.__version===void 0||dt===!0,Tt=vt.dataReady;let Pt=F(y,zt);it(o.TEXTURE_CUBE_MAP,y);let St;if(ie){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ae=St[At];y.format!==wi?Ot!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ae.width,ae.height,Ot,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ce,ae.width,ae.height,0,ae.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ae.width,ae.height,Ot,Ct,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ce,ae.width,ae.height,0,Ot,Ct,ae.data)}}}else{if(St=y.mipmaps,k&&Ut){St.length>0&&Pt++;const _t=qt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const Fe=St[At].image[_t].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Fe.width,Fe.height,Ot,Ct,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ce,Fe.width,Fe.height,0,Ot,Ct,Fe.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ae=St[At];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ae.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ce,Ot,Ct,ae.image[_t])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function wt(D,y,W,dt,vt,lt){const Zt=c.convert(W.format,W.colorSpace),Rt=c.convert(W.type),Xt=N(W.internalFormat,Zt,Rt,W.colorSpace),ie=r.get(y),yt=r.get(W);if(yt.__renderTarget=y,!ie.__hasExternalTextures){const Et=Math.max(1,y.width>>lt),zt=Math.max(1,y.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,y.depth,0,Zt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,Zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ke(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,yt.__webglTexture,0,G(y)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(D,y,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const dt=y.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,lt=L(y.stencilBuffer,vt),Zt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ke(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),lt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),lt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,lt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,D)}else{const dt=y.textures;for(let vt=0;vt<dt.length;vt++){const lt=dt[vt],Zt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),Xt=N(lt.internalFormat,Zt,Rt,lt.colorSpace);Ke(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Xt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Xt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(D,y,W){const dt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(y.depthTexture);if(vt.__renderTarget=y,(!vt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),it(o.TEXTURE_CUBE_MAP,y.depthTexture);const ie=c.convert(y.depthTexture.format),yt=c.convert(y.depthTexture.type);let Et;y.depthTexture.format===ya?Et=o.DEPTH_COMPONENT24:y.depthTexture.format===Lr&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,y.width,y.height,0,ie,yt,null)}}else ut(y.depthTexture,0);const lt=vt.__webglTexture,Zt=G(y),Rt=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=y.depthTexture.format===Lr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ya)Ke(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(y.depthTexture.format===Lr)Ke(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function pe(D){const y=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),dt){const vt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),y.__depthDisposeCallback=vt}y.__boundDepthTexture=dt}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let dt=0;dt<6;dt++)It(y.__webglFramebuffer[dt],D,dt);else{const dt=D.texture.mipmaps;dt&&dt.length>0?It(y.__webglFramebuffer[0],D,0):It(y.__webglFramebuffer,D,0)}else if(W){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]===void 0)y.__webglDepthbuffer[dt]=o.createRenderbuffer(),Vt(y.__webglDepthbuffer[dt],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const dt=D.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Vt(y.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(D,y,W){const dt=r.get(D);y!==void 0&&wt(dt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&pe(D)}function ve(D){const y=D.texture,W=r.get(D),dt=r.get(y);D.addEventListener("dispose",z);const vt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=y.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<y.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ie=r.get(vt[Rt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ke(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const ie=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),Et=N(Xt.internalFormat,ie,yt,Xt.colorSpace,D.isXRRenderTarget===!0),zt=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),it(o.TEXTURE_CUBE_MAP,y);for(let Rt=0;Rt<6;Rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Rt][Xt],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(W.__webglFramebuffer[Rt],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ie=vt[Rt],yt=r.get(ie);let Et=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),it(Et,ie),wt(W.__webglFramebuffer,D,ie,o.COLOR_ATTACHMENT0+Rt,Et,0),M(ie)&&x(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Rt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),it(Rt,y),y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Xt],D,y,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(W.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,Rt,0);M(y)&&x(Rt),i.unbindTexture()}D.depthBuffer&&pe(D)}function me(D){const y=D.textures;for(let W=0,dt=y.length;W<dt;W++){const vt=y[W];if(M(vt)){const lt=P(D),Zt=r.get(vt).__webglTexture;i.bindTexture(lt,Zt),x(lt),i.unbindTexture()}}}const we=[],le=[];function tn(D){if(D.samples>0){if(Ke(D)===!1){const y=D.textures,W=D.width,dt=D.height;let vt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(D),Rt=y.length>1;if(Rt)for(let ie=0;ie<y.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<y.length;ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const yt=r.get(y[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,dt,0,0,W,dt,vt,o.NEAREST),m===!0&&(we.length=0,le.length=0,we.push(o.COLOR_ATTACHMENT0+ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(we.push(lt),le.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ie=0;ie<y.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const yt=r.get(y[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Ke(D){const y=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(D){const y=h.render.frame;_.get(D)!==y&&(_.set(D,y),D.update())}function Pe(D,y){const W=D.colorSpace,dt=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Is&&W!==nr&&(be.getTransfer(W)===Ge?(dt!==wi||vt!==ri)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",W)),y}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=ut,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=$e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BA(o,e){function i(r,l=nr){let c;const h=be.getTransfer(l);if(r===ri)return o.UNSIGNED_BYTE;if(r===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===q_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===X_)return o.BYTE;if(r===k_)return o.SHORT;if(r===Yo)return o.UNSIGNED_SHORT;if(r===Nd)return o.INT;if(r===Xi)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Ma)return o.HALF_FLOAT;if(r===Y_)return o.ALPHA;if(r===Z_)return o.RGB;if(r===wi)return o.RGBA;if(r===ya)return o.DEPTH_COMPONENT;if(r===Lr)return o.DEPTH_STENCIL;if(r===j_)return o.RED;if(r===zd)return o.RED_INTEGER;if(r===Bs)return o.RG;if(r===Fd)return o.RG_INTEGER;if(r===Bd)return o.RGBA_INTEGER;if(r===zu||r===Fu||r===Bu||r===Iu)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===jh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jh||r===$h)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===td)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ed)return c.COMPRESSED_R11_EAC;if(r===nd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===id)return c.COMPRESSED_RG11_EAC;if(r===ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xd||r===Sd||r===Md)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===xd)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Ed||r===Td||r===bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
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

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ki({vertexShader:IA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new si(new Or(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Gs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new GA,x={},P=i.getContextAttributes();let N=null,L=null;const F=[],I=[],z=new Oe;let j=null;const R=new vi;R.viewport=new an;const w=new vi;w.viewport=new an;const X=[R,w],J=new QM;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ft=F[nt];return ft===void 0&&(ft=new bh,F[nt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(nt){let ft=F[nt];return ft===void 0&&(ft=new bh,F[nt]=ft),ft.getGripSpace()},this.getHand=function(nt){let ft=F[nt];return ft===void 0&&(ft=new bh,F[nt]=ft),ft.getHandSpace()};function ut(nt){const ft=I.indexOf(nt.inputSource);if(ft===-1)return;const wt=F[ft];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,p||h),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let nt=0;nt<F.length;nt++){const ft=I[nt];ft!==null&&(I[nt]=null,F[nt].disconnect(ft))}$=null,ct=null,M.reset();for(const nt in x)delete x[nt];e.setRenderTarget(N),E=null,S=null,g=null,l=null,L=null,Bt.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,It=null;P.depth&&(It=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?Lr:ya,Vt=P.stencil?Zo:Xi);const pe={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(pe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Gi(S.textureWidth,S.textureHeight,{format:wi,type:ri,depthTexture:new Qo(S.textureWidth,S.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Gi(E.framebufferWidth,E.framebufferHeight,{format:wi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(nt){for(let ft=0;ft<nt.removed.length;ft++){const wt=nt.removed[ft],Vt=I.indexOf(wt);Vt>=0&&(I[Vt]=null,F[Vt].disconnect(wt))}for(let ft=0;ft<nt.added.length;ft++){const wt=nt.added[ft];let Vt=I.indexOf(wt);if(Vt===-1){for(let pe=0;pe<F.length;pe++)if(pe>=I.length){I.push(wt),Vt=pe;break}else if(I[pe]===null){I[pe]=wt,Vt=pe;break}if(Vt===-1)break}const It=F[Vt];It&&It.connect(wt)}}const at=new rt,Mt=new rt;function xt(nt,ft,wt){at.setFromMatrixPosition(ft.matrixWorld),Mt.setFromMatrixPosition(wt.matrixWorld);const Vt=at.distanceTo(Mt),It=ft.projectionMatrix.elements,pe=wt.projectionMatrix.elements,$e=It[14]/(It[10]-1),ve=It[14]/(It[10]+1),me=(It[9]+1)/It[5],we=(It[9]-1)/It[5],le=(It[8]-1)/It[0],tn=(pe[8]+1)/pe[0],G=$e*le,Ke=$e*tn,Ee=Vt/(-le+tn),Pe=Ee*-le;if(ft.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Pe),nt.translateZ(Ee),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),It[10]===-1)nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const qt=$e+Ee,D=ve+Ee,y=G-Pe,W=Ke+(Vt-Pe),dt=me*ve/D*qt,vt=we*ve/D*qt;nt.projectionMatrix.makePerspective(y,W,dt,vt,qt,D),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function U(nt,ft){ft===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ft.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ft=nt.near,wt=nt.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),J.near=w.near=R.near=ft,J.far=w.far=R.far=wt,($!==J.near||ct!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,ct=J.far),J.layers.mask=nt.layers.mask|6,R.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Vt=nt.parent,It=J.cameras;U(J,Vt);for(let pe=0;pe<It.length;pe++)U(It[pe],Vt);It.length===2?xt(J,R,w):J.projectionMatrix.copy(R.projectionMatrix),it(nt,J,Vt)};function it(nt,ft,wt){wt===null?nt.matrix.copy(ft.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ft.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ad*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function bt(nt,ft){if(_=ft.getViewerPose(p||h),A=ft,_!==null){const wt=_.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let Vt=!1;wt.length!==J.cameras.length&&(J.cameras.length=0,Vt=!0);for(let ve=0;ve<wt.length;ve++){const me=wt[ve];let we=null;if(E!==null)we=E.getViewport(me);else{const tn=g.getViewSubImage(S,me);we=tn.viewport,ve===0&&(e.setRenderTargetTextures(L,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(L))}let le=X[ve];le===void 0&&(le=new vi,le.layers.enable(ve),le.viewport=new an,X[ve]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),ve===0&&(J.matrix.copy(le.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Vt===!0&&J.cameras.push(le)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const ve=g.getDepthInformation(wt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(It&&It.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let ve=0;ve<wt.length;ve++){const me=wt[ve].camera;if(me){let we=x[me];we||(we=new lv,x[me]=we);const le=g.getCameraImage(me);we.sourceTexture=le}}}}for(let wt=0;wt<F.length;wt++){const Vt=I[wt],It=F[wt];Vt!==null&&It!==void 0&&It.update(Vt,ft,p||h)}gt&&gt(nt,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),A=null}const Bt=new fv;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const Rr=new Di,XA=new rn;function kA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,av(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,N,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),A(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,P,N):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),N=P.envMap,L=P.envMapRotation;N&&(M.envMap.value=N,Rr.copy(L),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),M.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Rr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function WA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const L=N.program;r.uniformBlockBinding(P,L)}function p(P,N){let L=l[P.id];L===void 0&&(A(P),L=_(P),l[P.id]=L,P.addEventListener("dispose",M));const F=N.program;r.updateUBOMapping(P,F);const I=e.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function _(P){const N=g();P.__bindingPointIndex=N;const L=o.createBuffer(),F=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,F,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,L),L}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],L=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,z=L.length;I<z;I++){const j=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,w=j.length;R<w;R++){const X=j[R];if(E(X,I,R,F)===!0){const J=X.__offset,$=Array.isArray(X.value)?X.value:[X.value];let ct=0;for(let ut=0;ut<$.length;ut++){const O=$[ut],H=C(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,J+ct,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,N,L,F){const I=P.value,z=N+"_"+L;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const j=F[z];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return F[z]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function A(P){const N=P.uniforms;let L=0;const F=16;for(let z=0,j=N.length;z<j;z++){const R=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,X=R.length;w<X;w++){const J=R[w],$=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,ut=$.length;ct<ut;ct++){const O=$[ct],H=C(O),at=L%F,Mt=at%H.boundary,xt=at+Mt;L+=Mt,xt!==0&&F-xt<H.storage&&(L+=F-xt),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=H.storage}}}const I=L%F;return I>0&&(L+=F-I),P.__size=L,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const L=h.indexOf(N.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const qA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function YA(){return zi===null&&(zi=new zM(qA,16,16,Bs,Ma),zi.name="DFG_LUT",zi.minFilter=Fn,zi.magFilter=Fn,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class ZA{constructor(e={}){const{canvas:i=lM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=ri}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const C=E,M=new Set([Bd,Fd,zd]),x=new Set([ri,Xi,Yo,Zo,Od,Pd]),P=new Uint32Array(4),N=new Int32Array(4);let L=null,F=null;const I=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=ai;let X=0,J=0,$=null,ct=-1,ut=null;const O=new an,H=new an;let at=null;const Mt=new Ne(0);let xt=0,U=i.width,it=i.height,gt=1,bt=null,Bt=null;const nt=new an(0,0,U,it),ft=new an(0,0,U,it);let wt=!1;const Vt=new Xd;let It=!1,pe=!1;const $e=new rn,ve=new rt,me=new an,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return $===null?gt:1}let G=r;function Ke(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const q="webgl2";if(G=Ke(q,b),G===null)throw Ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ce("WebGLRenderer: "+b.message),b}let Ee,Pe,qt,D,y,W,dt,vt,lt,Zt,Rt,Xt,ie,yt,Et,zt,Ot,Ct,ce,k,Ut,Tt,Pt,St;function _t(){Ee=new YT(G),Ee.init(),Tt=new BA(G,Ee),Pe=new BT(G,Ee,e,Tt),qt=new zA(G,Ee),Pe.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),D=new KT(G),y=new MA,W=new FA(G,Ee,qt,y,Pe,Tt,D),dt=new HT(R),vt=new qT(R),lt=new ty(G),Pt=new zT(G,lt),Zt=new ZT(G,lt,D,Pt),Rt=new JT(G,Zt,lt,D),ce=new QT(G,Pe,W),zt=new IT(y),Xt=new SA(R,dt,vt,Ee,Pe,Pt,zt),ie=new kA(R,y),yt=new EA,Et=new wA(Ee),Ct=new PT(R,dt,vt,qt,Rt,A,m),Ot=new OA(R,Rt,Pe),St=new WA(G,D,Pe,qt),k=new FT(G,Ee,D),Ut=new jT(G,Ee,D),D.programs=Xt.programs,R.capabilities=Pe,R.extensions=Ee,R.properties=y,R.renderLists=yt,R.shadowMap=Ot,R.state=qt,R.info=D}_t(),C!==ri&&(j=new tb(C,i.width,i.height,l,c));const At=new VA(R,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(b){b!==void 0&&(gt=b,this.setSize(U,it,!1))},this.getSize=function(b){return b.set(U,it)},this.setSize=function(b,q,st=!0){if(At.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,it=q,i.width=Math.floor(b*gt),i.height=Math.floor(q*gt),st===!0&&(i.style.width=b+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*gt,it*gt).floor()},this.setDrawingBufferSize=function(b,q,st){U=b,it=q,gt=st,i.width=Math.floor(b*st),i.height=Math.floor(q*st),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,q,st,tt){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,q,st,tt),qt.viewport(O.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(b){return b.copy(ft)},this.setScissor=function(b,q,st,tt){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,q,st,tt),qt.scissor(H.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(b){qt.setScissorTest(wt=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Bt=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,st=!0){let tt=0;if(b){let Z=!1;if($!==null){const Dt=$.texture.format;Z=M.has(Dt)}if(Z){const Dt=$.texture.type,Ft=x.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Lt.r,te=Lt.g,Wt=Lt.b;Ft?(P[0]=kt,P[1]=te,P[2]=Wt,P[3]=Ht,G.clearBufferuiv(G.COLOR,0,P)):(N[0]=kt,N[1]=te,N[2]=Wt,N[3]=Ht,G.clearBufferiv(G.COLOR,0,N))}else tt|=G.COLOR_BUFFER_BIT}q&&(tt|=G.DEPTH_BUFFER_BIT),st&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ct.dispose(),yt.dispose(),Et.dispose(),y.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",zr),At.removeEventListener("sessionend",Ws),Ui.stop()};function ae(b){b.preventDefault(),X0("WebGLRenderer: Context Lost."),w=!0}function Fe(){X0("WebGLRenderer: Context Restored."),w=!1;const b=D.autoReset,q=Ot.enabled,st=Ot.autoUpdate,tt=Ot.needsUpdate,Z=Ot.type;_t(),D.autoReset=b,Ot.enabled=q,Ot.autoUpdate=st,Ot.needsUpdate=tt,Ot.type=Z}function Te(b){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){const q=b.target;q.removeEventListener("dispose",Nn),xi(q)}function xi(b){il(b),y.remove(b)}function il(b){const q=y.get(b).programs;q!==void 0&&(q.forEach(function(st){Xt.releaseProgram(st)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,st,tt,Z,Dt){q===null&&(q=we);const Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=ar(b,q,st,tt,Z);qt.setMaterial(tt,Ft);let Ht=st.index,kt=1;if(tt.wireframe===!0){if(Ht=Zt.getWireframeAttribute(st),Ht===void 0)return;kt=2}const te=st.drawRange,Wt=st.attributes.position;let ee=te.start*kt,De=(te.start+te.count)*kt;Dt!==null&&(ee=Math.max(ee,Dt.start*kt),De=Math.min(De,(Dt.start+Dt.count)*kt)),Ht!==null?(ee=Math.max(ee,0),De=Math.min(De,Ht.count)):Wt!=null&&(ee=Math.max(ee,0),De=Math.min(De,Wt.count));const Qe=De-ee;if(Qe<0||Qe===1/0)return;Pt.setup(Z,tt,Lt,st,Ht);let qe,ze=k;if(Ht!==null&&(qe=lt.get(Ht),ze=Ut,ze.setIndex(qe)),Z.isMesh)tt.wireframe===!0?(qt.setLineWidth(tt.wireframeLinewidth*tn()),ze.setMode(G.LINES)):ze.setMode(G.TRIANGLES);else if(Z.isLine){let jt=tt.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*tn()),Z.isLineSegments?ze.setMode(G.LINES):Z.isLineLoop?ze.setMode(G.LINE_LOOP):ze.setMode(G.LINE_STRIP)}else Z.isPoints?ze.setMode(G.POINTS):Z.isSprite&&ze.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,re=Z._multiDrawCount,yn=Ht?lt.get(Ht).bytesPerElement:1,Wi=y.get(tt).currentProgram.getUniforms();for(let En=0;En<re;En++)Wi.setValue(G,"_gl_DrawID",En),ze.render(jt[En]/yn,Ue[En])}else if(Z.isInstancedMesh)ze.renderInstances(ee,Qe,Z.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ue=Math.min(st.instanceCount,jt);ze.renderInstances(ee,Qe,Ue)}else ze.render(ee,Qe)};function Xs(b,q,st){b.transparent===!0&&b.side===ma&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,Br(b,q,st),b.side=Sa,b.needsUpdate=!0,Br(b,q,st),b.side=ma):Br(b,q,st)}this.compile=function(b,q,st=null){st===null&&(st=b),F=Et.get(st),F.init(q),z.push(F),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),b!==st&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const tt=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Lt=Dt[Ft];Xs(Lt,st,Z),tt.add(Lt)}else Xs(Dt,st,Z),tt.add(Dt)}),F=z.pop(),tt},this.compileAsync=function(b,q,st=null){const tt=this.compile(b,q,st);return new Promise(Z=>{function Dt(){if(tt.forEach(function(Ft){y.get(Ft).currentProgram.isReady()&&tt.delete(Ft)}),tt.size===0){Z(b);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Pr=null;function ks(b){Pr&&Pr(b)}function zr(){Ui.stop()}function Ws(){Ui.start()}const Ui=new fv;Ui.setAnimationLoop(ks),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(b){Pr=b,At.setAnimationLoop(b),b===null?Ui.stop():Ui.start()},At.addEventListener("sessionstart",zr),At.addEventListener("sessionend",Ws),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,tt=j!==null&&($===null||st)&&j.begin(R,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,q,$),F=Et.get(b,z.length),F.init(q),z.push(F),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix($e,Ii,q.reversedDepth),pe=this.localClippingEnabled,It=zt.init(this.clippingPlanes,pe),L=yt.get(b,I.length),L.init(),I.push(L),At.enabled===!0&&At.isPresenting===!0){const Ft=R.xr.getDepthSensingMesh();Ft!==null&&oi(Ft,q,-1/0,R.sortObjects)}oi(b,q,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(bt,Bt),le=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,le&&Ct.addToRenderList(L,b),this.info.render.frame++,It===!0&&zt.beginShadows();const Z=F.state.shadowsArray;if(Ot.render(Z,b,q),It===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&j.hasRenderPass())===!1){const Ft=L.opaque,Lt=L.transmissive;if(F.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt];Mn(Ft,Lt,b,Wt)}le&&Ct.render(b);for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt];ln(L,b,Wt,Wt.viewport)}}else Lt.length>0&&Mn(Ft,Lt,b,q),le&&Ct.render(b),ln(L,b,q)}$!==null&&J===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),tt&&j.end(R),b.isScene===!0&&b.onAfterRender(R,b,q),Pt.resetDefaultState(),ct=-1,ut=null,z.pop(),z.length>0?(F=z[z.length-1],It===!0&&zt.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function oi(b,q,st,tt){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)F.pushLight(b),b.castShadow&&F.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){tt&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4($e);const Ft=Rt.update(b),Lt=b.material;Lt.visible&&L.push(b,Ft,Lt,st,me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){const Ft=Rt.update(b),Lt=b.material;if(tt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),me.copy(Ft.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4($e)),Array.isArray(Lt)){const Ht=Ft.groups;for(let kt=0,te=Ht.length;kt<te;kt++){const Wt=Ht[kt],ee=Lt[Wt.materialIndex];ee&&ee.visible&&L.push(b,Ft,ee,st,me.z,Wt)}}else Lt.visible&&L.push(b,Ft,Lt,st,me.z,null)}}const Dt=b.children;for(let Ft=0,Lt=Dt.length;Ft<Lt;Ft++)oi(Dt[Ft],q,st,tt)}function ln(b,q,st,tt){const{opaque:Z,transmissive:Dt,transparent:Ft}=b;F.setupLightsView(st),It===!0&&zt.setGlobalState(R.clippingPlanes,st),tt&&qt.viewport(O.copy(tt)),Z.length>0&&Si(Z,q,st),Dt.length>0&&Si(Dt,q,st),Ft.length>0&&Si(Ft,q,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Mn(b,q,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[tt.id]===void 0){const ee=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[tt.id]=new Gi(1,1,{generateMipmaps:!0,type:ee?Ma:ri,minFilter:Ur,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=F.state.transmissionRenderTarget[tt.id],Ft=tt.viewport||O;Dt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Ht=R.getActiveCubeFace(),kt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(Mt),xt=R.getClearAlpha(),xt<1&&R.setClearColor(16777215,.5),R.clear(),le&&Ct.render(st);const te=R.toneMapping;R.toneMapping=Hi;const Wt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),F.setupLightsView(tt),It===!0&&zt.setGlobalState(R.clippingPlanes,tt),Si(b,st,tt),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let De=0,Qe=q.length;De<Qe;De++){const qe=q[De],{object:ze,geometry:jt,material:Ue,group:re}=qe;if(Ue.side===ma&&ze.layers.test(tt.layers)){const yn=Ue.side;Ue.side=Zn,Ue.needsUpdate=!0,Fr(ze,st,tt,jt,Ue,re),Ue.side=yn,Ue.needsUpdate=!0,ee=!0}}ee===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Lt,Ht,kt),R.setClearColor(Mt,xt),Wt!==void 0&&(tt.viewport=Wt),R.toneMapping=te}function Si(b,q,st){const tt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Dt=b.length;Z<Dt;Z++){const Ft=b[Z],{object:Lt,geometry:Ht,group:kt}=Ft;let te=Ft.material;te.allowOverride===!0&&tt!==null&&(te=tt),Lt.layers.test(st.layers)&&Fr(Lt,q,st,Ht,te,kt)}}function Fr(b,q,st,tt,Z,Dt){b.onBeforeRender(R,q,st,tt,Z,Dt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(R,q,st,tt,b,Dt),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=Zn,Z.needsUpdate=!0,R.renderBufferDirect(st,q,tt,Z,b,Dt),Z.side=Sa,Z.needsUpdate=!0,R.renderBufferDirect(st,q,tt,Z,b,Dt),Z.side=ma):R.renderBufferDirect(st,q,tt,Z,b,Dt),b.onAfterRender(R,q,st,tt,Z,Dt)}function Br(b,q,st){q.isScene!==!0&&(q=we);const tt=y.get(b),Z=F.state.lights,Dt=F.state.shadowsArray,Ft=Z.state.version,Lt=Xt.getParameters(b,Z.state,Dt,q,st),Ht=Xt.getProgramCacheKey(Lt);let kt=tt.programs;tt.environment=b.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(b.isMeshStandardMaterial?vt:dt).get(b.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Nn),kt=new Map,tt.programs=kt);let te=kt.get(Ht);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===Ft)return qs(b,Lt),te}else Lt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Lt,R),te=Xt.acquireProgram(Lt,Ht),kt.set(Ht,te),tt.uniforms=Lt.uniforms;const Wt=tt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),qs(b,Lt),tt.needsLights=Ta(b),tt.lightsStateVersion=Ft,tt.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=te,tt.uniformsList=null,te}function al(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Hu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function qs(b,q){const st=y.get(b);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function ar(b,q,st,tt,Z){q.isScene!==!0&&(q=we),W.resetTextureUnits();const Dt=q.fog,Ft=tt.isMeshStandardMaterial?q.environment:null,Lt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Is,Ht=(tt.isMeshStandardMaterial?vt:dt).get(tt.envMap||Ft),kt=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,te=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Wt=!!st.morphAttributes.position,ee=!!st.morphAttributes.normal,De=!!st.morphAttributes.color;let Qe=Hi;tt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=R.toneMapping);const qe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ze=qe!==void 0?qe.length:0,jt=y.get(tt),Ue=F.state.lights;if(It===!0&&(pe===!0||b!==ut)){const bn=b===ut&&tt.id===ct;zt.setState(tt,b,bn)}let re=!1;tt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ue.state.version||jt.outputColorSpace!==Lt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Ht||tt.fog===!0&&jt.fog!==Dt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==zt.numPlanes||jt.numIntersection!==zt.numIntersection)||jt.vertexAlphas!==kt||jt.vertexTangents!==te||jt.morphTargets!==Wt||jt.morphNormals!==ee||jt.morphColors!==De||jt.toneMapping!==Qe||jt.morphTargetsCount!==ze)&&(re=!0):(re=!0,jt.__version=tt.version);let yn=jt.currentProgram;re===!0&&(yn=Br(tt,q,Z));let Wi=!1,En=!1,li=!1;const Be=yn.getUniforms(),Tn=jt.uniforms;if(qt.useProgram(yn.program)&&(Wi=!0,En=!0,li=!0),tt.id!==ct&&(ct=tt.id,En=!0),Wi||ut!==b){qt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(G,"projectionMatrix",b.projectionMatrix),Be.setValue(G,"viewMatrix",b.matrixWorldInverse);const An=Be.map.cameraPosition;An!==void 0&&An.setValue(G,ve.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&Be.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Be.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ut!==b&&(ut=b,En=!0,li=!0)}if(jt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Be.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,W),Ue.state.spotShadowMap.length>0&&Be.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,W),Ue.state.pointShadowMap.length>0&&Be.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,W)),Z.isSkinnedMesh){Be.setOptional(G,Z,"bindMatrix"),Be.setOptional(G,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Be.setValue(G,"boneTexture",bn.boneTexture,W))}Z.isBatchedMesh&&(Be.setOptional(G,Z,"batchingTexture"),Be.setValue(G,"batchingTexture",Z._matricesTexture,W),Be.setOptional(G,Z,"batchingIdTexture"),Be.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Be.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Be.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const pn=st.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ce.update(Z,st,yn),(En||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Be.setValue(G,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Tn.envMap.value=Ht,Tn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=YA()),En&&(Be.setValue(G,"toneMappingExposure",R.toneMappingExposure),jt.needsLights&&Ys(Tn,li),Dt&&tt.fog===!0&&ie.refreshFogUniforms(Tn,Dt),ie.refreshMaterialUniforms(Tn,tt,gt,it,F.state.transmissionRenderTarget[b.id]),Hu.upload(G,al(jt),Tn,W)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Hu.upload(G,al(jt),Tn,W),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Be.setValue(G,"center",Z.center),Be.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(G,"normalMatrix",Z.normalMatrix),Be.setValue(G,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const bn=tt.uniformsGroups;for(let An=0,Ir=bn.length;An<Ir;An++){const Mi=bn[An];St.update(Mi,yn),St.bind(Mi,yn)}}return yn}function Ys(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Ta(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,q,st){const tt=y.get(b);tt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=q,y.get(b.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const st=y.get(b);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const ba=G.createFramebuffer();this.setRenderTarget=function(b,q=0,st=0){$=b,X=q,J=st;let tt=null,Z=!1,Dt=!1;if(b){const Lt=y.get(b);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),O.copy(b.viewport),H.copy(b.scissor),at=b.scissorTest,qt.viewport(O),qt.scissor(H),qt.setScissorTest(at),ct=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Lt.__hasExternalTextures)W.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const te=b.depthTexture;if(Lt.__boundDepthTexture!==te){if(te!==null&&y.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const kt=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?tt=kt[q][st]:tt=kt[q],Z=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?tt=y.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?tt=kt[st]:tt=kt,O.copy(b.viewport),H.copy(b.scissor),at=b.scissorTest}else O.copy(nt).multiplyScalar(gt).floor(),H.copy(ft).multiplyScalar(gt).floor(),at=wt;if(st!==0&&(tt=ba),qt.bindFramebuffer(G.FRAMEBUFFER,tt)&&qt.drawBuffers(b,tt),qt.viewport(O),qt.scissor(H),qt.setScissorTest(at),Z){const Lt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Dt){const Lt=q;for(let Ht=0;Ht<b.textures.length;Ht++){const kt=y.get(b.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,st,Lt)}}else if(b!==null&&st!==0){const Lt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}ct=-1},this.readRenderTargetPixels=function(b,q,st,tt,Z,Dt,Ft,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const kt=b.textures[Lt],te=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Wt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-tt&&st>=0&&st<=b.height-Z&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,tt,Z,Tt.convert(te),Tt.convert(Wt),Dt))}finally{const kt=$!==null?y.get($).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,q,st,tt,Z,Dt,Ft,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=b.width-tt&&st>=0&&st<=b.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const kt=b.textures[Lt],te=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,tt,Z,Tt.convert(te),Tt.convert(Wt),0);const De=$!==null?y.get($).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,De);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await uM(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ee),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(ee),G.deleteSync(Qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,st=0){const tt=Math.pow(2,-st),Z=Math.floor(b.image.width*tt),Dt=Math.floor(b.image.height*tt),Ft=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ft,Lt,Z,Dt),qt.unbindTexture()};const rr=G.createFramebuffer(),Aa=G.createFramebuffer();this.copyTextureToTexture=function(b,q,st=null,tt=null,Z=0,Dt=null){Dt===null&&(Z!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Z,Z=0):Dt=0);let Ft,Lt,Ht,kt,te,Wt,ee,De,Qe;const qe=b.isCompressedTexture?b.mipmaps[Dt]:b.image;if(st!==null)Ft=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,te=st.min.y,Wt=st.isBox3?st.min.z:0;else{const pn=Math.pow(2,-Z);Ft=Math.floor(qe.width*pn),Lt=Math.floor(qe.height*pn),b.isDataArrayTexture?Ht=qe.depth:b.isData3DTexture?Ht=Math.floor(qe.depth*pn):Ht=1,kt=0,te=0,Wt=0}tt!==null?(ee=tt.x,De=tt.y,Qe=tt.z):(ee=0,De=0,Qe=0);const ze=Tt.convert(q.format),jt=Tt.convert(q.type);let Ue;q.isData3DTexture?(W.setTexture3D(q,0),Ue=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ue=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const re=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Wi=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Be=b.isDataArrayTexture||b.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const pn=y.get(b),bn=y.get(q),An=y.get(pn.__renderTarget),Ir=y.get(bn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Mi=0;Mi<Ht;Mi++)Be&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(b).__webglTexture,Z,Wt+Mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(q).__webglTexture,Dt,Qe+Mi)),G.blitFramebuffer(kt,te,Ft,Lt,ee,De,Ft,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||y.has(b)){const pn=y.get(b),bn=y.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,rr),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Aa);for(let An=0;An<Ht;An++)Be?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Z,Wt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Z),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Dt,Qe+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Dt),Z!==0?G.blitFramebuffer(kt,te,Ft,Lt,ee,De,Ft,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(Ue,Dt,ee,De,Qe+An,kt,te,Ft,Lt):G.copyTexSubImage2D(Ue,Dt,ee,De,kt,te,Ft,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Ue,Dt,ee,De,Qe,Ft,Lt,Ht,ze,jt,qe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Dt,ee,De,Qe,Ft,Lt,Ht,ze,qe.data):G.texSubImage3D(Ue,Dt,ee,De,Qe,Ft,Lt,Ht,ze,jt,qe):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,ee,De,Ft,Lt,ze,jt,qe.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,ee,De,qe.width,qe.height,ze,qe.data):G.texSubImage2D(G.TEXTURE_2D,Dt,ee,De,Ft,Lt,ze,jt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wi),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),Dt===0&&q.generateMipmaps&&G.generateMipmap(Ue),qt.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){X=0,J=0,$=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const wd=new uv,Kt=new qM(wd);function Qt(o){o.colorSpace=ai}function Jt(o){return new kd({map:o,alphaTest:.01,side:Sa,metalness:0,roughness:.4,transparent:!0,opacity:0})}var Ls=(o=>(o.TACO="taco",o.CAT="cat",o.GOAT="goat",o.CHEESE="cheese",o.PIZZA="pizza",o.NARWHAL="narwhal",o.GROUNDHOG="groundhog",o.GORILLA="gorilla",o))(Ls||{});const jA=Kt.load("/icons/star.png",Qt),L_=new kd({map:jA,alphaTest:.01}),KA=new Or(1,1),N_=new Or(5,7),pa={back:[Jt(Kt.load("/cards/back_1.png",Qt))],taco:[Jt(Kt.load("/cards/taco_1.png",Qt)),Jt(Kt.load("/cards/taco_2.png",Qt)),Jt(Kt.load("/cards/taco_3.png",Qt)),Jt(Kt.load("/cards/taco_4.png",Qt)),Jt(Kt.load("/cards/taco_5.png",Qt)),Jt(Kt.load("/cards/taco_6.png",Qt)),Jt(Kt.load("/cards/taco_7.png",Qt)),Jt(Kt.load("/cards/taco_8.png",Qt)),Jt(Kt.load("/cards/taco_9.png",Qt)),Jt(Kt.load("/cards/taco_10.png",Qt)),Jt(Kt.load("/cards/taco_10.png",Qt))],cat:[Jt(Kt.load("/cards/cat_1.png",Qt)),Jt(Kt.load("/cards/cat_2.png",Qt)),Jt(Kt.load("/cards/cat_3.png",Qt)),Jt(Kt.load("/cards/cat_4.png",Qt)),Jt(Kt.load("/cards/cat_5.png",Qt)),Jt(Kt.load("/cards/cat_6.png",Qt)),Jt(Kt.load("/cards/cat_7.png",Qt)),Jt(Kt.load("/cards/cat_8.png",Qt)),Jt(Kt.load("/cards/cat_9.png",Qt)),Jt(Kt.load("/cards/cat_10.png",Qt)),Jt(Kt.load("/cards/cat_11.png",Qt))],goat:[Jt(Kt.load("/cards/goat_1.png",Qt)),Jt(Kt.load("/cards/goat_2.png",Qt)),Jt(Kt.load("/cards/goat_3.png",Qt)),Jt(Kt.load("/cards/goat_4.png",Qt)),Jt(Kt.load("/cards/goat_5.png",Qt)),Jt(Kt.load("/cards/goat_6.png",Qt)),Jt(Kt.load("/cards/goat_7.png",Qt)),Jt(Kt.load("/cards/goat_8.png",Qt)),Jt(Kt.load("/cards/goat_9.png",Qt)),Jt(Kt.load("/cards/goat_10.png",Qt)),Jt(Kt.load("/cards/goat_11.png",Qt))],cheese:[Jt(Kt.load("/cards/cheese_1.png",Qt)),Jt(Kt.load("/cards/cheese_2.png",Qt)),Jt(Kt.load("/cards/cheese_3.png",Qt)),Jt(Kt.load("/cards/cheese_4.png",Qt)),Jt(Kt.load("/cards/cheese_5.png",Qt)),Jt(Kt.load("/cards/cheese_6.png",Qt)),Jt(Kt.load("/cards/cheese_7.png",Qt)),Jt(Kt.load("/cards/cheese_8.png",Qt)),Jt(Kt.load("/cards/cheese_9.png",Qt)),Jt(Kt.load("/cards/cheese_10.png",Qt)),Jt(Kt.load("/cards/cheese_10.png",Qt))],pizza:[Jt(Kt.load("/cards/pizza_1.png",Qt)),Jt(Kt.load("/cards/pizza_2.png",Qt)),Jt(Kt.load("/cards/pizza_3.png",Qt)),Jt(Kt.load("/cards/pizza_4.png",Qt)),Jt(Kt.load("/cards/pizza_5.png",Qt)),Jt(Kt.load("/cards/pizza_6.png",Qt)),Jt(Kt.load("/cards/pizza_7.png",Qt)),Jt(Kt.load("/cards/pizza_8.png",Qt)),Jt(Kt.load("/cards/pizza_9.png",Qt)),Jt(Kt.load("/cards/pizza_10.png",Qt)),Jt(Kt.load("/cards/pizza_10.png",Qt))],narwhal:[],groundhog:[],gorilla:[]},O_=[...pa.taco.map(o=>[o,"taco"]),...pa.cat.map(o=>[o,"cat"]),...pa.goat.map(o=>[o,"goat"]),...pa.cheese.map(o=>[o,"cheese"]),...pa.pizza.map(o=>[o,"pizza"]),...pa.narwhal.map(o=>[o,"narwhal"]),...pa.groundhog.map(o=>[o,"groundhog"]),...pa.gorilla.map(o=>[o,"gorilla"])];function QA(){return O_[Math.floor(Math.random()*O_.length)]}function JA(o,e){if(e>1.5||e<0)return;let i=new rt(Math.sin(o.theta)*8,o.target.y+1.5,Math.cos(o.theta)*8);o.children[0].material.opacity=Math.min(3*e),o.children[1].material.opacity=Math.min(3*e);let r=1-1/(1+Math.exp(5*(e-.5))),l=1-1/(1+Math.exp(20*(e-.9))),c=1-1/(1+Math.exp(15*(e-.7)));o.position.x=i.x*(1-r)+o.target.x*r,o.position.z=i.z*(1-r)+o.target.z*r,o.position.y=i.y*(1-l)+o.target.y*l,o.setRotationFromEuler(new Di(Math.PI+c*Math.PI,o.theta,0,"YXZ"))}function $A(o){const e=new Ln,i=pa.back[0],r=new si(N_,o.clone()),l=new si(N_,i.clone());return r.castShadow=!0,l.castShadow=!0,r.receiveShadow=!0,l.receiveShadow=!0,r.rotation.x=-Math.PI/2,l.rotation.x=-Math.PI/2,l.rotateY(Math.PI),e.add(r),e.add(l),e.scale.setScalar(.5),e.theta=Math.random()*Math.PI*2,e}const t1=Ye.forwardRef((o,e)=>{const i=Ye.useRef(null),r=Ye.useRef(null),l=Ye.useRef(null),c=Ye.useRef([]),h=Ye.useRef([]);return Ye.useImperativeHandle(e,()=>({add_card:()=>{var d;if(r.current&&l.current){let[m,p]=QA();const _=$A(m);return _.created_at=(d=l.current)==null?void 0:d.elapsedTime,_.target=new rt(Math.random()-.5,(c.current.length+1)*.01,Math.random()-.5),r.current.add(_),c.current.push(_),p}return null},reaction:d=>{var p;console.log(h.current);for(var m=0;m<6;m++){let _=L_;const g=new si(KA,_);g.direction=Math.random()*Math.PI*2,g.size=.15+Math.random()*.01,g.speed=.5+Math.random()*.5,g.position.y=7,g.rotation.x=-Math.PI/2,g.position.add(new rt(Math.cos(g.direction)*.3,0,Math.sin(g.direction)*.3)),g.scale.set(g.size,g.size,g.size),(p=r.current)==null||p.add(g),h.current.push(g)}}})),Ye.useEffect(()=>{if(!i.current)return;const d=new PM,m=new JM,p=new vi(60,window.innerWidth/window.innerHeight,.1,1e3),_=new KM(16777215,.5),g=new jM(16777215,2);r.current=d,l.current=m,g.castShadow=!0,g.position.set(2,5,-1),d.add(_),d.add(g),d.add(g.target);const S=new ZA({canvas:i.current,alpha:!0});S.shadowMap.enabled=!0,S.shadowMap.type=Ns,S.toneMapping=Ld,S.setSize(window.innerWidth,window.innerHeight);const E=new Or(8,8),A=new kd({}),C=new si(E,A);d.add(C),C.receiveShadow=!0,C.rotation.x=-Math.PI/2,p.position.y=9,p.rotation.x=-Math.PI/2;function M(){p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",M);function x(){let P=m.getDelta();for(var N=0;N<c.current.length;N++){const L=c.current[N];JA(L,(m.elapsedTime-L.created_at)*1.5)}h.current.forEach(L=>{L.size=L.size-.3*P,L.position.add(new rt(Math.cos(L.direction)*L.speed*P,0,Math.sin(L.direction)*L.speed*P)),L.scale.set(L.size,L.size,L.size),L.size<=.001&&(h.current=h.current.filter(F=>F!=L))}),S.render(d,p)}return S.setAnimationLoop(x),()=>{window.removeEventListener("resize",M),S.setAnimationLoop(null),S.dispose()}},[]),gn.jsx(gn.Fragment,{children:gn.jsx("canvas",{ref:i})})}),e1=()=>{const[o,e]=Ye.useState({delay:1200,random:350,num_cards:50});function i(r,l){e({...o,[r]:l})}return[o,i]},Wo=[Ls.TACO,Ls.CAT,Ls.GOAT,Ls.CHEESE,Ls.PIZZA];function n1(){let[o]=e1(),e=Ye.useRef(null),[i,r]=Ye.useState(null),[l,c]=Ye.useState(null),[h,d]=Ye.useState(0),m=Ye.useRef(0),p=Ye.useRef(!1),_=Ye.useRef(null),g=Ye.useRef([]),S=Ye.useRef(0),[E,A]=Ye.useState(0),[C,M]=Ye.useState(!0),[x,P]=Ye.useState(!1),[N,L]=Ye.useState(!1),[F,I]=Ye.useState(0);const z=J=>{var ct,ut;let $=performance.now();J.key===" "&&(p.current?(g.current.push($-m.current),(ct=e.current)==null||ct.reaction(!0),p.current=!1,_.current=j()):i!=null&&(S.current+=1,(ut=e.current)==null||ut.reaction(!1)))},j=()=>setTimeout(X,o.delay+(Math.random()*2-1)*o.random),R=()=>{_.current!=null&&clearTimeout(_.current),d(o.num_cards),r(null),c(null),g.current=[],S.current=0,_.current=j()},w=()=>{_.current!=null&&clearTimeout(_.current),r(null),P(!0),console.log("END");let J=0;for(var $=0;$<g.current.length;$++)J+=g.current[$];g.current.length==0?A(-1):A(Math.floor(J/g.current.length))},X=()=>{var $;let J=($=e.current)==null?void 0:$.add_card();J!=null?(c(J),r(ct=>ct==null?Wo[0]:Wo[(Wo.indexOf(ct)+1)%Wo.length]),d(ct=>ct-1),_.current=j()):_.current=setTimeout(X,500)};return Ye.useEffect(()=>(document.addEventListener("keydown",z),wd.onProgress=(J,$,ct)=>{I($/ct*100)},wd.onLoad=()=>{setTimeout(()=>{L(!0)},1e3)},()=>{document.removeEventListener("keydown",z),_.current!=null&&clearTimeout(_.current)}),[]),Ye.useEffect(()=>{l!=null&&(l==i?(_.current!=null&&clearTimeout(_.current),setTimeout(()=>{p.current=!0,m.current=performance.now()},435)):h<=0&&w())},[l,i,h]),gn.jsxs(gn.Fragment,{children:[gn.jsx(t1,{ref:e}),gn.jsx("div",{id:"card-indicator",children:Wo.map(J=>gn.jsx("div",{className:"card-name "+(J==i?"active":""),children:J.toUpperCase()},J))}),gn.jsx("div",{id:"cards-left",children:h>=0?h:"0"}),gn.jsx("div",{id:"start-button",className:C?"active":"",onClick:()=>{M(!1),R()},children:"START"}),gn.jsxs("div",{id:"stats-container",className:x?"active":"",children:[gn.jsxs("div",{children:["Your reaction time averaged ",gn.jsxs("span",{id:"reaction-time",children:[E,"ms"]}),", nice job!"]}),gn.jsx("div",{id:"try-again",onClick:()=>{P(!1),R()},children:"TRY AGAIN"})]}),gn.jsx("div",{id:"loading-window",className:N?"done":"",children:gn.jsx("div",{id:"loading-bar",children:gn.jsx("div",{id:"loading-progress",style:{width:F+"%"}})})})]})}wS.createRoot(document.getElementById("root")).render(gn.jsx(Ye.StrictMode,{children:gn.jsx(n1,{})}));
