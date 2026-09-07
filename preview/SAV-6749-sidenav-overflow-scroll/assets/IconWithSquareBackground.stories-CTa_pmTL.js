import{I as i,j as n}from"./iframe-BdIC5JIw.js";import{R as c}from"./index-BkYxWh-e.js";import{S as a}from"./Stack-CaaubwRr.js";import{T as e}from"./Typography-duKRdiS6.js";import"./preload-helper-PPVm8Dsz.js";import"./resolvePaletteColorPath-BKQ5FOCH.js";import"./styled-BMLyWrvt.js";import"./Box-CrHJNcO2.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useThemeProps-CceLCOeA.js";import"./getThemeProps-a7HTrIfw.js";import"./memoTheme-DeIom0d1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const j={title:"Atoms/IconWithSquareBackground",component:c,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:[40,44]},variant:{control:{type:"select"},options:["solid","soft","muted"]}}},r={args:{Icon:i,size:44,variant:"solid"}},p=[40,44],m=["solid","soft","muted"],t={parameters:{controls:{disable:!0}},render:()=>n.jsx(a,{spacing:3,children:p.map(s=>n.jsxs(a,{spacing:1,children:[n.jsxs(e,{variant:"caption",children:["size: ",s]}),n.jsx(a,{direction:"row",spacing:2,sx:{alignItems:"center"},children:m.map(o=>n.jsxs(a,{spacing:.5,sx:{alignItems:"center"},children:[n.jsx(c,{Icon:i,size:s,variant:o}),n.jsx(e,{variant:"caption",children:o})]},o))})]},s))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: InfoFillIcon,
    size: 44,
    variant: 'solid'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["Default","AllVariantsAndSizes"];export{t as AllVariantsAndSizes,r as Default,A as __namedExportsOrder,j as default};
//# sourceMappingURL=IconWithSquareBackground.stories-CTa_pmTL.js.map
