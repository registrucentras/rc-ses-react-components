import{j as t}from"./iframe-CvdsVNq9.js";import{R as i}from"./index-DjxSFQVK.js";import{T as a}from"./TextField-Bt5v7Y4R.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DQwK3gZ0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DIRr1Pd9.js";import"./index-Q1xHUF-M.js";import"./index-B_W2GlLq.js";import"./getThemeProps-tRce7t8w.js";import"./FormControl-jh6YX1Gw.js";import"./useFormControl-DKm5lwMz.js";import"./isMuiElement-b_C275FK.js";import"./memoTheme--kAmOKvp.js";import"./FormLabel-6qOPQ5lx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BbAal2DP.js";import"./useSlot-DCxkw9sd.js";import"./mergeSlotProps-D8F8XP8I.js";import"./useReducedMotion-Dm_7FdVW.js";import"./Select-ty0tqt9J.js";import"./useSlotProps--wZEJq-_.js";import"./Popover-DKA8kYl9.js";import"./mergeSlotProps-0yAcVhzw.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BzMpiElQ.js";import"./Transition-CdzMT_AO.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DYqDoL4o.js";import"./Modal-DBwDh2Iy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-jJ8Pn5c8.js";import"./index-kUHPVVVU.js";import"./index-D4VlVibs.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DpKgP7MR.js";import"./Paper-fcEdRBdZ.js";import"./useRovingTabIndex-T8hc1tXf.js";import"./List-i9P_nAdZ.js";import"./useControlled-BGmp-9YK.js";import"./useTimeout-Bkz083f3.js";import"./createSvgIcon-DVqaudWb.js";import"./OutlinedInput-C7tuGa1u.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-BnIXvlk-.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BtsbJk4p.js.map
