import{j as t}from"./iframe-DLZCP6iO.js";import{R as i}from"./index-tAGdN4hz.js";import{T as a}from"./TextField-DRlcqbzF.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DnaOQCIt.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-r4JRHfXp.js";import"./index-BuvsHkXm.js";import"./index-HQmijVcf.js";import"./getThemeProps-Cs4zLxVN.js";import"./FormControl-D08VpsHr.js";import"./useFormControl-BllD4Xy6.js";import"./isMuiElement-DmdtL9vO.js";import"./memoTheme-B4NoaLLX.js";import"./FormLabel-zEYJQufr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CH7cBIGi.js";import"./useSlot-C54_Tkze.js";import"./mergeSlotProps-DAbh-wpk.js";import"./useReducedMotion-ChxmCBJX.js";import"./Select-BjXn4Bvq.js";import"./useSlotProps-DHbEArjC.js";import"./Popover-HIZMiHMV.js";import"./mergeSlotProps-DqvewLK1.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CysnWoIr.js";import"./Transition-Cbfn9G0c.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-BakveikH.js";import"./Modal-2KOm3NPw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DFgDLh9i.js";import"./index-WZLTNbun.js";import"./index-CGwCvyNc.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-kWHlMaXu.js";import"./Paper-iveQ9KeI.js";import"./useRovingTabIndex-T05ACygD.js";import"./List-DPXq1UC-.js";import"./useControlled-bSwhgPZO.js";import"./useTimeout-Bp0NEb_2.js";import"./createSvgIcon-CxF7t9SL.js";import"./OutlinedInput-OK5oAMIs.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-DfCP0a-4.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-B7r3-oS1.js.map
