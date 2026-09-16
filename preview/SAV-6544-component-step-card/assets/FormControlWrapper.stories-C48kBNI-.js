import{j as t}from"./iframe-BL6TfiF8.js";import{R as i}from"./index-BAxMk8-c.js";import{T as a}from"./TextField-BR_dU0M_.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-Be2iuQIH.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CdPXEjz7.js";import"./index-I4KNXR0w.js";import"./index-t3NzGZ43.js";import"./getThemeProps-6j1Y0ZA1.js";import"./FormControl-D8IHl2dV.js";import"./useFormControl-BhcJd2Ir.js";import"./isMuiElement-kbBX_Z8Z.js";import"./memoTheme-ilhfXMHW.js";import"./FormLabel-D_-tJje9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-B6Jc5hO9.js";import"./useSlot-ChGHh0xv.js";import"./mergeSlotProps-CMBTMKO6.js";import"./useReducedMotion-BwTtuJ8i.js";import"./Select-DIscHOyI.js";import"./useSlotProps-B_Z0mDz5.js";import"./Popover-BUxjyO15.js";import"./mergeSlotProps-e8_M43Co.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-3QPdhEwv.js";import"./Transition-Dm_cEf0X.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-XhjLfU4n.js";import"./Modal-Cw7NrkO7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B1Llepq4.js";import"./index-4I1EOtY9.js";import"./index-9r9QSjo7.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-QegoiFah.js";import"./Paper-BjAlaxju.js";import"./useRovingTabIndex-CwzN7tD6.js";import"./List-C60oiK53.js";import"./useControlled-C5ebXLLz.js";import"./useTimeout-Dl239K_i.js";import"./createSvgIcon-CDugASXJ.js";import"./OutlinedInput-CrtoEve6.js";import"./InputLabel-DHWZaXrw.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-C48kBNI-.js.map
