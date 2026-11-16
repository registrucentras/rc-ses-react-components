import{j as e,i as r,u as p}from"./iframe-C5f9Zc7Z.js";import{c as i}from"./tokenTheme-BcZLwVpt.js";import{S as o}from"./Stack-n0USQ4NM.js";import{T as c}from"./Typography-Cu6X7zgN.js";import{B as n}from"./Box-B61C4jPN.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const d=i(),u={title:"Fixtures/Foundations/Spacing",tags:["no-snapshot","!dev"],parameters:{layout:"padded"}},s={render:()=>e.jsx(r,{theme:d,children:e.jsxs(o,{spacing:2,children:[e.jsx(c,{variant:"h2",children:"Spacing roles"}),Object.entries(p).filter(([a])=>!a.startsWith("space-")).map(([a,t])=>e.jsxs(n,{"data-testid":a,sx:a.startsWith("gap-")?{display:"flex",gap:t}:{py:t,px:a.startsWith("padding-")?t:0},children:[e.jsx("span",{children:a}),e.jsx("span",{children:"A"}),e.jsx("span",{children:"B"})]},a)),e.jsx(n,{"data-testid":"theme-spacing",sx:{p:3},children:"theme.spacing(3)"}),e.jsx(n,{"data-testid":"fraction-spacing",sx:{p:1.75},children:"theme.spacing(1.75)"})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=Spacing.stories-mWk_Uvwi.js.map
