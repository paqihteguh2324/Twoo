(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{7710:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/section/ModalUbahProduct",function(){return i(5481)}])},9881:function(e,n,i){"use strict";i.d(n,{t:function(){return o}});var t=i(3977),a=i(6650);let r=(0,t.ZF)({apiKey:"AIzaSyAeT1TbAXsGpJyU1ECz82Z-xUPnwUy5h78",authDomain:"twoo-359ce.firebaseapp.com",projectId:"twoo-359ce",storageBucket:"twoo-359ce.appspot.com",messagingSenderId:"985313088792",appId:"1:985313088792:web:d85cc8ff03e7cd00e9ba6d",measurementId:"G-TRDH0BBX42"}),o=(0,a.cF)(r)},5481:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return y}});var t=i(5893),a=i(5843),r=i(7357),o=i(5861),l=i(6886),s=i(89),c=i(7109),d=i(3946),u=i(9576),m=i(9417),p=i(1170),h=i(2175),f=i(6310),x=i(9881),g=i(6650),v=i(7294),j=i(5121);function y(e){var n,i;let{open:y,handleClose:Z,setAlert:b,selectedProduct:w}=e,C=f.Ry({name:f.Z_().required("Name is required"),price:f.Rx().required("Price is required"),image:f.Z_().required("Image is required")}),P=(0,h.TA)({initialValues:w||{name:"",price:0,image:""},validationSchema:C,onSubmit:e=>{_()}}),_=async()=>{let e=null==P?void 0:P.values;try{await j.Z.put("/api/product/".concat(null==w?void 0:w.id),{name:null==e?void 0:e.name,price:Number(null==e?void 0:e.price),image:null==e?void 0:e.image}),Z(),b({open:!0,severity:"success",message:"Berhasil Ubah Product"})}catch(e){console.error("Error:",e)}},T=async e=>{var n,i;let t=null===(n=e.target.files)||void 0===n?void 0:n[0];if(console.log(null===(i=e.target.files)||void 0===i?void 0:i[0]),t){let e=(0,g.iH)(x.t,"images/".concat(t.name));try{await (0,g.KV)(e,t);let n=await (0,g.Jt)(e);P.setFieldValue("image",n),console.log("Download URL:",n),P.resetForm()}catch(e){console.error("Error uploading or getting download URL:",e)}}};return(0,v.useEffect)(()=>{w&&(P.setFieldValue("name",w.name),P.setFieldValue("price",w.price),P.setFieldValue("image",w.image))},[w]),(0,t.jsx)(a.Z,{open:y,onClose:Z,sx:{width:{md:"30%",xs:"80%"},margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,t.jsxs)(r.Z,{sx:{backgroundColor:"#ffffff",width:"100%",height:"fit-content",p:2,color:"#000"},children:[(0,t.jsx)(o.Z,{variant:"h6",component:"h2",sx:{textAlign:"center",fontWeight:"700",fontSize:"30px"},children:"Tambah Product"}),(0,t.jsxs)("form",{onSubmit:P.handleSubmit,children:[(0,t.jsx)(l.ZP,{item:!0,xs:12,sm:12,display:"flex",justifyContent:"center",mt:4,children:(null==P?void 0:null===(n=P.values)||void 0===n?void 0:n.image)&&(0,t.jsx)("img",{src:null==P?void 0:null===(i=P.values)||void 0===i?void 0:i.image,width:"auto",height:"240px"})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,sm:12,display:"flex",justifyContent:"center",children:(0,t.jsx)(s.Z,{type:"file",onChange:T,sx:{width:"240px"},inputProps:{accept:"image/*"},endAdornment:(0,t.jsx)(c.Z,{position:"end",children:(0,t.jsxs)(d.Z,{component:"label",htmlFor:"upload-image","aria-label":"upload picture",edge:"end",children:[(0,t.jsx)(p.Z,{}),(0,t.jsx)("input",{id:"upload-image",type:"file",accept:"image/*",style:{display:"none"},onChange:T})]})})})}),(0,t.jsxs)(l.ZP,{container:!0,spacing:2,sx:{mt:2},children:[(0,t.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,t.jsx)(u.Z,{fullWidth:!0,id:"name",name:"name",label:"Name",value:P.values.name,onChange:P.handleChange,error:P.touched.name&&!!P.errors.name,helperText:P.touched.name&&P.errors.name})}),(0,t.jsx)(l.ZP,{item:!0,xs:12,sm:12,children:(0,t.jsx)(u.Z,{fullWidth:!0,id:"price",name:"price",label:"Price",value:P.values.price,onChange:P.handleChange,error:P.touched.price&&!!P.errors.price,helperText:P.touched.price&&P.errors.price})})]}),(0,t.jsxs)(l.ZP,{container:!0,spacing:2,sx:{mt:2},display:"flex",justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(m.Z,{variant:"contained",onClick:Z,sx:{textTransform:"none",backgroundColor:"#333333",color:"#fff",mr:"10px"},children:"Cancel"}),(0,t.jsx)(m.Z,{variant:"contained",type:"submit",sx:{textTransform:"none",backgroundColor:"#22ee55",color:"#fff"},children:"Save"})]})]})]})})}}},function(e){e.O(0,[259,457,668,174,833,774,888,179],function(){return e(e.s=7710)}),_N_E=e.O()}]);