import{j as r,r as c}from"./iframe-D8onu3Il.js";import{R as t}from"./SimpleCheckbox-zGzGtDZA.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-CJ2B0C6l.js";import"./SwitchBase-U2aDUKup.js";import"./memoTheme-ByP6l3WP.js";import"./useFormControl-CWbhjlxL.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-0hqKP31s.js";import"./mergeSlotProps-CtJy0bkm.js";import"./useReducedMotion-S5WBUSCK.js";import"./useControlled-BkQrdjrD.js";import"./ButtonBase-l9Mv48rv.js";import"./useTimeout-Bu-Sqgn5.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DBuEwFKf.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-B_7rh42Q.js";import"./Skeleton-DbVm9xXF.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-DlSNzZpP.js.map
