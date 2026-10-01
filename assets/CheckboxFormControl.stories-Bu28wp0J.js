import{j as e}from"./iframe-D0jLDCyy.js";import{u as g,a as k}from"./index.esm-BR8x2BCC.js";import{R as c,a as t}from"./CheckboxFormControl-CKNUJtNA.js";import{R as i}from"./SimpleCheckbox-C_wjjY_s.js";import{F as C}from"./FieldView-1kVNQyC2.js";import{F as p}from"./Fields-CB2LsQZt.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControlLabel-Due6RBJl.js";import"./useFormControl-C6MKAmSx.js";import"./memoTheme-oRxAc6ym.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useSlot-C-6CIQUZ.js";import"./mergeSlotProps-CHZ8RNr1.js";import"./useReducedMotion-C3SGip4Q.js";import"./Typography-BoiW-rKN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Skeleton-EdNw0h4m.js";import"./utils-BL043Ngk.js";import"./loading-BUeIp-hR.js";import"./SwitchBase-CO-u71C7.js";import"./useControlled-BAEmdUmm.js";import"./ButtonBase-6ciF6z-q.js";import"./useTimeout-CDcRADDE.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DwALGO4p.js";import"./mergeSlotProps-WohUH2mN.js";import"./FormLabel-BNSOC6TL.js";const b=["outlined","flat"],X={title:"Molecules/CheckboxFormControl",component:c,argTypes:{variant:{options:b,mapping:b,table:{defaultValue:{summary:"outlined"}}},loading:{control:"boolean",table:{defaultValue:{summary:"false"}}},children:{control:"text",table:{defaultValue:{summary:"This is body"}}},slotProps:{table:{disable:!0}},id:{table:{disable:!0}},errors:{table:{disable:!0}},onBlur:{table:{disable:!0}},onChange:{table:{disable:!0}},rules:{table:{disable:!0}},control:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},label:{table:{disable:!0}}},tags:["autodocs"]};function x(r){const{variant:o,children:a,loading:l}=r,{control:n,formState:{errors:u}}=g({mode:"all",defaultValues:{agreement:""}});return e.jsx(p,{children:e.jsx(C,{children:e.jsx(c,{id:"agreement",name:"agreement",control:n,errors:u?.agreement,variant:o,loading:l,children:a})})})}const f=r=>{const{variant:o,children:a}=r;return`
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
  );`},s={render:r=>e.jsx(x,{...r}),args:{label:"This is label",children:"This is body",variant:"outlined",loading:!1},parameters:{docs:{source:{type:"dynamic",transform:(r,o)=>f(o.args)}}}};function S(){const{control:r}=g({mode:"all",defaultValues:{agreement:""}});return e.jsx(p,{children:e.jsx(C,{children:e.jsx(c,{id:"agreement-loading",name:"agreement",control:r,loading:!0,children:"Accept terms and conditions"})})})}const d={render:()=>e.jsx(S,{}),parameters:{docs:{description:{story:"Loading state - shows skeleton animation on checkbox and label."},source:{type:"code",code:`<RcSesCheckboxFormControl
  id='agreement'
  name='agreement'
  control={control}
  loading
>
  Accept terms and conditions
</RcSesCheckboxFormControl>`}}}};function R(){const{control:r,setValue:o}=g({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),a=k({control:r,name:["child1","child2","child3"]}),l=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(p,{children:e.jsx(C,{children:e.jsxs("div",{children:[e.jsx(c,{id:"parent",name:"parent",control:r,variant:"flat",childValues:a,onChildValuesChange:l,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(t,{control:e.jsx(i,{checked:a[0],onChange:n=>o("child1",n.target.checked)}),label:"Pasirinkimas 1"}),e.jsx(t,{control:e.jsx(i,{checked:a[1],onChange:n=>o("child2",n.target.checked)}),label:"Pasirinkimas 2"}),e.jsx(t,{control:e.jsx(i,{checked:a[2],onChange:n=>o("child3",n.target.checked)}),label:"Pasirinkimas 3"})]})]})})})}const h={render:()=>e.jsx(R,{}),parameters:{docs:{description:{story:"Indeterminate (mixed) status is determined by the state of child checkboxes."},source:{type:"code",code:`<RcSesCheckboxFormControl
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
</div>`}}}};function y(){const{control:r,setValue:o}=g({mode:"all",defaultValues:{parent:!1,child1:!1,child2:!1,child3:!1}}),a=k({control:r,name:["child1","child2","child3"]}),l=n=>{o("child1",n[0]),o("child2",n[1]),o("child3",n[2])};return e.jsx(p,{children:e.jsx(C,{children:e.jsxs("div",{children:[e.jsx(c,{id:"parent",name:"parent",control:r,variant:"flat",childValues:a,onChildValuesChange:l,loading:!0,children:e.jsx("strong",{children:"Pasirinkti visus"})}),e.jsxs("div",{style:{paddingLeft:"2rem",display:"flex",flexDirection:"column"},children:[e.jsx(t,{control:e.jsx(i,{checked:a[0],onChange:n=>o("child1",n.target.checked),loading:!0}),label:"Pasirinkimas 1",loading:!0}),e.jsx(t,{control:e.jsx(i,{checked:a[1],onChange:n=>o("child2",n.target.checked),loading:!0}),label:"Pasirinkimas 2",loading:!0}),e.jsx(t,{control:e.jsx(i,{checked:a[2],onChange:n=>o("child3",n.target.checked),loading:!0}),label:"Pasirinkimas 3",loading:!0})]})]})})})}const m={render:()=>e.jsx(y,{}),parameters:{docs:{description:{story:"Parent-child logic with loading state - shows skeleton while loading."},source:{type:"code",code:`<RcSesCheckboxFormControl
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
</div>`}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Y=["Main","Loading","Indeterminate","ParentChildLogicLoading"];export{h as Indeterminate,d as Loading,s as Main,m as ParentChildLogicLoading,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=CheckboxFormControl.stories-Bu28wp0J.js.map
