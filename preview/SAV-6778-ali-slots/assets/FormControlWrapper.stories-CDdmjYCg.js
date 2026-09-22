import{j as t}from"./iframe-CjFGEJ81.js";import{R as i}from"./index-CyxMKTqZ.js";import{T as a}from"./TextField-CMeV97tB.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DMvscq7a.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-e2fLiw4Y.js";import"./index-ogy7vhUw.js";import"./index-1QXoUmnr.js";import"./getThemeProps-CfVypnpI.js";import"./FormControl-CTJC7lUO.js";import"./useFormControl-CL2Yhkda.js";import"./isMuiElement-9PScNQuI.js";import"./memoTheme-DFx0ml1c.js";import"./FormLabel-Cf2ET02C.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BMqpvj44.js";import"./useSlot-BwsQXOGo.js";import"./mergeSlotProps-OLCsfSrB.js";import"./useReducedMotion-CWb8_6d6.js";import"./Select-BBBIJvAP.js";import"./useSlotProps-DGu9r2Aq.js";import"./Popover-CRTfz2MF.js";import"./mergeSlotProps-OXYz8tCT.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BgHKMz1T.js";import"./Transition-CoHa3Tgg.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DunrMl5A.js";import"./Modal-Bog0zbSM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CMZ_MVKk.js";import"./index-DoapZ5WA.js";import"./index-CpgJdQx1.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-GtrwSWWl.js";import"./Paper-CEnJXVd5.js";import"./useRovingTabIndex-C8CHEHDW.js";import"./List-Dc4L5G2R.js";import"./useControlled-DDkb7FJx.js";import"./useTimeout-CdIpb-RI.js";import"./createSvgIcon-C3Akv2PH.js";import"./OutlinedInput-D4rQNdQ2.js";import"./InputLabel-C-aMH3sT.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-CDdmjYCg.js.map
