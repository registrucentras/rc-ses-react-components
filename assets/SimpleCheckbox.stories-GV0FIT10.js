import{j as r,r as a}from"./iframe-CzYWeAAM.js";import{R as t}from"./SimpleCheckbox-hUB3ldsZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-9UvpGvSK.js";import"./CheckUncheckedBoldIcon-BlvOFjTF.js";import"./loading-c7ndaVu5.js";import"./Skeleton-B7W9ihh2.js";import"./memoTheme-B8PBHXaB.js";import"./styled-o9dTP5_L.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-aICWSAwc.js";import"./SwitchBase-CkiAFwS2.js";import"./useFormControl-1-2Ejt4A.js";import"./useSlot-DnlNrRlP.js";import"./mergeSlotProps-BZ3kvavi.js";import"./useReducedMotion-CkBLeDCZ.js";import"./useControlled-6NanGQiB.js";import"./ButtonBase-C7ZLRxu4.js";import"./useTimeout-B5xTyLR2.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CZozAuyK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-yOchpKHl.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-GV0FIT10.js.map
