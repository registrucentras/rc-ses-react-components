import{r as C,h as b,j as w,f as k,y as h,x as m}from"./iframe-BxN2aOIa.js";import{c as S,m as x}from"./memoTheme-BVBNHufc.js";import{c as u}from"./utils-cxgvJEOf.js";import{g as R,a as M}from"./generateUtilityClasses-DGi4yQgU.js";import{s as $}from"./styled-BsEOJ7Su.js";function U(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function X(t){return R("MuiSkeleton",t)}M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const j=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:n,height:i}=t;return S({root:["root",a,s,o&&"withChildren",o&&!n&&"fitContent",o&&!i&&"heightAuto"]},X,e)},r=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,W=typeof r!="string"?h`
        animation: ${r} 2s ease-in-out 0.5s infinite;
      `:null,B=typeof l!="string"?h`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,E=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(x(({theme:t})=>{const e=U(t.shape.borderRadius)||"px",a=A(t.shape.borderRadius),s=u(t,{animation:"none"}),o=u(t,{"&::after":{animation:"none",display:"none"}});return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:W||{animation:`${r} 2s ease-in-out 0.5s infinite`}},...s?[{props:{animation:"pulse"},style:s}]:[],{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:B||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}},...o?[{props:{animation:"wave"},style:o}]:[]]}})),F=C.forwardRef(function(e,a){const s=b({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:i="span",height:p,style:f,variant:g="text",width:y,...d}=s,c={...s,animation:o,component:i,variant:g,hasChildren:!!d.children},v=j(c);return w.jsx(E,{as:i,ref:a,className:k(v.root,n),ownerState:c,...d,style:{width:y,height:p,...f}})});export{F as S};
//# sourceMappingURL=Skeleton-Cv1Z6t_X.js.map
