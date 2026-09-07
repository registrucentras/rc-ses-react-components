import{j as e}from"./iframe-BdIC5JIw.js";import{u as p}from"./index.esm-CwBCBvfa.js";import{R as d,a as c}from"./CheckboxFormControl-DYaRAlyj.js";import{R as s}from"./SimpleCheckbox-CHwcaT0r.js";import{F as b}from"./FieldView-DB4lh9no.js";import{F as u}from"./Fields-72BH5KYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckBoldIcon-CED4toUs.js";import"./CheckUncheckedBoldIcon-C_BIqBoN.js";import"./FormControlLabel-nOckpX7S.js";import"./useFormControl-Dyf6p2B6.js";import"./memoTheme-DeIom0d1.js";import"./styled-BMLyWrvt.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-CqtniRLn.js";import"./mergeSlotProps-DYy-47iY.js";import"./useReducedMotion-D5fdMDJ-.js";import"./Typography-duKRdiS6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Skeleton-BLExkjx7.js";import"./utils-cxgvJEOf.js";import"./loading-D2Vhcc6k.js";import"./FormLabel-BbeIO0l7.js";import"./Checkbox-CgAKD8gR.js";import"./SwitchBase-DyDPTNAf.js";import"./useControlled-DqWQHykN.js";import"./ButtonBase-CxuycdSQ.js";import"./useTimeout-CHjk5pg7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D6ARCQYX.js";import"./mergeSlotProps-C__nQMsD.js";const f=["outlined","flat"],re={title:"Molecules/CheckboxFormControl",component:d,argTypes:{variant:{options:f,mapping:f,table:{defaultValue:{summary:"outlined"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}}},children:{control:"text",table:{defaultValue:{summary:"This is body"}}},slotProps:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]};function S(a){const{variant:r,children:o,loading:t}=a,{control:l,formState:{errors:i}}=p({mode:"all",defaultValues:{agreement:""}});return e.jsx(u,{children:e.jsx(b,{children:e.jsx(d,{id:"agreement",name:"agreement",control:l,errors:i?.agreement,variant:r,loading:t,children:o})})})}const R=a=>{const{variant:r,children:o}=a;return`
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
//# sourceMappingURL=CheckboxFormControl.stories-nD8XCyXb.js.map
