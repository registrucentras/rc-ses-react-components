import{j as t}from"./iframe-DB1EF-x_.js";import{R as i}from"./index-BxIkyzSt.js";import{T as a}from"./TextField-B3_cDruX.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D4Jm7AAj.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DSJywBrb.js";import"./index-DWsPbBEP.js";import"./index-CjKLscX-.js";import"./getThemeProps-__gKXzXy.js";import"./FormControl-C5Hy8blQ.js";import"./useFormControl-CWEpkjEg.js";import"./isMuiElement-BJmv-8vH.js";import"./memoTheme-VhH0Ke8H.js";import"./FormLabel-C3rn3CZT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-YVXxzo4-.js";import"./useSlot-CdVtEC6U.js";import"./mergeSlotProps-D1VQHPIF.js";import"./useReducedMotion-C4RkVMNI.js";import"./Select-yXGDQHDB.js";import"./useSlotProps-7xO63P3d.js";import"./Popover-BXp0xn43.js";import"./mergeSlotProps-DYFVJgHy.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BKz0f3qP.js";import"./Transition-jXxGhKeR.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DCy1rOni.js";import"./Modal-ChBBJl8b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BOvFD5eV.js";import"./index-BmS_ntgN.js";import"./index-CH-QCW2k.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Backdrop-D7k8my25.js";import"./Fade-BfRDaHk2.js";import"./Paper-C5KcvUpZ.js";import"./useRovingTabIndex-BJ8EBiC5.js";import"./List-CLyni-vL.js";import"./useControlled-D8_om1HX.js";import"./useTimeout-Bp9Z3NaC.js";import"./createSvgIcon-D74Ga_RM.js";import"./OutlinedInput-DEyC0sHh.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-N7yAWwku.js";const te={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const oe=["Default","WithError"];export{e as Default,r as WithError,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=FormControlWrapper.stories-skg0iKOq.js.map
