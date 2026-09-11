import{j as t}from"./iframe-CW-h-lR4.js";import{R as i}from"./index-DFK1tiWQ.js";import{T as a}from"./TextField-DHn1-Nm4.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-QFZvygG7.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-C65dd5Za.js";import"./index-DhWHs75O.js";import"./index-BhXJMVwl.js";import"./getThemeProps-BksAypjP.js";import"./FormControl-cjXIM6QB.js";import"./useFormControl-9YGcBD0s.js";import"./isMuiElement-DQGIe1Uv.js";import"./memoTheme-BKfEdFx3.js";import"./FormLabel-CqEFeUtS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-DfwZeIR_.js";import"./useSlot-BO7i3VQ5.js";import"./mergeSlotProps-B-_5mrGf.js";import"./useReducedMotion-Dh1mS691.js";import"./Select-B572wgFD.js";import"./useSlotProps-DVjjIBdw.js";import"./Popover-CfLsE1wJ.js";import"./mergeSlotProps-DiEmVQqI.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-fDWHhmXv.js";import"./Transition-DO28_7Te.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-C0Dj2W99.js";import"./Modal-UP7xdhFe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CLTqx17H.js";import"./index-CBVUL-KX.js";import"./index-Bd5a7STV.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BI1U9HUf.js";import"./Paper-BApN13o7.js";import"./useRovingTabIndex-B890Glzo.js";import"./List-GFQ-Mn_o.js";import"./useControlled-D2hBJt6o.js";import"./useTimeout-Bq0Rqasq.js";import"./createSvgIcon-2rdIogPM.js";import"./OutlinedInput-GOP0GnsI.js";import"./InputLabel-DSXHZo1l.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-H8qjRODh.js.map
