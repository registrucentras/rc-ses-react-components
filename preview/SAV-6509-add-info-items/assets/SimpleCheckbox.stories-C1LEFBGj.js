import{j as r,r as a}from"./iframe-Ds4s8oTi.js";import{R as t}from"./SimpleCheckbox-CVgYLnJy.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-DYHIyJJ7.js";import"./CheckUncheckedBoldIcon-v9GGgl63.js";import"./loading-CezOJ-JQ.js";import"./Skeleton-7jPqOkxR.js";import"./memoTheme-B-FYPYde.js";import"./styled-CecYOk8h.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CC34FNv4.js";import"./SwitchBase-BcFJaKjE.js";import"./useFormControl-CkN9UsVK.js";import"./useSlot-v-ywOTNI.js";import"./mergeSlotProps-ipqOZJ4S.js";import"./useReducedMotion-CB3LzTEJ.js";import"./useControlled-CoA_4ah7.js";import"./ButtonBase-BtV5OV_v.js";import"./useTimeout-eICbmkm6.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BNLz6kPy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DSSCwgAZ.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-C1LEFBGj.js.map
