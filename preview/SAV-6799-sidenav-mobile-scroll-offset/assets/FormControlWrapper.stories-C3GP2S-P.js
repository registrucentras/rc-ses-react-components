import{j as t}from"./iframe-Dmy5OsZp.js";import{R as i}from"./index-D7I5Rrhc.js";import{T as a}from"./TextField-0_DuEo3U.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-Dg8R0yTf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BonW3LF0.js";import"./index-DomZp9LF.js";import"./index-Bx60OW6S.js";import"./getThemeProps-C45_k9EL.js";import"./FormControl-BymNYUIS.js";import"./useFormControl-BWWyBiez.js";import"./isMuiElement-CuMGnHOC.js";import"./memoTheme-DmCaGGeP.js";import"./FormLabel-CLKQKyMb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CTmumni0.js";import"./useSlot-Bg8xemmP.js";import"./mergeSlotProps-CXnRZAlP.js";import"./useReducedMotion-BELgimr9.js";import"./Select-BmUe1St6.js";import"./useSlotProps-DpHMQVIA.js";import"./Popover-D2MT1_iK.js";import"./mergeSlotProps-BqKLZfY-.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DRcY6i6y.js";import"./Transition-ga13M-K2.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-Doygx8Jd.js";import"./Modal-B8gzawQ7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DLVBHSsm.js";import"./index-Ck7LFusg.js";import"./index-JVyJqX6A.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-CCACFDJf.js";import"./Paper-6Zp7Q31B.js";import"./useRovingTabIndex-tfyciPoU.js";import"./List-CjfgYq7I.js";import"./useControlled-QqQwDceE.js";import"./useTimeout-CGhjfAMx.js";import"./createSvgIcon-4cHXy5Ra.js";import"./OutlinedInput-C1RLUF3L.js";import"./InputLabel-BqCGvMyh.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-C3GP2S-P.js.map
