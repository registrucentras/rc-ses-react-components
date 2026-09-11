import{j as r,r as a}from"./iframe-CIXJIlmg.js";import{R as t}from"./SimpleCheckbox-C_iRMKXw.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Vs_iwxsw.js";import"./CheckUncheckedBoldIcon-CuFm13VU.js";import"./loading-DS8Nscf_.js";import"./Skeleton-ER2HEyLs.js";import"./memoTheme-DbAlV__5.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CU_4cf-6.js";import"./SwitchBase-BBMVn05d.js";import"./useFormControl-CUIIRlOe.js";import"./useSlot-SIPNhSkR.js";import"./mergeSlotProps-BECWxVr6.js";import"./useReducedMotion-C2r5ARSO.js";import"./useControlled-CXmrIiYq.js";import"./ButtonBase-CWd8qBAx.js";import"./useTimeout-BZ2e3185.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CBC4dTeQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-C6g8GCJv.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-uZ4fqcLI.js.map
