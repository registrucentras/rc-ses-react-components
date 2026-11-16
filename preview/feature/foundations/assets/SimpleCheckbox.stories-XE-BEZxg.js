import{j as e,i as m,k as h,t as p,r as b}from"./iframe-C5f9Zc7Z.js";import{R as o}from"./SimpleCheckbox-DCAbQAfY.js";import{S as s}from"./Stack-n0USQ4NM.js";import{F as r}from"./FormControlLabel-4JJoPdRB.js";import{F as x}from"./FormControl-CK27828S.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-CsIbTMlu.js";import"./Skeleton-DJGJzGuv.js";import"./memoTheme-aFWhReI0.js";import"./utils-BL043Ngk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DEdQpYR_.js";import"./SwitchBase-XM6codKs.js";import"./useFormControl-Cxw3h7Uq.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./useControlled-B4Netmu2.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./createSvgIcon-DJbAJPfa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CBY2sUhi.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./Typography-Cu6X7zgN.js";import"./isMuiElement-BSR4zhUB.js";const K={title:"Atoms/SimpleCheckbox",component:o,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function k(){const[l,i]=b.useState(!1);return e.jsx(o,{checked:l,onChange:d=>i(d.target.checked)})}function u(){return e.jsx(o,{checked:!0,loading:!0})}const n={render:()=>e.jsx(k,{})},t={render:()=>e.jsx(u,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}},a={render:()=>e.jsxs(s,{spacing:2,children:[e.jsx(r,{control:e.jsx(o,{}),label:"Unchecked checkbox"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Checked checkbox"}),e.jsx(r,{control:e.jsx(o,{indeterminate:!0}),label:"Indeterminate checkbox"}),e.jsx(r,{control:e.jsx(o,{disabled:!0}),label:"Disabled unchecked checkbox"}),e.jsx(r,{control:e.jsx(o,{disabled:!0,defaultChecked:!0}),label:"Disabled checked checkbox"}),e.jsx(r,{control:e.jsx(o,{disabled:!0,indeterminate:!0}),label:"Disabled indeterminate checkbox"}),e.jsx(x,{error:!0,children:e.jsx(r,{sx:{ml:0},control:e.jsx(o,{}),label:"Error checkbox"})}),e.jsx(r,{control:e.jsx(o,{loading:!0}),label:"Loading checkbox"})]}),parameters:{docs:{description:{story:"Shared Checkbox-mark uses a 24px frame and 20px shape. Hover and error halos belong to the consuming control, while selection and loading behavior are preserved."}}}},c={render:()=>e.jsxs(s,{spacing:2,children:[e.jsx(r,{label:"Custom checkbox styles",control:e.jsx(o,{defaultChecked:!0,sx:{"&.Mui-checked":{color:"#0a141e"},"&.Mui-focusVisible [data-rc-mark-shape]":{boxShadow:"none"}}})}),e.jsx(m,{theme:h(p,{palette:{secondary:{main:"#4d5863"}}}),children:e.jsx(r,{label:"Custom palette checkbox",control:e.jsx(o,{color:"secondary",defaultChecked:!0})})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Loading state - shows skeleton icon animation.'
      },
      source: {
        type: 'code',
        code: \`<SimpleCheckbox checked={true} loading />\`
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<SimpleCheckbox />} label='Unchecked checkbox' />
      <FormControlLabel control={<SimpleCheckbox defaultChecked />} label='Checked checkbox' />
      <FormControlLabel control={<SimpleCheckbox indeterminate />} label='Indeterminate checkbox' />
      <FormControlLabel control={<SimpleCheckbox disabled />} label='Disabled unchecked checkbox' />
      <FormControlLabel control={<SimpleCheckbox disabled defaultChecked />} label='Disabled checked checkbox' />
      <FormControlLabel control={<SimpleCheckbox disabled indeterminate />} label='Disabled indeterminate checkbox' />
      <FormControl error>
        <FormControlLabel sx={{
        ml: 0
      }} control={<SimpleCheckbox />} label='Error checkbox' />
      </FormControl>
      <FormControlLabel control={<SimpleCheckbox loading />} label='Loading checkbox' />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Shared Checkbox-mark uses a 24px frame and 20px shape. Hover and error halos belong to the consuming control, while selection and loading behavior are preserved.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <FormControlLabel label='Custom checkbox styles' control={<SimpleCheckbox defaultChecked sx={{
      '&.Mui-checked': {
        color: '#0a141e'
      },
      '&.Mui-focusVisible [data-rc-mark-shape]': {
        boxShadow: 'none'
      }
    }} />} />
      <ThemeProvider theme={createTheme(theme, {
      palette: {
        secondary: {
          main: '#4d5863'
        }
      }
    })}>
        <FormControlLabel label='Custom palette checkbox' control={<SimpleCheckbox color='secondary' defaultChecked />} />
      </ThemeProvider>
    </Stack>
}`,...c.parameters?.docs?.source}}};const N=["Basic","Loading","TokenBindings","TokenOverrides"];export{n as Basic,t as Loading,a as TokenBindings,c as TokenOverrides,N as __namedExportsOrder,K as default};
//# sourceMappingURL=SimpleCheckbox.stories-XE-BEZxg.js.map
