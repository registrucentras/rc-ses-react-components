import{j as r,r as c}from"./iframe-DIOS2Xs-.js";import{R as t}from"./SimpleCheckbox-BAXQaYvK.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-Duggx8Yv.js";import"./SwitchBase-RpK2ND7D.js";import"./memoTheme-cL0Lxgrt.js";import"./useFormControl-DokglSUh.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-DUQLMGYY.js";import"./mergeSlotProps-CBo5lHvY.js";import"./useReducedMotion-CyR_aof-.js";import"./useControlled-D2yXpyaz.js";import"./ButtonBase-D5J5_y1K.js";import"./useTimeout-CbcTbdO9.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CtJXxj_L.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BazCmfnz.js";import"./Skeleton-3LuUlmu-.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-ab9NdYxQ.js.map
