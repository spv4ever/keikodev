(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{8192:function(e,t,n){"use strict";n.d(t,{k:function(){return m}});var a=n(7294),r=n(3967),o=n.n(r),i=n(8426);let l={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var d=n(3843),s=n(6776);let c=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=p.p.default,px:n=p.px.default,py:a=p.py.default,pt:r=p.pt.default,pr:o=p.pr.default,pb:i=p.pb.default,pl:l=p.pl.default,...d}=e;return{p:t,px:n,py:a,pt:r,pr:o,pb:i,pl:l,rest:d}}function withPaddingProps(e){return[(0,s.g)(e.p,"rt-r-p"),(0,s.g)(e.px,"rt-r-px"),(0,s.g)(e.py,"rt-r-py"),(0,s.g)(e.pt,"rt-r-pt"),(0,s.g)(e.pr,"rt-r-pr"),(0,s.g)(e.pb,"rt-r-pb"),(0,s.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let u=["auto","0","50%","100%"],f=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],p={p:{type:"enum",values:c,default:void 0,responsive:!0},px:{type:"enum",values:c,default:void 0,responsive:!0},py:{type:"enum",values:c,default:void 0,responsive:!0},pt:{type:"enum",values:c,default:void 0,responsive:!0},pr:{type:"enum",values:c,default:void 0,responsive:!0},pb:{type:"enum",values:c,default:void 0,responsive:!0},pl:{type:"enum",values:c,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:u,default:void 0,responsive:!0},top:{type:"enum",values:u,default:void 0,responsive:!0},right:{type:"enum",values:u,default:void 0,responsive:!0},bottom:{type:"enum",values:u,default:void 0,responsive:!0},left:{type:"enum",values:u,default:void 0,responsive:!0},width:{type:"enum",values:f,default:void 0,responsive:!0},height:{type:"enum",values:f,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...n}=extractPaddingProps(e),{position:a=p.position.default,width:r=p.width.default,height:o=p.height.default,inset:i=p.inset.default,top:l=p.top.default,bottom:d=p.bottom.default,left:s=p.left.default,right:c=p.right.default,shrink:u=p.shrink.default,grow:f=p.grow.default,...m}=t;return{...n,position:a,width:r,height:o,inset:i,top:l,bottom:d,left:s,right:c,shrink:u,grow:f,rest:m}}function withLayoutProps(e){return[withPaddingProps(e),(0,s.g)(e.position,"rt-r-position"),(0,s.g)(e.shrink,"rt-r-fs"),(0,s.g)(e.grow,"rt-r-fg"),(0,s.g)(e.width,"rt-r-w"),(0,s.g)(e.height,"rt-r-h"),(0,s.g)(e.inset,"rt-r-inset"),(0,s.g)(e.top,"rt-r-top"),(0,s.g)(e.bottom,"rt-r-bottom"),(0,s.g)(e.left,"rt-r-left"),(0,s.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}let m=a.forwardRef((e,t)=>{let{rest:n,...r}=(0,d.FY)(e),{rest:c,...u}=extractLayoutProps(n),{className:f,asChild:p,display:m=l.display.default,direction:g=l.direction.default,align:h=l.align.default,justify:b=l.justify.default,wrap:x=l.wrap.default,gap:v=l.gap.default,...F}=c,_=p?i.g7:"div";return a.createElement(_,{...F,ref:t,className:o()("rt-Flex",f,(0,s.g)(m,"rt-r-display"),(0,s.g)(g,"rt-r-fd"),(0,s.g)(h,"rt-r-ai"),(0,s.g)(b,"rt-r-jc",{between:"space-between"}),(0,s.g)(x,"rt-r-fw"),(0,s.g)(v,"rt-r-gap"),withLayoutProps(u),(0,d.we)(r))})});m.displayName="Flex"},2627:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var a=n(7294),r=n(3967),o=n.n(r),i=n(6445),l=n(3356);let d={size:l.S.size,weight:l.S.weight,trim:l.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:l.S.color,highContrast:l.S.highContrast},s=a.forwardRef((e,t)=>{let{children:n,className:r,asChild:l=!1,underline:s=d.underline.default,...c}=e;return a.createElement(i.x,{...c,ref:t,asChild:!0,className:o()("rt-reset","rt-Link",r,`rt-underline-${s}`)},l?n:a.createElement("a",null,n))});s.displayName="Link"},5344:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/galeria_nasa",function(){return n(26)}])},26:function(e,t,n){"use strict";n.r(t),n.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_1762bb90abdb81b879b2a22edbbe01a1:function(){return Fragment_1762bb90abdb81b879b2a22edbbe01a1},Fragment_2abd513a6215c1a006c95976e8fd6fd1:function(){return Fragment_2abd513a6215c1a006c95976e8fd6fd1},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Modal_e3692ca9389f30219cbe9761d3825fb1:function(){return Modal_e3692ca9389f30219cbe9761d3825fb1},Simplegrid_341a06a08f3d7fc6c2233b223ea128e7:function(){return Simplegrid_341a06a08f3d7fc6c2233b223ea128e7},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},default:function(){return Component}});var a=n(6811),r=n(7294),o=n(687),i=n(6608),l=n(6144),d=n(6445),s=n(2627),c=n(8192),u=n(3954),f=n(6137),p=n(3100),m=n(1669),g=n(9564),h=n(1941),b=n(2207),x=n(1963),v=n(3865),F=n(3793),_=n(7754),y=n(9222),Z=n(4641),w=n(1314),k=n(4418),C=n(295),B=n(204),A=n(5284),S=n(6275),z=n(3),P=n(1913),D=n(3838),E=n(7226),I=n(4298),T=n.n(I),j=n(1664),R=n.n(j),N=n(6426),X=n(738);n(4627),n(4026);var M=n(9008),L=n.n(M);function Simplegrid_341a06a08f3d7fc6c2233b223ea128e7(){let e=(0,r.useContext)(o.M4.state__page_state),[t,n]=(0,r.useContext)(o.DR);return(0,a.tZ)(f.M,{columns:[1,2,3,4],spacing:"4",children:e.galeria_fotos.map((e,n)=>(0,a.tZ)(p.xu,{children:(0,a.tZ)(m.g,{children:(0,a.BX)(p.xu,{sx:{borderWidth:"2px",borderColor:"#F781D8",borderRadius:"5px",boxShadow:"5px 5px 20px 0px #FF0040",alignItems:"center",background:"#220A29",padding:"0.8em"},children:[(0,a.tZ)(g.x,{sx:{fontSize:"1.5em",fontFamily:"Nasa-Medium",color:"#FFFFFF",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"0.5em"},children:e.date}),(0,a.tZ)(h.E,{alt:e.title,onClick:n=>t([(0,i.ju)("state.modal_state_full.change",{hdurl:e.hdurl,title:e.title,explanation:e.explanation})],n,{}),src:e.url,sx:{objectFit:"contain",_hover:{cursor:"zoom-in"}}})]})})},n))})}function Modal_e3692ca9389f30219cbe9761d3825fb1(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,a.tZ)(b.u_,{isOpen:e.show,size:"full",children:(0,a.tZ)(x.Z,{children:(0,a.tZ)(v.h,{sx:{background:"#2F0B3A"},children:(0,a.tZ)(F.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,a.tZ)(_.M,{children:(0,a.BX)(m.g,{sx:{maxWidth:"1000px"},children:[(0,a.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,a.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,a.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,a.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,a.tZ)(g.x,{sx:{color:"#FFFFFF"},children:e.title})}function Fragment_1762bb90abdb81b879b2a22edbbe01a1(){let[e,t]=(0,r.useContext)(o.DR);return(0,a.tZ)(r.Fragment,{children:(0,i.oA)(null!==t)?(0,a.tZ)(r.Fragment,{children:(0,a.tZ)(l.Vq.Root,{open:null!==t,children:(0,a.BX)(l.Vq.Content,{children:[(0,a.tZ)(l.Vq.Title,{children:"Connection Error"}),(0,a.BX)(d.x,{as:"p",children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,i.LH)(u.Ks).href]})]})})}):(0,a.tZ)(r.Fragment,{})})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,a.tZ)(g.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,a.tZ)(h.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,r.useContext)(o.DR),n=(0,r.useCallback)(t=>e([(0,i.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,i.ju]);return(0,a.tZ)(y.z,{onClick:n,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Fragment_2abd513a6215c1a006c95976e8fd6fd1(){let[e,t]=(0,r.useContext)(o.DR),n=(0,r.useContext)(o.M4.state),l=(0,r.useContext)(o.M4.state__state_login);return(0,a.tZ)(r.Fragment,{children:(0,i.oA)(n.is_hydrated)?(0,a.tZ)(r.Fragment,{children:(0,i.oA)(l.token_is_valid)?(0,a.tZ)(r.Fragment,{children:(0,a.BX)(m.g,{children:[(0,a.tZ)(p.xu,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.BX)(Z.U,{alignItems:"center",justifyContent:"center",sx:{padding:"10px"},children:[(0,a.tZ)(w.q,{name:l.tokeninfo.name,size:"md",src:l.tokeninfo.picture,sx:{display:["none","none","flex","flex","flex"]}}),(0,a.BX)(m.g,{alignItems:"center",children:[(0,a.tZ)(k.X,{size:"xs",sx:{fontSize:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:l.tokeninfo.name}),(0,a.tZ)(g.x,{sx:{color:"#F781D8",fontSize:"0.8em",margin:"0px !important",display:["none","none","flex","flex","flex"]},children:l.tokeninfo.email})]}),(0,a.tZ)(y.z,{onClick:t=>e([(0,i.ju)("state.state_login.logout",{})],t,{}),size:"xs",sx:{margin:"0px !important",width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Cerrar"})]})}),(0,a.tZ)(g.x,{children:l.protected_content})]})}):(0,a.tZ)(r.Fragment,{children:(0,a.tZ)(m.g,{children:(0,a.tZ)(N.kZ,{onSuccess:t=>e([(0,i.ju)("state.state_login.on_success",{id_token:t})],t,{}),size:"small",text:"signin",theme:"filled_blue"})})})}):(0,a.tZ)(r.Fragment,{children:(0,a.tZ)(C.$,{})})})}function Component(){return(0,a.BX)(r.Fragment,{children:[(0,a.tZ)(Fragment_1762bb90abdb81b879b2a22edbbe01a1,{}),(0,a.BX)(p.xu,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:[(0,a.tZ)(T(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,a.BX)(B.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,a.tZ)(T(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,a.BX)(A.v,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:[(0,a.tZ)(S.j,{children:(0,a.tZ)(g.x,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:"Menu"})}),(0,a.BX)(z.q,{sx:{fontSize:"1em",background:"#220A29",borderColor:"#F781D8"},children:[(0,a.tZ)(P.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,a.tZ)(D.r,{as:R(),href:"/dev",sx:{textDecoration:"none",_hover:{}},children:"Mundo de la Programaci\xf3n"})}),(0,a.tZ)(P.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,a.tZ)(D.r,{as:R(),href:"/retoque",sx:{textDecoration:"none",_hover:{}},children:"Herramientas Gr\xe1ficas"})}),(0,a.tZ)(E.R,{}),(0,a.tZ)(P.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,a.tZ)(D.r,{as:R(),href:"/kodi",sx:{textDecoration:"none",_hover:{}},children:"Manuales Kodi"})}),(0,a.tZ)(P.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,a.tZ)(D.r,{as:R(),href:"/estafas",sx:{textDecoration:"none",_hover:{}},children:"Ciberestafas"})}),(0,a.tZ)(E.R,{}),(0,a.tZ)(P.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,a.tZ)(D.r,{as:R(),href:"/",sx:{textDecoration:"none",_hover:{}},children:"\xcdndice"})})]})]}),(0,a.tZ)(h.E,{alt:"avatar",src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}}),(0,a.tZ)(D.r,{as:R(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,a.BX)(p.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,a.tZ)(g.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,a.tZ)(g.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,a.tZ)(N.rg,{clientId:"787896941849-lih69jerql51oqgep176fces4vevmkbq.apps.googleusercontent.com",children:(0,a.tZ)(Fragment_2abd513a6215c1a006c95976e8fd6fd1,{})}),(0,a.tZ)("div",{dangerouslySetInnerHTML:{__html:'<div class="fb-like" data-href="https://keikodev.es" data-width="" data-layout="button_count" data-action="" data-size="small" data-share="true"></div>'}}),(0,a.tZ)(Modal_e3692ca9389f30219cbe9761d3825fb1,{})]}),(0,a.tZ)(X.Z,{href:"/",icon:(0,a.tZ)(h.E,{src:"/avatar.png"}),target:"_top"}),(0,a.tZ)(_.M,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:(0,a.tZ)(m.g,{sx:{maxWidth:"1000px",width:"100%",marginTop:"2em",marginBottom:"2em"},children:(0,a.BX)(m.g,{spacing:"2em",sx:{padding:"0.8em",width:"100%"},children:[(0,a.tZ)(p.xu,{sx:{marginBottom:"2em"},children:(0,a.tZ)(k.X,{sx:{color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:(0,a.tZ)(_.M,{sx:{fontFamily:"Nasa-Medium",fontSize:"0.8em"},children:"Biblioteca de fotos de la nasa en alta resoluci\xf3n"})})}),(0,a.tZ)(m.g,{children:(0,a.tZ)(Simplegrid_341a06a08f3d7fc6c2233b223ea128e7,{})}),(0,a.tZ)(g.x,{sx:{color:"#FFFFFF"},children:"Imagenes del d\xeda cedidas por la NASA"}),(0,a.tZ)(g.x,{sx:{color:"#FFFFFF"},children:"Todas las imagenes publicadas han sido revisadas y son de uso libre sin copyright del autor"})]})})}),(0,a.tZ)(p.xu,{sx:{background:"black"},children:(0,a.BX)(m.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,a.tZ)(w.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,a.tZ)(D.r,{as:R(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,a.tZ)(Z.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,a.tZ)(g.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,a.tZ)(X.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,a.tZ)(h.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,a.BX)(m.g,{children:[(0,a.tZ)(D.r,{as:R(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,a.tZ)(T(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,a.tZ)(s.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,a.tZ)(R(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,a.tZ)(T(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,a.BX)(c.k,{align:"start",css:{flexDirection:"column"},gap:"2",children:[(0,a.tZ)(T(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,a.tZ)(T(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,a.tZ)(T(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,a.tZ)(T(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,a.BX)(L(),{children:[(0,a.tZ)("title",{children:"\xdaltimas fotos publicadas desde la Nasa"}),(0,a.tZ)("meta",{content:"Galer\xeda de fotos donde se ir\xe1n publicando las \xfaltimas fotos directas desde La Nasa",name:"description"}),(0,a.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,a.tZ)("meta",{content:"P\xe1gina con recursos para desarrolladores",name:"og:title"}),(0,a.tZ)("meta",{content:"Links que m\xe1s uso para desarrollar, web, scrips, python, SQL Server...",name:"og:description"}),(0,a.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,a.tZ)("meta",{content:"website",name:"og:type"}),(0,a.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,a.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,a.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},6137:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var a=n(5059),r=n(296),o=n(5893),i=(0,a.G)(function(e,t){let{templateAreas:n,gap:a,rowGap:i,columnGap:l,column:d,row:s,autoFlow:c,autoRows:u,templateRows:f,autoColumns:p,templateColumns:m,...g}=e;return(0,o.jsx)(r.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:i,gridColumnGap:l,gridAutoColumns:p,gridColumn:d,gridRow:s,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:m},...g})});i.displayName="Grid";var l=n(7323),d=n(4629),s=n(3951),c=(0,a.G)(function(e,t){let{columns:n,spacingX:a,spacingY:r,spacing:d,minChildWidth:s,...c}=e,u=(0,l.F)(),f=s?widthToColumns(s,u):countToColumns(n);return(0,o.jsx)(i,{ref:t,gap:d,columnGap:a,rowGap:r,templateColumns:f,...c})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return(0,s.XQ)(e,e=>{let n=(0,d.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`})}function countToColumns(e){return(0,s.XQ)(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}c.displayName="SimpleGrid"}},function(e){e.O(0,[169,583,267,774,888,179],function(){return e(e.s=5344)}),_N_E=e.O()}]);