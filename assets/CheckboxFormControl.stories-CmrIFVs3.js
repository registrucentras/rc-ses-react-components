import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{u as d}from"./index.esm-CYp9Cab2.js";import{R as p}from"./CheckboxFormControl-grd_RRU4.js";import{F as b}from"./FieldView-BeHDZRgt.js";import{F as u}from"./Fields-Bvx7BN71.js";import"./index-yBjzXJbu.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-Bc2khP1c.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckUncheckedBoldIcon-Bdh5zq_V.js";import"./SpinnerGapBoldIcon-DWHsf0Xa.js";import"./palette-DnsgEXz1.js";import"./FormControlLabel-BxHLDVOO.js";import"./createTheme-ClYpPn9r.js";import"./generateUtilityClasses-B2ID6taa.js";import"./styled-wPX_n2pi.js";import"./defaultTheme-Ca0qI0zY.js";import"./formControlState-Dq1zat_P.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./useFormControl-xtefzQVn.js";import"./Typography-KNMXKf19.js";import"./composeClasses-fLhin0tj.js";import"./Stack-C-eIlwtW.js";import"./useThemeProps-CSNa12iN.js";import"./getThemeProps-DrzoWQ6J.js";import"./useTheme-CmrYzTbF.js";import"./FormLabel-BPYdDIQH.js";import"./Checkbox-OyRjl7bw.js";import"./SwitchBase-CKbkoNgJ.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-Bz6qKCDR.js";import"./TransitionGroupContext-9aFOjLlw.js";import"./useIsFocusVisible-2h147_XD.js";import"./createSvgIcon-ikBOYRqt.js";const s=["outlined","flat"],Y={title:"components/form/CheckboxFormControl",component:p,argTypes:{variant:{options:s,mapping:s,table:{defaultValue:{summary:"outlined"}}},slotProps:{table:{disable:!0}},loading:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]};function g(r){const{variant:o,children:a}=r,{control:c,formState:{errors:n}}=d({mode:"all",defaultValues:{agreement:""}});return t.jsx(u,{children:t.jsx(b,{children:t.jsx(p,{id:"agreement",name:"agreement",control:c,errors:n==null?void 0:n.agreement,variant:o,children:a})})})}const C=r=>{const{variant:o,children:a}=r;return`
  import RcSesCheckboxFormControl from '@/components/form/inputs/CheckboxFormControl';

  const MyComponent = () => (

  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: '',
    },
  })

    <RcSesCheckboxFormControl
      id='agreement'
      name='agreement'
      control={control}
      errors={errors?.agreement}
      variant="${o}"
    >
     ${a}
    </RcSesCheckboxFormControl>
  );`},e={render:r=>t.jsx(g,{...r}),args:{label:"This is label",children:"This is body",variant:"outlined"},parameters:{docs:{source:{type:"dynamic",transform:(r,o)=>C(o.args)}}}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <CheckboxFormControlDemo {...args} />,
  args: {
    label: 'This is label',
    children: 'This is body',
    variant: 'outlined'
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, storyContext: StoryContext) => codeBlock(storyContext.args)
      }
    }
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const Z=["Main"];export{e as Main,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=CheckboxFormControl.stories-CmrIFVs3.js.map
