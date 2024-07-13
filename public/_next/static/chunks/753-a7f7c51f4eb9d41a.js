"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{8501:function(e,t,r){r.d(t,{UW:function(){return v}});var o=r(7294),n=r(3967),l=r.n(n),a=r(6445),i=r(8291),s=r(6679);let c={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["soft","surface","outline"],default:"soft"},color:{...i.m,default:void 0},highContrast:s.B};var u=r(3843),d=r(6776);let f=o.createContext({}),p=o.forwardRef((e,t)=>{let{rest:r,...n}=(0,u.FY)(e),{children:a,className:i,size:s=c.size.default,variant:p=c.variant.default,color:h=c.color.default,highContrast:m=c.highContrast.default,...v}=r;return o.createElement("div",{"data-accent-color":h,...v,className:l()("rt-CalloutRoot",i,(0,d.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":m},(0,u.we)(n)),ref:t},o.createElement(f.Provider,{value:o.useMemo(()=>({size:s,color:h,highContrast:m}),[s,h,m])},a))});p.displayName="CalloutRoot";let h=o.forwardRef((e,t)=>{let{color:r,size:n,highContrast:i}=o.useContext(f);return o.createElement(a.x,{asChild:!0,color:r,size:getTextSize(n),highContrast:i},o.createElement("div",{...e,className:l()("rt-CalloutIcon",e.className),ref:t}))});h.displayName="CalloutIcon";let m=o.forwardRef((e,t)=>{let{color:r,size:n,highContrast:i}=o.useContext(f);return o.createElement(a.x,{as:"p",size:getTextSize(n),color:r,highContrast:i,...e,ref:t,className:l()("rt-CalloutText",e.className)})});function getTextSize(e){if(void 0!==e)return"string"==typeof e?getNonResponsiveTextSize(e):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,getNonResponsiveTextSize(t)]))}function getNonResponsiveTextSize(e){return"3"===e?"3":"2"}m.displayName="CalloutText";let v=Object.assign({},{Root:p,Icon:h,Text:m})},1675:function(e,t,r){r.d(t,{W:function(){return u}});var o=r(7294),n=r(3967),l=r.n(n);let a={size:{type:"enum",values:["1","2","3","4"],default:"4",responsive:!0},display:{type:"enum",values:["none","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),c=r(6776);let u=o.forwardRef((e,t)=>{let{rest:r,...n}=(0,i.FY)(e),{rest:u,...d}=(0,s.F8)(r),{children:f,className:p,size:h=a.size.default,display:m=a.display.default,...v}=u;return o.createElement("div",{...v,ref:t,className:l()("rt-Container",p,(0,c.g)(h,"rt-r-size"),(0,c.g)(m,"rt-r-display"),(0,s.yt)(d),(0,i.we)(n))},o.createElement("div",{className:"rt-ContainerInner"},f))});u.displayName="Container"},8336:function(e,t,r){r.d(t,{x:function(){return d}});var o=r(7294),n=r(3967),l=r.n(n),a=r(8760),i=r(8219);let s={size:{type:"enum",values:["1","2","3"],default:"1",responsive:!0},radius:i.C,scrollbars:{type:"enum",values:["vertical","horizontal","both"],default:"both"}};var c=r(3843),u=r(6776);let d=o.forwardRef((e,t)=>{let{rest:r,...n}=(0,c.FY)(e),{className:i,style:d,type:f,scrollHideDelay:p="scroll"!==f?0:void 0,dir:h,size:m=s.size.default,radius:v=s.radius.default,scrollbars:w=s.scrollbars.default,...b}=r;return o.createElement(a.fC,{type:f,scrollHideDelay:p,className:l()("rt-ScrollAreaRoot",i,(0,c.we)(n)),style:d},o.createElement(a.l_,{...b,ref:t,className:"rt-ScrollAreaViewport"}),o.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),"vertical"!==w?o.createElement(a.LW,{"data-radius":v,orientation:"horizontal",className:l()("rt-ScrollAreaScrollbar",(0,u.g)(m,"rt-r-size"))},o.createElement(a.bU,{className:"rt-ScrollAreaThumb"})):null,"horizontal"!==w?o.createElement(a.LW,{"data-radius":v,orientation:"vertical",className:l()("rt-ScrollAreaScrollbar",(0,u.g)(m,"rt-r-size"))},o.createElement(a.bU,{className:"rt-ScrollAreaThumb"})):null,"both"===w?o.createElement(a.Ns,{className:"rt-ScrollAreaCorner"}):null)});d.displayName="ScrollArea"},5205:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,o.Z)("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]])},2614:function(e,t,r){r.d(t,{u:function(){return clamp}});function clamp(e,[t,r]){return Math.min(r,Math.max(t,e))}},8760:function(e,t,r){r.d(t,{Ns:function(){return M},fC:function(){return k},LW:function(){return F},bU:function(){return U},l_:function(){return I}});var o=r(7294);function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function composeRefs(...e){return t=>e.forEach(e=>setRef(e,t))}function useComposedRefs(...e){return o.useCallback(composeRefs(...e),e)}r(3935);var n=r(5893),l=o.forwardRef((e,t)=>{let{children:r,...l}=e,i=o.Children.toArray(r),s=i.find(isSlottable);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,n.jsx)(a,{...l,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,n.jsx)(a,{...l,ref:t,children:r})});l.displayName="Slot";var a=o.forwardRef((e,t)=>{let{children:r,...n}=e;if(o.isValidElement(r)){let e=getElementRef(r);return o.cloneElement(r,{...mergeProps(n,r.props),ref:t?composeRefs(t,e):e})}return o.Children.count(r)>1?o.Children.only(null):null});a.displayName="SlotClone";var Slottable=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function isSlottable(e){return o.isValidElement(e)&&e.type===Slottable}function mergeProps(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o],a=/^on[A-Z]/.test(o);a?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}function getElementRef(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}var i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=o.forwardRef((e,r)=>{let{asChild:o,...a}=e,i=o?l:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(i,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),s=r(438);function createContextScope(e,t=[]){let r=[];function createContext3(t,l){let a=o.createContext(l),i=r.length;function Provider(t){let{scope:r,children:l,...s}=t,c=r?.[e][i]||a,u=o.useMemo(()=>s,Object.values(s));return(0,n.jsx)(c.Provider,{value:u,children:l})}function useContext2(r,n){let s=n?.[e][i]||a,c=o.useContext(s);if(c)return c;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}return r=[...r,l],Provider.displayName=t+"Provider",[Provider,useContext2]}let createScope=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return createScope.scopeName=e,[createContext3,composeContextScopes(createScope,...t)]}function composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:o})=>{let n=r(e),l=n[`__scope${o}`];return{...t,...l}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return createScope.scopeName=t.scopeName,createScope}var c=r(9698),u=r(8990),d=globalThis?.document?o.useLayoutEffect:()=>{},f=r(2614);function composeEventHandlers(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e?.(o),!1===r||!o.defaultPrevented)return t?.(o)}}function useStateMachine(e,t){return o.useReducer((e,r)=>{let o=t[e][r];return o??e},e)}var p="ScrollArea",[h,m]=createContextScope(p),[v,w]=h(p),b=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:a,scrollHideDelay:s=600,...c}=e,[d,f]=o.useState(null),[p,h]=o.useState(null),[m,w]=o.useState(null),[b,g]=o.useState(null),[S,C]=o.useState(null),[E,R]=o.useState(0),[y,x]=o.useState(0),[T,P]=o.useState(!1),[N,z]=o.useState(!1),L=useComposedRefs(t,e=>f(e)),j=(0,u.gm)(a);return(0,n.jsx)(v,{scope:r,type:l,dir:j,scrollHideDelay:s,scrollArea:d,viewport:p,onViewportChange:h,content:m,onContentChange:w,scrollbarX:b,onScrollbarXChange:g,scrollbarXEnabled:T,onScrollbarXEnabledChange:P,scrollbarY:S,onScrollbarYChange:C,scrollbarYEnabled:N,onScrollbarYEnabledChange:z,onCornerWidthChange:R,onCornerHeightChange:x,children:(0,n.jsx)(i.div,{dir:j,...c,ref:L,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})})});b.displayName=p;var g="ScrollAreaViewport",S=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:l,nonce:a,...s}=e,c=w(g,r),u=o.useRef(null),d=useComposedRefs(t,u,c.onViewportChange);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),(0,n.jsx)(i.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,n.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});S.displayName=g;var C="ScrollAreaScrollbar",E=o.forwardRef((e,t)=>{let{forceMount:r,...l}=e,a=w(C,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:s}=a,c="horizontal"===e.orientation;return o.useEffect(()=>(c?i(!0):s(!0),()=>{c?i(!1):s(!1)}),[c,i,s]),"hover"===a.type?(0,n.jsx)(R,{...l,ref:t,forceMount:r}):"scroll"===a.type?(0,n.jsx)(y,{...l,ref:t,forceMount:r}):"auto"===a.type?(0,n.jsx)(x,{...l,ref:t,forceMount:r}):"always"===a.type?(0,n.jsx)(T,{...l,ref:t}):null});E.displayName=C;var R=o.forwardRef((e,t)=>{let{forceMount:r,...l}=e,a=w(C,e.__scopeScrollArea),[i,c]=o.useState(!1);return o.useEffect(()=>{let e=a.scrollArea,t=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(t),c(!0)},handlePointerLeave=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[a.scrollArea,a.scrollHideDelay]),(0,n.jsx)(s.z,{present:r||i,children:(0,n.jsx)(x,{"data-state":i?"visible":"hidden",...l,ref:t})})}),y=o.forwardRef((e,t)=>{let{forceMount:r,...l}=e,a=w(C,e.__scopeScrollArea),i="horizontal"===e.orientation,c=useDebounceCallback(()=>d("SCROLL_END"),100),[u,d]=useStateMachine("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,a.scrollHideDelay,d]),o.useEffect(()=>{let e=a.viewport,t=i?"scrollLeft":"scrollTop";if(e){let r=e[t],handleScroll=()=>{let o=e[t],n=r!==o;n&&(d("SCROLL"),c()),r=o};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[a.viewport,i,d,c]),(0,n.jsx)(s.z,{present:r||"hidden"!==u,children:(0,n.jsx)(T,{"data-state":"hidden"===u?"hidden":"visible",...l,ref:t,onPointerEnter:composeEventHandlers(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:composeEventHandlers(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),x=o.forwardRef((e,t)=>{let r=w(C,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,c]=o.useState(!1),u="horizontal"===e.orientation,d=useDebounceCallback(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(u?e:t)}},10);return useResizeObserver(r.viewport,d),useResizeObserver(r.content,d),(0,n.jsx)(s.z,{present:l||i,children:(0,n.jsx)(T,{"data-state":i?"visible":"hidden",...a,ref:t})})}),T=o.forwardRef((e,t)=>{let{orientation:r="vertical",...l}=e,a=w(C,e.__scopeScrollArea),i=o.useRef(null),s=o.useRef(0),[c,u]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=getThumbRatio(c.viewport,c.content),f={...l,sizes:c,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function getScrollPosition(e,t){return getScrollPositionFromPointer(e,s.current,c,t)}return"horizontal"===r?(0,n.jsx)(P,{...f,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,t=getThumbOffsetFromScroll(e,c,a.dir);i.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=getScrollPosition(e,a.dir))}}):"vertical"===r?(0,n.jsx)(N,{...f,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,t=getThumbOffsetFromScroll(e,c);i.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=getScrollPosition(e))}}):null}),P=o.forwardRef((e,t)=>{let{sizes:r,onSizesChange:l,...a}=e,i=w(C,e.__scopeScrollArea),[s,c]=o.useState(),u=o.useRef(null),d=useComposedRefs(t,u,i.onScrollbarXChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,n.jsx)(j,{"data-orientation":"horizontal",...a,ref:d,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let o=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(o),o>0&&o<r&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:toInt(s.paddingLeft),paddingEnd:toInt(s.paddingRight)}})}})}),N=o.forwardRef((e,t)=>{let{sizes:r,onSizesChange:l,...a}=e,i=w(C,e.__scopeScrollArea),[s,c]=o.useState(),u=o.useRef(null),d=useComposedRefs(t,u,i.onScrollbarYChange);return o.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,n.jsx)(j,{"data-orientation":"vertical",...a,ref:d,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let o=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(o),o>0&&o<r&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:toInt(s.paddingTop),paddingEnd:toInt(s.paddingBottom)}})}})}),[z,L]=h(C),j=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:a,onThumbChange:s,onThumbPointerUp:u,onThumbPointerDown:d,onThumbPositionChange:f,onDragScroll:p,onWheelScroll:h,onResize:m,...v}=e,b=w(C,r),[g,S]=o.useState(null),E=useComposedRefs(t,e=>S(e)),R=o.useRef(null),y=o.useRef(""),x=b.viewport,T=l.content-l.viewport,P=(0,c.W)(h),N=(0,c.W)(f),L=useDebounceCallback(m,10);function handleDragScroll(e){if(R.current){let t=e.clientX-R.current.left,r=e.clientY-R.current.top;p({x:t,y:r})}}return o.useEffect(()=>{let handleWheel=e=>{let t=e.target,r=g?.contains(t);r&&P(e,T)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[x,g,T,P]),o.useEffect(N,[l,N]),useResizeObserver(g,L),useResizeObserver(b.content,L),(0,n.jsx)(z,{scope:r,scrollbar:g,hasThumb:a,onThumbChange:(0,c.W)(s),onThumbPointerUp:(0,c.W)(u),onThumbPositionChange:N,onThumbPointerDown:(0,c.W)(d),children:(0,n.jsx)(i.div,{...v,ref:E,style:{position:"absolute",...v.style},onPointerDown:composeEventHandlers(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),R.current=g.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:composeEventHandlers(e.onPointerMove,handleDragScroll),onPointerUp:composeEventHandlers(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,b.viewport&&(b.viewport.style.scrollBehavior=""),R.current=null})})})}),_="ScrollAreaThumb",D=o.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=L(_,e.__scopeScrollArea);return(0,n.jsx)(s.z,{present:r||l.hasThumb,children:(0,n.jsx)(A,{ref:t,...o})})}),A=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:l,...a}=e,s=w(_,r),c=L(_,r),{onThumbPositionChange:u}=c,d=useComposedRefs(t,e=>c.onThumbChange(e)),f=o.useRef(),p=useDebounceCallback(()=>{f.current&&(f.current(),f.current=void 0)},100);return o.useEffect(()=>{let e=s.viewport;if(e){let handleScroll=()=>{if(p(),!f.current){let t=addUnlinkedScrollListener(e,u);f.current=t,u()}};return u(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[s.viewport,p,u]),(0,n.jsx)(i.div,{"data-state":c.hasThumb?"visible":"hidden",...a,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:composeEventHandlers(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),o=e.clientX-r.left,n=e.clientY-r.top;c.onThumbPointerDown({x:o,y:n})}),onPointerUp:composeEventHandlers(e.onPointerUp,c.onThumbPointerUp)})});D.displayName=_;var W="ScrollAreaCorner",O=o.forwardRef((e,t)=>{let r=w(W,e.__scopeScrollArea),o=!!(r.scrollbarX&&r.scrollbarY),l="scroll"!==r.type&&o;return l?(0,n.jsx)(H,{...e,ref:t}):null});O.displayName=W;var H=o.forwardRef((e,t)=>{let{__scopeScrollArea:r,...l}=e,a=w(W,r),[s,c]=o.useState(0),[u,d]=o.useState(0);return useResizeObserver(a.scrollbarX,()=>{let e=a.scrollbarX?.offsetHeight||0;a.onCornerHeightChange(e),d(e)}),useResizeObserver(a.scrollbarY,()=>{let e=a.scrollbarY?.offsetWidth||0;a.onCornerWidthChange(e),c(e)}),s&&u?(0,n.jsx)(i.div,{...l,ref:t,style:{width:s,height:u,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}}):null});function toInt(e){return e?parseInt(e,10):0}function getThumbRatio(e,t){let r=e/t;return isNaN(r)?0:r}function getThumbSize(e){let t=getThumbRatio(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-r)*t;return Math.max(o,18)}function getScrollPositionFromPointer(e,t,r,o="ltr"){let n=getThumbSize(r),l=t||n/2,a=r.scrollbar.paddingStart+l,i=r.scrollbar.size-r.scrollbar.paddingEnd-(n-l),s=r.content-r.viewport,c=linearScale([a,i],"ltr"===o?[0,s]:[-1*s,0]);return c(e)}function getThumbOffsetFromScroll(e,t,r="ltr"){let o=getThumbSize(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-n,a=t.content-t.viewport,i="ltr"===r?[0,a]:[-1*a,0],s=(0,f.u)(e,i),c=linearScale([0,a],[0,l-o]);return c(s)}function linearScale(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(r-e[0])}}var addUnlinkedScrollListener=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},o=0;return!function loop(){let n={left:e.scrollLeft,top:e.scrollTop},l=r.left!==n.left,a=r.top!==n.top;(l||a)&&t(),r=n,o=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(o)};function useDebounceCallback(e,t){let r=(0,c.W)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function useResizeObserver(e,t){let r=(0,c.W)(t);d(()=>{let t=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return o.observe(e),()=>{window.cancelAnimationFrame(t),o.unobserve(e)}}},[e,r])}var k=b,I=S,F=E,U=D,M=O}}]);