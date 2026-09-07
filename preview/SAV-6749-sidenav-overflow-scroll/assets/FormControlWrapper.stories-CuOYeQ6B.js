import{j as t}from"./iframe-BdIC5JIw.js";import{R as i}from"./index-BIW7q5Uf.js";import{T as a}from"./TextField-Drld6JbO.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CrHJNcO2.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BjZKU32-.js";import"./index-B64AvGqR.js";import"./index-Dj-BmdEi.js";import"./getThemeProps-a7HTrIfw.js";import"./FormControl-KC6fLi1F.js";import"./useFormControl-Dyf6p2B6.js";import"./isMuiElement--ac9dWHz.js";import"./memoTheme-DeIom0d1.js";import"./styled-BMLyWrvt.js";import"./FormLabel-BbeIO0l7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CP6T5MiH.js";import"./useSlot-CqtniRLn.js";import"./mergeSlotProps-DYy-47iY.js";import"./useReducedMotion-D5fdMDJ-.js";import"./Select-BVzKnyZN.js";import"./useSlotProps-CrOYXnRE.js";import"./Popover-W2OUPk1r.js";import"./mergeSlotProps-C__nQMsD.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BjbqVtB2.js";import"./Transition-BU1TLRmF.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-CjGNeEzL.js";import"./Modal-B9OeF0ko.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DOX1Tkd-.js";import"./index-CD4hPCec.js";import"./index-BXkUJwH0.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BvvfbkRf.js";import"./Paper-CAFh-EjE.js";import"./useRovingTabIndex-YcSgv9Yo.js";import"./List-CbAyt3nR.js";import"./useControlled-DqWQHykN.js";import"./useTimeout-CHjk5pg7.js";import"./createSvgIcon-D6ARCQYX.js";import"./OutlinedInput-ClKExv3u.js";import"./InputLabel-BE2szUfw.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-CuOYeQ6B.js.map
