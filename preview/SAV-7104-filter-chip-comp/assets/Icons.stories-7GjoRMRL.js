import{r as d,q as K,Z as Q,u as X,j as o,m as B,ao as S,f as k,T as P,y as Y,ap as $,aq as ee,ar as oe}from"./iframe-CCeyCrqp.js";import{R as te}from"./index-BNiRjy7V.js";import{R as se}from"./index-Mf3v0rpl.js";import{L as re}from"./index-CASS8tQd.js";import{l as ne}from"./icons-C25WWJtC.js";import{B as c}from"./Box-CD0Ckri3.js";import{T as h}from"./Typography-BcmCNguC.js";import{F as ie}from"./FormControl-BG3uPiMB.js";import{u as ae,a as le,f as ce,S as de}from"./Select-CGKYpmoj.js";import{c as pe,s as me,r as ue,m as fe}from"./memoTheme-C0wvpSvw.js";import{L as z}from"./List-Cyt8pS7f.js";import{g as xe,a as W}from"./generateUtilityClasses-DGi4yQgU.js";import{u as ge}from"./useRovingTabIndex-CPiYoeeP.js";import{u as he}from"./useReducedMotion-iqnEsf7n.js";import{B as be}from"./ButtonBase-Dusap62A.js";import{l as F}from"./listItemTextClasses-CbyehWdQ.js";import{d as O}from"./dividerClasses-BusXqZ0M.js";import{S as w}from"./Stack-ep9XqSPo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfgpvDGX.js";import"./CircularProgress-BgRDWzqe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./useTranslation-DSzKp9dp.js";import"./index-D_hGba6M.js";import"./Button-Br3wNhu3.js";import"./resolvePaletteColorPath-BzkyBl0N.js";import"./Tooltip-DthN9yac.js";import"./useSlot-MlE46m0F.js";import"./mergeSlotProps-DQxfus8Q.js";import"./useTimeout-CV9EbYuy.js";import"./useControlled-BXaRoU1G.js";import"./getReactElementRef-BSqoeeVm.js";import"./Grow-CHqefTk1.js";import"./Transition-BgyDU6Ie.js";import"./Popper-Cd2B3YD8.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DA5299Ee.js";import"./index-DJD8j2eL.js";import"./index-5YRiv8M9.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-BRylw2Ll.js";import"./isFocusVisible-B8k4qzLc.js";import"./Skeleton-ks6rvrpR.js";import"./Logo-CnaQCaPI.js";import"./DotCircleFilledIcon-1tqiQrYq.js";import"./useFormControl-DafuNREV.js";import"./isMuiElement-Ee0aDokq.js";import"./Popover-DVbN_2vj.js";import"./mergeSlotProps-BdZZ97o-.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-DX-Qybzt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BGyTopTm.js";import"./Paper-8RwezajL.js";import"./OutlinedInput-B0cLA0xZ.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./createSvgIcon-_19mzxF9.js";import"./useThemeProps-Ccu5qU4F.js";import"./getThemeProps-DYXXmbe9.js";function Ie(e){return xe("MuiMenuItem",e)}const m=W("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),U=W("MuiListItemIcon",["root","alignItemsFlexStart"]),ve=(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]},ye=e=>{const{disabled:t,dense:r,divider:s,disableGutters:i,selected:a,classes:n}=e,p=pe({root:["root",r&&"dense",t&&"disabled",!i&&"gutters",s&&"divider",a&&"selected"]},Ie,n);return{...n,...p}},Ce=me(be,{shouldForwardProp:e=>ue(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ve})(fe(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${m.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${F.root}`]:{marginTop:0,marginBottom:0},[`& .${F.inset}`]:{paddingLeft:36},[`& .${U.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${U.root} svg`]:{fontSize:"1.25rem"}}}]}))),je=d.forwardRef(function(t,r){const s=K({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:a="li",dense:n=!1,divider:l=!1,disableGutters:p=!1,focusVisibleClassName:G,role:I="menuitem",tabIndex:R,className:V,...N}=s,D=I==="menuitemcheckbox"||I==="menuitemradio"?!!s.selected:void 0,H=ae(),T=d.useContext(z),L=d.useMemo(()=>({dense:n||T.dense||!1,disableGutters:p}),[T.dense,n,p]),v=le(),q=Q(),A=v.suppressInitialFocusVisible,y=v.itemsFocusableWhenDisabled,C=d.useRef(null);X(()=>{i&&C.current&&ce(C.current,H)},[i]);const _={...s,dense:L.dense,divider:l,disableGutters:p},j=ye(s),{root:Be,...Z}=j,M=ge({id:q,ref:r,disabled:s.disabled,focusableWhenDisabled:y,selected:s.selected}),J=he(C,M.ref);let u;return R!==void 0?u=R:v.variant==="selectedMenu"?u=M.tabIndex:(!s.disabled||y)&&(u=-1),o.jsx(z.Provider,{value:L,children:o.jsx(Ce,{ref:J,role:I,"aria-checked":D,tabIndex:u,component:a,internalNativeButton:!1,focusableWhenDisabled:y,suppressFocusVisible:A,focusVisibleClassName:B(j.focusVisible,G),className:B(j.root,V),...N,ownerState:_,classes:Z})})}),b={default:void 0,white:"#ffffff"},E={default:"default",white:"white (#ffffff)"};Object.entries(k).forEach(([e,t])=>{Object.entries(t).forEach(([r,s])=>{const i=`${e}.${r}`;b[i]=s,E[i]=`${i} (${s})`})});const Se=Object.entries(b).map(([e,t])=>({colorValue:t,tokenName:e})),ke=e=>Object.entries(b).find(([,r])=>r===e)?.[0]??"default",we=Object.entries(ne).filter(([e])=>e!=="RcSesLogo").map(([e,t])=>({name:e,Component:t})).sort((e,t)=>e.name.localeCompare(t.name)),No={title:"Atoms/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Icons are exported from the package root, e.g. `import { TrashIcon } from '@registrucentras/rc-ses-react-components'`. Every icon takes `fillColor` (defaults to the current text color), `size` (px) and `weight` (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`), plus any SVG attribute such as `className` or `aria-hidden`. **Usage** shows the common patterns; **Gallery** lists every icon."}}},args:{className:"",fillColor:void 0,size:24},argTypes:{className:{control:"text"},size:{control:{min:8,max:128,step:1,type:"number"},table:{defaultValue:{summary:"24"}}}}},Re=({className:e,size:t,fillColor:r})=>{const[s,i]=d.useState(ke(r)),a=d.useMemo(()=>b[s],[s]);return o.jsxs(c,{children:[o.jsx(c,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",mb:2},children:we.map(n=>o.jsxs(c,{sx:{alignItems:"center",border:"1px solid",borderColor:"divider",borderRadius:1,color:a,display:"flex",flexDirection:"column",gap:1,minHeight:96,p:1.5},children:[o.jsx(n.Component,{className:e,fillColor:a,size:t}),o.jsx(h,{align:"center",sx:{color:"text.secondary",fontFamily:"monospace",fontSize:"0.75rem"},children:n.name})]},n.name))}),o.jsx(c,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",mt:3},children:o.jsxs(ie,{size:"small",children:[o.jsx(h,{sx:{color:"text.secondary",fontSize:"0.75rem",mb:.5},children:"fillColor"}),o.jsx(de,{onChange:n=>{i(n.target.value)},value:s,children:Se.map(({colorValue:n,tokenName:l})=>o.jsx(je,{value:l,children:o.jsxs(c,{sx:{alignItems:"center",display:"flex",gap:1},children:[o.jsx(c,{sx:{backgroundColor:n??"transparent",border:"1px solid",borderColor:"divider",borderRadius:"4px",height:12,width:12}}),o.jsx(h,{sx:{fontFamily:"monospace",fontSize:"0.75rem"},children:E[l]})]})},l))})]})})]})},f=({title:e,children:t})=>o.jsxs(w,{sx:{gap:1},children:[o.jsx(h,{sx:{color:"text.secondary",fontSize:"0.75rem"},children:e}),o.jsx(w,{direction:"row",sx:{alignItems:"center",flexWrap:"wrap",gap:2},children:t})]}),Te=`import {
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
<RcSesIconWithSquareBackground Icon={PhoneIcon} variant='soft' />`,Le=()=>o.jsxs(w,{sx:{gap:3},children:[o.jsxs(f,{title:"On its own",children:[o.jsx(S,{}),o.jsx(S,{size:16,fillColor:k.grey[600]}),o.jsx(P,{weight:"bold","aria-hidden":"true"}),o.jsx(Y,{weight:"fill",fillColor:k.primary[500]})]}),o.jsx(f,{title:"Inside a button",children:o.jsx(te,{variant:"link",startIcon:o.jsx(P,{size:20}),children:"Pašalinti"})}),o.jsx(f,{title:"In ListWithIcons (pass the component)",children:o.jsx(re,{layout:"horizontal",items:[{icon:S,text:"3890615****"},{icon:$,text:"+370 600 00000"},{icon:ee,text:"vardenis.pavardenis@example.lt"},{icon:oe,text:"Vilnius, Gedimino pr. 1"}]})}),o.jsx(f,{title:"In an icon tile (pass the component)",children:o.jsx(se,{Icon:$,variant:"soft"})})]}),x={render:()=>o.jsx(Le,{}),parameters:{controls:{disable:!0},docs:{description:{story:"How a consumer uses the icons: on their own, inside a button, and in components that take an icon component."},source:{code:Te,language:"tsx"}}}},g={render:e=>o.jsx(Re,{...e}),parameters:{docs:{description:{story:"Every icon the package exports. Use the controls to try `size` and the select below to try `fillColor`."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Do=["Usage","Gallery"];export{g as Gallery,x as Usage,Do as __namedExportsOrder,No as default};
//# sourceMappingURL=Icons.stories-7GjoRMRL.js.map
