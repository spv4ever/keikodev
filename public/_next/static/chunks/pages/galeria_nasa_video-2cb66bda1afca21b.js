(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{60329:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/galeria_nasa_video",function(){return n(26421)}])},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let a=n(38754),r=(n(67294),a._(n(24304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=r.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let o=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n({...a,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete a.webpack,delete a.modules,noSSR(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30043:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let a=n(38754),r=a._(n(67294)),o=r.default.createContext(null)},24304:function(e,t,n){"use strict";/**
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
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=n(38754),r=a._(n(67294)),o=n(30043);function resolve(e){return e&&e.default?e.default:e}let i=[],d=[],l=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}function createLoadableComponent(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function init(){if(!a){let t=new LoadableSubscription(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!l){let e=n.webpack?n.webpack():n.modules;e&&d.push(t=>{for(let n of e)if(t.includes(n))return init()})}function useLoadableModule(){init();let e=r.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let o=r.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),r.default.useMemo(()=>o.loading||o.error?r.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?r.default.createElement(resolve(o.loaded),e):null,[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",r.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(i).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(l=!0,t());flushInitializers(d,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let c=Loadable},26421:function(e,t,n){"use strict";n.r(t),n.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_8344edbc3fab923471b03d5f79abc360:function(){return Fragment_8344edbc3fab923471b03d5f79abc360},Fragment_ac0b06893fc1b15016f3e0532508036d:function(){return Fragment_ac0b06893fc1b15016f3e0532508036d},Fragment_f829069cf4938f834ff02f12a22afc95:function(){return Fragment_f829069cf4938f834ff02f12a22afc95},Fragment_f980c04f4fdddac3474685aabd03f2cc:function(){return Fragment_f980c04f4fdddac3474685aabd03f2cc},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Image_f864b465ad6f10a5ac39453fd26d4588:function(){return Image_f864b465ad6f10a5ac39453fd26d4588},Modal_2d103206c0729246cd0fbf9498865e18:function(){return Modal_2d103206c0729246cd0fbf9498865e18},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},Text_9412b3e0d9971a9ee8250066572e2e9b:function(){return Text_9412b3e0d9971a9ee8250066572e2e9b},Vstack_6ae817d466fd8a651e4c73056fed2b99:function(){return Vstack_6ae817d466fd8a651e4c73056fed2b99},Vstack_d166eb0e299d6feb53e3d546fffcb271:function(){return Vstack_d166eb0e299d6feb53e3d546fffcb271},default:function(){return Component}});var a=n(82729),r=n(35944),o=n(67294),i=n(60687),d=n(6608),l=n(15637),c=n(70917),s=n(99522),u=n(6445),f=n(72627),m=n(30467),b=n(73954),p=n(9564),h=n(81941),g=n(91669),_=n(23100),x=n(14418),F=n(7754),Z=n(54641),y=n(91314),w=n(29222),k=n(295),v=n(62207),C=n(31963),B=n(47216),I=n(73793),E=n(204),j=n(33838),L=n(4298),T=n.n(L),M=n(41664),P=n.n(M),A=n(86426),S=n(80738);n(54627),n(44026);var z=n(5152),D=n.n(z),X=n(9008),N=n.n(X);function _templateObject(){let e=(0,a._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let R=D()(()=>n.e(4).then(n.bind(n,22004)),{loadableGenerated:{webpack:()=>[22004]},ssr:!1});function Fragment_f980c04f4fdddac3474685aabd03f2cc(){let e=(0,o.useContext)(i.M4.state__state_login);return(0,r.tZ)(o.Fragment,{children:(0,d.oA)(999===e.users_rights)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(p.x,{sx:{color:"#F1F2F4"},children:"Administrador de sistemas"})}):(0,r.tZ)(o.Fragment,{})})}function Image_f864b465ad6f10a5ac39453fd26d4588(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,d.ju)("state.page_state.galeria_fotos_load",{})],t,{}),[e,d.ju]);return(0,r.tZ)(h.E,{alt:"avatar",onLoad:n,src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}})}function Vstack_d166eb0e299d6feb53e3d546fffcb271(){(0,o.useEffect)(()=>(e([(0,d.ju)("state.page_state.galeria_fotos_load_video",{})]),()=>{}),[]);let[e,t]=(0,o.useContext)(i.DR);return(0,r.tZ)(g.g,{sx:{maxWidth:"1000px",width:"100%",marginTop:"2em",marginBottom:"2em"},children:(0,r.BX)(g.g,{spacing:"2em",sx:{padding:"0.8em",width:"100%"},children:[(0,r.tZ)(_.xu,{sx:{marginBottom:"2em"},children:(0,r.tZ)(x.X,{sx:{color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:(0,r.tZ)(F.M,{sx:{fontFamily:"Nasa-Medium",fontSize:"0.8em"},children:"Biblioteca de videos de la nasa"})})}),(0,r.tZ)(Vstack_6ae817d466fd8a651e4c73056fed2b99,{})]})})}function Vstack_6ae817d466fd8a651e4c73056fed2b99(){let e=(0,o.useContext)(i.M4.state__page_state);return(0,r.BX)(g.g,{children:[e.galeria_videos.map((e,t)=>(0,r.tZ)(_.xu,{children:(0,r.tZ)(g.g,{children:(0,r.BX)(_.xu,{sx:{borderWidth:"2px",borderColor:"#F781D8",borderRadius:"5px",boxShadow:"5px 5px 20px 0px #FF0040",alignItems:"center",background:"#220A29",padding:"0.8em"},children:[(0,r.tZ)(p.x,{sx:{fontSize:"1.5em",fontFamily:"Nasa-Medium",color:"#FFFFFF",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"0.5em"},children:e.date}),(0,r.tZ)(R,{controls:!0,height:"240px",light:!0,playing:!0,url:e.url,width:"320px"})]})})},t)),(0,r.tZ)(p.x,{sx:{color:"#FFFFFF"},children:"Videos cedidos por la NASA"})]})}function Text_9412b3e0d9971a9ee8250066572e2e9b(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.BX)(p.x,{sx:{color:"#FFFFFF"},children:["Copyright: ",e.copyright]})}function Fragment_8344edbc3fab923471b03d5f79abc360(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useContext)(i.M4.state),a=(0,o.useContext)(i.M4.state__state_login);return(0,r.tZ)(o.Fragment,{children:(0,d.oA)(n.is_hydrated)?(0,r.tZ)(o.Fragment,{children:(0,d.oA)(a.token_is_valid)?(0,r.tZ)(o.Fragment,{children:(0,r.BX)(g.g,{children:[(0,r.tZ)(_.xu,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.BX)(Z.U,{alignItems:"center",justifyContent:"center",sx:{padding:"10px"},children:[(0,r.tZ)(y.q,{name:a.tokeninfo.name,size:"md",src:a.tokeninfo.picture,sx:{display:["none","none","flex","flex","flex"]}}),(0,r.BX)(g.g,{alignItems:"center",children:[(0,r.tZ)(x.X,{size:"xs",sx:{fontSize:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:a.tokeninfo.name}),(0,r.tZ)(p.x,{sx:{color:"#F781D8",fontSize:"0.8em",margin:"0px !important",display:["none","none","flex","flex","flex"]},children:a.tokeninfo.email})]}),(0,r.tZ)(w.z,{onClick:t=>e([(0,d.ju)("state.state_login.logout",{})],t,{}),size:"xs",sx:{margin:"0px !important",width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Cerrar"})]})}),(0,r.tZ)(p.x,{children:a.protected_content})]})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(g.g,{children:(0,r.tZ)(A.kZ,{onSuccess:t=>e([(0,d.ju)("state.state_login.on_success",{id_token:t})],t,{}),size:"small",text:"signin",theme:"filled_blue"})})})}):(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(k.$,{})})})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(h.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(p.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,d.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,d.ju]);return(0,r.tZ)(w.z,{onClick:n,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Fragment_ac0b06893fc1b15016f3e0532508036d(){let[e,t]=(0,o.useContext)(i.DR);return(0,r.tZ)(o.Fragment,{children:(0,d.oA)(t.length>=2)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(s.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,r.BX)(s.Vq.Content,{children:[(0,r.tZ)(s.Vq.Title,{children:"Connection Error"}),(0,r.BX)(u.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,d.LH)(b.Ks).href]})]})})}):(0,r.tZ)(o.Fragment,{})})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(p.x,{sx:{color:"#FFFFFF"},children:e.title})}function Fragment_f829069cf4938f834ff02f12a22afc95(){let[e,t]=(0,o.useContext)(i.DR);return(0,r.tZ)(o.Fragment,{children:(0,d.oA)(t.length>0)?(0,r.tZ)(o.Fragment,{children:(0,r.tZ)(l.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(O," 1s infinite")},size:32,children:"wifi_off"})}):(0,r.tZ)(o.Fragment,{})})}function Modal_2d103206c0729246cd0fbf9498865e18(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,r.tZ)(v.u_,{isOpen:e.show,size:"full",children:(0,r.tZ)(C.Z,{children:(0,r.tZ)(B.h,{sx:{background:"#2F0B3A"},children:(0,r.tZ)(I.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,r.tZ)(F.M,{children:(0,r.BX)(g.g,{sx:{maxWidth:"1000px"},children:[(0,r.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,r.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,r.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,r.tZ)(Text_9412b3e0d9971a9ee8250066572e2e9b,{}),(0,r.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}let O=(0,c.F4)(_templateObject());function Component(){return(0,r.BX)(o.Fragment,{children:[(0,r.BX)(o.Fragment,{children:[(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,r.tZ)(Fragment_f829069cf4938f834ff02f12a22afc95,{})}),(0,r.tZ)(Fragment_ac0b06893fc1b15016f3e0532508036d,{})]}),(0,r.BX)(_.xu,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:[(0,r.tZ)(T(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,r.BX)(E.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,r.tZ)(T(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,r.tZ)(Image_f864b465ad6f10a5ac39453fd26d4588,{}),(0,r.tZ)(j.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,r.BX)(_.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,r.tZ)(p.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,r.tZ)(p.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,r.tZ)(A.rg,{clientId:"787896941849-lih69jerql51oqgep176fces4vevmkbq.apps.googleusercontent.com",children:(0,r.tZ)(Fragment_8344edbc3fab923471b03d5f79abc360,{})}),(0,r.tZ)(Fragment_f980c04f4fdddac3474685aabd03f2cc,{}),(0,r.tZ)(Modal_2d103206c0729246cd0fbf9498865e18,{})]}),(0,r.tZ)(S.Z,{href:"/",icon:(0,r.tZ)(h.E,{src:"/avatar.png"}),target:"_top"}),(0,r.tZ)(F.M,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:(0,r.tZ)(Vstack_d166eb0e299d6feb53e3d546fffcb271,{})}),(0,r.tZ)(_.xu,{sx:{width:"100%",background:"black"},children:(0,r.BX)(g.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,r.tZ)(y.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,r.tZ)(j.r,{as:P(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,r.tZ)(Z.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,r.tZ)(p.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,r.tZ)(S.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,r.tZ)(h.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,r.BX)(g.g,{children:[(0,r.tZ)(j.r,{as:P(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,r.tZ)(T(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,r.tZ)(f.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,r.tZ)(P(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,r.tZ)(T(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,r.BX)(m.k,{align:"start",direction:"column",gap:"2",children:[(0,r.tZ)(T(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,r.tZ)(T(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,r.tZ)(T(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,r.tZ)(T(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,r.BX)(N(),{children:[(0,r.tZ)("title",{children:"\xdaltimas fotos publicadas desde la Nasa"}),(0,r.tZ)("meta",{content:"Galer\xeda de fotos donde se ir\xe1n publicando las \xfaltimas fotos directas desde La Nasa",name:"description"}),(0,r.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,r.tZ)("meta",{content:"\xdaltimas fotos publicadas desde la Nasa",name:"og:title"}),(0,r.tZ)("meta",{content:"Galer\xeda de fotos donde se ir\xe1n publicando las \xfaltimas fotos directas desde La Nasa",name:"og:description"}),(0,r.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,r.tZ)("meta",{content:"website",name:"og:type"}),(0,r.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,r.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,r.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},5152:function(e,t,n){e.exports=n(1342)}},function(e){e.O(0,[689,583,443,774,888,179],function(){return e(e.s=60329)}),_N_E=e.O()}]);