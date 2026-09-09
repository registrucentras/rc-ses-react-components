import{j as r,r as a}from"./iframe-Ooowi1hp.js";import{R as t}from"./SimpleCheckbox-B7AueSvK.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-RsF_5fUU.js";import"./CheckUncheckedBoldIcon-Sid49vvw.js";import"./loading--YTTGnmo.js";import"./Skeleton-CKsxKotz.js";import"./memoTheme-BMYD4lBk.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CCW46edo.js";import"./SwitchBase-0c7mOWAk.js";import"./useFormControl-BOZS31Sr.js";import"./useSlot-nE-oSZ0r.js";import"./mergeSlotProps-C0aPw3Mi.js";import"./useReducedMotion-TJp5-EWY.js";import"./useControlled-ChFMn5qC.js";import"./ButtonBase-kD0o8bKc.js";import"./useTimeout-B368JUcF.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B7qz8k6l.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BGSWIg_d.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CUuCLo_7.js.map
