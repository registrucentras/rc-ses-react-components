import{j as a}from"./jsx-runtime-CUA6FXPC.js";import{u as p}from"./index.esm-DTUFWLrQ.js";import{R as c}from"./CheckboxFormControl-DlQbEvZU.js";import{F as u}from"./FieldView-BPNWESYs.js";import{F as b}from"./Fields-CoUdH7oK.js";import"./index-z7qk6wml.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SpinnerGapBoldIcon-BM5I0yo-.js";import"./IconBase.es-DjmddrNl.js";import"./palette-DW5JBtDV.js";import"./DefaultPropsProvider-C85juv10.js";import"./FormControlLabel-WGyVMdv7.js";import"./styled-B7PEox7f.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DANjLPU6.js";import"./Typography-EOcFdSjP.js";import"./Stack-CifLv3VS.js";import"./useThemeProps-CVqq43G5.js";import"./getThemeProps-CY3DWdQx.js";import"./FormLabel-PNDU5E6u.js";import"./SwitchBase-B8RmCvcx.js";import"./useControlled-B5uRKyCK.js";import"./ButtonBase-C8XVWg5R.js";import"./TransitionGroupContext-CFTfohW9.js";import"./useIsFocusVisible-CTcnAXki.js";import"./createSvgIcon-dN7utv6K.js";const s=["outlined","flat"],I={title:"components/form/CheckboxFormControl",component:c,argTypes:{variant:{options:s,mapping:s,table:{defaultValue:{summary:"outlined"}}},slotProps:{table:{disable:!0}},loading:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]},g=o=>{const{variant:r,children:t}=o,{control:d,formState:{errors:n}}=p({mode:"all",defaultValues:{agreement:""}});return a.jsx(b,{children:a.jsx(u,{children:a.jsx(c,{id:"agreement",name:"agreement",control:d,errors:n==null?void 0:n.agreement,variant:r,children:t})})})},F=o=>{const{variant:r,children:t}=o;return`
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
  );`},e=g.bind({});e.args={label:"This is label",children:"This is body",variant:"outlined"};e.parameters={docs:{source:{type:"dynamic",transform:(o,r)=>F(r.args)}}};var l,m,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const J=["Main"];export{e as Main,J as __namedExportsOrder,I as default};
//# sourceMappingURL=CheckboxFormControl.stories-BLfbV3Za.js.map
