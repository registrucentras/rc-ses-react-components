import{j as r,r as a}from"./iframe-PQNPox6x.js";import{R as t}from"./SimpleCheckbox-DKmcSqNJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-C5ytMxzo.js";import"./CheckUncheckedBoldIcon-Dm03-G_l.js";import"./loading-C1y1k6Gp.js";import"./Skeleton-0WjNM51f.js";import"./memoTheme-CYeapeeR.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-kq0nEk9K.js";import"./SwitchBase-CiYkODFa.js";import"./useFormControl-BXXgHYom.js";import"./useSlot-CkhfrMvL.js";import"./mergeSlotProps-dLBz28oI.js";import"./useReducedMotion-B2zDJY0G.js";import"./useControlled-YXqHIotn.js";import"./ButtonBase-LcxrZym2.js";import"./useTimeout-A-wIdcEE.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DmISCbpy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-42MfWUz_.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-DTO94JWS.js.map
