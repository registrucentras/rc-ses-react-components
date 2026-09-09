import{j as r,r as a}from"./iframe-CENckQZf.js";import{R as t}from"./SimpleCheckbox-WriShi4k.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-D7U3ut1m.js";import"./CheckUncheckedBoldIcon-DWDZEca6.js";import"./loading-Db3pywPn.js";import"./Skeleton-8Msd68Ku.js";import"./memoTheme-DuGMjUk-.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-C-z6uGdS.js";import"./SwitchBase-fDcLSIbN.js";import"./useFormControl-5rj7pYY5.js";import"./useSlot-C1HhZ5nJ.js";import"./mergeSlotProps-DpW5LE0-.js";import"./useReducedMotion-DHyYPphk.js";import"./useControlled-DHaLmav_.js";import"./ButtonBase-brzhBtL2.js";import"./useTimeout-BgjeWFP0.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-lcJLfaPz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CFMjXAJg.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BBFMJYhB.js.map
