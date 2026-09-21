import{j as r,r as a}from"./iframe-CK086RzA.js";import{R as t}from"./SimpleCheckbox-C972lFFc.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-ANldyONh.js";import"./CheckUncheckedBoldIcon-Co-QvISQ.js";import"./loading-B3yPgTwS.js";import"./Skeleton-B_JQD5Cn.js";import"./memoTheme-B9yv6Iln.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-Do7X5YEi.js";import"./SwitchBase-A_9mqwTW.js";import"./useFormControl-DjS3S_3v.js";import"./useSlot-FnP_z458.js";import"./mergeSlotProps-DTY1dVaV.js";import"./useReducedMotion-vAHoQU6O.js";import"./useControlled-Dlmbrjgj.js";import"./ButtonBase-BN7ybivh.js";import"./useTimeout-D-kiCzpT.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BKXxhAZ1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BqbmtPIX.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const O=["Basic","Loading"];export{e as Basic,o as Loading,O as __namedExportsOrder,F as default};
//# sourceMappingURL=SimpleCheckbox.stories-ItWguzQ9.js.map
