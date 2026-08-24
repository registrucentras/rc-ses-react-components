import{j as r,r as a}from"./iframe-CqM0kNtH.js";import{R as t}from"./SimpleCheckbox-CJ8w_wZv.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-BK5wGXmV.js";import"./CheckUncheckedBoldIcon-Bpx7AUeT.js";import"./loading-Bwa39VRU.js";import"./Skeleton-UvPmT2RP.js";import"./memoTheme-DZJbfodP.js";import"./styled-BYHcej8r.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-D0rf3e-R.js";import"./SwitchBase-D_O85AOp.js";import"./useFormControl-6VzVyVWv.js";import"./useSlot-CSTK_FJP.js";import"./mergeSlotProps-CI-s7Sgg.js";import"./useReducedMotion-DpvjNof6.js";import"./useControlled-tiMX0yVk.js";import"./ButtonBase-3qX6OyPT.js";import"./useTimeout-Cc8Sxz4z.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-6ZjW8ZLv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BH7asO9n.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-8FSZGFrt.js.map
