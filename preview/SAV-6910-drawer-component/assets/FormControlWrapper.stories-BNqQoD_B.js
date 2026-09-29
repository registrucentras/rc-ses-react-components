import{j as t}from"./iframe-CW1nC9EC.js";import{R as i}from"./index-CShKy-Pg.js";import{T as a}from"./TextField-B24eMDVT.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-d--AGXCa.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CsWhOeXs.js";import"./index-DWafusMb.js";import"./index-Bt1orgPy.js";import"./getThemeProps-cGSZ6ReL.js";import"./FormControl-C2bJxlpL.js";import"./useFormControl-DMMzbbH2.js";import"./isMuiElement-DfjQiJQq.js";import"./memoTheme-WC5a--Ga.js";import"./FormLabel-tRaMXc_U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CPsThy-B.js";import"./useSlot-BUhAOODe.js";import"./mergeSlotProps-DUGl7YHD.js";import"./useReducedMotion-B0llTQGe.js";import"./Select-Jars8HJV.js";import"./useSlotProps-gAx6OjAc.js";import"./Popover-C7jXXf_4.js";import"./mergeSlotProps-DZFMppoE.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DbVcCsy2.js";import"./Transition-DNm0mrTd.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-CrrafPwU.js";import"./Modal-ClQeHthE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CGgC5qny.js";import"./index-CyFZh-SE.js";import"./index-CeuLmmrb.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-FrXFtn74.js";import"./Paper-CtAd-XN_.js";import"./useRovingTabIndex-f5gAJlCE.js";import"./List-wJ_dniW5.js";import"./useControlled-DkLHsb0q.js";import"./useTimeout-DGu56jBl.js";import"./createSvgIcon-C25dUdhG.js";import"./OutlinedInput-C4vAmJYu.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-CJKuY1TR.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BNqQoD_B.js.map
