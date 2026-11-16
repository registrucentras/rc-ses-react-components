import{j as e,r as C}from"./iframe-C5f9Zc7Z.js";import{R as d}from"./index-DSpu6-Xy.js";import{S as g}from"./Stack-n0USQ4NM.js";import"./preload-helper-PPVm8Dsz.js";import"./Switch-BSZVkoFl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-XM6codKs.js";import"./useFormControl-Cxw3h7Uq.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./useControlled-B4Netmu2.js";import"./memoTheme-aFWhReI0.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./utils-BL043Ngk.js";import"./mergeSlotProps-CBY2sUhi.js";import"./FormControlLabel-4JJoPdRB.js";import"./Typography-Cu6X7zgN.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";const G={title:"Atoms/Switch",component:d,parameters:{layout:"centered"},tags:["autodocs"]};function r({initialChecked:m=!1,disabled:h=!1,label:u="Notifications"}){const[p,b]=C.useState(m);return e.jsx(d,{label:u,checked:p,disabled:h,onChange:(f,k)=>b(k)})}const o={args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(r,{initialChecked:!0})},a={args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(r,{})},s={name:"On, Disabled",args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(r,{initialChecked:!0,disabled:!0})},t={name:"Off, Disabled",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(r,{disabled:!0})},i={name:"Long label",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{label:"Send me an email whenever there is a new comment on any of my open service requests"})})},n={args:{label:"Notifications"},render:()=>e.jsxs(g,{spacing:2,children:[e.jsx(r,{label:"Unchecked switch"}),e.jsx(r,{label:"Checked switch",initialChecked:!0}),e.jsx(r,{label:"Disabled unchecked switch",disabled:!0}),e.jsx(r,{label:"Disabled checked switch",initialChecked:!0,disabled:!0})]})},c={...n,render:()=>e.jsx("div",{style:{"--rc-color-control-selected":"#008561","--rc-color-control-selected-hover":"#00664e"},children:e.jsx(r,{initialChecked:!0})})},l={args:{label:"Custom switch"},render:()=>e.jsx(d,{label:"Custom switch",defaultChecked:!0,sx:{"& .MuiSwitch-track":{backgroundColor:"#008561"},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:"#008561"}}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'On, Disabled',
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked disabled />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Off, Disabled',
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo disabled />
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Long label',
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <div style={{
    maxWidth: '16rem'
  }}>
      <ControlledDemo label='Send me an email whenever there is a new comment on any of my open service requests' />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications'
  },
  render: () => <Stack spacing={2}>
      <ControlledDemo label='Unchecked switch' />
      <ControlledDemo label='Checked switch' initialChecked />
      <ControlledDemo label='Disabled unchecked switch' disabled />
      <ControlledDemo label='Disabled checked switch' initialChecked disabled />
    </Stack>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...TokenBindings,
  render: () => <div style={{
    '--rc-color-control-selected': '#008561',
    '--rc-color-control-selected-hover': '#00664e'
  } as CSSProperties}>
      <ControlledDemo initialChecked />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom switch'
  },
  render: () => <RcSesSwitch label='Custom switch' defaultChecked sx={{
    '& .MuiSwitch-track': {
      backgroundColor: '#008561'
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#008561'
    }
  }} />
}`,...l.parameters?.docs?.source}}};const H=["On","Off","OnDisabled","OffDisabled","LongLabel","TokenBindings","TokenOverrides","ConsumerOverrides"];export{l as ConsumerOverrides,i as LongLabel,a as Off,t as OffDisabled,o as On,s as OnDisabled,n as TokenBindings,c as TokenOverrides,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Switch.stories-DH6PqeE4.js.map
