import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-CqJgnuY1.js";import{R as t}from"./SimpleCheckbox-9hWAaCfr.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-Bc2khP1c.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckUncheckedBoldIcon-Bdh5zq_V.js";import"./loading-DmH1-y0X.js";import"./Skeleton-utglQR3P.js";import"./createTheme-D6RA70PE.js";import"./generateUtilityClasses-B7bTzFb3.js";import"./styled-Dkeuwysr.js";import"./defaultTheme-DwyOR__H.js";import"./DefaultPropsProvider-uYObnQd7.js";import"./composeClasses-fLhin0tj.js";import"./colorManipulator-BSQQ6ag_.js";import"./Checkbox-BqKt0-ER.js";import"./SwitchBase-CZ-5oC7x.js";import"./useFormControl-xtefzQVn.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-BNb0seNi.js";import"./useTimeout-DgQ6HlaJ.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./useIsFocusVisible-DPtOLna9.js";import"./createSvgIcon-DS9gVdWq.js";const K={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function l(){const[p,d]=h.useState(!1);return r.jsx(t,{checked:p,onChange:u=>d(u.target.checked)})}function g(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(l,{})},o={render:()=>r.jsx(g,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
//# sourceMappingURL=SimpleCheckbox.stories-D2sPPpzC.js.map
