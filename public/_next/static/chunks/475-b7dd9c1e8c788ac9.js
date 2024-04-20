"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475,212],{98336:function(e,t,n){n.d(t,{x:function(){return d}});var r=n(67294),a=n(93967),l=n.n(a),o=n(25443),i=n(78219);let s={size:{type:"enum",values:["1","2","3"],default:"1",responsive:!0},radius:i.C,scrollbars:{type:"enum",values:["vertical","horizontal","both"],default:"both"}};var c=n(23843),u=n(6776);let d=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,c.FY)(e),{className:i,style:d,type:p,scrollHideDelay:m="scroll"!==p?0:void 0,dir:f,size:v=s.size.default,radius:g=s.radius.default,scrollbars:h=s.scrollbars.default,...b}=n;return r.createElement(o.fC,{type:p,scrollHideDelay:m,className:l()("rt-ScrollAreaRoot",i,(0,c.we)(a)),style:d},r.createElement(o.l_,{...b,ref:t,className:"rt-ScrollAreaViewport"}),r.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),"vertical"!==h?r.createElement(o.LW,{"data-radius":g,orientation:"horizontal",className:l()("rt-ScrollAreaScrollbar",(0,u.g)(v,"rt-r-size"))},r.createElement(o.bU,{className:"rt-ScrollAreaThumb"})):null,"horizontal"!==h?r.createElement(o.LW,{"data-radius":g,orientation:"vertical",className:l()("rt-ScrollAreaScrollbar",(0,u.g)(v,"rt-r-size"))},r.createElement(o.bU,{className:"rt-ScrollAreaThumb"})):null,"both"===h?r.createElement(o.Ns,{className:"rt-ScrollAreaCorner"}):null)});d.displayName="ScrollArea"},29222:function(e,t,n){n.d(t,{z:function(){return f}});var r=n(67294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}var[a,l]=(0,n(55227).k)({strict:!1,name:"ButtonGroupContext"}),o=n(51337),i=n(25432),s=n(85893);function ButtonIcon(e){let{children:t,className:n,...a}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,i.cx)("chakra-button__icon",n);return(0,s.jsx)(o.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:c,children:l})}ButtonIcon.displayName="ButtonIcon";var c=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:a="0.5rem",children:l=(0,s.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:u,__css:d,...p}=e,m=(0,i.cx)("chakra-button__spinner",u),f="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[f]:t?a:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,f,a]);return(0,s.jsx)(o.m.div,{className:m,...p,__css:v,children:l})}ButtonSpinner.displayName="ButtonSpinner";var u=n(81103),d=n(35059),p=n(91639),m=n(33179),f=(0,d.G)((e,t)=>{let n=l(),a=(0,p.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:d,isActive:f,children:v,leftIcon:g,rightIcon:h,loadingText:b,iconSpacing:x="0.5rem",type:y,spinner:k,spinnerPlacement:C="start",className:_,as:N,...w}=(0,m.Lr)(e),S=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:E,type:j}=useButtonType(N),B={rightIcon:h,leftIcon:g,iconSpacing:x,children:v};return(0,s.jsxs)(o.m.button,{ref:(0,u.qq)(t,E),as:N,type:null!=y?y:j,"data-active":(0,i.PB)(f),"data-loading":(0,i.PB)(d),__css:S,className:(0,i.cx)("chakra-button",_),...w,disabled:c||d,children:[d&&"start"===C&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:x,children:k}),d?b||(0,s.jsx)(o.m.span,{opacity:0,children:(0,s.jsx)(ButtonContent,{...B})}):(0,s.jsx)(ButtonContent,{...B}),d&&"end"===C&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:x,children:k})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(ButtonIcon,{marginEnd:a,children:t}),r,n&&(0,s.jsx)(ButtonIcon,{marginStart:a,children:n})]})}f.displayName="Button"},7754:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(51337),a=n(35059),l=n(85893),o=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.displayName="Center";var i={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)(function(e,t){let{axis:n="both",...a}=e;return(0,l.jsx)(r.m.div,{ref:t,__css:i[n],...a,position:"absolute"})})},14418:function(e,t,n){n.d(t,{X:function(){return c}});var r=n(35059),a=n(91639),l=n(33179),o=n(51337),i=n(25432),s=n(85893),c=(0,r.G)(function(e,t){let n=(0,a.mq)("Heading",e),{className:r,...c}=(0,l.Lr)(e);return(0,s.jsx)(o.m.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},41689:function(e,t,n){n.d(t,{C:function(){return c}});var r=n(35059),a=n(91639),l=n(33179),o=n(51337),i=n(25432),s=n(85893),c=(0,r.G)(function(e,t){let n=(0,a.mq)("Badge",e),{className:r,...c}=(0,l.Lr)(e);return(0,s.jsx)(o.m.span,{ref:t,className:(0,i.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})});c.displayName="Badge"},39343:function(e,t,n){n.d(t,{u:function(){return C}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},a=n(57134),l=n(85075),o=n(31054),i=n(68795),s=n(81103),c=n(25432),u=n(67294),getDoc=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},getWin=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window};function useTooltip(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:d,closeOnScroll:p,closeOnPointerDown:m=d,closeOnEsc:f=!0,onOpen:v,onClose:g,placement:h,id:b,isOpen:x,defaultIsOpen:y,arrowSize:k=10,arrowShadowColor:C,arrowPadding:_,modifiers:N,isDisabled:w,gutter:S,offset:E,direction:j,...B}=e,{isOpen:T,onOpen:D,onClose:O}=(0,l.q)({isOpen:x,defaultIsOpen:y,onOpen:v,onClose:g}),{referenceRef:I,getPopperProps:z,getArrowInnerProps:q,getArrowProps:A}=(0,o.D)({enabled:T,placement:h,arrowPadding:_,modifiers:N,gutter:S,offset:E,direction:j}),P=(0,u.useId)(),F=`tooltip-${null!=b?b:P}`,L=(0,u.useRef)(null),R=(0,u.useRef)(),G=(0,u.useCallback)(()=>{R.current&&(clearTimeout(R.current),R.current=void 0)},[]),W=(0,u.useRef)(),H=(0,u.useCallback)(()=>{W.current&&(clearTimeout(W.current),W.current=void 0)},[]),M=(0,u.useCallback)(()=>{H(),O()},[O,H]),V=useCloseEvent(L,M),U=(0,u.useCallback)(()=>{if(!w&&!R.current){V();let e=getWin(L);R.current=e.setTimeout(D,t)}},[V,w,D,t]),$=(0,u.useCallback)(()=>{G();let e=getWin(L);W.current=e.setTimeout(M,n)},[n,M,G]),X=(0,u.useCallback)(()=>{T&&r&&$()},[r,$,T]),Y=(0,u.useCallback)(()=>{T&&m&&$()},[m,$,T]),K=(0,u.useCallback)(e=>{T&&"Escape"===e.key&&$()},[T,$]);(0,a.O)(()=>getDoc(L),"keydown",f?K:void 0),(0,a.O)(()=>getDoc(L),"scroll",()=>{T&&p&&M()}),(0,u.useEffect)(()=>{w&&(G(),T&&O())},[w,T,O,G]),(0,u.useEffect)(()=>()=>{G(),H()},[G,H]),(0,a.O)(()=>L.current,"pointerleave",$);let J=(0,u.useCallback)((e={},t=null)=>{let n={...e,ref:(0,s.lq)(L,t,I),onPointerEnter:(0,c.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&U()}),onClick:(0,c.v0)(e.onClick,X),onPointerDown:(0,c.v0)(e.onPointerDown,Y),onFocus:(0,c.v0)(e.onFocus,U),onBlur:(0,c.v0)(e.onBlur,$),"aria-describedby":T?F:void 0};return n},[U,$,Y,T,F,X,I]),Q=(0,u.useCallback)((e={},t=null)=>z({...e,style:{...e.style,[i.Dq.arrowSize.var]:k?`${k}px`:void 0,[i.Dq.arrowShadowColor.var]:C}},t),[z,k,C]),Z=(0,u.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:i.Dq.transformOrigin.varRef};return{ref:t,...B,...e,id:F,role:"tooltip",style:n}},[B,F]);return{isOpen:T,show:U,hide:$,getTriggerProps:J,getTooltipProps:Z,getTooltipPositionerProps:Q,getArrowProps:A,getArrowInnerProps:q}}var d="chakra-ui:close-tooltip";function useCloseEvent(e,t){return(0,u.useEffect)(()=>{let n=getDoc(e);return n.addEventListener(d,t),()=>n.removeEventListener(d,t)},[t,e]),()=>{let t=getDoc(e),n=getWin(e);t.dispatchEvent(new n.CustomEvent(d))}}var p=n(49598),m=n(51337),f=n(35059),v=n(91639),g=n(33179),h=n(75119),b=n(17745),x=n(51526),y=n(85893);function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function pick(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}var k=(0,m.m)(b.E.div),C=(0,f.G)((e,t)=>{var n,a;let l;let o=(0,v.mq)("Tooltip",e),s=(0,g.Lr)(e),c=(0,h.F)(),{children:d,label:f,shouldWrapChildren:b,"aria-label":C,hasArrow:_,bg:N,portalProps:w,background:S,backgroundColor:E,bgColor:j,motionProps:B,...T}=s,D=null!=(a=null!=(n=null!=S?S:E)?n:N)?a:j;if(D){o.bg=D;let e=(0,g.K1)(c,"colors",D);o[i.Dq.arrowBg.var]=e}let O=useTooltip({...T,direction:c.direction}),I="string"==typeof d||b;if(I)l=(0,y.jsx)(m.m.span,{display:"inline-block",tabIndex:0,...O.getTriggerProps(),children:d});else{let e=u.Children.only(d);l=(0,u.cloneElement)(e,O.getTriggerProps(e.props,e.ref))}let z=!!C,q=O.getTooltipProps({},t),A=z?omit(q,["role","id"]):q,P=pick(q,["role","id"]);return f?(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(x.M,{children:O.isOpen&&(0,y.jsx)(p.h,{...w,children:(0,y.jsx)(m.m.div,{...O.getTooltipPositionerProps(),__css:{zIndex:o.zIndex,pointerEvents:"none"},children:(0,y.jsxs)(k,{variants:r,initial:"exit",animate:"enter",exit:"exit",...B,...A,__css:o,children:[f,z&&(0,y.jsx)(m.m.span,{srOnly:!0,...P,children:C}),_&&(0,y.jsx)(m.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,y.jsx)(m.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:o.bg}})})]})})})})]}):(0,y.jsx)(y.Fragment,{children:d})});C.displayName="Tooltip"}}]);