import{j as r,r as c}from"./iframe-N0sjxTWe.js";import{R as t}from"./SimpleCheckbox-Bj9ZWz3R.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-BkF4UI6h.js";import"./SwitchBase-B-3elWuA.js";import"./memoTheme-LpOBnG9S.js";import"./useFormControl-BSyBOkCM.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-LtUwORjM.js";import"./mergeSlotProps-D-WjszGF.js";import"./useReducedMotion-CGoDzkj_.js";import"./useControlled-BILiV_6a.js";import"./ButtonBase-CPL9Lwnh.js";import"./useTimeout-_E1FaURO.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DLCnYxX8.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CW8dXC47.js";import"./Skeleton-CAQtUIfV.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CcukbJMG.js.map
