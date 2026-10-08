import{j as t}from"./iframe-CCeyCrqp.js";import{R as i}from"./index-z_mvBhXk.js";import{T as a}from"./TextField-dVjenmg0.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CD0Ckri3.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DSzKp9dp.js";import"./index-D_hGba6M.js";import"./index-2HIw6w0N.js";import"./getThemeProps-DYXXmbe9.js";import"./FormControl-BG3uPiMB.js";import"./useFormControl-DafuNREV.js";import"./isMuiElement-Ee0aDokq.js";import"./memoTheme-C0wvpSvw.js";import"./FormLabel-D9HkzDs2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CLpphZdR.js";import"./useSlot-MlE46m0F.js";import"./mergeSlotProps-DQxfus8Q.js";import"./useReducedMotion-iqnEsf7n.js";import"./Select-CGKYpmoj.js";import"./useSlotProps-BRylw2Ll.js";import"./Popover-DVbN_2vj.js";import"./mergeSlotProps-BdZZ97o-.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CHqefTk1.js";import"./Transition-BgyDU6Ie.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-BSqoeeVm.js";import"./Modal-DX-Qybzt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DA5299Ee.js";import"./index-DJD8j2eL.js";import"./index-5YRiv8M9.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BGyTopTm.js";import"./Paper-8RwezajL.js";import"./useRovingTabIndex-CPiYoeeP.js";import"./List-Cyt8pS7f.js";import"./OutlinedInput-B0cLA0xZ.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-BXaRoU1G.js";import"./useTimeout-CV9EbYuy.js";import"./createSvgIcon-_19mzxF9.js";import"./InputLabel-CCClCsIp.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-D0ML0nOv.js.map
