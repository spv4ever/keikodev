(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(4148)}])},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var a=n(6811),o=n(7294),i=n(8595),r=n(6608),c=n(2918),l=n.n(c),d=n(1163);let useClientSideRouting=()=>{let[e,t]=(0,o.useState)(!1),n=(0,o.useRef)(!1),a=(0,d.useRouter)();return(0,o.useEffect)(()=>{a.isReady&&!n.current&&(n.current=!0,a.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).catch(e=>{t(!0)}))},[a.isReady]),e};var u=n(9008),s=n.n(u);function Component(){let e=useClientSideRouting();return(0,a.BX)(o.Fragment,{children:[(0,a.tZ)(i.gv,{}),(0,a.tZ)(o.Fragment,{children:(0,r.oA)(e)?(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(l(),{statusCode:404})}):(0,a.tZ)(o.Fragment,{})}),(0,a.BX)(s(),{children:[(0,a.tZ)("title",{children:"404 - Not Found"}),(0,a.tZ)("meta",{content:"The page was not found",name:"description"}),(0,a.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},8595:function(e,t,n){"use strict";n.d(t,{Jj:function(){return Text_3d123e4057884113284e4b45bc0189be},R1:function(){return Image_e00f06c8a325b8ae02ab79b4aef189ae},VK:function(){return Image_32e368fe16222e6346df5653342fb1a8},ak:function(){return Fragment_3b7fa1a6a66cd5670cae3939729992b6},gZ:function(){return Image_935d3e66844be1163af645c9e327e290},gv:function(){return Fragment_fd0e7cb8f9fb4669a6805377d925fba0},mB:function(){return Modal_99fc8fd4041243b7e50174bf2f3cdf20},qQ:function(){return Image_ae9bc86a68816ec99c406243ac8e4cc8},qp:function(){return Image_1ae39a5906fb4fab0ed3f6df934b491f},wx:function(){return Fragment_d658a9070132455e91f35a1d19f69433},xg:function(){return Modal_64c0b830831b5612dfd2ce32da07a59c}});var a=n(6811),o=n(7294),i=n(687),r=n(6608),c=n(2752),l=n(1963),d=n(1828),u=n(4504),s=n(3793),f=n(9564),g=n(1941),m=n(1669),_=n(3100),h=n(4641),b=n(1314),x=n(4418),p=n(9222),F=n(295),k=n(7754),Z=n(1153),C=n(7018);n(5202);var w=n(6426);function Fragment_fd0e7cb8f9fb4669a6805377d925fba0(){let[e,t]=(0,o.useContext)(i.DR);return(0,a.tZ)(o.Fragment,{children:(0,r.oA)(null!==t)?(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(c.u_,{isOpen:null!==t,children:(0,a.tZ)(l.Z,{children:(0,a.BX)(d.h,{children:[(0,a.tZ)(u.x,{children:"Connection Error"}),(0,a.tZ)(s.f,{children:(0,a.BX)(f.x,{children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,r.e9)().href]})})]})})})}):(0,a.tZ)(o.Fragment,{})})}function Image_e00f06c8a325b8ae02ab79b4aef189ae(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useContext)(i.M4.state__page_state),c=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state_full.change",{hdurl:n.hdurl,title:n.title,explanation:n.explanation})],t,{}),[e,r.ju,n,n,n]);return(0,a.tZ)(g.E,{alt:"Foto diaria Nasa",fit:"cousin",onClick:c,src:n.url,sx:{width:"auto",height:"50px",_hover:{cursor:"pointer"},margin:"0px !important"}})}function Text_3d123e4057884113284e4b45bc0189be(){let e=(0,o.useContext)(i.M4.state__page_state);return(0,a.tZ)(f.x,{sx:{fontSize:"0.7em",fontFamily:"Poppins-Light",textAlign:"center",color:"rgb(182, 209, 98)",display:["none","none","flex","flex","flex"]},children:"Foto diaria: ".concat(e.date)})}function Fragment_3b7fa1a6a66cd5670cae3939729992b6(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useContext)(i.M4.state__state_login),c=(0,o.useContext)(i.M4.state);return(0,a.tZ)(o.Fragment,{children:(0,r.oA)(c.is_hydrated)?(0,a.tZ)(o.Fragment,{children:(0,r.oA)(n.token_is_valid)?(0,a.tZ)(o.Fragment,{children:(0,a.BX)(m.g,{children:[(0,a.tZ)(_.xu,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.BX)(h.U,{alignItems:"center",justifyContent:"center",sx:{padding:"10px"},children:[(0,a.tZ)(b.q,{name:n.tokeninfo.name,size:"md",src:n.tokeninfo.picture,sx:{display:["none","none","flex","flex","flex"]}}),(0,a.BX)(m.g,{alignItems:"center",children:[(0,a.tZ)(x.X,{size:"xs",sx:{fontSize:"0.8em",color:"#F1F2F4",fontFamily:"Poppins-Bold"},children:n.tokeninfo.name}),(0,a.tZ)(f.x,{sx:{color:"#F781D8",fontSize:"0.8em",margin:"0px !important",display:["none","none","flex","flex","flex"]},children:n.tokeninfo.email})]}),(0,a.tZ)(p.z,{onClick:t=>e([(0,r.ju)("state.state_login.logout",{})],t,{}),size:"xs",sx:{margin:"0px !important",width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Cerrar"})]})}),(0,a.tZ)(f.x,{children:n.protected_content})]})}):(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(m.g,{children:(0,a.tZ)(w.kZ,{onSuccess:t=>e([(0,r.ju)("state.state_login.on_success",{id_token:t})],t,{}),size:"small",text:"signin",theme:"filled_blue"})})})}):(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(F.$,{})})})}function Button_9eaf90492c1668e26c49fc3ba6fd9e7b(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state_full.change",{hdurl:"",title:"",explanation:""})],t,{}),[e,r.ju]);return(0,a.tZ)(p.z,{onClick:n,size:"md",sx:{borderWidth:"3px",width:"30%",borderColor:"#F781D8",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},variant:"outline",children:"Cerrar ventana"})}function Image_0f26db180e3727796c1e0dcc422d7a6d(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,a.tZ)(g.E,{alt:"Imagen pantalla completa",src:e.hdurl,sx:{width:"100%",height:"auto"}})}function Text_17a8551ded07bbdc382e746309133c70(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,a.tZ)(f.x,{sx:{color:"#FFFFFF"},children:e.title})}function Text_5f9c1ecd2c854ce8f8f26ab965cba5ca(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,a.tZ)(f.x,{sx:{color:"#FFFFFF"},children:e.explanation})}function Modal_64c0b830831b5612dfd2ce32da07a59c(){let e=(0,o.useContext)(i.M4.state__modal_state_full);return(0,a.tZ)(c.u_,{isOpen:e.show,size:"full",children:(0,a.tZ)(l.Z,{children:(0,a.tZ)(d.h,{sx:{bg:"#2F0B3A"},children:(0,a.tZ)(s.f,{sx:{background:"url('/img/mosaico.png') repeat","background-size":"120px 120px"},children:(0,a.tZ)(k.M,{children:(0,a.BX)(m.g,{sx:{maxWidth:"1000px"},children:[(0,a.tZ)(Button_9eaf90492c1668e26c49fc3ba6fd9e7b,{}),(0,a.tZ)(Image_0f26db180e3727796c1e0dcc422d7a6d,{}),(0,a.tZ)(Text_17a8551ded07bbdc382e746309133c70,{}),(0,a.tZ)(Text_5f9c1ecd2c854ce8f8f26ab965cba5ca,{})]})})})})})})}function Fragment_d658a9070132455e91f35a1d19f69433(){let e=(0,o.useContext)(i.M4.state__page_state);return(0,a.tZ)(o.Fragment,{children:(0,r.oA)(e.is_live.at(0))?(0,a.tZ)(o.Fragment,{children:(0,a.tZ)(Z.M,{className:"blink",sx:{boxSize:"0.8em",bg:"#9146FF",borderColor:"#9146FF"},children:(0,a.tZ)(g.E,{alt:"Logo twitch",src:"/img/twitch.svg"})})}):(0,a.tZ)(o.Fragment,{})})}function Image_ae9bc86a68816ec99c406243ac8e4cc8(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state.change",{count:"/img/kodi_images/kodi_tutorial43.png"})],t,{}),[e,r.ju]);return(0,a.tZ)(g.E,{alt:"/img/kodi_images/kodi_tutorial43.png",onClick:n,src:"/img/kodi_images/kodi_tutorial43.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginY:"0.8em"}})}function Image_32e368fe16222e6346df5653342fb1a8(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state.change",{count:"/img/kodi_images/kodi_tutorial44.png"})],t,{}),[e,r.ju]);return(0,a.tZ)(g.E,{alt:"/img/kodi_images/kodi_tutorial44.png",onClick:n,src:"/img/kodi_images/kodi_tutorial44.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginY:"0.8em"}})}function Image_1ae39a5906fb4fab0ed3f6df934b491f(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state.change",{count:"/img/kodi_images/kodi_tutorial45.png"})],t,{}),[e,r.ju]);return(0,a.tZ)(g.E,{alt:"/img/kodi_images/kodi_tutorial45.png",onClick:n,src:"/img/kodi_images/kodi_tutorial45.png",sx:{width:"300px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginY:"0.8em"}})}function Image_cb88d9a9151ac6d2b95a30035b3741ad(){let e=(0,o.useContext)(i.M4.state__modal_state);return(0,a.tZ)(g.E,{src:e.count,sx:{width:"800px",heigth:"auto"}})}function Button_2f5c1a7635766c63ba30e45e10194288(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state.change",{count:""})],t,{}),[e,r.ju]);return(0,a.tZ)(p.z,{onClick:n,sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#220A29",whiteSpace:"normal",_hover:{backgroundColor:"#FF0040","box-shadow":"0 0 1em #FF0040"}},children:"Close"})}function Modal_99fc8fd4041243b7e50174bf2f3cdf20(){let e=(0,o.useContext)(i.M4.state__modal_state);return(0,a.tZ)(c.u_,{isOpen:e.show,size:"xl",children:(0,a.tZ)(l.Z,{children:(0,a.tZ)(d.h,{children:(0,a.BX)(s.f,{children:[(0,a.tZ)(_.xu,{children:(0,a.tZ)(Image_cb88d9a9151ac6d2b95a30035b3741ad,{})}),(0,a.tZ)(C.m,{children:(0,a.tZ)(Button_2f5c1a7635766c63ba30e45e10194288,{})})]})})})})}function Image_935d3e66844be1163af645c9e327e290(){let[e,t]=(0,o.useContext)(i.DR),n=(0,o.useCallback)(t=>e([(0,r.ju)("state.modal_state.change",{count:"/img/kodi_images/kodi_tutorial49.png"})],t,{}),[e,r.ju]);return(0,a.tZ)(g.E,{alt:"/img/kodi_images/kodi_tutorial49.png",onClick:n,src:"/img/kodi_images/kodi_tutorial49.png",sx:{width:"450px",heigth:"auto",border:"2px solid",borderRadius:"10px",borderColor:"black",marginY:"0.8em"}})}},2918:function(e,t,n){e.exports=n(6908)}},function(e){e.O(0,[798,774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);