import{j as r,r as a}from"./iframe-BL6TfiF8.js";import{R as t}from"./SimpleCheckbox-DZoNSoVB.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Yugq3u55.js";import"./CheckUncheckedBoldIcon-BZveV95J.js";import"./loading-dEpuZVLN.js";import"./Skeleton-DAAn5MWQ.js";import"./memoTheme-ilhfXMHW.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DDwG0bqR.js";import"./SwitchBase-CjtkSQtt.js";import"./useFormControl-BhcJd2Ir.js";import"./useSlot-ChGHh0xv.js";import"./mergeSlotProps-CMBTMKO6.js";import"./useReducedMotion-BwTtuJ8i.js";import"./useControlled-C5ebXLLz.js";import"./ButtonBase-LL0hUdks.js";import"./useTimeout-Dl239K_i.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CDugASXJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-e8_M43Co.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-lJVxjDBI.js.map
