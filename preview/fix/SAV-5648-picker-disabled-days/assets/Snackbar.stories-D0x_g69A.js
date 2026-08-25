import{r as d,j as s,h as Bn,f as Qn,a7 as dn,i as on,p as pn,X as Ln,I as Yn,w as Dn,W as _n,e as Wn,s as zn,b as Nn,g as Cn,C as jn}from"./iframe-DKIA2rOT.js";import{R as Sn}from"./index-DcH3HdUN.js";import"./Logo-DWk1INvm.js";import"./ArrowLeftIcon-BsUXUDAC.js";import"./ArrowRightIcon-2Ra9FivH.js";import"./WarningCircleIcon-gXDKGD5z.js";import"./CaretLeftBoldIcon-GAJtwcXe.js";import"./CaretDownFill-DNdFmDEl.js";import"./CaretLeftIcon-b8bgxD_I.js";import"./CaretRightBoldIcon-BgyJEsSp.js";import{o as Kn}from"./PlusIcon-lzu8Myg3.js";import"./CheckBoldIcon-q6jX9gKv.js";import"./CheckIcon-CwrnYtjJ.js";import"./CheckUncheckedBoldIcon-DjqFejaK.js";import"./CircleFilledIcon-tJCmvphp.js";import"./ExpandChevronsIcon-CCzpmEBb.js";import"./DotCircleFilledIcon-c5Y31plN.js";import"./MagnifyingGlassIcon-Bcc4JIXM.js";import"./MinusBoldIcon-_jt71mNw.js";import"./PencilSimpleLineIcon-CeHpTE7c.js";import"./PlusBoldIcon-DDPIFHFr.js";import"./QuestionFillIcon-CMZQZihU.js";import"./QuestionIcon-BS48MZfg.js";import"./UploadSimpleIcon-n-7Tw4U_.js";import"./UserIcon-BCZPmg7q.js";import{X as Gn}from"./XCircleFillIcon-SzlLyqbl.js";import{a as mn,b as Fn,u as qn,c as bn}from"./useReducedMotion-D3pzCHL1.js";import{u as $n}from"./useTranslation-r072frdu.js";import{u as Vn}from"./index-BkzgOx3l.js";import{u as Hn}from"./useTimeout-FpvsUoOx.js";import{e as gn}from"./mergeSlotProps-B276xKU6.js";import{s as an}from"./styled-D2Kg73AK.js";import{c as xn,m as En}from"./memoTheme-CJhLlGp2.js";import{g as vn,a as yn}from"./generateUtilityClasses-DGi4yQgU.js";import{u as H}from"./useSlot-UVVr_XRt.js";import{C as Xn}from"./ClickAwayListener-BaQBkzlH.js";import{P as Zn}from"./Paper-BUNYPuTN.js";import{G as Jn}from"./Grow-BbeeRpXV.js";import{T as ne}from"./Transition-CWzsbyhP.js";import{n as j,d as ee,r as Ae,a as fn}from"./utils-cxgvJEOf.js";import{g as te}from"./getReactElementRef-BTzKsJDh.js";import{d as oe}from"./debounce-Be36O1Ab.js";import{o as wn}from"./ownerWindow-HkKU3E4x.js";import{B as M}from"./Box-CdkPCbnp.js";import{T as ae}from"./Typography-e7X6nYQp.js";import{B as K}from"./Button-HOzZfRBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbN1GPcL.js";import"./CircularProgress-Dm8EDMQr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CaretLeft.es-BYSDdtDx.js";import"./Minus.es-CzYZtly5.js";import"./Plus.es-4nF4j-45.js";import"./Question.es-DRMdPs4k.js";import"./index-Izin7uBw.js";import"./getThemeProps-D8sQR2PQ.js";import"./ownerDocument-DW-IO8s5.js";import"./contains-DSD8CO72.js";import"./ButtonBase-BLZeRCIM.js";import"./isFocusVisible-B8k4qzLc.js";const se={visibility:"hidden"},re={};function ce(n){return typeof n=="string"&&/^translate\(.+,\s*.+\)$/.test(n)}function ie(n,e,a,t=re){const{resetInlineTransform:r=!0}=t,o=a&&a.getBoundingClientRect(),c=wn(e);let m,C;if(r){const b=e.style.transform,v=e.style.transition;e.style.transition="",e.style.transform="",m=e.getBoundingClientRect(),C=c.getComputedStyle(e).getPropertyValue("transform"),e.style.transform=b,e.style.transition=v}else m=e.getBoundingClientRect(),C=c.getComputedStyle(e).getPropertyValue("transform");const{offsetX:S,offsetY:g}=ee(C);return n==="left"?o?`translateX(${o.right+S-m.left}px)`:`translateX(${c.innerWidth+S-m.left}px)`:n==="right"?o?`translateX(-${m.right-o.left-S}px)`:`translateX(-${m.left+m.width-S}px)`:n==="up"?o?`translateY(${o.bottom+g-m.top}px)`:`translateY(${c.innerHeight+g-m.top}px)`:o?`translateY(-${m.top-o.top+m.height-g}px)`:`translateY(-${m.top+m.height-g}px)`}function le(n){return typeof n=="function"?n():n}function X(n,e,a,t){const r=le(a),o=ie(n,e,r,t);o&&(e.style.transform=o)}const me=d.forwardRef(function(e,a){const t=mn(),r={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:c,appear:m=!0,children:C,container:S,disablePrefersReducedMotion:g=!1,direction:b="down",easing:v=r,in:k,onEnter:R,onEntered:D,onEntering:Q,onExit:u,onExited:l,onExiting:h,style:y,timeout:I=o,..._}=e,w=Fn(t.motion.reducedMotion,g),f=d.useRef(null),x=d.useRef(!1),U=qn(te(C),f,a),G=j(f,(p,B)=>{X(b,p,S),w.shouldReduceMotion||Ae(p),R&&R(p,B)}),W=j(f,(p,B)=>{const O=fn({timeout:I,style:y,easing:v},{mode:"enter"}),E=w.getTransitionTiming({duration:O.duration,delay:O.delay});p.style.transition=t.transitions.create("transform",{duration:E.duration,easing:O.easing,delay:E.delay}),p.style.transform="none",Q&&Q(p,B)}),P=j(f,D),z=j(f,h),N=j(f,p=>{const B=fn({timeout:I,style:y,easing:v},{mode:"exit"}),O=w.getTransitionTiming({duration:B.duration,delay:B.delay});p.style.transition=t.transitions.create("transform",{duration:O.duration,easing:B.easing,delay:O.delay});const E=ce(p.style.transform);x.current=E,X(b,p,S,{resetInlineTransform:!E}),u&&u(p)}),sn=j(f,p=>{x.current=!1,p.style.transition="",l&&l(p)}),rn=c?p=>{c(f.current,p)}:void 0,$=d.useCallback(()=>{f.current&&X(b,f.current,S)},[b,S]);return d.useEffect(()=>{if(k||b==="down"||b==="right")return;const p=oe(()=>{f.current&&X(b,f.current,S)}),B=wn(f.current);return B.addEventListener("resize",p),()=>{p.clear(),B.removeEventListener("resize",p)}},[b,k,S]),d.useEffect(()=>{!k&&!x.current&&$()},[k,$]),s.jsx(ne,{nodeRef:f,onEnter:G,onEntered:P,onEntering:W,onExit:N,onExited:sn,onExiting:z,addEndListener:rn,appear:m,in:k,reduceMotion:w.shouldReduceMotion,timeout:I,..._,children:(p,{ownerState:B,...O})=>{let E;return p==="exited"&&!k?E=y||C.props.style?{visibility:"hidden",...y,...C.props.style}:se:y&&C.props.style?E={...y,...C.props.style}:E=y||C.props.style,d.cloneElement(C,{ref:U,style:E,...O})}})});function ue(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:a=!1,onClose:t,open:r,resumeHideDuration:o}=n,c=Hn();d.useEffect(()=>{if(!r)return;function u(l){l.defaultPrevented||l.key==="Escape"&&t?.(l,"escapeKeyDown")}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[r,t]);const m=bn((u,l)=>{t?.(u,l)}),C=bn(u=>{!t||u==null||c.start(u,()=>{m(null,"timeout")})});d.useEffect(()=>(r&&C(e),c.clear),[r,e,C,c]);const S=u=>{t?.(u,"clickaway")},g=c.clear,b=d.useCallback(()=>{e!=null&&C(o??e*.5)},[e,o,C]),v=u=>l=>{const h=u.onBlur;h?.(l),b()},k=u=>l=>{const h=u.onFocus;h?.(l),g()},R=u=>l=>{const h=u.onMouseEnter;h?.(l),g()},D=u=>l=>{const h=u.onMouseLeave;h?.(l),b()};return d.useEffect(()=>{if(!a&&r)return window.addEventListener("focus",b),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",g)}},[a,r,b,g]),{getRootProps:(u={})=>{const l={...gn(n),...gn(u)};return{role:"presentation",...u,...l,onBlur:v(l),onFocus:k(l),onMouseEnter:R(l),onMouseLeave:D(l)}},onClickAway:S}}function de(n){return vn("MuiSnackbarContent",n)}yn("MuiSnackbarContent",["root","message","action"]);const pe=n=>{const{classes:e}=n;return xn({root:["root"],action:["action"],message:["message"]},de,e)},Ce=an(Zn,{name:"MuiSnackbarContent",slot:"Root"})(En(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(dn(n.palette.background.default,e)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:dn(n.palette.background.default,e),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Se=an("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),be=an("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ge=d.forwardRef(function(e,a){const t=Bn({props:e,name:"MuiSnackbarContent"}),{action:r,className:o,message:c,role:m="alert",...C}=t,S=t,g=pe(S);return s.jsxs(Ce,{role:m,elevation:6,className:Qn(g.root,o),ownerState:S,ref:a,...C,children:[s.jsx(Se,{className:g.message,ownerState:S,children:c}),r?s.jsx(be,{className:g.action,ownerState:S,children:r}):null]})});function fe(n){return vn("MuiSnackbar",n)}yn("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ke=n=>{const{classes:e,anchorOrigin:a}=n,t={root:["root",`anchorOrigin${on(a.vertical)}${on(a.horizontal)}`]};return xn(t,fe,e)},he=an("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[e.root,e[`anchorOrigin${on(a.anchorOrigin.vertical)}${on(a.anchorOrigin.horizontal)}`]]}})(En(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:e})=>e.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:e})=>e.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Be=d.forwardRef(function(e,a){const t=Bn({props:e,name:"MuiSnackbar"}),r=mn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:m,horizontal:C}={vertical:"bottom",horizontal:"left"},autoHideDuration:S=null,children:g,className:b,disableWindowBlurListener:v=!1,message:k,onBlur:R,onClose:D,onFocus:Q,onMouseEnter:u,onMouseLeave:l,open:h,resumeHideDuration:y,slots:I={},slotProps:_={},transitionDuration:w=o,...f}=t,x={...t,anchorOrigin:{vertical:m,horizontal:C},autoHideDuration:S,disableWindowBlurListener:v,transitionDuration:w},U=ke(x),{getRootProps:G,onClickAway:W}=ue(x),[P,z]=d.useState(!0),N={slots:I,slotProps:_},[sn,rn]=H("root",{ref:a,className:[U.root,b],elementType:he,getSlotProps:G,externalForwardedProps:{...N,...f},ownerState:x}),[$,{ownerState:p,...B}]=H("clickAwayListener",{elementType:Xn,externalForwardedProps:N,getSlotProps:V=>({onClickAway:(...L)=>{const Tn=L[0];V.onClickAway?.(...L),!Tn?.defaultMuiPrevented&&W(...L)}}),ownerState:x}),[O,E]=H("content",{elementType:ge,shouldForwardComponentProp:!0,externalForwardedProps:N,additionalProps:{message:k,action:c},ownerState:x}),[Rn,Un]=H("transition",{elementType:Jn,externalForwardedProps:N,getSlotProps:V=>({onEnter:(...L)=>{V.onEnter?.(...L),z(!1)},onExited:(...L)=>{V.onExited?.(...L),z(!0)}}),additionalProps:{appear:!0,in:h,timeout:w,direction:m==="top"?"down":"up"},ownerState:x});return!h&&P?null:s.jsx($,{...B,...I.clickAwayListener&&{ownerState:p},children:s.jsx(sn,{...rn,children:s.jsx(Rn,{...Un,children:g||s.jsx(O,{...E})})})})});function T(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",e="c002932053aad6f78b6519c50aa6286a86cbdca5",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",statementMap:{0:{start:{line:4,column:2},end:{line:13,column:4}},1:{start:{line:16,column:0},end:{line:21,column:51}},2:{start:{line:18,column:4},end:{line:18,column:52}},3:{start:{line:20,column:4},end:{line:20,column:1058}}},fnMap:{0:{name:"CaretUpBoldIcon",decl:{start:{line:3,column:9},end:{line:3,column:24}},loc:{start:{line:3,column:71},end:{line:14,column:1}},line:3}},branchMap:{0:{loc:{start:{line:3,column:38},end:{line:3,column:47}},type:"default-arg",locations:[{start:{line:3,column:45},end:{line:3,column:47}}],line:3}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx"],names:[],mappings:"AAMI;AANJ,SAAS,eAAe,eAAe;AAIvC,SAAS,gBAAgB,EAAE,WAAW,OAAO,IAAI,WAAW,GAAG,KAAK,GAAc;AAChF,SACE;AAAA,IAAC;AAAA;AAAA,MACE,GAAG;AAAA,MACJ;AAAA,MACA;AAAA,MACA,QAAO;AAAA,MACP,OAAO;AAAA;AAAA,EACT;AAEJ;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c002932053aad6f78b6519c50aa6286a86cbdca5"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==e)&&(o[n]=r);var c=o[n];return T=function(){return c},c}T();function kn({className:n,size:e=(T().b[0][0]++,16),fillColor:a,...t}){return T().f[0]++,T().s[0]++,s.jsx(Kn,{...t,className:n,size:e,weight:"bold",color:a})}T().s[1]++;try{T().s[2]++,kn.displayName="CaretUpBoldIcon",T().s[3]++,kn.__docgenInfo={description:"",displayName:"CaretUpBoldIcon",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",methods:[],props:{fillColor:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"fillColor",required:!1,tags:{},type:{name:"string"}},size:{defaultValue:{value:"16"},declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"number"}},weight:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"weight",required:!1,tags:{},type:{name:"enum",raw:"IconWeight",value:[{value:'"fill"'},{value:'"thin"'},{value:'"light"'},{value:'"regular"'},{value:'"bold"'},{value:'"duotone"'}]}}},tags:{}}}catch{}function On(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",e="90e183b3259e9b2b6f83d07572303e1b1379155a",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,mBAAmB;AAC1B,OAAO,oBAAoB;AAC3B,OAAO,yBAAyB;AAChC,OAAO,iBAAiB;AACxB,OAAO,uBAAuB;AAC9B,OAAO,6BAA6B;AACpC,OAAO,8BAA8B;AACrC,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,mBAAmB;AAC1B,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,wBAAwB;AAC/B,OAAO,qBAAqB;AAC5B,OAAO,iBAAiB;AACxB,OAAO,mBAAmB;AAC1B,OAAO,yBAAyB;AAChC,OAAO,eAAe;AACtB,OAAO,4BAA4B;AACnC,OAAO,sBAAsB;AAC7B,OAAO,eAAe;AACtB,OAAO,0BAA0B;AACjC,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,wBAAwB;AAC/B,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,eAAe;AACtB,OAAO,oBAAoB;AAC3B,OAAO,0BAA0B;AACjC,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,sBAAsB;AAC7B,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AACxB,OAAO,wBAAwB;AAC/B,OAAO,eAAe;AACtB,OAAO,sBAAsB;AAC7B,OAAO,cAAc;AACrB,OAAO,uBAAuB;AAC9B,OAAO,4BAA4B;AACnC,OAAO,qBAAqB;AAC5B,OAAO,qBAAqB;AAE5B;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"90e183b3259e9b2b6f83d07572303e1b1379155a"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==e)&&(o[n]=r);var c=o[n];return On=function(){return c},c}On();function Y(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",e="3b091237a9407ee4618722335aee335a6f852005",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:36},end:{line:14,column:1}},3:{start:{line:15,column:27},end:{line:46,column:1}},4:{start:{line:47,column:26},end:{line:58,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,uBAAqD;AAAA,EAChE,UAAU;AAAA,EACV,SAAS;AACX;AAEO,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b091237a9407ee4618722335aee335a6f852005"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==e)&&(o[n]=r);var c=o[n];return Y=function(){return c},c}Y();const xe=(Y().s[0]++,1e4),hn=(Y().s[1]++,{width:18,height:20}),Ee=(Y().s[2]++,{standard:120,compact:60}),un=(Y().s[3]++,{success:{icon:Nn,color:zn[400],severity:"success",ariaLive:"polite"},error:{icon:Gn,color:Wn[400],severity:"error",ariaLive:"assertive"},warning:{icon:_n,color:Dn[400],severity:"warning",ariaLive:"polite"},info:{icon:Yn,color:pn[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Ln,color:pn[400],severity:"info",ariaLive:"assertive"}}),cn=(Y().s[4]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function A(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",e="9f24ae3dcf76356dba45026e768ce6f40a17d28d",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:35,column:16},end:{line:35,column:26}},1:{start:{line:36,column:16},end:{line:36,column:39}},2:{start:{line:37,column:42},end:{line:37,column:74}},3:{start:{line:38,column:34},end:{line:38,column:49}},4:{start:{line:39,column:18},end:{line:39,column:64}},5:{start:{line:40,column:2},end:{line:44,column:23}},6:{start:{line:41,column:4},end:{line:43,column:5}},7:{start:{line:42,column:6},end:{line:42,column:38}},8:{start:{line:45,column:17},end:{line:45,column:35}},9:{start:{line:46,column:20},end:{line:46,column:31}},10:{start:{line:47,column:21},end:{line:47,column:40}},11:{start:{line:48,column:20},end:{line:48,column:46}},12:{start:{line:49,column:27},end:{line:49,column:101}},13:{start:{line:50,column:18},end:{line:50,column:30}},14:{start:{line:51,column:40},end:{line:51,column:55}},15:{start:{line:52,column:2},end:{line:57,column:25}},16:{start:{line:53,column:15},end:{line:53,column:30}},17:{start:{line:54,column:4},end:{line:54,column:20}},18:{start:{line:54,column:13},end:{line:54,column:20}},19:{start:{line:55,column:29},end:{line:55,column:72}},20:{start:{line:56,column:4},end:{line:56,column:59}},21:{start:{line:58,column:22},end:{line:61,column:3}},22:{start:{line:59,column:4},end:{line:59,column:27}},23:{start:{line:60,column:4},end:{line:60,column:16}},24:{start:{line:62,column:23},end:{line:65,column:3}},25:{start:{line:63,column:4},end:{line:63,column:17}},26:{start:{line:64,column:4},end:{line:64,column:39}},27:{start:{line:64,column:25},end:{line:64,column:39}},28:{start:{line:66,column:31},end:{line:66,column:80}},29:{start:{line:67,column:2},end:{line:178,column:4}},30:{start:{line:74,column:26},end:{line:74,column:43}},31:{start:{line:75,column:26},end:{line:75,column:44}},32:{start:{line:76,column:24},end:{line:76,column:59}},33:{start:{line:181,column:0},end:{line:186,column:51}},34:{start:{line:183,column:4},end:{line:183,column:48}},35:{start:{line:185,column:4},end:{line:185,column:4503}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:22,column:9},end:{line:22,column:22}},loc:{start:{line:34,column:3},end:{line:179,column:1}},line:34},1:{name:"(anonymous_1)",decl:{start:{line:40,column:12},end:{line:40,column:13}},loc:{start:{line:40,column:18},end:{line:44,column:3}},line:40},2:{name:"(anonymous_2)",decl:{start:{line:52,column:18},end:{line:52,column:19}},loc:{start:{line:52,column:24},end:{line:57,column:3}},line:52},3:{name:"(anonymous_3)",decl:{start:{line:58,column:22},end:{line:58,column:23}},loc:{start:{line:58,column:28},end:{line:61,column:3}},line:58},4:{name:"(anonymous_4)",decl:{start:{line:62,column:23},end:{line:62,column:24}},loc:{start:{line:62,column:29},end:{line:65,column:3}},line:62},5:{name:"(anonymous_5)",decl:{start:{line:74,column:20},end:{line:74,column:21}},loc:{start:{line:74,column:26},end:{line:74,column:43}},line:74},6:{name:"(anonymous_6)",decl:{start:{line:75,column:20},end:{line:75,column:21}},loc:{start:{line:75,column:26},end:{line:75,column:44}},line:75},7:{name:"(anonymous_7)",decl:{start:{line:76,column:17},end:{line:76,column:18}},loc:{start:{line:76,column:24},end:{line:76,column:59}},line:76}},branchMap:{0:{loc:{start:{line:24,column:2},end:{line:24,column:19}},type:"default-arg",locations:[{start:{line:24,column:9},end:{line:24,column:19}}],line:24},1:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:20},end:{line:28,column:24}}],line:28},2:{loc:{start:{line:31,column:2},end:{line:31,column:30}},type:"default-arg",locations:[{start:{line:31,column:13},end:{line:31,column:30}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:18}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:18}}],line:33},4:{loc:{start:{line:37,column:51},end:{line:37,column:73}},type:"binary-expr",locations:[{start:{line:37,column:51},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:73}}],line:37},5:{loc:{start:{line:39,column:18},end:{line:39,column:64}},type:"binary-expr",locations:[{start:{line:39,column:18},end:{line:39,column:35}},{start:{line:39,column:39},end:{line:39,column:64}}],line:39},6:{loc:{start:{line:41,column:4},end:{line:43,column:5}},type:"if",locations:[{start:{line:41,column:4},end:{line:43,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},7:{loc:{start:{line:49,column:27},end:{line:49,column:101}},type:"cond-expr",locations:[{start:{line:49,column:56},end:{line:49,column:91}},{start:{line:49,column:94},end:{line:49,column:101}}],line:49},8:{loc:{start:{line:54,column:4},end:{line:54,column:20}},type:"if",locations:[{start:{line:54,column:4},end:{line:54,column:20}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:54},9:{loc:{start:{line:64,column:4},end:{line:64,column:39}},type:"if",locations:[{start:{line:64,column:4},end:{line:64,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:64},10:{loc:{start:{line:71,column:24},end:{line:71,column:61}},type:"cond-expr",locations:[{start:{line:71,column:46},end:{line:71,column:50}},{start:{line:71,column:53},end:{line:71,column:61}}],line:71},11:{loc:{start:{line:71,column:24},end:{line:71,column:43}},type:"binary-expr",locations:[{start:{line:71,column:24},end:{line:71,column:31}},{start:{line:71,column:35},end:{line:71,column:43}}],line:71},12:{loc:{start:{line:76,column:24},end:{line:76,column:59}},type:"binary-expr",locations:[{start:{line:76,column:24},end:{line:76,column:42}},{start:{line:76,column:46},end:{line:76,column:59}}],line:76},13:{loc:{start:{line:77,column:26},end:{line:77,column:79}},type:"cond-expr",locations:[{start:{line:77,column:49},end:{line:77,column:70}},{start:{line:77,column:73},end:{line:77,column:79}}],line:77},14:{loc:{start:{line:79,column:20},end:{line:79,column:89}},type:"cond-expr",locations:[{start:{line:79,column:43},end:{line:79,column:49}},{start:{line:79,column:52},end:{line:79,column:89}}],line:79},15:{loc:{start:{line:87,column:16},end:{line:87,column:68}},type:"cond-expr",locations:[{start:{line:87,column:50},end:{line:87,column:57}},{start:{line:87,column:60},end:{line:87,column:68}}],line:87},16:{loc:{start:{line:92,column:24},end:{line:92,column:61}},type:"cond-expr",locations:[{start:{line:92,column:38},end:{line:92,column:50}},{start:{line:92,column:53},end:{line:92,column:61}}],line:92},17:{loc:{start:{line:100,column:21},end:{line:100,column:41}},type:"cond-expr",locations:[{start:{line:100,column:36},end:{line:100,column:37}},{start:{line:100,column:40},end:{line:100,column:41}}],line:100},18:{loc:{start:{line:110,column:30},end:{line:110,column:67}},type:"cond-expr",locations:[{start:{line:110,column:44},end:{line:110,column:56}},{start:{line:110,column:59},end:{line:110,column:67}}],line:110},19:{loc:{start:{line:112,column:22},end:{line:112,column:45}},type:"cond-expr",locations:[{start:{line:112,column:36},end:{line:112,column:41}},{start:{line:112,column:44},end:{line:112,column:45}}],line:112},20:{loc:{start:{line:134,column:14},end:{line:148,column:15}},type:"binary-expr",locations:[{start:{line:134,column:14},end:{line:134,column:22}},{start:{line:134,column:26},end:{line:134,column:36}},{start:{line:134,column:56},end:{line:148,column:15}}],line:134},21:{loc:{start:{line:149,column:14},end:{line:172,column:15}},type:"binary-expr",locations:[{start:{line:149,column:14},end:{line:149,column:23}},{start:{line:149,column:43},end:{line:172,column:15}}],line:149}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0,0],21:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9f24ae3dcf76356dba45026e768ce6f40a17d28d"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==e)&&(o[n]=r);var c=o[n];return A=function(){return c},c}A();function F({state:n,size:e=(A().b[0][0]++,"standard"),message:a,onClose:t,onAction:r,dismissOnAction:o=(A().b[1][0]++,!0),actionLabel:c,open:m,duration:C=(A().b[2][0]++,xe),persist:S,showClose:g=(A().b[3][0]++,!0)}){A().f[0]++;const b=(A().s[0]++,mn()),{t:v}=(A().s[1]++,$n("input")),[k,R]=(A().s[2]++,d.useState((A().b[4][0]++,m??(A().b[4][1]++,!0)))),[D,Q]=(A().s[3]++,d.useState(!1)),u=(A().s[4]++,A().b[5][0]++,S??(A().b[5][1]++,n==="action-needed"));A().s[5]++,d.useEffect(()=>{A().f[1]++,A().s[6]++,m!==void 0?(A().b[6][0]++,A().s[7]++,R(m)):A().b[6][1]++},[m]);const l=(A().s[8]++,un[n]),h=(A().s[9]++,l.icon),y=(A().s[10]++,e==="standard"),I=(A().s[11]++,Ee[e]),_=(A().s[12]++,a.length>I?(A().b[7][0]++,`${a.slice(0,I)}...`):(A().b[7][1]++,a)),w=(A().s[13]++,d.useRef(null)),[f,x]=(A().s[14]++,d.useState(!1));A().s[15]++,d.useLayoutEffect(()=>{A().f[2]++;const P=(A().s[16]++,w.current);if(A().s[17]++,P)A().b[8][1]++;else{A().b[8][0]++,A().s[18]++;return}const z=(A().s[19]++,parseFloat(getComputedStyle(P).lineHeight));A().s[20]++,x(P.clientHeight>z+4)},[_]),A().s[21]++;const U=()=>{A().f[3]++,A().s[22]++,R(!1),A().s[23]++,t?.()};A().s[24]++;const G=()=>{A().f[4]++,A().s[25]++,r?.(),A().s[26]++,o?(A().b[9][0]++,A().s[27]++,U()):A().b[9][1]++},W=(A().s[28]++,Vn("(prefers-reduced-motion: reduce)"));return A().s[29]++,s.jsx(Be,{open:k,autoHideDuration:(A().b[11][0]++,u||(A().b[11][1]++,D)?(A().b[10][0]++,null):(A().b[10][1]++,C)),onClose:U,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(A().f[5]++,A().s[30]++,Q(!0)),onMouseLeave:()=>(A().f[6]++,A().s[31]++,Q(!1)),onKeyDown:P=>(A().f[7]++,A().s[32]++,A().b[12][0]++,P.key==="Escape"&&(A().b[12][1]++,U())),transitionDuration:W?(A().b[13][0]++,{enter:0,exit:0}):(A().b[13][1]++,void 0),sx:{transition:W?(A().b[14][0]++,"none"):(A().b[14][1]++,"bottom 150ms ease-in-out !important")},slots:{transition:me},children:s.jsxs(M,{role:l.ariaLive==="assertive"?(A().b[15][0]++,"alert"):(A().b[15][1]++,"status"),"aria-live":l.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:f?(A().b[16][0]++,"flex-start"):(A().b[16][1]++,"center"),gap:b.spacing(1),width:`${cn[e].width}px`,maxHeight:`${cn[e].maxHeight}px`,backgroundColor:Cn[900],color:Cn[50],borderRadius:"8px",padding:cn[e].padding,opacity:k?(A().b[17][0]++,1):(A().b[17][1]++,0),transition:"opacity 200ms ease-out"},children:[s.jsx(M,{sx:{flexShrink:0,display:"flex",alignItems:f?(A().b[18][0]++,"flex-start"):(A().b[18][1]++,"center"),justifyContent:"center",pt:f?(A().b[19][0]++,"2px"):(A().b[19][1]++,0),"& svg":{width:`${hn.width}px !important`,height:`${hn.height}px !important`}},children:s.jsx(h,{fillColor:l.color,"aria-hidden":!0})}),s.jsx(ae,{ref:w,variant:"body2",sx:{flex:1,minWidth:0},children:_}),s.jsxs(M,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(A().b[20][0]++,r&&(A().b[20][1]++,y)&&(A().b[20][2]++,s.jsx(Sn,{size:"small",variant:"outlined",color:"light",onClick:G,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:c}))),(A().b[21][0]++,g&&(A().b[21][1]++,s.jsx(Sn,{variant:"outlined",color:"ghost",onClick:U,sx:{minWidth:"auto",padding:b.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":v("components.RcSesSnackbar.aria.close"),children:s.jsx(jn,{})})))]})]})})}A().s[33]++;try{A().s[34]++,F.displayName="RcSesSnackbar",A().s[35]++,F.__docgenInfo={description:"",displayName:"RcSesSnackbar",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",methods:[],props:{state:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"state",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"enum",raw:"SnackbarState",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"action-needed"'}]}},message:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"message",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"string"}},size:{defaultValue:{value:"standard"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"size",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"enum",raw:"SnackbarSize",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},actionLabel:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"actionLabel",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},open:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"open",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"dismissOnAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"duration",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"number"}},persist:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"persist",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"showClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}function i(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",e="bf46988b50e1501c6fe361b2be7bb787c5705a7b",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:56,column:51}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:263}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI,SAGI,KAHJ;AAhDJ;AAAA,EAEE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AAEP,OAAO,mBAAmB;AAoB1B,MAAM,kBAAkB,cAA+C,MAAS;AAEzE,gBAAS,sBAAsB,EAAE,SAAS,GAA4B;AAC3E,QAAM,CAAC,UAAU,WAAW,IAAI,SAAgC,IAAI;AAEpE,QAAM,eAAe,YAAY,CAAC,WAA2B;AAC3D,gBAAY,MAAM;AAAA,EACpB,GAAG,CAAC,CAAC;AAEL,QAAM,eAAe,YAAY,MAAM;AACrC,gBAAY,IAAI;AAAA,EAClB,GAAG,CAAC,CAAC;AAEL,QAAM,QAAQ;AAAA,IACZ,OAAO,EAAE,cAAc,aAAa;AAAA,IACpC,CAAC,cAAc,YAAY;AAAA,EAC7B;AAEA,SACE,qBAAC,gBAAgB,UAAhB,EAAyB,OACvB;AAAA;AAAA,IACA,YACC;AAAA,MAAC;AAAA;AAAA,QACC,OAAO,SAAS;AAAA,QAChB,SAAS,SAAS;AAAA,QAClB,MAAM,SAAS;AAAA,QACf,UAAU,SAAS;AAAA,QACnB,aAAa,SAAS;AAAA,QACtB,UAAU,SAAS;AAAA,QACnB,SAAS,SAAS;AAAA,QAClB,iBAAiB,SAAS;AAAA,QAC1B,WAAW,SAAS,aAAa;AAAA,QACjC,SAAS;AAAA,QACT,MAAI;AAAA;AAAA,IACN;AAAA,KAEJ;AAEJ;AAEO,gBAAS,cAAc;AAC5B,QAAM,UAAU,WAAW,eAAe;AAC1C,MAAI,CAAC,SAAS;AACZ,UAAM,IAAI,MAAM,uDAAuD;AAAA,EACzE;AACA,SAAO;AACT;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf46988b50e1501c6fe361b2be7bb787c5705a7b"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==e)&&(o[n]=r);var c=o[n];return i=function(){return c},c}i();const Mn=(i().s[0]++,d.createContext(void 0));function ln({children:n}){i().f[0]++;const[e,a]=(i().s[1]++,d.useState(null)),t=(i().s[2]++,d.useCallback(c=>{i().f[1]++,i().s[3]++,a(c)},[])),r=(i().s[4]++,d.useCallback(()=>{i().f[2]++,i().s[5]++,a(null)},[])),o=(i().s[6]++,d.useMemo(()=>(i().f[3]++,i().s[7]++,{showSnackbar:t,hideSnackbar:r}),[t,r]));return i().s[8]++,s.jsxs(Mn.Provider,{value:o,children:[n,(i().b[0][0]++,e&&(i().b[0][1]++,s.jsx(F,{state:e.state,message:e.message,size:e.size,onAction:e.onAction,actionLabel:e.actionLabel,duration:e.duration,persist:e.persist,dismissOnAction:e.dismissOnAction,showClose:(i().b[1][0]++,e.showClose??(i().b[1][1]++,!0)),onClose:r,open:!0})))]})}function q(){i().f[4]++;const n=(i().s[9]++,d.useContext(Mn));if(i().s[10]++,n)i().b[2][1]++;else throw i().b[2][0]++,i().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return i().s[12]++,n}i().s[13]++;try{i().s[14]++,ln.displayName="RcSesSnackbarProvider",i().s[15]++,ln.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",methods:[],props:{},tags:{}}}catch{}const In=n=>{if(n==="error")return"error";if(n==="warning")return"warning";if(n==="info")return"info"},Pn=n=>n.charAt(0).toUpperCase()+n.slice(1).replace("-"," "),DA={title:"components/feedback/Snackbar",component:F,tags:["autodocs"],decorators:[n=>s.jsx(ln,{children:s.jsx(M,{sx:{p:4,pb:16,minHeight:"300px"},children:s.jsx(n,{})})})]},ve=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],ye=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],Z={render:n=>s.jsx(M,{sx:{pb:12},children:s.jsx(F,{...n},`${n.state}-${n.message}-${n.size}-${n.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function we(){const{showSnackbar:n}=q();return s.jsx(M,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:ve.map(({state:e,message:a})=>{const t=un[e].icon;return s.jsxs(K,{variant:"contained",color:In(e),startIcon:s.jsx(t,{}),onClick:()=>n({state:e,message:a,size:"compact"}),children:[Pn(e)," (Compact)"]},e)})})}const J={render:()=>s.jsx(we,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
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
})`}}}};function Oe(){const{showSnackbar:n}=q();return s.jsx(M,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:ye.map(({state:e,message:a,actionLabel:t})=>{const r=un[e].icon;return s.jsxs(K,{variant:"contained",color:In(e),startIcon:s.jsx(r,{}),onClick:()=>n({state:e,message:a,actionLabel:t,size:"standard",onAction:()=>{console.log(`${t} clicked`)}}),children:[Pn(e)," (Standard)"]},e)})})}const nn={render:()=>s.jsx(Oe,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
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
})`}}}};function Me(){const{showSnackbar:n}=q();return s.jsxs(M,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[s.jsx(K,{variant:"contained",onClick:()=>n({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),s.jsx(K,{variant:"contained",onClick:()=>n({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const en={render:()=>s.jsx(Me,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
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
})`}}}};function Ie(){const{showSnackbar:n}=q();return s.jsx(M,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:s.jsx(K,{variant:"contained",onClick:()=>n({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const An={render:()=>s.jsx(Ie,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
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
})`}}}};function Pe(){const{showSnackbar:n}=q();return s.jsx(M,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:s.jsx(K,{variant:"contained",color:"info",onClick:()=>n({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.",showClose:!0}),children:"Long Text (Truncation)"})})}const tn={render:()=>s.jsx(Pe,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
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
})`}}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`{
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
}`,...nn.parameters?.docs?.source}}};en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`{
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
}`,...en.parameters?.docs?.source}}};An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
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
}`,...An.parameters?.docs?.source}}};tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`{
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
}`,...tn.parameters?.docs?.source}}};const _A=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{J as CompactWithText,en as CustomDuration,Z as Default,tn as LongText,An as Persistent,nn as StandardWithButtons,_A as __namedExportsOrder,DA as default};
//# sourceMappingURL=Snackbar.stories-D0x_g69A.js.map
