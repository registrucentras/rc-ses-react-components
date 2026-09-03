import{j as r,r as a}from"./iframe-D8XfDVau.js";import{R as t}from"./SimpleCheckbox-Cc3kfwmd.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-D3R22-Ue.js";import"./CheckUncheckedBoldIcon-DunUAptU.js";import"./loading-_plRtlSn.js";import"./Skeleton-Cpl1Php4.js";import"./memoTheme-BWkKHYer.js";import"./styled-CAQoJkW_.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-B0q26flu.js";import"./SwitchBase-RJBFY_ZW.js";import"./useFormControl-C1T6Afn4.js";import"./useSlot-DScEVbLP.js";import"./mergeSlotProps-ClX-yLlC.js";import"./useReducedMotion-6iJMK1Zp.js";import"./useControlled-BV6X3azl.js";import"./ButtonBase-DxJjZtua.js";import"./useTimeout-D08Iq3s4.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DgpSHggq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DC2Fba3G.js";const O={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["Basic","Loading"];export{e as Basic,o as Loading,U as __namedExportsOrder,O as default};
//# sourceMappingURL=SimpleCheckbox.stories-ZT4KxyjD.js.map
