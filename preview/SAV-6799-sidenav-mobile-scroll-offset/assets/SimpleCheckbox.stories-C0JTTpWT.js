import{j as r,r as a}from"./iframe-Dmy5OsZp.js";import{R as t}from"./SimpleCheckbox-DWxjaCq-.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-a59IRw5C.js";import"./CheckUncheckedBoldIcon-Dvrguv-5.js";import"./loading-CQnxUHws.js";import"./Skeleton-afILwxD5.js";import"./memoTheme-DmCaGGeP.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BNQBRGyq.js";import"./SwitchBase-qC56zmEr.js";import"./useFormControl-BWWyBiez.js";import"./useSlot-Bg8xemmP.js";import"./mergeSlotProps-CXnRZAlP.js";import"./useReducedMotion-BELgimr9.js";import"./useControlled-QqQwDceE.js";import"./ButtonBase-DySzV9CC.js";import"./useTimeout-CGhjfAMx.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-4cHXy5Ra.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BqKLZfY-.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-C0JTTpWT.js.map
