"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{73725:function(e,r,t){t.d(r,{x:function(){return u}});var n=t(67294),o=t(93967),l=t.n(o),a=t(88426);let i={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var c=t(23843),s=t(60134),d=t(6776);let u=n.forwardRef((e,r)=>{let{rest:t,...o}=(0,c.FY)(e),{rest:u,...f}=(0,s.F8)(t),{className:h,asChild:v,display:b=i.display.default,...p}=u,m=v?a.g7:"div";return n.createElement(m,{...p,ref:r,className:l()("rt-Box",h,(0,d.g)(b,"rt-r-display"),(0,s.yt)(f),(0,c.we)(o))})});u.displayName="Box"},78219:function(e,r,t){t.d(r,{C:function(){return o}});var n=t(80269);let o={type:"enum",values:n.yT.radius.values,default:void 0}},41689:function(e,r,t){t.d(r,{C:function(){return s}});var n=t(35059),o=t(91639),l=t(33179),a=t(51337),i=t(25432),c=t(85893),s=(0,n.G)(function(e,r){let t=(0,o.mq)("Badge",e),{className:n,...s}=(0,l.Lr)(e);return(0,c.jsx)(a.m.span,{ref:r,className:(0,i.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...t}})});s.displayName="Badge"},42614:function(e,r,t){t.d(r,{u:function(){return $ae6933e535247d3d$export$7d15b64cf5a3a4c4}});function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,[r,t]){return Math.min(t,Math.max(r,e))}},25443:function(e,r,t){t.d(r,{LW:function(){return H},Ns:function(){return Y},bU:function(){return I},fC:function(){return N},l_:function(){return Z}});var n=t(87462),o=t(67294),l=t(75320),a=t(29115),i=t(25360),c=t(28771),s=t(79698),d=t(78990),u=t(9981),f=t(42614),h=t(36206);function $6c2e24571c90391f$export$3e6543de14f8614f(e,r){return(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},e)}let v="ScrollArea",[b,p]=(0,i.b)(v),[m,w]=b(v),$=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:a="hover",dir:i,scrollHideDelay:s=600,...u}=e,[f,h]=(0,o.useState)(null),[v,b]=(0,o.useState)(null),[p,w]=(0,o.useState)(null),[$,g]=(0,o.useState)(null),[S,E]=(0,o.useState)(null),[T,C]=(0,o.useState)(0),[y,R]=(0,o.useState)(0),[P,_]=(0,o.useState)(!1),[L,z]=(0,o.useState)(!1),D=(0,c.e)(r,e=>h(e)),x=(0,d.gm)(i);return(0,o.createElement)(m,{scope:t,type:a,dir:x,scrollHideDelay:s,scrollArea:f,viewport:v,onViewportChange:b,content:p,onContentChange:w,scrollbarX:$,onScrollbarXChange:g,scrollbarXEnabled:P,onScrollbarXEnabledChange:_,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:L,onScrollbarYEnabledChange:z,onCornerWidthChange:C,onCornerHeightChange:R},(0,o.createElement)(l.WV.div,(0,n.Z)({dir:x},u,{ref:D,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})))}),g=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:a,...i}=e,s=w("ScrollAreaViewport",t),d=(0,o.useRef)(null),u=(0,c.e)(r,d,s.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},i,{ref:u,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),S="ScrollAreaScrollbar",E=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=w(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,o.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,o.createElement)(T,(0,n.Z)({},l,{ref:r,forceMount:t})):"scroll"===a.type?(0,o.createElement)(C,(0,n.Z)({},l,{ref:r,forceMount:t})):"auto"===a.type?(0,o.createElement)(y,(0,n.Z)({},l,{ref:r,forceMount:t})):"always"===a.type?(0,o.createElement)(R,(0,n.Z)({},l,{ref:r})):null}),T=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=w(S,e.__scopeScrollArea),[c,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=i.scrollArea,r=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(r),s(!0)},handlePointerLeave=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[i.scrollArea,i.scrollHideDelay]),(0,o.createElement)(a.z,{present:t||c},(0,o.createElement)(y,(0,n.Z)({"data-state":c?"visible":"hidden"},l,{ref:r})))}),C=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=w(S,e.__scopeScrollArea),c="horizontal"===e.orientation,s=$57acba87d6e25586$var$useDebounceCallback(()=>u("SCROLL_END"),100),[d,u]=$6c2e24571c90391f$export$3e6543de14f8614f("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return(0,o.useEffect)(()=>{if("idle"===d){let e=window.setTimeout(()=>u("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,i.scrollHideDelay,u]),(0,o.useEffect)(()=>{let e=i.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],handleScroll=()=>{let n=e[r],o=t!==n;o&&(u("SCROLL"),s()),t=n};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[i.viewport,c,u,s]),(0,o.createElement)(a.z,{present:t||"hidden"!==d},(0,o.createElement)(R,(0,n.Z)({"data-state":"hidden"===d?"hidden":"visible"},l,{ref:r,onPointerEnter:(0,h.M)(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:(0,h.M)(e.onPointerLeave,()=>u("POINTER_LEAVE"))})))}),y=(0,o.forwardRef)((e,r)=>{let t=w(S,e.__scopeScrollArea),{forceMount:l,...i}=e,[c,s]=(0,o.useState)(!1),d="horizontal"===e.orientation,u=$57acba87d6e25586$var$useDebounceCallback(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(d?e:r)}},10);return $57acba87d6e25586$var$useResizeObserver(t.viewport,u),$57acba87d6e25586$var$useResizeObserver(t.content,u),(0,o.createElement)(a.z,{present:l||c},(0,o.createElement)(R,(0,n.Z)({"data-state":c?"visible":"hidden"},i,{ref:r})))}),R=(0,o.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,a=w(S,e.__scopeScrollArea),i=(0,o.useRef)(null),c=(0,o.useRef)(0),[s,d]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=$57acba87d6e25586$var$getThumbRatio(s.viewport,s.content),f={...l,sizes:s,onSizesChange:d,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function getScrollPosition(e,r){return $57acba87d6e25586$var$getScrollPositionFromPointer(e,c.current,s,r)}return"horizontal"===t?(0,o.createElement)(P,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s,a.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=getScrollPosition(e,a.dir))}})):"vertical"===t?(0,o.createElement)(_,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,r=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=getScrollPosition(e))}})):null}),P=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,i=w(S,e.__scopeScrollArea),[s,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=(0,c.e)(r,u,i.onScrollbarXChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(D,(0,n.Z)({"data-orientation":"horizontal"},a,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(s.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingRight)}})}}))}),_=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,i=w(S,e.__scopeScrollArea),[s,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=(0,c.e)(r,u,i.onScrollbarYChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(D,(0,n.Z)({"data-orientation":"vertical"},a,{ref:f,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(s.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(s.paddingBottom)}})}}))}),[L,z]=b(S),D=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:a,hasThumb:i,onThumbChange:d,onThumbPointerUp:u,onThumbPointerDown:f,onThumbPositionChange:v,onDragScroll:b,onWheelScroll:p,onResize:m,...$}=e,g=w(S,t),[E,T]=(0,o.useState)(null),C=(0,c.e)(r,e=>T(e)),y=(0,o.useRef)(null),R=(0,o.useRef)(""),P=g.viewport,_=a.content-a.viewport,z=(0,s.W)(p),D=(0,s.W)(v),x=$57acba87d6e25586$var$useDebounceCallback(m,10);function handleDragScroll(e){if(y.current){let r=e.clientX-y.current.left,t=e.clientY-y.current.top;b({x:r,y:t})}}return(0,o.useEffect)(()=>{let handleWheel=e=>{let r=e.target,t=null==E?void 0:E.contains(r);t&&z(e,_)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[P,E,_,z]),(0,o.useEffect)(D,[a,D]),$57acba87d6e25586$var$useResizeObserver(E,x),$57acba87d6e25586$var$useResizeObserver(g.content,x),(0,o.createElement)(L,{scope:t,scrollbar:E,hasThumb:i,onThumbChange:(0,s.W)(d),onThumbPointerUp:(0,s.W)(u),onThumbPositionChange:D,onThumbPointerDown:(0,s.W)(f)},(0,o.createElement)(l.WV.div,(0,n.Z)({},$,{ref:C,style:{position:"absolute",...$.style},onPointerDown:(0,h.M)(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),y.current=E.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,h.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,h.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,g.viewport&&(g.viewport.style.scrollBehavior=""),y.current=null})})))}),x="ScrollAreaThumb",W=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,i=z(x,e.__scopeScrollArea);return(0,o.createElement)(a.z,{present:t||i.hasThumb},(0,o.createElement)(A,(0,n.Z)({ref:r},l)))}),A=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:a,...i}=e,s=w(x,t),d=z(x,t),{onThumbPositionChange:u}=d,f=(0,c.e)(r,e=>d.onThumbChange(e)),v=(0,o.useRef)(),b=$57acba87d6e25586$var$useDebounceCallback(()=>{v.current&&(v.current(),v.current=void 0)},100);return(0,o.useEffect)(()=>{let e=s.viewport;if(e){let handleScroll=()=>{if(b(),!v.current){let r=$57acba87d6e25586$var$addUnlinkedScrollListener(e,u);v.current=r,u()}};return u(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[s.viewport,b,u]),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-state":d.hasThumb?"visible":"hidden"},i,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:(0,h.M)(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;d.onThumbPointerDown({x:n,y:o})}),onPointerUp:(0,h.M)(e.onPointerUp,d.onThumbPointerUp)}))}),O="ScrollAreaCorner",k=(0,o.forwardRef)((e,r)=>{let t=w(O,e.__scopeScrollArea),l=!!(t.scrollbarX&&t.scrollbarY),a="scroll"!==t.type&&l;return a?(0,o.createElement)(M,(0,n.Z)({},e,{ref:r})):null}),M=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...a}=e,i=w(O,t),[c,s]=(0,o.useState)(0),[d,u]=(0,o.useState)(0);return $57acba87d6e25586$var$useResizeObserver(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),u(r)}),$57acba87d6e25586$var$useResizeObserver(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),c&&d?(0,o.createElement)(l.WV.div,(0,n.Z)({},a,{ref:r,style:{width:c,height:d,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}})):null});function $57acba87d6e25586$var$toInt(e){return e?parseInt(e,10):0}function $57acba87d6e25586$var$getThumbRatio(e,r){let t=e/r;return isNaN(t)?0:t}function $57acba87d6e25586$var$getThumbSize(e){let r=$57acba87d6e25586$var$getThumbRatio(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-t)*r;return Math.max(n,18)}function $57acba87d6e25586$var$getScrollPositionFromPointer(e,r,t,n="ltr"){let o=$57acba87d6e25586$var$getThumbSize(t),l=r||o/2,a=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),c=t.content-t.viewport,s=$57acba87d6e25586$var$linearScale([a,i],"ltr"===n?[0,c]:[-1*c,0]);return s(e)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(e,r,t="ltr"){let n=$57acba87d6e25586$var$getThumbSize(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,a=r.content-r.viewport,i="ltr"===t?[0,a]:[-1*a,0],c=(0,f.u)(e,i),s=$57acba87d6e25586$var$linearScale([0,a],[0,l-n]);return s(c)}function $57acba87d6e25586$var$linearScale(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}let $57acba87d6e25586$var$addUnlinkedScrollListener=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function loop(){let o={left:e.scrollLeft,top:e.scrollTop},l=t.left!==o.left,a=t.top!==o.top;(l||a)&&r(),t=o,n=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(n)};function $57acba87d6e25586$var$useDebounceCallback(e,r){let t=(0,s.W)(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function $57acba87d6e25586$var$useResizeObserver(e,r){let t=(0,s.W)(r);(0,u.b)(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}let N=$,Z=g,H=E,I=W,Y=k}}]);