import{j as t}from"./iframe-CxFnmTa9.js";import{R as i}from"./index-D5eH4rFM.js";import{T as a}from"./TextField-D-CXgQie.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CCd5-pZb.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-vg14c-fa.js";import"./index-BJpi2Fk2.js";import"./index-BM7gKbq3.js";import"./getThemeProps-CrEDX5QR.js";import"./FormControl-qogTtl4p.js";import"./useFormControl-D4u3mAUS.js";import"./isMuiElement-BgUCMpUu.js";import"./memoTheme-DxnCLtx9.js";import"./FormLabel-BEoe5v4J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BZ9XjyHr.js";import"./useSlot-DxKbsYp1.js";import"./mergeSlotProps-Cfhql7K9.js";import"./useReducedMotion-CMqbDeni.js";import"./Select-D1pkZcY2.js";import"./useSlotProps-BzFj9D-I.js";import"./Popover-CwxfqL_M.js";import"./mergeSlotProps-zcwNtBGR.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BI91dK-4.js";import"./Transition-BHwb5M02.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DN2wzoIv.js";import"./Modal-CpHh2FWB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BLRyH6E8.js";import"./index-Da3hwv9a.js";import"./index-DHbRtOlP.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BN2j7nrW.js";import"./Paper-RWucSN_Q.js";import"./useRovingTabIndex-CwH9-1Uw.js";import"./List-DRdOXcBG.js";import"./OutlinedInput-C_Xv8kvQ.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-DAGhwAee.js";import"./useTimeout-DI70m57E.js";import"./createSvgIcon-BqRQESq8.js";import"./InputLabel-JT3virsu.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-D2-hJo9T.js.map
