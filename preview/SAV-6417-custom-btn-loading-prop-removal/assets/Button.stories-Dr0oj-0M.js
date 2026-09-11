import{j as o,g,r as I}from"./iframe-CIXJIlmg.js";import{P as a}from"./PlusBoldIcon-Dw35-kK-.js";import{R as f}from"./index-j0nIKNjn.js";import{P as k}from"./PreviewTitle-Bdwgt5hH.js";import{B as s}from"./Box-DL7cVOPT.js";import{T as p}from"./Typography-DTApuYQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Plus.es-CmsVTXan.js";import"./index-dOFqxQxA.js";import"./CircularProgress-BzifdDUv.js";import"./memoTheme-DbAlV__5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Cjiqd4Vw.js";import"./index-C8-UiIJn.js";import"./Button-BbHkjFiN.js";import"./ButtonBase-CWd8qBAx.js";import"./useReducedMotion-C2r5ARSO.js";import"./useTimeout-BZ2e3185.js";import"./isFocusVisible-B8k4qzLc.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,B=["contained","outlined","link","text"],A=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],ro={title:"Atoms/Button",component:f,parameters:{layout:"centered"},argTypes:{variant:{options:B,control:{type:"select"}},color:{options:A,control:{type:"select"}},disabled:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},children:{control:"text"}},args:{children:"Button",onClick:T()},tags:["autodocs"]},l={args:{variant:"contained",color:"primary",disabled:!1,iconOnly:!1,loading:!1}},D={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},u=[{variant:"contained",color:"primary"},{variant:"contained",color:"secondary"},{variant:"contained",color:"grey"},{variant:"contained",color:"warning"},{variant:"contained",color:"error"},{variant:"outlined",color:"primary"},{variant:"outlined",color:"secondary"},{variant:"outlined",color:"grey"},{variant:"outlined",color:"warning"},{variant:"outlined",color:"error"},{variant:"link",color:"primary"},{variant:"link",color:"grey"},{variant:"text",color:"primary"},{variant:"text",color:"grey"}],y=[{variant:"outlined",color:"light"},{variant:"outlined",color:"ghost"}],_=e=>e.reduce((t,{variant:i})=>(t[i]=(t[i]??0)+1,t),{}),b={iconOnly:!0,"aria-label":"Add",children:o.jsx(a,{})},n=[{key:"default",label:"Default",args:{}},{key:"prefixIcon",label:"Prefix Icon",args:{startIcon:o.jsx(a,{})}},{key:"suffixIcon",label:"Suffix Icon",args:{endIcon:o.jsx(a,{})}},{key:"iconOnly",label:"Icon Only",args:b},{key:"disabled",label:"Disabled",args:{disabled:!0}},{key:"loading",label:"Loading",args:{loading:!0}},{key:"loadingStart",label:"Loading Position Start",args:{loading:!0,loadingPosition:"start",startIcon:o.jsx(a,{})}},{key:"loadingEnd",label:"Loading Position End",args:{loading:!0,loadingPosition:"end",endIcon:o.jsx(a,{})}},{key:"loadingIconOnly",label:"Loading Icon Only",args:{...b,loading:!0}}],v=({combos:e,onDark:t=!1})=>{const i=_(e),h=t?g[50]:"text.secondary";return o.jsxs(s,{sx:{display:"grid",gridTemplateColumns:`110px 90px repeat(${n.length}, minmax(140px, 1fr))`,rowGap:1.5,columnGap:1.5,alignItems:"center"},children:[o.jsx(s,{}),o.jsx(s,{}),n.map(r=>o.jsx(p,{align:"center",variant:"body2",sx:{color:h},children:r.label},r.key)),e.map(({variant:r,color:m},C)=>{const j=e[C-1]?.variant,S=r!==j,w=i[r];return o.jsxs(I.Fragment,{children:[S?o.jsx(p,{variant:"body2",sx:{color:t?g[50]:void 0,fontWeight:600,gridRow:`span ${w}`},children:r}):null,o.jsx(p,{variant:"body2",sx:{color:h},children:m}),n.map(x=>{const{children:O,...P}=x.args;return o.jsx(s,{sx:{display:"flex",justifyContent:"center"},children:o.jsx(f,{variant:r,color:m,...P,children:O??"Button"})},x.key)})]},`${r}-${m}`)})]})},c={parameters:{layout:"padded"},render:()=>o.jsxs(o.Fragment,{children:[o.jsxs(k,{children:["Light surface: ",u.length," variant+color rows x ",n.length," ","states = ",u.length*n.length," buttons. Axe color-contrast stays enforced here."]}),o.jsx(v,{combos:u})]})},d={parameters:{...D,layout:"padded"},render:()=>o.jsxs(s,{sx:{backgroundColor:g[900],borderRadius:1,p:3,color:g[50],width:"fit-content",minWidth:"100%"},children:[o.jsxs(k,{children:["Dark surface: ",y.length," variant+color rows x ",n.length," ","states = ",y.length*n.length," buttons. Axe color-contrast is disabled - light/ghost render on top of this dark backdrop."]}),o.jsx(v,{combos:y,onDark:!0})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    iconOnly: false,
    loading: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <>
      <PreviewTitle>
        Light surface: {lightSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {lightSurfaceCombos.length * states.length} buttons. Axe color-contrast
        stays enforced here.
      </PreviewTitle>
      <CombinationsGrid combos={lightSurfaceCombos} />
    </>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableColorContrast,
    layout: 'padded'
  },
  render: () => <Box sx={{
    backgroundColor: grey[900],
    borderRadius: 1,
    p: 3,
    color: grey[50],
    width: 'fit-content',
    minWidth: '100%'
  }}>
      <PreviewTitle>
        Dark surface: {darkSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {darkSurfaceCombos.length * states.length} buttons. Axe color-contrast is
        disabled - light/ghost render on top of this dark backdrop.
      </PreviewTitle>
      <CombinationsGrid combos={darkSurfaceCombos} onDark />
    </Box>
}`,...d.parameters?.docs?.source}}};const no=["PrimaryContained","CoreCombinations","DarkSurfaceCombinations"];export{c as CoreCombinations,d as DarkSurfaceCombinations,l as PrimaryContained,no as __namedExportsOrder,ro as default};
//# sourceMappingURL=Button.stories-Dr0oj-0M.js.map
