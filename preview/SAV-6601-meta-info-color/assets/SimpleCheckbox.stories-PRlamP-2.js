import{j as r,r as a}from"./iframe-C--2Qp2X.js";import{R as t}from"./SimpleCheckbox-Ce8FC09e.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-D221v_PU.js";import"./CheckUncheckedBoldIcon-BnXCD9Gw.js";import"./loading-CIs-ksDW.js";import"./Skeleton-DXugO-p_.js";import"./memoTheme-CW9I2BsA.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-Bz0q7jzO.js";import"./SwitchBase-BH7X-fxU.js";import"./useFormControl-B8iYuwxM.js";import"./useSlot-49pSelQI.js";import"./mergeSlotProps-NJatU-kK.js";import"./useReducedMotion-tZYExsTl.js";import"./useControlled-DNtm-Nt1.js";import"./ButtonBase-C76MDgVV.js";import"./useTimeout-CHxIJTjf.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DNnr0kMq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-COhtAqW0.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-PRlamP-2.js.map
