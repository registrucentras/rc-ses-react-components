import{j as t}from"./iframe-Bb9hrTs5.js";import{R as i}from"./index-BOXY2Jqm.js";import{T as a}from"./TextField-CmxgWyiz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-Dcnp2oxJ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BpQYDfNB.js";import"./index-DnLLPA-0.js";import"./index-EB_c9Ef3.js";import"./getThemeProps-DviRSJyb.js";import"./FormControl-D5ij2WpT.js";import"./useFormControl-CqBw46K8.js";import"./isMuiElement-CHsYhzMx.js";import"./memoTheme-p8JXWL0F.js";import"./FormLabel-CWUPNJSS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CIAdv1t_.js";import"./useSlot-9rNfCgwk.js";import"./mergeSlotProps-CNFXYXAR.js";import"./useReducedMotion-CPrdhxjO.js";import"./Select-DjqXSXaS.js";import"./useSlotProps-C6sP1scq.js";import"./Popover-D-eyzyrX.js";import"./mergeSlotProps-BU0Jt61H.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Tf74Wiov.js";import"./Transition-BOXj5PVK.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-B0K9jhZj.js";import"./Modal-DkcN8sBH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-C7gAnZC1.js";import"./index-DMnQWcuK.js";import"./index-C5tlOTyL.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-D7V680on.js";import"./Paper-nS0kJyke.js";import"./useRovingTabIndex-C3SQGcCu.js";import"./List-BP11xW16.js";import"./OutlinedInput-BMie1Fn6.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-C6e5Otch.js";import"./useTimeout-Cf7H1spV.js";import"./createSvgIcon-DZBHmjZW.js";import"./InputLabel-CQ4FDmSw.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Fazeb1Uj.js.map
