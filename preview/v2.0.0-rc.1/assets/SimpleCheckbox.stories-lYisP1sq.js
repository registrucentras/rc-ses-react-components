import{j as r,r as a}from"./iframe-D3fOdZ35.js";import{R as t}from"./SimpleCheckbox-HhnNcRcC.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Cy3iWECI.js";import"./CheckUncheckedBoldIcon-CNwNQDAc.js";import"./loading-DR9FKilg.js";import"./Skeleton-CxyOi9mn.js";import"./memoTheme-9gTyD0zP.js";import"./styled-DWg5Hs8k.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BBve-ZqC.js";import"./SwitchBase-ow-6Zrh8.js";import"./useFormControl-B9XjRwpC.js";import"./useSlot-CMS7T6Hr.js";import"./mergeSlotProps-CpPkqB12.js";import"./useReducedMotion-nB1n_tnM.js";import"./useControlled-BCCVHrgF.js";import"./ButtonBase-D2mBlO7C.js";import"./useTimeout-DqyKXmLo.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-2MkT5p1b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DBBwu1Rr.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-lYisP1sq.js.map
