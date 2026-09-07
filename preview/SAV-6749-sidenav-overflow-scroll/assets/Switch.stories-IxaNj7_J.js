import{j as e,r as h}from"./iframe-BdIC5JIw.js";import{R as i}from"./index-B_taXgVH.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-DyDPTNAf.js";import"./styled-BMLyWrvt.js";import"./useFormControl-Dyf6p2B6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-CqtniRLn.js";import"./mergeSlotProps-DYy-47iY.js";import"./useReducedMotion-D5fdMDJ-.js";import"./useControlled-DqWQHykN.js";import"./memoTheme-DeIom0d1.js";import"./ButtonBase-CxuycdSQ.js";import"./useTimeout-CHjk5pg7.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-cxgvJEOf.js";import"./mergeSlotProps-C__nQMsD.js";import"./FormControlLabel-nOckpX7S.js";import"./Typography-duKRdiS6.js";const z={title:"Atoms/Switch",component:i,parameters:{layout:"centered"},tags:["autodocs"]};function n({initialChecked:c=!1,disabled:l=!1,label:d="Notifications"}){const[m,p]=h.useState(c);return e.jsx(i,{label:d,checked:m,disabled:l,onChange:(u,f)=>p(f)})}const r={args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(n,{initialChecked:!0})},a={args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(n,{})},o={name:"On, Disabled",args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(n,{initialChecked:!0,disabled:!0})},s={name:"Off, Disabled",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(n,{disabled:!0})},t={name:"Long label",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(n,{label:"Send me an email whenever there is a new comment on any of my open service requests"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const B=["On","Off","OnDisabled","OffDisabled","LongLabel"];export{t as LongLabel,a as Off,s as OffDisabled,r as On,o as OnDisabled,B as __namedExportsOrder,z as default};
//# sourceMappingURL=Switch.stories-IxaNj7_J.js.map
