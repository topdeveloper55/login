"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[482],{2889:function(e,r,n){var s=n(7313);r.Z=function(){var e=(0,s.useRef)(!0);return(0,s.useEffect)((function(){return function(){e.current=!1}}),[]),e}},5482:function(e,r,n){n.r(r),n.d(r,{default:function(){return E}});var s=n(9019),t=n(2832),i=n(1113),o=n(4796),c=n(4165),a=n(5861),l=n(9439),d=n(7313),u=n(8467),h=n(3306),x=n(7843),m=n(1727),p=n(5480),f=n(1550),Z=n(7829),w=n(9099),j=n(1933),L=n(5604),g=n(4044),v=n(1404),b=n(4285),P=n(2889),y=n(4378),k=n(8530),H=n(2419),S=n(1741),C=n(4874),R=n(6417),_=function(){var e=(0,P.Z)(),r=(0,u.s0)(),n=(0,b.Z)().isLoggedIn,o=(0,d.useState)(),_=(0,l.Z)(o,2),E=_[0],B=_[1],W=(0,d.useState)(!1),M=(0,l.Z)(W,2),A=M[0],z=M[1],I=function(){z(!A)},q=function(e){e.preventDefault()},T=function(e){var r=(0,H.X)(e);B((0,H.V)(r))};return(0,d.useEffect)((function(){T("")}),[]),(0,R.jsx)(L.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:j.Ry().shape({password:j.Z_().max(255).required("Password is required"),confirmPassword:j.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(function(e,r){return r.parent.password===e}))}),onSubmit:function(){var s=(0,a.Z)((0,c.Z)().mark((function s(t,i){var o,a,l;return(0,c.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:o=i.setErrors,a=i.setStatus,l=i.setSubmitting;try{e.current&&(a({success:!0}),l(!1),(0,y.WI)((0,k.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){r(n?"/auth/login":"/login",{replace:!0})}),1500))}catch(t){console.error(t),e.current&&(a({success:!1}),o({submit:t.message}),l(!1))}case 2:case"end":return s.stop()}}),s)})));return function(e,r){return s.apply(this,arguments)}}(),children:function(e){var r=e.errors,n=e.handleBlur,o=e.handleChange,c=e.handleSubmit,a=e.isSubmitting,l=e.touched,d=e.values;return(0,R.jsx)("form",{noValidate:!0,onSubmit:c,children:(0,R.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,R.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,R.jsxs)(t.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{htmlFor:"password-reset",children:"Password"}),(0,R.jsx)(x.Z,{fullWidth:!0,error:Boolean(l.password&&r.password),id:"password-reset",type:A?"text":"password",value:d.password,name:"password",onBlur:n,onChange:function(e){o(e),T(e.target.value)},endAdornment:(0,R.jsx)(m.Z,{position:"end",children:(0,R.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:I,onMouseDown:q,edge:"end",color:"secondary",children:A?(0,R.jsx)(S.Z,{}):(0,R.jsx)(C.Z,{})})}),placeholder:"Enter password"}),l.password&&r.password&&(0,R.jsx)(p.Z,{error:!0,id:"helper-text-password-reset",children:r.password})]}),(0,R.jsx)(f.Z,{fullWidth:!0,sx:{mt:2},children:(0,R.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,R.jsx)(s.ZP,{item:!0,children:(0,R.jsx)(Z.Z,{sx:{bgcolor:null===E||void 0===E?void 0:E.color,width:85,height:8,borderRadius:"7px"}})}),(0,R.jsx)(s.ZP,{item:!0,children:(0,R.jsx)(i.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===E||void 0===E?void 0:E.label})})]})})]}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsxs)(t.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{htmlFor:"confirm-password-reset",children:"Confirm Password"}),(0,R.jsx)(x.Z,{fullWidth:!0,error:Boolean(l.confirmPassword&&r.confirmPassword),id:"confirm-password-reset",type:"password",value:d.confirmPassword,name:"confirmPassword",onBlur:n,onChange:o,placeholder:"Enter confirm password"}),l.confirmPassword&&r.confirmPassword&&(0,R.jsx)(p.Z,{error:!0,id:"helper-text-confirm-password-reset",children:r.confirmPassword})]})}),r.submit&&(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(p.Z,{error:!0,children:r.submit})}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{children:(0,R.jsx)(w.Z,{disableElevation:!0,disabled:a,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Reset Password"})})})]})})}})},E=function(){return(0,R.jsx)(o.Z,{children:(0,R.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsxs)(t.Z,{sx:{mb:{xs:-.5,sm:.5}},spacing:1,children:[(0,R.jsx)(i.Z,{variant:"h3",children:"Reset Password"}),(0,R.jsx)(i.Z,{color:"secondary",children:"Please choose your new password"})]})}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(_,{})})]})})}},4796:function(e,r,n){n.d(r,{Z:function(){return g}});var s=n(7829),t=n(9019),i=n(4813),o=n(7825),c=n(2832),a=n(1113),l=n(891),d=n(6417),u=function(){var e=(0,i.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(o.Z,{maxWidth:"xl",children:(0,d.jsxs)(c.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(a.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(a.Z,{component:l.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(c.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},h=n(9876),x=n(1413),m=n(5987),p=n(9860),f=n(5729),Z=["children"],w=function(e){var r=e.children,n=(0,m.Z)(e,Z),t=(0,p.Z)();return(0,d.jsx)(f.Z,(0,x.Z)((0,x.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{border:!1,boxShadow:!0,shadow:t.customShadows.z1,children:(0,d.jsx)(s.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:r})}))},j=n(6287),L=function(){var e=(0,p.Z)();return(0,d.jsx)(s.Z,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0,transform:e.direction===j.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),(0,d.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),(0,d.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:e.palette.mode===j.hY.DARK?"0.9":"1"})]})})},g=function(e){var r=e.children;return(0,d.jsxs)(s.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(L,{}),(0,d.jsxs)(t.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(t.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(t.ZP,{item:!0,xs:12,children:(0,d.jsx)(t.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(t.ZP,{item:!0,children:(0,d.jsx)(w,{children:r})})})}),(0,d.jsx)(t.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})]})}},2419:function(e,r,n){n.d(r,{V:function(){return s},X:function(){return t}});var s=function(e){return e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"}},t=function(e){var r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(r+=1),r}}}]);