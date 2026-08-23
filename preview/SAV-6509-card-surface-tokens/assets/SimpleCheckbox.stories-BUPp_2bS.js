import{j as r,r as a}from"./iframe-DEwrbrvD.js";import{R as t}from"./SimpleCheckbox-B6ysW8fk.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-T-N1udjM.js";import"./CheckUncheckedBoldIcon-CWS8N276.js";import"./loading-CBfusjIf.js";import"./Skeleton-CRiSK3oE.js";import"./memoTheme-DbaPA1El.js";import"./styled-BW4KM9Aa.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Checkbox-CFB2AKH6.js";import"./SwitchBase-Bc7ju_pE.js";import"./useFormControl-BTpXANzx.js";import"./useSlot-xM4xXIxO.js";import"./mergeSlotProps-BYLa1DQO.js";import"./useReducedMotion-Dah1E74K.js";import"./useControlled-DqjhZN7Y.js";import"./ButtonBase-EKSXrX1t.js";import"./useTimeout-4iFrUsfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B4ybSFrF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-B0z92gMv.js";const U={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function c(){const[n,s]=a.useState(!1);return r.jsx(t,{checked:n,onChange:i=>s(i.target.checked)})}function p(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(c,{})},o={render:()=>r.jsx(p,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Basic","Loading"];export{e as Basic,o as Loading,q as __namedExportsOrder,U as default};
//# sourceMappingURL=SimpleCheckbox.stories-BUPp_2bS.js.map
