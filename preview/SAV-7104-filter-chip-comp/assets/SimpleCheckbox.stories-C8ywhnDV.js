import{j as r,r as c}from"./iframe-CCeyCrqp.js";import{R as t}from"./SimpleCheckbox-vgx9hIgc.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-CiTqQ_pI.js";import"./SwitchBase-BG4FXA3D.js";import"./memoTheme-C0wvpSvw.js";import"./useFormControl-DafuNREV.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-MlE46m0F.js";import"./mergeSlotProps-DQxfus8Q.js";import"./useReducedMotion-iqnEsf7n.js";import"./useControlled-BXaRoU1G.js";import"./ButtonBase-Dusap62A.js";import"./useTimeout-CV9EbYuy.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-_19mzxF9.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BdZZ97o-.js";import"./Skeleton-ks6rvrpR.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-C8ywhnDV.js.map
