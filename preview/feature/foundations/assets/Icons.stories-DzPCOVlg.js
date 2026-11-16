import{j as e,r as I,U as x,d as u,T as y,e as b,f as j,E as C,M as v}from"./iframe-C5f9Zc7Z.js";import{R as w}from"./index-BNMNfPN2.js";import{R as k}from"./index-De2CSdRT.js";import{L as z}from"./index-D9rnTVxT.js";import{l as T}from"./icons-CeHzLZQ1.js";import{B as n}from"./Box-B61C4jPN.js";import{T as p}from"./Typography-Cu6X7zgN.js";import{F as R}from"./FormControl-CK27828S.js";import{S as P}from"./Select-BusCaZhm.js";import{M as U}from"./MenuItem-BPhEetl2.js";import{S as f}from"./Stack-n0USQ4NM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFL_h1cZ.js";import"./CircularProgress-DCfJ8UYi.js";import"./memoTheme-aFWhReI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Dn-vvyCO.js";import"./index-Bexat51j.js";import"./Button-CpdT9tS7.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./useReducedMotion-BHCwGahe.js";import"./Tooltip-DxcoceIo.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useControlled-B4Netmu2.js";import"./getReactElementRef-D27myLnX.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./Popper-XpW4iyei.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-BH4z5ryB.js";import"./Skeleton-DJGJzGuv.js";import"./Logo-DYBh28iP.js";import"./DotCircleFilledIcon-6PkdHZo6.js";import"./useFormControl-Cxw3h7Uq.js";import"./isMuiElement-BSR4zhUB.js";import"./Popover-D7KVqWPM.js";import"./mergeSlotProps-CBY2sUhi.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-eG75g-HH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DZSngBJJ.js";import"./Paper-Dn22t17M.js";import"./useRovingTabIndex-C3X7iciN.js";import"./List-B019eLJ7.js";import"./OutlinedInput-C5zfYCDl.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./createSvgIcon-DJbAJPfa.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-BusXqZ0M.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";const d={default:void 0,white:"#ffffff"},S={default:"default",white:"white (#ffffff)"};Object.entries(u).forEach(([o,t])=>{Object.entries(t).forEach(([i,s])=>{const a=`${o}.${i}`;d[a]=s,S[a]=`${a} (${s})`})});const L=Object.entries(d).map(([o,t])=>({colorValue:t,tokenName:o})),E=o=>Object.entries(d).find(([,i])=>i===o)?.[0]??"default",B=Object.entries(T).filter(([o])=>o!=="RcSesLogo").map(([o,t])=>({name:o,Component:t})).sort((o,t)=>o.name.localeCompare(t.name)),De={title:"Atoms/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Icons are exported from the package root, e.g. `import { TrashIcon } from '@registrucentras/rc-ses-react-components'`. Every icon takes `fillColor` (defaults to the current text color), `size` (px) and `weight` (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`), plus any SVG attribute such as `className` or `aria-hidden`. **Usage** shows the common patterns; **Gallery** lists every icon."}}},args:{className:"",fillColor:void 0,size:24},argTypes:{className:{control:"text"},size:{control:{min:8,max:128,step:1,type:"number"},table:{defaultValue:{summary:"24"}}}}},O=({className:o,size:t,fillColor:i})=>{const[s,a]=I.useState(E(i)),g=I.useMemo(()=>d[s],[s]);return e.jsxs(n,{children:[e.jsx(n,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",mb:2},children:B.map(r=>e.jsxs(n,{sx:{alignItems:"center",border:"1px solid",borderColor:"divider",borderRadius:1,color:g,display:"flex",flexDirection:"column",gap:1,minHeight:96,p:1.5},children:[e.jsx(r.Component,{className:o,fillColor:g,size:t}),e.jsx(p,{align:"center",sx:{color:"text.secondary",fontFamily:"monospace",fontSize:"0.75rem"},children:r.name})]},r.name))}),e.jsx(n,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",mt:3},children:e.jsxs(R,{size:"small",children:[e.jsx(p,{sx:{color:"text.secondary",fontSize:"0.75rem",mb:.5},children:"fillColor"}),e.jsx(P,{onChange:r=>{a(r.target.value)},value:s,children:L.map(({colorValue:r,tokenName:h})=>e.jsx(U,{value:h,children:e.jsxs(n,{sx:{alignItems:"center",display:"flex",gap:1},children:[e.jsx(n,{sx:{backgroundColor:r??"transparent",border:"1px solid",borderColor:"divider",borderRadius:"4px",height:12,width:12}}),e.jsx(p,{sx:{fontFamily:"monospace",fontSize:"0.75rem"},children:S[h]})]})},h))})]})})]})},c=({title:o,children:t})=>e.jsxs(f,{sx:{gap:1},children:[e.jsx(p,{sx:{color:"text.secondary",fontSize:"0.75rem"},children:o}),e.jsx(f,{direction:"row",sx:{alignItems:"center",flexWrap:"wrap",gap:2},children:t})]}),W=`import {
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
<RcSesIconWithSquareBackground Icon={PhoneIcon} variant='soft' />`,G=()=>e.jsxs(f,{sx:{gap:3},children:[e.jsxs(c,{title:"On its own",children:[e.jsx(x,{}),e.jsx(x,{size:16,fillColor:u.grey[600]}),e.jsx(y,{weight:"bold","aria-hidden":"true"}),e.jsx(b,{weight:"fill",fillColor:u.primary[500]})]}),e.jsx(c,{title:"Inside a button",children:e.jsx(w,{variant:"link",startIcon:e.jsx(y,{size:20}),children:"Pašalinti"})}),e.jsx(c,{title:"In ListWithIcons (pass the component)",children:e.jsx(z,{layout:"horizontal",items:[{icon:x,text:"3890615****"},{icon:j,text:"+370 600 00000"},{icon:C,text:"vardenis.pavardenis@example.lt"},{icon:v,text:"Vilnius, Gedimino pr. 1"}]})}),e.jsx(c,{title:"In an icon tile (pass the component)",children:e.jsx(k,{Icon:j,variant:"soft"})})]}),l={render:()=>e.jsx(G,{}),parameters:{controls:{disable:!0},docs:{description:{story:"How a consumer uses the icons: on their own, inside a button, and in components that take an icon component."},source:{code:W,language:"tsx"}}}},m={render:o=>e.jsx(O,{...o}),parameters:{docs:{description:{story:"Every icon the package exports. Use the controls to try `size` and the select below to try `fillColor`."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <GalleryComponent {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Every icon the package exports. Use the controls to try \`size\` and the select below to try \`fillColor\`.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const Je=["Usage","Gallery"];export{m as Gallery,l as Usage,Je as __namedExportsOrder,De as default};
//# sourceMappingURL=Icons.stories-DzPCOVlg.js.map
