import{j as r,r as a}from"./iframe-BdIC5JIw.js";import{R as t}from"./SimpleCheckbox-CHwcaT0r.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CED4toUs.js";import"./CheckUncheckedBoldIcon-C_BIqBoN.js";import"./loading-D2Vhcc6k.js";import"./Skeleton-BLExkjx7.js";import"./memoTheme-DeIom0d1.js";import"./styled-BMLyWrvt.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CgAKD8gR.js";import"./SwitchBase-DyDPTNAf.js";import"./useFormControl-Dyf6p2B6.js";import"./useSlot-CqtniRLn.js";import"./mergeSlotProps-DYy-47iY.js";import"./useReducedMotion-D5fdMDJ-.js";import"./useControlled-DqWQHykN.js";import"./ButtonBase-CxuycdSQ.js";import"./useTimeout-CHjk5pg7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D6ARCQYX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-C__nQMsD.js";const O={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["Basic","Loading"];export{e as Basic,o as Loading,U as __namedExportsOrder,O as default};
//# sourceMappingURL=SimpleCheckbox.stories-fJr9R5-N.js.map
