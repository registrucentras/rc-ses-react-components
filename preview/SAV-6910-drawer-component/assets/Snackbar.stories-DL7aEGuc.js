import{r as u,m as ln,j as A,k as In,aR as on,o as q,p as An,az as Pn,I as On,w as Rn,W as Un,e as Qn,X as Dn,s as Yn,t as Ln,g as tn,i as Wn}from"./iframe-DB1EF-x_.js";import{R as an}from"./index-BEec_9vn.js";import"./Logo-DUNEWHQc.js";import"./DotCircleFilledIcon-B4EIUmnw.js";import"./SearchXIcon-Bf3i_KUz.js";import{c as sn,a as mn}from"./useReducedMotion-C4RkVMNI.js";import{u as zn}from"./useTranslation-DSJywBrb.js";import{u as _n}from"./index-CjKLscX-.js";import{u as jn}from"./useTimeout-Bp9Z3NaC.js";import{e as rn}from"./mergeSlotProps-D1VQHPIF.js";import{c as un,s as H,m as dn}from"./memoTheme-VhH0Ke8H.js";import{g as pn,a as Sn}from"./generateUtilityClasses-DGi4yQgU.js";import{u as _}from"./useSlot-CdVtEC6U.js";import{C as Tn}from"./ClickAwayListener-C-JAgq0k.js";import{P as Kn}from"./Paper-C5KcvUpZ.js";import{G as Nn}from"./Grow-BKz0f3qP.js";import{S as Gn}from"./Slide-Dg0PyG3N.js";import{B as f}from"./Box-D4Jm7AAj.js";import{T as Fn}from"./Typography-DUTz8Atk.js";import{B as y}from"./Button-BuIKW3by.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDBp3RTl.js";import"./CircularProgress-CBcVl4sl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./index-DWsPbBEP.js";import"./getThemeProps-__gKXzXy.js";import"./getReactElementRef-DCy1rOni.js";import"./ownerDocument-DW-IO8s5.js";import"./contains-DSD8CO72.js";import"./Transition-jXxGhKeR.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ButtonBase-Bt3PjvxV.js";import"./isFocusVisible-B8k4qzLc.js";function qn(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:t=!1,onClose:a,open:r,resumeHideDuration:s}=e,i=jn();u.useEffect(()=>{if(!r)return;function l(m){m.defaultPrevented||m.key==="Escape"&&a?.(m,"escapeKeyDown")}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[r,a]);const d=sn((l,m)=>{a?.(l,m)}),C=sn(l=>{!a||l==null||i.start(l,()=>{d(null,"timeout")})});u.useEffect(()=>(r&&C(o),i.clear),[r,o,C,i]);const b=l=>{a?.(l,"clickaway")},p=i.clear,k=u.useCallback(()=>{o!=null&&C(s??o*.5)},[o,s,C]),E=l=>m=>{const S=l.onBlur;S?.(m),k()},v=l=>m=>{const S=l.onFocus;S?.(m),p()},M=l=>m=>{const S=l.onMouseEnter;S?.(m),p()},D=l=>m=>{const S=l.onMouseLeave;S?.(m),k()};return u.useEffect(()=>{if(!t&&r)return window.addEventListener("focus",k),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",k),window.removeEventListener("blur",p)}},[t,r,k,p]),{getRootProps:(l={})=>{const m={...rn(e),...rn(l)};return{role:"presentation",...l,...m,onBlur:E(m),onFocus:v(m),onMouseEnter:M(m),onMouseLeave:D(m)}},onClickAway:b}}function Hn(e){return pn("MuiSnackbarContent",e)}Sn("MuiSnackbarContent",["root","message","action"]);const Vn=e=>{const{classes:o}=e;return un({root:["root"],action:["action"],message:["message"]},Hn,o)},$n=H(Kn,{name:"MuiSnackbarContent",slot:"Root"})(dn(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98;return{...e.typography.body2,color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(on(e.palette.background.default,o)),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:on(e.palette.background.default,o),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Zn=H("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Xn=H("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Jn=u.forwardRef(function(o,t){const a=ln({props:o,name:"MuiSnackbarContent"}),{action:r,className:s,message:i,role:d="alert",...C}=a,b=a,p=Vn(b);return A.jsxs($n,{role:d,elevation:6,className:In(p.root,s),ownerState:b,ref:t,...C,children:[A.jsx(Zn,{className:p.message,ownerState:b,children:i}),r?A.jsx(Xn,{className:p.action,ownerState:b,children:r}):null]})});function ne(e){return pn("MuiSnackbar",e)}Sn("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ee=e=>{const{classes:o,anchorOrigin:t}=e,a={root:["root",`anchorOrigin${q(t.vertical)}${q(t.horizontal)}`]};return un(a,ne,o)},oe=H("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`anchorOrigin${q(t.anchorOrigin.vertical)}${q(t.anchorOrigin.horizontal)}`]]}})(dn(({theme:e})=>({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:o})=>o.anchorOrigin.vertical==="top",style:{top:8,[e.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:o})=>o.anchorOrigin.vertical!=="top",style:{bottom:8,[e.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[e.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[e.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:o})=>o.anchorOrigin.horizontal==="center",style:{[e.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Ae=u.forwardRef(function(o,t){const a=ln({props:o,name:"MuiSnackbar"}),r=mn(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:i,anchorOrigin:{vertical:d,horizontal:C}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:p,className:k,disableWindowBlurListener:E=!1,message:v,onBlur:M,onClose:D,onFocus:Y,onMouseEnter:l,onMouseLeave:m,open:S,resumeHideDuration:I,slots:L={},slotProps:V={},transitionDuration:P=s,...W}=a,h={...a,anchorOrigin:{vertical:d,horizontal:C},autoHideDuration:b,disableWindowBlurListener:E,transitionDuration:P},O=ee(h),{getRootProps:$,onClickAway:w}=qn(h),[Z,R]=u.useState(!0),g={slots:L,slotProps:V},[X,fn]=_("root",{ref:t,className:[O.root,k],elementType:oe,getSlotProps:$,externalForwardedProps:{...g,...W},ownerState:h}),[hn,{ownerState:xn,...Bn}]=_("clickAwayListener",{elementType:Tn,externalForwardedProps:g,getSlotProps:z=>({onClickAway:(...x)=>{const Mn=x[0];z.onClickAway?.(...x),!Mn?.defaultMuiPrevented&&w(...x)}}),ownerState:h}),[vn,wn]=_("content",{elementType:Jn,shouldForwardComponentProp:!0,externalForwardedProps:g,additionalProps:{message:v,action:i},ownerState:h}),[yn,En]=_("transition",{elementType:Nn,externalForwardedProps:g,getSlotProps:z=>({onEnter:(...x)=>{z.onEnter?.(...x),R(!1)},onExited:(...x)=>{z.onExited?.(...x),R(!0)}}),additionalProps:{appear:!0,in:S,timeout:P,direction:d==="top"?"down":"up"},ownerState:h});return!S&&Z?null:A.jsx(hn,{...Bn,...L.clickAwayListener&&{ownerState:xn},children:A.jsx(X,{...fn,children:A.jsx(yn,{...En,children:p||A.jsx(vn,{...wn})})})})});function Cn(){var e="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",o="c12ad0e8402473839d59ddcef36c7e89b8a40e25",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AAExB,SAAS,WAAW,qBAAqB,gBAAgB;AAEzD,cAAc;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c12ad0e8402473839d59ddcef36c7e89b8a40e25"},s=t[a]||(t[a]={});(!s[e]||s[e].hash!==o)&&(s[e]=r);var i=s[e];return Cn=function(){return i},i}Cn();function B(){var e="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",o="3b091237a9407ee4618722335aee335a6f852005",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:36},end:{line:14,column:1}},3:{start:{line:15,column:27},end:{line:46,column:1}},4:{start:{line:47,column:26},end:{line:58,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,uBAAqD;AAAA,EAChE,UAAU;AAAA,EACV,SAAS;AACX;AAEO,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b091237a9407ee4618722335aee335a6f852005"},s=t[a]||(t[a]={});(!s[e]||s[e].hash!==o)&&(s[e]=r);var i=s[e];return B=function(){return i},i}B();const te=(B().s[0]++,1e4),cn=(B().s[1]++,{width:18,height:20}),ae=(B().s[2]++,{standard:120,compact:60}),en=(B().s[3]++,{success:{icon:Ln,color:Yn[400],severity:"success",ariaLive:"polite"},error:{icon:Dn,color:Qn[400],severity:"error",ariaLive:"assertive"},warning:{icon:Un,color:Rn[400],severity:"warning",ariaLive:"polite"},info:{icon:On,color:An[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Pn,color:An[400],severity:"info",ariaLive:"assertive"}}),J=(B().s[4]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function n(){var e="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",o="ec265ea3d040158fb5333a9ff1e2a58008cfc05e",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:35,column:16},end:{line:35,column:26}},1:{start:{line:36,column:16},end:{line:36,column:39}},2:{start:{line:37,column:42},end:{line:37,column:74}},3:{start:{line:38,column:34},end:{line:38,column:49}},4:{start:{line:39,column:54},end:{line:39,column:78}},5:{start:{line:40,column:18},end:{line:40,column:64}},6:{start:{line:41,column:2},end:{line:46,column:3}},7:{start:{line:42,column:4},end:{line:42,column:42}},8:{start:{line:43,column:4},end:{line:45,column:5}},9:{start:{line:44,column:6},end:{line:44,column:38}},10:{start:{line:47,column:17},end:{line:47,column:35}},11:{start:{line:48,column:20},end:{line:48,column:31}},12:{start:{line:49,column:21},end:{line:49,column:40}},13:{start:{line:50,column:20},end:{line:50,column:46}},14:{start:{line:51,column:27},end:{line:51,column:101}},15:{start:{line:52,column:18},end:{line:52,column:30}},16:{start:{line:53,column:40},end:{line:53,column:55}},17:{start:{line:54,column:2},end:{line:59,column:25}},18:{start:{line:55,column:15},end:{line:55,column:30}},19:{start:{line:56,column:4},end:{line:56,column:20}},20:{start:{line:56,column:13},end:{line:56,column:20}},21:{start:{line:57,column:29},end:{line:57,column:72}},22:{start:{line:58,column:4},end:{line:58,column:59}},23:{start:{line:60,column:22},end:{line:63,column:3}},24:{start:{line:61,column:4},end:{line:61,column:27}},25:{start:{line:62,column:4},end:{line:62,column:16}},26:{start:{line:64,column:23},end:{line:67,column:3}},27:{start:{line:65,column:4},end:{line:65,column:17}},28:{start:{line:66,column:4},end:{line:66,column:39}},29:{start:{line:66,column:25},end:{line:66,column:39}},30:{start:{line:68,column:31},end:{line:68,column:80}},31:{start:{line:69,column:2},end:{line:180,column:4}},32:{start:{line:76,column:26},end:{line:76,column:43}},33:{start:{line:77,column:26},end:{line:77,column:44}},34:{start:{line:78,column:24},end:{line:78,column:59}},35:{start:{line:183,column:0},end:{line:188,column:51}},36:{start:{line:185,column:4},end:{line:185,column:48}},37:{start:{line:187,column:4},end:{line:187,column:4503}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:22,column:9},end:{line:22,column:22}},loc:{start:{line:34,column:3},end:{line:181,column:1}},line:34},1:{name:"(anonymous_1)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:24},end:{line:59,column:3}},line:54},2:{name:"(anonymous_2)",decl:{start:{line:60,column:22},end:{line:60,column:23}},loc:{start:{line:60,column:28},end:{line:63,column:3}},line:60},3:{name:"(anonymous_3)",decl:{start:{line:64,column:23},end:{line:64,column:24}},loc:{start:{line:64,column:29},end:{line:67,column:3}},line:64},4:{name:"(anonymous_4)",decl:{start:{line:76,column:20},end:{line:76,column:21}},loc:{start:{line:76,column:26},end:{line:76,column:43}},line:76},5:{name:"(anonymous_5)",decl:{start:{line:77,column:20},end:{line:77,column:21}},loc:{start:{line:77,column:26},end:{line:77,column:44}},line:77},6:{name:"(anonymous_6)",decl:{start:{line:78,column:17},end:{line:78,column:18}},loc:{start:{line:78,column:24},end:{line:78,column:59}},line:78}},branchMap:{0:{loc:{start:{line:24,column:2},end:{line:24,column:19}},type:"default-arg",locations:[{start:{line:24,column:9},end:{line:24,column:19}}],line:24},1:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:20},end:{line:28,column:24}}],line:28},2:{loc:{start:{line:31,column:2},end:{line:31,column:30}},type:"default-arg",locations:[{start:{line:31,column:13},end:{line:31,column:30}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:18}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:18}}],line:33},4:{loc:{start:{line:37,column:51},end:{line:37,column:73}},type:"binary-expr",locations:[{start:{line:37,column:51},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:73}}],line:37},5:{loc:{start:{line:40,column:18},end:{line:40,column:64}},type:"binary-expr",locations:[{start:{line:40,column:18},end:{line:40,column:35}},{start:{line:40,column:39},end:{line:40,column:64}}],line:40},6:{loc:{start:{line:41,column:2},end:{line:46,column:3}},type:"if",locations:[{start:{line:41,column:2},end:{line:46,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},7:{loc:{start:{line:43,column:4},end:{line:45,column:5}},type:"if",locations:[{start:{line:43,column:4},end:{line:45,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:43},8:{loc:{start:{line:51,column:27},end:{line:51,column:101}},type:"cond-expr",locations:[{start:{line:51,column:56},end:{line:51,column:91}},{start:{line:51,column:94},end:{line:51,column:101}}],line:51},9:{loc:{start:{line:56,column:4},end:{line:56,column:20}},type:"if",locations:[{start:{line:56,column:4},end:{line:56,column:20}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:56},10:{loc:{start:{line:66,column:4},end:{line:66,column:39}},type:"if",locations:[{start:{line:66,column:4},end:{line:66,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:66},11:{loc:{start:{line:73,column:24},end:{line:73,column:61}},type:"cond-expr",locations:[{start:{line:73,column:46},end:{line:73,column:50}},{start:{line:73,column:53},end:{line:73,column:61}}],line:73},12:{loc:{start:{line:73,column:24},end:{line:73,column:43}},type:"binary-expr",locations:[{start:{line:73,column:24},end:{line:73,column:31}},{start:{line:73,column:35},end:{line:73,column:43}}],line:73},13:{loc:{start:{line:78,column:24},end:{line:78,column:59}},type:"binary-expr",locations:[{start:{line:78,column:24},end:{line:78,column:42}},{start:{line:78,column:46},end:{line:78,column:59}}],line:78},14:{loc:{start:{line:79,column:26},end:{line:79,column:79}},type:"cond-expr",locations:[{start:{line:79,column:49},end:{line:79,column:70}},{start:{line:79,column:73},end:{line:79,column:79}}],line:79},15:{loc:{start:{line:81,column:20},end:{line:81,column:89}},type:"cond-expr",locations:[{start:{line:81,column:43},end:{line:81,column:49}},{start:{line:81,column:52},end:{line:81,column:89}}],line:81},16:{loc:{start:{line:89,column:16},end:{line:89,column:68}},type:"cond-expr",locations:[{start:{line:89,column:50},end:{line:89,column:57}},{start:{line:89,column:60},end:{line:89,column:68}}],line:89},17:{loc:{start:{line:94,column:24},end:{line:94,column:61}},type:"cond-expr",locations:[{start:{line:94,column:38},end:{line:94,column:50}},{start:{line:94,column:53},end:{line:94,column:61}}],line:94},18:{loc:{start:{line:102,column:21},end:{line:102,column:41}},type:"cond-expr",locations:[{start:{line:102,column:36},end:{line:102,column:37}},{start:{line:102,column:40},end:{line:102,column:41}}],line:102},19:{loc:{start:{line:112,column:30},end:{line:112,column:67}},type:"cond-expr",locations:[{start:{line:112,column:44},end:{line:112,column:56}},{start:{line:112,column:59},end:{line:112,column:67}}],line:112},20:{loc:{start:{line:114,column:22},end:{line:114,column:45}},type:"cond-expr",locations:[{start:{line:114,column:36},end:{line:114,column:41}},{start:{line:114,column:44},end:{line:114,column:45}}],line:114},21:{loc:{start:{line:136,column:14},end:{line:150,column:15}},type:"binary-expr",locations:[{start:{line:136,column:14},end:{line:136,column:22}},{start:{line:136,column:26},end:{line:136,column:36}},{start:{line:136,column:56},end:{line:150,column:15}}],line:136},22:{loc:{start:{line:151,column:14},end:{line:174,column:15}},type:"binary-expr",locations:[{start:{line:151,column:14},end:{line:151,column:23}},{start:{line:151,column:43},end:{line:174,column:15}}],line:151}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0,0],22:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ec265ea3d040158fb5333a9ff1e2a58008cfc05e"},s=t[a]||(t[a]={});(!s[e]||s[e].hash!==o)&&(s[e]=r);var i=s[e];return n=function(){return i},i}n();function U({state:e,size:o=(n().b[0][0]++,"standard"),message:t,onClose:a,onAction:r,dismissOnAction:s=(n().b[1][0]++,!0),actionLabel:i,open:d,duration:C=(n().b[2][0]++,te),persist:b,showClose:p=(n().b[3][0]++,!0)}){n().f[0]++;const k=(n().s[0]++,mn()),{t:E}=(n().s[1]++,zn("input")),[v,M]=(n().s[2]++,u.useState((n().b[4][0]++,d??(n().b[4][1]++,!0)))),[D,Y]=(n().s[3]++,u.useState(!1)),[l,m]=(n().s[4]++,u.useState(d)),S=(n().s[5]++,n().b[5][0]++,b??(n().b[5][1]++,e==="action-needed"));n().s[6]++,d!==l?(n().b[6][0]++,n().s[7]++,m(d),n().s[8]++,d!==void 0?(n().b[7][0]++,n().s[9]++,M(d)):n().b[7][1]++):n().b[6][1]++;const I=(n().s[10]++,en[e]),L=(n().s[11]++,I.icon),V=(n().s[12]++,o==="standard"),P=(n().s[13]++,ae[o]),W=(n().s[14]++,t.length>P?(n().b[8][0]++,`${t.slice(0,P)}...`):(n().b[8][1]++,t)),h=(n().s[15]++,u.useRef(null)),[O,$]=(n().s[16]++,u.useState(!1));n().s[17]++,u.useLayoutEffect(()=>{n().f[1]++;const g=(n().s[18]++,h.current);if(n().s[19]++,g)n().b[9][1]++;else{n().b[9][0]++,n().s[20]++;return}const X=(n().s[21]++,parseFloat(getComputedStyle(g).lineHeight));n().s[22]++,$(g.clientHeight>X+4)},[W]),n().s[23]++;const w=()=>{n().f[2]++,n().s[24]++,M(!1),n().s[25]++,a?.()};n().s[26]++;const Z=()=>{n().f[3]++,n().s[27]++,r?.(),n().s[28]++,s?(n().b[10][0]++,n().s[29]++,w()):n().b[10][1]++},R=(n().s[30]++,_n("(prefers-reduced-motion: reduce)"));return n().s[31]++,A.jsx(Ae,{open:v,autoHideDuration:(n().b[12][0]++,S||(n().b[12][1]++,D)?(n().b[11][0]++,null):(n().b[11][1]++,C)),onClose:w,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(n().f[4]++,n().s[32]++,Y(!0)),onMouseLeave:()=>(n().f[5]++,n().s[33]++,Y(!1)),onKeyDown:g=>(n().f[6]++,n().s[34]++,n().b[13][0]++,g.key==="Escape"&&(n().b[13][1]++,w())),transitionDuration:R?(n().b[14][0]++,{enter:0,exit:0}):(n().b[14][1]++,void 0),sx:{transition:R?(n().b[15][0]++,"none"):(n().b[15][1]++,"bottom 150ms ease-in-out !important")},slots:{transition:Gn},children:A.jsxs(f,{role:I.ariaLive==="assertive"?(n().b[16][0]++,"alert"):(n().b[16][1]++,"status"),"aria-live":I.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:O?(n().b[17][0]++,"flex-start"):(n().b[17][1]++,"center"),gap:k.spacing(1),width:`${J[o].width}px`,maxHeight:`${J[o].maxHeight}px`,backgroundColor:tn[900],color:tn[50],borderRadius:"8px",padding:J[o].padding,opacity:v?(n().b[18][0]++,1):(n().b[18][1]++,0),transition:"opacity 200ms ease-out"},children:[A.jsx(f,{sx:{flexShrink:0,display:"flex",alignItems:O?(n().b[19][0]++,"flex-start"):(n().b[19][1]++,"center"),justifyContent:"center",pt:O?(n().b[20][0]++,"2px"):(n().b[20][1]++,0),"& svg":{width:`${cn.width}px !important`,height:`${cn.height}px !important`}},children:A.jsx(L,{fillColor:I.color,"aria-hidden":!0})}),A.jsx(Fn,{ref:h,variant:"body2",sx:{flex:1,minWidth:0},children:W}),A.jsxs(f,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(n().b[21][0]++,r&&(n().b[21][1]++,V)&&(n().b[21][2]++,A.jsx(an,{size:"small",variant:"outlined",color:"light",onClick:Z,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:i}))),(n().b[22][0]++,p&&(n().b[22][1]++,A.jsx(an,{variant:"outlined",color:"ghost",onClick:w,sx:{minWidth:"auto",padding:k.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":E("components.RcSesSnackbar.aria.close"),children:A.jsx(Wn,{})})))]})]})})}n().s[35]++;try{n().s[36]++,U.displayName="RcSesSnackbar",n().s[37]++,U.__docgenInfo={description:"",displayName:"RcSesSnackbar",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",methods:[],props:{state:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"state",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"enum",raw:"SnackbarState",value:[{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"action-needed"'}]}},message:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"message",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"string"}},size:{defaultValue:{value:"standard"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"size",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"enum",raw:"SnackbarSize",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},actionLabel:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"actionLabel",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},open:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"open",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"dismissOnAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"duration",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"number"}},persist:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"persist",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"showClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}function c(){var e="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",o="bf46988b50e1501c6fe361b2be7bb787c5705a7b",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:56,column:51}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:263}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI,SAGI,KAHJ;AAhDJ;AAAA,EAEE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AAEP,OAAO,mBAAmB;AAoB1B,MAAM,kBAAkB,cAA+C,MAAS;AAEzE,gBAAS,sBAAsB,EAAE,SAAS,GAA4B;AAC3E,QAAM,CAAC,UAAU,WAAW,IAAI,SAAgC,IAAI;AAEpE,QAAM,eAAe,YAAY,CAAC,WAA2B;AAC3D,gBAAY,MAAM;AAAA,EACpB,GAAG,CAAC,CAAC;AAEL,QAAM,eAAe,YAAY,MAAM;AACrC,gBAAY,IAAI;AAAA,EAClB,GAAG,CAAC,CAAC;AAEL,QAAM,QAAQ;AAAA,IACZ,OAAO,EAAE,cAAc,aAAa;AAAA,IACpC,CAAC,cAAc,YAAY;AAAA,EAC7B;AAEA,SACE,qBAAC,gBAAgB,UAAhB,EAAyB,OACvB;AAAA;AAAA,IACA,YACC;AAAA,MAAC;AAAA;AAAA,QACC,OAAO,SAAS;AAAA,QAChB,SAAS,SAAS;AAAA,QAClB,MAAM,SAAS;AAAA,QACf,UAAU,SAAS;AAAA,QACnB,aAAa,SAAS;AAAA,QACtB,UAAU,SAAS;AAAA,QACnB,SAAS,SAAS;AAAA,QAClB,iBAAiB,SAAS;AAAA,QAC1B,WAAW,SAAS,aAAa;AAAA,QACjC,SAAS;AAAA,QACT,MAAI;AAAA;AAAA,IACN;AAAA,KAEJ;AAEJ;AAEO,gBAAS,cAAc;AAC5B,QAAM,UAAU,WAAW,eAAe;AAC1C,MAAI,CAAC,SAAS;AACZ,UAAM,IAAI,MAAM,uDAAuD;AAAA,EACzE;AACA,SAAO;AACT;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf46988b50e1501c6fe361b2be7bb787c5705a7b"},s=t[a]||(t[a]={});(!s[e]||s[e].hash!==o)&&(s[e]=r);var i=s[e];return c=function(){return i},i}c();const bn=(c().s[0]++,u.createContext(void 0));function nn({children:e}){c().f[0]++;const[o,t]=(c().s[1]++,u.useState(null)),a=(c().s[2]++,u.useCallback(i=>{c().f[1]++,c().s[3]++,t(i)},[])),r=(c().s[4]++,u.useCallback(()=>{c().f[2]++,c().s[5]++,t(null)},[])),s=(c().s[6]++,u.useMemo(()=>(c().f[3]++,c().s[7]++,{showSnackbar:a,hideSnackbar:r}),[a,r]));return c().s[8]++,A.jsxs(bn.Provider,{value:s,children:[e,(c().b[0][0]++,o&&(c().b[0][1]++,A.jsx(U,{state:o.state,message:o.message,size:o.size,onAction:o.onAction,actionLabel:o.actionLabel,duration:o.duration,persist:o.persist,dismissOnAction:o.dismissOnAction,showClose:(c().b[1][0]++,o.showClose??(c().b[1][1]++,!0)),onClose:r,open:!0})))]})}function Q(){c().f[4]++;const e=(c().s[9]++,u.useContext(bn));if(c().s[10]++,e)c().b[2][1]++;else throw c().b[2][0]++,c().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return c().s[12]++,e}c().s[13]++;try{c().s[14]++,nn.displayName="RcSesSnackbarProvider",c().s[15]++,nn.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",methods:[],props:{},tags:{}}}catch{}const kn=e=>{if(e==="error")return"error";if(e==="warning")return"warning";if(e==="info")return"info"},gn=e=>e.charAt(0).toUpperCase()+e.slice(1).replace("-"," "),He={title:"Molecules/Snackbar",component:U,tags:["autodocs"],decorators:[e=>A.jsx(nn,{children:A.jsx(f,{sx:{p:4,pb:16,minHeight:"300px"},children:A.jsx(e,{})})})]},se=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],re=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],j={render:e=>A.jsx(f,{sx:{pb:12},children:A.jsx(U,{...e},`${e.state}-${e.message}-${e.size}-${e.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function ce(){const{showSnackbar:e}=Q();return A.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:se.map(({state:o,message:t})=>{const a=en[o].icon;return A.jsxs(y,{variant:"contained",color:kn(o),startIcon:A.jsx(a,{}),onClick:()=>e({state:o,message:t,size:"compact"}),children:[gn(o)," (Compact)"]},o)})})}const T={render:()=>A.jsx(ce,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
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
})`}}}};function ie(){const{showSnackbar:e}=Q();return A.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:re.map(({state:o,message:t,actionLabel:a})=>{const r=en[o].icon;return A.jsxs(y,{variant:"contained",color:kn(o),startIcon:A.jsx(r,{}),onClick:()=>e({state:o,message:t,actionLabel:a,size:"standard",onAction:()=>{console.log(`${a} clicked`)}}),children:[gn(o)," (Standard)"]},o)})})}const K={render:()=>A.jsx(ie,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
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
})`}}}};function le(){const{showSnackbar:e}=Q();return A.jsxs(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[A.jsx(y,{variant:"contained",onClick:()=>e({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),A.jsx(y,{variant:"contained",onClick:()=>e({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const N={render:()=>A.jsx(le,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
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
})`}}}};function me(){const{showSnackbar:e}=Q();return A.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:A.jsx(y,{variant:"contained",onClick:()=>e({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const G={render:()=>A.jsx(me,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
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
})`}}}};function ue(){const{showSnackbar:e}=Q();return A.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:A.jsx(y,{variant:"contained",color:"info",onClick:()=>e({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.",showClose:!0}),children:"Long Text (Truncation)"})})}const F={render:()=>A.jsx(ue,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
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
})`}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const Ve=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{T as CompactWithText,N as CustomDuration,j as Default,F as LongText,G as Persistent,K as StandardWithButtons,Ve as __namedExportsOrder,He as default};
//# sourceMappingURL=Snackbar.stories-DL7aEGuc.js.map
