(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{45877:function(e,t,r){"use strict";r.d(t,{k:function(){return u}});var o=r(67294),n=r(93967),i=r.n(n),a=r(88426);let d={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var s=r(23843),c=r(60134),l=r(6776);let u=o.forwardRef((e,t)=>{let{rest:r,...n}=(0,s.FY)(e),{rest:u,...m}=(0,c.F8)(r),{className:g,asChild:h,display:p=d.display.default,direction:x=d.direction.default,align:b=d.align.default,justify:f=d.justify.default,wrap:Z=d.wrap.default,gap:w=d.gap.default,...F}=u,v=h?a.g7:"div";return o.createElement(v,{...F,ref:t,className:i()("rt-Flex",g,(0,l.g)(p,"rt-r-display"),(0,l.g)(x,"rt-r-fd"),(0,l.g)(b,"rt-r-ai"),(0,l.g)(f,"rt-r-jc",{between:"space-between"}),(0,l.g)(Z,"rt-r-fw"),(0,l.g)(w,"rt-r-gap"),(0,c.yt)(m),(0,s.we)(n))})});u.displayName="Flex"},72627:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var o=r(67294),n=r(93967),i=r.n(n),a=r(6445),d=r(3356);let s={size:d.S.size,weight:d.S.weight,trim:d.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:d.S.color,highContrast:d.S.highContrast},c=o.forwardRef((e,t)=>{let{children:r,className:n,asChild:d=!1,underline:c=s.underline.default,...l}=e;return o.createElement(a.x,{...l,ref:t,asChild:!0,className:i()("rt-reset","rt-Link",n,`rt-underline-${c}`)},d?r:o.createElement("a",null,r))});c.displayName="Link"},60134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var o=r(6776);let n=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=d.p.default,px:r=d.px.default,py:o=d.py.default,pt:n=d.pt.default,pr:i=d.pr.default,pb:a=d.pb.default,pl:s=d.pl.default,...c}=e;return{p:t,px:r,py:o,pt:n,pr:i,pb:a,pl:s,rest:c}}function withPaddingProps(e){return[(0,o.g)(e.p,"rt-r-p"),(0,o.g)(e.px,"rt-r-px"),(0,o.g)(e.py,"rt-r-py"),(0,o.g)(e.pt,"rt-r-pt"),(0,o.g)(e.pr,"rt-r-pr"),(0,o.g)(e.pb,"rt-r-pb"),(0,o.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let i=["auto","0","50%","100%"],a=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],d={p:{type:"enum",values:n,default:void 0,responsive:!0},px:{type:"enum",values:n,default:void 0,responsive:!0},py:{type:"enum",values:n,default:void 0,responsive:!0},pt:{type:"enum",values:n,default:void 0,responsive:!0},pr:{type:"enum",values:n,default:void 0,responsive:!0},pb:{type:"enum",values:n,default:void 0,responsive:!0},pl:{type:"enum",values:n,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:i,default:void 0,responsive:!0},top:{type:"enum",values:i,default:void 0,responsive:!0},right:{type:"enum",values:i,default:void 0,responsive:!0},bottom:{type:"enum",values:i,default:void 0,responsive:!0},left:{type:"enum",values:i,default:void 0,responsive:!0},width:{type:"enum",values:a,default:void 0,responsive:!0},height:{type:"enum",values:a,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:o=d.position.default,width:n=d.width.default,height:i=d.height.default,inset:a=d.inset.default,top:s=d.top.default,bottom:c=d.bottom.default,left:l=d.left.default,right:u=d.right.default,shrink:m=d.shrink.default,grow:g=d.grow.default,...h}=t;return{...r,position:o,width:n,height:i,inset:a,top:s,bottom:c,left:l,right:u,shrink:m,grow:g,rest:h}}function withLayoutProps(e){return[withPaddingProps(e),(0,o.g)(e.position,"rt-r-position"),(0,o.g)(e.shrink,"rt-r-fs"),(0,o.g)(e.grow,"rt-r-fg"),(0,o.g)(e.width,"rt-r-w"),(0,o.g)(e.height,"rt-r-h"),(0,o.g)(e.inset,"rt-r-inset"),(0,o.g)(e.top,"rt-r-top"),(0,o.g)(e.bottom,"rt-r-bottom"),(0,o.g)(e.left,"rt-r-left"),(0,o.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},7598:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trucos",function(){return r(76175)}])},76175:function(e,t,r){"use strict";r.r(t),r.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_1762bb90abdb81b879b2a22edbbe01a1:function(){return Fragment_1762bb90abdb81b879b2a22edbbe01a1},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Modal_e3692ca9389f30219cbe9761d3825fb1:function(){return Modal_e3692ca9389f30219cbe9761d3825fb1},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},default:function(){return Component}});var o=r(35944),n=r(67294),i=r(60687),a=r(6608),d=r(50569),s=r(6445),c=r(72627),l=r(45877),u=r(73954),m=r(62207),g=r(31963),h=r(73865),p=r(73793),x=r(7754),b=r(91669),f=r(9564),Z=r(29222),w=r(81941),F=r(23100),v=r(204),_=r(5284),k=r(36275),C=r(70003),y=r(1913),B=r(33838),E=r(67226),j=r(14418),S=r(41689),A=r(54641),R=r(26137),T=r(47018),X=r(91314),z=r(4298),M=r.n(z),N=r(41664),P=r.n(N),D=r(80738),I=r(9008),O=r.n(I);function Modal_e3692ca9389f30219cbe9761d3825fb1(){let e=(0,n.useContext)(i.M4.state__modal_state_full);return(0,o.tZ)(m.u_,{isOpen:e.show,size:"full",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{sx:{background:"#2F0B3A"},children:(0,o.tZ)(p.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,o.tZ)(x.M,{children:(0,o.BX)(b.g,{sx:{maxWidth:"1000px"},children:[(0,o.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,o.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,o.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,o.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,n.useContext)(i.M4.state__modal_state_full);return(0,o.tZ)(f.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,n.useContext)(i.M4.state__modal_state_full);return(0,o.tZ)(f.x,{sx:{color:"#FFFFFF"},children:e.title})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,n.useContext)(i.DR),r=(0,n.useCallback)(t=>e([(0,a.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,a.ju]);return(0,o.tZ)(Z.z,{onClick:r,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Fragment_1762bb90abdb81b879b2a22edbbe01a1(){let[e,t]=(0,n.useContext)(i.DR);return(0,o.tZ)(n.Fragment,{children:(0,a.oA)(null!==t)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(d.Vq.Root,{open:null!==t,children:(0,o.BX)(d.Vq.Content,{children:[(0,o.tZ)(d.Vq.Title,{children:"Connection Error"}),(0,o.BX)(s.x,{as:"p",children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,a.LH)(u.Ks).href]})]})})}):(0,o.tZ)(n.Fragment,{})})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,n.useContext)(i.M4.state__modal_state_full);return(0,o.tZ)(w.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Component(){let[e,t]=(0,n.useContext)(i.DR),r=(0,n.useContext)(i.M4.state__modal_state);return(0,o.BX)(n.Fragment,{children:[(0,o.tZ)(Fragment_1762bb90abdb81b879b2a22edbbe01a1,{}),(0,o.BX)(F.xu,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:[(0,o.tZ)(M(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(v.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,o.tZ)(M(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(_.v,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:[(0,o.tZ)(k.j,{children:(0,o.tZ)(f.x,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:"Menu"})}),(0,o.BX)(C.q,{sx:{fontSize:"1em",background:"#220A29",borderColor:"#F781D8"},children:[(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/dev",sx:{textDecoration:"none",_hover:{}},children:"Mundo de la Programaci\xf3n"})}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/retoque",sx:{textDecoration:"none",_hover:{}},children:"Herramientas Gr\xe1ficas"})}),(0,o.tZ)(E.R,{}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/kodi",sx:{textDecoration:"none",_hover:{}},children:"Manuales Kodi"})}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/estafas",sx:{textDecoration:"none",_hover:{}},children:"Ciberestafas"})}),(0,o.tZ)(E.R,{}),(0,o.tZ)(y.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,o.tZ)(B.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:"\xcdndice"})})]})]}),(0,o.tZ)(w.E,{alt:"avatar",src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}}),(0,o.tZ)(B.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,o.BX)(F.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,o.tZ)(f.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,o.tZ)(f.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,o.tZ)(Modal_e3692ca9389f30219cbe9761d3825fb1,{})]}),(0,o.tZ)(D.Z,{href:"/",icon:(0,o.tZ)(w.E,{src:"/avatar.png"}),target:"_top"}),(0,o.tZ)(x.M,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:(0,o.tZ)(b.g,{sx:{maxWidth:"1000px",width:"100%",marginTop:"2em",marginBottom:"2em",minHeight:"650px"},children:(0,o.BX)(b.g,{alignItems:"Start",spacing:"1em",sx:{padding:"0.8em",width:"100%"},children:[(0,o.tZ)(F.xu,{sx:{width:"100%",marginBottom:"2em"},children:(0,o.tZ)(j.X,{size:"lg",sx:{size:"lg",width:"100%",paddingTop:"1em",paddingInlineStart:"0.8em",paddingInlineEnd:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:(0,o.tZ)(x.M,{children:"P\xe1gina para difundir trucos que vaya recopilando de la web"})})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.ilovepdf.com/es",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(b.g,{sx:{width:"100%",padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas Web"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Web para trabajar con documentos PDF"})}),(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(f.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Herramienta web para hacer todo lo que necesites con documentos PDF, cambiar, transformar, firmar, pasar a otros formatos y todo gratis"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(1)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-4-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-4-1.png"})],t,{}),src:"/img/trucos/trucos-4-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(f.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.ventoy.net/en/index.html",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(b.g,{sx:{width:"100%",padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas PC"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Herramienta para crear usb multiboot"})}),(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(f.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Herramienta muy \xfaltl para preparar un pendrive con multiples sistemas operativo para arrancar. El procedimiento es muy simple. \n                 Descargamos de la p\xe1gina oficial, descomprimimos y ejecutamos. Nos preguntar por la unidad donde est\xe1 el pendrive y proceder\xe1 a preparalo.\n                   Una vez que est\xe9 listo, simplemente compiando las ISOs que querramos ser\xe1 suficiente. Arrancamos desde el USB y nos aparecer\xe1 el men\xfa multiboot"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(2)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-2.png"})],t,{}),src:"/img/trucos/trucos-3-2.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-3-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-3-1.png"})],t,{}),src:"/img/trucos/trucos-3-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(f.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://www.hdd-tool.com/index.html",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(b.g,{sx:{width:"100%",padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Herramientas PC"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"La mejor herramienta de clonaci\xf3n de discos duros... Gratis"})}),(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(f.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy traigo una herramienta para clonar discos duros que me ha solucionado un problema. Se llama Niubi y\n                 se puede descargar desde https://www.hdd-tool.com/index.html. Tiene una versi\xf3n casera totalmente gratuita y funcional.\n                  Con la opci\xf3n de Asistente para migrar SO podr\xe1s mover tu windows al disco duro que quieras y evitarte tener que instalar todo desde 0. \n                  Impresionante... "})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(2)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-2.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-2.jpg"})],t,{}),src:"/img/trucos/trucos-2-2.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/trucos-2-1.jpg",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/trucos-2-1.jpg"})],t,{}),src:"/img/trucos/trucos-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(f.x,{children:"Sin imagenes"})}})()})]})}),(0,o.tZ)(B.r,{as:P(),href:"https://12ft.io/",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,o.BX)(b.g,{sx:{width:"100%",padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(F.xu,{sx:{paddingBottom:"0.5em"},children:(0,o.tZ)(S.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"Navegaci\xf3n WEB"})})})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(A.U,{sx:{width:"100%"},children:(0,o.tZ)(j.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Navega sin publicidad y sin bloqueos de pago"})}),(0,o.tZ)(n.Fragment,{children:(0,a.oA)(!0)?(0,o.tZ)(n.Fragment,{children:(0,o.tZ)(f.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy os traigo una web: http://12ft.io que os servir\xe1 para entrar en webs que tienen banners\n                de obligaci\xf3n de pago o publicidad hasta el infinito sin problemas. Entrad en la url o haciendo clic en \n                la noticia, pega la url de la web que quieres visitar en 'Clean Webpage' e intro... es maravilloso"})}):(0,o.tZ)(n.Fragment,{})}),(0,o.tZ)(n.Fragment,{children:(()=>{switch(JSON.stringify(3)){case JSON.stringify(1):return(0,o.tZ)(F.xu,{sx:{width:"100%"},children:(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-3.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-3.png"})],t,{}),src:"/img/trucos/truco1-3.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,o.BX)(F.xu,{children:[(0,o.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-1.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-1.png"})],t,{}),src:"/img/trucos/truco1-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-2.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-2.png"})],t,{}),src:"/img/trucos/truco1-2.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,o.tZ)(x.M,{children:(0,o.tZ)(w.E,{alt:"/img/trucos/truco1-3.png",onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:"/img/trucos/truco1-3.png"})],t,{}),src:"/img/trucos/truco1-3.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,o.tZ)(m.u_,{isOpen:r.show,size:"xl",children:(0,o.tZ)(g.Z,{children:(0,o.tZ)(h.h,{children:(0,o.BX)(p.f,{children:[(0,o.tZ)(F.xu,{children:(0,o.tZ)(w.E,{src:r.count,sx:{width:"800px",heigth:"auto"}})}),(0,o.tZ)(T.m,{children:(0,o.tZ)(Z.z,{onClick:t=>e([(0,a.ju)("state.modal_state.change",{count:""})],t,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,o.tZ)(f.x,{children:"Sin imagenes"})}})()})]})})]})})}),(0,o.tZ)(F.xu,{sx:{width:"100%",background:"black"},children:(0,o.BX)(b.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,o.tZ)(X.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,o.tZ)(B.r,{as:P(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,o.tZ)(A.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,o.tZ)(f.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,o.tZ)(D.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,o.tZ)(w.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,o.BX)(b.g,{children:[(0,o.tZ)(B.r,{as:P(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.tZ)(c.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,o.tZ)(P(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,o.BX)(l.k,{align:"start",css:{flexDirection:"column"},gap:"2",children:[(0,o.tZ)(M(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,o.tZ)(M(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,o.tZ)(M(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,o.tZ)(M(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,o.BX)(O(),{children:[(0,o.tZ)("title",{children:"Trucos web, windows, android, ios"}),(0,o.tZ)("meta",{content:"Recopilaci\xf3n de trucos para todas las plataformas",name:"description"}),(0,o.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,o.tZ)("meta",{content:"P\xe1gina con recursos para desarrolladores",name:"og:title"}),(0,o.tZ)("meta",{content:"Links que m\xe1s uso para desarrollar, web, scrips, python, SQL Server...",name:"og:description"}),(0,o.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,o.tZ)("meta",{content:"website",name:"og:type"}),(0,o.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,o.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,o.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},41689:function(e,t,r){"use strict";r.d(t,{C:function(){return c}});var o=r(35059),n=r(91639),i=r(33179),a=r(51337),d=r(25432),s=r(85893),c=(0,o.G)(function(e,t){let r=(0,n.mq)("Badge",e),{className:o,...c}=(0,i.Lr)(e);return(0,s.jsx)(a.m.span,{ref:t,className:(0,d.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});c.displayName="Badge"},26137:function(e,t,r){"use strict";r.d(t,{M:function(){return l}});var o=r(35059),n=r(51337),i=r(85893),a=(0,o.G)(function(e,t){let{templateAreas:r,gap:o,rowGap:a,columnGap:d,column:s,row:c,autoFlow:l,autoRows:u,templateRows:m,autoColumns:g,templateColumns:h,...p}=e;return(0,i.jsx)(n.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:d,gridAutoColumns:g,gridColumn:s,gridRow:c,gridAutoFlow:l,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:h},...p})});a.displayName="Grid";var d=r(75119),s=r(34629),c=r(33951),l=(0,o.G)(function(e,t){let{columns:r,spacingX:o,spacingY:n,spacing:s,minChildWidth:c,...l}=e,u=(0,d.F)(),m=c?widthToColumns(c,u):countToColumns(r);return(0,i.jsx)(a,{ref:t,gap:s,columnGap:o,rowGap:n,templateColumns:m,...l})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return(0,c.XQ)(e,e=>{let r=(0,s.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function countToColumns(e){return(0,c.XQ)(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}l.displayName="SimpleGrid"},47018:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var o=r(62207),n=r(25432),i=r(35059),a=r(51337),d=r(85893),s=(0,i.G)((e,t)=>{let{className:r,...i}=e,s=(0,n.cx)("chakra-modal__footer",r),c=(0,o.I_)(),l={display:"flex",alignItems:"center",justifyContent:"flex-end",...c.footer};return(0,d.jsx)(a.m.footer,{ref:t,...i,__css:l,className:s})});s.displayName="ModalFooter"}},function(e){e.O(0,[673,609,267,774,888,179],function(){return e(e.s=7598)}),_N_E=e.O()}]);