import{r as p,m as K,a3 as Q,u as X,j as o,k as M,al as j,c as S,T as P,v as Y,am as $,an as Z,ao as ee}from"./iframe-DLZCP6iO.js";import{R as oe}from"./index-DkIepUFp.js";import{R as te}from"./index--IE3EwSD.js";import{L as se}from"./index-CkSRgouZ.js";import{l as re}from"./icons-zx-uSvI2.js";import{B as c}from"./Box-DnaOQCIt.js";import{T as h}from"./Typography-BWAjj3I8.js";import{F as ne}from"./FormControl-D08VpsHr.js";import{u as ie,a as ae,f as le,S as ce}from"./Select-BjXn4Bvq.js";import{c as pe,s as de,r as me,m as ue}from"./memoTheme-B4NoaLLX.js";import{L as z}from"./List-DPXq1UC-.js";import{g as fe,a as U}from"./generateUtilityClasses-DGi4yQgU.js";import{u as xe}from"./useRovingTabIndex-T05ACygD.js";import{u as ge}from"./useReducedMotion-ChxmCBJX.js";import{B as he}from"./ButtonBase-CS4BKQG-.js";import{l as B}from"./listItemTextClasses-CbyehWdQ.js";import{d as F}from"./dividerClasses-BusXqZ0M.js";import{S as w}from"./Stack-B1Q3OhVb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLkwxODt.js";import"./CircularProgress-D-vmsGR4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./useTranslation-r4JRHfXp.js";import"./index-BuvsHkXm.js";import"./Button-CEaqIJTh.js";import"./resolvePaletteColorPath-DZ5kn_Qq.js";import"./Tooltip-BA2T1tJs.js";import"./useSlot-C54_Tkze.js";import"./mergeSlotProps-DAbh-wpk.js";import"./useTimeout-Bp0NEb_2.js";import"./useControlled-bSwhgPZO.js";import"./getReactElementRef-BakveikH.js";import"./Grow-CysnWoIr.js";import"./Transition-Cbfn9G0c.js";import"./Popper-m1fRb95H.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DFgDLh9i.js";import"./index-WZLTNbun.js";import"./index-CGwCvyNc.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-DHbEArjC.js";import"./isFocusVisible-B8k4qzLc.js";import"./Skeleton-B_iaYJ68.js";import"./Logo-JQV5oBWt.js";import"./DotCircleFilledIcon-CKypKgaj.js";import"./useFormControl-BllD4Xy6.js";import"./isMuiElement-DmdtL9vO.js";import"./Popover-HIZMiHMV.js";import"./mergeSlotProps-DqvewLK1.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-2KOm3NPw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-kWHlMaXu.js";import"./Paper-iveQ9KeI.js";import"./createSvgIcon-CxF7t9SL.js";import"./OutlinedInput-OK5oAMIs.js";import"./inputLabelClasses-CWr5hV2f.js";import"./useThemeProps-9cC1MP-G.js";import"./getThemeProps-Cs4zLxVN.js";function be(e){return fe("MuiMenuItem",e)}const m=U("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=U("MuiListItemIcon",["root","alignItemsFlexStart"]),Ie=(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]},ve=e=>{const{disabled:t,dense:r,divider:s,disableGutters:i,selected:a,classes:n}=e,d=pe({root:["root",r&&"dense",t&&"disabled",!i&&"gutters",s&&"divider",a&&"selected"]},be,n);return{...n,...d}},ye=de(he,{shouldForwardProp:e=>me(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Ie})(ue(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${m.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${F.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${F.inset}`]:{marginLeft:52},[`& .${B.root}`]:{marginTop:0,marginBottom:0},[`& .${B.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${O.root} svg`]:{fontSize:"1.25rem"}}}]}))),Ce=p.forwardRef(function(t,r){const s=K({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:a="li",dense:n=!1,divider:l=!1,disableGutters:d=!1,focusVisibleClassName:E,role:G="menuitem",tabIndex:k,className:V,...N}=s,D=ie(),R=p.useContext(z),T=p.useMemo(()=>({dense:n||R.dense||!1,disableGutters:d}),[R.dense,n,d]),I=ae(),H=Q(),q=I.suppressInitialFocusVisible,v=I.itemsFocusableWhenDisabled,y=p.useRef(null);X(()=>{i&&y.current&&le(y.current,D)},[i]);const A={...s,dense:T.dense,divider:l,disableGutters:d},C=ve(s),{root:Le,..._}=C,L=xe({id:H,ref:r,disabled:s.disabled,focusableWhenDisabled:v,selected:s.selected}),J=ge(y,L.ref);let u;return k!==void 0?u=k:I.variant==="selectedMenu"?u=L.tabIndex:(!s.disabled||v)&&(u=-1),o.jsx(z.Provider,{value:T,children:o.jsx(ye,{ref:J,role:G,tabIndex:u,component:a,internalNativeButton:!1,focusableWhenDisabled:v,suppressFocusVisible:q,focusVisibleClassName:M(C.focusVisible,E),className:M(C.root,V),...N,ownerState:A,classes:_})})}),b={default:void 0,white:"#ffffff"},W={default:"default",white:"white (#ffffff)"};Object.entries(S).forEach(([e,t])=>{Object.entries(t).forEach(([r,s])=>{const i=`${e}.${r}`;b[i]=s,W[i]=`${i} (${s})`})});const je=Object.entries(b).map(([e,t])=>({colorValue:t,tokenName:e})),Se=e=>Object.entries(b).find(([,r])=>r===e)?.[0]??"default",we=Object.entries(re).filter(([e])=>e!=="RcSesLogo").map(([e,t])=>({name:e,Component:t})).sort((e,t)=>e.name.localeCompare(t.name)),Go={title:"Atoms/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Icons are exported from the package root, e.g. `import { TrashIcon } from '@registrucentras/rc-ses-react-components'`. Every icon takes `fillColor` (defaults to the current text color), `size` (px) and `weight` (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`), plus any SVG attribute such as `className` or `aria-hidden`. **Usage** shows the common patterns; **Gallery** lists every icon."}}},args:{className:"",fillColor:void 0,size:24},argTypes:{className:{control:"text"},size:{control:{min:8,max:128,step:1,type:"number"},table:{defaultValue:{summary:"24"}}}}},ke=({className:e,size:t,fillColor:r})=>{const[s,i]=p.useState(Se(r)),a=p.useMemo(()=>b[s],[s]);return o.jsxs(c,{children:[o.jsx(c,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",mb:2},children:we.map(n=>o.jsxs(c,{sx:{alignItems:"center",border:"1px solid",borderColor:"divider",borderRadius:1,color:a,display:"flex",flexDirection:"column",gap:1,minHeight:96,p:1.5},children:[o.jsx(n.Component,{className:e,fillColor:a,size:t}),o.jsx(h,{align:"center",sx:{color:"text.secondary",fontFamily:"monospace",fontSize:"0.75rem"},children:n.name})]},n.name))}),o.jsx(c,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",mt:3},children:o.jsxs(ne,{size:"small",children:[o.jsx(h,{sx:{color:"text.secondary",fontSize:"0.75rem",mb:.5},children:"fillColor"}),o.jsx(ce,{onChange:n=>{i(n.target.value)},value:s,children:je.map(({colorValue:n,tokenName:l})=>o.jsx(Ce,{value:l,children:o.jsxs(c,{sx:{alignItems:"center",display:"flex",gap:1},children:[o.jsx(c,{sx:{backgroundColor:n??"transparent",border:"1px solid",borderColor:"divider",borderRadius:"4px",height:12,width:12}}),o.jsx(h,{sx:{fontFamily:"monospace",fontSize:"0.75rem"},children:W[l]})]})},l))})]})})]})},f=({title:e,children:t})=>o.jsxs(w,{sx:{gap:1},children:[o.jsx(h,{sx:{color:"text.secondary",fontSize:"0.75rem"},children:e}),o.jsx(w,{direction:"row",sx:{alignItems:"center",flexWrap:"wrap",gap:2},children:t})]}),Re=`import {
  EnvelopeSimpleIcon,
  InfoIcon,
  ListWithIcons,
  MapPinIcon,
  PhoneIcon,
  RcSesButton,
  RcSesIconWithSquareBackground,
  RcSesPalette,
  TrashIcon,
  UserListIcon,
} from '@registrucentras/rc-ses-react-components'

// On its own: 24px, regular weight and the current text color unless told otherwise
<UserListIcon />
<UserListIcon size={16} fillColor={RcSesPalette.grey[600]} />
<TrashIcon weight='bold' aria-hidden='true' />
<InfoIcon weight='fill' fillColor={RcSesPalette.primary[500]} />

// Inside a button
<RcSesButton variant='link' startIcon={<TrashIcon size={20} />}>
  Pašalinti
</RcSesButton>

// ListWithIcons and the icon tiles size and color the icon themselves,
// so pass the component (PhoneIcon), not an element (<PhoneIcon />)
<ListWithIcons
  layout='horizontal'
  items={[
    { icon: UserListIcon, text: '3890615****' },
    { icon: PhoneIcon, text: '+370 600 00000' },
    { icon: EnvelopeSimpleIcon, text: 'vardenis.pavardenis@example.lt' },
    { icon: MapPinIcon, text: 'Vilnius, Gedimino pr. 1' },
  ]}
/>
<RcSesIconWithSquareBackground Icon={PhoneIcon} variant='soft' />`,Te=()=>o.jsxs(w,{sx:{gap:3},children:[o.jsxs(f,{title:"On its own",children:[o.jsx(j,{}),o.jsx(j,{size:16,fillColor:S.grey[600]}),o.jsx(P,{weight:"bold","aria-hidden":"true"}),o.jsx(Y,{weight:"fill",fillColor:S.primary[500]})]}),o.jsx(f,{title:"Inside a button",children:o.jsx(oe,{variant:"link",startIcon:o.jsx(P,{size:20}),children:"Pašalinti"})}),o.jsx(f,{title:"In ListWithIcons (pass the component)",children:o.jsx(se,{layout:"horizontal",items:[{icon:j,text:"3890615****"},{icon:$,text:"+370 600 00000"},{icon:Z,text:"vardenis.pavardenis@example.lt"},{icon:ee,text:"Vilnius, Gedimino pr. 1"}]})}),o.jsx(f,{title:"In an icon tile (pass the component)",children:o.jsx(te,{Icon:$,variant:"soft"})})]}),x={render:()=>o.jsx(Te,{}),parameters:{controls:{disable:!0},docs:{description:{story:"How a consumer uses the icons: on their own, inside a button, and in components that take an icon component."},source:{code:Re,language:"tsx"}}}},g={render:e=>o.jsx(ke,{...e}),parameters:{docs:{description:{story:"Every icon the package exports. Use the controls to try `size` and the select below to try `fillColor`."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <UsageComponent />,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'How a consumer uses the icons: on their own, inside a button, and in components that take an icon component.'
      },
      source: {
        code: usageCode,
        language: 'tsx'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <GalleryComponent {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Every icon the package exports. Use the controls to try \`size\` and the select below to try \`fillColor\`.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const Vo=["Usage","Gallery"];export{g as Gallery,x as Usage,Vo as __namedExportsOrder,Go as default};
//# sourceMappingURL=Icons.stories-fF3Gtiy0.js.map
