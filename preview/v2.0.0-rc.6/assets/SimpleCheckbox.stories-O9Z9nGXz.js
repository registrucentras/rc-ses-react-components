import{j as r,r as a}from"./iframe-CDc5tlXL.js";import{R as t}from"./SimpleCheckbox-DcEBpExl.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CRyFZxNP.js";import"./CheckUncheckedBoldIcon-ZeRRb6lN.js";import"./loading-BRPGoc0F.js";import"./Skeleton-aGEw2IpM.js";import"./memoTheme-DMsyr4pX.js";import"./styled-DCBzl_Uz.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DSCHM7E4.js";import"./SwitchBase-EVzSnvGR.js";import"./useFormControl-BX8gQj1D.js";import"./useSlot-Dt5M4lwq.js";import"./mergeSlotProps-BZhOP4mI.js";import"./useReducedMotion-C1TE5Xmo.js";import"./useControlled-CzYodwTZ.js";import"./ButtonBase-BQloCDHI.js";import"./useTimeout-2ekXw_1X.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-G59Oy1ku.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-B_jZXcDK.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-O9Z9nGXz.js.map
