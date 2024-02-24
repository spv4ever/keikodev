(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{8192:function(e,t,a){"use strict";a.d(t,{k:function(){return p}});var n=a(7294),r=a(3967),o=a.n(r),i=a(8426);let s={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var d=a(3843),l=a(6776);let c=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=g.p.default,px:a=g.px.default,py:n=g.py.default,pt:r=g.pt.default,pr:o=g.pr.default,pb:i=g.pb.default,pl:s=g.pl.default,...d}=e;return{p:t,px:a,py:n,pt:r,pr:o,pb:i,pl:s,rest:d}}function withPaddingProps(e){return[(0,l.g)(e.p,"rt-r-p"),(0,l.g)(e.px,"rt-r-px"),(0,l.g)(e.py,"rt-r-py"),(0,l.g)(e.pt,"rt-r-pt"),(0,l.g)(e.pr,"rt-r-pr"),(0,l.g)(e.pb,"rt-r-pb"),(0,l.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let u=["auto","0","50%","100%"],m=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],g={p:{type:"enum",values:c,default:void 0,responsive:!0},px:{type:"enum",values:c,default:void 0,responsive:!0},py:{type:"enum",values:c,default:void 0,responsive:!0},pt:{type:"enum",values:c,default:void 0,responsive:!0},pr:{type:"enum",values:c,default:void 0,responsive:!0},pb:{type:"enum",values:c,default:void 0,responsive:!0},pl:{type:"enum",values:c,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:u,default:void 0,responsive:!0},top:{type:"enum",values:u,default:void 0,responsive:!0},right:{type:"enum",values:u,default:void 0,responsive:!0},bottom:{type:"enum",values:u,default:void 0,responsive:!0},left:{type:"enum",values:u,default:void 0,responsive:!0},width:{type:"enum",values:m,default:void 0,responsive:!0},height:{type:"enum",values:m,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...a}=extractPaddingProps(e),{position:n=g.position.default,width:r=g.width.default,height:o=g.height.default,inset:i=g.inset.default,top:s=g.top.default,bottom:d=g.bottom.default,left:l=g.left.default,right:c=g.right.default,shrink:u=g.shrink.default,grow:m=g.grow.default,...p}=t;return{...a,position:n,width:r,height:o,inset:i,top:s,bottom:d,left:l,right:c,shrink:u,grow:m,rest:p}}function withLayoutProps(e){return[withPaddingProps(e),(0,l.g)(e.position,"rt-r-position"),(0,l.g)(e.shrink,"rt-r-fs"),(0,l.g)(e.grow,"rt-r-fg"),(0,l.g)(e.width,"rt-r-w"),(0,l.g)(e.height,"rt-r-h"),(0,l.g)(e.inset,"rt-r-inset"),(0,l.g)(e.top,"rt-r-top"),(0,l.g)(e.bottom,"rt-r-bottom"),(0,l.g)(e.left,"rt-r-left"),(0,l.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}let p=n.forwardRef((e,t)=>{let{rest:a,...r}=(0,d.FY)(e),{rest:c,...u}=extractLayoutProps(a),{className:m,asChild:g,display:p=s.display.default,direction:h=s.direction.default,align:f=s.align.default,justify:x=s.justify.default,wrap:b=s.wrap.default,gap:Z=s.gap.default,...w}=c,v=g?i.g7:"div";return n.createElement(v,{...w,ref:t,className:o()("rt-Flex",m,(0,l.g)(p,"rt-r-display"),(0,l.g)(h,"rt-r-fd"),(0,l.g)(f,"rt-r-ai"),(0,l.g)(x,"rt-r-jc",{between:"space-between"}),(0,l.g)(b,"rt-r-fw"),(0,l.g)(Z,"rt-r-gap"),withLayoutProps(u),(0,d.we)(r))})});p.displayName="Flex"},2627:function(e,t,a){"use strict";a.d(t,{r:function(){return l}});var n=a(7294),r=a(3967),o=a.n(r),i=a(6445),s=a(3356);let d={size:s.S.size,weight:s.S.weight,trim:s.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:s.S.color,highContrast:s.S.highContrast},l=n.forwardRef((e,t)=>{let{children:a,className:r,asChild:s=!1,underline:l=d.underline.default,...c}=e;return n.createElement(i.x,{...c,ref:t,asChild:!0,className:o()("rt-reset","rt-Link",r,`rt-underline-${l}`)},s?a:n.createElement("a",null,a))});l.displayName="Link"},4317:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/estafas",function(){return a(1743)}])},1743:function(e,t,a){"use strict";a.r(t),a.d(t,{Button_9eaf90492c1668e26c49fc3ba6fd9e7b:function(){return Button_9eaf90492c1668e26c49fc3ba6fd9e7b},Fragment_1762bb90abdb81b879b2a22edbbe01a1:function(){return Fragment_1762bb90abdb81b879b2a22edbbe01a1},Image_0f26db180e3727796c1e0dcc422d7a6d:function(){return Image_0f26db180e3727796c1e0dcc422d7a6d},Modal_e3692ca9389f30219cbe9761d3825fb1:function(){return Modal_e3692ca9389f30219cbe9761d3825fb1},Text_17a8551ded07bbdc382e746309133c70:function(){return Text_17a8551ded07bbdc382e746309133c70},Text_5f9c1ecd2c854ce8f8f26ab965cba5ca:function(){return Text_5f9c1ecd2c854ce8f8f26ab965cba5ca},default:function(){return Component}});var n=a(6811),r=a(7294),o=a(687),i=a(6608),s=a(6144),d=a(6445),l=a(2627),c=a(8192),u=a(3954),m=a(2207),g=a(1963),p=a(3865),h=a(3793),f=a(7754),x=a(1669),b=a(9222),Z=a(1941),w=a(9564),v=a(204),F=a(5284),y=a(6275),_=a(3),k=a(1913),C=a(3838),j=a(7226),B=a(3100),E=a(4418),A=a(1689),S=a(4641),R=a(6137),q=a(7018),T=a(1314),z=a(4298),X=a.n(z),M=a(1664),P=a.n(M),N=a(738),D=a(9008),I=a.n(D);function Modal_e3692ca9389f30219cbe9761d3825fb1(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,n.tZ)(m.u_,{isOpen:e.show,size:"full",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{sx:{background:"#2F0B3A"},children:(0,n.tZ)(h.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,n.tZ)(f.M,{children:(0,n.BX)(x.g,{sx:{maxWidth:"1000px"},children:[(0,n.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,n.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,n.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,n.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Fragment_1762bb90abdb81b879b2a22edbbe01a1(){let[e,t]=(0,r.useContext)(o.DR);return(0,n.tZ)(r.Fragment,{children:(0,i.oA)(null!==t)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(s.Vq.Root,{open:null!==t,children:(0,n.BX)(s.Vq.Content,{children:[(0,n.tZ)(s.Vq.Title,{children:"Connection Error"}),(0,n.BX)(d.x,{as:"p",children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,i.LH)(u.Ks).href]})]})})}):(0,n.tZ)(r.Fragment,{})})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,r.useContext)(o.DR),a=(0,r.useCallback)(t=>e([(0,i.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,i.ju]);return(0,n.tZ)(b.z,{onClick:a,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,n.tZ)(Z.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,n.tZ)(w.x,{sx:{color:"#FFFFFF"},children:e.title})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,r.useContext)(o.M4.state__modal_state_full);return(0,n.tZ)(w.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Component(){let e=(0,r.useContext)(o.M4.state__modal_state),[t,a]=(0,r.useContext)(o.DR);return(0,n.BX)(r.Fragment,{children:[(0,n.tZ)(Fragment_1762bb90abdb81b879b2a22edbbe01a1,{}),(0,n.BX)(x.g,{sx:{background:"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, black 100%)"},children:[(0,n.tZ)(X(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,n.BX)(v.k,{align:"center",direction:"row",justify:"start",sx:{position:"sticky",background:"#220A29",spacing:"8",width:"100%",zIndex:"999",top:"0",as:"h1"},wrap:"wrap",children:[(0,n.tZ)(X(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,n.BX)(F.v,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:[(0,n.tZ)(y.j,{children:(0,n.tZ)(w.x,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:"Menu"})}),(0,n.BX)(_.q,{sx:{fontSize:"1em",background:"#220A29",borderColor:"#F781D8"},children:[(0,n.tZ)(k.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,n.tZ)(C.r,{as:P(),href:"/dev",sx:{textDecoration:"none",_hover:{}},children:"Mundo de la Programaci\xf3n"})}),(0,n.tZ)(k.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,n.tZ)(C.r,{as:P(),href:"/retoque",sx:{textDecoration:"none",_hover:{}},children:"Herramientas Gr\xe1ficas"})}),(0,n.tZ)(j.R,{}),(0,n.tZ)(k.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,n.tZ)(C.r,{as:P(),href:"/kodi",sx:{textDecoration:"none",_hover:{}},children:"Manuales Kodi"})}),(0,n.tZ)(k.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,n.tZ)(C.r,{as:P(),href:"/estafas",sx:{textDecoration:"none",_hover:{}},children:"Ciberestafas"})}),(0,n.tZ)(j.R,{}),(0,n.tZ)(k.s,{sx:{color:"#FF0040",fontFamily:"Agbalumo-Regular",background:"#220A29",fontSize:"1.2em",_hover:{color:"#F781D8"}},children:(0,n.tZ)(C.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:"\xcdndice"})})]})]}),(0,n.tZ)(Z.E,{alt:"avatar",src:"/avatar.png",sx:{display:"flex",width:"50px",height:"auto",borderRadius:"15px 50px",border:"5px solid #555",boxShadow:"lg",marginInlineStart:"1em",marginInlineEnd:"1em"}}),(0,n.tZ)(C.r,{as:P(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,n.BX)(B.xu,{sx:{fontFamily:"Agbalumo-Regular",fontSize:"1.5em",marginInlineStart:"1em",marginInlineEnd:"1em"},children:[(0,n.tZ)(w.x,{as:"span",sx:{color:"#F781D8"},children:"Keiko"}),(0,n.tZ)(w.x,{as:"span",sx:{color:"#FF0040"},children:"Dev"})]})}),(0,n.tZ)(Modal_e3692ca9389f30219cbe9761d3825fb1,{})]}),(0,n.tZ)(f.M,{sx:{maxWidth:"1000px"},children:(0,n.BX)(x.g,{alignItems:"Start",spacing:"1em",sx:{padding:"0.8em",width:"100%"},children:[(0,n.tZ)(B.xu,{sx:{width:"100%",marginBottom:"2em"},children:(0,n.tZ)(E.X,{size:"lg",sx:{size:"lg",width:"100%",paddingTop:"1em",paddingInlineStart:"0.8em",paddingInlineEnd:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:(0,n.tZ)(f.M,{children:"Espacio dedicado a difundir los intentos de Ciberestafas"})})}),(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(w.x,{sx:{fontFamily:"Poppins-Light",fontSize:"1em",color:"#C3C7C8",textAlign:"justify",padding:"0.2em",textJustify:"inter-word",width:"100%"},children:"Secci\xf3n dedicada a la difusi\xf3n de los intentos de estafa que recibamos, con el objetivo de compartir\n            con todo el mundo, aquellos peque\xf1os intentos de fraude donde podemos caer de forma muy f\xe1cil."})}),(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(w.x,{sx:{fontFamily:"Poppins-Light",fontSize:"1em",color:"#C3C7C8",textAlign:"justify",padding:"0.2em",textJustify:"inter-word",width:"100%"},children:(0,n.BX)(w.x,{as:"span",children:["Si alguien quiere colaborar con estos intentos de fraude, me puede enviar un email con los detalles, fotos, capturas, \n            o simplemente explicando lo que le ha pasado a ",(0,n.tZ)(w.x,{as:"span",sx:{fontFamily:"Poppins-Bold"},children:(0,n.tZ)(C.r,{as:P(),href:"mailto:info@keikodev.es",sx:{textDecoration:"none",_hover:{}},children:"info@keikodev.es"})}),(0,n.tZ)(w.x,{as:"span",children:" indicando si prefiere permanecer en el anonimato o quiere aparecer como fuente de la noticia."})]})})}),(0,n.tZ)(C.r,{as:P(),href:"",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,n.BX)(x.g,{sx:{padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(B.xu,{sx:{paddingBottom:"0.5em"},children:(0,n.tZ)(A.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"16/02/2024"})})})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(S.U,{sx:{width:"100%"},children:(0,n.tZ)(E.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Ojo con esta nueva modalidad. Spoofing"})}),(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(w.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Tenemos una nueva modalidad de estafa al tel\xe9fono. Los estafadores te llaman haciendose pasar\n                por un empleado de tu banco, donde te indica que alguien est\xe1 intentando transferir dinero y se ponen en contacto\n                contigo para verificar la transacci\xf3n. Te pedir\xe1n datos para confirmar tu identidad, pero realmente lo que est\xe1s dando\n                son los datos para acceder a tu cuenta y con ello robarte tu dinero. Recuerda los b\xe1sicos en estos casos. 1.- Les debes\n                decir que ahora te pones t\xfa en contacto con ellos. 2\xba Tu banco nunca te llamar\xe1 y te pedir\xe1 claves de acceso para entrar\n                 en tus cuentas ni a modo de verificaci\xf3n. En particular, prefiero siempre colgar y llamar yo, ya que los estafadores\n                  son capaces de suplantar el n\xba de tel\xe9fono desde donde llaman y aparecer como tu entidad bancaria."})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(r.Fragment,{children:(()=>{switch(JSON.stringify(3)){case JSON.stringify(1):return(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-3.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-3.jpg"})],e,{}),src:"/img/estafas/estafa3-3.jpg",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-3.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-3.jpg"})],e,{}),src:"/img/estafas/estafa3-3.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-2.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-2.jpg"})],e,{}),src:"/img/estafas/estafa3-2.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-1.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-1.jpg"})],e,{}),src:"/img/estafas/estafa3-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-3.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-3.jpg"})],e,{}),src:"/img/estafas/estafa3-3.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa3-2.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa3-2.jpg"})],e,{}),src:"/img/estafas/estafa3-2.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,n.tZ)(w.x,{children:"Sin imagenes"})}})()})]})}),(0,n.tZ)(C.r,{as:P(),href:"",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,n.BX)(x.g,{sx:{padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(B.xu,{sx:{paddingBottom:"0.5em"},children:(0,n.tZ)(A.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"08/02/2024"})})})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(S.U,{sx:{width:"100%"},children:(0,n.tZ)(E.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"La llamada urgente porque te vamos a subir el precio"})}),(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(w.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy comparto el pen\xfaltimo intento de fraude de las compa\xf1\xedas telef\xf3nicas, no os podre\n                    decir cual, porque colgu\xe9 antes de darle opci\xf3n. Me llaman al tel\xe9fono fijo y dicen que me llaman\n                    de mi compa\xf1\xeda de tel\xe9fono, hasta ah\xed todo normal. El caso es que me empiezan a explicar que: \n                    Como usted ya fue informado en Octubre del pasado a\xf1o, vamos a subir las tar\xedfas que tiene contratadas\n                    a una cantidad que casi doblaba lo que pago... Pero, que me pod\xeda ofrecer otro servicio m\xe1s barato, pero\n                    si me interesa la oferta, tengo que contratarla inmediatamente, porque a las 12 de la noche ya ser\xe1 tarde. Y tendr\xe9\n                    que pagar la barbaridad que me dijo. Le dije que no me interesaba seguir escuchando y que ya me pondr\xeda yo en contacto con la compa\xf1\xeda... mano de santo.\n                    Siempre que nos metan prisas o que sea la \xfaltima oportunidad para que sea m\xe1s barato... huele mal. Ha venido la siguiente factura y\n                    adivinar que paso... nada"})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(r.Fragment,{children:(()=>{switch(JSON.stringify(2)){case JSON.stringify(1):return(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-2.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-2.jpg"})],e,{}),src:"/img/estafas/estafa-2-2.jpg",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-2.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-2.jpg"})],e,{}),src:"/img/estafas/estafa-2-2.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-1.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-1.jpg"})],e,{}),src:"/img/estafas/estafa-2-1.jpg",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-1.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-1.jpg"})],e,{}),src:"/img/estafas/estafa-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-2.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-2.jpg"})],e,{}),src:"/img/estafas/estafa-2-2.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-2-1.jpg",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-2-1.jpg"})],e,{}),src:"/img/estafas/estafa-2-1.jpg",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,n.tZ)(w.x,{children:"Sin imagenes"})}})()})]})}),(0,n.tZ)(C.r,{as:P(),href:"",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,n.BX)(x.g,{sx:{padding:"3em",borderRadius:"1.5rem",background:"#220A29",_hover:{"box-shadow":"0 0 1em #220A29"},height:"100%"},children:[(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(B.xu,{sx:{paddingBottom:"0.5em"},children:(0,n.tZ)(A.C,{sx:{paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"0.5em",paddingBottom:"0.5em",background:"transparent",color:"rgb(245, 184, 165)",borderColor:"rgb(245, 184, 165)",borderWidth:2,borderRadius:"2em"},children:"30/01/2024"})})})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(S.U,{sx:{width:"100%"},children:(0,n.tZ)(E.X,{size:"lg",sx:{color:"#FFFFFF",width:"inherit",fontFamily:"Poppins-Bold"},children:"Recibo dos mensajes de alguien que dice que es mi hija"})}),(0,n.tZ)(r.Fragment,{children:(0,i.oA)(!0)?(0,n.tZ)(r.Fragment,{children:(0,n.tZ)(w.x,{sx:{fontSize:"1em",color:"#8A939E",width:"100%"},children:"Hoy os traigo dos intentos seguidos, con una diferencia de 15 d\xedas, donde \n                alguien que dice que es mi hija me env\xeda mensajes de texto con un enlace y me pide que haga clic.  \n                La excusa, como siempre, es que le ha pasado algo, que se ha quedado sin tel\xe9fono, por el motivo que sea. \n                Los patrones siempre son los mismos, un familiar, un amigo y la urgencia. 'R\xe1pido que es urgente'. No caigais en\n                la trampa, usan la presi\xf3n emocional para que no pensemos. A saber que hay detr\xe1s del enlace."})}):(0,n.tZ)(r.Fragment,{})}),(0,n.tZ)(r.Fragment,{children:(()=>{switch(JSON.stringify(3)){case JSON.stringify(1):return(0,n.tZ)(B.xu,{sx:{width:"100%"},children:(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-3.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-3.png"})],e,{}),src:"/img/estafas/estafa-1-3.png",sx:{width:"300",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})});case JSON.stringify(2):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-3.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-3.png"})],e,{}),src:"/img/estafas/estafa-1-3.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-2.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-2.png"})],e,{}),src:"/img/estafas/estafa-1-2.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});case JSON.stringify(3):return(0,n.BX)(B.xu,{children:[(0,n.BX)(R.M,{columns:[1,2,3],spacing:"0.5em",sx:{width:"100%",padding:"0.7em"},children:[(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-1.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-1.png"})],e,{}),src:"/img/estafas/estafa-1-1.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-3.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-3.png"})],e,{}),src:"/img/estafas/estafa-1-3.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})}),(0,n.tZ)(f.M,{children:(0,n.tZ)(Z.E,{alt:"/img/estafas/estafa-1-2.png",onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:"/img/estafas/estafa-1-2.png"})],e,{}),src:"/img/estafas/estafa-1-2.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginTop:"0.8em",marginBottom:"0.8em"}})})]}),(0,n.tZ)(m.u_,{isOpen:e.show,size:"xl",children:(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.h,{children:(0,n.BX)(h.f,{children:[(0,n.tZ)(B.xu,{children:(0,n.tZ)(Z.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}),(0,n.tZ)(q.m,{children:(0,n.tZ)(b.z,{onClick:e=>t([(0,i.ju)("state.modal_state.change",{count:""})],e,{}),sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})})]})})})})]});default:return(0,n.tZ)(w.x,{children:"Sin imagenes"})}})()})]})})]})}),(0,n.tZ)(B.xu,{sx:{background:"black"},children:(0,n.BX)(x.g,{sx:{paddingBottom:"3em",color:"#A3ABB2",fontFamily:"Poppins-Light"},children:[(0,n.tZ)(T.q,{name:"Albert Garc\xeda",size:"xl",src:"/keiko_manga_sd.png",sx:{padding:"2px",border:"4px",borderColor:"#F781D8"}}),(0,n.tZ)(C.r,{as:P(),href:"https://github.com/spv4ever",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"\xa9 1991-2024 Blog personal de Albert Garc\xeda."}),(0,n.tZ)(S.U,{className:"marquee-container",sx:{marginTop:"0px !important",width:"300px"},children:(0,n.tZ)(w.x,{className:"marquee-content",sx:{fontSize:"0.8em",width:"100%"},children:"Aprendiendo desarrollo web."})}),(0,n.tZ)(N.Z,{href:"https://www.buymeacoffee.com/keikodev?l=es",icon:(0,n.tZ)(Z.E,{alt:"Caf\xe9",src:"/img/bmc-logo.svg"}),target:"_blank"}),(0,n.BX)(x.g,{children:[(0,n.tZ)(C.r,{as:P(),className:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",href:"https://www.iubenda.com/privacy-policy/14796411",sx:{title:"Pol\xedtica de Privacidad",textDecoration:"none",_hover:{}},children:"Pol\xedtica de Privacidad"}),(0,n.tZ)(X(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,n.tZ)(l.r,{asChild:!0,className:"iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",title:"Pol\xedtica de Cookies",children:(0,n.tZ)(P(),{href:"https://www.iubenda.com/privacy-policy/14796411/cookie-policy",passHref:!0,children:"Pol\xedtica de Cookies"})}),(0,n.tZ)(X(),{strategy:"afterInteractive",children:'\n(function (w,d) {\n    var loader = function () {\n        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];\n        s.src = "https://cdn.iubenda.com/iubenda.js";\n        tag.parentNode.insertBefore(s,tag);\n    };\n    if(w.addEventListener){\n        w.addEventListener("load", loader, false);\n    } else if(w.attachEvent){\n        w.attachEvent("onload", loader);\n    } else {\n        w.onload = loader;\n    }\n})(window, document);\n'}),(0,n.BX)(c.k,{align:"start",css:{flexDirection:"column"},gap:"2",children:[(0,n.tZ)(X(),{src:"https://cs.iubenda.com/autoblocking/3509766.js",strategy:"afterInteractive"}),(0,n.tZ)(X(),{src:"//cdn.iubenda.com/cs/gpp/stub.js",strategy:"afterInteractive"}),(0,n.tZ)(X(),{css:{charset:"UTF-8",async:!0},src:"//cdn.iubenda.com/cs/iubenda_cs.js",strategy:"afterInteractive"})]}),(0,n.tZ)(X(),{strategy:"afterInteractive",children:'\n    var _iub = _iub || [];\n    _iub.csConfiguration = {\n        "askConsentAtCookiePolicyUpdate": true,\n        "enableFadp": true,\n        "enableLgpd": true,\n        "enableUspr": true,\n        "fadpApplies": true,\n        "floatingPreferencesButtonDisplay": "bottom-right",\n        "lang": "es",\n        "perPurposeConsent": true,\n        "siteId": 3509766,\n        "usprApplies": true,\n        "whitelabel": false,\n        "cookiePolicyId": 14796411,\n        "banner": {\n            "acceptButtonDisplay": true,\n            "closeButtonDisplay": false,\n            "customizeButtonDisplay": true,\n            "explicitWithdrawal": true,\n            "listPurposes": true,\n            "position": "float-top-center",\n            "rejectButtonDisplay": true,\n            "showTitle": false\n        }\n    };\n    '})]})]})})]}),(0,n.BX)(I(),{children:[(0,n.tZ)("title",{children:"Secci\xf3n de intentos de ciberestafas"}),(0,n.tZ)("meta",{content:"Aqu\xed describiremos los intentos de ciberestafas que vamos recibiendo, mails fraudulentos, avisos por wassap, sms...",name:"description"}),(0,n.tZ)("meta",{content:"avatar3.png",property:"og:image"}),(0,n.tZ)("meta",{content:"Secci\xf3n de intentos de ciberestafas",name:"og:title"}),(0,n.tZ)("meta",{content:"Aqu\xed describiremos los intentos de ciberestafas que vamos recibiendo, mails fraudulentos, avisos por wassap, sms...",name:"og:description"}),(0,n.tZ)("meta",{content:"ca-pub-7920736444321179",name:"google-adsense-account"}),(0,n.tZ)("meta",{content:"website",name:"og:type"}),(0,n.tZ)("meta",{content:"avatar3.png",name:"og:image"}),(0,n.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,n.tZ)("meta",{content:"@Albert_gasa",name:"twitter:site"})]})]})}},1689:function(e,t,a){"use strict";a.d(t,{C:function(){return l}});var n=a(5059),r=a(1639),o=a(3179),i=a(296),s=a(5432),d=a(5893),l=(0,n.G)(function(e,t){let a=(0,r.mq)("Badge",e),{className:n,...l}=(0,o.Lr)(e);return(0,d.jsx)(i.m.span,{ref:t,className:(0,s.cx)("chakra-badge",e.className),...l,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...a}})});l.displayName="Badge"},6137:function(e,t,a){"use strict";a.d(t,{M:function(){return c}});var n=a(5059),r=a(296),o=a(5893),i=(0,n.G)(function(e,t){let{templateAreas:a,gap:n,rowGap:i,columnGap:s,column:d,row:l,autoFlow:c,autoRows:u,templateRows:m,autoColumns:g,templateColumns:p,...h}=e;return(0,o.jsx)(r.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:a,gridGap:n,gridRowGap:i,gridColumnGap:s,gridAutoColumns:g,gridColumn:d,gridRow:l,gridAutoFlow:c,gridAutoRows:u,gridTemplateRows:m,gridTemplateColumns:p},...h})});i.displayName="Grid";var s=a(7323),d=a(4629),l=a(3951),c=(0,n.G)(function(e,t){let{columns:a,spacingX:n,spacingY:r,spacing:d,minChildWidth:l,...c}=e,u=(0,s.F)(),m=l?widthToColumns(l,u):countToColumns(a);return(0,o.jsx)(i,{ref:t,gap:d,columnGap:n,rowGap:r,templateColumns:m,...c})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return(0,l.XQ)(e,e=>{let a=(0,d.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${a}, 1fr))`})}function countToColumns(e){return(0,l.XQ)(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}c.displayName="SimpleGrid"},7018:function(e,t,a){"use strict";a.d(t,{m:function(){return d}});var n=a(2207),r=a(5432),o=a(5059),i=a(296),s=a(5893),d=(0,o.G)((e,t)=>{let{className:a,...o}=e,d=(0,r.cx)("chakra-modal__footer",a),l=(0,n.I_)(),c={display:"flex",alignItems:"center",justifyContent:"flex-end",...l.footer};return(0,s.jsx)(i.m.footer,{ref:t,...o,__css:c,className:d})});d.displayName="ModalFooter"}},function(e){e.O(0,[169,609,267,774,888,179],function(){return e(e.s=4317)}),_N_E=e.O()}]);