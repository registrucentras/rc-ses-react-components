import{j as r,r as a}from"./iframe-C13r2uq4.js";import{R as t}from"./SimpleCheckbox-CGzw43gz.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-SpofK7X2.js";import"./CheckUncheckedBoldIcon-Bgdr00k7.js";import"./loading-C6Z6Hkgd.js";import"./Skeleton-D6IU1ckI.js";import"./memoTheme-BL9_zouD.js";import"./styled-C5Cpl9Hg.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-tExZ7Jgy.js";import"./SwitchBase-DsqhgzbR.js";import"./useFormControl-53eJHXvK.js";import"./useSlot-D1DO7XZG.js";import"./mergeSlotProps-Cetg_dIF.js";import"./useReducedMotion-CPJAJ76I.js";import"./useControlled-UlJJ76QZ.js";import"./ButtonBase-BITqhGut.js";import"./useTimeout-BAzONqqq.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DQ8HIZ8H.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-k7QGyTb1.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-I47_8gVb.js.map
