(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var np={exports:{}},eu={};var yx;function $b(){if(yx)return eu;yx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:a,key:c,ref:s!==void 0?s:null,props:l}}return eu.Fragment=e,eu.jsx=n,eu.jsxs=n,eu}var Sx;function eT(){return Sx||(Sx=1,np.exports=$b()),np.exports}var W=eT(),ip={exports:{}},dt={};var Mx;function tT(){if(Mx)return dt;Mx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function x(z,te,me){this.props=z,this.context=te,this.refs=y,this.updater=me||b}x.prototype.isReactComponent={},x.prototype.setState=function(z,te){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,te,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=x.prototype;function C(z,te,me){this.props=z,this.context=te,this.refs=y,this.updater=me||b}var D=C.prototype=new R;D.constructor=C,M(D,x.prototype),D.isPureReactComponent=!0;var w=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function T(z,te,me){var Ee=me.ref;return{$$typeof:r,type:z,key:te,ref:Ee!==void 0?Ee:null,props:me}}function L(z,te){return T(z.type,te,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Z(z){var te={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(me){return te[me]})}var Y=/\/+/g;function se(z,te){return typeof z=="object"&&z!==null&&z.key!=null?Z(""+z.key):te.toString(36)}function ne(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(te){z.status==="pending"&&(z.status="fulfilled",z.value=te)},function(te){z.status==="pending"&&(z.status="rejected",z.reason=te)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,te,me,Ee,Ue){var ie=typeof z;(ie==="undefined"||ie==="boolean")&&(z=null);var he=!1;if(z===null)he=!0;else switch(ie){case"bigint":case"string":case"number":he=!0;break;case"object":switch(z.$$typeof){case r:case e:he=!0;break;case m:return he=z._init,F(he(z._payload),te,me,Ee,Ue)}}if(he)return Ue=Ue(z),he=Ee===""?"."+se(z,0):Ee,w(Ue)?(me="",he!=null&&(me=he.replace(Y,"$&/")+"/"),F(Ue,te,me,"",function(Be){return Be})):Ue!=null&&(G(Ue)&&(Ue=L(Ue,me+(Ue.key==null||z&&z.key===Ue.key?"":(""+Ue.key).replace(Y,"$&/")+"/")+he)),te.push(Ue)),1;he=0;var Re=Ee===""?".":Ee+":";if(w(z))for(var Pe=0;Pe<z.length;Pe++)Ee=z[Pe],ie=Re+se(Ee,Pe),he+=F(Ee,te,me,ie,Ue);else if(Pe=S(z),typeof Pe=="function")for(z=Pe.call(z),Pe=0;!(Ee=z.next()).done;)Ee=Ee.value,ie=Re+se(Ee,Pe++),he+=F(Ee,te,me,ie,Ue);else if(ie==="object"){if(typeof z.then=="function")return F(ne(z),te,me,Ee,Ue);throw te=String(z),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return he}function H(z,te,me){if(z==null)return z;var Ee=[],Ue=0;return F(z,Ee,"","",function(ie){return te.call(me,ie,Ue++)}),Ee}function J(z){if(z._status===-1){var te=z._result;te=te(),te.then(function(me){(z._status===0||z._status===-1)&&(z._status=1,z._result=me)},function(me){(z._status===0||z._status===-1)&&(z._status=2,z._result=me)}),z._status===-1&&(z._status=0,z._result=te)}if(z._status===1)return z._result.default;throw z._result}var ye=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xe={map:H,forEach:function(z,te,me){H(z,function(){te.apply(this,arguments)},me)},count:function(z){var te=0;return H(z,function(){te++}),te},toArray:function(z){return H(z,function(te){return te})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return dt.Activity=g,dt.Children=xe,dt.Component=x,dt.Fragment=n,dt.Profiler=s,dt.PureComponent=C,dt.StrictMode=a,dt.Suspense=d,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,dt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},dt.cache=function(z){return function(){return z.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(z,te,me){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ee=M({},z.props),Ue=z.key;if(te!=null)for(ie in te.key!==void 0&&(Ue=""+te.key),te)!B.call(te,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&te.ref===void 0||(Ee[ie]=te[ie]);var ie=arguments.length-2;if(ie===1)Ee.children=me;else if(1<ie){for(var he=Array(ie),Re=0;Re<ie;Re++)he[Re]=arguments[Re+2];Ee.children=he}return T(z.type,Ue,Ee)},dt.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},dt.createElement=function(z,te,me){var Ee,Ue={},ie=null;if(te!=null)for(Ee in te.key!==void 0&&(ie=""+te.key),te)B.call(te,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Ue[Ee]=te[Ee]);var he=arguments.length-2;if(he===1)Ue.children=me;else if(1<he){for(var Re=Array(he),Pe=0;Pe<he;Pe++)Re[Pe]=arguments[Pe+2];Ue.children=Re}if(z&&z.defaultProps)for(Ee in he=z.defaultProps,he)Ue[Ee]===void 0&&(Ue[Ee]=he[Ee]);return T(z,ie,Ue)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(z){return{$$typeof:f,render:z}},dt.isValidElement=G,dt.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:J}},dt.memo=function(z,te){return{$$typeof:h,type:z,compare:te===void 0?null:te}},dt.startTransition=function(z){var te=O.T,me={};O.T=me;try{var Ee=z(),Ue=O.S;Ue!==null&&Ue(me,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(P,ye)}catch(ie){ye(ie)}finally{te!==null&&me.types!==null&&(te.types=me.types),O.T=te}},dt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},dt.use=function(z){return O.H.use(z)},dt.useActionState=function(z,te,me){return O.H.useActionState(z,te,me)},dt.useCallback=function(z,te){return O.H.useCallback(z,te)},dt.useContext=function(z){return O.H.useContext(z)},dt.useDebugValue=function(){},dt.useDeferredValue=function(z,te){return O.H.useDeferredValue(z,te)},dt.useEffect=function(z,te){return O.H.useEffect(z,te)},dt.useEffectEvent=function(z){return O.H.useEffectEvent(z)},dt.useId=function(){return O.H.useId()},dt.useImperativeHandle=function(z,te,me){return O.H.useImperativeHandle(z,te,me)},dt.useInsertionEffect=function(z,te){return O.H.useInsertionEffect(z,te)},dt.useLayoutEffect=function(z,te){return O.H.useLayoutEffect(z,te)},dt.useMemo=function(z,te){return O.H.useMemo(z,te)},dt.useOptimistic=function(z,te){return O.H.useOptimistic(z,te)},dt.useReducer=function(z,te,me){return O.H.useReducer(z,te,me)},dt.useRef=function(z){return O.H.useRef(z)},dt.useState=function(z){return O.H.useState(z)},dt.useSyncExternalStore=function(z,te,me){return O.H.useSyncExternalStore(z,te,me)},dt.useTransition=function(){return O.H.useTransition()},dt.version="19.2.4",dt}var Ex;function s_(){return Ex||(Ex=1,ip.exports=tT()),ip.exports}var $=s_(),ap={exports:{}},tu={},rp={exports:{}},sp={};var bx;function nT(){return bx||(bx=1,(function(r){function e(F,H){var J=F.length;F.push(H);e:for(;0<J;){var ye=J-1>>>1,xe=F[ye];if(0<s(xe,H))F[ye]=H,F[J]=xe,J=ye;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;e:for(var ye=0,xe=F.length,z=xe>>>1;ye<z;){var te=2*(ye+1)-1,me=F[te],Ee=te+1,Ue=F[Ee];if(0>s(me,J))Ee<xe&&0>s(Ue,me)?(F[ye]=Ue,F[Ee]=J,ye=Ee):(F[ye]=me,F[te]=J,ye=te);else if(Ee<xe&&0>s(Ue,J))F[ye]=Ue,F[Ee]=J,ye=Ee;else break e}}return H}function s(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,g=null,v=3,S=!1,b=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var H=n(h);H!==null;){if(H.callback===null)a(h);else if(H.startTime<=F)a(h),H.sortIndex=H.expirationTime,e(d,H);else break;H=n(h)}}function w(F){if(M=!1,D(F),!b)if(n(d)!==null)b=!0,P||(P=!0,Z());else{var H=n(h);H!==null&&ne(w,H.startTime-F)}}var P=!1,O=-1,B=5,T=-1;function L(){return y?!0:!(r.unstable_now()-T<B)}function G(){if(y=!1,P){var F=r.unstable_now();T=F;var H=!0;try{e:{b=!1,M&&(M=!1,R(O),O=-1),S=!0;var J=v;try{t:{for(D(F),g=n(d);g!==null&&!(g.expirationTime>F&&L());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,v=g.priorityLevel;var xe=ye(g.expirationTime<=F);if(F=r.unstable_now(),typeof xe=="function"){g.callback=xe,D(F),H=!0;break t}g===n(d)&&a(d),D(F)}else a(d);g=n(d)}if(g!==null)H=!0;else{var z=n(h);z!==null&&ne(w,z.startTime-F),H=!1}}break e}finally{g=null,v=J,S=!1}H=void 0}}finally{H?Z():P=!1}}}var Z;if(typeof C=="function")Z=function(){C(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,se=Y.port2;Y.port1.onmessage=G,Z=function(){se.postMessage(null)}}else Z=function(){x(G,0)};function ne(F,H){O=x(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return F()}finally{v=J}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=v;v=F;try{return H()}finally{v=J}},r.unstable_scheduleCallback=function(F,H,J){var ye=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,F={id:m++,callback:H,priorityLevel:F,startTime:J,expirationTime:xe,sortIndex:-1},J>ye?(F.sortIndex=J,e(h,F),n(d)===null&&F===n(h)&&(M?(R(O),O=-1):M=!0,ne(w,J-ye))):(F.sortIndex=xe,e(d,F),b||S||(b=!0,P||(P=!0,Z()))),F},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(F){var H=v;return function(){var J=v;v=H;try{return F.apply(this,arguments)}finally{v=J}}}})(sp)),sp}var Tx;function iT(){return Tx||(Tx=1,rp.exports=nT()),rp.exports}var op={exports:{}},Xn={};var Ax;function aT(){if(Ax)return Xn;Ax=1;var r=s_();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:h,implementation:m}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},Xn.flushSync=function(d){var h=c.T,m=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=h,a.p=m,a.d.f()}},Xn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},Xn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Xn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):m==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Xn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},Xn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Xn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},Xn.requestFormReset=function(d){a.d.r(d)},Xn.unstable_batchedUpdates=function(d,h){return d(h)},Xn.useFormState=function(d,h,m){return c.H.useFormState(d,h,m)},Xn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Xn.version="19.2.4",Xn}var Rx;function rT(){if(Rx)return op.exports;Rx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),op.exports=aT(),op.exports}var Cx;function sT(){if(Cx)return tu;Cx=1;var r=iT(),e=s_(),n=rT();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(l(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var o=t,u=i;;){var p=o.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===o)return d(p),t;if(_===u)return d(p),i;_=_.sibling}throw Error(a(188))}if(o.return!==u.return)o=p,u=_;else{for(var E=!1,U=p.child;U;){if(U===o){E=!0,o=p,u=_;break}if(U===u){E=!0,u=p,o=_;break}U=U.sibling}if(!E){for(U=_.child;U;){if(U===o){E=!0,o=_,u=p;break}if(U===u){E=!0,u=_,o=p;break}U=U.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?t:i}function m(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=m(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Y?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case w:return"Suspense";case P:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case C:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case B:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}var ne=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ye=[],xe=-1;function z(t){return{current:t}}function te(t){0>xe||(t.current=ye[xe],ye[xe]=null,xe--)}function me(t,i){xe++,ye[xe]=t.current,t.current=i}var Ee=z(null),Ue=z(null),ie=z(null),he=z(null);function Re(t,i){switch(me(ie,i),me(Ue,t),me(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?kv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=kv(i),t=Xv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ee),me(Ee,t)}function Pe(){te(Ee),te(Ue),te(ie)}function Be(t){t.memoizedState!==null&&me(he,t);var i=Ee.current,o=Xv(i,t.type);i!==o&&(me(Ue,t),me(Ee,o))}function it(t){Ue.current===t&&(te(Ee),te(Ue)),he.current===t&&(te(he),Kl._currentValue=J)}var Te,Le;function ke(t){if(Te===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Te=i&&i[1]||"",Le=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Te+t+Le}var rt=!1;function et(t,i){if(!t||rt)return"";rt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(fe){var le=fe}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(fe){le=fe}t.call(ve.prototype)}}else{try{throw Error()}catch(fe){le=fe}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),E=_[0],U=_[1];if(E&&U){var V=E.split(`
`),re=U.split(`
`);for(p=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;p<re.length&&!re[p].includes("DetermineComponentFrameRoot");)p++;if(u===V.length||p===re.length)for(u=V.length-1,p=re.length-1;1<=u&&0<=p&&V[u]!==re[p];)p--;for(;1<=u&&0<=p;u--,p--)if(V[u]!==re[p]){if(u!==1||p!==1)do if(u--,p--,0>p||V[u]!==re[p]){var pe=`
`+V[u].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=u&&0<=p);break}}}finally{rt=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?ke(o):""}function _t(t,i){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return t.child!==i&&i!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return ke("Activity");default:return""}}function k(t){try{var i="",o=null;do i+=_t(t,o),o=t,t=t.return;while(t);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var St=Object.prototype.hasOwnProperty,ct=r.unstable_scheduleCallback,wt=r.unstable_cancelCallback,qe=r.unstable_shouldYield,I=r.unstable_requestPaint,A=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,Me=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,$e=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,Ze=r.log,lt=r.unstable_setDisableYieldValue,Ae=null,Ce=null;function Xe(t){if(typeof Ze=="function"&&lt(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,t)}catch{}}var Ge=Math.clz32?Math.clz32:q,Oe=Math.log,gt=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Oe(t)/gt|0)|0}var ze=256,we=262144,Ve=4194304;function be(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,o){var u=t.pendingLanes;if(u===0)return 0;var p=0,_=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var U=u&134217727;return U!==0?(u=U&~_,u!==0?p=be(u):(E&=U,E!==0?p=be(E):o||(o=U&~t,o!==0&&(p=be(o))))):(U=u&~_,U!==0?p=be(U):E!==0?p=be(E):o||(o=u&~t,o!==0&&(p=be(o)))),p===0?0:i!==0&&i!==p&&(i&_)===0&&(_=p&-p,o=i&-i,_>=o||_===32&&(o&4194048)!==0)?i:p}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ft(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),t}function Ut(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function kn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ji(t,i,o,u,p,_){var E=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var U=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(o=E&~o;0<o;){var pe=31-Ge(o),ve=1<<pe;U[pe]=0,V[pe]=-1;var le=re[pe];if(le!==null)for(re[pe]=null,pe=0;pe<le.length;pe++){var fe=le[pe];fe!==null&&(fe.lane&=-536870913)}o&=~ve}u!==0&&Bu(t,u,0),_!==0&&p===0&&t.tag!==0&&(t.suspendedLanes|=_&~(E&~i))}function Bu(t,i,o){t.pendingLanes|=i,t.suspendedLanes&=~i;var u=31-Ge(i);t.entangledLanes|=i,t.entanglements[u]=t.entanglements[u]|1073741824|o&261930}function ll(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Ge(o),p=1<<u;p&i|t[u]&i&&(t[u]|=i),o&=~p}}function Vs(t,i){var o=i&-i;return o=(o&42)!==0?1:ul(o),(o&(t.suspendedLanes|i))!==0?0:o}function ul(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ks(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function cl(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:dx(t.type))}function oa(t,i){var o=H.p;try{return H.p=t,i()}finally{H.p=o}}var Di=Math.random().toString(36).slice(2),_n="__reactFiber$"+Di,Un="__reactProps$"+Di,Zi="__reactContainer$"+Di,Xs="__reactEvents$"+Di,Ws="__reactListeners$"+Di,Hu="__reactHandles$"+Di,fl="__reactResources$"+Di,ns="__reactMarker$"+Di;function hl(t){delete t[_n],delete t[Un],delete t[Xs],delete t[Ws],delete t[Hu]}function fr(t){var i=t[_n];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Zi]||o[_n]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Qv(t);t!==null;){if(o=t[_n])return o;t=Qv(t)}return i}t=o,o=t.parentNode}return null}function hr(t){if(t=t[_n]||t[Zi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function is(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function dr(t){var i=t[fl];return i||(i=t[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function N(t){t[ns]=!0}var K=new Set,ce={};function oe(t,i){ee(t,i),ee(t+"Capture",i)}function ee(t,i){for(ce[t]=i,t=0;t<i.length;t++)K.add(i[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),We={},Ie={};function Ye(t){return St.call(Ie,t)?!0:St.call(We,t)?!1:Fe.test(t)?Ie[t]=!0:(We[t]=!0,!1)}function Ke(t,i,o){if(Ye(i))if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+o)}}function at(t,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+o)}}function Qe(t,i,o,u){if(u===null)t.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(i,o,""+u)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tn(t,i,o){var u=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,_=u.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,_.call(this,E)}}),Object.defineProperty(t,i,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Jt(t){if(!t._valueTracker){var i=Ft(t)?"checked":"value";t._valueTracker=tn(t,i,""+t[i])}}function Bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ft(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function ht(t){return t.replace(zt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ln(t,i,o,u,p,_,E,U){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+st(i)):t.value!==""+st(i)&&(t.value=""+st(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Nn(t,E,st(i)):o!=null?Nn(t,E,st(o)):u!=null&&t.removeAttribute("value"),p==null&&_!=null&&(t.defaultChecked=!!_),p!=null&&(t.checked=p&&typeof p!="function"&&typeof p!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+st(U):t.removeAttribute("name")}function Aa(t,i,o,u,p,_,E,U){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.type=_),i!=null||o!=null){if(!(_!=="submit"&&_!=="reset"||i!=null)){Jt(t);return}o=o!=null?""+st(o):"",i=i!=null?""+st(i):o,U||i===t.value||(t.value=i),t.defaultValue=i}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,t.checked=U?t.checked:!!u,t.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Jt(t)}function Nn(t,i,o){i==="number"&&tt(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function Ui(t,i,o,u){if(t=t.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<t.length;o++)p=i.hasOwnProperty("$"+t[o].value),t[o].selected!==p&&(t[o].selected=p),p&&u&&(t[o].defaultSelected=!0)}else{for(o=""+st(o),i=null,p=0;p<t.length;p++){if(t[p].value===o){t[p].selected=!0,u&&(t[p].defaultSelected=!0);return}i!==null||t[p].disabled||(i=t[p])}i!==null&&(i.selected=!0)}}function Gt(t,i,o){if(i!=null&&(i=""+st(i),i!==t.value&&(t.value=i),o==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=o!=null?""+st(o):""}function On(t,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(ne(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=st(i),t.defaultValue=o,u=t.textContent,u===o&&u!==""&&u!==null&&(t.value=u),Jt(t)}function bn(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Pn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fn(t,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":u?t.setProperty(i,o):typeof o!="number"||o===0||Pn.has(i)?i==="float"?t.cssFloat=o:t[i]=(""+o).trim():t[i]=o+"px"}function qs(t,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?t.setProperty(u,""):u==="float"?t.cssFloat="":t[u]="");for(var p in i)u=i[p],i.hasOwnProperty(p)&&o[p]!==u&&Fn(t,p,u)}else for(var _ in i)i.hasOwnProperty(_)&&Fn(t,_,i[_])}function Ki(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gu(t){return KM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ra(){}var $f=null;function eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ys=null,js=null;function V_(t){var i=hr(t);if(i&&(t=i.stateNode)){var o=t[Un]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ln(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ht(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var p=u[Un]||null;if(!p)throw Error(a(90));Ln(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===t.form&&Bt(u)}break e;case"textarea":Gt(t,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&Ui(t,!!o.multiple,i,!1)}}}var th=!1;function k_(t,i,o){if(th)return t(i,o);th=!0;try{var u=t(i);return u}finally{if(th=!1,(Ys!==null||js!==null)&&(Cc(),Ys&&(i=Ys,t=js,js=Ys=null,V_(i),t)))for(i=0;i<t.length;i++)V_(t[i])}}function dl(t,i){var o=t.stateNode;if(o===null)return null;var u=o[Un]||null;if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=!1;if(Ca)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){nh=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{nh=!1}var pr=null,ih=null,Vu=null;function X_(){if(Vu)return Vu;var t,i=ih,o=i.length,u,p="value"in pr?pr.value:pr.textContent,_=p.length;for(t=0;t<o&&i[t]===p[t];t++);var E=o-t;for(u=1;u<=E&&i[o-u]===p[_-u];u++);return Vu=p.slice(t,1<u?1-u:void 0)}function ku(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function W_(){return!1}function ei(t){function i(o,u,p,_,E){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Xu:W_,this.isPropagationStopped=W_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=ei(as),ml=g({},as,{view:0,detail:0}),QM=ei(ml),ah,rh,_l,qu=g({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_l&&(_l&&t.type==="mousemove"?(ah=t.screenX-_l.screenX,rh=t.screenY-_l.screenY):rh=ah=0,_l=t),ah)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),q_=ei(qu),JM=g({},qu,{dataTransfer:0}),$M=ei(JM),eE=g({},ml,{relatedTarget:0}),sh=ei(eE),tE=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=ei(tE),iE=g({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aE=ei(iE),rE=g({},as,{data:0}),Y_=ei(rE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lE[t])?!!i[t]:!1}function oh(){return uE}var cE=g({},ml,{key:function(t){if(t.key){var i=sE[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fE=ei(cE),hE=g({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j_=ei(hE),dE=g({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),pE=ei(dE),mE=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=ei(mE),gE=g({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=ei(gE),xE=g({},as,{newState:0,oldState:0}),yE=ei(xE),SE=[9,13,27,32],lh=Ca&&"CompositionEvent"in window,gl=null;Ca&&"documentMode"in document&&(gl=document.documentMode);var ME=Ca&&"TextEvent"in window&&!gl,Z_=Ca&&(!lh||gl&&8<gl&&11>=gl),K_=" ",Q_=!1;function J_(t,i){switch(t){case"keyup":return SE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function EE(t,i){switch(t){case"compositionend":return $_(i);case"keypress":return i.which!==32?null:(Q_=!0,K_);case"textInput":return t=i.data,t===K_&&Q_?null:t;default:return null}}function bE(t,i){if(Zs)return t==="compositionend"||!lh&&J_(t,i)?(t=X_(),Vu=ih=pr=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Z_&&i.locale!=="ko"?null:i.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!TE[t.type]:i==="textarea"}function tg(t,i,o,u){Ys?js?js.push(u):js=[u]:Ys=u,i=Pc(i,"onChange"),0<i.length&&(o=new Wu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var vl=null,xl=null;function AE(t){zv(t,0)}function Yu(t){var i=is(t);if(Bt(i))return t}function ng(t,i){if(t==="change")return i}var ig=!1;if(Ca){var uh;if(Ca){var ch="oninput"in document;if(!ch){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),ch=typeof ag.oninput=="function"}uh=ch}else uh=!1;ig=uh&&(!document.documentMode||9<document.documentMode)}function rg(){vl&&(vl.detachEvent("onpropertychange",sg),xl=vl=null)}function sg(t){if(t.propertyName==="value"&&Yu(xl)){var i=[];tg(i,xl,t,eh(t)),k_(AE,i)}}function RE(t,i,o){t==="focusin"?(rg(),vl=i,xl=o,vl.attachEvent("onpropertychange",sg)):t==="focusout"&&rg()}function CE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(xl)}function wE(t,i){if(t==="click")return Yu(i)}function DE(t,i){if(t==="input"||t==="change")return Yu(i)}function UE(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var di=typeof Object.is=="function"?Object.is:UE;function yl(t,i){if(di(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!St.call(i,p)||!di(t[p],i[p]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,i){var o=og(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=og(o)}}function ug(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ug(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function cg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=tt(t.document);i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=tt(t.document)}return i}function fh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var LE=Ca&&"documentMode"in document&&11>=document.documentMode,Ks=null,hh=null,Sl=null,dh=!1;function fg(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;dh||Ks==null||Ks!==tt(u)||(u=Ks,"selectionStart"in u&&fh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Sl&&yl(Sl,u)||(Sl=u,u=Pc(hh,"onSelect"),0<u.length&&(i=new Wu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Ks)))}function rs(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Qs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},ph={},hg={};Ca&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ss(t){if(ph[t])return ph[t];if(!Qs[t])return t;var i=Qs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in hg)return ph[t]=i[o];return t}var dg=ss("animationend"),pg=ss("animationiteration"),mg=ss("animationstart"),NE=ss("transitionrun"),OE=ss("transitionstart"),PE=ss("transitioncancel"),_g=ss("transitionend"),gg=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function Qi(t,i){gg.set(t,i),oe(i,[t])}var ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Li=[],Js=0,_h=0;function Zu(){for(var t=Js,i=_h=Js=0;i<t;){var o=Li[i];Li[i++]=null;var u=Li[i];Li[i++]=null;var p=Li[i];Li[i++]=null;var _=Li[i];if(Li[i++]=null,u!==null&&p!==null){var E=u.pending;E===null?p.next=p:(p.next=E.next,E.next=p),u.pending=p}_!==0&&vg(o,p,_)}}function Ku(t,i,o,u){Li[Js++]=t,Li[Js++]=i,Li[Js++]=o,Li[Js++]=u,_h|=u,t.lanes|=u,t=t.alternate,t!==null&&(t.lanes|=u)}function gh(t,i,o,u){return Ku(t,i,o,u),Qu(t)}function os(t,i){return Ku(t,null,null,i),Qu(t)}function vg(t,i,o){t.lanes|=o;var u=t.alternate;u!==null&&(u.lanes|=o);for(var p=!1,_=t.return;_!==null;)_.childLanes|=o,u=_.alternate,u!==null&&(u.childLanes|=o),_.tag===22&&(t=_.stateNode,t===null||t._visibility&1||(p=!0)),t=_,_=_.return;return t.tag===3?(_=t.stateNode,p&&i!==null&&(p=31-Ge(o),t=_.hiddenUpdates,u=t[p],u===null?t[p]=[i]:u.push(i),i.lane=o|536870912),_):null}function Qu(t){if(50<kl)throw kl=0,Ad=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var $s={};function FE(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,o,u){return new FE(t,i,o,u)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,i){var o=t.alternate;return o===null?(o=pi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function xg(t,i){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,i=o.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ju(t,i,o,u,p,_){var E=0;if(u=t,typeof t=="function")vh(t)&&(E=1);else if(typeof t=="string")E=Gb(t,o,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=pi(31,o,i,p),t.elementType=T,t.lanes=_,t;case M:return ls(o.children,p,_,i);case y:E=8,p|=24;break;case x:return t=pi(12,o,i,p|2),t.elementType=x,t.lanes=_,t;case w:return t=pi(13,o,i,p),t.elementType=w,t.lanes=_,t;case P:return t=pi(19,o,i,p),t.elementType=P,t.lanes=_,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case R:E=9;break e;case D:E=11;break e;case O:E=14;break e;case B:E=16,u=null;break e}E=29,o=Error(a(130,t===null?"null":typeof t,"")),u=null}return i=pi(E,o,i,p),i.elementType=t,i.type=u,i.lanes=_,i}function ls(t,i,o,u){return t=pi(7,t,u,i),t.lanes=o,t}function xh(t,i,o){return t=pi(6,t,null,i),t.lanes=o,t}function yg(t){var i=pi(18,null,null,0);return i.stateNode=t,i}function yh(t,i,o){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Sg=new WeakMap;function Ni(t,i){if(typeof t=="object"&&t!==null){var o=Sg.get(t);return o!==void 0?o:(i={value:t,source:i,stack:k(i)},Sg.set(t,i),i)}return{value:t,source:i,stack:k(i)}}var eo=[],to=0,$u=null,Ml=0,Oi=[],Pi=0,mr=null,la=1,ua="";function Da(t,i){eo[to++]=Ml,eo[to++]=$u,$u=t,Ml=i}function Mg(t,i,o){Oi[Pi++]=la,Oi[Pi++]=ua,Oi[Pi++]=mr,mr=t;var u=la;t=ua;var p=32-Ge(u)-1;u&=~(1<<p),o+=1;var _=32-Ge(i)+p;if(30<_){var E=p-p%5;_=(u&(1<<E)-1).toString(32),u>>=E,p-=E,la=1<<32-Ge(i)+p|o<<p|u,ua=_+t}else la=1<<_|o<<p|u,ua=t}function Sh(t){t.return!==null&&(Da(t,1),Mg(t,1,0))}function Mh(t){for(;t===$u;)$u=eo[--to],eo[to]=null,Ml=eo[--to],eo[to]=null;for(;t===mr;)mr=Oi[--Pi],Oi[Pi]=null,ua=Oi[--Pi],Oi[Pi]=null,la=Oi[--Pi],Oi[Pi]=null}function Eg(t,i){Oi[Pi++]=la,Oi[Pi++]=ua,Oi[Pi++]=mr,la=i.id,ua=i.overflow,mr=t}var zn=null,$t=null,At=!1,_r=null,Fi=!1,Eh=Error(a(519));function gr(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(Ni(i,t)),Eh}function bg(t){var i=t.stateNode,o=t.type,u=t.memoizedProps;switch(i[_n]=t,i[Un]=u,o){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(o=0;o<Wl.length;o++)Et(Wl[o],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),Aa(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),On(i,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||Gv(i.textContent,o)?(u.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),u.onScroll!=null&&Et("scroll",i),u.onScrollEnd!=null&&Et("scrollend",i),u.onClick!=null&&(i.onclick=Ra),i=!0):i=!1,i||gr(t,!0)}function Tg(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:zn=zn.return}}function no(t){if(t!==zn)return!1;if(!At)return Tg(t),At=!0,!1;var i=t.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||Gd(t.type,t.memoizedProps)),o=!o),o&&$t&&gr(t),Tg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Kv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Kv(t)}else i===27?(i=$t,Ur(t.type)?(t=qd,qd=null,$t=t):$t=i):$t=zn?Ii(t.stateNode.nextSibling):null;return!0}function us(){$t=zn=null,At=!1}function bh(){var t=_r;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),_r=null),t}function El(t){_r===null?_r=[t]:_r.push(t)}var Th=z(null),cs=null,Ua=null;function vr(t,i,o){me(Th,i._currentValue),i._currentValue=o}function La(t){t._currentValue=Th.current,te(Th)}function Ah(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Rh(t,i,o,u){var p=t.child;for(p!==null&&(p.return=t);p!==null;){var _=p.dependencies;if(_!==null){var E=p.child;_=_.firstContext;e:for(;_!==null;){var U=_;_=p;for(var V=0;V<i.length;V++)if(U.context===i[V]){_.lanes|=o,U=_.alternate,U!==null&&(U.lanes|=o),Ah(_.return,o,t),u||(E=null);break e}_=U.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(a(341));E.lanes|=o,_=E.alternate,_!==null&&(_.lanes|=o),Ah(E,o,t),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===t){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function io(t,i,o,u){t=null;for(var p=i,_=!1;p!==null;){if(!_){if((p.flags&524288)!==0)_=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var U=p.type;di(p.pendingProps.value,E.value)||(t!==null?t.push(U):t=[U])}}else if(p===he.current){if(E=p.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(t!==null?t.push(Kl):t=[Kl])}p=p.return}t!==null&&Rh(i,t,o,u),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!di(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){cs=t,Ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Ag(cs,t)}function tc(t,i){return cs===null&&fs(t),Ag(t,i)}function Ag(t,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Ua===null){if(t===null)throw Error(a(308));Ua=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ua=Ua.next=i;return o}var zE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(o,u){t.push(u)}};this.abort=function(){i.aborted=!0,t.forEach(function(o){return o()})}},IE=r.unstable_scheduleCallback,BE=r.unstable_NormalPriority,gn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new zE,data:new Map,refCount:0}}function bl(t){t.refCount--,t.refCount===0&&IE(BE,function(){t.controller.abort()})}var Tl=null,wh=0,ao=0,ro=null;function HE(t,i){if(Tl===null){var o=Tl=[];wh=0,ao=Ld(),ro={status:"pending",value:void 0,then:function(u){o.push(u)}}}return wh++,i.then(Rg,Rg),i}function Rg(){if(--wh===0&&Tl!==null){ro!==null&&(ro.status="fulfilled");var t=Tl;Tl=null,ao=0,ro=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function GE(t,i){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return t.then(function(){u.status="fulfilled",u.value=i;for(var p=0;p<o.length;p++)(0,o[p])(i)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var Cg=F.S;F.S=function(t,i){fv=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HE(t,i),Cg!==null&&Cg(t,i)};var hs=z(null);function Dh(){var t=hs.current;return t!==null?t:Zt.pooledCache}function nc(t,i){i===null?me(hs,hs.current):me(hs,i.pool)}function wg(){var t=Dh();return t===null?null:{parent:gn._currentValue,pool:t}}var so=Error(a(460)),Uh=Error(a(474)),ic=Error(a(542)),ac={then:function(){}};function Dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ug(t,i,o){switch(o=t[o],o===void 0?t.push(i):o!==i&&(i.then(Ra,Ra),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ng(t),t;default:if(typeof i.status=="string")i.then(Ra,Ra);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(u){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=u}},function(u){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ng(t),t}throw ps=i,so}}function ds(t){try{var i=t._init;return i(t._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(ps=o,so):o}}var ps=null;function Lg(){if(ps===null)throw Error(a(459));var t=ps;return ps=null,t}function Ng(t){if(t===so||t===ic)throw Error(a(483))}var oo=null,Al=0;function rc(t){var i=Al;return Al+=1,oo===null&&(oo=[]),Ug(oo,t,i)}function Rl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function sc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Og(t){function i(Q,X){if(t){var ae=Q.deletions;ae===null?(Q.deletions=[X],Q.flags|=16):ae.push(X)}}function o(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function u(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function p(Q,X){return Q=wa(Q,X),Q.index=0,Q.sibling=null,Q}function _(Q,X,ae){return Q.index=ae,t?(ae=Q.alternate,ae!==null?(ae=ae.index,ae<X?(Q.flags|=67108866,X):ae):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function U(Q,X,ae,ge){return X===null||X.tag!==6?(X=xh(ae,Q.mode,ge),X.return=Q,X):(X=p(X,ae),X.return=Q,X)}function V(Q,X,ae,ge){var nt=ae.type;return nt===M?pe(Q,X,ae.props.children,ge,ae.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===B&&ds(nt)===X.type)?(X=p(X,ae.props),Rl(X,ae),X.return=Q,X):(X=Ju(ae.type,ae.key,ae.props,null,Q.mode,ge),Rl(X,ae),X.return=Q,X)}function re(Q,X,ae,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=yh(ae,Q.mode,ge),X.return=Q,X):(X=p(X,ae.children||[]),X.return=Q,X)}function pe(Q,X,ae,ge,nt){return X===null||X.tag!==7?(X=ls(ae,Q.mode,ge,nt),X.return=Q,X):(X=p(X,ae),X.return=Q,X)}function ve(Q,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=xh(""+X,Q.mode,ae),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ae=Ju(X.type,X.key,X.props,null,Q.mode,ae),Rl(ae,X),ae.return=Q,ae;case b:return X=yh(X,Q.mode,ae),X.return=Q,X;case B:return X=ds(X),ve(Q,X,ae)}if(ne(X)||Z(X))return X=ls(X,Q.mode,ae,null),X.return=Q,X;if(typeof X.then=="function")return ve(Q,rc(X),ae);if(X.$$typeof===C)return ve(Q,tc(Q,X),ae);sc(Q,X)}return null}function le(Q,X,ae,ge){var nt=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return nt!==null?null:U(Q,X,""+ae,ge);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:return ae.key===nt?V(Q,X,ae,ge):null;case b:return ae.key===nt?re(Q,X,ae,ge):null;case B:return ae=ds(ae),le(Q,X,ae,ge)}if(ne(ae)||Z(ae))return nt!==null?null:pe(Q,X,ae,ge,null);if(typeof ae.then=="function")return le(Q,X,rc(ae),ge);if(ae.$$typeof===C)return le(Q,X,tc(Q,ae),ge);sc(Q,ae)}return null}function fe(Q,X,ae,ge,nt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Q=Q.get(ae)||null,U(X,Q,""+ge,nt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return Q=Q.get(ge.key===null?ae:ge.key)||null,V(X,Q,ge,nt);case b:return Q=Q.get(ge.key===null?ae:ge.key)||null,re(X,Q,ge,nt);case B:return ge=ds(ge),fe(Q,X,ae,ge,nt)}if(ne(ge)||Z(ge))return Q=Q.get(ae)||null,pe(X,Q,ge,nt,null);if(typeof ge.then=="function")return fe(Q,X,ae,rc(ge),nt);if(ge.$$typeof===C)return fe(Q,X,ae,tc(X,ge),nt);sc(X,ge)}return null}function je(Q,X,ae,ge){for(var nt=null,Nt=null,Je=X,vt=X=0,Tt=null;Je!==null&&vt<ae.length;vt++){Je.index>vt?(Tt=Je,Je=null):Tt=Je.sibling;var Ot=le(Q,Je,ae[vt],ge);if(Ot===null){Je===null&&(Je=Tt);break}t&&Je&&Ot.alternate===null&&i(Q,Je),X=_(Ot,X,vt),Nt===null?nt=Ot:Nt.sibling=Ot,Nt=Ot,Je=Tt}if(vt===ae.length)return o(Q,Je),At&&Da(Q,vt),nt;if(Je===null){for(;vt<ae.length;vt++)Je=ve(Q,ae[vt],ge),Je!==null&&(X=_(Je,X,vt),Nt===null?nt=Je:Nt.sibling=Je,Nt=Je);return At&&Da(Q,vt),nt}for(Je=u(Je);vt<ae.length;vt++)Tt=fe(Je,Q,vt,ae[vt],ge),Tt!==null&&(t&&Tt.alternate!==null&&Je.delete(Tt.key===null?vt:Tt.key),X=_(Tt,X,vt),Nt===null?nt=Tt:Nt.sibling=Tt,Nt=Tt);return t&&Je.forEach(function(Fr){return i(Q,Fr)}),At&&Da(Q,vt),nt}function ot(Q,X,ae,ge){if(ae==null)throw Error(a(151));for(var nt=null,Nt=null,Je=X,vt=X=0,Tt=null,Ot=ae.next();Je!==null&&!Ot.done;vt++,Ot=ae.next()){Je.index>vt?(Tt=Je,Je=null):Tt=Je.sibling;var Fr=le(Q,Je,Ot.value,ge);if(Fr===null){Je===null&&(Je=Tt);break}t&&Je&&Fr.alternate===null&&i(Q,Je),X=_(Fr,X,vt),Nt===null?nt=Fr:Nt.sibling=Fr,Nt=Fr,Je=Tt}if(Ot.done)return o(Q,Je),At&&Da(Q,vt),nt;if(Je===null){for(;!Ot.done;vt++,Ot=ae.next())Ot=ve(Q,Ot.value,ge),Ot!==null&&(X=_(Ot,X,vt),Nt===null?nt=Ot:Nt.sibling=Ot,Nt=Ot);return At&&Da(Q,vt),nt}for(Je=u(Je);!Ot.done;vt++,Ot=ae.next())Ot=fe(Je,Q,vt,Ot.value,ge),Ot!==null&&(t&&Ot.alternate!==null&&Je.delete(Ot.key===null?vt:Ot.key),X=_(Ot,X,vt),Nt===null?nt=Ot:Nt.sibling=Ot,Nt=Ot);return t&&Je.forEach(function(Jb){return i(Q,Jb)}),At&&Da(Q,vt),nt}function Yt(Q,X,ae,ge){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:e:{for(var nt=ae.key;X!==null;){if(X.key===nt){if(nt=ae.type,nt===M){if(X.tag===7){o(Q,X.sibling),ge=p(X,ae.props.children),ge.return=Q,Q=ge;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===B&&ds(nt)===X.type){o(Q,X.sibling),ge=p(X,ae.props),Rl(ge,ae),ge.return=Q,Q=ge;break e}o(Q,X);break}else i(Q,X);X=X.sibling}ae.type===M?(ge=ls(ae.props.children,Q.mode,ge,ae.key),ge.return=Q,Q=ge):(ge=Ju(ae.type,ae.key,ae.props,null,Q.mode,ge),Rl(ge,ae),ge.return=Q,Q=ge)}return E(Q);case b:e:{for(nt=ae.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){o(Q,X.sibling),ge=p(X,ae.children||[]),ge.return=Q,Q=ge;break e}else{o(Q,X);break}else i(Q,X);X=X.sibling}ge=yh(ae,Q.mode,ge),ge.return=Q,Q=ge}return E(Q);case B:return ae=ds(ae),Yt(Q,X,ae,ge)}if(ne(ae))return je(Q,X,ae,ge);if(Z(ae)){if(nt=Z(ae),typeof nt!="function")throw Error(a(150));return ae=nt.call(ae),ot(Q,X,ae,ge)}if(typeof ae.then=="function")return Yt(Q,X,rc(ae),ge);if(ae.$$typeof===C)return Yt(Q,X,tc(Q,ae),ge);sc(Q,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,X!==null&&X.tag===6?(o(Q,X.sibling),ge=p(X,ae),ge.return=Q,Q=ge):(o(Q,X),ge=xh(ae,Q.mode,ge),ge.return=Q,Q=ge),E(Q)):o(Q,X)}return function(Q,X,ae,ge){try{Al=0;var nt=Yt(Q,X,ae,ge);return oo=null,nt}catch(Je){if(Je===so||Je===ic)throw Je;var Nt=pi(29,Je,null,Q.mode);return Nt.lanes=ge,Nt.return=Q,Nt}}}var ms=Og(!0),Pg=Og(!1),xr=!1;function Lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function yr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,i=Qu(t),vg(t,null,o),i}return Ku(t,u,i,o),Qu(t)}function Cl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,ll(t,o)}}function Oh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};_===null?p=_=E:_=_.next=E,o=o.next}while(o!==null);_===null?p=_=i:_=_.next=i}else p=_=i;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}var Ph=!1;function wl(){if(Ph){var t=ro;if(t!==null)throw t}}function Dl(t,i,o,u){Ph=!1;var p=t.updateQueue;xr=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var V=U,re=V.next;V.next=null,E===null?_=re:E.next=re,E=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,U=pe.lastBaseUpdate,U!==E&&(U===null?pe.firstBaseUpdate=re:U.next=re,pe.lastBaseUpdate=V))}if(_!==null){var ve=p.baseState;E=0,pe=re=V=null,U=_;do{var le=U.lane&-536870913,fe=le!==U.lane;if(fe?(bt&le)===le:(u&le)===le){le!==0&&le===ao&&(Ph=!0),pe!==null&&(pe=pe.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var je=t,ot=U;le=i;var Yt=o;switch(ot.tag){case 1:if(je=ot.payload,typeof je=="function"){ve=je.call(Yt,ve,le);break e}ve=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ot.payload,le=typeof je=="function"?je.call(Yt,ve,le):je,le==null)break e;ve=g({},ve,le);break e;case 2:xr=!0}}le=U.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=p.callbacks,fe===null?p.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:U.tag,payload:U.payload,callback:U.callback,next:null},pe===null?(re=pe=fe,V=ve):pe=pe.next=fe,E|=le;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;fe=U,U=fe.next,fe.next=null,p.lastBaseUpdate=fe,p.shared.pending=null}}while(!0);pe===null&&(V=ve),p.baseState=V,p.firstBaseUpdate=re,p.lastBaseUpdate=pe,_===null&&(p.shared.lanes=0),Ar|=E,t.lanes=E,t.memoizedState=ve}}function Fg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function zg(t,i){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)Fg(o[t],i)}var lo=z(null),oc=z(0);function Ig(t,i){t=Ga,me(oc,t),me(lo,i),Ga=t|i.baseLanes}function Fh(){me(oc,Ga),me(lo,lo.current)}function zh(){Ga=oc.current,te(lo),te(oc)}var mi=z(null),zi=null;function Mr(t){var i=t.alternate;me(hn,hn.current&1),me(mi,t),zi===null&&(i===null||lo.current!==null||i.memoizedState!==null)&&(zi=t)}function Ih(t){me(hn,hn.current),me(mi,t),zi===null&&(zi=t)}function Bg(t){t.tag===22?(me(hn,hn.current),me(mi,t),zi===null&&(zi=t)):Er()}function Er(){me(hn,hn.current),me(mi,mi.current)}function _i(t){te(mi),zi===t&&(zi=null),te(hn)}var hn=z(0);function lc(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Xd(o)||Wd(o)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Na=0,mt=null,Wt=null,vn=null,uc=!1,uo=!1,_s=!1,cc=0,Ul=0,co=null,VE=0;function un(){throw Error(a(321))}function Bh(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!di(t[o],i[o]))return!1;return!0}function Hh(t,i,o,u,p,_){return Na=_,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?M0:td,_s=!1,_=o(u,p),_s=!1,uo&&(_=Gg(i,o,u,p)),Hg(t),_}function Hg(t){F.H=Ol;var i=Wt!==null&&Wt.next!==null;if(Na=0,vn=Wt=mt=null,uc=!1,Ul=0,co=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&ec(t)&&(xn=!0))}function Gg(t,i,o,u){mt=t;var p=0;do{if(uo&&(co=null),Ul=0,uo=!1,25<=p)throw Error(a(301));if(p+=1,vn=Wt=null,t.updateQueue!=null){var _=t.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}F.H=E0,_=i(o,u)}while(uo);return _}function kE(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Ll(i):i,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(mt.flags|=1024),i}function Gh(){var t=cc!==0;return cc=0,t}function Vh(t,i,o){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~o}function kh(t){if(uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uc=!1}Na=0,vn=Wt=mt=null,uo=!1,Ul=cc=0,co=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?mt.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(Wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=vn===null?mt.memoizedState:vn.next;if(i!==null)vn=i,Wt=t;else{if(t===null)throw mt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},vn===null?mt.memoizedState=vn=t:vn=vn.next=t}return vn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(t){var i=Ul;return Ul+=1,co===null&&(co=[]),t=Ug(co,t,i),i=mt,(vn===null?i.memoizedState:vn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?M0:td),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ll(t);if(t.$$typeof===C)return In(t)}throw Error(a(438,String(t)))}function Xh(t){var i=null,o=mt.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=mt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=fc(),mt.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(t),u=0;u<t;u++)o[u]=L;return i.index++,o}function Oa(t,i){return typeof i=="function"?i(t):i}function dc(t){var i=dn();return Wh(i,Wt,t)}function Wh(t,i,o){var u=t.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var p=t.baseQueue,_=u.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}i.baseQueue=p=_,u.pending=null}if(_=t.baseState,p===null)t.memoizedState=_;else{i=p.next;var U=E=null,V=null,re=i,pe=!1;do{var ve=re.lane&-536870913;if(ve!==re.lane?(bt&ve)===ve:(Na&ve)===ve){var le=re.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),ve===ao&&(pe=!0);else if((Na&le)===le){re=re.next,le===ao&&(pe=!0);continue}else ve={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(U=V=ve,E=_):V=V.next=ve,mt.lanes|=le,Ar|=le;ve=re.action,_s&&o(_,ve),_=re.hasEagerState?re.eagerState:o(_,ve)}else le={lane:ve,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(U=V=le,E=_):V=V.next=le,mt.lanes|=ve,Ar|=ve;re=re.next}while(re!==null&&re!==i);if(V===null?E=_:V.next=U,!di(_,t.memoizedState)&&(xn=!0,pe&&(o=ro,o!==null)))throw o;t.memoizedState=_,t.baseState=E,t.baseQueue=V,u.lastRenderedState=_}return p===null&&(u.lanes=0),[t.memoizedState,u.dispatch]}function qh(t){var i=dn(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=t;var u=o.dispatch,p=o.pending,_=i.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do _=t(_,E.action),E=E.next;while(E!==p);di(_,i.memoizedState)||(xn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),o.lastRenderedState=_}return[_,u]}function Vg(t,i,o){var u=mt,p=dn(),_=At;if(_){if(o===void 0)throw Error(a(407));o=o()}else o=i();var E=!di((Wt||p).memoizedState,o);if(E&&(p.memoizedState=o,xn=!0),p=p.queue,Zh(Wg.bind(null,u,p,t),[t]),p.getSnapshot!==i||E||vn!==null&&vn.memoizedState.tag&1){if(u.flags|=2048,fo(9,{destroy:void 0},Xg.bind(null,u,p,o,i),null),Zt===null)throw Error(a(349));_||(Na&127)!==0||kg(u,i,o)}return o}function kg(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=mt.updateQueue,i===null?(i=fc(),mt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Xg(t,i,o,u){i.value=o,i.getSnapshot=u,qg(i)&&Yg(t)}function Wg(t,i,o){return o(function(){qg(i)&&Yg(t)})}function qg(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!di(t,o)}catch{return!0}}function Yg(t){var i=os(t,2);i!==null&&ri(i,t,2)}function Yh(t){var i=Kn();if(typeof t=="function"){var o=t;if(t=o(),_s){Xe(!0);try{o()}finally{Xe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},i}function jg(t,i,o,u){return t.baseState=o,Wh(t,Wt,typeof u=="function"?u:Oa)}function XE(t,i,o,u,p){if(_c(t))throw Error(a(485));if(t=i.action,t!==null){var _={payload:p,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){_.listeners.push(E)}};F.T!==null?o(!0):_.isTransition=!1,u(_),o=i.pending,o===null?(_.next=i.pending=_,Zg(i,_)):(_.next=o.next,i.pending=o.next=_)}}function Zg(t,i){var o=i.action,u=i.payload,p=t.state;if(i.isTransition){var _=F.T,E={};F.T=E;try{var U=o(p,u),V=F.S;V!==null&&V(E,U),Kg(t,i,U)}catch(re){jh(t,i,re)}finally{_!==null&&E.types!==null&&(_.types=E.types),F.T=_}}else try{_=o(p,u),Kg(t,i,_)}catch(re){jh(t,i,re)}}function Kg(t,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Qg(t,i,u)},function(u){return jh(t,i,u)}):Qg(t,i,o)}function Qg(t,i,o){i.status="fulfilled",i.value=o,Jg(i),t.state=o,i=t.pending,i!==null&&(o=i.next,o===i?t.pending=null:(o=o.next,i.next=o,Zg(t,o)))}function jh(t,i,o){var u=t.pending;if(t.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,Jg(i),i=i.next;while(i!==u)}t.action=null}function Jg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function $g(t,i){return i}function e0(t,i){if(At){var o=Zt.formState;if(o!==null){e:{var u=mt;if(At){if($t){t:{for(var p=$t,_=Fi;p.nodeType!==8;){if(!_){p=null;break t}if(p=Ii(p.nextSibling),p===null){p=null;break t}}_=p.data,p=_==="F!"||_==="F"?p:null}if(p){$t=Ii(p.nextSibling),u=p.data==="F!";break e}}gr(u)}u=!1}u&&(i=o[0])}}return o=Kn(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$g,lastRenderedState:i},o.queue=u,o=x0.bind(null,mt,u),u.dispatch=o,u=Yh(!1),_=ed.bind(null,mt,!1,u.queue),u=Kn(),p={state:i,dispatch:null,action:t,pending:null},u.queue=p,o=XE.bind(null,mt,p,_,o),p.dispatch=o,u.memoizedState=t,[i,o,!1]}function t0(t){var i=dn();return n0(i,Wt,t)}function n0(t,i,o){if(i=Wh(t,i,$g)[0],t=dc(Oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Ll(i)}catch(E){throw E===so?ic:E}else u=i;i=dn();var p=i.queue,_=p.dispatch;return o!==i.memoizedState&&(mt.flags|=2048,fo(9,{destroy:void 0},WE.bind(null,p,o),null)),[u,_,t]}function WE(t,i){t.action=i}function i0(t){var i=dn(),o=Wt;if(o!==null)return n0(i,o,t);dn(),i=i.memoizedState,o=dn();var u=o.queue.dispatch;return o.memoizedState=t,[i,u,!1]}function fo(t,i,o,u){return t={tag:t,create:o,deps:u,inst:i,next:null},i=mt.updateQueue,i===null&&(i=fc(),mt.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t),t}function a0(){return dn().memoizedState}function pc(t,i,o,u){var p=Kn();mt.flags|=t,p.memoizedState=fo(1|i,{destroy:void 0},o,u===void 0?null:u)}function mc(t,i,o,u){var p=dn();u=u===void 0?null:u;var _=p.memoizedState.inst;Wt!==null&&u!==null&&Bh(u,Wt.memoizedState.deps)?p.memoizedState=fo(i,_,o,u):(mt.flags|=t,p.memoizedState=fo(1|i,_,o,u))}function r0(t,i){pc(8390656,8,t,i)}function Zh(t,i){mc(2048,8,t,i)}function qE(t){mt.flags|=4;var i=mt.updateQueue;if(i===null)i=fc(),mt.updateQueue=i,i.events=[t];else{var o=i.events;o===null?i.events=[t]:o.push(t)}}function s0(t){var i=dn().memoizedState;return qE({ref:i,nextImpl:t}),function(){if((It&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function o0(t,i){return mc(4,2,t,i)}function l0(t,i){return mc(4,4,t,i)}function u0(t,i){if(typeof i=="function"){t=t();var o=i(t);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function c0(t,i,o){o=o!=null?o.concat([t]):null,mc(4,4,u0.bind(null,i,t),o)}function Kh(){}function f0(t,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&Bh(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function h0(t,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&Bh(i,u[1]))return u[0];if(u=t(),_s){Xe(!0);try{t()}finally{Xe(!1)}}return o.memoizedState=[u,i],u}function Qh(t,i,o){return o===void 0||(Na&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=o,t=dv(),mt.lanes|=t,Ar|=t,o)}function d0(t,i,o,u){return di(o,i)?o:lo.current!==null?(t=Qh(t,o,u),di(t,i)||(xn=!0),t):(Na&42)===0||(Na&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=o):(t=dv(),mt.lanes|=t,Ar|=t,i)}function p0(t,i,o,u,p){var _=H.p;H.p=_!==0&&8>_?_:8;var E=F.T,U={};F.T=U,ed(t,!1,i,o);try{var V=p(),re=F.S;if(re!==null&&re(U,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=GE(V,u);Nl(t,i,pe,xi(t))}else Nl(t,i,u,xi(t))}catch(ve){Nl(t,i,{then:function(){},status:"rejected",reason:ve},xi())}finally{H.p=_,E!==null&&U.types!==null&&(E.types=U.types),F.T=E}}function YE(){}function Jh(t,i,o,u){if(t.tag!==5)throw Error(a(476));var p=m0(t).queue;p0(t,p,i,J,o===null?YE:function(){return _0(t),o(u)})}function m0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:J},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:o},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _0(t){var i=m0(t);i.next===null&&(i=t.alternate.memoizedState),Nl(t,i.next.queue,{},xi())}function $h(){return In(Kl)}function g0(){return dn().memoizedState}function v0(){return dn().memoizedState}function jE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var o=xi();t=yr(o);var u=Sr(i,t,o);u!==null&&(ri(u,i,o),Cl(u,i,o)),i={cache:Ch()},t.payload=i;return}i=i.return}}function ZE(t,i,o){var u=xi();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_c(t)?y0(i,o):(o=gh(t,i,o,u),o!==null&&(ri(o,t,u),S0(o,i,u)))}function x0(t,i,o){var u=xi();Nl(t,i,o,u)}function Nl(t,i,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(_c(t))y0(i,p);else{var _=t.alternate;if(t.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var E=i.lastRenderedState,U=_(E,o);if(p.hasEagerState=!0,p.eagerState=U,di(U,E))return Ku(t,i,p,0),Zt===null&&Zu(),!1}catch{}if(o=gh(t,i,p,u),o!==null)return ri(o,t,u),S0(o,i,u),!0}return!1}function ed(t,i,o,u){if(u={lane:2,revertLane:Ld(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(i)throw Error(a(479))}else i=gh(t,o,u,2),i!==null&&ri(i,t,2)}function _c(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function y0(t,i){uo=uc=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function S0(t,i,o){if((o&4194048)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,ll(t,o)}}var Ol={readContext:In,use:hc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Ol.useEffectEvent=un;var M0={readContext:In,use:hc,useCallback:function(t,i){return Kn().memoizedState=[t,i===void 0?null:i],t},useContext:In,useEffect:r0,useImperativeHandle:function(t,i,o){o=o!=null?o.concat([t]):null,pc(4194308,4,u0.bind(null,i,t),o)},useLayoutEffect:function(t,i){return pc(4194308,4,t,i)},useInsertionEffect:function(t,i){pc(4,2,t,i)},useMemo:function(t,i){var o=Kn();i=i===void 0?null:i;var u=t();if(_s){Xe(!0);try{t()}finally{Xe(!1)}}return o.memoizedState=[u,i],u},useReducer:function(t,i,o){var u=Kn();if(o!==void 0){var p=o(i);if(_s){Xe(!0);try{o(i)}finally{Xe(!1)}}}else p=i;return u.memoizedState=u.baseState=p,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:p},u.queue=t,t=t.dispatch=ZE.bind(null,mt,t),[u.memoizedState,t]},useRef:function(t){var i=Kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Yh(t);var i=t.queue,o=x0.bind(null,mt,i);return i.dispatch=o,[t.memoizedState,o]},useDebugValue:Kh,useDeferredValue:function(t,i){var o=Kn();return Qh(o,t,i)},useTransition:function(){var t=Yh(!1);return t=p0.bind(null,mt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,o){var u=mt,p=Kn();if(At){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Zt===null)throw Error(a(349));(bt&127)!==0||kg(u,i,o)}p.memoizedState=o;var _={value:o,getSnapshot:i};return p.queue=_,r0(Wg.bind(null,u,_,t),[t]),u.flags|=2048,fo(9,{destroy:void 0},Xg.bind(null,u,_,o,i),null),o},useId:function(){var t=Kn(),i=Zt.identifierPrefix;if(At){var o=ua,u=la;o=(u&~(1<<32-Ge(u)-1)).toString(32)+o,i="_"+i+"R_"+o,o=cc++,0<o&&(i+="H"+o.toString(32)),i+="_"}else o=VE++,i="_"+i+"r_"+o.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:$h,useFormState:e0,useActionState:e0,useOptimistic:function(t){var i=Kn();i.memoizedState=i.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=ed.bind(null,mt,!0,o),o.dispatch=i,[t,i]},useMemoCache:Xh,useCacheRefresh:function(){return Kn().memoizedState=jE.bind(null,mt)},useEffectEvent:function(t){var i=Kn(),o={impl:t};return i.memoizedState=o,function(){if((It&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},td={readContext:In,use:hc,useCallback:f0,useContext:In,useEffect:Zh,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:dc,useRef:a0,useState:function(){return dc(Oa)},useDebugValue:Kh,useDeferredValue:function(t,i){var o=dn();return d0(o,Wt.memoizedState,t,i)},useTransition:function(){var t=dc(Oa)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Ll(t),i]},useSyncExternalStore:Vg,useId:g0,useHostTransitionStatus:$h,useFormState:t0,useActionState:t0,useOptimistic:function(t,i){var o=dn();return jg(o,Wt,t,i)},useMemoCache:Xh,useCacheRefresh:v0};td.useEffectEvent=s0;var E0={readContext:In,use:hc,useCallback:f0,useContext:In,useEffect:Zh,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:h0,useReducer:qh,useRef:a0,useState:function(){return qh(Oa)},useDebugValue:Kh,useDeferredValue:function(t,i){var o=dn();return Wt===null?Qh(o,t,i):d0(o,Wt.memoizedState,t,i)},useTransition:function(){var t=qh(Oa)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Ll(t),i]},useSyncExternalStore:Vg,useId:g0,useHostTransitionStatus:$h,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var o=dn();return Wt!==null?jg(o,Wt,t,i):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:v0};E0.useEffectEvent=s0;function nd(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:g({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var id={enqueueSetState:function(t,i,o){t=t._reactInternals;var u=xi(),p=yr(u);p.payload=i,o!=null&&(p.callback=o),i=Sr(t,p,u),i!==null&&(ri(i,t,u),Cl(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=xi(),p=yr(u);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Sr(t,p,u),i!==null&&(ri(i,t,u),Cl(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xi(),u=yr(o);u.tag=2,i!=null&&(u.callback=i),i=Sr(t,u,o),i!==null&&(ri(i,t,o),Cl(i,t,o))}};function b0(t,i,o,u,p,_,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,_,E):i.prototype&&i.prototype.isPureReactComponent?!yl(o,u)||!yl(p,_):!0}function T0(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&id.enqueueReplaceState(i,i.state,null)}function gs(t,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(t=t.defaultProps){o===i&&(o=g({},o));for(var p in t)o[p]===void 0&&(o[p]=t[p])}return o}function A0(t){ju(t)}function R0(t){console.error(t)}function C0(t){ju(t)}function gc(t,i){try{var o=t.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function w0(t,i,o){try{var u=t.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ad(t,i,o){return o=yr(o),o.tag=3,o.payload={element:null},o.callback=function(){gc(t,i)},o}function D0(t){return t=yr(t),t.tag=3,t}function U0(t,i,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var _=u.value;t.payload=function(){return p(_)},t.callback=function(){w0(i,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){w0(i,o,u),typeof p!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var U=u.stack;this.componentDidCatch(u.value,{componentStack:U!==null?U:""})})}function KE(t,i,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&io(i,o,p,!0),o=mi.current,o!==null){switch(o.tag){case 31:case 13:return zi===null?wc():o.alternate===null&&cn===0&&(cn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===ac?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),wd(t,u,p)),!1;case 22:return o.flags|=65536,u===ac?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),wd(t,u,p)),!1}throw Error(a(435,o.tag))}return wd(t,u,p),wc(),!1}if(At)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,u!==Eh&&(t=Error(a(422),{cause:u}),El(Ni(t,o)))):(u!==Eh&&(i=Error(a(423),{cause:u}),El(Ni(i,o))),t=t.current.alternate,t.flags|=65536,p&=-p,t.lanes|=p,u=Ni(u,o),p=ad(t.stateNode,u,p),Oh(t,p),cn!==4&&(cn=2)),!1;var _=Error(a(520),{cause:u});if(_=Ni(_,o),Vl===null?Vl=[_]:Vl.push(_),cn!==4&&(cn=2),i===null)return!0;u=Ni(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,t=p&-p,o.lanes|=t,t=ad(o.stateNode,u,t),Oh(o,t),!1;case 1:if(i=o.type,_=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Rr===null||!Rr.has(_))))return o.flags|=65536,p&=-p,o.lanes|=p,p=D0(p),U0(p,t,o,u),Oh(o,p),!1}o=o.return}while(o!==null);return!1}var rd=Error(a(461)),xn=!1;function Bn(t,i,o,u){i.child=t===null?Pg(i,null,o,u):ms(i,t.child,o,u)}function L0(t,i,o,u,p){o=o.render;var _=i.ref;if("ref"in u){var E={};for(var U in u)U!=="ref"&&(E[U]=u[U])}else E=u;return fs(i),u=Hh(t,i,o,E,_,p),U=Gh(),t!==null&&!xn?(Vh(t,i,p),Pa(t,i,p)):(At&&U&&Sh(i),i.flags|=1,Bn(t,i,u,p),i.child)}function N0(t,i,o,u,p){if(t===null){var _=o.type;return typeof _=="function"&&!vh(_)&&_.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=_,O0(t,i,_,u,p)):(t=Ju(o.type,null,u,i,i.mode,p),t.ref=i.ref,t.return=i,i.child=t)}if(_=t.child,!dd(t,p)){var E=_.memoizedProps;if(o=o.compare,o=o!==null?o:yl,o(E,u)&&t.ref===i.ref)return Pa(t,i,p)}return i.flags|=1,t=wa(_,u),t.ref=i.ref,t.return=i,i.child=t}function O0(t,i,o,u,p){if(t!==null){var _=t.memoizedProps;if(yl(_,u)&&t.ref===i.ref)if(xn=!1,i.pendingProps=u=_,dd(t,p))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Pa(t,i,p)}return sd(t,i,o,u,p)}function P0(t,i,o,u){var p=u.children,_=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(_=_!==null?_.baseLanes|o:o,t!==null){for(u=i.child=t.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~_}else u=0,i.child=null;return F0(t,i,_,o,u)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(i,_!==null?_.cachePool:null),_!==null?Ig(i,_):Fh(),Bg(i);else return u=i.lanes=536870912,F0(t,i,_!==null?_.baseLanes|o:o,o,u)}else _!==null?(nc(i,_.cachePool),Ig(i,_),Er(),i.memoizedState=null):(t!==null&&nc(i,null),Fh(),Er());return Bn(t,i,p,o),i.child}function Pl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function F0(t,i,o,u,p){var _=Dh();return _=_===null?null:{parent:gn._currentValue,pool:_},i.memoizedState={baseLanes:o,cachePool:_},t!==null&&nc(i,null),Fh(),Bg(i),t!==null&&io(t,i,u,!0),i.childLanes=p,null}function vc(t,i){return i=yc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function z0(t,i,o){return ms(i,t.child,null,o),t=vc(i,i.pendingProps),t.flags|=2,_i(i),i.memoizedState=null,t}function QE(t,i,o){var u=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(At){if(u.mode==="hidden")return t=vc(i,u),i.lanes=536870912,Pl(null,t);if(Ih(i),(t=$t)?(t=Zv(t,Fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:mr!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=yg(t),o.return=i,i.child=o,zn=i,$t=null)):t=null,t===null)throw gr(i);return i.lanes=536870912,null}return vc(i,u)}var _=t.memoizedState;if(_!==null){var E=_.dehydrated;if(Ih(i),p)if(i.flags&256)i.flags&=-257,i=z0(t,i,o);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||io(t,i,o,!1),p=(o&t.childLanes)!==0,xn||p){if(u=Zt,u!==null&&(E=Vs(u,o),E!==0&&E!==_.retryLane))throw _.retryLane=E,os(t,E),ri(u,t,E),rd;wc(),i=z0(t,i,o)}else t=_.treeContext,$t=Ii(E.nextSibling),zn=i,At=!0,_r=null,Fi=!1,t!==null&&Eg(i,t),i=vc(i,u),i.flags|=4096;return i}return t=wa(t.child,{mode:u.mode,children:u.children}),t.ref=i.ref,i.child=t,t.return=i,t}function xc(t,i){var o=i.ref;if(o===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(t===null||t.ref!==o)&&(i.flags|=4194816)}}function sd(t,i,o,u,p){return fs(i),o=Hh(t,i,o,u,void 0,p),u=Gh(),t!==null&&!xn?(Vh(t,i,p),Pa(t,i,p)):(At&&u&&Sh(i),i.flags|=1,Bn(t,i,o,p),i.child)}function I0(t,i,o,u,p,_){return fs(i),i.updateQueue=null,o=Gg(i,u,o,p),Hg(t),u=Gh(),t!==null&&!xn?(Vh(t,i,_),Pa(t,i,_)):(At&&u&&Sh(i),i.flags|=1,Bn(t,i,o,_),i.child)}function B0(t,i,o,u,p){if(fs(i),i.stateNode===null){var _=$s,E=o.contextType;typeof E=="object"&&E!==null&&(_=In(E)),_=new o(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=id,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},Lh(i),E=o.contextType,_.context=typeof E=="object"&&E!==null?In(E):$s,_.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(nd(i,o,E,u),_.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(E=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),E!==_.state&&id.enqueueReplaceState(_,_.state,null),Dl(i,u,_,p),wl(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(t===null){_=i.stateNode;var U=i.memoizedProps,V=gs(o,U);_.props=V;var re=_.context,pe=o.contextType;E=$s,typeof pe=="object"&&pe!==null&&(E=In(pe));var ve=o.getDerivedStateFromProps;pe=typeof ve=="function"||typeof _.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,pe||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(U||re!==E)&&T0(i,_,u,E),xr=!1;var le=i.memoizedState;_.state=le,Dl(i,u,_,p),wl(),re=i.memoizedState,U||le!==re||xr?(typeof ve=="function"&&(nd(i,o,ve,u),re=i.memoizedState),(V=xr||b0(i,o,V,u,le,re,E))?(pe||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=re),_.props=u,_.state=re,_.context=E,u=V):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,Nh(t,i),E=i.memoizedProps,pe=gs(o,E),_.props=pe,ve=i.pendingProps,le=_.context,re=o.contextType,V=$s,typeof re=="object"&&re!==null&&(V=In(re)),U=o.getDerivedStateFromProps,(re=typeof U=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(E!==ve||le!==V)&&T0(i,_,u,V),xr=!1,le=i.memoizedState,_.state=le,Dl(i,u,_,p),wl();var fe=i.memoizedState;E!==ve||le!==fe||xr||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof U=="function"&&(nd(i,o,U,u),fe=i.memoizedState),(pe=xr||b0(i,o,pe,u,le,fe,V)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(re||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,fe,V),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,fe,V)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=fe),_.props=u,_.state=fe,_.context=V,u=pe):(typeof _.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),u=!1)}return _=u,xc(t,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,t!==null&&u?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,o,p)):Bn(t,i,o,p),i.memoizedState=_.state,t=i.child):t=Pa(t,i,p),t}function H0(t,i,o,u){return us(),i.flags|=256,Bn(t,i,o,u),i.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(t){return{baseLanes:t,cachePool:wg()}}function ud(t,i,o){return t=t!==null?t.childLanes&~o:0,i&&(t|=vi),t}function G0(t,i,o){var u=i.pendingProps,p=!1,_=(i.flags&128)!==0,E;if((E=_)||(E=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),E&&(p=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(At){if(p?Mr(i):Er(),(t=$t)?(t=Zv(t,Fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:mr!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=yg(t),o.return=i,i.child=o,zn=i,$t=null)):t=null,t===null)throw gr(i);return Wd(t)?i.lanes=32:i.lanes=536870912,null}var U=u.children;return u=u.fallback,p?(Er(),p=i.mode,U=yc({mode:"hidden",children:U},p),u=ls(u,p,o,null),U.return=i,u.return=i,U.sibling=u,i.child=U,u=i.child,u.memoizedState=ld(o),u.childLanes=ud(t,E,o),i.memoizedState=od,Pl(null,u)):(Mr(i),cd(i,U))}var V=t.memoizedState;if(V!==null&&(U=V.dehydrated,U!==null)){if(_)i.flags&256?(Mr(i),i.flags&=-257,i=fd(t,i,o)):i.memoizedState!==null?(Er(),i.child=t.child,i.flags|=128,i=null):(Er(),U=u.fallback,p=i.mode,u=yc({mode:"visible",children:u.children},p),U=ls(U,p,o,null),U.flags|=2,u.return=i,U.return=i,u.sibling=U,i.child=u,ms(i,t.child,null,o),u=i.child,u.memoizedState=ld(o),u.childLanes=ud(t,E,o),i.memoizedState=od,i=Pl(null,u));else if(Mr(i),Wd(U)){if(E=U.nextSibling&&U.nextSibling.dataset,E)var re=E.dgst;E=re,u=Error(a(419)),u.stack="",u.digest=E,El({value:u,source:null,stack:null}),i=fd(t,i,o)}else if(xn||io(t,i,o,!1),E=(o&t.childLanes)!==0,xn||E){if(E=Zt,E!==null&&(u=Vs(E,o),u!==0&&u!==V.retryLane))throw V.retryLane=u,os(t,u),ri(E,t,u),rd;Xd(U)||wc(),i=fd(t,i,o)}else Xd(U)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,$t=Ii(U.nextSibling),zn=i,At=!0,_r=null,Fi=!1,t!==null&&Eg(i,t),i=cd(i,u.children),i.flags|=4096);return i}return p?(Er(),U=u.fallback,p=i.mode,V=t.child,re=V.sibling,u=wa(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,re!==null?U=wa(re,U):(U=ls(U,p,o,null),U.flags|=2),U.return=i,u.return=i,u.sibling=U,i.child=u,Pl(null,u),u=i.child,U=t.child.memoizedState,U===null?U=ld(o):(p=U.cachePool,p!==null?(V=gn._currentValue,p=p.parent!==V?{parent:V,pool:V}:p):p=wg(),U={baseLanes:U.baseLanes|o,cachePool:p}),u.memoizedState=U,u.childLanes=ud(t,E,o),i.memoizedState=od,Pl(t.child,u)):(Mr(i),o=t.child,t=o.sibling,o=wa(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=o,i.memoizedState=null,o)}function cd(t,i){return i=yc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function yc(t,i){return t=pi(22,t,null,i),t.lanes=0,t}function fd(t,i,o){return ms(i,t.child,null,o),t=cd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function V0(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ah(t.return,i,o)}function hd(t,i,o,u,p,_){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:_}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=o,E.tailMode=p,E.treeForkCount=_)}function k0(t,i,o){var u=i.pendingProps,p=u.revealOrder,_=u.tail;u=u.children;var E=hn.current,U=(E&2)!==0;if(U?(E=E&1|2,i.flags|=128):E&=1,me(hn,E),Bn(t,i,u,o),u=At?Ml:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,o,i);else if(t.tag===19)V0(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(p){case"forwards":for(o=i.child,p=null;o!==null;)t=o.alternate,t!==null&&lc(t)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),hd(i,!1,p,o,_,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(t=p.alternate,t!==null&&lc(t)===null){i.child=p;break}t=p.sibling,p.sibling=o,o=p,p=t}hd(i,!0,o,null,_,u);break;case"together":hd(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Pa(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(o&i.childLanes)===0)if(t!==null){if(io(t,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,o=wa(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=wa(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function dd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function JE(t,i,o){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),vr(i,gn,t.memoizedState.cache),us();break;case 27:case 5:Be(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:vr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ih(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Mr(i),i.flags|=128,null):(o&i.child.childLanes)!==0?G0(t,i,o):(Mr(i),t=Pa(t,i,o),t!==null?t.sibling:null);Mr(i);break;case 19:var p=(t.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(io(t,i,o,!1),u=(o&i.childLanes)!==0),p){if(u)return k0(t,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),me(hn,hn.current),u)break;return null;case 22:return i.lanes=0,P0(t,i,o,i.pendingProps);case 24:vr(i,gn,t.memoizedState.cache)}return Pa(t,i,o)}function X0(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!dd(t,o)&&(i.flags&128)===0)return xn=!1,JE(t,i,o);xn=(t.flags&131072)!==0}else xn=!1,At&&(i.flags&1048576)!==0&&Mg(i,Ml,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(t=ds(i.elementType),i.type=t,typeof t=="function")vh(t)?(u=gs(t,u),i.tag=1,i=B0(null,i,t,u,o)):(i.tag=0,i=sd(null,i,t,u,o));else{if(t!=null){var p=t.$$typeof;if(p===D){i.tag=11,i=L0(null,i,t,u,o);break e}else if(p===O){i.tag=14,i=N0(null,i,t,u,o);break e}}throw i=se(t)||t,Error(a(306,i,""))}}return i;case 0:return sd(t,i,i.type,i.pendingProps,o);case 1:return u=i.type,p=gs(u,i.pendingProps),B0(t,i,u,p,o);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(a(387));u=i.pendingProps;var _=i.memoizedState;p=_.element,Nh(t,i),Dl(i,u,null,o);var E=i.memoizedState;if(u=E.cache,vr(i,gn,u),u!==_.cache&&Rh(i,[gn],o,!0),wl(),u=E.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=H0(t,i,u,o);break e}else if(u!==p){p=Ni(Error(a(424)),i),El(p),i=H0(t,i,u,o);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=Ii(t.firstChild),zn=i,At=!0,_r=null,Fi=!0,o=Pg(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),u===p){i=Pa(t,i,o);break e}Bn(t,i,u,o)}i=i.child}return i;case 26:return xc(t,i),t===null?(o=tx(i.type,null,i.pendingProps,null))?i.memoizedState=o:At||(o=i.type,t=i.pendingProps,u=Fc(ie.current).createElement(o),u[_n]=i,u[Un]=t,Hn(u,o,t),N(u),i.stateNode=u):i.memoizedState=tx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Be(i),t===null&&At&&(u=i.stateNode=Jv(i.type,i.pendingProps,ie.current),zn=i,Fi=!0,p=$t,Ur(i.type)?(qd=p,$t=Ii(u.firstChild)):$t=p),Bn(t,i,i.pendingProps.children,o),xc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&At&&((p=u=$t)&&(u=Cb(u,i.type,i.pendingProps,Fi),u!==null?(i.stateNode=u,zn=i,$t=Ii(u.firstChild),Fi=!1,p=!0):p=!1),p||gr(i)),Be(i),p=i.type,_=i.pendingProps,E=t!==null?t.memoizedProps:null,u=_.children,Gd(p,_)?u=null:E!==null&&Gd(p,E)&&(i.flags|=32),i.memoizedState!==null&&(p=Hh(t,i,kE,null,null,o),Kl._currentValue=p),xc(t,i),Bn(t,i,u,o),i.child;case 6:return t===null&&At&&((t=o=$t)&&(o=wb(o,i.pendingProps,Fi),o!==null?(i.stateNode=o,zn=i,$t=null,t=!0):t=!1),t||gr(i)),null;case 13:return G0(t,i,o);case 4:return Re(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ms(i,null,u,o):Bn(t,i,u,o),i.child;case 11:return L0(t,i,i.type,i.pendingProps,o);case 7:return Bn(t,i,i.pendingProps,o),i.child;case 8:return Bn(t,i,i.pendingProps.children,o),i.child;case 12:return Bn(t,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,vr(i,i.type,u.value),Bn(t,i,u.children,o),i.child;case 9:return p=i.type._context,u=i.pendingProps.children,fs(i),p=In(p),u=u(p),i.flags|=1,Bn(t,i,u,o),i.child;case 14:return N0(t,i,i.type,i.pendingProps,o);case 15:return O0(t,i,i.type,i.pendingProps,o);case 19:return k0(t,i,o);case 31:return QE(t,i,o);case 22:return P0(t,i,o,i.pendingProps);case 24:return fs(i),u=In(gn),t===null?(p=Dh(),p===null&&(p=Zt,_=Ch(),p.pooledCache=_,_.refCount++,_!==null&&(p.pooledCacheLanes|=o),p=_),i.memoizedState={parent:u,cache:p},Lh(i),vr(i,gn,p)):((t.lanes&o)!==0&&(Nh(t,i),Dl(i,null,null,o),wl()),p=t.memoizedState,_=i.memoizedState,p.parent!==u?(p={parent:u,cache:u},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),vr(i,gn,u)):(u=_.cache,vr(i,gn,u),u!==p.cache&&Rh(i,[gn],o,!0))),Bn(t,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Fa(t){t.flags|=4}function pd(t,i,o,u,p){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(p&335544128)===p)if(t.stateNode.complete)t.flags|=8192;else if(gv())t.flags|=8192;else throw ps=ac,Uh}else t.flags&=-16777217}function W0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sx(i))if(gv())t.flags|=8192;else throw ps=ac,Uh}function Sc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ht():536870912,t.lanes|=i,_o|=i)}function Fl(t,i){if(!At)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var p=t.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function $E(t,i,o){var u=i.pendingProps;switch(Mh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return o=i.stateNode,u=null,t!==null&&(u=t.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),La(gn),Pe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(no(i)?Fa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bh())),en(i),null;case 26:var p=i.type,_=i.memoizedState;return t===null?(Fa(i),_!==null?(en(i),W0(i,_)):(en(i),pd(i,p,null,u,o))):_?_!==t.memoizedState?(Fa(i),en(i),W0(i,_)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==u&&Fa(i),en(i),pd(i,p,t,u,o)),null;case 27:if(it(i),o=ie.current,p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Fa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return en(i),null}t=Ee.current,no(i)?bg(i):(t=Jv(p,u,o),i.stateNode=t,Fa(i))}return en(i),null;case 5:if(it(i),p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Fa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(_=Ee.current,no(i))bg(i);else{var E=Fc(ie.current);switch(_){case 1:_=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:_=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":_=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":_=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":_=E.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild);break;case"select":_=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?_.multiple=!0:u.size&&(_.size=u.size);break;default:_=typeof u.is=="string"?E.createElement(p,{is:u.is}):E.createElement(p)}}_[_n]=i,_[Un]=u;e:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)_.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break e;for(;E.sibling===null;){if(E.return===null||E.return===i)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=_;e:switch(Hn(_,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Fa(i)}}return en(i),pd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,o),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==u&&Fa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,no(i)){if(t=i.stateNode,o=i.memoizedProps,u=null,p=zn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}t[_n]=i,t=!!(t.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Gv(t.nodeValue,o)),t||gr(i,!0)}else t=Fc(t).createTextNode(u),t[_n]=i,i.stateNode=t}return en(i),null;case 31:if(o=i.memoizedState,t===null||t.memoizedState!==null){if(u=no(i),o!==null){if(t===null){if(!u)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[_n]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else o=bh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),t=!0;if(!t)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(p=no(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[_n]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),p=!1}else p=bh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=o,i):(o=u!==null,t=t!==null&&t.memoizedState!==null,o&&(u=i.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),_=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==p&&(u.flags|=2048)),o!==t&&o&&(i.child.flags|=8192),Sc(i,i.updateQueue),en(i),null);case 4:return Pe(),t===null&&Fd(i.stateNode.containerInfo),en(i),null;case 10:return La(i.type),en(i),null;case 19:if(te(hn),u=i.memoizedState,u===null)return en(i),null;if(p=(i.flags&128)!==0,_=u.rendering,_===null)if(p)Fl(u,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(_=lc(t),_!==null){for(i.flags|=128,Fl(u,!1),t=_.updateQueue,i.updateQueue=t,Sc(i,t),i.subtreeFlags=0,t=o,o=i.child;o!==null;)xg(o,t),o=o.sibling;return me(hn,hn.current&1|2),At&&Da(i,u.treeForkCount),i.child}t=t.sibling}u.tail!==null&&A()>Ac&&(i.flags|=128,p=!0,Fl(u,!1),i.lanes=4194304)}else{if(!p)if(t=lc(_),t!==null){if(i.flags|=128,p=!0,t=t.updateQueue,i.updateQueue=t,Sc(i,t),Fl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!_.alternate&&!At)return en(i),null}else 2*A()-u.renderingStartTime>Ac&&o!==536870912&&(i.flags|=128,p=!0,Fl(u,!1),i.lanes=4194304);u.isBackwards?(_.sibling=i.child,i.child=_):(t=u.last,t!==null?t.sibling=_:i.child=_,u.last=_)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=A(),t.sibling=null,o=hn.current,me(hn,p?o&1|2:o&1),At&&Da(i,u.treeForkCount),t):(en(i),null);case 22:case 23:return _i(i),zh(),u=i.memoizedState!==null,t!==null?t.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),o=i.updateQueue,o!==null&&Sc(i,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),t!==null&&te(hs),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),La(gn),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function eb(t,i){switch(Mh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return La(gn),Pe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return it(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(_i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return te(hn),null;case 4:return Pe(),null;case 10:return La(i.type),null;case 22:case 23:return _i(i),zh(),t!==null&&te(hs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return La(gn),null;case 25:return null;default:return null}}function q0(t,i){switch(Mh(i),i.tag){case 3:La(gn),Pe();break;case 26:case 27:case 5:it(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:te(hn);break;case 10:La(i.type);break;case 22:case 23:_i(i),zh(),t!==null&&te(hs);break;case 24:La(gn)}}function zl(t,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&t)===t){u=void 0;var _=o.create,E=o.inst;u=_(),E.destroy=u}o=o.next}while(o!==p)}}catch(U){kt(i,i.return,U)}}function br(t,i,o){try{var u=i.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var _=p.next;u=_;do{if((u.tag&t)===t){var E=u.inst,U=E.destroy;if(U!==void 0){E.destroy=void 0,p=i;var V=o,re=U;try{re()}catch(pe){kt(p,V,pe)}}}u=u.next}while(u!==_)}}catch(pe){kt(i,i.return,pe)}}function Y0(t){var i=t.updateQueue;if(i!==null){var o=t.stateNode;try{zg(i,o)}catch(u){kt(t,t.return,u)}}}function j0(t,i,o){o.props=gs(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(u){kt(t,i,u)}}function Il(t,i){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var u=t.stateNode;break;case 30:u=t.stateNode;break;default:u=t.stateNode}typeof o=="function"?t.refCleanup=o(u):o.current=u}}catch(p){kt(t,i,p)}}function ca(t,i){var o=t.ref,u=t.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){kt(t,i,p)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){kt(t,i,p)}else o.current=null}function Z0(t){var i=t.type,o=t.memoizedProps,u=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){kt(t,t.return,p)}}function md(t,i,o){try{var u=t.stateNode;Mb(u,t.type,o,i),u[Un]=i}catch(p){kt(t,t.return,p)}}function K0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(t),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(u!==4&&(u===27&&Ur(t.type)&&(o=t.stateNode,i=null),t=t.child,t!==null))for(gd(t,i,o),t=t.sibling;t!==null;)gd(t,i,o),t=t.sibling}function Mc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(u===27&&Ur(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Mc(t,i,o),t=t.sibling;t!==null;)Mc(t,i,o),t=t.sibling}function Q0(t){var i=t.stateNode,o=t.memoizedProps;try{for(var u=t.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Hn(i,u,o),i[_n]=t,i[Un]=o}catch(_){kt(t,t.return,_)}}var za=!1,yn=!1,vd=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function tb(t,i){if(t=t.containerInfo,Bd=kc,t=cg(t),fh(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var E=0,U=-1,V=-1,re=0,pe=0,ve=t,le=null;t:for(;;){for(var fe;ve!==o||p!==0&&ve.nodeType!==3||(U=E+p),ve!==_||u!==0&&ve.nodeType!==3||(V=E+u),ve.nodeType===3&&(E+=ve.nodeValue.length),(fe=ve.firstChild)!==null;)le=ve,ve=fe;for(;;){if(ve===t)break t;if(le===o&&++re===p&&(U=E),le===_&&++pe===u&&(V=E),(fe=ve.nextSibling)!==null)break;ve=le,le=ve.parentNode}ve=fe}o=U===-1||V===-1?null:{start:U,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hd={focusedElem:t,selectionRange:o},kc=!1,Cn=i;Cn!==null;)if(i=Cn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Cn=t;else for(;Cn!==null;){switch(i=Cn,_=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(o=0;o<t.length;o++)p=t[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&_!==null){t=void 0,o=i,p=_.memoizedProps,_=_.memoizedState,u=o.stateNode;try{var je=gs(o.type,p);t=u.getSnapshotBeforeUpdate(je,_),u.__reactInternalSnapshotBeforeUpdate=t}catch(ot){kt(o,o.return,ot)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,o=t.nodeType,o===9)kd(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Cn=t;break}Cn=i.return}}function $0(t,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ba(t,o),u&4&&zl(5,o);break;case 1:if(Ba(t,o),u&4)if(t=o.stateNode,i===null)try{t.componentDidMount()}catch(E){kt(o,o.return,E)}else{var p=gs(o.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(p,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(o,o.return,E)}}u&64&&Y0(o),u&512&&Il(o,o.return);break;case 3:if(Ba(t,o),u&64&&(t=o.updateQueue,t!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{zg(t,i)}catch(E){kt(o,o.return,E)}}break;case 27:i===null&&u&4&&Q0(o);case 26:case 5:Ba(t,o),i===null&&u&4&&Z0(o),u&512&&Il(o,o.return);break;case 12:Ba(t,o);break;case 31:Ba(t,o),u&4&&nv(t,o);break;case 13:Ba(t,o),u&4&&iv(t,o),u&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=cb.bind(null,o),Db(t,o))));break;case 22:if(u=o.memoizedState!==null||za,!u){i=i!==null&&i.memoizedState!==null||yn,p=za;var _=yn;za=u,(yn=i)&&!_?Ha(t,o,(o.subtreeFlags&8772)!==0):Ba(t,o),za=p,yn=_}break;case 30:break;default:Ba(t,o)}}function ev(t){var i=t.alternate;i!==null&&(t.alternate=null,ev(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&hl(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,ti=!1;function Ia(t,i,o){for(o=o.child;o!==null;)tv(t,i,o),o=o.sibling}function tv(t,i,o){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,o)}catch{}switch(o.tag){case 26:yn||ca(o,i),Ia(t,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yn||ca(o,i);var u=nn,p=ti;Ur(o.type)&&(nn=o.stateNode,ti=!1),Ia(t,i,o),Yl(o.stateNode),nn=u,ti=p;break;case 5:yn||ca(o,i);case 6:if(u=nn,p=ti,nn=null,Ia(t,i,o),nn=u,ti=p,nn!==null)if(ti)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(o.stateNode)}catch(_){kt(o,i,_)}else try{nn.removeChild(o.stateNode)}catch(_){kt(o,i,_)}break;case 18:nn!==null&&(ti?(t=nn,Yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),bo(t)):Yv(nn,o.stateNode));break;case 4:u=nn,p=ti,nn=o.stateNode.containerInfo,ti=!0,Ia(t,i,o),nn=u,ti=p;break;case 0:case 11:case 14:case 15:br(2,o,i),yn||br(4,o,i),Ia(t,i,o);break;case 1:yn||(ca(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&j0(o,i,u)),Ia(t,i,o);break;case 21:Ia(t,i,o);break;case 22:yn=(u=yn)||o.memoizedState!==null,Ia(t,i,o),yn=u;break;default:Ia(t,i,o)}}function nv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bo(t)}catch(o){kt(i,i.return,o)}}}function iv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bo(t)}catch(o){kt(i,i.return,o)}}function nb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new J0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new J0),i;default:throw Error(a(435,t.tag))}}function Ec(t,i){var o=nb(t);i.forEach(function(u){if(!o.has(u)){o.add(u);var p=fb.bind(null,t,u);u.then(p,p)}})}function ni(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],_=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 27:if(Ur(U.type)){nn=U.stateNode,ti=!1;break e}break;case 5:nn=U.stateNode,ti=!1;break e;case 3:case 4:nn=U.stateNode.containerInfo,ti=!0;break e}U=U.return}if(nn===null)throw Error(a(160));tv(_,E,p),nn=null,ti=!1,_=p.alternate,_!==null&&(_.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)av(i,t),i=i.sibling}var Ji=null;function av(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(i,t),ii(t),u&4&&(br(3,t,t.return),zl(3,t),br(5,t,t.return));break;case 1:ni(i,t),ii(t),u&512&&(yn||o===null||ca(o,o.return)),u&64&&za&&(t=t.updateQueue,t!==null&&(u=t.callbacks,u!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Ji;if(ni(i,t),ii(t),u&512&&(yn||o===null||ca(o,o.return)),u&4){var _=o!==null?o.memoizedState:null;if(u=t.memoizedState,o===null)if(u===null)if(t.stateNode===null){e:{u=t.type,o=t.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":_=p.getElementsByTagName("title")[0],(!_||_[ns]||_[_n]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=p.createElement(u),p.head.insertBefore(_,p.querySelector("head > title"))),Hn(_,u,o),_[_n]=t,N(_),u=_;break e;case"link":var E=ax("link","href",p).get(u+(o.href||""));if(E){for(var U=0;U<E.length;U++)if(_=E[U],_.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&_.getAttribute("rel")===(o.rel==null?null:o.rel)&&_.getAttribute("title")===(o.title==null?null:o.title)&&_.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(U,1);break t}}_=p.createElement(u),Hn(_,u,o),p.head.appendChild(_);break;case"meta":if(E=ax("meta","content",p).get(u+(o.content||""))){for(U=0;U<E.length;U++)if(_=E[U],_.getAttribute("content")===(o.content==null?null:""+o.content)&&_.getAttribute("name")===(o.name==null?null:o.name)&&_.getAttribute("property")===(o.property==null?null:o.property)&&_.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&_.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(U,1);break t}}_=p.createElement(u),Hn(_,u,o),p.head.appendChild(_);break;default:throw Error(a(468,u))}_[_n]=t,N(_),u=_}t.stateNode=u}else rx(p,t.type,t.stateNode);else t.stateNode=ix(p,u,t.memoizedProps);else _!==u?(_===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):_.count--,u===null?rx(p,t.type,t.stateNode):ix(p,u,t.memoizedProps)):u===null&&t.stateNode!==null&&md(t,t.memoizedProps,o.memoizedProps)}break;case 27:ni(i,t),ii(t),u&512&&(yn||o===null||ca(o,o.return)),o!==null&&u&4&&md(t,t.memoizedProps,o.memoizedProps);break;case 5:if(ni(i,t),ii(t),u&512&&(yn||o===null||ca(o,o.return)),t.flags&32){p=t.stateNode;try{bn(p,"")}catch(je){kt(t,t.return,je)}}u&4&&t.stateNode!=null&&(p=t.memoizedProps,md(t,p,o!==null?o.memoizedProps:p)),u&1024&&(vd=!0);break;case 6:if(ni(i,t),ii(t),u&4){if(t.stateNode===null)throw Error(a(162));u=t.memoizedProps,o=t.stateNode;try{o.nodeValue=u}catch(je){kt(t,t.return,je)}}break;case 3:if(Bc=null,p=Ji,Ji=zc(i.containerInfo),ni(i,t),Ji=p,ii(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{bo(i.containerInfo)}catch(je){kt(t,t.return,je)}vd&&(vd=!1,rv(t));break;case 4:u=Ji,Ji=zc(t.stateNode.containerInfo),ni(i,t),ii(t),Ji=u;break;case 12:ni(i,t),ii(t);break;case 31:ni(i,t),ii(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Ec(t,u)));break;case 13:ni(i,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tc=A()),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Ec(t,u)));break;case 22:p=t.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,re=za,pe=yn;if(za=re||p,yn=pe||V,ni(i,t),yn=pe,za=re,ii(t),u&8192)e:for(i=t.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(o===null||V||za||yn||vs(t)),o=null,i=t;;){if(i.tag===5||i.tag===26){if(o===null){V=o=i;try{if(_=V.stateNode,p)E=_.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{U=V.stateNode;var ve=V.memoizedProps.style,le=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;U.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(je){kt(V,V.return,je)}}}else if(i.tag===6){if(o===null){V=i;try{V.stateNode.nodeValue=p?"":V.memoizedProps}catch(je){kt(V,V.return,je)}}}else if(i.tag===18){if(o===null){V=i;try{var fe=V.stateNode;p?jv(fe,!0):jv(V.stateNode,!1)}catch(je){kt(V,V.return,je)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=t.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Ec(t,o))));break;case 19:ni(i,t),ii(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Ec(t,u)));break;case 30:break;case 21:break;default:ni(i,t),ii(t)}}function ii(t){var i=t.flags;if(i&2){try{for(var o,u=t.return;u!==null;){if(K0(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,_=_d(t);Mc(t,_,p);break;case 5:var E=o.stateNode;o.flags&32&&(bn(E,""),o.flags&=-33);var U=_d(t);Mc(t,U,E);break;case 3:case 4:var V=o.stateNode.containerInfo,re=_d(t);gd(t,re,V);break;default:throw Error(a(161))}}catch(pe){kt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function rv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;rv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ba(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$0(t,i.alternate,i),i=i.sibling}function vs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:br(4,i,i.return),vs(i);break;case 1:ca(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&j0(i,i.return,o),vs(i);break;case 27:Yl(i.stateNode);case 26:case 5:ca(i,i.return),vs(i);break;case 22:i.memoizedState===null&&vs(i);break;case 30:vs(i);break;default:vs(i)}t=t.sibling}}function Ha(t,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,p=t,_=i,E=_.flags;switch(_.tag){case 0:case 11:case 15:Ha(p,_,o),zl(4,_);break;case 1:if(Ha(p,_,o),u=_,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(re){kt(u,u.return,re)}if(u=_,p=u.updateQueue,p!==null){var U=u.stateNode;try{var V=p.shared.hiddenCallbacks;if(V!==null)for(p.shared.hiddenCallbacks=null,p=0;p<V.length;p++)Fg(V[p],U)}catch(re){kt(u,u.return,re)}}o&&E&64&&Y0(_),Il(_,_.return);break;case 27:Q0(_);case 26:case 5:Ha(p,_,o),o&&u===null&&E&4&&Z0(_),Il(_,_.return);break;case 12:Ha(p,_,o);break;case 31:Ha(p,_,o),o&&E&4&&nv(p,_);break;case 13:Ha(p,_,o),o&&E&4&&iv(p,_);break;case 22:_.memoizedState===null&&Ha(p,_,o),Il(_,_.return);break;case 30:break;default:Ha(p,_,o)}i=i.sibling}}function xd(t,i){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&bl(o))}function yd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bl(t))}function $i(t,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)sv(t,i,o,u),i=i.sibling}function sv(t,i,o,u){var p=i.flags;switch(i.tag){case 0:case 11:case 15:$i(t,i,o,u),p&2048&&zl(9,i);break;case 1:$i(t,i,o,u);break;case 3:$i(t,i,o,u),p&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bl(t)));break;case 12:if(p&2048){$i(t,i,o,u),t=i.stateNode;try{var _=i.memoizedProps,E=_.id,U=_.onPostCommit;typeof U=="function"&&U(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(i,i.return,V)}}else $i(t,i,o,u);break;case 31:$i(t,i,o,u);break;case 13:$i(t,i,o,u);break;case 23:break;case 22:_=i.stateNode,E=i.alternate,i.memoizedState!==null?_._visibility&2?$i(t,i,o,u):Bl(t,i):_._visibility&2?$i(t,i,o,u):(_._visibility|=2,ho(t,i,o,u,(i.subtreeFlags&10256)!==0||!1)),p&2048&&xd(E,i);break;case 24:$i(t,i,o,u),p&2048&&yd(i.alternate,i);break;default:$i(t,i,o,u)}}function ho(t,i,o,u,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var _=t,E=i,U=o,V=u,re=E.flags;switch(E.tag){case 0:case 11:case 15:ho(_,E,U,V,p),zl(8,E);break;case 23:break;case 22:var pe=E.stateNode;E.memoizedState!==null?pe._visibility&2?ho(_,E,U,V,p):Bl(_,E):(pe._visibility|=2,ho(_,E,U,V,p)),p&&re&2048&&xd(E.alternate,E);break;case 24:ho(_,E,U,V,p),p&&re&2048&&yd(E.alternate,E);break;default:ho(_,E,U,V,p)}i=i.sibling}}function Bl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=t,u=i,p=u.flags;switch(u.tag){case 22:Bl(o,u),p&2048&&xd(u.alternate,u);break;case 24:Bl(o,u),p&2048&&yd(u.alternate,u);break;default:Bl(o,u)}i=i.sibling}}var Hl=8192;function po(t,i,o){if(t.subtreeFlags&Hl)for(t=t.child;t!==null;)ov(t,i,o),t=t.sibling}function ov(t,i,o){switch(t.tag){case 26:po(t,i,o),t.flags&Hl&&t.memoizedState!==null&&Vb(o,Ji,t.memoizedState,t.memoizedProps);break;case 5:po(t,i,o);break;case 3:case 4:var u=Ji;Ji=zc(t.stateNode.containerInfo),po(t,i,o),Ji=u;break;case 22:t.memoizedState===null&&(u=t.alternate,u!==null&&u.memoizedState!==null?(u=Hl,Hl=16777216,po(t,i,o),Hl=u):po(t,i,o));break;default:po(t,i,o)}}function lv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Gl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Cn=u,cv(u,t)}lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uv(t),t=t.sibling}function uv(t){switch(t.tag){case 0:case 11:case 15:Gl(t),t.flags&2048&&br(9,t,t.return);break;case 3:Gl(t);break;case 12:Gl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,bc(t)):Gl(t);break;default:Gl(t)}}function bc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Cn=u,cv(u,t)}lv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:br(8,i,i.return),bc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,bc(i));break;default:bc(i)}t=t.sibling}}function cv(t,i){for(;Cn!==null;){var o=Cn;switch(o.tag){case 0:case 11:case 15:br(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:bl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Cn=u;else e:for(o=t;Cn!==null;){u=Cn;var p=u.sibling,_=u.return;if(ev(u),u===o){Cn=null;break e}if(p!==null){p.return=_,Cn=p;break e}Cn=_}}}var ib={getCacheForType:function(t){var i=In(gn),o=i.data.get(t);return o===void 0&&(o=t(),i.data.set(t,o)),o},cacheSignal:function(){return In(gn).controller.signal}},ab=typeof WeakMap=="function"?WeakMap:Map,It=0,Zt=null,Mt=null,bt=0,Vt=0,gi=null,Tr=!1,mo=!1,Sd=!1,Ga=0,cn=0,Ar=0,xs=0,Md=0,vi=0,_o=0,Vl=null,ai=null,Ed=!1,Tc=0,fv=0,Ac=1/0,Rc=null,Rr=null,Tn=0,Cr=null,go=null,Va=0,bd=0,Td=null,hv=null,kl=0,Ad=null;function xi(){return(It&2)!==0&&bt!==0?bt&-bt:F.T!==null?Ld():cl()}function dv(){if(vi===0)if((bt&536870912)===0||At){var t=we;we<<=1,(we&3932160)===0&&(we=262144),vi=t}else vi=536870912;return t=mi.current,t!==null&&(t.flags|=32),vi}function ri(t,i,o){(t===Zt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(vo(t,0),wr(t,bt,vi,!1)),kn(t,o),((It&2)===0||t!==Zt)&&(t===Zt&&((It&2)===0&&(xs|=o),cn===4&&wr(t,bt,vi,!1)),fa(t))}function pv(t,i,o){if((It&6)!==0)throw Error(a(327));var u=!o&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),p=u?ob(t,i):Cd(t,i,!0),_=u;do{if(p===0){mo&&!u&&wr(t,i,0,!1);break}else{if(o=t.current.alternate,_&&!rb(o)){p=Cd(t,i,!1),_=!1;continue}if(p===2){if(_=i,t.errorRecoveryDisabledLanes&_)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var U=t;p=Vl;var V=U.current.memoizedState.isDehydrated;if(V&&(vo(U,E).flags|=256),E=Cd(U,E,!1),E!==2){if(Sd&&!V){U.errorRecoveryDisabledLanes|=_,xs|=_,p=4;break e}_=ai,ai=p,_!==null&&(ai===null?ai=_:ai.push.apply(ai,_))}p=E}if(_=!1,p!==2)continue}}if(p===1){vo(t,0),wr(t,i,0,!0);break}e:{switch(u=t,_=p,_){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:wr(u,i,vi,!Tr);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Tc+300-A(),10<p)){if(wr(u,i,vi,!Tr),Se(u,0,!0)!==0)break e;Va=i,u.timeoutHandle=Wv(mv.bind(null,u,o,ai,Rc,Ed,i,vi,xs,_o,Tr,_,"Throttled",-0,0),p);break e}mv(u,o,ai,Rc,Ed,i,vi,xs,_o,Tr,_,null,-0,0)}}break}while(!0);fa(t)}function mv(t,i,o,u,p,_,E,U,V,re,pe,ve,le,fe){if(t.timeoutHandle=-1,ve=i.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ra},ov(i,_,ve);var je=(_&62914560)===_?Tc-A():(_&4194048)===_?fv-A():0;if(je=kb(ve,je),je!==null){Va=_,t.cancelPendingCommit=je(Ev.bind(null,t,i,_,o,u,p,E,U,V,pe,ve,null,le,fe)),wr(t,_,E,!re);return}}Ev(t,i,_,o,u,p,E,U,V)}function rb(t){for(var i=t;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],_=p.getSnapshot;p=p.value;try{if(!di(_(),p))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(t,i,o,u){i&=~Md,i&=~xs,t.suspendedLanes|=i,t.pingedLanes&=~i,u&&(t.warmLanes|=i),u=t.expirationTimes;for(var p=i;0<p;){var _=31-Ge(p),E=1<<_;u[_]=-1,p&=~E}o!==0&&Bu(t,o,i)}function Cc(){return(It&6)===0?(Xl(0),!1):!0}function Rd(){if(Mt!==null){if(Vt===0)var t=Mt.return;else t=Mt,Ua=cs=null,kh(t),oo=null,Al=0,t=Mt;for(;t!==null;)q0(t.alternate,t),t=t.return;Mt=null}}function vo(t,i){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,Tb(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Va=0,Rd(),Zt=t,Mt=o=wa(t.current,null),bt=i,Vt=0,gi=null,Tr=!1,mo=De(t,i),Sd=!1,_o=vi=Md=xs=Ar=cn=0,ai=Vl=null,Ed=!1,(i&8)!==0&&(i|=i&32);var u=t.entangledLanes;if(u!==0)for(t=t.entanglements,u&=i;0<u;){var p=31-Ge(u),_=1<<p;i|=t[p],u&=~_}return Ga=i,Zu(),o}function _v(t,i){mt=null,F.H=Ol,i===so||i===ic?(i=Lg(),Vt=3):i===Uh?(i=Lg(),Vt=4):Vt=i===rd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,Mt===null&&(cn=1,gc(t,Ni(i,t.current)))}function gv(){var t=mi.current;return t===null?!0:(bt&4194048)===bt?zi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===zi:!1}function vv(){var t=F.H;return F.H=Ol,t===null?Ol:t}function xv(){var t=F.A;return F.A=ib,t}function wc(){cn=4,Tr||(bt&4194048)!==bt&&mi.current!==null||(mo=!0),(Ar&134217727)===0&&(xs&134217727)===0||Zt===null||wr(Zt,bt,vi,!1)}function Cd(t,i,o){var u=It;It|=2;var p=vv(),_=xv();(Zt!==t||bt!==i)&&(Rc=null,vo(t,i)),i=!1;var E=cn;e:do try{if(Vt!==0&&Mt!==null){var U=Mt,V=gi;switch(Vt){case 8:Rd(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var re=Vt;if(Vt=0,gi=null,xo(t,U,V,re),o&&mo){E=0;break e}break;default:re=Vt,Vt=0,gi=null,xo(t,U,V,re)}}sb(),E=cn;break}catch(pe){_v(t,pe)}while(!0);return i&&t.shellSuspendCounter++,Ua=cs=null,It=u,F.H=p,F.A=_,Mt===null&&(Zt=null,bt=0,Zu()),E}function sb(){for(;Mt!==null;)yv(Mt)}function ob(t,i){var o=It;It|=2;var u=vv(),p=xv();Zt!==t||bt!==i?(Rc=null,Ac=A()+500,vo(t,i)):mo=De(t,i);e:do try{if(Vt!==0&&Mt!==null){i=Mt;var _=gi;t:switch(Vt){case 1:Vt=0,gi=null,xo(t,i,_,1);break;case 2:case 9:if(Dg(_)){Vt=0,gi=null,Sv(i);break}i=function(){Vt!==2&&Vt!==9||Zt!==t||(Vt=7),fa(t)},_.then(i,i);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Dg(_)?(Vt=0,gi=null,Sv(i)):(Vt=0,gi=null,xo(t,i,_,7));break;case 5:var E=null;switch(Mt.tag){case 26:E=Mt.memoizedState;case 5:case 27:var U=Mt;if(E?sx(E):U.stateNode.complete){Vt=0,gi=null;var V=U.sibling;if(V!==null)Mt=V;else{var re=U.return;re!==null?(Mt=re,Dc(re)):Mt=null}break t}}Vt=0,gi=null,xo(t,i,_,5);break;case 6:Vt=0,gi=null,xo(t,i,_,6);break;case 8:Rd(),cn=6;break e;default:throw Error(a(462))}}lb();break}catch(pe){_v(t,pe)}while(!0);return Ua=cs=null,F.H=u,F.A=p,It=o,Mt!==null?0:(Zt=null,bt=0,Zu(),cn)}function lb(){for(;Mt!==null&&!qe();)yv(Mt)}function yv(t){var i=X0(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,i===null?Dc(t):Mt=i}function Sv(t){var i=t,o=i.alternate;switch(i.tag){case 15:case 0:i=I0(o,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=I0(o,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:kh(i);default:q0(o,i),i=Mt=xg(i,Ga),i=X0(o,i,Ga)}t.memoizedProps=t.pendingProps,i===null?Dc(t):Mt=i}function xo(t,i,o,u){Ua=cs=null,kh(i),oo=null,Al=0;var p=i.return;try{if(KE(t,p,i,o,bt)){cn=1,gc(t,Ni(o,t.current)),Mt=null;return}}catch(_){if(p!==null)throw Mt=p,_;cn=1,gc(t,Ni(o,t.current)),Mt=null;return}i.flags&32768?(At||u===1?t=!0:mo||(bt&536870912)!==0?t=!1:(Tr=t=!0,(u===2||u===9||u===3||u===6)&&(u=mi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Mv(i,t)):Dc(i)}function Dc(t){var i=t;do{if((i.flags&32768)!==0){Mv(i,Tr);return}t=i.return;var o=$E(i.alternate,i,Ga);if(o!==null){Mt=o;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);cn===0&&(cn=5)}function Mv(t,i){do{var o=eb(t.alternate,t);if(o!==null){o.flags&=32767,Mt=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=o}while(t!==null);cn=6,Mt=null}function Ev(t,i,o,u,p,_,E,U,V){t.cancelPendingCommit=null;do Uc();while(Tn!==0);if((It&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(_=i.lanes|i.childLanes,_|=_h,ji(t,o,_,E,U,V),t===Zt&&(Mt=Zt=null,bt=0),go=i,Cr=t,Va=o,bd=_,Td=p,hv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hb(de,function(){return Cv(),null})):(t.callbackNode=null,t.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,p=H.p,H.p=2,E=It,It|=4;try{tb(t,i,o)}finally{It=E,H.p=p,F.T=u}}Tn=1,bv(),Tv(),Av()}}function bv(){if(Tn===1){Tn=0;var t=Cr,i=go,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=F.T,F.T=null;var u=H.p;H.p=2;var p=It;It|=4;try{av(i,t);var _=Hd,E=cg(t.containerInfo),U=_.focusedElem,V=_.selectionRange;if(E!==U&&U&&U.ownerDocument&&ug(U.ownerDocument.documentElement,U)){if(V!==null&&fh(U)){var re=V.start,pe=V.end;if(pe===void 0&&(pe=re),"selectionStart"in U)U.selectionStart=re,U.selectionEnd=Math.min(pe,U.value.length);else{var ve=U.ownerDocument||document,le=ve&&ve.defaultView||window;if(le.getSelection){var fe=le.getSelection(),je=U.textContent.length,ot=Math.min(V.start,je),Yt=V.end===void 0?ot:Math.min(V.end,je);!fe.extend&&ot>Yt&&(E=Yt,Yt=ot,ot=E);var Q=lg(U,ot),X=lg(U,Yt);if(Q&&X&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ae=ve.createRange();ae.setStart(Q.node,Q.offset),fe.removeAllRanges(),ot>Yt?(fe.addRange(ae),fe.extend(X.node,X.offset)):(ae.setEnd(X.node,X.offset),fe.addRange(ae))}}}}for(ve=[],fe=U;fe=fe.parentNode;)fe.nodeType===1&&ve.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<ve.length;U++){var ge=ve[U];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}kc=!!Bd,Hd=Bd=null}finally{It=p,H.p=u,F.T=o}}t.current=i,Tn=2}}function Tv(){if(Tn===2){Tn=0;var t=Cr,i=go,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=F.T,F.T=null;var u=H.p;H.p=2;var p=It;It|=4;try{$0(t,i.alternate,i)}finally{It=p,H.p=u,F.T=o}}Tn=3}}function Av(){if(Tn===4||Tn===3){Tn=0,I();var t=Cr,i=go,o=Va,u=hv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,go=Cr=null,Rv(t,t.pendingLanes));var p=t.pendingLanes;if(p===0&&(Rr=null),ks(o),i=i.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,p=H.p,H.p=2,F.T=null;try{for(var _=t.onRecoverableError,E=0;E<u.length;E++){var U=u[E];_(U.value,{componentStack:U.stack})}}finally{F.T=i,H.p=p}}(Va&3)!==0&&Uc(),fa(t),p=t.pendingLanes,(o&261930)!==0&&(p&42)!==0?t===Ad?kl++:(kl=0,Ad=t):kl=0,Xl(0)}}function Rv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,bl(i)))}function Uc(){return bv(),Tv(),Av(),Cv()}function Cv(){if(Tn!==5)return!1;var t=Cr,i=bd;bd=0;var o=ks(Va),u=F.T,p=H.p;try{H.p=32>o?32:o,F.T=null,o=Td,Td=null;var _=Cr,E=Va;if(Tn=0,go=Cr=null,Va=0,(It&6)!==0)throw Error(a(331));var U=It;if(It|=4,uv(_.current),sv(_,_.current,E,o),It=U,Xl(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,_)}catch{}return!0}finally{H.p=p,F.T=u,Rv(t,i)}}function wv(t,i,o){i=Ni(o,i),i=ad(t.stateNode,i,2),t=Sr(t,i,2),t!==null&&(kn(t,2),fa(t))}function kt(t,i,o){if(t.tag===3)wv(t,t,o);else for(;i!==null;){if(i.tag===3){wv(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Rr===null||!Rr.has(u))){t=Ni(o,t),o=D0(2),u=Sr(i,o,2),u!==null&&(U0(o,u,i,t),kn(u,2),fa(u));break}}i=i.return}}function wd(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new ab;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(o)||(Sd=!0,p.add(o),t=ub.bind(null,t,i,o),i.then(t,t))}function ub(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,Zt===t&&(bt&o)===o&&(cn===4||cn===3&&(bt&62914560)===bt&&300>A()-Tc?(It&2)===0&&vo(t,0):Md|=o,_o===bt&&(_o=0)),fa(t)}function Dv(t,i){i===0&&(i=Ht()),t=os(t,i),t!==null&&(kn(t,i),fa(t))}function cb(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Dv(t,o)}function fb(t,i){var o=0;switch(t.tag){case 31:case 13:var u=t.stateNode,p=t.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=t.stateNode;break;case 22:u=t.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Dv(t,o)}function hb(t,i){return ct(t,i)}var Lc=null,yo=null,Dd=!1,Nc=!1,Ud=!1,Dr=0;function fa(t){t!==yo&&t.next===null&&(yo===null?Lc=yo=t:yo=yo.next=t),Nc=!0,Dd||(Dd=!0,pb())}function Xl(t,i){if(!Ud&&Nc){Ud=!0;do for(var o=!1,u=Lc;u!==null;){if(t!==0){var p=u.pendingLanes;if(p===0)var _=0;else{var E=u.suspendedLanes,U=u.pingedLanes;_=(1<<31-Ge(42|t)+1)-1,_&=p&~(E&~U),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(o=!0,Ov(u,_))}else _=bt,_=Se(u,u===Zt?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||De(u,_)||(o=!0,Ov(u,_));u=u.next}while(o);Ud=!1}}function db(){Uv()}function Uv(){Nc=Dd=!1;var t=0;Dr!==0&&bb()&&(t=Dr);for(var i=A(),o=null,u=Lc;u!==null;){var p=u.next,_=Lv(u,i);_===0?(u.next=null,o===null?Lc=p:o.next=p,p===null&&(yo=o)):(o=u,(t!==0||(_&3)!==0)&&(Nc=!0)),u=p}Tn!==0&&Tn!==5||Xl(t),Dr!==0&&(Dr=0)}function Lv(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,p=t.expirationTimes,_=t.pendingLanes&-62914561;0<_;){var E=31-Ge(_),U=1<<E,V=p[E];V===-1?((U&o)===0||(U&u)!==0)&&(p[E]=ft(U,i)):V<=i&&(t.expiredLanes|=U),_&=~U}if(i=Zt,o=bt,o=Se(t,t===i?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u=t.callbackNode,o===0||t===i&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return u!==null&&u!==null&&wt(u),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||De(t,o)){if(i=o&-o,i===t.callbackPriority)return i;switch(u!==null&&wt(u),ks(o)){case 2:case 8:o=Me;break;case 32:o=de;break;case 268435456:o=Ne;break;default:o=de}return u=Nv.bind(null,t),o=ct(o,u),t.callbackPriority=i,t.callbackNode=o,i}return u!==null&&u!==null&&wt(u),t.callbackPriority=2,t.callbackNode=null,2}function Nv(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Uc()&&t.callbackNode!==o)return null;var u=bt;return u=Se(t,t===Zt?u:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u===0?null:(pv(t,u,i),Lv(t,A()),t.callbackNode!=null&&t.callbackNode===o?Nv.bind(null,t):null)}function Ov(t,i){if(Uc())return null;pv(t,i,!0)}function pb(){Ab(function(){(It&6)!==0?ct(_e,db):Uv()})}function Ld(){if(Dr===0){var t=ao;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Dr=t}return Dr}function Pv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gu(""+t)}function Fv(t,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,t.id&&o.setAttribute("form",t.id),i.parentNode.insertBefore(o,i),t=new FormData(t),o.parentNode.removeChild(o),t}function mb(t,i,o,u,p){if(i==="submit"&&o&&o.stateNode===p){var _=Pv((p[Un]||null).action),E=u.submitter;E&&(i=(i=E[Un]||null)?Pv(i.formAction):E.getAttribute("formAction"),i!==null&&(_=i,E=null));var U=new Wu("action","action",null,u,p);t.push({event:U,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Dr!==0){var V=E?Fv(p,E):new FormData(p);Jh(o,{pending:!0,data:V,method:p.method,action:_},null,V)}}else typeof _=="function"&&(U.preventDefault(),V=E?Fv(p,E):new FormData(p),Jh(o,{pending:!0,data:V,method:p.method,action:_},_,V))},currentTarget:p}]})}}for(var Nd=0;Nd<mh.length;Nd++){var Od=mh[Nd],_b=Od.toLowerCase(),gb=Od[0].toUpperCase()+Od.slice(1);Qi(_b,"on"+gb)}Qi(dg,"onAnimationEnd"),Qi(pg,"onAnimationIteration"),Qi(mg,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(NE,"onTransitionRun"),Qi(OE,"onTransitionStart"),Qi(PE,"onTransitionCancel"),Qi(_g,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function zv(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],p=u.event;u=u.listeners;e:{var _=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],V=U.instance,re=U.currentTarget;if(U=U.listener,V!==_&&p.isPropagationStopped())break e;_=U,p.currentTarget=re;try{_(p)}catch(pe){ju(pe)}p.currentTarget=null,_=V}else for(E=0;E<u.length;E++){if(U=u[E],V=U.instance,re=U.currentTarget,U=U.listener,V!==_&&p.isPropagationStopped())break e;_=U,p.currentTarget=re;try{_(p)}catch(pe){ju(pe)}p.currentTarget=null,_=V}}}}function Et(t,i){var o=i[Xs];o===void 0&&(o=i[Xs]=new Set);var u=t+"__bubble";o.has(u)||(Iv(i,t,2,!1),o.add(u))}function Pd(t,i,o){var u=0;i&&(u|=4),Iv(o,t,u,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[Oc]){t[Oc]=!0,K.forEach(function(o){o!=="selectionchange"&&(vb.has(o)||Pd(o,!1,t),Pd(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Pd("selectionchange",!1,i))}}function Iv(t,i,o,u){switch(dx(i)){case 2:var p=qb;break;case 8:p=Yb;break;default:p=Qd}o=p.bind(null,i,o,t),p=void 0,!nh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?t.addEventListener(i,o,{capture:!0,passive:p}):t.addEventListener(i,o,!0):p!==void 0?t.addEventListener(i,o,{passive:p}):t.addEventListener(i,o,!1)}function zd(t,i,o,u,p){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===p)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;U!==null;){if(E=fr(U),E===null)return;if(V=E.tag,V===5||V===6||V===26||V===27){u=_=E;continue e}U=U.parentNode}}u=u.return}k_(function(){var re=_,pe=eh(o),ve=[];e:{var le=gg.get(t);if(le!==void 0){var fe=Wu,je=t;switch(t){case"keypress":if(ku(o)===0)break e;case"keydown":case"keyup":fe=fE;break;case"focusin":je="focus",fe=sh;break;case"focusout":je="blur",fe=sh;break;case"beforeblur":case"afterblur":fe=sh;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=q_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=$M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=pE;break;case dg:case pg:case mg:fe=nE;break;case _g:fe=_E;break;case"scroll":case"scrollend":fe=QM;break;case"wheel":fe=vE;break;case"copy":case"cut":case"paste":fe=aE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=j_;break;case"toggle":case"beforetoggle":fe=yE}var ot=(i&4)!==0,Yt=!ot&&(t==="scroll"||t==="scrollend"),Q=ot?le!==null?le+"Capture":null:le;ot=[];for(var X=re,ae;X!==null;){var ge=X;if(ae=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ae===null||Q===null||(ge=dl(X,Q),ge!=null&&ot.push(ql(X,ge,ae))),Yt)break;X=X.return}0<ot.length&&(le=new fe(le,je,null,o,pe),ve.push({event:le,listeners:ot}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&o!==$f&&(je=o.relatedTarget||o.fromElement)&&(fr(je)||je[Zi]))break e;if((fe||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(je=o.relatedTarget||o.toElement,fe=re,je=je?fr(je):null,je!==null&&(Yt=l(je),ot=je.tag,je!==Yt||ot!==5&&ot!==27&&ot!==6)&&(je=null)):(fe=null,je=re),fe!==je)){if(ot=q_,ge="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ot=j_,ge="onPointerLeave",Q="onPointerEnter",X="pointer"),Yt=fe==null?le:is(fe),ae=je==null?le:is(je),le=new ot(ge,X+"leave",fe,o,pe),le.target=Yt,le.relatedTarget=ae,ge=null,fr(pe)===re&&(ot=new ot(Q,X+"enter",je,o,pe),ot.target=ae,ot.relatedTarget=Yt,ge=ot),Yt=ge,fe&&je)t:{for(ot=xb,Q=fe,X=je,ae=0,ge=Q;ge;ge=ot(ge))ae++;ge=0;for(var nt=X;nt;nt=ot(nt))ge++;for(;0<ae-ge;)Q=ot(Q),ae--;for(;0<ge-ae;)X=ot(X),ge--;for(;ae--;){if(Q===X||X!==null&&Q===X.alternate){ot=Q;break t}Q=ot(Q),X=ot(X)}ot=null}else ot=null;fe!==null&&Bv(ve,le,fe,ot,!1),je!==null&&Yt!==null&&Bv(ve,Yt,je,ot,!0)}}e:{if(le=re?is(re):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var Nt=ng;else if(eg(le))if(ig)Nt=DE;else{Nt=CE;var Je=RE}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Ki(re.elementType)&&(Nt=ng):Nt=wE;if(Nt&&(Nt=Nt(t,re))){tg(ve,Nt,o,pe);break e}Je&&Je(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&Nn(le,"number",le.value)}switch(Je=re?is(re):window,t){case"focusin":(eg(Je)||Je.contentEditable==="true")&&(Ks=Je,hh=re,Sl=null);break;case"focusout":Sl=hh=Ks=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,fg(ve,o,pe);break;case"selectionchange":if(LE)break;case"keydown":case"keyup":fg(ve,o,pe)}var vt;if(lh)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Zs?J_(t,o)&&(Tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Tt="onCompositionStart");Tt&&(Z_&&o.locale!=="ko"&&(Zs||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Zs&&(vt=X_()):(pr=pe,ih="value"in pr?pr.value:pr.textContent,Zs=!0)),Je=Pc(re,Tt),0<Je.length&&(Tt=new Y_(Tt,t,null,o,pe),ve.push({event:Tt,listeners:Je}),vt?Tt.data=vt:(vt=$_(o),vt!==null&&(Tt.data=vt)))),(vt=ME?EE(t,o):bE(t,o))&&(Tt=Pc(re,"onBeforeInput"),0<Tt.length&&(Je=new Y_("onBeforeInput","beforeinput",null,o,pe),ve.push({event:Je,listeners:Tt}),Je.data=vt)),mb(ve,t,re,o,pe)}zv(ve,i)})}function ql(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Pc(t,i){for(var o=i+"Capture",u=[];t!==null;){var p=t,_=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||_===null||(p=dl(t,o),p!=null&&u.unshift(ql(t,p,_)),p=dl(t,i),p!=null&&u.push(ql(t,p,_))),t.tag===3)return u;t=t.return}return[]}function xb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bv(t,i,o,u,p){for(var _=i._reactName,E=[];o!==null&&o!==u;){var U=o,V=U.alternate,re=U.stateNode;if(U=U.tag,V!==null&&V===u)break;U!==5&&U!==26&&U!==27||re===null||(V=re,p?(re=dl(o,_),re!=null&&E.unshift(ql(o,re,V))):p||(re=dl(o,_),re!=null&&E.push(ql(o,re,V)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var yb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(yb,`
`).replace(Sb,"")}function Gv(t,i){return i=Hv(i),Hv(t)===i}function qt(t,i,o,u,p,_){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||bn(t,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&bn(t,""+u);break;case"className":at(t,"class",u);break;case"tabIndex":at(t,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":at(t,o,u);break;case"style":qs(t,u,_);break;case"data":if(i!=="object"){at(t,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){t.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(o);break}u=Gu(""+u),t.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(o==="formAction"?(i!=="input"&&qt(t,i,"name",p.name,p,null),qt(t,i,"formEncType",p.formEncType,p,null),qt(t,i,"formMethod",p.formMethod,p,null),qt(t,i,"formTarget",p.formTarget,p,null)):(qt(t,i,"encType",p.encType,p,null),qt(t,i,"method",p.method,p,null),qt(t,i,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(o);break}u=Gu(""+u),t.setAttribute(o,u);break;case"onClick":u!=null&&(t.onclick=Ra);break;case"onScroll":u!=null&&Et("scroll",t);break;case"onScrollEnd":u!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"multiple":t.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":t.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){t.removeAttribute("xlink:href");break}o=Gu(""+u),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(o,""+u):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":u===!0?t.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(o,u):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?t.setAttribute(o,u):t.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?t.removeAttribute(o):t.setAttribute(o,u);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ke(t,"popover",u);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ke(t,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ZM.get(o)||o,Ke(t,o,u))}}function Id(t,i,o,u,p,_){switch(o){case"style":qs(t,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));t.innerHTML=o}}break;case"children":typeof u=="string"?bn(t,u):(typeof u=="number"||typeof u=="bigint")&&bn(t,""+u);break;case"onScroll":u!=null&&Et("scroll",t);break;case"onScrollEnd":u!=null&&Et("scrollend",t);break;case"onClick":u!=null&&(t.onclick=Ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),i=o.slice(2,p?o.length-7:void 0),_=t[Un]||null,_=_!=null?_[o]:null,typeof _=="function"&&t.removeEventListener(i,_,p),typeof u=="function")){typeof _!="function"&&_!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(i,u,p);break e}o in t?t[o]=u:u===!0?t.setAttribute(o,""):Ke(t,o,u)}}}function Hn(t,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var u=!1,p=!1,_;for(_ in o)if(o.hasOwnProperty(_)){var E=o[_];if(E!=null)switch(_){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,_,E,o,null)}}p&&qt(t,i,"srcSet",o.srcSet,o,null),u&&qt(t,i,"src",o.src,o,null);return;case"input":Et("invalid",t);var U=_=E=p=null,V=null,re=null;for(u in o)if(o.hasOwnProperty(u)){var pe=o[u];if(pe!=null)switch(u){case"name":p=pe;break;case"type":E=pe;break;case"checked":V=pe;break;case"defaultChecked":re=pe;break;case"value":_=pe;break;case"defaultValue":U=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:qt(t,i,u,pe,o,null)}}Aa(t,_,U,V,re,E,p,!1);return;case"select":Et("invalid",t),u=E=_=null;for(p in o)if(o.hasOwnProperty(p)&&(U=o[p],U!=null))switch(p){case"value":_=U;break;case"defaultValue":E=U;break;case"multiple":u=U;default:qt(t,i,p,U,o,null)}i=_,o=E,t.multiple=!!u,i!=null?Ui(t,!!u,i,!1):o!=null&&Ui(t,!!u,o,!0);return;case"textarea":Et("invalid",t),_=p=u=null;for(E in o)if(o.hasOwnProperty(E)&&(U=o[E],U!=null))switch(E){case"value":u=U;break;case"defaultValue":p=U;break;case"children":_=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:qt(t,i,E,U,o,null)}On(t,u,p,_);return;case"option":for(V in o)o.hasOwnProperty(V)&&(u=o[V],u!=null)&&(V==="selected"?t.selected=u&&typeof u!="function"&&typeof u!="symbol":qt(t,i,V,u,o,null));return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(u=0;u<Wl.length;u++)Et(Wl[u],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in o)if(o.hasOwnProperty(re)&&(u=o[re],u!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,re,u,o,null)}return;default:if(Ki(i)){for(pe in o)o.hasOwnProperty(pe)&&(u=o[pe],u!==void 0&&Id(t,i,pe,u,o,void 0));return}}for(U in o)o.hasOwnProperty(U)&&(u=o[U],u!=null&&qt(t,i,U,u,o,null))}function Mb(t,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,_=null,E=null,U=null,V=null,re=null,pe=null;for(fe in o){var ve=o[fe];if(o.hasOwnProperty(fe)&&ve!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=ve;default:u.hasOwnProperty(fe)||qt(t,i,fe,null,u,ve)}}for(var le in u){var fe=u[le];if(ve=o[le],u.hasOwnProperty(le)&&(fe!=null||ve!=null))switch(le){case"type":_=fe;break;case"name":p=fe;break;case"checked":re=fe;break;case"defaultChecked":pe=fe;break;case"value":E=fe;break;case"defaultValue":U=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:fe!==ve&&qt(t,i,le,fe,u,ve)}}Ln(t,E,U,V,re,pe,_,p);return;case"select":fe=E=U=le=null;for(_ in o)if(V=o[_],o.hasOwnProperty(_)&&V!=null)switch(_){case"value":break;case"multiple":fe=V;default:u.hasOwnProperty(_)||qt(t,i,_,null,u,V)}for(p in u)if(_=u[p],V=o[p],u.hasOwnProperty(p)&&(_!=null||V!=null))switch(p){case"value":le=_;break;case"defaultValue":U=_;break;case"multiple":E=_;default:_!==V&&qt(t,i,p,_,u,V)}i=U,o=E,u=fe,le!=null?Ui(t,!!o,le,!1):!!u!=!!o&&(i!=null?Ui(t,!!o,i,!0):Ui(t,!!o,o?[]:"",!1));return;case"textarea":fe=le=null;for(U in o)if(p=o[U],o.hasOwnProperty(U)&&p!=null&&!u.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:qt(t,i,U,null,u,p)}for(E in u)if(p=u[E],_=o[E],u.hasOwnProperty(E)&&(p!=null||_!=null))switch(E){case"value":le=p;break;case"defaultValue":fe=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==_&&qt(t,i,E,p,u,_)}Gt(t,le,fe);return;case"option":for(var je in o)le=o[je],o.hasOwnProperty(je)&&le!=null&&!u.hasOwnProperty(je)&&(je==="selected"?t.selected=!1:qt(t,i,je,null,u,le));for(V in u)le=u[V],fe=o[V],u.hasOwnProperty(V)&&le!==fe&&(le!=null||fe!=null)&&(V==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":qt(t,i,V,le,u,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in o)le=o[ot],o.hasOwnProperty(ot)&&le!=null&&!u.hasOwnProperty(ot)&&qt(t,i,ot,null,u,le);for(re in u)if(le=u[re],fe=o[re],u.hasOwnProperty(re)&&le!==fe&&(le!=null||fe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:qt(t,i,re,le,u,fe)}return;default:if(Ki(i)){for(var Yt in o)le=o[Yt],o.hasOwnProperty(Yt)&&le!==void 0&&!u.hasOwnProperty(Yt)&&Id(t,i,Yt,void 0,u,le);for(pe in u)le=u[pe],fe=o[pe],!u.hasOwnProperty(pe)||le===fe||le===void 0&&fe===void 0||Id(t,i,pe,le,u,fe);return}}for(var Q in o)le=o[Q],o.hasOwnProperty(Q)&&le!=null&&!u.hasOwnProperty(Q)&&qt(t,i,Q,null,u,le);for(ve in u)le=u[ve],fe=o[ve],!u.hasOwnProperty(ve)||le===fe||le==null&&fe==null||qt(t,i,ve,le,u,fe)}function Vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],_=p.transferSize,E=p.initiatorType,U=p.duration;if(_&&U&&Vv(E)){for(E=0,U=p.responseEnd,u+=1;u<o.length;u++){var V=o[u],re=V.startTime;if(re>U)break;var pe=V.transferSize,ve=V.initiatorType;pe&&Vv(ve)&&(V=V.responseEnd,E+=pe*(V<U?1:(U-re)/(V-re)))}if(--u,i+=8*(_+E)/(p.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bd=null,Hd=null;function Fc(t){return t.nodeType===9?t:t.ownerDocument}function kv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Gd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vd=null;function bb(){var t=window.event;return t&&t.type==="popstate"?t===Vd?!1:(Vd=t,!0):(Vd=null,!1)}var Wv=typeof setTimeout=="function"?setTimeout:void 0,Tb=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,Ab=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(t){return qv.resolve(null).then(t).catch(Rb)}:Wv;function Rb(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function Yv(t,i){var o=i,u=0;do{var p=o.nextSibling;if(t.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){t.removeChild(p),bo(i);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Yl(t.ownerDocument.documentElement);else if(o==="head"){o=t.ownerDocument.head,Yl(o);for(var _=o.firstChild;_;){var E=_.nextSibling,U=_.nodeName;_[ns]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=E}}else o==="body"&&Yl(t.ownerDocument.body);o=p}while(o);bo(i)}function jv(t,i){var o=t;t=0;do{var u=o.nextSibling;if(o.nodeType===1?i?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(i?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(t===0)break;t--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||t++;o=u}while(o)}function kd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":kd(o),hl(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function Cb(t,i,o,u){for(;t.nodeType===1;){var p=o;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(u){if(!t[ns])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(_=t.getAttribute("rel"),_==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(_!==p.rel||t.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||t.getAttribute("title")!==(p.title==null?null:p.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(_=t.getAttribute("src"),(_!==(p.src==null?null:p.src)||t.getAttribute("type")!==(p.type==null?null:p.type)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&_&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var _=p.name==null?null:""+p.name;if(p.type==="hidden"&&t.getAttribute("name")===_)return t}else return t;if(t=Ii(t.nextSibling),t===null)break}return null}function wb(t,i,o){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Ii(t.nextSibling),t===null))return null;return t}function Zv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ii(t.nextSibling),t===null))return null;return t}function Xd(t){return t.data==="$?"||t.data==="$~"}function Wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Db(t,i){var o=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||o.readyState!=="loading")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),t._reactRetry=u}}function Ii(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var qd=null;function Kv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"||o==="/&"){if(i===0)return Ii(t.nextSibling);i--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||i++}t=t.nextSibling}return null}function Qv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(i===0)return t;i--}else o!=="/$"&&o!=="/&"||i++}t=t.previousSibling}return null}function Jv(t,i,o){switch(i=Fc(o),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Yl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);hl(t)}var Bi=new Map,$v=new Set;function zc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ka=H.d;H.d={f:Ub,r:Lb,D:Nb,C:Ob,L:Pb,m:Fb,X:Ib,S:zb,M:Bb};function Ub(){var t=ka.f(),i=Cc();return t||i}function Lb(t){var i=hr(t);i!==null&&i.tag===5&&i.type==="form"?_0(i):ka.r(t)}var So=typeof document>"u"?null:document;function ex(t,i,o){var u=So;if(u&&typeof i=="string"&&i){var p=ht(i);p='link[rel="'+t+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),$v.has(p)||($v.add(p),t={rel:t,crossOrigin:o,href:i},u.querySelector(p)===null&&(i=u.createElement("link"),Hn(i,"link",t),N(i),u.head.appendChild(i)))}}function Nb(t){ka.D(t),ex("dns-prefetch",t,null)}function Ob(t,i){ka.C(t,i),ex("preconnect",t,i)}function Pb(t,i,o){ka.L(t,i,o);var u=So;if(u&&t&&i){var p='link[rel="preload"][as="'+ht(i)+'"]';i==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+ht(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+ht(o.imageSizes)+'"]')):p+='[href="'+ht(t)+'"]';var _=p;switch(i){case"style":_=Mo(t);break;case"script":_=Eo(t)}Bi.has(_)||(t=g({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:t,as:i},o),Bi.set(_,t),u.querySelector(p)!==null||i==="style"&&u.querySelector(jl(_))||i==="script"&&u.querySelector(Zl(_))||(i=u.createElement("link"),Hn(i,"link",t),N(i),u.head.appendChild(i)))}}function Fb(t,i){ka.m(t,i);var o=So;if(o&&t){var u=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+ht(u)+'"][href="'+ht(t)+'"]',_=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=Eo(t)}if(!Bi.has(_)&&(t=g({rel:"modulepreload",href:t},i),Bi.set(_,t),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zl(_)))return}u=o.createElement("link"),Hn(u,"link",t),N(u),o.head.appendChild(u)}}}function zb(t,i,o){ka.S(t,i,o);var u=So;if(u&&t){var p=dr(u).hoistableStyles,_=Mo(t);i=i||"default";var E=p.get(_);if(!E){var U={loading:0,preload:null};if(E=u.querySelector(jl(_)))U.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},o),(o=Bi.get(_))&&Yd(t,o);var V=E=u.createElement("link");N(V),Hn(V,"link",t),V._p=new Promise(function(re,pe){V.onload=re,V.onerror=pe}),V.addEventListener("load",function(){U.loading|=1}),V.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Ic(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:U},p.set(_,E)}}}function Ib(t,i){ka.X(t,i);var o=So;if(o&&t){var u=dr(o).hoistableScripts,p=Eo(t),_=u.get(p);_||(_=o.querySelector(Zl(p)),_||(t=g({src:t,async:!0},i),(i=Bi.get(p))&&jd(t,i),_=o.createElement("script"),N(_),Hn(_,"link",t),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(p,_))}}function Bb(t,i){ka.M(t,i);var o=So;if(o&&t){var u=dr(o).hoistableScripts,p=Eo(t),_=u.get(p);_||(_=o.querySelector(Zl(p)),_||(t=g({src:t,async:!0,type:"module"},i),(i=Bi.get(p))&&jd(t,i),_=o.createElement("script"),N(_),Hn(_,"link",t),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(p,_))}}function tx(t,i,o,u){var p=(p=ie.current)?zc(p):null;if(!p)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Mo(o.href),o=dr(p).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=Mo(o.href);var _=dr(p).hoistableStyles,E=_.get(t);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(t,E),(_=p.querySelector(jl(t)))&&!_._p&&(E.instance=_,E.state.loading=5),Bi.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(t,o),_||Hb(p,t,o,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Eo(o),o=dr(p).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Mo(t){return'href="'+ht(t)+'"'}function jl(t){return'link[rel="stylesheet"]['+t+"]"}function nx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Hb(t,i,o,u){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=t.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Hn(i,"link",o),N(i),t.head.appendChild(i))}function Eo(t){return'[src="'+ht(t)+'"]'}function Zl(t){return"script[async]"+t}function ix(t,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=t.querySelector('style[data-href~="'+ht(o.href)+'"]');if(u)return i.instance=u,N(u),u;var p=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(t.ownerDocument||t).createElement("style"),N(u),Hn(u,"style",p),Ic(u,o.precedence,t),i.instance=u;case"stylesheet":p=Mo(o.href);var _=t.querySelector(jl(p));if(_)return i.state.loading|=4,i.instance=_,N(_),_;u=nx(o),(p=Bi.get(p))&&Yd(u,p),_=(t.ownerDocument||t).createElement("link"),N(_);var E=_;return E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),Hn(_,"link",u),i.state.loading|=4,Ic(_,o.precedence,t),i.instance=_;case"script":return _=Eo(o.src),(p=t.querySelector(Zl(_)))?(i.instance=p,N(p),p):(u=o,(p=Bi.get(_))&&(u=g({},o),jd(u,p)),t=t.ownerDocument||t,p=t.createElement("script"),N(p),Hn(p,"link",u),t.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Ic(u,o.precedence,t));return i.instance}function Ic(t,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,_=p,E=0;E<u.length;E++){var U=u[E];if(U.dataset.precedence===i)_=U;else if(_!==p)break}_?_.parentNode.insertBefore(t,_.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(t,i.firstChild))}function Yd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function jd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bc=null;function ax(t,i,o){if(Bc===null){var u=new Map,p=Bc=new Map;p.set(o,u)}else p=Bc,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(t))return u;for(u.set(t,null),o=o.getElementsByTagName(t),p=0;p<o.length;p++){var _=o[p];if(!(_[ns]||_[_n]||t==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var E=_.getAttribute(i)||"";E=t+E;var U=u.get(E);U?U.push(_):u.set(E,[_])}}return u}function rx(t,i,o){t=t.ownerDocument||t,t.head.insertBefore(o,i==="title"?t.querySelector("head > title"):null)}function Gb(t,i,o){if(o===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function sx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vb(t,i,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Mo(u.href),_=i.querySelector(jl(p));if(_){i=_._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Hc.bind(t),i.then(t,t)),o.state.loading|=4,o.instance=_,N(_);return}_=i.ownerDocument||i,u=nx(u),(p=Bi.get(p))&&Yd(u,p),_=_.createElement("link"),N(_);var E=_;E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),Hn(_,"link",u),o.instance=_}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(o,i),(i=o.state.preload)&&(o.state.loading&3)===0&&(t.count++,o=Hc.bind(t),i.addEventListener("load",o),i.addEventListener("error",o))}}var Zd=0;function kb(t,i){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(o){var u=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var _=t.unsuspend;t.unsuspend=null,_()}},6e4+i);0<t.imgBytes&&Zd===0&&(Zd=62500*Eb());var p=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var _=t.unsuspend;t.unsuspend=null,_()}},(t.imgBytes>Zd?50:800)+i);return t.unsuspend=o,function(){t.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gc=null;function Vc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,i.forEach(Xb,t),Gc=null,Hc.call(t))}function Xb(t,i){if(!(i.state.loading&4)){var o=Gc.get(t);if(o)var u=o.get(null);else{o=new Map,Gc.set(t,o);for(var p=t.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<p.length;_++){var E=p[_];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}p=i.instance,E=p.getAttribute("data-precedence"),_=o.get(E)||u,_===u&&o.set(null,p),o.set(E,p),this.count++,u=Hc.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),_?_.parentNode.insertBefore(p,_.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(p,t.firstChild)),i.state.loading|=4}}var Kl={$$typeof:C,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Wb(t,i,o,u,p,_,E,U,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=_,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function ox(t,i,o,u,p,_,E,U,V,re,pe,ve){return t=new Wb(t,i,o,E,V,re,pe,ve,U),i=1,_===!0&&(i|=24),_=pi(3,null,null,i),t.current=_,_.stateNode=t,i=Ch(),i.refCount++,t.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:o,cache:i},Lh(_),t}function lx(t){return t?(t=$s,t):$s}function ux(t,i,o,u,p,_){p=lx(p),u.context===null?u.context=p:u.pendingContext=p,u=yr(i),u.payload={element:o},_=_===void 0?null:_,_!==null&&(u.callback=_),o=Sr(t,u,i),o!==null&&(ri(o,t,i),Cl(o,t,i))}function cx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Kd(t,i){cx(t,i),(t=t.alternate)&&cx(t,i)}function fx(t){if(t.tag===13||t.tag===31){var i=os(t,67108864);i!==null&&ri(i,t,67108864),Kd(t,67108864)}}function hx(t){if(t.tag===13||t.tag===31){var i=xi();i=ul(i);var o=os(t,i);o!==null&&ri(o,t,i),Kd(t,i)}}var kc=!0;function qb(t,i,o,u){var p=F.T;F.T=null;var _=H.p;try{H.p=2,Qd(t,i,o,u)}finally{H.p=_,F.T=p}}function Yb(t,i,o,u){var p=F.T;F.T=null;var _=H.p;try{H.p=8,Qd(t,i,o,u)}finally{H.p=_,F.T=p}}function Qd(t,i,o,u){if(kc){var p=Jd(u);if(p===null)zd(t,i,u,Xc,o),px(t,u);else if(Zb(p,t,i,o,u))u.stopPropagation();else if(px(t,u),i&4&&-1<jb.indexOf(t)){for(;p!==null;){var _=hr(p);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var E=be(_.pendingLanes);if(E!==0){var U=_;for(U.pendingLanes|=2,U.entangledLanes|=2;E;){var V=1<<31-Ge(E);U.entanglements[1]|=V,E&=~V}fa(_),(It&6)===0&&(Ac=A()+500,Xl(0))}}break;case 31:case 13:U=os(_,2),U!==null&&ri(U,_,2),Cc(),Kd(_,2)}if(_=Jd(u),_===null&&zd(t,i,u,Xc,o),_===p)break;p=_}p!==null&&u.stopPropagation()}else zd(t,i,u,null,o)}}function Jd(t){return t=eh(t),$d(t)}var Xc=null;function $d(t){if(Xc=null,t=fr(t),t!==null){var i=l(t);if(i===null)t=null;else{var o=i.tag;if(o===13){if(t=c(i),t!==null)return t;t=null}else if(o===31){if(t=f(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Xc=t,null}function dx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case _e:return 2;case Me:return 8;case de:case $e:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var ep=!1,Lr=null,Nr=null,Or=null,Ql=new Map,Jl=new Map,Pr=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function px(t,i){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Ql.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(i.pointerId)}}function $l(t,i,o,u,p,_){return t===null||t.nativeEvent!==_?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},i!==null&&(i=hr(i),i!==null&&fx(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),t)}function Zb(t,i,o,u,p){switch(i){case"focusin":return Lr=$l(Lr,t,i,o,u,p),!0;case"dragenter":return Nr=$l(Nr,t,i,o,u,p),!0;case"mouseover":return Or=$l(Or,t,i,o,u,p),!0;case"pointerover":var _=p.pointerId;return Ql.set(_,$l(Ql.get(_)||null,t,i,o,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Jl.set(_,$l(Jl.get(_)||null,t,i,o,u,p)),!0}return!1}function mx(t){var i=fr(t.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){t.blockedOn=i,oa(t.priority,function(){hx(o)});return}}else if(i===31){if(i=f(o),i!==null){t.blockedOn=i,oa(t.priority,function(){hx(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Jd(t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);$f=u,o.target.dispatchEvent(u),$f=null}else return i=hr(o),i!==null&&fx(i),t.blockedOn=o,!1;i.shift()}return!0}function _x(t,i,o){Wc(t)&&o.delete(i)}function Kb(){ep=!1,Lr!==null&&Wc(Lr)&&(Lr=null),Nr!==null&&Wc(Nr)&&(Nr=null),Or!==null&&Wc(Or)&&(Or=null),Ql.forEach(_x),Jl.forEach(_x)}function qc(t,i){t.blockedOn===i&&(t.blockedOn=null,ep||(ep=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kb)))}var Yc=null;function gx(t){Yc!==t&&(Yc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var i=0;i<t.length;i+=3){var o=t[i],u=t[i+1],p=t[i+2];if(typeof u!="function"){if($d(u||o)===null)continue;break}var _=hr(o);_!==null&&(t.splice(i,3),i-=3,Jh(_,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function bo(t){function i(V){return qc(V,t)}Lr!==null&&qc(Lr,t),Nr!==null&&qc(Nr,t),Or!==null&&qc(Or,t),Ql.forEach(i),Jl.forEach(i);for(var o=0;o<Pr.length;o++){var u=Pr[o];u.blockedOn===t&&(u.blockedOn=null)}for(;0<Pr.length&&(o=Pr[0],o.blockedOn===null);)mx(o),o.blockedOn===null&&Pr.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],_=o[u+1],E=p[Un]||null;if(typeof _=="function")E||gx(o);else if(E){var U=null;if(_&&_.hasAttribute("formAction")){if(p=_,E=_[Un]||null)U=E.formAction;else if($d(p)!==null)continue}else U=E.action;typeof U=="function"?o[u+1]=U:(o.splice(u,3),u-=3),gx(o)}}}function vx(){function t(_){_.canIntercept&&_.info==="react-transition"&&_.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var _=navigation.currentEntry;_&&_.url!=null&&navigation.navigate(_.url,{state:_.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function tp(t){this._internalRoot=t}jc.prototype.render=tp.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=xi();ux(o,u,t,i,null,null)},jc.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ux(t.current,2,null,t,null,null),Cc(),i[Zi]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=cl();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pr.length&&i!==0&&i<Pr[o].priority;o++);Pr.splice(o,0,t),o===0&&mx(t)}};var xx=e.version;if(xx!=="19.2.4")throw Error(a(527,xx,"19.2.4"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Qb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{Ae=Zc.inject(Qb),Ce=Zc}catch{}}return tu.createRoot=function(t,i){if(!s(t))throw Error(a(299));var o=!1,u="",p=A0,_=R0,E=C0;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=ox(t,1,!1,null,null,o,u,null,p,_,E,vx),t[Zi]=i.current,Fd(t),new tp(i)},tu.hydrateRoot=function(t,i,o){if(!s(t))throw Error(a(299));var u=!1,p="",_=A0,E=R0,U=C0,V=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(_=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(U=o.onRecoverableError),o.formState!==void 0&&(V=o.formState)),i=ox(t,1,!0,i,o??null,u,p,V,_,E,U,vx),i.context=lx(null),o=i.current,u=xi(),u=ul(u),p=yr(u),p.callback=null,Sr(o,p,u),o=u,i.current.lanes=o,kn(i,o),fa(i),t[Zi]=i.current,Fd(t),new jc(i)},tu.version="19.2.4",tu}var wx;function oT(){if(wx)return ap.exports;wx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ap.exports=sT(),ap.exports}var lT=oT();var Dx="popstate";function uT(r={}){function e(a,s){let{pathname:l,search:c,hash:f}=a.location;return Kp("",{pathname:l,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:vu(s)}return fT(e,n,null,r)}function ln(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ma(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cT(){return Math.random().toString(36).substring(2,10)}function Ux(r,e){return{usr:r.state,key:r.key,idx:e}}function Kp(r,e,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?al(e):e,state:n,key:e&&e.key||a||cT()}}function vu({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function al(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function fT(r,e,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,f="POP",d=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function g(){f="POP";let y=m(),x=y==null?null:y-h;h=y,d&&d({action:f,location:M.location,delta:x})}function v(y,x){f="PUSH";let R=Kp(M.location,y,x);h=m()+1;let C=Ux(R,h),D=M.createHref(R);try{c.pushState(C,"",D)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;s.location.assign(D)}l&&d&&d({action:f,location:M.location,delta:1})}function S(y,x){f="REPLACE";let R=Kp(M.location,y,x);h=m();let C=Ux(R,h),D=M.createHref(R);c.replaceState(C,"",D),l&&d&&d({action:f,location:M.location,delta:0})}function b(y){return hT(y)}let M={get action(){return f},get location(){return r(s,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Dx,g),d=y,()=>{s.removeEventListener(Dx,g),d=null}},createHref(y){return e(s,y)},createURL:b,encodeLocation(y){let x=b(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return c.go(y)}};return M}function hT(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ln(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:vu(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Ky(r,e,n="/"){return dT(r,e,n,!1)}function dT(r,e,n,a){let s=typeof e=="string"?al(e):e,l=ir(s.pathname||"/",n);if(l==null)return null;let c=Qy(r);pT(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let h=TT(l);f=ET(c[d],h,a)}return f}function Qy(r,e=[],n=[],a="",s=!1){let l=(c,f,d=s,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&d)return;ln(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let g=$a([a,m.relativePath]),v=n.concat(m);c.children&&c.children.length>0&&(ln(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Qy(c.children,e,v,g,d)),!(c.path==null&&!c.index)&&e.push({path:g,score:ST(g,c.index),routesMeta:v})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of Jy(c.path))l(c,f,!0,d)}),e}function Jy(r){let e=r.split("/");if(e.length===0)return[];let[n,...a]=e,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=Jy(a.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function pT(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:MT(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var mT=/^:[\w-]+$/,_T=3,gT=2,vT=1,xT=10,yT=-2,Lx=r=>r==="*";function ST(r,e){let n=r.split("/"),a=n.length;return n.some(Lx)&&(a+=yT),e&&(a+=gT),n.filter(s=>!Lx(s)).reduce((s,l)=>s+(mT.test(l)?_T:l===""?vT:xT),a)}function MT(r,e){return r.length===e.length&&r.slice(0,-1).every((a,s)=>a===e[s])?r[r.length-1]-e[e.length-1]:0}function ET(r,e,n=!1){let{routesMeta:a}=r,s={},l="/",c=[];for(let f=0;f<a.length;++f){let d=a[f],h=f===a.length-1,m=l==="/"?e:e.slice(l.length)||"/",g=Uf({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},m),v=d.route;if(!g&&h&&n&&!a[a.length-1].route.index&&(g=Uf({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!g)return null;Object.assign(s,g.params),c.push({params:s,pathname:$a([l,g.pathname]),pathnameBase:wT($a([l,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(l=$a([l,g.pathnameBase]))}return c}function Uf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=bT(r.path,r.caseSensitive,r.end),s=e.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:m,isOptional:g},v)=>{if(m==="*"){let b=f[v]||"";c=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=f[v];return g&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function bT(r,e=!1,n=!0){Ma(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d)=>(a.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function TT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ma(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ir(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}var AT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function RT(r,e="/"){let{pathname:n,search:a="",hash:s=""}=typeof r=="string"?al(r):r,l;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?l=Nx(n.substring(1),"/"):l=Nx(n,e)):l=e,{pathname:l,search:DT(a),hash:UT(s)}}function Nx(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function lp(r,e,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CT(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $y(r){let e=CT(r);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function eS(r,e,n,a=!1){let s;typeof r=="string"?s=al(r):(s={...r},ln(!s.pathname||!s.pathname.includes("?"),lp("?","pathname","search",s)),ln(!s.pathname||!s.pathname.includes("#"),lp("#","pathname","hash",s)),ln(!s.search||!s.search.includes("#"),lp("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=n;else{let g=e.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),g-=1;s.pathname=v.join("/")}f=g>=0?e[g]:"/"}let d=RT(s,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}var $a=r=>r.join("/").replace(/\/\/+/g,"/"),wT=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,UT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,LT=class{constructor(r,e,n,a=!1){this.status=r,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function NT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function OT(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var tS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function nS(r,e){let n=r;if(typeof n!="string"||!AT.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,s=!1;if(tS)try{let l=new URL(window.location.href),c=n.startsWith("//")?new URL(l.protocol+n):new URL(n),f=ir(c.pathname,e);c.origin===l.origin&&f!=null?n=f+c.search+c.hash:s=!0}catch{Ma(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var iS=["POST","PUT","PATCH","DELETE"];new Set(iS);var PT=["GET",...iS];new Set(PT);var rl=$.createContext(null);rl.displayName="DataRouter";var Vf=$.createContext(null);Vf.displayName="DataRouterState";var FT=$.createContext(!1),aS=$.createContext({isTransitioning:!1});aS.displayName="ViewTransition";var zT=$.createContext(new Map);zT.displayName="Fetchers";var IT=$.createContext(null);IT.displayName="Await";var Yi=$.createContext(null);Yi.displayName="Navigation";var Du=$.createContext(null);Du.displayName="Location";var ur=$.createContext({outlet:null,matches:[],isDataRoute:!1});ur.displayName="Route";var o_=$.createContext(null);o_.displayName="RouteError";var rS="REACT_ROUTER_ERROR",BT="REDIRECT",HT="ROUTE_ERROR_RESPONSE";function GT(r){if(r.startsWith(`${rS}:${BT}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function VT(r){if(r.startsWith(`${rS}:${HT}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new LT(e.status,e.statusText,e.data)}catch{}}function kT(r,{relative:e}={}){ln(Uu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=$.useContext(Yi),{hash:s,pathname:l,search:c}=Lu(r,{relative:e}),f=l;return n!=="/"&&(f=l==="/"?n:$a([n,l])),a.createHref({pathname:f,search:c,hash:s})}function Uu(){return $.useContext(Du)!=null}function Hs(){return ln(Uu(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Du).location}var sS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function oS(r){$.useContext(Yi).static||$.useLayoutEffect(r)}function XT(){let{isDataRoute:r}=$.useContext(ur);return r?i1():WT()}function WT(){ln(Uu(),"useNavigate() may be used only in the context of a <Router> component.");let r=$.useContext(rl),{basename:e,navigator:n}=$.useContext(Yi),{matches:a}=$.useContext(ur),{pathname:s}=Hs(),l=JSON.stringify($y(a)),c=$.useRef(!1);return oS(()=>{c.current=!0}),$.useCallback((d,h={})=>{if(Ma(c.current,sS),!c.current)return;if(typeof d=="number"){n.go(d);return}let m=eS(d,JSON.parse(l),s,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:$a([e,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[e,n,l,s,r])}$.createContext(null);function Lu(r,{relative:e}={}){let{matches:n}=$.useContext(ur),{pathname:a}=Hs(),s=JSON.stringify($y(n));return $.useMemo(()=>eS(r,JSON.parse(s),a,e==="path"),[r,s,a,e])}function qT(r,e){return lS(r,e)}function lS(r,e,n,a,s){ln(Uu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=$.useContext(Yi),{matches:c}=$.useContext(ur),f=c[c.length-1],d=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",g=f&&f.route;{let R=g&&g.path||"";cS(h,!g||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Hs(),S;if(e){let R=typeof e=="string"?al(e):e;ln(m==="/"||R.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let b=S.pathname||"/",M=b;if(m!=="/"){let R=m.replace(/^\//,"").split("/");M="/"+b.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=Ky(r,{pathname:M});Ma(g||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ma(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=QT(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},d,R.params),pathname:$a([m,l.encodeLocation?l.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?m:$a([m,l.encodeLocation?l.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),c,n,a,s);return e&&x?$.createElement(Du.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function YT(){let r=n1(),e=NT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:s},n):null,c)}var jT=$.createElement(YT,null),uS=class extends $.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=VT(r.digest);n&&(r=n)}let e=r!==void 0?$.createElement(ur.Provider,{value:this.props.routeContext},$.createElement(o_.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?$.createElement(ZT,{error:r},e):e}};uS.contextType=FT;var up=new WeakMap;function ZT({children:r,error:e}){let{basename:n}=$.useContext(Yi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=GT(e.digest);if(a){let s=up.get(e);if(s)throw s;let l=nS(a.location,n);if(tS&&!up.get(e))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw up.set(e,c),c}return $.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function KT({routeContext:r,match:e,children:n}){let a=$.useContext(rl);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(ur.Provider,{value:r},n)}function QT(r,e=[],n=null,a=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let l=r,c=n?.errors;if(c!=null){let m=l.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);ln(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(n)for(let m=0;m<l.length;m++){let g=l[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:v,errors:S}=n,b=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||b){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}let h=n&&a?(m,g)=>{a(m,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:OT(n.matches),errorInfo:g})}:void 0;return l.reduceRight((m,g,v)=>{let S,b=!1,M=null,y=null;n&&(S=c&&g.route.id?c[g.route.id]:void 0,M=g.route.errorElement||jT,f&&(d<0&&v===0?(cS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):d===v&&(b=!0,y=g.route.hydrateFallbackElement||null)));let x=e.concat(l.slice(0,v+1)),R=()=>{let C;return S?C=M:b?C=y:g.route.Component?C=$.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=m,$.createElement(KT,{match:g,routeContext:{outlet:m,matches:x,isDataRoute:n!=null},children:C})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?$.createElement(uS,{location:n.location,revalidation:n.revalidation,component:M,error:S,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):R()},null)}function l_(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JT(r){let e=$.useContext(rl);return ln(e,l_(r)),e}function $T(r){let e=$.useContext(Vf);return ln(e,l_(r)),e}function e1(r){let e=$.useContext(ur);return ln(e,l_(r)),e}function u_(r){let e=e1(r),n=e.matches[e.matches.length-1];return ln(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function t1(){return u_("useRouteId")}function n1(){let r=$.useContext(o_),e=$T("useRouteError"),n=u_("useRouteError");return r!==void 0?r:e.errors?.[n]}function i1(){let{router:r}=JT("useNavigate"),e=u_("useNavigate"),n=$.useRef(!1);return oS(()=>{n.current=!0}),$.useCallback(async(s,l={})=>{Ma(n.current,sS),n.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var Ox={};function cS(r,e,n){!e&&!Ox[r]&&(Ox[r]=!0,Ma(!1,n))}$.memo(a1);function a1({routes:r,future:e,state:n,onError:a}){return lS(r,void 0,n,a,e)}function kr(r){ln(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function r1({basename:r="/",children:e=null,location:n,navigationType:a="POP",navigator:s,static:l=!1,unstable_useTransitions:c}){ln(!Uu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:f,navigator:s,static:l,unstable_useTransitions:c,future:{}}),[f,s,l,c]);typeof n=="string"&&(n=al(n));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:S="default"}=n,b=$.useMemo(()=>{let M=ir(h,f);return M==null?null:{location:{pathname:M,search:m,hash:g,state:v,key:S},navigationType:a}},[f,h,m,g,v,S,a]);return Ma(b!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:$.createElement(Yi.Provider,{value:d},$.createElement(Du.Provider,{children:e,value:b}))}function s1({children:r,location:e}){return qT(Qp(r),e)}function Qp(r,e=[]){let n=[];return $.Children.forEach(r,(a,s)=>{if(!$.isValidElement(a))return;let l=[...e,s];if(a.type===$.Fragment){n.push.apply(n,Qp(a.props.children,l));return}ln(a.type===kr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ln(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Qp(a.props.children,l)),n.push(c)}),n}var yf="get",Sf="application/x-www-form-urlencoded";function kf(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function o1(r){return kf(r)&&r.tagName.toLowerCase()==="button"}function l1(r){return kf(r)&&r.tagName.toLowerCase()==="form"}function u1(r){return kf(r)&&r.tagName.toLowerCase()==="input"}function c1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function f1(r,e){return r.button===0&&(!e||e==="_self")&&!c1(r)}var Kc=null;function h1(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var d1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cp(r){return r!=null&&!d1.has(r)?(Ma(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sf}"`),null):r}function p1(r,e){let n,a,s,l,c;if(l1(r)){let f=r.getAttribute("action");a=f?ir(f,e):null,n=r.getAttribute("method")||yf,s=cp(r.getAttribute("enctype"))||Sf,l=new FormData(r)}else if(o1(r)||u1(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(a=d?ir(d,e):null,n=r.getAttribute("formmethod")||f.getAttribute("method")||yf,s=cp(r.getAttribute("formenctype"))||cp(f.getAttribute("enctype"))||Sf,l=new FormData(f,r),!h1()){let{name:h,type:m,value:g}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,g)}}else{if(kf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yf,a=null,s=Sf,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function c_(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function m1(r,e,n,a){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${a}`:s.pathname=`${s.pathname}.${a}`:s.pathname==="/"?s.pathname=`_root.${a}`:e&&ir(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function _1(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function v1(r,e,n){let a=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await _1(l,n);return c.links?c.links():[]}return[]}));return M1(a.flat(1).filter(g1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Px(r,e,n,a,s,l){let c=(d,h)=>n[h]?d.route.id!==n[h].route.id:!0,f=(d,h)=>n[h].pathname!==d.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,h)=>c(d,h)||f(d,h)):l==="data"?e.filter((d,h)=>{let m=a.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function x1(r,e,{includeHydrateFallback:n}={}){return y1(r.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function y1(r){return[...new Set(r)]}function S1(r){let e={},n=Object.keys(r).sort();for(let a of n)e[a]=r[a];return e}function M1(r,e){let n=new Set;return new Set(e),r.reduce((a,s)=>{let l=JSON.stringify(S1(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}function fS(){let r=$.useContext(rl);return c_(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function E1(){let r=$.useContext(Vf);return c_(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var f_=$.createContext(void 0);f_.displayName="FrameworkContext";function hS(){let r=$.useContext(f_);return c_(r,"You must render this element inside a <HydratedRouter> element"),r}function b1(r,e){let n=$.useContext(f_),[a,s]=$.useState(!1),[l,c]=$.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:m,onTouchStart:g}=e,v=$.useRef(null);$.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=x=>{x.forEach(R=>{c(R.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),$.useEffect(()=>{if(a){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[a]);let S=()=>{s(!0)},b=()=>{s(!1),c(!1)};return n?r!=="intent"?[l,v,{}]:[l,v,{onFocus:nu(f,S),onBlur:nu(d,b),onMouseEnter:nu(h,S),onMouseLeave:nu(m,b),onTouchStart:nu(g,S)}]:[!1,v,{}]}function nu(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function T1({page:r,...e}){let{router:n}=fS(),a=$.useMemo(()=>Ky(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?$.createElement(R1,{page:r,matches:a,...e}):null}function A1(r){let{manifest:e,routeModules:n}=hS(),[a,s]=$.useState([]);return $.useEffect(()=>{let l=!1;return v1(r,e,n).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,n]),a}function R1({page:r,matches:e,...n}){let a=Hs(),{future:s,manifest:l,routeModules:c}=hS(),{basename:f}=fS(),{loaderData:d,matches:h}=E1(),m=$.useMemo(()=>Px(r,e,h,l,a,"data"),[r,e,h,l,a]),g=$.useMemo(()=>Px(r,e,h,l,a,"assets"),[r,e,h,l,a]),v=$.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let M=new Set,y=!1;if(e.forEach(R=>{let C=l.routes[R.route.id];!C||!C.hasLoader||(!m.some(D=>D.route.id===R.route.id)&&R.route.id in d&&c[R.route.id]?.shouldRevalidate||C.hasClientLoader?y=!0:M.add(R.route.id))}),M.size===0)return[];let x=m1(r,f,s.unstable_trailingSlashAwareDataRequests,"data");return y&&M.size>0&&x.searchParams.set("_routes",e.filter(R=>M.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[f,s.unstable_trailingSlashAwareDataRequests,d,a,l,m,e,r,c]),S=$.useMemo(()=>x1(g,l),[g,l]),b=A1(g);return $.createElement($.Fragment,null,v.map(M=>$.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),S.map(M=>$.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),b.map(({key:M,link:y})=>$.createElement("link",{key:M,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function C1(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var w1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w1&&(window.__reactRouterVersion="7.13.0")}catch{}function D1({basename:r,children:e,unstable_useTransitions:n,window:a}){let s=$.useRef();s.current==null&&(s.current=uT({window:a,v5Compat:!0}));let l=s.current,[c,f]=$.useState({action:l.action,location:l.location}),d=$.useCallback(h=>{n===!1?f(h):$.startTransition(()=>f(h))},[n]);return $.useLayoutEffect(()=>l.listen(d),[l,d]),$.createElement(r1,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:n})}var dS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ki=$.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:f,target:d,to:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,...S},b){let{basename:M,unstable_useTransitions:y}=$.useContext(Yi),x=typeof h=="string"&&dS.test(h),R=nS(h,M);h=R.to;let C=kT(h,{relative:s}),[D,w,P]=b1(a,S),O=O1(h,{replace:c,state:f,target:d,preventScrollReset:m,relative:s,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function B(L){e&&e(L),L.defaultPrevented||O(L)}let T=$.createElement("a",{...S,...P,href:R.absoluteURL||C,onClick:R.isExternal||l?e:B,ref:C1(b,w),target:d,"data-discover":!x&&n==="render"?"true":void 0});return D&&!x?$.createElement($.Fragment,null,T,$.createElement(T1,{page:C})):T});ki.displayName="Link";var U1=$.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:f,children:d,...h},m){let g=Lu(c,{relative:h.relative}),v=Hs(),S=$.useContext(Vf),{navigator:b,basename:M}=$.useContext(Yi),y=S!=null&&B1(g)&&f===!0,x=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,R=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(R=R.toLowerCase(),C=C?C.toLowerCase():null,x=x.toLowerCase()),C&&M&&(C=ir(C,M)||C);const D=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let w=R===x||!s&&R.startsWith(x)&&R.charAt(D)==="/",P=C!=null&&(C===x||!s&&C.startsWith(x)&&C.charAt(x.length)==="/"),O={isActive:w,isPending:P,isTransitioning:y},B=w?e:void 0,T;typeof a=="function"?T=a(O):T=[a,w?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof l=="function"?l(O):l;return $.createElement(ki,{...h,"aria-current":B,className:T,ref:m,style:L,to:c,viewTransition:f},typeof d=="function"?d(O):d)});U1.displayName="NavLink";var L1=$.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:s,state:l,method:c=yf,action:f,onSubmit:d,relative:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,...S},b)=>{let{unstable_useTransitions:M}=$.useContext(Yi),y=z1(),x=I1(f,{relative:h}),R=c.toLowerCase()==="get"?"get":"post",C=typeof f=="string"&&dS.test(f),D=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let P=w.nativeEvent.submitter,O=P?.getAttribute("formmethod")||c,B=()=>y(P||w.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v});M&&n!==!1?$.startTransition(()=>B()):B()};return $.createElement("form",{ref:b,method:R,action:x,onSubmit:a?d:D,...S,"data-discover":!C&&r==="render"?"true":void 0})});L1.displayName="Form";function N1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pS(r){let e=$.useContext(rl);return ln(e,N1(r)),e}function O1(r,{target:e,replace:n,state:a,preventScrollReset:s,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f,unstable_useTransitions:d}={}){let h=XT(),m=Hs(),g=Lu(r,{relative:l});return $.useCallback(v=>{if(f1(v,e)){v.preventDefault();let S=n!==void 0?n:vu(m)===vu(g),b=()=>h(r,{replace:S,state:a,preventScrollReset:s,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f});d?$.startTransition(()=>b()):b()}},[m,h,g,n,a,e,r,s,l,c,f,d])}var P1=0,F1=()=>`__${String(++P1)}__`;function z1(){let{router:r}=pS("useSubmit"),{basename:e}=$.useContext(Yi),n=t1(),a=r.fetch,s=r.navigate;return $.useCallback(async(l,c={})=>{let{action:f,method:d,encType:h,formData:m,body:g}=p1(l,e);if(c.navigate===!1){let v=c.fetcherKey||F1();await a(v,n,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||d,formEncType:c.encType||h,flushSync:c.flushSync})}else await s(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||d,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,s,e,n])}function I1(r,{relative:e}={}){let{basename:n}=$.useContext(Yi),a=$.useContext(ur);ln(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...Lu(r||".",{relative:e})},c=Hs();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(g=>g).forEach(g=>f.append("index",g));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:$a([n,l.pathname])),vu(l)}function B1(r,{relative:e}={}){let n=$.useContext(aS);ln(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=pS("useViewTransitionState"),s=Lu(r,{relative:e});if(!n.isTransitioning)return!1;let l=ir(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=ir(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Uf(s.pathname,c)!=null||Uf(s.pathname,l)!=null}const Xf="/STEMFLOW-COMMUNITY-HUB/assets/react-CHdo91hT.svg";function Za(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mS(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yo={duration:.5,overwrite:!1,delay:0},h_,Vn,an,Wi=1e8,Qt=1/Wi,Jp=Math.PI*2,H1=Jp/4,G1=0,_S=Math.sqrt,V1=Math.cos,k1=Math.sin,Dn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},d_=function(e){return typeof e>"u"},Ea=function(e){return typeof e=="object"},oi=function(e){return e!==!1},p_=function(){return typeof window<"u"},Qc=function(e){return fn(e)||Dn(e)},gS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zn=Array.isArray,X1=/random\([^)]+\)/g,W1=/,\s*/g,Fx=/(?:-?\.?\d|\.)+/gi,vS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xS=/[+-]=-?[.\d]+/,q1=/[^,'"\[\]\s]+/gi,Y1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,sn,da,$p,m_,Ci={},Lf={},yS,SS=function(e){return(Lf=jo(e,Ci))&&hi},__=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},xu=function(e,n){return!n&&console.warn(e)},MS=function(e,n){return e&&(Ci[e]=n)&&Lf&&(Lf[e]=n)||Ci},yu=function(){return 0},j1={suppressEvents:!0,isStart:!0,kill:!1},Mf={suppressEvents:!0,kill:!1},Z1={suppressEvents:!0},g_={},Zr=[],em={},ES,Mi={},hp={},zx=30,Ef=[],v_="",x_=function(e){var n=e[0],a,s;if(Ea(n)||fn(n)||(e=[e]),!(a=(n._gsap||{}).harness)){for(s=Ef.length;s--&&!Ef[s].targetTest(n););a=Ef[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new YS(e[s],a)))||e.splice(s,1);return e},Ps=function(e){return e._gsap||x_(qi(e))[0]._gsap},bS=function(e,n,a){return(a=e[n])&&fn(a)?e[n]():d_(a)&&e.getAttribute&&e.getAttribute(n)||a},li=function(e,n){return(e=e.split(",")).forEach(n)||e},pn=function(e){return Math.round(e*1e5)/1e5||0},rn=function(e){return Math.round(e*1e7)/1e7||0},Vo=function(e,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return e=parseFloat(e),a==="+"?e+s:a==="-"?e-s:a==="*"?e*s:e/s},K1=function(e,n){for(var a=n.length,s=0;e.indexOf(n[s])<0&&++s<a;);return s<a},Nf=function(){var e=Zr.length,n=Zr.slice(0),a,s;for(em={},Zr.length=0,a=0;a<e;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},y_=function(e){return!!(e._initted||e._startAt||e.add)},TS=function(e,n,a,s){Zr.length&&!Vn&&Nf(),e.render(n,a,!!(Vn&&n<0&&y_(e))),Zr.length&&!Vn&&Nf()},AS=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(q1).length<2?n:Dn(e)?e.trim():e},RS=function(e){return e},wi=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},Q1=function(e){return function(n,a){for(var s in a)s in n||s==="duration"&&e||s==="ease"||(n[s]=a[s])}},jo=function(e,n){for(var a in n)e[a]=n[a];return e},Ix=function r(e,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=Ea(n[a])?r(e[a]||(e[a]={}),n[a]):n[a]);return e},Of=function(e,n){var a={},s;for(s in e)s in n||(a[s]=e[s]);return a},mu=function(e){var n=e.parent||sn,a=e.keyframes?Q1(Zn(e.keyframes)):wi;if(oi(e.inherit))for(;n;)a(e,n.vars.defaults),n=n.parent||n._dp;return e},J1=function(e,n){for(var a=e.length,s=a===n.length;s&&a--&&e[a]===n[a];);return a<0},CS=function(e,n,a,s,l){var c=e[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=e[a],e[a]=n),n._next?n._next._prev=n:e[s]=n,n._prev=c,n.parent=n._dp=e,n},Wf=function(e,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:e[a]===n&&(e[a]=c),c?c._prev=l:e[s]===n&&(e[s]=l),n._next=n._prev=n.parent=null},Qr=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fs=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},$1=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},tm=function(e,n,a,s){return e._startAt&&(Vn?e._startAt.revert(Mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,s))},eA=function r(e){return!e||e._ts&&r(e.parent)},Bx=function(e){return e._repeat?Zo(e._tTime,e=e.duration()+e._rDelay)*e:0},Zo=function(e,n){var a=Math.floor(e=rn(e/n));return e&&a===e?a-1:a},Pf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},qf=function(e){return e._end=rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qt)||0))},Yf=function(e,n){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=rn(a._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),qf(e),a._dirty||Fs(a,e)),e},wS=function(e,n){var a;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(a=Pf(e.rawTime(),n),(!n._dur||Nu(0,n.totalDuration(),a)-n._tTime>Qt)&&n.render(a,!0)),Fs(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-Qt}},ma=function(e,n,a,s){return n.parent&&Qr(n),n._start=rn((ar(a)?a:a||e!==sn?Gi(e,a,n):e._time)+n._delay),n._end=rn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),CS(e,n,"_first","_last",e._sort?"_start":0),nm(n)||(e._recent=n),s||wS(e,n),e._ts<0&&Yf(e,e._tTime),e},DS=function(e,n){return(Ci.ScrollTrigger||__("scrollTrigger",n))&&Ci.ScrollTrigger.create(n,e)},US=function(e,n,a,s,l){if(M_(e,n,l),!e._initted)return 1;if(!a&&e._pt&&!Vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ES!==Ei.frame)return Zr.push(e),e._lazy=[l,s],1},tA=function r(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||r(n))},nm=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},nA=function(e,n,a,s){var l=e.ratio,c=n<0||!n&&(!e._start&&tA(e)&&!(!e._initted&&nm(e))||(e._ts<0||e._dp._ts<0)&&!nm(e))?0:1,f=e._rDelay,d=0,h,m,g;if(f&&e._repeat&&(d=Nu(0,e._tDur,n),m=Zo(d,f),e._yoyo&&m&1&&(c=1-c),m!==Zo(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Vn||s||e._zTime===Qt||!n&&e._zTime){if(!e._initted&&US(e,n,s,a,d))return;for(g=e._zTime,e._zTime=n||(a?Qt:0),a||(a=n&&!g),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=d,h=e._pt;h;)h.r(c,h.d),h=h._next;n<0&&tm(e,n,a,!0),e._onUpdate&&!a&&bi(e,"onUpdate"),d&&e._repeat&&!a&&e.parent&&bi(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===c&&(c&&Qr(e,1),!a&&!Vn&&(bi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},iA=function(e,n,a){var s;if(a>n)for(s=e._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=e._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Ko=function(e,n,a,s){var l=e._repeat,c=rn(n)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:rn(c*(l+1)+e._rDelay*l):c,f>0&&!s&&Yf(e,e._tTime=e._tDur*f),e.parent&&qf(e),a||Fs(e.parent,e),e},Hx=function(e){return e instanceof Jn?Fs(e):Ko(e,e._dur)},aA={_start:0,endTime:yu,totalDuration:yu},Gi=function r(e,n,a){var s=e.labels,l=e._recent||aA,c=e.duration()>=Wi?l.endTime(!1):e._dur,f,d,h;return Dn(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),h=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(h?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),h&&a&&(d=d/100*(Zn(a)?a[0]:a).totalDuration()),f>1?r(e,n.substr(0,f-1),a)+d:c+d)):n==null?c:+n},_u=function(e,n,a){var s=ar(n[1]),l=(s?2:1)+(e<2?0:1),c=n[l],f,d;if(s&&(c.duration=n[1]),c.parent=a,e){for(f=c,d=a;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=oi(d.vars.inherit)&&d.parent;c.immediateRender=oi(f.immediateRender),e<2?c.runBackwards=1:c.startAt=n[l-1]}return new Mn(n[0],c,n[l+1])},ts=function(e,n){return e||e===0?n(e):n},Nu=function(e,n,a){return a<e?e:a>n?n:a},Yn=function(e,n){return!Dn(e)||!(n=Y1.exec(e))?"":n[1]},rA=function(e,n,a){return ts(a,function(s){return Nu(e,n,s)})},im=[].slice,LS=function(e,n){return e&&Ea(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Ea(e[0]))&&!e.nodeType&&e!==da},sA=function(e,n,a){return a===void 0&&(a=[]),e.forEach(function(s){var l;return Dn(s)&&!n||LS(s,1)?(l=a).push.apply(l,qi(s)):a.push(s)})||a},qi=function(e,n,a){return an&&!n&&an.selector?an.selector(e):Dn(e)&&!a&&($p||!Qo())?im.call((n||m_).querySelectorAll(e),0):Zn(e)?sA(e,a):LS(e)?im.call(e,0):e?[e]:[]},am=function(e){return e=qi(e)[0]||xu("Invalid scope")||{},function(n){var a=e.current||e.nativeElement||e;return qi(n,a.querySelectorAll?a:a===e?xu("Invalid scope")||m_.createElement("div"):e)}},NS=function(e){return e.sort(function(){return .5-Math.random()})},OS=function(e){if(fn(e))return e;var n=Ea(e)?e:{each:e},a=zs(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,h=n.axis,m=s,g=s;return Dn(s)?m=g={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(m=s[0],g=s[1]),function(v,S,b){var M=(b||n).length,y=c[M],x,R,C,D,w,P,O,B,T;if(!y){if(T=n.grid==="auto"?0:(n.grid||[1,Wi])[1],!T){for(O=-Wi;O<(O=b[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(y=c[M]=[],x=d?Math.min(T,M)*m-.5:s%T,R=T===Wi?0:d?M*g/T-.5:s/T|0,O=0,B=Wi,P=0;P<M;P++)C=P%T-x,D=R-(P/T|0),y[P]=w=h?Math.abs(h==="y"?D:C):_S(C*C+D*D),w>O&&(O=w),w<B&&(B=w);s==="random"&&NS(y),y.max=O-B,y.min=B,y.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(T>M?M-1:h?h==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Yn(n.amount||n.each)||0,a=a&&M<0?XS(a):a}return M=(y[v]-y.min)/y.max||0,rn(y.b+(a?a(M):M)*y.v)+y.u}},rm=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var s=rn(Math.round(parseFloat(a)/e)*e*n);return(s-s%1)/n+(ar(a)?0:Yn(a))}},PS=function(e,n){var a=Zn(e),s,l;return!a&&Ea(e)&&(s=a=e.radius||Wi,e.values?(e=qi(e.values),(l=!ar(e[0]))&&(s*=s)):e=rm(e.increment)),ts(n,a?fn(e)?function(c){return l=e(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),h=Wi,m=0,g=e.length,v,S;g--;)l?(v=e[g].x-f,S=e[g].y-d,v=v*v+S*S):v=Math.abs(e[g]-f),v<h&&(h=v,m=g);return m=!s||h<=s?e[m]:c,l||m===c||ar(c)?m:m+Yn(c)}:rm(e))},FS=function(e,n,a,s){return ts(Zn(e)?!n:a===!0?!!(a=0):!s,function(){return Zn(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(n-e+a*.99))/a)*a*s)/s})},oA=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},lA=function(e,n){return function(a){return e(parseFloat(a))+(n||Yn(a))}},uA=function(e,n,a){return IS(e,n,0,1,a)},zS=function(e,n,a){return ts(a,function(s){return e[~~n(s)]})},cA=function r(e,n,a){var s=n-e;return Zn(e)?zS(e,r(0,e.length),n):ts(a,function(l){return(s+(l-e)%s)%s+e})},fA=function r(e,n,a){var s=n-e,l=s*2;return Zn(e)?zS(e,r(0,e.length-1),n):ts(a,function(c){return c=(l+(c-e)%l)%l||0,e+(c>s?l-c:c)})},Su=function(e){return e.replace(X1,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(W1);return FS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},IS=function(e,n,a,s,l){var c=n-e,f=s-a;return ts(l,function(d){return a+((d-e)/c*f||0)})},hA=function r(e,n,a,s){var l=isNaN(e+n)?0:function(S){return(1-S)*e+S*n};if(!l){var c=Dn(e),f={},d,h,m,g,v;if(a===!0&&(s=1)&&(a=null),c)e={p:e},n={p:n};else if(Zn(e)&&!Zn(n)){for(m=[],g=e.length,v=g-2,h=1;h<g;h++)m.push(r(e[h-1],e[h]));g--,l=function(b){b*=g;var M=Math.min(v,~~b);return m[M](b-M)},a=n}else s||(e=jo(Zn(e)?[]:{},e));if(!m){for(d in n)S_.call(f,e,d,"get",n[d]);l=function(b){return T_(b,f)||(c?e.p:e)}}}return ts(a,l)},Gx=function(e,n,a){var s=e.labels,l=Wi,c,f,d;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},bi=function(e,n,a){var s=e.vars,l=s[n],c=an,f=e._ctx,d,h,m;if(l)return d=s[n+"Params"],h=s.callbackScope||e,a&&Zr.length&&Nf(),f&&(an=f),m=d?l.apply(h,d):l.call(h),an=c,m},fu=function(e){return Qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vn),e.progress()<1&&bi(e,"onInterrupt"),e},Go,BS=[],HS=function(e){if(e)if(e=!e.name&&e.default||e,p_()||e.headless){var n=e.name,a=fn(e),s=n&&!a&&e.init?function(){this._props=[]}:e,l={init:yu,render:T_,add:S_,kill:CA,modifier:RA,rawVars:0},c={targetTest:0,get:0,getSetter:b_,aliases:{},register:0};if(Qo(),e!==s){if(Mi[n])return;wi(s,wi(Of(e,l),c)),jo(s.prototype,jo(l,Of(e,c))),Mi[s.prop=n]=s,e.targetTest&&(Ef.push(s),g_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}MS(n,s),e.register&&e.register(hi,s,ui)}else BS.push(e)},Kt=255,hu={aqua:[0,Kt,Kt],lime:[0,Kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kt],navy:[0,0,128],white:[Kt,Kt,Kt],olive:[128,128,0],yellow:[Kt,Kt,0],orange:[Kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kt,0,0],pink:[Kt,192,203],cyan:[0,Kt,Kt],transparent:[Kt,Kt,Kt,0]},dp=function(e,n,a){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(a-n)*e*6:e<.5?a:e*3<2?n+(a-n)*(2/3-e)*6:n)*Kt+.5|0},GS=function(e,n,a){var s=e?ar(e)?[e>>16,e>>8&Kt,e&Kt]:0:hu.black,l,c,f,d,h,m,g,v,S,b;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hu[e])s=hu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Kt,s&Kt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Kt,e&Kt]}else if(e.substr(0,3)==="hsl"){if(s=b=e.match(Fx),!n)d=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=dp(d+1/3,l,c),s[1]=dp(d,l,c),s[2]=dp(d-1/3,l,c);else if(~e.indexOf("="))return s=e.match(vS),a&&s.length<4&&(s[3]=1),s}else s=e.match(Fx)||hu.transparent;s=s.map(Number)}return n&&!b&&(l=s[0]/Kt,c=s[1]/Kt,f=s[2]/Kt,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?d=h=0:(S=g-v,h=m>.5?S/(2-g-v):S/(g+v),d=g===l?(c-f)/S+(c<f?6:0):g===c?(f-l)/S+2:(l-c)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),a&&s.length<4&&(s[3]=1),s},VS=function(e){var n=[],a=[],s=-1;return e.split(Kr).forEach(function(l){var c=l.match(Ho)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},Vx=function(e,n,a){var s="",l=(e+s).match(Kr),c=n?"hsla(":"rgba(",f=0,d,h,m,g;if(!l)return e;if(l=l.map(function(v){return(v=GS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(m=VS(e),d=a.c,d.join(s)!==m.c.join(s)))for(h=e.replace(Kr,"1").split(Ho),g=h.length-1;f<g;f++)s+=h[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!h)for(h=e.split(Kr),g=h.length-1;f<g;f++)s+=h[f]+l[f];return s+h[g]},Kr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hu)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),dA=/hsl[a]?\(/,kS=function(e){var n=e.join(" "),a;if(Kr.lastIndex=0,Kr.test(n))return a=dA.test(n),e[1]=Vx(e[1],a),e[0]=Vx(e[0],a,VS(e[1])),!0},Mu,Ei=(function(){var r=Date.now,e=500,n=33,a=r(),s=a,l=1e3/240,c=l,f=[],d,h,m,g,v,S,b=function M(y){var x=r()-s,R=y===!0,C,D,w,P;if((x>e||x<0)&&(a+=x-n),s+=x,w=s-a,C=w-c,(C>0||R)&&(P=++g.frame,v=w-g.time*1e3,g.time=w=w/1e3,c+=C+(C>=l?4:l-C),D=1),R||(d=h(M)),D)for(S=0;S<f.length;S++)f[S](w,v,P,y)};return g={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){yS&&(!$p&&p_()&&(da=$p=window,m_=da.document||{},Ci.gsap=hi,(da.gsapVersions||(da.gsapVersions=[])).push(hi.version),SS(Lf||da.GreenSockGlobals||!da.gsap&&da||{}),BS.forEach(HS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),h=m||function(y){return setTimeout(y,c-g.time*1e3+1|0)},Mu=1,b(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),Mu=0,h=yu},lagSmoothing:function(y,x){e=y||1/0,n=Math.min(x||33,e)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,x,R){var C=x?function(D,w,P,O){y(D,w,P,O),g.remove(C)}:y;return g.remove(y),f[R?"unshift":"push"](C),Qo(),C},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g})(),Qo=function(){return!Mu&&Ei.wake()},Ct={},pA=/^[\d.\-M][\d.\-,\s]/,mA=/["']/g,_A=function(e){for(var n={},a=e.substr(1,e.length-3).split(":"),s=a[0],l=1,c=a.length,f,d,h;l<c;l++)d=a[l],f=l!==c-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),n[s]=isNaN(h)?h.replace(mA,"").trim():+h,s=d.substr(f+1).trim();return n},gA=function(e){var n=e.indexOf("(")+1,a=e.indexOf(")"),s=e.indexOf("(",n);return e.substring(n,~s&&s<a?e.indexOf(")",a+1):a)},vA=function(e){var n=(e+"").split("("),a=Ct[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[_A(n[1])]:gA(e).split(",").map(AS)):Ct._CE&&pA.test(e)?Ct._CE("",e):a},XS=function(e){return function(n){return 1-e(1-n)}},WS=function r(e,n){for(var a=e._first,s;a;)a instanceof Jn?r(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?r(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},zs=function(e,n){return e&&(fn(e)?e:Ct[e]||vA(e))||n},Gs=function(e,n,a,s){a===void 0&&(a=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return li(e,function(f){Ct[f]=Ci[f]=l,Ct[c=f.toLowerCase()]=a;for(var d in l)Ct[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Ct[f+"."+d]=l[d]}),l},qS=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},pp=function r(e,n,a){var s=n>=1?n:1,l=(a||(e?.3:.45))/(n<1?n:1),c=l/Jp*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*k1((m-c)*l)+1},d=e==="out"?f:e==="in"?function(h){return 1-f(1-h)}:qS(f);return l=Jp/l,d.config=function(h,m){return r(e,h,m)},d},mp=function r(e,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:qS(a);return s.config=function(l){return r(e,l)},s};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var n=e<5?e+1:e;Gs(r+",Power"+(n-1),e?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;Gs("Elastic",pp("in"),pp("out"),pp());(function(r,e){var n=1/e,a=2*n,s=2.5*n,l=function(f){return f<n?r*f*f:f<a?r*Math.pow(f-1.5/e,2)+.75:f<s?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};Gs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gs("Circ",function(r){return-(_S(1-r*r)-1)});Gs("Sine",function(r){return r===1?1:-V1(r*H1)+1});Gs("Back",mp("in"),mp("out"),mp());Ct.SteppedEase=Ct.steps=Ci.SteppedEase={config:function(e,n){e===void 0&&(e=1);var a=1/e,s=e+(n?0:1),l=n?1:0,c=1-Qt;return function(f){return((s*Nu(0,c,f)|0)+l)*a}}};Yo.ease=Ct["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return v_+=r+","+r+"Params,"});var YS=function(e,n){this.id=G1++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:bS,this.set=n?n.getSetter:b_},Eu=(function(){function r(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ko(this,+n.duration,1,1),this.data=n.data,an&&(this._ctx=an,an.data.push(this)),Mu||Ei.wake()}var e=r.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,s){if(Qo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Yf(this,a),!l._dp||l.parent||wS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ma(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Qt||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),TS(this,a,s)),this},e.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Bx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},e.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Bx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Zo(this._tTime,l)+1:1},e.timeScale=function(a,s){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Pf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Qt?0:this._rts,this.totalTime(Nu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),qf(this),$1(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=rn(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ma(s,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(oi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pf(s.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=Z1);var s=Vn;return Vn=a,y_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Vn=s,this},e.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Hx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Hx(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,s){return this.totalTime(Gi(this,a),oi(s))},e.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,oi(s)),this._dur||(this._zTime=-Qt),this},e.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},e.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Qt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},e.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Qt)},e.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},e.then=function(a){var s=this,l=s._prom;return new Promise(function(c){var f=fn(a)?a:RS,d=function(){var m=s.then;s.then=null,l&&l(),fn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=m),c(f),s.then=m};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){fu(this)},r})();wi(Eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var Jn=(function(r){mS(e,r);function e(a,s){var l;return a===void 0&&(a={}),l=r.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=oi(a.sortChildren),sn&&ma(a.parent||sn,Za(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&DS(Za(l),a.scrollTrigger),l}var n=e.prototype;return n.to=function(s,l,c){return _u(0,arguments,this),this},n.from=function(s,l,c){return _u(1,arguments,this),this},n.fromTo=function(s,l,c,f){return _u(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,mu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Mn(s,l,Gi(this,c),1),this},n.call=function(s,l,c){return ma(this,Mn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,d,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new Mn(s,c,Gi(this,d)),this},n.staggerFrom=function(s,l,c,f,d,h,m){return c.runBackwards=1,mu(c).immediateRender=oi(c.immediateRender),this.staggerTo(s,l,c,f,d,h,m)},n.staggerFromTo=function(s,l,c,f,d,h,m,g){return f.startAt=c,mu(f).immediateRender=oi(f.immediateRender),this.staggerTo(s,l,f,d,h,m,g)},n.render=function(s,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:rn(s),g=this._zTime<0!=s<0&&(this._initted||!h),v,S,b,M,y,x,R,C,D,w,P,O;if(this!==sn&&m>d&&s>=0&&(m=d),m!==this._tTime||c||g){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),v=m,D=this._start,C=this._ts,x=!C,g&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,y=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,c);if(v=rn(m%y),m===d?(M=this._repeat,v=h):(w=rn(m/y),M=~~w,M&&M===w&&(v=h,M--),v>h&&(v=h)),w=Zo(this._tTime,y),!f&&this._tTime&&w!==M&&this._tTime-w*y-this._dur<=0&&(w=M),P&&M&1&&(v=h-v,O=1),M!==w&&!this._lock){var B=P&&w&1,T=B===(P&&M&1);if(M<w&&(B=!B),f=B?0:m%h?h:m,this._lock=1,this.render(f||(O?0:rn(M*y)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,w=M),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,T&&(this._lock=2,f=B?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;WS(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=iA(this,rn(f),rn(v)),R&&(m-=v-(v=R._start))),this._tTime=m,this._time=v,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&h&&!l&&!w&&(bi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(S=this._first;S;){if(b=S._next,(S._act||v>=S._start)&&S._ts&&R!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){R=0,b&&(m+=this._zTime=-Qt);break}}S=b}else{S=this._last;for(var L=s<0?s:v;S;){if(b=S._prev,(S._act||L<=S._end)&&S._ts&&R!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(L-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(L-S._start)*S._ts,l,c||Vn&&y_(S)),v!==this._time||!this._ts&&!x){R=0,b&&(m+=this._zTime=L?-Qt:Qt);break}}S=b}}if(R&&!l&&(this.pause(),R.render(v>=f?0:-Qt)._zTime=v>=f?1:-1,this._ts))return this._start=D,qf(this),this.render(s,l,c);this._onUpdate&&!l&&bi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(D===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Qr(this,1),!l&&!(s<0&&!f)&&(m||f||!d)&&(bi(this,m===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(ar(l)||(l=Gi(this,l,s)),!(s instanceof Eu)){if(Zn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Dn(s))return this.addLabel(s,l);if(fn(s))s=Mn.delayedCall(0,s);else return this}return this!==s?ma(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Wi);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof Mn?l&&d.push(h):(c&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,l,c)))),h=h._next;return d},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Dn(s)?this.removeLabel(s):fn(s)?this.killTweensOf(s):(s.parent===this&&Wf(this,s),s===this._recent&&(this._recent=this._last),Fs(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Ei.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Gi(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=Mn.delayedCall(0,l||yu,c);return f.data="isPause",this._hasPause=1,ma(this,f,Gi(this,s))},n.removePause=function(s){var l=this._first;for(s=Gi(this,s);l;)l._start===s&&l.data==="isPause"&&Qr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)Wr!==f[d]&&f[d].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=qi(s),d=this._first,h=ar(l),m;d;)d instanceof Mn?K1(d._targets,f)&&(h?(!Wr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Gi(c,s),d=l,h=d.startAt,m=d.onStart,g=d.onStartParams,v=d.immediateRender,S,b=Mn.to(c,wi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||Qt,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());b._dur!==y&&Ko(b,y,0,1).render(b._time,!0,!0),S=1}m&&m.apply(b,g||[])}},l));return v?b.render(0):b},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,wi({startAt:{time:Gi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),Gx(this,Gi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),Gx(this,Gi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Qt)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);var f=this._first,d=this.labels,h;for(s=rn(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in d)d[h]>=c&&(d[h]+=s);return Fs(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return r.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Fs(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,d=Wi,h,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ma(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=rn(m/c._ts),c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;Ko(c,c===sn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(sn._ts&&(TS(sn,Pf(s,sn)),ES=Ei.frame),Ei.frame>=zx){zx+=Ai.autoSleep||120;var l=sn._first;if((!l||!l._ts)&&Ai.autoSleep&&Ei._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ei.sleep()}}},e})(Eu);wi(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var xA=function(e,n,a,s,l,c,f){var d=new ui(this._pt,e,n,0,1,$S,null,l),h=0,m=0,g,v,S,b,M,y,x,R;for(d.b=a,d.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Su(s)),c&&(R=[a,s],c(R,e,n),a=R[0],s=R[1]),v=a.match(fp)||[];g=fp.exec(s);)b=g[0],M=s.substring(h,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),b!==v[m++]&&(y=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:y,c:b.charAt(1)==="="?Vo(y,b)-y:parseFloat(b)-y,m:S&&S<4?Math.round:0},h=fp.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=f,(xS.test(s)||x)&&(d.e=0),this._pt=d,d},S_=function(e,n,a,s,l,c,f,d,h,m){fn(s)&&(s=s(l||0,e,c));var g=e[n],v=a!=="get"?a:fn(g)?h?e[n.indexOf("set")||!fn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](h):e[n]():g,S=fn(g)?h?bA:QS:E_,b;if(Dn(s)&&(~s.indexOf("random(")&&(s=Su(s)),s.charAt(1)==="="&&(b=Vo(v,s)+(Yn(v)||0),(b||b===0)&&(s=b))),!m||v!==s||sm)return!isNaN(v*s)&&s!==""?(b=new ui(this._pt,e,n,+v||0,s-(v||0),typeof g=="boolean"?AA:JS,0,S),h&&(b.fp=h),f&&b.modifier(f,this,e),this._pt=b):(!g&&!(n in e)&&__(n,s),xA.call(this,e,n,v,s,S,d||Ai.stringFilter,h))},yA=function(e,n,a,s,l){if(fn(e)&&(e=gu(e,l,n,a,s)),!Ea(e)||e.style&&e.nodeType||Zn(e)||gS(e))return Dn(e)?gu(e,l,n,a,s):e;var c={},f;for(f in e)c[f]=gu(e[f],l,n,a,s);return c},jS=function(e,n,a,s,l,c){var f,d,h,m;if(Mi[e]&&(f=new Mi[e]).init(l,f.rawVars?n[e]:yA(n[e],s,l,c,a),a,s,c)!==!1&&(a._pt=d=new ui(a._pt,l,e,0,1,f.render,f,0,f.priority),a!==Go))for(h=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},Wr,sm,M_=function r(e,n,a){var s=e.vars,l=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,h=s.onUpdate,m=s.runBackwards,g=s.yoyoEase,v=s.keyframes,S=s.autoRevert,b=e._dur,M=e._startAt,y=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:y,C=e._overwrite==="auto"&&!h_,D=e.timeline,w,P,O,B,T,L,G,Z,Y,se,ne,F,H;if(D&&(!v||!l)&&(l="none"),e._ease=zs(l,Yo.ease),e._yEase=g?XS(zs(g===!0?l:g,Yo.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!D&&!!s.runBackwards,!D||v&&!s.stagger){if(Z=y[0]?Ps(y[0]).harness:0,F=Z&&s[Z.prop],w=Of(s,g_),M&&(M._zTime<0&&M.progress(1),n<0&&m&&f&&!S?M.render(-1,!0):M.revert(m&&b?Mf:j1),M._lazy=0),c){if(Qr(e._startAt=Mn.set(y,wi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&oi(d),startAt:null,delay:0,onUpdate:h&&function(){return bi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Vn||!f&&!S)&&e._startAt.revert(Mf),f&&b&&n<=0&&a<=0){n&&(e._zTime=n);return}}else if(m&&b&&!M){if(n&&(f=!1),O=wi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&oi(d),immediateRender:f,stagger:0,parent:x},w),F&&(O[Z.prop]=F),Qr(e._startAt=Mn.set(y,O)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Vn?e._startAt.revert(Mf):e._startAt.render(-1,!0)),e._zTime=n,!f)r(e._startAt,Qt,Qt);else if(!n)return}for(e._pt=e._ptCache=0,d=b&&oi(d)||d&&!b,P=0;P<y.length;P++){if(T=y[P],G=T._gsap||x_(y)[P]._gsap,e._ptLookup[P]=se={},em[G.id]&&Zr.length&&Nf(),ne=R===y?P:R.indexOf(T),Z&&(Y=new Z).init(T,F||w,e,ne,R)!==!1&&(e._pt=B=new ui(e._pt,T,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(J){se[J]=B}),Y.priority&&(L=1)),!Z||F)for(O in w)Mi[O]&&(Y=jS(O,w,e,ne,T,R))?Y.priority&&(L=1):se[O]=B=S_.call(e,T,O,"get",w[O],ne,R,0,s.stringFilter);e._op&&e._op[P]&&e.kill(T,e._op[P]),C&&e._pt&&(Wr=e,sn.killTweensOf(T,se,e.globalTime(n)),H=!e.parent,Wr=0),e._pt&&d&&(em[G.id]=1)}L&&eM(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!H,v&&n<=0&&D.render(Wi,!0,!0)},SA=function(e,n,a,s,l,c,f,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[n],m,g,v,S;if(!h)for(h=e._ptCache[n]=[],v=e._ptLookup,S=e._targets.length;S--;){if(m=v[S][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return sm=1,e.vars[n]="+=0",M_(e,f),sm=0,d?xu(n+" not eligible for reset"):1;h.push(m)}for(S=h.length;S--;)g=h[S],m=g._pt||g,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=a-m.s,g.e&&(g.e=pn(a)+Yn(g.e)),g.b&&(g.b=m.s+Yn(g.b))},MA=function(e,n){var a=e[0]?Ps(e[0]).harness:0,s=a&&a.aliases,l,c,f,d;if(!s)return n;l=jo({},n);for(c in s)if(c in l)for(d=s[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},EA=function(e,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Zn(n))f=a[e]||(a[e]=[]),n.forEach(function(d,h){return f.push({t:h/(n.length-1)*100,v:d,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:n[c],e:l})},gu=function(e,n,a,s,l){return fn(e)?e.call(n,a,s,l):Dn(e)&&~e.indexOf("random(")?Su(e):e},ZS=v_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",KS={};li(ZS+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return KS[r]=1});var Mn=(function(r){mS(e,r);function e(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=r.call(this,c?s:mu(s))||this;var d=f.vars,h=d.duration,m=d.delay,g=d.immediateRender,v=d.stagger,S=d.overwrite,b=d.keyframes,M=d.defaults,y=d.scrollTrigger,x=d.yoyoEase,R=s.parent||sn,C=(Zn(a)||gS(a)?ar(a[0]):"length"in s)?[a]:qi(a),D,w,P,O,B,T,L,G;if(f._targets=C.length?x_(C):xu("GSAP target "+a+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,b||v||Qc(h)||Qc(m)){if(s=f.vars,D=f.timeline=new Jn({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:C}),D.kill(),D.parent=D._dp=Za(f),D._start=0,v||Qc(h)||Qc(m)){if(O=C.length,L=v&&OS(v),Ea(v))for(B in v)~ZS.indexOf(B)&&(G||(G={}),G[B]=v[B]);for(w=0;w<O;w++)P=Of(s,KS),P.stagger=0,x&&(P.yoyoEase=x),G&&jo(P,G),T=C[w],P.duration=+gu(h,Za(f),w,T,C),P.delay=(+gu(m,Za(f),w,T,C)||0)-f._delay,!v&&O===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),D.to(T,P,L?L(w,T,C):0),D._ease=Ct.none;D.duration()?h=m=0:f.timeline=0}else if(b){mu(wi(D.vars.defaults,{ease:"none"})),D._ease=zs(b.ease||s.ease||"none");var Z=0,Y,se,ne;if(Zn(b))b.forEach(function(F){return D.to(C,F,">")}),D.duration();else{P={};for(B in b)B==="ease"||B==="easeEach"||EA(B,b[B],P,b.easeEach);for(B in P)for(Y=P[B].sort(function(F,H){return F.t-H.t}),Z=0,w=0;w<Y.length;w++)se=Y[w],ne={ease:se.e,duration:(se.t-(w?Y[w-1].t:0))/100*h},ne[B]=se.v,D.to(C,ne,Z),Z+=ne.duration;D.duration()<h&&D.to({},{duration:h-D.duration()})}}h||f.duration(h=D.duration())}else f.timeline=0;return S===!0&&!h_&&(Wr=Za(f),sn.killTweensOf(C),Wr=0),ma(R,Za(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!h&&!b&&f._start===rn(R._time)&&oi(g)&&eA(Za(f))&&R.data!=="nested")&&(f._tTime=-Qt,f.render(Math.max(0,-m)||0)),y&&DS(Za(f),y),f}var n=e.prototype;return n.render=function(s,l,c){var f=this._time,d=this._tDur,h=this._dur,m=s<0,g=s>d-Qt&&!m?d:s<Qt?0:s,v,S,b,M,y,x,R,C,D;if(!h)nA(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=rn(g%M),g===d?(b=this._repeat,v=h):(y=rn(g/M),b=~~y,b&&b===y?(v=h,b--):v>h&&(v=h)),x=this._yoyo&&b&1,x&&(D=this._yEase,v=h-v),y=Zo(this._tTime,M),v===f&&!c&&this._initted&&b===y)return this._tTime=g,this;b!==y&&(C&&this._yEase&&WS(C,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(rn(M*b),!0).invalidate()._lock=0))}if(!this._initted){if(US(this,m?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&b!==y))return this;if(h!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(D||this._ease)(v/h),this._from&&(this.ratio=R=1-R),!f&&g&&!l&&!y&&(bi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(R,S.d),S=S._next;C&&C.render(s<0?s:C._dur*C._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&tm(this,s,l,c),bi(this,"onUpdate")),this._repeat&&b!==y&&this.vars.onRepeat&&!l&&this.parent&&bi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&tm(this,s,!0,!0),(s||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Qr(this,1),!l&&!(m&&!f)&&(g||f||x)&&(bi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,d){Mu||Ei.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||M_(this,h),m=this._ease(h/this._dur),SA(this,s,l,c,f,m,h,d)?this.resetTo(s,l,c,f,1):(Yf(this,0),this.parent||CS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?fu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Wr&&Wr.vars.overwrite!==!0)._first||fu(this),this.parent&&c!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?qi(s):f,h=this._ptLookup,m=this._pt,g,v,S,b,M,y,x;if((!l||l==="all")&&J1(f,d))return l==="all"&&(this._pt=0),fu(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},li(l,function(R){return M[R]=1}),l=M),l=MA(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=h[x],l==="all"?(g[x]=l,b=v,S={}):(S=g[x]=g[x]||{},b=l);for(M in b)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Wf(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&m&&fu(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return _u(1,arguments)},e.delayedCall=function(s,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(s,l,c){return _u(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,c){return sn.killTweensOf(s,l,c)},e})(Eu);wi(Mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(r){Mn[r]=function(){var e=new Jn,n=im.call(arguments,0);return n.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,n)}});var E_=function(e,n,a){return e[n]=a},QS=function(e,n,a){return e[n](a)},bA=function(e,n,a,s){return e[n](s.fp,a)},TA=function(e,n,a){return e.setAttribute(n,a)},b_=function(e,n){return fn(e[n])?QS:d_(e[n])&&e.setAttribute?TA:E_},JS=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},AA=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},$S=function(e,n){var a=n._pt,s="";if(!e&&n.b)s=n.b;else if(e===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},T_=function(e,n){for(var a=n._pt;a;)a.r(e,a.d),a=a._next},RA=function(e,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(e,n,a),l=c},CA=function(e){for(var n=this._pt,a,s;n;)s=n._next,n.p===e&&!n.op||n.op===e?Wf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},wA=function(e,n,a,s){s.mSet(e,n,s.m.call(s.tween,a,s.mt),s)},eM=function(e){for(var n=e._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}e._pt=l},ui=(function(){function r(n,a,s,l,c,f,d,h,m){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||JS,this.d=d||this,this.set=h||E_,this.pr=m||0,this._next=n,n&&(n._prev=this)}var e=r.prototype;return e.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=wA,this.m=a,this.mt=l,this.tween=s},r})();li(v_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return g_[r]=1});Ci.TweenMax=Ci.TweenLite=Mn;Ci.TimelineLite=Ci.TimelineMax=Jn;sn=new Jn({sortChildren:!1,defaults:Yo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=kS;var Is=[],bf={},DA=[],kx=0,UA=0,_p=function(e){return(bf[e]||DA).map(function(n){return n()})},om=function(){var e=Date.now(),n=[];e-kx>2&&(_p("matchMediaInit"),Is.forEach(function(a){var s=a.queries,l=a.conditions,c,f,d,h;for(f in s)c=da.matchMedia(s[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,h=1);h&&(a.revert(),d&&n.push(a))}),_p("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),kx=e,_p("matchMedia"))},tM=(function(){function r(n,a){this.selector=a&&am(a),this.data=[],this._r=[],this.isReverted=!1,this.id=UA++,n&&this.add(n)}var e=r.prototype;return e.add=function(a,s,l){fn(a)&&(l=s,s=a,a=fn);var c=this,f=function(){var h=an,m=c.selector,g;return h&&h!==c&&h.data.push(c),l&&(c.selector=am(l)),an=c,g=s.apply(c,arguments),fn(g)&&c._r.push(g),an=h,c.selector=m,c.isReverted=!1,g};return c.last=f,a===fn?f(c,function(d){return c.add(null,d)}):a?c[a]=f:f},e.ignore=function(a){var s=an;an=null,a(this),an=s},e.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof r?a.push.apply(a,s.getTweens()):s instanceof Mn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),d=l.data.length;d--;)h=l.data[d],h instanceof Jn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Mn)&&h.revert&&h.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Is.length;c--;)Is[c].id===this.id&&Is.splice(c,1)},e.revert=function(a){this.kill(a||{})},r})(),LA=(function(){function r(n){this.contexts=[],this.scope=n,an&&an.data.push(this)}var e=r.prototype;return e.add=function(a,s,l){Ea(a)||(a={matches:a});var c=new tM(0,l||this.scope),f=c.conditions={},d,h,m;an&&!c.selector&&(c.selector=an.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(h in a)h==="all"?m=1:(d=da.matchMedia(a[h]),d&&(Is.indexOf(c)<0&&Is.push(c),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener(om):d.addEventListener("change",om)));return m&&s(c,function(g){return c.add(null,g)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},r})(),Ff={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.forEach(function(s){return HS(s)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,n){return sn.getTweensOf(e,n)},getProperty:function(e,n,a,s){Dn(e)&&(e=qi(e)[0]);var l=Ps(e||{}).get,c=a?RS:AS;return a==="native"&&(a=""),e&&(n?c((Mi[n]&&Mi[n].get||l)(e,n,a,s)):function(f,d,h){return c((Mi[f]&&Mi[f].get||l)(e,f,d,h))})},quickSetter:function(e,n,a){if(e=qi(e),e.length>1){var s=e.map(function(m){return hi.quickSetter(m,n,a)}),l=s.length;return function(m){for(var g=l;g--;)s[g](m)}}e=e[0]||{};var c=Mi[n],f=Ps(e),d=f.harness&&(f.harness.aliases||{})[n]||n,h=c?function(m){var g=new c;Go._pt=0,g.init(e,a?m+a:m,Go,0,[e]),g.render(1,g),Go._pt&&T_(1,Go)}:f.set(e,d);return c?h:function(m){return h(e,d,a?m+a:m,f,1)}},quickTo:function(e,n,a){var s,l=hi.to(e,wi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(d,h,m){return l.resetTo(n,d,h,m)};return c.tween=l,c},isTweening:function(e){return sn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zs(e.ease,Yo.ease)),Ix(Yo,e||{})},config:function(e){return Ix(Ai,e||{})},registerEffect:function(e){var n=e.name,a=e.effect,s=e.plugins,l=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Mi[f]&&!Ci[f]&&xu(n+" effect requires "+f+" plugin.")}),hp[n]=function(f,d,h){return a(qi(f),wi(d||{},l),h)},c&&(Jn.prototype[n]=function(f,d,h){return this.add(hp[n](f,Ea(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,n){Ct[e]=zs(n)},parseEase:function(e,n){return arguments.length?zs(e,n):Ct},getById:function(e){return sn.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var a=new Jn(e),s,l;for(a.smoothChildTiming=oi(e.smoothChildTiming),sn.remove(a),a._dp=0,a._time=a._tTime=sn._time,s=sn._first;s;)l=s._next,(n||!(!s._dur&&s instanceof Mn&&s.vars.onComplete===s._targets[0]))&&ma(a,s,s._start-s._delay),s=l;return ma(sn,a,0),a},context:function(e,n){return e?new tM(e,n):an},matchMedia:function(e){return new LA(e)},matchMediaRefresh:function(){return Is.forEach(function(e){var n=e.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&e.revert()})||om()},addEventListener:function(e,n){var a=bf[e]||(bf[e]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(e,n){var a=bf[e],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:cA,wrapYoyo:fA,distribute:OS,random:FS,snap:PS,normalize:uA,getUnit:Yn,clamp:rA,splitColor:GS,toArray:qi,selector:am,mapRange:IS,pipe:oA,unitize:lA,interpolate:hA,shuffle:NS},install:SS,effects:hp,ticker:Ei,updateRoot:Jn.updateRoot,plugins:Mi,globalTimeline:sn,core:{PropTween:ui,globals:MS,Tween:Mn,Timeline:Jn,Animation:Eu,getCache:Ps,_removeLinkedListItem:Wf,reverting:function(){return Vn},context:function(e){return e&&an&&(an.data.push(e),e._ctx=an),an},suppressOverwrites:function(e){return h_=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ff[r]=Mn[r]});Ei.add(Jn.updateRoot);Go=Ff.to({},{duration:0});var NA=function(e,n){for(var a=e._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},OA=function(e,n){var a=e._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=e._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=NA(c,s)),c&&c.modifier&&c.modifier(n[s],e,a[l],s))},gp=function(e,n){return{name:e,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var d,h;if(Dn(l)&&(d={},li(l,function(m){return d[m]=1}),l=d),n){d={};for(h in l)d[h]=n(l[h]);l=d}OA(f,l)}}}},hi=Ff.registerPlugin({name:"attr",init:function(e,n,a,s,l){var c,f,d;this.tween=a;for(c in n)d=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(d||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(e,n){for(var a=n._pt;a;)Vn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,n){for(var a=n.length;a--;)this.add(e,a,e[a]||0,n[a],0,0,0,0,0,1)}},gp("roundProps",rm),gp("modifiers"),gp("snap",PS))||Ff;Mn.version=Jn.version=hi.version="3.14.2";yS=1;p_()&&Qo();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;var Xx,qr,ko,A_,Ls,Wx,R_,PA=function(){return typeof window<"u"},rr={},Cs=180/Math.PI,Xo=Math.PI/180,To=Math.atan2,qx=1e8,C_=/([A-Z])/g,FA=/(left|right|width|margin|padding|x)/i,zA=/[\s,\(]\S/,_a={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lm=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},IA=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},BA=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},HA=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},GA=function(e,n){var a=n.s+n.c*e;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},nM=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},iM=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},VA=function(e,n,a){return e.style[n]=a},kA=function(e,n,a){return e.style.setProperty(n,a)},XA=function(e,n,a){return e._gsap[n]=a},WA=function(e,n,a){return e._gsap.scaleX=e._gsap.scaleY=a},qA=function(e,n,a,s,l){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},YA=function(e,n,a,s,l){var c=e._gsap;c[n]=a,c.renderTransform(l,c)},on="transform",ci=on+"Origin",jA=function r(e,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(e in rr&&l){if(this.tfm=this.tfm||{},e!=="transform")e=_a[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=Ka(s,f)}):this.tfm[e]=c.x?c[e]:Ka(s,e),e===ci&&(this.tfm.zOrigin=c.zOrigin);else return _a.transform.split(",").forEach(function(f){return r.call(a,f,n)});if(this.props.indexOf(on)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ci,n,"")),e=on}(l||n)&&this.props.push(e,n,l[e])},aM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZA=function(){var e=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?n[e[l]](e[l+2]):n[e[l]]=e[l+2]:e[l+2]?a[e[l]]=e[l+2]:a.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(C_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=R_(),(!l||!l.isStart)&&!a[on]&&(aM(a),s.zOrigin&&a[ci]&&(a[ci]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},rM=function(e,n){var a={target:e,props:[],revert:ZA,save:jA};return e._gsap||hi.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},sM,um=function(e,n){var a=qr.createElementNS?qr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qr.createElement(e);return a&&a.style?a:qr.createElement(e)},Ti=function r(e,n,a){var s=getComputedStyle(e);return s[n]||s.getPropertyValue(n.replace(C_,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&r(e,Jo(n)||n,1)||""},Yx="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,n,a){var s=n||Ls,l=s.style,c=5;if(e in l&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(Yx[c]+e in l););return c<0?null:(c===3?"ms":c>=0?Yx[c]:"")+e},cm=function(){PA()&&window.document&&(Xx=window,qr=Xx.document,ko=qr.documentElement,Ls=um("div")||{style:{}},um("div"),on=Jo(on),ci=on+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sM=!!Jo("perspective"),R_=hi.core.reverting,A_=1)},jx=function(e){var n=e.ownerSVGElement,a=um("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",a.appendChild(s),ko.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),ko.removeChild(a),l},Zx=function(e,n){for(var a=n.length;a--;)if(e.hasAttribute(n[a]))return e.getAttribute(n[a])},oM=function(e){var n,a;try{n=e.getBBox()}catch{n=jx(e),a=1}return n&&(n.width||n.height)||a||(n=jx(e)),n&&!n.width&&!n.x&&!n.y?{x:+Zx(e,["x","cx","x1"])||0,y:+Zx(e,["y","cy","y1"])||0,width:0,height:0}:n},lM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&oM(e))},Jr=function(e,n){if(n){var a=e.style,s;n in rr&&n!==ci&&(n=on),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(C_,"-$1").toLowerCase())):a.removeAttribute(n)}},Yr=function(e,n,a,s,l,c){var f=new ui(e._pt,n,a,0,1,c?iM:nM);return e._pt=f,f.b=s,f.e=l,e._props.push(a),f},Kx={deg:1,rad:1,turn:1},KA={grid:1,flex:1},$r=function r(e,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Ls.style,d=FA.test(n),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",S=s==="%",b,M,y,x;if(s===c||!l||Kx[s]||Kx[c])return l;if(c!=="px"&&!v&&(l=r(e,n,a,"px")),x=e.getCTM&&lM(e),(S||c==="%")&&(rr[n]||~n.indexOf("adius")))return b=x?e.getBBox()[d?"width":"height"]:e[m],pn(S?l/b*g:l/100*b);if(f[d?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===qr||!M.appendChild)&&(M=qr.body),y=M._gsap,y&&S&&y.width&&d&&y.time===Ei.time&&!y.uncache)return pn(l/y.width*g);if(S&&(n==="height"||n==="width")){var R=e.style[n];e.style[n]=g+s,b=e[m],R?e.style[n]=R:Jr(e,n)}else(S||c==="%")&&!KA[Ti(M,"display")]&&(f.position=Ti(e,"position")),M===e&&(f.position="static"),M.appendChild(Ls),b=Ls[m],M.removeChild(Ls),f.position="absolute";return d&&S&&(y=Ps(M),y.time=Ei.time,y.width=M[m]),pn(v?b*l/g:b&&l?g/b*l:0)},Ka=function(e,n,a,s){var l;return A_||cm(),n in _a&&n!=="transform"&&(n=_a[n],~n.indexOf(",")&&(n=n.split(",")[0])),rr[n]&&n!=="transform"?(l=Tu(e,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:If(Ti(e,ci))+" "+l.zOrigin+"px"):(l=e.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=zf[n]&&zf[n](e,n,a)||Ti(e,n)||bS(e,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?$r(e,n,l,a)+a:l},QA=function(e,n,a,s){if(!a||a==="none"){var l=Jo(n,e,1),c=l&&Ti(e,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Ti(e,"borderTopColor"))}var f=new ui(this._pt,e.style,n,0,1,$S),d=0,h=0,m,g,v,S,b,M,y,x,R,C,D,w;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ti(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[n],e.style[n]=s,s=Ti(e,n)||s,M?e.style[n]=M:Jr(e,n)),m=[a,s],kS(m),a=m[0],s=m[1],v=a.match(Ho)||[],w=s.match(Ho)||[],w.length){for(;g=Ho.exec(s);)y=g[0],R=s.substring(d,g.index),b?b=(b+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(b=1),y!==(M=v[h++]||"")&&(S=parseFloat(M)||0,D=M.substr((S+"").length),y.charAt(1)==="="&&(y=Vo(S,y)+D),x=parseFloat(y),C=y.substr((x+"").length),d=Ho.lastIndex-C.length,C||(C=C||Ai.units[n]||D,d===s.length&&(s+=C,f.e+=C)),D!==C&&(S=$r(e,n,M,C)||0),f._pt={_next:f._pt,p:R||h===1?R:",",s:S,c:x-S,m:b&&b<4||n==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=n==="display"&&s==="none"?iM:nM;return xS.test(s)&&(f.e=0),this._pt=f,f},Qx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JA=function(e){var n=e.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(e=a,a=s,s=e),n[0]=Qx[a]||a,n[1]=Qx[s]||s,n.join(" ")},$A=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,d,h;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],rr[f]&&(d=1,f=f==="transformOrigin"?ci:on),Jr(a,f);d&&(Jr(a,on),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Tu(a,1),c.uncache=1,aM(s)))}},zf={clearProps:function(e,n,a,s,l){if(l.data!=="isFromStart"){var c=e._pt=new ui(e._pt,n,a,0,0,$A);return c.u=s,c.pr=-10,c.tween=l,e._props.push(a),1}}},bu=[1,0,0,1,0,0],uM={},cM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jx=function(e){var n=Ti(e,on);return cM(n)?bu:n.substr(7).match(vS).map(pn)},w_=function(e,n){var a=e._gsap||Ps(e),s=e.style,l=Jx(e),c,f,d,h;return a.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?bu:l):(l===bu&&!e.offsetParent&&e!==ko&&!a.svg&&(d=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,f=e.nextElementSibling,ko.appendChild(e)),l=Jx(e),d?s.display=d:Jr(e,"display"),h&&(f?c.insertBefore(e,f):c?c.appendChild(e):ko.removeChild(e))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},fm=function(e,n,a,s,l,c){var f=e._gsap,d=l||w_(e,!0),h=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=d[0],b=d[1],M=d[2],y=d[3],x=d[4],R=d[5],C=n.split(" "),D=parseFloat(C[0])||0,w=parseFloat(C[1])||0,P,O,B,T;a?d!==bu&&(O=S*y-b*M)&&(B=D*(y/O)+w*(-M/O)+(M*R-y*x)/O,T=D*(-b/O)+w*(S/O)-(S*R-b*x)/O,D=B,w=T):(P=oM(e),D=P.x+(~C[0].indexOf("%")?D/100*P.width:D),w=P.y+(~(C[1]||C[0]).indexOf("%")?w/100*P.height:w)),s||s!==!1&&f.smooth?(x=D-h,R=w-m,f.xOffset=g+(x*S+R*M)-x,f.yOffset=v+(x*b+R*y)-R):f.xOffset=f.yOffset=0,f.xOrigin=D,f.yOrigin=w,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,e.style[ci]="0px 0px",c&&(Yr(c,f,"xOrigin",h,D),Yr(c,f,"yOrigin",m,w),Yr(c,f,"xOffset",g,f.xOffset),Yr(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",D+" "+w)},Tu=function(e,n){var a=e._gsap||new YS(e);if("x"in a&&!n&&!a.uncache)return a;var s=e.style,l=a.scaleX<0,c="px",f="deg",d=getComputedStyle(e),h=Ti(e,ci)||"0",m,g,v,S,b,M,y,x,R,C,D,w,P,O,B,T,L,G,Z,Y,se,ne,F,H,J,ye,xe,z,te,me,Ee,Ue;return m=g=v=M=y=x=R=C=D=0,S=b=1,a.svg=!!(e.getCTM&&lM(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[on]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[on]!=="none"?d[on]:"")),s.scale=s.rotate=s.translate="none"),O=w_(e,a.svg),a.svg&&(a.uncache?(J=e.getBBox(),h=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",H=""):H=!n&&e.getAttribute("data-svg-origin"),fm(e,H||h,!!H||a.originIsAbsolute,a.smooth!==!1,O)),w=a.xOrigin||0,P=a.yOrigin||0,O!==bu&&(G=O[0],Z=O[1],Y=O[2],se=O[3],m=ne=O[4],g=F=O[5],O.length===6?(S=Math.sqrt(G*G+Z*Z),b=Math.sqrt(se*se+Y*Y),M=G||Z?To(Z,G)*Cs:0,R=Y||se?To(Y,se)*Cs+M:0,R&&(b*=Math.abs(Math.cos(R*Xo))),a.svg&&(m-=w-(w*G+P*Y),g-=P-(w*Z+P*se))):(Ue=O[6],me=O[7],xe=O[8],z=O[9],te=O[10],Ee=O[11],m=O[12],g=O[13],v=O[14],B=To(Ue,te),y=B*Cs,B&&(T=Math.cos(-B),L=Math.sin(-B),H=ne*T+xe*L,J=F*T+z*L,ye=Ue*T+te*L,xe=ne*-L+xe*T,z=F*-L+z*T,te=Ue*-L+te*T,Ee=me*-L+Ee*T,ne=H,F=J,Ue=ye),B=To(-Y,te),x=B*Cs,B&&(T=Math.cos(-B),L=Math.sin(-B),H=G*T-xe*L,J=Z*T-z*L,ye=Y*T-te*L,Ee=se*L+Ee*T,G=H,Z=J,Y=ye),B=To(Z,G),M=B*Cs,B&&(T=Math.cos(B),L=Math.sin(B),H=G*T+Z*L,J=ne*T+F*L,Z=Z*T-G*L,F=F*T-ne*L,G=H,ne=J),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=pn(Math.sqrt(G*G+Z*Z+Y*Y)),b=pn(Math.sqrt(F*F+Ue*Ue)),B=To(ne,F),R=Math.abs(B)>2e-4?B*Cs:0,D=Ee?1/(Ee<0?-Ee:Ee):0),a.svg&&(H=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!cM(Ti(e,on)),H&&e.setAttribute("transform",H))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(S*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(b*=-1,R+=R<=0?180:-180)),n=n||a.uncache,a.x=m-((a.xPercent=m&&(!n&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=pn(S),a.scaleY=pn(b),a.rotation=pn(M)+f,a.rotationX=pn(y)+f,a.rotationY=pn(x)+f,a.skewX=R+f,a.skewY=C+f,a.transformPerspective=D+c,(a.zOrigin=parseFloat(h.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ci]=If(h)),a.xOffset=a.yOffset=0,a.force3D=Ai.force3D,a.renderTransform=a.svg?tR:sM?fM:eR,a.uncache=0,a},If=function(e){return(e=e.split(" "))[0]+" "+e[1]},vp=function(e,n,a){var s=Yn(n);return pn(parseFloat(n)+parseFloat($r(e,"x",a+"px",s)))+s},eR=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,fM(e,n)},ys="0deg",iu="0px",Ss=") ",fM=function(e,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.z,h=a.rotation,m=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,b=a.scaleX,M=a.scaleY,y=a.transformPerspective,x=a.force3D,R=a.target,C=a.zOrigin,D="",w=x==="auto"&&e&&e!==1||x===!0;if(C&&(g!==ys||m!==ys)){var P=parseFloat(m)*Xo,O=Math.sin(P),B=Math.cos(P),T;P=parseFloat(g)*Xo,T=Math.cos(P),c=vp(R,c,O*T*-C),f=vp(R,f,-Math.sin(P)*-C),d=vp(R,d,B*T*-C+C)}y!==iu&&(D+="perspective("+y+Ss),(s||l)&&(D+="translate("+s+"%, "+l+"%) "),(w||c!==iu||f!==iu||d!==iu)&&(D+=d!==iu||w?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+Ss),h!==ys&&(D+="rotate("+h+Ss),m!==ys&&(D+="rotateY("+m+Ss),g!==ys&&(D+="rotateX("+g+Ss),(v!==ys||S!==ys)&&(D+="skew("+v+", "+S+Ss),(b!==1||M!==1)&&(D+="scale("+b+", "+M+Ss),R.style[on]=D||"translate(0, 0)"},tR=function(e,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.rotation,h=a.skewX,m=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,b=a.xOrigin,M=a.yOrigin,y=a.xOffset,x=a.yOffset,R=a.forceCSS,C=parseFloat(c),D=parseFloat(f),w,P,O,B,T;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=Xo,h*=Xo,w=Math.cos(d)*g,P=Math.sin(d)*g,O=Math.sin(d-h)*-v,B=Math.cos(d-h)*v,h&&(m*=Xo,T=Math.tan(h-m),T=Math.sqrt(1+T*T),O*=T,B*=T,m&&(T=Math.tan(m),T=Math.sqrt(1+T*T),w*=T,P*=T)),w=pn(w),P=pn(P),O=pn(O),B=pn(B)):(w=g,B=v,P=O=0),(C&&!~(c+"").indexOf("px")||D&&!~(f+"").indexOf("px"))&&(C=$r(S,"x",c,"px"),D=$r(S,"y",f,"px")),(b||M||y||x)&&(C=pn(C+b-(b*w+M*O)+y),D=pn(D+M-(b*P+M*B)+x)),(s||l)&&(T=S.getBBox(),C=pn(C+s/100*T.width),D=pn(D+l/100*T.height)),T="matrix("+w+","+P+","+O+","+B+","+C+","+D+")",S.setAttribute("transform",T),R&&(S.style[on]=T)},nR=function(e,n,a,s,l){var c=360,f=Dn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?Cs:1),h=d-s,m=s+h+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),g==="cw"&&h<0?h=(h+c*qx)%c-~~(h/c)*c:g==="ccw"&&h>0&&(h=(h-c*qx)%c-~~(h/c)*c)),e._pt=v=new ui(e._pt,n,a,s,h,IA),v.e=m,v.u="deg",e._props.push(a),v},$x=function(e,n){for(var a in n)e[a]=n[a];return e},iR=function(e,n,a){var s=$x({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,d,h,m,g,v,S,b;s.svg?(h=a.getAttribute("transform"),a.setAttribute("transform",""),c[on]=n,f=Tu(a,1),Jr(a,on),a.setAttribute("transform",h)):(h=getComputedStyle(a)[on],c[on]=n,f=Tu(a,1),c[on]=h);for(d in rr)h=s[d],m=f[d],h!==m&&l.indexOf(d)<0&&(S=Yn(h),b=Yn(m),g=S!==b?$r(a,d,h,b):parseFloat(h),v=parseFloat(m),e._pt=new ui(e._pt,f,d,g,v-g,lm),e._pt.u=b||0,e._props.push(d));$x(f,s)};li("padding,margin,Width,Radius",function(r,e){var n="Top",a="Right",s="Bottom",l="Left",c=(e<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return e<2?r+f:"border"+f+r});zf[e>1?"border"+r:r]=function(f,d,h,m,g){var v,S;if(arguments.length<4)return v=c.map(function(b){return Ka(f,b,h)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(m+"").split(" "),S={},c.forEach(function(b,M){return S[b]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,S,g)}});var hM={name:"css",register:cm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,a,s,l){var c=this._props,f=e.style,d=a.vars.startAt,h,m,g,v,S,b,M,y,x,R,C,D,w,P,O,B,T;A_||cm(),this.styles=this.styles||rM(e),B=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(m=n[M],!(Mi[M]&&jS(M,n,a,s,e,l)))){if(S=typeof m,b=zf[M],S==="function"&&(m=m.call(a,s,e,l),S=typeof m),S==="string"&&~m.indexOf("random(")&&(m=Su(m)),b)b(this,e,M,m,a)&&(O=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",Kr.lastIndex=0,Kr.test(h)||(y=Yn(h),x=Yn(m),x?y!==x&&(h=$r(e,M,h,x)+x):y&&(m+=y)),this.add(f,"setProperty",h,m,s,l,0,0,M),c.push(M),B.push(M,0,f[M]);else if(S!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(a,s,e,l):d[M],Dn(h)&&~h.indexOf("random(")&&(h=Su(h)),Yn(h+"")||h==="auto"||(h+=Ai.units[M]||Yn(Ka(e,M))||""),(h+"").charAt(1)==="="&&(h=Ka(e,M))):h=Ka(e,M),v=parseFloat(h),R=S==="string"&&m.charAt(1)==="="&&m.substr(0,2),R&&(m=m.substr(2)),g=parseFloat(m),M in _a&&(M==="autoAlpha"&&(v===1&&Ka(e,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),Yr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=_a[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in rr,C){if(this.styles.save(M),T=m,S==="string"&&m.substring(0,6)==="var(--"){if(m=Ti(e,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=m,m=Ti(e,"perspective"),L?e.style.perspective=L:Jr(e,"perspective")}g=parseFloat(m)}if(D||(w=e._gsap,w.renderTransform&&!n.parseTransform||Tu(e,n.parseTransform),P=n.smoothOrigin!==!1&&w.smooth,D=this._pt=new ui(this._pt,f,on,0,1,w.renderTransform,w,0,-1),D.dep=1),M==="scale")this._pt=new ui(this._pt,w,"scaleY",w.scaleY,(R?Vo(w.scaleY,R+g):g)-w.scaleY||0,lm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ci,0,f[ci]),m=JA(m),w.svg?fm(e,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==w.zOrigin&&Yr(this,w,"zOrigin",w.zOrigin,x),Yr(this,f,M,If(h),If(m)));continue}else if(M==="svgOrigin"){fm(e,m,1,P,0,this);continue}else if(M in uM){nR(this,w,M,v,R?Vo(v,R+m):m);continue}else if(M==="smoothOrigin"){Yr(this,w,"smooth",w.smooth,m);continue}else if(M==="force3D"){w[M]=m;continue}else if(M==="transform"){iR(this,m,e);continue}}else M in f||(M=Jo(M)||M);if(C||(g||g===0)&&(v||v===0)&&!zA.test(m)&&M in f)y=(h+"").substr((v+"").length),g||(g=0),x=Yn(m)||(M in Ai.units?Ai.units[M]:y),y!==x&&(v=$r(e,M,h,x)),this._pt=new ui(this._pt,C?w:f,M,v,(R?Vo(v,R+g):g)-v,!C&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?GA:lm),this._pt.u=x||0,C&&T!==m?(this._pt.b=h,this._pt.e=T,this._pt.r=HA):y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=BA);else if(M in f)QA.call(this,e,M,h,R?R+m:m);else if(M in e)this.add(e,M,h||e[M],R?R+m:m,s,l);else if(M!=="parseTransform"){__(M,m);continue}C||(M in f?B.push(M,0,f[M]):typeof e[M]=="function"?B.push(M,2,e[M]()):B.push(M,1,h||e[M])),c.push(M)}}O&&eM(this)},render:function(e,n){if(n.tween._time||!R_())for(var a=n._pt;a;)a.r(e,a.d),a=a._next;else n.styles.revert()},get:Ka,aliases:_a,getSetter:function(e,n,a){var s=_a[n];return s&&s.indexOf(",")<0&&(n=s),n in rr&&n!==ci&&(e._gsap.x||Ka(e,"x"))?a&&Wx===a?n==="scale"?WA:XA:(Wx=a||{})&&(n==="scale"?qA:YA):e.style&&!d_(e.style[n])?VA:~n.indexOf("-")?kA:b_(e,n)},core:{_removeProperty:Jr,_getMatrix:w_}};hi.utils.checkPrefix=Jo;hi.core.getStyleSaver=rM;(function(r,e,n,a){var s=li(r+","+e+","+n,function(l){rr[l]=1});li(e,function(l){Ai.units[l]="deg",uM[l]=1}),_a[s[13]]=r+","+e,li(a,function(l){var c=l.split(":");_a[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ai.units[r]="px"});hi.registerPlugin(hM);var ut=hi.registerPlugin(hM)||hi;ut.core.Tween;const aR=({position:r="right",colors:e=["#B19EEF","#5227FF"],items:n=[],socialItems:a=[],displaySocials:s=!0,displayItemNumbering:l=!0,className:c,logoUrl:f="/src/assets/react.svg",menuButtonColor:d="#E5E9F0",openMenuButtonColor:h="#E5E9F0",accentColor:m="#6C63FF",changeMenuColorOnOpen:g=!0,isFixed:v=!1,closeOnClickAway:S=!0,onMenuOpen:b,onMenuClose:M})=>{const[y,x]=$.useState(!1),R=$.useRef(!1),C=$.useRef(null),D=$.useRef(null),w=$.useRef([]),P=$.useRef(null),O=$.useRef(null),B=$.useRef(null),T=$.useRef(null),L=$.useRef(null),[G,Z]=$.useState(["Menu","Close"]),Y=$.useRef(null),se=$.useRef(null),ne=$.useRef(null),F=$.useRef(null),H=$.useRef(null),J=$.useRef(null),ye=$.useRef(!1),xe=$.useRef(null),z=$.useRef([]);$.useLayoutEffect(()=>{const Te=ut.context(()=>{const Le=C.current,ke=D.current,rt=P.current,et=O.current,_t=B.current,k=T.current;if(!Le||!rt||!et||!_t||!k)return;let St=[];ke&&(St=Array.from(ke.querySelectorAll(".sm-prelayer"))),w.current=St;const ct=r==="left"?-100:100;ut.set([Le,...St],{xPercent:ct}),ut.set(rt,{transformOrigin:"50% 50%",rotate:0}),ut.set(et,{transformOrigin:"50% 50%",rotate:90}),ut.set(_t,{rotate:0,transformOrigin:"50% 50%"}),ut.set(k,{yPercent:0}),J.current&&ut.set(J.current,{color:d})});return()=>Te.revert()},[d,r]);const te=$.useCallback(()=>{const Te=C.current,Le=w.current;if(!Te)return null;Y.current?.kill(),se.current&&(se.current.kill(),se.current=null),xe.current?.kill();const ke=Array.from(Te.querySelectorAll(".sm-panel-itemLabel")),rt=Array.from(Te.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),et=Te.querySelector(".sm-socials-title"),_t=Array.from(Te.querySelectorAll(".sm-socials-link")),k=Le.map(A=>({el:A,start:Number(ut.getProperty(A,"xPercent"))})),St=Number(ut.getProperty(Te,"xPercent"));ke.length&&ut.set(ke,{yPercent:140,rotate:10}),rt.length&&ut.set(rt,{"--sm-num-opacity":0}),et&&ut.set(et,{opacity:0}),_t.length&&ut.set(_t,{y:25,opacity:0});const ct=ut.timeline({paused:!0});k.forEach((A,j)=>{ct.fromTo(A.el,{xPercent:A.start},{xPercent:0,duration:.5,ease:"power4.out"},j*.07)});const qe=(k.length?(k.length-1)*.07:0)+(k.length?.08:0),I=.65;if(ct.fromTo(Te,{xPercent:St},{xPercent:0,duration:I,ease:"power4.out"},qe),ke.length){const j=qe+I*.15;ct.to(ke,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},j),rt.length&&ct.to(rt,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},j+.1)}if(et||_t.length){const A=qe+I*.4;et&&ct.to(et,{opacity:1,duration:.5,ease:"power2.out"},A),_t.length&&ct.to(_t,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{ut.set(_t,{clearProps:"opacity"})}},A+.04)}return Y.current=ct,ct},[]),me=$.useCallback(()=>{if(ye.current)return;ye.current=!0;const Te=te();Te?(Te.eventCallback("onComplete",()=>{ye.current=!1}),Te.play(0)):ye.current=!1},[te]),Ee=$.useCallback(()=>{Y.current?.kill(),Y.current=null,xe.current?.kill();const Te=C.current,Le=w.current;if(!Te)return;const ke=[...Le,Te];se.current?.kill();const rt=r==="left"?-100:100;se.current=ut.to(ke,{xPercent:rt,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const et=Array.from(Te.querySelectorAll(".sm-panel-itemLabel"));et.length&&ut.set(et,{yPercent:140,rotate:10});const _t=Array.from(Te.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));_t.length&&ut.set(_t,{"--sm-num-opacity":0});const k=Te.querySelector(".sm-socials-title"),St=Array.from(Te.querySelectorAll(".sm-socials-link"));k&&ut.set(k,{opacity:0}),St.length&&ut.set(St,{y:25,opacity:0}),ye.current=!1}})},[r]),Ue=$.useCallback(Te=>{const Le=B.current;Le&&(ne.current?.kill(),Te?ne.current=ut.to(Le,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):ne.current=ut.to(Le,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ie=$.useCallback(Te=>{const Le=J.current;if(Le)if(H.current?.kill(),g){const ke=Te?h:d;H.current=ut.to(Le,{color:ke,delay:.18,duration:.3,ease:"power2.out"})}else ut.set(Le,{color:d})},[h,d,g]);$.useEffect(()=>{if(J.current)if(g){const Te=R.current?h:d;ut.set(J.current,{color:Te})}else ut.set(J.current,{color:d})},[g,d,h]);const he=$.useCallback(Te=>{const Le=T.current;if(!Le)return;F.current?.kill();const ke=Te?"Menu":"Close",rt=Te?"Close":"Menu",et=3,_t=[ke];let k=ke;for(let wt=0;wt<et;wt++)k=k==="Menu"?"Close":"Menu",_t.push(k);k!==rt&&_t.push(rt),_t.push(rt),Z(_t),ut.set(Le,{yPercent:0});const St=_t.length,ct=(St-1)/St*100;F.current=ut.to(Le,{yPercent:-ct,duration:.5+St*.07,ease:"power4.out"})},[]),Re=$.useCallback(Te=>{const Le=z.current||[],ke=Le.length;if(!ke)return;const rt=(Te%ke+ke)%ke;Le[rt]?.focus()},[]);function Pe(Te,Le){Te.key==="ArrowDown"?(Te.preventDefault(),Re(Le+1)):Te.key==="ArrowUp"?(Te.preventDefault(),Re(Le-1)):Te.key==="Home"?(Te.preventDefault(),Re(0)):Te.key==="End"?(Te.preventDefault(),Re(z.current.length-1)):Te.key==="Escape"&&(Te.preventDefault(),it())}const Be=$.useCallback(()=>{const Te=!R.current;R.current=Te,x(Te),Te?(b?.(),me()):(M?.(),Ee(),J.current?.focus()),Ue(Te),ie(Te),he(Te)},[me,Ee,Ue,ie,he,b,M]),it=$.useCallback(()=>{R.current&&(R.current=!1,x(!1),M?.(),Ee(),Ue(!1),ie(!1),he(!1),J.current?.focus())},[Ee,Ue,ie,he,M]);return $.useEffect(()=>{if(!S||!y)return;const Te=Le=>{C.current&&!C.current.contains(Le.target)&&J.current&&!J.current.contains(Le.target)&&it()};return document.addEventListener("mousedown",Te),()=>{document.removeEventListener("mousedown",Te)}},[S,y,it]),$.useEffect(()=>{if(y){const Te=setTimeout(()=>{z.current[0]?.focus()},300);return()=>clearTimeout(Te)}else J.current?.focus()},[y]),W.jsxs("div",{className:(c?c+" ":"")+"staggered-menu-wrapper"+(v?" fixed-wrapper":""),style:m?{"--sm-accent":m}:void 0,"data-position":r,"data-open":y||void 0,children:[W.jsx("div",{ref:D,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let Le=[...e&&e.length?e.slice(0,4):["#1e1e22","#35353c"]];if(Le.length>=3){const ke=Math.floor(Le.length/2);Le.splice(ke,1)}return Le.map((ke,rt)=>W.jsx("div",{className:"sm-prelayer",style:{background:ke}},rt))})()}),W.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[W.jsx("div",{className:"sm-logo","aria-label":"Logo",children:W.jsx(ki,{to:"/",onClick:()=>{y&&it()},className:"sm-logo-link","aria-label":"Home",children:W.jsx("img",{src:f||"/src/assets/react.svg",alt:"STEMFLOW home",className:"sm-logo-img",draggable:!1,width:110,height:24})})}),W.jsxs("button",{ref:J,className:"sm-toggle","aria-label":y?"Close menu":"Open menu","aria-expanded":y,"aria-controls":"staggered-menu-panel",onClick:Be,type:"button",children:[W.jsx("span",{ref:L,className:"sm-toggle-textWrap","aria-hidden":"true",children:W.jsx("span",{ref:T,className:"sm-toggle-textInner",children:G.map((Te,Le)=>W.jsx("span",{className:"sm-toggle-line",children:Te},Le))})}),W.jsxs("span",{ref:B,className:"sm-icon","aria-hidden":"true",children:[W.jsx("span",{ref:P,className:"sm-icon-line"}),W.jsx("span",{ref:O,className:"sm-icon-line sm-icon-line-v"})]})]})]}),W.jsx("aside",{id:"staggered-menu-panel",ref:C,className:"staggered-menu-panel","aria-hidden":!y,children:W.jsxs("div",{className:"sm-panel-inner",children:[W.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":l||void 0,children:n&&n.length?n.map((Te,Le)=>W.jsx("li",{className:"sm-panel-itemWrap",children:Te.link&&Te.link.startsWith("/")?W.jsx(ki,{className:"sm-panel-item",to:Te.link,"aria-label":Te.ariaLabel,"data-index":Le+1,ref:ke=>z.current[Le]=ke,tabIndex:y?0:-1,onKeyDown:ke=>Pe(ke,Le),onClick:()=>{it()},children:W.jsx("span",{className:"sm-panel-itemLabel",children:Te.label})}):W.jsx("a",{className:"sm-panel-item",href:Te.link,"aria-label":Te.ariaLabel,"data-index":Le+1,ref:ke=>z.current[Le]=ke,tabIndex:y?0:-1,onKeyDown:ke=>Pe(ke,Le),onClick:()=>{it()},children:W.jsx("span",{className:"sm-panel-itemLabel",children:Te.label})})},Te.label+Le)):W.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:W.jsx("span",{className:"sm-panel-item",children:W.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),s&&a&&a.length>0&&W.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[W.jsx("h3",{className:"sm-socials-title",children:"Socials"}),W.jsx("ul",{className:"sm-socials-list",role:"list",children:a.map((Te,Le)=>W.jsx("li",{className:"sm-socials-item",children:W.jsx("a",{href:Te.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:Te.label})},Te.label+Le))})]})]})})]})};function rR(){return W.jsx("footer",{className:"site-footer",children:W.jsxs("div",{className:"footer-container",children:[W.jsxs("div",{className:"footer-brand",children:[W.jsx("div",{className:"footer-title",children:"STEMFLOW Community Hub"}),W.jsx("div",{className:"footer-desc",children:"Build, learn, and share — community projects, resources, and events."})]}),W.jsxs("div",{className:"footer-meta",children:[W.jsx("div",{className:"socials",children:W.jsx("a",{href:"https://github.com/Pinkwinx/STEMFLOW-COMMUNITY-HUB",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),W.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," STEMFLOW Community"]})]})]})})}const D_="182",sR=0,ey=1,oR=2,Tf=1,lR=2,du=3,es=0,fi=1,Qa=2,er=0,Wo=1,ty=2,ny=3,iy=4,uR=5,Ds=100,cR=101,fR=102,hR=103,dR=104,pR=200,mR=201,_R=202,gR=203,hm=204,dm=205,vR=206,xR=207,yR=208,SR=209,MR=210,ER=211,bR=212,TR=213,AR=214,pm=0,mm=1,_m=2,$o=3,gm=4,vm=5,xm=6,ym=7,dM=0,RR=1,CR=2,xa=0,pM=1,mM=2,_M=3,gM=4,vM=5,xM=6,yM=7,SM=300,Bs=301,el=302,Sm=303,Mm=304,jf=306,Em=1e3,Ja=1001,bm=1002,Gn=1003,wR=1004,Jc=1005,jn=1006,xp=1007,Ns=1008,Xi=1009,MM=1010,EM=1011,Au=1012,U_=1013,ba=1014,ga=1015,sr=1016,L_=1017,N_=1018,Ru=1020,bM=35902,TM=35899,AM=1021,RM=1022,ra=1023,or=1026,Os=1027,CM=1028,O_=1029,tl=1030,P_=1031,F_=1033,Af=33776,Rf=33777,Cf=33778,wf=33779,Tm=35840,Am=35841,Rm=35842,Cm=35843,wm=36196,Dm=37492,Um=37496,Lm=37488,Nm=37489,Om=37490,Pm=37491,Fm=37808,zm=37809,Im=37810,Bm=37811,Hm=37812,Gm=37813,Vm=37814,km=37815,Xm=37816,Wm=37817,qm=37818,Ym=37819,jm=37820,Zm=37821,Km=36492,Qm=36494,Jm=36495,$m=36283,e_=36284,t_=36285,n_=36286,DR=3200,UR=0,LR=1,Xr="",Vi="srgb",nl="srgb-linear",Bf="linear",Xt="srgb",Ao=7680,ay=519,NR=512,OR=513,PR=514,z_=515,FR=516,zR=517,I_=518,IR=519,ry=35044,sy="300 es",va=2e3,Hf=2001;function wM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BR(){const r=Gf("canvas");return r.style.display="block",r}const oy={};function ly(...r){const e="THREE."+r.shift();console.log(e,...r)}function pt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Pt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Cu(...r){const e=r.join(" ");e in oy||(oy[e]=!0,pt(...r))}function HR(r,e,n){return new Promise(function(a,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class sl{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=Math.PI/180,i_=180/Math.PI;function Ou(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function Rt(r,e,n){return Math.max(e,Math.min(n,r))}function GR(r,e){return(r%e+e)%e}function Sp(r,e,n){return(1-n)*r+n*e}function au(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function si(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,s=e.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*s+e.x,this.y=l*s+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pu{constructor(e=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=s}static slerpFlat(e,n,a,s,l,c,f){let d=a[s+0],h=a[s+1],m=a[s+2],g=a[s+3],v=l[c+0],S=l[c+1],b=l[c+2],M=l[c+3];if(f<=0){e[n+0]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g;return}if(f>=1){e[n+0]=v,e[n+1]=S,e[n+2]=b,e[n+3]=M;return}if(g!==M||d!==v||h!==S||m!==b){let y=d*v+h*S+m*b+g*M;y<0&&(v=-v,S=-S,b=-b,M=-M,y=-y);let x=1-f;if(y<.9995){const R=Math.acos(y),C=Math.sin(R);x=Math.sin(x*R)/C,f=Math.sin(f*R)/C,d=d*x+v*f,h=h*x+S*f,m=m*x+b*f,g=g*x+M*f}else{d=d*x+v*f,h=h*x+S*f,m=m*x+b*f,g=g*x+M*f;const R=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=R,h*=R,m*=R,g*=R}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,s,l,c){const f=a[s],d=a[s+1],h=a[s+2],m=a[s+3],g=l[c],v=l[c+1],S=l[c+2],b=l[c+3];return e[n]=f*b+m*g+d*S-h*v,e[n+1]=d*b+m*v+h*g-f*S,e[n+2]=h*b+m*S+f*v-d*g,e[n+3]=m*b-f*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,s){return this._x=e,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(s/2),g=f(l/2),v=d(a/2),S=d(s/2),b=d(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*b,this._y=h*S*g-v*m*b,this._z=h*m*b+v*S*g,this._w=h*m*g-v*S*b;break;case"YXZ":this._x=v*m*g+h*S*b,this._y=h*S*g-v*m*b,this._z=h*m*b-v*S*g,this._w=h*m*g+v*S*b;break;case"ZXY":this._x=v*m*g-h*S*b,this._y=h*S*g+v*m*b,this._z=h*m*b+v*S*g,this._w=h*m*g-v*S*b;break;case"ZYX":this._x=v*m*g-h*S*b,this._y=h*S*g+v*m*b,this._z=h*m*b-v*S*g,this._w=h*m*g+v*S*b;break;case"YZX":this._x=v*m*g+h*S*b,this._y=h*S*g+v*m*b,this._z=h*m*b-v*S*g,this._w=h*m*g-v*S*b;break;case"XZY":this._x=v*m*g-h*S*b,this._y=h*S*g-v*m*b,this._z=h*m*b+v*S*g,this._w=h*m*g+v*S*b;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],h=n[2],m=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(c-s)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+h)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(l-h)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-s)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,s=e._y,l=e._z,c=e._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=a*m+c*f+s*h-l*d,this._y=s*m+c*d+l*f-a*h,this._z=l*m+c*h+a*d-s*f,this._w=c*m-a*f-s*d-l*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,s=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,c=-c,f=-f);let d=1-n;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,n=Math.sin(n*h)/m,this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uy.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,l=e.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,s=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*s-f*a),m=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+d*h+c*g-f*m,this.y=a+d*m+f*h-l*g,this.z=s+d*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,s=e.y,l=e.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-a*d,this.z=a*f-s*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Mp.copy(this).projectOnVector(e),this.sub(Mp)}reflect(e){return this.sub(Mp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return n*n+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const s=Math.sin(n)*e;return this.x=s*Math.sin(a),this.y=Math.cos(n)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mp=new ue,uy=new Pu;class xt{constructor(e,n,a,s,l,c,f,d,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,s,l,c,f,d,h)}set(e,n,a,s,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=a,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],d=a[6],h=a[1],m=a[4],g=a[7],v=a[2],S=a[5],b=a[8],M=s[0],y=s[3],x=s[6],R=s[1],C=s[4],D=s[7],w=s[2],P=s[5],O=s[8];return l[0]=c*M+f*R+d*w,l[3]=c*y+f*C+d*P,l[6]=c*x+f*D+d*O,l[1]=h*M+m*R+g*w,l[4]=h*y+m*C+g*P,l[7]=h*x+m*D+g*O,l[2]=v*M+S*R+b*w,l[5]=v*y+S*C+b*P,l[8]=v*x+S*D+b*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return n*c*m-n*f*h-a*l*m+a*f*d+s*l*h-s*c*d}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*c-f*h,v=f*d-m*l,S=h*l-c*d,b=n*g+a*v+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=g*M,e[1]=(s*h-m*a)*M,e[2]=(f*a-s*c)*M,e[3]=v*M,e[4]=(m*n-s*d)*M,e[5]=(s*l-f*n)*M,e[6]=S*M,e[7]=(a*d-h*n)*M,e[8]=(c*n-a*l)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,s,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*c+h*f)+c+e,-s*h,s*d,-s*(-h*c+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ep.makeScale(e,n)),this}rotate(e){return this.premultiply(Ep.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ep.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ep=new xt,cy=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fy=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VR(){const r={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xr?Bf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[nl]:{primaries:e,whitePoint:a,transfer:Bf,toXYZ:cy,fromXYZ:fy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:cy,fromXYZ:fy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),r}const Lt=VR();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ro;class kR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ro===void 0&&(Ro=Gf("canvas")),Ro.width=e.width,Ro.height=e.height;const s=Ro.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Ro}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gf("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=tr(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(tr(n[a]/255)*255):n[a]=tr(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XR=0;class B_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Ou(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(bp(s[c].image)):l.push(bp(s[c]))}else l=bp(s);a.url=l}return n||(e.images[this.uuid]=a),a}}function bp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kR.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let WR=0;const Tp=new ue;class $n extends sl{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,a=Ja,s=Ja,l=jn,c=Ns,f=ra,d=Xi,h=$n.DEFAULT_ANISOTROPY,m=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WR++}),this.uuid=Ou(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tp).x}get height(){return this.source.getSize(Tp).y}get depth(){return this.source.getSize(Tp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Em:e.x=e.x-Math.floor(e.x);break;case Ja:e.x=e.x<0?0:1;break;case bm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Em:e.y=e.y-Math.floor(e.y);break;case Ja:e.y=e.y<0?0:1;break;case bm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=SM;$n.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,n=0,a=0,s=1){mn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,s){return this.x=e,this.y=n,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,s,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],b=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(b-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(b+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(h+1)/2,D=(S+1)/2,w=(x+1)/2,P=(m+v)/4,O=(g+M)/4,B=(b+y)/4;return C>D&&C>w?C<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(C),s=P/a,l=O/a):D>w?D<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(D),a=P/s,l=B/s):w<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(w),a=O/l,s=B/l),this.set(a,s,l,n),this}let R=Math.sqrt((y-b)*(y-b)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(g-M)/R,this.z=(v-m)/R,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qR extends sl{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new mn(0,0,e,n),this.scissorTest=!1,this.viewport=new mn(0,0,e,n);const s={width:e,height:n,depth:a.depth},l=new $n(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new B_(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ya extends qR{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class DM extends $n{constructor(e=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YR extends $n{constructor(e=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ea.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ea.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ea.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ea):ea.fromBufferAttribute(l,c),ea.applyMatrix4(e.matrixWorld),this.expandByPoint(ea);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),$c.copy(a.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ea),ea.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ru),ef.subVectors(this.max,ru),Co.subVectors(e.a,ru),wo.subVectors(e.b,ru),Do.subVectors(e.c,ru),zr.subVectors(wo,Co),Ir.subVectors(Do,wo),Ms.subVectors(Co,Do);let n=[0,-zr.z,zr.y,0,-Ir.z,Ir.y,0,-Ms.z,Ms.y,zr.z,0,-zr.x,Ir.z,0,-Ir.x,Ms.z,0,-Ms.x,-zr.y,zr.x,0,-Ir.y,Ir.x,0,-Ms.y,Ms.x,0];return!Ap(n,Co,wo,Do,ef)||(n=[1,0,0,0,1,0,0,0,1],!Ap(n,Co,wo,Do,ef))?!1:(tf.crossVectors(zr,Ir),n=[tf.x,tf.y,tf.z],Ap(n,Co,wo,Do,ef))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ea).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ea).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xa=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ea=new ue,$c=new Fu,Co=new ue,wo=new ue,Do=new ue,zr=new ue,Ir=new ue,Ms=new ue,ru=new ue,ef=new ue,tf=new ue,Es=new ue;function Ap(r,e,n,a,s){for(let l=0,c=r.length-3;l<=c;l+=3){Es.fromArray(r,l);const f=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),d=e.dot(Es),h=n.dot(Es),m=a.dot(Es);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const jR=new Fu,su=new ue,Rp=new ue;class H_{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):jR.setFromPoints(e).getCenter(a);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;su.subVectors(e,this.center);const n=su.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(su,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(su.copy(e.center).add(Rp)),this.expandByPoint(su.copy(e.center).sub(Rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wa=new ue,Cp=new ue,nf=new ue,Br=new ue,wp=new ue,af=new ue,Dp=new ue;class ZR{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wa.copy(this.origin).addScaledVector(this.direction,n),Wa.distanceToSquared(e))}distanceSqToSegment(e,n,a,s){Cp.copy(e).add(n).multiplyScalar(.5),nf.copy(n).sub(e).normalize(),Br.copy(this.origin).sub(Cp);const l=e.distanceTo(n)*.5,c=-this.direction.dot(nf),f=Br.dot(this.direction),d=-Br.dot(nf),h=Br.lengthSq(),m=Math.abs(1-c*c);let g,v,S,b;if(m>0)if(g=c*d-f,v=c*f-d,b=l*m,g>=0)if(v>=-b)if(v<=b){const M=1/m;g*=M,v*=M,S=g*(g+c*v+2*f)+v*(c*g+v+2*d)+h}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v<=-b?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=b?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Cp).addScaledVector(nf,v),S}intersectSphere(e,n){Wa.subVectors(e.center,this.origin);const a=Wa.dot(this.direction),s=Wa.dot(Wa)-a*a,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,s,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(e){return this.intersectBox(e,Wa)!==null}intersectTriangle(e,n,a,s,l){wp.subVectors(n,e),af.subVectors(a,e),Dp.crossVectors(wp,af);let c=this.direction.dot(Dp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Br.subVectors(this.origin,e);const d=f*this.direction.dot(af.crossVectors(Br,af));if(d<0)return null;const h=f*this.direction.dot(wp.cross(Br));if(h<0||d+h>c)return null;const m=-f*Br.dot(Dp);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,n,a,s,l,c,f,d,h,m,g,v,S,b,M,y){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,s,l,c,f,d,h,m,g,v,S,b,M,y)}set(e,n,a,s,l,c,f,d,h,m,g,v,S,b,M,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=v,x[3]=S,x[7]=b,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,s=1/Uo.setFromMatrixColumn(e,0).length(),l=1/Uo.setFromMatrixColumn(e,1).length(),c=1/Uo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,s=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,b=f*m,M=f*g;n[0]=d*m,n[4]=-d*g,n[8]=h,n[1]=S+b*h,n[5]=v-M*h,n[9]=-f*d,n[2]=M-v*h,n[6]=b+S*h,n[10]=c*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,b=h*m,M=h*g;n[0]=v+M*f,n[4]=b*f-S,n[8]=c*h,n[1]=c*g,n[5]=c*m,n[9]=-f,n[2]=S*f-b,n[6]=M+v*f,n[10]=c*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,b=h*m,M=h*g;n[0]=v-M*f,n[4]=-c*g,n[8]=b+S*f,n[1]=S+b*f,n[5]=c*m,n[9]=M-v*f,n[2]=-c*h,n[6]=f,n[10]=c*d}else if(e.order==="ZYX"){const v=c*m,S=c*g,b=f*m,M=f*g;n[0]=d*m,n[4]=b*h-S,n[8]=v*h+M,n[1]=d*g,n[5]=M*h+v,n[9]=S*h-b,n[2]=-h,n[6]=f*d,n[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*h,b=f*d,M=f*h;n[0]=d*m,n[4]=M-v*g,n[8]=b*g+S,n[1]=g,n[5]=c*m,n[9]=-f*m,n[2]=-h*m,n[6]=S*g+b,n[10]=v-M*g}else if(e.order==="XZY"){const v=c*d,S=c*h,b=f*d,M=f*h;n[0]=d*m,n[4]=-g,n[8]=h*m,n[1]=v*g+M,n[5]=c*m,n[9]=S*g-b,n[2]=b*g-S,n[6]=f*m,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KR,e,QR)}lookAt(e,n,a){const s=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Hr.crossVectors(a,yi),Hr.lengthSq()===0&&(Math.abs(a.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Hr.crossVectors(a,yi)),Hr.normalize(),rf.crossVectors(yi,Hr),s[0]=Hr.x,s[4]=rf.x,s[8]=yi.x,s[1]=Hr.y,s[5]=rf.y,s[9]=yi.y,s[2]=Hr.z,s[6]=rf.z,s[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],d=a[8],h=a[12],m=a[1],g=a[5],v=a[9],S=a[13],b=a[2],M=a[6],y=a[10],x=a[14],R=a[3],C=a[7],D=a[11],w=a[15],P=s[0],O=s[4],B=s[8],T=s[12],L=s[1],G=s[5],Z=s[9],Y=s[13],se=s[2],ne=s[6],F=s[10],H=s[14],J=s[3],ye=s[7],xe=s[11],z=s[15];return l[0]=c*P+f*L+d*se+h*J,l[4]=c*O+f*G+d*ne+h*ye,l[8]=c*B+f*Z+d*F+h*xe,l[12]=c*T+f*Y+d*H+h*z,l[1]=m*P+g*L+v*se+S*J,l[5]=m*O+g*G+v*ne+S*ye,l[9]=m*B+g*Z+v*F+S*xe,l[13]=m*T+g*Y+v*H+S*z,l[2]=b*P+M*L+y*se+x*J,l[6]=b*O+M*G+y*ne+x*ye,l[10]=b*B+M*Z+y*F+x*xe,l[14]=b*T+M*Y+y*H+x*z,l[3]=R*P+C*L+D*se+w*J,l[7]=R*O+C*G+D*ne+w*ye,l[11]=R*B+C*Z+D*F+w*xe,l[15]=R*T+C*Y+D*H+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],s=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],b=e[3],M=e[7],y=e[11],x=e[15],R=d*S-h*v,C=f*S-h*g,D=f*v-d*g,w=c*S-h*m,P=c*v-d*m,O=c*g-f*m;return n*(M*R-y*C+x*D)-a*(b*R-y*w+x*P)+s*(b*C-M*w+x*O)-l*(b*D-M*P+y*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],b=e[12],M=e[13],y=e[14],x=e[15],R=g*y*h-M*v*h+M*d*S-f*y*S-g*d*x+f*v*x,C=b*v*h-m*y*h-b*d*S+c*y*S+m*d*x-c*v*x,D=m*M*h-b*g*h+b*f*S-c*M*S-m*f*x+c*g*x,w=b*g*d-m*M*d-b*f*v+c*M*v+m*f*y-c*g*y,P=n*R+a*C+s*D+l*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=R*O,e[1]=(M*v*l-g*y*l-M*s*S+a*y*S+g*s*x-a*v*x)*O,e[2]=(f*y*l-M*d*l+M*s*h-a*y*h-f*s*x+a*d*x)*O,e[3]=(g*d*l-f*v*l-g*s*h+a*v*h+f*s*S-a*d*S)*O,e[4]=C*O,e[5]=(m*y*l-b*v*l+b*s*S-n*y*S-m*s*x+n*v*x)*O,e[6]=(b*d*l-c*y*l-b*s*h+n*y*h+c*s*x-n*d*x)*O,e[7]=(c*v*l-m*d*l+m*s*h-n*v*h-c*s*S+n*d*S)*O,e[8]=D*O,e[9]=(b*g*l-m*M*l-b*a*S+n*M*S+m*a*x-n*g*x)*O,e[10]=(c*M*l-b*f*l+b*a*h-n*M*h-c*a*x+n*f*x)*O,e[11]=(m*f*l-c*g*l-m*a*h+n*g*h+c*a*S-n*f*S)*O,e[12]=w*O,e[13]=(m*M*s-b*g*s+b*a*v-n*M*v-m*a*y+n*g*y)*O,e[14]=(b*f*s-c*M*s-b*a*d+n*M*d+c*a*y-n*f*y)*O,e[15]=(c*g*s-m*f*s+m*a*d-n*g*d-c*a*v+n*f*v)*O,this}scale(e){const n=this.elements,a=e.x,s=e.y,l=e.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+a,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+a,m*d-s*c,0,h*d-s*f,m*d+s*c,l*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,s,l,c){return this.set(1,a,l,0,e,1,c,0,n,s,1,0,0,0,0,1),this}compose(e,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,h=l+l,m=c+c,g=f+f,v=l*h,S=l*m,b=l*g,M=c*m,y=c*g,x=f*g,R=d*h,C=d*m,D=d*g,w=a.x,P=a.y,O=a.z;return s[0]=(1-(M+x))*w,s[1]=(S+D)*w,s[2]=(b-C)*w,s[3]=0,s[4]=(S-D)*P,s[5]=(1-(v+x))*P,s[6]=(y+R)*P,s[7]=0,s[8]=(b+C)*O,s[9]=(y-R)*O,s[10]=(1-(v+M))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,a){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let l=Uo.set(s[0],s[1],s[2]).length();const c=Uo.set(s[4],s[5],s[6]).length(),f=Uo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),ta.copy(this);const h=1/l,m=1/c,g=1/f;return ta.elements[0]*=h,ta.elements[1]*=h,ta.elements[2]*=h,ta.elements[4]*=m,ta.elements[5]*=m,ta.elements[6]*=m,ta.elements[8]*=g,ta.elements[9]*=g,ta.elements[10]*=g,n.setFromRotationMatrix(ta),a.x=l,a.y=c,a.z=f,this}makePerspective(e,n,a,s,l,c,f=va,d=!1){const h=this.elements,m=2*l/(n-e),g=2*l/(a-s),v=(n+e)/(n-e),S=(a+s)/(a-s);let b,M;if(d)b=l/(c-l),M=c*l/(c-l);else if(f===va)b=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Hf)b=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,s,l,c,f=va,d=!1){const h=this.elements,m=2/(n-e),g=2/(a-s),v=-(n+e)/(n-e),S=-(a+s)/(a-s);let b,M;if(d)b=1/(c-l),M=c/(c-l);else if(f===va)b=-2/(c-l),M=-(c+l)/(c-l);else if(f===Hf)b=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Uo=new ue,ta=new En,KR=new ue(0,0,0),QR=new ue(1,1,1),Hr=new ue,rf=new ue,yi=new ue,hy=new En,dy=new Pu;class lr{constructor(e=0,n=0,a=0,s=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,s=this._order){return this._x=e,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],d=s[1],h=s[5],m=s[9],g=s[2],v=s[6],S=s[10];switch(n){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return hy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hy,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dy.setFromEuler(this),this.setFromQuaternion(dy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class UM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JR=0;const py=new ue,Lo=new Pu,qa=new En,sf=new ue,ou=new ue,$R=new ue,eC=new Pu,my=new ue(1,0,0),_y=new ue(0,1,0),gy=new ue(0,0,1),vy={type:"added"},tC={type:"removed"},No={type:"childadded",child:null},Up={type:"childremoved",child:null};class Ri extends sl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=Ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new ue,n=new lr,a=new Pu,s=new ue(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new xt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new UM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(my,e)}rotateY(e){return this.rotateOnAxis(_y,e)}rotateZ(e){return this.rotateOnAxis(gy,e)}translateOnAxis(e,n){return py.copy(e).applyQuaternion(this.quaternion),this.position.add(py.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(my,e)}translateY(e){return this.translateOnAxis(_y,e)}translateZ(e){return this.translateOnAxis(gy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?sf.copy(e):sf.set(e,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),ou.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(ou,sf,this.up):qa.lookAt(sf,ou,this.up),this.quaternion.setFromRotationMatrix(qa),s&&(qa.extractRotation(s.matrixWorld),Lo.setFromRotationMatrix(qa),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vy),No.child=e,this.dispatchEvent(No),No.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tC),Up.child=e,this.dispatchEvent(Up),Up.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vy),No.child=e,this.dispatchEvent(No),No.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,e,$R),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,eC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(n){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),b=c(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=s,a;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}Ri.DEFAULT_UP=new ue(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const na=new ue,Ya=new ue,Lp=new ue,ja=new ue,Oo=new ue,Po=new ue,xy=new ue,Np=new ue,Op=new ue,Pp=new ue,Fp=new mn,zp=new mn,Ip=new mn;class aa{constructor(e=new ue,n=new ue,a=new ue){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,s){s.subVectors(a,n),na.subVectors(e,n),s.cross(na);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,n,a,s,l){na.subVectors(s,n),Ya.subVectors(a,n),Lp.subVectors(e,n);const c=na.dot(na),f=na.dot(Ya),d=na.dot(Lp),h=Ya.dot(Ya),m=Ya.dot(Lp),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-f*m)*v,b=(c*m-f*d)*v;return l.set(1-S-b,b,S)}static containsPoint(e,n,a,s){return this.getBarycoord(e,n,a,s,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(e,n,a,s,l,c,f,d){return this.getBarycoord(e,n,a,s,ja)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ja.x),d.addScaledVector(c,ja.y),d.addScaledVector(f,ja.z),d)}static getInterpolatedAttribute(e,n,a,s,l,c){return Fp.setScalar(0),zp.setScalar(0),Ip.setScalar(0),Fp.fromBufferAttribute(e,n),zp.fromBufferAttribute(e,a),Ip.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Fp,l.x),c.addScaledVector(zp,l.y),c.addScaledVector(Ip,l.z),c}static isFrontFacing(e,n,a,s){return na.subVectors(a,n),Ya.subVectors(e,n),na.cross(Ya).dot(s)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,s){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,a,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),na.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return aa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,s,l){return aa.getInterpolation(e,this.a,this.b,this.c,n,a,s,l)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,s=this.b,l=this.c;let c,f;Oo.subVectors(s,a),Po.subVectors(l,a),Np.subVectors(e,a);const d=Oo.dot(Np),h=Po.dot(Np);if(d<=0&&h<=0)return n.copy(a);Op.subVectors(e,s);const m=Oo.dot(Op),g=Po.dot(Op);if(m>=0&&g<=m)return n.copy(s);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(a).addScaledVector(Oo,c);Pp.subVectors(e,l);const S=Oo.dot(Pp),b=Po.dot(Pp);if(b>=0&&S<=b)return n.copy(l);const M=S*h-d*b;if(M<=0&&h>=0&&b<=0)return f=h/(h-b),n.copy(a).addScaledVector(Po,f);const y=m*b-S*g;if(y<=0&&g-m>=0&&S-b>=0)return xy.subVectors(l,s),f=(g-m)/(g-m+(S-b)),n.copy(s).addScaledVector(xy,f);const x=1/(y+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(Oo,c).addScaledVector(Po,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const LM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},of={h:0,s:0,l:0};function Bp(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class jt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,s=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Lt.colorSpaceToWorking(this,s),this}setHSL(e,n,a,s=Lt.workingColorSpace){if(e=GR(e,1),n=Rt(n,0,1),a=Rt(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Bp(c,l,e+1/3),this.g=Bp(c,l,e),this.b=Bp(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,n=Vi){function a(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vi){const a=LM[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return Lt.workingToColorSpace(qn.copy(this),e),Math.round(Rt(qn.r*255,0,255))*65536+Math.round(Rt(qn.g*255,0,255))*256+Math.round(Rt(qn.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(qn.copy(this),n);const a=qn.r,s=qn.g,l=qn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case a:d=(s-l)/g+(s<l?6:0);break;case s:d=(l-a)/g+2;break;case l:d=(a-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Vi){Lt.workingToColorSpace(qn.copy(this),e);const n=qn.r,a=qn.g,s=qn.b;return e!==Vi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,n,a){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+n,Gr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Gr),e.getHSL(of);const a=Sp(Gr.h,of.h,n),s=Sp(Gr.s,of.s,n),l=Sp(Gr.l,of.l,n);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new jt;jt.NAMES=LM;let nC=0;class Zf extends sl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Ou(),this.name="",this.type="Material",this.blending=Wo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=dm,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ay,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(a.blending=this.blending),this.side!==es&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hm&&(a.blendSrc=this.blendSrc),this.blendDst!==dm&&(a.blendDst=this.blendDst),this.blendEquation!==Ds&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ay&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(e.textures),c=s(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class NM extends Zf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=dM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new ue,lf=new Dt;let iC=0;class Sa{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=ry,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=n.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)lf.fromBufferAttribute(this,n),lf.applyMatrix3(e),this.setXY(n,lf.x,lf.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=au(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=si(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=au(n,this.array)),n}setX(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=au(n,this.array)),n}setY(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=au(n,this.array)),n}setZ(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=au(n,this.array)),n}setW(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,s){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array),s=si(s,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,n,a,s,l){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array),s=si(s,this.array),l=si(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ry&&(e.usage=this.usage),e}}class OM extends Sa{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class PM extends Sa{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class nr extends Sa{constructor(e,n,a){super(new Float32Array(e),n,a)}}let aC=0;const Hi=new En,Hp=new Ri,Fo=new ue,Si=new Fu,lu=new Fu,wn=new ue;class cr extends sl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Ou(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wM(e)?PM:OM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new xt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,a){return Hi.makeTranslation(e,n,a),this.applyMatrix4(Hi),this}scale(e,n,a){return Hi.makeScale(e,n,a),this.applyMatrix4(Hi),this}lookAt(e){return Hp.lookAt(e),Hp.updateMatrix(),this.applyMatrix4(Hp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new nr(a,3))}else{const a=Math.min(e.length,n.count);for(let s=0;s<a;s++){const l=e[s];n.setXYZ(s,l.x,l.y,l.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new H_);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];lu.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(Si.min,lu.min),Si.expandByPoint(wn),wn.addVectors(Si.max,lu.max),Si.expandByPoint(wn)):(Si.expandByPoint(lu.min),Si.expandByPoint(lu.max))}Si.getCenter(a);let s=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(wn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)wn.fromBufferAttribute(f,h),d&&(Fo.fromBufferAttribute(e,h),wn.add(Fo)),s=Math.max(s,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sa(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<a.count;B++)f[B]=new ue,d[B]=new ue;const h=new ue,m=new ue,g=new ue,v=new Dt,S=new Dt,b=new Dt,M=new ue,y=new ue;function x(B,T,L){h.fromBufferAttribute(a,B),m.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),v.fromBufferAttribute(l,B),S.fromBufferAttribute(l,T),b.fromBufferAttribute(l,L),m.sub(h),g.sub(h),S.sub(v),b.sub(v);const G=1/(S.x*b.y-b.x*S.y);isFinite(G)&&(M.copy(m).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(G),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-b.x).multiplyScalar(G),f[B].add(M),f[T].add(M),f[L].add(M),d[B].add(y),d[T].add(y),d[L].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,T=R.length;B<T;++B){const L=R[B],G=L.start,Z=L.count;for(let Y=G,se=G+Z;Y<se;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new ue,D=new ue,w=new ue,P=new ue;function O(B){w.fromBufferAttribute(s,B),P.copy(w);const T=f[B];C.copy(T),C.sub(w.multiplyScalar(w.dot(T))).normalize(),D.crossVectors(P,T);const G=D.dot(d[B])<0?-1:1;c.setXYZW(B,C.x,C.y,C.z,G)}for(let B=0,T=R.length;B<T;++B){const L=R[B],G=L.start,Z=L.count;for(let Y=G,se=G+Z;Y<se;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Sa(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const s=new ue,l=new ue,c=new ue,f=new ue,d=new ue,h=new ue,m=new ue,g=new ue;if(e)for(let v=0,S=e.count;v<S;v+=3){const b=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(n,b),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),f.fromBufferAttribute(a,b),d.fromBufferAttribute(a,M),h.fromBufferAttribute(a,y),f.add(m),d.add(m),h.add(m),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=n.count;v<S;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let S=0,b=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let x=0;x<m;x++)v[b++]=h[S++]}return new Sa(v,m,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cr,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,a);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(n))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yy=new En,bs=new ZR,uf=new H_,Sy=new ue,cf=new ue,ff=new ue,hf=new ue,Gp=new ue,df=new ue,My=new ue,pf=new ue;class Ta extends Ri{constructor(e=new cr,n=new NM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){df.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Gp.fromBufferAttribute(g,e),c?df.addScaledVector(Gp,m):df.addScaledVector(Gp.sub(n),m))}n.add(df)}return n}raycast(e,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),uf.copy(a.boundingSphere),uf.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(uf.containsPoint(bs.origin)===!1&&(bs.intersectSphere(uf,Sy)===null||bs.origin.distanceToSquared(Sy)>(e.far-e.near)**2))&&(yy.copy(l).invert(),bs.copy(e.ray).applyMatrix4(yy),!(a.boundingBox!==null&&bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,bs)))}_computeIntersections(e,n,a){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,M=v.length;b<M;b++){const y=v[b],x=c[y.materialIndex],R=Math.max(y.start,S.start),C=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let D=R,w=C;D<w;D+=3){const P=f.getX(D),O=f.getX(D+1),B=f.getX(D+2);s=mf(this,x,e,a,h,m,g,P,O,B),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=b,x=M;y<x;y+=3){const R=f.getX(y),C=f.getX(y+1),D=f.getX(y+2);s=mf(this,c,e,a,h,m,g,R,C,D),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,M=v.length;b<M;b++){const y=v[b],x=c[y.materialIndex],R=Math.max(y.start,S.start),C=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=R,w=C;D<w;D+=3){const P=D,O=D+1,B=D+2;s=mf(this,x,e,a,h,m,g,P,O,B),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=b,x=M;y<x;y+=3){const R=y,C=y+1,D=y+2;s=mf(this,c,e,a,h,m,g,R,C,D),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function rC(r,e,n,a,s,l,c,f){let d;if(e.side===fi?d=a.intersectTriangle(c,l,s,!0,f):d=a.intersectTriangle(s,l,c,e.side===es,f),d===null)return null;pf.copy(f),pf.applyMatrix4(r.matrixWorld);const h=n.ray.origin.distanceTo(pf);return h<n.near||h>n.far?null:{distance:h,point:pf.clone(),object:r}}function mf(r,e,n,a,s,l,c,f,d,h){r.getVertexPosition(f,cf),r.getVertexPosition(d,ff),r.getVertexPosition(h,hf);const m=rC(r,e,n,a,cf,ff,hf,My);if(m){const g=new ue;aa.getBarycoord(My,cf,ff,hf,g),s&&(m.uv=aa.getInterpolatedAttribute(s,f,d,h,g,new Dt)),l&&(m.uv1=aa.getInterpolatedAttribute(l,f,d,h,g,new Dt)),c&&(m.normal=aa.getInterpolatedAttribute(c,f,d,h,g,new ue),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new ue,materialIndex:0};aa.getNormal(cf,ff,hf,v.normal),m.face=v,m.barycoord=g}return m}class zu extends cr{constructor(e=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],g=[];let v=0,S=0;b("z","y","x",-1,-1,a,n,e,c,l,0),b("z","y","x",1,-1,a,n,-e,c,l,1),b("x","z","y",1,1,e,a,n,s,c,2),b("x","z","y",1,-1,e,a,-n,s,c,3),b("x","y","z",1,-1,e,n,a,s,l,4),b("x","y","z",-1,-1,e,n,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new nr(h,3)),this.setAttribute("normal",new nr(m,3)),this.setAttribute("uv",new nr(g,2));function b(M,y,x,R,C,D,w,P,O,B,T){const L=D/O,G=w/B,Z=D/2,Y=w/2,se=P/2,ne=O+1,F=B+1;let H=0,J=0;const ye=new ue;for(let xe=0;xe<F;xe++){const z=xe*G-Y;for(let te=0;te<ne;te++){const me=te*L-Z;ye[M]=me*R,ye[y]=z*C,ye[x]=se,h.push(ye.x,ye.y,ye.z),ye[M]=0,ye[y]=0,ye[x]=P>0?1:-1,m.push(ye.x,ye.y,ye.z),g.push(te/O),g.push(1-xe/B),H+=1}}for(let xe=0;xe<B;xe++)for(let z=0;z<O;z++){const te=v+z+ne*xe,me=v+z+ne*(xe+1),Ee=v+(z+1)+ne*(xe+1),Ue=v+(z+1)+ne*xe;d.push(te,me,Ue),d.push(me,Ee,Ue),J+=6}f.addGroup(S,J,T),S+=J,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function il(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const s=r[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=s.clone():Array.isArray(s)?e[n][a]=s.slice():e[n][a]=s}}return e}function Qn(r){const e={};for(let n=0;n<r.length;n++){const a=il(r[n]);for(const s in a)e[s]=a[s]}return e}function sC(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function FM(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const oC={clone:il,merge:Qn};var lC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Zf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lC,this.fragmentShader=uC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=il(e.uniforms),this.uniformsGroups=sC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class zM extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=va,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new ue,Ey=new Dt,by=new Dt;class ia extends zM{constructor(e=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=i_*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return i_*2*Math.atan(Math.tan(yp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,n){return this.getViewBounds(e,Ey,by),n.subVectors(by,Ey)}setViewOffset(e,n,a,s,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yp*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*a/h,s*=c.width/d,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zo=-90,Io=1;class cC extends Ri{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ia(zo,Io,e,n);s.layers=this.layers,this.add(s);const l=new ia(zo,Io,e,n);l.layers=this.layers,this.add(l);const c=new ia(zo,Io,e,n);c.layers=this.layers,this.add(c);const f=new ia(zo,Io,e,n);f.layers=this.layers,this.add(f);const d=new ia(zo,Io,e,n);d.layers=this.layers,this.add(d);const h=new ia(zo,Io,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,d]=n;for(const h of n)this.remove(h);if(e===va)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Hf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(n,l),e.setRenderTarget(a,1,s),e.render(n,c),e.setRenderTarget(a,2,s),e.render(n,f),e.setRenderTarget(a,3,s),e.render(n,d),e.setRenderTarget(a,4,s),e.render(n,h),a.texture.generateMipmaps=M,e.setRenderTarget(a,5,s),e.render(n,m),e.setRenderTarget(g,v,S),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class IM extends $n{constructor(e=[],n=Bs,a,s,l,c,f,d,h,m){super(e,n,a,s,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BM extends ya{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new IM(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zu(5,5,5),l=new sa({name:"CubemapFromEquirect",uniforms:il(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:fi,blending:er});l.uniforms.tEquirect.value=n;const c=new Ta(s,l),f=n.minFilter;return n.minFilter===Ns&&(n.minFilter=jn),new cC(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,s);e.setRenderTarget(l)}}class _f extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fC={type:"move"};class Vp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _f,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _f,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _f,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const y=n.getJointPose(M,a),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,b=.005;h.inputState.pinching&&v>S+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(fC)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new _f;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class hC extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dC extends $n{constructor(e=null,n=1,a=1,s,l,c,f,d,h=Gn,m=Gn,g,v){super(null,c,f,d,h,m,s,l,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kp=new ue,pC=new ue,mC=new xt;class ws{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,s){return this.normal.set(e,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const s=kp.subVectors(a,n).cross(pC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(kp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||mC.getNormalMatrix(e),s=this.coplanarPoint(kp).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new H_,_C=new Dt(.5,.5),gf=new ue;class HM{constructor(e=new ws,n=new ws,a=new ws,s=new ws,l=new ws,c=new ws){this.planes=[e,n,a,s,l,c]}set(e,n,a,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=va,a=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],S=l[7],b=l[8],M=l[9],y=l[10],x=l[11],R=l[12],C=l[13],D=l[14],w=l[15];if(s[0].setComponents(h-c,S-m,x-b,w-R).normalize(),s[1].setComponents(h+c,S+m,x+b,w+R).normalize(),s[2].setComponents(h+f,S+g,x+M,w+C).normalize(),s[3].setComponents(h-f,S-g,x-M,w-C).normalize(),a)s[4].setComponents(d,v,y,D).normalize(),s[5].setComponents(h-d,S-v,x-y,w-D).normalize();else if(s[4].setComponents(h-d,S-v,x-y,w-D).normalize(),n===va)s[5].setComponents(h+d,S+v,x+y,w+D).normalize();else if(n===Hf)s[5].setComponents(d,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const n=_C.distanceTo(e.center);return Ts.radius=.7071067811865476+n,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const n=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(gf.x=s.normal.x>0?e.max.x:e.min.x,gf.y=s.normal.y>0?e.max.y:e.min.y,gf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wu extends $n{constructor(e,n,a=ba,s,l,c,f=Gn,d=Gn,h,m=or,g=1){if(m!==or&&m!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,s,l,c,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new B_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gC extends wu{constructor(e,n=ba,a=Bs,s,l,c=Gn,f=Gn,d,h=or){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,n,a,s,l,c,f,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class GM extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Iu extends cr{constructor(e=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:s};const l=e/2,c=n/2,f=Math.floor(a),d=Math.floor(s),h=f+1,m=d+1,g=e/f,v=n/d,S=[],b=[],M=[],y=[];for(let x=0;x<m;x++){const R=x*v-c;for(let C=0;C<h;C++){const D=C*g-l;b.push(D,-R,0),M.push(0,0,1),y.push(C/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<f;R++){const C=R+h*x,D=R+h*(x+1),w=R+1+h*(x+1),P=R+1+h*x;S.push(C,D,P),S.push(D,w,P)}this.setIndex(S),this.setAttribute("position",new nr(b,3)),this.setAttribute("normal",new nr(M,3)),this.setAttribute("uv",new nr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class vC extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xC extends Zf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yC extends Zf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G_ extends zM{constructor(e=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class SC extends ia{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class MC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ty(r,e,n,a){const s=EC(a);switch(n){case AM:return r*e;case CM:return r*e/s.components*s.byteLength;case O_:return r*e/s.components*s.byteLength;case tl:return r*e*2/s.components*s.byteLength;case P_:return r*e*2/s.components*s.byteLength;case RM:return r*e*3/s.components*s.byteLength;case ra:return r*e*4/s.components*s.byteLength;case F_:return r*e*4/s.components*s.byteLength;case Af:case Rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cf:case wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Am:case Cm:return Math.max(r,16)*Math.max(e,8)/4;case Tm:case Rm:return Math.max(r,8)*Math.max(e,8)/2;case wm:case Dm:case Lm:case Nm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Um:case Om:case Pm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zm:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Im:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hm:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gm:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case km:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xm:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ym:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jm:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Km:case Qm:case Jm:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $m:case e_:return Math.ceil(r/4)*Math.ceil(e/4)*8;case t_:case n_:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EC(r){switch(r){case Xi:case MM:return{byteLength:1,components:1};case Au:case EM:case sr:return{byteLength:2,components:1};case L_:case N_:return{byteLength:2,components:4};case ba:case U_:case ga:return{byteLength:4,components:1};case bM:case TM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:D_}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=D_);function VM(){let r=null,e=!1,n=null,a=null;function s(l,c){n(l,c),a=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function bC(r){const e=new WeakMap;function n(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,h){const m=d.array,g=d.updateRanges;if(r.bindBuffer(h,f),g.length===0)r.bufferSubData(h,0,m);else{g.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<g.length;S++){const b=g[v],M=g[S];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,b=g.length;S<b;S++){const M=g[S];r.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:c}}var TC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AC=`#ifdef USE_ALPHAHASH
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
#endif`,RC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UC=`#ifdef USE_AOMAP
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
#endif`,LC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NC=`#ifdef USE_BATCHING
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
#endif`,OC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IC=`#ifdef USE_IRIDESCENCE
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
#endif`,BC=`#ifdef USE_BUMPMAP
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
#endif`,HC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jC=`#define PI 3.141592653589793
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
} // validated`,ZC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KC=`vec3 transformedNormal = objectNormal;
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
#endif`,QC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t3="gl_FragColor = linearToOutputTexel( gl_FragColor );",n3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i3=`#ifdef USE_ENVMAP
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
#endif`,a3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r3=`#ifdef USE_ENVMAP
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
#endif`,s3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
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
#endif`,l3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h3=`#ifdef USE_GRADIENTMAP
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
}`,d3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_3=`uniform bool receiveShadow;
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
#endif`,g3=`#ifdef USE_ENVMAP
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
#endif`,v3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M3=`PhysicalMaterial material;
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
#endif`,E3=`uniform sampler2D dfgLUT;
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
}`,b3=`
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
#endif`,T3=`#if defined( RE_IndirectDiffuse )
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
#endif`,A3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O3=`#if defined( USE_POINTS_UV )
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
#endif`,P3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H3=`#ifdef USE_MORPHTARGETS
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
#endif`,G3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y3=`#ifdef USE_NORMALMAP
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
#endif`,j3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u2=`float getShadowMask() {
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
}`,c2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f2=`#ifdef USE_SKINNING
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
#endif`,h2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d2=`#ifdef USE_SKINNING
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
#endif`,p2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v2=`#ifdef USE_TRANSMISSION
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
#endif`,x2=`#ifdef USE_TRANSMISSION
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
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T2=`uniform sampler2D t2D;
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
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`#include <common>
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
}`,U2=`#if DEPTH_PACKING == 3200
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
}`,L2=`#define DISTANCE
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
}`,N2=`#define DISTANCE
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`uniform float scale;
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
}`,z2=`uniform vec3 diffuse;
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
}`,I2=`#include <common>
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
}`,B2=`uniform vec3 diffuse;
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
}`,H2=`#define LAMBERT
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
}`,G2=`#define LAMBERT
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
}`,V2=`#define MATCAP
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
}`,k2=`#define MATCAP
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
}`,X2=`#define NORMAL
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
}`,W2=`#define NORMAL
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
}`,q2=`#define PHONG
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
}`,Y2=`#define PHONG
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
}`,j2=`#define STANDARD
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
}`,Z2=`#define STANDARD
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
}`,K2=`#define TOON
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
}`,Q2=`#define TOON
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
}`,J2=`uniform float size;
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
}`,$2=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 color;
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
}`,nw=`uniform float rotation;
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
}`,iw=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:TC,alphahash_pars_fragment:AC,alphamap_fragment:RC,alphamap_pars_fragment:CC,alphatest_fragment:wC,alphatest_pars_fragment:DC,aomap_fragment:UC,aomap_pars_fragment:LC,batching_pars_vertex:NC,batching_vertex:OC,begin_vertex:PC,beginnormal_vertex:FC,bsdfs:zC,iridescence_fragment:IC,bumpmap_pars_fragment:BC,clipping_planes_fragment:HC,clipping_planes_pars_fragment:GC,clipping_planes_pars_vertex:VC,clipping_planes_vertex:kC,color_fragment:XC,color_pars_fragment:WC,color_pars_vertex:qC,color_vertex:YC,common:jC,cube_uv_reflection_fragment:ZC,defaultnormal_vertex:KC,displacementmap_pars_vertex:QC,displacementmap_vertex:JC,emissivemap_fragment:$C,emissivemap_pars_fragment:e3,colorspace_fragment:t3,colorspace_pars_fragment:n3,envmap_fragment:i3,envmap_common_pars_fragment:a3,envmap_pars_fragment:r3,envmap_pars_vertex:s3,envmap_physical_pars_fragment:g3,envmap_vertex:o3,fog_vertex:l3,fog_pars_vertex:u3,fog_fragment:c3,fog_pars_fragment:f3,gradientmap_pars_fragment:h3,lightmap_pars_fragment:d3,lights_lambert_fragment:p3,lights_lambert_pars_fragment:m3,lights_pars_begin:_3,lights_toon_fragment:v3,lights_toon_pars_fragment:x3,lights_phong_fragment:y3,lights_phong_pars_fragment:S3,lights_physical_fragment:M3,lights_physical_pars_fragment:E3,lights_fragment_begin:b3,lights_fragment_maps:T3,lights_fragment_end:A3,logdepthbuf_fragment:R3,logdepthbuf_pars_fragment:C3,logdepthbuf_pars_vertex:w3,logdepthbuf_vertex:D3,map_fragment:U3,map_pars_fragment:L3,map_particle_fragment:N3,map_particle_pars_fragment:O3,metalnessmap_fragment:P3,metalnessmap_pars_fragment:F3,morphinstance_vertex:z3,morphcolor_vertex:I3,morphnormal_vertex:B3,morphtarget_pars_vertex:H3,morphtarget_vertex:G3,normal_fragment_begin:V3,normal_fragment_maps:k3,normal_pars_fragment:X3,normal_pars_vertex:W3,normal_vertex:q3,normalmap_pars_fragment:Y3,clearcoat_normal_fragment_begin:j3,clearcoat_normal_fragment_maps:Z3,clearcoat_pars_fragment:K3,iridescence_pars_fragment:Q3,opaque_fragment:J3,packing:$3,premultiplied_alpha_fragment:e2,project_vertex:t2,dithering_fragment:n2,dithering_pars_fragment:i2,roughnessmap_fragment:a2,roughnessmap_pars_fragment:r2,shadowmap_pars_fragment:s2,shadowmap_pars_vertex:o2,shadowmap_vertex:l2,shadowmask_pars_fragment:u2,skinbase_vertex:c2,skinning_pars_vertex:f2,skinning_vertex:h2,skinnormal_vertex:d2,specularmap_fragment:p2,specularmap_pars_fragment:m2,tonemapping_fragment:_2,tonemapping_pars_fragment:g2,transmission_fragment:v2,transmission_pars_fragment:x2,uv_pars_fragment:y2,uv_pars_vertex:S2,uv_vertex:M2,worldpos_vertex:E2,background_vert:b2,background_frag:T2,backgroundCube_vert:A2,backgroundCube_frag:R2,cube_vert:C2,cube_frag:w2,depth_vert:D2,depth_frag:U2,distance_vert:L2,distance_frag:N2,equirect_vert:O2,equirect_frag:P2,linedashed_vert:F2,linedashed_frag:z2,meshbasic_vert:I2,meshbasic_frag:B2,meshlambert_vert:H2,meshlambert_frag:G2,meshmatcap_vert:V2,meshmatcap_frag:k2,meshnormal_vert:X2,meshnormal_frag:W2,meshphong_vert:q2,meshphong_frag:Y2,meshphysical_vert:j2,meshphysical_frag:Z2,meshtoon_vert:K2,meshtoon_frag:Q2,points_vert:J2,points_frag:$2,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},He={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},pa={basic:{uniforms:Qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new jt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Qn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Qn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Qn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new jt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Qn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Qn([He.points,He.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Qn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Qn([He.common,He.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Qn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Qn([He.sprite,He.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Qn([He.common,He.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Qn([He.lights,He.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};pa.physical={uniforms:Qn([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const vf={r:0,b:0,g:0},As=new lr,aw=new En;function rw(r,e,n,a,s,l,c){const f=new jt(0);let d=l===!0?0:1,h,m,g=null,v=0,S=null;function b(C){let D=C.isScene===!0?C.background:null;return D&&D.isTexture&&(D=(C.backgroundBlurriness>0?n:e).get(D)),D}function M(C){let D=!1;const w=b(C);w===null?x(f,d):w&&w.isColor&&(x(w,1),D=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(C,D){const w=b(D);w&&(w.isCubeTexture||w.mapping===jf)?(m===void 0&&(m=new Ta(new zu(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:il(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),As.copy(D.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(aw.makeRotationFromEuler(As)),m.material.toneMapped=Lt.getTransfer(w.colorSpace)!==Xt,(g!==w||v!==w.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,S=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Ta(new Iu(2,2),new sa({name:"BackgroundMaterial",uniforms:il(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(w.colorSpace)!==Xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,S=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,D){C.getRGB(vf,FM(r)),a.buffers.color.setClear(vf.r,vf.g,vf.b,D,c)}function R(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,D=1){f.set(C),d=D,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,x(f,d)},render:M,addToRenderList:y,dispose:R}}function sw(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(L,G,Z,Y,se){let ne=!1;const F=g(Y,Z,G);l!==F&&(l=F,h(l.object)),ne=S(L,Y,Z,se),ne&&b(L,Y,Z,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,D(L,G,Z,Y),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function d(){return r.createVertexArray()}function h(L){return r.bindVertexArray(L)}function m(L){return r.deleteVertexArray(L)}function g(L,G,Z){const Y=Z.wireframe===!0;let se=a[L.id];se===void 0&&(se={},a[L.id]=se);let ne=se[G.id];ne===void 0&&(ne={},se[G.id]=ne);let F=ne[Y];return F===void 0&&(F=v(d()),ne[Y]=F),F}function v(L){const G=[],Z=[],Y=[];for(let se=0;se<n;se++)G[se]=0,Z[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:Y,object:L,attributes:{},index:null}}function S(L,G,Z,Y){const se=l.attributes,ne=G.attributes;let F=0;const H=Z.getAttributes();for(const J in H)if(H[J].location>=0){const xe=se[J];let z=ne[J];if(z===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),xe===void 0||xe.attribute!==z||z&&xe.data!==z.data)return!0;F++}return l.attributesNum!==F||l.index!==Y}function b(L,G,Z,Y){const se={},ne=G.attributes;let F=0;const H=Z.getAttributes();for(const J in H)if(H[J].location>=0){let xe=ne[J];xe===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor));const z={};z.attribute=xe,xe&&xe.data&&(z.data=xe.data),se[J]=z,F++}l.attributes=se,l.attributesNum=F,l.index=Y}function M(){const L=l.newAttributes;for(let G=0,Z=L.length;G<Z;G++)L[G]=0}function y(L){x(L,0)}function x(L,G){const Z=l.newAttributes,Y=l.enabledAttributes,se=l.attributeDivisors;Z[L]=1,Y[L]===0&&(r.enableVertexAttribArray(L),Y[L]=1),se[L]!==G&&(r.vertexAttribDivisor(L,G),se[L]=G)}function R(){const L=l.newAttributes,G=l.enabledAttributes;for(let Z=0,Y=G.length;Z<Y;Z++)G[Z]!==L[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function C(L,G,Z,Y,se,ne,F){F===!0?r.vertexAttribIPointer(L,G,Z,se,ne):r.vertexAttribPointer(L,G,Z,Y,se,ne)}function D(L,G,Z,Y){M();const se=Y.attributes,ne=Z.getAttributes(),F=G.defaultAttributeValues;for(const H in ne){const J=ne[H];if(J.location>=0){let ye=se[H];if(ye===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),ye!==void 0){const xe=ye.normalized,z=ye.itemSize,te=e.get(ye);if(te===void 0)continue;const me=te.buffer,Ee=te.type,Ue=te.bytesPerElement,ie=Ee===r.INT||Ee===r.UNSIGNED_INT||ye.gpuType===U_;if(ye.isInterleavedBufferAttribute){const he=ye.data,Re=he.stride,Pe=ye.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)x(J.location+Be,he.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<J.locationSize;Be++)y(J.location+Be);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Be=0;Be<J.locationSize;Be++)C(J.location+Be,z/J.locationSize,Ee,xe,Re*Ue,(Pe+z/J.locationSize*Be)*Ue,ie)}else{if(ye.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)x(J.location+he,ye.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let he=0;he<J.locationSize;he++)y(J.location+he);r.bindBuffer(r.ARRAY_BUFFER,me);for(let he=0;he<J.locationSize;he++)C(J.location+he,z/J.locationSize,Ee,xe,z*Ue,z/J.locationSize*he*Ue,ie)}}else if(F!==void 0){const xe=F[H];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(J.location,xe);break;case 3:r.vertexAttrib3fv(J.location,xe);break;case 4:r.vertexAttrib4fv(J.location,xe);break;default:r.vertexAttrib1fv(J.location,xe)}}}}R()}function w(){B();for(const L in a){const G=a[L];for(const Z in G){const Y=G[Z];for(const se in Y)m(Y[se].object),delete Y[se];delete G[Z]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const Z in G){const Y=G[Z];for(const se in Y)m(Y[se].object),delete Y[se];delete G[Z]}delete a[L.id]}function O(L){for(const G in a){const Z=a[G];if(Z[L.id]===void 0)continue;const Y=Z[L.id];for(const se in Y)m(Y[se].object),delete Y[se];delete Z[L.id]}}function B(){T(),c=!0,l!==s&&(l=s,h(l.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:B,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function ow(r,e,n){let a;function s(h){a=h}function l(h,m){r.drawArrays(a,h,m),n.update(m,a,1)}function c(h,m,g){g!==0&&(r.drawArraysInstanced(a,h,m,g),n.update(m,a,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,g);let S=0;for(let b=0;b<g;b++)S+=m[b];n.update(S,a,1)}function d(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<h.length;b++)c(h[b],m[b],v[b]);else{S.multiDrawArraysInstancedWEBGL(a,h,0,m,0,v,0,g);let b=0;for(let M=0;M<g;M++)b+=m[M]*v[M];n.update(b,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lw(r,e,n,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==ra&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const B=O===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Xi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ga&&!B)}function d(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(pt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:D,maxSamples:w,samples:P}}function uw(r){const e=this;let n=null,a=0,s=!1,l=!1;const c=new ws,f=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||s;return s=v,a=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,S){const b=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!s||b===null||b.length===0||l&&!y)l?m(null):h();else{const R=l?0:a,C=R*4;let D=x.clippingState||null;d.value=D,D=m(b,v,C,S);for(let w=0;w!==C;++w)D[w]=n[w];x.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(g,v,S,b){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=d.value,b!==!0||y===null){const x=S+M*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,D=S;C!==M;++C,D+=4)c.copy(g[C]).applyMatrix4(R,f),c.normal.toArray(y,D),y[D+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function cw(r){let e=new WeakMap;function n(c,f){return f===Sm?c.mapping=Bs:f===Mm&&(c.mapping=el),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Sm||f===Mm)if(e.has(c)){const d=e.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new BM(d.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",s),n(h.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const jr=4,Ay=[.125,.215,.35,.446,.526,.582],Us=20,fw=256,uu=new G_,Ry=new jt;let Xp=null,Wp=0,qp=0,Yp=!1;const hw=new ue;class Cy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=hw}=l;Xp=this._renderer.getRenderTarget(),Wp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xp,Wp,qp),this._renderer.xr.enabled=Yp,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===el?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xp=this._renderer.getRenderTarget(),Wp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:sr,format:ra,colorSpace:nl,depthBuffer:!1},s=wy(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wy(e,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dw(l)),this._blurMaterial=mw(l,e,n),this._ggxMaterial=pw(l,e,n)}return s}_compileMaterial(e){const n=new Ta(new cr,e);this._renderer.compile(n,uu)}_sceneToCubeUV(e,n,a,s,l){const d=new ia(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Ry),g.toneMapping=xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ta(new zu,new NM({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let x=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,x=!0):(y.color.copy(Ry),x=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[C],l.y,l.z)):D===1?(d.up.set(0,0,h[C]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[C],l.z)):(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[C]));const w=this._cubeSize;Bo(s,D*w,C>2?w:0,w,w),g.setRenderTarget(s),x&&g.render(M,d),g.render(e,d)}g.toneMapping=S,g.autoClear=v,e.background=R}_textureToCubeUV(e,n){const a=this._renderer,s=e.mapping===Bs||e.mapping===el;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dy());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Bo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,uu)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=a}_applyGGXFilter(e,n,a){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const d=c.uniforms,h=a/(this._lodMeshes.length-1),m=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),v=0+h*1.25,S=g*v,{_lodMax:b}=this,M=this._sizeLods[a],y=3*M*(a>b-jr?a-b+jr:0),x=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=b-n,Bo(l,y,x,3*M,2*M),s.setRenderTarget(l),s.render(f,uu),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=b-a,Bo(e,y,x,3*M,2*M),s.setRenderTarget(e),s.render(f,uu)}_blur(e,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,s,"latitudinal",l),this._halfBlur(c,e,a,a,s,"longitudinal",l)}_halfBlur(e,n,a,s,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[s];g.material=h;const v=h.uniforms,S=this._sizeLods[a]-1,b=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Us-1),M=l/b,y=isFinite(l)?1+Math.floor(m*M):Us;y>Us&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let R=0;for(let O=0;O<Us;++O){const B=O/M,T=Math.exp(-B*B/2);x.push(T),O===0?R+=T:O<y&&(R+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/R;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=b,v.mipInt.value=C-a;const D=this._sizeLods[s],w=3*D*(s>C-jr?s-C+jr:0),P=4*(this._cubeSize-D);Bo(n,w,P,3*D,2*D),d.setRenderTarget(n),d.render(g,uu)}}function dw(r){const e=[],n=[],a=[];let s=r;const l=r-jr+1+Ay.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);let d=1/f;c>r-jr?d=Ay[c-r+jr-1]:c===0&&(d=0),n.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,b=6,M=3,y=2,x=1,R=new Float32Array(M*b*S),C=new Float32Array(y*b*S),D=new Float32Array(x*b*S);for(let P=0;P<S;P++){const O=P%3*2/3-1,B=P>2?0:-1,T=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];R.set(T,M*b*P),C.set(v,y*b*P);const L=[P,P,P,P,P,P];D.set(L,x*b*P)}const w=new cr;w.setAttribute("position",new Sa(R,M)),w.setAttribute("uv",new Sa(C,y)),w.setAttribute("faceIndex",new Sa(D,x)),a.push(new Ta(w,null)),s>jr&&s--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function wy(r,e,n){const a=new ya(r,e,n);return a.texture.mapping=jf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bo(r,e,n,a,s){r.viewport.set(e,n,a,s),r.scissor.set(e,n,a,s)}function pw(r,e,n){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function mw(r,e,n){const a=new Float32Array(Us),s=new ue(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Dy(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Uy(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Kf(){return`

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
	`}function _w(r){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,h=d===Sm||d===Mm,m=d===Bs||d===el;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Cy(r)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&s(S)?(n===null&&(n=new Cy(r)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function gw(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const s=r.getExtension(a);return e[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Cu("WebGLRenderer: "+a+" extension not supported."),s}}}function vw(r,e,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",c),delete s[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function h(g){const v=[],S=g.index,b=g.attributes.position;let M=0;if(S!==null){const R=S.array;M=S.version;for(let C=0,D=R.length;C<D;C+=3){const w=R[C+0],P=R[C+1],O=R[C+2];v.push(w,P,P,O,O,w)}}else if(b!==void 0){const R=b.array;M=b.version;for(let C=0,D=R.length/3-1;C<D;C+=3){const w=C+0,P=C+1,O=C+2;v.push(w,P,P,O,O,w)}}else return;const y=new(wM(v)?PM:OM)(v,1);y.version=M;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function xw(r,e,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,S){r.drawElements(a,S,l,v*c),n.update(S,a,1)}function h(v,S,b){b!==0&&(r.drawElementsInstanced(a,S,l,v*c,b),n.update(S,a,b))}function m(v,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,v,0,b);let y=0;for(let x=0;x<b;x++)y+=S[x];n.update(y,a,1)}function g(v,S,b,M){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,M,0,b);let x=0;for(let R=0;R<b;R++)x+=S[R]*M[R];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function yw(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:a}}function Sw(r,e,n){const a=new WeakMap,s=new mn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let L=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",L)};var S=L;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),y===!0&&(D=3);let w=f.attributes.position.count*D,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const O=new Float32Array(w*P*4*g),B=new DM(O,w,P,g);B.type=ga,B.needsUpdate=!0;const T=D*4;for(let G=0;G<g;G++){const Z=x[G],Y=R[G],se=C[G],ne=w*P*4*G;for(let F=0;F<Z.count;F++){const H=F*T;b===!0&&(s.fromBufferAttribute(Z,F),O[ne+H+0]=s.x,O[ne+H+1]=s.y,O[ne+H+2]=s.z,O[ne+H+3]=0),M===!0&&(s.fromBufferAttribute(Y,F),O[ne+H+4]=s.x,O[ne+H+5]=s.y,O[ne+H+6]=s.z,O[ne+H+7]=0),y===!0&&(s.fromBufferAttribute(se,F),O[ne+H+8]=s.x,O[ne+H+9]=s.y,O[ne+H+10]=s.z,O[ne+H+11]=se.itemSize===4?s.w:1)}}v={count:g,texture:B,size:new Dt(w,P)},a.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const M=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function Mw(r,e,n,a){let s=new WeakMap;function l(d){const h=a.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==h&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return g}function c(){s=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:c}}const Ew={[pM]:"LINEAR_TONE_MAPPING",[mM]:"REINHARD_TONE_MAPPING",[_M]:"CINEON_TONE_MAPPING",[gM]:"ACES_FILMIC_TONE_MAPPING",[xM]:"AGX_TONE_MAPPING",[yM]:"NEUTRAL_TONE_MAPPING",[vM]:"CUSTOM_TONE_MAPPING"};function bw(r,e,n,a,s){const l=new ya(e,n,{type:r,depthBuffer:a,stencilBuffer:s}),c=new ya(e,n,{type:sr,depthBuffer:!1,stencilBuffer:!1}),f=new cr;f.setAttribute("position",new nr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new nr([0,2,0,0,2,0],2));const d=new vC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ta(f,d),m=new G_(-1,1,1,-1,0,1);let g=null,v=null,S=!1,b,M=null,y=[],x=!1;this.setSize=function(R,C){l.setSize(R,C),c.setSize(R,C);for(let D=0;D<y.length;D++){const w=y[D];w.setSize&&w.setSize(R,C)}},this.setEffects=function(R){y=R,x=y.length>0&&y[0].isRenderPass===!0;const C=l.width,D=l.height;for(let w=0;w<y.length;w++){const P=y[w];P.setSize&&P.setSize(C,D)}},this.begin=function(R,C){if(S||R.toneMapping===xa&&y.length===0)return!1;if(M=C,C!==null){const D=C.width,w=C.height;(l.width!==D||l.height!==w)&&this.setSize(D,w)}return x===!1&&R.setRenderTarget(l),b=R.toneMapping,R.toneMapping=xa,!0},this.hasRenderPass=function(){return x},this.end=function(R,C){R.toneMapping=b,S=!0;let D=l,w=c;for(let P=0;P<y.length;P++){const O=y[P];if(O.enabled!==!1&&(O.render(R,w,D,C),O.needsSwap!==!1)){const B=D;D=w,w=B}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,d.defines={},Lt.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const P=Ew[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(M),R.render(h,m),M=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const kM=new $n,a_=new wu(1,1),XM=new DM,WM=new YR,qM=new IM,Ly=[],Ny=[],Oy=new Float32Array(16),Py=new Float32Array(9),Fy=new Float32Array(4);function ol(r,e,n){const a=r[0];if(a<=0||a>0)return r;const s=e*n;let l=Ly[s];if(l===void 0&&(l=new Float32Array(s),Ly[s]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,r[c].toArray(l,f)}return l}function An(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Rn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Qf(r,e){let n=Ny[e];n===void 0&&(n=new Int32Array(e),Ny[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function Tw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function Aw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2fv(this.addr,e),Rn(n,e)}}function Rw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;r.uniform3fv(this.addr,e),Rn(n,e)}}function Cw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4fv(this.addr,e),Rn(n,e)}}function ww(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,a))return;Fy.set(a),r.uniformMatrix2fv(this.addr,!1,Fy),Rn(n,a)}}function Dw(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,a))return;Py.set(a),r.uniformMatrix3fv(this.addr,!1,Py),Rn(n,a)}}function Uw(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(An(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rn(n,e)}else{if(An(n,a))return;Oy.set(a),r.uniformMatrix4fv(this.addr,!1,Oy),Rn(n,a)}}function Lw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function Nw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2iv(this.addr,e),Rn(n,e)}}function Ow(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3iv(this.addr,e),Rn(n,e)}}function Pw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4iv(this.addr,e),Rn(n,e)}}function Fw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function zw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2uiv(this.addr,e),Rn(n,e)}}function Iw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3uiv(this.addr,e),Rn(n,e)}}function Bw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4uiv(this.addr,e),Rn(n,e)}}function Hw(r,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(a_.compareFunction=n.isReversedDepthBuffer()?I_:z_,l=a_):l=kM,n.setTexture2D(e||l,s)}function Gw(r,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(e||WM,s)}function Vw(r,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(e||qM,s)}function kw(r,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(e||XM,s)}function Xw(r){switch(r){case 5126:return Tw;case 35664:return Aw;case 35665:return Rw;case 35666:return Cw;case 35674:return ww;case 35675:return Dw;case 35676:return Uw;case 5124:case 35670:return Lw;case 35667:case 35671:return Nw;case 35668:case 35672:return Ow;case 35669:case 35673:return Pw;case 5125:return Fw;case 36294:return zw;case 36295:return Iw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return kw}}function Ww(r,e){r.uniform1fv(this.addr,e)}function qw(r,e){const n=ol(e,this.size,2);r.uniform2fv(this.addr,n)}function Yw(r,e){const n=ol(e,this.size,3);r.uniform3fv(this.addr,n)}function jw(r,e){const n=ol(e,this.size,4);r.uniform4fv(this.addr,n)}function Zw(r,e){const n=ol(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function Kw(r,e){const n=ol(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Qw(r,e){const n=ol(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Jw(r,e){r.uniform1iv(this.addr,e)}function $w(r,e){r.uniform2iv(this.addr,e)}function eD(r,e){r.uniform3iv(this.addr,e)}function tD(r,e){r.uniform4iv(this.addr,e)}function nD(r,e){r.uniform1uiv(this.addr,e)}function iD(r,e){r.uniform2uiv(this.addr,e)}function aD(r,e){r.uniform3uiv(this.addr,e)}function rD(r,e){r.uniform4uiv(this.addr,e)}function sD(r,e,n){const a=this.cache,s=e.length,l=Qf(n,s);An(a,l)||(r.uniform1iv(this.addr,l),Rn(a,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=a_:c=kM;for(let f=0;f!==s;++f)n.setTexture2D(e[f]||c,l[f])}function oD(r,e,n){const a=this.cache,s=e.length,l=Qf(n,s);An(a,l)||(r.uniform1iv(this.addr,l),Rn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(e[c]||WM,l[c])}function lD(r,e,n){const a=this.cache,s=e.length,l=Qf(n,s);An(a,l)||(r.uniform1iv(this.addr,l),Rn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(e[c]||qM,l[c])}function uD(r,e,n){const a=this.cache,s=e.length,l=Qf(n,s);An(a,l)||(r.uniform1iv(this.addr,l),Rn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(e[c]||XM,l[c])}function cD(r){switch(r){case 5126:return Ww;case 35664:return qw;case 35665:return Yw;case 35666:return jw;case 35674:return Zw;case 35675:return Kw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return $w;case 35668:case 35672:return eD;case 35669:case 35673:return tD;case 5125:return nD;case 36294:return iD;case 36295:return aD;case 36296:return rD;case 35678:case 36198:case 36298:case 36306:case 35682:return sD;case 35679:case 36299:case 36307:return oD;case 35680:case 36300:case 36308:case 36293:return lD;case 36289:case 36303:case 36311:case 36292:return uD}}class fD{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Xw(n.type)}}class hD{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cD(n.type)}}class dD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,n[f.id],a)}}}const jp=/(\w+)(\])?(\[|\.)?/g;function zy(r,e){r.seq.push(e),r.map[e.id]=e}function pD(r,e,n){const a=r.name,s=a.length;for(jp.lastIndex=0;;){const l=jp.exec(a),c=jp.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===s){zy(n,h===void 0?new fD(f,r,e):new hD(f,r,e));break}else{let g=n.map[f];g===void 0&&(g=new dD(f),zy(n,g)),n=g}}}class Df{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(n,c),d=e.getUniformLocation(n,f.name);pD(f,d,this)}const s=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(e,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(e,a,s)}setOptional(e,n,a){const s=n[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,n){const a=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in n&&a.push(c)}return a}}function Iy(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const mD=37297;let _D=0;function gD(r,e){const n=r.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const By=new xt;function vD(r){Lt._getMatrix(By,Lt.workingColorSpace,r);const e=`mat3( ${By.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Bf:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hy(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+gD(r.getShaderSource(e),f)}else return l}function xD(r,e){const n=vD(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const yD={[pM]:"Linear",[mM]:"Reinhard",[_M]:"Cineon",[gM]:"ACESFilmic",[xM]:"AgX",[yM]:"Neutral",[vM]:"Custom"};function SD(r,e){const n=yD[e];return n===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xf=new ue;function MD(){Lt.getLuminanceCoefficients(xf);const r=xf.x.toFixed(4),e=xf.y.toFixed(4),n=xf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ED(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pu).join(`
`)}function bD(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function TD(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=r.getActiveAttrib(e,s),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return n}function pu(r){return r!==""}function Gy(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AD=/^[ \t]*#include +<([\w\d./]+)>/gm;function r_(r){return r.replace(AD,CD)}const RD=new Map;function CD(r,e){let n=yt[e];if(n===void 0){const a=RD.get(e);if(a!==void 0)n=yt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return r_(n)}const wD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ky(r){return r.replace(wD,DD)}function DD(r,e,n,a){let s="";for(let l=parseInt(e);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Xy(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UD={[Tf]:"SHADOWMAP_TYPE_PCF",[du]:"SHADOWMAP_TYPE_VSM"};function LD(r){return UD[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ND={[Bs]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE",[jf]:"ENVMAP_TYPE_CUBE_UV"};function OD(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ND[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PD={[el]:"ENVMAP_MODE_REFRACTION"};function FD(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PD[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zD={[dM]:"ENVMAP_BLENDING_MULTIPLY",[RR]:"ENVMAP_BLENDING_MIX",[CR]:"ENVMAP_BLENDING_ADD"};function ID(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zD[r.combine]||"ENVMAP_BLENDING_NONE"}function BD(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function HD(r,e,n,a){const s=r.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=LD(n),h=OD(n),m=FD(n),g=ID(n),v=BD(n),S=ED(n),b=bD(l),M=s.createProgram();let y,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(pu).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(pu).join(`
`),x.length>0&&(x+=`
`)):(y=[Xy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pu).join(`
`),x=[Xy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xa?"#define TONE_MAPPING":"",n.toneMapping!==xa?yt.tonemapping_pars_fragment:"",n.toneMapping!==xa?SD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,xD("linearToOutputTexel",n.outputColorSpace),MD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pu).join(`
`)),c=r_(c),c=Gy(c,n),c=Vy(c,n),f=r_(f),f=Gy(f,n),f=Vy(f,n),c=ky(c),f=ky(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===sy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=R+y+c,D=R+x+f,w=Iy(s,s.VERTEX_SHADER,C),P=Iy(s,s.FRAGMENT_SHADER,D);s.attachShader(M,w),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(G){if(r.debug.checkShaderErrors){const Z=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(w)||"",se=s.getShaderInfoLog(P)||"",ne=Z.trim(),F=Y.trim(),H=se.trim();let J=!0,ye=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,w,P);else{const xe=Hy(s,w,"vertex"),z=Hy(s,P,"fragment");Pt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ne+`
`+xe+`
`+z)}else ne!==""?pt("WebGLProgram: Program Info Log:",ne):(F===""||H==="")&&(ye=!1);ye&&(G.diagnostics={runnable:J,programLog:ne,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:x}})}s.deleteShader(w),s.deleteShader(P),B=new Df(s,M),T=TD(s,M)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,mD)),L},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_D++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=P,this}let GD=0;class VD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new kD(e),n.set(e,a)),a}}class kD{constructor(e){this.id=GD++,this.code=e,this.usedTimes=0}}function XD(r,e,n,a,s,l,c){const f=new UM,d=new VD,h=new Set,m=[],g=new Map,v=s.logarithmicDepthBuffer;let S=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function y(T,L,G,Z,Y){const se=Z.fog,ne=Y.geometry,F=T.isMeshStandardMaterial?Z.environment:null,H=(T.isMeshStandardMaterial?n:e).get(T.envMap||F),J=H&&H.mapping===jf?H.image.height:null,ye=b[T.type];T.precision!==null&&(S=s.getMaxPrecision(T.precision),S!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,z=xe!==void 0?xe.length:0;let te=0;ne.morphAttributes.position!==void 0&&(te=1),ne.morphAttributes.normal!==void 0&&(te=2),ne.morphAttributes.color!==void 0&&(te=3);let me,Ee,Ue,ie;if(ye){const Ut=pa[ye];me=Ut.vertexShader,Ee=Ut.fragmentShader}else me=T.vertexShader,Ee=T.fragmentShader,d.update(T),Ue=d.getVertexShaderID(T),ie=d.getFragmentShaderID(T);const he=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Pe=Y.isInstancedMesh===!0,Be=Y.isBatchedMesh===!0,it=!!T.map,Te=!!T.matcap,Le=!!H,ke=!!T.aoMap,rt=!!T.lightMap,et=!!T.bumpMap,_t=!!T.normalMap,k=!!T.displacementMap,St=!!T.emissiveMap,ct=!!T.metalnessMap,wt=!!T.roughnessMap,qe=T.anisotropy>0,I=T.clearcoat>0,A=T.dispersion>0,j=T.iridescence>0,_e=T.sheen>0,Me=T.transmission>0,de=qe&&!!T.anisotropyMap,$e=I&&!!T.clearcoatMap,Ne=I&&!!T.clearcoatNormalMap,Ze=I&&!!T.clearcoatRoughnessMap,lt=j&&!!T.iridescenceMap,Ae=j&&!!T.iridescenceThicknessMap,Ce=_e&&!!T.sheenColorMap,Xe=_e&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Oe=!!T.specularColorMap,gt=!!T.specularIntensityMap,q=Me&&!!T.transmissionMap,ze=Me&&!!T.thicknessMap,we=!!T.gradientMap,Ve=!!T.alphaMap,be=T.alphaTest>0,Se=!!T.alphaHash,De=!!T.extensions;let ft=xa;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Ht={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:me,fragmentShader:Ee,defines:T.defines,customVertexShaderID:Ue,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Be,batchingColor:Be&&Y._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&Y.instanceColor!==null,instancingMorph:Pe&&Y.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:nl,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Te,envMap:Le,envMapMode:Le&&H.mapping,envMapCubeUVHeight:J,aoMap:ke,lightMap:rt,bumpMap:et,normalMap:_t,displacementMap:k,emissiveMap:St,normalMapObjectSpace:_t&&T.normalMapType===LR,normalMapTangentSpace:_t&&T.normalMapType===UR,metalnessMap:ct,roughnessMap:wt,anisotropy:qe,anisotropyMap:de,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ze,dispersion:A,iridescence:j,iridescenceMap:lt,iridescenceThicknessMap:Ae,sheen:_e,sheenColorMap:Ce,sheenRoughnessMap:Xe,specularMap:Ge,specularColorMap:Oe,specularIntensityMap:gt,transmission:Me,transmissionMap:q,thicknessMap:ze,gradientMap:we,opaque:T.transparent===!1&&T.blending===Wo&&T.alphaToCoverage===!1,alphaMap:Ve,alphaTest:be,alphaHash:Se,combine:T.combine,mapUv:it&&M(T.map.channel),aoMapUv:ke&&M(T.aoMap.channel),lightMapUv:rt&&M(T.lightMap.channel),bumpMapUv:et&&M(T.bumpMap.channel),normalMapUv:_t&&M(T.normalMap.channel),displacementMapUv:k&&M(T.displacementMap.channel),emissiveMapUv:St&&M(T.emissiveMap.channel),metalnessMapUv:ct&&M(T.metalnessMap.channel),roughnessMapUv:wt&&M(T.roughnessMap.channel),anisotropyMapUv:de&&M(T.anisotropyMap.channel),clearcoatMapUv:$e&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&M(T.sheenRoughnessMap.channel),specularMapUv:Ge&&M(T.specularMap.channel),specularColorMapUv:Oe&&M(T.specularColorMap.channel),specularIntensityMapUv:gt&&M(T.specularIntensityMap.channel),transmissionMapUv:q&&M(T.transmissionMap.channel),thicknessMapUv:ze&&M(T.thicknessMap.channel),alphaMapUv:Ve&&M(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(_t||qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ne.attributes.uv&&(it||Ve),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Re,skinning:Y.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:St&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qa,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Be)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=h.has(1),Ht.vertexUv2s=h.has(2),Ht.vertexUv3s=h.has(3),h.clear(),Ht}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)L.push(G),L.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(R(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function R(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const L=b[T.type];let G;if(L){const Z=pa[L];G=oC.clone(Z.uniforms)}else G=T.uniforms;return G}function w(T,L){let G=g.get(L);return G!==void 0?++G.usedTimes:(G=new HD(r,L,T,l),m.push(G),g.set(L,G)),G}function P(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),g.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function B(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:w,releaseProgram:P,releaseShaderCache:O,programs:m,dispose:B}}function WD(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function s(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:n,remove:a,update:s,dispose:l}}function qD(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qy(){const r=[];let e=0;const n=[],a=[],s=[];function l(){e=0,n.length=0,a.length=0,s.length=0}function c(g,v,S,b,M,y){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:b,renderOrder:g.renderOrder,z:M,group:y},r[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=M,x.group=y),e++,x}function f(g,v,S,b,M,y){const x=c(g,v,S,b,M,y);S.transmission>0?a.push(x):S.transparent===!0?s.push(x):n.push(x)}function d(g,v,S,b,M,y){const x=c(g,v,S,b,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?s.unshift(x):n.unshift(x)}function h(g,v){n.length>1&&n.sort(g||qD),a.length>1&&a.sort(v||Wy),s.length>1&&s.sort(v||Wy)}function m(){for(let g=e,v=r.length;g<v;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:d,finish:m,sort:h}}function YD(){let r=new WeakMap;function e(a,s){const l=r.get(a);let c;return l===void 0?(c=new qy,r.set(a,[c])):s>=l.length?(c=new qy,l.push(c)):c=l[s],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function jD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new jt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return r[e.id]=n,n}}}function ZD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let KD=0;function QD(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JD(r){const e=new jD,n=ZD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new ue);const s=new ue,l=new En,c=new En;function f(h){let m=0,g=0,v=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let S=0,b=0,M=0,y=0,x=0,R=0,C=0,D=0,w=0,P=0,O=0;h.sort(QD);for(let T=0,L=h.length;T<L;T++){const G=h[T],Z=G.color,Y=G.intensity,se=G.distance;let ne=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===tl?ne=G.shadow.map.texture:ne=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)m+=Z.r*Y,g+=Z.g*Y,v+=Z.b*Y;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],Y);O++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[S]=J,a.directionalShadowMap[S]=ne,a.directionalShadowMatrix[S]=G.shadow.matrix,R++}a.directional[S]=F,S++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Z).multiplyScalar(Y),F.distance=se,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[M]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[w]=G.map,w++,H.updateMatrices(G),G.castShadow&&P++),a.spotLightMatrix[M]=H.matrix,G.castShadow){const J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[M]=J,a.spotShadowMap[M]=ne,D++}M++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(Z).multiplyScalar(Y),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=F,y++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[b]=J,a.pointShadowMap[b]=ne,a.pointShadowMatrix[b]=G.shadow.matrix,C++}a.point[b]=F,b++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(Y),F.groundColor.copy(G.groundColor).multiplyScalar(Y),a.hemi[x]=F,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=v;const B=a.hash;(B.directionalLength!==S||B.pointLength!==b||B.spotLength!==M||B.rectAreaLength!==y||B.hemiLength!==x||B.numDirectionalShadows!==R||B.numPointShadows!==C||B.numSpotShadows!==D||B.numSpotMaps!==w||B.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=D+w-P,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=O,B.directionalLength=S,B.pointLength=b,B.spotLength=M,B.rectAreaLength=y,B.hemiLength=x,B.numDirectionalShadows=R,B.numPointShadows=C,B.numSpotShadows=D,B.numSpotMaps=w,B.numLightProbes=O,a.version=KD++)}function d(h,m){let g=0,v=0,S=0,b=0,M=0;const y=m.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const C=h[x];if(C.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),g++}else if(C.isSpotLight){const D=a.spot[S];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),S++}else if(C.isRectAreaLight){const D=a.rectArea[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),b++}else if(C.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const D=a.hemi[M];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:a}}function Yy(r){const e=new JD(r),n=[],a=[];function s(m){h.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function c(m){a.push(m)}function f(){e.setup(n)}function d(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function $D(r){let e=new WeakMap;function n(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new Yy(r),e.set(s,[f])):l>=c.length?(f=new Yy(r),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const eU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tU=`uniform sampler2D shadow_pass;
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
}`,nU=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],iU=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],jy=new En,cu=new ue,Zp=new ue;function aU(r,e,n){let a=new HM;const s=new Dt,l=new Dt,c=new mn,f=new xC,d=new yC,h={},m=n.maxTextureSize,g={[es]:fi,[fi]:es,[Qa]:Qa},v=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:eU,fragmentShader:tU}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new cr;b.setAttribute("position",new Sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ta(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let x=this.type;this.render=function(P,O,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;P.type===lR&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Tf);const T=r.getRenderTarget(),L=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(er),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Y=x!==this.type;Y&&O.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ne=>ne.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ne=P.length;se<ne;se++){const F=P[se],H=F.shadow;if(H===void 0){pt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),l.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/J.x),s.x=l.x*J.x,H.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/J.y),s.y=l.y*J.y,H.mapSize.y=l.y)),H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===du){if(F.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ya(s.x,s.y,{format:tl,type:sr,minFilter:jn,magFilter:jn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new wu(s.x,s.y,ga),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=or,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn}else{F.isPointLight?(H.map=new BM(s.x),H.map.depthTexture=new gC(s.x,ba)):(H.map=new ya(s.x,s.y),H.map.depthTexture=new wu(s.x,s.y,ba)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=or;const xe=r.state.buffers.depth.getReversed();this.type===Tf?(H.map.depthTexture.compareFunction=xe?I_:z_,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn)}H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ye;xe++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(H.map),r.clear());const z=H.getViewport(xe);c.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),Z.viewport(c)}if(F.isPointLight){const z=H.camera,te=H.matrix,me=F.distance||z.far;me!==z.far&&(z.far=me,z.updateProjectionMatrix()),cu.setFromMatrixPosition(F.matrixWorld),z.position.copy(cu),Zp.copy(z.position),Zp.add(nU[xe]),z.up.copy(iU[xe]),z.lookAt(Zp),z.updateMatrixWorld(),te.makeTranslation(-cu.x,-cu.y,-cu.z),jy.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jy,z.coordinateSystem,z.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),D(O,B,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===du&&R(H,B),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(T,L,G)};function R(P,O){const B=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ya(s.x,s.y,{format:tl,type:sr})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(O,null,B,v,M,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(O,null,B,S,M,null)}function C(P,O,B,T){let L=null;const G=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)L=G;else if(L=B.isPointLight===!0?d:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=L.uuid,Y=O.uuid;let se=h[Z];se===void 0&&(se={},h[Z]=se);let ne=se[Y];ne===void 0&&(ne=L.clone(),se[Y]=ne,O.addEventListener("dispose",w)),L=ne}if(L.visible=O.visible,L.wireframe=O.wireframe,T===du?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:g[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,B.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Z=r.properties.get(L);Z.light=B}return L}function D(P,O,B,T,L){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===du)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),se=P.material;if(Array.isArray(se)){const ne=Y.groups;for(let F=0,H=ne.length;F<H;F++){const J=ne[F],ye=se[J.materialIndex];if(ye&&ye.visible){const xe=C(P,ye,T,L);P.onBeforeShadow(r,P,O,B,Y,xe,J),r.renderBufferDirect(B,null,Y,xe,P,J),P.onAfterShadow(r,P,O,B,Y,xe,J)}}}else if(se.visible){const ne=C(P,se,T,L);P.onBeforeShadow(r,P,O,B,Y,ne,null),r.renderBufferDirect(B,null,Y,ne,P,null),P.onAfterShadow(r,P,O,B,Y,ne,null)}}const Z=P.children;for(let Y=0,se=Z.length;Y<se;Y++)D(Z[Y],O,B,T,L)}function w(P){P.target.removeEventListener("dispose",w);for(const B in h){const T=h[B],L=P.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}const rU={[pm]:mm,[_m]:xm,[gm]:ym,[$o]:vm,[mm]:pm,[xm]:_m,[ym]:gm,[vm]:$o};function sU(r,e){function n(){let q=!1;const ze=new mn;let we=null;const Ve=new mn(0,0,0,0);return{setMask:function(be){we!==be&&!q&&(r.colorMask(be,be,be,be),we=be)},setLocked:function(be){q=be},setClear:function(be,Se,De,ft,Ht){Ht===!0&&(be*=ft,Se*=ft,De*=ft),ze.set(be,Se,De,ft),Ve.equals(ze)===!1&&(r.clearColor(be,Se,De,ft),Ve.copy(ze))},reset:function(){q=!1,we=null,Ve.set(-1,0,0,0)}}}function a(){let q=!1,ze=!1,we=null,Ve=null,be=null;return{setReversed:function(Se){if(ze!==Se){const De=e.get("EXT_clip_control");Se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ze=Se;const ft=be;be=null,this.setClear(ft)}},getReversed:function(){return ze},setTest:function(Se){Se?he(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Se){we!==Se&&!q&&(r.depthMask(Se),we=Se)},setFunc:function(Se){if(ze&&(Se=rU[Se]),Ve!==Se){switch(Se){case pm:r.depthFunc(r.NEVER);break;case mm:r.depthFunc(r.ALWAYS);break;case _m:r.depthFunc(r.LESS);break;case $o:r.depthFunc(r.LEQUAL);break;case gm:r.depthFunc(r.EQUAL);break;case vm:r.depthFunc(r.GEQUAL);break;case xm:r.depthFunc(r.GREATER);break;case ym:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=Se}},setLocked:function(Se){q=Se},setClear:function(Se){be!==Se&&(ze&&(Se=1-Se),r.clearDepth(Se),be=Se)},reset:function(){q=!1,we=null,Ve=null,be=null,ze=!1}}}function s(){let q=!1,ze=null,we=null,Ve=null,be=null,Se=null,De=null,ft=null,Ht=null;return{setTest:function(Ut){q||(Ut?he(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Ut){ze!==Ut&&!q&&(r.stencilMask(Ut),ze=Ut)},setFunc:function(Ut,kn,ji){(we!==Ut||Ve!==kn||be!==ji)&&(r.stencilFunc(Ut,kn,ji),we=Ut,Ve=kn,be=ji)},setOp:function(Ut,kn,ji){(Se!==Ut||De!==kn||ft!==ji)&&(r.stencilOp(Ut,kn,ji),Se=Ut,De=kn,ft=ji)},setLocked:function(Ut){q=Ut},setClear:function(Ut){Ht!==Ut&&(r.clearStencil(Ut),Ht=Ut)},reset:function(){q=!1,ze=null,we=null,Ve=null,be=null,Se=null,De=null,ft=null,Ht=null}}}const l=new n,c=new a,f=new s,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,S=[],b=null,M=!1,y=null,x=null,R=null,C=null,D=null,w=null,P=null,O=new jt(0,0,0),B=0,T=!1,L=null,G=null,Z=null,Y=null,se=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=H>=2);let ye=null,xe={};const z=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),me=new mn().fromArray(z),Ee=new mn().fromArray(te);function Ue(q,ze,we,Ve){const be=new Uint8Array(4),Se=r.createTexture();r.bindTexture(q,Se),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<we;De++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(ze+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return Se}const ie={};ie[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(r.DEPTH_TEST),c.setFunc($o),et(!1),_t(ey),he(r.CULL_FACE),ke(er);function he(q){m[q]!==!0&&(r.enable(q),m[q]=!0)}function Re(q){m[q]!==!1&&(r.disable(q),m[q]=!1)}function Pe(q,ze){return g[q]!==ze?(r.bindFramebuffer(q,ze),g[q]=ze,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=ze),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function Be(q,ze){let we=S,Ve=!1;if(q){we=v.get(ze),we===void 0&&(we=[],v.set(ze,we));const be=q.textures;if(we.length!==be.length||we[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,De=be.length;Se<De;Se++)we[Se]=r.COLOR_ATTACHMENT0+Se;we.length=be.length,Ve=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(we)}function it(q){return b!==q?(r.useProgram(q),b=q,!0):!1}const Te={[Ds]:r.FUNC_ADD,[cR]:r.FUNC_SUBTRACT,[fR]:r.FUNC_REVERSE_SUBTRACT};Te[hR]=r.MIN,Te[dR]=r.MAX;const Le={[pR]:r.ZERO,[mR]:r.ONE,[_R]:r.SRC_COLOR,[hm]:r.SRC_ALPHA,[MR]:r.SRC_ALPHA_SATURATE,[yR]:r.DST_COLOR,[vR]:r.DST_ALPHA,[gR]:r.ONE_MINUS_SRC_COLOR,[dm]:r.ONE_MINUS_SRC_ALPHA,[SR]:r.ONE_MINUS_DST_COLOR,[xR]:r.ONE_MINUS_DST_ALPHA,[ER]:r.CONSTANT_COLOR,[bR]:r.ONE_MINUS_CONSTANT_COLOR,[TR]:r.CONSTANT_ALPHA,[AR]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(q,ze,we,Ve,be,Se,De,ft,Ht,Ut){if(q===er){M===!0&&(Re(r.BLEND),M=!1);return}if(M===!1&&(he(r.BLEND),M=!0),q!==uR){if(q!==y||Ut!==T){if((x!==Ds||D!==Ds)&&(r.blendEquation(r.FUNC_ADD),x=Ds,D=Ds),Ut)switch(q){case Wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ty:r.blendFunc(r.ONE,r.ONE);break;case ny:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iy:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",q);break}else switch(q){case Wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ty:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ny:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iy:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",q);break}R=null,C=null,w=null,P=null,O.set(0,0,0),B=0,y=q,T=Ut}return}be=be||ze,Se=Se||we,De=De||Ve,(ze!==x||be!==D)&&(r.blendEquationSeparate(Te[ze],Te[be]),x=ze,D=be),(we!==R||Ve!==C||Se!==w||De!==P)&&(r.blendFuncSeparate(Le[we],Le[Ve],Le[Se],Le[De]),R=we,C=Ve,w=Se,P=De),(ft.equals(O)===!1||Ht!==B)&&(r.blendColor(ft.r,ft.g,ft.b,Ht),O.copy(ft),B=Ht),y=q,T=!1}function rt(q,ze){q.side===Qa?Re(r.CULL_FACE):he(r.CULL_FACE);let we=q.side===fi;ze&&(we=!we),et(we),q.blending===Wo&&q.transparent===!1?ke(er):ke(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const Ve=q.stencilWrite;f.setTest(Ve),Ve&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),St(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(q){L!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),L=q)}function _t(q){q!==sR?(he(r.CULL_FACE),q!==G&&(q===ey?r.cullFace(r.BACK):q===oR?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),G=q}function k(q){q!==Z&&(F&&r.lineWidth(q),Z=q)}function St(q,ze,we){q?(he(r.POLYGON_OFFSET_FILL),(Y!==ze||se!==we)&&(r.polygonOffset(ze,we),Y=ze,se=we)):Re(r.POLYGON_OFFSET_FILL)}function ct(q){q?he(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function wt(q){q===void 0&&(q=r.TEXTURE0+ne-1),ye!==q&&(r.activeTexture(q),ye=q)}function qe(q,ze,we){we===void 0&&(ye===null?we=r.TEXTURE0+ne-1:we=ye);let Ve=xe[we];Ve===void 0&&(Ve={type:void 0,texture:void 0},xe[we]=Ve),(Ve.type!==q||Ve.texture!==ze)&&(ye!==we&&(r.activeTexture(we),ye=we),r.bindTexture(q,ze||ie[q]),Ve.type=q,Ve.texture=ze)}function I(){const q=xe[ye];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function _e(){try{r.texSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Me(){try{r.texSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ne(){try{r.texStorage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ze(){try{r.texStorage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function lt(){try{r.texImage2D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ae(){try{r.texImage3D(...arguments)}catch(q){Pt("WebGLState:",q)}}function Ce(q){me.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),me.copy(q))}function Xe(q){Ee.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ee.copy(q))}function Ge(q,ze){let we=h.get(ze);we===void 0&&(we=new WeakMap,h.set(ze,we));let Ve=we.get(q);Ve===void 0&&(Ve=r.getUniformBlockIndex(ze,q.name),we.set(q,Ve))}function Oe(q,ze){const Ve=h.get(ze).get(q);d.get(ze)!==Ve&&(r.uniformBlockBinding(ze,Ve,q.__bindingPointIndex),d.set(ze,Ve))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ye=null,xe={},g={},v=new WeakMap,S=[],b=null,M=!1,y=null,x=null,R=null,C=null,D=null,w=null,P=null,O=new jt(0,0,0),B=0,T=!1,L=null,G=null,Z=null,Y=null,se=null,me.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:Re,bindFramebuffer:Pe,drawBuffers:Be,useProgram:it,setBlending:ke,setMaterial:rt,setFlipSided:et,setCullFace:_t,setLineWidth:k,setPolygonOffset:St,setScissorTest:ct,activeTexture:wt,bindTexture:qe,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:j,texImage2D:lt,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Oe,texStorage2D:Ne,texStorage3D:Ze,texSubImage2D:_e,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:$e,scissor:Ce,viewport:Xe,reset:gt}}function oU(r,e,n,a,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,A){return S?new OffscreenCanvas(I,A):Gf("canvas")}function M(I,A,j){let _e=1;const Me=qe(I);if((Me.width>j||Me.height>j)&&(_e=j/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(_e*Me.width),$e=Math.floor(_e*Me.height);g===void 0&&(g=b(de,$e));const Ne=A?b(de,$e):g;return Ne.width=de,Ne.height=$e,Ne.getContext("2d").drawImage(I,0,0,de,$e),pt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+de+"x"+$e+")."),Ne}else return"data"in I&&pt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(I,A,j,_e,Me=!1){if(I!==null){if(r[I]!==void 0)return r[I];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=A;if(A===r.RED&&(j===r.FLOAT&&(de=r.R32F),j===r.HALF_FLOAT&&(de=r.R16F),j===r.UNSIGNED_BYTE&&(de=r.R8)),A===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.R8UI),j===r.UNSIGNED_SHORT&&(de=r.R16UI),j===r.UNSIGNED_INT&&(de=r.R32UI),j===r.BYTE&&(de=r.R8I),j===r.SHORT&&(de=r.R16I),j===r.INT&&(de=r.R32I)),A===r.RG&&(j===r.FLOAT&&(de=r.RG32F),j===r.HALF_FLOAT&&(de=r.RG16F),j===r.UNSIGNED_BYTE&&(de=r.RG8)),A===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RG8UI),j===r.UNSIGNED_SHORT&&(de=r.RG16UI),j===r.UNSIGNED_INT&&(de=r.RG32UI),j===r.BYTE&&(de=r.RG8I),j===r.SHORT&&(de=r.RG16I),j===r.INT&&(de=r.RG32I)),A===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RGB8UI),j===r.UNSIGNED_SHORT&&(de=r.RGB16UI),j===r.UNSIGNED_INT&&(de=r.RGB32UI),j===r.BYTE&&(de=r.RGB8I),j===r.SHORT&&(de=r.RGB16I),j===r.INT&&(de=r.RGB32I)),A===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),j===r.UNSIGNED_INT&&(de=r.RGBA32UI),j===r.BYTE&&(de=r.RGBA8I),j===r.SHORT&&(de=r.RGBA16I),j===r.INT&&(de=r.RGBA32I)),A===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),A===r.RGBA){const $e=Me?Bf:Lt.getTransfer(_e);j===r.FLOAT&&(de=r.RGBA32F),j===r.HALF_FLOAT&&(de=r.RGBA16F),j===r.UNSIGNED_BYTE&&(de=$e===Xt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(I,A){let j;return I?A===null||A===ba||A===Ru?j=r.DEPTH24_STENCIL8:A===ga?j=r.DEPTH32F_STENCIL8:A===Au&&(j=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ba||A===Ru?j=r.DEPTH_COMPONENT24:A===ga?j=r.DEPTH_COMPONENT32F:A===Au&&(j=r.DEPTH_COMPONENT16),j}function w(I,A){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gn&&I.minFilter!==jn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function P(I){const A=I.target;A.removeEventListener("dispose",P),B(A),A.isVideoTexture&&m.delete(A)}function O(I){const A=I.target;A.removeEventListener("dispose",O),L(A)}function B(I){const A=a.get(I);if(A.__webglInit===void 0)return;const j=I.source,_e=v.get(j);if(_e){const Me=_e[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&T(I),Object.keys(_e).length===0&&v.delete(j)}a.remove(I)}function T(I){const A=a.get(I);r.deleteTexture(A.__webglTexture);const j=I.source,_e=v.get(j);delete _e[A.__cacheKey],c.memory.textures--}function L(I){const A=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let Me=0;Me<A.__webglFramebuffer[_e].length;Me++)r.deleteFramebuffer(A.__webglFramebuffer[_e][Me]);else r.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)r.deleteFramebuffer(A.__webglFramebuffer[_e]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=I.textures;for(let _e=0,Me=j.length;_e<Me;_e++){const de=a.get(j[_e]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),a.remove(j[_e])}a.remove(I)}let G=0;function Z(){G=0}function Y(){const I=G;return I>=s.maxTextures&&pt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),G+=1,I}function se(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ne(I,A){const j=a.get(I);if(I.isVideoTexture&&ct(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const _e=I.image;if(_e===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,I,A);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+A)}function F(I,A){const j=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ie(j,I,A);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+A)}function H(I,A){const j=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ie(j,I,A);return}n.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+A)}function J(I,A){const j=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){he(j,I,A);return}n.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+A)}const ye={[Em]:r.REPEAT,[Ja]:r.CLAMP_TO_EDGE,[bm]:r.MIRRORED_REPEAT},xe={[Gn]:r.NEAREST,[wR]:r.NEAREST_MIPMAP_NEAREST,[Jc]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[xp]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},z={[NR]:r.NEVER,[IR]:r.ALWAYS,[OR]:r.LESS,[z_]:r.LEQUAL,[PR]:r.EQUAL,[I_]:r.GEQUAL,[FR]:r.GREATER,[zR]:r.NOTEQUAL};function te(I,A){if(A.type===ga&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===jn||A.magFilter===xp||A.magFilter===Jc||A.magFilter===Ns||A.minFilter===jn||A.minFilter===xp||A.minFilter===Jc||A.minFilter===Ns)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ye[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ye[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ye[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,xe[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,xe[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Gn||A.minFilter!==Jc&&A.minFilter!==Ns||A.type===ga&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function me(I,A){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P));const _e=A.source;let Me=v.get(_e);Me===void 0&&(Me={},v.set(_e,Me));const de=se(A);if(de!==I.__cacheKey){Me[de]===void 0&&(Me[de]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,j=!0),Me[de].usedTimes++;const $e=Me[I.__cacheKey];$e!==void 0&&(Me[I.__cacheKey].usedTimes--,$e.usedTimes===0&&T(A)),I.__cacheKey=de,I.__webglTexture=Me[de].texture}return j}function Ee(I,A,j){return Math.floor(Math.floor(I/j)/A)}function Ue(I,A,j,_e){const de=I.updateRanges;if(de.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,j,_e,A.data);else{de.sort((Ae,Ce)=>Ae.start-Ce.start);let $e=0;for(let Ae=1;Ae<de.length;Ae++){const Ce=de[$e],Xe=de[Ae],Ge=Ce.start+Ce.count,Oe=Ee(Xe.start,A.width,4),gt=Ee(Ce.start,A.width,4);Xe.start<=Ge+1&&Oe===gt&&Ee(Xe.start+Xe.count-1,A.width,4)===Oe?Ce.count=Math.max(Ce.count,Xe.start+Xe.count-Ce.start):(++$e,de[$e]=Xe)}de.length=$e+1;const Ne=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),lt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Ae=0,Ce=de.length;Ae<Ce;Ae++){const Xe=de[Ae],Ge=Math.floor(Xe.start/4),Oe=Math.ceil(Xe.count/4),gt=Ge%A.width,q=Math.floor(Ge/A.width),ze=Oe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),n.texSubImage2D(r.TEXTURE_2D,0,gt,q,ze,we,j,_e,A.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function ie(I,A,j){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const Me=me(I,A),de=A.source;n.bindTexture(_e,I.__webglTexture,r.TEXTURE0+j);const $e=a.get(de);if(de.version!==$e.__version||Me===!0){n.activeTexture(r.TEXTURE0+j);const Ne=Lt.getPrimaries(Lt.workingColorSpace),Ze=A.colorSpace===Xr?null:Lt.getPrimaries(A.colorSpace),lt=A.colorSpace===Xr||Ne===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ae=M(A.image,!1,s.maxTextureSize);Ae=wt(A,Ae);const Ce=l.convert(A.format,A.colorSpace),Xe=l.convert(A.type);let Ge=C(A.internalFormat,Ce,Xe,A.colorSpace,A.isVideoTexture);te(_e,A);let Oe;const gt=A.mipmaps,q=A.isVideoTexture!==!0,ze=$e.__version===void 0||Me===!0,we=de.dataReady,Ve=w(A,Ae);if(A.isDepthTexture)Ge=D(A.format===Os,A.type),ze&&(q?n.texStorage2D(r.TEXTURE_2D,1,Ge,Ae.width,Ae.height):n.texImage2D(r.TEXTURE_2D,0,Ge,Ae.width,Ae.height,0,Ce,Xe,null));else if(A.isDataTexture)if(gt.length>0){q&&ze&&n.texStorage2D(r.TEXTURE_2D,Ve,Ge,gt[0].width,gt[0].height);for(let be=0,Se=gt.length;be<Se;be++)Oe=gt[be],q?we&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,Xe,Oe.data):n.texImage2D(r.TEXTURE_2D,be,Ge,Oe.width,Oe.height,0,Ce,Xe,Oe.data);A.generateMipmaps=!1}else q?(ze&&n.texStorage2D(r.TEXTURE_2D,Ve,Ge,Ae.width,Ae.height),we&&Ue(A,Ae,Ce,Xe)):n.texImage2D(r.TEXTURE_2D,0,Ge,Ae.width,Ae.height,0,Ce,Xe,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ge,gt[0].width,gt[0].height,Ae.depth);for(let be=0,Se=gt.length;be<Se;be++)if(Oe=gt[be],A.format!==ra)if(Ce!==null)if(q){if(we)if(A.layerUpdates.size>0){const De=Ty(Oe.width,Oe.height,A.format,A.type);for(const ft of A.layerUpdates){const Ht=Oe.data.subarray(ft*De/Oe.data.BYTES_PER_ELEMENT,(ft+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,ft,Oe.width,Oe.height,1,Ce,Ht)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,Ae.depth,Ce,Oe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,Ge,Oe.width,Oe.height,Ae.depth,0,Oe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?we&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,Ae.depth,Ce,Xe,Oe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,be,Ge,Oe.width,Oe.height,Ae.depth,0,Ce,Xe,Oe.data)}else{q&&ze&&n.texStorage2D(r.TEXTURE_2D,Ve,Ge,gt[0].width,gt[0].height);for(let be=0,Se=gt.length;be<Se;be++)Oe=gt[be],A.format!==ra?Ce!==null?q?we&&n.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,Oe.data):n.compressedTexImage2D(r.TEXTURE_2D,be,Ge,Oe.width,Oe.height,0,Oe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?we&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ce,Xe,Oe.data):n.texImage2D(r.TEXTURE_2D,be,Ge,Oe.width,Oe.height,0,Ce,Xe,Oe.data)}else if(A.isDataArrayTexture)if(q){if(ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ge,Ae.width,Ae.height,Ae.depth),we)if(A.layerUpdates.size>0){const be=Ty(Ae.width,Ae.height,A.format,A.type);for(const Se of A.layerUpdates){const De=Ae.data.subarray(Se*be/Ae.data.BYTES_PER_ELEMENT,(Se+1)*be/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Ae.width,Ae.height,1,Ce,Xe,De)}A.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Xe,Ae.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Ae.width,Ae.height,Ae.depth,0,Ce,Xe,Ae.data);else if(A.isData3DTexture)q?(ze&&n.texStorage3D(r.TEXTURE_3D,Ve,Ge,Ae.width,Ae.height,Ae.depth),we&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Xe,Ae.data)):n.texImage3D(r.TEXTURE_3D,0,Ge,Ae.width,Ae.height,Ae.depth,0,Ce,Xe,Ae.data);else if(A.isFramebufferTexture){if(ze)if(q)n.texStorage2D(r.TEXTURE_2D,Ve,Ge,Ae.width,Ae.height);else{let be=Ae.width,Se=Ae.height;for(let De=0;De<Ve;De++)n.texImage2D(r.TEXTURE_2D,De,Ge,be,Se,0,Ce,Xe,null),be>>=1,Se>>=1}}else if(gt.length>0){if(q&&ze){const be=qe(gt[0]);n.texStorage2D(r.TEXTURE_2D,Ve,Ge,be.width,be.height)}for(let be=0,Se=gt.length;be<Se;be++)Oe=gt[be],q?we&&n.texSubImage2D(r.TEXTURE_2D,be,0,0,Ce,Xe,Oe):n.texImage2D(r.TEXTURE_2D,be,Ge,Ce,Xe,Oe);A.generateMipmaps=!1}else if(q){if(ze){const be=qe(Ae);n.texStorage2D(r.TEXTURE_2D,Ve,Ge,be.width,be.height)}we&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Xe,Ae)}else n.texImage2D(r.TEXTURE_2D,0,Ge,Ce,Xe,Ae);y(A)&&x(_e),$e.__version=de.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function he(I,A,j){if(A.image.length!==6)return;const _e=me(I,A),Me=A.source;n.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+j);const de=a.get(Me);if(Me.version!==de.__version||_e===!0){n.activeTexture(r.TEXTURE0+j);const $e=Lt.getPrimaries(Lt.workingColorSpace),Ne=A.colorSpace===Xr?null:Lt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Xr||$e===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const lt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Ce=[];for(let Se=0;Se<6;Se++)!lt&&!Ae?Ce[Se]=M(A.image[Se],!0,s.maxCubemapSize):Ce[Se]=Ae?A.image[Se].image:A.image[Se],Ce[Se]=wt(A,Ce[Se]);const Xe=Ce[0],Ge=l.convert(A.format,A.colorSpace),Oe=l.convert(A.type),gt=C(A.internalFormat,Ge,Oe,A.colorSpace),q=A.isVideoTexture!==!0,ze=de.__version===void 0||_e===!0,we=Me.dataReady;let Ve=w(A,Xe);te(r.TEXTURE_CUBE_MAP,A);let be;if(lt){q&&ze&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,gt,Xe.width,Xe.height);for(let Se=0;Se<6;Se++){be=Ce[Se].mipmaps;for(let De=0;De<be.length;De++){const ft=be[De];A.format!==ra?Ge!==null?q?we&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,ft.width,ft.height,Ge,ft.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,gt,ft.width,ft.height,0,ft.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,ft.width,ft.height,Ge,Oe,ft.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,gt,ft.width,ft.height,0,Ge,Oe,ft.data)}}}else{if(be=A.mipmaps,q&&ze){be.length>0&&Ve++;const Se=qe(Ce[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,gt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ae){q?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ce[Se].width,Ce[Se].height,Ge,Oe,Ce[Se].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,gt,Ce[Se].width,Ce[Se].height,0,Ge,Oe,Ce[Se].data);for(let De=0;De<be.length;De++){const Ht=be[De].image[Se].image;q?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,Ht.width,Ht.height,Ge,Oe,Ht.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,gt,Ht.width,Ht.height,0,Ge,Oe,Ht.data)}}else{q?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ge,Oe,Ce[Se]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,gt,Ge,Oe,Ce[Se]);for(let De=0;De<be.length;De++){const ft=be[De];q?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,Ge,Oe,ft.image[Se]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,gt,Ge,Oe,ft.image[Se])}}}y(A)&&x(r.TEXTURE_CUBE_MAP),de.__version=Me.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Re(I,A,j,_e,Me,de){const $e=l.convert(j.format,j.colorSpace),Ne=l.convert(j.type),Ze=C(j.internalFormat,$e,Ne,j.colorSpace),lt=a.get(A),Ae=a.get(j);if(Ae.__renderTarget=A,!lt.__hasExternalTextures){const Ce=Math.max(1,A.width>>de),Xe=Math.max(1,A.height>>de);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?n.texImage3D(Me,de,Ze,Ce,Xe,A.depth,0,$e,Ne,null):n.texImage2D(Me,de,Ze,Ce,Xe,0,$e,Ne,null)}n.bindFramebuffer(r.FRAMEBUFFER,I),St(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Me,Ae.__webglTexture,0,k(A)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Me,Ae.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(I,A,j){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const _e=A.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,de=D(A.stencilBuffer,Me),$e=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;St(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),de,A.width,A.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),de,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,de,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,I)}else{const _e=A.textures;for(let Me=0;Me<_e.length;Me++){const de=_e[Me],$e=l.convert(de.format,de.colorSpace),Ne=l.convert(de.type),Ze=C(de.internalFormat,$e,Ne,de.colorSpace);St(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),Ze,A.width,A.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),Ze,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(I,A,j){const _e=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=a.get(A.depthTexture);if(Me.__renderTarget=A,(!Me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_e){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),te(r.TEXTURE_CUBE_MAP,A.depthTexture);const lt=l.convert(A.depthTexture.format),Ae=l.convert(A.depthTexture.type);let Ce;A.depthTexture.format===or?Ce=r.DEPTH_COMPONENT24:A.depthTexture.format===Os&&(Ce=r.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ce,A.width,A.height,0,lt,Ae,null)}}else ne(A.depthTexture,0);const de=Me.__webglTexture,$e=k(A),Ne=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Ze=A.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===or)St(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ne,de,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ne,de,0);else if(A.depthTexture.format===Os)St(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ne,de,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ne,de,0);else throw new Error("Unknown depthTexture format")}function it(I){const A=a.get(I),j=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const _e=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=_e}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let _e=0;_e<6;_e++)Be(A.__webglFramebuffer[_e],I,_e);else{const _e=I.texture.mipmaps;_e&&_e.length>0?Be(A.__webglFramebuffer[0],I,0):Be(A.__webglFramebuffer,I,0)}else if(j){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=r.createRenderbuffer(),Pe(A.__webglDepthbuffer[_e],I,!1);else{const Me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}else{const _e=I.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Pe(A.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(I,A,j){const _e=a.get(I);A!==void 0&&Re(_e.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&it(I)}function Le(I){const A=I.texture,j=a.get(I),_e=a.get(A);I.addEventListener("dispose",O);const Me=I.textures,de=I.isWebGLCubeRenderTarget===!0,$e=Me.length>1;if($e||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,c.memory.textures++),de){j.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Ne]=[];for(let Ze=0;Ze<A.mipmaps.length;Ze++)j.__webglFramebuffer[Ne][Ze]=r.createFramebuffer()}else j.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)j.__webglFramebuffer[Ne]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if($e)for(let Ne=0,Ze=Me.length;Ne<Ze;Ne++){const lt=a.get(Me[Ne]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&St(I)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){const Ze=Me[Ne];j.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ne]);const lt=l.convert(Ze.format,Ze.colorSpace),Ae=l.convert(Ze.type),Ce=C(Ze.internalFormat,lt,Ae,Ze.colorSpace,I.isXRRenderTarget===!0),Xe=k(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Ce,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(j.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),te(r.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)Re(j.__webglFramebuffer[Ne][Ze],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ze);else Re(j.__webglFramebuffer[Ne],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(A)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Ne=0,Ze=Me.length;Ne<Ze;Ne++){const lt=Me[Ne],Ae=a.get(lt);let Ce=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Ae.__webglTexture),te(Ce,lt),Re(j.__webglFramebuffer,I,lt,r.COLOR_ATTACHMENT0+Ne,Ce,0),y(lt)&&x(Ce)}n.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ne,_e.__webglTexture),te(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)Re(j.__webglFramebuffer[Ze],I,A,r.COLOR_ATTACHMENT0,Ne,Ze);else Re(j.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,Ne,0);y(A)&&x(Ne),n.unbindTexture()}I.depthBuffer&&it(I)}function ke(I){const A=I.textures;for(let j=0,_e=A.length;j<_e;j++){const Me=A[j];if(y(Me)){const de=R(I),$e=a.get(Me).__webglTexture;n.bindTexture(de,$e),x(de),n.unbindTexture()}}}const rt=[],et=[];function _t(I){if(I.samples>0){if(St(I)===!1){const A=I.textures,j=I.width,_e=I.height;let Me=r.COLOR_BUFFER_BIT;const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=a.get(I),Ne=A.length>1;if(Ne)for(let lt=0;lt<A.length;lt++)n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ze=I.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let lt=0;lt<A.length;lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[lt]);const Ae=a.get(A[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,j,_e,0,0,j,_e,Me,r.NEAREST),d===!0&&(rt.length=0,et.length=0,rt.push(r.COLOR_ATTACHMENT0+lt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rt.push(de),et.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let lt=0;lt<A.length;lt++){n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,$e.__webglColorRenderbuffer[lt]);const Ae=a.get(A[lt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,Ae,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function k(I){return Math.min(s.maxSamples,I.samples)}function St(I){const A=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(I){const A=c.render.frame;m.get(I)!==A&&(m.set(I,A),I.update())}function wt(I,A){const j=I.colorSpace,_e=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==nl&&j!==Xr&&(Lt.getTransfer(j)===Xt?(_e!==ra||Me!==Xi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),A}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=Z,this.setTexture2D=ne,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Te,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function lU(r,e){function n(a,s=Xr){let l;const c=Lt.getTransfer(s);if(a===Xi)return r.UNSIGNED_BYTE;if(a===L_)return r.UNSIGNED_SHORT_4_4_4_4;if(a===N_)return r.UNSIGNED_SHORT_5_5_5_1;if(a===bM)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===TM)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===MM)return r.BYTE;if(a===EM)return r.SHORT;if(a===Au)return r.UNSIGNED_SHORT;if(a===U_)return r.INT;if(a===ba)return r.UNSIGNED_INT;if(a===ga)return r.FLOAT;if(a===sr)return r.HALF_FLOAT;if(a===AM)return r.ALPHA;if(a===RM)return r.RGB;if(a===ra)return r.RGBA;if(a===or)return r.DEPTH_COMPONENT;if(a===Os)return r.DEPTH_STENCIL;if(a===CM)return r.RED;if(a===O_)return r.RED_INTEGER;if(a===tl)return r.RG;if(a===P_)return r.RG_INTEGER;if(a===F_)return r.RGBA_INTEGER;if(a===Af||a===Rf||a===Cf||a===wf)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Af)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Af)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Tm||a===Am||a===Rm||a===Cm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Tm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Am)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Cm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wm||a===Dm||a===Um||a===Lm||a===Nm||a===Om||a===Pm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===wm||a===Dm)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Um)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Lm)return l.COMPRESSED_R11_EAC;if(a===Nm)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Om)return l.COMPRESSED_RG11_EAC;if(a===Pm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Fm||a===zm||a===Im||a===Bm||a===Hm||a===Gm||a===Vm||a===km||a===Xm||a===Wm||a===qm||a===Ym||a===jm||a===Zm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Fm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===zm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Im)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Bm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Hm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Vm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===km)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Xm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Wm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===qm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ym)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Zm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Km||a===Qm||a===Jm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Km)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Qm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Jm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===$m||a===e_||a===t_||a===n_)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===$m)return l.COMPRESSED_RED_RGTC1_EXT;if(a===e_)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===t_)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===n_)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ru?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const uU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cU=`
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

}`;class fU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new GM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new sa({vertexShader:uU,fragmentShader:cU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ta(new Iu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hU extends sl{constructor(e,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,b=null;const M=typeof XRWebGLBinding<"u",y=new fU,x={},R=n.getContextAttributes();let C=null,D=null;const w=[],P=[],O=new Dt;let B=null;const T=new ia;T.viewport=new mn;const L=new ia;L.viewport=new mn;const G=[T,L],Z=new SC;let Y=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=w[ie];return he===void 0&&(he=new Vp,w[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=w[ie];return he===void 0&&(he=new Vp,w[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=w[ie];return he===void 0&&(he=new Vp,w[ie]=he),he.getHandSpace()};function ne(ie){const he=P.indexOf(ie.inputSource);if(he===-1)return;const Re=w[he];Re!==void 0&&(Re.update(ie.inputSource,ie.frame,h||c),Re.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let ie=0;ie<w.length;ie++){const he=P[ie];he!==null&&(P[ie]=null,w[ie].disconnect(he))}Y=null,se=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(C),S=null,v=null,g=null,s=null,D=null,Ue.stop(),a.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),R.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Pe=null,Be=null;R.depth&&(Be=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=R.stencil?Os:or,Pe=R.stencil?Ru:ba);const it={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(it),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new ya(v.textureWidth,v.textureHeight,{format:ra,type:Xi,depthTexture:new wu(v.textureWidth,v.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Re={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,n,Re),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ya(S.framebufferWidth,S.framebufferHeight,{format:ra,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(f),Ue.setContext(s),Ue.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ie){for(let he=0;he<ie.removed.length;he++){const Re=ie.removed[he],Pe=P.indexOf(Re);Pe>=0&&(P[Pe]=null,w[Pe].disconnect(Re))}for(let he=0;he<ie.added.length;he++){const Re=ie.added[he];let Pe=P.indexOf(Re);if(Pe===-1){for(let it=0;it<w.length;it++)if(it>=P.length){P.push(Re),Pe=it;break}else if(P[it]===null){P[it]=Re,Pe=it;break}if(Pe===-1)break}const Be=w[Pe];Be&&Be.connect(Re)}}const J=new ue,ye=new ue;function xe(ie,he,Re){J.setFromMatrixPosition(he.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const Pe=J.distanceTo(ye),Be=he.projectionMatrix.elements,it=Re.projectionMatrix.elements,Te=Be[14]/(Be[10]-1),Le=Be[14]/(Be[10]+1),ke=(Be[9]+1)/Be[5],rt=(Be[9]-1)/Be[5],et=(Be[8]-1)/Be[0],_t=(it[8]+1)/it[0],k=Te*et,St=Te*_t,ct=Pe/(-et+_t),wt=ct*-et;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(wt),ie.translateZ(ct),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Be[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const qe=Te+ct,I=Le+ct,A=k-wt,j=St+(Pe-wt),_e=ke*Le/I*qe,Me=rt*Le/I*qe;ie.projectionMatrix.makePerspective(A,j,_e,Me,qe,I),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function z(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let he=ie.near,Re=ie.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Re=y.depthFar)),Z.near=L.near=T.near=he,Z.far=L.far=T.far=Re,(Y!==Z.near||se!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),Y=Z.near,se=Z.far),Z.layers.mask=ie.layers.mask|6,T.layers.mask=Z.layers.mask&3,L.layers.mask=Z.layers.mask&5;const Pe=ie.parent,Be=Z.cameras;z(Z,Pe);for(let it=0;it<Be.length;it++)z(Be[it],Pe);Be.length===2?xe(Z,T,L):Z.projectionMatrix.copy(T.projectionMatrix),te(ie,Z,Pe)};function te(ie,he,Re){Re===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Re.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=i_*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(ie){d=ie,v!==null&&(v.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ie){return x[ie]};let me=null;function Ee(ie,he){if(m=he.getViewerPose(h||c),b=he,m!==null){const Re=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Pe=!1;Re.length!==Z.cameras.length&&(Z.cameras.length=0,Pe=!0);for(let Le=0;Le<Re.length;Le++){const ke=Re[Le];let rt=null;if(S!==null)rt=S.getViewport(ke);else{const _t=g.getViewSubImage(v,ke);rt=_t.viewport,Le===0&&(e.setRenderTargetTextures(D,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(D))}let et=G[Le];et===void 0&&(et=new ia,et.layers.enable(Le),et.viewport=new mn,G[Le]=et),et.matrix.fromArray(ke.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ke.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(rt.x,rt.y,rt.width,rt.height),Le===0&&(Z.matrix.copy(et.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pe===!0&&Z.cameras.push(et)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const Le=g.getDepthInformation(Re[0]);Le&&Le.isValid&&Le.texture&&y.init(Le,s.renderState)}if(Be&&Be.includes("camera-access")&&M){e.state.unbindTexture(),g=a.getBinding();for(let Le=0;Le<Re.length;Le++){const ke=Re[Le].camera;if(ke){let rt=x[ke];rt||(rt=new GM,x[ke]=rt);const et=g.getCameraImage(ke);rt.sourceTexture=et}}}}for(let Re=0;Re<w.length;Re++){const Pe=P[Re],Be=w[Re];Pe!==null&&Be!==void 0&&Be.update(Pe,he,h||c)}me&&me(ie,he),he.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:he}),b=null}const Ue=new VM;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}}const Rs=new lr,dU=new En;function pU(r,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,FM(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,R,C,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,D)):x.isMeshMatcapMaterial?(l(y,x),b(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,R,C):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===fi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===fi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),C=R.envMap,D=R.envMapRotation;C&&(y.envMap.value=C,Rs.copy(D),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),y.envMapRotation.value.setFromMatrix4(dU.makeRotationFromEuler(Rs)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,R,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=C*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function mU(r,e,n,a){let s={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,C){const D=C.program;a.uniformBlockBinding(R,D)}function h(R,C){let D=s[R.id];D===void 0&&(b(R),D=m(R),s[R.id]=D,R.addEventListener("dispose",y));const w=C.program;a.updateUBOMapping(R,w);const P=e.render.frame;l[R.id]!==P&&(v(R),l[R.id]=P)}function m(R){const C=g();R.__bindingPointIndex=C;const D=r.createBuffer(),w=R.__size,P=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,w,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,D),D}function g(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const C=s[R.id],D=R.uniforms,w=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let P=0,O=D.length;P<O;P++){const B=Array.isArray(D[P])?D[P]:[D[P]];for(let T=0,L=B.length;T<L;T++){const G=B[T];if(S(G,P,T,w)===!0){const Z=G.__offset,Y=Array.isArray(G.value)?G.value:[G.value];let se=0;for(let ne=0;ne<Y.length;ne++){const F=Y[ne],H=M(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Z+se,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,se),se+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(R,C,D,w){const P=R.value,O=C+"_"+D;if(w[O]===void 0)return typeof P=="number"||typeof P=="boolean"?w[O]=P:w[O]=P.clone(),!0;{const B=w[O];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return w[O]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function b(R){const C=R.uniforms;let D=0;const w=16;for(let O=0,B=C.length;O<B;O++){const T=Array.isArray(C[O])?C[O]:[C[O]];for(let L=0,G=T.length;L<G;L++){const Z=T[L],Y=Array.isArray(Z.value)?Z.value:[Z.value];for(let se=0,ne=Y.length;se<ne;se++){const F=Y[se],H=M(F),J=D%w,ye=J%H.boundary,xe=J+ye;D+=ye,xe!==0&&w-xe<H.storage&&(D+=w-xe),Z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=H.storage}}}const P=D%w;return P>0&&(D+=w-P),R.__size=D,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",R),C}function y(R){const C=R.target;C.removeEventListener("dispose",y);const D=c.indexOf(C.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function x(){for(const R in s)r.deleteBuffer(s[R]);c=[],s={},l={}}return{bind:d,update:h,dispose:x}}const _U=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function gU(){return ha===null&&(ha=new dC(_U,16,16,tl,sr),ha.name="DFG_LUT",ha.minFilter=jn,ha.magFilter=jn,ha.wrapS=Ja,ha.wrapT=Ja,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class vU{constructor(e={}){const{canvas:n=BR(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Xi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const M=S,y=new Set([F_,P_,O_]),x=new Set([Xi,ba,Au,Ru,L_,N_]),R=new Uint32Array(4),C=new Int32Array(4);let D=null,w=null;const P=[],O=[];let B=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=Vi;let G=0,Z=0,Y=null,se=-1,ne=null;const F=new mn,H=new mn;let J=null;const ye=new jt(0);let xe=0,z=n.width,te=n.height,me=1,Ee=null,Ue=null;const ie=new mn(0,0,z,te),he=new mn(0,0,z,te);let Re=!1;const Pe=new HM;let Be=!1,it=!1;const Te=new En,Le=new ue,ke=new mn,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function _t(){return Y===null?me:1}let k=a;function St(N,K){return n.getContext(N,K)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${D_}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",Ut,!1),k===null){const K="webgl2";if(k=St(K,N),k===null)throw St(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Pt("WebGLRenderer: "+N.message),N}let ct,wt,qe,I,A,j,_e,Me,de,$e,Ne,Ze,lt,Ae,Ce,Xe,Ge,Oe,gt,q,ze,we,Ve,be;function Se(){ct=new gw(k),ct.init(),we=new lU(k,ct),wt=new lw(k,ct,e,we),qe=new sU(k,ct),wt.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),I=new yw(k),A=new WD,j=new oU(k,ct,qe,A,wt,we,I),_e=new cw(T),Me=new _w(T),de=new bC(k),Ve=new sw(k,de),$e=new vw(k,de,I,Ve),Ne=new Mw(k,$e,de,I),gt=new Sw(k,wt,j),Xe=new uw(A),Ze=new XD(T,_e,Me,ct,wt,Ve,Xe),lt=new pU(T,A),Ae=new YD,Ce=new $D(ct),Oe=new rw(T,_e,Me,qe,Ne,b,d),Ge=new aU(T,Ne,wt),be=new mU(k,I,wt,qe),q=new ow(k,ct,I),ze=new xw(k,ct,I),I.programs=Ze.programs,T.capabilities=wt,T.extensions=ct,T.properties=A,T.renderLists=Ae,T.shadowMap=Ge,T.state=qe,T.info=I}Se(),M!==Xi&&(B=new bw(M,n.width,n.height,s,l));const De=new hU(T,k);this.xr=De,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=ct.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ct.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(N){N!==void 0&&(me=N,this.setSize(z,te,!1))},this.getSize=function(N){return N.set(z,te)},this.setSize=function(N,K,ce=!0){if(De.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=N,te=K,n.width=Math.floor(N*me),n.height=Math.floor(K*me),ce===!0&&(n.style.width=N+"px",n.style.height=K+"px"),B!==null&&B.setSize(n.width,n.height),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(z*me,te*me).floor()},this.setDrawingBufferSize=function(N,K,ce){z=N,te=K,me=ce,n.width=Math.floor(N*ce),n.height=Math.floor(K*ce),this.setViewport(0,0,N,K)},this.setEffects=function(N){if(M===Xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let K=0;K<N.length;K++)if(N[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,K,ce,oe){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,K,ce,oe),qe.viewport(F.copy(ie).multiplyScalar(me).round())},this.getScissor=function(N){return N.copy(he)},this.setScissor=function(N,K,ce,oe){N.isVector4?he.set(N.x,N.y,N.z,N.w):he.set(N,K,ce,oe),qe.scissor(H.copy(he).multiplyScalar(me).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(N){qe.setScissorTest(Re=N)},this.setOpaqueSort=function(N){Ee=N},this.setTransparentSort=function(N){Ue=N},this.getClearColor=function(N){return N.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(N=!0,K=!0,ce=!0){let oe=0;if(N){let ee=!1;if(Y!==null){const Fe=Y.texture.format;ee=y.has(Fe)}if(ee){const Fe=Y.texture.type,We=x.has(Fe),Ie=Oe.getClearColor(),Ye=Oe.getClearAlpha(),Ke=Ie.r,at=Ie.g,Qe=Ie.b;We?(R[0]=Ke,R[1]=at,R[2]=Qe,R[3]=Ye,k.clearBufferuiv(k.COLOR,0,R)):(C[0]=Ke,C[1]=at,C[2]=Qe,C[3]=Ye,k.clearBufferiv(k.COLOR,0,C))}else oe|=k.COLOR_BUFFER_BIT}K&&(oe|=k.DEPTH_BUFFER_BIT),ce&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",Ut,!1),Oe.dispose(),Ae.dispose(),Ce.dispose(),A.dispose(),_e.dispose(),Me.dispose(),Ne.dispose(),Ve.dispose(),be.dispose(),Ze.dispose(),De.dispose(),De.removeEventListener("sessionstart",ks),De.removeEventListener("sessionend",cl),oa.stop()};function ft(N){N.preventDefault(),ly("WebGLRenderer: Context Lost."),L=!0}function Ht(){ly("WebGLRenderer: Context Restored."),L=!1;const N=I.autoReset,K=Ge.enabled,ce=Ge.autoUpdate,oe=Ge.needsUpdate,ee=Ge.type;Se(),I.autoReset=N,Ge.enabled=K,Ge.autoUpdate=ce,Ge.needsUpdate=oe,Ge.type=ee}function Ut(N){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function kn(N){const K=N.target;K.removeEventListener("dispose",kn),ji(K)}function ji(N){Bu(N),A.remove(N)}function Bu(N){const K=A.get(N).programs;K!==void 0&&(K.forEach(function(ce){Ze.releaseProgram(ce)}),N.isShaderMaterial&&Ze.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,ce,oe,ee,Fe){K===null&&(K=rt);const We=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=ns(N,K,ce,oe,ee);qe.setMaterial(oe,We);let Ye=ce.index,Ke=1;if(oe.wireframe===!0){if(Ye=$e.getWireframeAttribute(ce),Ye===void 0)return;Ke=2}const at=ce.drawRange,Qe=ce.attributes.position;let st=at.start*Ke,Ft=(at.start+at.count)*Ke;Fe!==null&&(st=Math.max(st,Fe.start*Ke),Ft=Math.min(Ft,(Fe.start+Fe.count)*Ke)),Ye!==null?(st=Math.max(st,0),Ft=Math.min(Ft,Ye.count)):Qe!=null&&(st=Math.max(st,0),Ft=Math.min(Ft,Qe.count));const tn=Ft-st;if(tn<0||tn===1/0)return;Ve.setup(ee,oe,Ie,ce,Ye);let Jt,Bt=q;if(Ye!==null&&(Jt=de.get(Ye),Bt=ze,Bt.setIndex(Jt)),ee.isMesh)oe.wireframe===!0?(qe.setLineWidth(oe.wireframeLinewidth*_t()),Bt.setMode(k.LINES)):Bt.setMode(k.TRIANGLES);else if(ee.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),qe.setLineWidth(tt*_t()),ee.isLineSegments?Bt.setMode(k.LINES):ee.isLineLoop?Bt.setMode(k.LINE_LOOP):Bt.setMode(k.LINE_STRIP)}else ee.isPoints?Bt.setMode(k.POINTS):ee.isSprite&&Bt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,zt=ee._multiDrawCounts,ht=ee._multiDrawCount,Ln=Ye?de.get(Ye).bytesPerElement:1,Aa=A.get(oe).currentProgram.getUniforms();for(let Nn=0;Nn<ht;Nn++)Aa.setValue(k,"_gl_DrawID",Nn),Bt.render(tt[Nn]/Ln,zt[Nn])}else if(ee.isInstancedMesh)Bt.renderInstances(st,tn,ee.count);else if(ce.isInstancedBufferGeometry){const tt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,zt=Math.min(ce.instanceCount,tt);Bt.renderInstances(st,tn,zt)}else Bt.render(st,tn)};function ll(N,K,ce){N.transparent===!0&&N.side===Qa&&N.forceSinglePass===!1?(N.side=fi,N.needsUpdate=!0,Ws(N,K,ce),N.side=es,N.needsUpdate=!0,Ws(N,K,ce),N.side=Qa):Ws(N,K,ce)}this.compile=function(N,K,ce=null){ce===null&&(ce=N),w=Ce.get(ce),w.init(K),O.push(w),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),N!==ce&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),w.setupLights();const oe=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const Ie=Fe[We];ll(Ie,ce,ee),oe.add(Ie)}else ll(Fe,ce,ee),oe.add(Fe)}),w=O.pop(),oe},this.compileAsync=function(N,K,ce=null){const oe=this.compile(N,K,ce);return new Promise(ee=>{function Fe(){if(oe.forEach(function(We){A.get(We).currentProgram.isReady()&&oe.delete(We)}),oe.size===0){ee(N);return}setTimeout(Fe,10)}ct.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Vs=null;function ul(N){Vs&&Vs(N)}function ks(){oa.stop()}function cl(){oa.start()}const oa=new VM;oa.setAnimationLoop(ul),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(N){Vs=N,De.setAnimationLoop(N),N===null?oa.stop():oa.start()},De.addEventListener("sessionstart",ks),De.addEventListener("sessionend",cl),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ce=De.enabled===!0&&De.isPresenting===!0,oe=B!==null&&(Y===null||ce)&&B.begin(T,Y);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,K,Y),w=Ce.get(N,O.length),w.init(K),O.push(w),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Pe.setFromProjectionMatrix(Te,va,K.reversedDepth),it=this.localClippingEnabled,Be=Xe.init(this.clippingPlanes,it),D=Ae.get(N,P.length),D.init(),P.push(D),De.enabled===!0&&De.isPresenting===!0){const We=T.xr.getDepthSensingMesh();We!==null&&Di(We,K,-1/0,T.sortObjects)}Di(N,K,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(Ee,Ue),et=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,et&&Oe.addToRenderList(D,N),this.info.render.frame++,Be===!0&&Xe.beginShadows();const ee=w.state.shadowsArray;if(Ge.render(ee,N,K),Be===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&B.hasRenderPass())===!1){const We=D.opaque,Ie=D.transmissive;if(w.setupLights(),K.isArrayCamera){const Ye=K.cameras;if(Ie.length>0)for(let Ke=0,at=Ye.length;Ke<at;Ke++){const Qe=Ye[Ke];Un(We,Ie,N,Qe)}et&&Oe.render(N);for(let Ke=0,at=Ye.length;Ke<at;Ke++){const Qe=Ye[Ke];_n(D,N,Qe,Qe.viewport)}}else Ie.length>0&&Un(We,Ie,N,K),et&&Oe.render(N),_n(D,N,K)}Y!==null&&Z===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),oe&&B.end(T),N.isScene===!0&&N.onAfterRender(T,N,K),Ve.resetDefaultState(),se=-1,ne=null,O.pop(),O.length>0?(w=O[O.length-1],Be===!0&&Xe.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function Di(N,K,ce,oe){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)w.pushLight(N),N.castShadow&&w.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Pe.intersectsSprite(N)){oe&&ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Te);const We=Ne.update(N),Ie=N.material;Ie.visible&&D.push(N,We,Ie,ce,ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Pe.intersectsObject(N))){const We=Ne.update(N),Ie=N.material;if(oe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ke.copy(N.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ke.copy(We.boundingSphere.center)),ke.applyMatrix4(N.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Ye=We.groups;for(let Ke=0,at=Ye.length;Ke<at;Ke++){const Qe=Ye[Ke],st=Ie[Qe.materialIndex];st&&st.visible&&D.push(N,We,st,ce,ke.z,Qe)}}else Ie.visible&&D.push(N,We,Ie,ce,ke.z,null)}}const Fe=N.children;for(let We=0,Ie=Fe.length;We<Ie;We++)Di(Fe[We],K,ce,oe)}function _n(N,K,ce,oe){const{opaque:ee,transmissive:Fe,transparent:We}=N;w.setupLightsView(ce),Be===!0&&Xe.setGlobalState(T.clippingPlanes,ce),oe&&qe.viewport(F.copy(oe)),ee.length>0&&Zi(ee,K,ce),Fe.length>0&&Zi(Fe,K,ce),We.length>0&&Zi(We,K,ce),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Un(N,K,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[oe.id]===void 0){const st=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[oe.id]=new ya(1,1,{generateMipmaps:!0,type:st?sr:Xi,minFilter:Ns,samples:wt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Fe=w.state.transmissionRenderTarget[oe.id],We=oe.viewport||F;Fe.setSize(We.z*T.transmissionResolutionScale,We.w*T.transmissionResolutionScale);const Ie=T.getRenderTarget(),Ye=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(Fe),T.getClearColor(ye),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),et&&Oe.render(ce);const at=T.toneMapping;T.toneMapping=xa;const Qe=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),w.setupLightsView(oe),Be===!0&&Xe.setGlobalState(T.clippingPlanes,oe),Zi(N,ce,oe),j.updateMultisampleRenderTarget(Fe),j.updateRenderTargetMipmap(Fe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ft=0,tn=K.length;Ft<tn;Ft++){const Jt=K[Ft],{object:Bt,geometry:tt,material:zt,group:ht}=Jt;if(zt.side===Qa&&Bt.layers.test(oe.layers)){const Ln=zt.side;zt.side=fi,zt.needsUpdate=!0,Xs(Bt,ce,oe,tt,zt,ht),zt.side=Ln,zt.needsUpdate=!0,st=!0}}st===!0&&(j.updateMultisampleRenderTarget(Fe),j.updateRenderTargetMipmap(Fe))}T.setRenderTarget(Ie,Ye,Ke),T.setClearColor(ye,xe),Qe!==void 0&&(oe.viewport=Qe),T.toneMapping=at}function Zi(N,K,ce){const oe=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Fe=N.length;ee<Fe;ee++){const We=N[ee],{object:Ie,geometry:Ye,group:Ke}=We;let at=We.material;at.allowOverride===!0&&oe!==null&&(at=oe),Ie.layers.test(ce.layers)&&Xs(Ie,K,ce,Ye,at,Ke)}}function Xs(N,K,ce,oe,ee,Fe){N.onBeforeRender(T,K,ce,oe,ee,Fe),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(T,K,ce,oe,N,Fe),ee.transparent===!0&&ee.side===Qa&&ee.forceSinglePass===!1?(ee.side=fi,ee.needsUpdate=!0,T.renderBufferDirect(ce,K,oe,ee,N,Fe),ee.side=es,ee.needsUpdate=!0,T.renderBufferDirect(ce,K,oe,ee,N,Fe),ee.side=Qa):T.renderBufferDirect(ce,K,oe,ee,N,Fe),N.onAfterRender(T,K,ce,oe,ee,Fe)}function Ws(N,K,ce){K.isScene!==!0&&(K=rt);const oe=A.get(N),ee=w.state.lights,Fe=w.state.shadowsArray,We=ee.state.version,Ie=Ze.getParameters(N,ee.state,Fe,K,ce),Ye=Ze.getProgramCacheKey(Ie);let Ke=oe.programs;oe.environment=N.isMeshStandardMaterial?K.environment:null,oe.fog=K.fog,oe.envMap=(N.isMeshStandardMaterial?Me:_e).get(N.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,Ke===void 0&&(N.addEventListener("dispose",kn),Ke=new Map,oe.programs=Ke);let at=Ke.get(Ye);if(at!==void 0){if(oe.currentProgram===at&&oe.lightsStateVersion===We)return fl(N,Ie),at}else Ie.uniforms=Ze.getUniforms(N),N.onBeforeCompile(Ie,T),at=Ze.acquireProgram(Ie,Ye),Ke.set(Ye,at),oe.uniforms=Ie.uniforms;const Qe=oe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qe.clippingPlanes=Xe.uniform),fl(N,Ie),oe.needsLights=fr(N),oe.lightsStateVersion=We,oe.needsLights&&(Qe.ambientLightColor.value=ee.state.ambient,Qe.lightProbe.value=ee.state.probe,Qe.directionalLights.value=ee.state.directional,Qe.directionalLightShadows.value=ee.state.directionalShadow,Qe.spotLights.value=ee.state.spot,Qe.spotLightShadows.value=ee.state.spotShadow,Qe.rectAreaLights.value=ee.state.rectArea,Qe.ltc_1.value=ee.state.rectAreaLTC1,Qe.ltc_2.value=ee.state.rectAreaLTC2,Qe.pointLights.value=ee.state.point,Qe.pointLightShadows.value=ee.state.pointShadow,Qe.hemisphereLights.value=ee.state.hemi,Qe.directionalShadowMap.value=ee.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Qe.spotShadowMap.value=ee.state.spotShadowMap,Qe.spotLightMatrix.value=ee.state.spotLightMatrix,Qe.spotLightMap.value=ee.state.spotLightMap,Qe.pointShadowMap.value=ee.state.pointShadowMap,Qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=at,oe.uniformsList=null,at}function Hu(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=Df.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function fl(N,K){const ce=A.get(N);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function ns(N,K,ce,oe,ee){K.isScene!==!0&&(K=rt),j.resetTextureUnits();const Fe=K.fog,We=oe.isMeshStandardMaterial?K.environment:null,Ie=Y===null?T.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:nl,Ye=(oe.isMeshStandardMaterial?Me:_e).get(oe.envMap||We),Ke=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,at=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!ce.morphAttributes.position,st=!!ce.morphAttributes.normal,Ft=!!ce.morphAttributes.color;let tn=xa;oe.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(tn=T.toneMapping);const Jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=Jt!==void 0?Jt.length:0,tt=A.get(oe),zt=w.state.lights;if(Be===!0&&(it===!0||N!==ne)){const Pn=N===ne&&oe.id===se;Xe.setState(oe,N,Pn)}let ht=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==zt.state.version||tt.outputColorSpace!==Ie||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==Ye||oe.fog===!0&&tt.fog!==Fe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Xe.numPlanes||tt.numIntersection!==Xe.numIntersection)||tt.vertexAlphas!==Ke||tt.vertexTangents!==at||tt.morphTargets!==Qe||tt.morphNormals!==st||tt.morphColors!==Ft||tt.toneMapping!==tn||tt.morphTargetsCount!==Bt)&&(ht=!0):(ht=!0,tt.__version=oe.version);let Ln=tt.currentProgram;ht===!0&&(Ln=Ws(oe,K,ee));let Aa=!1,Nn=!1,Ui=!1;const Gt=Ln.getUniforms(),On=tt.uniforms;if(qe.useProgram(Ln.program)&&(Aa=!0,Nn=!0,Ui=!0),oe.id!==se&&(se=oe.id,Nn=!0),Aa||ne!==N){qe.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Gt.setValue(k,"projectionMatrix",N.projectionMatrix),Gt.setValue(k,"viewMatrix",N.matrixWorldInverse);const Fn=Gt.map.cameraPosition;Fn!==void 0&&Fn.setValue(k,Le.setFromMatrixPosition(N.matrixWorld)),wt.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),ne!==N&&(ne=N,Nn=!0,Ui=!0)}if(tt.needsLights&&(zt.state.directionalShadowMap.length>0&&Gt.setValue(k,"directionalShadowMap",zt.state.directionalShadowMap,j),zt.state.spotShadowMap.length>0&&Gt.setValue(k,"spotShadowMap",zt.state.spotShadowMap,j),zt.state.pointShadowMap.length>0&&Gt.setValue(k,"pointShadowMap",zt.state.pointShadowMap,j)),ee.isSkinnedMesh){Gt.setOptional(k,ee,"bindMatrix"),Gt.setOptional(k,ee,"bindMatrixInverse");const Pn=ee.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Gt.setValue(k,"boneTexture",Pn.boneTexture,j))}ee.isBatchedMesh&&(Gt.setOptional(k,ee,"batchingTexture"),Gt.setValue(k,"batchingTexture",ee._matricesTexture,j),Gt.setOptional(k,ee,"batchingIdTexture"),Gt.setValue(k,"batchingIdTexture",ee._indirectTexture,j),Gt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Gt.setValue(k,"batchingColorTexture",ee._colorsTexture,j));const bn=ce.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&gt.update(ee,ce,Ln),(Nn||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Gt.setValue(k,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(On.envMap.value=Ye,On.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&K.environment!==null&&(On.envMapIntensity.value=K.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=gU()),Nn&&(Gt.setValue(k,"toneMappingExposure",T.toneMappingExposure),tt.needsLights&&hl(On,Ui),Fe&&oe.fog===!0&&lt.refreshFogUniforms(On,Fe),lt.refreshMaterialUniforms(On,oe,me,te,w.state.transmissionRenderTarget[N.id]),Df.upload(k,Hu(tt),On,j)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Df.upload(k,Hu(tt),On,j),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(k,"center",ee.center),Gt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),Gt.setValue(k,"normalMatrix",ee.normalMatrix),Gt.setValue(k,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Pn=oe.uniformsGroups;for(let Fn=0,qs=Pn.length;Fn<qs;Fn++){const Ki=Pn[Fn];be.update(Ki,Ln),be.bind(Ki,Ln)}}return Ln}function hl(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function fr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(N,K,ce){const oe=A.get(N);oe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),A.get(N.texture).__webglTexture=K,A.get(N.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,K){const ce=A.get(N);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const hr=k.createFramebuffer();this.setRenderTarget=function(N,K=0,ce=0){Y=N,G=K,Z=ce;let oe=null,ee=!1,Fe=!1;if(N){const Ie=A.get(N);if(Ie.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(k.FRAMEBUFFER,Ie.__webglFramebuffer),F.copy(N.viewport),H.copy(N.scissor),J=N.scissorTest,qe.viewport(F),qe.scissor(H),qe.setScissorTest(J),se=-1;return}else if(Ie.__webglFramebuffer===void 0)j.setupRenderTarget(N);else if(Ie.__hasExternalTextures)j.rebindTextures(N,A.get(N.texture).__webglTexture,A.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const at=N.depthTexture;if(Ie.__boundDepthTexture!==at){if(at!==null&&A.has(at)&&(N.width!==at.image.width||N.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(N)}}const Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const Ke=A.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ke[K])?oe=Ke[K][ce]:oe=Ke[K],ee=!0):N.samples>0&&j.useMultisampledRTT(N)===!1?oe=A.get(N).__webglMultisampledFramebuffer:Array.isArray(Ke)?oe=Ke[ce]:oe=Ke,F.copy(N.viewport),H.copy(N.scissor),J=N.scissorTest}else F.copy(ie).multiplyScalar(me).floor(),H.copy(he).multiplyScalar(me).floor(),J=Re;if(ce!==0&&(oe=hr),qe.bindFramebuffer(k.FRAMEBUFFER,oe)&&qe.drawBuffers(N,oe),qe.viewport(F),qe.scissor(H),qe.setScissorTest(J),ee){const Ie=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ie.__webglTexture,ce)}else if(Fe){const Ie=K;for(let Ye=0;Ye<N.textures.length;Ye++){const Ke=A.get(N.textures[Ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,ce,Ie)}}else if(N!==null&&ce!==0){const Ie=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,ce)}se=-1},this.readRenderTargetPixels=function(N,K,ce,oe,ee,Fe,We,Ie=0){if(!(N&&N.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){qe.bindFramebuffer(k.FRAMEBUFFER,Ye);try{const Ke=N.textures[Ie],at=Ke.format,Qe=Ke.type;if(!wt.textureFormatReadable(at)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Qe)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-oe&&ce>=0&&ce<=N.height-ee&&(N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),k.readPixels(K,ce,oe,ee,we.convert(at),we.convert(Qe),Fe))}finally{const Ke=Y!==null?A.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(N,K,ce,oe,ee,Fe,We,Ie=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye)if(K>=0&&K<=N.width-oe&&ce>=0&&ce<=N.height-ee){qe.bindFramebuffer(k.FRAMEBUFFER,Ye);const Ke=N.textures[Ie],at=Ke.format,Qe=Ke.type;if(!wt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.bufferData(k.PIXEL_PACK_BUFFER,Fe.byteLength,k.STREAM_READ),N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),k.readPixels(K,ce,oe,ee,we.convert(at),we.convert(Qe),0);const Ft=Y!==null?A.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ft);const tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await HR(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Fe),k.deleteBuffer(st),k.deleteSync(tn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,K=null,ce=0){const oe=Math.pow(2,-ce),ee=Math.floor(N.image.width*oe),Fe=Math.floor(N.image.height*oe),We=K!==null?K.x:0,Ie=K!==null?K.y:0;j.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,We,Ie,ee,Fe),qe.unbindTexture()};const is=k.createFramebuffer(),dr=k.createFramebuffer();this.copyTextureToTexture=function(N,K,ce=null,oe=null,ee=0,Fe=null){Fe===null&&(ee!==0?(Cu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=ee,ee=0):Fe=0);let We,Ie,Ye,Ke,at,Qe,st,Ft,tn;const Jt=N.isCompressedTexture?N.mipmaps[Fe]:N.image;if(ce!==null)We=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,Ke=ce.min.x,at=ce.min.y,Qe=ce.isBox3?ce.min.z:0;else{const bn=Math.pow(2,-ee);We=Math.floor(Jt.width*bn),Ie=Math.floor(Jt.height*bn),N.isDataArrayTexture?Ye=Jt.depth:N.isData3DTexture?Ye=Math.floor(Jt.depth*bn):Ye=1,Ke=0,at=0,Qe=0}oe!==null?(st=oe.x,Ft=oe.y,tn=oe.z):(st=0,Ft=0,tn=0);const Bt=we.convert(K.format),tt=we.convert(K.type);let zt;K.isData3DTexture?(j.setTexture3D(K,0),zt=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),zt=k.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const ht=k.getParameter(k.UNPACK_ROW_LENGTH),Ln=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Aa=k.getParameter(k.UNPACK_SKIP_PIXELS),Nn=k.getParameter(k.UNPACK_SKIP_ROWS),Ui=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Gt=N.isDataArrayTexture||N.isData3DTexture,On=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const bn=A.get(N),Pn=A.get(K),Fn=A.get(bn.__renderTarget),qs=A.get(Pn.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,Fn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let Ki=0;Ki<Ye;Ki++)Gt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(N).__webglTexture,ee,Qe+Ki),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(K).__webglTexture,Fe,tn+Ki)),k.blitFramebuffer(Ke,at,We,Ie,st,Ft,We,Ie,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||A.has(N)){const bn=A.get(N),Pn=A.get(K);qe.bindFramebuffer(k.READ_FRAMEBUFFER,is),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,dr);for(let Fn=0;Fn<Ye;Fn++)Gt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bn.__webglTexture,ee,Qe+Fn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bn.__webglTexture,ee),On?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pn.__webglTexture,Fe,tn+Fn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pn.__webglTexture,Fe),ee!==0?k.blitFramebuffer(Ke,at,We,Ie,st,Ft,We,Ie,k.COLOR_BUFFER_BIT,k.NEAREST):On?k.copyTexSubImage3D(zt,Fe,st,Ft,tn+Fn,Ke,at,We,Ie):k.copyTexSubImage2D(zt,Fe,st,Ft,Ke,at,We,Ie);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else On?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(zt,Fe,st,Ft,tn,We,Ie,Ye,Bt,tt,Jt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,Fe,st,Ft,tn,We,Ie,Ye,Bt,Jt.data):k.texSubImage3D(zt,Fe,st,Ft,tn,We,Ie,Ye,Bt,tt,Jt):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Fe,st,Ft,We,Ie,Bt,tt,Jt.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Fe,st,Ft,Jt.width,Jt.height,Bt,Jt.data):k.texSubImage2D(k.TEXTURE_2D,Fe,st,Ft,We,Ie,Bt,tt,Jt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ht),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ln),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Aa),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ui),Fe===0&&K.generateMipmaps&&k.generateMipmap(zt),qe.unbindTexture()},this.initRenderTarget=function(N){A.get(N).__webglFramebuffer===void 0&&j.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?j.setTextureCube(N,0):N.isData3DTexture?j.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?j.setTexture2DArray(N,0):j.setTexture2D(N,0),qe.unbindTexture()},this.resetState=function(){G=0,Z=0,Y=null,qe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}const xU=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yU=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,Zy=8;function SU(r){let e=r.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,a=255,s=255;return e.length===3?(n=parseInt(e[0]+e[0],16),a=parseInt(e[1]+e[1],16),s=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),a=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16)),new ue(n/255,a/255,s/255)}function MU({linesGradient:r,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:a=[5],topWavePosition:s,middleWavePosition:l,bottomWavePosition:c={x:2,y:-.7,rotate:-1},animationSpeed:f=1,interactive:d=!0,bendRadius:h=5,bendStrength:m=-.5,mouseDamping:g=.05,parallax:v=!0,parallaxStrength:S=.2,mixBlendMode:b="screen"}){const M=$.useRef(null),y=$.useRef(new Dt(-1e3,-1e3)),x=$.useRef(new Dt(-1e3,-1e3)),R=$.useRef(0),C=$.useRef(0),D=$.useRef(new Dt(0,0)),w=$.useRef(new Dt(0,0)),P=se=>{if(typeof n=="number")return n;if(!e.includes(se))return 0;const ne=e.indexOf(se);return n[ne]??6},O=se=>{if(typeof a=="number")return a;if(!e.includes(se))return .1;const ne=e.indexOf(se);return a[ne]??.1},B=e.includes("top")?P("top"):0,T=e.includes("middle")?P("middle"):0,L=e.includes("bottom")?P("bottom"):0,G=e.includes("top")?O("top")*.01:.01,Z=e.includes("middle")?O("middle")*.01:.01,Y=e.includes("bottom")?O("bottom")*.01:.01;return $.useEffect(()=>{if(!M.current)return;const se=new hC,ne=new G_(-1,1,1,-1,0,1);ne.position.z=1;const F=new vU({antialias:!0,alpha:!1});F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),F.domElement.style.width="100%",F.domElement.style.height="100%",M.current.appendChild(F.domElement);const H={iTime:{value:0},iResolution:{value:new ue(1,1,1)},animationSpeed:{value:f},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:B},middleLineCount:{value:T},bottomLineCount:{value:L},topLineDistance:{value:G},middleLineDistance:{value:Z},bottomLineDistance:{value:Y},topWavePosition:{value:new ue(s?.x??10,s?.y??.5,s?.rotate??-.4)},middleWavePosition:{value:new ue(l?.x??5,l?.y??0,l?.rotate??.2)},bottomWavePosition:{value:new ue(c?.x??2,c?.y??-.7,c?.rotate??.4)},iMouse:{value:new Dt(-1e3,-1e3)},interactive:{value:d},bendRadius:{value:h},bendStrength:{value:m},bendInfluence:{value:0},parallax:{value:v},parallaxStrength:{value:S},parallaxOffset:{value:new Dt(0,0)},lineGradient:{value:Array.from({length:Zy},()=>new ue(1,1,1))},lineGradientCount:{value:0}};if(r&&r.length>0){const Re=r.slice(0,Zy);H.lineGradientCount.value=Re.length,Re.forEach((Pe,Be)=>{const it=SU(Pe);H.lineGradient.value[Be].set(it.x,it.y,it.z)})}const J=new sa({uniforms:H,vertexShader:xU,fragmentShader:yU}),ye=new Iu(2,2),xe=new Ta(ye,J);se.add(xe);const z=new MC,te=()=>{const Re=M.current,Pe=Re.clientWidth||1,Be=Re.clientHeight||1;F.setSize(Pe,Be,!1);const it=F.domElement.width,Te=F.domElement.height;H.iResolution.value.set(it,Te,1)};te();const me=typeof ResizeObserver<"u"?new ResizeObserver(te):null;me&&M.current&&me.observe(M.current);const Ee=Re=>{const Pe=F.domElement.getBoundingClientRect(),Be=Re.clientX-Pe.left,it=Re.clientY-Pe.top,Te=F.getPixelRatio();if(y.current.set(Be*Te,(Pe.height-it)*Te),R.current=1,v){const Le=Pe.width/2,ke=Pe.height/2,rt=(Be-Le)/Pe.width,et=-(it-ke)/Pe.height;D.current.set(rt*S,et*S)}},Ue=()=>{R.current=0};d&&(F.domElement.addEventListener("pointermove",Ee),F.domElement.addEventListener("pointerleave",Ue));let ie=0;const he=()=>{H.iTime.value=z.getElapsedTime(),d&&(x.current.lerp(y.current,g),H.iMouse.value.copy(x.current),C.current+=(R.current-C.current)*g,H.bendInfluence.value=C.current),v&&(w.current.lerp(D.current,g),H.parallaxOffset.value.copy(w.current)),F.render(se,ne),ie=requestAnimationFrame(he)};return he(),()=>{cancelAnimationFrame(ie),me&&M.current&&me.disconnect(),d&&(F.domElement.removeEventListener("pointermove",Ee),F.domElement.removeEventListener("pointerleave",Ue)),ye.dispose(),J.dispose(),F.dispose(),F.domElement.parentElement&&F.domElement.parentElement.removeChild(F.domElement)}},[r,e,n,a,s,l,c,f,d,h,m,g,v,S]),W.jsx("div",{ref:M,className:"floating-lines-container",style:{mixBlendMode:b}})}function EU(){return W.jsxs("div",{className:"home-root",children:[W.jsx("div",{className:"home-background","aria-hidden":"true",children:W.jsx(MU,{linesGradient:["#6C63FF","#1C77C3","#4DFFF3"],enabledWaves:["top","middle","bottom"],lineCount:[6,5,6],lineDistance:[6,4,8],parallax:!0,parallaxStrength:.18,animationSpeed:1,mixBlendMode:"screen"})}),W.jsx("section",{className:"home-hero-top","aria-hidden":"false",children:W.jsxs("div",{className:"hero-top-inner",children:[W.jsx("h2",{className:"hero-top-title",children:"STEMFLOW Community Hub"}),W.jsx("p",{className:"hero-top-sub",children:"Build, learn, and share with hands-on projects and community mentorship."}),W.jsxs("div",{className:"hero-top-ctas",children:[W.jsx(ki,{to:"/projects",className:"btn primary",children:"Explore Projects"}),W.jsx(ki,{to:"/resources",className:"btn ghost",children:"Browse Resources"})]})]})}),W.jsx("header",{className:"home-main",children:W.jsxs("div",{className:"hero-grid",children:[W.jsxs("div",{className:"hero-content",children:[W.jsxs("h1",{className:"hero-title reveal",children:["Build, Learn, and Share with ",W.jsx("span",{className:"accent",children:"STEMFLOW Community"})]}),W.jsx("p",{className:"hero-sub reveal delay-1",children:"Hands-on projects, curated resources, and community events designed to help learners and mentors build real skills together."}),W.jsxs("div",{className:"hero-ctas reveal delay-2",children:[W.jsx(ki,{to:"/projects",className:"btn primary",children:"Explore Projects"}),W.jsx(ki,{to:"/resources",className:"btn ghost",children:"Browse Resources"})]}),W.jsxs("div",{className:"hero-stats reveal delay-3","aria-hidden":"true",children:[W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"340+"}),W.jsx("div",{className:"stat-label",children:"Projects"})]}),W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"1.2k+"}),W.jsx("div",{className:"stat-label",children:"Members"})]}),W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"85"}),W.jsx("div",{className:"stat-label",children:"Events"})]})]})]}),W.jsx("div",{className:"hero-media","aria-hidden":"true",children:W.jsxs("div",{className:"illustration",children:[W.jsx("img",{src:Xf,alt:"",className:"hero-logo-deco"}),W.jsx("div",{className:"card",children:"Example Project"})]})})]})}),W.jsxs("section",{className:"home-features",children:[W.jsxs("div",{className:"feature",children:[W.jsx("h3",{children:"Interactive Projects"}),W.jsx("p",{children:"Browse hands-on projects contributed by the community. Learn by doing with step-by-step guides."})]}),W.jsxs("div",{className:"feature",children:[W.jsx("h3",{children:"Curated Resources"}),W.jsx("p",{children:"High-quality tutorials, articles, and learning paths for students and mentors."})]}),W.jsxs("div",{className:"feature",children:[W.jsx("h3",{children:"Community Events"}),W.jsx("p",{children:"Join workshops, hackathons, and mentorship sessions to grow your skills and network."})]})]}),W.jsxs("section",{className:"home-cta-band",children:[W.jsx("h2",{children:"Ready to contribute?"}),W.jsx("p",{children:"Create an account, submit a project, or start a discussion — everyone is welcome."}),W.jsx("div",{style:{marginTop:12},children:W.jsx(ki,{to:"/projects",className:"btn primary",children:"Get Started"})})]})]})}function bU(){return W.jsxs("div",{style:{padding:"6rem 2rem",color:"var(--light-gray)"},children:[W.jsx("h1",{children:"Projects"}),W.jsx("p",{children:"This is the Projects page."})]})}const YM=12,jM=300,Jf="132, 0, 255",TU=768,AU=[{color:"#060010",title:"Analytics",description:"Track user behavior"},{color:"#060010",title:"Dashboard",description:"Centralized data view"},{color:"#060010",title:"Collaboration",description:"Work together seamlessly"},{color:"#060010",title:"Automation",description:"Streamline workflows"},{color:"#060010",title:"Integration",description:"Connect favorite tools"},{color:"#060010",title:"Security",description:"Enterprise-grade protection"}],RU=(r,e,n=Jf)=>{const a=document.createElement("div");return a.className="particle",a.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${n}, 1);
    box-shadow: 0 0 6px rgba(${n}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${r}px;
    top: ${e}px;
  `,a},CU=r=>({proximity:r*.5,fadeDistance:r*.75}),wU=(r,e,n,a,s)=>{const l=r.getBoundingClientRect(),c=(e-l.left)/l.width*100,f=(n-l.top)/l.height*100;r.style.setProperty("--glow-x",`${c}%`),r.style.setProperty("--glow-y",`${f}%`),r.style.setProperty("--glow-intensity",a.toString()),r.style.setProperty("--glow-radius",`${s}px`)},DU=({children:r,className:e="",disableAnimations:n=!1,style:a,particleCount:s=YM,glowColor:l=Jf,enableTilt:c=!0,clickEffect:f=!1,enableMagnetism:d=!1})=>{const h=$.useRef(null),m=$.useRef([]),g=$.useRef([]),v=$.useRef(!1),S=$.useRef([]),b=$.useRef(!1),M=$.useRef(null),y=$.useCallback(()=>{if(b.current||!h.current)return;const{width:C,height:D}=h.current.getBoundingClientRect();S.current=Array.from({length:s},()=>RU(Math.random()*C,Math.random()*D,l)),b.current=!0},[s,l]),x=$.useCallback(()=>{g.current.forEach(clearTimeout),g.current=[],M.current?.kill(),m.current.forEach(C=>{ut.to(C,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{C.parentNode?.removeChild(C)}})}),m.current=[]},[]),R=$.useCallback(()=>{!h.current||!v.current||(b.current||y(),S.current.forEach((C,D)=>{const w=setTimeout(()=>{if(!v.current||!h.current)return;const P=C.cloneNode(!0);h.current.appendChild(P),m.current.push(P),ut.fromTo(P,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),ut.to(P,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),ut.to(P,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},D*100);g.current.push(w)}))},[y]);return $.useEffect(()=>{if(n||!h.current)return;const C=h.current,D=()=>{v.current=!0,R(),c&&ut.to(C,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},w=()=>{v.current=!1,x(),c&&ut.to(C,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),d&&ut.to(C,{x:0,y:0,duration:.3,ease:"power2.out"})},P=B=>{if(!c&&!d)return;const T=C.getBoundingClientRect(),L=B.clientX-T.left,G=B.clientY-T.top,Z=T.width/2,Y=T.height/2;if(c){const se=(G-Y)/Y*-10,ne=(L-Z)/Z*10;ut.to(C,{rotateX:se,rotateY:ne,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(d){const se=(L-Z)*.05,ne=(G-Y)*.05;M.current=ut.to(C,{x:se,y:ne,duration:.3,ease:"power2.out"})}},O=B=>{if(!f)return;const T=C.getBoundingClientRect(),L=B.clientX-T.left,G=B.clientY-T.top,Z=Math.max(Math.hypot(L,G),Math.hypot(L-T.width,G),Math.hypot(L,G-T.height),Math.hypot(L-T.width,G-T.height)),Y=document.createElement("div");Y.style.cssText=`
        position: absolute;
        width: ${Z*2}px;
        height: ${Z*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${l}, 0.4) 0%, rgba(${l}, 0.2) 30%, transparent 70%);
        left: ${L-Z}px;
        top: ${G-Z}px;
        pointer-events: none;
        z-index: 1000;
      `,C.appendChild(Y),ut.fromTo(Y,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>Y.remove()})};return C.addEventListener("mouseenter",D),C.addEventListener("mouseleave",w),C.addEventListener("mousemove",P),C.addEventListener("click",O),()=>{v.current=!1,C.removeEventListener("mouseenter",D),C.removeEventListener("mouseleave",w),C.removeEventListener("mousemove",P),C.removeEventListener("click",O),x()}},[R,x,n,c,d,f,l]),W.jsx("div",{ref:h,className:`${e} particle-container`,style:{...a,position:"relative",overflow:"hidden"},children:r})},UU=({gridRef:r,disableAnimations:e=!1,enabled:n=!0,spotlightRadius:a=jM,glowColor:s=Jf})=>{const l=$.useRef(null),c=$.useRef(!1);return $.useEffect(()=>{if(e||!r?.current||!n)return;const f=document.createElement("div");f.className="global-spotlight",f.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${s}, 0.15) 0%,
        rgba(${s}, 0.08) 15%,
        rgba(${s}, 0.04) 25%,
        rgba(${s}, 0.02) 40%,
        rgba(${s}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(f),l.current=f;const d=m=>{if(!l.current||!r.current)return;const v=r.current.closest(".bento-section")?.getBoundingClientRect(),S=v&&m.clientX>=v.left&&m.clientX<=v.right&&m.clientY>=v.top&&m.clientY<=v.bottom;c.current=S||!1;const b=r.current.querySelectorAll(".magic-bento-card");if(!S){ut.to(l.current,{opacity:0,duration:.3,ease:"power2.out"}),b.forEach(C=>{C.style.setProperty("--glow-intensity","0")});return}const{proximity:M,fadeDistance:y}=CU(a);let x=1/0;b.forEach(C=>{const D=C,w=D.getBoundingClientRect(),P=w.left+w.width/2,O=w.top+w.height/2,B=Math.hypot(m.clientX-P,m.clientY-O)-Math.max(w.width,w.height)/2,T=Math.max(0,B);x=Math.min(x,T);let L=0;T<=M?L=1:T<=y&&(L=(y-T)/(y-M)),wU(D,m.clientX,m.clientY,L,a)}),ut.to(l.current,{left:m.clientX,top:m.clientY,duration:.1,ease:"power2.out"});const R=x<=M?.8:x<=y?(y-x)/(y-M)*.8:0;ut.to(l.current,{opacity:R,duration:R>0?.2:.5,ease:"power2.out"})},h=()=>{c.current=!1,r.current?.querySelectorAll(".magic-bento-card").forEach(m=>{m.style.setProperty("--glow-intensity","0")}),l.current&&ut.to(l.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",d),document.addEventListener("mouseleave",h),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseleave",h),l.current?.parentNode?.removeChild(l.current)}},[r,e,n,a,s]),null},LU=({children:r,gridRef:e})=>W.jsx("div",{className:"card-grid bento-section",ref:e,children:r}),NU=()=>{const[r,e]=$.useState(!1);return $.useEffect(()=>{const n=()=>e(window.innerWidth<=TU);return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),r},OU=({textAutoHide:r=!0,enableStars:e=!0,enableSpotlight:n=!0,enableBorderGlow:a=!0,disableAnimations:s=!1,spotlightRadius:l=jM,particleCount:c=YM,enableTilt:f=!1,glowColor:d=Jf,clickEffect:h=!0,enableMagnetism:m=!0})=>{const g=$.useRef(null),v=NU(),S=s||v;return W.jsxs(W.Fragment,{children:[n&&W.jsx(UU,{gridRef:g,disableAnimations:S,enabled:n,spotlightRadius:l,glowColor:d}),W.jsx(LU,{gridRef:g,children:AU.map((b,M)=>{const x={className:`magic-bento-card ${r?"magic-bento-card--text-autohide":""} ${a?"magic-bento-card--border-glow":""}`,style:{backgroundColor:b.color,"--glow-color":d}};return e?W.jsxs(DU,{...x,disableAnimations:S,particleCount:c,glowColor:d,enableTilt:f,clickEffect:h,enableMagnetism:m,children:[W.jsx("div",{className:"magic-bento-card__header",children:W.jsx("div",{className:"magic-bento-card__label",children:b.label})}),W.jsxs("div",{className:"magic-bento-card__content",children:[W.jsx("h2",{className:"magic-bento-card__title",children:b.title}),W.jsx("p",{className:"magic-bento-card__description",children:b.description})]})]},M):W.jsxs("div",{...x,ref:R=>{if(!R)return;const C=P=>{if(S)return;const O=R.getBoundingClientRect(),B=P.clientX-O.left,T=P.clientY-O.top,L=O.width/2,G=O.height/2;if(f){const Z=(T-G)/G*-10,Y=(B-L)/L*10;ut.to(R,{rotateX:Z,rotateY:Y,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(m){const Z=(B-L)*.05,Y=(T-G)*.05;ut.to(R,{x:Z,y:Y,duration:.3,ease:"power2.out"})}},D=()=>{S||(f&&ut.to(R,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),m&&ut.to(R,{x:0,y:0,duration:.3,ease:"power2.out"}))},w=P=>{if(!h||S)return;const O=R.getBoundingClientRect(),B=P.clientX-O.left,T=P.clientY-O.top,L=Math.max(Math.hypot(B,T),Math.hypot(B-O.width,T),Math.hypot(B,T-O.height),Math.hypot(B-O.width,T-O.height)),G=document.createElement("div");G.style.cssText=`
                    position: absolute;
                    width: ${L*2}px;
                    height: ${L*2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${d}, 0.4) 0%, rgba(${d}, 0.2) 30%, transparent 70%);
                    left: ${B-L}px;
                    top: ${T-L}px;
                    pointer-events: none;
                    z-index: 1000;
                  `,R.appendChild(G),ut.fromTo(G,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>G.remove()})};R.addEventListener("mousemove",C),R.addEventListener("mouseleave",D),R.addEventListener("click",w)},children:[W.jsx("div",{className:"magic-bento-card__header",children:W.jsx("div",{className:"magic-bento-card__label",children:b.label})}),W.jsxs("div",{className:"magic-bento-card__content",children:[W.jsx("h2",{className:"magic-bento-card__title",children:b.title}),W.jsx("p",{className:"magic-bento-card__description",children:b.description})]})]},M)})})]})};function PU(){return W.jsx("div",{className:"blog-root",children:W.jsx("div",{className:"blog-center",children:W.jsx(OU,{textAutoHide:!0,enableStars:!1,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,enableMagnetism:!1,clickEffect:!0,spotlightRadius:590,particleCount:12,glowColor:"132, 0, 255",disableAnimations:!1})})})}function FU(){return W.jsx("div",{className:"about-root",children:W.jsxs("div",{className:"about-inner",children:[W.jsxs("header",{className:"about-hero",children:[W.jsx("img",{src:Xf,alt:"logo",className:"about-logo"}),W.jsx("h1",{className:"about-title",children:"About STEMFLOW Community"}),W.jsx("p",{className:"about-lead",children:"We empower students, mentors, and makers with resources, projects, and community events to learn and build together."}),W.jsxs("div",{className:"about-ctas",children:[W.jsx(ki,{to:"/projects",className:"btn primary",children:"Explore Projects"}),W.jsx(ki,{to:"/contact",className:"btn ghost",children:"Contact Us"})]})]}),W.jsxs("section",{className:"about-mission",children:[W.jsx("h2",{children:"Our mission"}),W.jsx("p",{children:"To make STEM learning accessible and collaborative by providing hands-on projects, curated resources, and mentorship opportunities for learners at every level."})]}),W.jsxs("section",{className:"about-stats",children:[W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"1.2k+"}),W.jsx("div",{className:"stat-label",children:"Members"})]}),W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"340+"}),W.jsx("div",{className:"stat-label",children:"Projects"})]}),W.jsxs("div",{className:"stat",children:[W.jsx("div",{className:"stat-number",children:"85"}),W.jsx("div",{className:"stat-label",children:"Events"})]})]}),W.jsxs("section",{className:"about-team",children:[W.jsx("h2",{children:"Meet some contributors"}),W.jsxs("div",{className:"team-grid",children:[W.jsxs("div",{className:"team-card",children:[W.jsx("div",{className:"avatar",children:"MN"}),W.jsx("div",{className:"team-name",children:"Maria Nguyen"}),W.jsx("div",{className:"team-role",children:"Founder & Programmer"})]}),W.jsxs("div",{className:"team-card",children:[W.jsx("div",{className:"avatar",children:"GK"}),W.jsx("div",{className:"team-name",children:"Golda Kals-Lamptey"}),W.jsx("div",{className:"team-role",children:"Founder & Mentor"})]}),W.jsxs("div",{className:"team-card",children:[W.jsx("div",{className:"avatar",children:"ET"}),W.jsx("div",{className:"team-name",children:"Enkh Turtogtokh"}),W.jsx("div",{className:"team-role",children:"Founder & Comunity Lead"})]})]})]}),W.jsxs("section",{className:"about-cta-band",children:[W.jsx("h3",{children:"Join the community"}),W.jsx("p",{children:"Contribute a project, join a workshop, or help mentor a student. Everyone is welcome."}),W.jsx("div",{style:{marginTop:12},children:W.jsx(ki,{to:"/contact",className:"btn primary",children:"Get involved"})})]})]})})}function zU(){}function IU(){const[r,e]=$.useState({name:"",email:"",message:""}),[n,a]=$.useState({}),[s,l]=$.useState({submitting:!1,success:!1}),c=h=>{const{name:m,value:g}=h.target;e(v=>({...v,[m]:g})),a(v=>({...v,[m]:""}))},f=()=>{const h={};return r.name.trim()||(h.name="Please enter your name"),(!r.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email))&&(h.email="Enter a valid email"),r.message.trim()||(h.message="Please enter a message"),a(h),Object.keys(h).length===0},d=h=>{h.preventDefault(),f()&&(l({submitting:!0,success:!1}),setTimeout(()=>{l({submitting:!1,success:!0}),e({name:"",email:"",message:""})},900))};return W.jsx("div",{className:"contact-root",children:W.jsxs("div",{className:"contact-inner",role:"main",children:[W.jsx("img",{src:Xf,alt:"logo",className:"contact-logo"}),W.jsx("h1",{className:"contact-title",children:"Contact STEMFLOW Community"}),W.jsx("p",{className:"contact-lead",children:"Questions, collaborations, or feedback? Send us a message and we'll get back to you."}),W.jsxs("form",{className:"contact-form",onSubmit:d,noValidate:!0,children:[W.jsxs("label",{className:"field",children:[W.jsx("span",{className:"field-label",children:"Name"}),W.jsx("input",{name:"name",value:r.name,onChange:c,className:`input ${n.name?"has-error":""}`}),n.name&&W.jsx("div",{className:"error",children:n.name})]}),W.jsxs("label",{className:"field",children:[W.jsx("span",{className:"field-label",children:"Email"}),W.jsx("input",{name:"email",type:"email",value:r.email,onChange:c,className:`input ${n.email?"has-error":""}`}),n.email&&W.jsx("div",{className:"error",children:n.email})]}),W.jsxs("label",{className:"field",children:[W.jsx("span",{className:"field-label",children:"Message"}),W.jsx("textarea",{name:"message",rows:6,value:r.message,onChange:c,className:`textarea ${n.message?"has-error":""}`}),n.message&&W.jsx("div",{className:"error",children:n.message})]}),W.jsxs("div",{className:"form-actions",children:[W.jsx("button",{className:"btn primary",type:"submit",disabled:s.submitting,children:s.submitting?"Sending...":"Send message"}),W.jsx("button",{type:"button",className:"btn ghost",onClick:()=>{e({name:"",email:"",message:""}),a({}),l({submitting:!1,success:!1})},children:"Clear"})]})]}),s.success&&W.jsx("div",{className:"success",children:"Thanks! Your message was sent. We'll reply soon."})]})})}function BU(){}function HU(){const r=[{label:"Home",ariaLabel:"Go to home page",link:"/"},{label:"Resources",ariaLabel:"Helpful resources",link:"/resources"},{label:"Projects",ariaLabel:"View projects",link:"/projects"},{label:"Blog",ariaLabel:"Read our blog",link:"/blog"},{label:"About",ariaLabel:"Learn about us",link:"/about"},{label:"Contact",ariaLabel:"Get in touch",link:"/contact"},{label:"Reference",ariaLabel:"Get reference materials",link:"/reference"}];return W.jsx(W.Fragment,{children:W.jsxs("div",{className:"w-full min-h-screen",children:[W.jsx(aR,{position:"right",isFixed:!0,items:r,displaySocials:!0,displayItemNumbering:!0,menuButtonColor:"#E5E9F0",openMenuButtonColor:"#E5E9F0",changeMenuColorOnOpen:!0,colors:["#6C63FF","#1C77C3"],logoUrl:Xf,accentColor:"#6C63FF",onMenuOpen:()=>console.log("Menu opened"),onMenuClose:()=>console.log("Menu closed")}),W.jsx("main",{style:{paddingTop:24},children:W.jsxs(s1,{children:[W.jsx(kr,{path:"/",element:W.jsx(EU,{})}),W.jsx(kr,{path:"/projects",element:W.jsx(bU,{})}),W.jsx(kr,{path:"/blog",element:W.jsx(PU,{})}),W.jsx(kr,{path:"/about",element:W.jsx(FU,{})}),W.jsx(kr,{path:"/resources",element:W.jsx(zU,{})}),W.jsx(kr,{path:"/contact",element:W.jsx(IU,{})}),W.jsx(kr,{path:"/reference",element:W.jsx(BU,{})})]})}),W.jsx(rR,{})]})})}lT.createRoot(document.getElementById("root")).render(W.jsx($.StrictMode,{children:W.jsx(D1,{basename:"/STEMFLOW-COMMUNITY-HUB/",children:W.jsx(HU,{})})}));
