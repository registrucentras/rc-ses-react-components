import{j as r,r as c}from"./iframe-Cjp_IX4-.js";import{R as t}from"./SimpleCheckbox-2nsp_7vY.js";import"./preload-helper-PPVm8Dsz.js";import"./loading-DOS3m3bX.js";import"./SwitchBase-Bv4EITrX.js";import"./memoTheme-D15reA2A.js";import"./useFormControl-MvUPBN-H.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-C7hxQ6x9.js";import"./mergeSlotProps-2lSdLbI8.js";import"./useReducedMotion-DKfXsk34.js";import"./useControlled-Cm386vix.js";import"./ButtonBase-whkrnnr7.js";import"./useTimeout-BYcu_ljG.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CcJh0wP_.js";import"./utils-BL043Ngk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Cds2ts4z.js";import"./Skeleton-DCpRJRe6.js";const _={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function i(){const[s,n]=c.useState(!1);return r.jsx(t,{checked:s,onChange:a=>n(a.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(i,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-B-s4tICB.js.map
