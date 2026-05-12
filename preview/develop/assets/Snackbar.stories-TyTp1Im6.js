import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-CqJgnuY1.js";import{S as Hn,a as Fn}from"./WarningDiamondFillIcon-CH4oXtHr.js";import{p as cn,w as Gn,e as Vn,s as qn,g as An}from"./palette-BXEHCUmK.js";import{R as ln}from"./index-B4xjQ45r.js";import"./Logo-C43NXEWk.js";import"./ArrowLeftIcon-DwE_M1nb.js";import"./ArrowRightIcon-DVg4GJgX.js";import"./WarningCircleIcon-DU9j1Bkm.js";import"./CaretLeftBoldIcon-8vCR-VzV.js";import"./CaretDownFill-C4ZppdEY.js";import"./CaretLeftIcon-Do3bT2Dg.js";import"./CaretRightBoldIcon-buCNQJTx.js";import"./CheckBoldIcon-CPdBJU94.js";import{C as Kn}from"./CheckCircleFillIcon-Bql_fcTY.js";import"./CheckIcon-BYN_oJfM.js";import"./CheckUncheckedBoldIcon-f_XzfW1Z.js";import"./DotCircleFilledIcon-f7T89HoM.js";import"./ExpandChevronsIcon-BLL4v97i.js";import{I as Qn}from"./InfoFillIcon-Bfb9a4Dx.js";import"./MagnifyingGlassIcon-CvJIVmT5.js";import"./MinusBoldIcon-CouS3WBQ.js";import"./PencilSimpleLineIcon-CsMO80Ne.js";import"./PlusBoldIcon-hdzZN4ky.js";import"./QuestionFillIcon-BmRRHomd.js";import"./QuestionIcon-Hy_bWMUq.js";import"./SpinnerGapBoldIcon-BcT0qJ-j.js";import"./UploadSimpleIcon-Bc_SdJkb.js";import{W as Xn}from"./WarningFillIcon-FNT7Ikck.js";import{X as Yn}from"./XCircleFillIcon-DJb_Yzyu.js";import{u as an}from"./useTheme-QGUwL8H7.js";import{u as Zn}from"./useTranslation-5b1lrk9S.js";import{u as Jn}from"./useMediaQuery-BF8yednL.js";import{_ as K,a as k,d as ne,h as Q}from"./createTheme-CE_F1kTP.js";import{a as ee,u as te,c as un}from"./TransitionGroupContext-5O8tYVKT.js";import{e as mn}from"./resolveComponentProps-C1F0sgKN.js";import{g as Mn,a as _n,c as oe}from"./generateUtilityClasses-Bd2LNSfu.js";import{u as Tn}from"./DefaultPropsProvider-5ViKjXxd.js";import{G as ae}from"./Grow-BH09acpu.js";import{u as se}from"./useSlotProps-DjfvudQm.js";import{C as re}from"./ClickAwayListener-DWcF-7Ma.js";import{s as X}from"./styled-C6YoRvUv.js";import{c as zn}from"./composeClasses-fLhin0tj.js";import{P as ie}from"./Paper-CtGlVrv4.js";import{T as ce,r as Ae,g as dn}from"./utils-Lzp63aZj.js";import{d as le,o as jn}from"./ownerWindow-BN2rbQ_G.js";import{B as w}from"./Box-Bp3IibaX.js";import{T as ue}from"./Typography-DfZqYwnv.js";import{B as L}from"./Button-CXP1VsqQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./CaretLeft.es-CdHrrt0k.js";import"./defaultTheme-Dm7VEHNB.js";import"./useTheme-I6SAPIjI.js";import"./getThemeProps-Q2IHMZ6M.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./ButtonBase-DX0QcqVB.js";import"./useIsFocusVisible-BAiRvXvd.js";const me=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function de(n,e,a){const t=e.getBoundingClientRect(),s=a&&a.getBoundingClientRect(),i=jn(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const d=i.getComputedStyle(e);c=d.getPropertyValue("-webkit-transform")||d.getPropertyValue("transform")}let g=0,b=0;if(c&&c!=="none"&&typeof c=="string"){const d=c.split("(")[1].split(")")[0].split(",");g=parseInt(d[4],10),b=parseInt(d[5],10)}return n==="left"?s?`translateX(${s.right+g-t.left}px)`:`translateX(${i.innerWidth+g-t.left}px)`:n==="right"?s?`translateX(-${t.right-s.left-g}px)`:`translateX(-${t.left+t.width-g}px)`:n==="up"?s?`translateY(${s.bottom+b-t.top}px)`:`translateY(${i.innerHeight+b-t.top}px)`:s?`translateY(-${t.top-s.top+t.height-b}px)`:`translateY(-${t.top+t.height-b}px)`}function pe(n){return typeof n=="function"?n():n}function N(n,e,a){const t=pe(a),s=de(n,e,t);s&&(e.style.webkitTransform=s,e.style.transform=s)}const Ce=C.forwardRef(function(e,a){const t=an(),s={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},i={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:c,appear:g=!0,children:b,container:d,direction:p="down",easing:v=s,in:x,onEnter:y,onEntered:B,onEntering:O,onExit:E,onExited:m,onExiting:A,style:f,timeout:P=i,TransitionComponent:I=ce}=e,M=K(e,me),h=C.useRef(null),_=ee(b.ref,h,a),R=l=>S=>{l&&(S===void 0?l(h.current):l(h.current,S))},Y=R((l,S)=>{N(p,l,d),Ae(l),y&&y(l,S)}),Z=R((l,S)=>{const rn=dn({timeout:P,style:f,easing:v},{mode:"enter"});l.style.webkitTransition=t.transitions.create("-webkit-transform",k({},rn)),l.style.transition=t.transitions.create("transform",k({},rn)),l.style.webkitTransform="none",l.style.transform="none",O&&O(l,S)}),U=R(B),J=R(A),nn=R(l=>{const S=dn({timeout:P,style:f,easing:v},{mode:"exit"});l.style.webkitTransition=t.transitions.create("-webkit-transform",S),l.style.transition=t.transitions.create("transform",S),N(p,l,d),E&&E(l)}),en=R(l=>{l.style.webkitTransition="",l.style.transition="",m&&m(l)}),T=l=>{c&&c(h.current,l)},W=C.useCallback(()=>{h.current&&N(p,h.current,d)},[p,d]);return C.useEffect(()=>{if(x||p==="down"||p==="right")return;const l=le(()=>{h.current&&N(p,h.current,d)}),S=jn(h.current);return S.addEventListener("resize",l),()=>{l.clear(),S.removeEventListener("resize",l)}},[p,x,d]),C.useEffect(()=>{x||W()},[x,W]),r.jsx(I,k({nodeRef:h,onEnter:Y,onEntered:U,onEntering:Z,onExit:nn,onExited:en,onExiting:J,addEndListener:T,appear:g,in:x,timeout:P},M,{children:(l,S)=>C.cloneElement(b,k({ref:_,style:k({visibility:l==="exited"&&!x?"hidden":void 0},f,b.props.style)},S))}))});function be(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:a=!1,onClose:t,open:s,resumeHideDuration:i}=n,c=te();C.useEffect(()=>{if(!s)return;function m(A){A.defaultPrevented||(A.key==="Escape"||A.key==="Esc")&&(t==null||t(A,"escapeKeyDown"))}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[s,t]);const g=un((m,A)=>{t==null||t(m,A)}),b=un(m=>{!t||m==null||c.start(m,()=>{g(null,"timeout")})});C.useEffect(()=>(s&&b(e),c.clear),[s,e,b,c]);const d=m=>{t==null||t(m,"clickaway")},p=c.clear,v=C.useCallback(()=>{e!=null&&b(i??e*.5)},[e,i,b]),x=m=>A=>{const f=m.onBlur;f==null||f(A),v()},y=m=>A=>{const f=m.onFocus;f==null||f(A),p()},B=m=>A=>{const f=m.onMouseEnter;f==null||f(A),p()},O=m=>A=>{const f=m.onMouseLeave;f==null||f(A),v()};return C.useEffect(()=>{if(!a&&s)return window.addEventListener("focus",v),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",p)}},[a,s,v,p]),{getRootProps:(m={})=>{const A=k({},mn(n),mn(m));return k({role:"presentation"},m,A,{onBlur:x(A),onFocus:y(A),onMouseEnter:B(A),onMouseLeave:O(A)})},onClickAway:d}}function fe(n){return Mn("MuiSnackbarContent",n)}_n("MuiSnackbarContent",["root","message","action"]);const ge=["action","className","message","role"],he=n=>{const{classes:e}=n;return zn({root:["root"],action:["action"],message:["message"]},fe,e)},ke=X(ie,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,a=ne.emphasize(n.palette.background.default,e);return k({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(a),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Se=X("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),ve=X("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),xe=C.forwardRef(function(e,a){const t=Tn({props:e,name:"MuiSnackbarContent"}),{action:s,className:i,message:c,role:g="alert"}=t,b=K(t,ge),d=t,p=he(d);return r.jsxs(ke,k({role:g,square:!0,elevation:6,className:oe(p.root,i),ownerState:d,ref:a},b,{children:[r.jsx(Se,{className:p.message,ownerState:d,children:c}),s?r.jsx(ve,{className:p.action,ownerState:d,children:s}):null]}))});function we(n){return Mn("MuiSnackbar",n)}_n("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ye=["onEnter","onExited"],Ee=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Be=n=>{const{classes:e,anchorOrigin:a}=n,t={root:["root",`anchorOrigin${Q(a.vertical)}${Q(a.horizontal)}`]};return zn(t,we,e)},pn=X("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[e.root,e[`anchorOrigin${Q(a.anchorOrigin.vertical)}${Q(a.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return k({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:k({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&a,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Oe=C.forwardRef(function(e,a){const t=Tn({props:e,name:"MuiSnackbar"}),s=an(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:g,horizontal:b}={vertical:"bottom",horizontal:"left"},autoHideDuration:d=null,children:p,className:v,ClickAwayListenerProps:x,ContentProps:y,disableWindowBlurListener:B=!1,message:O,open:E,TransitionComponent:m=ae,transitionDuration:A=i,TransitionProps:{onEnter:f,onExited:P}={}}=t,I=K(t.TransitionProps,ye),M=K(t,Ee),h=k({},t,{anchorOrigin:{vertical:g,horizontal:b},autoHideDuration:d,disableWindowBlurListener:B,TransitionComponent:m,transitionDuration:A}),_=Be(h),{getRootProps:R,onClickAway:Y}=be(k({},h)),[Z,U]=C.useState(!0),J=se({elementType:pn,getSlotProps:R,externalForwardedProps:M,ownerState:h,additionalProps:{ref:a},className:[_.root,v]}),nn=T=>{U(!0),P&&P(T)},en=(T,W)=>{U(!1),f&&f(T,W)};return!E&&Z?null:r.jsx(re,k({onClickAway:Y},x,{children:r.jsx(pn,k({},J,{children:r.jsx(m,k({appear:!0,in:E,timeout:A,direction:g==="top"?"down":"up",onEnter:en,onExited:nn},I,{children:p||r.jsx(xe,k({message:O,action:c},y))}))}))}))});function Un(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",e="b7c80dc7b35eba9e8bedeffc29e502d8c8b620f2",a=window,t="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,mBAAmB;AAC1B,OAAO,oBAAoB;AAC3B,OAAO,yBAAyB;AAChC,OAAO,iBAAiB;AACxB,OAAO,uBAAuB;AAC9B,OAAO,6BAA6B;AACpC,OAAO,8BAA8B;AACrC,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,mBAAmB;AAC1B,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,wBAAwB;AAC/B,OAAO,mBAAmB;AAC1B,OAAO,yBAAyB;AAChC,OAAO,eAAe;AACtB,OAAO,4BAA4B;AACnC,OAAO,sBAAsB;AAC7B,OAAO,eAAe;AACtB,OAAO,0BAA0B;AACjC,OAAO,yBAAyB;AAChC,OAAO,wBAAwB;AAC/B,OAAO,kBAAkB;AACzB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,0BAA0B;AACjC,OAAO,kBAAkB;AACzB,OAAO,sBAAsB;AAC7B,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AACxB,OAAO,wBAAwB;AAC/B,OAAO,sBAAsB;AAC7B,OAAO,uBAAuB;AAC9B,OAAO,4BAA4B;AACnC,OAAO,qBAAqB;AAC5B,OAAO,qBAAqB;AAE5B;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b7c80dc7b35eba9e8bedeffc29e502d8c8b620f2"},i=a[t]||(a[t]={});(!i[n]||i[n].hash!==e)&&(i[n]=s);var c=i[n];return Un=function(){return c},c}Un();function D(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",e="54c433d23de0a39cb9d16a4703054ede4d4c1374",a=window,t="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:27},end:{line:42,column:1}},3:{start:{line:43,column:26},end:{line:54,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"54c433d23de0a39cb9d16a4703054ede4d4c1374"},i=a[t]||(a[t]={});(!i[n]||i[n].hash!==e)&&(i[n]=s);var c=i[n];return D=function(){return c},c}D();const Pe=(D().s[0]++,1e4),Cn=(D().s[1]++,{width:18,height:20}),sn=(D().s[2]++,{success:{icon:Kn,color:qn[400],severity:"success",ariaLive:"polite"},error:{icon:Yn,color:Vn[400],severity:"error",ariaLive:"assertive"},warning:{icon:Xn,color:Gn[400],severity:"warning",ariaLive:"polite"},info:{icon:Qn,color:cn[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Hn,color:cn[400],severity:"info",ariaLive:"assertive"}}),tn=(D().s[3]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function o(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",e="814ea1737dba77515f33a014b4e8d2efa68d5b34",a=window,t="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:29,column:16},end:{line:29,column:26}},1:{start:{line:30,column:16},end:{line:30,column:39}},2:{start:{line:31,column:42},end:{line:31,column:74}},3:{start:{line:32,column:34},end:{line:32,column:49}},4:{start:{line:33,column:18},end:{line:33,column:64}},5:{start:{line:34,column:2},end:{line:38,column:23}},6:{start:{line:35,column:4},end:{line:37,column:5}},7:{start:{line:36,column:6},end:{line:36,column:38}},8:{start:{line:39,column:17},end:{line:39,column:35}},9:{start:{line:40,column:20},end:{line:40,column:31}},10:{start:{line:41,column:21},end:{line:41,column:40}},11:{start:{line:42,column:22},end:{line:45,column:3}},12:{start:{line:43,column:4},end:{line:43,column:27}},13:{start:{line:44,column:4},end:{line:44,column:16}},14:{start:{line:46,column:23},end:{line:49,column:3}},15:{start:{line:47,column:4},end:{line:47,column:17}},16:{start:{line:48,column:4},end:{line:48,column:39}},17:{start:{line:48,column:25},end:{line:48,column:39}},18:{start:{line:50,column:31},end:{line:50,column:80}},19:{start:{line:51,column:2},end:{line:163,column:4}},20:{start:{line:58,column:26},end:{line:58,column:43}},21:{start:{line:59,column:26},end:{line:59,column:44}},22:{start:{line:60,column:24},end:{line:60,column:59}},23:{start:{line:166,column:0},end:{line:172,column:50}},24:{start:{line:168,column:4},end:{line:168,column:48}},25:{start:{line:170,column:4},end:{line:170,column:1767}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:16,column:9},end:{line:16,column:22}},loc:{start:{line:28,column:3},end:{line:164,column:1}},line:28},1:{name:"(anonymous_1)",decl:{start:{line:34,column:12},end:{line:34,column:13}},loc:{start:{line:34,column:18},end:{line:38,column:3}},line:34},2:{name:"(anonymous_2)",decl:{start:{line:42,column:22},end:{line:42,column:23}},loc:{start:{line:42,column:28},end:{line:45,column:3}},line:42},3:{name:"(anonymous_3)",decl:{start:{line:46,column:23},end:{line:46,column:24}},loc:{start:{line:46,column:29},end:{line:49,column:3}},line:46},4:{name:"(anonymous_4)",decl:{start:{line:58,column:20},end:{line:58,column:21}},loc:{start:{line:58,column:26},end:{line:58,column:43}},line:58},5:{name:"(anonymous_5)",decl:{start:{line:59,column:20},end:{line:59,column:21}},loc:{start:{line:59,column:26},end:{line:59,column:44}},line:59},6:{name:"(anonymous_6)",decl:{start:{line:60,column:17},end:{line:60,column:18}},loc:{start:{line:60,column:24},end:{line:60,column:59}},line:60}},branchMap:{0:{loc:{start:{line:18,column:2},end:{line:18,column:19}},type:"default-arg",locations:[{start:{line:18,column:9},end:{line:18,column:19}}],line:18},1:{loc:{start:{line:22,column:2},end:{line:22,column:24}},type:"default-arg",locations:[{start:{line:22,column:20},end:{line:22,column:24}}],line:22},2:{loc:{start:{line:25,column:2},end:{line:25,column:30}},type:"default-arg",locations:[{start:{line:25,column:13},end:{line:25,column:30}}],line:25},3:{loc:{start:{line:27,column:2},end:{line:27,column:18}},type:"default-arg",locations:[{start:{line:27,column:14},end:{line:27,column:18}}],line:27},4:{loc:{start:{line:31,column:51},end:{line:31,column:73}},type:"binary-expr",locations:[{start:{line:31,column:51},end:{line:31,column:65}},{start:{line:31,column:69},end:{line:31,column:73}}],line:31},5:{loc:{start:{line:33,column:18},end:{line:33,column:64}},type:"binary-expr",locations:[{start:{line:33,column:18},end:{line:33,column:35}},{start:{line:33,column:39},end:{line:33,column:64}}],line:33},6:{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},7:{loc:{start:{line:48,column:4},end:{line:48,column:39}},type:"if",locations:[{start:{line:48,column:4},end:{line:48,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:48},8:{loc:{start:{line:55,column:24},end:{line:55,column:61}},type:"cond-expr",locations:[{start:{line:55,column:46},end:{line:55,column:50}},{start:{line:55,column:53},end:{line:55,column:61}}],line:55},9:{loc:{start:{line:55,column:24},end:{line:55,column:43}},type:"binary-expr",locations:[{start:{line:55,column:24},end:{line:55,column:31}},{start:{line:55,column:35},end:{line:55,column:43}}],line:55},10:{loc:{start:{line:60,column:24},end:{line:60,column:59}},type:"binary-expr",locations:[{start:{line:60,column:24},end:{line:60,column:42}},{start:{line:60,column:46},end:{line:60,column:59}}],line:60},11:{loc:{start:{line:62,column:26},end:{line:62,column:79}},type:"cond-expr",locations:[{start:{line:62,column:49},end:{line:62,column:70}},{start:{line:62,column:73},end:{line:62,column:79}}],line:62},12:{loc:{start:{line:64,column:20},end:{line:64,column:89}},type:"cond-expr",locations:[{start:{line:64,column:43},end:{line:64,column:49}},{start:{line:64,column:52},end:{line:64,column:89}}],line:64},13:{loc:{start:{line:69,column:16},end:{line:69,column:68}},type:"cond-expr",locations:[{start:{line:69,column:50},end:{line:69,column:57}},{start:{line:69,column:60},end:{line:69,column:68}}],line:69},14:{loc:{start:{line:82,column:21},end:{line:82,column:41}},type:"cond-expr",locations:[{start:{line:82,column:36},end:{line:82,column:37}},{start:{line:82,column:40},end:{line:82,column:41}}],line:82},15:{loc:{start:{line:119,column:14},end:{line:133,column:15}},type:"binary-expr",locations:[{start:{line:119,column:14},end:{line:119,column:22}},{start:{line:119,column:26},end:{line:119,column:36}},{start:{line:119,column:56},end:{line:133,column:15}}],line:119},16:{loc:{start:{line:134,column:14},end:{line:157,column:15}},type:"binary-expr",locations:[{start:{line:134,column:14},end:{line:134,column:23}},{start:{line:134,column:43},end:{line:157,column:15}}],line:134}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0,0],16:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"AAsHU;AAtHV;AAAA;AACE;AACY;AACZ;AACA;AACA;AACA;AAEF;AACA;AAEA;AACA;AAEA;AACA;AAiBA;AAAuB;AACrB;AACO;AACP;AACA;AACA;AACkB;AAClB;AACM;AACK;AACF;AAEX;AACE;AACA;AACA;AACA;AACA;AAEA;AACE;AACE;AAA8B;AAChC;AAGF;AACA;AACA;AAEA;AACE;AACA;AAAU;AAGZ;AACE;AACA;AAAiC;AAGnC;AAEA;AACE;AAAC;AAAA;AACO;AACyC;AACtC;AACgD;AACrB;AACC;AACe;AAC/B;AAC8C;AAC/D;AAC0C;AAC9C;AAEA;AAAC;AAAA;AACmD;AAChC;AACN;AACR;AACO;AACG;AACQ;AACY;AACQ;AACb;AACX;AACF;AACY;AACE;AAChB;AACd;AAEA;AAAA;AAAC;AAAA;AACK;AACU;AACH;AACG;AACI;AACP;AAC2B;AACE;AACtC;AACF;AAEgD;AAAA;AAClD;AACA;AAAC;AAAA;AACS;AACJ;AACI;AACI;AACA;AACD;AACQ;AACA;AACH;AAChB;AAEC;AAAA;AACH;AAEG;AACC;AAAC;AAAA;AACM;AACG;AACF;AACG;AACL;AACa;AACL;AACE;AACd;AAEC;AAAA;AACH;AAGA;AAAC;AAAA;AACS;AACF;AACG;AACL;AACQ;AACkB;AACnB;AACG;AACI;AACT;AACC;AACI;AACH;AACA;AACC;AACV;AACF;AACmD;AAExC;AAAA;AACb;AAEJ;AAAA;AAAA;AACF;AAAA;AAGN;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"814ea1737dba77515f33a014b4e8d2efa68d5b34"},i=a[t]||(a[t]={});(!i[n]||i[n].hash!==e)&&(i[n]=s);var c=i[n];return o=function(){return c},c}o();function z({state:n,size:e=(o().b[0][0]++,"standard"),message:a,onClose:t,onAction:s,dismissOnAction:i=(o().b[1][0]++,!0),actionLabel:c,open:g,duration:b=(o().b[2][0]++,Pe),persist:d,showClose:p=(o().b[3][0]++,!0)}){o().f[0]++;const v=(o().s[0]++,an()),{t:x}=(o().s[1]++,Zn("input")),[y,B]=(o().s[2]++,C.useState((o().b[4][0]++,g??(o().b[4][1]++,!0)))),[O,E]=(o().s[3]++,C.useState(!1)),m=(o().s[4]++,o().b[5][0]++,d??(o().b[5][1]++,n==="action-needed"));o().s[5]++,C.useEffect(()=>{o().f[1]++,o().s[6]++,g!==void 0?(o().b[6][0]++,o().s[7]++,B(g)):o().b[6][1]++},[g]);const A=(o().s[8]++,sn[n]),f=(o().s[9]++,A.icon),P=(o().s[10]++,e==="standard");o().s[11]++;const I=()=>{o().f[2]++,o().s[12]++,B(!1),o().s[13]++,t==null||t()};o().s[14]++;const M=()=>{o().f[3]++,o().s[15]++,s==null||s(),o().s[16]++,i?(o().b[7][0]++,o().s[17]++,I()):o().b[7][1]++},h=(o().s[18]++,Jn("(prefers-reduced-motion: reduce)"));return o().s[19]++,r.jsx(Oe,{open:y,autoHideDuration:(o().b[9][0]++,m||(o().b[9][1]++,O)?(o().b[8][0]++,null):(o().b[8][1]++,b)),onClose:I,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(o().f[4]++,o().s[20]++,E(!0)),onMouseLeave:()=>(o().f[5]++,o().s[21]++,E(!1)),onKeyDown:_=>(o().f[6]++,o().s[22]++,o().b[10][0]++,_.key==="Escape"&&(o().b[10][1]++,I())),TransitionComponent:Ce,transitionDuration:h?(o().b[11][0]++,{enter:0,exit:0}):(o().b[11][1]++,void 0),sx:{transition:h?(o().b[12][0]++,"none"):(o().b[12][1]++,"bottom 150ms ease-in-out !important")},children:r.jsxs(w,{role:A.ariaLive==="assertive"?(o().b[13][0]++,"alert"):(o().b[13][1]++,"status"),"aria-live":A.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:"center",gap:v.spacing(1),width:`${tn[e].width}px`,maxHeight:`${tn[e].maxHeight}px`,backgroundColor:An[900],color:An[50],borderRadius:"8px",padding:tn[e].padding,opacity:y?(o().b[14][0]++,1):(o().b[14][1]++,0),transition:"opacity 200ms ease-out"},children:[r.jsx(w,{sx:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center","& svg":{width:`${Cn.width}px !important`,height:`${Cn.height}px !important`}},children:r.jsx(f,{fillColor:A.color,"aria-hidden":!0})}),r.jsx(ue,{variant:"body2",sx:{flex:1,minWidth:0,overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,textOverflow:"ellipsis"},children:a}),r.jsxs(w,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(o().b[15][0]++,s&&(o().b[15][1]++,P)&&(o().b[15][2]++,r.jsx(ln,{size:"small",variant:"outlined",color:"light",onClick:M,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:c}))),(o().b[16][0]++,p&&(o().b[16][1]++,r.jsx(ln,{variant:"outlined",color:"ghost",onClick:I,sx:{minWidth:"auto",padding:v.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":x("components.RcSesSnackbar.aria.close"),children:r.jsx(Fn,{})})))]})]})})}o().s[23]++;try{o().s[24]++,z.displayName="RcSesSnackbar",o().s[25]++,z.__docgenInfo={description:"",displayName:"RcSesSnackbar",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"action-needed"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},size:{defaultValue:{value:"standard"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void)"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},description:"",name:"dismissOnAction",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},description:"",name:"duration",required:!1,type:{name:"number"}},persist:{defaultValue:null,description:"",name:"persist",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"",name:"showClose",required:!1,type:{name:"boolean"}}}}}catch{}function u(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",e="962c6c40b462151bff06e2ad9eb68f5bba4e766c",a=window,t="__coverage__",s={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:57,column:50}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:116}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI;AAhDJ;AAAA;AAEE;AACA;AACA;AACA;AACA;AAGF;AAoBA;AAEO;AACL;AAEA;AACE;AAAkB;AAGpB;AACE;AAAgB;AAGlB;AAAc;AACwB;AACT;AAG7B;AAEK;AAAA;AAEC;AAAC;AAAA;AACiB;AACE;AACH;AACI;AACG;AACH;AACD;AACQ;AACO;AACxB;AACL;AAAA;AACN;AAIR;AAEO;AACL;AACA;AACE;AAAuE;AAEzE;AACF;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"962c6c40b462151bff06e2ad9eb68f5bba4e766c"},i=a[t]||(a[t]={});(!i[n]||i[n].hash!==e)&&(i[n]=s);var c=i[n];return u=function(){return c},c}u();const Wn=(u().s[0]++,C.createContext(void 0));function on({children:n}){u().f[0]++;const[e,a]=(u().s[1]++,C.useState(null)),t=(u().s[2]++,C.useCallback(c=>{u().f[1]++,u().s[3]++,a(c)},[])),s=(u().s[4]++,C.useCallback(()=>{u().f[2]++,u().s[5]++,a(null)},[])),i=(u().s[6]++,C.useMemo(()=>(u().f[3]++,u().s[7]++,{showSnackbar:t,hideSnackbar:s}),[t,s]));return u().s[8]++,r.jsxs(Wn.Provider,{value:i,children:[n,(u().b[0][0]++,e&&(u().b[0][1]++,r.jsx(z,{state:e.state,message:e.message,size:e.size,onAction:e.onAction,actionLabel:e.actionLabel,duration:e.duration,persist:e.persist,dismissOnAction:e.dismissOnAction,showClose:(u().b[1][0]++,e.showClose??(u().b[1][1]++,!0)),onClose:s,open:!0})))]})}function j(){u().f[4]++;const n=(u().s[9]++,C.useContext(Wn));if(u().s[10]++,n)u().b[2][1]++;else throw u().b[2][0]++,u().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return u().s[12]++,n}u().s[13]++;try{u().s[14]++,on.displayName="RcSesSnackbarProvider",u().s[15]++,on.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",props:{}}}catch{}const Nn=n=>{if(n==="error")return"error";if(n==="warning")return"warning";if(n==="info")return"info"},$n=n=>n.charAt(0).toUpperCase()+n.slice(1).replace("-"," "),Gt={title:"components/feedback/Snackbar",component:z,tags:["autodocs"],decorators:[n=>r.jsx(on,{children:r.jsx(w,{sx:{p:4,pb:16,minHeight:"300px"},children:r.jsx(n,{})})})]},Ie=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],Re=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],$={render:n=>r.jsx(w,{sx:{pb:12},children:r.jsx(z,{...n},`${n.state}-${n.message}-${n.size}-${n.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function Le(){const{showSnackbar:n}=j();return r.jsx(w,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:Ie.map(({state:e,message:a})=>{const t=sn[e].icon;return r.jsxs(L,{variant:"contained",color:Nn(e),startIcon:r.jsx(t,{}),onClick:()=>n({state:e,message:a,size:"compact"}),children:[$n(e)," (Compact)"]},e)})})}const H={render:()=>r.jsx(Le,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
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
})`}}}};function De(){const{showSnackbar:n}=j();return r.jsx(w,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:Re.map(({state:e,message:a,actionLabel:t})=>{const s=sn[e].icon;return r.jsxs(L,{variant:"contained",color:Nn(e),startIcon:r.jsx(s,{}),onClick:()=>n({state:e,message:a,actionLabel:t,size:"standard",onAction:()=>{console.log(`${t} clicked`)}}),children:[$n(e)," (Standard)"]},e)})})}const F={render:()=>r.jsx(De,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
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
})`}}}};function Me(){const{showSnackbar:n}=j();return r.jsxs(w,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[r.jsx(L,{variant:"contained",onClick:()=>n({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),r.jsx(L,{variant:"contained",onClick:()=>n({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const G={render:()=>r.jsx(Me,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
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
})`}}}};function _e(){const{showSnackbar:n}=j();return r.jsx(w,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:r.jsx(L,{variant:"contained",onClick:()=>n({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const V={render:()=>r.jsx(_e,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
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
})`}}}};function Te(){const{showSnackbar:n}=j();return r.jsx(w,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:r.jsx(L,{variant:"contained",color:"info",onClick:()=>n({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą",showClose:!0}),children:"Long Text (Truncation)"})})}const q={render:()=>r.jsx(Te,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
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
})`}}}};var bn,fn,gn;$.parameters={...$.parameters,docs:{...(bn=$.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(gn=(fn=$.parameters)==null?void 0:fn.docs)==null?void 0:gn.source}}};var hn,kn,Sn;H.parameters={...H.parameters,docs:{...(hn=H.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Sn=(kn=H.parameters)==null?void 0:kn.docs)==null?void 0:Sn.source}}};var vn,xn,wn;F.parameters={...F.parameters,docs:{...(vn=F.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(wn=(xn=F.parameters)==null?void 0:xn.docs)==null?void 0:wn.source}}};var yn,En,Bn;G.parameters={...G.parameters,docs:{...(yn=G.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(Bn=(En=G.parameters)==null?void 0:En.docs)==null?void 0:Bn.source}}};var On,Pn,In;V.parameters={...V.parameters,docs:{...(On=V.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(In=(Pn=V.parameters)==null?void 0:Pn.docs)==null?void 0:In.source}}};var Rn,Ln,Dn;q.parameters={...q.parameters,docs:{...(Rn=q.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Dn=(Ln=q.parameters)==null?void 0:Ln.docs)==null?void 0:Dn.source}}};const Vt=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{H as CompactWithText,G as CustomDuration,$ as Default,q as LongText,V as Persistent,F as StandardWithButtons,Vt as __namedExportsOrder,Gt as default};
//# sourceMappingURL=Snackbar.stories-TyTp1Im6.js.map
