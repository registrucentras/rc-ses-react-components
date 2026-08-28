import{j as r,r as a}from"./iframe-BZ0rEFpA.js";import{R as t}from"./SimpleCheckbox-CFOvz68U.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-n1MWnYGQ.js";import"./CheckUncheckedBoldIcon-DMWXRHdz.js";import"./loading-WOnlhCma.js";import"./Skeleton-BFvVj0h1.js";import"./memoTheme-BcRt8z4c.js";import"./styled-D09lcIxe.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BiEEbxVV.js";import"./SwitchBase-Cc2dN4A3.js";import"./useFormControl-2AG98fjX.js";import"./useSlot-CCYGnOby.js";import"./mergeSlotProps-DgdDDrzk.js";import"./useReducedMotion-B35PtJBu.js";import"./useControlled-Cfcz5xOQ.js";import"./ButtonBase-BG6CzAt0.js";import"./useTimeout-DgTJde3A.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DYL2AorN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CHlsb9Dt.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CRV5WPq8.js.map
