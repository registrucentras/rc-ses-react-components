import{j as r,g as m,p as I,P as i,r as P}from"./iframe-CWj8oZOZ.js";import{R as l}from"./index-DLMeF1Qm.js";import{P as v}from"./PreviewTitle-Dh-ZF7DV.js";import{B as a}from"./Box-DrHRxVUy.js";import{T as t}from"./Typography-p54XM_E9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7JPb8lP.js";import"./CircularProgress-o7WJEzHT.js";import"./memoTheme-rzYRwBep.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CoaK2LVL.js";import"./index-Ban65MQl.js";import"./Button-BbYEBjTl.js";import"./ButtonBase-DNQcAHDH.js";import"./useReducedMotion-CPcVPcQI.js";import"./useTimeout-BiQanTB9.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,L=["contained","outlined","link","text"],A=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],rr={title:"Atoms/Button",component:l,parameters:{layout:"centered"},argTypes:{variant:{options:L,control:{type:"select"}},color:{options:A,control:{type:"select"}},disabled:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},children:{control:"text"}},args:{children:"Button",onClick:D()},tags:["autodocs"]},d={args:{variant:"contained",color:"primary",disabled:!1,iconOnly:!1,loading:!1}},_={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},y=[{variant:"contained",color:"primary"},{variant:"contained",color:"secondary"},{variant:"contained",color:"grey"},{variant:"contained",color:"warning"},{variant:"contained",color:"error"},{variant:"outlined",color:"primary"},{variant:"outlined",color:"secondary"},{variant:"outlined",color:"grey"},{variant:"outlined",color:"warning"},{variant:"outlined",color:"error"},{variant:"link",color:"primary"},{variant:"link",color:"grey"},{variant:"text",color:"primary"},{variant:"text",color:"grey"}],b=[{variant:"outlined",color:"light"},{variant:"outlined",color:"ghost"}],E=s=>s.reduce((e,{variant:c})=>(e[c]=(e[c]??0)+1,e),{}),k={iconOnly:!0,"aria-label":"Add",children:r.jsx(i,{})},n=[{key:"default",label:"Default",args:{}},{key:"prefixIcon",label:"Prefix Icon",args:{startIcon:r.jsx(i,{})}},{key:"suffixIcon",label:"Suffix Icon",args:{endIcon:r.jsx(i,{})}},{key:"iconOnly",label:"Icon Only",args:k},{key:"disabled",label:"Disabled",args:{disabled:!0}},{key:"loading",label:"Loading",args:{loading:!0}},{key:"loadingStart",label:"Loading Position Start",args:{loading:!0,loadingPosition:"start",startIcon:r.jsx(i,{})}},{key:"loadingEnd",label:"Loading Position End",args:{loading:!0,loadingPosition:"end",endIcon:r.jsx(i,{})}},{key:"loadingIconOnly",label:"Loading Icon Only",args:{...k,loading:!0}}],C=({combos:s,onDark:e=!1})=>{const c=E(s),x=e?m[50]:"text.secondary";return r.jsxs(a,{sx:{display:"grid",gridTemplateColumns:`110px 90px repeat(${n.length}, minmax(140px, 1fr))`,rowGap:1.5,columnGap:1.5,alignItems:"center"},children:[r.jsx(a,{}),r.jsx(a,{}),n.map(o=>r.jsx(t,{align:"center",variant:"body2",sx:{color:x},children:o.label},o.key)),s.map(({variant:o,color:h},j)=>{const w=s[j-1]?.variant,T=o!==w,S=c[o];return r.jsxs(P.Fragment,{children:[T?r.jsx(t,{variant:"body2",sx:{color:e?m[50]:void 0,fontWeight:600,gridRow:`span ${S}`},children:o}):null,r.jsx(t,{variant:"body2",sx:{color:x},children:h}),n.map(f=>{const{children:B,...O}=f.args;return r.jsx(a,{sx:{display:"flex",justifyContent:"center"},children:r.jsx(l,{variant:o,color:h,...O,children:B??"Button"})},f.key)})]},`${o}-${h}`)})]})},p={parameters:{layout:"padded"},render:()=>r.jsxs(r.Fragment,{children:[r.jsxs(v,{children:["Light surface: ",y.length," variant+color rows x ",n.length," ","states = ",y.length*n.length," buttons. Axe color-contrast stays enforced here."]}),r.jsx(C,{combos:y})]})},u={parameters:{..._,layout:"padded"},render:()=>r.jsxs(a,{sx:{backgroundColor:m[900],borderRadius:1,p:3,color:m[50],width:"fit-content",minWidth:"100%"},children:[r.jsxs(v,{children:["Dark surface: ",b.length," variant+color rows x ",n.length," ","states = ",b.length*n.length," buttons. Axe color-contrast is disabled - light/ghost render on top of this dark backdrop."]}),r.jsx(C,{combos:b,onDark:!0})]})},g={tags:["no-snapshot"],parameters:{layout:"padded"},render:()=>r.jsxs(a,{sx:{display:"grid",gap:2,justifyItems:"start"},children:[r.jsx(t,{children:"Click with the mouse, release, then move the pointer away. The current link must return to its base color, even while focused. Then use Tab to reach it: a visible keyboard focus indicator must appear."}),r.jsx(t,{children:"Current library behavior"}),r.jsx(l,{variant:"link",children:"Current link"}),r.jsx(l,{variant:"link",disabled:!0,children:"Disabled link"}),r.jsx(t,{children:"Before: local simulation only, not library behavior"}),r.jsx(l,{variant:"link",sx:{"&:not(.Mui-disabled):focus":{color:I[900]}},children:"Before: retained focus color"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    iconOnly: false,
    loading: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  parameters: {
    layout: 'padded'
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: 2,
    justifyItems: 'start'
  }}>
      <Typography>
        Click with the mouse, release, then move the pointer away. The current link must
        return to its base color, even while focused. Then use Tab to reach it: a visible
        keyboard focus indicator must appear.
      </Typography>
      <Typography>Current library behavior</Typography>
      <Button variant='link'>Current link</Button>
      <Button variant='link' disabled>
        Disabled link
      </Button>
      <Typography>Before: local simulation only, not library behavior</Typography>
      <Button variant='link' sx={{
      '&:not(.Mui-disabled):focus': {
        color: primary[900]
      }
    }}>
        Before: retained focus color
      </Button>
    </Box>
}`,...g.parameters?.docs?.source}}};const or=["PrimaryContained","CoreCombinations","DarkSurfaceCombinations","LinkFocus"];export{p as CoreCombinations,u as DarkSurfaceCombinations,g as LinkFocus,d as PrimaryContained,or as __namedExportsOrder,rr as default};
//# sourceMappingURL=Button.stories-BURiHpuH.js.map
