import{j as t}from"./iframe-D0jLDCyy.js";import{R as i}from"./index-Cr3aAIzV.js";import{T as a}from"./TextField-aYpXs7Q6.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DLTNzQRD.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-57T-zMgF.js";import"./index-KTkfoED2.js";import"./index-N8zdu1dh.js";import"./getThemeProps-DHMzSV2A.js";import"./FormControl-Bh8CON2U.js";import"./useFormControl-C6MKAmSx.js";import"./isMuiElement-CSycxeR8.js";import"./memoTheme-oRxAc6ym.js";import"./FormLabel-BNSOC6TL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Coe-dxSm.js";import"./useSlot-C-6CIQUZ.js";import"./mergeSlotProps-CHZ8RNr1.js";import"./useReducedMotion-C3SGip4Q.js";import"./Select-D9gZgqyo.js";import"./useSlotProps-yXWj7I3d.js";import"./Popover-C1AuCjOB.js";import"./mergeSlotProps-WohUH2mN.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CA6PC_-h.js";import"./Transition-DJ8-p2TX.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-CyExSDcd.js";import"./Modal-DnkjWrnR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B3ANSV7T.js";import"./index-KAXcF9KS.js";import"./index-CvbQf5zp.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-OGxc6z_Z.js";import"./Paper-BWthU5P3.js";import"./useRovingTabIndex-Dm27_fDL.js";import"./List-BU67Ecyf.js";import"./OutlinedInput-DiNUhqOk.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-BAEmdUmm.js";import"./useTimeout-CDcRADDE.js";import"./createSvgIcon-DwALGO4p.js";import"./InputLabel-DfPF6XF_.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-B7_9HI1q.js.map
