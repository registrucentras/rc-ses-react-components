import{j as e,r as h}from"./iframe-BwPslW8W.js";import{R as i}from"./index-BTu3MbhF.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-C1s1FZbL.js";import"./styled-CUS1Zr32.js";import"./useFormControl-DsN8vKLm.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-DQz6AuOb.js";import"./mergeSlotProps-DVo5DjQd.js";import"./useReducedMotion-CldT2M52.js";import"./useControlled-CBx4JZ8z.js";import"./memoTheme-CSnFk_W4.js";import"./ButtonBase-BXZjo4di.js";import"./useTimeout-BvcfnN7Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-cxgvJEOf.js";import"./mergeSlotProps-DSf_Ew55.js";import"./FormControlLabel-Xmuj9Y7z.js";import"./Typography-D5j9az8Z.js";const A={title:"components/inputs/Switch",component:i,parameters:{layout:"centered"},tags:["autodocs"]};function n({initialChecked:c=!1,disabled:l=!1,label:d="Notifications"}){const[m,p]=h.useState(c);return e.jsx(i,{label:d,checked:m,disabled:l,onChange:(u,f)=>p(f)})}const r={args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(n,{initialChecked:!0})},a={args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(n,{})},o={name:"On, Disabled",args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(n,{initialChecked:!0,disabled:!0})},s={name:"Off, Disabled",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(n,{disabled:!0})},t={name:"Long label",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(n,{label:"Send me an email whenever there is a new comment on any of my open service requests"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'On, Disabled',
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked disabled />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Off, Disabled',
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo disabled />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const B=["On","Off","OnDisabled","OffDisabled","LongLabel"];export{t as LongLabel,a as Off,s as OffDisabled,r as On,o as OnDisabled,B as __namedExportsOrder,A as default};
//# sourceMappingURL=Switch.stories-EsTpSzIj.js.map
