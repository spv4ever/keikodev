(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{1785:function(e,t,r){"use strict";r.d(t,{iA:function(){return v}});var n=r(7294),a=r(3967),l=r.n(a);let i={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["surface","ghost"],default:"ghost"}},c={align:{type:"enum",values:["start","center","end","baseline"],default:void 0,responsive:!0}},o={justify:{type:"enum",values:["start","center","end"],default:void 0,responsive:!0},width:{type:"string | number",default:void 0}};var d=r(3843),s=r(6776),u=r(134),m=r(8336);let h=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,d.FY)(e),{className:c,children:o,size:u=i.size.default,variant:h=i.variant.default,...p}=r;return n.createElement("div",{ref:t,className:l()("rt-TableRoot",c,`rt-variant-${h}`,(0,s.g)(u,"rt-r-size"),(0,d.we)(a)),...p},n.createElement(m.x,null,n.createElement("table",{className:"rt-TableRootTable"},o)))});h.displayName="Table";let p=n.forwardRef((e,t)=>n.createElement("thead",{...e,ref:t,className:l()("rt-TableHeader",e.className)}));p.displayName="TableHeader";let f=n.forwardRef((e,t)=>n.createElement("tbody",{...e,ref:t,className:l()("rt-TableBody",e.className)}));f.displayName="TableBody";let g=n.forwardRef((e,t)=>{let{className:r,align:a=c.align.default,...i}=e;return n.createElement("tr",{...i,ref:t,className:l()("rt-TableRow",r,(0,s.g)(a,"rt-r-va",{baseline:"baseline",start:"top",center:"middle",end:"bottom"}))})});g.displayName="TableRow";let Z=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,u.Lp)(e),{tag:i="td",className:c,style:d,justify:m=o.justify.default,width:h=o.width.default,...p}=r;return n.createElement(i,{...p,ref:t,className:l()("rt-TableCell",c,(0,u.$G)(a),(0,s.g)(m,"rt-r-ta",{start:"left",center:"center",end:"right"})),style:{width:h,...d}})});Z.displayName="TableCellImpl";let b=n.forwardRef((e,t)=>n.createElement(Z,{...e,tag:"td",ref:t}));b.displayName="TableCell";let C=n.forwardRef((e,t)=>n.createElement(Z,{scope:"col",...e,tag:"th",ref:t,className:l()("rt-TableColumnHeaderCell",e.className)}));C.displayName="TableColumnHeaderCell";let y=n.forwardRef((e,t)=>n.createElement(Z,{scope:"row",...e,tag:"th",ref:t,className:l()("rt-TableRowHeaderCell",e.className)}));y.displayName="TableRowHeaderCell";let v=Object.assign({},{Root:h,Header:p,Body:f,Row:g,Cell:b,ColumnHeaderCell:C,RowHeaderCell:y})},470:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},3718:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},9411:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return r(5782)}])},5782:function(e,t,r){"use strict";r.r(t),r.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_b97db6a7704e5c7fedae72d644a56ebd:function(){return Fragment_b97db6a7704e5c7fedae72d644a56ebd},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var n=r(2729),a=r(6811),l=r(7294),i=r(687),c=r(6608),o=r(3718),d=r(470),s=r(5205),u=r(9894),m=r(917),h=r(467),p=r(1042),f=r(9926),g=r(4152),Z=r(9522),b=r(1785),C=r(8501),y=r(6445),v=r(1675),w=r(3954),_=r(3338);r(4627),r(4026);var k=r(9008),F=r.n(k);function _templateObject(){let e=(0,n._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Fragment_b97db6a7704e5c7fedae72d644a56ebd(){let e=(0,l.useContext)(i.M4.state__user_state),[t,r]=(0,l.useContext)(i.DR),n=(0,l.useCallback)(e=>{let r=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(r).entries())};t([(0,c.ju)("state.user_state.create_user",{newuser:n})])}),u=(0,l.useCallback)(e=>{let r=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(r).entries())};t([(0,c.ju)("state.user_state.update_user",{update_user:n})])});return(0,a.tZ)(l.Fragment,{children:(0,c.oA)(999===e.user_type)?(0,a.tZ)(l.Fragment,{children:(0,a.BX)(h.k,{css:{width:"60vw",margin:"auto"},direction:"column",children:[(0,a.tZ)(p.X,{align:"center",color:"yellow",children:"Usuarios"}),(0,a.BX)(h.k,{align:"start",css:{"margin-top":"30px"},direction:"row",justify:"center",gap:"2",children:[(0,a.BX)(h.k,{align:"start",direction:"row",gap:"2",children:[(0,a.tZ)(f.nv.Input,{onChange:e=>t([(0,c.ju)("state.user_state.buscar_email_onchange",{email:e.target.value})],e,{}),placeholder:"Indicar email"}),(0,a.tZ)(g.z,{onClick:e=>t([(0,c.ju)("state.user_state.get_user_by_email",{})],e,{}),children:"Buscar"})]}),(0,a.BX)(Z.Vq.Root,{children:[(0,a.tZ)(Z.Vq.Trigger,{children:(0,a.tZ)(g.z,{color:"pink",css:{color:"#F781D8",fontFamily:"Poppins-Bold",background:"#161A36","&:hover":{color:"#161A36",background:"#FF0040",cursor:"pointer"}},variant:"outline",children:"Registrarse"})}),(0,a.tZ)(Z.Vq.Content,{css:{width:"300px"},children:(0,a.BX)(h.k,{align:"center",direction:"column",justify:"center",children:[(0,a.tZ)(Z.Vq.Title,{children:"Registrarse"}),(0,a.tZ)(_.fC,{className:"Root",onSubmit:n,children:(0,a.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,a.tZ)(f.nv.Input,{name:"name",placeholder:"Nombre"}),(0,a.tZ)(f.nv.Input,{name:"email",placeholder:"eMail"}),(0,a.tZ)(f.nv.Input,{name:"password",placeholder:"Password",type:"password"}),(0,a.BX)(h.k,{css:{marginTop:"16px"},direction:"row",justify:"between",gap:"3",children:[(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(g.z,{type:"submit",children:"Guardar"})}),(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(g.z,{color:"gray",variant:"soft",children:"Cancelar"})})]})]})})]})})]})]}),(0,a.BX)(b.iA.Root,{variant:"surface",children:[(0,a.tZ)(b.iA.Header,{children:(0,a.BX)(b.iA.Row,{css:{color:"Black"},children:[(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Nombre"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Correo electr\xf3nico"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Tipo usuario"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Activo"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Fecha registro"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Eliminar"}),(0,a.tZ)(b.iA.ColumnHeaderCell,{children:"Editar"})]})}),(0,a.tZ)(b.iA.Body,{children:e.users.map((e,r)=>(0,a.BX)(b.iA.Row,{css:{color:"Black"},children:[(0,a.tZ)(b.iA.Cell,{children:e.name}),(0,a.tZ)(b.iA.Cell,{children:e.email}),(0,a.tZ)(b.iA.Cell,{align:"end",children:e.user_type}),(0,a.tZ)(b.iA.Cell,{align:"end",children:e.active}),(0,a.tZ)(b.iA.Cell,{children:e.dateregister}),(0,a.tZ)(b.iA.Cell,{children:(0,a.tZ)(h.k,{align:"start",direction:"row",gap:"2",children:(0,a.BX)(Z.Vq.Root,{children:[(0,a.tZ)(Z.Vq.Trigger,{children:(0,a.tZ)(g.z,{children:(0,a.tZ)(o.Z,{css:{color:"var(--current-color)"}})})}),(0,a.BX)(Z.Vq.Content,{children:[(0,a.tZ)(Z.Vq.Title,{children:"Eliminar registro"}),(0,a.BX)(Z.Vq.Description,{children:["Est\xe1 seguro que desea eliminar el registro ",e.email]}),(0,a.BX)(h.k,{css:{marginTop:"16px"},justify:"end",gap:"3",children:[(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(g.z,{color:"gray",variant:"soft",children:"Cancelar"})}),(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(h.k,{children:(0,a.tZ)(g.z,{onClick:r=>t([(0,c.ju)("state.user_state.delete_user_by_email",{email:e.email})],r,{}),children:"Confirmar"})})})]})]})]})})}),(0,a.tZ)(b.iA.Cell,{children:(0,a.tZ)(h.k,{align:"start",direction:"row",gap:"2",children:(0,a.BX)(Z.Vq.Root,{children:[(0,a.tZ)(Z.Vq.Trigger,{children:(0,a.tZ)(g.z,{children:(0,a.tZ)(d.Z,{css:{color:"var(--current-color)"}})})}),(0,a.BX)(Z.Vq.Content,{css:{width:"300px"},children:[(0,a.BX)(h.k,{align:"center",direction:"column",justify:"center",children:[(0,a.tZ)(Z.Vq.Title,{children:"Modificar usuario"}),(0,a.tZ)(_.fC,{className:"Root",onSubmit:u,children:(0,a.BX)(h.k,{align:"start",direction:"column",gap:"2",children:[(0,a.tZ)(f.nv.Input,{defaultValue:e.name,name:"name",placeholder:e.name}),(0,a.tZ)(f.nv.Input,{defaultValue:e.email,name:"email",placeholder:e.email,readOnly:!0}),(0,a.tZ)(f.nv.Input,{defaultValue:e.password,name:"password",placeholder:e.password,type:"password"}),(0,a.tZ)(f.nv.Input,{defaultValue:"1",name:"active",placeholder:e.active}),(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(g.z,{type:"submit",children:"Guardar"})})]})})]}),(0,a.tZ)(h.k,{css:{marginTop:"16px"},justify:"end",gap:"3",children:(0,a.tZ)(Z.Vq.Close,{children:(0,a.tZ)(g.z,{color:"gray",variant:"soft",children:"Cancelar"})})})]})]})})})]},r))})]}),(0,a.tZ)(l.Fragment,{children:(0,c.oA)(""!==e.error)?(0,a.tZ)(l.Fragment,{children:(0,a.BX)(C.UW.Root,{color:"yellow",css:{position:"fixed",top:"0px",right:"0px",margin:"10px 10px",icon:"shield-alert"},role:"alert",size:"3",variant:"surface",children:[(0,a.tZ)(C.UW.Icon,{children:(0,a.tZ)(s.Z,{css:{color:"var(--current-color)"}})}),(0,a.tZ)(C.UW.Text,{children:e.error})]})}):(0,a.tZ)(l.Fragment,{})})]})}):(0,a.tZ)(l.Fragment,{children:(0,a.tZ)(y.x,{as:"p",children:"Usuario no permitido"})})})}let x=(0,m.F4)(_templateObject());function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(i.DR);return(0,a.tZ)(l.Fragment,{children:(0,c.oA)(t.length>0)?(0,a.tZ)(l.Fragment,{children:(0,a.tZ)(u.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(x," 1s infinite")},size:32})}):(0,a.tZ)(l.Fragment,{})})}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(i.DR);return(0,a.tZ)(l.Fragment,{children:(0,c.oA)(t.length>=2)?(0,a.tZ)(l.Fragment,{children:(0,a.tZ)(Z.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,a.BX)(Z.Vq.Content,{children:[(0,a.tZ)(Z.Vq.Title,{children:"Connection Error"}),(0,a.BX)(y.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,c.LH)(w.Ks).href]})]})})}):(0,a.tZ)(l.Fragment,{})})}function Component(){return(0,a.BX)(l.Fragment,{children:[(0,a.BX)(l.Fragment,{children:[(0,a.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,a.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,a.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,a.tZ)(v.W,{children:(0,a.tZ)(Fragment_b97db6a7704e5c7fedae72d644a56ebd,{})}),(0,a.BX)(F(),{children:[(0,a.tZ)("title",{children:"User"}),(0,a.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}}},function(e){e.O(0,[689,795,753,774,888,179],function(){return e(e.s=9411)}),_N_E=e.O()}]);