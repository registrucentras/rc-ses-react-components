import{j as r,r as a}from"./iframe-C4pznSxB.js";import{R as t}from"./SimpleCheckbox-DZFtXCHt.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CMm2ZTm_.js";import"./CheckUncheckedBoldIcon-g5GHEN_F.js";import"./loading-BOx49gK8.js";import"./Skeleton-DT2wtn05.js";import"./memoTheme-CT5MQfOE.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-D6tMhqw7.js";import"./SwitchBase-CEkFrZBN.js";import"./useFormControl-CR2FrYLE.js";import"./useSlot-DYZldupo.js";import"./mergeSlotProps-D_CTyZdL.js";import"./useReducedMotion-B7QXwOH9.js";import"./useControlled-BSVqjK6C.js";import"./ButtonBase-Bl4XtCLZ.js";import"./useTimeout-TLp9lcma.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-OKnq_7bx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CT3XZqqC.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CIQEJUZT.js.map
