import{r as E,h as z,j as l,f as I,i as M,x as D,y as R}from"./iframe-4itHtakA.js";import{c as K,m as h}from"./memoTheme-CfQ1zA65.js";import{c as O}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as j,b as w}from"./utils-cxgvJEOf.js";import{g as V,a as W}from"./generateUtilityClasses-DGi4yQgU.js";import{s as m}from"./styled-DgEdj7s4.js";function B(r){return V("MuiCircularProgress",r)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDisableShrink"]);const t=44,x=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=D`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,G=typeof x!="string"?R`
        animation: ${x} 1.4s linear infinite;
      `:null,Z=typeof v!="string"?R`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,q=r=>{const{classes:s,variant:e,color:o,disableShrink:p}=r,u={root:["root",e,`color${M(o)}`],svg:["svg"],track:["track"],circle:["circle",p&&"circleDisableShrink"]};return K(u,B,s)},H=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${M(e.color)}`]]}})(h(({theme:r})=>{const s=j(r,{animation:"none"});return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{...w(r,"transform")}},{props:{variant:"indeterminate"},style:G||{animation:`${x} 1.4s linear infinite`}},...s?[{props:{variant:"indeterminate"},style:s}]:[],...Object.entries(r.palette).filter(O()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}})),J=m("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),L=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,e.disableShrink&&s.circleDisableShrink]}})(h(({theme:r})=>{const s=j(r,{animation:"none"});return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{...w(r,"stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:Z||{animation:`${v} 1.4s ease-in-out infinite`}},...s?[{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:s}]:[]]}})),Q=m("circle",{name:"MuiCircularProgress",slot:"Track"})(h(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),tr=E.forwardRef(function(s,e){const o=z({props:s,name:"MuiCircularProgress"}),{className:p,color:u="primary",disableShrink:N=!1,enableTrackSlot:C=!1,min:T,max:A,size:d=40,style:F,thickness:a=3.6,value:f=o.min??0,variant:P="indeterminate",...U}=o,S=T??0,y=A??100,i={...o,color:u,disableShrink:N,size:d,thickness:a,value:f,variant:P,enableTrackSlot:C},n=q(i),g={},b={},c={};if(P==="determinate"){const k=2*Math.PI*((t-a)/2),$=y-S;g.strokeDasharray=k.toFixed(3),g.strokeDashoffset=$>0?`${((y-f)/$*k).toFixed(3)}px`:`${k.toFixed(3)}px`,b.transform="rotate(-90deg)",c["aria-valuenow"]=f,c["aria-valuemin"]=S,c["aria-valuemax"]=y}return l.jsx(H,{className:I(n.root,p),style:{width:d,height:d,...b,...F},ownerState:i,ref:e,role:"progressbar",...c,...U,children:l.jsxs(J,{className:n.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:[C?l.jsx(Q,{className:n.track,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a,"aria-hidden":"true"}):null,l.jsx(L,{className:n.circle,style:g,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a})]})})});export{tr as C};
//# sourceMappingURL=CircularProgress-DWJuWLra.js.map
