(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{9661:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var o=t(3366),i=t(7462),n=t(7294),l=t(512),a=t(4780),s=t(948),c=t(1657),u=t(8169),d=t(5893),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(1588),h=t(4867);function v(e){return(0,h.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=e=>{let{classes:r,variant:t,colorDefault:o}=e;return(0,a.Z)({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},v,r)},g=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),S=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),b=n.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:a,children:s,className:u,component:f="div",imgProps:m,sizes:h,src:v,srcSet:b,variant:w="circular"}=t,y=(0,o.Z)(t,p),j=null,k=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:o}){let[i,l]=n.useState(!1);return n.useEffect(()=>{if(!t&&!o)return;l(!1);let i=!0,n=new Image;return n.onload=()=>{i&&l("loaded")},n.onerror=()=>{i&&l("error")},n.crossOrigin=e,n.referrerPolicy=r,n.src=t,o&&(n.srcset=o),()=>{i=!1}},[e,r,t,o]),i}((0,i.Z)({},m,{src:v,srcSet:b})),R=v||b,z=R&&"error"!==k,N=(0,i.Z)({},t,{colorDefault:!z,component:f,variant:w}),P=x(N);return j=z?(0,d.jsx)(S,(0,i.Z)({alt:a,srcSet:b,src:v,sizes:h,ownerState:N,className:P.img},m)):null!=s?s:R&&a?a[0]:(0,d.jsx)(Z,{ownerState:N,className:P.fallback}),(0,d.jsx)(g,(0,i.Z)({as:f,ownerState:N,className:(0,l.Z)(P.root,u),ref:r},y,{children:j}))});var w=b},8169:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var o=t(7462),i=t(7294),n=t(3366),l=t(512),a=t(4780),s=t(8216),c=t(1657),u=t(948),d=t(1588),f=t(4867);function m(e){return(0,f.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=t(5893);let v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=e=>{let{color:r,fontSize:t,classes:o}=e,i={root:["root","inherit"!==r&&`color${(0,s.Z)(r)}`,`fontSize${(0,s.Z)(t)}`]};return(0,a.Z)(i,m,o)},x=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,"inherit"!==t.color&&r[`color${(0,s.Z)(t.color)}`],r[`fontSize${(0,s.Z)(t.fontSize)}`]]}})(({theme:e,ownerState:r})=>{var t,o,i,n,l,a,s,c,u,d,f,m,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:r.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(i=e.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:({inherit:"inherit",small:(null==(n=e.typography)||null==(l=n.pxToRem)?void 0:l.call(n,20))||"1.25rem",medium:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,24))||"1.5rem",large:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,35))||"2.1875rem"})[r.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(f=f[r.color])?void 0:f.main)?d:({action:null==(m=(e.vars||e).palette)||null==(m=m.action)?void 0:m.active,disabled:null==(h=(e.vars||e).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0})[r.color]}}),g=i.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:s,color:u="inherit",component:d="svg",fontSize:f="medium",htmlColor:m,inheritViewBox:g=!1,titleAccess:S,viewBox:Z="0 0 24 24"}=t,b=(0,n.Z)(t,v),w=i.isValidElement(a)&&"svg"===a.type,y=(0,o.Z)({},t,{color:u,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:Z,hasSvgAsChild:w}),j={};g||(j.viewBox=Z);let k=p(y);return(0,h.jsxs)(x,(0,o.Z)({as:d,className:(0,l.Z)(k.root,s),focusable:"false",color:m,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:r},j,b,w&&a.props,{ownerState:y,children:[w?a.props.children:a,S?(0,h.jsx)("title",{children:S}):null]}))});function S(e,r){function t(t,i){return(0,h.jsx)(g,(0,o.Z)({"data-testid":`${r}Icon`,ref:i},t,{children:e}))}return t.muiName=g.muiName,i.memo(i.forwardRef(t))}g.muiName="SvgIcon"},8414:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/section/Welcome",function(){return t(3522)}])},3522:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var o=t(5893),i=t(6886),n=t(5861),l=t(7357),a=t(9661);let s=e=>{let{item:r,variant:t,sx:l={}}=e;return(0,o.jsx)(i.ZP,{item:!0,children:(0,o.jsx)(n.Z,{variant:t,sx:{...l},children:r})})};function c(){return(0,o.jsxs)(i.ZP,{container:!0,spacing:2,height:"100vh",children:[(0,o.jsxs)(i.ZP,{md:6,xs:12,display:"flex",alignItems:"center",flexDirection:"column",alignContent:"space-around",justifyContent:"center",children:[(0,o.jsx)(s,{item:"Hii Everyone, My Name is",variant:"subtitle1",sx:{color:"#eeea",WebkitTextStroke:"2 px blue",textShadow:"1px 1px 2px #0ba3b8"}}),(0,o.jsx)(s,{item:"Paqih Teguh Maulana",variant:"h3",sx:{color:"#eeea",WebkitTextStroke:"2 px blue",textShadow:"1px 1px 2px #2cd0e6"}}),(0,o.jsx)(s,{item:"I am a Software Developer",variant:"h5",sx:{color:"#eeea",WebkitTextStroke:"2 px blue",textShadow:"1px 1px 2px #0ba3b8"}})]}),(0,o.jsx)(i.ZP,{md:6,xs:12,children:(0,o.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:{md:"80vh",xs:"40vh"},border:"5px solid #032f5c",margin:{md:12,xs:5},borderRadius:{xs:"4px",md:"10%"}},children:(0,o.jsx)(a.Z,{src:"/static/images/avatar/1.jpg",sx:{width:"100%",height:"100%",borderRadius:{xs:"4px",md:"10%"}}})})})]})}}},function(e){e.O(0,[259,774,888,179],function(){return e(e.s=8414)}),_N_E=e.O()}]);