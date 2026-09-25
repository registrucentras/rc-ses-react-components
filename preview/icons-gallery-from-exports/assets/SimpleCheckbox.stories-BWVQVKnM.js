import{j as r,r as c}from"./iframe-DLZCP6iO.js";import{R as t}from"./SimpleCheckbox-BOeCzbAX.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-CQa4RtzP.js";import"./SwitchBase-3oo1HKq-.js";import"./memoTheme-B4NoaLLX.js";import"./useFormControl-BllD4Xy6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-C54_Tkze.js";import"./mergeSlotProps-DAbh-wpk.js";import"./useReducedMotion-ChxmCBJX.js";import"./useControlled-bSwhgPZO.js";import"./ButtonBase-CS4BKQG-.js";import"./useTimeout-Bp0NEb_2.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CxF7t9SL.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DqvewLK1.js";import"./Skeleton-B_iaYJ68.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BWVQVKnM.js.map
