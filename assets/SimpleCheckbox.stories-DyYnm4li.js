import{j as r,r as c}from"./iframe-D0jLDCyy.js";import{R as t}from"./SimpleCheckbox-C_wjjY_s.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-BUeIp-hR.js";import"./SwitchBase-CO-u71C7.js";import"./memoTheme-oRxAc6ym.js";import"./useFormControl-C6MKAmSx.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-C-6CIQUZ.js";import"./mergeSlotProps-CHZ8RNr1.js";import"./useReducedMotion-C3SGip4Q.js";import"./useControlled-BAEmdUmm.js";import"./ButtonBase-6ciF6z-q.js";import"./useTimeout-CDcRADDE.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DwALGO4p.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-WohUH2mN.js";import"./Skeleton-EdNw0h4m.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-DyYnm4li.js.map
