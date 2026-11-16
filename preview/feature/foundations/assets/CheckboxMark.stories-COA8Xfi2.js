import{R as t,j as e}from"./iframe-C5f9Zc7Z.js";import{S as i}from"./Stack-n0USQ4NM.js";import{T as m}from"./Typography-Cu6X7zgN.js";import{F as r}from"./FormControlLabel-4JJoPdRB.js";import{C as o}from"./Checkbox-DEdQpYR_.js";import{B as x}from"./Box-B61C4jPN.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useFormControl-Cxw3h7Uq.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./SwitchBase-XM6codKs.js";import"./useControlled-B4Netmu2.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./createSvgIcon-DJbAJPfa.js";import"./utils-BL043Ngk.js";import"./mergeSlotProps-CBY2sUhi.js";const p=["unchecked","checked","indeterminate"],_={title:"Atoms/CheckboxMark",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Decorative 24px Checkbox-mark. Add an accessible native input, label and interaction states in the consuming control. The mark itself is hidden from assistive technology."}}},argTypes:{type:{control:"select",options:p}}},c={args:{type:"unchecked",disabled:!1}},a={render:()=>e.jsx(i,{spacing:3,children:[!1,!0].map(l=>e.jsx(i,{direction:"row",spacing:4,children:p.map(d=>e.jsxs(i,{spacing:1,sx:{alignItems:"center"},children:[e.jsx(t,{type:d,disabled:l}),e.jsxs(m,{variant:"caption",children:[d,l?" / disabled":""]})]},d))},String(l)))})},s={render:()=>e.jsxs(x,{sx:{"--rc-color-control-selected":"#654321","--rc-color-control-border":"#654321","--rc-icon-size-control":"22px"},children:[e.jsx(t,{})," ",e.jsx(t,{type:"checked"})," ",e.jsx(t,{type:"indeterminate"})]})},n={render:()=>e.jsxs(i,{children:[e.jsx(r,{control:e.jsx(o,{}),label:"Checkbox"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Checked checkbox"}),e.jsx(r,{control:e.jsx(o,{indeterminate:!0}),label:"Mixed checkbox"}),e.jsx(r,{disabled:!0,control:e.jsx(o,{}),label:"Inherited disabled checkbox"}),e.jsx(r,{disabled:!0,control:e.jsx(o,{defaultChecked:!0}),label:"Inherited disabled checked checkbox"})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'unchecked',
    disabled: false
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      {[false, true].map(disabled => <Stack key={String(disabled)} direction='row' spacing={4}>
          {types.map(type => <Stack key={type} spacing={1} sx={{
        alignItems: 'center'
      }}>
              <RcSesCheckboxMark type={type} disabled={disabled} />
              <Typography variant='caption'>
                {type}
                {disabled ? ' / disabled' : ''}
              </Typography>
            </Stack>)}
        </Stack>)}
    </Stack>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    '--rc-color-control-selected': '#654321',
    '--rc-color-control-border': '#654321',
    '--rc-icon-size-control': '22px'
  }}>
      <RcSesCheckboxMark /> <RcSesCheckboxMark type='checked' />{' '}
      <RcSesCheckboxMark type='indeterminate' />
    </Box>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack>
      <FormControlLabel control={<Checkbox />} label='Checkbox' />
      <FormControlLabel control={<Checkbox defaultChecked />} label='Checked checkbox' />
      <FormControlLabel control={<Checkbox indeterminate />} label='Mixed checkbox' />
      <FormControlLabel disabled control={<Checkbox />} label='Inherited disabled checkbox' />
      <FormControlLabel disabled control={<Checkbox defaultChecked />} label='Inherited disabled checked checkbox' />
    </Stack>
}`,...n.parameters?.docs?.source}}};const D=["Main","AllStates","TokenOverrides","NativeControls"];export{a as AllStates,c as Main,n as NativeControls,s as TokenOverrides,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=CheckboxMark.stories-COA8Xfi2.js.map
