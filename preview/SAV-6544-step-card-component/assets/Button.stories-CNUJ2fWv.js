import{j as r,g as o}from"./iframe-BZi_IIKT.js";import{P as a}from"./PlusBoldIcon-CtFWnupH.js";import{R as q}from"./index-BTimCFAx.js";import"./preload-helper-PPVm8Dsz.js";import"./Plus.es-33P42OpZ.js";import"./index-DgdLTPoX.js";import"./CircularProgress-D9QxgJAT.js";import"./memoTheme-BAlo7ZiK.js";import"./styled-Bj6thygr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-C-kmrHRC.js";import"./index-Dntby98u.js";import"./Button-DdYFElO8.js";import"./ButtonBase-suQXw5PM.js";import"./useReducedMotion-BStgDSTd.js";import"./useTimeout-hVRA184I.js";import"./isFocusVisible-B8k4qzLc.js";const{fn:z}=__STORYBOOK_MODULE_TEST__,K=["contained","outlined","link","text"],U=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],ur={title:"components/actions/Button",component:q,parameters:{layout:"centered"},argTypes:{variant:{options:K,mapping:K,control:{type:"select",labels:K},table:{defaultValue:{}}},color:{options:U,mapping:U,control:{type:"select",labels:U},table:{defaultValue:{}}},disabled:{control:{type:"boolean"},table:{defaultValue:{}}},iconOnly:{control:{type:"boolean"},table:{defaultValue:{}}},loading:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}},tags:["autodocs"],args:{children:"Button",onClick:z()}},e={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},t={args:{variant:"contained",color:"primary",disabled:!1}},s={args:{variant:"contained",color:"primary",disabled:!1,startIcon:r.jsx(a,{})}},i={args:{variant:"contained",color:"primary",disabled:!1,endIcon:r.jsx(a,{})}},d={args:{"aria-label":"Add",children:r.jsx(a,{}),color:"primary",iconOnly:!0,variant:"contained"}},c={parameters:e,args:{color:"primary",variant:"outlined"}},l={parameters:e,args:{color:"primary",variant:"outlined",startIcon:r.jsx(a,{})}},u={parameters:e,args:{color:"primary",variant:"outlined",endIcon:r.jsx(a,{})}},g={parameters:e,args:{"aria-label":"Add",children:r.jsx(a,{}),color:"primary",iconOnly:!0,variant:"outlined"}},m={args:{color:"secondary",variant:"contained"}},p={parameters:e,args:{color:"secondary",variant:"outlined"}},y={args:{color:"grey",variant:"contained"}},h={parameters:e,args:{color:"grey",variant:"outlined"}},v={args:{variant:"contained",children:"Button",color:"warning"}},C={parameters:e,args:{variant:"outlined",children:"Button",color:"warning"}},b={args:{color:"error",variant:"contained"}},I={parameters:e,args:{color:"error",variant:"outlined"}},O={args:{variant:"outlined",color:"light",children:"Light Button"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},S={args:{variant:"outlined",color:"light",startIcon:r.jsx(a,{}),children:"Light Button with Icon"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},f={args:{variant:"outlined",color:"light",children:"Light Button Disabled",disabled:!0},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},x={args:{"aria-label":"Close",children:r.jsx(a,{}),color:"ghost",iconOnly:!0,variant:"outlined"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},L={args:{"aria-label":"Close",children:r.jsx(a,{}),color:"ghost",disabled:!0,iconOnly:!0,variant:"outlined"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},j={args:{variant:"contained",color:"primary",loading:!0}},P={args:{variant:"contained",color:"primary",loading:!0,startIcon:r.jsx(a,{})}},B={args:{variant:"contained",color:"primary",loading:!0,endIcon:r.jsx(a,{})}},W={args:{"aria-label":"Add",children:r.jsx(a,{}),color:"primary",iconOnly:!0,variant:"contained",loading:!0}},k={parameters:e,args:{color:"primary",variant:"outlined",loading:!0}},R={args:{color:"secondary",variant:"contained",loading:!0}},w={parameters:e,args:{color:"secondary",variant:"outlined",loading:!0}},E={args:{color:"grey",variant:"contained",loading:!0}},G={parameters:e,args:{color:"grey",variant:"outlined",loading:!0}},D={args:{variant:"contained",color:"warning",loading:!0}},A={parameters:e,args:{variant:"outlined",color:"warning",loading:!0}},_={args:{color:"error",variant:"contained",loading:!0}},T={parameters:e,args:{color:"error",variant:"outlined",loading:!0}},V={args:{variant:"outlined",color:"light",children:"Light Button",loading:!0},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},M={args:{variant:"outlined",color:"light",startIcon:r.jsx(a,{}),children:"Light Button with Icon",loading:!0},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},Y={args:{"aria-label":"Close",children:r.jsx(a,{}),color:"ghost",iconOnly:!0,variant:"outlined",loading:!0},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false
  }
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
     // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'))
     // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument()
  }, */
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    startIcon: <PlusBoldIcon />
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    endIcon: <PlusBoldIcon />
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'contained'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    startIcon: <PlusBoldIcon />
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    endIcon: <PlusBoldIcon />
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'outlined'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    variant: 'contained'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'secondary',
    variant: 'outlined'
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    variant: 'contained'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'grey',
    variant: 'outlined'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'warning'
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    variant: 'outlined',
    children: 'Button',
    color: 'warning'
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'error',
    variant: 'contained'
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'error',
    variant: 'outlined'
  }
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    startIcon: <PlusBoldIcon />,
    children: 'Light Button with Icon'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button Disabled',
    disabled: true
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    iconOnly: true,
    variant: 'outlined'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    disabled: true,
    iconOnly: true,
    variant: 'outlined'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true
  }
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
    startIcon: <PlusBoldIcon />
  }
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
    endIcon: <PlusBoldIcon />
  }
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'contained',
    loading: true
  }
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    loading: true
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    variant: 'contained',
    loading: true
  }
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'secondary',
    variant: 'outlined',
    loading: true
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    variant: 'contained',
    loading: true
  }
}`,...E.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'grey',
    variant: 'outlined',
    loading: true
  }
}`,...G.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'warning',
    loading: true
  }
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    variant: 'outlined',
    color: 'warning',
    loading: true
  }
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'error',
    variant: 'contained',
    loading: true
  }
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'error',
    variant: 'outlined',
    loading: true
  }
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button',
    loading: true
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    startIcon: <PlusBoldIcon />,
    children: 'Light Button with Icon',
    loading: true
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...M.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    iconOnly: true,
    variant: 'outlined',
    loading: true
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...Y.parameters?.docs?.source}}};const gr=["PrimaryContained","PrimaryContainedWithPrefixIcon","PrimaryContainedWithSuffixIcon","PrimaryContainedIconOnly","PrimaryOutlined","PrimaryOutlinedWithPrefixIcon","PrimaryOutlinedWithSuffixIcon","PrimaryOutlinedIconOnly","SecondaryContained","SecondaryOutlined","GreyContained","GreyOutlined","WarningContained","WarningOutlined","ErrorContained","ErrorOutlined","LightOutlined","LightOutlinedWithIcon","LightOutlinedDisabled","GhostOutlinedIconOnly","GhostOutlinedIconOnlyDisabled","PrimaryContainedLoading","PrimaryContainedLoadingWithIcon","PrimaryContainedLoadingWithEndIcon","PrimaryContainedIconOnlyLoading","PrimaryOutlinedLoading","SecondaryContainedLoading","SecondaryOutlinedLoading","GreyContainedLoading","GreyOutlinedLoading","WarningContainedLoading","WarningOutlinedLoading","ErrorContainedLoading","ErrorOutlinedLoading","LightOutlinedLoading","LightOutlinedWithIconLoading","GhostOutlinedIconOnlyLoading"];export{b as ErrorContained,_ as ErrorContainedLoading,I as ErrorOutlined,T as ErrorOutlinedLoading,x as GhostOutlinedIconOnly,L as GhostOutlinedIconOnlyDisabled,Y as GhostOutlinedIconOnlyLoading,y as GreyContained,E as GreyContainedLoading,h as GreyOutlined,G as GreyOutlinedLoading,O as LightOutlined,f as LightOutlinedDisabled,V as LightOutlinedLoading,S as LightOutlinedWithIcon,M as LightOutlinedWithIconLoading,t as PrimaryContained,d as PrimaryContainedIconOnly,W as PrimaryContainedIconOnlyLoading,j as PrimaryContainedLoading,B as PrimaryContainedLoadingWithEndIcon,P as PrimaryContainedLoadingWithIcon,s as PrimaryContainedWithPrefixIcon,i as PrimaryContainedWithSuffixIcon,c as PrimaryOutlined,g as PrimaryOutlinedIconOnly,k as PrimaryOutlinedLoading,l as PrimaryOutlinedWithPrefixIcon,u as PrimaryOutlinedWithSuffixIcon,m as SecondaryContained,R as SecondaryContainedLoading,p as SecondaryOutlined,w as SecondaryOutlinedLoading,v as WarningContained,D as WarningContainedLoading,C as WarningOutlined,A as WarningOutlinedLoading,gr as __namedExportsOrder,ur as default};
//# sourceMappingURL=Button.stories-CNUJ2fWv.js.map
