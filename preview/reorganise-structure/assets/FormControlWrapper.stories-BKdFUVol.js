import{j as t}from"./iframe-D8XfDVau.js";import{R as i}from"./index-CAoFMT7b.js";import{T as a}from"./TextField-DWWziroK.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CZMuzs8o.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CT8kmkZR.js";import"./index-CFxMxkRl.js";import"./index-CUmbJqH-.js";import"./getThemeProps-Bfef8K0E.js";import"./FormControl-CFT0TfOs.js";import"./useFormControl-C1T6Afn4.js";import"./isMuiElement-DobG8foc.js";import"./memoTheme-BWkKHYer.js";import"./styled-CAQoJkW_.js";import"./FormLabel-34jQagsr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Br2kiTh6.js";import"./useSlot-DScEVbLP.js";import"./mergeSlotProps-ClX-yLlC.js";import"./useReducedMotion-6iJMK1Zp.js";import"./Select-BugJA_SU.js";import"./useSlotProps-BbQHlrkb.js";import"./Popover-CLP-lZ1o.js";import"./mergeSlotProps-DC2Fba3G.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DrKOTLtQ.js";import"./Transition-DWaOF2D8.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-ClgswIsH.js";import"./Modal-C-6_FWNQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CAwcP4cE.js";import"./index-BGwOZzg2.js";import"./index-j0mGSnLS.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-CQHeWYIC.js";import"./Paper-BNx6QOVi.js";import"./useRovingTabIndex-An_EQJTU.js";import"./List-1-6cpKOE.js";import"./useControlled-BV6X3azl.js";import"./useTimeout-D08Iq3s4.js";import"./createSvgIcon-DgpSHggq.js";import"./OutlinedInput-CfvaiHMw.js";import"./InputLabel-BNSm-9ni.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BKdFUVol.js.map
