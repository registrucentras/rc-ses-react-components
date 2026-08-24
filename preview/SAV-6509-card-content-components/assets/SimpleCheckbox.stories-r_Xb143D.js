import{j as r,r as a}from"./iframe-ybkpfesg.js";import{R as t}from"./SimpleCheckbox-CGG3-nyu.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-B0UsPxkW.js";import"./CheckUncheckedBoldIcon-D7xj4bUZ.js";import"./loading-CDICnxPF.js";import"./Skeleton-BvGzCXHs.js";import"./memoTheme-ECsbPGKm.js";import"./styled-njvUt4qA.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BHaMVlp-.js";import"./SwitchBase-DQsVysEQ.js";import"./useFormControl-CEj0XMOe.js";import"./useSlot-BlVZbT1E.js";import"./mergeSlotProps-CiBTEtNE.js";import"./useReducedMotion-DIXOm1dN.js";import"./useControlled-DnLNWN0m.js";import"./ButtonBase-r2gcnXMY.js";import"./useTimeout-D8jYUdJi.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BLNt29BT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DBEiYoyq.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-r_Xb143D.js.map
