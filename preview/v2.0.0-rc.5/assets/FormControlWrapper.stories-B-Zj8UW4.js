import{j as t}from"./iframe-4itHtakA.js";import{R as i}from"./index-B5bqBzAM.js";import{T as a}from"./TextField-D0xD2tPv.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CBDh0cM0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-B-mkc8DM.js";import"./index-qtMiWci0.js";import"./index-BazhxRYC.js";import"./getThemeProps-o7LOUnPw.js";import"./FormControl-5MpprFnV.js";import"./useFormControl-CrKXXU6O.js";import"./isMuiElement-BeNsPdVw.js";import"./memoTheme-CfQ1zA65.js";import"./styled-DgEdj7s4.js";import"./FormLabel-DAaFAOgV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BBxV8h5u.js";import"./useSlot-DPLhoEDb.js";import"./mergeSlotProps-CUcZKY51.js";import"./useReducedMotion-_Yf0GJLM.js";import"./Select-lT7pkWDj.js";import"./useSlotProps-BdXFFoA3.js";import"./Popover-gLlcpVHb.js";import"./mergeSlotProps-nk0FdP3E.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BqHsq6o_.js";import"./Transition-F1nlcH21.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-CctkN470.js";import"./Modal-C8KxmHpF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cc-gg9XL.js";import"./index-BESQwzJk.js";import"./index-C8HXnJ-L.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-D5qQ1GDl.js";import"./Paper-Dzysxa52.js";import"./useRovingTabIndex-DncuCE9x.js";import"./List-QDxWi31E.js";import"./useControlled-BUAFe-wL.js";import"./useTimeout-CbfqwwjM.js";import"./createSvgIcon-Bid2ujLn.js";import"./OutlinedInput-Rf29fTEG.js";import"./InputLabel-dFHpSOoZ.js";const re={title:"components/form/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-B-Zj8UW4.js.map
