import{j as t}from"./iframe-BkkYpBD0.js";import{R as i}from"./index-C433KHof.js";import{T as a}from"./TextField-CrrH9IXK.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B6YNYajT.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CK6dFzOf.js";import"./index-DJ0VZX_0.js";import"./index-UxqRa_nw.js";import"./getThemeProps-CN3PDUsJ.js";import"./FormControl-DC0idzfo.js";import"./useFormControl-DzMXs96Z.js";import"./isMuiElement-3kk6wyWp.js";import"./memoTheme-C6MVMLFE.js";import"./FormLabel-9A3x8ZMD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-DmWMv0AM.js";import"./useSlot-DxRDek2m.js";import"./mergeSlotProps-B3ergg2j.js";import"./useReducedMotion-G16E0poK.js";import"./Select-CLtiUjKw.js";import"./useSlotProps-BQJqM0BD.js";import"./Popover-BX8SxfJr.js";import"./mergeSlotProps-4NyHAid-.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BmVZm_9D.js";import"./Transition-D3DS5bT6.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-B2Y8TZbr.js";import"./Modal-ETyMk3hL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Difl0E8n.js";import"./index-LAOP3NlX.js";import"./index-Bx5ggSEO.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-PRgDjQuY.js";import"./Paper-D6ybWWg3.js";import"./useRovingTabIndex-X6XEz1T9.js";import"./List-BSqfmB-I.js";import"./useControlled-Bvnlc0ko.js";import"./useTimeout-C_O9fHa0.js";import"./createSvgIcon-WKjnuApF.js";import"./OutlinedInput-Br0vpNo3.js";import"./InputLabel-BiDOMqSy.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Yn5E7QhV.js.map
