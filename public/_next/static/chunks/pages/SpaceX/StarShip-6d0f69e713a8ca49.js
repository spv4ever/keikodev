(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{73725:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var a=n(67294),r=n(93967),o=n.n(r),i=n(88426);let l={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var d=n(23843),c=n(60134),s=n(6776);let u=a.forwardRef((e,t)=>{let{rest:n,...r}=(0,d.FY)(e),{rest:u,...m}=(0,c.F8)(n),{className:h,asChild:p,display:g=l.display.default,...f}=u,b=p?i.g7:"div";return a.createElement(b,{...f,ref:t,className:o()("rt-Box",h,(0,s.g)(g,"rt-r-display"),(0,c.yt)(m),(0,d.we)(r))})});u.displayName="Box"},52799:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SpaceX/StarShip",function(){return n(50661)}])},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let a=n(38754),r=(n(67294),a._(n(24304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=r.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let o=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n({...a,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete a.webpack,delete a.modules,noSSR(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30043:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let a=n(38754),r=a._(n(67294)),o=r.default.createContext(null)},24304:function(e,t,n){"use strict";/**
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
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=n(38754),r=a._(n(67294)),o=n(30043);function resolve(e){return e&&e.default?e.default:e}let i=[],l=[],d=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}function createLoadableComponent(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function init(){if(!a){let t=new LoadableSubscription(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!d){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return init()})}function useLoadableModule(){init();let e=r.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let o=r.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),r.default.useMemo(()=>o.loading||o.error?r.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?r.default.createElement(resolve(o.loaded),e):null,[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",r.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(i).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(d=!0,t());flushInitializers(l,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let c=Loadable},50661:function(e,t,n){"use strict";n.r(t),n.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_3bfe44160b1cd411eeb0e2a94ad43241:function(){return Fragment_3bfe44160b1cd411eeb0e2a94ad43241},Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Image_f864b465ad6f10a5ac39453fd26d4588:function(){return Image_f864b465ad6f10a5ac39453fd26d4588},Modal_2d103206c0729246cd0fbf9498865e18:function(){return Modal_2d103206c0729246cd0fbf9498865e18},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},Text_9412b3e0d9971a9ee8250066572e2e9b:function(){return Text_9412b3e0d9971a9ee8250066572e2e9b},default:function(){return Component}});var a=n(82729),r=n(35944),o=n(67294),i=n(60687),l=n(6608),d=n(15637),c=n(70917),s=n(99522),u=n(6445),m=n(73725),h=n(30467),p=n(41042),g=n(72627),f=n(73954),b=n(4298),F=n.n(b),x=n(91669),w=n(23100),Z=n(54641),_=n(91314),y=n(14418),v=n(9564),k=n(29222),C=n(295),B=n(62207),S=n(31963),X=n(47216),z=n(73793),T=n(7754),E=n(81941),A=n(204),L=n(33838),I=n(68670),D=n(41664),P=n.n(D),j=n(86426),M=n(80738),R=n(5152),N=n.n(R),O=n(9008),V=n.n(O);function _templateObject(){let e=(0,a._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let G=N()(()=>n.e(4).then(n.bind(n,22004)),{loadableGenerated:{webpack:()=>[22004]},ssr:!1});function Fragment_3bfe44160b1cd411eeb0e2a94ad43241(){let e=(0,o.useContext)(i.M4.state__state_login),[t,n]=(0,o.useContext)(i.DR),a=(0,o.useContext)(i.M4.state);return(0,r.tZ)(o.Fragment,{children:(0,l.oA)(999===e.users_rights)?(0,r.tZ)(o.Fragment,{children:(0,r.BX)(x.g,{children:[(0,r.tZ)(w.xu,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.BX)(Z.U,{alignItems:"center",justifyContent:"center",sx:{padding:"10px"},children:[(0,r.tZ)(_.q,{name:e.tokeninfo.name,size:"md",src:e.tokeninfo.picture,sx:{display:["none","none","flex","flex","flex"]}}),(0,r.BX)(x.g,{alignItems:"center",children:[(0,r.tZ)(y.X,{size:"xs",sx:{fontSize:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:e.tokeninfo.name}),(0,r.tZ)(v.x,{sx:{color:"#F781D8",fontSize:"0.8em",margin:"0px !important",display:["none","none","flex","flex","flex"]},children:e.tokeninfo.email})]}),(0,r.tZ)(k.z,{onClick:e=>t([(0,l.ju)("state.state_login.logout",{})],e,{}),size:"xs",sx:{margin:"0px !important",width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Cerrar"})]})}),(0,r.tZ)(v.x,{children:e.protected_content}),(0,r.tZ)(v.x,{sx:{color:"#F1F2F4"},children:"Administrador de sistemas"})]})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(j.rg,{clientId:"787896941849-lih69jerql51oqgep176fces4vevmkbq.apps.googleusercontent.com",children:(0,r.tZ)(o.Fragment,{children:(0,l.oA)(a.is_hydrated)?(0,r.tZ)(o.Fragment,{children:(0,l.oA)(e.token_is_valid)?(0,r.tZ)(o.Fragment,{children:(0,r.BX)(x.g,{children:[(0,r.tZ)(w.xu,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.BX)(Z.U,{alignItems:"center",justifyContent:"center",sx:{padding:"10px"},children:[(0,r.tZ)(_.q,{name:e.tokeninfo.name,size:"md",src:e.tokeninfo.picture,sx:{display:["none","none","flex","flex","flex"]}}),(0,r.BX)(x.g,{alignItems:"center",children:[(0,r.tZ)(y.X,{size:"xs",sx:{fontSize:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:e.tokeninfo.name}),(0,r.tZ)(v.x,{sx:{color:"#F781D8",fontSize:"0.8em",margin:"0px !important",display:["none","none","flex","flex","flex"]},children:e.tokeninfo.email})]}),(0,r.tZ)(k.z,{onClick:e=>t([(0,l.ju)("state.state_login.logout",{})],e,{}),size:"xs",sx:{margin:"0px !important",width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Cerrar"})]})}),(0,r.tZ)(v.x,{children:e.protected_content})]})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(x.g,{children:(0,r.tZ)(j.kZ,{onSuccess:e=>t([(0,l.ju)("state.state_login.on_success",{id_token:e})],e,{}),size:"small",text:"signin",theme:"filled_blue"})})})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(C.$,{})})})})})})}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,o.useContext)(i.DR);return(0,r.tZ)(o.Fragment,{children:(0,l.oA)(t.length>0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(d.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(U," 1s infinite")},size:32})}):(0,r.tZ)(o.Fragment,{})})}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,o.useContext)(i.DR);return(0,r.tZ)(o.Fragment,{children:(0,l.oA)(t.length>=2)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(s.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,r.BX)(s.Vq.Content,{children:[(0,r.tZ)(s.Vq.Title,{children:"Connection Error"}),(0,r.BX)(u.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,l.LH)(f.Ks).href]})]})})}):(0,r.tZ)(o.Fragment,{})})}function Modal_2d103206c0729246cd0fbf9498865e18(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(B.u_,{isOpen:e.show,size:"full",children:(0,r.tZ)(S.Z,{children:(0,r.tZ)(X.h,{sx:{background:"#2F0B3A"},children:(0,r.tZ)(z.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,r.tZ)(T.M,{children:(0,r.BX)(x.g,{sx:{maxWidth:"1000px"},children:[(0,r.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,r.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,r.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,r.tZ)(Text_9412b3e0d9971a9ee8250066572e2e9b,{}),(0,r.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(v.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(E.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,l.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,l.ju]);return(0,r.tZ)(k.z,{onClick:n,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(v.x,{sx:{color:"#FFFFFF"},children:e.title})}function Text_9412b3e0d9971a9ee8250066572e2e9b(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.BX)(v.x,{sx:{color:"#FFFFFF"},children:["Copyright: ",e.copyright]})}function Image_f864b465ad6f10a5ac39453fd26d4588(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,l.ju)("state.page_state.galeria_fotos_load",{})],t,{}),[e,l.ju]);return(0,r.tZ)(E.E,{alt:"avatar",onLoad:n,src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}})}let U=(0,c.F4)(_templateObject());function Component(){return(0,r.BX)(o.Fragment,{children:[(0,r.BX)(o.Fragment,{children:[(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,r.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,r.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,r.BX)(m.x,{css:{minHeight:"650px",background:"center / contain no-repeat url('/img/starship.svg')",width:"100%"},children:[(0,r.tZ)(F(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,r.BX)(A.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,r.tZ)(F(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,r.tZ)(Image_f864b465ad6f10a5ac39453fd26d4588,{}),(0,r.tZ)(L.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,r.BX)(w.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,r.tZ)(v.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,r.tZ)(v.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,r.tZ)(Fragment_3bfe44160b1cd411eeb0e2a94ad43241,{}),(0,r.tZ)(Modal_2d103206c0729246cd0fbf9498865e18,{})]}),(0,r.tZ)(M.Z,{href:"/",icon:(0,r.tZ)(E.E,{src:"/avatar.png"}),target:"_top"}),(0,r.tZ)(T.M,{children:(0,r.tZ)(x.g,{sx:{maxWidth:"1000px",width:"100%",marginTop:"2em",marginBottom:"2em",minHeight:"650px"},children:(0,r.BX)(h.k,{align:"center",css:{maxWidth:"1000px"},direction:"column",gap:"3",children:[(0,r.tZ)(p.X,{css:{color:"#FFFFFF"},children:"Videos de los lanzamientos de la Starship"}),(0,r.tZ)(u.x,{as:"p",css:{color:"#FFFFFF"},children:"Recopilaci\xf3n de directos de SpaceXstorm, donde se puede ver la evoluci\xf3n de la Starship, desde sus inicios."}),(0,r.tZ)(u.x,{as:"p",css:{color:"#FFFFFF"},children:"Estos tremendos documentos compartidos por SpaceXstorm son parte de la historia de la humanidad"}),(0,r.BX)(h.k,{css:{"@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"row"},width:"100%"},justify:"between",gap:"4",children:[(0,r.tZ)(I.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,r.tZ)(L.r,{as:P(),href:"/",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,r.tZ)(k.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,r.BX)(Z.U,{children:[(0,r.tZ)(E.E,{alt:"Inicio Keikodev",src:"/img/dev.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,r.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,r.tZ)(v.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Inicio Keikodev"}),(0,r.tZ)(v.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Men\xfa principal de keikodev"})]})]})})})}),(0,r.tZ)(I.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,r.tZ)(L.r,{as:P(),href:"/SpaceX",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,r.tZ)(k.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,r.BX)(Z.U,{children:[(0,r.tZ)(E.E,{alt:"SpaceX - Rumbo a Marte",src:"/img/rocket-solid.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,r.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,r.tZ)(v.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"SpaceX - Rumbo a Marte"}),(0,r.tZ)(v.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:""})]})]})})})})]}),(0,r.BX)(m.x,{css:{"@media screen and (min-width: 0)":{display:"none"},"@media screen and (min-width: 30em)":{display:"block"},"@media screen and (min-width: 48em)":{display:"block"},"@media screen and (min-width: 62em)":{display:"block"}},children:[(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"14/03/2024 - Tercer Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!1)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=Zdse97c9plU",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=Zdse97c9plU"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"18/11/2023 - Segundo Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!1)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=LgEMTp7vLr4",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=LgEMTp7vLr4"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"20/04/2023 - Primer Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!1)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=phLF3WlGnec",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=phLF3WlGnec"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"5/05/2021 - SN15 Primer aterrizaje"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!1)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=XikSoND4ALY",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=XikSoND4ALY"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"30/03/2021 - SN11"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!1)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=SoVzbClDyxs",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=SoVzbClDyxs"})})})]})]}),(0,r.BX)(m.x,{css:{"@media screen and (min-width: 0)":{display:"block"},"@media screen and (min-width: 30em)":{display:"none"},"@media screen and (min-width: 48em)":{display:"none"},"@media screen and (min-width: 62em)":{display:"none"}},children:[(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"14/03/2024 - Tercer Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=Zdse97c9plU",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=Zdse97c9plU"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"18/11/2023 - Segundo Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=LgEMTp7vLr4",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=LgEMTp7vLr4"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"20/04/2023 - Primer Vuelo"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=phLF3WlGnec",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=phLF3WlGnec"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"5/05/2021 - SN15 Primer aterrizaje"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=XikSoND4ALY",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=XikSoND4ALY"})})})]}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(u.x,{align:"center",as:"p",css:{color:"#FFFFFF",width:"100%",paddingTop:"1em",paddingBottom:"1em"},size:"5",children:"30/03/2021 - SN11"}),(0,r.tZ)(o.Fragment,{children:(0,l.oA)(!0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,height:"240px",url:"https://www.youtube.com/watch?v=SoVzbClDyxs",width:"350px"})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(G,{controls:!0,url:"https://www.youtube.com/watch?v=SoVzbClDyxs"})})})]})]})]})})}),(0,r.tZ)(w.xu,{sx:{width:"100%",background:"black"},children:(0,r.BX)(x.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,r.tZ)(_.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,r.tZ)(L.r,{as:P(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,r.tZ)(Z.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,r.tZ)(v.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,r.tZ)(M.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,r.tZ)(E.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,r.BX)(x.g,{children:[(0,r.tZ)(L.r,{as:P(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,r.tZ)(F(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,r.tZ)(g.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,r.tZ)(P(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,r.tZ)(F(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,r.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(F(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,r.tZ)(F(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,r.tZ)(F(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,r.tZ)(F(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,r.BX)(V(),{children:[(0,r.tZ)("title",{children:"SpaceX - Rumbo a Marte"}),(0,r.tZ)("meta",{content:"Espacio para compartir noticias y directos de SpaceX. Gracias a SpaceXstorm por dejarme compartir sus videos.",name:"description"}),(0,r.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,r.tZ)("meta",{content:"SpaceX - Rumbo a Marte",name:"og:title"}),(0,r.tZ)("meta",{content:"Espacio para compartir noticias y directos de SpaceX. Gracias a SpaceXstorm por dejarme compartir sus videos.",name:"og:description"}),(0,r.tZ)("meta",{content:"website",name:"og:type"}),(0,r.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,r.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,r.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},5152:function(e,t,n){e.exports=n(1342)}},function(e){e.O(0,[689,178,670,774,888,179],function(){return e(e.s=52799)}),_N_E=e.O()}]);