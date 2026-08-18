import{r as c,d as w,j as Y,f as ue,y as ie,x as oe}from"./iframe-C13r2uq4.js";import{d as Ue,a as $e,b as Ve,c as I,u as re}from"./useReducedMotion-CPJAJ76I.js";import{s as ne}from"./styled-C5Cpl9Hg.js";import{u as ce,a as Oe}from"./useTimeout-BAzONqqq.js";import{a as pe,g as Ae}from"./generateUtilityClasses-DGi4yQgU.js";import{i as ae}from"./isFocusVisible-B8k4qzLc.js";import{c as Fe}from"./memoTheme-BL9_zouD.js";function Ye(o){const{focusableWhenDisabled:e,disabled:t,composite:n=!1,tabIndex:s=0,isNativeButton:i}=o,l=n&&e!==!1,r=n&&e===!1;return c.useMemo(()=>{const f={onKeyDown(M){t&&e&&M.key!=="Tab"&&M.preventDefault()}};return n||(f.tabIndex=s,!i&&t&&(f.tabIndex=e?s:-1)),(i&&(e||l)||!i&&t)&&(f["aria-disabled"]=t),i&&(!e||r)&&(f.disabled=t),f},[n,t,e,l,r,i,s])}const ze={};function je(o){const{nativeButton:e,disabled:t,type:n,hasFormAction:s=!1,tabIndex:i=0,focusableWhenDisabled:l,stopEventPropagation:r=!1,onBeforeKeyDown:g,onBeforeKeyUp:f}=o,M=c.useRef(null),p=l===!0,b=Ye({focusableWhenDisabled:p,disabled:t,isNativeButton:e,tabIndex:i}),k=c.useCallback(()=>{const d=M.current;return d==null?e:d.tagName==="BUTTON"?!0:!!(d.tagName==="A"&&d.href)},[e]),C=c.useMemo(()=>{const d=p?{}:{tabIndex:t?-1:i};return e?(d.type=n===void 0&&!s?"button":n,p||(d.disabled=t)):(d.role="button",!p&&t&&(d["aria-disabled"]=t)),p?{...d,...b}:d},[t,p,b,s,e,i,n]);return{getButtonProps:c.useCallback((d=ze)=>{const{onClick:E,onKeyDown:x,onKeyUp:L,...z}=d;return{...C,...z,onClick:a=>{if(r&&a.stopPropagation(),t){a.preventDefault();return}E?.(a)},onKeyDown:a=>{if(p&&b.onKeyDown(a),!t&&(g?.(a),x?.(a),!(a.target!==a.currentTarget||k()))){if(a.key===" "){a.preventDefault();return}a.key==="Enter"&&(a.preventDefault(),a.currentTarget.click())}},onKeyUp:a=>{t||(f?.(a),L?.(a),a.target===a.currentTarget&&!k()&&a.key===" "&&!a.defaultPrevented&&a.currentTarget.click())}}},[C,t,p,b,k,g,f,r]),rootRef:M}}class _{static create(){return new _}static use(){const e=Ue(_.create).current,[t,n]=c.useState(!1);return e.shouldMount=t,e.setShouldMount=n,c.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Xe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}function We(){return _.use()}function Xe(){let o,e;const t=new Promise((n,s)=>{o=n,e=s});return t.resolve=o,t.reject=e,t}function ve(o){const{className:e,classes:t,pulsate:n=!1,rippleX:s,rippleY:i,rippleSize:l,in:r,onExited:g,timeout:f}=o,[M,p]=c.useState(!1),b=ce(),k=c.useRef(!1),C=c.useRef(g);C.current=g;const D=g!=null,d=w(e,t.ripple,t.rippleVisible,n&&t.ripplePulsate),E={width:l,height:l,top:-(l/2)+i,left:-(l/2)+s},x=w(t.child,M&&t.childLeaving,n&&t.childPulsate);return!r&&!M&&p(!0),c.useEffect(()=>{!r&&D?k.current||(k.current=!0,b.start(f,()=>{k.current=!1,C.current?.()})):(k.current=!1,b.clear())},[b,D,r,f]),Y.jsx("span",{className:d,style:E,children:Y.jsx("span",{className:x})})}const R=pe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),te=550,He=80,J={},le=[],qe=()=>{};function ee(o,e){const t=new Set(e),n=new Map;let s=[];for(const l of o)t.has(l)?s.length>0&&(n.set(l,s),s=[]):s.push(l);const i=[];for(const l of e){const r=n.get(l);r&&i.push(...r),i.push(l)}return i.push(...s),i}function Je({event:o,element:e,center:t}){const n=e?e.getBoundingClientRect():{width:0,height:0,left:0,top:0};let s,i;if(t||o===void 0||o.clientX===0&&o.clientY===0||!o.clientX&&!o.touches)s=Math.round(n.width/2),i=Math.round(n.height/2);else{const{clientX:r,clientY:g}=o.touches&&o.touches.length>0?o.touches[0]:o;s=Math.round(r-n.left),i=Math.round(g-n.top)}let l;if(t)l=Math.sqrt((2*n.width**2+n.height**2)/3),l%2===0&&(l+=1);else{const r=Math.max(Math.abs((e?e.clientWidth:0)-s),s)*2+2,g=Math.max(Math.abs((e?e.clientHeight:0)-i),i)*2+2;l=Math.sqrt(r**2+g**2)}return{rippleX:s,rippleY:i,rippleSize:l}}const _e=oe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ge=oe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Qe=oe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function Ze(o){if(o.motion.reducedMotion==="always")return null;const e=ie`
    &.${R.rippleVisible} {
      animation-name: ${_e};
      animation-duration: ${te}ms;
      animation-timing-function: ${o.transitions.easing.easeInOut};
    }

    &.${R.ripplePulsate} {
      animation-duration: ${o.transitions.duration.shorter}ms;
    }

    & .${R.childLeaving} {
      animation-name: ${Ge};
      animation-duration: ${te}ms;
      animation-timing-function: ${o.transitions.easing.easeInOut};
    }

    & .${R.childPulsate} {
      animation-name: ${Qe};
      animation-duration: 2500ms;
      animation-timing-function: ${o.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return o.motion.reducedMotion==="system"?ie`
      @media (prefers-reduced-motion: no-preference) {
        ${e}
      }
    `:e}const et=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),tt=ne(ve,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${R.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${R.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${R.childLeaving} {
    opacity: 0;
  }

  & .${R.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:o})=>Ze(o)}
`,ot=c.forwardRef(function(e,t){const n=ue({props:e,name:"MuiTouchRipple"}),s=$e(),i=Ve(s.motion.reducedMotion,!1),{center:l=!1,classes:r=J,className:g,...f}=n,[M,p]=c.useState({items:le,order:le}),b=M.items,k=c.useRef(0),C=c.useRef(null),D=c.useRef(!1);Oe(()=>(D.current=!0,()=>{D.current=!1})),c.useEffect(()=>{C.current&&(C.current(),C.current=null)},[b]);const d=c.useRef(!1),E=ce(),x=c.useRef(null),L=c.useRef(null),z=I(u=>{D.current&&p(P=>{const B=P.items.filter(m=>m.key!==u),T=ee(P.order.filter(m=>m!==u),B.filter(m=>!m.exiting).map(m=>m.key));return{items:B,order:T}})}),j=I(u=>{const{pulsate:P,rippleX:B,rippleY:T,rippleSize:m,cb:K}=u,U=k.current;k.current+=1,p($=>{const V=[...$.items,{key:U,pulsate:P,rippleX:B,rippleY:T,rippleSize:m,exiting:!1}];return{items:V,order:ee($.order,V.filter(N=>!N.exiting).map(N=>N.key))}}),C.current=K}),A=I((u=J,P=J,B=qe)=>{const{pulsate:T=!1,center:m=l||P.pulsate,fakeElement:K=!1}=P;if(u?.type==="mousedown"&&d.current){d.current=!1;return}u?.type==="touchstart"&&(d.current=!0);const U=K?null:L.current,{rippleX:$,rippleY:V,rippleSize:N}=Je({event:u,element:U,center:m});u?.touches?x.current===null&&(x.current=()=>{j({pulsate:T,rippleX:$,rippleY:V,rippleSize:N,cb:B})},E.start(He,()=>{x.current&&(x.current(),x.current=null)})):j({pulsate:T,rippleX:$,rippleY:V,rippleSize:N,cb:B})}),F=I(()=>{A(J,{pulsate:!0})}),a=I((u,P)=>{if(E.clear(),u?.type==="touchend"&&x.current){x.current(),x.current=null,E.start(0,()=>{a(u,P)});return}x.current=null,p(B=>{const T=B.items.findIndex(K=>!K.exiting);if(T===-1)return B;const m=B.items.slice();return m[T]={...m[T],exiting:!0},{items:m,order:ee(B.order,m.filter(K=>!K.exiting).map(K=>K.key))}}),C.current=P});c.useImperativeHandle(t,()=>({pulsate:F,start:A,stop:a}),[F,A,a]);const G=new Map(b.map(u=>[u.key,u])),Q=M.order.map(u=>G.get(u)).filter(Boolean);return Y.jsx(et,{className:w(R.root,r.root,g),ref:L,...f,children:Q.map(u=>Y.jsx(tt,{classes:{ripple:w(r.ripple,R.ripple),rippleVisible:w(r.rippleVisible,R.rippleVisible),ripplePulsate:w(r.ripplePulsate,R.ripplePulsate),child:w(r.child,R.child),childLeaving:w(r.childLeaving,R.childLeaving),childPulsate:w(r.childPulsate,R.childPulsate)},timeout:i.shouldReduceMotion?0:te,pulsate:u.pulsate,rippleX:u.rippleX,rippleY:u.rippleY,rippleSize:u.rippleSize,in:!u.exiting,onExited:()=>z(u.key)},u.key))})});function nt(o){return Ae("MuiButtonBase",o)}const st=pe("MuiButtonBase",["root","disabled","focusVisible"]),it=o=>{const{disabled:e,focusVisible:t,focusVisibleClassName:n,suppressFocusVisible:s,classes:i}=o,r=Fe({root:["root",e&&"disabled",t&&!s&&"focusVisible"]},nt,i);return t&&!s&&n&&(r.root+=` ${n}`),r},rt=ne("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${st.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=c.forwardRef(function(e,t){const n=ue({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:i=!1,children:l,className:r,component:g="button",disabled:f=!1,disableRipple:M=!1,disableTouchRipple:p=!1,focusRipple:b=!1,focusVisibleClassName:k,focusableWhenDisabled:C,suppressFocusVisible:D=!1,internalNativeButton:d,LinkComponent:E="a",nativeButton:x,onBlur:L,onClick:z,onContextMenu:j,onDragLeave:A,onFocus:F,onFocusVisible:a,onKeyDown:G,onKeyUp:Q,onMouseDown:u,onMouseLeave:P,onMouseUp:B,onTouchEnd:T,onTouchMove:m,onTouchStart:K,tabIndex:U=0,TouchRippleProps:$,touchRippleRef:V,type:N,...v}=n,Z=!!(v.href||v.to),fe=!!v.formAction;let W=g;W==="button"&&Z&&(W=E);const de=x??(typeof W=="string"?W==="button":d??!1),y=We(),he=re(y.ref,V),[O,H]=c.useState(!1);(f||D)&&O&&H(!1);const me=I(h=>{b&&!h.repeat&&O&&h.key===" "&&y.stop(h,()=>{y.start(h)})}),be=I(h=>{b&&h.key===" "&&O&&!h.defaultPrevented&&y.stop(h,()=>{y.pulsate(h)})}),{getButtonProps:ye,rootRef:X}=je({nativeButton:de,disabled:f,type:N,hasFormAction:fe,tabIndex:U,onBeforeKeyDown:me,onBeforeKeyUp:be}),{onClick:ge,onKeyDown:Me,onKeyUp:xe,...Re}=ye({onClick:z,onKeyDown:G,onKeyUp:Q});c.useImperativeHandle(s,()=>({focusVisible:()=>{H(!0),X.current.focus()}}),[X]);const Be=y.shouldMount&&!M&&!f;c.useEffect(()=>{O&&b&&!M&&y.pulsate()},[M,b,O,y]);const Pe=S(y,"start",u,p),ke=S(y,"stop",j,p),Ce=S(y,"stop",A,p),Te=S(y,"stop",B,p),De=S(y,"stop",h=>{O&&h.preventDefault(),P&&P(h)},p),Ke=S(y,"start",K,p),we=S(y,"stop",T,p),Ee=S(y,"stop",m,p),Ne=S(y,"stop",h=>{ae(h.target)||H(!1),L&&L(h)},!1),Se=I(h=>{X.current||(X.current=h.currentTarget),!D&&ae(h.target)&&(H(!0),a&&a(h)),F&&F(h)}),q={};Z&&(q.tabIndex=f?-1:U,f&&(q["aria-disabled"]=f),q.type=N);const Ie=re(t,X),se={...n,centerRipple:i,component:g,disabled:f,disableRipple:M,disableTouchRipple:p,focusRipple:b,suppressFocusVisible:D,tabIndex:U,focusVisible:O},Le=it(se);return Y.jsxs(rt,{as:W,className:w(Le.root,r),ownerState:se,onBlur:Ne,onClick:ge,onContextMenu:ke,onFocus:Se,onKeyDown:Me,onKeyUp:xe,onMouseDown:Pe,onMouseLeave:De,onMouseUp:Te,onDragLeave:Ce,onTouchEnd:we,onTouchMove:Ee,onTouchStart:Ke,ref:Ie,...Z?q:Re,...v,children:[l,Be?Y.jsx(ot,{ref:he,center:i,...$}):null]})});function S(o,e,t,n=!1){return I(s=>(t&&t(s),n||o[e](s),!0))}export{mt as B};
//# sourceMappingURL=ButtonBase-BITqhGut.js.map
