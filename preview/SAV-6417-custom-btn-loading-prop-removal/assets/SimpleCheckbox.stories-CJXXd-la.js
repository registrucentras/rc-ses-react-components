import{j as r,r as a}from"./iframe-CW-h-lR4.js";import{R as t}from"./SimpleCheckbox-CtXZN5_b.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Lmk7FtrI.js";import"./CheckUncheckedBoldIcon-DdoJqrQP.js";import"./loading-FOpUplCx.js";import"./Skeleton-DC_XUbI9.js";import"./memoTheme-BKfEdFx3.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-IgD5hlBU.js";import"./SwitchBase-cvXfgUSX.js";import"./useFormControl-9YGcBD0s.js";import"./useSlot-BO7i3VQ5.js";import"./mergeSlotProps-B-_5mrGf.js";import"./useReducedMotion-Dh1mS691.js";import"./useControlled-D2hBJt6o.js";import"./ButtonBase-BrKqmiWE.js";import"./useTimeout-Bq0Rqasq.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-2rdIogPM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DiEmVQqI.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CJXXd-la.js.map
