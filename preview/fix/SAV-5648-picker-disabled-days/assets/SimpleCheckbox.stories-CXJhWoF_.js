import{j as r,r as a}from"./iframe-HWDs9uQF.js";import{R as t}from"./SimpleCheckbox-DI9Yeh49.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CzR_ekcc.js";import"./CheckUncheckedBoldIcon-9RXCBRtG.js";import"./loading-DJkk75gp.js";import"./Skeleton-jsTgqmKu.js";import"./memoTheme-0w7JW093.js";import"./styled-DT5MOZ0R.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-GChZIXqm.js";import"./SwitchBase-DmSOrHD5.js";import"./useFormControl-CW-YXBuU.js";import"./useSlot-bkgOc2Wj.js";import"./mergeSlotProps-oAUXU-0N.js";import"./useReducedMotion-CBECBIS6.js";import"./useControlled-Bgcv4LsH.js";import"./ButtonBase-D0Csj8lI.js";import"./useTimeout-CX0D3V4f.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B4aLZDOG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CWMmaUK-.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Basic","Loading"];export{e as Basic,o as Loading,q as __namedExportsOrder,U as default};
//# sourceMappingURL=SimpleCheckbox.stories-CXJhWoF_.js.map
