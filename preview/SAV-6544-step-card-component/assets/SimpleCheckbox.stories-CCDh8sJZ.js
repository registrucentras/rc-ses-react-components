import{j as r,r as a}from"./iframe-BZi_IIKT.js";import{R as t}from"./SimpleCheckbox-C5oUDlo8.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-M2KqxXH8.js";import"./CheckUncheckedBoldIcon-OifawrTN.js";import"./loading-QZxAy88a.js";import"./Skeleton-DLnlZARl.js";import"./memoTheme-BAlo7ZiK.js";import"./styled-Bj6thygr.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-Yb-nYUq2.js";import"./SwitchBase-BUFWpsbW.js";import"./useFormControl-CJY-BrYO.js";import"./useSlot-DAqoujkc.js";import"./mergeSlotProps-CGnkhCdb.js";import"./useReducedMotion-BStgDSTd.js";import"./useControlled-Cm7_xhBl.js";import"./ButtonBase-suQXw5PM.js";import"./useTimeout-hVRA184I.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Bm06yZPs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BYmKxSTk.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Basic","Loading"];export{e as Basic,o as Loading,q as __namedExportsOrder,U as default};
//# sourceMappingURL=SimpleCheckbox.stories-CCDh8sJZ.js.map
