import{j as r,r as a}from"./iframe-CzBnpCzZ.js";import{R as t}from"./SimpleCheckbox-NjdrDyul.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Rt52mu9X.js";import"./CheckUncheckedBoldIcon-BRN9hVEH.js";import"./loading-Cp64tndu.js";import"./Skeleton-Chz13wgl.js";import"./memoTheme-CbC9DnsE.js";import"./styled-E5ospQGM.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DygBN5aM.js";import"./SwitchBase-_VP3qnHu.js";import"./useFormControl-CeYZHFzr.js";import"./useSlot-CO3lY_ZD.js";import"./mergeSlotProps-CQAP196L.js";import"./useReducedMotion-mqmhIx3V.js";import"./useControlled-DFIulGaS.js";import"./ButtonBase-duWavqVn.js";import"./useTimeout-CaPM7nBf.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CrsfC__T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DYqK3Kw6.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BFiaL9nc.js.map
