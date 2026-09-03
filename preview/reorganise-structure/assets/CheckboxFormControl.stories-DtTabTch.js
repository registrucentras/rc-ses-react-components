import{j as e}from"./iframe-D8XfDVau.js";import{u as p}from"./index.esm-4iBpvgWK.js";import{R as d,a as c}from"./CheckboxFormControl-9PxIPx3S.js";import{R as s}from"./SimpleCheckbox-Cc3kfwmd.js";import{F as b}from"./FieldView-C7U5AwQz.js";import{F as u}from"./Fields-C0ZeZYTK.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-D3R22-Ue.js";import"./CheckUncheckedBoldIcon-DunUAptU.js";import"./FormControlLabel-LP6-ki4c.js";import"./useFormControl-C1T6Afn4.js";import"./memoTheme-BWkKHYer.js";import"./styled-CAQoJkW_.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-DScEVbLP.js";import"./mergeSlotProps-ClX-yLlC.js";import"./useReducedMotion-6iJMK1Zp.js";import"./Typography-DIAgs3eI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Skeleton-Cpl1Php4.js";import"./utils-cxgvJEOf.js";import"./loading-_plRtlSn.js";import"./FormLabel-34jQagsr.js";import"./Checkbox-B0q26flu.js";import"./SwitchBase-RJBFY_ZW.js";import"./useControlled-BV6X3azl.js";import"./ButtonBase-DxJjZtua.js";import"./useTimeout-D08Iq3s4.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DgpSHggq.js";import"./mergeSlotProps-DC2Fba3G.js";const f=["outlined","flat"],re={title:"Molecules/CheckboxFormControl",component:d,argTypes:{variant:{options:f,mapping:f,table:{defaultValue:{summary:"outlined"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}}},children:{control:"text",table:{defaultValue:{summary:"This is body"}}},slotProps:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]};function S(a){const{variant:r,children:o,loading:t}=a,{control:l,formState:{errors:i}}=p({mode:"all",defaultValues:{agreement:""}});return e.jsx(u,{children:e.jsx(b,{children:e.jsx(d,{id:"agreement",name:"agreement",control:l,errors:i?.agreement,variant:r,loading:t,children:o})})})}const R=a=>{const{variant:r,children:o}=a;return`
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
  );`},h={render:a=>e.jsx(S,{...a}),args:{label:"This is label",children:"This is body",variant:"outlined",loading:!1},parameters:{docs:{source:{type:"dynamic",transform:(a,r)=>R(r.args)}}}};function y(){const{control:a}=p({mode:"all",defaultValues:{agreement:""}});return e.jsx(u,{children:e.jsx(b,{children:e.jsx(d,{id:"agreement-loading",name:"agreement",control:a,loading:!0,children:"Accept terms and conditions"})})})}const m={render:()=>e.jsx(y,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton animation on checkbox and label."},source:{type:"code",code:`<RcSesCheckboxFormControl
  id='agreement'
  name='agreement'
  control={control}
  loading
>
  Accept terms and conditions
</RcSesCheckboxFormControl>`}}}};function F(){const{control:a,watch:r,setValue:o}=p({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),t=r("child1"),l=r("child2"),i=r("child3"),k=[t,l,i],x=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(u,{children:e.jsx(b,{children:e.jsxs("div",{children:[e.jsx(d,{id:"parent",name:"parent",control:a,variant:"flat",childValues:k,onChildValuesChange:x,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(c,{control:e.jsx(s,{checked:t,onChange:n=>o("child1",n.target.checked)}),label:"Pasirinkimas 1"}),e.jsx(c,{control:e.jsx(s,{checked:l,onChange:n=>o("child2",n.target.checked)}),label:"Pasirinkimas 2"}),e.jsx(c,{control:e.jsx(s,{checked:i,onChange:n=>o("child3",n.target.checked)}),label:"Pasirinkimas 3"})]})]})})})}const g={render:()=>e.jsx(F,{}),parameters:{docs:{description:{story:"Indeterminate (mixed) status is determined by the state of child checkboxes."},source:{type:"code",code:`<RcSesCheckboxFormControl
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
</div>`}}}};function j(){const{control:a,watch:r,setValue:o}=p({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),t=r("child1"),l=r("child2"),i=r("child3"),k=[t,l,i],x=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(u,{children:e.jsx(b,{children:e.jsxs("div",{children:[e.jsx(d,{id:"parent",name:"parent",control:a,variant:"flat",childValues:k,onChildValuesChange:x,loading:!0,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(c,{control:e.jsx(s,{checked:t,onChange:n=>o("child1",n.target.checked),loading:!0}),label:"Pasirinkimas 1",loading:!0}),e.jsx(c,{control:e.jsx(s,{checked:l,onChange:n=>o("child2",n.target.checked),loading:!0}),label:"Pasirinkimas 2",loading:!0}),e.jsx(c,{control:e.jsx(s,{checked:i,onChange:n=>o("child3",n.target.checked),loading:!0}),label:"Pasirinkimas 3",loading:!0})]})]})})})}const C={render:()=>e.jsx(j,{}),parameters:{docs:{description:{story:"Parent-child logic with loading state - shows skeleton while loading."},source:{type:"code",code:`<RcSesCheckboxFormControl
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
</div>`}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ae=["Main","Loading","Indeterminate","ParentChildLogicLoading"];export{g as Indeterminate,m as Loading,h as Main,C as ParentChildLogicLoading,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=CheckboxFormControl.stories-DtTabTch.js.map
