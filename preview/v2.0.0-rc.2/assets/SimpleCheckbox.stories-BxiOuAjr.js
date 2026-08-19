import{j as r,r as a}from"./iframe-CaAjgiDY.js";import{R as t}from"./SimpleCheckbox-BLgHxNHT.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CqB7Q3Zc.js";import"./CheckUncheckedBoldIcon-BrQ-PLLR.js";import"./loading-CCHC1agW.js";import"./Skeleton-COOGOSYK.js";import"./memoTheme-j16Ll7-O.js";import"./styled-iySC8Kfl.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-B229PM5d.js";import"./SwitchBase-DC2O08JA.js";import"./useFormControl-BBLO-kgY.js";import"./useSlot-KaxbMqBB.js";import"./mergeSlotProps-DG9sKMqj.js";import"./useReducedMotion-cdwx6IhJ.js";import"./useControlled-CgJahenF.js";import"./ButtonBase-DLvnTUYF.js";import"./useTimeout-C5WAOen6.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CzFQeY6W.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CazlRosO.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BxiOuAjr.js.map
