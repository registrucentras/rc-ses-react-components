import{j as r,r as a}from"./iframe-D1J7piOu.js";import{R as t}from"./SimpleCheckbox-D3iUi6-z.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-BMFyxU8U.js";import"./CheckUncheckedBoldIcon-B7YbES9F.js";import"./loading-9JNCPbXu.js";import"./Skeleton-C9fda4J9.js";import"./memoTheme-2XFybQck.js";import"./styled-BmYYxeAn.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-ZxXz5PNF.js";import"./SwitchBase-D_-MLhSf.js";import"./useFormControl-DGO6Nyag.js";import"./useSlot-pngzeqLj.js";import"./mergeSlotProps-CxPYJr0J.js";import"./useReducedMotion-DIgncRyX.js";import"./useControlled-DO0lmKG2.js";import"./ButtonBase-D60Bsi_D.js";import"./useTimeout-4G0du0zC.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C1i8tHEp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-D4X4TSU-.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-hbOfdphq.js.map
