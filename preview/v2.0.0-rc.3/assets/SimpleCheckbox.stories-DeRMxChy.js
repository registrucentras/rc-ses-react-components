import{j as r,r as a}from"./iframe-DFr7-kBt.js";import{R as t}from"./SimpleCheckbox-Br7Gy29c.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CGSP2Q-9.js";import"./CheckUncheckedBoldIcon-_KHyvWqG.js";import"./loading-D0PWGsr7.js";import"./Skeleton-BtGpUaAQ.js";import"./memoTheme-CYLlGCL0.js";import"./styled-LpAaHYDj.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-h84CIugl.js";import"./SwitchBase-3CS9q0rN.js";import"./useFormControl-D0_7blQL.js";import"./useSlot-BZ9gey8t.js";import"./mergeSlotProps-CAyQVs75.js";import"./useReducedMotion-DEB_0ZrJ.js";import"./useControlled-BFWem-9L.js";import"./ButtonBase-BR8KIHUL.js";import"./useTimeout-C97wSRuf.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BTtv7Jcm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BT0sukae.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-DeRMxChy.js.map
