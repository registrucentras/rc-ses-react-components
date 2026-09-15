import{j as r,r as a}from"./iframe-BkkYpBD0.js";import{R as t}from"./SimpleCheckbox-BxCiA0ZI.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-_vtAncSe.js";import"./CheckUncheckedBoldIcon-DedsgR3M.js";import"./loading-oNjkvr4n.js";import"./Skeleton-LGQDun6U.js";import"./memoTheme-C6MVMLFE.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DwSVAJga.js";import"./SwitchBase-DfXU4dHA.js";import"./useFormControl-DzMXs96Z.js";import"./useSlot-DxRDek2m.js";import"./mergeSlotProps-B3ergg2j.js";import"./useReducedMotion-G16E0poK.js";import"./useControlled-Bvnlc0ko.js";import"./ButtonBase-BPt2o7Yh.js";import"./useTimeout-C_O9fHa0.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-WKjnuApF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-4NyHAid-.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-ssYtBkkc.js.map
