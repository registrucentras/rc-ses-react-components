import{j as r,r as a}from"./iframe-DmAJgr6L.js";import{R as t}from"./SimpleCheckbox-C52_TULj.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CYIrAlbY.js";import"./CheckUncheckedBoldIcon-HtsfNhTJ.js";import"./loading-1A-WJpCP.js";import"./Skeleton-BF5pD0KD.js";import"./memoTheme-DMo-wQMj.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-_84vOV5N.js";import"./SwitchBase-B1G7_5Ia.js";import"./useFormControl-lqmZh8ip.js";import"./useSlot-BnOHDpy3.js";import"./mergeSlotProps-BsHJzxNw.js";import"./useReducedMotion-D2uNiKbM.js";import"./useControlled-Bjr2D1NM.js";import"./ButtonBase-DzEAXjV-.js";import"./useTimeout-qjNguLme.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Yp_CxVPD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BHteHkvv.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-CChgVcrR.js.map
