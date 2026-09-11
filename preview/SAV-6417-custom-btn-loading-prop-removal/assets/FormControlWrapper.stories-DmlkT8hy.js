import{j as t}from"./iframe-CIXJIlmg.js";import{R as i}from"./index-BDWX9jNR.js";import{T as a}from"./TextField-w2Y8bhYq.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DL7cVOPT.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Cjiqd4Vw.js";import"./index-C8-UiIJn.js";import"./index-C2lZ4br8.js";import"./getThemeProps-8inDuFsL.js";import"./FormControl-lCjdhhCs.js";import"./useFormControl-CUIIRlOe.js";import"./isMuiElement-BS8x97GT.js";import"./memoTheme-DbAlV__5.js";import"./FormLabel-1QF4ZIAi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BEkEjX2Y.js";import"./useSlot-SIPNhSkR.js";import"./mergeSlotProps-BECWxVr6.js";import"./useReducedMotion-C2r5ARSO.js";import"./Select-C1LwHTB0.js";import"./useSlotProps-CV4jRuMv.js";import"./Popover-CrtybfRF.js";import"./mergeSlotProps-C6g8GCJv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B27Ju7j5.js";import"./Transition-CbbeNW5N.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-BoFXo2RX.js";import"./Modal-xeWQUNs1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DqMaldDj.js";import"./index-DYZN7hMJ.js";import"./index-CWpD-MCl.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Ds3xNTnc.js";import"./Paper-lGlETzE4.js";import"./useRovingTabIndex-CthBHq02.js";import"./List-CifFtiXX.js";import"./useControlled-CXmrIiYq.js";import"./useTimeout-BZ2e3185.js";import"./createSvgIcon-CBC4dTeQ.js";import"./OutlinedInput-C77NgEd1.js";import"./InputLabel-CE9pdfXB.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-DmlkT8hy.js.map
