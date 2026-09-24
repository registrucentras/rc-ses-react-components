import{j as r,r as a}from"./iframe-BWS6zQMz.js";import{R as t}from"./SimpleCheckbox-CfjPsQq4.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CGmlt1SG.js";import"./CheckUncheckedBoldIcon-D82FvUQA.js";import"./loading-D9iMnaDm.js";import"./Skeleton-BqppVlt3.js";import"./memoTheme-eAANWYbH.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CnCx-KcX.js";import"./SwitchBase-CYibxRRJ.js";import"./useFormControl-HzJUR3pm.js";import"./useSlot-Bkup3aP4.js";import"./mergeSlotProps-_45-cUn6.js";import"./useReducedMotion-CfPpIXVN.js";import"./useControlled-CxgWzzXT.js";import"./ButtonBase-BewuQVTu.js";import"./useTimeout-BZcpWzuj.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CMhxM9eb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-zwXdcgyY.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-4p5HPx2U.js.map
