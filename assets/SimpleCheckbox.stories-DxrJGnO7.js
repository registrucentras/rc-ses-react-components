import{j as r,r as a}from"./iframe-CvdsVNq9.js";import{R as t}from"./SimpleCheckbox-oHf-nS2D.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-QuNVmwyv.js";import"./CheckUncheckedBoldIcon-DLmIrnJ6.js";import"./loading-Dzt0QAbX.js";import"./SwitchBase-B2jy_9WB.js";import"./memoTheme--kAmOKvp.js";import"./useFormControl-DKm5lwMz.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-DCxkw9sd.js";import"./mergeSlotProps-D8F8XP8I.js";import"./useReducedMotion-Dm_7FdVW.js";import"./useControlled-BGmp-9YK.js";import"./ButtonBase-DzZUG8VX.js";import"./useTimeout-Bkz083f3.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DVqaudWb.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-0yAcVhzw.js";import"./Skeleton-CI1-Nmif.js";const A={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,n]=a.useState(!1);return r.jsx(t,{checked:s,onChange:i=>n(i.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const F=["Basic","Loading"];export{e as Basic,o as Loading,F as __namedExportsOrder,A as default};
//# sourceMappingURL=SimpleCheckbox.stories-DxrJGnO7.js.map
