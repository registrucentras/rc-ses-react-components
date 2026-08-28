import{j as t}from"./iframe-CDc5tlXL.js";import{R as i}from"./index-CPyk6nRi.js";import{T as a}from"./TextField-mH6TLYZ2.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BYAnJ6bV.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BCbzYpi_.js";import"./index-BrC7kUr4.js";import"./index-ClfTdE4D.js";import"./getThemeProps-DvFdQtVg.js";import"./FormControl-DyLA9fSl.js";import"./useFormControl-BX8gQj1D.js";import"./isMuiElement-Cnq1RAJH.js";import"./memoTheme-DMsyr4pX.js";import"./styled-DCBzl_Uz.js";import"./FormLabel-_1EIYDWl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-5N3feBy6.js";import"./useSlot-Dt5M4lwq.js";import"./mergeSlotProps-BZhOP4mI.js";import"./useReducedMotion-C1TE5Xmo.js";import"./Select-CuBmRQqz.js";import"./useSlotProps-BUaRBWdl.js";import"./Popover-B5hb9Y_N.js";import"./mergeSlotProps-B_jZXcDK.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BaxfpeAQ.js";import"./Transition-Bgw2VyRd.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-CggjwU6i.js";import"./Modal-DxdnRW4a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DCDTFcpb.js";import"./index-qgeusoMw.js";import"./index-AyjGfcVZ.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Dn1qiu1X.js";import"./Paper-DpzUUUdF.js";import"./useRovingTabIndex-D2LTuwoh.js";import"./List-BZDsfeqz.js";import"./useControlled-CzYodwTZ.js";import"./useTimeout-2ekXw_1X.js";import"./createSvgIcon-G59Oy1ku.js";import"./OutlinedInput-BCOvcTrK.js";import"./InputLabel-CAZiIDIc.js";const re={title:"components/form/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-DYyThZZC.js.map
