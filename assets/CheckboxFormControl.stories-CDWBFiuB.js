import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{u as p}from"./index.esm-CYp9Cab2.js";import{R as c}from"./CheckboxFormControl-JYNifl1I.js";import{F as u}from"./FieldView-BeHDZRgt.js";import{F as b}from"./Fields-Bvx7BN71.js";import"./index-yBjzXJbu.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-RsaXnWop.js";import"./IconBase.es-CLqjCiWW.js";import"./SpinnerGapBoldIcon-DiWmYL3Z.js";import"./palette-DnsgEXz1.js";import"./FormControlLabel-BxHLDVOO.js";import"./createTheme-ClYpPn9r.js";import"./generateUtilityClasses-B2ID6taa.js";import"./styled-wPX_n2pi.js";import"./defaultTheme-Ca0qI0zY.js";import"./formControlState-Dq1zat_P.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./useFormControl-xtefzQVn.js";import"./Typography-KNMXKf19.js";import"./composeClasses-fLhin0tj.js";import"./Stack-C-eIlwtW.js";import"./useThemeProps-CSNa12iN.js";import"./getThemeProps-DrzoWQ6J.js";import"./useTheme-CmrYzTbF.js";import"./FormLabel-BPYdDIQH.js";import"./SwitchBase-CKbkoNgJ.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-Bz6qKCDR.js";import"./TransitionGroupContext-9aFOjLlw.js";import"./useIsFocusVisible-2h147_XD.js";import"./createSvgIcon-ikBOYRqt.js";const m=["outlined","flat"],W={title:"components/form/CheckboxFormControl",component:c,argTypes:{variant:{options:m,mapping:m,table:{defaultValue:{summary:"outlined"}}},slotProps:{table:{disable:!0}},loading:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]},g=o=>{const{variant:r,children:t}=o,{control:d,formState:{errors:n}}=p({mode:"all",defaultValues:{agreement:""}});return a.jsx(b,{children:a.jsx(u,{children:a.jsx(c,{id:"agreement",name:"agreement",control:d,errors:n==null?void 0:n.agreement,variant:r,children:t})})})},F=o=>{const{variant:r,children:t}=o;return`
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
      variant="${r}"
    >
     ${t}
    </RcSesCheckboxFormControl>
  );`},e=g.bind({});e.args={label:"This is label",children:"This is body",variant:"outlined"};e.parameters={docs:{source:{type:"dynamic",transform:(o,r)=>F(r.args)}}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    variant,
    children
  } = args;
  const {
    control,
    formState: {
      errors
    }
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: ''
    }
  });
  return <Fields>
      <FieldView>
        <RcSesCheckboxFormControl id='agreement' name='agreement' control={control} errors={errors?.agreement} variant={variant}>
          {children}
        </RcSesCheckboxFormControl>
      </FieldView>
    </Fields>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const X=["Main"];export{e as Main,X as __namedExportsOrder,W as default};
//# sourceMappingURL=CheckboxFormControl.stories-CDWBFiuB.js.map
