import{j as t}from"./iframe-9i3zOe15.js";import{R as i}from"./index-ByLXtAcn.js";import{T as a}from"./TextField-BvTCRCJR.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-By9EthZ3.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CJ_O_2FM.js";import"./index-Beyit_TJ.js";import"./index-CBjGaFng.js";import"./getThemeProps-Cxw-WB6g.js";import"./FormControl-Cg_39o_Y.js";import"./useFormControl-XkAcBFIu.js";import"./isMuiElement-BkN6bxXg.js";import"./memoTheme-CK40nyy-.js";import"./styled-H9qSqxDp.js";import"./FormLabel-B5my7qD3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-sA7b7V-V.js";import"./useSlot-BamECmBW.js";import"./mergeSlotProps-BunaTRiY.js";import"./useReducedMotion-hEJ8tpyY.js";import"./Select-Bk9EpnQT.js";import"./useSlotProps-D3qW5Uvl.js";import"./Popover-B1ofAUxr.js";import"./mergeSlotProps-BfzcVZsb.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B6mw11c9.js";import"./Transition-B90lwJb3.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DW0X9N2f.js";import"./Modal-CMBbAaeV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-cYBoXdOZ.js";import"./index-dapnvP-e.js";import"./index-CUUZBapP.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-B4dphOMV.js";import"./Paper-ZhtoCPvf.js";import"./useRovingTabIndex-VoHt1S7e.js";import"./List-CdVm7VYl.js";import"./useControlled-D3TiPTPH.js";import"./useTimeout-C1B6BPiE.js";import"./createSvgIcon-3JPue9kG.js";import"./OutlinedInput-CYcwrp_n.js";import"./InputLabel-DFO1_ZJw.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-CgXOf1UE.js.map
