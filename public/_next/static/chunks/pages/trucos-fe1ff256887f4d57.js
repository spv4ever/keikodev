(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{45877:function(e,t,r){"use strict";r.d(t,{k:function(){return u}});var o=r(67294),n=r(93967),a=r.n(n),i=r(88426);let d={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var c=r(23843),s=r(60134),l=r(6776);let u=o.forwardRef((e,t)=>{let{rest:r,...n}=(0,c.FY)(e),{rest:u,...m}=(0,s.F8)(r),{className:g,asChild:h,display:p=d.display.default,direction:x=d.direction.default,align:b=d.align.default,justify:f=d.justify.default,wrap:Z=d.wrap.default,gap:w=d.gap.default,...F}=u,v=h?i.g7:"div";return o.createElement(v,{...F,ref:t,className:a()("rt-Flex",g,(0,l.g)(p,"rt-r-display"),(0,l.g)(x,"rt-r-fd"),(0,l.g)(b,"rt-r-ai"),(0,l.g)(f,"rt-r-jc",{between:"space-between"}),(0,l.g)(Z,"rt-r-fw"),(0,l.g)(w,"rt-r-gap"),(0,s.yt)(m),(0,c.we)(n))})});u.displayName="Flex"},72627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var o=r(67294),n=r(93967),a=r.n(n),i=r(6445),d=r(3356);let c={size:d.S.size,weight:d.S.weight,trim:d.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:d.S.color,highContrast:d.S.highContrast},s=o.forwardRef((e,t)=>{let{children:r,className:n,asChild:d=!1,underline:s=c.underline.default,...l}=e;return o.createElement(i.x,{...l,ref:t,asChild:!0,className:a()("rt-reset","rt-Link",n,`rt-underline-${s}`)},d?r:o.createElement("a",null,r))});s.displayName="Link"},60134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var o=r(6776);let n=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=d.p.default,px:r=d.px.default,py:o=d.py.default,pt:n=d.pt.default,pr:a=d.pr.default,pb:i=d.pb.default,pl:c=d.pl.default,...s}=e;return{p:t,px:r,py:o,pt:n,pr:a,pb:i,pl:c,rest:s}}function withPaddingProps(e){return[(0,o.g)(e.p,"rt-r-p"),(0,o.g)(e.px,"rt-r-px"),(0,o.g)(e.py,"rt-r-py"),(0,o.g)(e.pt,"rt-r-pt"),(0,o.g)(e.pr,"rt-r-pr"),(0,o.g)(e.pb,"rt-r-pb"),(0,o.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let a=["auto","0","50%","100%"],i=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],d={p:{type:"enum",values:n,default:void 0,responsive:!0},px:{type:"enum",values:n,default:void 0,responsive:!0},py:{type:"enum",values:n,default:void 0,responsive:!0},pt:{type:"enum",values:n,default:void 0,responsive:!0},pr:{type:"enum",values:n,default:void 0,responsive:!0},pb:{type:"enum",values:n,default:void 0,responsive:!0},pl:{type:"enum",values:n,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:a,default:void 0,responsive:!0},top:{type:"enum",values:a,default:void 0,responsive:!0},right:{type:"enum",values:a,default:void 0,responsive:!0},bottom:{type:"enum",values:a,default:void 0,responsive:!0},left:{type:"enum",values:a,default:void 0,responsive:!0},width:{type:"enum",values:i,default:void 0,responsive:!0},height:{type:"enum",values:i,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:o=d.position.default,width:n=d.width.default,height:a=d.height.default,inset:i=d.inset.default,top:c=d.top.default,bottom:s=d.bottom.default,left:l=d.left.default,right:u=d.right.default,shrink:m=d.shrink.default,grow:g=d.grow.default,...h}=t;return{...r,position:o,width:n,height:a,inset:i,top:c,bottom:s,left:l,right:u,shrink:m,grow:g,rest:h}}function withLayoutProps(e){return[withPaddingProps(e),(0,o.g)(e.position,"rt-r-position"),(0,o.g)(e.shrink,"rt-r-fs"),(0,o.g)(e.grow,"rt-r-fg"),(0,o.g)(e.width,"rt-r-w"),(0,o.g)(e.height,"rt-r-h"),(0,o.g)(e.inset,"rt-r-inset"),(0,o.g)(e.top,"rt-r-top"),(0,o.g)(e.bottom,"rt-r-bottom"),(0,o.g)(e.left,"rt-r-left"),(0,o.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},7598:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trucos",function(){return r(76175)}])},76175:function(e,t,r){"use strict";r.r(t),r.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_1762bb90abdb81b879b2a22edbbe01a1:function(){return Fragment_1762bb90abdb81b879b2a22edbbe01a1},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Image_f864b465ad6f10a5ac39453fd26d4588:function(){return Image_f864b465ad6f10a5ac39453fd26d4588},Modal_2d103206c0729246cd0fbf9498865e18:function(){return Modal_2d103206c0729246cd0fbf9498865e18},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},Text_9412b3e0d9971a9ee8250066572e2e9b:function(){return Text_9412b3e0d9971a9ee8250066572e2e9b},default:function(){return Component}});var o=r(35944),n=r(67294),a=r(60687),i=r(6608),d=r(99522),c=r(6445),s=r(72627),l=r(45877),u=r(73954),m=r(29222),g=r(81941),h=r(9564),p=r(62207),x=r(31963),b=r(73865),f=r(73793),Z=r(7754),w=r(91669),F=r(23100),v=r(204),_=r(5284),k=r(36275),C=r(70003),y=r(1913),B=r(33838),E=r(67226),j=r(14418),S=r(41689),A=r(54641),R=r(26137),T=r(47018),X=r(91314),z=r(4298),M=r.n(z),N=r(41664),P=r.n(N),D=r(80738),I=r(9008),O=r.n(I);function Fragment_1762bb90abdb81b879b2a22edbbe01a1(){let[e,t]=(0,n.useContext)(a.DR);return(0,o.tZ)(n.Fragment,{children:(0,i.oA)(null!==t)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(d.Vq.Root,{open:null!==t,children:(0,o.BX)(d.Vq.Content,{children:[(0,o.tZ)(d.Vq.Title,{children:"Connection Error"}),(0,o.BX)(c.x,{as:"p",children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,i.LH)(u.Ks).href]})]})})}):(0,o.tZ)(n.Fragment,{})})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,n.useContext)(a.DR),r=(0,n.useCallback)(t=>e([(0,i.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,i.ju]);return(0,o.tZ)(m.z,{onClick:r,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,n.useContext)(a.M4.state__modal_state_full);return(0,o.tZ)(g.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Image_f864b465ad6f10a5ac39453fd26d4588(){let[e,t]=(0,n.useContext)(a.DR),r=(0,n.useCallback)(t=>e([(0,i.ju)("state.page_state.galeria_fotos_load",{})],t,{}),[e,i.ju]);return(0,o.tZ)(g.E,{alt:"avatar",onLoad:r,src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}})}function Text_9412b3e0d9971a9ee8250066572e2e9b(){let e=(0,n.useContext)(a.M4.state__modal_state_full);return(0,o.BX)(h.x,{sx:{color:"#FFFFFF"},children:["Copyright: ",e.copyright]})}function Modal_2d103206c0729246cd0fbf9498865e18(){let e=(0,n.useContext)(a.M4.state__modal_state_full);return(0,o.tZ)(p.u_,{isOpen:e.show,size:"full",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{sx:{background:"#2F0B3A"},children:(0,o.tZ)(f.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,o.tZ)(Z.M,{children:(0,o.BX)(w.g,{sx:{maxWidth:"1000px"},children:[(0,o.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,o.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,o.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,o.tZ)(Text_9412b3e0d9971a9ee8250066572e2e9b,{}),(0,o.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,n.useContext)(a.M4.state__modal_state_full);return(0,o.tZ)(h.x,{sx:{color:"#FFFFFF"},children:e.title})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,n.useContext)(a.M4.state__modal_state_full);return(0,o.tZ)(h.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Component(){let[e,t]=(0,n.useContext)(a.DR),r=(0,n.useContext)(a.M4.state__modal_state);return(0,o.BX)(n.Fragment,{children:[(0,o.tZ)(Fragment_1762bb90abdb81b879b2a22edbbe01a1,{}),(0,o.BX)(F.xu,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:[(0,o.tZ)(M(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(v.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,o.tZ)(M(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(_.v,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:[(0,o.tZ)(k.j,{children:(0,o.tZ)(h.x,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:"Menu"})}),(0,o.BX)(C.q,{sx:{fontSize:"1em",background:"#220A29",borderColor:"#F781D8"},children:[(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/dev",sx:{textDecoration:"none",_hover:{}},children:"Mundo de la Programaci\xf3n"})}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/retoque",sx:{textDecoration:"none",_hover:{}},children:"Herramientas Gr\xe1ficas"})}),(0,o.tZ)(E.R,{}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/kodi",sx:{textDecoration:"none",_hover:{}},children:"Manuales Kodi"})}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/estafas",sx:{textDecoration:"none",_hover:{}},children:"Ciberestafas"})}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/cocina",sx:{textDecoration:"none",_hover:{}},children:"Recetas"})}),(0,o.tZ)(E.R,{}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:"\xcdndice"})})]})]}),(0,o.tZ)(Image_f864b465ad6f10a5ac39453fd26d4588,{}),(0,o.tZ)(B.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,o.BX)(F.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,o.tZ)(h.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,o.tZ)(h.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,o.tZ)(Modal_2d103206c0729246cd0fbf9498865e18,{})]}),(0,o.tZ)(D.Z,{href:"/",icon:(0,o.tZ)(g.E,{src:"/avatar.png"}),target:"_top"}),(0,o.tZ)(Z.M,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:(0,o.tZ)(w.g,{sx:{maxWidth:"1000px",width:"100%",marginTop:"2em",marginBottom:"2em",minHeight:"650px"},children:(0,o.BX)(w.g,{alignItems:"Start",spacing:"1em",sx:{padding:"0.8em",width:"100%"},children:[(0,o.tZ)(F.xu,{sx:{width:"100%",marginBottom:"2em"},children:(0,o.tZ)(j.X,{size:"lg",sx:{size:"lg",width:"100%",paddingTop:"1em",paddingInlineStart:"0.8em",paddingInlineEnd:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:(0,o.tZ)(Z.M,{children:"P\xe1gina para difundir trucos que vaya recopilando de la web"})})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.ilovepdf.com/es",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(w.g,{sx:{width:"100%",padding:"1em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas Web"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Web para trabajar con documentos PDF"})}),(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(h.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Herramienta web para hacer todo lo que necesites con documentos PDF, cambiar, transformar, firmar, pasar a otros formatos y todo gratis"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(1)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(h.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.ventoy.net/en/index.html",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(w.g,{sx:{width:"100%",padding:"1em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas PC"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Herramienta para crear usb multiboot"})}),(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(h.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Herramienta muy \xfaltl para preparar un pendrive con multiples sistemas operativo para arrancar. El procedimiento es muy simple. \n                 Descargamos de la p\xe1gina oficial, descomprimimos y ejecutamos. Nos preguntar por la unidad donde est\xe1 el pendrive y proceder\xe1 a preparalo.\n                   Una vez que est\xe9 listo, simplemente compiando las ISOs que querramos ser\xe1 suficiente. Arrancamos desde el USB y nos aparecer\xe1 el men\xfa multiboot"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(2)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(h.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.hdd-tool.com/index.html",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(w.g,{sx:{width:"100%",padding:"1em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas PC"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"La mejor herramienta de clonaci\xf3n de discos duros... Gratis"})}),(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(h.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy traigo una herramienta para clonar discos duros que me ha solucionado un problema. Se llama Niubi y\n                 se puede descargar desde https://www.hdd-tool.com/index.html. Tiene una versi\xf3n casera totalmente gratuita y funcional.\n                  Con la opci\xf3n de Asistente para migrar SO podr\xe1s mover tu windows al disco duro que quieras y evitarte tener que instalar todo desde 0. \n                  Impresionante... "})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(2)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(h.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://12ft.io/",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(w.g,{sx:{width:"100%",padding:"1em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Navegaci\xf3n WEB"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Navega sin publicidad y sin bloqueos de pago"})}),(0,o.tZ)(n.Fragment,{children:(0,i.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(h.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy os traigo una web: http://12ft.io que os servir\xe1 para entrar en webs que tienen banners\n                de obligaci\xf3n de pago o publicidad hasta el infinito sin problemas. Entrad en la url o haciendo clic en \n                la noticia, pega la url de la web que quieres visitar en 'Clean Webpage' e intro... es maravilloso"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(3)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-3.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-3.png"})],t,{}),src:"/img/trucos/truco1-3.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-1.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-1.png"})],t,{}),src:"/img/trucos/truco1-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(Z.M,{children:(0,o.tZ)(g.E,{alt:"/img/trucos/truco1-3.png",onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:"/img/trucos/truco1-3.png"})],t,{}),src:"/img/trucos/truco1-3.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(p.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(x.Z,{children:(0,o.tZ)(b.h,{children:(0,o.BX)(f.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(g.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(m.z,{onClick:t=>e([(0,i.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(h.x,{children:"Sin imagenes"})}})()})]})})]})})}),(0,o.tZ)(F.xu,{sx:{width:"100%",background:"black"},children:(0,o.BX)(w.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,o.tZ)(X.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,o.tZ)(B.r,{as:P(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,o.tZ)(A.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,o.tZ)(h.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,o.tZ)(D.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,o.tZ)(g.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,o.BX)(w.g,{children:[(0,o.tZ)(B.r,{as:P(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.tZ)(s.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,o.tZ)(P(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.BX)(l.k,{align:"start",css:{flexDirection:"column"},gap:"2",children:[(0,o.tZ)(M(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,o.tZ)(M(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,o.tZ)(M(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,o.BX)(O(),{children:[(0,o.tZ)("title",{children:"Trucos web, windows, android, ios"}),(0,o.tZ)("meta",{content:"Recopilaci\xf3n de trucos para todas las plataformas",name:"description"}),(0,o.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,o.tZ)("meta",{content:"P\xe1gina con recursos para desarrolladores",name:"og:title"}),(0,o.tZ)("meta",{content:"Links que m\xe1s uso para desarrollar, web, scrips, python, SQL Server...",name:"og:description"}),(0,o.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,o.tZ)("meta",{content:"website",name:"og:type"}),(0,o.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,o.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,o.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},41689:function(e,t,r){"use strict";r.d(t,{C:function(){return s}});var o=r(35059),n=r(91639),a=r(33179),i=r(51337),d=r(25432),c=r(85893),s=(0,o.G)(function(e,t){let r=(0,n.mq)("Badge",e),{className:o,...s}=(0,a.Lr)(e);return(0,c.jsx)(i.m.span,{ref:t,className:(0,d.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});s.displayName="Badge"},26137:function(e,t,r){"use strict";r.d(t,{M:function(){return l}});var o=r(35059),n=r(51337),a=r(85893),i=(0,o.G)(function(e,t){let{templateAreas:r,gap:o,rowGap:i,columnGap:d,column:c,row:s,autoFlow:l,autoRows:u,templateRows:m,autoColumns:g,templateColumns:h,...p}=e;return(0,a.jsx)(n.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:i,gridColumnGap:d,gridAutoColumns:g,gridColumn:c,gridRow:s,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:h},...p})});i.displayName="Grid";var d=r(75119),c=r(34629),s=r(33951),l=(0,o.G)(function(e,t){let{columns:r,spacingX:o,spacingY:n,spacing:c,minChildWidth:s,...l}=e,u=(0,d.F)(),m=s?widthToColumns(s,u):countToColumns(r);return(0,a.jsx)(i,{ref:t,gap:c,columnGap:o,rowGap:n,templateColumns:m,...l})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return(0,s.XQ)(e,e=>{let r=(0,c.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function countToColumns(e){return(0,s.XQ)(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}l.displayName="SimpleGrid"},47018:function(e,t,r){"use strict";r.d(t,{m:function(){return c}});var o=r(62207),n=r(25432),a=r(35059),i=r(51337),d=r(85893),c=(0,a.G)((e,t)=>{let{className:r,...a}=e,c=(0,n.cx)("chakra-modal__footer",r),s=(0,o.I_)(),l={display:"flex",alignItems:"center",justifyContent:"flex-end",...s.footer};return(0,d.jsx)(i.m.footer,{ref:t,...a,__css:l,className:c})});c.displayName="ModalFooter"}},function(e){e.O(0,[953,609,267,774,888,179],function(){return e(e.s=7598)}),_N_E=e.O()}]);