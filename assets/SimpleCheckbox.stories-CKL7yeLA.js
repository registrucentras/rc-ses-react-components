import{j as r,r as a}from"./iframe-8F-1qP3V.js";import{R as t}from"./SimpleCheckbox-DQMzUI5B.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-BZ6LTW18.js";import"./CheckUncheckedBoldIcon-Cn2Rxu0r.js";import"./loading-DtlTgR_z.js";import"./SwitchBase-KVAj_rvk.js";import"./memoTheme-CDzKC7uG.js";import"./useFormControl-D9R6R5nt.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-fsgtw8Qa.js";import"./mergeSlotProps-DgnSvjsl.js";import"./useReducedMotion-DyCRlWa8.js";import"./useControlled-BPpkgbmb.js";import"./ButtonBase-Cpbeu3kt.js";import"./useTimeout-C_JD2QJM.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Bz1xeszO.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Bzcc4-Cv.js";import"./Skeleton-DUNvSgJ-.js";const A={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,n]=a.useState(!1);return r.jsx(t,{checked:s,onChange:i=>n(i.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CKL7yeLA.js.map
