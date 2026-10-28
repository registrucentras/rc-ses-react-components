import{j as t}from"./iframe-DH4qN6RW.js";import{R as i}from"./index-DKgAQv4Z.js";import{T as a}from"./TextField-DR2L_5n7.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-UQ-nMKC9.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BJ43atvg.js";import"./index-CfH1OXqv.js";import"./index-bqMyNNjM.js";import"./getThemeProps-B1dtPntZ.js";import"./FormControl-BjmXsf74.js";import"./useFormControl-FhJJTlzs.js";import"./isMuiElement-D1Z74QmW.js";import"./memoTheme-CK_PyRMI.js";import"./FormLabel-TlOUSEcV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-GTqzJrXw.js";import"./useSlot-NZAvEDkN.js";import"./mergeSlotProps-K5nwa9TY.js";import"./useReducedMotion-C91mrZ9N.js";import"./Select-meSNIdZ2.js";import"./useSlotProps-vRq82VCj.js";import"./Popover-CSVGXi-P.js";import"./mergeSlotProps-DzbugGjR.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BlN8s51G.js";import"./Transition-Dokv7qa9.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-CPRgwQh2.js";import"./Modal-cK-tAxpH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-PmnwQkTy.js";import"./index-UXAMjxt5.js";import"./index-B0r7342n.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-CEJt2MFg.js";import"./Paper-BpCrmnas.js";import"./useRovingTabIndex-Dr5WoVGM.js";import"./List-DLLbZsHW.js";import"./OutlinedInput-D7EJZV-C.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-B9VpZwp9.js";import"./useTimeout-CBuPVYG_.js";import"./createSvgIcon-dzckMoQm.js";import"./InputLabel-C5eVp1Eu.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const te=["Default","WithError"];export{e as Default,r as WithError,te as __namedExportsOrder,re as default};
//# sourceMappingURL=FormControlWrapper.stories-CAJATnQp.js.map
