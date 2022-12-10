function wE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function EE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),_E=Symbol.for("react.portal"),SE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),RE=Symbol.for("react.forward_ref"),NE=Symbol.for("react.suspense"),AE=Symbol.for("react.memo"),DE=Symbol.for("react.lazy"),Hf=Symbol.iterator;function xE(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var Ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dg=Object.assign,xg={};function vi(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||Ag}vi.prototype.isReactComponent={};vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pg(){}Pg.prototype=vi.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||Ag}var Oh=Ph.prototype=new Pg;Oh.constructor=Ph;Dg(Oh,vi.prototype);Oh.isPureReactComponent=!0;var Wf=Array.isArray,Og=Object.prototype.hasOwnProperty,Lh={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Og.call(e,r)&&!Lg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gs,type:t,key:s,ref:o,props:i,_owner:Lh.current}}function PE(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function OE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qf=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OE(""+t.key):e.toString(36)}function Jo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gs:case _E:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hu(o,0):r,Wf(i)?(n="",t!=null&&(n=t.replace(qf,"$&/")+"/"),Jo(i,e,n,"",function(u){return u})):i!=null&&(Mh(i)&&(i=PE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hu(s,a);o+=Jo(s,e,n,l,i)}else if(l=xE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hu(s,a++),o+=Jo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return Jo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},Zo={transition:null},ME={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:Lh};W.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=vi;W.Fragment=SE;W.Profiler=TE;W.PureComponent=Ph;W.StrictMode=IE;W.Suspense=NE;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Og.call(e,l)&&!Lg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:CE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kE,_context:t},t.Consumer=t};W.createElement=Mg;W.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:RE,render:t}};W.isValidElement=Mh;W.lazy=function(t){return{$$typeof:DE,_payload:{_status:-1,_result:t},_init:LE}};W.memo=function(t,e){return{$$typeof:AE,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Xe.current.useCallback(t,e)};W.useContext=function(t){return Xe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Xe.current.useEffect(t,e)};W.useId=function(){return Xe.current.useId()};W.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Xe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};W.useRef=function(t){return Xe.current.useRef(t)};W.useState=function(t){return Xe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Xe.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(L);const $E=EE(L.exports),ic=wE({__proto__:null,default:$E},[L.exports]);var sc={},$g={exports:{}},ct={},bg={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var B=A.length;A.push(V);e:for(;0<B;){var ce=B-1>>>1,Se=A[ce];if(0<i(Se,V))A[ce]=V,A[B]=Se,B=ce;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var ce=0,Se=A.length,To=Se>>>1;ce<To;){var Qn=2*(ce+1)-1,cu=A[Qn],Xn=Qn+1,ko=A[Xn];if(0>i(cu,B))Xn<Se&&0>i(ko,cu)?(A[ce]=ko,A[Xn]=B,ce=Xn):(A[ce]=cu,A[Qn]=B,ce=Qn);else if(Xn<Se&&0>i(ko,B))A[ce]=ko,A[Xn]=B,ce=Xn;else break e}}return V}function i(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(A){if(v=!1,g(A),!y)if(n(l)!==null)y=!0,lu(k);else{var V=n(u);V!==null&&uu(w,V.startTime-A)}}function k(A,V){y=!1,v&&(v=!1,p(P),P=-1),m=!0;var B=d;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||A&&!Et());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var Se=ce(h.expirationTime<=V);V=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var To=!0;else{var Qn=n(u);Qn!==null&&uu(w,Qn.startTime-V),To=!1}return To}finally{h=null,d=B,m=!1}}var C=!1,N=null,P=-1,Z=5,z=-1;function Et(){return!(t.unstable_now()-z<Z)}function xi(){if(N!==null){var A=t.unstable_now();z=A;var V=!0;try{V=N(!0,A)}finally{V?Pi():(C=!1,N=null)}}else C=!1}var Pi;if(typeof f=="function")Pi=function(){f(xi)};else if(typeof MessageChannel<"u"){var zf=new MessageChannel,vE=zf.port2;zf.port1.onmessage=xi,Pi=function(){vE.postMessage(null)}}else Pi=function(){T(xi,0)};function lu(A){N=A,C||(C=!0,Pi())}function uu(A,V){P=T(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,lu(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return A()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=d;d=A;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(A,V,B){var ce=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ce+B:ce):B=ce,A){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=B+Se,A={id:c++,callback:V,priorityLevel:A,startTime:B,expirationTime:Se,sortIndex:-1},B>ce?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(v?(p(P),P=-1):v=!0,uu(w,B-ce))):(A.sortIndex=Se,e(l,A),y||m||(y=!0,lu(k))),A},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(A){var V=d;return function(){var B=d;d=V;try{return A.apply(this,arguments)}finally{d=B}}}})(Ug);(function(t){t.exports=Ug})(bg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=L.exports,lt=bg.exports;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,ps={};function Tr(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(ps[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kf={},Gf={};function UE(t){return oc.call(Gf,t)?!0:oc.call(Kf,t)?!1:bE.test(t)?Gf[t]=!0:(Kf[t]=!0,!1)}function FE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VE(t,e,n,r){if(e===null||typeof e>"u"||FE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,bh);Oe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,bh);Oe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,bh);Oe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VE(e,n,i,r)&&(n=null),r||i===null?UE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hn=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,du;function Hi(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var fu=!1;function pu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hi(t):""}function BE(t){switch(t.tag){case 5:return Hi(t.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Or:return"Portal";case ac:return"Profiler";case Fh:return"StrictMode";case lc:return"Suspense";case uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:cc(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return cc(t(e))}catch{}}return null}function jE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zE(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=zE(t))}function Wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Xf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function dc(t,e){qg(t,e);var n=bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wi=Array.isArray;function Kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Wi(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bn(n)}}function Kg(t,e){var n=bn(e.value),r=bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ao,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HE=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(t){HE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ji[e]=Ji[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ji.hasOwnProperty(t)&&Ji[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(t,e){if(e){if(WE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wc=null,Gr=null,Qr=null;function ep(t){if(t=Ys(t)){if(typeof wc!="function")throw Error(_(280));var e=t.stateNode;e&&(e=pl(e),wc(t.stateNode,t.type,e))}}function Jg(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function Zg(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function ey(t,e){return t(e)}function ty(){}var mu=!1;function ny(t,e,n){if(mu)return t(e,n);mu=!0;try{return ey(t,e,n)}finally{mu=!1,(Gr!==null||Qr!==null)&&(ty(),Zg())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Ec=!1;if(tn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Ec=!1}function qE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Zi=!1,wa=null,Ea=!1,_c=null,KE={onError:function(t){Zi=!0,wa=t}};function GE(t,e,n,r,i,s,o,a,l){Zi=!1,wa=null,qE.apply(KE,arguments)}function QE(t,e,n,r,i,s,o,a,l){if(GE.apply(this,arguments),Zi){if(Zi){var u=wa;Zi=!1,wa=null}else throw Error(_(198));Ea||(Ea=!0,_c=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(kr(t)!==t)throw Error(_(188))}function XE(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tp(i),t;if(s===r)return tp(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function iy(t){return t=XE(t),t!==null?sy(t):null}function sy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sy(t);if(e!==null)return e;t=t.sibling}return null}var oy=lt.unstable_scheduleCallback,np=lt.unstable_cancelCallback,YE=lt.unstable_shouldYield,JE=lt.unstable_requestPaint,he=lt.unstable_now,ZE=lt.unstable_getCurrentPriorityLevel,zh=lt.unstable_ImmediatePriority,ay=lt.unstable_UserBlockingPriority,_a=lt.unstable_NormalPriority,e_=lt.unstable_LowPriority,ly=lt.unstable_IdlePriority,cl=null,Lt=null;function t_(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:i_,n_=Math.log,r_=Math.LN2;function i_(t){return t>>>=0,t===0?32:31-(n_(t)/r_|0)|0}var Do=64,xo=4194304;function qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qi(a):(s&=o,s!==0&&(r=qi(s)))}else o=n&~i,o!==0?r=qi(o):s!==0&&(r=qi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function s_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=s_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uy(){var t=Do;return Do<<=1,(Do&4194240)===0&&(Do=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function a_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function cy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hy,Wh,dy,fy,py,Ic=!1,Po=[],kn=null,Cn=null,Rn=null,ys=new Map,vs=new Map,gn=[],l_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Mi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&Wh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function u_(t,e,n,r,i){switch(e){case"focusin":return kn=Mi(kn,t,e,n,r,i),!0;case"dragenter":return Cn=Mi(Cn,t,e,n,r,i),!0;case"mouseover":return Rn=Mi(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ys.set(s,Mi(ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Mi(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function my(t){var e=er(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=ry(n),e!==null){t.blockedOn=e,py(t.priority,function(){dy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vc=r,n.target.dispatchEvent(r),vc=null}else return e=Ys(n),e!==null&&Wh(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){ea(t)&&n.delete(e)}function c_(){Ic=!1,kn!==null&&ea(kn)&&(kn=null),Cn!==null&&ea(Cn)&&(Cn=null),Rn!==null&&ea(Rn)&&(Rn=null),ys.forEach(ip),vs.forEach(ip)}function $i(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,c_)))}function ws(t){function e(i){return $i(i,t)}if(0<Po.length){$i(Po[0],t);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kn!==null&&$i(kn,t),Cn!==null&&$i(Cn,t),Rn!==null&&$i(Rn,t),ys.forEach(e),vs.forEach(e),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)my(n),n.blockedOn===null&&gn.shift()}var Xr=hn.ReactCurrentBatchConfig,Ia=!0;function h_(t,e,n,r){var i=X,s=Xr.transition;Xr.transition=null;try{X=1,qh(t,e,n,r)}finally{X=i,Xr.transition=s}}function d_(t,e,n,r){var i=X,s=Xr.transition;Xr.transition=null;try{X=4,qh(t,e,n,r)}finally{X=i,Xr.transition=s}}function qh(t,e,n,r){if(Ia){var i=Tc(t,e,n,r);if(i===null)Cu(t,e,r,Ta,n),rp(t,r);else if(u_(i,t,e,n,r))r.stopPropagation();else if(rp(t,r),e&4&&-1<l_.indexOf(t)){for(;i!==null;){var s=Ys(i);if(s!==null&&hy(s),s=Tc(t,e,n,r),s===null&&Cu(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cu(t,e,r,null,n)}}var Ta=null;function Tc(t,e,n,r){if(Ta=null,t=jh(r),t=er(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function gy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case zh:return 1;case ay:return 4;case _a:case e_:return 16;case ly:return 536870912;default:return 16}default:return 16}}var Sn=null,Kh=null,ta=null;function yy(){if(ta)return ta;var t,e=Kh,n=e.length,r,i="value"in Sn?Sn.value:Sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ta=i.slice(t,1<r?1-r:void 0)}function na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function sp(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:sp,this.isPropagationStopped=sp,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gh=ht(wi),Xs=ae({},wi,{view:0,detail:0}),f_=ht(Xs),yu,vu,bi,hl=ae({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(yu=t.screenX-bi.screenX,vu=t.screenY-bi.screenY):vu=yu=0,bi=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),op=ht(hl),p_=ae({},hl,{dataTransfer:0}),m_=ht(p_),g_=ae({},Xs,{relatedTarget:0}),wu=ht(g_),y_=ae({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),v_=ht(y_),w_=ae({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E_=ht(w_),__=ae({},wi,{data:0}),ap=ht(__),S_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T_[t])?!!e[t]:!1}function Qh(){return k_}var C_=ae({},Xs,{key:function(t){if(t.key){var e=S_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=ht(C_),N_=ae({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=ht(N_),A_=ae({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),D_=ht(A_),x_=ae({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=ht(x_),O_=ae({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=ht(O_),M_=[9,13,27,32],Xh=tn&&"CompositionEvent"in window,es=null;tn&&"documentMode"in document&&(es=document.documentMode);var $_=tn&&"TextEvent"in window&&!es,vy=tn&&(!Xh||es&&8<es&&11>=es),up=String.fromCharCode(32),cp=!1;function wy(t,e){switch(t){case"keyup":return M_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ey(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function b_(t,e){switch(t){case"compositionend":return Ey(e);case"keypress":return e.which!==32?null:(cp=!0,up);case"textInput":return t=e.data,t===up&&cp?null:t;default:return null}}function U_(t,e){if(Mr)return t==="compositionend"||!Xh&&wy(t,e)?(t=yy(),ta=Kh=Sn=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vy&&e.locale!=="ko"?null:e.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F_[t.type]:e==="textarea"}function _y(t,e,n,r){Jg(r),e=ka(e,"onChange"),0<e.length&&(n=new Gh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ts=null,Es=null;function V_(t){Py(t,0)}function dl(t){var e=Ur(t);if(Wg(e))return t}function B_(t,e){if(t==="change")return e}var Sy=!1;if(tn){var Eu;if(tn){var _u="oninput"in document;if(!_u){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),_u=typeof dp.oninput=="function"}Eu=_u}else Eu=!1;Sy=Eu&&(!document.documentMode||9<document.documentMode)}function fp(){ts&&(ts.detachEvent("onpropertychange",Iy),Es=ts=null)}function Iy(t){if(t.propertyName==="value"&&dl(Es)){var e=[];_y(e,Es,t,jh(t)),ny(V_,e)}}function j_(t,e,n){t==="focusin"?(fp(),ts=e,Es=n,ts.attachEvent("onpropertychange",Iy)):t==="focusout"&&fp()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Es)}function H_(t,e){if(t==="click")return dl(e)}function W_(t,e){if(t==="input"||t==="change")return dl(e)}function q_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:q_;function _s(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oc.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function Ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ky(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K_(t){var e=ky(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ty(n.ownerDocument.documentElement,n)){if(r!==null&&Yh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mp(n,s);var o=mp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G_=tn&&"documentMode"in document&&11>=document.documentMode,$r=null,kc=null,ns=null,Cc=!1;function gp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||$r==null||$r!==va(r)||(r=$r,"selectionStart"in r&&Yh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ns&&_s(ns,r)||(ns=r,r=ka(kc,"onSelect"),0<r.length&&(e=new Gh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$r)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Su={},Cy={};tn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function fl(t){if(Su[t])return Su[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return Su[t]=e[n];return t}var Ry=fl("animationend"),Ny=fl("animationiteration"),Ay=fl("animationstart"),Dy=fl("transitionend"),xy=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){xy.set(t,e),Tr(e,[t])}for(var Iu=0;Iu<yp.length;Iu++){var Tu=yp[Iu],Q_=Tu.toLowerCase(),X_=Tu[0].toUpperCase()+Tu.slice(1);Hn(Q_,"on"+X_)}Hn(Ry,"onAnimationEnd");Hn(Ny,"onAnimationIteration");Hn(Ay,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Dy,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));function vp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QE(r,e,void 0,t),t.currentTarget=null}function Py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vp(i,a,u),s=l}}}if(Ea)throw t=_c,Ea=!1,_c=null,t}function ee(t,e){var n=e[xc];n===void 0&&(n=e[xc]=new Set);var r=t+"__bubble";n.has(r)||(Oy(e,t,2,!1),n.add(r))}function ku(t,e,n){var r=0;e&&(r|=4),Oy(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ss(t){if(!t[Mo]){t[Mo]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(Y_.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,ku("selectionchange",!1,e))}}function Oy(t,e,n,r){switch(gy(e)){case 1:var i=h_;break;case 4:i=d_;break;default:i=qh}n=i.bind(null,e,n,t),i=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ny(function(){var u=s,c=jh(n),h=[];e:{var d=xy.get(t);if(d!==void 0){var m=Gh,y=t;switch(t){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":m=R_;break;case"focusin":y="focus",m=wu;break;case"focusout":y="blur",m=wu;break;case"beforeblur":case"afterblur":m=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=m_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=D_;break;case Ry:case Ny:case Ay:m=v_;break;case Dy:m=P_;break;case"scroll":m=f_;break;case"wheel":m=L_;break;case"copy":case"cut":case"paste":m=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lp}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=gs(f,p),w!=null&&v.push(Is(f,w,g)))),T)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==vc&&(y=n.relatedTarget||n.fromElement)&&(er(y)||y[nn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?er(y):null,y!==null&&(T=kr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=op,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=lp,w="onPointerLeave",p="onPointerEnter",f="pointer"),T=m==null?d:Ur(m),g=y==null?d:Ur(y),d=new v(w,f+"leave",m,n,c),d.target=T,d.relatedTarget=g,w=null,er(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=T,w=v),T=w,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=xr(g))f++;for(g=0,w=p;w;w=xr(w))g++;for(;0<f-g;)v=xr(v),f--;for(;0<g-f;)p=xr(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=xr(v),p=xr(p)}v=null}else v=null;m!==null&&wp(h,d,m,v,!1),y!==null&&T!==null&&wp(h,T,y,v,!0)}}e:{if(d=u?Ur(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=B_;else if(hp(d))if(Sy)k=W_;else{k=z_;var C=j_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=H_);if(k&&(k=k(t,u))){_y(h,k,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&fc(d,"number",d.value)}switch(C=u?Ur(u):window,t){case"focusin":(hp(C)||C.contentEditable==="true")&&($r=C,kc=u,ns=null);break;case"focusout":ns=kc=$r=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,gp(h,n,c);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":gp(h,n,c)}var N;if(Xh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Mr?wy(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vy&&n.locale!=="ko"&&(Mr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Mr&&(N=yy()):(Sn=c,Kh="value"in Sn?Sn.value:Sn.textContent,Mr=!0)),C=ka(u,P),0<C.length&&(P=new ap(P,t,null,n,c),h.push({event:P,listeners:C}),N?P.data=N:(N=Ey(n),N!==null&&(P.data=N)))),(N=$_?b_(t,n):U_(t,n))&&(u=ka(u,"onBeforeInput"),0<u.length&&(c=new ap("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Py(h,e)})}function Is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Is(t,s,i)),s=gs(t,e),s!=null&&r.push(Is(t,s,i))),t=t.return}return r}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gs(n,s),l!=null&&o.unshift(Is(n,l,a))):i||(l=gs(n,s),l!=null&&o.push(Is(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J_=/\r\n?/g,Z_=/\u0000|\uFFFD/g;function Ep(t){return(typeof t=="string"?t:""+t).replace(J_,`
`).replace(Z_,"")}function $o(t,e,n){if(e=Ep(e),Ep(t)!==e&&n)throw Error(_(425))}function Ca(){}var Rc=null,Nc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(t){return _p.resolve(null).then(t).catch(nS)}:Dc;function nS(t){setTimeout(function(){throw t})}function Ru(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),xt="__reactFiber$"+Ei,Ts="__reactProps$"+Ei,nn="__reactContainer$"+Ei,xc="__reactEvents$"+Ei,rS="__reactListeners$"+Ei,iS="__reactHandles$"+Ei;function er(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[xt])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[xt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function pl(t){return t[Ts]||null}var Pc=[],Fr=-1;function Wn(t){return{current:t}}function ne(t){0>Fr||(t.current=Pc[Fr],Pc[Fr]=null,Fr--)}function Y(t,e){Fr++,Pc[Fr]=t.current,t.current=e}var Un={},je=Wn(Un),et=Wn(!1),fr=Un;function ii(t,e){var n=t.type.contextTypes;if(!n)return Un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tt(t){return t=t.childContextTypes,t!=null}function Ra(){ne(et),ne(je)}function Ip(t,e,n){if(je.current!==Un)throw Error(_(168));Y(je,e),Y(et,n)}function Ly(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,jE(t)||"Unknown",i));return ae({},n,r)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Un,fr=je.current,Y(je,t),Y(et,et.current),!0}function Tp(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=Ly(t,e,fr),r.__reactInternalMemoizedMergedChildContext=t,ne(et),ne(je),Y(je,t)):ne(et),Y(et,n)}var Wt=null,ml=!1,Nu=!1;function My(t){Wt===null?Wt=[t]:Wt.push(t)}function sS(t){ml=!0,My(t)}function qn(){if(!Nu&&Wt!==null){Nu=!0;var t=0,e=X;try{var n=Wt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,ml=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),oy(zh,qn),i}finally{X=e,Nu=!1}}return null}var Vr=[],Br=0,Aa=null,Da=0,dt=[],ft=0,pr=null,Kt=1,Gt="";function Yn(t,e){Vr[Br++]=Da,Vr[Br++]=Aa,Aa=t,Da=e}function $y(t,e,n){dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=pr,pr=t;var r=Kt;t=Gt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Ct(e)+i|n<<i|r,Gt=s+t}else Kt=1<<s|n<<i|r,Gt=t}function Jh(t){t.return!==null&&(Yn(t,1),$y(t,1,0))}function Zh(t){for(;t===Aa;)Aa=Vr[--Br],Vr[Br]=null,Da=Vr[--Br],Vr[Br]=null;for(;t===pr;)pr=dt[--ft],dt[ft]=null,Gt=dt[--ft],dt[ft]=null,Kt=dt[--ft],dt[ft]=null}var at=null,st=null,re=!1,kt=null;function by(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,st=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:Kt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,st=null,!0):!1;default:return!1}}function Oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(re){var e=st;if(e){var n=e;if(!kp(t,e)){if(Oc(t))throw Error(_(418));e=Nn(n.nextSibling);var r=at;e&&kp(t,e)?by(r,n):(t.flags=t.flags&-4097|2,re=!1,at=t)}}else{if(Oc(t))throw Error(_(418));t.flags=t.flags&-4097|2,re=!1,at=t}}}function Cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function bo(t){if(t!==at)return!1;if(!re)return Cp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=st)){if(Oc(t))throw Uy(),Error(_(418));for(;e;)by(t,e),e=Nn(e.nextSibling)}if(Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=at?Nn(t.stateNode.nextSibling):null;return!0}function Uy(){for(var t=st;t;)t=Nn(t.nextSibling)}function si(){st=at=null,re=!1}function ed(t){kt===null?kt=[t]:kt.push(t)}var oS=hn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xa=Wn(null),Pa=null,jr=null,td=null;function nd(){td=jr=Pa=null}function rd(t){var e=xa.current;ne(xa),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){Pa=t,td=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ze=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(td!==t)if(t={context:t,memoizedValue:e,next:null},jr===null){if(Pa===null)throw Error(_(308));jr=t,Pa.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return e}var tr=null;function id(t){tr===null?tr=[t]:tr.push(t)}function Fy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,id(e)):(n.next=i.next,i.next=n),e.interleaved=n,rn(t,r)}function rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rn(t,n)}return i=r.interleaved,i===null?(e.next=e,id(r)):(e.next=i.next,i.next=e),r.interleaved=e,rn(t,n)}function ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}function Rp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oa(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ae({},h,d);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=h}}function Np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var By=new Fg.Component().refs;function $c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=xn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Rt(e,t,i,r),ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=xn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Rt(e,t,i,r),ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=xn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=An(t,i,r),e!==null&&(Rt(e,t,r,n),ra(e,t,r))}};function Ap(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_s(n,r)||!_s(i,s):!0}function jy(t,e,n){var r=!1,i=Un,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=tt(e)?fr:je.current,r=e.contextTypes,s=(r=r!=null)?ii(t,i):Un),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=By,sd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=tt(e)?fr:je.current,i.context=ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gl.enqueueReplaceState(i,i.state,null),Oa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===By&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function zy(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Pn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,w){return f===null||f.tag!==6?(f=Mu(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,w){var k=g.type;return k===Lr?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&xp(k)===f.type)?(w=i(f,g.props),w.ref=Ui(p,f,g),w.return=p,w):(w=ua(g.type,g.key,g.props,null,p.mode,w),w.ref=Ui(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=$u(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,k){return f===null||f.tag!==7?(f=lr(g,p.mode,w,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Mu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ro:return g=ua(f.type,f.key,f.props,null,p.mode,g),g.ref=Ui(p,null,f),g.return=p,g;case Or:return f=$u(f,p.mode,g),f.return=p,f;case pn:var w=f._init;return h(p,w(f._payload),g)}if(Wi(f)||Oi(f))return f=lr(f,p.mode,g,null),f.return=p,f;Uo(p,f)}return null}function d(p,f,g,w){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return g.key===k?l(p,f,g,w):null;case Or:return g.key===k?u(p,f,g,w):null;case pn:return k=g._init,d(p,f,k(g._payload),w)}if(Wi(g)||Oi(g))return k!==null?null:c(p,f,g,w,null);Uo(p,g)}return null}function m(p,f,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return p=p.get(w.key===null?g:w.key)||null,l(f,p,w,k);case Or:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,k);case pn:var C=w._init;return m(p,f,g,C(w._payload),k)}if(Wi(w)||Oi(w))return p=p.get(g)||null,c(f,p,w,k,null);Uo(f,w)}return null}function y(p,f,g,w){for(var k=null,C=null,N=f,P=f=0,Z=null;N!==null&&P<g.length;P++){N.index>P?(Z=N,N=null):Z=N.sibling;var z=d(p,N,g[P],w);if(z===null){N===null&&(N=Z);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,P),C===null?k=z:C.sibling=z,C=z,N=Z}if(P===g.length)return n(p,N),re&&Yn(p,P),k;if(N===null){for(;P<g.length;P++)N=h(p,g[P],w),N!==null&&(f=s(N,f,P),C===null?k=N:C.sibling=N,C=N);return re&&Yn(p,P),k}for(N=r(p,N);P<g.length;P++)Z=m(N,p,P,g[P],w),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?P:Z.key),f=s(Z,f,P),C===null?k=Z:C.sibling=Z,C=Z);return t&&N.forEach(function(Et){return e(p,Et)}),re&&Yn(p,P),k}function v(p,f,g,w){var k=Oi(g);if(typeof k!="function")throw Error(_(150));if(g=k.call(g),g==null)throw Error(_(151));for(var C=k=null,N=f,P=f=0,Z=null,z=g.next();N!==null&&!z.done;P++,z=g.next()){N.index>P?(Z=N,N=null):Z=N.sibling;var Et=d(p,N,z.value,w);if(Et===null){N===null&&(N=Z);break}t&&N&&Et.alternate===null&&e(p,N),f=s(Et,f,P),C===null?k=Et:C.sibling=Et,C=Et,N=Z}if(z.done)return n(p,N),re&&Yn(p,P),k;if(N===null){for(;!z.done;P++,z=g.next())z=h(p,z.value,w),z!==null&&(f=s(z,f,P),C===null?k=z:C.sibling=z,C=z);return re&&Yn(p,P),k}for(N=r(p,N);!z.done;P++,z=g.next())z=m(N,p,P,z.value,w),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?P:z.key),f=s(z,f,P),C===null?k=z:C.sibling=z,C=z);return t&&N.forEach(function(xi){return e(p,xi)}),re&&Yn(p,P),k}function T(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Lr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:e:{for(var k=g.key,C=f;C!==null;){if(C.key===k){if(k=g.type,k===Lr){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&xp(k)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=Ui(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===Lr?(f=lr(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=ua(g.type,g.key,g.props,null,p.mode,w),w.ref=Ui(p,f,g),w.return=p,p=w)}return o(p);case Or:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=$u(g,p.mode,w),f.return=p,p=f}return o(p);case pn:return C=g._init,T(p,f,C(g._payload),w)}if(Wi(g))return y(p,f,g,w);if(Oi(g))return v(p,f,g,w);Uo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Mu(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return T}var oi=zy(!0),Hy=zy(!1),Js={},Mt=Wn(Js),ks=Wn(Js),Cs=Wn(Js);function nr(t){if(t===Js)throw Error(_(174));return t}function od(t,e){switch(Y(Cs,e),Y(ks,t),Y(Mt,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mc(e,t)}ne(Mt),Y(Mt,e)}function ai(){ne(Mt),ne(ks),ne(Cs)}function Wy(t){nr(Cs.current);var e=nr(Mt.current),n=mc(e,t.type);e!==n&&(Y(ks,t),Y(Mt,n))}function ad(t){ks.current===t&&(ne(Mt),ne(ks))}var se=Wn(0);function La(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function ld(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var ia=hn.ReactCurrentDispatcher,Du=hn.ReactCurrentBatchConfig,mr=0,oe=null,ge=null,Te=null,Ma=!1,rs=!1,Rs=0,aS=0;function Me(){throw Error(_(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function cd(t,e,n,r,i,s){if(mr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ia.current=t===null||t.memoizedState===null?hS:dS,t=n(r,i),rs){s=0;do{if(rs=!1,Rs=0,25<=s)throw Error(_(301));s+=1,Te=ge=null,e.updateQueue=null,ia.current=fS,t=n(r,i)}while(rs)}if(ia.current=$a,e=ge!==null&&ge.next!==null,mr=0,Te=ge=oe=null,Ma=!1,e)throw Error(_(300));return t}function hd(){var t=Rs!==0;return Rs=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?oe.memoizedState=Te=t:Te=Te.next=t,Te}function vt(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Te===null?oe.memoizedState:Te.next;if(e!==null)Te=e,ge=t;else{if(t===null)throw Error(_(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Te===null?oe.memoizedState=Te=t:Te=Te.next=t}return Te}function Ns(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=vt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=vt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qy(){}function Ky(t,e){var n=oe,r=vt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,dd(Xy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,As(9,Qy.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(_(349));(mr&30)!==0||Gy(n,e,i)}return i}function Gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qy(t,e,n,r){e.value=n,e.getSnapshot=r,Yy(e)&&Jy(t)}function Xy(t,e,n){return n(function(){Yy(e)&&Jy(t)})}function Yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function Jy(t){var e=rn(t,1);e!==null&&Rt(e,t,1,-1)}function Pp(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},e.queue=t,t=t.dispatch=cS.bind(null,oe,t),[e.memoizedState,t]}function As(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zy(){return vt().memoizedState}function sa(t,e,n,r){var i=Dt();oe.flags|=t,i.memoizedState=As(1|e,n,void 0,r===void 0?null:r)}function yl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&ud(r,o.deps)){i.memoizedState=As(e,n,s,r);return}}oe.flags|=t,i.memoizedState=As(1|e,n,s,r)}function Op(t,e){return sa(8390656,8,t,e)}function dd(t,e){return yl(2048,8,t,e)}function ev(t,e){return yl(4,2,t,e)}function tv(t,e){return yl(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){return n=n!=null?n.concat([t]):null,yl(4,4,nv.bind(null,e,t),n)}function fd(){}function iv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ud(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ud(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return(mr&21)===0?(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n):(Nt(n,e)||(n=uy(),oe.lanes|=n,gr|=n,t.baseState=!0),e)}function lS(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Du.transition;Du.transition={};try{t(!1),e()}finally{X=n,Du.transition=r}}function av(){return vt().memoizedState}function uS(t,e,n){var r=xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))uv(e,n);else if(n=Fy(t,e,n,r),n!==null){var i=Qe();Rt(n,t,r,i),cv(n,e,r)}}function cS(t,e,n){var r=xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))uv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(i.next=i,id(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Fy(t,e,i,r),n!==null&&(i=Qe(),Rt(n,t,r,i),cv(n,e,r))}}function lv(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function uv(t,e){rs=Ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hh(t,n)}}var $a={readContext:yt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},hS={readContext:yt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sa(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sa(4194308,4,t,e)},useInsertionEffect:function(t,e){return sa(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:fd,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=lS.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Dt();if(re){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),ke===null)throw Error(_(349));(mr&30)!==0||Gy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Op(Xy.bind(null,r,s,t),[t]),r.flags|=2048,As(9,Qy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=ke.identifierPrefix;if(re){var n=Gt,r=Kt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:yt,useCallback:iv,useContext:yt,useEffect:dd,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:xu,useRef:Zy,useState:function(){return xu(Ns)},useDebugValue:fd,useDeferredValue:function(t){var e=vt();return ov(e,ge.memoizedState,t)},useTransition:function(){var t=xu(Ns)[0],e=vt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:av,unstable_isNewReconciler:!1},fS={readContext:yt,useCallback:iv,useContext:yt,useEffect:dd,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Pu,useRef:Zy,useState:function(){return Pu(Ns)},useDebugValue:fd,useDeferredValue:function(t){var e=vt();return ge===null?e.memoizedState=t:ov(e,ge.memoizedState,t)},useTransition:function(){var t=Pu(Ns)[0],e=vt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:av,unstable_isNewReconciler:!1};function li(t,e){try{var n="",r=e;do n+=BE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function hv(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ua||(Ua=!0,Gc=r),Uc(t,e)},n}function dv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NS.bind(null,t,e,n),e.then(t,t))}function Mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,An(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var mS=hn.ReactCurrentOwner,Ze=!1;function qe(t,e,n,r){e.child=t===null?Hy(e,null,n,r):oi(e,t.child,n,r)}function bp(t,e,n,r,i){n=n.render;var s=e.ref;return Yr(e,i),r=cd(t,e,n,r,s,i),n=hd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(re&&n&&Jh(e),e.flags|=1,qe(t,e,r,i),e.child)}function Up(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fv(t,e,s,r,i)):(t=ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(o,r)&&t.ref===e.ref)return sn(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_s(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ze=!0);else return e.lanes=t.lanes,sn(t,e,i)}return Fc(t,e,n,r,i)}function pv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hr,it),it|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Hr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Hr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Hr,it),it|=r;return qe(t,e,i,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fc(t,e,n,r,i){var s=tt(n)?fr:je.current;return s=ii(e,s),Yr(e,i),n=cd(t,e,n,r,s,i),r=hd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(re&&r&&Jh(e),e.flags|=1,qe(t,e,n,i),e.child)}function Fp(t,e,n,r,i){if(tt(n)){var s=!0;Na(e)}else s=!1;if(Yr(e,i),e.stateNode===null)oa(t,e),jy(e,n,r),bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=tt(n)?fr:je.current,u=ii(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dp(e,o,r,u),mn=!1;var d=e.memoizedState;o.state=d,Oa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||et.current||mn?(typeof c=="function"&&($c(e,n,c,r),l=e.memoizedState),(a=mn||Ap(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:It(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=tt(n)?fr:je.current,l=ii(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Dp(e,o,r,l),mn=!1,d=e.memoizedState,o.state=d,Oa(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||et.current||mn?(typeof m=="function"&&($c(e,n,m,r),y=e.memoizedState),(u=mn||Ap(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vc(t,e,n,r,s,i)}function Vc(t,e,n,r,i,s){mv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tp(e,n,!1),sn(t,e,s);r=e.stateNode,mS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,s),e.child=oi(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&Tp(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),od(t,e.containerInfo)}function Vp(t,e,n,r,i){return si(),ed(i),e.flags|=256,qe(t,e,n,r),e.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(se,i&1),t===null)return Lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,r,0,null),t=lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jc(n),e.memoizedState=Bc,t):pd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pn(a,s):(s=lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bc,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pd(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fo(t,e,n,r){return r!==null&&ed(r),oi(e,t.child,null,n),t=pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ou(Error(_(422))),Fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=El({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&oi(e,t.child,null,o),e.child.memoizedState=jc(o),e.memoizedState=Bc,s);if((e.mode&1)===0)return Fo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=Ou(s,r,void 0),Fo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(t,i),Rt(r,t,i,-1))}return Ed(),r=Ou(Error(_(421))),Fo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Nn(i.nextSibling),at=e,re=!0,kt=null,t!==null&&(dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=pr,Kt=t.id,Gt=t.overflow,pr=e),e=pd(e,r.children),e.flags|=4096,e)}function Bp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mc(t.return,e,n)}function Lu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(se,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&La(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&La(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:gv(e),si();break;case 5:Wy(e);break;case 1:tt(e.type)&&Na(e);break;case 4:od(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(xa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(se,se.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?yv(t,e,n):(Y(se,se.current&1),t=sn(t,e,n),t!==null?t.sibling:null);Y(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return vv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return sn(t,e,n)}var wv,zc,Ev,_v;wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};Ev=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,nr(Mt.current);var s=null;switch(n){case"input":i=hc(t,i),r=hc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=pc(t,i),r=pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ca)}gc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_v=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vS(t,e,n){var r=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return tt(e.type)&&Ra(),$e(e),null;case 3:return r=e.stateNode,ai(),ne(et),ne(je),ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kt!==null&&(Yc(kt),kt=null))),zc(t,e),$e(e),null;case 5:ad(e);var i=nr(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ev(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return $e(e),null}if(t=nr(Mt.current),bo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[Ts]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Ki.length;i++)ee(Ki[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Xf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Jf(r,s),ee("invalid",r)}gc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",""+a]):ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":No(r),Yf(r,s,!0);break;case"textarea":No(r),Zf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[Ts]=r,wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ki.length;i++)ee(Ki[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Xf(t,r),i=hc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Jf(t,r),i=pc(t,r),ee("invalid",t);break;default:i=r}gc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ms(t,l):typeof l=="number"&&ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Uh(t,s,l,o))}switch(n){case"input":No(t),Yf(t,r,!1);break;case"textarea":No(t),Zf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)_v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=nr(Cs.current),nr(Mt.current),bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:$o(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return $e(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&st!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Uy(),si(),e.flags|=98560,s=!1;else if(s=bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[xt]=e}else si(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else kt!==null&&(Yc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(se.current&1)!==0?ye===0&&(ye=3):Ed())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return ai(),zc(t,e),t===null&&Ss(e.stateNode.containerInfo),$e(e),null;case 10:return rd(e.type._context),$e(e),null;case 17:return tt(e.type)&&Ra(),$e(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(ye!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=La(t),o!==null){for(e.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>ui&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=La(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return $e(e),null}else 2*he()-s.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,Y(se,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(it&1073741824)!==0&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function wS(t,e){switch(Zh(e),e.tag){case 1:return tt(e.type)&&Ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),ne(et),ne(je),ld(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return ad(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return ai(),null;case 10:return rd(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Vo=!1,Ue=!1,ES=typeof WeakSet=="function"?WeakSet:Set,R=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Hc(t,e,n){try{n()}catch(r){le(t,e,r)}}var jp=!1;function _S(t,e){if(Rc=Ia,t=ky(),Yh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:t,selectionRange:n},Ia=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:It(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=jp,jp=!1,y}function is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hc(e,n,s)}i=i.next}while(i!==r)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[Ts],delete e[xc],delete e[rS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iv(t){return t.tag===5||t.tag===3||t.tag===4}function zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}var Ne=null,Tt=!1;function dn(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:Ue||zr(n,e);case 6:var r=Ne,i=Tt;Ne=null,dn(t,e,n),Ne=r,Tt=i,Ne!==null&&(Tt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Tt?(t=Ne,n=n.stateNode,t.nodeType===8?Ru(t.parentNode,n):t.nodeType===1&&Ru(t,n),ws(t)):Ru(Ne,n.stateNode));break;case 4:r=Ne,i=Tt,Ne=n.stateNode.containerInfo,Tt=!0,dn(t,e,n),Ne=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Hc(n,e,o),i=i.next}while(i!==r)}dn(t,e,n);break;case 1:if(!Ue&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,dn(t,e,n),Ue=r):dn(t,e,n);break;default:dn(t,e,n)}}function Hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(r){var i=DS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,Tt=!1;break e;case 3:Ne=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ne=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ne===null)throw Error(_(160));Tv(s,o,i),Ne=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kv(e,t),e=e.sibling}function kv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),At(t),r&4){try{is(3,t,t.return),vl(3,t)}catch(v){le(t,t.return,v)}try{is(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:_t(e,t),At(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(_t(e,t),At(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qg(i,s),yc(a,o);var u=yc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Yg(i,h):c==="dangerouslySetInnerHTML"?Qg(i,h):c==="children"?ms(i,h):Uh(i,c,h,u)}switch(a){case"input":dc(i,s);break;case"textarea":Kg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Kr(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ts]=s}catch(v){le(t,t.return,v)}}break;case 6:if(_t(e,t),At(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(_t(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:_t(e,t),At(t);break;case 13:_t(e,t),At(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=he())),r&4&&Hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,_t(e,t),Ue=u):_t(e,t),At(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,m=d.child,d.tag){case 0:case 11:case 14:case 15:is(4,d,d.return);break;case 1:zr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){qp(h);continue}}m!==null?(m.return=d,R=m):qp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xg("display",o))}catch(v){le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_t(e,t),At(t),r&4&&Hp(t);break;case 21:break;default:_t(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=zp(t);Kc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zp(t);qc(t,a,o);break;default:throw Error(_(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SS(t,e,n){R=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=Vo;var u=Ue;if(Vo=o,(Ue=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Kp(i):l!==null?(l.return=o,R=l):Kp(i);for(;s!==null;)R=s,Cv(s),s=s.sibling;R=i,Vo=a,Ue=u}Wp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,R=s):Wp(t)}}function Wp(t){for(;R!==null;){var e=R;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ue||vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Np(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Np(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ws(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ue||e.flags&512&&Wc(e)}catch(d){le(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function qp(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Kp(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Wc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Wc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var IS=Math.ceil,ba=hn.ReactCurrentDispatcher,md=hn.ReactCurrentOwner,gt=hn.ReactCurrentBatchConfig,K=0,ke=null,me=null,xe=0,it=0,Hr=Wn(0),ye=0,Ds=null,gr=0,wl=0,gd=0,ss=null,Je=null,yd=0,ui=1/0,Ht=null,Ua=!1,Gc=null,Dn=null,Bo=!1,In=null,Fa=0,os=0,Qc=null,aa=-1,la=0;function Qe(){return(K&6)!==0?he():aa!==-1?aa:aa=he()}function xn(t){return(t.mode&1)===0?1:(K&2)!==0&&xe!==0?xe&-xe:oS.transition!==null?(la===0&&(la=uy()),la):(t=X,t!==0||(t=window.event,t=t===void 0?16:gy(t.type)),t)}function Rt(t,e,n,r){if(50<os)throw os=0,Qc=null,Error(_(185));Qs(t,n,r),((K&2)===0||t!==ke)&&(t===ke&&((K&2)===0&&(wl|=n),ye===4&&yn(t,xe)),nt(t,r),n===1&&K===0&&(e.mode&1)===0&&(ui=he()+500,ml&&qn()))}function nt(t,e){var n=t.callbackNode;o_(t,e);var r=Sa(t,t===ke?xe:0);if(r===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?sS(Gp.bind(null,t)):My(Gp.bind(null,t)),tS(function(){(K&6)===0&&qn()}),n=null;else{switch(cy(r)){case 1:n=zh;break;case 4:n=ay;break;case 16:n=_a;break;case 536870912:n=ly;break;default:n=_a}n=Lv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if(aa=-1,la=0,(K&6)!==0)throw Error(_(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=Sa(t,t===ke?xe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Va(t,r);else{e=r;var i=K;K|=2;var s=Av();(ke!==t||xe!==e)&&(Ht=null,ui=he()+500,ar(t,e));do try{CS();break}catch(a){Nv(t,a)}while(1);nd(),ba.current=s,K=i,me!==null?e=0:(ke=null,xe=0,e=ye)}if(e!==0){if(e===2&&(i=Sc(t),i!==0&&(r=i,e=Xc(t,i))),e===1)throw n=Ds,ar(t,0),yn(t,r),nt(t,he()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!TS(i)&&(e=Va(t,r),e===2&&(s=Sc(t),s!==0&&(r=s,e=Xc(t,s))),e===1))throw n=Ds,ar(t,0),yn(t,r),nt(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Jn(t,Je,Ht);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=yd+500-he(),10<e)){if(Sa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dc(Jn.bind(null,t,Je,Ht),e);break}Jn(t,Je,Ht);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IS(r/1960))-r,10<r){t.timeoutHandle=Dc(Jn.bind(null,t,Je,Ht),r);break}Jn(t,Je,Ht);break;case 5:Jn(t,Je,Ht);break;default:throw Error(_(329))}}}return nt(t,he()),t.callbackNode===n?Rv.bind(null,t):null}function Xc(t,e){var n=ss;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=Va(t,e),t!==2&&(e=Je,Je=n,e!==null&&Yc(e)),t}function Yc(t){Je===null?Je=t:Je.push.apply(Je,t)}function TS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~gd,e&=~wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function Gp(t){if((K&6)!==0)throw Error(_(327));Jr();var e=Sa(t,0);if((e&1)===0)return nt(t,he()),null;var n=Va(t,e);if(t.tag!==0&&n===2){var r=Sc(t);r!==0&&(e=r,n=Xc(t,r))}if(n===1)throw n=Ds,ar(t,0),yn(t,e),nt(t,he()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jn(t,Je,Ht),nt(t,he()),null}function vd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(ui=he()+500,ml&&qn())}}function yr(t){In!==null&&In.tag===0&&(K&6)===0&&Jr();var e=K;K|=1;var n=gt.transition,r=X;try{if(gt.transition=null,X=1,t)return t()}finally{X=r,gt.transition=n,K=e,(K&6)===0&&qn()}}function wd(){it=Hr.current,ne(Hr)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eS(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Zh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:ai(),ne(et),ne(je),ld();break;case 5:ad(r);break;case 4:ai();break;case 13:ne(se);break;case 19:ne(se);break;case 10:rd(r.type._context);break;case 22:case 23:wd()}n=n.return}if(ke=t,me=t=Pn(t.current,null),xe=it=e,ye=0,Ds=null,gd=wl=gr=0,Je=ss=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tr=null}return t}function Nv(t,e){do{var n=me;try{if(nd(),ia.current=$a,Ma){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ma=!1}if(mr=0,Te=ge=oe=null,rs=!1,Rs=0,md.current=null,n===null||n.return===null){ye=1,Ds=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Mp(o);if(m!==null){m.flags&=-257,$p(m,o,a,s,e),m.mode&1&&Lp(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Lp(s,u,e),Ed();break e}l=Error(_(426))}}else if(re&&a.mode&1){var T=Mp(o);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),$p(T,o,a,s,e),ed(li(l,a));break e}}s=l=li(l,a),ye!==4&&(ye=2),ss===null?ss=[s]:ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=hv(s,l,e);Rp(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Dn===null||!Dn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=dv(s,a,e);Rp(s,w);break e}}s=s.return}while(s!==null)}xv(n)}catch(k){e=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Av(){var t=ba.current;return ba.current=$a,t===null?$a:t}function Ed(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||(gr&268435455)===0&&(wl&268435455)===0||yn(ke,xe)}function Va(t,e){var n=K;K|=2;var r=Av();(ke!==t||xe!==e)&&(Ht=null,ar(t,e));do try{kS();break}catch(i){Nv(t,i)}while(1);if(nd(),K=n,ba.current=r,me!==null)throw Error(_(261));return ke=null,xe=0,ye}function kS(){for(;me!==null;)Dv(me)}function CS(){for(;me!==null&&!YE();)Dv(me)}function Dv(t){var e=Ov(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?xv(t):me=e,md.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=vS(n,e,it),n!==null){me=n;return}}else{if(n=wS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,me=null;return}}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ye===0&&(ye=5)}function Jn(t,e,n){var r=X,i=gt.transition;try{gt.transition=null,X=1,RS(t,e,n,r)}finally{gt.transition=i,X=r}return null}function RS(t,e,n,r){do Jr();while(In!==null);if((K&6)!==0)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(a_(t,s),t===ke&&(me=ke=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Bo||(Bo=!0,Lv(_a,function(){return Jr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var o=X;X=1;var a=K;K|=4,md.current=null,_S(t,n),kv(n,t),K_(Nc),Ia=!!Rc,Nc=Rc=null,t.current=n,SS(n),JE(),K=a,X=o,gt.transition=s}else t.current=n;if(Bo&&(Bo=!1,In=t,Fa=i),s=t.pendingLanes,s===0&&(Dn=null),t_(n.stateNode),nt(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ua)throw Ua=!1,t=Gc,Gc=null,t;return(Fa&1)!==0&&t.tag!==0&&Jr(),s=t.pendingLanes,(s&1)!==0?t===Qc?os++:(os=0,Qc=t):os=0,qn(),null}function Jr(){if(In!==null){var t=cy(Fa),e=gt.transition,n=X;try{if(gt.transition=null,X=16>t?16:t,In===null)var r=!1;else{if(t=In,In=null,Fa=0,(K&6)!==0)throw Error(_(331));var i=K;for(K|=4,R=t.current;R!==null;){var s=R,o=s.child;if((R.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:is(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,m=c.return;if(Sv(c),c===u){R=null;break}if(d!==null){d.return=m,R=d;break}R=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}R=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:is(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(a=R,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(k){le(a,a.return,k)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(K=i,qn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(cl,t)}catch{}r=!0}return r}finally{X=n,gt.transition=e}}return!1}function Qp(t,e,n){e=li(n,e),e=hv(t,e,1),t=An(t,e,1),e=Qe(),t!==null&&(Qs(t,1,e),nt(t,e))}function le(t,e,n){if(t.tag===3)Qp(t,t,n);else for(;e!==null;){if(e.tag===3){Qp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){t=li(n,t),t=dv(e,t,1),e=An(e,t,1),t=Qe(),e!==null&&(Qs(e,1,t),nt(e,t));break}}e=e.return}}function NS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(xe&n)===n&&(ye===4||ye===3&&(xe&130023424)===xe&&500>he()-yd?ar(t,0):gd|=n),nt(t,e)}function Pv(t,e){e===0&&((t.mode&1)===0?e=1:(e=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var n=Qe();t=rn(t,e),t!==null&&(Qs(t,e,n),nt(t,n))}function AS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pv(t,n)}function DS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),Pv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Ze=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ze=!1,yS(t,e,n);Ze=(t.flags&131072)!==0}else Ze=!1,re&&(e.flags&1048576)!==0&&$y(e,Da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oa(t,e),t=e.pendingProps;var i=ii(e,je.current);Yr(e,n),i=cd(null,e,r,t,i,n);var s=hd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(r)?(s=!0,Na(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sd(e),i.updater=gl,e.stateNode=i,i._reactInternals=e,bc(e,r,t,n),e=Vc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Jh(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PS(r),t=It(r,t),i){case 0:e=Fc(null,e,r,t,n);break e;case 1:e=Fp(null,e,r,t,n);break e;case 11:e=bp(null,e,r,t,n);break e;case 14:e=Up(null,e,r,It(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Fc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Fp(t,e,r,i,n);case 3:e:{if(gv(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vy(t,e),Oa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=li(Error(_(423)),e),e=Vp(t,e,r,n,i);break e}else if(r!==i){i=li(Error(_(424)),e),e=Vp(t,e,r,n,i);break e}else for(st=Nn(e.stateNode.containerInfo.firstChild),at=e,re=!0,kt=null,n=Hy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){e=sn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Wy(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ac(r,i)?o=null:s!==null&&Ac(r,s)&&(e.flags|=32),mv(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return yv(t,e,n);case 4:return od(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),bp(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(xa,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!et.current){e=sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yr(e,n),i=yt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),Up(t,e,r,i,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),oa(t,e),e.tag=1,tt(r)?(t=!0,Na(e)):t=!1,Yr(e,n),jy(e,r,i),bc(e,r,i,n),Vc(null,e,r,!0,t,n);case 19:return vv(t,e,n);case 22:return pv(t,e,n)}throw Error(_(156,e.tag))};function Lv(t,e){return oy(t,e)}function xS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new xS(t,e,n,r)}function _d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PS(t){if(typeof t=="function")return _d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vh)return 11;if(t===Bh)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return lr(n.children,i,s,e);case Fh:o=8,i|=8;break;case ac:return t=mt(12,n,e,i|2),t.elementType=ac,t.lanes=s,t;case lc:return t=mt(13,n,e,i),t.elementType=lc,t.lanes=s,t;case uc:return t=mt(19,n,e,i),t.elementType=uc,t.lanes=s,t;case zg:return El(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case jg:o=9;break e;case Vh:o=11;break e;case Bh:o=14;break e;case pn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function lr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function El(t,e,n,r){return t=mt(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,i,s,o,a,l){return t=new OS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(s),t}function LS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mv(t){if(!t)return Un;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(tt(n))return Ly(t,n,e)}return e}function $v(t,e,n,r,i,s,o,a,l){return t=Sd(n,r,!0,t,i,s,o,a,l),t.context=Mv(null),n=t.current,r=Qe(),i=xn(n),s=Jt(r,i),s.callback=e!=null?e:null,An(n,s,i),t.current.lanes=i,Qs(t,i,r),nt(t,r),t}function _l(t,e,n,r){var i=e.current,s=Qe(),o=xn(i);return n=Mv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=An(i,e,o),t!==null&&(Rt(t,i,o,s),ra(t,i,o)),o}function Ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){Xp(t,e),(t=t.alternate)&&Xp(t,e)}function MS(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}Sl.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));_l(t,e,null,null)};Sl.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){_l(null,t,null,null)}),e[nn]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gn.length&&e!==0&&e<gn[n].priority;n++);gn.splice(n,0,t),n===0&&my(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function $S(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ba(o);s.call(u)}}var o=$v(e,r,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=o,t[nn]=o.current,Ss(t.nodeType===8?t.parentNode:t),yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ba(l);a.call(u)}}var l=Sd(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=l,t[nn]=l.current,Ss(t.nodeType===8?t.parentNode:t),yr(function(){_l(e,l,n,r)}),l}function Tl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ba(o);a.call(l)}}_l(e,o,t,i)}else o=$S(n,e,t,i,r);return Ba(o)}hy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qi(e.pendingLanes);n!==0&&(Hh(e,n|1),nt(e,he()),(K&6)===0&&(ui=he()+500,qn()))}break;case 13:yr(function(){var r=rn(t,1);if(r!==null){var i=Qe();Rt(r,t,1,i)}}),Id(t,1)}};Wh=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var n=Qe();Rt(e,t,134217728,n)}Id(t,134217728)}};dy=function(t){if(t.tag===13){var e=xn(t),n=rn(t,e);if(n!==null){var r=Qe();Rt(n,t,e,r)}Id(t,e)}};fy=function(){return X};py=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};wc=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pl(r);if(!i)throw Error(_(90));Wg(r),dc(r,i)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};ey=vd;ty=yr;var bS={usingClientEntryPoint:!1,Events:[Ys,Ur,pl,Jg,Zg,vd]},Vi={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},US={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iy(t),t===null?null:t.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{cl=jo.inject(US),Lt=jo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(_(200));return LS(t,e,null,n)};ct.createRoot=function(t,e){if(!kd(t))throw Error(_(299));var n=!1,r="",i=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,Ss(t.nodeType===8?t.parentNode:t),new Td(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=iy(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return yr(t)};ct.hydrate=function(t,e,n){if(!Il(e))throw Error(_(200));return Tl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n!=null?n:null,i,!1,s,o),t[nn]=e.current,Ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sl(e)};ct.render=function(t,e,n){if(!Il(e))throw Error(_(200));return Tl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Il(t))throw Error(_(40));return t._reactRootContainer?(yr(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};ct.unstable_batchedUpdates=vd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Il(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return Tl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ct})($g);var Jp=$g.exports;sc.createRoot=Jp.createRoot,sc.hydrateRoot=Jp.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},VS=function(t){const e=Uv(t);return Fv.encodeByteArray(e,!0)},ja=function(t){return VS(t).replace(/\./g,"")},Vv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function jS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WS(){return typeof indexedDB=="object"}function qS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function KS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=()=>KS().__FIREBASE_DEFAULTS__,QS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vv(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return GS()||QS()||XS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bv=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jv=t=>{const e=Bv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},YS=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},zv=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZS,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,r)}}function eI(t,e){return t.replace(tI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tI=/\{\$([^}]+)}/g;function nI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zp(s)&&Zp(o)){if(!za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rI(t,e){const n=new iI(t,e);return n.subscribe.bind(n)}class iI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bu),i.error===void 0&&(i.error=bu),i.complete===void 0&&(i.complete=bu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lI(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aI(t){return t===Zn?void 0:t}function lI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const cI={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},hI=G.INFO,dI={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},fI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=hI,this._logHandler=fI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const pI=(t,e)=>e.some(n=>t instanceof n);let em,tm;function mI(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gI(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Jc=new WeakMap,qv=new WeakMap,Uu=new WeakMap,Nd=new WeakMap;function yI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(On(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function vI(t){if(Jc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wI(t){Zc=t(Zc)}function EI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return qv.set(r,e.sort?e.sort():[e]),On(r)}:gI().includes(t)?function(...e){return t.apply(Fu(this),e),On(Wv.get(this))}:function(...e){return On(t.apply(Fu(this),e))}}function _I(t){return typeof t=="function"?EI(t):(t instanceof IDBTransaction&&vI(t),pI(t,mI())?new Proxy(t,Zc):t)}function On(t){if(t instanceof IDBRequest)return yI(t);if(Uu.has(t))return Uu.get(t);const e=_I(t);return e!==t&&(Uu.set(t,e),Nd.set(e,t)),e}const Fu=t=>Nd.get(t);function SI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=On(o);return r&&o.addEventListener("upgradeneeded",l=>{r(On(o.result),l.oldVersion,l.newVersion,On(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const II=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],Vu=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||II.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vu.set(e,s),s}wI(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",rm="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Rd("@firebase/app"),RI="@firebase/app-compat",NI="@firebase/analytics-compat",AI="@firebase/analytics",DI="@firebase/app-check-compat",xI="@firebase/app-check",PI="@firebase/auth",OI="@firebase/auth-compat",LI="@firebase/database",MI="@firebase/database-compat",$I="@firebase/functions",bI="@firebase/functions-compat",UI="@firebase/installations",FI="@firebase/installations-compat",VI="@firebase/messaging",BI="@firebase/messaging-compat",jI="@firebase/performance",zI="@firebase/performance-compat",HI="@firebase/remote-config",WI="@firebase/remote-config-compat",qI="@firebase/storage",KI="@firebase/storage-compat",GI="@firebase/firestore",QI="@firebase/firestore-compat",XI="firebase",YI="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="[DEFAULT]",JI={[eh]:"fire-core",[RI]:"fire-core-compat",[AI]:"fire-analytics",[NI]:"fire-analytics-compat",[xI]:"fire-app-check",[DI]:"fire-app-check-compat",[PI]:"fire-auth",[OI]:"fire-auth-compat",[LI]:"fire-rtdb",[MI]:"fire-rtdb-compat",[$I]:"fire-fn",[bI]:"fire-fn-compat",[UI]:"fire-iid",[FI]:"fire-iid-compat",[VI]:"fire-fcm",[BI]:"fire-fcm-compat",[jI]:"fire-perf",[zI]:"fire-perf-compat",[HI]:"fire-rc",[WI]:"fire-rc-compat",[qI]:"fire-gcs",[KI]:"fire-gcs-compat",[GI]:"fire-fst",[QI]:"fire-fst-compat","fire-js":"fire-js",[XI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map,nh=new Map;function ZI(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(nh.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,t);for(const n of Ha.values())ZI(n,t);return!0}function kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Zs("app","Firebase",eT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=YI;function Kv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=YS()),!n)throw Ln.create("no-options");const s=Ha.get(i);if(s){if(za(n,s.options)&&za(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i})}const o=new uI(i);for(const l of nh.values())o.addComponent(l);const a=new tT(n,r,o);return Ha.set(i,a),a}function Ad(t=th){const e=Ha.get(t);if(!e&&t===th)return Kv();if(!e)throw Ln.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let i=(r=JI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}wr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firebase-heartbeat-database",rT=1,xs="firebase-heartbeat-store";let Bu=null;function Gv(){return Bu||(Bu=SI(nT,rT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function iT(t){var e;try{return(await Gv()).transaction(xs).objectStore(xs).get(Qv(t))}catch(n){if(n instanceof zt)vr.warn(n.message);else{const r=Ln.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});vr.warn(r.message)}}}async function im(t,e){var n;try{const i=(await Gv()).transaction(xs,"readwrite");return await i.objectStore(xs).put(e,Qv(t)),i.done}catch(r){if(r instanceof zt)vr.warn(r.message);else{const i=Ln.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});vr.warn(i.message)}}}function Qv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sm(),{heartbeatsToSend:n,unsentEntries:r}=lT(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sm(){return new Date().toISOString().substring(0,10)}function lT(t,e=sT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),om(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WS()?qS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function om(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){wr(new Fn("platform-logger",e=>new kI(e),"PRIVATE")),wr(new Fn("heartbeat",e=>new aT(e),"PRIVATE")),$t(eh,rm,t),$t(eh,rm,"esm2017"),$t("fire-js","")}cT("");var hT="firebase",dT="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(hT,dT,"app");var fT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Dd=Dd||{},b=fT||self;function Wa(){}function Cl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function to(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,ju)&&t[ju]||(t[ju]=++mT)}var ju="closure_uid_"+(1e9*Math.random()>>>0),mT=0;function gT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=gT:Ve=yT,Ve.apply(null,arguments)}function zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var vT=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vT!=0)&&pT(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function am(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Cl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var wT=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",Wa,e),b.removeEventListener("test",Wa,e)}catch{}return t}();function qa(t){return/^[\s\xa0]*$/.test(t)}var lm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zu(t,e){return t<e?-1:t>e?1:0}function Rl(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return Rl().indexOf(t)!=-1}function Pd(t){return Pd[" "](t),t}Pd[" "]=Wa;function ET(t){var e=IT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _T=Pt("Opera"),ci=Pt("Trident")||Pt("MSIE"),Yv=Pt("Edge"),rh=Yv||ci,Jv=Pt("Gecko")&&!(Rl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),ST=Rl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function Zv(){var t=b.document;return t?t.documentMode:void 0}var Ka;e:{var Hu="",Wu=function(){var t=Rl();if(Jv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yv)return/Edge\/([\d\.]+)/.exec(t);if(ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ST)return/WebKit\/(\S+)/.exec(t);if(_T)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wu&&(Hu=Wu?Wu[1]:""),ci){var qu=Zv();if(qu!=null&&qu>parseFloat(Hu)){Ka=String(qu);break e}}Ka=Hu}var IT={};function TT(){return ET(function(){let t=0;const e=lm(String(Ka)).split("."),n=lm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=zu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||zu(i[2].length==0,s[2].length==0)||zu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ih;if(b.document&&ci){var um=Zv();ih=um||parseInt(Ka,10)||void 0}else ih=void 0;var kT=ih;function Ps(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jv){e:{try{Pd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.X.h.call(this)}}Le(Ps,Be);var CT={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var no="closure_listenable_"+(1e6*Math.random()|0),RT=0;function NT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++RT,this.ba=this.ea=!1}function Nl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Od(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function e0(t){const e={};for(const n in t)e[n]=t[n];return e}const cm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<cm.length;s++)n=cm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Al(t){this.src=t,this.g={},this.h=0}Al.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=oh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new NT(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Xv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ld="closure_lm_"+(1e6*Math.random()|0),Ku={};function n0(t,e,n,r,i){if(r&&r.once)return i0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)n0(t,e[s],n,r,i);return null}return n=bd(n),t&&t[no]?t.N(e,n,to(r)?!!r.capture:!!r,i):r0(t,e,n,!1,r,i)}function r0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=to(i)?!!i.capture:!!i,a=$d(t);if(a||(t[Ld]=a=new Al(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=AT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(o0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AT(){function t(n){return e.call(t.src,t.listener,n)}const e=DT;return t}function i0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)i0(t,e[s],n,r,i);return null}return n=bd(n),t&&t[no]?t.O(e,n,to(r)?!!r.capture:!!r,i):r0(t,e,n,!0,r,i)}function s0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)s0(t,e[s],n,r,i);else r=to(r)?!!r.capture:!!r,n=bd(n),t&&t[no]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=oh(s,n,r,i),-1<n&&(Nl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=$d(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,r,i)),(n=-1<t?e[t]:null)&&Md(n))}function Md(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[no])sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(o0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$d(e))?(sh(n,t),n.h==0&&(n.src=null,e[Ld]=null)):Nl(t)}}}function o0(t){return t in Ku?Ku[t]:Ku[t]="on"+t}function DT(t,e){if(t.ba)t=!0;else{e=new Ps(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Md(t),t=n.call(r,e)}return t}function $d(t){return t=t[Ld],t instanceof Al?t:null}var Gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(t){return typeof t=="function"?t:(t[Gu]||(t[Gu]=function(e){return t.handleEvent(e)}),t[Gu])}function Re(){Kn.call(this),this.i=new Al(this),this.P=this,this.I=null}Le(Re,Kn);Re.prototype[no]=!0;Re.prototype.removeEventListener=function(t,e,n,r){s0(this,t,e,n,r)};function Pe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),t0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ho(o,r,!0,e)&&i}if(o=e.g=t,i=Ho(o,r,!0,e)&&i,i=Ho(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ho(o,r,!1,e)&&i}Re.prototype.M=function(){if(Re.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nl(n[r]);delete t.g[e],t.h--}}this.I=null};Re.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ud=b.JSON.stringify;function xT(){var t=u0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PT{constructor(){this.h=this.g=null}add(e,n){const r=a0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var a0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OT,t=>t.reset());class OT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){b.setTimeout(()=>{throw t},0)}function l0(t,e){ah||MT(),lh||(ah(),lh=!0),u0.add(t,e)}var ah;function MT(){var t=b.Promise.resolve(void 0);ah=function(){t.then($T)}}var lh=!1,u0=new PT;function $T(){for(var t;t=xT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=a0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lh=!1}function Dl(t,e){Re.call(this),this.h=t||1,this.g=e||b,this.j=Ve(this.lb,this),this.l=Date.now()}Le(Dl,Re);x=Dl.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(Fd(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){Dl.X.M.call(this),Fd(this),delete this.g};function Vd(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function c0(t){t.g=Vd(()=>{t.g=null,t.i&&(t.i=!1,c0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bT extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:c0(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(t){Kn.call(this),this.h=t,this.g={}}Le(Os,Kn);var hm=[];function h0(t,e,n,r){Array.isArray(n)||(n&&(hm[0]=n.toString()),n=hm);for(var i=0;i<n.length;i++){var s=n0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function d0(t){Od(t.g,function(e,n){this.g.hasOwnProperty(n)&&Md(e)},t),t.g={}}Os.prototype.M=function(){Os.X.M.call(this),d0(this)};Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xl(){this.g=!0}xl.prototype.Aa=function(){this.g=!1};function UT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BT(t,n)+(r?" "+r:"")})}function VT(t,e){t.info(function(){return"TIMEOUT: "+e})}xl.prototype.info=function(){};function BT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ud(n)}catch{return e}}var Cr={},dm=null;function Pl(){return dm=dm||new Re}Cr.Pa="serverreachability";function f0(t){Be.call(this,Cr.Pa,t)}Le(f0,Be);function Ls(t){const e=Pl();Pe(e,new f0(e))}Cr.STAT_EVENT="statevent";function p0(t,e){Be.call(this,Cr.STAT_EVENT,t),this.stat=e}Le(p0,Be);function Ke(t){const e=Pl();Pe(e,new p0(e,t))}Cr.Qa="timingevent";function m0(t,e){Be.call(this,Cr.Qa,t),this.size=e}Le(m0,Be);function ro(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var Ol={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},g0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bd(){}Bd.prototype.h=null;function fm(t){return t.h||(t.h=t.i())}function y0(){}var io={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jd(){Be.call(this,"d")}Le(jd,Be);function zd(){Be.call(this,"c")}Le(zd,Be);var uh;function Ll(){}Le(Ll,Bd);Ll.prototype.g=function(){return new XMLHttpRequest};Ll.prototype.i=function(){return{}};uh=new Ll;function so(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Os(this),this.O=jT,t=rh?125:void 0,this.T=new Dl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new v0}function v0(){this.i=null,this.g="",this.h=!1}var jT=45e3,ch={},Ga={};x=so.prototype;x.setTimeout=function(t){this.O=t};function hh(t,e,n){t.K=1,t.v=$l(on(e)),t.s=n,t.P=!0,w0(t,null)}function w0(t,e){t.F=Date.now(),oo(t),t.A=on(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),R0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new v0,t.g=G0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new bT(Ve(t.La,t,t.g),t.N)),h0(t.S,t.g,"readystatechange",t.ib),e=t.H?e0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ls(),UT(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const c=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||rh||this.g&&(this.h.h||this.g.fa()||ym(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ls(3):Ls(2)),Ml(this);var n=this.g.aa();this.Y=n;t:if(E0(this)){var r=ym(this.g);t="";var i=r.length,s=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),as(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,FT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qa(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dh(this,n);else{this.i=!1,this.o=3,Ke(12),rr(this),as(this);break e}}this.P?(_0(this,c,o),rh&&this.i&&c==3&&(h0(this.S,this.T,"tick",this.hb),this.T.start())):(Wr(this.j,this.m,o,null),dh(this,o)),c==4&&rr(this),this.i&&!this.I&&(c==4?H0(this.l,this):(this.i=!1,oo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),rr(this),as(this)}}}catch{}finally{}};function E0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=zT(t,n),i==Ga){e==4&&(t.o=4,Ke(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ch){t.o=4,Ke(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,i,null),dh(t,i);E0(t)&&i!=Ga&&i!=ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xd(e),e.K=!0,Ke(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),as(t))}x.hb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(Ml(this),_0(this,t,e),this.i&&t!=4&&oo(this))}};function zT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ga:(n=Number(e.substring(n,r)),isNaN(n)?ch:(r+=1,r+n>e.length?Ga:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,rr(this)};function oo(t){t.V=Date.now()+t.O,S0(t,t.O)}function S0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ro(Ve(t.gb,t),e)}function Ml(t){t.B&&(b.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VT(this.j,this.A),this.K!=2&&(Ls(),Ke(17)),rr(this),this.o=2,as(this)):S0(this,this.V-t)};function as(t){t.l.G==0||t.I||H0(t.l,t)}function rr(t){Ml(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fd(t.T),d0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fh(n.h,t))){if(!t.J&&fh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ya(n),Fl(n);else break e;Qd(n),Ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ro(Ve(n.cb,n),6e3));if(1>=D0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ir(n,11)}else if((t.J||n.g==t)&&Ya(n),!qa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hd(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=K0(r,r.H?r.ka:null,r.V),o.J){x0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Ml(a),oo(a)),r.g=o}else j0(r);0<n.i.length&&Vl(n)}else u[0]!="stop"&&u[0]!="close"||ir(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ir(n,7):Gd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ls(4)}catch{}}function HT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Cl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function WT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Cl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function I0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Cl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WT(t),r=HT(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var T0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=e!==void 0?e:t.h,Qa(this,t.j),this.s=t.s,this.g=t.g,Xa(this,t.m),this.l=t.l,e=t.i;var n=new Ms;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pm(this,n),this.o=t.o}else t&&(n=String(t).match(T0))?(this.h=!!e,Qa(this,n[1]||"",!0),this.s=Gi(n[2]||""),this.g=Gi(n[3]||"",!0),Xa(this,n[4]),this.l=Gi(n[5]||"",!0),pm(this,n[6]||"",!0),this.o=Gi(n[7]||"")):(this.h=!!e,this.i=new Ms(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qi(e,mm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qi(e,mm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qi(n,n.charAt(0)=="/"?QT:GT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qi(n,YT)),t.join("")};function on(t){return new ur(t)}function Qa(t,e,n){t.j=n?Gi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pm(t,e,n){e instanceof Ms?(t.i=e,JT(t.i,t.h)):(n||(e=Qi(e,XT)),t.i=new Ms(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function $l(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mm=/[#\/\?@]/g,GT=/[#\?:]/g,QT=/[#\?]/g,XT=/[#\?@]/g,YT=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&qT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Ms.prototype;x.add=function(t,e){Gn(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function k0(t,e){Gn(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function C0(t,e){return Gn(t),e=Si(t,e),t.g.has(e)}x.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.oa=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.W=function(t){Gn(this);let e=[];if(typeof t=="string")C0(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Gn(this),this.i=null,t=Si(this,t),C0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function R0(t,e,n){k0(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),xd(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(k0(this,r),R0(this,i,n))},t)),t.j=e}var ZT=class{constructor(t,e){this.h=t,this.g=e}};function N0(t){this.l=t||ek,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ek=10;function A0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function D0(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hd(t,e){t.g?t.g.add(e):t.h=e}function x0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}N0.prototype.cancel=function(){if(this.i=P0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function P0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xd(t.i)}function Wd(){}Wd.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};Wd.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function tk(){this.g=new Wd}function nk(t,e,n){const r=n||"";try{I0(t,function(i,s){let o=i;to(i)&&(o=Ud(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rk(t,e){const n=new xl;if(b.Image){const r=new Image;r.onload=zo(Wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zo(Wo,n,r,"TestLoadImage: error",!1,e),r.onabort=zo(Wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zo(Wo,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ao(t){this.l=t.ac||null,this.j=t.jb||!1}Le(ao,Bd);ao.prototype.g=function(){return new bl(this.l,this.j)};ao.prototype.i=function(t){return function(){return t}}({});function bl(t,e){Re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(bl,Re);var qd=0;x=bl.prototype;x.open=function(t,e){if(this.readyState!=qd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=qd};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;O0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function O0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lo(this):$s(this),this.readyState==3&&O0(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,lo(this))};x.Ua=function(t){this.g&&(this.response=t,lo(this))};x.ga=function(){this.g&&lo(this)};function lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ik=b.JSON.parse;function ue(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=L0,this.K=this.L=!1}Le(ue,Re);var L0="",sk=/^https?$/i,ok=["POST","PUT"];x=ue.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uh.g(),this.C=this.u?fm(this.u):fm(uh),this.g.onreadystatechange=Ve(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){gm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&t instanceof b.FormData,!(0<=Xv(ok,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{b0(this),0<this.B&&((this.K=ak(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.qa,this)):this.A=Vd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gm(this,s)}};function ak(t){return ci&&TT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof Dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function gm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,M0(t),Ul(t)}function M0(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Ul(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ul(this,!0)),ue.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?$0(this):this.fb())};x.fb=function(){$0(this)};function $0(t){if(t.h&&typeof Dd<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)Vd(t.Ha,0,t);else if(Pe(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(T0)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!sk.test(i?i.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",M0(t)}}finally{Ul(t)}}}}function Ul(t,e){if(t.g){b0(t);const n=t.g,r=t.C[0]?Wa:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function b0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ik(e)}};function ym(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case L0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function U0(t){let e="";return Od(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=U0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function F0(t){this.Ca=0,this.i=[],this.j=new xl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bi("baseRetryDelayMs",5e3,t),this.bb=Bi("retryDelaySeedMs",1e4,t),this.$a=Bi("forwardChannelMaxRetries",2,t),this.ta=Bi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new N0(t&&t.concurrentRequestLimit),this.Fa=new tk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=F0.prototype;x.ma=8;x.G=1;function Gd(t){if(V0(t),t.G==3){var e=t.U++,n=on(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),uo(t,n),e=new so(t,t.j,e,void 0),e.K=2,e.v=$l(on(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=G0(e.l,null),e.g.da(e.v)),e.F=Date.now(),oo(e)}q0(t)}function Fl(t){t.g&&(Xd(t),t.g.cancel(),t.g=null)}function V0(t){Fl(t),t.u&&(b.clearTimeout(t.u),t.u=null),Ya(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function Vl(t){A0(t.h)||t.m||(t.m=!0,l0(t.Ja,t),t.C=0)}function lk(t,e){return D0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ro(Ve(t.Ja,t,e),W0(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new so(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=e0(s),t0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=B0(this,i,e),n=on(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),uo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(U0(s)))+"&"+e:this.o&&Kd(n,this.o,s)),Hd(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,hh(i,n,null)):hh(i,n,e),this.G=2}}else this.G==3&&(t?vm(this,t):this.i.length==0||A0(this.h)||vm(this))};function vm(t,e){var n;e?n=e.m:n=t.U++;const r=on(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),uo(t,r),t.o&&t.s&&Kd(r,t.o,t.s),n=new so(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=B0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Hd(t.h,n),hh(n,r,e)}function uo(t,e){t.ia&&Od(t.ia,function(n,r){ie(e,r,n)}),t.l&&I0({},function(n,r){ie(e,r,n)})}function B0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ve(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{nk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function j0(t){t.g||t.u||(t.Z=1,l0(t.Ia,t),t.A=0)}function Qd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ro(Ve(t.Ia,t),W0(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,z0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ro(Ve(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),Fl(this),z0(this))};function Xd(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function z0(t){t.g=new so(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),uo(t,e),t.o&&t.s&&Kd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$l(on(e)),n.s=null,n.P=!0,w0(n,t)}x.cb=function(){this.v!=null&&(this.v=null,Fl(this),Qd(this),Ke(19))};function Ya(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function H0(t,e){var n=null;if(t.g==e){Ya(t),Xd(t),t.g=null;var r=2}else if(fh(t.h,e))n=e.D,x0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Pl(),Pe(r,new m0(r,n)),Vl(t)}else j0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lk(t,e)||r==2&&Qd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function W0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ir(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ve(t.kb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Qa(n,"https"),$l(n)),rk(n.toString(),r)}else Ke(2);t.G=0,t.l&&t.l.va(e),q0(t),V0(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function q0(t){if(t.G=0,t.la=[],t.l){const e=P0(t.h);(e.length!=0||t.i.length!=0)&&(am(t.la,e),am(t.la,t.i),t.h.i.length=0,xd(t.i),t.i.length=0),t.l.ua()}}function K0(t,e,n){var r=n instanceof ur?on(n):new ur(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Xa(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ur(null,void 0);r&&Qa(s,r),e&&(s.g=e),i&&Xa(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),uo(t,r),r}function G0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new ao({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function Q0(){}x=Q0.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function Ja(){if(ci&&!(10<=Number(kT)))throw Error("Environmental error: no available transport.")}Ja.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Re.call(this),this.g=new F0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!qa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Le(ut,Re);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=K0(t,null,t.V),Vl(t)};ut.prototype.close=function(){Gd(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ud(t),t=n);e.i.push(new ZT(e.ab++,t)),e.G==3&&Vl(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,Gd(this.g),delete this.g,ut.X.M.call(this)};function X0(t){jd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(X0,jd);function Y0(){zd.call(this),this.status=1}Le(Y0,zd);function Ii(t){this.g=t}Le(Ii,Q0);Ii.prototype.xa=function(){Pe(this.g,"a")};Ii.prototype.wa=function(t){Pe(this.g,new X0(t))};Ii.prototype.va=function(t){Pe(this.g,new Y0)};Ii.prototype.ua=function(){Pe(this.g,"b")};Ja.prototype.createWebChannel=Ja.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Ol.NO_ERROR=0;Ol.TIMEOUT=8;Ol.HTTP_ERROR=6;g0.COMPLETE="complete";y0.EventType=io;io.OPEN="a";io.CLOSE="b";io.ERROR="c";io.MESSAGE="d";Re.prototype.listen=Re.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var uk=function(){return new Ja},ck=function(){return Pl()},Qu=Ol,hk=g0,dk=Cr,wm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fk=ao,qo=y0,pk=ue;const Em="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Rd("@firebase/firestore");function _m(){return Er.logLevel}function O(t,...e){if(Er.logLevel<=G.DEBUG){const n=e.map(Yd);Er.debug(`Firestore (${Ti}): ${t}`,...n)}}function an(t,...e){if(Er.logLevel<=G.ERROR){const n=e.map(Yd);Er.error(`Firestore (${Ti}): ${t}`,...n)}}function ph(t,...e){if(Er.logLevel<=G.WARN){const n=e.map(Yd);Er.warn(`Firestore (${Ti}): ${t}`,...n)}}function Yd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function J(t,e){t||U()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class gk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yk{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new J0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new be(e)}}class vk{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wk{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ek{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _k{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new Ek(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new ve(0,0))}static max(){return new j(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends bs{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const Ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends bs{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return Ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}function Tk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Vn(i,M.empty(),e)}function kk(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vn(j.min(),M.empty(),-1)}static max(){return new Vn(j.max(),M.empty(),-1)}}function Ck(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Rk)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jd.at=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ko(this.root,e,this.comparator,!0)}}class Ko{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ae.RED,this.left=i!=null?i:Ae.EMPTY,this.right=s!=null?s:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Im(this.data.getIterator())}getIteratorFrom(e){return new Im(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Im{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new we(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Ak=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(J(!!t),typeof t=="string"){let e=0;const n=Ak.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nw(t){const e=t.mapValue.fields.__previous_value__;return tw(e)?nw(e):e}function Us(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}function Bl(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tw(t)?4:Pk(t)?9007199254740991:10:U()}function Bt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Us(t).isEqual(Us(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Bn(r.timestampValue),o=Bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return di(r.bytesValue).isEqual(di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?Za(s)===Za(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Sm(s)!==Sm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bt(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Vs(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Tm(t.timestampValue,e.timestampValue);case 4:return Tm(Us(t),Us(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=di(i),a=di(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(pe(i.latitude),pe(s.latitude));return o!==0?o:Q(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Go.mapValue&&s===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(s===Go.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=fi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Tm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=Bn(t),r=Bn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Zr(t){return mh(t)}function mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mh(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function km(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gh(t){return!!t&&"integerValue"in t}function Zd(t){return!!t&&"arrayValue"in t}function Cm(t){return!!t&&"nullValue"in t}function Rm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ca(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ls(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ls(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(ls(this.value))}}function rw(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Fe([n]);if(ca(r)){const s=rw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new De(e,0,j.min(),j.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new De(e,1,n,j.min(),r,0)}static newNoDocument(e,n){return new De(e,2,n,j.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,j.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Nm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ok(t,e,n,r,i,s,o)}function ef(t){const e=F(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Zr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zr(r)).join(",")),e.ht=n}return e.ht}function Lk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Zr(r.value)}`;var r}).join(", ")}]`),Bl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Zr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Zr(n)).join(",")),`Target(${e})`}function tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!jk(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dm(t.startAt,e.startAt)&&Dm(t.endAt,e.endAt)}function yh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ge extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Mk(e,n,r):n==="array-contains"?new Uk(e,r):n==="in"?new Fk(e,r):n==="not-in"?new Vk(e,r):n==="array-contains-any"?new Bk(e,r):new Ge(e,n,r)}static lt(e,n,r){return n==="in"?new $k(e,r):new bk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(fi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.ft(fi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Mk extends Ge{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class $k extends Ge{constructor(e,n){super(e,"in",n),this.keys=iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bk extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Uk extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zd(n)&&Vs(n.arrayValue,this.value)}}class Fk extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class Vk extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class Bk extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}class el{constructor(e,n){this.position=e,this.inclusive=n}}class us{constructor(e,n="asc"){this.field=e,this.dir=n}}function jk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Am(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function zk(t,e,n,r,i,s,o,a){return new fo(t,e,n,r,i,s,o,a)}function nf(t){return new fo(t)}function xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ow(t){for(const e of t.filters)if(e.dt())return e.field;return null}function aw(t){return t.collectionGroup!==null}function Bs(t){const e=F(t);if(e._t===null){e._t=[];const n=ow(e),r=sw(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new us(n)),e._t.push(new us(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new us(Fe.keyField(),s))}}}return e._t}function ln(t){const e=F(t);if(!e.wt)if(e.limitType==="F")e.wt=Nm(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Bs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new us(s.field,o))}const r=e.endAt?new el(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new el(e.startAt.position,e.startAt.inclusive):null;e.wt=Nm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function vh(t,e,n){return new fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return tf(ln(t),ln(e))&&t.limitType===e.limitType}function lw(t){return`${ef(ln(t))}|lt:${t.limitType}`}function wh(t){return`Query(target=${Lk(ln(t))}; limitType=${t.limitType})`}function rf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Am(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Bs(n),r)||n.endAt&&!function(i,s,o){const a=Am(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Bs(n),r))}(t,e)}function Hk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uw(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=Wk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wk(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fi(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function qk(t,e){return xk(e)?hw(e):cw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this._=void 0}}function Kk(t,e,n){return t instanceof tl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof js?fw(t,e):t instanceof zs?pw(t,e):function(r,i){const s=dw(r,i),o=Pm(s)+Pm(r.yt);return gh(s)&&gh(r.yt)?hw(o):cw(r.It,o)}(t,e)}function Gk(t,e,n){return t instanceof js?fw(t,e):t instanceof zs?pw(t,e):n}function dw(t,e){return t instanceof nl?gh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class tl extends zl{}class js extends zl{constructor(e){super(),this.elements=e}}function fw(t,e){const n=mw(e);for(const r of t.elements)n.some(i=>Bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class zs extends zl{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(i=>!Bt(i,r));return{arrayValue:{values:n}}}class nl extends zl{constructor(e,n){super(),this.It=e,this.yt=n}}function Pm(t){return pe(t.integerValue||t.doubleValue)}function mw(t){return Zd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof js&&r instanceof js||n instanceof zs&&r instanceof zs?hi(n.elements,r.elements,Bt):n instanceof nl&&r instanceof nl?Bt(n.yt,r.yt):n instanceof tl&&r instanceof tl}(t.transform,e.transform)}class Xk{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vw(t.key,Ut.none()):new po(t.key,t.data,Ut.none());{const n=t.data,r=pt.empty();let i=new we(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new bt(i.toArray()),Ut.none())}}function Yk(t,e,n){t instanceof po?function(r,i,s){const o=r.value.clone(),a=Lm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(r,i,s){if(!ha(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Lm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(yw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,r){return t instanceof po?function(i,s,o,a){if(!ha(i.precondition,s))return o;const l=i.value.clone(),u=Mm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,s,o,a){if(!ha(i.precondition,s))return o;const l=Mm(i.fieldTransforms,a,s),u=s.data;return u.setAll(yw(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ha(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dw(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Om(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hi(n,r,(i,s)=>Qk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends Hl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends Hl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lm(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Gk(o,a,n[i]))}return r}function Mm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Kk(s,o,e))}return r}class vw extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zk extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,q;function tC(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function ww(t){if(t===void 0)return an("GRPC error has no .code"),E.UNKNOWN;switch(t){case fe.OK:return E.OK;case fe.CANCELLED:return E.CANCELLED;case fe.UNKNOWN:return E.UNKNOWN;case fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case fe.INTERNAL:return E.INTERNAL;case fe.UNAVAILABLE:return E.UNAVAILABLE;case fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case fe.NOT_FOUND:return E.NOT_FOUND;case fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case fe.ABORTED:return E.ABORTED;case fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case fe.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(q=fe||(fe={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new _e(M.comparator);function un(){return nC}const Ew=new _e(M.comparator);function Xi(...t){let e=Ew;for(const n of t)e=e.insert(n.key,n);return e}function _w(t){let e=Ew;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function sr(){return hs()}function Sw(){return hs()}function hs(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const rC=new _e(M.comparator),iC=new we(M.comparator);function H(...t){let e=iC;for(const n of t)e=e.add(n);return e}const sC=new we(Q);function Iw(){return sC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wl(j.min(),i,Iw(),un(),H())}}class mo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Tw{constructor(e,n){this.targetId=e,this.At=n}}class kw{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $m{constructor(){this.Rt=0,this.bt=Um(),this.Pt=He.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=H(),n=H(),r=H();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new mo(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Um()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class oC{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=un(),this.qt=bm(),this.Kt=new we(Q)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(yh(s))if(r===0){const o=new M(s.path);this.jt(n,o,De.newNoDocument(o,j.min()))}else J(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&yh(a.target)){const l=new M(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,De.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=H();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Wl(e,n,this.Kt,this.Ut,r);return this.Ut=un(),this.qt=bm(),this.Kt=new we(Q),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new $m,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new we(Q),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new $m),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function bm(){return new _e(M.comparator)}function Um(){return new _e(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class uC{constructor(e,n){this.databaseId=e,this.gt=n}}function rl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(t,e){return t.gt?e.toBase64():e.toUint8Array()}function cC(t,e){return rl(t,e.toTimestamp())}function en(t){return J(!!t),j.fromTimestamp(function(e){const n=Bn(e);return new ve(n.seconds,n.nanos)}(t))}function sf(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Rw(t){const e=te.fromString(t);return J(Dw(e)),e}function Eh(t,e){return sf(t.databaseId,e.path)}function Xu(t,e){const n=Rw(e);if(n.get(1)!==t.databaseId.projectId)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Nw(n))}function _h(t,e){return sf(t.databaseId,e)}function hC(t){const e=Rw(t);return e.length===4?te.emptyPath():Nw(e)}function Sh(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nw(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fm(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function dC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(J(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:ww(l.code);return new D(u,l.message||"")}(o);n=new kw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xu(t,r.document.name),s=en(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=De.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new da(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xu(t,r.document),s=r.readTime?en(r.readTime):j.min(),o=De.newNoDocument(i,s),a=r.removedTargetIds||[];n=new da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xu(t,r.document),s=r.removedTargetIds||[];n=new da([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new eC(i),o=r.targetId;n=new Tw(o,s)}}return n}function fC(t,e){let n;if(e instanceof po)n={update:Fm(t,e.key,e.value)};else if(e instanceof vw)n={delete:Eh(t,e.key)};else if(e instanceof Rr)n={update:Fm(t,e.key,e.data),updateMask:IC(e.fieldMask)};else{if(!(e instanceof Zk))return U();n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof tl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof js)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:cC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function pC(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?en(r.updateTime):en(i);return s.isEqual(j.min())&&(s=en(i)),new Xk(s,r.transformResults||[])}(n,e))):[]}function mC(t,e){return{documents:[_h(t,e.path)]}}function gC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_h(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_h(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Rm(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NAN"}};if(Cm(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Rm(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NOT_NAN"}};if(Cm(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(h.field),op:EC(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Pr(c.field),direction:wC(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Bl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yC(t){let e=hC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Aw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new us(qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Bl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new el(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new el(d,h)}(n.endAt)),zk(e,i,o,s,a,"F",l,u)}function vC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t?t.unaryFilter!==void 0?[SC(t)]:t.fieldFilter!==void 0?[_C(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Aw(e)).reduce((e,n)=>e.concat(n)):U():[]}function wC(t){return aC[t]}function EC(t){return lC[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function qr(t){return Fe.fromServerFormat(t.fieldPath)}function _C(t){return Ge.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}function SC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qr(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}function IC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=gw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>Om(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>Om(n,r))}}class of{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=rC;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new of(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.re=e}}function RC(t){const e=yC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.Ye=new AC}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Vn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class AC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new pi(0)}static vn(){return new pi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&cs(r.mutation,i,bt.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=un();const o=hs(),a=hs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Rr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),cs(c.mutation,u,c.mutation.getFieldMask(),ve.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new xC(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hs();let i=new _e((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Sw();c.forEach(d=>{if(!s.has(d)){const m=gw(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(sr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:_w(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Xi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new fo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,De.newInvalidDocument(u)))});let o=Xi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&cs(u.mutation,l,bt.empty(),ve.now()),rf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(De.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:en(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:RC(r.bundledQuery),readTime:en(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.overlays=new _e(M.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=sr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=sr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kC(n,r));let s=this.es.get(n);s===void 0&&(s=H(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.ns=new we(Ie.ss),this.rs=new we(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new te([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new te([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=H();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||Q(e._s,n._s)}static os(e,n){return Q(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new we(Ie.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new M(s),0);let a=new we(Q);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ie(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.Es=e,this.docs=new _e(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let r=un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():De.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=un();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ck(kk(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){U()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bC(this)}getSize(e){return S.resolve(this.size)}}class bC extends DC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.persistence=e,this.Rs=new Ci(n=>ef(n),tf),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new af,this.targetCount=0,this.vs=pi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Jd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new UC(this),this.indexManager=new NC,this.remoteDocumentCache=function(r){return new $C(r)}(r=>this.referenceDelegate.xs(r)),this.It=new CC(n),this.Ns=new OC(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new MC(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new VC(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VC extends Nk{constructor(e){super(),this.currentSequenceNumber=e}}class lf{constructor(e){this.persistence=e,this.Fs=new af,this.$s=null}static Bs(e){return new lf(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(xm(n))return S.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,vh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return xm(n)||i.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(_m()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wh(n)),this.Bi(e,o,n,Tk(i,-1)))})}Fi(e,n){let r=new we(uw(e));return n.forEach((i,s)=>{rf(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return _m()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",wh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Vn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new _e(Q),this.qi=new Ci(s=>ef(s),tf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function zC(t,e,n,r){return new jC(t,e,n,r)}async function xw(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function HC(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);J(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Pw(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function WC(t,e){const n=F(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(He.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=un(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(qC(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(j.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function qC(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=un();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function KC(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GC(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new cr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Ih(t,e,n){const r=F(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Vm(t,e,n){const r=F(t);let i=j.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:H())).next(a=>(QC(r,Hk(e),a),{documents:a,Hi:s})))}function QC(t,e,n){let r=t.Ki.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Bm{constructor(){this.activeTargetIds=Iw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XC{constructor(){this.Lr=new Bm,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Bm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw ph("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ti,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=JC[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new pk;a.setWithCredentials(!0),a.listenOnce(hk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qu.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Qu.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new D(E.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new D(d,h.message))}else o(new D(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uk(),o=ck(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fk({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new ZC({Hr:y=>{h?O("Connection","Not sending because WebChannel is closed:",y):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,v,T)=>{y.listen(v,p=>{try{T(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,qo.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),m(u,qo.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),m(u,qo.EventType.ERROR,y=>{h||(h=!0,ph("Connection","WebChannel transport errored:",y),d.io(new D(E.UNAVAILABLE,"The operation could not be completed")))}),m(u,qo.EventType.MESSAGE,y=>{var v;if(!h){const T=y.data[0];J(!!T);const p=T,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){O("Connection","WebChannel received error:",f);const g=f.status;let w=function(C){const N=fe[C];if(N!==void 0)return ww(N)}(g),k=f.message;w===void 0&&(w=E.INTERNAL,k="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new D(w,k)),u.close()}else O("Connection","WebChannel received:",T),d.ro(T)}}),m(o,dk.STAT_EVENT,y=>{y.stat===wm.PROXY?O("Connection","Detected buffering proxy"):y.stat===wm.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Yu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new uC(t,!0)}class Ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ow(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new D(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tR extends Lw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=dC(this.It,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?en(s.readTime):j.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=Sh(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=yh(a)?{documents:mC(i,a)}:{query:gC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Cw(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=rl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=vC(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=Sh(this.It),n.removeTarget=e,this.Lo(n)}}class nR extends Lw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=pC(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.tu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Sh(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fC(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(E.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(E.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class iR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(an(n),this.uu=!1):O("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.wu.add(4),await go(l),l.yu.set("Unknown"),l.wu.delete(4),await Kl(l)}(this))})}),this.yu=new iR(r,i)}}async function Kl(t){if(Nr(t))for(const e of t.mu)await e(!0)}async function go(t){for(const e of t.mu)await e(!1)}function Mw(t,e){const n=F(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),df(n)?hf(n):Ri(n).Oo()&&cf(n,e))}function $w(t,e){const n=F(t),r=Ri(n);n._u.delete(e),r.Oo()&&bw(n,e),n._u.size===0&&(r.Oo()?r.$o():Nr(n)&&n.yu.set("Unknown"))}function cf(t,e){t.pu.Mt(e.targetId),Ri(t).Ho(e)}function bw(t,e){t.pu.Mt(e),Ri(t).Jo(e)}function hf(t){t.pu=new oC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ri(t).start(),t.yu.cu()}function df(t){return Nr(t)&&!Ri(t).ko()&&t._u.size>0}function Nr(t){return F(t).wu.size===0}function Uw(t){t.pu=void 0}async function oR(t){t._u.forEach((e,n)=>{cf(t,e)})}async function aR(t,e){Uw(t),df(t)?(t.yu.lu(e),hf(t)):t.yu.set("Unknown")}async function lR(t,e,n){if(t.yu.set("Online"),e instanceof kw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await il(t,r)}else if(e instanceof da?t.pu.Gt(e):e instanceof Tw?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(j.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),bw(i,a);const u=new cr(l.target,a,1,l.sequenceNumber);cf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await il(t,r)}}async function il(t,e,n){if(!ho(e))throw e;t.wu.add(1),await go(t),t.yu.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Kl(t)})}function Fw(t,e){return e().catch(n=>il(t,n,e))}async function Gl(t){const e=F(t),n=jn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;uR(e);)try{const i=await KC(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,cR(e,i)}catch(i){await il(e,i)}Vw(e)&&Bw(e)}function uR(t){return Nr(t)&&t.du.length<10}function cR(t,e){t.du.push(e);const n=jn(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Vw(t){return Nr(t)&&!jn(t).ko()&&t.du.length>0}function Bw(t){jn(t).start()}async function hR(t){jn(t).nu()}async function dR(t){const e=jn(t);for(const n of t.du)e.Zo(n.mutations)}async function fR(t,e,n){const r=t.du.shift(),i=of.from(r,e,n);await Fw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gl(t)}async function pR(t,e){e&&jn(t).Xo&&await async function(n,r){if(i=r.code,tC(i)&&i!==E.ABORTED){const s=n.du.shift();jn(n).Fo(),await Fw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Gl(n)}var i}(t,e),Vw(t)&&Bw(t)}async function zm(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.wu.add(3),await go(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Kl(n)}async function mR(t,e){const n=F(t);e?(n.wu.delete(2),await Kl(n)):e||(n.wu.add(2),await go(n),n.yu.set("Unknown"))}function Ri(t){return t.Iu||(t.Iu=function(e,n,r){const i=F(e);return i.iu(),new tR(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:oR.bind(null,t),Zr:aR.bind(null,t),zo:lR.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),df(t)?hf(t):t.yu.set("Unknown")):(await t.Iu.stop(),Uw(t))})),t.Iu}function jn(t){return t.Tu||(t.Tu=function(e,n,r){const i=F(e);return i.iu(),new nR(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:hR.bind(null,t),Zr:pR.bind(null,t),eu:dR.bind(null,t),tu:fR.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Gl(t)):(await t.Tu.stop(),t.du.length>0&&(O("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ff(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pf(t,e){if(an("AsyncQueue",`${e}: ${t}`),ho(t))return new D(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.Eu=new _e(M.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):U():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.Ru=void 0,this.listeners=[]}}class yR{constructor(){this.queries=new Ci(e=>lw(e),jl),this.onlineState="Unknown",this.bu=new Set}}async function jw(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gR),i)try{s.Ru=await n.onListen(r)}catch(o){const a=pf(o,`Initialization of query '${wh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&mf(n)}async function zw(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vR(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&mf(n)}function wR(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function mf(t){t.bu.forEach(e=>{e.next()})}class Hw{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.key=e}}class qw{constructor(e){this.key=e}}class ER{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=H(),this.mutatedKeys=H(),this.Gu=uw(e),this.Qu=new ei(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Hm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=rf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),T=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new mi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=H(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new qw(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Ww(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=H();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return mi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class _R{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SR{constructor(e){this.key=e,this.nc=!1}}class IR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ci(a=>lw(a),jl),this.rc=new Map,this.oc=new Set,this.uc=new _e(M.comparator),this.cc=new Map,this.ac=new af,this.hc={},this.lc=new Map,this.fc=pi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function TR(t,e){const n=LR(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await GC(n.localStore,ln(e));n.isPrimaryClient&&Mw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await kR(n,e,r,a==="current",o.resumeToken)}return i}async function kR(t,e,n,r,i){t._c=(h,d,m)=>async function(y,v,T,p){let f=v.view.Wu(T);f.$i&&(f=await Vm(y.localStore,v.query,!1).then(({documents:k})=>v.view.Wu(k,f)));const g=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,g);return qm(y,v.targetId,w.Xu),w.snapshot}(t,h,d,m);const s=await Vm(t.localStore,e,!0),o=new ER(e,s.Hi),a=o.Wu(s.documents),l=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);qm(t,n,u.Xu);const c=new _R(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function CR(t,e){const n=F(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!jl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ih(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$w(n.remoteStore,r.targetId),Th(n,r.targetId)}).catch(co)):(Th(n,r.targetId),await Ih(n.localStore,r.targetId,!0))}async function RR(t,e,n){const r=MR(t);try{const i=await function(s,o){const a=F(s),l=ve.now(),u=o.reduce((d,m)=>d.add(m.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=un(),y=H();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((T,p)=>{p.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const T=[];for(const p of o){const f=Jk(p,c.get(p.key).overlayedDocument);f!=null&&T.push(new Rr(p.key,f,rw(f.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:_w(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new _e(Q)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await yo(r,i.changes),await Gl(r.remoteStore)}catch(i){const s=pf(i,"Failed to persist write");n.reject(s)}}async function Kw(t,e){const n=F(t);try{const r=await WC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?J(o.nc):i.removedDocuments.size>0&&(J(o.nc),o.nc=!1))}),await yo(n,r,e)}catch(r){await co(r)}}function Wm(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&mf(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NR(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new _e(M.comparator);o=o.insert(s,De.newNoDocument(s,j.min()));const a=H().add(s),l=new Wl(j.min(),new Map,new we(Q),o,a);await Kw(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),gf(r)}else await Ih(r.localStore,e,!1).then(()=>Th(r,e,n)).catch(co)}async function AR(t,e){const n=F(t),r=e.batch.batchId;try{const i=await HC(n.localStore,e);Qw(n,r,null),Gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,i)}catch(i){await co(i)}}async function DR(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Qw(r,e,n),Gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,i)}catch(i){await co(i)}}function Gw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Qw(t,e,n){const r=F(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Xw(t,r)})}function Xw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&($w(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),gf(t))}function qm(t,e,n){for(const r of n)r instanceof Ww?(t.ac.addReference(r.key,e),xR(t,r)):r instanceof qw?(O("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Xw(t,r.key)):U()}function xR(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.oc.add(r),gf(t))}function gf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new M(te.fromString(e)),r=t.fc.next();t.cc.set(r,new SR(n)),t.uc=t.uc.insert(n,r),Mw(t.remoteStore,new cr(ln(nf(n.path)),r,2,Jd.at))}}async function yo(t,e,n){const r=F(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=uf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ho(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function PR(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await xw(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(E.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.ji)}}function OR(t,e){const n=F(t),r=n.cc.get(e);if(r&&r.nc)return H().add(r.key);{let i=H();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function LR(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NR.bind(null,e),e.sc.zo=vR.bind(null,e.eventManager),e.sc.wc=wR.bind(null,e.eventManager),e}function MR(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class $R{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ql(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return zC(this.persistence,new BC,e.initialUser,this.It)}yc(e){return new FC(lf.Bs,this.It)}gc(e){return new XC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PR.bind(null,this.syncEngine),await mR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yR}createDatastore(e){const n=ql(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new eR(i));var i;return function(s,o,a,l){return new rR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Wm(this.syncEngine,a,0),o=jm.C()?new jm:new YC,new sR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new IR(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);O("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await go(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e,n){if(!n)throw new D(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UR(t,e,n,r){if(e===!0&&r===!0)throw new D(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Km(t){if(!M.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gm(t){if(M.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new D(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;class Xm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,UR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mk;switch(n.type){case"gapi":const r=n.client;return new wk(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qm.get(e);n&&(O("ComponentProvider","Removing Datastore"),Qm.delete(e),n.terminate())}(this),Promise.resolve()}}function FR(t,e,n,r={}){var i;const s=(t=zn(t,Xl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ph("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=be.MOCK_USER;else{o=Hv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new D(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}t._authCredentials=new gk(new J0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class vo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vo(this.firestore,e,this._query)}}class Mn extends vo{constructor(e,n,r){super(e,n,nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new M(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function Ni(t,e,...n){if(t=Ce(t),Yw("collection","path",e),t instanceof Xl){const r=te.fromString(e,...n);return Gm(r),new Mn(t,null,r)}{if(!(t instanceof rt||t instanceof Mn))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Gm(r),new Mn(t.firestore,null,r)}}function Yl(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=Z0.R()),Yw("doc","path",e),t instanceof Xl){const r=te.fromString(e,...n);return Km(r),new rt(t,null,new M(r))}{if(!(t instanceof rt||t instanceof Mn))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Km(r),new rt(t.firestore,t instanceof Mn?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=Z0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function BR(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zR(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>zm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>zm(e.remoteStore,s)),t.onlineComponents=e}async function zR(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await BR(t,new $R)),t.offlineComponents}async function Zw(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await jR(t,new bR)),t.onlineComponents}function HR(t){return Zw(t).then(e=>e.syncEngine)}async function e1(t){const e=await Zw(t),n=e.eventManager;return n.onListen=TR.bind(null,e.syncEngine),n.onUnlisten=CR.bind(null,e.syncEngine),n}function WR(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Jw({next:h=>{s.enqueueAndForget(()=>zw(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new D(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new D(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Hw(nf(o.path),u,{includeMetadataChanges:!0,ku:!0});return jw(i,c)}(await e1(t),t.asyncQueue,e,n,r)),r.promise}function qR(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Jw({next:h=>{s.enqueueAndForget(()=>zw(i,c)),h.fromCache&&a.source==="server"?l.reject(new D(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Hw(o,u,{includeMetadataChanges:!0,ku:!0});return jw(i,c)}(await e1(t),t.asyncQueue,e,n,r)),r.promise}class KR{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Ow(this,"async_queue_retry"),this.Wc=()=>{const n=Yu();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Zt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!ho(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ff.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class wo extends Xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new KR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||t1(this),this._firestoreClient.terminate()}}function GR(t,e){const n=typeof t=="object"?t:Ad(),r=typeof t=="string"?t:e||"(default)",i=kl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jv("firestore");s&&FR(i,...s)}return i}function yf(t){return t._firestoreClient||t1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function t1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Dk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new VR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(He.fromBase64String(e))}catch(n){throw new D(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=/^__.*__$/;class XR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function r1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return sl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(r1(this.sa)&&QR.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class YR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||ql(e)}da(e,n,r,i=!1){return new Ef({sa:e,methodName:n,fa:r,path:Fe.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function _f(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new YR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function i1(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);a1("Data must be an object, but it was:",o,r);const a=s1(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=ZR(e,h,n);if(!o.contains(d))throw new D(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tN(c,d)||c.push(d)}l=new bt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XR(new pt(a),l,u)}function JR(t,e,n,r=!1){return Sf(n,t.da(r?4:3,e))}function Sf(t,e){if(o1(t=Ce(t)))return a1("Unsupported field value:",e,t),s1(t,e);if(t instanceof n1)return function(n,r){if(!r1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Sf(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qk(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ve.fromDate(n);return{timestampValue:rl(r.It,i)}}if(n instanceof ve){const i=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rl(r.It,i)}}if(n instanceof wf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gi)return{bytesValue:Cw(r.It,n._byteString)};if(n instanceof rt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ql(n)}`)}(t,e)}function s1(t,e){const n={};return ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Sf(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function o1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof wf||t instanceof gi||t instanceof rt||t instanceof n1)}function a1(t,e,n){if(!o1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ql(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function ZR(t,e,n){if((e=Ce(e))instanceof vf)return e._internalPath;if(typeof e=="string")return l1(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const eN=new RegExp("[~\\*/\\[\\]]");function l1(t,e,n){if(e.search(eN)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vf(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(E.INVALID_ARGUMENT,a+t+l)}function tN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(If("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nN extends u1{data(){return super.data()}}function If(t,e){return typeof e=="string"?l1(t,e):e instanceof vf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iN{}function c1(t,...e){for(const n of e)t=n._apply(t);return t}class sN extends iN{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=_f(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Jm(c,u);const m=[];for(const y of c)m.push(Ym(a,i,y));h={arrayValue:{values:m}}}else h=Ym(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Jm(c,u),h=JR(o,s,c,u==="in"||u==="not-in");const d=Ge.create(l,u,h);return function(m,y){if(y.dt()){const T=ow(m);if(T!==null&&!T.isEqual(y.field))throw new D(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${y.field.toString()}'`);const p=sw(m);p!==null&&oN(m,y.field,p)}const v=function(T,p){for(const f of T.filters)if(p.indexOf(f.op)>=0)return f.op;return null}(m,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(v!==null)throw v===y.op?new D(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new D(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new vo(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new fo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function h1(t,e,n){const r=e,i=If("where",t);return new sN(i,r,n)}function Ym(t,e,n){if(typeof(n=Ce(n))=="string"){if(n==="")throw new D(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aw(e)&&n.indexOf("/")!==-1)throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!M.isDocumentKey(r))throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return km(t,new M(r))}if(n instanceof rt)return km(t,n._key);throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ql(n)}.`)}function Jm(t,e){if(!Array.isArray(t)||t.length===0)throw new D(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function oN(t,e,n){if(!n.isEqual(e))throw new D(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return ki(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wf(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Us(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);J(Dw(r));const i=new Fs(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f1 extends u1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(If("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fa extends f1{data(e={}){return super.data(e)}}class lN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fa(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:uN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){t=zn(t,rt);const e=zn(t.firestore,wo);return WR(yf(e),t._key).then(n=>dN(e,t,n))}class p1 extends aN{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function Tf(t){t=zn(t,vo);const e=zn(t.firestore,wo),n=yf(e),r=new p1(e);return rN(t._query),qR(n,t._query).then(i=>new lN(e,r,t,i))}function m1(t,e,n){t=zn(t,rt);const r=zn(t.firestore,wo),i=d1(t.converter,e,n);return g1(r,[i1(_f(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ut.none())])}function hN(t,e){const n=zn(t.firestore,wo),r=Yl(t),i=d1(t.converter,e);return g1(n,[i1(_f(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function g1(t,e){return function(n,r){const i=new Zt;return n.asyncQueue.enqueueAndForget(async()=>RR(await HR(n),r,i)),i.promise}(yf(t),e)}function dN(t,e,n){const r=n.docs.get(e._key),i=new p1(t);return new f1(t,i,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ti=n})(_i),wr(new Fn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new wo(new yk(n.getProvider("auth-internal")),new _k(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$t(Em,"3.7.1",t),$t(Em,"3.7.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="firebasestorage.googleapis.com",v1="storageBucket",fN=2*60*1e3,pN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends zt{constructor(e,n,r=0){super(Ju(e),`Firebase Storage: ${n} (${Ju(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ju(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ju(t){return"storage/"+t}function kf(){const t="An unknown error occurred, please check the error payload for server response.";return new de("unknown",t)}function mN(t){return new de("object-not-found","Object '"+t+"' does not exist.")}function gN(t){return new de("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de("unauthenticated",t)}function vN(){return new de("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function wN(t){return new de("unauthorized","User does not have permission to access '"+t+"'.")}function EN(){return new de("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _N(){return new de("canceled","User canceled the upload/download.")}function SN(t){return new de("invalid-url","Invalid URL '"+t+"'.")}function IN(t){return new de("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function TN(){return new de("no-default-bucket","No default bucket found. Did you set the '"+v1+"' property when initializing the app?")}function kN(){return new de("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function CN(){return new de("no-download-url","The given file does not have any download URLs.")}function kh(t){return new de("invalid-argument",t)}function w1(){return new de("app-deleted","The Firebase app was deleted.")}function RN(t){return new de("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ds(t,e){return new de("invalid-format","String does not match format '"+t+"': "+e)}function ji(t){throw new de("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(r.path==="")return r;throw IN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===y1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${T}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const k=g[w],C=k.regex.exec(e);if(C){const N=C[k.indices.bucket];let P=C[k.indices.path];P||(P=""),r=new ot(N,P),k.postModify(r);break}}if(r==null)throw SN(e);return r}}class NN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function d(){s&&clearTimeout(s)}function m(T,...p){if(u){d();return}if(T){d(),c.call(null,T,...p);return}if(l()||o){d(),c.call(null,T,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(T){y||(y=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function DN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){return t!==void 0}function PN(t){return typeof t=="object"&&!Array.isArray(t)}function Cf(t){return typeof t=="string"||t instanceof String}function Zm(t){return Rf()&&t instanceof Blob}function Rf(){return typeof Blob<"u"}function eg(t,e,n,r){if(r<e)throw kh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function E1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hr||(hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Qo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===hr.NO_ERROR,l=s.getStatus();if((!a||ON(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===hr.ABORT;r(!1,new Qo(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Qo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xN(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=kf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?w1():_N();o(l)}else{const l=EN();o(l)}};this.canceled_?n(!1,new Qo(!1,null,!0)):this.backoffId_=AN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $N(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function bN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FN(t,e,n,r,i,s,o=!0){const a=E1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return bN(u,e),MN(u,n),$N(u,s),UN(u,r),new LN(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BN(...t){const e=VN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rf())return new Blob(t);throw new de("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function jN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zu{constructor(e,n){this.data=e,this.contentType=n||null}}function HN(t,e){switch(t){case Ot.RAW:return new Zu(_1(e));case Ot.BASE64:case Ot.BASE64URL:return new Zu(S1(t,e));case Ot.DATA_URL:return new Zu(qN(e),KN(e))}throw kf()}function _1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WN(t){let e;try{e=decodeURIComponent(t)}catch{throw ds(Ot.DATA_URL,"Malformed data URL.")}return _1(e)}function S1(t,e){switch(t){case Ot.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ds(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ot.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ds(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zN(e)}catch{throw ds(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class I1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ds(Ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=GN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qN(t){const e=new I1(t);return e.base64?S1(Ot.BASE64,e.rest):WN(e.rest)}function KN(t){return new I1(t).contentType}function GN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){let r=0,i="";Zm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zm(this.data_)){const r=this.data_,i=jN(r,e,n);return i===null?null:new vn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vn(r,!0)}}static getBlob(...e){if(Rf()){const n=e.map(r=>r instanceof vn?r.data_:r);return new vn(BN.apply(null,n))}else{const n=e.map(o=>Cf(o)?HN(Ot.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new vn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){let e;try{e=JSON.parse(t)}catch{return null}return PN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function XN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function k1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t,e){return e}class We{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YN}}let Xo=null;function JN(t){return!Cf(t)||t.length<2?t:k1(t)}function C1(){if(Xo)return Xo;const t=[];t.push(new We("bucket")),t.push(new We("generation")),t.push(new We("metageneration")),t.push(new We("name","fullPath",!0));function e(s,o){return JN(o)}const n=new We("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new We("size");return i.xform=r,t.push(i),t.push(new We("timeCreated")),t.push(new We("updated")),t.push(new We("md5Hash",null,!0)),t.push(new We("cacheControl",null,!0)),t.push(new We("contentDisposition",null,!0)),t.push(new We("contentEncoding",null,!0)),t.push(new We("contentLanguage",null,!0)),t.push(new We("contentType",null,!0)),t.push(new We("metadata","customMetadata",!0)),Xo=t,Xo}function ZN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ot(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function eA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return ZN(r,t),r}function R1(t,e,n){const r=T1(e);return r===null?null:eA(t,r,n)}function tA(t,e,n,r){const i=T1(e);if(i===null||!Cf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Nf(d,n,r),y=E1({alt:"media",token:u});return m+y})[0]}function nA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class N1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){if(!t)throw kf()}function rA(t,e){function n(r,i){const s=R1(t,i,e);return A1(s!==null),s}return n}function iA(t,e){function n(r,i){const s=R1(t,i,e);return A1(s!==null),tA(s,i,t.host,t._protocol)}return n}function D1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vN():i=yN():n.getStatus()===402?i=gN(t.bucket):n.getStatus()===403?i=wN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function sA(t){const e=D1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=mN(t.path)),s.serverResponse=i.serverResponse,s}return n}function oA(t,e,n){const r=e.fullServerUrl(),i=Nf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new N1(i,s,iA(t,n),o);return a.errorHandler=sA(e),a}function aA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aA(null,e)),r}function uA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=lA(e,r,i),c=nA(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=vn.getBlob(h,r,d);if(m===null)throw kN();const y={name:u.fullPath},v=Nf(s,t.host,t._protocol),T="POST",p=t.maxUploadRetryTime,f=new N1(v,T,rA(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=D1(e),f}class cA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hA extends cA{initXhr(){this.xhr_.responseType="text"}}function x1(){return new hA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Sr(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return k1(this._location.path)}get storage(){return this._service}get parent(){const e=QN(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new Sr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RN(e)}}function dA(t,e,n){t._throwIfRoot("uploadBytes");const r=uA(t.storage,t._location,C1(),new vn(e,!0),n);return t.storage.makeRequestWithTokens(r,x1).then(i=>({metadata:i,ref:t}))}function fA(t){t._throwIfRoot("getDownloadURL");const e=oA(t.storage,t._location,C1());return t.storage.makeRequestWithTokens(e,x1).then(n=>{if(n===null)throw CN();return n})}function pA(t,e){const n=XN(t._location.path,e),r=new ot(t._location.bucket,n);return new Sr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){return/^[A-Za-z]+:\/\//.test(t)}function gA(t,e){return new Sr(t,e)}function P1(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw TN();const r=new Sr(n,n._bucket);return e!=null?P1(r,e):r}else return e!==void 0?pA(t,e):t}function yA(t,e){if(e&&mA(e)){if(t instanceof Af)return gA(t,e);throw kh("To use ref(service, url), the first argument must be a Storage instance.")}else return P1(t,e)}function tg(t,e){const n=e==null?void 0:e[v1];return n==null?null:ot.makeFromBucketSpec(n,t)}function vA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Hv(i,t.app.options.projectId))}class Af{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=y1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fN,this._maxUploadRetryTime=pN,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new NN(w1());{const o=FN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ng="@firebase/storage",rg="0.9.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="storage";function wA(t,e,n){return t=Ce(t),dA(t,e,n)}function EA(t){return t=Ce(t),fA(t)}function _A(t,e){return t=Ce(t),yA(t,e)}function SA(t=Ad(),e){t=Ce(t);const r=kl(t,O1).getImmediate({identifier:e}),i=jv("storage");return i&&IA(r,...i),r}function IA(t,e,n,r={}){vA(t,e,n,r)}function TA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Af(n,r,i,e,_i)}function kA(){wr(new Fn(O1,TA,"PUBLIC").setMultipleInstances(!0)),$t(ng,rg,""),$t(ng,rg,"esm2017")}kA();function Df(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CA=L1,M1=new Zs("auth","Firebase",L1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Rd("@firebase/auth");function pa(t,...e){ig.logLevel<=G.ERROR&&ig.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw xf(t,...e)}function Ft(t,...e){return xf(t,...e)}function $1(t,e,n){const r=Object.assign(Object.assign({},CA()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function RA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),$1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M1.create(t,...e)}function $(t,e,...n){if(!t)throw xf(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function cn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;function Yt(t){cn(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t,e){const n=kl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(za(s,e!=null?e:{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function AA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DA(){return og()==="http:"||og()==="https:"}function og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DA()||jS()||"connection"in navigator)?navigator.onLine:!0}function PA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=BS()||zS()}get(){return xA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new Eo(3e4,6e4);function MA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jl(t,e,n,r,i={}){return U1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=eo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),b1.fetch()(F1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function U1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OA),e);try{const i=new bA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $1(t,c,u);jt(t,c)}}catch(i){if(i instanceof zt)throw i;jt(t,"network-request-failed")}}async function $A(t,e,n,r,i={}){const s=await Jl(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pf(t.config,i):`${t.config.apiScheme}://${i}`}class bA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),LA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return Jl(t,"POST","/v1/accounts:delete",e)}async function FA(t,e){return Jl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),i=Of(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(ec(i.auth_time)),issuedAtTime:fs(ec(i.iat)),expirationTime:fs(ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function Of(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vv(r);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function BA(t){const e=Of(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&jA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,FA(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qA(s.providerUserInfo):[],a=WA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HA(t){const e=Ce(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qA(t){return t.map(e=>{var{providerId:n}=e,r=Df(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(t,e){const n=await U1(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",b1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ws;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return HA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,UA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:C,stsTokenManager:N}=n;$(g&&N,e,"internal-error");const P=Ws.fromJSON(this.name,N);$(typeof g=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),fn(m,e.name),fn(y,e.name),fn(v,e.name),fn(T,e.name),fn(p,e.name),fn(f,e.name);const Z=new dr({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(Z.providerData=C.map(z=>Object.assign({},z))),T&&(Z._redirectEventId=T),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const s=new dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ol(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B1.type="NONE";const ag=B1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ma(this.userKey,i.apiKey,s),this.fullPersistenceKey=ma("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Yt(ag),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(ag);const o=ma(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=dr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q1(e))return"Blackberry";if(K1(e))return"Webos";if(Lf(e))return"Safari";if((e.includes("chrome/")||z1(e))&&!e.includes("edge/"))return"Chrome";if(W1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j1(t=ze()){return/firefox\//i.test(t)}function Lf(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z1(t=ze()){return/crios\//i.test(t)}function H1(t=ze()){return/iemobile/i.test(t)}function W1(t=ze()){return/android/i.test(t)}function q1(t=ze()){return/blackberry/i.test(t)}function K1(t=ze()){return/webos/i.test(t)}function Zl(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GA(t=ze()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return HS()&&document.documentMode===10}function G1(t=ze()){return Zl(t)||W1(t)||K1(t)||q1(t)||/windows phone/i.test(t)||H1(t)}function XA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e=[]){let n;switch(t){case"Browser":n=lg(ze());break;case"Worker":n=`${lg(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new YA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ol(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ce(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function eu(t){return Ce(t)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=rI(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ZA(t,e,n){const r=eu(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=X1(e),{host:o,port:a}=eD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tD()}function X1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eD(t){const e=X1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cg(o)}}}function cg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return $A(t,"POST","/v1/accounts:signInWithIdp",MA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="http://localhost";class Ir extends Y1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Df(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:nD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends _o{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends _o{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends _o{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dr._fromIdTokenResponse(e,r,i),o=hg(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hg(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new al(e,n,r,i)}}function J1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(t,s,e,r):s})}async function rD(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Hs(t,J1(i,s,e,t),n);$(o.idToken,i,"internal-error");const a=Of(o.idToken);$(a,i,"internal-error");const{sub:l}=a;return $(t.uid===l,i,"user-mismatch"),yi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&jt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e,n=!1){const r="signIn",i=await J1(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oD(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function aD(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function lD(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function uD(t){return Ce(t).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(){const t=ze();return Lf(t)||Zl(t)}const hD=1e3,dD=10;class eE extends Z1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cD()&&XA(),this.fallbackToPolling=G1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const fD=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Z1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=$f("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function gD(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function yD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wD(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebaseLocalStorageDb",ED=1,ul="firebaseLocalStorage",sE="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([ul],e?"readwrite":"readonly").objectStore(ul)}function _D(){const t=indexedDB.deleteDatabase(iE);return new So(t).toPromise()}function Rh(){const t=indexedDB.open(iE,ED);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ul,{keyPath:sE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ul)?e(r):(r.close(),await _D(),e(await Rh()))})})}async function dg(t,e,n){const r=nu(t,!0).put({[sE]:e,value:n});return new So(r).toPromise()}async function SD(t,e){const n=nu(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function fg(t,e){const n=nu(t,!0).delete(e);return new So(n).toPromise()}const ID=800,TD=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(wD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yD(),!this.activeServiceWorker)return;this.sender=new mD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await dg(e,ll,"1"),await fg(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nu(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const kD=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CD().appendChild(r)})}function ND(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return e?Yt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Y1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AD(t){return sD(t.auth,new bf(t),t.bypassAuthState)}function DD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),iD(n,new bf(t),t.bypassAuthState)}async function xD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),rD(n,new bf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AD;case"linkViaPopup":case"linkViaRedirect":return xD;case"reauthViaPopup":case"reauthViaRedirect":return DD;default:jt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new Eo(2e3,1e4);async function OD(t,e,n){const r=eu(t);RA(t,e,Mf);const i=aE(r,n);return new or(r,"signInViaPopup",e,i).executeNotNull()}class or extends lE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PD.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="pendingRedirect",ga=new Map;class MD extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await $D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $D(t,e){const n=FD(e),r=UD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bD(t,e){ga.set(t._key(),e)}function UD(t){return Yt(t._redirectPersistence)}function FD(t){return ma(LD,t.config.apiKey,t.name)}async function VD(t,e,n=!1){const r=eu(t),i=aE(r,e),o=await new MD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=10*60*1e3;class jD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BD&&this.cachedEventUids.clear(),this.cachedEventUids.has(pg(e))}saveEventToCache(e){this.cachedEventUids.add(pg(e)),this.lastProcessedEventTime=Date.now()}}function pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e={}){return Jl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qD=/^https?/;async function KD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HD(t);for(const n of e)try{if(GD(n))return}catch{}jt(t,"unauthorized-domain")}function GD(t){const e=Ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qD.test(n))return!1;if(WD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=new Eo(3e4,6e4);function mg(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XD(t){return new Promise((e,n)=>{var r,i,s;function o(){mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(Ft(t,"network-request-failed"))},timeout:QD.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=ND("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},RD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ya=null,e})}let ya=null;function YD(t){return ya=ya||XD(t),ya}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new Eo(5e3,15e3),ZD="__/auth/iframe",ex="emulator/auth/iframe",tx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rx(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pf(e,ex):`https://${t.config.authDomain}/${ZD}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=nx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function ix(t){const e=await YD(t),n=Vt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:rx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},JD.get());function l(){Vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ox=500,ax=600,lx="_blank",ux="http://localhost";class gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cx(t,e,n,r=ox,i=ax){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=z1(u)?lx:n),j1(u)&&(e=e||ux,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(GA(u)&&a!=="_self")return hx(e||"",a),new gg(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new gg(h)}function hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="__/auth/handler",fx="emulator/auth/handler";function yg(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof Mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof _o){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${px(t)}?${eo(a).slice(1)}`}function px({config:t}){return t.emulator?Pf(t,fx):`https://${t.authDomain}/${dx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class mx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=VD,this._overrideRedirectResult=bD}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=yg(e,n,r,Ch(),i);return cx(e,o,$f())}async _openRedirect(e,n,r,i){return await this._originValidation(e),gD(yg(e,n,r,Ch(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ix(e),r=new jD(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G1()||Lf()||Zl()}}const gx=mx;var vg="@firebase/auth",wg="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wx(t){wr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q1(t)},c=new JA(a,l,u);return AA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new Fn("auth-internal",e=>{const n=eu(e.getProvider("auth").getImmediate());return(r=>new yx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(vg,wg,vx(t)),$t(vg,wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=5*60,_x=zv("authIdTokenMaxAge")||Ex;let Eg=null;const Sx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_x)return;const i=n==null?void 0:n.token;Eg!==i&&(Eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ix(t=Ad()){const e=kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NA(t,{popupRedirectResolver:gx,persistence:[kD,fD,nE]}),r=zv("authTokenSyncURL");if(r){const s=Sx(r);aD(n,s,()=>s(n.currentUser)),oD(n,o=>s(o))}const i=Bv("auth");return i&&ZA(n,`http://${i}`),n}wx("Browser");const Tx={apiKey:"AIzaSyBVbKwBHqeR5eEtvOl-gzfsvm5yqjjDl1M",authDomain:"fb-libres.firebaseapp.com",projectId:"fb-libres",storageBucket:"fb-libres.appspot.com",messagingSenderId:"646693414920",appId:"1:646693414920:web:0ac9decd2b04d4e00589bd"},Uf=Kv(Tx),kx=SA(Uf),Ar=GR(Uf),Ff=Ix(Uf);async function Cx(t){const e=_A(kx,crypto.randomUUID());return await wA(e,t),await EA(e)}async function Rx(t){const e=Yl(Ar,"users",t),n=await cN(e);return console.log(n),n.exists()}async function Nx(t){const e=[],n=Ni(Ar,"users"),r=c1(n,h1("username","==",t));return(await Tf(r)).forEach(s=>{e.push(s.data())}),e.length>0?e[0].uid:null}async function Ax(t){try{const e=Ni(Ar,"users"),n=Yl(e,t.id);await m1(n,t)}catch{}}async function Dx(t){try{const e=Ni(Ar,"users"),n=Yl(e,t.uid);await m1(n,t)}catch{}}const xx=t=>hN(Ni(Ar,"libros"),t);async function Px(){const t=await Tf(Ni(Ar,"libros")),e=[];return t.forEach(n=>{e.push({...n.data(),id:n.id})}),e}async function Ox(){await uD(Ff),localStorage.clear()}async function Lx(){const t=Ni(Ar,"libros"),e=c1(t,h1("libros","==",localStorage.getItem("userid"))),n=await Tf(e);return n.forEach(r=>{console.log(r.id," => ",r.data())}),n}var ru={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=L.exports,$x=Symbol.for("react.element"),bx=Symbol.for("react.fragment"),Ux=Object.prototype.hasOwnProperty,Fx=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vx={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ux.call(e,r)&&!Vx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$x,type:t,key:s,ref:o,props:i,_owner:Fx.current}}iu.Fragment=bx;iu.jsx=cE;iu.jsxs=cE;(function(t){t.exports=iu})(ru);const su=ru.exports.Fragment,I=ru.exports.jsx,wt=ru.exports.jsxs;function Bx({book:t}){return I("div",{className:"padre",children:I("div",{className:"contenedor",children:wt("figure",{children:[I("img",{src:t.img,alt:t.nombre}),wt("div",{className:"capa",children:[I("h1",{children:t.nombre}),I("p",{children:t.descriccion}),I("a",{target:"_blank",href:t.url,children:"Leer"})]})]})})})}/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qs.apply(this,arguments)}var Tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Tn||(Tn={}));const _g="popstate";function jx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ks(i)}return Wx(e,n,null,t)}function zx(){return Math.random().toString(36).substr(2,8)}function Sg(t){return{usr:t.state,key:t.key}}function Nh(t,e,n,r){return n===void 0&&(n=null),qs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ai(e):e,{state:n,key:e&&e.key||r||zx()})}function Ks(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hx(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Ks(t);return new URL(n,e)}function Wx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Tn.Pop,l=null;function u(){a=Tn.Pop,l&&l({action:a,location:d.location})}function c(m,y){a=Tn.Push;let v=Nh(d.location,m,y);n&&n(v,m);let T=Sg(v),p=d.createHref(v);try{o.pushState(T,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(m,y){a=Tn.Replace;let v=Nh(d.location,m,y);n&&n(v,m);let T=Sg(v),p=d.createHref(v);o.replaceState(T,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_g,u),l=m,()=>{i.removeEventListener(_g,u),l=null}},createHref(m){return e(i,m)},encodeLocation(m){let y=Hx(Ks(m));return qs({},m,{pathname:y.pathname,search:y.search,hash:y.hash})},push:c,replace:h,go(m){return o.go(m)}};return d}var Ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ig||(Ig={}));function qx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ai(e):e,i=dE(r.pathname||"/",n);if(i==null)return null;let s=hE(t);Kx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nP(s[a],sP(i));return o}function hE(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ee(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=$n([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),hE(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:eP(a,i.index),routesMeta:l})}),e}function Kx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gx=/^:\w+$/,Qx=3,Xx=2,Yx=1,Jx=10,Zx=-2,Tg=t=>t==="*";function eP(t,e){let n=t.split("/"),r=n.length;return n.some(Tg)&&(r+=Zx),e&&(r+=Xx),n.filter(i=>!Tg(i)).reduce((i,s)=>i+(Gx.test(s)?Qx:s===""?Yx:Jx),r)}function tP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=rP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:$n([i,c.pathname]),pathnameBase:uP($n([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=$n([i,c.pathnameBase]))}return s}function rP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=oP(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sP(t){try{return decodeURI(t)}catch(e){return Vf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oP(t,e){try{return decodeURIComponent(t)}catch(n){return Vf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function dE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ai(t):t;return{pathname:n?n.startsWith("/")?n:lP(n,e):e,search:cP(r),hash:hP(i)}}function lP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ai(t):(i=qs({},t),Ee(!i.pathname||!i.pathname.includes("?"),nc("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),nc("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),nc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=aP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const $n=t=>t.join("/").replace(/\/\/+/g,"/"),uP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dP{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function fP(t){return t instanceof dP}const pP=new Set(["POST","PUT","PATCH","DELETE"]);[...pP];/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ah(){return Ah=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ah.apply(this,arguments)}function mP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const gP=typeof Object.is=="function"?Object.is:mP,{useState:yP,useEffect:vP,useLayoutEffect:wP,useDebugValue:EP}=ic;function _P(t,e,n){const r=e(),[{inst:i},s]=yP({inst:{value:r,getSnapshot:e}});return wP(()=>{i.value=r,i.getSnapshot=e,rc(i)&&s({inst:i})},[t,r,e]),vP(()=>(rc(i)&&s({inst:i}),t(()=>{rc(i)&&s({inst:i})})),[t]),EP(r),r}function rc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!gP(n,r)}catch{return!0}}function SP(t,e,n){return e()}const IP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TP=!IP,kP=TP?SP:_P;"useSyncExternalStore"in ic&&(t=>t.useSyncExternalStore)(ic);const CP=L.exports.createContext(null),RP=L.exports.createContext(null),Bf=L.exports.createContext(null),jf=L.exports.createContext(null),ou=L.exports.createContext(null),Io=L.exports.createContext({outlet:null,matches:[]}),mE=L.exports.createContext(null);function NP(t,e){let{relative:n}=e===void 0?{}:e;Di()||Ee(!1);let{basename:r,navigator:i}=L.exports.useContext(jf),{hash:s,pathname:o,search:a}=gE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:$n([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Di(){return L.exports.useContext(ou)!=null}function au(){return Di()||Ee(!1),L.exports.useContext(ou).location}function Dr(){Di()||Ee(!1);let{basename:t,navigator:e}=L.exports.useContext(jf),{matches:n}=L.exports.useContext(Io),{pathname:r}=au(),i=JSON.stringify(fE(n).map(a=>a.pathnameBase)),s=L.exports.useRef(!1);return L.exports.useEffect(()=>{s.current=!0}),L.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=pE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:$n([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function gE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=L.exports.useContext(Io),{pathname:i}=au(),s=JSON.stringify(fE(r).map(o=>o.pathnameBase));return L.exports.useMemo(()=>pE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function AP(t,e){Di()||Ee(!1);let n=L.exports.useContext(Bf),{matches:r}=L.exports.useContext(Io),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=au(),l;if(e){var u;let y=typeof e=="string"?Ai(e):e;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||Ee(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=qx(t,{pathname:h}),m=OP(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:$n([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:$n([o,y.pathnameBase])})),r,n||void 0);return e&&m?I(ou.Provider,{value:{location:Ah({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Tn.Pop},children:m}):m}function DP(){let t=MP(),e=fP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return wt(su,{children:[I("h2",{children:"Unhandled Thrown Error!"}),I("h3",{style:{fontStyle:"italic"},children:e}),n?I("pre",{style:i,children:n}):null,I("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),wt("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",I("code",{style:s,children:"errorElement"})," props on\xA0",I("code",{style:s,children:"<Route>"})]})]})}class xP extends L.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I(mE.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function PP(t){let{routeContext:e,match:n,children:r}=t,i=L.exports.useContext(CP);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),I(Io.Provider,{value:e,children:r})}function OP(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ee(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||I(DP,{}):null,c=()=>I(PP,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?I(xP,{location:n.location,component:u,error:l,children:c()}):c()},null)}var kg;(function(t){t.UseRevalidator="useRevalidator"})(kg||(kg={}));var Dh;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Dh||(Dh={}));function LP(t){let e=L.exports.useContext(Bf);return e||Ee(!1),e}function MP(){var t;let e=L.exports.useContext(mE),n=LP(Dh.UseRouteError),r=L.exports.useContext(Io),i=r.matches[r.matches.length-1];return e||(r||Ee(!1),i.route.id||Ee(!1),(t=n.errors)==null?void 0:t[i.route.id])}function $P(t){let{to:e,replace:n,state:r,relative:i}=t;Di()||Ee(!1);let s=L.exports.useContext(Bf),o=Dr();return L.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function St(t){Ee(!1)}function bP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:s,static:o=!1}=t;Di()&&Ee(!1);let a=e.replace(/^\/*/,"/"),l=L.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ai(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=L.exports.useMemo(()=>{let v=dE(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:I(jf.Provider,{value:l,children:I(ou.Provider,{children:n,value:{location:y,navigationType:i}})})}function UP(t){let{children:e,location:n}=t,r=L.exports.useContext(RP),i=r&&!e?r.router.routes:xh(e);return AP(i,n)}var Cg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cg||(Cg={}));new Promise(()=>{});function xh(t,e){e===void 0&&(e=[]);let n=[];return L.exports.Children.forEach(t,(r,i)=>{if(!L.exports.isValidElement(r))return;if(r.type===L.exports.Fragment){n.push.apply(n,xh(r.props.children,e));return}r.type!==St&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=xh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function FP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function VP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BP(t,e){return t.button===0&&(!e||e==="_self")&&!VP(t)}const jP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function zP(t){let{basename:e,children:n,window:r}=t,i=L.exports.useRef();i.current==null&&(i.current=jx({window:r,v5Compat:!0}));let s=i.current,[o,a]=L.exports.useState({action:s.action,location:s.location});return L.exports.useLayoutEffect(()=>s.listen(a),[s]),I(bP,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const zi=L.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=FP(e,jP),d=NP(u,{relative:i}),m=HP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(v){r&&r(v),v.defaultPrevented||m(v)}return I("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})});var Rg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Rg||(Rg={}));var Ng;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ng||(Ng={}));function HP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Dr(),l=au(),u=gE(t,{relative:o});return L.exports.useCallback(c=>{if(BP(c,n)){c.preventDefault();let h=r!==void 0?r:Ks(l)===Ks(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function WP(){const[t,e]=L.exports.useState([]);return L.exports.useEffect(()=>{Px().then(e)},[]),I(su,{children:I("div",{className:"padre",children:t.map(n=>I(Bx,{book:n},n.id))})})}function yE({children:t,onUserLoggenIn:e,onUserNotLoggenIn:n,onUserNotRegistered:r}){const i=Dr();return L.exports.useState(null),L.exports.useEffect(()=>{lD(Ff,async s=>{s?await Rx(s.uid)?e(s):(await Ax({uid:s.uid,displayName:s.displayName,profilePicture:"",username:"",processCompleted:!1}),r(s)):n()})},[i,e,n,r]),I("div",{children:t})}function qP(t){const e=Dr(),[n,r]=L.exports.useState(0);async function i(){const l=new qt;await u(l);async function u(c){try{const h=await OD(Ff,c);console.log(h),localStorage.setItem("userid",h.user.uid)}catch(h){e("/Libres"),console.error(h)}}e("/Libres")}function s(l){e("/Dasboard")}function o(l){e("/Libres")}function a(l){r(4)}return n==2?I("div",{children:"Estas registrado y autenticado"}):n==3?I("div",{children:"Estas autenticado pero no registrado "}):n==4?I("div",{children:I("button",{onClick:i,children:"Login with Google"})}):n==5?I("div",{children:I("button",{onClick:i,children:"Login with Google"})}):I(yE,{onUserLoggenIn:s(),onUserNotRegistered:o,onUserNotLoggenIn:a})}function KP(t){const e=Dr();return L.exports.useEffect(()=>{Ox().then(()=>{alert("Sesion Cerrada")}).then(()=>{e("/Libres/login")})},[]),I("h1",{children:"Cargando"})}function GP(){alert("hola mundo")}function QP(){alert("hola")}function XP(){L.exports.useState([]);const e={userId:localStorage.getItem("userid")};return console.log(e),L.exports.useEffect(()=>{Lx()}),I(su,{})}function YP(){const t=Dr(),[e,n]=L.exports.useState(0),[r,i]=L.exports.useState({}),[s,o]=L.exports.useState("");function a(d){t("/")}function l(d){i(d),n(3)}function u(){t("/login")}function c(d){o(d.target.value)}async function h(){s!=""&&(Nx(s)?n(5):({...r},tmp.userName=s,await Dx(tmp)))}return e==3||e==5?wt("div",{children:[wt("h1",{children:["Bienbenido ",r.displayName]}),I("p",{children:"para terminar el proceso eliga un nombre de usuario"}),e==5?I("p",{children:"El nombre ya existe, escoge otro"}):"",I("div",{children:I("input",{type:"text",onChange:c})}),I("div",{children:I("button",{onClick:h,children:"continuar"})})]}):I(yE,{onUserLoggenIn:a,onUserNotRegistered:l,onUserNotLoggenIn:u})}function JP(){const[t,e]=L.exports.useState(null),[n,r]=L.exports.useState(""),i=Dr();return I(su,{children:I("section",{className:"contenedor",children:wt("form",{id:"formulario",onSubmit:async o=>{const a=new FormData(o.target);o.preventDefault();try{const l=await Cx(t);r(l);const u=a.get("nombre"),c=a.get("descriccion"),h=a.get("url"),d=l,m=localStorage.getItem("userid");await xx({nombre:u,descriccion:c,url:h,img:d,creadoPor:m}).then(i("/"))}catch(l){console.log(l)}},children:[I("label",{className:"nombre",children:"Inserta el titulo"}),I("input",{type:"text",name:"nombre",id:"nombre",required:!0}),I("label",{className:"descriccion",children:"Inserta la descriccion"}),I("input",{type:"text",name:"descriccion",id:"descriccion",required:!0}),wt("label",{className:"url",children:["Ingresa la url de la ubicacion del libro"," "]}),I("input",{type:"text",name:"url",id:"url",required:!0}),I("input",{type:"file",name:"",id:"file",required:!0,onChange:o=>e(o.target.files[0])}),I("button",{type:"submit",children:" Subir "})]})})})}function ZP(){return wt("header",{className:"menu",children:[I("h1",{className:"menu-title",children:" Cemas Library"}),wt("nav",{className:"menu-nav",children:[I("span",{className:"menu-nav__link",children:I(zi,{className:"menu-nav__link",to:"/",children:"Inicio"})}),I("span",{className:"menu-nav__link",children:I(zi,{className:"menu-nav__link",to:"/Libres/createBook",children:"Subir Libro"})}),I("span",{className:"menu-nav__link",children:I(zi,{className:"menu-nav__link",to:"/Libres/Documentation",children:"Documentacion"})}),I("span",{className:"menu-nav__link",children:I(zi,{className:"menu-nav__link",to:"/Libres/signout",children:"Cerrar Sesion"})}),I("span",{className:"menu-nav__link",children:I(zi,{className:"menu-nav__link",to:"/Libres/u/:username",children:"Perfil"})})]})]})}function eO(){return I("h1",{children:"hola"})}sc.createRoot(document.getElementById("root")).render(I("div",{id:"claroTema",children:wt(zP,{children:[I(ZP,{}),wt(UP,{children:[I(St,{path:"/",element:I($P,{to:"/Libres"})}),I(St,{path:"/Libres",element:I(WP,{})}),I(St,{path:"/Libres/login",element:I(qP,{})}),I(St,{path:"/Libres/Dasboard",element:I(GP,{})}),I(St,{path:"/Libres/signout",element:I(KP,{})}),I(St,{path:"/Libres/dashboar/profile",element:I(QP,{})}),I(St,{path:"/Libres/u/:username",element:I(XP,{})}),I(St,{path:"/Libres/choose-username",element:I(YP,{})}),I(St,{path:"/Libres/createBook",element:I(JP,{})}),I(St,{path:"/Libres/Documentation",element:I(eO,{})})]})]})}));
