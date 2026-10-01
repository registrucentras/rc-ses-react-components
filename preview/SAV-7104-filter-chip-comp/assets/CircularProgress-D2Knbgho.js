import{r as E,q as O,j as l,m as z,t as M,L as D,O as R}from"./iframe-D8onu3Il.js";import{c as I,s as m,m as h}from"./memoTheme-ByP6l3WP.js";import{c as K}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{d as j,b as w}from"./utils-BL043Ngk.js";import{g as V,a as W}from"./generateUtilityClasses-DGi4yQgU.js";function q(r){return V("MuiCircularProgress",r)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDisableShrink"]);const t=44,x=D`
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
`,B=typeof x!="string"?R`
        animation: ${x} 1.4s linear infinite;
      `:null,G=typeof v!="string"?R`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,L=r=>{const{classes:s,variant:e,color:o,disableShrink:p}=r,u={root:["root",e,`color${M(o)}`],svg:["svg"],track:["track"],circle:["circle",p&&"circleDisableShrink"]};return I(u,q,s)},Z=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${M(e.color)}`]]}})(h(({theme:r})=>{const s=j(r,{animation:"none"});return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{...w(r,"transform")}},{props:{variant:"indeterminate"},style:B||{animation:`${x} 1.4s linear infinite`}},...s?[{props:{variant:"indeterminate"},style:s}]:[],...Object.entries(r.palette).filter(K()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}})),H=m("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),J=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,e.disableShrink&&s.circleDisableShrink]}})(h(({theme:r})=>{const s=j(r,{animation:"none"});return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{...w(r,"stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:G||{animation:`${v} 1.4s ease-in-out infinite`}},...s?[{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:s}]:[]]}})),Q=m("circle",{name:"MuiCircularProgress",slot:"Track"})(h(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),sr=E.forwardRef(function(s,e){const o=O({props:s,name:"MuiCircularProgress"}),{className:p,color:u="primary",disableShrink:N=!1,enableTrackSlot:C=!1,min:T,max:A,size:d=40,style:F,thickness:a=3.6,value:f=o.min??0,variant:P="indeterminate",...U}=o,S=T??0,y=A??100,i={...o,color:u,disableShrink:N,size:d,thickness:a,value:f,variant:P,enableTrackSlot:C},n=L(i),g={},b={},c={};if(P==="determinate"){const k=2*Math.PI*((t-a)/2),$=y-S;g.strokeDasharray=k.toFixed(3),g.strokeDashoffset=$>0?`${((y-f)/$*k).toFixed(3)}px`:`${k.toFixed(3)}px`,b.transform="rotate(-90deg)",c["aria-valuenow"]=f,c["aria-valuemin"]=S,c["aria-valuemax"]=y}return l.jsx(Z,{className:z(n.root,p),style:{width:d,height:d,...b,...F},ownerState:i,ref:e,role:"progressbar",...c,...U,children:l.jsxs(H,{className:n.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:[C?l.jsx(Q,{className:n.track,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a,"aria-hidden":"true"}):null,l.jsx(J,{className:n.circle,style:g,ownerState:i,cx:t,cy:t,r:(t-a)/2,fill:"none",strokeWidth:a})]})})});export{sr as C};
//# sourceMappingURL=CircularProgress-D2Knbgho.js.map
