"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[100],{2889:function(e,n,r){var t=r(7313);n.Z=function(){var e=(0,t.useRef)(!0);return(0,t.useEffect)((function(){return function(){e.current=!1}}),[]),e}},5100:function(e,n,r){r.r(n),r.d(n,{default:function(){return ue}});var t=r(2135),a=r(9019),o=r(2832),i=r(1113),l=r(4285),s=r(4796),c=r(4165),d=r(5861),u=r(9439),m=r(7313),h=r(3306),p=r(7843),x=r(5480),Z=r(1727),v=r(4942),f=r(3366),b=r(7462),g=r(3061),j=r(1921),L=r(9008),w=r(1615),y=r(7592),k=r(7342),P=r(7430),C=r(2298);function S(e){return(0,C.Z)("MuiFormControlLabel",e)}var R=(0,P.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),F=r(300),B=r(6417),H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],M=(0,y.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,v.Z)({},"& .".concat(R.label),n.label),n.root,n["labelPlacement".concat((0,w.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,b.Z)((0,v.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(R.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,v.Z)({},"& .".concat(R.label),(0,v.Z)({},"&.".concat(R.disabled),{color:(n.vars||n).palette.text.disabled})))})),z=(0,y.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,v.Z)({},"&.".concat(R.error),{color:(n.vars||n).palette.error.main})})),I=m.forwardRef((function(e,n){var r,t,a=(0,k.Z)({props:e,name:"MuiFormControlLabel"}),o=a.className,l=a.componentsProps,s=void 0===l?{}:l,c=a.control,d=a.disabled,u=a.disableTypography,h=a.label,p=a.labelPlacement,x=void 0===p?"end":p,Z=a.required,v=a.slotProps,y=void 0===v?{}:v,P=(0,f.Z)(a,H),C=(0,L.Z)(),R=null!=(r=null!=d?d:c.props.disabled)?r:null==C?void 0:C.disabled,I=null!=Z?Z:c.props.required,q={disabled:R,required:I};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof c.props[e]&&"undefined"!==typeof a[e]&&(q[e]=a[e])}));var N=(0,F.Z)({props:a,muiFormControl:C,states:["error"]}),E=(0,b.Z)({},a,{disabled:R,labelPlacement:x,required:I,error:N.error}),_=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,a=e.error,o=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,w.Z)(t)),a&&"error",o&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,j.Z)(i,S,n)}(E),A=null!=(t=y.typography)?t:s.typography,D=h;return null==D||D.type===i.Z||u||(D=(0,B.jsx)(i.Z,(0,b.Z)({component:"span"},A,{className:(0,g.Z)(_.label,null==A?void 0:A.className),children:D}))),(0,B.jsxs)(M,(0,b.Z)({className:(0,g.Z)(_.root,o),ownerState:E,ref:n},P,{children:[m.cloneElement(c,q),D,I&&(0,B.jsxs)(z,{ownerState:E,"aria-hidden":!0,className:_.asterisk,children:["\u2009","*"]})]}))})),q=r(7551),N=r(522),E=r(8743);function _(e){return(0,C.Z)("PrivateSwitchBase",e)}(0,P.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var A=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],D=(0,y.ZP)(E.Z)((function(e){var n=e.ownerState;return(0,b.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),O=(0,y.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),T=m.forwardRef((function(e,n){var r=e.autoFocus,t=e.checked,a=e.checkedIcon,o=e.className,i=e.defaultChecked,l=e.disabled,s=e.disableFocusRipple,c=void 0!==s&&s,d=e.edge,m=void 0!==d&&d,h=e.icon,p=e.id,x=e.inputProps,Z=e.inputRef,v=e.name,y=e.onBlur,k=e.onChange,P=e.onFocus,C=e.readOnly,S=e.required,R=void 0!==S&&S,F=e.tabIndex,H=e.type,M=e.value,z=(0,f.Z)(e,A),I=(0,N.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),q=(0,u.Z)(I,2),E=q[0],T=q[1],V=(0,L.Z)(),W=l;V&&"undefined"===typeof W&&(W=V.disabled);var K="checkbox"===H||"radio"===H,G=(0,b.Z)({},e,{checked:E,disabled:W,disableFocusRipple:c,edge:m}),J=function(e){var n=e.classes,r=e.checked,t=e.disabled,a=e.edge,o={root:["root",r&&"checked",t&&"disabled",a&&"edge".concat((0,w.Z)(a))],input:["input"]};return(0,j.Z)(o,_,n)}(G);return(0,B.jsxs)(D,(0,b.Z)({component:"span",className:(0,g.Z)(J.root,o),centerRipple:!0,focusRipple:!c,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){y&&y(e),V&&V.onBlur&&V.onBlur(e)},ownerState:G,ref:n},z,{children:[(0,B.jsx)(O,(0,b.Z)({autoFocus:r,checked:t,defaultChecked:i,className:J.input,disabled:W,id:K?p:void 0,name:v,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;T(n),k&&k(e,n)}},readOnly:C,ref:Z,required:R,ownerState:G,tabIndex:F,type:H},"checkbox"===H&&void 0===M?{}:{value:M},x)),E?a:h]}))})),V=r(1171),W=(0,V.Z)((0,B.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),K=(0,V.Z)((0,B.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),G=(0,V.Z)((0,B.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function J(e){return(0,C.Z)("MuiCheckbox",e)}var U=(0,P.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),Y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Q=(0,y.ZP)(T,{shouldForwardProp:function(e){return(0,y.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.indeterminate&&n.indeterminate,"default"!==r.color&&n["color".concat((0,w.Z)(r.color))]]}})((function(e){var n,r=e.theme,t=e.ownerState;return(0,b.Z)({color:(r.vars||r).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===t.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,q.Fq)("default"===t.color?r.palette.action.active:r.palette[t.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,v.Z)(n,"&.".concat(U.checked,", &.").concat(U.indeterminate),{color:(r.vars||r).palette[t.color].main}),(0,v.Z)(n,"&.".concat(U.disabled),{color:(r.vars||r).palette.action.disabled}),n))})),X=(0,B.jsx)(K,{}),$=(0,B.jsx)(W,{}),ee=(0,B.jsx)(G,{}),ne=m.forwardRef((function(e,n){var r,t,a=(0,k.Z)({props:e,name:"MuiCheckbox"}),o=a.checkedIcon,i=void 0===o?X:o,l=a.color,s=void 0===l?"primary":l,c=a.icon,d=void 0===c?$:c,u=a.indeterminate,h=void 0!==u&&u,p=a.indeterminateIcon,x=void 0===p?ee:p,Z=a.inputProps,v=a.size,L=void 0===v?"medium":v,y=a.className,P=(0,f.Z)(a,Y),C=h?x:d,S=h?x:i,R=(0,b.Z)({},a,{color:s,indeterminate:h,size:L}),F=function(e){var n=e.classes,r=e.indeterminate,t=e.color,a={root:["root",r&&"indeterminate","color".concat((0,w.Z)(t))]},o=(0,j.Z)(a,J,n);return(0,b.Z)({},n,o)}(R);return(0,B.jsx)(Q,(0,b.Z)({type:"checkbox",inputProps:(0,b.Z)({"data-indeterminate":h},Z),icon:m.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:L}),checkedIcon:m.cloneElement(S,{fontSize:null!=(t=S.props.fontSize)?t:L}),ownerState:R,ref:n,className:(0,g.Z)(F.root,y)},P,{classes:F}))})),re=r(9099),te=r(1933),ae=r(5604),oe=r(2889),ie=r(4044),le=r(1404),se=r(1741),ce=r(4874),de=function(){var e=m.useState(!1),n=(0,u.Z)(e,2),r=n[0],t=n[1],s=(0,l.Z)().login,v=(0,oe.Z)(),f=m.useState(!1),b=(0,u.Z)(f,2),g=b[0],j=b[1],L=function(){j(!g)},w=function(e){e.preventDefault()};return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(ae.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:te.Ry().shape({email:te.Z_().email("Must be a valid email").max(255).required("Email is required"),password:te.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,d.Z)((0,c.Z)().mark((function e(n,r){var t,a,o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.setErrors,a=r.setStatus,o=r.setSubmitting,e.prev=1,e.next=4,s(n.email,n.password);case 4:v.current&&(a({success:!0}),o(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),v.current&&(a({success:!1}),t({submit:e.t0.message}),o(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,l=e.handleBlur,s=e.handleChange,c=e.handleSubmit,d=e.isSubmitting,u=e.touched,m=e.values;return(0,B.jsx)("form",{noValidate:!0,onSubmit:c,children:(0,B.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(o.Z,{spacing:1,children:[(0,B.jsx)(h.Z,{htmlFor:"email-login",children:"Email Address"}),(0,B.jsx)(p.Z,{id:"email-login",type:"email",value:m.email,name:"email",onBlur:l,onChange:s,placeholder:"Enter email address",fullWidth:!0,error:Boolean(u.email&&n.email)}),u.email&&n.email&&(0,B.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(o.Z,{spacing:1,children:[(0,B.jsx)(h.Z,{htmlFor:"password-login",children:"Password"}),(0,B.jsx)(p.Z,{fullWidth:!0,error:Boolean(u.password&&n.password),id:"-password-login",type:g?"text":"password",value:m.password,name:"password",onBlur:l,onChange:s,endAdornment:(0,B.jsx)(Z.Z,{position:"end",children:(0,B.jsx)(ie.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:w,edge:"end",color:"secondary",children:g?(0,B.jsx)(se.Z,{}):(0,B.jsx)(ce.Z,{})})}),placeholder:"Enter password"}),u.password&&n.password&&(0,B.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,B.jsx)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,B.jsx)(I,{control:(0,B.jsx)(ne,{checked:r,onChange:function(e){return t(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,B.jsx)(i.Z,{variant:"h6",children:"Keep me sign in"})})})}),n.submit&&(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(x.Z,{error:!0,children:n.submit})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(le.Z,{children:(0,B.jsx)(re.Z,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},ue=function(){var e=(0,l.Z)().isLoggedIn;return(0,B.jsx)(s.Z,{children:(0,B.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,B.jsx)(i.Z,{variant:"h3",children:"Login"}),(0,B.jsx)(i.Z,{component:t.rU,to:e?"/auth/register":"/maintenance/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(de,{})})]})})}},4796:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(7829),a=r(9019),o=r(4813),i=r(7825),l=r(2832),s=r(1113),c=r(891),d=r(6417),u=function(){var e=(0,o.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(i.Z,{maxWidth:"xl",children:(0,d.jsxs)(l.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(s.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(s.Z,{component:c.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(l.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(s.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(s.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(s.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},m=r(9876),h=r(1413),p=r(5987),x=r(9860),Z=r(5729),v=["children"],f=function(e){var n=e.children,r=(0,p.Z)(e,v),a=(0,x.Z)();return(0,d.jsx)(Z.Z,(0,h.Z)((0,h.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:a.customShadows.z1,children:(0,d.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},b=r(6287),g=function(){var e=(0,x.Z)();return(0,d.jsx)(t.Z,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0,transform:e.direction===b.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),(0,d.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),(0,d.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:e.palette.mode===b.hY.DARK?"0.9":"1"})]})})},j=function(e){var n=e.children;return(0,d.jsxs)(t.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(g,{}),(0,d.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(a.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(m.Z,{})}),(0,d.jsx)(a.ZP,{item:!0,xs:12,children:(0,d.jsx)(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(a.ZP,{item:!0,children:(0,d.jsx)(f,{children:n})})})}),(0,d.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})]})}}}]);