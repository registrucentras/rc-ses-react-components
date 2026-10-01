import{j as r,r as c}from"./iframe-oOAmD4TE.js";import{R as t}from"./SimpleCheckbox-CGYY4pj9.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-Cc3GfEpP.js";import"./SwitchBase-DbFOGOZo.js";import"./memoTheme-C0p7kxQG.js";import"./useFormControl-BnXigP2V.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-BN0PjiqS.js";import"./mergeSlotProps-B6sCsr3A.js";import"./useReducedMotion-D241Nrf-.js";import"./useControlled-Cherjg2E.js";import"./ButtonBase-LWwyvxNZ.js";import"./useTimeout-rly75plW.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-HazpAT27.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Kvglrc6D.js";import"./Skeleton-CIhwxcWt.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-rViMwipk.js.map
