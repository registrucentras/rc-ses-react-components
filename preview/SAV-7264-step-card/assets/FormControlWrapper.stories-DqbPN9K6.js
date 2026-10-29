import{j as r,r as c}from"./iframe-CWj8oZOZ.js";import{u as h}from"./index.esm-B3m5WqNm.js";import{R as i}from"./index-BWXKHBdS.js";import{R as u}from"./index-CJo8mK2s.js";import{R as f}from"./TextField-BpkuMfQO.js";import{T as n}from"./TextField-DWaN9C8V.js";import{S as p}from"./Stack-CkZqBFdB.js";import{B as b}from"./Button-BbYEBjTl.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DrHRxVUy.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CoaK2LVL.js";import"./index-Ban65MQl.js";import"./index-DK_AopQY.js";import"./getThemeProps-CVYSyeY6.js";import"./FormControl-CqI-8RUQ.js";import"./useFormControl-DFU56Ddn.js";import"./isMuiElement-Dhmu_ULU.js";import"./memoTheme-rzYRwBep.js";import"./FormLabel-BDZA67Vl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CtYyHc3P.js";import"./index-Z-egHIC5.js";import"./v4-Dnyct6Ft.js";import"./Autocomplete-BSqe6cLe.js";import"./Select-BWXnTc4L.js";import"./useSlot-CB-gizTQ.js";import"./mergeSlotProps-Bkc5NF6i.js";import"./useReducedMotion-CPcVPcQI.js";import"./useSlotProps-BEid7iq9.js";import"./Popover-D2neVCI1.js";import"./mergeSlotProps-B3s8xX8O.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-25DxD-fu.js";import"./Transition-6wjDhKPT.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-YHCFHVm5.js";import"./Modal-CLuF_jcr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BcPZnrEN.js";import"./index-DQ13ji2A.js";import"./index-BnqEAZ8e.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Bsi1esff.js";import"./Paper-BqPJ_771.js";import"./useRovingTabIndex-w3Nact0Q.js";import"./List-D-TBVhcB.js";import"./OutlinedInput-K6qwtIwS.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-CBD9UJuw.js";import"./useTimeout-BiQanTB9.js";import"./createSvgIcon-Bv-KOEm-.js";import"./Close-B5CWgjyd.js";import"./Popper-CAppPN4C.js";import"./Chip-D8rv1PjY.js";import"./ButtonBase-DNQcAHDH.js";import"./IconButton-CE1wGVKF.js";import"./CircularProgress-o7WJEzHT.js";import"./InputLabel-B3mHetsL.js";import"./useThemeProps-HF0yvPmk.js";const Re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}};function g(){const[t,d]=c.useState(!1),{control:m}=h({defaultValues:{top:"first",side:"first"}}),l={type:"manual",message:"Klaidos tekstas"};return r.jsxs(p,{spacing:3,sx:{width:"100%",maxWidth:800},children:[r.jsx(b,{onClick:()=>d(e=>!e),children:"Toggle disabled"}),["top","side"].map(e=>r.jsxs(p,{spacing:2,children:[r.jsx(f,{id:`shared-text-${e}`,label:`TextField ${e}`,disabled:t,errors:l,slotProps:{wrapper:{className:`shared-text-${e}`,labelOnTop:e==="top",description:"Pagalbinis tekstas"}}}),r.jsx(u,{id:`shared-select-${e}`,name:e,control:m,label:`Select ${e}`,disabled:t,errors:l,options:[{value:"first",label:"Pirmas pasirinkimas"}],slotProps:{wrapper:{className:`shared-select-${e}`,labelOnTop:e==="top",description:"Pagalbinis tekstas"}}})]},e))]})}const s={tags:["no-snapshot"],render:()=>r.jsx(g,{})},o={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:t=>r.jsx(i,{...t,children:r.jsx(n,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},a={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:t=>r.jsx(i,{...t,children:r.jsx(n,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  render: () => <SharedLabelsPreview />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'This is a helpful description',
    hideLabel: false,
    labelOnTop: false,
    required: false
  },
  render: args => <RcSesFormControlWrapper {...args}>
      <TextField id='input' placeholder='Type text here' size='small' fullWidth />
    </RcSesFormControlWrapper>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    hideLabel: false,
    labelOnTop: false,
    required: true,
    errors: {
      type: 'required',
      message: 'This field is required'
    }
  },
  render: args => <RcSesFormControlWrapper {...args}>
      <TextField id='input' placeholder='Type text here' size='small' fullWidth error />
    </RcSesFormControlWrapper>,
  parameters: {
    docs: {
      description: {
        story: 'Pass the react-hook-form \`fieldState.error\` as \`errors\` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see \`SelectableCardList\` → \`ValidationError\`. When \`errors.type\` is \`required\` and no \`message\` is set, a translated fallback is shown instead.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const ke=["SharedLabels","Default","WithError"];export{o as Default,s as SharedLabels,a as WithError,ke as __namedExportsOrder,Re as default};
//# sourceMappingURL=FormControlWrapper.stories-DqbPN9K6.js.map
