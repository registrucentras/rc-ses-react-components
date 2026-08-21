import{j as r,r as a}from"./iframe-B0a5cRrA.js";import{R as t}from"./SimpleCheckbox-Dn6DaIHK.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-DMyLKpnb.js";import"./CheckUncheckedBoldIcon-CP_7OD9z.js";import"./loading-V9otDmj6.js";import"./Skeleton-rlvO7HKt.js";import"./memoTheme-BpVJj_XA.js";import"./styled-BO4zBib_.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-ChYbgt5T.js";import"./SwitchBase-CQM5_MWC.js";import"./useFormControl-CTNcloRQ.js";import"./useSlot-BkBPfirf.js";import"./mergeSlotProps-c0rKe2EB.js";import"./useReducedMotion-BNjk1fMW.js";import"./useControlled-a1jt0lBR.js";import"./ButtonBase-MIh0Lih_.js";import"./useTimeout-CnHrVmCV.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-7c7HfPSk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DMHtMOwF.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-vjqiQk04.js.map
