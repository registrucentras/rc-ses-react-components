import{j as t}from"./iframe-PQNPox6x.js";import{R as i}from"./index-CdrIFQSx.js";import{T as a}from"./TextField-CnRoaCWM.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DngV8o5X.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-PauY0rwW.js";import"./index-Dm6qHZ_l.js";import"./index-CPTUD4rR.js";import"./getThemeProps-D5djJePg.js";import"./FormControl-j94DWCMh.js";import"./useFormControl-BXXgHYom.js";import"./isMuiElement-CxlQKXPQ.js";import"./memoTheme-CYeapeeR.js";import"./FormLabel-DY1Bdf5W.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BdAnsfdh.js";import"./useSlot-CkhfrMvL.js";import"./mergeSlotProps-dLBz28oI.js";import"./useReducedMotion-B2zDJY0G.js";import"./Select-DiVY6IsB.js";import"./useSlotProps-CePTUqzo.js";import"./Popover-DXVfe89K.js";import"./mergeSlotProps-42MfWUz_.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-D3lhqsYY.js";import"./Transition-CViAjQpO.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-Cpq1LY2d.js";import"./Modal-qTewqcyr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-u4j3kdE4.js";import"./index-DLI0h6NF.js";import"./index-BPiFilkX.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DXTOYQaG.js";import"./Paper-Bo96e-OI.js";import"./useRovingTabIndex-B1WdAkZG.js";import"./List-YP1LbqHe.js";import"./useControlled-YXqHIotn.js";import"./useTimeout-A-wIdcEE.js";import"./createSvgIcon-DmISCbpy.js";import"./OutlinedInput-muTz1wu2.js";import"./InputLabel-B5b2556d.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Djekh32_.js.map
