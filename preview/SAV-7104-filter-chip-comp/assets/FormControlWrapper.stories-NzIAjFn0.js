import{j as t}from"./iframe-oOAmD4TE.js";import{R as i}from"./index-Cs3doCps.js";import{T as a}from"./TextField-LrQq_emk.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D3q7z-6H.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-C9H_ZzmQ.js";import"./index-Crc7zUyM.js";import"./index-BL-L9z4B.js";import"./getThemeProps-Cw3bEYjS.js";import"./FormControl-BqV14zHt.js";import"./useFormControl-BnXigP2V.js";import"./isMuiElement-DdmivqqS.js";import"./memoTheme-C0p7kxQG.js";import"./FormLabel-DvwETIet.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CaepoUeZ.js";import"./useSlot-BN0PjiqS.js";import"./mergeSlotProps-B6sCsr3A.js";import"./useReducedMotion-D241Nrf-.js";import"./Select-CA4zQ0lx.js";import"./useSlotProps-CwKImsEH.js";import"./Popover-CNXe71QZ.js";import"./mergeSlotProps-Kvglrc6D.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BbDX_83X.js";import"./Transition-D0oBGu9f.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-UKdJzmrZ.js";import"./Modal-DfdAA8ft.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DgLVqqVR.js";import"./index-e8_CAC18.js";import"./index-DA8WeXgp.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-OfPeQTas.js";import"./Paper-L7RkEDKt.js";import"./useRovingTabIndex-Dy6zaBQo.js";import"./List-B0YAkxGl.js";import"./OutlinedInput-CuHvmdNs.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-Cherjg2E.js";import"./useTimeout-rly75plW.js";import"./createSvgIcon-HazpAT27.js";import"./InputLabel-BtZIFeOA.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-NzIAjFn0.js.map
