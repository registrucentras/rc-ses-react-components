import{j as e,k as r,n as p}from"./iframe-CWj8oZOZ.js";import{c as i}from"./tokenTheme-qVsiXXng.js";import{S as o}from"./Stack-CkZqBFdB.js";import{T as c}from"./Typography-p54XM_E9.js";import{B as t}from"./Box-DrHRxVUy.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-rzYRwBep.js";import"./useThemeProps-HF0yvPmk.js";import"./getThemeProps-CVYSyeY6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const d=i(),u={title:"Foundations/Spacing",tags:["no-snapshot"],parameters:{layout:"padded"}},s={render:()=>e.jsx(r,{theme:d,children:e.jsxs(o,{spacing:2,children:[e.jsx(c,{variant:"h2",children:"Spacing roles"}),Object.entries(p).filter(([a])=>!a.startsWith("space-")).map(([a,n])=>e.jsxs(t,{"data-testid":a,sx:a.startsWith("gap-")?{display:"flex",gap:n}:{py:n,px:a.startsWith("padding-")?n:0},children:[e.jsx("span",{children:a}),e.jsx("span",{children:"A"}),e.jsx("span",{children:"B"})]},a)),e.jsx(t,{"data-testid":"theme-spacing",sx:{p:3},children:"theme.spacing(3)"}),e.jsx(t,{"data-testid":"fraction-spacing",sx:{p:1.75},children:"theme.spacing(1.75)"})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Spacing roles</Typography>
        {Object.entries(spacingRoleBasedTokens).filter(([name]) => !name.startsWith('space-')).map(([name, value]) => <Box key={name} data-testid={name} sx={name.startsWith('gap-') ? {
        display: 'flex',
        gap: value
      } : {
        py: value,
        px: name.startsWith('padding-') ? value : 0
      }}>
              <span>{name}</span>
              <span>A</span>
              <span>B</span>
            </Box>)}
        <Box data-testid='theme-spacing' sx={{
        p: 3
      }}>
          theme.spacing(3)
        </Box>
        <Box data-testid='fraction-spacing' sx={{
        p: 1.75
      }}>
          theme.spacing(1.75)
        </Box>
      </Stack>
    </ThemeProvider>
}`,...s.parameters?.docs?.source}}};const S=["Tokens"];export{s as Tokens,S as __namedExportsOrder,u as default};
//# sourceMappingURL=Spacing.stories-CjcWMvMm.js.map
