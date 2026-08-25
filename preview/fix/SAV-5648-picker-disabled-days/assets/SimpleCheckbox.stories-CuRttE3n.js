import{j as r,r as a}from"./iframe-DKIA2rOT.js";import{R as t}from"./SimpleCheckbox-BrCclM04.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-q6jX9gKv.js";import"./CheckUncheckedBoldIcon-DjqFejaK.js";import"./loading-DK85FdmD.js";import"./Skeleton-D9tkWrao.js";import"./memoTheme-CJhLlGp2.js";import"./styled-D2Kg73AK.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-iTXIN3mC.js";import"./SwitchBase-C-SL1r8J.js";import"./useFormControl-BD-PCcCp.js";import"./useSlot-UVVr_XRt.js";import"./mergeSlotProps-B276xKU6.js";import"./useReducedMotion-D3pzCHL1.js";import"./useControlled-BGOXL5Tu.js";import"./ButtonBase-BLZeRCIM.js";import"./useTimeout-FpvsUoOx.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-rtH60cjJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DopWV9uj.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CuRttE3n.js.map
