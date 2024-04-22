"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[363],{1675:function(e,t,r){r.d(t,{W:function(){return u}});var l=r(7294),n=r(3967),o=r.n(n);let a={size:{type:"enum",values:["1","2","3","4"],default:"4",responsive:!0},display:{type:"enum",values:["none","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),c=r(6776);let u=l.forwardRef((e,t)=>{let{rest:r,...n}=(0,i.FY)(e),{rest:u,...d}=(0,s.F8)(r),{children:p,className:f,size:v=a.size.default,display:h=a.display.default,...b}=u;return l.createElement("div",{...b,ref:t,className:o()("rt-Container",f,(0,c.g)(v,"rt-r-size"),(0,c.g)(h,"rt-r-display"),(0,s.yt)(d),(0,i.we)(n))},l.createElement("div",{className:"rt-ContainerInner"},p))});u.displayName="Container"},467:function(e,t,r){r.d(t,{k:function(){return d}});var l=r(7294),n=r(3967),o=r.n(n),a=r(8426),i=r(2032),s=r(3843),c=r(134),u=r(6776);let d=l.forwardRef((e,t)=>{let{rest:r,...n}=(0,s.FY)(e),{rest:d,...p}=(0,c.F8)(r),{className:f,asChild:v,display:h=i.l.display.default,direction:b=i.l.direction.default,align:m=i.l.align.default,justify:g=i.l.justify.default,wrap:w=i.l.wrap.default,gap:$=i.l.gap.default,...S}=d,y=v?a.g7:"div";return l.createElement(y,{...S,ref:t,className:o()("rt-Flex",f,(0,u.g)(h,"rt-r-display"),(0,u.g)(b,"rt-r-fd"),(0,u.g)(m,"rt-r-ai"),(0,u.g)(g,"rt-r-jc",{between:"space-between"}),(0,u.g)(w,"rt-r-fw"),(0,u.g)($,"rt-r-gap"),(0,c.yt)(p),(0,s.we)(n))})});d.displayName="Flex"},2032:function(e,t,r){r.d(t,{l:function(){return l}});let l={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}}},8336:function(e,t,r){r.d(t,{x:function(){return d}});var l=r(7294),n=r(3967),o=r.n(n),a=r(5443),i=r(8219);let s={size:{type:"enum",values:["1","2","3"],default:"1",responsive:!0},radius:i.C,scrollbars:{type:"enum",values:["vertical","horizontal","both"],default:"both"}};var c=r(3843),u=r(6776);let d=l.forwardRef((e,t)=>{let{rest:r,...n}=(0,c.FY)(e),{className:i,style:d,type:p,scrollHideDelay:f="scroll"!==p?0:void 0,dir:v,size:h=s.size.default,radius:b=s.radius.default,scrollbars:m=s.scrollbars.default,...g}=r;return l.createElement(a.fC,{type:p,scrollHideDelay:f,className:o()("rt-ScrollAreaRoot",i,(0,c.we)(n)),style:d},l.createElement(a.l_,{...g,ref:t,className:"rt-ScrollAreaViewport"}),l.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),"vertical"!==m?l.createElement(a.LW,{"data-radius":b,orientation:"horizontal",className:o()("rt-ScrollAreaScrollbar",(0,u.g)(h,"rt-r-size"))},l.createElement(a.bU,{className:"rt-ScrollAreaThumb"})):null,"horizontal"!==m?l.createElement(a.LW,{"data-radius":b,orientation:"vertical",className:o()("rt-ScrollAreaScrollbar",(0,u.g)(h,"rt-r-size"))},l.createElement(a.bU,{className:"rt-ScrollAreaThumb"})):null,"both"===m?l.createElement(a.Ns,{className:"rt-ScrollAreaCorner"}):null)});d.displayName="ScrollArea"},134:function(e,t,r){r.d(t,{$G:function(){return withPaddingProps},F8:function(){return extractLayoutProps},Lp:function(){return extractPaddingProps},yt:function(){return withLayoutProps}});var l=r(6776);let n=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=i.p.default,px:r=i.px.default,py:l=i.py.default,pt:n=i.pt.default,pr:o=i.pr.default,pb:a=i.pb.default,pl:s=i.pl.default,...c}=e;return{p:t,px:r,py:l,pt:n,pr:o,pb:a,pl:s,rest:c}}function withPaddingProps(e){return[(0,l.g)(e.p,"rt-r-p"),(0,l.g)(e.px,"rt-r-px"),(0,l.g)(e.py,"rt-r-py"),(0,l.g)(e.pt,"rt-r-pt"),(0,l.g)(e.pr,"rt-r-pr"),(0,l.g)(e.pb,"rt-r-pb"),(0,l.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let o=["auto","0","50%","100%"],a=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],i={p:{type:"enum",values:n,default:void 0,responsive:!0},px:{type:"enum",values:n,default:void 0,responsive:!0},py:{type:"enum",values:n,default:void 0,responsive:!0},pt:{type:"enum",values:n,default:void 0,responsive:!0},pr:{type:"enum",values:n,default:void 0,responsive:!0},pb:{type:"enum",values:n,default:void 0,responsive:!0},pl:{type:"enum",values:n,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:o,default:void 0,responsive:!0},top:{type:"enum",values:o,default:void 0,responsive:!0},right:{type:"enum",values:o,default:void 0,responsive:!0},bottom:{type:"enum",values:o,default:void 0,responsive:!0},left:{type:"enum",values:o,default:void 0,responsive:!0},width:{type:"enum",values:a,default:void 0,responsive:!0},height:{type:"enum",values:a,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:l=i.position.default,width:n=i.width.default,height:o=i.height.default,inset:a=i.inset.default,top:s=i.top.default,bottom:c=i.bottom.default,left:u=i.left.default,right:d=i.right.default,shrink:p=i.shrink.default,grow:f=i.grow.default,...v}=t;return{...r,position:l,width:n,height:o,inset:a,top:s,bottom:c,left:u,right:d,shrink:p,grow:f,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,l.g)(e.position,"rt-r-position"),(0,l.g)(e.shrink,"rt-r-fs"),(0,l.g)(e.grow,"rt-r-fg"),(0,l.g)(e.width,"rt-r-w"),(0,l.g)(e.height,"rt-r-h"),(0,l.g)(e.inset,"rt-r-inset"),(0,l.g)(e.top,"rt-r-top"),(0,l.g)(e.bottom,"rt-r-bottom"),(0,l.g)(e.left,"rt-r-left"),(0,l.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},8219:function(e,t,r){r.d(t,{C:function(){return n}});var l=r(269);let n={type:"enum",values:l.yT.radius.values,default:void 0}},2614:function(e,t,r){r.d(t,{u:function(){return $ae6933e535247d3d$export$7d15b64cf5a3a4c4}});function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e,[t,r]){return Math.min(r,Math.max(t,e))}},5443:function(e,t,r){r.d(t,{LW:function(){return H},Ns:function(){return Z},bU:function(){return I},fC:function(){return M},l_:function(){return F}});var l=r(7462),n=r(7294),o=r(5320),a=r(9115),i=r(5360),s=r(8771),c=r(9698),u=r(8990),d=r(9981),p=r(2614),f=r(6206);function $6c2e24571c90391f$export$3e6543de14f8614f(e,t){return(0,n.useReducer)((e,r)=>{let l=t[e][r];return null!=l?l:e},e)}let v="ScrollArea",[h,b]=(0,i.b)(v),[m,g]=h(v),w=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:a="hover",dir:i,scrollHideDelay:c=600,...d}=e,[p,f]=(0,n.useState)(null),[v,h]=(0,n.useState)(null),[b,g]=(0,n.useState)(null),[w,$]=(0,n.useState)(null),[S,y]=(0,n.useState)(null),[E,P]=(0,n.useState)(0),[C,T]=(0,n.useState)(0),[R,z]=(0,n.useState)(!1),[L,x]=(0,n.useState)(!1),_=(0,s.e)(t,e=>f(e)),D=(0,u.gm)(i);return(0,n.createElement)(m,{scope:r,type:a,dir:D,scrollHideDelay:c,scrollArea:p,viewport:v,onViewportChange:h,content:b,onContentChange:g,scrollbarX:w,onScrollbarXChange:$,scrollbarXEnabled:R,onScrollbarXEnabledChange:z,scrollbarY:S,onScrollbarYChange:y,scrollbarYEnabled:L,onScrollbarYEnabledChange:x,onCornerWidthChange:P,onCornerHeightChange:T},(0,n.createElement)(o.WV.div,(0,l.Z)({dir:D},d,{ref:_,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})))}),$=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:a,...i}=e,c=g("ScrollAreaViewport",r),u=(0,n.useRef)(null),d=(0,s.e)(t,u,c.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(o.WV.div,(0,l.Z)({"data-radix-scroll-area-viewport":""},i,{ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),S="ScrollAreaScrollbar",y=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,a=g(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:s}=a,c="horizontal"===e.orientation;return(0,n.useEffect)(()=>(c?i(!0):s(!0),()=>{c?i(!1):s(!1)}),[c,i,s]),"hover"===a.type?(0,n.createElement)(E,(0,l.Z)({},o,{ref:t,forceMount:r})):"scroll"===a.type?(0,n.createElement)(P,(0,l.Z)({},o,{ref:t,forceMount:r})):"auto"===a.type?(0,n.createElement)(C,(0,l.Z)({},o,{ref:t,forceMount:r})):"always"===a.type?(0,n.createElement)(T,(0,l.Z)({},o,{ref:t})):null}),E=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,i=g(S,e.__scopeScrollArea),[s,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=i.scrollArea,t=0;if(e){let handlePointerEnter=()=>{window.clearTimeout(t),c(!0)},handlePointerLeave=()=>{t=window.setTimeout(()=>c(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",handlePointerEnter),e.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",handlePointerEnter),e.removeEventListener("pointerleave",handlePointerLeave)}}},[i.scrollArea,i.scrollHideDelay]),(0,n.createElement)(a.z,{present:r||s},(0,n.createElement)(C,(0,l.Z)({"data-state":s?"visible":"hidden"},o,{ref:t})))}),P=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,i=g(S,e.__scopeScrollArea),s="horizontal"===e.orientation,c=$57acba87d6e25586$var$useDebounceCallback(()=>d("SCROLL_END"),100),[u,d]=$6c2e24571c90391f$export$3e6543de14f8614f("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,d]),(0,n.useEffect)(()=>{let e=i.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],handleScroll=()=>{let l=e[t],n=r!==l;n&&(d("SCROLL"),c()),r=l};return e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[i.viewport,s,d,c]),(0,n.createElement)(a.z,{present:r||"hidden"!==u},(0,n.createElement)(T,(0,l.Z)({"data-state":"hidden"===u?"hidden":"visible"},o,{ref:t,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),C=(0,n.forwardRef)((e,t)=>{let r=g(S,e.__scopeScrollArea),{forceMount:o,...i}=e,[s,c]=(0,n.useState)(!1),u="horizontal"===e.orientation,d=$57acba87d6e25586$var$useDebounceCallback(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(u?e:t)}},10);return $57acba87d6e25586$var$useResizeObserver(r.viewport,d),$57acba87d6e25586$var$useResizeObserver(r.content,d),(0,n.createElement)(a.z,{present:o||s},(0,n.createElement)(T,(0,l.Z)({"data-state":s?"visible":"hidden"},i,{ref:t})))}),T=(0,n.forwardRef)((e,t)=>{let{orientation:r="vertical",...o}=e,a=g(S,e.__scopeScrollArea),i=(0,n.useRef)(null),s=(0,n.useRef)(0),[c,u]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=$57acba87d6e25586$var$getThumbRatio(c.viewport,c.content),p={...o,sizes:c,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function getScrollPosition(e,t){return $57acba87d6e25586$var$getScrollPositionFromPointer(e,s.current,c,t)}return"horizontal"===r?(0,n.createElement)(R,(0,l.Z)({},p,{ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,t=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,c,a.dir);i.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=getScrollPosition(e,a.dir))}})):"vertical"===r?(0,n.createElement)(z,(0,l.Z)({},p,{ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,t=$57acba87d6e25586$var$getThumbOffsetFromScroll(e,c);i.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=getScrollPosition(e))}})):null}),R=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,...a}=e,i=g(S,e.__scopeScrollArea),[c,u]=(0,n.useState)(),d=(0,n.useRef)(null),p=(0,s.e)(t,d,i.onScrollbarXChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(_,(0,l.Z)({"data-orientation":"horizontal"},a,{ref:p,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let l=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(l),l>0&&l<r&&t.preventDefault()}},onResize:()=>{d.current&&i.viewport&&c&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(c.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(c.paddingRight)}})}}))}),z=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,...a}=e,i=g(S,e.__scopeScrollArea),[c,u]=(0,n.useState)(),d=(0,n.useRef)(null),p=(0,s.e)(t,d,i.onScrollbarYChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(_,(0,l.Z)({"data-orientation":"vertical"},a,{ref:p,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let l=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(l),l>0&&l<r&&t.preventDefault()}},onResize:()=>{d.current&&i.viewport&&c&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(c.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(c.paddingBottom)}})}}))}),[L,x]=h(S),_=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:a,hasThumb:i,onThumbChange:u,onThumbPointerUp:d,onThumbPointerDown:p,onThumbPositionChange:v,onDragScroll:h,onWheelScroll:b,onResize:m,...w}=e,$=g(S,r),[y,E]=(0,n.useState)(null),P=(0,s.e)(t,e=>E(e)),C=(0,n.useRef)(null),T=(0,n.useRef)(""),R=$.viewport,z=a.content-a.viewport,x=(0,c.W)(b),_=(0,c.W)(v),D=$57acba87d6e25586$var$useDebounceCallback(m,10);function handleDragScroll(e){if(C.current){let t=e.clientX-C.current.left,r=e.clientY-C.current.top;h({x:t,y:r})}}return(0,n.useEffect)(()=>{let handleWheel=e=>{let t=e.target,r=null==y?void 0:y.contains(t);r&&x(e,z)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})},[R,y,z,x]),(0,n.useEffect)(_,[a,_]),$57acba87d6e25586$var$useResizeObserver(y,D),$57acba87d6e25586$var$useResizeObserver($.content,D),(0,n.createElement)(L,{scope:r,scrollbar:y,hasThumb:i,onThumbChange:(0,c.W)(u),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:_,onThumbPointerDown:(0,c.W)(p)},(0,n.createElement)(o.WV.div,(0,l.Z)({},w,{ref:P,style:{position:"absolute",...w.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),C.current=y.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",$.viewport&&($.viewport.style.scrollBehavior="auto"),handleDragScroll(e)}}),onPointerMove:(0,f.M)(e.onPointerMove,handleDragScroll),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,$.viewport&&($.viewport.style.scrollBehavior=""),C.current=null})})))}),D="ScrollAreaThumb",A=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,i=x(D,e.__scopeScrollArea);return(0,n.createElement)(a.z,{present:r||i.hasThumb},(0,n.createElement)(W,(0,l.Z)({ref:t},o)))}),W=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:a,...i}=e,c=g(D,r),u=x(D,r),{onThumbPositionChange:d}=u,p=(0,s.e)(t,e=>u.onThumbChange(e)),v=(0,n.useRef)(),h=$57acba87d6e25586$var$useDebounceCallback(()=>{v.current&&(v.current(),v.current=void 0)},100);return(0,n.useEffect)(()=>{let e=c.viewport;if(e){let handleScroll=()=>{if(h(),!v.current){let t=$57acba87d6e25586$var$addUnlinkedScrollListener(e,d);v.current=t,d()}};return d(),e.addEventListener("scroll",handleScroll),()=>e.removeEventListener("scroll",handleScroll)}},[c.viewport,h,d]),(0,n.createElement)(o.WV.div,(0,l.Z)({"data-state":u.hasThumb?"visible":"hidden"},i,{ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),l=e.clientX-r.left,n=e.clientY-r.top;u.onThumbPointerDown({x:l,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,u.onThumbPointerUp)}))}),N="ScrollAreaCorner",k=(0,n.forwardRef)((e,t)=>{let r=g(N,e.__scopeScrollArea),o=!!(r.scrollbarX&&r.scrollbarY),a="scroll"!==r.type&&o;return a?(0,n.createElement)(O,(0,l.Z)({},e,{ref:t})):null}),O=(0,n.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...a}=e,i=g(N,r),[s,c]=(0,n.useState)(0),[u,d]=(0,n.useState)(0);return $57acba87d6e25586$var$useResizeObserver(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),d(t)}),$57acba87d6e25586$var$useResizeObserver(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),c(t)}),s&&u?(0,n.createElement)(o.WV.div,(0,l.Z)({},a,{ref:t,style:{width:s,height:u,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}})):null});function $57acba87d6e25586$var$toInt(e){return e?parseInt(e,10):0}function $57acba87d6e25586$var$getThumbRatio(e,t){let r=e/t;return isNaN(r)?0:r}function $57acba87d6e25586$var$getThumbSize(e){let t=$57acba87d6e25586$var$getThumbRatio(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-r)*t;return Math.max(l,18)}function $57acba87d6e25586$var$getScrollPositionFromPointer(e,t,r,l="ltr"){let n=$57acba87d6e25586$var$getThumbSize(r),o=t||n/2,a=r.scrollbar.paddingStart+o,i=r.scrollbar.size-r.scrollbar.paddingEnd-(n-o),s=r.content-r.viewport,c=$57acba87d6e25586$var$linearScale([a,i],"ltr"===l?[0,s]:[-1*s,0]);return c(e)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(e,t,r="ltr"){let l=$57acba87d6e25586$var$getThumbSize(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-n,a=t.content-t.viewport,i="ltr"===r?[0,a]:[-1*a,0],s=(0,p.u)(e,i),c=$57acba87d6e25586$var$linearScale([0,a],[0,o-l]);return c(s)}function $57acba87d6e25586$var$linearScale(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(r-e[0])}}let $57acba87d6e25586$var$addUnlinkedScrollListener=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},l=0;return!function loop(){let n={left:e.scrollLeft,top:e.scrollTop},o=r.left!==n.left,a=r.top!==n.top;(o||a)&&t(),r=n,l=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(l)};function $57acba87d6e25586$var$useDebounceCallback(e,t){let r=(0,c.W)(e),l=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(r,t)},[r,t])}function $57acba87d6e25586$var$useResizeObserver(e,t){let r=(0,c.W)(t);(0,d.b)(()=>{let t=0;if(e){let l=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return l.observe(e),()=>{window.cancelAnimationFrame(t),l.unobserve(e)}}},[e,r])}let M=w,F=$,H=y,I=A,Z=k}}]);