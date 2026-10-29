import{j as a,k as o,q as p}from"./iframe-CWj8oZOZ.js";import{c as m}from"./tokenTheme-qVsiXXng.js";import{S as h}from"./Stack-CkZqBFdB.js";import{T as n}from"./Typography-p54XM_E9.js";import{B as d}from"./Box-DrHRxVUy.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-rzYRwBep.js";import"./useThemeProps-HF0yvPmk.js";import"./getThemeProps-CVYSyeY6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const i=m(),k={title:"Foundations/Typography",tags:["no-snapshot"],parameters:{layout:"padded"}},t={render:()=>a.jsx(o,{theme:i,children:a.jsxs(h,{spacing:2,children:[a.jsx(n,{variant:"h2",children:"Typography from theme"}),a.jsx(n,{children:"All 14 roles use theme typography variants. Existing font attributes are retained; new named styles inherit family and weight until the Figma text styles export is available."}),Object.entries(p).map(([e,s])=>a.jsxs(n,{variant:s,"data-testid":e,children:[e,": Aa Bb 0123456789"]},e))]})})},r={render:()=>a.jsx(o,{theme:i,children:a.jsx(d,{sx:{fontFamily:"monospace",fontWeight:700},children:["headingCardTitle","bodyLarge","buttonCompact"].map(e=>a.jsxs(n,{variant:e,"data-testid":e,children:[e,": inherited family and weight"]},e))})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Typography from theme</Typography>
        <Typography>
          All 14 roles use theme typography variants. Existing font attributes are
          retained; new named styles inherit family and weight until the Figma text styles
          export is available.
        </Typography>
        {Object.entries(typographyRoleVariants).map(([role, variant]) => <Typography key={role} variant={variant} data-testid={role}>
            {role}: Aa Bb 0123456789
          </Typography>)}
      </Stack>
    </ThemeProvider>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={tokenTheme}>
      <Box sx={{
      fontFamily: 'monospace',
      fontWeight: 700
    }}>
        {(['headingCardTitle', 'bodyLarge', 'buttonCompact'] as const).map(variant => <Typography key={variant} variant={variant} data-testid={variant}>
            {variant}: inherited family and weight
          </Typography>)}
      </Box>
    </ThemeProvider>
}`,...r.parameters?.docs?.source}}};const S=["Dimensions","Inheritance"];export{t as Dimensions,r as Inheritance,S as __namedExportsOrder,k as default};
//# sourceMappingURL=Typography.stories-t2pRw9JQ.js.map
