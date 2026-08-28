import{j as t}from"./iframe-BZ0rEFpA.js";import{R as i}from"./index-CcYmncLF.js";import{T as a}from"./TextField-C0DWiy00.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-sexgdGyS.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BtOK83HT.js";import"./index-B8rQppoK.js";import"./index-DZ1Ss5-U.js";import"./getThemeProps-yOwtWQXa.js";import"./FormControl-DksD9Oar.js";import"./useFormControl-2AG98fjX.js";import"./isMuiElement-C2sqC0sW.js";import"./memoTheme-BcRt8z4c.js";import"./styled-D09lcIxe.js";import"./FormLabel-CNfYtyKL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-B7VcQeWy.js";import"./useSlot-CCYGnOby.js";import"./mergeSlotProps-DgdDDrzk.js";import"./useReducedMotion-B35PtJBu.js";import"./Select-QfhAbWWS.js";import"./useSlotProps-BP5A3i3B.js";import"./Popover-B_26t1V3.js";import"./mergeSlotProps-CHlsb9Dt.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BsDSYkIR.js";import"./Transition-6UNKhS_3.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-BfRV8w33.js";import"./Modal-D2xnbDUI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D9j2gnVu.js";import"./index-CbYe7oEY.js";import"./index-Bp4xrVoM.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Cx1czQs5.js";import"./Paper-DKwKLgK_.js";import"./useRovingTabIndex-Bqq4F5zW.js";import"./List-BoaAPLpi.js";import"./useControlled-Cfcz5xOQ.js";import"./useTimeout-DgTJde3A.js";import"./createSvgIcon-DYL2AorN.js";import"./OutlinedInput-BFXH6ybM.js";import"./InputLabel-34u_PmLd.js";const re={title:"components/form/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-5y07pyvc.js.map
