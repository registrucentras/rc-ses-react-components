import{j as t}from"./iframe-BWS6zQMz.js";import{R as i}from"./index-FQKo8zz6.js";import{T as a}from"./TextField-Dk9F_ARW.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-nGGPDb0l.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CreZPdz2.js";import"./index-DMYSYZ2f.js";import"./index-BgMBnxBe.js";import"./getThemeProps-B9Q2Lx8Z.js";import"./FormControl-CVhTimHr.js";import"./useFormControl-HzJUR3pm.js";import"./isMuiElement-Dtw5vHzO.js";import"./memoTheme-eAANWYbH.js";import"./FormLabel-3k5r-wU_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Bk8yASaT.js";import"./useSlot-Bkup3aP4.js";import"./mergeSlotProps-_45-cUn6.js";import"./useReducedMotion-CfPpIXVN.js";import"./Select-BimiqseT.js";import"./useSlotProps-DirPgJmp.js";import"./Popover-BQXZz5jG.js";import"./mergeSlotProps-zwXdcgyY.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BVBF-xH1.js";import"./Transition-DeWWejMj.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DXWIIysi.js";import"./Modal-BnZMPHs0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D4_kqNHe.js";import"./index-68yPhpfU.js";import"./index-BJQJrjfy.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Bb47oWff.js";import"./Paper-CDC3ILca.js";import"./useRovingTabIndex-BfSI9um_.js";import"./List-Ci95DXBO.js";import"./useControlled-CxgWzzXT.js";import"./useTimeout-BZcpWzuj.js";import"./createSvgIcon-CMhxM9eb.js";import"./OutlinedInput-CHe0VMeT.js";import"./InputLabel-BgjYo8pc.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BAvSLNfs.js.map
