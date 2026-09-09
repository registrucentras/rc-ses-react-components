import{j as t}from"./iframe-Ooowi1hp.js";import{R as i}from"./index-DCp8hICg.js";import{T as a}from"./TextField-CPLiWPdr.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D2TrkABV.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CU372kPQ.js";import"./index-m8oJFxud.js";import"./index-ZP87n-gW.js";import"./getThemeProps-CJQ_L7vF.js";import"./FormControl-pj0-8FHW.js";import"./useFormControl-BOZS31Sr.js";import"./isMuiElement-CQMGhR6J.js";import"./memoTheme-BMYD4lBk.js";import"./FormLabel-DAv7KyPS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BT3gA3sr.js";import"./useSlot-nE-oSZ0r.js";import"./mergeSlotProps-C0aPw3Mi.js";import"./useReducedMotion-TJp5-EWY.js";import"./Select-D1QPQgl2.js";import"./useSlotProps-BIA2BeZQ.js";import"./Popover-F2in3XJW.js";import"./mergeSlotProps-BGSWIg_d.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BaQRuRxC.js";import"./Transition-BnyGZ2sF.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-BnDQMsXJ.js";import"./Modal-D87BU7OP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CiyBYxoU.js";import"./index-CAZlDmva.js";import"./index-BwACY6Ab.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BPOeOsj_.js";import"./Paper-bpwoE9tm.js";import"./useRovingTabIndex-D4A9x4lK.js";import"./List-DArBTHba.js";import"./useControlled-ChFMn5qC.js";import"./useTimeout-B368JUcF.js";import"./createSvgIcon-B7qz8k6l.js";import"./OutlinedInput-DmW3VekG.js";import"./InputLabel-BddPQRGx.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-AUFa9H8v.js.map
