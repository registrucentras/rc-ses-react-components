import{j as r,r as a}from"./iframe-9i3zOe15.js";import{R as t}from"./SimpleCheckbox-C5yh70Fc.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-Hn4KAmJ_.js";import"./CheckUncheckedBoldIcon-BsZGoIfT.js";import"./loading-Cl-l0JkP.js";import"./Skeleton-djNrF37_.js";import"./memoTheme-CK40nyy-.js";import"./styled-H9qSqxDp.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-DyWiHuei.js";import"./SwitchBase-CYshSVlQ.js";import"./useFormControl-XkAcBFIu.js";import"./useSlot-BamECmBW.js";import"./mergeSlotProps-BunaTRiY.js";import"./useReducedMotion-hEJ8tpyY.js";import"./useControlled-D3TiPTPH.js";import"./ButtonBase-BG5MV2ud.js";import"./useTimeout-C1B6BPiE.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-3JPue9kG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BfzcVZsb.js";const O={title:"Atoms/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[s,i]=a.useState(!1);return r.jsx(t,{checked:s,onChange:n=>i(n.target.checked)})}function m(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(m,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["Basic","Loading"];export{e as Basic,o as Loading,U as __namedExportsOrder,O as default};
//# sourceMappingURL=SimpleCheckbox.stories-CGqFj7kk.js.map
