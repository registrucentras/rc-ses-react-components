import{j as t,i as o,v as p}from"./iframe-C5f9Zc7Z.js";import{c as m}from"./tokenTheme-BcZLwVpt.js";import{S as h}from"./Stack-n0USQ4NM.js";import{T as n}from"./Typography-Cu6X7zgN.js";import{B as d}from"./Box-B61C4jPN.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const i=m(),k={title:"Fixtures/Foundations/Typography",tags:["no-snapshot","!dev"],parameters:{layout:"padded"}},a={render:()=>t.jsx(o,{theme:i,children:t.jsxs(h,{spacing:2,children:[t.jsx(n,{variant:"h2",children:"Typography from theme"}),t.jsx(n,{children:"All 14 roles use theme typography variants. Existing font attributes are retained; new named styles inherit family and weight until the Figma text styles export is available."}),Object.entries(p).map(([e,s])=>t.jsxs(n,{variant:s,"data-testid":e,children:[e,": Aa Bb 0123456789"]},e))]})})},r={render:()=>t.jsx(o,{theme:i,children:t.jsx(d,{sx:{fontFamily:"monospace",fontWeight:700},children:["headingCardTitle","bodyLarge","buttonCompact"].map(e=>t.jsxs(n,{variant:e,"data-testid":e,children:[e,": inherited family and weight"]},e))})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["Dimensions","Inheritance"];export{a as Dimensions,r as Inheritance,S as __namedExportsOrder,k as default};
//# sourceMappingURL=Typography.stories-BAwanAu6.js.map
