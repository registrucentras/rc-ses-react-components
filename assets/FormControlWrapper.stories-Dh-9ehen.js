import{j as t}from"./iframe-CK086RzA.js";import{R as i}from"./index-DPk-9zkA.js";import{T as a}from"./TextField-cy-QWZFk.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-COcNGsME.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Cx_jOgT7.js";import"./index-BRxwbWXG.js";import"./index-BWyttAlu.js";import"./getThemeProps-Cx_CYi5z.js";import"./FormControl-P6wd8uXu.js";import"./useFormControl-DjS3S_3v.js";import"./isMuiElement-DNORpw2M.js";import"./memoTheme-B9yv6Iln.js";import"./FormLabel-BGXhHkg-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-Blcjzx28.js";import"./useSlot-FnP_z458.js";import"./mergeSlotProps-DTY1dVaV.js";import"./useReducedMotion-vAHoQU6O.js";import"./Select-CURymust.js";import"./useSlotProps-BLgeNxIC.js";import"./Popover-DbtNhuAj.js";import"./mergeSlotProps-BqbmtPIX.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Ce_YWcS_.js";import"./Transition-BYCA2Tgx.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DbGrK1GN.js";import"./Modal-Chzas_ir.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-tc_RS_27.js";import"./index-QYaUBDdX.js";import"./index-BLVUrWBm.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BtULIPP5.js";import"./Paper-cKasQ_1Y.js";import"./useRovingTabIndex-CcWqApAc.js";import"./List-PA-0UeQ3.js";import"./useControlled-Dlmbrjgj.js";import"./useTimeout-D-kiCzpT.js";import"./createSvgIcon-BKXxhAZ1.js";import"./OutlinedInput-KaJEaJ4K.js";import"./InputLabel-0HTD4gFq.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Dh-9ehen.js.map
