import{j as t}from"./iframe-BxN2aOIa.js";import{R as i}from"./index-D42veCk1.js";import{T as a}from"./TextField-C5vZstbZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BDzBaYrG.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-WvGZYAOX.js";import"./index-DOzLr19r.js";import"./index-N2iF4w5a.js";import"./getThemeProps-CY5Ak8Sk.js";import"./FormControl-umNFrdyY.js";import"./useFormControl-DBSd2ajr.js";import"./isMuiElement-DItnQ27I.js";import"./memoTheme-BVBNHufc.js";import"./styled-BsEOJ7Su.js";import"./FormLabel-sTfVfthu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Bw62m1rE.js";import"./useSlot-q86-9NE5.js";import"./mergeSlotProps-B4h1H-dp.js";import"./useReducedMotion-CrmomAaN.js";import"./Select-zO7KoLTE.js";import"./useSlotProps-hZFxvWnD.js";import"./Popover-DMcfE2hL.js";import"./mergeSlotProps-Easkxq16.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-KVgHaeRg.js";import"./Transition-Bh6brsxE.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-D71mnSmd.js";import"./Modal-CJLH2Xd3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-0o5JSKJk.js";import"./index-BSAxfDgu.js";import"./index-Cv8DTom9.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Cr8GDFEt.js";import"./Paper-fxMzV1Mw.js";import"./useRovingTabIndex-B7h1txQr.js";import"./List-DM59Yw03.js";import"./useControlled-afzfsliS.js";import"./useTimeout-Dg4iDwNI.js";import"./createSvgIcon-qqYVnU0S.js";import"./OutlinedInput-CxAvOfmB.js";import"./InputLabel-BgiMUre4.js";const re={title:"components/form/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-tN_yGPpd.js.map
