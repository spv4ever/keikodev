(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{8192:function(e,t,n){"use strict";n.d(t,{k:function(){return h}});var o=n(7294),a=n(3967),r=n.n(a),i=n(8426);let l={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var d=n(3843),s=n(6776);let c=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=m.p.default,px:n=m.px.default,py:o=m.py.default,pt:a=m.pt.default,pr:r=m.pr.default,pb:i=m.pb.default,pl:l=m.pl.default,...d}=e;return{p:t,px:n,py:o,pt:a,pr:r,pb:i,pl:l,rest:d}}function withPaddingProps(e){return[(0,s.g)(e.p,"rt-r-p"),(0,s.g)(e.px,"rt-r-px"),(0,s.g)(e.py,"rt-r-py"),(0,s.g)(e.pt,"rt-r-pt"),(0,s.g)(e.pr,"rt-r-pr"),(0,s.g)(e.pb,"rt-r-pb"),(0,s.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let p=["auto","0","50%","100%"],u=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],m={p:{type:"enum",values:c,default:void 0,responsive:!0},px:{type:"enum",values:c,default:void 0,responsive:!0},py:{type:"enum",values:c,default:void 0,responsive:!0},pt:{type:"enum",values:c,default:void 0,responsive:!0},pr:{type:"enum",values:c,default:void 0,responsive:!0},pb:{type:"enum",values:c,default:void 0,responsive:!0},pl:{type:"enum",values:c,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:p,default:void 0,responsive:!0},top:{type:"enum",values:p,default:void 0,responsive:!0},right:{type:"enum",values:p,default:void 0,responsive:!0},bottom:{type:"enum",values:p,default:void 0,responsive:!0},left:{type:"enum",values:p,default:void 0,responsive:!0},width:{type:"enum",values:u,default:void 0,responsive:!0},height:{type:"enum",values:u,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...n}=extractPaddingProps(e),{position:o=m.position.default,width:a=m.width.default,height:r=m.height.default,inset:i=m.inset.default,top:l=m.top.default,bottom:d=m.bottom.default,left:s=m.left.default,right:c=m.right.default,shrink:p=m.shrink.default,grow:u=m.grow.default,...h}=t;return{...n,position:o,width:a,height:r,inset:i,top:l,bottom:d,left:s,right:c,shrink:p,grow:u,rest:h}}function withLayoutProps(e){return[withPaddingProps(e),(0,s.g)(e.position,"rt-r-position"),(0,s.g)(e.shrink,"rt-r-fs"),(0,s.g)(e.grow,"rt-r-fg"),(0,s.g)(e.width,"rt-r-w"),(0,s.g)(e.height,"rt-r-h"),(0,s.g)(e.inset,"rt-r-inset"),(0,s.g)(e.top,"rt-r-top"),(0,s.g)(e.bottom,"rt-r-bottom"),(0,s.g)(e.left,"rt-r-left"),(0,s.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}let h=o.forwardRef((e,t)=>{let{rest:n,...a}=(0,d.FY)(e),{rest:c,...p}=extractLayoutProps(n),{className:u,asChild:m,display:h=l.display.default,direction:g=l.direction.default,align:f=l.align.default,justify:x=l.justify.default,wrap:b=l.wrap.default,gap:v=l.gap.default,...F}=c,y=m?i.g7:"div";return o.createElement(y,{...F,ref:t,className:r()("rt-Flex",u,(0,s.g)(h,"rt-r-display"),(0,s.g)(g,"rt-r-fd"),(0,s.g)(f,"rt-r-ai"),(0,s.g)(x,"rt-r-jc",{between:"space-between"}),(0,s.g)(b,"rt-r-fw"),(0,s.g)(v,"rt-r-gap"),withLayoutProps(p),(0,d.we)(a))})});h.displayName="Flex"},2627:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var o=n(7294),a=n(3967),r=n.n(a),i=n(6445),l=n(3356);let d={size:l.S.size,weight:l.S.weight,trim:l.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:l.S.color,highContrast:l.S.highContrast},s=o.forwardRef((e,t)=>{let{children:n,className:a,asChild:l=!1,underline:s=d.underline.default,...c}=e;return o.createElement(i.x,{...c,ref:t,asChild:!0,className:r()("rt-reset","rt-Link",a,`rt-underline-${s}`)},l?n:o.createElement("a",null,n))});s.displayName="Link"},8397:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kodi",function(){return n(178)}])},178:function(e,t,n){"use strict";n.r(t),n.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_1762bb90abdb81b879b2a22edbbe01a1:function(){return Fragment_1762bb90abdb81b879b2a22edbbe01a1},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Modal_e3692ca9389f30219cbe9761d3825fb1:function(){return Modal_e3692ca9389f30219cbe9761d3825fb1},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},default:function(){return Component}});var o=n(6811),a=n(7294),r=n(687),i=n(6608),l=n(6144),d=n(6445),s=n(2627),c=n(8192),p=n(3954),u=n(2207),m=n(1963),h=n(3865),g=n(3793),f=n(7754),x=n(1669),b=n(9564),v=n(1941),F=n(9222),y=n(3100),w=n(204),C=n(5284),k=n(6275),Z=n(3),_=n(1913),B=n(3838),A=n(7226),z=n(4418),P=n(9343),E=n(4641),I=n(1314),D=n(4298),S=n.n(D),T=n(1664),R=n.n(T),X=n(738),L=n(9008),j=n.n(L);function Modal_e3692ca9389f30219cbe9761d3825fb1(){let e=(0,a.useContext)(r.M4.state__modal_state_full);return(0,o.tZ)(u.u_,{isOpen:e.show,size:"full",children:(0,o.tZ)(m.Z,{children:(0,o.tZ)(h.h,{sx:{background:"#2F0B3A"},children:(0,o.tZ)(g.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,o.tZ)(f.M,{children:(0,o.BX)(x.g,{sx:{maxWidth:"1000px"},children:[(0,o.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,o.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,o.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,o.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Fragment_1762bb90abdb81b879b2a22edbbe01a1(){let[e,t]=(0,a.useContext)(r.DR);return(0,o.tZ)(a.Fragment,{children:(0,i.oA)(null!==t)?(0,o.tZ)(a.Fragment,{children:(0,o.tZ)(l.Vq.Root,{open:null!==t,children:(0,o.BX)(l.Vq.Content,{children:[(0,o.tZ)(l.Vq.Title,{children:"Connection Error"}),(0,o.BX)(d.x,{as:"p",children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,i.LH)(p.Ks).href]})]})})}):(0,o.tZ)(a.Fragment,{})})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,a.useContext)(r.M4.state__modal_state_full);return(0,o.tZ)(b.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,a.useContext)(r.M4.state__modal_state_full);return(0,o.tZ)(v.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,a.useContext)(r.DR),n=(0,a.useCallback)(t=>e([(0,i.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,i.ju]);return(0,o.tZ)(F.z,{onClick:n,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,a.useContext)(r.M4.state__modal_state_full);return(0,o.tZ)(b.x,{sx:{color:"#FFFFFF"},children:e.title})}function Component(){return(0,o.BX)(a.Fragment,{children:[(0,o.tZ)(Fragment_1762bb90abdb81b879b2a22edbbe01a1,{}),(0,o.BX)(y.xu,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:[(0,o.tZ)(S(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(w.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,o.tZ)(S(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(C.v,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:[(0,o.tZ)(k.j,{children:(0,o.tZ)(b.x,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:"Menu"})}),(0,o.BX)(Z.q,{sx:{fontSize:"1em",background:"#220A29",borderColor:"#F781D8"},children:[(0,o.tZ)(_.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:R(),href:"/dev",sx:{textDecoration:"none",_hover:{}},children:"Mundo de la Programaci\xf3n"})}),(0,o.tZ)(_.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:R(),href:"/retoque",sx:{textDecoration:"none",_hover:{}},children:"Herramientas Gr\xe1ficas"})}),(0,o.tZ)(A.R,{}),(0,o.tZ)(_.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:R(),href:"/kodi",sx:{textDecoration:"none",_hover:{}},children:"Manuales Kodi"})}),(0,o.tZ)(_.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:R(),href:"/estafas",sx:{textDecoration:"none",_hover:{}},children:"Ciberestafas"})}),(0,o.tZ)(A.R,{}),(0,o.tZ)(_.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:R(),href:"/",sx:{textDecoration:"none",_hover:{}},children:"\xcdndice"})})]})]}),(0,o.tZ)(v.E,{alt:"avatar",src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}}),(0,o.tZ)(B.r,{as:R(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,o.BX)(y.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,o.tZ)(b.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,o.tZ)(b.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,o.tZ)(Modal_e3692ca9389f30219cbe9761d3825fb1,{})]}),(0,o.tZ)(X.Z,{href:"/",icon:(0,o.tZ)(v.E,{src:"/avatar.png"}),target:"_top"}),(0,o.tZ)(f.M,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:(0,o.tZ)(x.g,{sx:{maxWidth:"560px",width:"100%",marginTop:"2em",marginBottom:"2em",minHeight:"650px"},children:(0,o.BX)(x.g,{spacing:"0.8em",sx:{width:"100%"},children:[(0,o.tZ)(z.X,{size:"lg",sx:{size:"lg",width:"100%",paddingTop:"1em",paddingInlineStart:"0.8em",paddingInlineEnd:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:"Manuales Kodi"}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/kodi_pc",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n en Windows y Android TV",src:"/img/windows.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n en Windows y Android TV"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Primeros pasos para la instalaci\xf3n de kodi en Windows y Android TV."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/addons",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addons",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addons"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/koditrucos",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Trucos para kodi",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Trucos para kodi"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Mejora el rendimiento, soluciona problemas de configuraci\xf3n..."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/luar",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Luar",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Luar"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/kodi/kodivertido",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Kodivertido",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Kodivertido"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/kodi/cristalazul",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Cristal Azul",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Cristal Azul"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/kodi/tvchopo",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Tv Chopo",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Tv Chopo"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/construccion",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Balandro",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Balandro"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})}),(0,o.tZ)(P.u,{delay:1e4,label:"",openDelay:1e3,placement:"right",shouldWrapChildren:!1,sx:{fontFamily:"Poppins-Bold",fontSize:"0.8em",color:"#C3C7C8",textAlign:"start"},children:(0,o.tZ)(B.r,{as:R(),href:"/construccion",isExternal:!1,sx:{button:!0,width:"100%",textDecoration:"none",_hover:{}},children:(0,o.tZ)(F.z,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:(0,o.BX)(E.U,{children:[(0,o.tZ)(v.E,{alt:"Instalaci\xf3n de Addon Arrow Negra",src:"/img/kodi2.png",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,o.BX)(x.g,{alignItems:"start",spacing:"0px !important",sx:{paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},children:[(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Bold",fontSize:"1em",color:"#F1F2F4"},children:"Instalaci\xf3n de Addon Arrow Negra"}),(0,o.tZ)(b.x,{sx:{fontFamily:"Poppins-Light",fontSize:"0.7em",color:"#C3C7C8",textAlign:"start"},children:"Instalaci\xf3n, gesti\xf3n, mantenimento, actualizaci\xf3n de complementos para kodi."})]})]})})})})]})})}),(0,o.tZ)(y.xu,{sx:{background:"black"},children:(0,o.BX)(x.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,o.tZ)(I.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,o.tZ)(B.r,{as:R(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,o.tZ)(E.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,o.tZ)(b.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,o.tZ)(X.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,o.tZ)(v.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,o.BX)(x.g,{children:[(0,o.tZ)(B.r,{as:R(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,o.tZ)(S(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.tZ)(s.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,o.tZ)(R(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,o.tZ)(S(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.BX)(c.k,{align:"start",css:{flexDirection:"column"},gap:"2",children:[(0,o.tZ)(S(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,o.tZ)(S(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,o.tZ)(S(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,o.tZ)(S(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,o.BX)(j(),{children:[(0,o.tZ)("title",{children:"Manuales de instalaci\xf3n y gesti\xf3n de KODI"}),(0,o.tZ)("meta",{content:"Instalaci\xf3n, mejores addons, tools, repositorios...",name:"description"}),(0,o.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,o.tZ)("meta",{content:"P\xe1gina con recursos para desarrolladores",name:"og:title"}),(0,o.tZ)("meta",{content:"Links que m\xe1s uso para desarrollar, web, scrips, python, SQL Server...",name:"og:description"}),(0,o.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,o.tZ)("meta",{content:"website",name:"og:type"}),(0,o.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,o.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,o.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},9343:function(e,t,n){"use strict";n.d(t,{u:function(){return w}});var o={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},a=n(7134),r=n(5075),i=n(1054),l=n(8795),d=n(1103),s=n(5432),c=n(7294),getDoc=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},getWin=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window};function useTooltip(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:o=!0,closeOnMouseDown:p,closeOnScroll:u,closeOnPointerDown:m=p,closeOnEsc:h=!0,onOpen:g,onClose:f,placement:x,id:b,isOpen:v,defaultIsOpen:F,arrowSize:y=10,arrowShadowColor:w,arrowPadding:C,modifiers:k,isDisabled:Z,gutter:_,offset:B,direction:A,...z}=e,{isOpen:P,onOpen:E,onClose:I}=(0,r.q)({isOpen:v,defaultIsOpen:F,onOpen:g,onClose:f}),{referenceRef:D,getPopperProps:S,getArrowInnerProps:T,getArrowProps:R}=(0,i.D)({enabled:P,placement:x,arrowPadding:C,modifiers:k,gutter:_,offset:B,direction:A}),X=(0,c.useId)(),L=`tooltip-${null!=b?b:X}`,j=(0,c.useRef)(null),N=(0,c.useRef)(),W=(0,c.useCallback)(()=>{N.current&&(clearTimeout(N.current),N.current=void 0)},[]),O=(0,c.useRef)(),M=(0,c.useCallback)(()=>{O.current&&(clearTimeout(O.current),O.current=void 0)},[]),q=(0,c.useCallback)(()=>{M(),I()},[I,M]),U=useCloseEvent(j,q),K=(0,c.useCallback)(()=>{if(!Z&&!N.current){U();let e=getWin(j);N.current=e.setTimeout(E,t)}},[U,Z,E,t]),V=(0,c.useCallback)(()=>{W();let e=getWin(j);O.current=e.setTimeout(q,n)},[n,q,W]),G=(0,c.useCallback)(()=>{P&&o&&V()},[o,V,P]),H=(0,c.useCallback)(()=>{P&&m&&V()},[m,V,P]),$=(0,c.useCallback)(e=>{P&&"Escape"===e.key&&V()},[P,V]);(0,a.O)(()=>getDoc(j),"keydown",h?$:void 0),(0,a.O)(()=>getDoc(j),"scroll",()=>{P&&u&&q()}),(0,c.useEffect)(()=>{Z&&(W(),P&&I())},[Z,P,I,W]),(0,c.useEffect)(()=>()=>{W(),M()},[W,M]),(0,a.O)(()=>j.current,"pointerleave",V);let Q=(0,c.useCallback)((e={},t=null)=>{let n={...e,ref:(0,d.lq)(j,t,D),onPointerEnter:(0,s.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&K()}),onClick:(0,s.v0)(e.onClick,G),onPointerDown:(0,s.v0)(e.onPointerDown,H),onFocus:(0,s.v0)(e.onFocus,K),onBlur:(0,s.v0)(e.onBlur,V),"aria-describedby":P?L:void 0};return n},[K,V,H,P,L,G,D]),Y=(0,c.useCallback)((e={},t=null)=>S({...e,style:{...e.style,[l.Dq.arrowSize.var]:y?`${y}px`:void 0,[l.Dq.arrowShadowColor.var]:w}},t),[S,y,w]),J=(0,c.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:l.Dq.transformOrigin.varRef};return{ref:t,...z,...e,id:L,role:"tooltip",style:n}},[z,L]);return{isOpen:P,show:K,hide:V,getTriggerProps:Q,getTooltipProps:J,getTooltipPositionerProps:Y,getArrowProps:R,getArrowInnerProps:T}}var p="chakra-ui:close-tooltip";function useCloseEvent(e,t){return(0,c.useEffect)(()=>{let n=getDoc(e);return n.addEventListener(p,t),()=>n.removeEventListener(p,t)},[t,e]),()=>{let t=getDoc(e),n=getWin(e);t.dispatchEvent(new n.CustomEvent(p))}}var u=n(9598),m=n(296),h=n(5059),g=n(1639),f=n(3179),x=n(7323),b=n(7745),v=n(1526),F=n(5893);function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function pick(e,t){let n={};for(let o of t)o in e&&(n[o]=e[o]);return n}var y=(0,m.m)(b.E.div),w=(0,h.G)((e,t)=>{var n,a;let r;let i=(0,g.mq)("Tooltip",e),d=(0,f.Lr)(e),s=(0,x.F)(),{children:p,label:h,shouldWrapChildren:b,"aria-label":w,hasArrow:C,bg:k,portalProps:Z,background:_,backgroundColor:B,bgColor:A,motionProps:z,...P}=d,E=null!=(a=null!=(n=null!=_?_:B)?n:k)?a:A;if(E){i.bg=E;let e=(0,f.K1)(s,"colors",E);i[l.Dq.arrowBg.var]=e}let I=useTooltip({...P,direction:s.direction}),D="string"==typeof p||b;if(D)r=(0,F.jsx)(m.m.span,{display:"inline-block",tabIndex:0,...I.getTriggerProps(),children:p});else{let e=c.Children.only(p);r=(0,c.cloneElement)(e,I.getTriggerProps(e.props,e.ref))}let S=!!w,T=I.getTooltipProps({},t),R=S?omit(T,["role","id"]):T,X=pick(T,["role","id"]);return h?(0,F.jsxs)(F.Fragment,{children:[r,(0,F.jsx)(v.M,{children:I.isOpen&&(0,F.jsx)(u.h,{...Z,children:(0,F.jsx)(m.m.div,{...I.getTooltipPositionerProps(),__css:{zIndex:i.zIndex,pointerEvents:"none"},children:(0,F.jsxs)(y,{variants:o,initial:"exit",animate:"enter",exit:"exit",...z,...R,__css:i,children:[h,S&&(0,F.jsx)(m.m.span,{srOnly:!0,...X,children:w}),C&&(0,F.jsx)(m.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,F.jsx)(m.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:i.bg}})})]})})})})]}):(0,F.jsx)(F.Fragment,{children:p})});w.displayName="Tooltip"}},function(e){e.O(0,[169,609,267,774,888,179],function(){return e(e.s=8397)}),_N_E=e.O()}]);