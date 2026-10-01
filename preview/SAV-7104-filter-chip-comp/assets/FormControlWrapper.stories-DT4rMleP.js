import{j as t}from"./iframe-D8onu3Il.js";import{R as i}from"./index-Byun6PeU.js";import{T as a}from"./TextField-BXIUn4Zi.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B_hQFEfd.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DRn7UXSP.js";import"./index-xg7iecTZ.js";import"./index-DTjs1aja.js";import"./getThemeProps-C7ekJs6a.js";import"./FormControl-CFewWEqA.js";import"./useFormControl-CWbhjlxL.js";import"./isMuiElement-V6Y-Cv9q.js";import"./memoTheme-ByP6l3WP.js";import"./FormLabel-Dvuuuoql.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-TcjVFAeo.js";import"./useSlot-0hqKP31s.js";import"./mergeSlotProps-CtJy0bkm.js";import"./useReducedMotion-S5WBUSCK.js";import"./Select-CdBYANkI.js";import"./useSlotProps-DesJWv7r.js";import"./Popover-FVP2enZn.js";import"./mergeSlotProps-B_7rh42Q.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DJgyrfCf.js";import"./Transition-JR6nE1GZ.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DPbtKkgH.js";import"./Modal-BvoeSCEY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BTvuXMZg.js";import"./index-BOcdYEd3.js";import"./index-BSZUC3-4.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-D2GOqBGs.js";import"./Paper-xBmAxO1y.js";import"./useRovingTabIndex-DISI3nzs.js";import"./List-BhOfih5C.js";import"./OutlinedInput-B_ij8Bw7.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-BkQrdjrD.js";import"./useTimeout-Bu-Sqgn5.js";import"./createSvgIcon-DBuEwFKf.js";import"./InputLabel-BgM0Sw11.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-DT4rMleP.js.map
