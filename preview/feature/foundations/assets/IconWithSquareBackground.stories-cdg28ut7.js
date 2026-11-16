import{I as i,j as n}from"./iframe-C5f9Zc7Z.js";import{R as c}from"./index-De2CSdRT.js";import{S as a}from"./Stack-n0USQ4NM.js";import{T as o}from"./Typography-Cu6X7zgN.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B61C4jPN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const v={title:"Atoms/IconWithSquareBackground",component:c,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:[40,44]},variant:{control:{type:"select"},options:["solid","soft","muted"]}}},r={args:{Icon:i,size:44,variant:"solid"}},p=[40,44],m=["solid","soft","muted"],s={parameters:{controls:{disable:!0}},render:()=>n.jsx(a,{spacing:3,children:p.map(t=>n.jsxs(a,{spacing:1,children:[n.jsxs(o,{variant:"caption",children:["size: ",t]}),n.jsx(a,{direction:"row",spacing:2,sx:{alignItems:"center"},children:m.map(e=>n.jsxs(a,{spacing:.5,sx:{alignItems:"center"},children:[n.jsx(c,{Icon:i,size:t,variant:e}),n.jsx(o,{variant:"caption",children:e})]},e))})]},t))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: InfoFillIcon,
    size: 44,
    variant: 'solid'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={3}>
      {SIZES.map(size => <Stack key={size} spacing={1}>
          <Typography variant='caption'>size: {size}</Typography>
          <Stack direction='row' spacing={2} sx={{
        alignItems: 'center'
      }}>
            {VARIANTS.map(variant => <Stack key={variant} spacing={0.5} sx={{
          alignItems: 'center'
        }}>
                <RcSesIconWithSquareBackground Icon={InfoFillIcon} size={size} variant={variant} />
                <Typography variant='caption'>{variant}</Typography>
              </Stack>)}
          </Stack>
        </Stack>)}
    </Stack>
}`,...s.parameters?.docs?.source}}};const z=["Default","AllVariantsAndSizes"];export{s as AllVariantsAndSizes,r as Default,z as __namedExportsOrder,v as default};
//# sourceMappingURL=IconWithSquareBackground.stories-cdg28ut7.js.map
