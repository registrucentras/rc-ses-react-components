import{j as r,r as c}from"./iframe-CWj8oZOZ.js";import{R as t}from"./SimpleCheckbox-DMmwjDV4.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-Cg9PhcLk.js";import"./Skeleton-BLL7J1Hl.js";import"./memoTheme-rzYRwBep.js";import"./utils-BL043Ngk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-BWM5-pPx.js";import"./SwitchBase-C3jmdmUd.js";import"./useFormControl-DFU56Ddn.js";import"./useSlot-CB-gizTQ.js";import"./mergeSlotProps-Bkc5NF6i.js";import"./useReducedMotion-CPcVPcQI.js";import"./useControlled-CBD9UJuw.js";import"./ButtonBase-DNQcAHDH.js";import"./useTimeout-BiQanTB9.js";import"./createSvgIcon-Bv-KOEm-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-B3s8xX8O.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-BYgbj6PC.js.map
