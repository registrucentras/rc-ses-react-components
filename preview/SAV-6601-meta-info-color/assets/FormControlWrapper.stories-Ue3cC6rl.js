import{j as t}from"./iframe-C4pznSxB.js";import{R as i}from"./index-BdfvY3uL.js";import{T as a}from"./TextField-DnSGZ4oU.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DcG0H_In.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BmJbiKtf.js";import"./index-MdniPBWm.js";import"./index-C6BECpTB.js";import"./getThemeProps-h9caLrl1.js";import"./FormControl-S-_AIePk.js";import"./useFormControl-CR2FrYLE.js";import"./isMuiElement-CoCSgR_J.js";import"./memoTheme-CT5MQfOE.js";import"./FormLabel-CMAibLZc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Dxm4FpNt.js";import"./useSlot-DYZldupo.js";import"./mergeSlotProps-D_CTyZdL.js";import"./useReducedMotion-B7QXwOH9.js";import"./Select-wgcMO0kM.js";import"./useSlotProps-BuEmnP3z.js";import"./Popover-BAB81GXz.js";import"./mergeSlotProps-CT3XZqqC.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DVfBF_gC.js";import"./Transition-Cx3BLusM.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-CkQ57gkG.js";import"./Modal-CkDN1xOM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dqgz3L8z.js";import"./index-Dn8RPp_F.js";import"./index-CUpYsJBt.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BTNdlJej.js";import"./Paper-BEkcHUKJ.js";import"./useRovingTabIndex-CfOCYoQw.js";import"./List-DJmU8YRe.js";import"./useControlled-BSVqjK6C.js";import"./useTimeout-TLp9lcma.js";import"./createSvgIcon-OKnq_7bx.js";import"./OutlinedInput-4xGzP44X.js";import"./InputLabel-Bq7k4Ind.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Ue3cC6rl.js.map
