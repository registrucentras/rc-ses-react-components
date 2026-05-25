import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-CqJgnuY1.js";import{R as t}from"./SimpleCheckbox-Dw_vhJfM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-Bc2khP1c.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckUncheckedBoldIcon-Bdh5zq_V.js";import"./loading-Drfo95IC.js";import"./Skeleton-6_jdm7cD.js";import"./createTheme-CE_F1kTP.js";import"./generateUtilityClasses-Bd2LNSfu.js";import"./styled-C6YoRvUv.js";import"./defaultTheme-Dm7VEHNB.js";import"./DefaultPropsProvider-5ViKjXxd.js";import"./composeClasses-fLhin0tj.js";import"./colorManipulator-CUiWywnD.js";import"./Checkbox-BiwQRExd.js";import"./SwitchBase-BcZeEKw7.js";import"./useFormControl-xtefzQVn.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-DX0QcqVB.js";import"./TransitionGroupContext-5O8tYVKT.js";import"./useIsFocusVisible-BAiRvXvd.js";import"./createSvgIcon-WGYP2OZw.js";const J={title:"components/inputs/SimpleCheckbox",component:t,parameters:{layout:"centered",docs:{description:{component:"Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead."}}},tags:["autodocs"]};function l(){const[p,d]=h.useState(!1);return r.jsx(t,{checked:p,onChange:u=>d(u.target.checked)})}function g(){return r.jsx(t,{checked:!0,loading:!0})}const e={render:()=>r.jsx(l,{})},o={render:()=>r.jsx(g,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton icon animation."},source:{type:"code",code:"<SimpleCheckbox checked={true} loading />"}}}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const K=["Basic","Loading"];export{e as Basic,o as Loading,K as __namedExportsOrder,J as default};
//# sourceMappingURL=SimpleCheckbox.stories-BalpZknj.js.map
