(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{70021:function(e,t,r){"use strict";r.d(t,{Ph:function(){return eK}});var l=r(67294),n=r(93967),a=r.n(n),o=r(87462),i=r(73935),c=r(42614),u=r(36206),d=r(25360),s=r(28771),f=r(88426);function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(e){let t=e+"CollectionProvider",[r,n]=(0,d.b)(t),[a,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),i=e+"CollectionSlot",c=l.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=o(i,r),c=(0,s.e)(t,a.collectionRef);return l.createElement(f.g7,{ref:c},n)}),u=e+"CollectionItemSlot",p="data-radix-collection-item",m=l.forwardRef((e,t)=>{let{scope:r,children:n,...a}=e,i=l.useRef(null),c=(0,s.e)(t,i),d=o(u,r);return l.useEffect(()=>(d.itemMap.set(i,{ref:i,...a}),()=>void d.itemMap.delete(i))),l.createElement(f.g7,{[p]:"",ref:c},n)});return[{Provider:e=>{let{scope:t,children:r}=e,n=l.useRef(null),o=l.useRef(new Map).current;return l.createElement(a,{scope:t,itemMap:o,collectionRef:n},r)},Slot:c,ItemSlot:m},function(t){let r=o(e+"CollectionConsumer",t),n=l.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),l=Array.from(r.itemMap.values()),n=l.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return n},[r.collectionRef,r.itemMap]);return n},n]}var p=r(78990),m=r(46063),h=r(27552),v=r(95420),g=r(91276),w=r(77324),b=r(42651),C=r(75320),y=r(79698),S=r(77342),E=r(9981);function $010c2913dbd2fe3d$export$5cae361ad82dce8b(e){let t=(0,l.useRef)({value:e,previous:e});return(0,l.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var x=r(96219),R=r(23541),_=r(97582),M=r(71642),P=r(99495),k=(0,r(87122)._)(),nothing=function(){},T=l.forwardRef(function(e,t){var r=l.useRef(null),n=l.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),a=n[0],o=n[1],i=e.forwardProps,c=e.children,u=e.className,d=e.removeScrollBar,s=e.enabled,f=e.shards,p=e.sideCar,m=e.noIsolation,h=e.inert,v=e.allowPinchZoom,g=e.as,w=void 0===g?"div":g,b=(0,_._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),C=(0,P.q)([r,t]),y=(0,_.pi)((0,_.pi)({},b),a);return l.createElement(l.Fragment,null,s&&l.createElement(p,{sideCar:k,removeScrollBar:d,shards:f,noIsolation:m,inert:h,setCallbacks:o,allowPinchZoom:!!v,lockRef:r}),i?l.cloneElement(l.Children.only(c),(0,_.pi)((0,_.pi)({},y),{ref:C})):l.createElement(w,(0,_.pi)({},y,{className:u,ref:C}),c))});T.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},T.classNames={fullWidth:M.zi,zeroRight:M.pF};var L=r(66781),I=r(37087),N=r(6525),$=!1;if("undefined"!=typeof window)try{var D=Object.defineProperty({},"passive",{get:function(){return $=!0,!0}});window.addEventListener("test",D,D),window.removeEventListener("test",D,D)}catch(e){$=!1}var V=!!$&&{passive:!1},elementCanBeScrolled=function(e,t){var r=window.getComputedStyle(e);return"hidden"!==r[t]&&!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},locationCouldBeScrolled=function(e,t){var r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),elementCouldBeScrolled(e,r)){var l=getScrollVariables(e,r);if(l[1]>l[2])return!0}r=r.parentNode}while(r&&r!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,r,l,n){var a,o=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=o*l,c=r.target,u=t.contains(c),d=!1,s=i>0,f=0,p=0;do{var m=getScrollVariables(e,c),h=m[0],v=m[1]-m[2]-o*h;(h||v)&&elementCouldBeScrolled(e,c)&&(f+=v,p+=h),c=c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return s&&(n&&0===f||!n&&i>f)?d=!0:!s&&(n&&0===p||!n&&-i>p)&&(d=!0),d},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},O=0,B=[];function RemoveScrollSideCar(e){var t=l.useRef([]),r=l.useRef([0,0]),n=l.useRef(),a=l.useState(O++)[0],o=l.useState(function(){return(0,N.Ws)()})[0],i=l.useRef(e);l.useEffect(function(){i.current=e},[e]),l.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(0,_.ev)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=l.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var l,a=getTouchXY(e),o=r.current,c="deltaX"in e?e.deltaX:o[0]-a[0],u="deltaY"in e?e.deltaY:o[1]-a[1],d=e.target,s=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=locationCouldBeScrolled(s,d);if(!f)return!0;if(f?l=s:(l="v"===s?"h":"v",f=locationCouldBeScrolled(s,d)),!f)return!1;if(!n.current&&"changedTouches"in e&&(c||u)&&(n.current=l),!l)return!0;var p=n.current||l;return handleScroll(p,t,e,"h"===p?c:u,!0)},[]),u=l.useCallback(function(e){if(B.length&&B[B.length-1]===o){var r="deltaY"in e?getDeltaXY(e):getTouchXY(e),l=t.current.filter(function(t){var l;return t.name===e.type&&t.target===e.target&&(l=t.delta)[0]===r[0]&&l[1]===r[1]})[0];if(l&&l.should){e.cancelable&&e.preventDefault();return}if(!l){var n=(i.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(n.length>0?c(e,n[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=l.useCallback(function(e,r,l,n){var a={name:e,delta:r,target:l,should:n};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=l.useCallback(function(e){r.current=getTouchXY(e),n.current=void 0},[]),f=l.useCallback(function(t){d(t.type,getDeltaXY(t),t.target,c(t,e.lockRef.current))},[]),p=l.useCallback(function(t){d(t.type,getTouchXY(t),t.target,c(t,e.lockRef.current))},[]);l.useEffect(function(){return B.push(o),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",u,V),document.addEventListener("touchmove",u,V),document.addEventListener("touchstart",s,V),function(){B=B.filter(function(e){return e!==o}),document.removeEventListener("wheel",u,V),document.removeEventListener("touchmove",u,V),document.removeEventListener("touchstart",s,V)}},[]);var m=e.removeScrollBar,h=e.inert;return l.createElement(l.Fragment,null,h?l.createElement(o,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,m?l.createElement(I.jp,{gapMode:"margin"}):null)}var W=(0,L.L)(k,RemoveScrollSideCar),A=l.forwardRef(function(e,t){return l.createElement(T,(0,_.pi)({},e,{ref:t,sideCar:W}))});A.classNames=T.classNames;let H=[" ","Enter","ArrowUp","ArrowDown"],Z=[" ","Enter"],Y="Select",[F,X,j]=$e02a7d9cb1dc128c$export$c74125a8e3af6bb2(Y),[z,K]=(0,d.b)(Y,[j,w.D7]),U=(0,w.D7)(),[q,G]=z(Y),[Q,J]=z(Y),ee=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,disabled:n=!1,...a}=e,i=U(r),c=G("SelectTrigger",r),d=c.disabled||n,f=(0,s.e)(t,c.onTriggerChange),p=X(r),[m,h,v]=$cc7e05a45900e73f$var$useTypeaheadSearch(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===c.value),l=$cc7e05a45900e73f$var$findNextItem(t,e,r);void 0!==l&&c.onValueChange(l.value)}),handleOpen=()=>{d||(c.onOpenChange(!0),v())};return(0,l.createElement)(w.ee,(0,o.Z)({asChild:!0},i),(0,l.createElement)(C.WV.button,(0,o.Z)({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":$cc7e05a45900e73f$var$shouldShowPlaceholder(c.value)?"":void 0},a,{ref:f,onClick:(0,u.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,u.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(handleOpen(),c.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,u.M)(a.onKeyDown,e=>{let t=""!==m.current,r=e.ctrlKey||e.altKey||e.metaKey;r||1!==e.key.length||h(e.key),(!t||" "!==e.key)&&H.includes(e.key)&&(handleOpen(),e.preventDefault())})})))}),et=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,className:n,style:a,children:i,placeholder:c="",...u}=e,d=G("SelectValue",r),{onValueNodeHasChildrenChange:f}=d,p=void 0!==i,m=(0,s.e)(t,d.onValueNodeChange);return(0,E.b)(()=>{f(p)},[f,p]),(0,l.createElement)(C.WV.span,(0,o.Z)({},u,{ref:m,style:{pointerEvents:"none"}}),$cc7e05a45900e73f$var$shouldShowPlaceholder(d.value)?(0,l.createElement)(l.Fragment,null,c):i)}),er=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,children:n,...a}=e;return(0,l.createElement)(C.WV.span,(0,o.Z)({"aria-hidden":!0},a,{ref:t}),n||"▼")}),el="SelectContent",en=(0,l.forwardRef)((e,t)=>{let r=G(el,e.__scopeSelect),[n,a]=(0,l.useState)();return((0,E.b)(()=>{a(new DocumentFragment)},[]),r.open)?(0,l.createElement)(ei,(0,o.Z)({},e,{ref:t})):n?(0,i.createPortal)((0,l.createElement)(ea,{scope:e.__scopeSelect},(0,l.createElement)(F.Slot,{scope:e.__scopeSelect},(0,l.createElement)("div",null,e.children))),n):null}),[ea,eo]=z(el),ei=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:c,side:d,sideOffset:p,align:g,alignOffset:w,arrowPadding:b,collisionBoundary:C,collisionPadding:y,sticky:S,hideWhenDetached:E,avoidCollisions:x,..._}=e,M=G(el,r),[P,k]=(0,l.useState)(null),[T,L]=(0,l.useState)(null),I=(0,s.e)(t,e=>k(e)),[N,$]=(0,l.useState)(null),[D,V]=(0,l.useState)(null),O=X(r),[B,W]=(0,l.useState)(!1),H=(0,l.useRef)(!1);(0,l.useEffect)(()=>{if(P)return(0,R.Ry)(P)},[P]),(0,h.EW)();let Z=(0,l.useCallback)(e=>{let[t,...r]=O().map(e=>e.ref.current),[l]=r.slice(-1),n=document.activeElement;for(let r of e)if(r===n||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&T&&(T.scrollTop=0),r===l&&T&&(T.scrollTop=T.scrollHeight),null==r||r.focus(),document.activeElement!==n))return},[O,T]),Y=(0,l.useCallback)(()=>Z([N,P]),[Z,N,P]);(0,l.useEffect)(()=>{B&&Y()},[B,Y]);let{onOpenChange:F,triggerPointerDownPosRef:j}=M;(0,l.useEffect)(()=>{if(P){let e={x:0,y:0},handlePointerMove=t=>{var r,l,n,a;e={x:Math.abs(Math.round(t.pageX)-(null!==(r=null===(l=j.current)||void 0===l?void 0:l.x)&&void 0!==r?r:0)),y:Math.abs(Math.round(t.pageY)-(null!==(n=null===(a=j.current)||void 0===a?void 0:a.y)&&void 0!==n?n:0))}},handlePointerUp=t=>{e.x<=10&&e.y<=10?t.preventDefault():P.contains(t.target)||F(!1),document.removeEventListener("pointermove",handlePointerMove),j.current=null};return null!==j.current&&(document.addEventListener("pointermove",handlePointerMove),document.addEventListener("pointerup",handlePointerUp,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",handlePointerMove),document.removeEventListener("pointerup",handlePointerUp,{capture:!0})}}},[P,F,j]),(0,l.useEffect)(()=>{let close=()=>F(!1);return window.addEventListener("blur",close),window.addEventListener("resize",close),()=>{window.removeEventListener("blur",close),window.removeEventListener("resize",close)}},[F]);let[z,K]=$cc7e05a45900e73f$var$useTypeaheadSearch(e=>{let t=O().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),l=$cc7e05a45900e73f$var$findNextItem(t,e,r);l&&setTimeout(()=>l.ref.current.focus())}),U=(0,l.useCallback)((e,t,r)=>{let l=!H.current&&!r,n=void 0!==M.value&&M.value===t;(n||l)&&($(e),l&&(H.current=!0))},[M.value]),q=(0,l.useCallback)(()=>null==P?void 0:P.focus(),[P]),Q=(0,l.useCallback)((e,t,r)=>{let l=!H.current&&!r,n=void 0!==M.value&&M.value===t;(n||l)&&V(e)},[M.value]),J="popper"===n?eu:ec,ee=J===eu?{side:d,sideOffset:p,align:g,alignOffset:w,arrowPadding:b,collisionBoundary:C,collisionPadding:y,sticky:S,hideWhenDetached:E,avoidCollisions:x}:{};return(0,l.createElement)(ea,{scope:r,content:P,viewport:T,onViewportChange:L,itemRefCallback:U,selectedItem:N,onItemLeave:q,itemTextRefCallback:Q,focusSelectedItem:Y,selectedItemText:D,position:n,isPositioned:B,searchRef:z},(0,l.createElement)(A,{as:f.g7,allowPinchZoom:!0},(0,l.createElement)(v.M,{asChild:!0,trapped:M.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,u.M)(a,e=>{var t;null===(t=M.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,l.createElement)(m.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>M.onOpenChange(!1)},(0,l.createElement)(J,(0,o.Z)({role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:e=>e.preventDefault()},_,ee,{onPlaced:()=>W(!0),ref:I,style:{display:"flex",flexDirection:"column",outline:"none",..._.style},onKeyDown:(0,u.M)(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||K(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=O().filter(e=>!e.disabled),r=t.map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(r=r.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,l=r.indexOf(t);r=r.slice(l+1)}setTimeout(()=>Z(r)),e.preventDefault()}})}))))))}),ec=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,onPlaced:n,...a}=e,i=G(el,r),u=eo(el,r),[d,f]=(0,l.useState)(null),[p,m]=(0,l.useState)(null),h=(0,s.e)(t,e=>m(e)),v=X(r),g=(0,l.useRef)(!1),w=(0,l.useRef)(!0),{viewport:b,selectedItem:y,selectedItemText:S,focusSelectedItem:x}=u,R=(0,l.useCallback)(()=>{if(i.trigger&&i.valueNode&&d&&p&&b&&y&&S){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),l=S.getBoundingClientRect();if("rtl"!==i.dir){let n=l.left-t.left,a=r.left-n,o=e.left-a,i=e.width+o,u=Math.max(i,t.width),s=window.innerWidth-10,f=(0,c.u)(a,[10,s-u]);d.style.minWidth=i+"px",d.style.left=f+"px"}else{let n=t.right-l.right,a=window.innerWidth-r.right-n,o=window.innerWidth-e.right-a,i=e.width+o,u=Math.max(i,t.width),s=window.innerWidth-10,f=(0,c.u)(a,[10,s-u]);d.style.minWidth=i+"px",d.style.right=f+"px"}let a=v(),o=window.innerHeight-20,u=b.scrollHeight,s=window.getComputedStyle(p),f=parseInt(s.borderTopWidth,10),m=parseInt(s.paddingTop,10),h=parseInt(s.borderBottomWidth,10),w=parseInt(s.paddingBottom,10),C=f+m+u+w+h,E=Math.min(5*y.offsetHeight,C),x=window.getComputedStyle(b),R=parseInt(x.paddingTop,10),_=parseInt(x.paddingBottom,10),M=e.top+e.height/2-10,P=y.offsetHeight/2,k=y.offsetTop+P,T=f+m+k;if(T<=M){let e=y===a[a.length-1].ref.current;d.style.bottom="0px";let t=p.clientHeight-b.offsetTop-b.offsetHeight;d.style.height=T+Math.max(o-M,P+(e?_:0)+t+h)+"px"}else{let e=y===a[0].ref.current;d.style.top="0px";let t=Math.max(M,f+b.offsetTop+(e?R:0)+P);d.style.height=t+(C-T)+"px",b.scrollTop=T-M+b.offsetTop}d.style.margin="10px 0",d.style.minHeight=E+"px",d.style.maxHeight=o+"px",null==n||n(),requestAnimationFrame(()=>g.current=!0)}},[v,i.trigger,i.valueNode,d,p,b,y,S,i.dir,n]);(0,E.b)(()=>R(),[R]);let[_,M]=(0,l.useState)();(0,E.b)(()=>{p&&M(window.getComputedStyle(p).zIndex)},[p]);let P=(0,l.useCallback)(e=>{e&&!0===w.current&&(R(),null==x||x(),w.current=!1)},[R,x]);return(0,l.createElement)(ed,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:g,onScrollButtonChange:P},(0,l.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:_}},(0,l.createElement)(C.WV.div,(0,o.Z)({},a,{ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}}))))}),eu=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:a=10,...i}=e,c=U(r);return(0,l.createElement)(w.VY,(0,o.Z)({},c,i,{ref:t,align:n,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[ed,es]=z(el,{}),ef="SelectViewport",ep=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e,a=eo(ef,r),i=es(ef,r),c=(0,s.e)(t,a.onViewportChange),d=(0,l.useRef)(0);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,l.createElement)(F.Slot,{scope:r},(0,l.createElement)(C.WV.div,(0,o.Z)({"data-radix-select-viewport":"",role:"presentation"},n,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...n.style},onScroll:(0,u.M)(n.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:l}=i;if(null!=l&&l.current&&r){let e=Math.abs(d.current-t.scrollTop);if(e>0){let l=window.innerHeight-20,n=parseFloat(r.style.minHeight),a=parseFloat(r.style.height),o=Math.max(n,a);if(o<l){let n=o+e,a=Math.min(l,n),i=n-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}d.current=t.scrollTop})}))))}),[em,eh]=z("SelectGroup"),ev=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e,a=(0,g.M)();return(0,l.createElement)(em,{scope:r,id:a},(0,l.createElement)(C.WV.div,(0,o.Z)({role:"group","aria-labelledby":a},n,{ref:t})))}),eg=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e,a=eh("SelectLabel",r);return(0,l.createElement)(C.WV.div,(0,o.Z)({id:a.id},n,{ref:t}))}),ew="SelectItem",[eb,eC]=z(ew),ey=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,value:n,disabled:a=!1,textValue:i,...c}=e,d=G(ew,r),f=eo(ew,r),p=d.value===n,[m,h]=(0,l.useState)(null!=i?i:""),[v,w]=(0,l.useState)(!1),b=(0,s.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,n,a)}),y=(0,g.M)(),handleSelect=()=>{a||(d.onValueChange(n),d.onOpenChange(!1))};if(""===n)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,l.createElement)(eb,{scope:r,value:n,disabled:a,textId:y,isSelected:p,onItemTextChange:(0,l.useCallback)(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[])},(0,l.createElement)(F.ItemSlot,{scope:r,value:n,disabled:a,textValue:m},(0,l.createElement)(C.WV.div,(0,o.Z)({role:"option","aria-labelledby":y,"data-highlighted":v?"":void 0,"aria-selected":p&&v,"data-state":p?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},c,{ref:b,onFocus:(0,u.M)(c.onFocus,()=>w(!0)),onBlur:(0,u.M)(c.onBlur,()=>w(!1)),onPointerUp:(0,u.M)(c.onPointerUp,handleSelect),onPointerMove:(0,u.M)(c.onPointerMove,e=>{if(a){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,u.M)(c.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,u.M)(c.onKeyDown,e=>{var t;let r=(null===(t=f.searchRef)||void 0===t?void 0:t.current)!=="";r&&" "===e.key||(Z.includes(e.key)&&handleSelect()," "===e.key&&e.preventDefault())})}))))}),eS="SelectItemText",eE=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,className:n,style:a,...c}=e,u=G(eS,r),d=eo(eS,r),f=eC(eS,r),p=J(eS,r),[m,h]=(0,l.useState)(null),v=(0,s.e)(t,e=>h(e),f.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,f.value,f.disabled)}),g=null==m?void 0:m.textContent,w=(0,l.useMemo)(()=>(0,l.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},g),[f.disabled,f.value,g]),{onNativeOptionAdd:b,onNativeOptionRemove:y}=p;return(0,E.b)(()=>(b(w),()=>y(w)),[b,y,w]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(C.WV.span,(0,o.Z)({id:f.textId},c,{ref:v})),f.isSelected&&u.valueNode&&!u.valueNodeHasChildren?(0,i.createPortal)(c.children,u.valueNode):null)}),ex=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e,a=eC("SelectItemIndicator",r);return a.isSelected?(0,l.createElement)(C.WV.span,(0,o.Z)({"aria-hidden":!0},n,{ref:t})):null}),eR=((e,t)=>{let{__scopeSelect:r,onAutoScroll:n,...a}=e,i=eo("SelectScrollButton",r),c=(0,l.useRef)(null),d=X(r),s=(0,l.useCallback)(()=>{null!==c.current&&(window.clearInterval(c.current),c.current=null)},[]);return(0,l.useEffect)(()=>()=>s(),[s]),(0,E.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,l.createElement)(C.WV.div,(0,o.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,u.M)(a.onPointerDown,()=>{null===c.current&&(c.current=window.setInterval(n,50))}),onPointerMove:(0,u.M)(a.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===c.current&&(c.current=window.setInterval(n,50))}),onPointerLeave:(0,u.M)(a.onPointerLeave,()=>{s()})}))},(0,l.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,l.createElement)(C.WV.div,(0,o.Z)({"aria-hidden":!0},n,{ref:t}))}));function $cc7e05a45900e73f$var$shouldShowPlaceholder(e){return""===e||void 0===e}let e_=(0,l.forwardRef)((e,t)=>{let{value:r,...n}=e,a=(0,l.useRef)(null),i=(0,s.e)(t,a),c=$010c2913dbd2fe3d$export$5cae361ad82dce8b(r);return(0,l.useEffect)(()=>{let e=a.current,t=window.HTMLSelectElement.prototype,l=Object.getOwnPropertyDescriptor(t,"value"),n=l.set;if(c!==r&&n){let t=new Event("change",{bubbles:!0});n.call(e,r),e.dispatchEvent(t)}},[c,r]),(0,l.createElement)(x.T,{asChild:!0},(0,l.createElement)("select",(0,o.Z)({},n,{ref:i,defaultValue:r})))});function $cc7e05a45900e73f$var$useTypeaheadSearch(e){let t=(0,y.W)(e),r=(0,l.useRef)(""),n=(0,l.useRef)(0),a=(0,l.useCallback)(e=>{let l=r.current+e;t(l),function updateSearch(e){r.current=e,window.clearTimeout(n.current),""!==e&&(n.current=window.setTimeout(()=>updateSearch(""),1e3))}(l)},[t]),o=(0,l.useCallback)(()=>{r.current="",window.clearTimeout(n.current)},[]);return(0,l.useEffect)(()=>()=>window.clearTimeout(n.current),[]),[r,a,o]}function $cc7e05a45900e73f$var$findNextItem(e,t,r){let l=t.length>1&&Array.from(t).every(e=>e===t[0]),n=l?t[0]:t,a=r?e.indexOf(r):-1,o=$cc7e05a45900e73f$var$wrapArray(e,Math.max(a,0)),i=1===n.length;i&&(o=o.filter(e=>e!==r));let c=o.find(e=>e.textValue.toLowerCase().startsWith(n.toLowerCase()));return c!==r?c:void 0}function $cc7e05a45900e73f$var$wrapArray(e,t){return e.map((r,l)=>e[(t+l)%e.length])}e_.displayName="BubbleSelect";let $cc7e05a45900e73f$export$be92b6f5f03c0fe9=e=>{let{__scopeSelect:t,children:r,open:n,defaultOpen:a,onOpenChange:o,value:i,defaultValue:c,onValueChange:u,dir:d,name:s,autoComplete:f,disabled:m,required:h}=e,v=U(t),[b,C]=(0,l.useState)(null),[y,E]=(0,l.useState)(null),[x,R]=(0,l.useState)(!1),_=(0,p.gm)(d),[M=!1,P]=(0,S.T)({prop:n,defaultProp:a,onChange:o}),[k,T]=(0,S.T)({prop:i,defaultProp:c,onChange:u}),L=(0,l.useRef)(null),I=!b||!!b.closest("form"),[N,$]=(0,l.useState)(new Set),D=Array.from(N).map(e=>e.props.value).join(";");return(0,l.createElement)(w.fC,v,(0,l.createElement)(q,{required:h,scope:t,trigger:b,onTriggerChange:C,valueNode:y,onValueNodeChange:E,valueNodeHasChildren:x,onValueNodeHasChildrenChange:R,contentId:(0,g.M)(),value:k,onValueChange:T,open:M,onOpenChange:P,dir:_,triggerPointerDownPosRef:L,disabled:m},(0,l.createElement)(F.Provider,{scope:t},(0,l.createElement)(Q,{scope:e.__scopeSelect,onNativeOptionAdd:(0,l.useCallback)(e=>{$(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,l.useCallback)(e=>{$(t=>{let r=new Set(t);return r.delete(e),r})},[])},r)),I?(0,l.createElement)(e_,{key:D,"aria-hidden":!0,required:h,tabIndex:-1,name:s,autoComplete:f,value:k,onChange:e=>T(e.target.value),disabled:m},void 0===k?(0,l.createElement)("option",{value:""}):null,Array.from(N)):null))},$cc7e05a45900e73f$export$602eac185826482c=e=>(0,l.createElement)(b.h,(0,o.Z)({asChild:!0},e));var eM=r(25443),eP=r(48291),ek=r(78219),eT=r(86679);let eL={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0}},eI={variant:{type:"enum",values:["classic","surface","soft","ghost"],default:"surface"},color:eP.m,radius:ek.C},eN={variant:{type:"enum",values:["solid","soft"],default:"solid"},color:eP.m,highContrast:eT.B};var e$=r(23843),eD=r(6776),eV=r(72702);let eO=l.forwardRef(({color:e="currentColor",...t},r)=>l.createElement("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:e,xmlns:"http://www.w3.org/2000/svg",...t,ref:r},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"})));eO.displayName="ThickCheckIcon";let eB=l.forwardRef(({color:e="currentColor",...t},r)=>l.createElement("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:e,xmlns:"http://www.w3.org/2000/svg",...t,ref:r},l.createElement("path",{d:"M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z"})));eB.displayName="ChevronDownIcon";let eW=l.forwardRef(({color:e="currentColor",...t},r)=>l.createElement("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:e,xmlns:"http://www.w3.org/2000/svg",...t,ref:r},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z"})));eW.displayName="ThickChevronRightIcon";let eA=l.forwardRef(({color:e="currentColor",...t},r)=>l.createElement("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,ref:r},l.createElement("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z",fill:e,fillRule:"evenodd",clipRule:"evenodd"})));eA.displayName="InfoCircledIcon";let eH=l.createContext({}),SelectRoot=e=>{let{children:t,size:r=eL.size.default,...n}=e;return l.createElement($cc7e05a45900e73f$export$be92b6f5f03c0fe9,{...n},l.createElement(eH.Provider,{value:l.useMemo(()=>({size:r}),[r])},t))};SelectRoot.displayName="SelectRoot";let eZ=l.forwardRef((e,t)=>{let{rest:r,...n}=(0,e$.FY)(e),{className:o,variant:i=eI.variant.default,color:c=eI.color.default,radius:u=eI.radius.default,placeholder:d,...s}=r,{size:f}=l.useContext(eH);return l.createElement(ee,{asChild:!0},l.createElement("button",{"data-accent-color":c,"data-radius":u,...s,ref:t,className:a()("rt-reset","rt-SelectTrigger",o,(0,eD.g)(f,"rt-r-size"),`rt-variant-${i}`,(0,e$.we)(n))},l.createElement("span",{className:"rt-SelectTriggerInner"},l.createElement(et,{placeholder:d})),l.createElement(er,{asChild:!0},l.createElement(eB,{className:"rt-SelectIcon"}))))});eZ.displayName="SelectTrigger";let eY=l.forwardRef((e,t)=>{let{className:r,children:n,variant:o=eN.variant.default,highContrast:i=eN.highContrast.default,color:c=eN.color.default,container:u,...d}=e,{size:s}=l.useContext(eH),f=(0,eV.TC)(),p=null!=c?c:f.accentColor;return l.createElement($cc7e05a45900e73f$export$602eac185826482c,{container:u},l.createElement(eV.Q2,{asChild:!0},l.createElement(en,{"data-accent-color":p,sideOffset:4,...d,ref:t,className:a()({"rt-PopperContent":"popper"===d.position},"rt-SelectContent",r,(0,eD.g)(s,"rt-r-size"),`rt-variant-${o}`,{"rt-high-contrast":i})},l.createElement(eM.fC,{type:"auto",className:"rt-ScrollAreaRoot"},l.createElement(ep,{asChild:!0,className:"rt-SelectViewport"},l.createElement(eM.l_,{className:"rt-ScrollAreaViewport",style:{overflowY:void 0}},n)),l.createElement(eM.LW,{className:"rt-ScrollAreaScrollbar rt-r-size-1",orientation:"vertical"},l.createElement(eM.bU,{className:"rt-ScrollAreaThumb"}))))))});eY.displayName="SelectContent";let eF=l.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return l.createElement(ey,{...o,ref:t,className:a()("rt-SelectItem",r)},l.createElement(ex,{className:"rt-SelectItemIndicator"},l.createElement(eO,{className:"rt-SelectItemIndicatorIcon"})),l.createElement(eE,null,n))});eF.displayName="SelectItem";let eX=l.forwardRef((e,t)=>l.createElement(ev,{...e,ref:t,className:a()("rt-SelectGroup",e.className)}));eX.displayName="SelectGroup";let ej=l.forwardRef((e,t)=>l.createElement(eg,{...e,ref:t,className:a()("rt-SelectLabel",e.className)}));ej.displayName="SelectLabel";let ez=l.forwardRef((e,t)=>l.createElement(eR,{...e,ref:t,className:a()("rt-SelectSeparator",e.className)}));ez.displayName="SelectSeparator";let eK=Object.assign({},{Root:SelectRoot,Trigger:eZ,Content:eY,Item:eF,Group:eX,Label:ej,Separator:ez})},1342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let l=r(38754),n=(r(67294),l._(r(24304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let a=l.loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=a?a().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete l.webpack,delete l.modules,noSSR(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30043:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let l=r(38754),n=l._(r(67294)),a=n.default.createContext(null)},24304:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=r(38754),n=l._(r(67294)),a=r(30043);function resolve(e){return e&&e.default?e.default:e}let o=[],i=[],c=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}function createLoadableComponent(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function init(){if(!l){let t=new LoadableSubscription(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!c){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return init()})}function useLoadableModule(){init();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let a=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:l.retry}):a.loaded?n.default.createElement(resolve(a.loaded),e):null,[e,a])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",n.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(o).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(c=!0,t());flushInitializers(i,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},5152:function(e,t,r){e.exports=r(1342)},57178:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var l=r(87462),n=r(67294),a=r(75320);let o=(0,n.forwardRef)((e,t)=>{let{ratio:r=1,style:o,...i}=e;return(0,n.createElement)("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/r}%`},"data-radix-aspect-ratio-wrapper":""},(0,n.createElement)(a.WV.div,(0,l.Z)({},i,{ref:t,style:{...o,position:"absolute",top:0,right:0,bottom:0,left:0}})))})}}]);