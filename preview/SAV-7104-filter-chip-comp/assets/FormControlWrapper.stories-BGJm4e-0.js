import{j as t}from"./iframe-N0sjxTWe.js";import{R as i}from"./index-BJnFMECI.js";import{T as a}from"./TextField-mFGriUbs.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BJ4bJd8I.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DosvPdoQ.js";import"./index-CHJLtLDu.js";import"./index-oPKfwai7.js";import"./getThemeProps-CBtNjmVo.js";import"./FormControl-CWSm5j-Y.js";import"./useFormControl-BSyBOkCM.js";import"./isMuiElement-B-Ikhj-N.js";import"./memoTheme-LpOBnG9S.js";import"./FormLabel-D4cKl5F3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-DHAPHAuU.js";import"./useSlot-LtUwORjM.js";import"./mergeSlotProps-D-WjszGF.js";import"./useReducedMotion-CGoDzkj_.js";import"./Select-DkBdNrMZ.js";import"./useSlotProps-CvBbBjYV.js";import"./Popover-CCpgq4QA.js";import"./mergeSlotProps-CW8dXC47.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-ptxwPfw6.js";import"./Transition-Bj7LlLEo.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DtIlf6Ax.js";import"./Modal-DPIjIEtW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BNbS77Zx.js";import"./index-DjsKLyrw.js";import"./index-BDiGXiYg.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-B5goAigo.js";import"./Paper-BVZzkreY.js";import"./useRovingTabIndex-CytWUXyl.js";import"./List-CwUUFdNk.js";import"./OutlinedInput-CSr_YTYw.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-BILiV_6a.js";import"./useTimeout-_E1FaURO.js";import"./createSvgIcon-DLCnYxX8.js";import"./InputLabel-BlyORO-i.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BGJm4e-0.js.map
