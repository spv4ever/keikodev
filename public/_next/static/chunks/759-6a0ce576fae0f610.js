"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{2746:function(e,t,r){r.d(t,{q:function(){return P}});var n=r(7294),a=r(3967),o=r.n(a),l=r(5893);function createContextScope(e,t=[]){let r=[];function createContext3(t,a){let o=n.createContext(a),i=r.length;function Provider(t){let{scope:r,children:a,...s}=t,u=r?.[e][i]||o,c=n.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:a})}function useContext2(r,l){let s=l?.[e][i]||o,u=n.useContext(s);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}return r=[...r,a],Provider.displayName=t+"Provider",[Provider,useContext2]}let createScope=()=>{let t=r.map(e=>n.createContext(e));return function(r){let a=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return createScope.scopeName=e,[createContext3,composeContextScopes(createScope,...t)]}function composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e),o=a[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return createScope.scopeName=t.scopeName,createScope}var i=r(9698),s=globalThis?.document?n.useLayoutEffect:()=>{};function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function composeRefs(...e){return t=>e.forEach(e=>setRef(e,t))}r(3935);var u=n.forwardRef((e,t)=>{let{children:r,...a}=e,o=n.Children.toArray(r),i=o.find(isSlottable);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(c,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(c,{...a,ref:t,children:r})});u.displayName="Slot";var c=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=getElementRef(r);return n.cloneElement(r,{...mergeProps(a,r.props),ref:t?composeRefs(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});c.displayName="SlotClone";var Slottable=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function isSlottable(e){return n.isValidElement(e)&&e.type===Slottable}function mergeProps(e,t){let r={...t};for(let n in t){let a=e[n],o=t[n],l=/^on[A-Z]/.test(n);l?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function getElementRef(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,o=n?u:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),f="Avatar",[p,m]=createContextScope(f),[v,h]=p(f),g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...a}=e,[o,i]=n.useState("idle");return(0,l.jsx)(v,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:(0,l.jsx)(d.span,{...a,ref:t})})});g.displayName=f;var y="AvatarImage",w=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:n,onLoadingStatusChange:a=()=>{},...o}=e,u=h(y,r),c=useImageLoadingStatus(n),f=(0,i.W)(e=>{a(e),u.onImageLoadingStatusChange(e)});return s(()=>{"idle"!==c&&f(c)},[c,f]),"loaded"===c?(0,l.jsx)(d.img,{...o,ref:t,src:n}):null});w.displayName=y;var R="AvatarFallback",S=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:a,...o}=e,i=h(R,r),[s,u]=n.useState(void 0===a);return n.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>u(!0),a);return()=>window.clearTimeout(e)}},[a]),s&&"loaded"!==i.imageLoadingStatus?(0,l.jsx)(d.span,{...o,ref:t}):null});function useImageLoadingStatus(e){let[t,r]=n.useState("idle");return s(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,updateStatus=e=>()=>{t&&r(e)};return r("loading"),n.onload=updateStatus("loaded"),n.onerror=updateStatus("error"),n.src=e,()=>{t=!1}},[e]),t}S.displayName=R;var C=r(8291),b=r(6679),x=r(8219);let E={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...C.m,default:void 0},highContrast:b.B,radius:x.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var N=r(3843),j=r(6776);let P=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,N.FY)(e),{className:l,style:i,size:s=E.size.default,variant:u=E.variant.default,color:c=E.color.default,highContrast:d=E.highContrast.default,radius:f=E.radius.default,fallback:p,...m}=r,[v,h]=n.useState("idle");return n.createElement(g,{"data-accent-color":c,"data-radius":f,className:o()("rt-AvatarRoot",l,(0,j.g)(s,"rt-r-size"),`rt-variant-${u}`,{"rt-high-contrast":d},(0,N.we)(a)),style:i},"idle"===v||"loading"===v?n.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===v?n.createElement(S,{className:o()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof p&&1===p.length,"rt-two-letters":"string"==typeof p&&2===p.length}),delayMs:0},p):null,n.createElement(w,{ref:t,className:"rt-AvatarImage",...m,onLoadingStatusChange:e=>{var t;null===(t=m.onLoadingStatusChange)||void 0===t||t.call(m,e),h(e)}}))});P.displayName="Avatar"},3970:function(e,t,r){r.d(t,{Ee:function(){return G}});var n=r(7294),a=r(3967),o=r.n(a);function composeEventHandlers(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function composeRefs(...e){return t=>e.forEach(e=>setRef(e,t))}function useComposedRefs(...e){return n.useCallback(composeRefs(...e),e)}var l=r(5893);function createContextScope(e,t=[]){let r=[];function createContext3(t,a){let o=n.createContext(a),i=r.length;function Provider(t){let{scope:r,children:a,...s}=t,u=r?.[e][i]||o,c=n.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:a})}function useContext2(r,l){let s=l?.[e][i]||o,u=n.useContext(s);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}return r=[...r,a],Provider.displayName=t+"Provider",[Provider,useContext2]}let createScope=()=>{let t=r.map(e=>n.createContext(e));return function(r){let a=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return createScope.scopeName=e,[createContext3,composeContextScopes(createScope,...t)]}function composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e),o=a[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return createScope.scopeName=t.scopeName,createScope}r(3935);var i=n.forwardRef((e,t)=>{let{children:r,...a}=e,o=n.Children.toArray(r),i=o.find(isSlottable);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(s,{...a,ref:t,children:r})});i.displayName="Slot";var s=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=getElementRef(r);return n.cloneElement(r,{...mergeProps(a,r.props),ref:t?composeRefs(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});s.displayName="SlotClone";var Slottable=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function isSlottable(e){return n.isValidElement(e)&&e.type===Slottable}function mergeProps(e,t){let r={...t};for(let n in t){let a=e[n],o=t[n],l=/^on[A-Z]/.test(n);l?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function getElementRef(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}var u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,o=n?i:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),c=r(1781),d=r(7342),f=r(8990),p=r(6060),m=r(7898),v=r(438),h="Radio",[g,y]=createContextScope(h),[w,R]=g(h),S=n.forwardRef((e,t)=>{let{__scopeRadio:r,name:a,checked:o=!1,required:i,disabled:s,value:c="on",onCheck:d,...f}=e,[p,m]=n.useState(null),v=useComposedRefs(t,e=>m(e)),h=n.useRef(!1),g=!p||!!p.closest("form");return(0,l.jsxs)(w,{scope:r,checked:o,disabled:s,children:[(0,l.jsx)(u.button,{type:"button",role:"radio","aria-checked":o,"data-state":getState(o),"data-disabled":s?"":void 0,disabled:s,value:c,...f,ref:v,onClick:composeEventHandlers(e.onClick,e=>{o||d?.(),g&&(h.current=e.isPropagationStopped(),h.current||e.stopPropagation())})}),g&&(0,l.jsx)(BubbleInput,{control:p,bubbles:!h.current,name:a,value:c,checked:o,required:i,disabled:s,style:{transform:"translateX(-100%)"}})]})});S.displayName=h;var C="RadioIndicator",b=n.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:n,...a}=e,o=R(C,r);return(0,l.jsx)(v.z,{present:n||o.checked,children:(0,l.jsx)(u.span,{"data-state":getState(o.checked),"data-disabled":o.disabled?"":void 0,...a,ref:t})})});b.displayName=C;var BubbleInput=e=>{let{control:t,checked:r,bubbles:a=!0,...o}=e,i=n.useRef(null),s=(0,m.D)(r),u=(0,p.t)(t);return n.useEffect(()=>{let e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),o=n.set;if(s!==r&&o){let t=new Event("click",{bubbles:a});o.call(e,r),e.dispatchEvent(t)}},[s,r,a]),(0,l.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:i,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(e){return e?"checked":"unchecked"}var x=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],E="RadioGroup",[N,j]=createContextScope(E,[c.Pc,y]),P=(0,c.Pc)(),k=y(),[O,_]=N(E),I=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:n,defaultValue:a,value:o,required:i=!1,disabled:s=!1,orientation:p,dir:m,loop:v=!0,onValueChange:h,...g}=e,y=P(r),w=(0,f.gm)(m),[R,S]=(0,d.T)({prop:o,defaultProp:a,onChange:h});return(0,l.jsx)(O,{scope:r,name:n,required:i,disabled:s,value:R,onValueChange:S,children:(0,l.jsx)(c.fC,{asChild:!0,...y,orientation:p,dir:w,loop:v,children:(0,l.jsx)(u.div,{role:"radiogroup","aria-required":i,"aria-orientation":p,"data-disabled":s?"":void 0,dir:w,...g,ref:t})})})});I.displayName=E;var $="RadioGroupItem",A=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:a,...o}=e,i=_($,r),s=i.disabled||a,u=P(r),d=k(r),f=n.useRef(null),p=useComposedRefs(t,f),m=i.value===o.value,v=n.useRef(!1);return n.useEffect(()=>{let handleKeyDown=e=>{x.includes(e.key)&&(v.current=!0)},handleKeyUp=()=>v.current=!1;return document.addEventListener("keydown",handleKeyDown),document.addEventListener("keyup",handleKeyUp),()=>{document.removeEventListener("keydown",handleKeyDown),document.removeEventListener("keyup",handleKeyUp)}},[]),(0,l.jsx)(c.ck,{asChild:!0,...u,focusable:!s,active:m,children:(0,l.jsx)(S,{disabled:s,required:i.required,checked:m,...d,...o,name:i.name,ref:p,onCheck:()=>i.onValueChange(o.value),onKeyDown:composeEventHandlers(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:composeEventHandlers(o.onFocus,()=>{v.current&&f.current?.click()})})})});A.displayName=$;var V=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...n}=e,a=k(r);return(0,l.jsx)(b,{...a,...n,ref:t})});V.displayName="RadioGroupIndicator";var D=r(8291),L=r(6679);let W={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","surface","soft"],default:"surface"},color:D.m,highContrast:L.B};var z=r(3843),M=r(6776);let B=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,z.FY)(e),{className:l,size:i=W.size.default,variant:s=W.variant.default,color:u=W.color.default,highContrast:c=W.highContrast.default,...d}=r;return n.createElement(I,{"data-accent-color":u,...d,ref:t,className:o()("rt-RadioGroupRoot",l,(0,M.g)(i,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":c},(0,z.we)(a))})});B.displayName="RadioGroupRoot";let F=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,z.FY)(e),{className:l,style:i,...s}=r;return n.createElement("span",{className:o()("rt-RadioGroupItem",l,(0,z.we)(a)),style:i},n.createElement(A,{...s,ref:t,className:o()("rt-reset","rt-RadioGroupButton")},n.createElement(V,{className:"rt-RadioGroupIndicator"})))});F.displayName="RadioGroupItem";let G=Object.assign({},{Root:B,Item:F})},5313:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),a=r(3967),o=r.n(a);function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function composeRefs(...e){return t=>e.forEach(e=>setRef(e,t))}r(3935);var l=r(5893),i=n.forwardRef((e,t)=>{let{children:r,...a}=e,o=n.Children.toArray(r),i=o.find(isSlottable);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(s,{...a,ref:t,children:r})});i.displayName="Slot";var s=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=getElementRef(r);return n.cloneElement(r,{...mergeProps(a,r.props),ref:t?composeRefs(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});s.displayName="SlotClone";var Slottable=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function isSlottable(e){return n.isValidElement(e)&&e.type===Slottable}function mergeProps(e,t){let r={...t};for(let n in t){let a=e[n],o=t[n],l=/^on[A-Z]/.test(n);l?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function getElementRef(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}var u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,o=n?i:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),c="horizontal",d=["horizontal","vertical"],f=n.forwardRef((e,t)=>{let{decorative:r,orientation:n=c,...a}=e,o=isValidOrientation(n)?n:c;return(0,l.jsx)(u.div,{"data-orientation":o,...r?{role:"none"}:{"aria-orientation":"vertical"===o?o:void 0,role:"separator"},...a,ref:t})});function isValidOrientation(e){return d.includes(e)}f.displayName="Separator";var p=r(8291);let m={size:{type:"enum",values:["1","2","3","4"],default:"1",responsive:!0},color:{...p.m,default:"gray"}};var v=r(3843),h=r(6776);let g=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,v.FY)(e),{className:l,size:i=m.size.default,color:s=m.color.default,...u}=r;return n.createElement(f,{"data-accent-color":s,...u,ref:t,className:o()("rt-Separator",l,(0,h.g)(i,"rt-r-size"),(0,v.we)(a))})});g.displayName="Separator"},736:function(e,t,r){r.d(t,{r:function(){return j}});var n=r(7294),a=r(3967),o=r.n(a);function composeEventHandlers(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function composeRefs(...e){return t=>e.forEach(e=>setRef(e,t))}function useComposedRefs(...e){return n.useCallback(composeRefs(...e),e)}var l=r(5893);function createContextScope(e,t=[]){let r=[];function createContext3(t,a){let o=n.createContext(a),i=r.length;function Provider(t){let{scope:r,children:a,...s}=t,u=r?.[e][i]||o,c=n.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:a})}function useContext2(r,l){let s=l?.[e][i]||o,u=n.useContext(s);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}return r=[...r,a],Provider.displayName=t+"Provider",[Provider,useContext2]}let createScope=()=>{let t=r.map(e=>n.createContext(e));return function(r){let a=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return createScope.scopeName=e,[createContext3,composeContextScopes(createScope,...t)]}function composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e),o=a[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return createScope.scopeName=t.scopeName,createScope}var i=r(7342),s=r(7898),u=r(6060);r(3935);var c=n.forwardRef((e,t)=>{let{children:r,...a}=e,o=n.Children.toArray(r),i=o.find(isSlottable);if(i){let e=i.props.children,r=o.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(d,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(d,{...a,ref:t,children:r})});c.displayName="Slot";var d=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=getElementRef(r);return n.cloneElement(r,{...mergeProps(a,r.props),ref:t?composeRefs(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});d.displayName="SlotClone";var Slottable=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function isSlottable(e){return n.isValidElement(e)&&e.type===Slottable}function mergeProps(e,t){let r={...t};for(let n in t){let a=e[n],o=t[n],l=/^on[A-Z]/.test(n);l?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function getElementRef(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}var f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,o=n?c:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),p="Switch",[m,v]=createContextScope(p),[h,g]=m(p),y=n.forwardRef((e,t)=>{let{__scopeSwitch:r,name:a,checked:o,defaultChecked:s,required:u,disabled:c,value:d="on",onCheckedChange:p,...m}=e,[v,g]=n.useState(null),y=useComposedRefs(t,e=>g(e)),w=n.useRef(!1),R=!v||!!v.closest("form"),[S=!1,C]=(0,i.T)({prop:o,defaultProp:s,onChange:p});return(0,l.jsxs)(h,{scope:r,checked:S,disabled:c,children:[(0,l.jsx)(f.button,{type:"button",role:"switch","aria-checked":S,"aria-required":u,"data-state":getState(S),"data-disabled":c?"":void 0,disabled:c,value:d,...m,ref:y,onClick:composeEventHandlers(e.onClick,e=>{C(e=>!e),R&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})}),R&&(0,l.jsx)(BubbleInput,{control:v,bubbles:!w.current,name:a,value:d,checked:S,required:u,disabled:c,style:{transform:"translateX(-100%)"}})]})});y.displayName=p;var w="SwitchThumb",R=n.forwardRef((e,t)=>{let{__scopeSwitch:r,...n}=e,a=g(w,r);return(0,l.jsx)(f.span,{"data-state":getState(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:t})});R.displayName=w;var BubbleInput=e=>{let{control:t,checked:r,bubbles:a=!0,...o}=e,i=n.useRef(null),c=(0,s.D)(r),d=(0,u.t)(t);return n.useEffect(()=>{let e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),o=n.set;if(c!==r&&o){let t=new Event("click",{bubbles:a});o.call(e,r),e.dispatchEvent(t)}},[c,r,a]),(0,l.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(e){return e?"checked":"unchecked"}var S=r(8291),C=r(6679),b=r(8219);let x={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","surface","soft"],default:"surface"},color:S.m,highContrast:C.B,radius:b.C};var E=r(3843),N=r(6776);let j=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,E.FY)(e),{className:l,style:i,size:s=x.size.default,variant:u=x.variant.default,color:c=x.color.default,highContrast:d=x.highContrast.default,radius:f=x.radius.default,...p}=r;return n.createElement("span",{"data-radius":f,className:o()("rt-SwitchRoot",l,(0,N.g)(s,"rt-r-size"),`rt-variant-${u}`,{"rt-high-contrast":d},(0,E.we)(a)),style:i},n.createElement(y,{"data-accent-color":c,...p,ref:t,className:o()("rt-reset","rt-SwitchButton",{"rt-high-contrast":d})},n.createElement(R,{className:o()("rt-SwitchThumb",{"rt-high-contrast":d})})))});j.displayName="Switch"},9283:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]])},9560:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},1689:function(e,t,r){r.d(t,{C:function(){return u}});var n=r(5059),a=r(1639),o=r(3179),l=r(296),i=r(5432),s=r(5893),u=(0,n.G)(function(e,t){let r=(0,a.mq)("Badge",e),{className:n,...u}=(0,o.Lr)(e);return(0,s.jsx)(l.m.span,{ref:t,className:(0,i.cx)("chakra-badge",e.className),...u,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});u.displayName="Badge"},7898:function(e,t,r){r.d(t,{D:function(){return usePrevious}});var n=r(7294);function usePrevious(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);