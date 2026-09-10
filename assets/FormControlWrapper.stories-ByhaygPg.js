import{j as t}from"./iframe-CFOSKsKV.js";import{R as i}from"./index-M1C7t2ae.js";import{T as a}from"./TextField-B8RCcH0i.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DcIq7zYG.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DvSGbzvs.js";import"./index-C4UOkcZq.js";import"./index-BYTNuqJS.js";import"./getThemeProps-CqC5edNP.js";import"./FormControl-DorgZAyV.js";import"./useFormControl-D9wiEKS7.js";import"./isMuiElement-_JmeSMpX.js";import"./memoTheme-DLCVBTsn.js";import"./FormLabel-E_XJxaUE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Cjv3rVLy.js";import"./useSlot-CkEQy1t2.js";import"./mergeSlotProps-Dhqtg-Xf.js";import"./useReducedMotion-JJA_AOnj.js";import"./Select-KkWe7Mvn.js";import"./useSlotProps-D1GSXL6E.js";import"./Popover-BAaDn8di.js";import"./mergeSlotProps-CmqHpiYB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DbzreRyr.js";import"./Transition-CnTrZDfM.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-hfap4Jyr.js";import"./Modal-DqY1rrCi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DPV2Tfbn.js";import"./index-DGJJH9bk.js";import"./index-DlKA6g-a.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DcJPTuhH.js";import"./Paper-DO1t76Pb.js";import"./useRovingTabIndex-ClBGXDCx.js";import"./List-DY2Eo5vu.js";import"./useControlled-NdbuKUB-.js";import"./useTimeout-2I4hfrP6.js";import"./createSvgIcon-RdYeASNo.js";import"./OutlinedInput-BiCy_QqG.js";import"./InputLabel-ChhN4k1s.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-ByhaygPg.js.map
