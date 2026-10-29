import{j as s,m as r,o}from"./iframe-CWj8oZOZ.js";import{S as n}from"./Stack-CkZqBFdB.js";import{T as p}from"./Typography-p54XM_E9.js";import{B as c}from"./Box-DrHRxVUy.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-rzYRwBep.js";import"./useThemeProps-HF0yvPmk.js";import"./getThemeProps-CVYSyeY6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const j={title:"Foundations/Sizes",tags:["no-snapshot"],parameters:{layout:"padded"}},a={render:()=>s.jsx(n,{spacing:2,children:["primitives","aliases"].map(t=>s.jsxs(n,{spacing:1,children:[s.jsxs(p,{variant:"h2",children:["Icon ",t]}),Object.entries(r).filter(([e])=>t==="primitives"?/^icon-size-\d+$/.test(e):!/^icon-size-\d+$/.test(e)).map(([e,i])=>s.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:2},children:[s.jsx(o,{"data-testid":e,"aria-hidden":!0,style:{width:i,height:i,flexShrink:0}}),s.jsx("span",{children:e})]},e))]},t))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      {(['primitives', 'aliases'] as const).map(group => <Stack key={group} spacing={1}>
          <Typography variant='h2'>Icon {group}</Typography>
          {Object.entries(sizeTokens).filter(([name]) => group === 'primitives' ? /^icon-size-\\d+$/.test(name) : !/^icon-size-\\d+$/.test(name)).map(([name, value]) => <Box key={name} sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
                <CheckIcon data-testid={name} aria-hidden style={{
          width: value,
          height: value,
          flexShrink: 0
        }} />
                <span>{name}</span>
              </Box>)}
        </Stack>)}
    </Stack>
}`,...a.parameters?.docs?.source}}};const S=["Icons"];export{a as Icons,S as __namedExportsOrder,j as default};
//# sourceMappingURL=Sizes.stories-DBD9TtBs.js.map
