import{j as t}from"./iframe-C_NnAH3O.js";import{R as i}from"./index-Chvp_yWj.js";import{T as a}from"./TextField-2Z0naMa5.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-coGxeeMj.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-XqT5Jr9n.js";import"./index-Ckerqtrv.js";import"./index-CC_gc_FN.js";import"./getThemeProps-F4eg-9Wj.js";import"./FormControl-DU1oVnCC.js";import"./useFormControl-6-OZtDPU.js";import"./isMuiElement-DZ_Fnqto.js";import"./memoTheme-zpaftJ9d.js";import"./FormLabel-i28WdVJQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BAWu3r22.js";import"./useSlot-Dd1Twsf2.js";import"./mergeSlotProps-jCuRpWpY.js";import"./useReducedMotion-BGQeRJwt.js";import"./Select-Xw1FT5yX.js";import"./useSlotProps-C3p4ZQFY.js";import"./Popover-BqQbw0AT.js";import"./mergeSlotProps-CBqKJDlR.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-yhbW2F-Z.js";import"./Transition-BqZbke8Y.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-BBUUKgKm.js";import"./Modal-OAocE93a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BE5xADCX.js";import"./index-DlP3hp33.js";import"./index-BFy4VxSu.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-dEmqpetm.js";import"./Paper-Dqm7GmzT.js";import"./useRovingTabIndex-B3b773rh.js";import"./List-BcpsCkAm.js";import"./useControlled-CY73jyGe.js";import"./useTimeout-CZmdQNFb.js";import"./createSvgIcon-DCcPQbEF.js";import"./OutlinedInput-BzRwrHGB.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-Bhat0JQn.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-oEP5Urcx.js.map
