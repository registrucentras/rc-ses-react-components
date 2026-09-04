import{j as r,r as a}from"./iframe-BZfsYcrl.js";import{R as t}from"./SimpleCheckbox-BATK-NYx.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-B5x4dd71.js";import"./CheckUncheckedBoldIcon-DtkzKm_G.js";import"./loading-C_qmBkBY.js";import"./Skeleton-BIIi_0Xq.js";import"./memoTheme-BL7bpbHs.js";import"./styled-BO7G47yj.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CHTmBxyl.js";import"./SwitchBase-BCZjPvZB.js";import"./useFormControl-CcJOLgWp.js";import"./useSlot-o-fNBmTz.js";import"./mergeSlotProps-CBY1an78.js";import"./useReducedMotion-IetLgFVd.js";import"./useControlled-CWYA69dj.js";import"./ButtonBase-BepGfpEs.js";import"./useTimeout-uoJ0oiLL.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Dfp4SmtZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Ca6GGq1H.js";const O={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-ezbhHhBR.js.map
