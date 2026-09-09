import{r as u,j as s,i as Bn,d as Qn,a9 as dn,k as an,p as pn,I as Ln,w as Yn,W as Dn,e as _n,s as Wn,l as zn,g as Cn,C as jn}from"./iframe-CENckQZf.js";import{R as Sn}from"./index-o44aIkem.js";import"./Logo-rBLBCtLt.js";import"./ArrowLeftIcon--CkYfsdH.js";import"./ArrowRightIcon-BdyWdKcl.js";import{b as Nn}from"./WarningDiamondFillIcon-Bylqi1on.js";import"./CalendarBlankIcon-Bhyk0ixf.js";import"./CaretLeftBoldIcon-RfimGrdn.js";import"./CaretDownFill-vtaO7iYf.js";import"./CaretLeftIcon-o3Ib2ys9.js";import"./CaretRightBoldIcon-B4oxMvmt.js";import{o as Kn}from"./TrashIcon-BFpy_n50.js";import"./CheckBoldIcon-D7U3ut1m.js";import"./CheckIcon-DjAahVS6.js";import"./CheckUncheckedBoldIcon-DWDZEca6.js";import"./CircleFilledIcon-vJZ0s9il.js";import"./ExpandChevronsIcon-DvA06eTz.js";import"./DotCircleFilledIcon-B4CzkVyj.js";import"./MagnifyingGlassIcon-GjxrvIlu.js";import"./MinusBoldIcon-BxnbW5Bp.js";import"./PencilSimpleLineIcon-CPPAnErV.js";import"./PlusBoldIcon-C31rJTqf.js";import"./QuestionFillIcon-CRRtJDHw.js";import"./QuestionIcon-CGBBOcEq.js";import"./UploadSimpleIcon-CwmwJ6yJ.js";import"./UserIcon-DwqrlpyK.js";import{X as Gn}from"./XCircleFillIcon-qHuDgpwa.js";import{a as mn,b as qn,u as Fn,c as bn}from"./useReducedMotion-DHyYPphk.js";import{u as $n}from"./useTranslation-CHfF30OX.js";import{u as Vn}from"./index-Bh5LF4yA.js";import{u as Hn}from"./useTimeout-BgjeWFP0.js";import{e as gn}from"./mergeSlotProps-DpW5LE0-.js";import{c as xn,s as sn,m as vn}from"./memoTheme-DuGMjUk-.js";import{g as En,a as yn}from"./generateUtilityClasses-DGi4yQgU.js";import{u as X}from"./useSlot-C1HhZ5nJ.js";import{C as Xn}from"./ClickAwayListener-B4FK6bzU.js";import{P as Zn}from"./Paper-DVIpeCUm.js";import{G as Jn}from"./Grow-BIFGtsfY.js";import{T as ne}from"./Transition-Du9SiglK.js";import{n as z,d as ee,r as Ae,a as fn}from"./utils-cxgvJEOf.js";import{g as te}from"./getReactElementRef-tsQrQASR.js";import{d as oe}from"./debounce-Be36O1Ab.js";import{o as wn}from"./ownerWindow-HkKU3E4x.js";import{B as I}from"./Box-bPJk0iff.js";import{T as ae}from"./Typography-C6XD4amE.js";import{B as j}from"./Button-CsSJcaA1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-yJlyccKm.js";import"./CircularProgress-tRY1Cioi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CaretLeft.es-vcSN-wOt.js";import"./Minus.es-CdJkFls1.js";import"./Plus.es-qxvorbW8.js";import"./Question.es-B_PoJb_n.js";import"./index-C3151_T8.js";import"./getThemeProps-u1OGT0GL.js";import"./ownerDocument-DW-IO8s5.js";import"./contains-DSD8CO72.js";import"./ButtonBase-brzhBtL2.js";import"./isFocusVisible-B8k4qzLc.js";const se={visibility:"hidden"},re={};function ce(n){return typeof n=="string"&&/^translate\(.+,\s*.+\)$/.test(n)}function ie(n,A,a,t=re){const{resetInlineTransform:r=!0}=t,o=a&&a.getBoundingClientRect(),c=wn(A);let i,C;if(r){const b=A.style.transform,w=A.style.transition;A.style.transition="",A.style.transform="",i=A.getBoundingClientRect(),C=c.getComputedStyle(A).getPropertyValue("transform"),A.style.transform=b,A.style.transition=w}else i=A.getBoundingClientRect(),C=c.getComputedStyle(A).getPropertyValue("transform");const{offsetX:S,offsetY:g}=ee(C);return n==="left"?o?`translateX(${o.right+S-i.left}px)`:`translateX(${c.innerWidth+S-i.left}px)`:n==="right"?o?`translateX(-${i.right-o.left-S}px)`:`translateX(-${i.left+i.width-S}px)`:n==="up"?o?`translateY(${o.bottom+g-i.top}px)`:`translateY(${c.innerHeight+g-i.top}px)`:o?`translateY(-${i.top-o.top+i.height-g}px)`:`translateY(-${i.top+i.height-g}px)`}function le(n){return typeof n=="function"?n():n}function Z(n,A,a,t){const r=le(a),o=ie(n,A,r,t);o&&(A.style.transform=o)}const me=u.forwardRef(function(A,a){const t=mn(),r={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:c,appear:i=!0,children:C,container:S,disablePrefersReducedMotion:g=!1,direction:b="down",easing:w=r,in:k,onEnter:P,onEntered:W,onEntering:Q,onExit:m,onExited:d,onExiting:h,style:B,timeout:R=o,...N}=A,O=qn(t.motion.reducedMotion,g),f=u.useRef(null),x=u.useRef(!1),L=Fn(te(C),f,a),K=z(f,(p,v)=>{Z(b,p,S),O.shouldReduceMotion||Ae(p),P&&P(p,v)}),U=z(f,(p,v)=>{const M=fn({timeout:R,style:B,easing:w},{mode:"enter"}),y=O.getTransitionTiming({duration:M.duration,delay:M.delay});p.style.transition=t.transitions.create("transform",{duration:y.duration,easing:M.easing,delay:y.delay}),p.style.transform="none",Q&&Q(p,v)}),G=z(f,W),Y=z(f,h),E=z(f,p=>{const v=fn({timeout:R,style:B,easing:w},{mode:"exit"}),M=O.getTransitionTiming({duration:v.duration,delay:v.delay});p.style.transition=t.transitions.create("transform",{duration:M.duration,easing:v.easing,delay:M.delay});const y=ce(p.style.transform);x.current=y,Z(b,p,S,{resetInlineTransform:!y}),m&&m(p)}),q=z(f,p=>{x.current=!1,p.style.transition="",d&&d(p)}),rn=c?p=>{c(f.current,p)}:void 0,V=u.useCallback(()=>{f.current&&Z(b,f.current,S)},[b,S]);return u.useEffect(()=>{if(k||b==="down"||b==="right")return;const p=oe(()=>{f.current&&Z(b,f.current,S)}),v=wn(f.current);return v.addEventListener("resize",p),()=>{p.clear(),v.removeEventListener("resize",p)}},[b,k,S]),u.useEffect(()=>{!k&&!x.current&&V()},[k,V]),s.jsx(ne,{nodeRef:f,onEnter:K,onEntered:G,onEntering:U,onExit:E,onExited:q,onExiting:Y,addEndListener:rn,appear:i,in:k,reduceMotion:O.shouldReduceMotion,timeout:R,...N,children:(p,{ownerState:v,...M})=>{let y;return p==="exited"&&!k?y=B||C.props.style?{visibility:"hidden",...B,...C.props.style}:se:B&&C.props.style?y={...B,...C.props.style}:y=B||C.props.style,u.cloneElement(C,{ref:L,style:y,...M})}})});function ue(n={}){const{autoHideDuration:A=null,disableWindowBlurListener:a=!1,onClose:t,open:r,resumeHideDuration:o}=n,c=Hn();u.useEffect(()=>{if(!r)return;function m(d){d.defaultPrevented||d.key==="Escape"&&t?.(d,"escapeKeyDown")}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[r,t]);const i=bn((m,d)=>{t?.(m,d)}),C=bn(m=>{!t||m==null||c.start(m,()=>{i(null,"timeout")})});u.useEffect(()=>(r&&C(A),c.clear),[r,A,C,c]);const S=m=>{t?.(m,"clickaway")},g=c.clear,b=u.useCallback(()=>{A!=null&&C(o??A*.5)},[A,o,C]),w=m=>d=>{const h=m.onBlur;h?.(d),b()},k=m=>d=>{const h=m.onFocus;h?.(d),g()},P=m=>d=>{const h=m.onMouseEnter;h?.(d),g()},W=m=>d=>{const h=m.onMouseLeave;h?.(d),b()};return u.useEffect(()=>{if(!a&&r)return window.addEventListener("focus",b),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",g)}},[a,r,b,g]),{getRootProps:(m={})=>{const d={...gn(n),...gn(m)};return{role:"presentation",...m,...d,onBlur:w(d),onFocus:k(d),onMouseEnter:P(d),onMouseLeave:W(d)}},onClickAway:S}}function de(n){return En("MuiSnackbarContent",n)}yn("MuiSnackbarContent",["root","message","action"]);const pe=n=>{const{classes:A}=n;return xn({root:["root"],action:["action"],message:["message"]},de,A)},Ce=sn(Zn,{name:"MuiSnackbarContent",slot:"Root"})(vn(({theme:n})=>{const A=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(dn(n.palette.background.default,A)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:dn(n.palette.background.default,A),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Se=sn("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),be=sn("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ge=u.forwardRef(function(A,a){const t=Bn({props:A,name:"MuiSnackbarContent"}),{action:r,className:o,message:c,role:i="alert",...C}=t,S=t,g=pe(S);return s.jsxs(Ce,{role:i,elevation:6,className:Qn(g.root,o),ownerState:S,ref:a,...C,children:[s.jsx(Se,{className:g.message,ownerState:S,children:c}),r?s.jsx(be,{className:g.action,ownerState:S,children:r}):null]})});function fe(n){return En("MuiSnackbar",n)}yn("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ke=n=>{const{classes:A,anchorOrigin:a}=n,t={root:["root",`anchorOrigin${an(a.vertical)}${an(a.horizontal)}`]};return xn(t,fe,A)},he=sn("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,A)=>{const{ownerState:a}=n;return[A.root,A[`anchorOrigin${an(a.anchorOrigin.vertical)}${an(a.anchorOrigin.horizontal)}`]]}})(vn(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:A})=>A.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:A})=>A.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:A})=>A.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Be=u.forwardRef(function(A,a){const t=Bn({props:A,name:"MuiSnackbar"}),r=mn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:i,horizontal:C}={vertical:"bottom",horizontal:"left"},autoHideDuration:S=null,children:g,className:b,disableWindowBlurListener:w=!1,message:k,onBlur:P,onClose:W,onFocus:Q,onMouseEnter:m,onMouseLeave:d,open:h,resumeHideDuration:B,slots:R={},slotProps:N={},transitionDuration:O=o,...f}=t,x={...t,anchorOrigin:{vertical:i,horizontal:C},autoHideDuration:S,disableWindowBlurListener:w,transitionDuration:O},L=ke(x),{getRootProps:K,onClickAway:U}=ue(x),[G,Y]=u.useState(!0),E={slots:R,slotProps:N},[q,rn]=X("root",{ref:a,className:[L.root,b],elementType:he,getSlotProps:K,externalForwardedProps:{...E,...f},ownerState:x}),[V,{ownerState:p,...v}]=X("clickAwayListener",{elementType:Xn,externalForwardedProps:E,getSlotProps:H=>({onClickAway:(...D)=>{const Tn=D[0];H.onClickAway?.(...D),!Tn?.defaultMuiPrevented&&U(...D)}}),ownerState:x}),[M,y]=X("content",{elementType:ge,shouldForwardComponentProp:!0,externalForwardedProps:E,additionalProps:{message:k,action:c},ownerState:x}),[Rn,Un]=X("transition",{elementType:Jn,externalForwardedProps:E,getSlotProps:H=>({onEnter:(...D)=>{H.onEnter?.(...D),Y(!1)},onExited:(...D)=>{H.onExited?.(...D),Y(!0)}}),additionalProps:{appear:!0,in:h,timeout:O,direction:i==="top"?"down":"up"},ownerState:x});return!h&&G?null:s.jsx(V,{...v,...R.clickAwayListener&&{ownerState:p},children:s.jsx(q,{...rn,children:s.jsx(Rn,{...Un,children:g||s.jsx(M,{...y})})})})});function T(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",A="c002932053aad6f78b6519c50aa6286a86cbdca5",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",statementMap:{0:{start:{line:4,column:2},end:{line:13,column:4}},1:{start:{line:16,column:0},end:{line:21,column:51}},2:{start:{line:18,column:4},end:{line:18,column:52}},3:{start:{line:20,column:4},end:{line:20,column:1058}}},fnMap:{0:{name:"CaretUpBoldIcon",decl:{start:{line:3,column:9},end:{line:3,column:24}},loc:{start:{line:3,column:71},end:{line:14,column:1}},line:3}},branchMap:{0:{loc:{start:{line:3,column:38},end:{line:3,column:47}},type:"default-arg",locations:[{start:{line:3,column:45},end:{line:3,column:47}}],line:3}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx"],names:[],mappings:"AAMI;AANJ,SAAS,eAAe,eAAe;AAIvC,SAAS,gBAAgB,EAAE,WAAW,OAAO,IAAI,WAAW,GAAG,KAAK,GAAc;AAChF,SACE;AAAA,IAAC;AAAA;AAAA,MACE,GAAG;AAAA,MACJ;AAAA,MACA;AAAA,MACA,QAAO;AAAA,MACP,OAAO;AAAA;AAAA,EACT;AAEJ;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c002932053aad6f78b6519c50aa6286a86cbdca5"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==A)&&(o[n]=r);var c=o[n];return T=function(){return c},c}T();function kn({className:n,size:A=(T().b[0][0]++,16),fillColor:a,...t}){return T().f[0]++,T().s[0]++,s.jsx(Kn,{...t,className:n,size:A,weight:"bold",color:a})}T().s[1]++;try{T().s[2]++,kn.displayName="CaretUpBoldIcon",T().s[3]++,kn.__docgenInfo={description:"",displayName:"CaretUpBoldIcon",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/assets/icons/CaretUpBoldIcon.tsx",methods:[],props:{fillColor:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"fillColor",required:!1,tags:{},type:{name:"string"}},size:{defaultValue:{value:"16"},declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"number"}},weight:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/assets/IconProps.ts",name:"TypeLiteral"}],description:"",name:"weight",required:!1,tags:{},type:{name:"enum",raw:"IconWeight",value:[{value:'"fill"'},{value:'"thin"'},{value:'"light"'},{value:'"regular"'},{value:'"bold"'},{value:'"duotone"'}]}}},tags:{}}}catch{}function On(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",A="90e183b3259e9b2b6f83d07572303e1b1379155a",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/library/icons.ts"],names:[],mappings:"AAAA,OAAO,eAAe;AACtB,OAAO,mBAAmB;AAC1B,OAAO,oBAAoB;AAC3B,OAAO,yBAAyB;AAChC,OAAO,iBAAiB;AACxB,OAAO,uBAAuB;AAC9B,OAAO,6BAA6B;AACpC,OAAO,8BAA8B;AACrC,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,mBAAmB;AAC1B,OAAO,uBAAuB;AAC9B,OAAO,mBAAmB;AAC1B,OAAO,wBAAwB;AAC/B,OAAO,qBAAqB;AAC5B,OAAO,iBAAiB;AACxB,OAAO,mBAAmB;AAC1B,OAAO,yBAAyB;AAChC,OAAO,eAAe;AACtB,OAAO,4BAA4B;AACnC,OAAO,sBAAsB;AAC7B,OAAO,eAAe;AACtB,OAAO,0BAA0B;AACjC,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,wBAAwB;AAC/B,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,yBAAyB;AAChC,OAAO,oBAAoB;AAC3B,OAAO,mBAAmB;AAC1B,OAAO,eAAe;AACtB,OAAO,oBAAoB;AAC3B,OAAO,0BAA0B;AACjC,OAAO,kBAAkB;AACzB,OAAO,cAAc;AACrB,OAAO,sBAAsB;AAC7B,OAAO,kBAAkB;AACzB,OAAO,gBAAgB;AACvB,OAAO,gBAAgB;AACvB,OAAO,oBAAoB;AAC3B,OAAO,iBAAiB;AACxB,OAAO,wBAAwB;AAC/B,OAAO,eAAe;AACtB,OAAO,sBAAsB;AAC7B,OAAO,cAAc;AACrB,OAAO,uBAAuB;AAC9B,OAAO,4BAA4B;AACnC,OAAO,qBAAqB;AAC5B,OAAO,qBAAqB;AAE5B;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"90e183b3259e9b2b6f83d07572303e1b1379155a"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==A)&&(o[n]=r);var c=o[n];return On=function(){return c},c}On();function _(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",A="3b091237a9407ee4618722335aee335a6f852005",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts",statementMap:{0:{start:{line:9,column:33},end:{line:9,column:36}},1:{start:{line:10,column:34},end:{line:10,column:59}},2:{start:{line:11,column:36},end:{line:14,column:1}},3:{start:{line:15,column:27},end:{line:46,column:1}},4:{start:{line:47,column:26},end:{line:58,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/config.ts"],names:[],mappings:"AAEA;AAAA,EACE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AACP,SAAS,OAAO,SAAS,WAAW,eAAe;AAI5C,aAAM,oBAAoB;AAE1B,aAAM,qBAAqB,EAAE,OAAO,IAAI,QAAQ,GAAG;AAEnD,aAAM,uBAAqD;AAAA,EAChE,UAAU;AAAA,EACV,SAAS;AACX;AAEO,aAAM,cAQT;AAAA,EACF,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,UAAU,KAAK;AAAA,IACtB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,OAAO;AAAA,IACL,MAAM;AAAA,IACN,OAAO,MAAM,KAAK;AAAA,IAClB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,SAAS;AAAA,IACP,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,MAAM;AAAA,IACJ,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AAAA,EACA,iBAAiB;AAAA,IACf,MAAM;AAAA,IACN,OAAO,QAAQ,KAAK;AAAA,IACpB,UAAU;AAAA,IACV,UAAU;AAAA,EACZ;AACF;AAEO,aAAM,aAOT;AAAA,EACF,UAAU;AAAA,IACR,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AAAA,EACA,SAAS;AAAA,IACP,WAAW;AAAA,IACX,OAAO;AAAA,IACP,SAAS;AAAA,EACX;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3b091237a9407ee4618722335aee335a6f852005"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==A)&&(o[n]=r);var c=o[n];return _=function(){return c},c}_();const xe=(_().s[0]++,1e4),hn=(_().s[1]++,{width:18,height:20}),ve=(_().s[2]++,{standard:120,compact:60}),un=(_().s[3]++,{success:{icon:zn,color:Wn[400],severity:"success",ariaLive:"polite"},error:{icon:Gn,color:_n[400],severity:"error",ariaLive:"assertive"},warning:{icon:Dn,color:Yn[400],severity:"warning",ariaLive:"polite"},info:{icon:Ln,color:pn[400],severity:"info",ariaLive:"polite"},"action-needed":{icon:Nn,color:pn[400],severity:"info",ariaLive:"assertive"}}),cn=(_().s[4]++,{standard:{maxHeight:120,width:400,padding:"12px 16px"},compact:{maxHeight:96,width:320,padding:"8px 12px"}});function e(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",A="422e3001ba28fc0bd24b212a2ff97125fd8fcd43",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",statementMap:{0:{start:{line:35,column:16},end:{line:35,column:26}},1:{start:{line:36,column:16},end:{line:36,column:39}},2:{start:{line:37,column:42},end:{line:37,column:74}},3:{start:{line:38,column:34},end:{line:38,column:49}},4:{start:{line:39,column:54},end:{line:39,column:78}},5:{start:{line:40,column:18},end:{line:40,column:64}},6:{start:{line:41,column:2},end:{line:46,column:3}},7:{start:{line:42,column:4},end:{line:42,column:42}},8:{start:{line:43,column:4},end:{line:45,column:5}},9:{start:{line:44,column:6},end:{line:44,column:38}},10:{start:{line:47,column:17},end:{line:47,column:35}},11:{start:{line:48,column:20},end:{line:48,column:31}},12:{start:{line:49,column:21},end:{line:49,column:40}},13:{start:{line:50,column:20},end:{line:50,column:46}},14:{start:{line:51,column:27},end:{line:51,column:101}},15:{start:{line:52,column:18},end:{line:52,column:30}},16:{start:{line:53,column:40},end:{line:53,column:55}},17:{start:{line:54,column:2},end:{line:59,column:25}},18:{start:{line:55,column:15},end:{line:55,column:30}},19:{start:{line:56,column:4},end:{line:56,column:20}},20:{start:{line:56,column:13},end:{line:56,column:20}},21:{start:{line:57,column:29},end:{line:57,column:72}},22:{start:{line:58,column:4},end:{line:58,column:59}},23:{start:{line:60,column:22},end:{line:63,column:3}},24:{start:{line:61,column:4},end:{line:61,column:27}},25:{start:{line:62,column:4},end:{line:62,column:16}},26:{start:{line:64,column:23},end:{line:67,column:3}},27:{start:{line:65,column:4},end:{line:65,column:17}},28:{start:{line:66,column:4},end:{line:66,column:39}},29:{start:{line:66,column:25},end:{line:66,column:39}},30:{start:{line:68,column:31},end:{line:68,column:80}},31:{start:{line:69,column:2},end:{line:180,column:4}},32:{start:{line:76,column:26},end:{line:76,column:43}},33:{start:{line:77,column:26},end:{line:77,column:44}},34:{start:{line:78,column:24},end:{line:78,column:59}},35:{start:{line:183,column:0},end:{line:188,column:51}},36:{start:{line:185,column:4},end:{line:185,column:48}},37:{start:{line:187,column:4},end:{line:187,column:4503}}},fnMap:{0:{name:"RcSesSnackbar",decl:{start:{line:22,column:9},end:{line:22,column:22}},loc:{start:{line:34,column:3},end:{line:181,column:1}},line:34},1:{name:"(anonymous_1)",decl:{start:{line:54,column:18},end:{line:54,column:19}},loc:{start:{line:54,column:24},end:{line:59,column:3}},line:54},2:{name:"(anonymous_2)",decl:{start:{line:60,column:22},end:{line:60,column:23}},loc:{start:{line:60,column:28},end:{line:63,column:3}},line:60},3:{name:"(anonymous_3)",decl:{start:{line:64,column:23},end:{line:64,column:24}},loc:{start:{line:64,column:29},end:{line:67,column:3}},line:64},4:{name:"(anonymous_4)",decl:{start:{line:76,column:20},end:{line:76,column:21}},loc:{start:{line:76,column:26},end:{line:76,column:43}},line:76},5:{name:"(anonymous_5)",decl:{start:{line:77,column:20},end:{line:77,column:21}},loc:{start:{line:77,column:26},end:{line:77,column:44}},line:77},6:{name:"(anonymous_6)",decl:{start:{line:78,column:17},end:{line:78,column:18}},loc:{start:{line:78,column:24},end:{line:78,column:59}},line:78}},branchMap:{0:{loc:{start:{line:24,column:2},end:{line:24,column:19}},type:"default-arg",locations:[{start:{line:24,column:9},end:{line:24,column:19}}],line:24},1:{loc:{start:{line:28,column:2},end:{line:28,column:24}},type:"default-arg",locations:[{start:{line:28,column:20},end:{line:28,column:24}}],line:28},2:{loc:{start:{line:31,column:2},end:{line:31,column:30}},type:"default-arg",locations:[{start:{line:31,column:13},end:{line:31,column:30}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:18}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:18}}],line:33},4:{loc:{start:{line:37,column:51},end:{line:37,column:73}},type:"binary-expr",locations:[{start:{line:37,column:51},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:73}}],line:37},5:{loc:{start:{line:40,column:18},end:{line:40,column:64}},type:"binary-expr",locations:[{start:{line:40,column:18},end:{line:40,column:35}},{start:{line:40,column:39},end:{line:40,column:64}}],line:40},6:{loc:{start:{line:41,column:2},end:{line:46,column:3}},type:"if",locations:[{start:{line:41,column:2},end:{line:46,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:41},7:{loc:{start:{line:43,column:4},end:{line:45,column:5}},type:"if",locations:[{start:{line:43,column:4},end:{line:45,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:43},8:{loc:{start:{line:51,column:27},end:{line:51,column:101}},type:"cond-expr",locations:[{start:{line:51,column:56},end:{line:51,column:91}},{start:{line:51,column:94},end:{line:51,column:101}}],line:51},9:{loc:{start:{line:56,column:4},end:{line:56,column:20}},type:"if",locations:[{start:{line:56,column:4},end:{line:56,column:20}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:56},10:{loc:{start:{line:66,column:4},end:{line:66,column:39}},type:"if",locations:[{start:{line:66,column:4},end:{line:66,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:66},11:{loc:{start:{line:73,column:24},end:{line:73,column:61}},type:"cond-expr",locations:[{start:{line:73,column:46},end:{line:73,column:50}},{start:{line:73,column:53},end:{line:73,column:61}}],line:73},12:{loc:{start:{line:73,column:24},end:{line:73,column:43}},type:"binary-expr",locations:[{start:{line:73,column:24},end:{line:73,column:31}},{start:{line:73,column:35},end:{line:73,column:43}}],line:73},13:{loc:{start:{line:78,column:24},end:{line:78,column:59}},type:"binary-expr",locations:[{start:{line:78,column:24},end:{line:78,column:42}},{start:{line:78,column:46},end:{line:78,column:59}}],line:78},14:{loc:{start:{line:79,column:26},end:{line:79,column:79}},type:"cond-expr",locations:[{start:{line:79,column:49},end:{line:79,column:70}},{start:{line:79,column:73},end:{line:79,column:79}}],line:79},15:{loc:{start:{line:81,column:20},end:{line:81,column:89}},type:"cond-expr",locations:[{start:{line:81,column:43},end:{line:81,column:49}},{start:{line:81,column:52},end:{line:81,column:89}}],line:81},16:{loc:{start:{line:89,column:16},end:{line:89,column:68}},type:"cond-expr",locations:[{start:{line:89,column:50},end:{line:89,column:57}},{start:{line:89,column:60},end:{line:89,column:68}}],line:89},17:{loc:{start:{line:94,column:24},end:{line:94,column:61}},type:"cond-expr",locations:[{start:{line:94,column:38},end:{line:94,column:50}},{start:{line:94,column:53},end:{line:94,column:61}}],line:94},18:{loc:{start:{line:102,column:21},end:{line:102,column:41}},type:"cond-expr",locations:[{start:{line:102,column:36},end:{line:102,column:37}},{start:{line:102,column:40},end:{line:102,column:41}}],line:102},19:{loc:{start:{line:112,column:30},end:{line:112,column:67}},type:"cond-expr",locations:[{start:{line:112,column:44},end:{line:112,column:56}},{start:{line:112,column:59},end:{line:112,column:67}}],line:112},20:{loc:{start:{line:114,column:22},end:{line:114,column:45}},type:"cond-expr",locations:[{start:{line:114,column:36},end:{line:114,column:41}},{start:{line:114,column:44},end:{line:114,column:45}}],line:114},21:{loc:{start:{line:136,column:14},end:{line:150,column:15}},type:"binary-expr",locations:[{start:{line:136,column:14},end:{line:136,column:22}},{start:{line:136,column:26},end:{line:136,column:36}},{start:{line:136,column:56},end:{line:150,column:15}}],line:136},22:{loc:{start:{line:151,column:14},end:{line:174,column:15}},type:"binary-expr",locations:[{start:{line:151,column:14},end:{line:151,column:23}},{start:{line:151,column:43},end:{line:174,column:15}}],line:151}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0,0],22:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"422e3001ba28fc0bd24b212a2ff97125fd8fcd43"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==A)&&(o[n]=r);var c=o[n];return e=function(){return c},c}e();function F({state:n,size:A=(e().b[0][0]++,"standard"),message:a,onClose:t,onAction:r,dismissOnAction:o=(e().b[1][0]++,!0),actionLabel:c,open:i,duration:C=(e().b[2][0]++,xe),persist:S,showClose:g=(e().b[3][0]++,!0)}){e().f[0]++;const b=(e().s[0]++,mn()),{t:w}=(e().s[1]++,$n("input")),[k,P]=(e().s[2]++,u.useState((e().b[4][0]++,i??(e().b[4][1]++,!0)))),[W,Q]=(e().s[3]++,u.useState(!1)),[m,d]=(e().s[4]++,u.useState(i)),h=(e().s[5]++,e().b[5][0]++,S??(e().b[5][1]++,n==="action-needed"));e().s[6]++,i!==m?(e().b[6][0]++,e().s[7]++,d(i),e().s[8]++,i!==void 0?(e().b[7][0]++,e().s[9]++,P(i)):e().b[7][1]++):e().b[6][1]++;const B=(e().s[10]++,un[n]),R=(e().s[11]++,B.icon),N=(e().s[12]++,A==="standard"),O=(e().s[13]++,ve[A]),f=(e().s[14]++,a.length>O?(e().b[8][0]++,`${a.slice(0,O)}...`):(e().b[8][1]++,a)),x=(e().s[15]++,u.useRef(null)),[L,K]=(e().s[16]++,u.useState(!1));e().s[17]++,u.useLayoutEffect(()=>{e().f[1]++;const E=(e().s[18]++,x.current);if(e().s[19]++,E)e().b[9][1]++;else{e().b[9][0]++,e().s[20]++;return}const q=(e().s[21]++,parseFloat(getComputedStyle(E).lineHeight));e().s[22]++,K(E.clientHeight>q+4)},[f]),e().s[23]++;const U=()=>{e().f[2]++,e().s[24]++,P(!1),e().s[25]++,t?.()};e().s[26]++;const G=()=>{e().f[3]++,e().s[27]++,r?.(),e().s[28]++,o?(e().b[10][0]++,e().s[29]++,U()):e().b[10][1]++},Y=(e().s[30]++,Vn("(prefers-reduced-motion: reduce)"));return e().s[31]++,s.jsx(Be,{open:k,autoHideDuration:(e().b[12][0]++,h||(e().b[12][1]++,W)?(e().b[11][0]++,null):(e().b[11][1]++,C)),onClose:U,anchorOrigin:{vertical:"bottom",horizontal:"center"},onMouseEnter:()=>(e().f[4]++,e().s[32]++,Q(!0)),onMouseLeave:()=>(e().f[5]++,e().s[33]++,Q(!1)),onKeyDown:E=>(e().f[6]++,e().s[34]++,e().b[13][0]++,E.key==="Escape"&&(e().b[13][1]++,U())),transitionDuration:Y?(e().b[14][0]++,{enter:0,exit:0}):(e().b[14][1]++,void 0),sx:{transition:Y?(e().b[15][0]++,"none"):(e().b[15][1]++,"bottom 150ms ease-in-out !important")},slots:{transition:me},children:s.jsxs(I,{role:B.ariaLive==="assertive"?(e().b[16][0]++,"alert"):(e().b[16][1]++,"status"),"aria-live":B.ariaLive,"aria-atomic":"true",sx:{display:"flex",alignItems:L?(e().b[17][0]++,"flex-start"):(e().b[17][1]++,"center"),gap:b.spacing(1),width:`${cn[A].width}px`,maxHeight:`${cn[A].maxHeight}px`,backgroundColor:Cn[900],color:Cn[50],borderRadius:"8px",padding:cn[A].padding,opacity:k?(e().b[18][0]++,1):(e().b[18][1]++,0),transition:"opacity 200ms ease-out"},children:[s.jsx(I,{sx:{flexShrink:0,display:"flex",alignItems:L?(e().b[19][0]++,"flex-start"):(e().b[19][1]++,"center"),justifyContent:"center",pt:L?(e().b[20][0]++,"2px"):(e().b[20][1]++,0),"& svg":{width:`${hn.width}px !important`,height:`${hn.height}px !important`}},children:s.jsx(R,{fillColor:B.color,"aria-hidden":!0})}),s.jsx(ae,{ref:x,variant:"body2",sx:{flex:1,minWidth:0},children:f}),s.jsxs(I,{sx:{display:"flex",gap:"12px",alignItems:"center"},children:[(e().b[21][0]++,r&&(e().b[21][1]++,N)&&(e().b[21][2]++,s.jsx(Sn,{size:"small",variant:"outlined",color:"light",onClick:G,sx:{textTransform:"none",fontSize:"0.875rem",flexShrink:0},children:c}))),(e().b[22][0]++,g&&(e().b[22][1]++,s.jsx(Sn,{variant:"outlined",color:"ghost",onClick:U,sx:{minWidth:"auto",padding:b.spacing(.625),display:"flex",alignItems:"center",justifyContent:"center",width:"34px",height:"34px",flexShrink:0,"& svg":{width:"20px",height:"20px"}},"aria-label":w("components.RcSesSnackbar.aria.close"),children:s.jsx(jn,{})})))]})]})})}e().s[35]++;try{e().s[36]++,F.displayName="RcSesSnackbar",e().s[37]++,F.__docgenInfo={description:"",displayName:"RcSesSnackbar",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/index.tsx",methods:[],props:{state:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"state",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"enum",raw:"SnackbarState",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"action-needed"'}]}},message:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"message",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!0,tags:{},type:{name:"string"}},size:{defaultValue:{value:"standard"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"size",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"enum",raw:"SnackbarSize",value:[{value:'"standard"'},{value:'"compact"'}]}},onAction:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},actionLabel:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"actionLabel",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"string"}},onClose:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"onClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"() => void"}},open:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"open",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},dismissOnAction:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"dismissOnAction",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},duration:{defaultValue:{value:"10000"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"duration",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"number"}},persist:{defaultValue:null,declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"persist",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},declarations:[{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"}],description:"",name:"showClose",parent:{fileName:"rc-ses-react-components/src/components/common/Snackbar/index.tsx",name:"RcSesSnackbarProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}function l(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",A="bf46988b50e1501c6fe361b2be7bb787c5705a7b",a=globalThis,t="__coverage__",r={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",statementMap:{0:{start:{line:10,column:24},end:{line:10,column:45}},1:{start:{line:12,column:34},end:{line:12,column:48}},2:{start:{line:13,column:23},end:{line:15,column:8}},3:{start:{line:14,column:4},end:{line:14,column:24}},4:{start:{line:16,column:23},end:{line:18,column:8}},5:{start:{line:17,column:4},end:{line:17,column:22}},6:{start:{line:19,column:16},end:{line:22,column:3}},7:{start:{line:20,column:11},end:{line:20,column:41}},8:{start:{line:23,column:2},end:{line:41,column:7}},9:{start:{line:44,column:18},end:{line:44,column:45}},10:{start:{line:45,column:2},end:{line:47,column:3}},11:{start:{line:46,column:4},end:{line:46,column:77}},12:{start:{line:48,column:2},end:{line:48,column:17}},13:{start:{line:51,column:0},end:{line:56,column:51}},14:{start:{line:53,column:4},end:{line:53,column:64}},15:{start:{line:55,column:4},end:{line:55,column:263}}},fnMap:{0:{name:"RcSesSnackbarProvider",decl:{start:{line:11,column:16},end:{line:11,column:37}},loc:{start:{line:11,column:52},end:{line:42,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:35},end:{line:13,column:36}},loc:{start:{line:13,column:47},end:{line:15,column:3}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:16,column:35},end:{line:16,column:36}},loc:{start:{line:16,column:41},end:{line:18,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:11},end:{line:20,column:41}},line:20},4:{name:"useSnackbar",decl:{start:{line:43,column:16},end:{line:43,column:27}},loc:{start:{line:43,column:30},end:{line:49,column:1}},line:43}},branchMap:{0:{loc:{start:{line:25,column:4},end:{line:40,column:5}},type:"binary-expr",locations:[{start:{line:25,column:4},end:{line:25,column:12}},{start:{line:25,column:32},end:{line:40,column:5}}],line:25},1:{loc:{start:{line:36,column:19},end:{line:36,column:45}},type:"binary-expr",locations:[{start:{line:36,column:19},end:{line:36,column:37}},{start:{line:36,column:41},end:{line:36,column:45}}],line:36},2:{loc:{start:{line:45,column:2},end:{line:47,column:3}},type:"if",locations:[{start:{line:45,column:2},end:{line:47,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:45}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx"],names:[],mappings:"AAgDI,SAGI,KAHJ;AAhDJ;AAAA,EAEE;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,EACA;AAAA,OACK;AAEP,OAAO,mBAAmB;AAoB1B,MAAM,kBAAkB,cAA+C,MAAS;AAEzE,gBAAS,sBAAsB,EAAE,SAAS,GAA4B;AAC3E,QAAM,CAAC,UAAU,WAAW,IAAI,SAAgC,IAAI;AAEpE,QAAM,eAAe,YAAY,CAAC,WAA2B;AAC3D,gBAAY,MAAM;AAAA,EACpB,GAAG,CAAC,CAAC;AAEL,QAAM,eAAe,YAAY,MAAM;AACrC,gBAAY,IAAI;AAAA,EAClB,GAAG,CAAC,CAAC;AAEL,QAAM,QAAQ;AAAA,IACZ,OAAO,EAAE,cAAc,aAAa;AAAA,IACpC,CAAC,cAAc,YAAY;AAAA,EAC7B;AAEA,SACE,qBAAC,gBAAgB,UAAhB,EAAyB,OACvB;AAAA;AAAA,IACA,YACC;AAAA,MAAC;AAAA;AAAA,QACC,OAAO,SAAS;AAAA,QAChB,SAAS,SAAS;AAAA,QAClB,MAAM,SAAS;AAAA,QACf,UAAU,SAAS;AAAA,QACnB,aAAa,SAAS;AAAA,QACtB,UAAU,SAAS;AAAA,QACnB,SAAS,SAAS;AAAA,QAClB,iBAAiB,SAAS;AAAA,QAC1B,WAAW,SAAS,aAAa;AAAA,QACjC,SAAS;AAAA,QACT,MAAI;AAAA;AAAA,IACN;AAAA,KAEJ;AAEJ;AAEO,gBAAS,cAAc;AAC5B,QAAM,UAAU,WAAW,eAAe;AAC1C,MAAI,CAAC,SAAS;AACZ,UAAM,IAAI,MAAM,uDAAuD;AAAA,EACzE;AACA,SAAO;AACT;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf46988b50e1501c6fe361b2be7bb787c5705a7b"},o=a[t]||(a[t]={});(!o[n]||o[n].hash!==A)&&(o[n]=r);var c=o[n];return l=function(){return c},c}l();const Mn=(l().s[0]++,u.createContext(void 0));function ln({children:n}){l().f[0]++;const[A,a]=(l().s[1]++,u.useState(null)),t=(l().s[2]++,u.useCallback(c=>{l().f[1]++,l().s[3]++,a(c)},[])),r=(l().s[4]++,u.useCallback(()=>{l().f[2]++,l().s[5]++,a(null)},[])),o=(l().s[6]++,u.useMemo(()=>(l().f[3]++,l().s[7]++,{showSnackbar:t,hideSnackbar:r}),[t,r]));return l().s[8]++,s.jsxs(Mn.Provider,{value:o,children:[n,(l().b[0][0]++,A&&(l().b[0][1]++,s.jsx(F,{state:A.state,message:A.message,size:A.size,onAction:A.onAction,actionLabel:A.actionLabel,duration:A.duration,persist:A.persist,dismissOnAction:A.dismissOnAction,showClose:(l().b[1][0]++,A.showClose??(l().b[1][1]++,!0)),onClose:r,open:!0})))]})}function $(){l().f[4]++;const n=(l().s[9]++,u.useContext(Mn));if(l().s[10]++,n)l().b[2][1]++;else throw l().b[2][0]++,l().s[11]++,new Error("useSnackbar must be used within RcSesSnackbarProvider");return l().s[12]++,n}l().s[13]++;try{l().s[14]++,ln.displayName="RcSesSnackbarProvider",l().s[15]++,ln.__docgenInfo={description:"",displayName:"RcSesSnackbarProvider",filePath:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/common/Snackbar/SnackbarProvider.tsx",methods:[],props:{},tags:{}}}catch{}const In=n=>{if(n==="error")return"error";if(n==="warning")return"warning";if(n==="info")return"info"},Pn=n=>n.charAt(0).toUpperCase()+n.slice(1).replace("-"," "),DA={title:"Molecules/Snackbar",component:F,tags:["autodocs"],decorators:[n=>s.jsx(ln,{children:s.jsx(I,{sx:{p:4,pb:16,minHeight:"300px"},children:s.jsx(n,{})})})]},Ee=[{state:"success",message:"Sėkmingai išsaugota"},{state:"error",message:"Įvyko klaida"},{state:"warning",message:"Dėmesio pranešimas"},{state:"info",message:"Informacinis pranešimas"}],ye=[{state:"success",message:"Sėkmingai išsaugota",actionLabel:"Atgal"},{state:"error",message:"Įvyko klaida",actionLabel:"Pakartoti"},{state:"warning",message:"Dėmesio pranešimas",actionLabel:"Sąlyga"},{state:"info",message:"Informacinis pranešimas",actionLabel:"Daugiau"},{state:"action-needed",message:"Reikalingas veiksmas",actionLabel:"Atlikti"}],J={render:n=>s.jsx(I,{sx:{pb:12},children:s.jsx(F,{...n},`${n.state}-${n.message}-${n.size}-${n.persist}`)}),args:{open:!0,state:"success",message:"Sėkmingai išsaugota",size:"standard",actionLabel:"Atgal",duration:1e4,persist:!0,showClose:!0,dismissOnAction:!0},argTypes:{open:{control:"boolean",description:"Control snackbar visibility"},state:{control:"select",options:["success","error","warning","info","action-needed"],description:"Snackbar state determines icon, color, and aria-live level"},message:{control:"text",description:"Notification message text (truncates with ellipsis)"},size:{control:"radio",options:["standard","compact"],description:"Standard (400×60px) or Compact (320×48px)"},duration:{control:{type:"number",min:1e3,max:3e4,step:1e3},description:"Auto-dismiss duration in milliseconds (ignored if persist=true)"},persist:{control:"boolean",description:"If true, snackbar will not auto-dismiss"},showClose:{control:"boolean",description:"Show/hide close button"},dismissOnAction:{control:"boolean",description:"Close snackbar when action button is clicked"},actionLabel:{control:"text",description:"Action button label (only shown in standard size)"},onAction:{action:"onAction",description:"Callback when action button is clicked"},onClose:{action:"onClose",description:"Callback when snackbar closes"}},parameters:{docs:{description:{story:"Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing."}}}};function we(){const{showSnackbar:n}=$();return s.jsx(I,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:Ee.map(({state:A,message:a})=>{const t=un[A].icon;return s.jsxs(j,{variant:"contained",color:In(A),startIcon:s.jsx(t,{}),onClick:()=>n({state:A,message:a,size:"compact"}),children:[Pn(A)," (Compact)"]},A)})})}const nn={render:()=>s.jsx(we,{}),parameters:{docs:{description:{story:"Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons."},source:{code:`// Setup at app root
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
})`}}}};function Oe(){const{showSnackbar:n}=$();return s.jsx(I,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:ye.map(({state:A,message:a,actionLabel:t})=>{const r=un[A].icon;return s.jsxs(j,{variant:"contained",color:In(A),startIcon:s.jsx(r,{}),onClick:()=>n({state:A,message:a,actionLabel:t,size:"standard",onAction:()=>{console.log(`${t} clicked`)}}),children:[Pn(A)," (Standard)"]},A)})})}const en={render:()=>s.jsx(Oe,{}),parameters:{docs:{description:{story:"Demonstrates standard-size snackbars with action buttons."},source:{code:`// Setup at app root
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
})`}}}};function Me(){const{showSnackbar:n}=$();return s.jsxs(I,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[s.jsx(j,{variant:"contained",onClick:()=>n({state:"success",message:"Trumpai išsaugota (3s)",duration:3e3}),children:"3s Duration"}),s.jsx(j,{variant:"contained",onClick:()=>n({state:"success",message:"Ilgiau išsaugota (10s)",duration:1e4}),children:"10s Duration"})]})}const An={render:()=>s.jsx(Me,{}),parameters:{docs:{description:{story:"Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away."},source:{code:`// Setup at app root
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
})`}}}};function Ie(){const{showSnackbar:n}=$();return s.jsx(I,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:s.jsx(j,{variant:"contained",onClick:()=>n({state:"action-needed",message:"Statiškas pranešimas",actionLabel:"Patvirtinti",persist:!0,showClose:!0,onAction:()=>{console.log("Patvirtinta")}}),children:"Persistent Snackbar"})})}const tn={render:()=>s.jsx(Ie,{}),parameters:{docs:{description:{story:"Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button."},source:{code:`// Setup at app root
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
})`}}}};function Pe(){const{showSnackbar:n}=$();return s.jsx(I,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:s.jsx(j,{variant:"contained",color:"info",onClick:()=>n({state:"info",message:"Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.",showClose:!0}),children:"Long Text (Truncation)"})})}const on={render:()=>s.jsx(Pe,{}),parameters:{docs:{description:{story:"Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width."},source:{code:`// Setup at app root
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
})`}}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`{
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
}`,...nn.parameters?.docs?.source}}};en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`{
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
}`,...en.parameters?.docs?.source}}};An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
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
}`,...An.parameters?.docs?.source}}};tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`{
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
}`,...tn.parameters?.docs?.source}}};on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`{
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
}`,...on.parameters?.docs?.source}}};const _A=["Default","CompactWithText","StandardWithButtons","CustomDuration","Persistent","LongText"];export{nn as CompactWithText,An as CustomDuration,J as Default,on as LongText,tn as Persistent,en as StandardWithButtons,_A as __namedExportsOrder,DA as default};
//# sourceMappingURL=Snackbar.stories-DTWgR5kR.js.map
