import{j as r,r as a}from"./iframe-BxN2aOIa.js";import{R as t}from"./SimpleCheckbox-BPFV0kZG.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Bn2mdK1H.js";import"./CheckUncheckedBoldIcon-D52Cb9v4.js";import"./loading-DxROkr_5.js";import"./Skeleton-Cv1Z6t_X.js";import"./memoTheme-BVBNHufc.js";import"./styled-BsEOJ7Su.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CZ-30Eul.js";import"./SwitchBase-ChWxX65d.js";import"./useFormControl-DBSd2ajr.js";import"./useSlot-q86-9NE5.js";import"./mergeSlotProps-B4h1H-dp.js";import"./useReducedMotion-CrmomAaN.js";import"./useControlled-afzfsliS.js";import"./ButtonBase-Cth_t4CJ.js";import"./useTimeout-Dg4iDwNI.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-qqYVnU0S.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Easkxq16.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-yCGoeqUM.js.map
