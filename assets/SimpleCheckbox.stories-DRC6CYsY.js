import{j as r,r as a}from"./iframe-CFOSKsKV.js";import{R as t}from"./SimpleCheckbox-BOAJI2N7.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CmU5WQYL.js";import"./CheckUncheckedBoldIcon-94ZMVRh7.js";import"./loading-Dov1qA2j.js";import"./Skeleton-ZA0lXtCU.js";import"./memoTheme-DLCVBTsn.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CVyxybu_.js";import"./SwitchBase-C8QHe2g5.js";import"./useFormControl-D9wiEKS7.js";import"./useSlot-CkEQy1t2.js";import"./mergeSlotProps-Dhqtg-Xf.js";import"./useReducedMotion-JJA_AOnj.js";import"./useControlled-NdbuKUB-.js";import"./ButtonBase-DitXGn9G.js";import"./useTimeout-2I4hfrP6.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-RdYeASNo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CmqHpiYB.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-DRC6CYsY.js.map
