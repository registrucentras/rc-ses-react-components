import{j as t}from"./iframe-8F-1qP3V.js";import{R as i}from"./index-hTjQmnc-.js";import{T as a}from"./TextField-BqsrhpIz.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CSIWYHNT.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DohRkd8W.js";import"./index-Q1bzoxxZ.js";import"./index-DVvE6QoQ.js";import"./getThemeProps-CMD_Ly-2.js";import"./FormControl-Ddo27r4k.js";import"./useFormControl-D9R6R5nt.js";import"./isMuiElement-DGzn-oNQ.js";import"./memoTheme-CDzKC7uG.js";import"./FormLabel-CNkgcH1M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-DhB3cD-9.js";import"./useSlot-fsgtw8Qa.js";import"./mergeSlotProps-DgnSvjsl.js";import"./useReducedMotion-DyCRlWa8.js";import"./Select-D1HvEod8.js";import"./useSlotProps-BkwI5yjK.js";import"./Popover-BZiDzbpI.js";import"./mergeSlotProps-Bzcc4-Cv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-De58LuzL.js";import"./Transition-ViiNI94I.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-Cx6SBD9l.js";import"./Modal-BX_J_47x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BX9Z2EOZ.js";import"./index-BkNDfxJb.js";import"./index-VxiAsdnk.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade--zdVajLR.js";import"./Paper-BGm3rRzE.js";import"./useRovingTabIndex-Bk45mlYV.js";import"./List-CagwOEEk.js";import"./useControlled-BPpkgbmb.js";import"./useTimeout-C_JD2QJM.js";import"./createSvgIcon-Bz1xeszO.js";import"./OutlinedInput-B1yj_W72.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-yCgtD7kN.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-CPN0IYlh.js.map
