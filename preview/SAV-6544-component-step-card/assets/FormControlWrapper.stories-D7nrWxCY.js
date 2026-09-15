import{j as t}from"./iframe-SUDf0pfh.js";import{R as i}from"./index-D4L0DOYg.js";import{T as a}from"./TextField-D0g6KCDf.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-C4UNQdoE.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CJDYDvRS.js";import"./index-BvLRHYUn.js";import"./index-NpZ1h6xs.js";import"./getThemeProps-DygoEgat.js";import"./FormControl-Bl-aLr8n.js";import"./useFormControl-CT3QN9iK.js";import"./isMuiElement-BkWU0MlN.js";import"./memoTheme-B2w2pmGx.js";import"./FormLabel-C39mqocg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-8r0scKjP.js";import"./useSlot-BcHO_DW4.js";import"./mergeSlotProps-BH6x0T2M.js";import"./useReducedMotion-C-CLhidq.js";import"./Select-WZSiPXOD.js";import"./useSlotProps-C7a1OFdB.js";import"./Popover-5wSbhWxq.js";import"./mergeSlotProps-BZrJqGOz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BiDaXiCv.js";import"./Transition-BCXvKXmN.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DDnKYvr0.js";import"./Modal-DePd89sx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CaS1CVqv.js";import"./index-B99G9Dl3.js";import"./index-B_5qlOOs.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-B2msdDq3.js";import"./Paper-DRh0kzsr.js";import"./useRovingTabIndex-Do3kGd40.js";import"./List--FXu6A2d.js";import"./useControlled-CrXLB48T.js";import"./useTimeout-Cv6yp324.js";import"./createSvgIcon-BtOTbZE6.js";import"./OutlinedInput-Dzoe42u7.js";import"./InputLabel-CmGrKHB9.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-D7nrWxCY.js.map
