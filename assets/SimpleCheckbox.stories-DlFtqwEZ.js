import{j as r,r as c}from"./iframe-Bb9hrTs5.js";import{R as t}from"./SimpleCheckbox-DksmS2-J.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-QPKT_oL9.js";import"./SwitchBase-DoYpRz1N.js";import"./memoTheme-p8JXWL0F.js";import"./useFormControl-CqBw46K8.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-9rNfCgwk.js";import"./mergeSlotProps-CNFXYXAR.js";import"./useReducedMotion-CPrdhxjO.js";import"./useControlled-C6e5Otch.js";import"./ButtonBase-Drj8X9vv.js";import"./useTimeout-Cf7H1spV.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DZBHmjZW.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BU0Jt61H.js";import"./Skeleton-DuBNYQHj.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Basic","Loading"];export{e as Basic,o as Loading,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=SimpleCheckbox.stories-DlFtqwEZ.js.map
