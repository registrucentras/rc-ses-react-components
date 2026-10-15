import{j as t}from"./iframe-DIOS2Xs-.js";import{R as i}from"./index-CTmmBu7D.js";import{T as a}from"./TextField-CHVhu4Vp.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CnyjR_Rz.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-ChOueL7C.js";import"./index-DWbova_M.js";import"./index-k50jqr8f.js";import"./getThemeProps-BlN99lCY.js";import"./FormControl-DD7S9VVr.js";import"./useFormControl-DokglSUh.js";import"./isMuiElement-D3eNu0YM.js";import"./memoTheme-cL0Lxgrt.js";import"./FormLabel-Ce-7hJUN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BiZxy_H_.js";import"./useSlot-DUQLMGYY.js";import"./mergeSlotProps-CBo5lHvY.js";import"./useReducedMotion-CyR_aof-.js";import"./Select-BfuwErlY.js";import"./useSlotProps-i9JX0uYr.js";import"./Popover-CJDM4shA.js";import"./mergeSlotProps-BazCmfnz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-2rqZset-.js";import"./Transition-W3gddqAt.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-BgVojp1m.js";import"./Modal-Db_Ks-wp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dn6c_QHR.js";import"./index-jc7pSBHY.js";import"./index-CvTqdmFZ.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-D8Bv6sWa.js";import"./Paper-BDsRSRWD.js";import"./useRovingTabIndex-KG8aOeg9.js";import"./List-Bexu3DvR.js";import"./OutlinedInput-DvdS1ac3.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-D2yXpyaz.js";import"./useTimeout-CbcTbdO9.js";import"./createSvgIcon-CtJXxj_L.js";import"./InputLabel-CCAHwV90.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-Clxac0Rs.js.map
