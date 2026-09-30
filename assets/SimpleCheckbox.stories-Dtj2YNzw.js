import{j as r,r as c}from"./iframe-CxFnmTa9.js";import{R as t}from"./SimpleCheckbox-BZ1eyfBx.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-isRHaIAx.js";import"./SwitchBase-DWeYNoGB.js";import"./memoTheme-DxnCLtx9.js";import"./useFormControl-D4u3mAUS.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-DxKbsYp1.js";import"./mergeSlotProps-Cfhql7K9.js";import"./useReducedMotion-CMqbDeni.js";import"./useControlled-DAGhwAee.js";import"./ButtonBase-DHRWo2vN.js";import"./useTimeout-DI70m57E.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BqRQESq8.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-zcwNtBGR.js";import"./Skeleton-JgUA_3N7.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-Dtj2YNzw.js.map
