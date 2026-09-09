import{j as t}from"./iframe-CENckQZf.js";import{R as i}from"./index-DOZ54DLR.js";import{T as a}from"./TextField-DDXoWAZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-bPJk0iff.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CHfF30OX.js";import"./index-C3151_T8.js";import"./index-Bh5LF4yA.js";import"./getThemeProps-u1OGT0GL.js";import"./FormControl-dge06m9Y.js";import"./useFormControl-5rj7pYY5.js";import"./isMuiElement-C5JV2-BW.js";import"./memoTheme-DuGMjUk-.js";import"./FormLabel-DxXYxkhy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CmDmdrBb.js";import"./useSlot-C1HhZ5nJ.js";import"./mergeSlotProps-DpW5LE0-.js";import"./useReducedMotion-DHyYPphk.js";import"./Select-CO1YLxW2.js";import"./useSlotProps-_Ee7A4Hi.js";import"./Popover-qzZDYivd.js";import"./mergeSlotProps-CFMjXAJg.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BIFGtsfY.js";import"./Transition-Du9SiglK.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-tsQrQASR.js";import"./Modal-CC8cGFPm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CsiVW1-D.js";import"./index-BzZIx3ol.js";import"./index-CKla6tS1.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-CBg5zaDp.js";import"./Paper-DVIpeCUm.js";import"./useRovingTabIndex-DdDv_c1w.js";import"./List-DNSJqTTI.js";import"./useControlled-DHaLmav_.js";import"./useTimeout-BgjeWFP0.js";import"./createSvgIcon-lcJLfaPz.js";import"./OutlinedInput-D7xrGcDJ.js";import"./InputLabel-C3MfhaWr.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BJ-naQdA.js.map
