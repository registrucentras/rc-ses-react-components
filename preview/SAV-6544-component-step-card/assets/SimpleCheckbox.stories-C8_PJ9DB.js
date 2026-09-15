import{j as r,r as a}from"./iframe-53dMxhzt.js";import{R as t}from"./SimpleCheckbox-MCCVWq3a.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-I7hy71N8.js";import"./CheckUncheckedBoldIcon-De-GiB7P.js";import"./loading-DFZJ2qvr.js";import"./Skeleton-lfL1O8dX.js";import"./memoTheme-KH1_yQA8.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BHbE_rit.js";import"./SwitchBase-CHQtU4Qg.js";import"./useFormControl-Cvy5-x4f.js";import"./useSlot-CIJABV9b.js";import"./mergeSlotProps-BxLgALXr.js";import"./useReducedMotion-Drl8qeIC.js";import"./useControlled-Bb3jnFRn.js";import"./ButtonBase-BJC28pW6.js";import"./useTimeout-BSILN_yK.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B94Z1Oyz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-74V31LTd.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const O=["Basic","Loading"];export{e as Basic,o as Loading,O as __namedExportsOrder,F as default};
//# sourceMappingURL=SimpleCheckbox.stories-C8_PJ9DB.js.map
