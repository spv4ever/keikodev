(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s}});let a="refresh",o="navigate",l="restore",i="server-patch",u="prefetch",c="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),a=r._(n(7294)),o=n(4450),l=n(2227),i=n(4364),u=n(109),c=n(3607),s=n(1823),f=n(9031),d=n(920),m=n(30),p=n(7192),v=n(7498),g=new Set;function prefetch(e,t,n,r,a,o){if(!o&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(g.has(o))return;g.add(o)}let i=o?e.prefetch(t,a):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,o,i,u,c,s,f){let{nodeName:d}=e.currentTarget,m="A"===d.toUpperCase();if(m&&(isModifiedEvent(e)||!s&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};s?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let h=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:i,children:g,prefetch:h=null,passHref:y,replace:x,shallow:b,scroll:_,locale:k,onClick:j,onMouseEnter:C,onTouchStart:S,legacyBehavior:N=!1,...E}=e;n=g,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let I=a.default.useContext(s.RouterContext),A=a.default.useContext(f.AppRouterContext),O=null!=I?I:A,T=!I,M=!1!==h,L=null===h?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:B,as:R}=a.default.useMemo(()=>{if(!I){let e=formatStringOrUrl(l);return{href:e,as:i?formatStringOrUrl(i):e}}let[e,t]=(0,o.resolveHref)(I,l,!0);return{href:e,as:i?(0,o.resolveHref)(I,i):t||e}},[I,l,i]),P=a.default.useRef(B),w=a.default.useRef(R);N&&(r=a.default.Children.only(n));let G=N?r&&"object"==typeof r&&r.ref:t,[U,W,D]=(0,d.useIntersection)({rootMargin:"200px"}),q=a.default.useCallback(e=>{(w.current!==R||P.current!==B)&&(D(),w.current=R,P.current=B),U(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[R,G,B,D,U]);a.default.useEffect(()=>{O&&W&&M&&prefetch(O,B,R,{locale:k},{kind:L},T)},[R,B,W,k,M,null==I?void 0:I.locale,O,T,L]);let F={ref:q,onClick(e){N||"function"!=typeof j||j(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&linkClicked(e,O,B,R,x,b,_,k,T,M)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&(M||!T)&&prefetch(O,B,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)},onTouchStart(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&(M||!T)&&prefetch(O,B,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)}};if((0,u.isAbsoluteUrl)(R))F.href=R;else if(!N||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,m.getDomainLocale)(R,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);F.href=t||(0,p.addBasePath)((0,c.addLocale)(R,e,null==I?void 0:I.defaultLocale))}return N?a.default.cloneElement(r,F):a.default.createElement("a",{...E,...F},n)}),y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),a=n(3436),o="function"==typeof IntersectionObserver,l=new Map,i=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},i.push(n),l.set(n,t),t}function observe(e,t,n){let{id:r,observer:a,elements:o}=createObserver(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:l}=e,i=l||!o,[u,c]=(0,r.useState)(!1),s=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{s.current=e},[]);(0,r.useEffect)(()=>{if(o){if(i||u)return;let e=s.current;if(e&&e.tagName){let r=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,a.requestIdleCallback)(()=>c(!0));return()=>(0,a.cancelIdleCallback)(e)}},[i,n,t,u,s.current]);let d=(0,r.useCallback)(()=>{c(!1)},[]);return[f,u,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(5170)},3139:function(e,t,n){"use strict";n.d(t,{Z:function(){return r},d:function(){return a}});var[r,a]=(0,n(5227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"})},1314:function(e,t,n){"use strict";n.d(t,{q:function(){return m}});var r=n(3139),a=n(296),o=n(5893);function initials(e){var t;let n=e.split(" "),r=null!=(t=n.at(0))?t:"",a=n.length>1?n.at(-1):"";return r&&a?`${r.charAt(0)}${a.charAt(0)}`:r.charAt(0)}function AvatarName(e){let{name:t,getInitials:n,...l}=e,i=(0,r.d)();return(0,o.jsx)(a.m.div,{role:"img","aria-label":t,...l,__css:i.label,children:t?null==n?void 0:n(t):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=e=>(0,o.jsxs)(a.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,o.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),l=n(5721),i=n(7294);function AvatarImage(e){let{src:t,srcSet:n,onError:r,onLoad:u,getInitials:c,name:s,borderRadius:f,loading:d,iconLabel:m,icon:p=(0,o.jsx)(GenericAvatarIcon,{}),ignoreFallback:v,referrerPolicy:g,crossOrigin:h}=e,y=(0,l.d)({src:t,onError:r,crossOrigin:h,ignoreFallback:v}),x=!t||"loaded"!==y;return x?s?(0,o.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials:c,name:s}):(0,i.cloneElement)(p,{role:"img","aria-label":m}):(0,o.jsx)(a.m.img,{src:t,srcSet:n,alt:s,onLoad:u,referrerPolicy:g,crossOrigin:null!=h?h:void 0,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:f}})}AvatarImage.displayName="AvatarImage";var u=n(5059),c=n(1639),s=n(3179),f=n(5432),d={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},m=(0,u.G)((e,t)=>{let n=(0,c.jC)("Avatar",e),[l,u]=(0,i.useState)(!1),{src:m,srcSet:p,name:v,showBorder:g,borderRadius:h="full",onError:y,onLoad:x,getInitials:b=initials,icon:_=(0,o.jsx)(GenericAvatarIcon,{}),iconLabel:k=" avatar",loading:j,children:C,borderColor:S,ignoreFallback:N,crossOrigin:E,...I}=(0,s.Lr)(e),A={borderRadius:h,borderWidth:g?"2px":void 0,...d,...n.container};return S&&(A.borderColor=S),(0,o.jsx)(a.m.span,{ref:t,...I,className:(0,f.cx)("chakra-avatar",e.className),"data-loaded":(0,f.PB)(l),__css:A,children:(0,o.jsxs)(r.Z,{value:n,children:[(0,o.jsx)(AvatarImage,{src:m,srcSet:p,loading:j,onLoad:(0,f.v0)(x,()=>{u(!0)}),onError:y,getInitials:b,name:v,borderRadius:h,icon:_,iconLabel:k,ignoreFallback:N,crossOrigin:E}),C]})})});m.displayName="Avatar"},3951:function(e,t,n){"use strict";n.d(t,{XQ:function(){return mapResponsive}});var r=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},9222:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r=n(7294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}var[a,o]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),l=n(296),i=n(5432),u=n(5893);function ButtonIcon(e){let{children:t,className:n,...a}=e,o=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,i.cx)("chakra-button__icon",n);return(0,u.jsx)(l.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:c,children:o})}ButtonIcon.displayName="ButtonIcon";var c=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:a="0.5rem",children:o=(0,u.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:f,...d}=e,m=(0,i.cx)("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,p,a]);return(0,u.jsx)(l.m.div,{className:m,...d,__css:v,children:o})}ButtonSpinner.displayName="ButtonSpinner";var s=n(1103),f=n(5059),d=n(1639),m=n(3179),p=(0,f.G)((e,t)=>{let n=o(),a=(0,d.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:f,isActive:p,children:v,leftIcon:g,rightIcon:h,loadingText:y,iconSpacing:x="0.5rem",type:b,spinner:_,spinnerPlacement:k="start",className:j,as:C,...S}=(0,m.Lr)(e),N=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:E,type:I}=useButtonType(C),A={rightIcon:h,leftIcon:g,iconSpacing:x,children:v};return(0,u.jsxs)(l.m.button,{ref:(0,s.qq)(t,E),as:C,type:null!=b?b:I,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(f),__css:N,className:(0,i.cx)("chakra-button",j),...S,disabled:c||f,children:[f&&"start"===k&&(0,u.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:x,children:_}),f?y||(0,u.jsx)(l.m.span,{opacity:0,children:(0,u.jsx)(ButtonContent,{...A})}):(0,u.jsx)(ButtonContent,{...A}),f&&"end"===k&&(0,u.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:x,children:_})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(ButtonIcon,{marginEnd:a,children:t}),r,n&&(0,u.jsx)(ButtonIcon,{marginStart:a,children:n})]})}p.displayName="Button"},5721:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage},z:function(){return shouldShowFallbackImage}});var r=n(6245),a=n(7294);function useImage(e){let{loading:t,src:n,srcSet:o,onLoad:l,onError:i,crossOrigin:u,sizes:c,ignoreFallback:s}=e,[f,d]=(0,a.useState)("pending");(0,a.useEffect)(()=>{d(n?"loading":"pending")},[n]);let m=(0,a.useRef)(),p=(0,a.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,u&&(e.crossOrigin=u),o&&(e.srcset=o),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{flush(),d("loaded"),null==l||l(e)},e.onerror=e=>{flush(),d("failed"),null==i||i(e)},m.current=e},[n,u,o,c,l,i,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!s)return"loading"===f&&p(),()=>{flush()}},[f,p,s]),s?"loaded":f}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(5059),a=n(1639),o=n(3179),l=n(296),i=n(5432),u=n(5893),c=(0,r.G)(function(e,t){let n=(0,a.mq)("Heading",e),{className:r,...c}=(0,o.Lr)(e);return(0,u.jsx)(l.m.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},4641:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(6684),a=n(5059),o=n(5893),l=(0,a.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));l.displayName="HStack"},1669:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(6684),a=n(5059),o=n(5893),l=(0,a.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));l.displayName="VStack"},6684:function(e,t,n){"use strict";n.d(t,{K:function(){return f}});var r=n(296),a=n(5893),StackItem=e=>(0,a.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var o=n(3951),l="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[l]:(0,o.XQ)(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,o.XQ)(n,e=>r[e])}}var i=n(5059),u=n(5432),c=n(2495),s=n(7294),f=(0,i.G)((e,t)=>{let{isInline:n,direction:o,align:i,justify:f,spacing:d="0.5rem",wrap:m,children:p,divider:v,className:g,shouldWrapChildren:h,...y}=e,x=n?"row":null!=o?o:"column",b=(0,s.useMemo)(()=>getStackStyles({direction:x,spacing:d}),[x,d]),_=(0,s.useMemo)(()=>getDividerStyles({spacing:d,direction:x}),[d,x]),k=!!v,j=!h&&!k,C=(0,s.useMemo)(()=>{let e=(0,c.W)(p);return j?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,o=n+1===e.length,l=(0,a.jsx)(StackItem,{children:t},r),i=h?l:t;if(!k)return i;let u=(0,s.cloneElement)(v,{__css:_});return(0,a.jsxs)(s.Fragment,{children:[i,o?null:u]},r)})},[v,_,k,j,h,p]),S=(0,u.cx)("chakra-stack",g);return(0,a.jsx)(r.m.div,{ref:t,display:"flex",alignItems:i,justifyContent:f,flexDirection:b.flexDirection,flexWrap:m,className:S,__css:k?{}:{[l]:b[l]},...y,children:C})});f.displayName="Stack"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(5059),a=n(1639),o=n(3179),l=n(296),i=n(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var u=n(5893),c=(0,r.G)(function(e,t){let n=(0,a.mq)("Text",e),{className:r,align:c,decoration:s,casing:f,...d}=(0,o.Lr)(e),m=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(l.m.p,{ref:t,className:(0,i.cx)("chakra-text",e.className),...m,...d,__css:n})});c.displayName="Text"},3838:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(5059),a=n(1639),o=n(3179),l=n(296),i=n(5432),u=n(5893),c=(0,r.G)(function(e,t){let n=(0,a.mq)("Link",e),{className:r,isExternal:c,...s}=(0,o.Lr)(e);return(0,u.jsx)(l.m.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",r),...s,__css:n})});c.displayName="Link"},2495:function(e,t,n){"use strict";n.d(t,{W:function(){return getValidChildren}});var r=n(7294);function getValidChildren(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},1103:function(e,t,n){"use strict";n.d(t,{lq:function(){return mergeRefs},qq:function(){return useMergeRefs}});var r=n(7294);function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,r.useMemo)(()=>mergeRefs(...e),e)}}}]);