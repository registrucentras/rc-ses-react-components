import{j as r,r as c}from"./iframe-C_NnAH3O.js";import{R as t}from"./SimpleCheckbox-Bvs7sBa8.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-C9Z28NZn.js";import"./SwitchBase-FIBbLE9t.js";import"./memoTheme-zpaftJ9d.js";import"./useFormControl-6-OZtDPU.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-Dd1Twsf2.js";import"./mergeSlotProps-jCuRpWpY.js";import"./useReducedMotion-BGQeRJwt.js";import"./useControlled-CY73jyGe.js";import"./ButtonBase-E5hlw0IM.js";import"./useTimeout-CZmdQNFb.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DCcPQbEF.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CBqKJDlR.js";import"./Skeleton-Dvcl36Rr.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-D4MbEzd-.js.map
