import{j as r,r as c}from"./iframe-DB1EF-x_.js";import{R as t}from"./SimpleCheckbox-CZx4hQ7x.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-CWtJfum3.js";import"./SwitchBase-Bq3OTH_b.js";import"./memoTheme-VhH0Ke8H.js";import"./useFormControl-CWEpkjEg.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-CdVtEC6U.js";import"./mergeSlotProps-D1VQHPIF.js";import"./useReducedMotion-C4RkVMNI.js";import"./useControlled-D8_om1HX.js";import"./ButtonBase-Bt3PjvxV.js";import"./useTimeout-Bp9Z3NaC.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D74Ga_RM.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DYFVJgHy.js";import"./Skeleton-Dq2XRKNJ.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Basic","Loading"];export{e as Basic,o as Loading,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=SimpleCheckbox.stories-DrX_C0k_.js.map
