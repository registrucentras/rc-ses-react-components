import{j as r,r as a}from"./iframe-CjFGEJ81.js";import{R as t}from"./SimpleCheckbox-CDTZ9tDt.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CNrZbegH.js";import"./CheckUncheckedBoldIcon-BZ2nx3un.js";import"./loading-BDg0yXc5.js";import"./Skeleton-h3VZ4hZp.js";import"./memoTheme-DFx0ml1c.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-_t4_dqpi.js";import"./SwitchBase-CNCP_vuO.js";import"./useFormControl-CL2Yhkda.js";import"./useSlot-BwsQXOGo.js";import"./mergeSlotProps-OLCsfSrB.js";import"./useReducedMotion-CWb8_6d6.js";import"./useControlled-DDkb7FJx.js";import"./ButtonBase-BGPEe8VH.js";import"./useTimeout-CdIpb-RI.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C3Akv2PH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-OXYz8tCT.js";const F={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-Nk7wK4Ue.js.map
