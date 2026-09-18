import{j as t}from"./iframe-C--2Qp2X.js";import{R as i}from"./index-SM6eLIB1.js";import{T as a}from"./TextField-CvqvkpZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B3fhZflc.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CFUE4C6U.js";import"./index-BfDjRW8d.js";import"./index-WsMdPy7x.js";import"./getThemeProps-ByoHHWaa.js";import"./FormControl-DEPC401e.js";import"./useFormControl-B8iYuwxM.js";import"./isMuiElement-DtkWQt7s.js";import"./memoTheme-CW9I2BsA.js";import"./FormLabel-fhjabWU5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CaXBHDJn.js";import"./useSlot-49pSelQI.js";import"./mergeSlotProps-NJatU-kK.js";import"./useReducedMotion-tZYExsTl.js";import"./Select-yRg1O9Hh.js";import"./useSlotProps-C12XKbDW.js";import"./Popover-CEUf_a0w.js";import"./mergeSlotProps-COhtAqW0.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CivEum08.js";import"./Transition-DI4lKCF5.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DrfRwelJ.js";import"./Modal-DSfFTXON.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BsoXsUn3.js";import"./index-D054tarV.js";import"./index-BCzH-lMd.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BukVhqDh.js";import"./Paper-CHPMOkXk.js";import"./useRovingTabIndex-CS0hfLqd.js";import"./List-DQe-ZfER.js";import"./useControlled-DNtm-Nt1.js";import"./useTimeout-CHxIJTjf.js";import"./createSvgIcon-DNnr0kMq.js";import"./OutlinedInput-aotRFEOK.js";import"./InputLabel-CIEb7zJb.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const re=["Default","WithError"];export{e as Default,r as WithError,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=FormControlWrapper.stories-BRPFyGe-.js.map
