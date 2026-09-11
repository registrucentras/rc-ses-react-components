import{j as o,g,r as I}from"./iframe-CW-h-lR4.js";import{P as t}from"./PlusBoldIcon-B5J53mFQ.js";import{R as f}from"./index-4nzuLQ_u.js";import{P as k}from"./PreviewTitle-DsMOAOvx.js";import{B as s}from"./Box-QFZvygG7.js";import{T as m}from"./Typography-bOKMNxZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./Plus.es-R26LglYR.js";import"./index-CcDZ9GMN.js";import"./CircularProgress-B3E4aKNC.js";import"./memoTheme-BKfEdFx3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-C65dd5Za.js";import"./index-DhWHs75O.js";import"./Button-CnDMTalq.js";import"./ButtonBase-BrKqmiWE.js";import"./useReducedMotion-Dh1mS691.js";import"./useTimeout-Bq0Rqasq.js";import"./isFocusVisible-B8k4qzLc.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,B=["contained","outlined","link","text"],D=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],ro={title:"Atoms/Button",component:f,parameters:{layout:"centered"},argTypes:{variant:{options:B,control:{type:"select"}},color:{options:D,control:{type:"select"}},disabled:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},children:{control:"text"}},args:{children:"Button",onClick:T()},tags:["autodocs"]},l={args:{variant:"contained",color:"primary",disabled:!1,iconOnly:!1,loading:!1}},A={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},u=[{variant:"contained",color:"primary"},{variant:"contained",color:"secondary"},{variant:"contained",color:"grey"},{variant:"contained",color:"warning"},{variant:"contained",color:"error"},{variant:"outlined",color:"primary"},{variant:"outlined",color:"secondary"},{variant:"outlined",color:"grey"},{variant:"outlined",color:"warning"},{variant:"outlined",color:"error"},{variant:"link",color:"primary"},{variant:"link",color:"grey"},{variant:"text",color:"primary"},{variant:"text",color:"grey"}],h=[{variant:"outlined",color:"light"},{variant:"outlined",color:"ghost"}],_=a=>a.reduce((e,{variant:i})=>(e[i]=(e[i]??0)+1,e),{}),b={iconOnly:!0,"aria-label":"Add",children:o.jsx(t,{})},n=[{key:"default",label:"Default",args:{}},{key:"prefixIcon",label:"Prefix Icon",args:{startIcon:o.jsx(t,{})}},{key:"suffixIcon",label:"Suffix Icon",args:{endIcon:o.jsx(t,{})}},{key:"iconOnly",label:"Icon Only",args:b},{key:"disabled",label:"Disabled",args:{disabled:!0}},{key:"loading",label:"Loading",args:{loading:!0}},{key:"loadingStart",label:"Loading Position Start",args:{loading:!0,loadingPosition:"start",startIcon:o.jsx(t,{})}},{key:"loadingEnd",label:"Loading Position End",args:{loading:!0,loadingPosition:"end",endIcon:o.jsx(t,{})}},{key:"loadingIconOnly",label:"Loading Icon Only",args:{...b,loading:!0}}],v=({combos:a,onDark:e=!1})=>{const i=_(a),y=e?g[50]:"text.secondary";return o.jsxs(s,{sx:{display:"grid",gridTemplateColumns:`110px 90px repeat(${n.length}, minmax(140px, 1fr))`,rowGap:1.5,columnGap:1.5,alignItems:"center"},children:[o.jsx(s,{}),o.jsx(s,{}),n.map(r=>o.jsx(m,{align:"center",variant:"body2",sx:{color:y},children:r.label},r.key)),a.map(({variant:r,color:p},C)=>{const j=a[C-1]?.variant,S=r!==j,w=i[r];return o.jsxs(I.Fragment,{children:[S?o.jsx(m,{variant:"body2",sx:{color:e?g[50]:void 0,fontWeight:600,gridRow:`span ${w}`},children:r}):null,o.jsx(m,{variant:"body2",sx:{color:y},children:p}),n.map(x=>{const{children:O,...P}=x.args;return o.jsx(s,{sx:{display:"flex",justifyContent:"center"},children:o.jsx(f,{variant:r,color:p,...P,children:O??"Button"})},x.key)})]},`${r}-${p}`)})]})},c={parameters:{layout:"padded"},render:()=>o.jsxs(o.Fragment,{children:[o.jsxs(k,{children:["Light surface: ",u.length," variant+color rows x ",n.length," ","states = ",u.length*n.length," buttons. Axe color-contrast stays enforced here."]}),o.jsx(v,{combos:u})]})},d={parameters:{...A,layout:"padded"},render:()=>o.jsxs(s,{sx:{backgroundColor:g[900],borderRadius:1,p:3,color:g[50]},children:[o.jsxs(k,{children:["Dark surface: ",h.length," variant+color rows x ",n.length," ","states = ",h.length*n.length," buttons. Axe color-contrast is disabled - light/ghost render on top of this dark backdrop which axe cannot see through the DOM."]}),o.jsx(v,{combos:h,onDark:!0})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    color: grey[50]
  }}>
      <PreviewTitle>
        Dark surface: {darkSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {darkSurfaceCombos.length * states.length} buttons. Axe color-contrast is
        disabled - light/ghost render on top of this dark backdrop which axe cannot see
        through the DOM.
      </PreviewTitle>
      <CombinationsGrid combos={darkSurfaceCombos} onDark />
    </Box>
}`,...d.parameters?.docs?.source}}};const no=["PrimaryContained","CoreCombinations","DarkSurfaceCombinations"];export{c as CoreCombinations,d as DarkSurfaceCombinations,l as PrimaryContained,no as __namedExportsOrder,ro as default};
//# sourceMappingURL=Button.stories-pqXvZ2tV.js.map
