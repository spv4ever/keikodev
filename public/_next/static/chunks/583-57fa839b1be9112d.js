(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{6426:function(e,t,n){"use strict";n.d(t,{kZ:function(){return GoogleLogin},rg:function(){return GoogleOAuthProvider}});var r=n(7294);function useLoadGsiScript(e={}){let{nonce:t,onScriptLoadSuccess:n,onScriptLoadError:o}=e,[l,a]=(0,r.useState)(!1),i=(0,r.useRef)(n);i.current=n;let u=(0,r.useRef)(o);return u.current=o,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;a(!0),null===(e=i.current)||void 0===e||e.call(i)},e.onerror=()=>{var e;a(!1),null===(e=u.current)||void 0===e||e.call(u)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),l}let o=(0,r.createContext)(null);function GoogleOAuthProvider({clientId:e,nonce:t,onScriptLoadSuccess:n,onScriptLoadError:l,children:a}){let i=useLoadGsiScript({nonce:t,onScriptLoadSuccess:n,onScriptLoadError:l}),u=(0,r.useMemo)(()=>({clientId:e,scriptLoadedSuccessfully:i}),[e,i]);return r.createElement(o.Provider,{value:u},a)}function useGoogleOAuth(){let e=(0,r.useContext)(o);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function extractClientId(e){var t;let n=null!==(t=null==e?void 0:e.clientId)&&void 0!==t?t:null==e?void 0:e.client_id;return n}let l={large:40,medium:32,small:20};function GoogleLogin({onSuccess:e,onError:t,useOneTap:n,promptMomentNotification:o,type:a="standard",theme:i="outline",size:u="large",text:c,shape:s,logo_alignment:d,width:f,locale:m,click_listener:p,containerProps:v,...g}){let h=(0,r.useRef)(null),{clientId:y,scriptLoadedSuccessfully:x}=useGoogleOAuth(),b=(0,r.useRef)(e);b.current=e;let _=(0,r.useRef)(t);_.current=t;let k=(0,r.useRef)(o);return k.current=o,(0,r.useEffect)(()=>{var e,t,r,o,l,v,C,j,S;if(x)return null===(r=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===r||r.initialize({client_id:y,callback:e=>{var t;if(!(null==e?void 0:e.credential))return null===(t=_.current)||void 0===t?void 0:t.call(_);let{credential:n,select_by:r}=e;b.current({credential:n,clientId:extractClientId(e),select_by:r})},...g}),null===(v=null===(l=null===(o=null==window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===l?void 0:l.id)||void 0===v||v.renderButton(h.current,{type:a,theme:i,size:u,text:c,shape:s,logo_alignment:d,width:f,locale:m,click_listener:p}),n&&(null===(S=null===(j=null===(C=null==window?void 0:window.google)||void 0===C?void 0:C.accounts)||void 0===j?void 0:j.id)||void 0===S||S.prompt(k.current)),()=>{var e,t,r;n&&(null===(r=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===r||r.cancel())}},[y,x,n,a,i,u,c,s,d,f,m]),r.createElement("div",{...v,ref:h,style:{height:l[u],...null==v?void 0:v.style}})}},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s}});let o="refresh",l="navigate",a="restore",i="server-patch",u="prefetch",c="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),l=n(4450),a=n(2227),i=n(4364),u=n(109),c=n(3607),s=n(1823),d=n(9031),f=n(920),m=n(30),p=n(7192),v=n(7498),g=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(g.has(l))return;g.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,l,i,u,c,s,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(isModifiedEvent(e)||!s&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:c,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};s?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let h=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:i,children:g,prefetch:h=null,passHref:y,replace:x,shallow:b,scroll:_,locale:k,onClick:C,onMouseEnter:j,onTouchStart:S,legacyBehavior:E=!1,...N}=e;n=g,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let A=o.default.useContext(s.RouterContext),I=o.default.useContext(d.AppRouterContext),O=null!=A?A:I,w=!A,R=!1!==h,L=null===h?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:M,as:T}=o.default.useMemo(()=>{if(!A){let e=formatStringOrUrl(a);return{href:e,as:i?formatStringOrUrl(i):e}}let[e,t]=(0,l.resolveHref)(A,a,!0);return{href:e,as:i?(0,l.resolveHref)(A,i):t||e}},[A,a,i]),B=o.default.useRef(M),P=o.default.useRef(T);E&&(r=o.default.Children.only(n));let G=E?r&&"object"==typeof r&&r.ref:t,[U,W,D]=(0,f.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(P.current!==T||B.current!==M)&&(D(),P.current=T,B.current=M),U(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[T,G,M,D,U]);o.default.useEffect(()=>{O&&W&&R&&prefetch(O,M,T,{locale:k},{kind:L},w)},[T,M,W,k,R,null==A?void 0:A.locale,O,w,L]);let F={ref:q,onClick(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&linkClicked(e,O,M,T,x,b,_,k,w,R)},onMouseEnter(e){E||"function"!=typeof j||j(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&(R||!w)&&prefetch(O,M,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:L},w)},onTouchStart(e){E||"function"!=typeof S||S(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&(R||!w)&&prefetch(O,M,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:L},w)}};if((0,u.isAbsoluteUrl)(T))F.href=T;else if(!E||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,m.getDomainLocale)(T,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);F.href=t||(0,p.addBasePath)((0,c.addLocale)(T,e,null==A?void 0:A.defaultLocale))}return E?o.default.cloneElement(r,F):o.default.createElement("a",{...N,...F},n)}),y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),l="function"==typeof IntersectionObserver,a=new Map,i=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}function observe(e,t,n){let{id:r,observer:o,elements:l}=createObserver(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!l,[u,c]=(0,r.useState)(!1),s=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{s.current=e},[]);(0,r.useEffect)(()=>{if(l){if(i||u)return;let e=s.current;if(e&&e.tagName){let r=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,u,s.current]);let f=(0,r.useCallback)(()=>{c(!1)},[]);return[d,u,f]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(5170)},3139:function(e,t,n){"use strict";n.d(t,{Z:function(){return r},d:function(){return o}});var[r,o]=(0,n(5227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"})},1314:function(e,t,n){"use strict";n.d(t,{q:function(){return m}});var r=n(3139),o=n(296),l=n(5893);function initials(e){var t;let n=e.split(" "),r=null!=(t=n.at(0))?t:"",o=n.length>1?n.at(-1):"";return r&&o?`${r.charAt(0)}${o.charAt(0)}`:r.charAt(0)}function AvatarName(e){let{name:t,getInitials:n,...a}=e,i=(0,r.d)();return(0,l.jsx)(o.m.div,{role:"img","aria-label":t,...a,__css:i.label,children:t?null==n?void 0:n(t):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=e=>(0,l.jsxs)(o.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,l.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,l.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),a=n(5721),i=n(7294);function AvatarImage(e){let{src:t,srcSet:n,onError:r,onLoad:u,getInitials:c,name:s,borderRadius:d,loading:f,iconLabel:m,icon:p=(0,l.jsx)(GenericAvatarIcon,{}),ignoreFallback:v,referrerPolicy:g,crossOrigin:h}=e,y=(0,a.d)({src:t,onError:r,crossOrigin:h,ignoreFallback:v}),x=!t||"loaded"!==y;return x?s?(0,l.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials:c,name:s}):(0,i.cloneElement)(p,{role:"img","aria-label":m}):(0,l.jsx)(o.m.img,{src:t,srcSet:n,alt:s,onLoad:u,referrerPolicy:g,crossOrigin:null!=h?h:void 0,className:"chakra-avatar__img",loading:f,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:d}})}AvatarImage.displayName="AvatarImage";var u=n(5059),c=n(1639),s=n(3179),d=n(5432),f={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},m=(0,u.G)((e,t)=>{let n=(0,c.jC)("Avatar",e),[a,u]=(0,i.useState)(!1),{src:m,srcSet:p,name:v,showBorder:g,borderRadius:h="full",onError:y,onLoad:x,getInitials:b=initials,icon:_=(0,l.jsx)(GenericAvatarIcon,{}),iconLabel:k=" avatar",loading:C,children:j,borderColor:S,ignoreFallback:E,crossOrigin:N,...A}=(0,s.Lr)(e),I={borderRadius:h,borderWidth:g?"2px":void 0,...f,...n.container};return S&&(I.borderColor=S),(0,l.jsx)(o.m.span,{ref:t,...A,className:(0,d.cx)("chakra-avatar",e.className),"data-loaded":(0,d.PB)(a),__css:I,children:(0,l.jsxs)(r.Z,{value:n,children:[(0,l.jsx)(AvatarImage,{src:m,srcSet:p,loading:C,onLoad:(0,d.v0)(x,()=>{u(!0)}),onError:y,getInitials:b,name:v,borderRadius:h,icon:_,iconLabel:k,ignoreFallback:E,crossOrigin:N}),j]})})});m.displayName="Avatar"},3951:function(e,t,n){"use strict";n.d(t,{XQ:function(){return mapResponsive}});var r=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},9222:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r=n(7294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}var[o,l]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=n(296),i=n(5432),u=n(5893);function ButtonIcon(e){let{children:t,className:n,...o}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,i.cx)("chakra-button__icon",n);return(0,u.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:c,children:l})}ButtonIcon.displayName="ButtonIcon";var c=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:o="0.5rem",children:l=(0,u.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...f}=e,m=(0,i.cx)("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?o:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,p,o]);return(0,u.jsx)(a.m.div,{className:m,...f,__css:v,children:l})}ButtonSpinner.displayName="ButtonSpinner";var s=n(1103),d=n(5059),f=n(1639),m=n(3179),p=(0,d.G)((e,t)=>{let n=l(),o=(0,f.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:d,isActive:p,children:v,leftIcon:g,rightIcon:h,loadingText:y,iconSpacing:x="0.5rem",type:b,spinner:_,spinnerPlacement:k="start",className:C,as:j,...S}=(0,m.Lr)(e),E=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:N,type:A}=useButtonType(j),I={rightIcon:h,leftIcon:g,iconSpacing:x,children:v};return(0,u.jsxs)(a.m.button,{ref:(0,s.qq)(t,N),as:j,type:null!=b?b:A,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(d),__css:E,className:(0,i.cx)("chakra-button",C),...S,disabled:c||d,children:[d&&"start"===k&&(0,u.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:x,children:_}),d?y||(0,u.jsx)(a.m.span,{opacity:0,children:(0,u.jsx)(ButtonContent,{...I})}):(0,u.jsx)(ButtonContent,{...I}),d&&"end"===k&&(0,u.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:x,children:_})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(ButtonIcon,{marginEnd:o,children:t}),r,n&&(0,u.jsx)(ButtonIcon,{marginStart:o,children:n})]})}p.displayName="Button"},5721:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage},z:function(){return shouldShowFallbackImage}});var r=n(6245),o=n(7294);function useImage(e){let{loading:t,src:n,srcSet:l,onLoad:a,onError:i,crossOrigin:u,sizes:c,ignoreFallback:s}=e,[d,f]=(0,o.useState)("pending");(0,o.useEffect)(()=>{f(n?"loading":"pending")},[n]);let m=(0,o.useRef)(),p=(0,o.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,u&&(e.crossOrigin=u),l&&(e.srcset=l),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{flush(),f("loaded"),null==a||a(e)},e.onerror=e=>{flush(),f("failed"),null==i||i(e)},m.current=e},[n,u,l,c,a,i,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!s)return"loading"===d&&p(),()=>{flush()}},[d,p,s]),s?"loaded":d}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(5059),o=n(1639),l=n(3179),a=n(296),i=n(5432),u=n(5893),c=(0,r.G)(function(e,t){let n=(0,o.mq)("Heading",e),{className:r,...c}=(0,l.Lr)(e);return(0,u.jsx)(a.m.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},4641:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(6684),o=n(5059),l=n(5893),a=(0,o.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));a.displayName="HStack"},1669:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(6684),o=n(5059),l=n(5893),a=(0,o.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},6684:function(e,t,n){"use strict";n.d(t,{K:function(){return d}});var r=n(296),o=n(5893),StackItem=e=>(0,o.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=n(3951),a="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[a]:(0,l.XQ)(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(n,e=>r[e])}}var i=n(5059),u=n(5432),c=n(2495),s=n(7294),d=(0,i.G)((e,t)=>{let{isInline:n,direction:l,align:i,justify:d,spacing:f="0.5rem",wrap:m,children:p,divider:v,className:g,shouldWrapChildren:h,...y}=e,x=n?"row":null!=l?l:"column",b=(0,s.useMemo)(()=>getStackStyles({direction:x,spacing:f}),[x,f]),_=(0,s.useMemo)(()=>getDividerStyles({spacing:f,direction:x}),[f,x]),k=!!v,C=!h&&!k,j=(0,s.useMemo)(()=>{let e=(0,c.W)(p);return C?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,a=(0,o.jsx)(StackItem,{children:t},r),i=h?a:t;if(!k)return i;let u=(0,s.cloneElement)(v,{__css:_});return(0,o.jsxs)(s.Fragment,{children:[i,l?null:u]},r)})},[v,_,k,C,h,p]),S=(0,u.cx)("chakra-stack",g);return(0,o.jsx)(r.m.div,{ref:t,display:"flex",alignItems:i,justifyContent:d,flexDirection:b.flexDirection,flexWrap:m,className:S,__css:k?{}:{[a]:b[a]},...y,children:j})});d.displayName="Stack"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(5059),o=n(1639),l=n(3179),a=n(296),i=n(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var u=n(5893),c=(0,r.G)(function(e,t){let n=(0,o.mq)("Text",e),{className:r,align:c,decoration:s,casing:d,...f}=(0,l.Lr)(e),m=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(a.m.p,{ref:t,className:(0,i.cx)("chakra-text",e.className),...m,...f,__css:n})});c.displayName="Text"},3838:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(5059),o=n(1639),l=n(3179),a=n(296),i=n(5432),u=n(5893),c=(0,r.G)(function(e,t){let n=(0,o.mq)("Link",e),{className:r,isExternal:c,...s}=(0,l.Lr)(e);return(0,u.jsx)(a.m.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",r),...s,__css:n})});c.displayName="Link"},2495:function(e,t,n){"use strict";n.d(t,{W:function(){return getValidChildren}});var r=n(7294);function getValidChildren(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},1103:function(e,t,n){"use strict";n.d(t,{lq:function(){return mergeRefs},qq:function(){return useMergeRefs}});var r=n(7294);function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,r.useMemo)(()=>mergeRefs(...e),e)}}}]);