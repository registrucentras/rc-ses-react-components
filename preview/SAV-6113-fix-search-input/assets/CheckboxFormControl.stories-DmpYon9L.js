import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{u as C}from"./index.esm-CYp9Cab2.js";import{R as d,a as c}from"./CheckboxFormControl-CXqh_umV.js";import{R as s}from"./SimpleCheckbox-C2M37wVu.js";import{F as b}from"./FieldView-BeHDZRgt.js";import{F as k}from"./Fields-Bvx7BN71.js";import"./index-yBjzXJbu.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CheckBoldIcon-Bc2khP1c.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckUncheckedBoldIcon-Bdh5zq_V.js";import"./FormControlLabel-BxHLDVOO.js";import"./createTheme-ClYpPn9r.js";import"./generateUtilityClasses-B2ID6taa.js";import"./styled-wPX_n2pi.js";import"./defaultTheme-Ca0qI0zY.js";import"./formControlState-Dq1zat_P.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./useFormControl-xtefzQVn.js";import"./Typography-KNMXKf19.js";import"./composeClasses-fLhin0tj.js";import"./Stack-C-eIlwtW.js";import"./useThemeProps-CSNa12iN.js";import"./getThemeProps-DrzoWQ6J.js";import"./useTheme-CmrYzTbF.js";import"./Skeleton-pBqVVZo2.js";import"./colorManipulator-CxtuIvtX.js";import"./loading-XNqxZpFS.js";import"./palette-ClGEQNft.js";import"./FormLabel-BPYdDIQH.js";import"./Checkbox-Cdrdgau5.js";import"./SwitchBase-J7lIQ2FW.js";import"./useControlled-DKQkVSHg.js";import"./ButtonBase-D81Lsw8O.js";import"./useTimeout-DgQ6HlaJ.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./useIsFocusVisible-DPtOLna9.js";import"./createSvgIcon-ikBOYRqt.js";const f=["outlined","flat"],ye={title:"components/form/CheckboxFormControl",component:d,argTypes:{variant:{options:f,mapping:f,table:{defaultValue:{summary:"outlined"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}}},children:{control:"text",table:{defaultValue:{summary:"This is body"}}},slotProps:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]};function T(t){const{variant:r,children:o,loading:i}=t,{control:l,formState:{errors:a}}=C({mode:"all",defaultValues:{agreement:""}});return e.jsx(k,{children:e.jsx(b,{children:e.jsx(d,{id:"agreement",name:"agreement",control:l,errors:a==null?void 0:a.agreement,variant:r,loading:i,children:o})})})}const M=t=>{const{variant:r,children:o}=t;return`
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
     ${o}
    </RcSesCheckboxFormControl>
  );`},h={render:t=>e.jsx(T,{...t}),args:{label:"This is label",children:"This is body",variant:"outlined",loading:!1},parameters:{docs:{source:{type:"dynamic",transform:(t,r)=>M(r.args)}}}};function _(){const{control:t}=C({mode:"all",defaultValues:{agreement:""}});return e.jsx(k,{children:e.jsx(b,{children:e.jsx(d,{id:"agreement-loading",name:"agreement",control:t,loading:!0,children:"Accept terms and conditions"})})})}const m={render:()=>e.jsx(_,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton animation on checkbox and label."},source:{type:"code",code:`<RcSesCheckboxFormControl
  id='agreement'
  name='agreement'
  control={control}
  loading
>
  Accept terms and conditions
</RcSesCheckboxFormControl>`}}}};function A(){const{control:t,watch:r,setValue:o}=C({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),i=r("child1"),l=r("child2"),a=r("child3"),u=[i,l,a],x=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(k,{children:e.jsx(b,{children:e.jsxs("div",{children:[e.jsx(d,{id:"parent",name:"parent",control:t,variant:"flat",childValues:u,onChildValuesChange:x,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(c,{control:e.jsx(s,{checked:i,onChange:n=>o("child1",n.target.checked)}),label:"Pasirinkimas 1"}),e.jsx(c,{control:e.jsx(s,{checked:l,onChange:n=>o("child2",n.target.checked)}),label:"Pasirinkimas 2"}),e.jsx(c,{control:e.jsx(s,{checked:a,onChange:n=>o("child3",n.target.checked)}),label:"Pasirinkimas 3"})]})]})})})}const g={render:()=>e.jsx(A,{}),parameters:{docs:{description:{story:"Indeterminate (mixed) status is determined by the state of child checkboxes."},source:{type:"code",code:`<RcSesCheckboxFormControl
  id='parent'
  variant='flat'
  childValues={[child1, child2, child3]}
  onChildValuesChange={handleParentChange}
>
  <strong>Pasirinkti visus</strong>
</RcSesCheckboxFormControl>

<div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child1} onChange={(e) => setChild1(e.target.checked)} />}
    label='Pasirinkimas 1'
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child2} onChange={(e) => setChild2(e.target.checked)} />}
    label='Pasirinkimas 2'
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child3} onChange={(e) => setChild3(e.target.checked)} />}
    label='Pasirinkimas 3'
  />
</div>`}}}};function B(){const{control:t,watch:r,setValue:o}=C({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),i=r("child1"),l=r("child2"),a=r("child3"),u=[i,l,a],x=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(k,{children:e.jsx(b,{children:e.jsxs("div",{children:[e.jsx(d,{id:"parent",name:"parent",control:t,variant:"flat",childValues:u,onChildValuesChange:x,loading:!0,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(c,{control:e.jsx(s,{checked:i,onChange:n=>o("child1",n.target.checked),loading:!0}),label:"Pasirinkimas 1",loading:!0}),e.jsx(c,{control:e.jsx(s,{checked:l,onChange:n=>o("child2",n.target.checked),loading:!0}),label:"Pasirinkimas 2",loading:!0}),e.jsx(c,{control:e.jsx(s,{checked:a,onChange:n=>o("child3",n.target.checked),loading:!0}),label:"Pasirinkimas 3",loading:!0})]})]})})})}const p={render:()=>e.jsx(B,{}),parameters:{docs:{description:{story:"Parent-child logic with loading state - shows skeleton while loading."},source:{type:"code",code:`<RcSesCheckboxFormControl
  id='parent'
  variant='flat'
  childValues={[child1, child2, child3]}
  onChildValuesChange={handleParentChange}
  loading
>
  <strong>Pasirinkti visus</strong>
</RcSesCheckboxFormControl>

<div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child1} onChange={(e) => setChild1(e.target.checked)} loading />}
    label='Pasirinkimas 1'
    loading
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child2} onChange={(e) => setChild2(e.target.checked)} loading />}
    label='Pasirinkimas 2'
    loading
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child3} onChange={(e) => setChild3(e.target.checked)} loading />}
    label='Pasirinkimas 3'
    loading
  />
</div>`}}}};var S,R,y;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <CheckboxFormControlDemo {...args} />,
  args: {
    label: 'This is label',
    children: 'This is body',
    variant: 'outlined',
    loading: false
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, storyContext: StoryContext) => codeBlock(storyContext.args)
      }
    }
  }
}`,...(y=(R=h.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var F,j,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <CheckboxLoadingDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Loading state - shows skeleton animation on checkbox and label.'
      },
      source: {
        type: 'code',
        code: \`<RcSesCheckboxFormControl
  id='agreement'
  name='agreement'
  control={control}
  loading
>
  Accept terms and conditions
</RcSesCheckboxFormControl>\`
      }
    }
  }
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var v,L,V;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <CheckboxIndeterminateDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate (mixed) status is determined by the state of child checkboxes.'
      },
      source: {
        type: 'code',
        code: \`<RcSesCheckboxFormControl
  id='parent'
  variant='flat'
  childValues={[child1, child2, child3]}
  onChildValuesChange={handleParentChange}
>
  <strong>Pasirinkti visus</strong>
</RcSesCheckboxFormControl>

<div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child1} onChange={(e) => setChild1(e.target.checked)} />}
    label='Pasirinkimas 1'
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child2} onChange={(e) => setChild2(e.target.checked)} />}
    label='Pasirinkimas 2'
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child3} onChange={(e) => setChild3(e.target.checked)} />}
    label='Pasirinkimas 3'
  />
</div>\`
      }
    }
  }
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var D,I,w;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <CheckboxIndeterminateLoadingDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Parent-child logic with loading state - shows skeleton while loading.'
      },
      source: {
        type: 'code',
        code: \`<RcSesCheckboxFormControl
  id='parent'
  variant='flat'
  childValues={[child1, child2, child3]}
  onChildValuesChange={handleParentChange}
  loading
>
  <strong>Pasirinkti visus</strong>
</RcSesCheckboxFormControl>

<div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child1} onChange={(e) => setChild1(e.target.checked)} loading />}
    label='Pasirinkimas 1'
    loading
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child2} onChange={(e) => setChild2(e.target.checked)} loading />}
    label='Pasirinkimas 2'
    loading
  />
  <RcSesFormControlLabel
    control={<RcSesSimpleCheckbox checked={child3} onChange={(e) => setChild3(e.target.checked)} loading />}
    label='Pasirinkimas 3'
    loading
  />
</div>\`
      }
    }
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Fe=["Main","Loading","Indeterminate","ParentChildLogicLoading"];export{g as Indeterminate,m as Loading,h as Main,p as ParentChildLogicLoading,Fe as __namedExportsOrder,ye as default};
//# sourceMappingURL=CheckboxFormControl.stories-DmpYon9L.js.map
