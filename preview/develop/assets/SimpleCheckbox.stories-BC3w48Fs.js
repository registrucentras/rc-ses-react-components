import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-CqJgnuY1.js";import{R as t}from"./SimpleCheckbox-Cl2ZFa4Y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-CPdBJU94.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckUncheckedBoldIcon-f_XzfW1Z.js";import"./loading-Ib2IYczq.js";import"./Skeleton-YBmJTOND.js";import"./createTheme-cc7C8_Rz.js";import"./generateUtilityClasses-w1ShjUKg.js";import"./styled-CQgu8tRE.js";import"./defaultTheme-SlYxhCq1.js";import"./DefaultPropsProvider-DYP4WNeP.js";import"./composeClasses-fLhin0tj.js";import"./colorManipulator-C0jAUUq8.js";import"./Checkbox-hc8vPAdZ.js";import"./SwitchBase-DRxmbktx.js";import"./useFormControl-xtefzQVn.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-Cbvckr1-.js";import"./useTimeout-DgQ6HlaJ.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./useIsFocusVisible-DPtOLna9.js";import"./createSvgIcon-Cj1taIyO.js";const K={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function l(){const[p,d]=h.useState(!1);return r.jsx(t,{checked:p,onChange:u=>d(u.target.checked)})}function g(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(l,{})},o={render:()=>r.jsx(g,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,c,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Basic","Loading"];export{e as Basic,o as Loading,M as __namedExportsOrder,K as default};
//# sourceMappingURL=SimpleCheckbox.stories-BC3w48Fs.js.map
