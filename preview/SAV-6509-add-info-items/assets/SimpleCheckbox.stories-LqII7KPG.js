import{j as r,r as a}from"./iframe-BKE99rMd.js";import{R as t}from"./SimpleCheckbox-B3NOdVCv.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CB83Rq4f.js";import"./CheckUncheckedBoldIcon-BOJWWHsL.js";import"./loading-Bb4Gl0qq.js";import"./Skeleton-CtpWahwv.js";import"./memoTheme-CbGhTmIX.js";import"./styled-Dzzr0uTF.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-Dm6tMwr-.js";import"./SwitchBase-CjM2uqTZ.js";import"./useFormControl-CGZvnwq5.js";import"./useSlot-B4rnxt3W.js";import"./mergeSlotProps-B_4B5fKf.js";import"./useReducedMotion-Cys5vbHo.js";import"./useControlled-TiMBBr88.js";import"./ButtonBase-KJMN54Xg.js";import"./useTimeout-RXID5Ik9.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Gslqq66x.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-e4olSPUr.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-LqII7KPG.js.map
