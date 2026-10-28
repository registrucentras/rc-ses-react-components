import{j as r,r as c}from"./iframe-DH4qN6RW.js";import{R as t}from"./SimpleCheckbox-Bd4IvNDW.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-BRktkOPe.js";import"./SwitchBase-6FsZPemy.js";import"./memoTheme-CK_PyRMI.js";import"./useFormControl-FhJJTlzs.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-NZAvEDkN.js";import"./mergeSlotProps-K5nwa9TY.js";import"./useReducedMotion-C91mrZ9N.js";import"./useControlled-B9VpZwp9.js";import"./ButtonBase-C-9qJJHs.js";import"./useTimeout-CBuPVYG_.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-dzckMoQm.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DzbugGjR.js";import"./Skeleton-46BpCump.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Basic","Loading"];export{e as Basic,o as Loading,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=SimpleCheckbox.stories-C848_cWd.js.map
