import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-CqJgnuY1.js";import{S as Fn,a as Hn}from"./WarningDiamondFillIcon-CH4oXtHr.js";import{p as cn,w as Gn,e as Vn,s as qn,g as An}from"./palette-ClGEQNft.js";import{R as ln}from"./index-yVdndg_v.js";import"./Logo-C43NXEWk.js";import"./ArrowLeftIcon-DwE_M1nb.js";import"./ArrowRightIcon-DVg4GJgX.js";import"./WarningCircleIcon-_nYjaMga.js";import"./CaretLeftBoldIcon-8vCR-VzV.js";import"./CaretDownFill-C4ZppdEY.js";import"./CaretLeftIcon-Do3bT2Dg.js";import"./CaretRightBoldIcon-buCNQJTx.js";import"./CheckBoldIcon-CPdBJU94.js";import{C as Kn}from"./CheckCircleFillIcon-CTO4S3o5.js";import"./CheckIcon-BYN_oJfM.js";import"./CheckUncheckedBoldIcon-f_XzfW1Z.js";import"./DotCircleFilledIcon-f7T89HoM.js";import"./ExpandChevronsIcon-BLL4v97i.js";import{I as Xn}from"./InfoFillIcon-82wzIcgI.js";import"./MagnifyingGlassIcon-CvJIVmT5.js";import"./MinusBoldIcon-CouS3WBQ.js";import"./PencilSimpleLineIcon-D_SX4Jus.js";import"./PlusBoldIcon-hdzZN4ky.js";import"./QuestionFillIcon-CCBUQk9G.js";import"./QuestionIcon-Bk-1Xtgi.js";import"./UploadSimpleIcon-Bc_SdJkb.js";import{W as Qn}from"./WarningFillIcon-Czvvjkzt.js";import{X as Zn}from"./XCircleFillIcon-DJb_Yzyu.js";import{u as an}from"./useTheme-DMf7ls7Q.js";import{u as Yn}from"./useTranslation-5b1lrk9S.js";import{u as Jn}from"./useMediaQuery-BtGG8NJu.js";import{_ as Y,a as k,d as ne,h as J}from"./createTheme-ClYpPn9r.js";import{u as ee}from"./useTimeout-DgQ6HlaJ.js";import{u as te,b as un}from"./TransitionGroupContext-BmD4SPXa.js";import{e as mn}from"./resolveComponentProps-US7Z0XfO.js";import{g as Mn,a as _n,c as oe}from"./generateUtilityClasses-B2ID6taa.js";import{u as Tn}from"./DefaultPropsProvider-DlaphqLI.js";import{G as ae}from"./Grow-DiKKjQ7w.js";import{u as se}from"./useSlotProps-EPMkVf0n.js";import{C as re}from"./ClickAwayListener-BRtpOMW0.js";import{s as nn}from"./styled-wPX_n2pi.js";import{c as zn}from"./composeClasses-fLhin0tj.js";import{P as ie}from"./Paper-BJpnW-nv.js";import{T as ce,r as Ae,g as dn}from"./utils-lKY8cqOr.js";import{d as le}from"./debounce-Be36O1Ab.js";import{o as jn}from"./ownerWindow-HkKU3E4x.js";import{B as y}from"./Box-CscsmZ--.js";import{T as ue}from"./Typography-KNMXKf19.js";import{B as j}from"./Button-DxCJAxdE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./index-1ow-vv9Z.js";import"./CaretLeft.es-CdHrrt0k.js";import"./Question.es-oxN6L22G.js";import"./defaultTheme-Ca0qI0zY.js";import"./useTheme-CmrYzTbF.js";import"./getThemeProps-DrzoWQ6J.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./ButtonBase-D81Lsw8O.js";import"./useIsFocusVisible-DPtOLna9.js";const me=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function de(n,t,a){const o=t.getBoundingClientRect(),s=a&&a.getBoundingClientRect(),i=jn(t);let c;if(t.fakeTransform)c=t.fakeTransform;else{const p=i.getComputedStyle(t);c=p.getPropertyValue("-webkit-transform")||p.getPropertyValue("transform")}let g=0,f=0;if(c&&c!=="none"&&typeof c=="string"){const p=c.split("(")[1].split(")")[0].split(",");g=parseInt(p[4],10),f=parseInt(p[5],10)}return n==="left"?s?`translateX(${s.right+g-o.left}px)`:`translateX(${i.innerWidth+g-o.left}px)`:n==="right"?s?`translateX(-${o.right-s.left-g}px)`:`translateX(-${o.left+o.width-g}px)`:n==="up"?s?`translateY(${s.bottom+f-o.top}px)`:`translateY(${i.innerHeight+f-o.top}px)`:s?`translateY(-${o.top-s.top+o.height-f}px)`:`translateY(-${o.top+o.height-f}px)`}function pe(n){return typeof n=="function"?n():n}function G(n,t,a){const o=pe(a),s=de(n,t,o);s&&(t.style.webkitTransform=s,t.style.transform=s)}const Ce=d.forwardRef(function(t,a){const o=an(),s={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:c,appear:g=!0,children:f,container:p,direction:C="down",easing:v=s,in:x,onEnter:E,onEntered:I,onEntering:R,onExit:B,onExited:m,onExiting:A,style:b,timeout:P=i,TransitionComponent:T=ce}=t,z=Y(t,me),h=d.useRef(null),D=te(f.ref,h,a),w=l=>S=>{l&&(S===void 0?l(h.current):l(h.current,S))},L=w((l,S)=>{G(C,l,p),Ae(l),E&&E(l,S)}),U=w((l,S)=>{const rn=dn({timeout:P,style:b,easing:v},{mode:"enter"});l.style.webkitTransition=o.transitions.create("-webkit-transform",k({},rn)),l.style.transition=o.transitions.create("transform",k({},rn)),l.style.webkitTransform="none",l.style.transform="none",R&&R(l,S)}),M=w(I),O=w(A),W=w(l=>{const S=dn({timeout:P,style:b,easing:v},{mode:"exit"});l.style.webkitTransition=o.transitions.create("-webkit-transform",S),l.style.transition=o.transitions.create("transform",S),G(C,l,p),B&&B(l)}),en=w(l=>{l.style.webkitTransition="",l.style.transition="",m&&m(l)}),N=l=>{c&&c(h.current,l)},H=d.useCallback(()=>{h.current&&G(C,h.current,p)},[C,p]);return d.useEffect(()=>{if(x||C==="down"||C==="right")return;const l=le(()=>{h.current&&G(C,h.current,p)}),S=jn(h.current);return S.addEventListener("resize",l),()=>{l.clear(),S.removeEventListener("resize",l)}},[C,x,p]),d.useEffect(()=>{x||H()},[x,H]),r.jsx(T,k({nodeRef:h,onEnter:L,onEntered:M,onEntering:U,onExit:W,onExited:en,onExiting:O,addEndListener:N,appear:g,in:x,timeout:P},z,{children:(l,S)=>d.cloneElement(f,k({ref:D,style:k({visibility:l==="exited"&&!x?"hidden":void 0},b,f.props.style)},S))}))});function fe(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:a=!1,onClose:o,open:s,resumeHideDuration:i}=n,c=ee();d.useEffect(()=>{if(!s)return;function m(A){A.defaultPrevented||(A.key==="Escape"||A.key==="Esc")&&(o==null||o(A,"escapeKeyDown"))}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[s,o]);const g=un((m,A)=>{o==null||o(m,A)}),f=un(m=>{!o||m==null||c.start(m,()=>{g(null,"timeout")})});d.useEffect(()=>(s&&f(t),c.clear),[s,t,f,c]);const p=m=>{o==null||o(m,"clickaway")},C=c.clear,v=d.useCallback(()=>{t!=null&&f(i??t*.5)},[t,i,f]),x=m=>A=>{const b=m.onBlur;b==null||b(A),v()},E=m=>A=>{const b=m.onFocus;b==null||b(A),C()},I=m=>A=>{const b=m.onMouseEnter;b==null||b(A),C()},R=m=>A=>{const b=m.onMouseLeave;b==null||b(A),v()};return d.useEffect(()=>{if(!a&&s)return window.addEventListener("focus",v),window.addEventListener("blur",C),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",C)}},[a,s,v,C]),{getRootProps:(m={})=>{const A=k({},mn(n),mn(m));return k({role:"presentation"},m,A,{onBlur:x(A),onFocus:E(A),onMouseEnter:I(A),onMouseLeave:R(A)})},onClickAway:p}}function be(n){return Mn("MuiSnackbarContent",n)}_n("MuiSnackbarContent",["root","message","action"]);const ge=["action","className","message","role"],he=n=>{const{classes:t}=n;return zn({root:["root"],action:["action"],message:["message"]},be,t)},ke=nn(ie,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,t)=>t.root})(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98,a=ne.emphasize(n.palette.background.default,t);return k({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(a),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Se=nn("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,t)=>t.message})({padding:"8px 0"}),ve=nn("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),xe=d.forwardRef(function(t,a){const o=Tn({props:t,name:"MuiSnackbarContent"}),{action:s,className:i,message:c,role:g="alert"}=o,f=Y(o,ge),p=o,C=he(p);return r.jsxs(ke,k({role:g,square:!0,elevation:6,className:oe(C.root,i),ownerState:p,ref:a},f,{children:[r.jsx(Se,{className:C.message,ownerState:p,children:c}),s?r.jsx(ve,{className:C.action,ownerState:p,children:s}):null]}))});function we(n){return Mn("MuiSnackbar",n)}_n("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ye=["onEnter","onExited"],Ee=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Be=n=>{const{classes:t,anchorOrigin:a}=n,o={root:["root",`anchorOrigin${J(a.vertical)}${J(a.horizontal)}`]};return zn(o,we,t)},pn=nn("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n;return[t.root,t[`anchorOrigin${J(a.anchorOrigin.vertical)}${J(a.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:t})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return k({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:k({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&a,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Oe=d.forwardRef(function(t,a){const o=Tn({props:t,name:"MuiSnackbar"}),s=an(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:g,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:C,className:v,ClickAwayListenerProps:x,ContentProps:E,disableWindowBlurListener:I=!1,message:R,open:B,TransitionComponent:m=ae,transitionDuration:A=i,TransitionProps:{onEnter:b,onExited:P}={}}=o,T=Y(o.TransitionProps,ye),z=Y(o,Ee),h=k({},o,{anchorOrigin:{vertical:g,horizontal:f},autoHideDuration:p,disableWindowBlurListener:I,TransitionComponent:m,transitionDuration:A}),D=Be(h),{getRootProps:w,onClickAway:L}=fe(k({},h)),[U,M]=d.useState(!0),O=se({elementType:pn,getSlotProps:w,externalForwardedProps:z,ownerState:h,additionalProps:{ref:a},className:[D.root,v]}),W=N=>{M(!0),P&&P(N)},en=(N,H)=>{M(!1),b&&b(N,H)};return!B&&U?null:r.jsx(re,k({onClickAway:L},x,{children:r.jsx(pn,k({},O,{children:r.jsx(m,k({appear:!0,in:B,timeout:A,direction:g==="top"?"down":"up",onEnter:en,onExited:W},T,{children:C||r.jsx(xe,k({message:R,action:c},E))}))}))}))});function Un(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",t="54de28f7f05cf4061324d9bd4a3d21288bd31886",a=window,o="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,mBAAmB;AAC1B,OAAO,oBAAoB;AAC3B,OAAO,yBAAyB;AAChC,OAAO,iBAAiB;AACxB,OAAO,uBAAuB;AAC9B,OAAO,6BAA6B;AACpC,OAAO,8BAA8B;AACrC,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,mBAAmB;AAC1B,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,wBAAwB;AAC/B,OAAO,mBAAmB;AAC1B,OAAO,yBAAyB;AAChC,OAAO,eAAe;AACtB,OAAO,4BAA4B;AACnC,OAAO,sBAAsB;AAC7B,OAAO,eAAe;AACtB,OAAO,0BAA0B;AACjC,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,wBAAwB;AAC/B,OAAO,kBAAkB;AACzB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,0BAA0B;AACjC,OAAO,kBAAkB;AACzB,OAAO,sBAAsB;AAC7B,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AACxB,OAAO,wBAAwB;AAC/B,OAAO,sBAAsB;AAC7B,OAAO,uBAAuB;AAC9B,OAAO,4BAA4B;AACnC,OAAO,qBAAqB;AAC5B,OAAO,qBAAqB;AAE5B;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"54de28f7f05cf4061324d9bd4a3d21288bd31886"},i=a[o]||(a[o]={});(!i[n]||i[n].hash!==t)&&(i[n]=s);var c=i[n];return Un=function(){return c},c}Un();function _(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",t="1584a1afae5323ab5d49d34f82038f14fc549668",a=window,o="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:36},end:{line:14,column:1}},3:{start:{line:15,column:27},end:{line:46,column:1}},4:{start:{line:47,column:26},end:{line:58,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,uBAAqD;AAAA,EAChE,UAAU;AAAA,EACV,SAAS;AACX;AAEO,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1584a1afae5323ab5d49d34f82038f14fc549668"},i=a[o]||(a[o]={});(!i[n]||i[n].hash!==t)&&(i[n]=s);var c=i[n];return _=function(){return c},c}_();const Ie=(_().s[0]++,1e4),Cn=(_().s[1]++,{width:18,height:20}),Re=(_().s[2]++,{standard:120,compact:60}),sn=(_().s[3]++,{success:{icon:Kn,color:qn[400],severity:"success",ariaLive:"polite"},error:{icon:Zn,color:Vn[400],severity:"error",ariaLive:"assertive"},warning:{icon:Qn,color:Gn[400],severity:"warning",ariaLive:"polite"},info:{icon:Xn,color:cn[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Fn,color:cn[400],severity:"info",ariaLive:"assertive"}}),tn=(_().s[4]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function e(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",t="a61c3cef3daf74cbbde7c752a7a1ebe6487589f0",a=window,o="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:35,column:16},end:{line:35,column:26}},1:{start:{line:36,column:16},end:{line:36,column:39}},2:{start:{line:37,column:42},end:{line:37,column:74}},3:{start:{line:38,column:34},end:{line:38,column:49}},4:{start:{line:39,column:18},end:{line:39,column:64}},5:{start:{line:40,column:2},end:{line:44,column:23}},6:{start:{line:41,column:4},end:{line:43,column:5}},7:{start:{line:42,column:6},end:{line:42,column:38}},8:{start:{line:45,column:17},end:{line:45,column:35}},9:{start:{line:46,column:20},end:{line:46,column:31}},10:{start:{line:47,column:21},end:{line:47,column:40}},11:{start:{line:48,column:20},end:{line:48,column:46}},12:{start:{line:49,column:27},end:{line:49,column:101}},13:{start:{line:50,column:18},end:{line:50,column:30}},14:{start:{line:51,column:40},end:{line:51,column:55}},15:{start:{line:52,column:2},end:{line:57,column:25}},16:{start:{line:53,column:15},end:{line:53,column:30}},17:{start:{line:54,column:4},end:{line:54,column:20}},18:{start:{line:54,column:13},end:{line:54,column:20}},19:{start:{line:55,column:29},end:{line:55,column:72}},20:{start:{line:56,column:4},end:{line:56,column:59}},21:{start:{line:58,column:22},end:{line:61,column:3}},22:{start:{line:59,column:4},end:{line:59,column:27}},23:{start:{line:60,column:4},end:{line:60,column:16}},24:{start:{line:62,column:23},end:{line:65,column:3}},25:{start:{line:63,column:4},end:{line:63,column:17}},26:{start:{line:64,column:4},end:{line:64,column:39}},27:{start:{line:64,column:25},end:{line:64,column:39}},28:{start:{line:66,column:31},end:{line:66,column:80}},29:{start:{line:67,column:2},end:{line:176,column:4}},30:{start:{line:74,column:26},end:{line:74,column:43}},31:{start:{line:75,column:26},end:{line:75,column:44}},32:{start:{line:76,column:24},end:{line:76,column:59}},33:{start:{line:179,column:0},end:{line:185,column:50}},34:{start:{line:181,column:4},end:{line:181,column:48}},35:{start:{line:183,column:4},end:{line:183,column:1767}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:22,column:9},end:{line:22,column:22}},loc:{start:{line:34,column:3},end:{line:177,column:1}},line:34},1:{name:"(anonymous_1)",decl:{start:{line:40,column:12},end:{line:40,column:13}},loc:{start:{line:40,column:18},end:{line:44,column:3}},line:40},2:{name:"(anonymous_2)",decl:{start:{line:52,column:18},end:{line:52,column:19}},loc:{start:{line:52,column:24},end:{line:57,column:3}},line:52},3:{name:"(anonymous_3)",decl:{start:{line:58,column:22},end:{line:58,column:23}},loc:{start:{line:58,column:28},end:{line:61,column:3}},line:58},4:{name:"(anonymous_4)",decl:{start:{line:62,column:23},end:{line:62,column:24}},loc:{start:{line:62,column:29},end:{line:65,column:3}},line:62},5:{name:"(anonymous_5)",decl:{start:{line:74,column:20},end:{line:74,column:21}},loc:{start:{line:74,column:26},end:{line:74,column:43}},line:74},6:{name:"(anonymous_6)",decl:{start:{line:75,column:20},end:{line:75,column:21}},loc:{start:{line:75,column:26},end:{line:75,column:44}},line:75},7:{name:"(anonymous_7)",decl:{start:{line:76,column:17},end:{line:76,column:18}},loc:{start:{line:76,column:24},end:{line:76,column:59}},line:76}},branchMap:{0:{loc:{start:{line:24,column:2},end:{line:24,column:19}},type:"default-arg",locations:[{start:{line:24,column:9},end:{line:24,column:19}}],line:24},1:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:20},end:{line:28,column:24}}],line:28},2:{loc:{start:{line:31,column:2},end:{line:31,column:30}},type:"default-arg",locations:[{start:{line:31,column:13},end:{line:31,column:30}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:18}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:18}}],line:33},4:{loc:{start:{line:37,column:51},end:{line:37,column:73}},type:"binary-expr",locations:[{start:{line:37,column:51},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:73}}],line:37},5:{loc:{start:{line:39,column:18},end:{line:39,column:64}},type:"binary-expr",locations:[{start:{line:39,column:18},end:{line:39,column:35}},{start:{line:39,column:39},end:{line:39,column:64}}],line:39},6:{loc:{start:{line:41,column:4},end:{line:43,column:5}},type:"if",locations:[{start:{line:41,column:4},end:{line:43,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},7:{loc:{start:{line:49,column:27},end:{line:49,column:101}},type:"cond-expr",locations:[{start:{line:49,column:56},end:{line:49,column:91}},{start:{line:49,column:94},end:{line:49,column:101}}],line:49},8:{loc:{start:{line:54,column:4},end:{line:54,column:20}},type:"if",locations:[{start:{line:54,column:4},end:{line:54,column:20}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:54},9:{loc:{start:{line:64,column:4},end:{line:64,column:39}},type:"if",locations:[{start:{line:64,column:4},end:{line:64,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:64},10:{loc:{start:{line:71,column:24},end:{line:71,column:61}},type:"cond-expr",locations:[{start:{line:71,column:46},end:{line:71,column:50}},{start:{line:71,column:53},end:{line:71,column:61}}],line:71},11:{loc:{start:{line:71,column:24},end:{line:71,column:43}},type:"binary-expr",locations:[{start:{line:71,column:24},end:{line:71,column:31}},{start:{line:71,column:35},end:{line:71,column:43}}],line:71},12:{loc:{start:{line:76,column:24},end:{line:76,column:59}},type:"binary-expr",locations:[{start:{line:76,column:24},end:{line:76,column:42}},{start:{line:76,column:46},end:{line:76,column:59}}],line:76},13:{loc:{start:{line:78,column:26},end:{line:78,column:79}},type:"cond-expr",locations:[{start:{line:78,column:49},end:{line:78,column:70}},{start:{line:78,column:73},end:{line:78,column:79}}],line:78},14:{loc:{start:{line:80,column:20},end:{line:80,column:89}},type:"cond-expr",locations:[{start:{line:80,column:43},end:{line:80,column:49}},{start:{line:80,column:52},end:{line:80,column:89}}],line:80},15:{loc:{start:{line:85,column:16},end:{line:85,column:68}},type:"cond-expr",locations:[{start:{line:85,column:50},end:{line:85,column:57}},{start:{line:85,column:60},end:{line:85,column:68}}],line:85},16:{loc:{start:{line:90,column:24},end:{line:90,column:61}},type:"cond-expr",locations:[{start:{line:90,column:38},end:{line:90,column:50}},{start:{line:90,column:53},end:{line:90,column:61}}],line:90},17:{loc:{start:{line:98,column:21},end:{line:98,column:41}},type:"cond-expr",locations:[{start:{line:98,column:36},end:{line:98,column:37}},{start:{line:98,column:40},end:{line:98,column:41}}],line:98},18:{loc:{start:{line:108,column:30},end:{line:108,column:67}},type:"cond-expr",locations:[{start:{line:108,column:44},end:{line:108,column:56}},{start:{line:108,column:59},end:{line:108,column:67}}],line:108},19:{loc:{start:{line:110,column:22},end:{line:110,column:45}},type:"cond-expr",locations:[{start:{line:110,column:36},end:{line:110,column:41}},{start:{line:110,column:44},end:{line:110,column:45}}],line:110},20:{loc:{start:{line:132,column:14},end:{line:146,column:15}},type:"binary-expr",locations:[{start:{line:132,column:14},end:{line:132,column:22}},{start:{line:132,column:26},end:{line:132,column:36}},{start:{line:132,column:56},end:{line:146,column:15}}],line:132},21:{loc:{start:{line:147,column:14},end:{line:170,column:15}},type:"binary-expr",locations:[{start:{line:147,column:14},end:{line:147,column:23}},{start:{line:147,column:43},end:{line:170,column:15}}],line:147}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0,0],21:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"AAyIU;AAzIV;AAAA;AACE;AACY;AACZ;AACA;AACA;AACA;AAEF;AACA;AAEA;AACA;AAEA;AACA;AAAA;AACE;AACA;AACA;AACA;AACA;AAkBF;AAAuB;AACrB;AACO;AACP;AACA;AACA;AACkB;AAClB;AACM;AACK;AACF;AAEX;AACE;AACA;AACA;AACA;AACA;AAEA;AACE;AACE;AAA8B;AAChC;AAGF;AACA;AACA;AACA;AACA;AAGA;AACA;AACA;AACE;AACA;AACA;AACA;AAAqD;AAGvD;AACE;AACA;AAAU;AAGZ;AACE;AACA;AAAiC;AAGnC;AAEA;AACE;AAAC;AAAA;AACO;AACyC;AACtC;AACgD;AACrB;AACC;AACe;AAC/B;AAC8C;AAC/D;AAC0C;AAC9C;AAEA;AAAC;AAAA;AACmD;AAChC;AACN;AACR;AACO;AACgC;AACrB;AACY;AACQ;AACb;AACX;AACF;AACY;AACE;AAChB;AACd;AAEA;AAAA;AAAC;AAAA;AACK;AACU;AACH;AACgC;AACzB;AACU;AACjB;AAC2B;AACE;AACtC;AACF;AAEgD;AAAA;AAClD;AACA;AAAC;AAAA;AACM;AACG;AACJ;AACI;AACI;AACZ;AAEC;AAAA;AACH;AAEG;AACC;AAAC;AAAA;AACM;AACG;AACF;AACG;AACL;AACa;AACL;AACE;AACd;AAEC;AAAA;AACH;AAGA;AAAC;AAAA;AACS;AACF;AACG;AACL;AACQ;AACkB;AACnB;AACG;AACI;AACT;AACC;AACI;AACH;AACA;AACC;AACV;AACF;AACmD;AAExC;AAAA;AACb;AAEJ;AAAA;AAAA;AACF;AAAA;AAGN;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a61c3cef3daf74cbbde7c752a7a1ebe6487589f0"},i=a[o]||(a[o]={});(!i[n]||i[n].hash!==t)&&(i[n]=s);var c=i[n];return e=function(){return c},c}e();function $({state:n,size:t=(e().b[0][0]++,"standard"),message:a,onClose:o,onAction:s,dismissOnAction:i=(e().b[1][0]++,!0),actionLabel:c,open:g,duration:f=(e().b[2][0]++,Ie),persist:p,showClose:C=(e().b[3][0]++,!0)}){e().f[0]++;const v=(e().s[0]++,an()),{t:x}=(e().s[1]++,Yn("input")),[E,I]=(e().s[2]++,d.useState((e().b[4][0]++,g??(e().b[4][1]++,!0)))),[R,B]=(e().s[3]++,d.useState(!1)),m=(e().s[4]++,e().b[5][0]++,p??(e().b[5][1]++,n==="action-needed"));e().s[5]++,d.useEffect(()=>{e().f[1]++,e().s[6]++,g!==void 0?(e().b[6][0]++,e().s[7]++,I(g)):e().b[6][1]++},[g]);const A=(e().s[8]++,sn[n]),b=(e().s[9]++,A.icon),P=(e().s[10]++,t==="standard"),T=(e().s[11]++,Re[t]),z=(e().s[12]++,a.length>T?(e().b[7][0]++,`${a.slice(0,T)}...`):(e().b[7][1]++,a)),h=(e().s[13]++,d.useRef(null)),[D,w]=(e().s[14]++,d.useState(!1));e().s[15]++,d.useLayoutEffect(()=>{e().f[2]++;const O=(e().s[16]++,h.current);if(e().s[17]++,O)e().b[8][1]++;else{e().b[8][0]++,e().s[18]++;return}const W=(e().s[19]++,parseFloat(getComputedStyle(O).lineHeight));e().s[20]++,w(O.clientHeight>W+4)},[z]),e().s[21]++;const L=()=>{e().f[3]++,e().s[22]++,I(!1),e().s[23]++,o==null||o()};e().s[24]++;const U=()=>{e().f[4]++,e().s[25]++,s==null||s(),e().s[26]++,i?(e().b[9][0]++,e().s[27]++,L()):e().b[9][1]++},M=(e().s[28]++,Jn("(prefers-reduced-motion: reduce)"));return e().s[29]++,r.jsx(Oe,{open:E,autoHideDuration:(e().b[11][0]++,m||(e().b[11][1]++,R)?(e().b[10][0]++,null):(e().b[10][1]++,f)),onClose:L,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(e().f[5]++,e().s[30]++,B(!0)),onMouseLeave:()=>(e().f[6]++,e().s[31]++,B(!1)),onKeyDown:O=>(e().f[7]++,e().s[32]++,e().b[12][0]++,O.key==="Escape"&&(e().b[12][1]++,L())),TransitionComponent:Ce,transitionDuration:M?(e().b[13][0]++,{enter:0,exit:0}):(e().b[13][1]++,void 0),sx:{transition:M?(e().b[14][0]++,"none"):(e().b[14][1]++,"bottom 150ms ease-in-out !important")},children:r.jsxs(y,{role:A.ariaLive==="assertive"?(e().b[15][0]++,"alert"):(e().b[15][1]++,"status"),"aria-live":A.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:D?(e().b[16][0]++,"flex-start"):(e().b[16][1]++,"center"),gap:v.spacing(1),width:`${tn[t].width}px`,maxHeight:`${tn[t].maxHeight}px`,backgroundColor:An[900],color:An[50],borderRadius:"8px",padding:tn[t].padding,opacity:E?(e().b[17][0]++,1):(e().b[17][1]++,0),transition:"opacity 200ms ease-out"},children:[r.jsx(y,{sx:{flexShrink:0,display:"flex",alignItems:D?(e().b[18][0]++,"flex-start"):(e().b[18][1]++,"center"),justifyContent:"center",pt:D?(e().b[19][0]++,"2px"):(e().b[19][1]++,0),"& svg":{width:`${Cn.width}px !important`,height:`${Cn.height}px !important`}},children:r.jsx(b,{fillColor:A.color,"aria-hidden":!0})}),r.jsx(ue,{ref:h,variant:"body2",sx:{flex:1,minWidth:0},children:z}),r.jsxs(y,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(e().b[20][0]++,s&&(e().b[20][1]++,P)&&(e().b[20][2]++,r.jsx(ln,{size:"small",variant:"outlined",color:"light",onClick:U,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:c}))),(e().b[21][0]++,C&&(e().b[21][1]++,r.jsx(ln,{variant:"outlined",color:"ghost",onClick:L,sx:{minWidth:"auto",padding:v.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":x("components.RcSesSnackbar.aria.close"),children:r.jsx(Hn,{})})))]})]})})}e().s[33]++;try{e().s[34]++,$.displayName="RcSesSnackbar",e().s[35]++,$.__docgenInfo={description:"",displayName:"RcSesSnackbar",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"action-needed"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},size:{defaultValue:{value:"standard"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void)"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},description:"",name:"dismissOnAction",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},description:"",name:"duration",required:!1,type:{name:"number"}},persist:{defaultValue:null,description:"",name:"persist",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"",name:"showClose",required:!1,type:{name:"boolean"}}}}}catch{}function u(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",t="962c6c40b462151bff06e2ad9eb68f5bba4e766c",a=window,o="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:57,column:50}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:116}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI;AAhDJ;AAAA;AAEE;AACA;AACA;AACA;AACA;AAGF;AAoBA;AAEO;AACL;AAEA;AACE;AAAkB;AAGpB;AACE;AAAgB;AAGlB;AAAc;AACwB;AACT;AAG7B;AAEK;AAAA;AAEC;AAAC;AAAA;AACiB;AACE;AACH;AACI;AACG;AACH;AACD;AACQ;AACO;AACxB;AACL;AAAA;AACN;AAIR;AAEO;AACL;AACA;AACE;AAAuE;AAEzE;AACF;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"962c6c40b462151bff06e2ad9eb68f5bba4e766c"},i=a[o]||(a[o]={});(!i[n]||i[n].hash!==t)&&(i[n]=s);var c=i[n];return u=function(){return c},c}u();const Wn=(u().s[0]++,d.createContext(void 0));function on({children:n}){u().f[0]++;const[t,a]=(u().s[1]++,d.useState(null)),o=(u().s[2]++,d.useCallback(c=>{u().f[1]++,u().s[3]++,a(c)},[])),s=(u().s[4]++,d.useCallback(()=>{u().f[2]++,u().s[5]++,a(null)},[])),i=(u().s[6]++,d.useMemo(()=>(u().f[3]++,u().s[7]++,{showSnackbar:o,hideSnackbar:s}),[o,s]));return u().s[8]++,r.jsxs(Wn.Provider,{value:i,children:[n,(u().b[0][0]++,t&&(u().b[0][1]++,r.jsx($,{state:t.state,message:t.message,size:t.size,onAction:t.onAction,actionLabel:t.actionLabel,duration:t.duration,persist:t.persist,dismissOnAction:t.dismissOnAction,showClose:(u().b[1][0]++,t.showClose??(u().b[1][1]++,!0)),onClose:s,open:!0})))]})}function F(){u().f[4]++;const n=(u().s[9]++,d.useContext(Wn));if(u().s[10]++,n)u().b[2][1]++;else throw u().b[2][0]++,u().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return u().s[12]++,n}u().s[13]++;try{u().s[14]++,on.displayName="RcSesSnackbarProvider",u().s[15]++,on.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",props:{}}}catch{}const Nn=n=>{if(n==="error")return"error";if(n==="warning")return"warning";if(n==="info")return"info"},$n=n=>n.charAt(0).toUpperCase()+n.slice(1).replace("-"," "),Xt={title:"components/feedback/Snackbar",component:$,tags:["autodocs"],decorators:[n=>r.jsx(on,{children:r.jsx(y,{sx:{p:4,pb:16,minHeight:"300px"},children:r.jsx(n,{})})})]},Pe=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],Le=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],V={render:n=>r.jsx(y,{sx:{pb:12},children:r.jsx($,{...n},`${n.state}-${n.message}-${n.size}-${n.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function De(){const{showSnackbar:n}=F();return r.jsx(y,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:Pe.map(({state:t,message:a})=>{const o=sn[t].icon;return r.jsxs(j,{variant:"contained",color:Nn(t),startIcon:r.jsx(o,{}),onClick:()=>n({state:t,message:a,size:"compact"}),children:[$n(t)," (Compact)"]},t)})})}const q={render:()=>r.jsx(De,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Show different state snackbars
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  size: 'compact',
})

showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  size: 'compact',
})

showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  size: 'compact',
})

showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  size: 'compact',
})`}}}};function Me(){const{showSnackbar:n}=F();return r.jsx(y,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:Le.map(({state:t,message:a,actionLabel:o})=>{const s=sn[t].icon;return r.jsxs(j,{variant:"contained",color:Nn(t),startIcon:r.jsx(s,{}),onClick:()=>n({state:t,message:a,actionLabel:o,size:"standard",onAction:()=>{console.log(`${o} clicked`)}}),children:[$n(t)," (Standard)"]},t)})})}const K={render:()=>r.jsx(Me,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Success with action
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  actionLabel: 'Atgal',
  size: 'standard',
  onAction: () => console.log('Atgal clicked'),
})

// Error with action
showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  actionLabel: 'Pakartoti',
  size: 'standard',
  onAction: () => console.log('Pakartoti clicked'),
})

// Warning with action
showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  actionLabel: 'Sąlyga',
  size: 'standard',
  onAction: () => console.log('Sąlyga clicked'),
})

// Info with action
showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  actionLabel: 'Daugiau',
  size: 'standard',
  onAction: () => console.log('Daugiau clicked'),
})

// Action needed with action
showSnackbar({
  state: 'action-needed',
  message: 'Reikalingas veiksmas',
  actionLabel: 'Atlikti',
  size: 'standard',
  onAction: () => console.log('Atlikti clicked'),
})`}}}};function _e(){const{showSnackbar:n}=F();return r.jsxs(y,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[r.jsx(j,{variant:"contained",onClick:()=>n({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),r.jsx(j,{variant:"contained",onClick:()=>n({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const X={render:()=>r.jsx(_e,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// 3 second duration
showSnackbar({
  state: 'success',
  message: 'Trumpai išsaugota (3s)',
  duration: 3000,
})

// 10 second duration
showSnackbar({
  state: 'success',
  message: 'Ilgiau išsaugota (10s)',
  duration: 10000,
})`}}}};function Te(){const{showSnackbar:n}=F();return r.jsx(y,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:r.jsx(j,{variant:"contained",onClick:()=>n({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const Q={render:()=>r.jsx(Te,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'action-needed',
  message: 'Statiškas pranešimas',
  actionLabel: 'Patvirtinti',
  persist: true,
  showClose: true,
})`}}}};function ze(){const{showSnackbar:n}=F();return r.jsx(y,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:r.jsx(j,{variant:"contained",color:"info",onClick:()=>n({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.",showClose:!0}),children:"Long Text (Truncation)"})})}const Z={render:()=>r.jsx(ze,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'info',
  message: 'Tai yra labai ilgas pranešimas kuris turėtų būti trump intas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą',
  showClose: true,
})`}}}};var fn,bn,gn;V.parameters={...V.parameters,docs:{...(fn=V.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  render: (args: any) => <Box sx={{
    pb: 12
  }}>
      <RcSesSnackbar key={\`\${args.state}-\${args.message}-\${args.size}-\${args.persist}\`} {...args} />
    </Box>,
  args: {
    open: true,
    state: 'success',
    message: 'Sėkmingai išsaugota',
    size: 'standard',
    actionLabel: 'Atgal',
    duration: 10000,
    persist: true,
    showClose: true,
    dismissOnAction: true
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Control snackbar visibility'
    },
    state: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'action-needed'],
      description: 'Snackbar state determines icon, color, and aria-live level'
    },
    message: {
      control: 'text',
      description: 'Notification message text (truncates with ellipsis)'
    },
    size: {
      control: 'radio',
      options: ['standard', 'compact'],
      description: 'Standard (400×60px) or Compact (320×48px)'
    },
    duration: {
      control: {
        type: 'number',
        min: 1000,
        max: 30000,
        step: 1000
      },
      description: 'Auto-dismiss duration in milliseconds (ignored if persist=true)'
    },
    persist: {
      control: 'boolean',
      description: 'If true, snackbar will not auto-dismiss'
    },
    showClose: {
      control: 'boolean',
      description: 'Show/hide close button'
    },
    dismissOnAction: {
      control: 'boolean',
      description: 'Close snackbar when action button is clicked'
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label (only shown in standard size)'
    },
    onAction: {
      action: 'onAction',
      description: 'Callback when action button is clicked'
    },
    onClose: {
      action: 'onClose',
      description: 'Callback when snackbar closes'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing.'
      }
    }
  }
}`,...(gn=(bn=V.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var hn,kn,Sn;q.parameters={...q.parameters,docs:{...(hn=q.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  render: () => <SnackbarDemoCompactWithText />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons.'
      },
      source: {
        code: \`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Show different state snackbars
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  size: 'compact',
})

showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  size: 'compact',
})

showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  size: 'compact',
})

showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  size: 'compact',
})\`
      }
    }
  }
}`,...(Sn=(kn=q.parameters)==null?void 0:kn.docs)==null?void 0:Sn.source}}};var vn,xn,wn;K.parameters={...K.parameters,docs:{...(vn=K.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: () => <SnackbarDemoStandardWithButtons />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates standard-size snackbars with action buttons.'
      },
      source: {
        code: \`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Success with action
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  actionLabel: 'Atgal',
  size: 'standard',
  onAction: () => console.log('Atgal clicked'),
})

// Error with action
showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  actionLabel: 'Pakartoti',
  size: 'standard',
  onAction: () => console.log('Pakartoti clicked'),
})

// Warning with action
showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  actionLabel: 'Sąlyga',
  size: 'standard',
  onAction: () => console.log('Sąlyga clicked'),
})

// Info with action
showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  actionLabel: 'Daugiau',
  size: 'standard',
  onAction: () => console.log('Daugiau clicked'),
})

// Action needed with action
showSnackbar({
  state: 'action-needed',
  message: 'Reikalingas veiksmas',
  actionLabel: 'Atlikti',
  size: 'standard',
  onAction: () => console.log('Atlikti clicked'),
})\`
      }
    }
  }
}`,...(wn=(xn=K.parameters)==null?void 0:xn.docs)==null?void 0:wn.source}}};var yn,En,Bn;X.parameters={...X.parameters,docs:{...(yn=X.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  render: () => <SnackbarDemoCustomDuration />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away.'
      },
      source: {
        code: \`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// 3 second duration
showSnackbar({
  state: 'success',
  message: 'Trumpai išsaugota (3s)',
  duration: 3000,
})

// 10 second duration
showSnackbar({
  state: 'success',
  message: 'Ilgiau išsaugota (10s)',
  duration: 10000,
})\`
      }
    }
  }
}`,...(Bn=(En=X.parameters)==null?void 0:En.docs)==null?void 0:Bn.source}}};var On,In,Rn;Q.parameters={...Q.parameters,docs:{...(On=Q.parameters)==null?void 0:On.docs,source:{originalSource:`{
  render: () => <SnackbarDemoPersistent />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button.'
      },
      source: {
        code: \`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'action-needed',
  message: 'Statiškas pranešimas',
  actionLabel: 'Patvirtinti',
  persist: true,
  showClose: true,
})\`
      }
    }
  }
}`,...(Rn=(In=Q.parameters)==null?void 0:In.docs)==null?void 0:Rn.source}}};var Pn,Ln,Dn;Z.parameters={...Z.parameters,docs:{...(Pn=Z.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  render: () => <SnackbarDemoLongText />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width.'
      },
      source: {
        code: \`// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'info',
  message: 'Tai yra labai ilgas pranešimas kuris turėtų būti trump intas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą',
  showClose: true,
})\`
      }
    }
  }
}`,...(Dn=(Ln=Z.parameters)==null?void 0:Ln.docs)==null?void 0:Dn.source}}};const Qt=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{q as CompactWithText,X as CustomDuration,V as Default,Z as LongText,Q as Persistent,K as StandardWithButtons,Qt as __namedExportsOrder,Xt as default};
//# sourceMappingURL=Snackbar.stories-DvAdEqHL.js.map
