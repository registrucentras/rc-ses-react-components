import{h as c,j as e}from"./iframe-C5f9Zc7Z.js";import{S as d}from"./Stack-n0USQ4NM.js";import{T as x}from"./Typography-Cu6X7zgN.js";import{F as u}from"./FormControl-CK27828S.js";import{R as i}from"./RadioGroup-XDu30Uai.js";import{F as r}from"./FormControlLabel-4JJoPdRB.js";import{R as o}from"./Radio-DCSA934t.js";import{B as R}from"./Box-B61C4jPN.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useFormControl-Cxw3h7Uq.js";import"./isMuiElement-BSR4zhUB.js";import"./useControlled-B4Netmu2.js";import"./useReducedMotion-BHCwGahe.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./SwitchBase-XM6codKs.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./createSvgIcon-DJbAJPfa.js";import"./utils-BL043Ngk.js";import"./createChainedFunction-BO_9K8Jh.js";const b=["unselected","selected"],_={title:"Atoms/RadioMark",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Independent decorative 24px Radio-mark. The consuming radio supplies input semantics, labeling, hover, focus and error states. Radio-mark does not depend on Checkbox-mark."}}},argTypes:{type:{control:"select",options:b}}},t={args:{type:"unselected",disabled:!1}},s={render:()=>e.jsx(d,{spacing:3,children:[!1,!0].map(p=>e.jsx(d,{direction:"row",spacing:4,children:b.map(m=>e.jsxs(d,{spacing:1,sx:{alignItems:"center"},children:[e.jsx(c,{type:m,disabled:p}),e.jsxs(x,{variant:"caption",children:[m,p?" / disabled":""]})]},m))},String(p)))})},l={render:()=>e.jsxs(R,{sx:{"--rc-color-control-selected":"#654321","--rc-color-control-border":"#654321","--rc-icon-size-control":"22px"},children:[e.jsx(c,{})," ",e.jsx(c,{type:"selected"})]})},n={render:()=>e.jsxs(i,{defaultValue:"first","aria-label":"Shared radio marks",children:[e.jsx(r,{control:e.jsx(o,{}),value:"first",label:"First radio"}),e.jsx(r,{control:e.jsx(o,{}),value:"second",label:"Second radio"}),e.jsx(r,{disabled:!0,control:e.jsx(o,{}),value:"disabled",label:"Disabled radio"})]})},a={tags:["no-snapshot"],render:()=>e.jsxs(d,{spacing:2,children:[e.jsx(u,{children:e.jsxs(i,{defaultValue:"selected","aria-label":"Radio interactions",children:[e.jsx(r,{control:e.jsx(o,{}),value:"selected",label:"Selected radio"}),e.jsx(r,{control:e.jsx(o,{}),value:"unselected",label:"Unselected radio"})]})}),e.jsx(u,{error:!0,children:e.jsxs(i,{defaultValue:"selected","aria-label":"Radio error interactions","aria-invalid":"true",children:[e.jsx(r,{control:e.jsx(o,{}),value:"selected",label:"Selected error radio"}),e.jsx(r,{control:e.jsx(o,{}),value:"unselected",label:"Unselected error radio"})]})}),e.jsx(u,{disabled:!0,children:e.jsxs(i,{defaultValue:"selected","aria-label":"Disabled radio interactions",children:[e.jsx(r,{control:e.jsx(o,{}),value:"selected",label:"Selected disabled radio"}),e.jsx(r,{control:e.jsx(o,{}),value:"unselected",label:"Unselected disabled radio"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'unselected',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      {[false, true].map(disabled => <Stack key={String(disabled)} direction='row' spacing={4}>
          {types.map(type => <Stack key={type} spacing={1} sx={{
        alignItems: 'center'
      }}>
              <RcSesRadioMark type={type} disabled={disabled} />
              <Typography variant='caption'>
                {type}
                {disabled ? ' / disabled' : ''}
              </Typography>
            </Stack>)}
        </Stack>)}
    </Stack>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    '--rc-color-control-selected': '#654321',
    '--rc-color-control-border': '#654321',
    '--rc-icon-size-control': '22px'
  }}>
      <RcSesRadioMark /> <RcSesRadioMark type='selected' />
    </Box>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue='first' aria-label='Shared radio marks'>
      <FormControlLabel control={<Radio />} value='first' label='First radio' />
      <FormControlLabel control={<Radio />} value='second' label='Second radio' />
      <FormControlLabel disabled control={<Radio />} value='disabled' label='Disabled radio' />
    </RadioGroup>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  render: () => <Stack spacing={2}>
      <FormControl>
        <RadioGroup defaultValue='selected' aria-label='Radio interactions'>
          <FormControlLabel control={<Radio />} value='selected' label='Selected radio' />
          <FormControlLabel control={<Radio />} value='unselected' label='Unselected radio' />
        </RadioGroup>
      </FormControl>
      <FormControl error>
        <RadioGroup defaultValue='selected' aria-label='Radio error interactions' aria-invalid='true'>
          <FormControlLabel control={<Radio />} value='selected' label='Selected error radio' />
          <FormControlLabel control={<Radio />} value='unselected' label='Unselected error radio' />
        </RadioGroup>
      </FormControl>
      <FormControl disabled>
        <RadioGroup defaultValue='selected' aria-label='Disabled radio interactions'>
          <FormControlLabel control={<Radio />} value='selected' label='Selected disabled radio' />
          <FormControlLabel control={<Radio />} value='unselected' label='Unselected disabled radio' />
        </RadioGroup>
      </FormControl>
    </Stack>
}`,...a.parameters?.docs?.source},description:{story:"Interactive fixture: keyboard/pointer tests capture the resulting states.",...a.parameters?.docs?.description}}};const q=["Main","AllStates","TokenOverrides","NativeControls","KeyboardAndPointer"];export{s as AllStates,a as KeyboardAndPointer,t as Main,n as NativeControls,l as TokenOverrides,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=RadioMark.stories-DunQe_gj.js.map
