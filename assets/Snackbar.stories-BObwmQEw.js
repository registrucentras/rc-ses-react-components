import{r as u,i as un,j as o,d as Pn,aa as on,k as H,p as tn,I as Un,w as Rn,W as Qn,e as Dn,s as Yn,l as Ln,g as an,C as _n}from"./iframe-CvdsVNq9.js";import{R as sn}from"./index-BofUTA5O.js";import"./Logo-B_keXBjH.js";import"./ArrowLeftIcon-BrdkvYK8.js";import"./ArrowRightIcon-CuaTYFqA.js";import{b as Wn}from"./WarningDiamondFillIcon-DBmFRJNf.js";import"./CalendarBlankIcon-C3QP05Fs.js";import"./CaretLeftBoldIcon-kmiHpMce.js";import"./CaretDownFill-DFcl5AtC.js";import"./CaretLeftIcon-CNlpPZtj.js";import"./CaretRightBoldIcon-C1kn15NM.js";import{o as zn}from"./PlusIcon-DMFPCniJ.js";import"./CheckBoldIcon-QuNVmwyv.js";import"./CheckIcon-Dpwc7HUw.js";import"./CheckUncheckedBoldIcon-DLmIrnJ6.js";import"./CircleFilledIcon-BVKtOcUu.js";import"./ExpandChevronsIcon-CU4II39x.js";import"./DotCircleFilledIcon-Ba-oILhQ.js";import"./MagnifyingGlassIcon-CFw7Jhk1.js";import"./MinusBoldIcon-D1XykEO7.js";import"./TrashIcon-Bxsrqw4H.js";import"./PencilSimpleLineIcon-BBWpQiPs.js";import"./PlusBoldIcon-BYMI7s6q.js";import"./QuestionFillIcon-DtGQlEAf.js";import"./QuestionIcon-B8KuoY5q.js";import"./ShoppingCartIcon-BA6xW15L.js";import"./UploadSimpleIcon-D5FlX2kS.js";import"./UserIcon-FyMRcO8s.js";import{X as Tn}from"./XCircleFillIcon-CoLh0v5y.js";import{c as rn,a as dn}from"./useReducedMotion-Dm_7FdVW.js";import{u as jn}from"./useTranslation-DIRr1Pd9.js";import{u as Nn}from"./index-B_W2GlLq.js";import{u as Kn}from"./useTimeout-Bkz083f3.js";import{e as cn}from"./mergeSlotProps-D8F8XP8I.js";import{c as pn,s as V,m as Cn}from"./memoTheme--kAmOKvp.js";import{g as Sn,a as bn}from"./generateUtilityClasses-DGi4yQgU.js";import{u as T}from"./useSlot-DCxkw9sd.js";import{C as Gn}from"./ClickAwayListener-OTU0cDwp.js";import{P as qn}from"./Paper-fcEdRBdZ.js";import{G as Fn}from"./Grow-BzMpiElQ.js";import{S as Hn}from"./Slide-CHAHWt-3.js";import{B as f}from"./Box-DQwK3gZ0.js";import{T as Vn}from"./Typography-DXraXJ0x.js";import{B as w}from"./Button-C080bCIA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4IZ3xxT3.js";import"./CircularProgress-DkL0sT73.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./CaretLeft.es-BmNDsuGS.js";import"./Minus.es-CgwiKTFq.js";import"./Plus.es-9YyLBxGL.js";import"./Question.es-C0Si6Z-7.js";import"./index-Q1xHUF-M.js";import"./getThemeProps-tRce7t8w.js";import"./getReactElementRef-DYqDoL4o.js";import"./ownerDocument-DW-IO8s5.js";import"./contains-DSD8CO72.js";import"./Transition-CdzMT_AO.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ButtonBase-DzZUG8VX.js";import"./isFocusVisible-B8k4qzLc.js";function $n(n={}){const{autoHideDuration:A=null,disableWindowBlurListener:t=!1,onClose:a,open:r,resumeHideDuration:s}=n,i=Kn();u.useEffect(()=>{if(!r)return;function l(m){m.defaultPrevented||m.key==="Escape"&&a?.(m,"escapeKeyDown")}return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[r,a]);const d=rn((l,m)=>{a?.(l,m)}),S=rn(l=>{!a||l==null||i.start(l,()=>{d(null,"timeout")})});u.useEffect(()=>(r&&S(A),i.clear),[r,A,S,i]);const b=l=>{a?.(l,"clickaway")},p=i.clear,g=u.useCallback(()=>{A!=null&&S(s??A*.5)},[A,s,S]),y=l=>m=>{const C=l.onBlur;C?.(m),g()},E=l=>m=>{const C=l.onFocus;C?.(m),p()},M=l=>m=>{const C=l.onMouseEnter;C?.(m),p()},Y=l=>m=>{const C=l.onMouseLeave;C?.(m),g()};return u.useEffect(()=>{if(!t&&r)return window.addEventListener("focus",g),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",p)}},[t,r,g,p]),{getRootProps:(l={})=>{const m={...cn(n),...cn(l)};return{role:"presentation",...l,...m,onBlur:y(m),onFocus:E(m),onMouseEnter:M(m),onMouseLeave:Y(m)}},onClickAway:b}}function Zn(n){return Sn("MuiSnackbarContent",n)}bn("MuiSnackbarContent",["root","message","action"]);const Jn=n=>{const{classes:A}=n;return pn({root:["root"],action:["action"],message:["message"]},Zn,A)},Xn=V(qn,{name:"MuiSnackbarContent",slot:"Root"})(Cn(({theme:n})=>{const A=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(on(n.palette.background.default,A)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:on(n.palette.background.default,A),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),ne=V("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),ee=V("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ae=u.forwardRef(function(A,t){const a=un({props:A,name:"MuiSnackbarContent"}),{action:r,className:s,message:i,role:d="alert",...S}=a,b=a,p=Jn(b);return o.jsxs(Xn,{role:d,elevation:6,className:Pn(p.root,s),ownerState:b,ref:t,...S,children:[o.jsx(ne,{className:p.message,ownerState:b,children:i}),r?o.jsx(ee,{className:p.action,ownerState:b,children:r}):null]})});function oe(n){return Sn("MuiSnackbar",n)}bn("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const te=n=>{const{classes:A,anchorOrigin:t}=n,a={root:["root",`anchorOrigin${H(t.vertical)}${H(t.horizontal)}`]};return pn(a,oe,A)},ae=V("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,A)=>{const{ownerState:t}=n;return[A.root,A[`anchorOrigin${H(t.anchorOrigin.vertical)}${H(t.anchorOrigin.horizontal)}`]]}})(Cn(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:A})=>A.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:A})=>A.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),se=u.forwardRef(function(A,t){const a=un({props:A,name:"MuiSnackbar"}),r=dn(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:i,anchorOrigin:{vertical:d,horizontal:S}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:p,className:g,disableWindowBlurListener:y=!1,message:E,onBlur:M,onClose:Y,onFocus:L,onMouseEnter:l,onMouseLeave:m,open:C,resumeHideDuration:I,slots:_={},slotProps:$={},transitionDuration:P=s,...W}=a,B={...a,anchorOrigin:{vertical:d,horizontal:S},autoHideDuration:b,disableWindowBlurListener:y,transitionDuration:P},U=te(B),{getRootProps:Z,onClickAway:O}=$n(B),[J,R]=u.useState(!0),k={slots:_,slotProps:$},[X,hn]=T("root",{ref:t,className:[U.root,g],elementType:ae,getSlotProps:Z,externalForwardedProps:{...k,...W},ownerState:B}),[vn,{ownerState:xn,...En}]=T("clickAwayListener",{elementType:Gn,externalForwardedProps:k,getSlotProps:z=>({onClickAway:(...v)=>{const In=v[0];z.onClickAway?.(...v),!In?.defaultMuiPrevented&&O(...v)}}),ownerState:B}),[On,wn]=T("content",{elementType:Ae,shouldForwardComponentProp:!0,externalForwardedProps:k,additionalProps:{message:E,action:i},ownerState:B}),[yn,Mn]=T("transition",{elementType:Fn,externalForwardedProps:k,getSlotProps:z=>({onEnter:(...v)=>{z.onEnter?.(...v),R(!1)},onExited:(...v)=>{z.onExited?.(...v),R(!0)}}),additionalProps:{appear:!0,in:C,timeout:P,direction:d==="top"?"down":"up"},ownerState:B});return!C&&J?null:o.jsx(vn,{...En,..._.clickAwayListener&&{ownerState:xn},children:o.jsx(X,{...hn,children:o.jsx(yn,{...Mn,children:p||o.jsx(On,{...wn})})})})});function h(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",A="c002932053aad6f78b6519c50aa6286a86cbdca5",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",statementMap:{0:{start:{line:4,column:2},end:{line:13,column:4}},1:{start:{line:16,column:0},end:{line:21,column:51}},2:{start:{line:18,column:4},end:{line:18,column:52}},3:{start:{line:20,column:4},end:{line:20,column:1058}}},fnMap:{0:{name:"CaretUpBoldIcon",decl:{start:{line:3,column:9},end:{line:3,column:24}},loc:{start:{line:3,column:71},end:{line:14,column:1}},line:3}},branchMap:{0:{loc:{start:{line:3,column:38},end:{line:3,column:47}},type:"default-arg",locations:[{start:{line:3,column:45},end:{line:3,column:47}}],line:3}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx"],names:[],mappings:"AAMI;AANJ,SAAS,eAAe,eAAe;AAIvC,SAAS,gBAAgB,EAAE,WAAW,OAAO,IAAI,WAAW,GAAG,KAAK,GAAc;AAChF,SACE;AAAA,IAAC;AAAA;AAAA,MACE,GAAG;AAAA,MACJ;AAAA,MACA;AAAA,MACA,QAAO;AAAA,MACP,OAAO;AAAA;AAAA,EACT;AAEJ;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c002932053aad6f78b6519c50aa6286a86cbdca5"},s=t[a]||(t[a]={});(!s[n]||s[n].hash!==A)&&(s[n]=r);var i=s[n];return h=function(){return i},i}h();function ln({className:n,size:A=(h().b[0][0]++,16),fillColor:t,...a}){return h().f[0]++,h().s[0]++,o.jsx(zn,{...a,className:n,size:A,weight:"bold",color:t})}h().s[1]++;try{h().s[2]++,ln.displayName="CaretUpBoldIcon",h().s[3]++,ln.__docgenInfo={description:"",displayName:"CaretUpBoldIcon",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",methods:[],props:{fillColor:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"fillColor",required:!1,tags:{},type:{name:"string"}},size:{defaultValue:{value:"16"},declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"number"}},weight:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"weight",required:!1,tags:{},type:{name:"enum",raw:"IconWeight",value:[{value:'"fill"'},{value:'"thin"'},{value:'"light"'},{value:'"regular"'},{value:'"bold"'},{value:'"duotone"'}]}}},tags:{}}}catch{}function gn(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",A="d1a231e48072b2593e3927783bcfee8f22650e3c",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,mBAAmB;AAC1B,OAAO,oBAAoB;AAC3B,OAAO,yBAAyB;AAChC,OAAO,iBAAiB;AACxB,OAAO,uBAAuB;AAC9B,OAAO,6BAA6B;AACpC,OAAO,8BAA8B;AACrC,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,mBAAmB;AAC1B,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,wBAAwB;AAC/B,OAAO,qBAAqB;AAC5B,OAAO,iBAAiB;AACxB,OAAO,mBAAmB;AAC1B,OAAO,yBAAyB;AAChC,OAAO,eAAe;AACtB,OAAO,4BAA4B;AACnC,OAAO,sBAAsB;AAC7B,OAAO,eAAe;AACtB,OAAO,0BAA0B;AACjC,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,wBAAwB;AAC/B,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,eAAe;AACtB,OAAO,oBAAoB;AAC3B,OAAO,0BAA0B;AACjC,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,sBAAsB;AAC7B,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AACxB,OAAO,sBAAsB;AAC7B,OAAO,wBAAwB;AAC/B,OAAO,eAAe;AACtB,OAAO,sBAAsB;AAC7B,OAAO,cAAc;AACrB,OAAO,uBAAuB;AAC9B,OAAO,4BAA4B;AACnC,OAAO,qBAAqB;AAC5B,OAAO,qBAAqB;AAE5B;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d1a231e48072b2593e3927783bcfee8f22650e3c"},s=t[a]||(t[a]={});(!s[n]||s[n].hash!==A)&&(s[n]=r);var i=s[n];return gn=function(){return i},i}gn();function x(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",A="3b091237a9407ee4618722335aee335a6f852005",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:36},end:{line:14,column:1}},3:{start:{line:15,column:27},end:{line:46,column:1}},4:{start:{line:47,column:26},end:{line:58,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,uBAAqD;AAAA,EAChE,UAAU;AAAA,EACV,SAAS;AACX;AAEO,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b091237a9407ee4618722335aee335a6f852005"},s=t[a]||(t[a]={});(!s[n]||s[n].hash!==A)&&(s[n]=r);var i=s[n];return x=function(){return i},i}x();const re=(x().s[0]++,1e4),mn=(x().s[1]++,{width:18,height:20}),ce=(x().s[2]++,{standard:120,compact:60}),An=(x().s[3]++,{success:{icon:Ln,color:Yn[400],severity:"success",ariaLive:"polite"},error:{icon:Tn,color:Dn[400],severity:"error",ariaLive:"assertive"},warning:{icon:Qn,color:Rn[400],severity:"warning",ariaLive:"polite"},info:{icon:Un,color:tn[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Wn,color:tn[400],severity:"info",ariaLive:"assertive"}}),nn=(x().s[4]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function e(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",A="422e3001ba28fc0bd24b212a2ff97125fd8fcd43",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:35,column:16},end:{line:35,column:26}},1:{start:{line:36,column:16},end:{line:36,column:39}},2:{start:{line:37,column:42},end:{line:37,column:74}},3:{start:{line:38,column:34},end:{line:38,column:49}},4:{start:{line:39,column:54},end:{line:39,column:78}},5:{start:{line:40,column:18},end:{line:40,column:64}},6:{start:{line:41,column:2},end:{line:46,column:3}},7:{start:{line:42,column:4},end:{line:42,column:42}},8:{start:{line:43,column:4},end:{line:45,column:5}},9:{start:{line:44,column:6},end:{line:44,column:38}},10:{start:{line:47,column:17},end:{line:47,column:35}},11:{start:{line:48,column:20},end:{line:48,column:31}},12:{start:{line:49,column:21},end:{line:49,column:40}},13:{start:{line:50,column:20},end:{line:50,column:46}},14:{start:{line:51,column:27},end:{line:51,column:101}},15:{start:{line:52,column:18},end:{line:52,column:30}},16:{start:{line:53,column:40},end:{line:53,column:55}},17:{start:{line:54,column:2},end:{line:59,column:25}},18:{start:{line:55,column:15},end:{line:55,column:30}},19:{start:{line:56,column:4},end:{line:56,column:20}},20:{start:{line:56,column:13},end:{line:56,column:20}},21:{start:{line:57,column:29},end:{line:57,column:72}},22:{start:{line:58,column:4},end:{line:58,column:59}},23:{start:{line:60,column:22},end:{line:63,column:3}},24:{start:{line:61,column:4},end:{line:61,column:27}},25:{start:{line:62,column:4},end:{line:62,column:16}},26:{start:{line:64,column:23},end:{line:67,column:3}},27:{start:{line:65,column:4},end:{line:65,column:17}},28:{start:{line:66,column:4},end:{line:66,column:39}},29:{start:{line:66,column:25},end:{line:66,column:39}},30:{start:{line:68,column:31},end:{line:68,column:80}},31:{start:{line:69,column:2},end:{line:180,column:4}},32:{start:{line:76,column:26},end:{line:76,column:43}},33:{start:{line:77,column:26},end:{line:77,column:44}},34:{start:{line:78,column:24},end:{line:78,column:59}},35:{start:{line:183,column:0},end:{line:188,column:51}},36:{start:{line:185,column:4},end:{line:185,column:48}},37:{start:{line:187,column:4},end:{line:187,column:4503}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:22,column:9},end:{line:22,column:22}},loc:{start:{line:34,column:3},end:{line:181,column:1}},line:34},1:{name:"(anonymous_1)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:24},end:{line:59,column:3}},line:54},2:{name:"(anonymous_2)",decl:{start:{line:60,column:22},end:{line:60,column:23}},loc:{start:{line:60,column:28},end:{line:63,column:3}},line:60},3:{name:"(anonymous_3)",decl:{start:{line:64,column:23},end:{line:64,column:24}},loc:{start:{line:64,column:29},end:{line:67,column:3}},line:64},4:{name:"(anonymous_4)",decl:{start:{line:76,column:20},end:{line:76,column:21}},loc:{start:{line:76,column:26},end:{line:76,column:43}},line:76},5:{name:"(anonymous_5)",decl:{start:{line:77,column:20},end:{line:77,column:21}},loc:{start:{line:77,column:26},end:{line:77,column:44}},line:77},6:{name:"(anonymous_6)",decl:{start:{line:78,column:17},end:{line:78,column:18}},loc:{start:{line:78,column:24},end:{line:78,column:59}},line:78}},branchMap:{0:{loc:{start:{line:24,column:2},end:{line:24,column:19}},type:"default-arg",locations:[{start:{line:24,column:9},end:{line:24,column:19}}],line:24},1:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:20},end:{line:28,column:24}}],line:28},2:{loc:{start:{line:31,column:2},end:{line:31,column:30}},type:"default-arg",locations:[{start:{line:31,column:13},end:{line:31,column:30}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:18}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:18}}],line:33},4:{loc:{start:{line:37,column:51},end:{line:37,column:73}},type:"binary-expr",locations:[{start:{line:37,column:51},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:73}}],line:37},5:{loc:{start:{line:40,column:18},end:{line:40,column:64}},type:"binary-expr",locations:[{start:{line:40,column:18},end:{line:40,column:35}},{start:{line:40,column:39},end:{line:40,column:64}}],line:40},6:{loc:{start:{line:41,column:2},end:{line:46,column:3}},type:"if",locations:[{start:{line:41,column:2},end:{line:46,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},7:{loc:{start:{line:43,column:4},end:{line:45,column:5}},type:"if",locations:[{start:{line:43,column:4},end:{line:45,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:43},8:{loc:{start:{line:51,column:27},end:{line:51,column:101}},type:"cond-expr",locations:[{start:{line:51,column:56},end:{line:51,column:91}},{start:{line:51,column:94},end:{line:51,column:101}}],line:51},9:{loc:{start:{line:56,column:4},end:{line:56,column:20}},type:"if",locations:[{start:{line:56,column:4},end:{line:56,column:20}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:56},10:{loc:{start:{line:66,column:4},end:{line:66,column:39}},type:"if",locations:[{start:{line:66,column:4},end:{line:66,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:66},11:{loc:{start:{line:73,column:24},end:{line:73,column:61}},type:"cond-expr",locations:[{start:{line:73,column:46},end:{line:73,column:50}},{start:{line:73,column:53},end:{line:73,column:61}}],line:73},12:{loc:{start:{line:73,column:24},end:{line:73,column:43}},type:"binary-expr",locations:[{start:{line:73,column:24},end:{line:73,column:31}},{start:{line:73,column:35},end:{line:73,column:43}}],line:73},13:{loc:{start:{line:78,column:24},end:{line:78,column:59}},type:"binary-expr",locations:[{start:{line:78,column:24},end:{line:78,column:42}},{start:{line:78,column:46},end:{line:78,column:59}}],line:78},14:{loc:{start:{line:79,column:26},end:{line:79,column:79}},type:"cond-expr",locations:[{start:{line:79,column:49},end:{line:79,column:70}},{start:{line:79,column:73},end:{line:79,column:79}}],line:79},15:{loc:{start:{line:81,column:20},end:{line:81,column:89}},type:"cond-expr",locations:[{start:{line:81,column:43},end:{line:81,column:49}},{start:{line:81,column:52},end:{line:81,column:89}}],line:81},16:{loc:{start:{line:89,column:16},end:{line:89,column:68}},type:"cond-expr",locations:[{start:{line:89,column:50},end:{line:89,column:57}},{start:{line:89,column:60},end:{line:89,column:68}}],line:89},17:{loc:{start:{line:94,column:24},end:{line:94,column:61}},type:"cond-expr",locations:[{start:{line:94,column:38},end:{line:94,column:50}},{start:{line:94,column:53},end:{line:94,column:61}}],line:94},18:{loc:{start:{line:102,column:21},end:{line:102,column:41}},type:"cond-expr",locations:[{start:{line:102,column:36},end:{line:102,column:37}},{start:{line:102,column:40},end:{line:102,column:41}}],line:102},19:{loc:{start:{line:112,column:30},end:{line:112,column:67}},type:"cond-expr",locations:[{start:{line:112,column:44},end:{line:112,column:56}},{start:{line:112,column:59},end:{line:112,column:67}}],line:112},20:{loc:{start:{line:114,column:22},end:{line:114,column:45}},type:"cond-expr",locations:[{start:{line:114,column:36},end:{line:114,column:41}},{start:{line:114,column:44},end:{line:114,column:45}}],line:114},21:{loc:{start:{line:136,column:14},end:{line:150,column:15}},type:"binary-expr",locations:[{start:{line:136,column:14},end:{line:136,column:22}},{start:{line:136,column:26},end:{line:136,column:36}},{start:{line:136,column:56},end:{line:150,column:15}}],line:136},22:{loc:{start:{line:151,column:14},end:{line:174,column:15}},type:"binary-expr",locations:[{start:{line:151,column:14},end:{line:151,column:23}},{start:{line:151,column:43},end:{line:174,column:15}}],line:151}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0,0],22:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"422e3001ba28fc0bd24b212a2ff97125fd8fcd43"},s=t[a]||(t[a]={});(!s[n]||s[n].hash!==A)&&(s[n]=r);var i=s[n];return e=function(){return i},i}e();function Q({state:n,size:A=(e().b[0][0]++,"standard"),message:t,onClose:a,onAction:r,dismissOnAction:s=(e().b[1][0]++,!0),actionLabel:i,open:d,duration:S=(e().b[2][0]++,re),persist:b,showClose:p=(e().b[3][0]++,!0)}){e().f[0]++;const g=(e().s[0]++,dn()),{t:y}=(e().s[1]++,jn("input")),[E,M]=(e().s[2]++,u.useState((e().b[4][0]++,d??(e().b[4][1]++,!0)))),[Y,L]=(e().s[3]++,u.useState(!1)),[l,m]=(e().s[4]++,u.useState(d)),C=(e().s[5]++,e().b[5][0]++,b??(e().b[5][1]++,n==="action-needed"));e().s[6]++,d!==l?(e().b[6][0]++,e().s[7]++,m(d),e().s[8]++,d!==void 0?(e().b[7][0]++,e().s[9]++,M(d)):e().b[7][1]++):e().b[6][1]++;const I=(e().s[10]++,An[n]),_=(e().s[11]++,I.icon),$=(e().s[12]++,A==="standard"),P=(e().s[13]++,ce[A]),W=(e().s[14]++,t.length>P?(e().b[8][0]++,`${t.slice(0,P)}...`):(e().b[8][1]++,t)),B=(e().s[15]++,u.useRef(null)),[U,Z]=(e().s[16]++,u.useState(!1));e().s[17]++,u.useLayoutEffect(()=>{e().f[1]++;const k=(e().s[18]++,B.current);if(e().s[19]++,k)e().b[9][1]++;else{e().b[9][0]++,e().s[20]++;return}const X=(e().s[21]++,parseFloat(getComputedStyle(k).lineHeight));e().s[22]++,Z(k.clientHeight>X+4)},[W]),e().s[23]++;const O=()=>{e().f[2]++,e().s[24]++,M(!1),e().s[25]++,a?.()};e().s[26]++;const J=()=>{e().f[3]++,e().s[27]++,r?.(),e().s[28]++,s?(e().b[10][0]++,e().s[29]++,O()):e().b[10][1]++},R=(e().s[30]++,Nn("(prefers-reduced-motion: reduce)"));return e().s[31]++,o.jsx(se,{open:E,autoHideDuration:(e().b[12][0]++,C||(e().b[12][1]++,Y)?(e().b[11][0]++,null):(e().b[11][1]++,S)),onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(e().f[4]++,e().s[32]++,L(!0)),onMouseLeave:()=>(e().f[5]++,e().s[33]++,L(!1)),onKeyDown:k=>(e().f[6]++,e().s[34]++,e().b[13][0]++,k.key==="Escape"&&(e().b[13][1]++,O())),transitionDuration:R?(e().b[14][0]++,{enter:0,exit:0}):(e().b[14][1]++,void 0),sx:{transition:R?(e().b[15][0]++,"none"):(e().b[15][1]++,"bottom 150ms ease-in-out !important")},slots:{transition:Hn},children:o.jsxs(f,{role:I.ariaLive==="assertive"?(e().b[16][0]++,"alert"):(e().b[16][1]++,"status"),"aria-live":I.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:U?(e().b[17][0]++,"flex-start"):(e().b[17][1]++,"center"),gap:g.spacing(1),width:`${nn[A].width}px`,maxHeight:`${nn[A].maxHeight}px`,backgroundColor:an[900],color:an[50],borderRadius:"8px",padding:nn[A].padding,opacity:E?(e().b[18][0]++,1):(e().b[18][1]++,0),transition:"opacity 200ms ease-out"},children:[o.jsx(f,{sx:{flexShrink:0,display:"flex",alignItems:U?(e().b[19][0]++,"flex-start"):(e().b[19][1]++,"center"),justifyContent:"center",pt:U?(e().b[20][0]++,"2px"):(e().b[20][1]++,0),"& svg":{width:`${mn.width}px !important`,height:`${mn.height}px !important`}},children:o.jsx(_,{fillColor:I.color,"aria-hidden":!0})}),o.jsx(Vn,{ref:B,variant:"body2",sx:{flex:1,minWidth:0},children:W}),o.jsxs(f,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(e().b[21][0]++,r&&(e().b[21][1]++,$)&&(e().b[21][2]++,o.jsx(sn,{size:"small",variant:"outlined",color:"light",onClick:J,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:i}))),(e().b[22][0]++,p&&(e().b[22][1]++,o.jsx(sn,{variant:"outlined",color:"ghost",onClick:O,sx:{minWidth:"auto",padding:g.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":y("components.RcSesSnackbar.aria.close"),children:o.jsx(_n,{})})))]})]})})}e().s[35]++;try{e().s[36]++,Q.displayName="RcSesSnackbar",e().s[37]++,Q.__docgenInfo={description:"",displayName:"RcSesSnackbar",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",methods:[],props:{state:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"state",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"enum",raw:"SnackbarState",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"action-needed"'}]}},message:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"message",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"string"}},size:{defaultValue:{value:"standard"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"size",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"enum",raw:"SnackbarSize",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},actionLabel:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"actionLabel",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},open:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"open",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"dismissOnAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"duration",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"number"}},persist:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"persist",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"showClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}function c(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",A="bf46988b50e1501c6fe361b2be7bb787c5705a7b",t=globalThis,a="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:56,column:51}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:263}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI,SAGI,KAHJ;AAhDJ;AAAA,EAEE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AAEP,OAAO,mBAAmB;AAoB1B,MAAM,kBAAkB,cAA+C,MAAS;AAEzE,gBAAS,sBAAsB,EAAE,SAAS,GAA4B;AAC3E,QAAM,CAAC,UAAU,WAAW,IAAI,SAAgC,IAAI;AAEpE,QAAM,eAAe,YAAY,CAAC,WAA2B;AAC3D,gBAAY,MAAM;AAAA,EACpB,GAAG,CAAC,CAAC;AAEL,QAAM,eAAe,YAAY,MAAM;AACrC,gBAAY,IAAI;AAAA,EAClB,GAAG,CAAC,CAAC;AAEL,QAAM,QAAQ;AAAA,IACZ,OAAO,EAAE,cAAc,aAAa;AAAA,IACpC,CAAC,cAAc,YAAY;AAAA,EAC7B;AAEA,SACE,qBAAC,gBAAgB,UAAhB,EAAyB,OACvB;AAAA;AAAA,IACA,YACC;AAAA,MAAC;AAAA;AAAA,QACC,OAAO,SAAS;AAAA,QAChB,SAAS,SAAS;AAAA,QAClB,MAAM,SAAS;AAAA,QACf,UAAU,SAAS;AAAA,QACnB,aAAa,SAAS;AAAA,QACtB,UAAU,SAAS;AAAA,QACnB,SAAS,SAAS;AAAA,QAClB,iBAAiB,SAAS;AAAA,QAC1B,WAAW,SAAS,aAAa;AAAA,QACjC,SAAS;AAAA,QACT,MAAI;AAAA;AAAA,IACN;AAAA,KAEJ;AAEJ;AAEO,gBAAS,cAAc;AAC5B,QAAM,UAAU,WAAW,eAAe;AAC1C,MAAI,CAAC,SAAS;AACZ,UAAM,IAAI,MAAM,uDAAuD;AAAA,EACzE;AACA,SAAO;AACT;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf46988b50e1501c6fe361b2be7bb787c5705a7b"},s=t[a]||(t[a]={});(!s[n]||s[n].hash!==A)&&(s[n]=r);var i=s[n];return c=function(){return i},i}c();const kn=(c().s[0]++,u.createContext(void 0));function en({children:n}){c().f[0]++;const[A,t]=(c().s[1]++,u.useState(null)),a=(c().s[2]++,u.useCallback(i=>{c().f[1]++,c().s[3]++,t(i)},[])),r=(c().s[4]++,u.useCallback(()=>{c().f[2]++,c().s[5]++,t(null)},[])),s=(c().s[6]++,u.useMemo(()=>(c().f[3]++,c().s[7]++,{showSnackbar:a,hideSnackbar:r}),[a,r]));return c().s[8]++,o.jsxs(kn.Provider,{value:s,children:[n,(c().b[0][0]++,A&&(c().b[0][1]++,o.jsx(Q,{state:A.state,message:A.message,size:A.size,onAction:A.onAction,actionLabel:A.actionLabel,duration:A.duration,persist:A.persist,dismissOnAction:A.dismissOnAction,showClose:(c().b[1][0]++,A.showClose??(c().b[1][1]++,!0)),onClose:r,open:!0})))]})}function D(){c().f[4]++;const n=(c().s[9]++,u.useContext(kn));if(c().s[10]++,n)c().b[2][1]++;else throw c().b[2][0]++,c().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return c().s[12]++,n}c().s[13]++;try{c().s[14]++,en.displayName="RcSesSnackbarProvider",c().s[15]++,en.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",methods:[],props:{},tags:{}}}catch{}const fn=n=>{if(n==="error")return"error";if(n==="warning")return"warning";if(n==="info")return"info"},Bn=n=>n.charAt(0).toUpperCase()+n.slice(1).replace("-"," "),EA={title:"Molecules/Snackbar",component:Q,tags:["autodocs"],decorators:[n=>o.jsx(en,{children:o.jsx(f,{sx:{p:4,pb:16,minHeight:"300px"},children:o.jsx(n,{})})})]},ie=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],le=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],j={render:n=>o.jsx(f,{sx:{pb:12},children:o.jsx(Q,{...n},`${n.state}-${n.message}-${n.size}-${n.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function me(){const{showSnackbar:n}=D();return o.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:ie.map(({state:A,message:t})=>{const a=An[A].icon;return o.jsxs(w,{variant:"contained",color:fn(A),startIcon:o.jsx(a,{}),onClick:()=>n({state:A,message:t,size:"compact"}),children:[Bn(A)," (Compact)"]},A)})})}const N={render:()=>o.jsx(me,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
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
})`}}}};function ue(){const{showSnackbar:n}=D();return o.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:le.map(({state:A,message:t,actionLabel:a})=>{const r=An[A].icon;return o.jsxs(w,{variant:"contained",color:fn(A),startIcon:o.jsx(r,{}),onClick:()=>n({state:A,message:t,actionLabel:a,size:"standard",onAction:()=>{console.log(`${a} clicked`)}}),children:[Bn(A)," (Standard)"]},A)})})}const K={render:()=>o.jsx(ue,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
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
})`}}}};function de(){const{showSnackbar:n}=D();return o.jsxs(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[o.jsx(w,{variant:"contained",onClick:()=>n({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),o.jsx(w,{variant:"contained",onClick:()=>n({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const G={render:()=>o.jsx(de,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
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
})`}}}};function pe(){const{showSnackbar:n}=D();return o.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:o.jsx(w,{variant:"contained",onClick:()=>n({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const q={render:()=>o.jsx(pe,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
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
})`}}}};function Ce(){const{showSnackbar:n}=D();return o.jsx(f,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:o.jsx(w,{variant:"contained",color:"info",onClick:()=>n({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.",showClose:!0}),children:"Long Text (Truncation)"})})}const F={render:()=>o.jsx(Ce,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const OA=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{N as CompactWithText,G as CustomDuration,j as Default,F as LongText,q as Persistent,K as StandardWithButtons,OA as __namedExportsOrder,EA as default};
//# sourceMappingURL=Snackbar.stories-BObwmQEw.js.map
