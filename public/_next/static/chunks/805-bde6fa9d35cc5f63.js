(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{1342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let l=r(8754),n=(r(7294),l._(r(4304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let o=l.loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete l.webpack,delete l.modules,noSSR(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let l=r(8754),n=l._(r(7294)),o=n.default.createContext(null)},4304:function(e,t,r){"use strict";/**
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
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=r(8754),n=l._(r(7294)),o=r(43);function resolve(e){return e&&e.default?e.default:e}let a=[],i=[],s=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}function createLoadableComponent(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function init(){if(!l){let t=new LoadableSubscription(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return init()})}function useLoadableModule(){init();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let o=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:l.retry}):o.loaded?n.default.createElement(resolve(o.loaded),e):null,[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",n.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(a).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(s=!0,t());flushInitializers(i,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},5152:function(e,t,r){e.exports=r(1342)},9343:function(e,t,r){"use strict";r.d(t,{u:function(){return k}});var l={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},n=r(7134),o=r(5075),a=r(1054),i=r(8795),s=r(1103),u=r(5432),d=r(7294),getDoc=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},getWin=e=>{var t,r;return(null==(r=null==(t=e.current)?void 0:t.ownerDocument)?void 0:r.defaultView)||window};function useTooltip(e={}){let{openDelay:t=0,closeDelay:r=0,closeOnClick:l=!0,closeOnMouseDown:c,closeOnScroll:p,closeOnPointerDown:f=c,closeOnEsc:b=!0,onOpen:m,onClose:h,placement:_,id:y,isOpen:g,defaultIsOpen:v,arrowSize:C=10,arrowShadowColor:k,arrowPadding:w,modifiers:O,isDisabled:x,gutter:E,offset:L,direction:j,...P}=e,{isOpen:T,onOpen:D,onClose:S}=(0,o.q)({isOpen:g,defaultIsOpen:v,onOpen:m,onClose:h}),{referenceRef:R,getPopperProps:M,getArrowInnerProps:I,getArrowProps:q}=(0,a.D)({enabled:T,placement:_,arrowPadding:w,modifiers:O,gutter:E,offset:L,direction:j}),z=(0,d.useId)(),F=`tooltip-${null!=y?y:z}`,N=(0,d.useRef)(null),V=(0,d.useRef)(),A=(0,d.useCallback)(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),G=(0,d.useRef)(),W=(0,d.useCallback)(()=>{G.current&&(clearTimeout(G.current),G.current=void 0)},[]),B=(0,d.useCallback)(()=>{W(),S()},[S,W]),$=useCloseEvent(N,B),H=(0,d.useCallback)(()=>{if(!x&&!V.current){$();let e=getWin(N);V.current=e.setTimeout(D,t)}},[$,x,D,t]),K=(0,d.useCallback)(()=>{A();let e=getWin(N);G.current=e.setTimeout(B,r)},[r,B,A]),X=(0,d.useCallback)(()=>{T&&l&&K()},[l,K,T]),Y=(0,d.useCallback)(()=>{T&&f&&K()},[f,K,T]),J=(0,d.useCallback)(e=>{T&&"Escape"===e.key&&K()},[T,K]);(0,n.O)(()=>getDoc(N),"keydown",b?J:void 0),(0,n.O)(()=>getDoc(N),"scroll",()=>{T&&p&&B()}),(0,d.useEffect)(()=>{x&&(A(),T&&S())},[x,T,S,A]),(0,d.useEffect)(()=>()=>{A(),W()},[A,W]),(0,n.O)(()=>N.current,"pointerleave",K);let Q=(0,d.useCallback)((e={},t=null)=>{let r={...e,ref:(0,s.lq)(N,t,R),onPointerEnter:(0,u.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&H()}),onClick:(0,u.v0)(e.onClick,X),onPointerDown:(0,u.v0)(e.onPointerDown,Y),onFocus:(0,u.v0)(e.onFocus,H),onBlur:(0,u.v0)(e.onBlur,K),"aria-describedby":T?F:void 0};return r},[H,K,Y,T,F,X,R]),U=(0,d.useCallback)((e={},t=null)=>M({...e,style:{...e.style,[i.Dq.arrowSize.var]:C?`${C}px`:void 0,[i.Dq.arrowShadowColor.var]:k}},t),[M,C,k]),Z=(0,d.useCallback)((e={},t=null)=>{let r={...e.style,position:"relative",transformOrigin:i.Dq.transformOrigin.varRef};return{ref:t,...P,...e,id:F,role:"tooltip",style:r}},[P,F]);return{isOpen:T,show:H,hide:K,getTriggerProps:Q,getTooltipProps:Z,getTooltipPositionerProps:U,getArrowProps:q,getArrowInnerProps:I}}var c="chakra-ui:close-tooltip";function useCloseEvent(e,t){return(0,d.useEffect)(()=>{let r=getDoc(e);return r.addEventListener(c,t),()=>r.removeEventListener(c,t)},[t,e]),()=>{let t=getDoc(e),r=getWin(e);t.dispatchEvent(new r.CustomEvent(c))}}var p=r(9598),f=r(296),b=r(5059),m=r(1639),h=r(3179),_=r(7323),y=r(7745),g=r(1526),v=r(5893);function omit(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}function pick(e,t){let r={};for(let l of t)l in e&&(r[l]=e[l]);return r}var C=(0,f.m)(y.E.div),k=(0,b.G)((e,t)=>{var r,n;let o;let a=(0,m.mq)("Tooltip",e),s=(0,h.Lr)(e),u=(0,_.F)(),{children:c,label:b,shouldWrapChildren:y,"aria-label":k,hasArrow:w,bg:O,portalProps:x,background:E,backgroundColor:L,bgColor:j,motionProps:P,...T}=s,D=null!=(n=null!=(r=null!=E?E:L)?r:O)?n:j;if(D){a.bg=D;let e=(0,h.K1)(u,"colors",D);a[i.Dq.arrowBg.var]=e}let S=useTooltip({...T,direction:u.direction}),R="string"==typeof c||y;if(R)o=(0,v.jsx)(f.m.span,{display:"inline-block",tabIndex:0,...S.getTriggerProps(),children:c});else{let e=d.Children.only(c);o=(0,d.cloneElement)(e,S.getTriggerProps(e.props,e.ref))}let M=!!k,I=S.getTooltipProps({},t),q=M?omit(I,["role","id"]):I,z=pick(I,["role","id"]);return b?(0,v.jsxs)(v.Fragment,{children:[o,(0,v.jsx)(g.M,{children:S.isOpen&&(0,v.jsx)(p.h,{...x,children:(0,v.jsx)(f.m.div,{...S.getTooltipPositionerProps(),__css:{zIndex:a.zIndex,pointerEvents:"none"},children:(0,v.jsxs)(C,{variants:l,initial:"exit",animate:"enter",exit:"exit",...P,...q,__css:a,children:[b,M&&(0,v.jsx)(f.m.span,{srOnly:!0,...z,children:k}),w&&(0,v.jsx)(f.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,v.jsx)(f.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:a.bg}})})]})})})})]}):(0,v.jsx)(v.Fragment,{children:c})});k.displayName="Tooltip"}}]);