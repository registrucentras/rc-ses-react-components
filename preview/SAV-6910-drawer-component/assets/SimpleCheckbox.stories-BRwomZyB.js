import{j as r,r as c}from"./iframe-CW1nC9EC.js";import{R as t}from"./SimpleCheckbox-BfpoMtuj.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-Do8v4QJc.js";import"./SwitchBase-Blw1k09G.js";import"./memoTheme-WC5a--Ga.js";import"./useFormControl-DMMzbbH2.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-BUhAOODe.js";import"./mergeSlotProps-DUGl7YHD.js";import"./useReducedMotion-B0llTQGe.js";import"./useControlled-DkLHsb0q.js";import"./ButtonBase-DgwO5xi1.js";import"./useTimeout-DGu56jBl.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C25dUdhG.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DZFMppoE.js";import"./Skeleton-C12XnmiQ.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BRwomZyB.js.map
