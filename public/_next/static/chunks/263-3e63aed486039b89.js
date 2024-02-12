"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263,726,825,426,712],{6024:function(e,n,t){t.d(n,{U:function(){return f}});var o=t(500),i=t(1836),l=t(5059),r=t(1639),a=t(3179),s=t(2504),c=t(5432),u=t(7294),d=t(5893),f=(0,l.G)(function({children:e,reduceMotion:n,...t},l){let f=(0,r.jC)("Accordion",t),p=(0,a.Lr)(t),{htmlProps:m,descendants:v,...b}=(0,o.As)(p),g=(0,u.useMemo)(()=>({...b,reduceMotion:!!n}),[b,n]);return(0,d.jsx)(i.di,{value:v,children:(0,d.jsx)(o.a2,{value:g,children:(0,d.jsx)(i.lh,{value:f,children:(0,d.jsx)(s.m.div,{ref:l,...m,className:(0,c.cx)("chakra-accordion",t.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},7484:function(e,n,t){t.d(n,{K:function(){return s}});var o=t(1836),i=t(5059),l=t(2504),r=t(5432),a=t(5893),s=(0,i.G)(function(e,n){let{getButtonProps:t}=(0,o.bB)(),i=t(e,n),s=(0,o.YO)(),c={display:"flex",alignItems:"center",width:"100%",outline:0,...s.button};return(0,a.jsx)(l.m.button,{...i,className:(0,r.cx)("chakra-accordion__button",e.className),__css:c})});s.displayName="AccordionButton"},5077:function(e,n,t){t.d(n,{Q:function(){return u}});var o=t(500),i=t(1836),l=t(5059),r=t(2504),a=t(5432),s=t(7294),c=t(5893),u=(0,l.G)(function(e,n){let{children:t,className:l}=e,{htmlProps:u,...d}=(0,o.Zl)(e),f=(0,i.YO)(),p={...f.container,overflowAnchor:"none"},m=(0,s.useMemo)(()=>d,[d]);return(0,c.jsx)(i.ec,{value:m,children:(0,c.jsx)(r.m.div,{ref:n,...u,className:(0,a.cx)("chakra-accordion__item",l),__css:p,children:"function"==typeof t?t({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):t})})});u.displayName="AccordionItem"},1673:function(e,n,t){t.d(n,{X:function(){return AccordionIcon}});var o=t(500),i=t(1836),l=t(6877),r=t(5432),a=t(5893);function AccordionIcon(e){let{isOpen:n,isDisabled:t}=(0,i.bB)(),{reduceMotion:s}=(0,o.EF)(),c=(0,r.cx)("chakra-accordion__icon",e.className),u=(0,i.YO)(),d={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,a.jsx)(l.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:d,...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}AccordionIcon.displayName="AccordionIcon"},500:function(e,n,t){t.d(n,{a2:function(){return c},As:function(){return useAccordion},EF:function(){return u},Zl:function(){return useAccordionItem}});var o=t(1836),i=t(5227),l=t(7294),r=t(5155);function useControllableState(e){let{value:n,defaultValue:t,onChange:o,shouldUpdate:i=(e,n)=>e!==n}=e,a=(0,r.W)(o),s=(0,r.W)(i),[c,u]=(0,l.useState)(t),d=void 0!==n,f=d?n:c,p=(0,r.W)(e=>{let n="function"==typeof e?e(f):e;s(f,n)&&(d||u(n),a(n))},[d,a,f,s]);return[f,p]}var a=t(1103),s=t(5432);function useAccordion(e){let{onChange:n,defaultIndex:t,index:i,allowMultiple:r,allowToggle:a,...s}=e;allowMultipleWarning(e),allowMultipleAndAllowToggleWarning(e);let c=(0,o._v)(),[u,d]=(0,l.useState)(-1);(0,l.useEffect)(()=>()=>{d(-1)},[]);let[f,p]=useControllableState({value:i,defaultValue:()=>r?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:f,setIndex:p,htmlProps:s,getAccordionItemProps:e=>{let n=!1;return null!==e&&(n=Array.isArray(f)?f.includes(e):f===e),{isOpen:n,onChange:n=>{if(null!==e){if(r&&Array.isArray(f)){let t=n?f.concat(e):f.filter(n=>n!==e);p(t)}else n?p(e):a&&p(-1)}}}},focusedIndex:u,setFocusedIndex:d,descendants:c}}var[c,u]=(0,i.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function useAccordionItem(e){let{isDisabled:n,isFocusable:t,id:i,...r}=e,{getAccordionItemProps:c,setFocusedIndex:d}=u(),f=(0,l.useRef)(null),p=(0,l.useId)(),m=null!=i?i:p,v=`accordion-button-${m}`,b=`accordion-panel-${m}`;focusableNotDisabledWarning(e);let{register:g,index:h,descendants:x}=(0,o.mc)({disabled:n&&!t}),{isOpen:y,onChange:w}=c(-1===h?null:h);warnIfOpenAndDisabled({isOpen:y,isDisabled:n});let k=(0,l.useCallback)(()=>{null==w||w(!y),d(h)},[h,d,y,w]),C=(0,l.useCallback)(e=>{let n={ArrowDown:()=>{let e=x.nextEnabled(h);null==e||e.node.focus()},ArrowUp:()=>{let e=x.prevEnabled(h);null==e||e.node.focus()},Home:()=>{let e=x.firstEnabled();null==e||e.node.focus()},End:()=>{let e=x.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))},[x,h]),A=(0,l.useCallback)(()=>{d(h)},[d,h]),E=(0,l.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,a.lq)(g,f,t),id:v,disabled:!!n,"aria-expanded":!!y,"aria-controls":b,onClick:(0,s.v0)(e.onClick,k),onFocus:(0,s.v0)(e.onFocus,A),onKeyDown:(0,s.v0)(e.onKeyDown,C)}},[v,n,y,k,A,C,b,g]),_=(0,l.useCallback)(function(e={},n=null){return{...e,ref:n,role:"region",id:b,"aria-labelledby":v,hidden:!y}},[v,y,b]);return{isOpen:y,isDisabled:n,isFocusable:t,onOpen:()=>{null==w||w(!0)},onClose:()=>{null==w||w(!1)},getButtonProps:E,getPanelProps:_,htmlProps:r}}function allowMultipleWarning(e){let n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,s.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}function allowMultipleAndAllowToggleWarning(e){(0,s.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function focusableNotDisabledWarning(e){(0,s.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function warnIfOpenAndDisabled(e){(0,s.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}},1836:function(e,n,t){t.d(n,{YO:function(){return r},_v:function(){return d},bB:function(){return s},di:function(){return c},ec:function(){return a},lh:function(){return l},mc:function(){return f}});var o=t(3614),i=t(5227),[l,r]=(0,i.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[a,s]=(0,i.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[c,u,d,f]=(0,o.n)()},8122:function(e,n,t){t.d(n,{H:function(){return b}});var o=t(500),i=t(1836),l=t(5059),r=t(2504),a=t(9155),s=t(5432),c=t(1526),u=t(7745),d=t(7294),f=t(5893),isNumeric=e=>null!=e&&parseInt(e.toString(),10)>0,p={exit:{height:{duration:.2,ease:a.Lj.ease},opacity:{duration:.3,ease:a.Lj.ease}},enter:{height:{duration:.3,ease:a.Lj.ease},opacity:{duration:.4,ease:a.Lj.ease}}},m={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:o,delay:i})=>{var l;return{...e&&{opacity:isNumeric(n)?1:0},height:n,transitionEnd:null==o?void 0:o.exit,transition:null!=(l=null==t?void 0:t.exit)?l:a.p$.exit(p.exit,i)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:o,delay:i})=>{var l;return{...e&&{opacity:1},height:n,transitionEnd:null==o?void 0:o.enter,transition:null!=(l=null==t?void 0:t.enter)?l:a.p$.enter(p.enter,i)}}},v=(0,d.forwardRef)((e,n)=>{let{in:t,unmountOnExit:o,animateOpacity:i=!0,startingHeight:l=0,endingHeight:r="auto",style:a,className:p,transition:v,transitionEnd:b,...g}=e,[h,x]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=setTimeout(()=>{x(!0)});return()=>clearTimeout(e)},[]),(0,s.ZK)({condition:Number(l)>0&&!!o,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let y=parseFloat(l.toString())>0,w={startingHeight:l,endingHeight:r,animateOpacity:i,transition:h?v:{enter:{duration:0}},transitionEnd:{enter:null==b?void 0:b.enter,exit:o?null==b?void 0:b.exit:{...null==b?void 0:b.exit,display:y?"block":"none"}}},k=!o||t,C=t||o?"enter":"exit";return(0,f.jsx)(c.M,{initial:!1,custom:w,children:k&&(0,f.jsx)(u.E.div,{ref:n,...g,className:(0,s.cx)("chakra-collapse",p),style:{overflow:"hidden",display:"block",...a},custom:w,variants:m,initial:!!o&&"exit",animate:C,exit:"exit"})})});v.displayName="Collapse";var b=(0,l.G)(function(e,n){let{className:t,motionProps:l,...a}=e,{reduceMotion:c}=(0,o.EF)(),{getPanelProps:u,isOpen:d}=(0,i.bB)(),p=u(a,n),m=(0,s.cx)("chakra-accordion__panel",t),b=(0,i.YO)();c||delete p.hidden;let g=(0,f.jsx)(r.m.div,{...p,__css:b.panel,className:m});return c?g:(0,f.jsx)(v,{in:d,...l,children:g})});b.displayName="AccordionPanel"},5034:function(e,n,t){t.d(n,{L:function(){return o}});var o=(0,t(2504).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});o.displayName="Spacer"},9343:function(e,n,t){t.d(n,{u:function(){return k}});var o={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},i=t(7134),l=t(5075),r=t(1054),a=t(8795),s=t(1103),c=t(5432),u=t(7294),getDoc=e=>{var n;return(null==(n=e.current)?void 0:n.ownerDocument)||document},getWin=e=>{var n,t;return(null==(t=null==(n=e.current)?void 0:n.ownerDocument)?void 0:t.defaultView)||window};function useTooltip(e={}){let{openDelay:n=0,closeDelay:t=0,closeOnClick:o=!0,closeOnMouseDown:d,closeOnScroll:f,closeOnPointerDown:p=d,closeOnEsc:m=!0,onOpen:v,onClose:b,placement:g,id:h,isOpen:x,defaultIsOpen:y,arrowSize:w=10,arrowShadowColor:k,arrowPadding:C,modifiers:A,isDisabled:E,gutter:_,offset:N,direction:j,...D}=e,{isOpen:O,onOpen:I,onClose:T}=(0,l.q)({isOpen:x,defaultIsOpen:y,onOpen:v,onClose:b}),{referenceRef:M,getPopperProps:S,getArrowInnerProps:F,getArrowProps:W}=(0,r.D)({enabled:O,placement:g,arrowPadding:C,modifiers:A,gutter:_,offset:N,direction:j}),P=(0,u.useId)(),L=`tooltip-${null!=h?h:P}`,B=(0,u.useRef)(null),K=(0,u.useRef)(),q=(0,u.useCallback)(()=>{K.current&&(clearTimeout(K.current),K.current=void 0)},[]),Y=(0,u.useRef)(),Z=(0,u.useCallback)(()=>{Y.current&&(clearTimeout(Y.current),Y.current=void 0)},[]),$=(0,u.useCallback)(()=>{Z(),T()},[T,Z]),R=useCloseEvent(B,$),G=(0,u.useCallback)(()=>{if(!E&&!K.current){R();let e=getWin(B);K.current=e.setTimeout(I,n)}},[R,E,I,n]),z=(0,u.useCallback)(()=>{q();let e=getWin(B);Y.current=e.setTimeout($,t)},[t,$,q]),H=(0,u.useCallback)(()=>{O&&o&&z()},[o,z,O]),U=(0,u.useCallback)(()=>{O&&p&&z()},[p,z,O]),V=(0,u.useCallback)(e=>{O&&"Escape"===e.key&&z()},[O,z]);(0,i.O)(()=>getDoc(B),"keydown",m?V:void 0),(0,i.O)(()=>getDoc(B),"scroll",()=>{O&&f&&$()}),(0,u.useEffect)(()=>{E&&(q(),O&&T())},[E,O,T,q]),(0,u.useEffect)(()=>()=>{q(),Z()},[q,Z]),(0,i.O)(()=>B.current,"pointerleave",z);let J=(0,u.useCallback)((e={},n=null)=>{let t={...e,ref:(0,s.lq)(B,n,M),onPointerEnter:(0,c.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&G()}),onClick:(0,c.v0)(e.onClick,H),onPointerDown:(0,c.v0)(e.onPointerDown,U),onFocus:(0,c.v0)(e.onFocus,G),onBlur:(0,c.v0)(e.onBlur,z),"aria-describedby":O?L:void 0};return t},[G,z,U,O,L,H,M]),Q=(0,u.useCallback)((e={},n=null)=>S({...e,style:{...e.style,[a.Dq.arrowSize.var]:w?`${w}px`:void 0,[a.Dq.arrowShadowColor.var]:k}},n),[S,w,k]),X=(0,u.useCallback)((e={},n=null)=>{let t={...e.style,position:"relative",transformOrigin:a.Dq.transformOrigin.varRef};return{ref:n,...D,...e,id:L,role:"tooltip",style:t}},[D,L]);return{isOpen:O,show:G,hide:z,getTriggerProps:J,getTooltipProps:X,getTooltipPositionerProps:Q,getArrowProps:W,getArrowInnerProps:F}}var d="chakra-ui:close-tooltip";function useCloseEvent(e,n){return(0,u.useEffect)(()=>{let t=getDoc(e);return t.addEventListener(d,n),()=>t.removeEventListener(d,n)},[n,e]),()=>{let n=getDoc(e),t=getWin(e);n.dispatchEvent(new t.CustomEvent(d))}}var f=t(9598),p=t(2504),m=t(5059),v=t(1639),b=t(3179),g=t(7323),h=t(7745),x=t(1526),y=t(5893);function omit(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}function pick(e,n){let t={};for(let o of n)o in e&&(t[o]=e[o]);return t}var w=(0,p.m)(h.E.div),k=(0,m.G)((e,n)=>{var t,i;let l;let r=(0,v.mq)("Tooltip",e),s=(0,b.Lr)(e),c=(0,g.F)(),{children:d,label:m,shouldWrapChildren:h,"aria-label":k,hasArrow:C,bg:A,portalProps:E,background:_,backgroundColor:N,bgColor:j,motionProps:D,...O}=s,I=null!=(i=null!=(t=null!=_?_:N)?t:A)?i:j;if(I){r.bg=I;let e=(0,b.K1)(c,"colors",I);r[a.Dq.arrowBg.var]=e}let T=useTooltip({...O,direction:c.direction}),M="string"==typeof d||h;if(M)l=(0,y.jsx)(p.m.span,{display:"inline-block",tabIndex:0,...T.getTriggerProps(),children:d});else{let e=u.Children.only(d);l=(0,u.cloneElement)(e,T.getTriggerProps(e.props,e.ref))}let S=!!k,F=T.getTooltipProps({},n),W=S?omit(F,["role","id"]):F,P=pick(F,["role","id"]);return m?(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)(x.M,{children:T.isOpen&&(0,y.jsx)(f.h,{...E,children:(0,y.jsx)(p.m.div,{...T.getTooltipPositionerProps(),__css:{zIndex:r.zIndex,pointerEvents:"none"},children:(0,y.jsxs)(w,{variants:o,initial:"exit",animate:"enter",exit:"exit",...D,...W,__css:r,children:[m,S&&(0,y.jsx)(p.m.span,{srOnly:!0,...P,children:k}),C&&(0,y.jsx)(p.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,y.jsx)(p.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:r.bg}})})]})})})})]}):(0,y.jsx)(y.Fragment,{children:d})});k.displayName="Tooltip"}}]);