import{j as t}from"./iframe-BZfsYcrl.js";import{R as i}from"./index-WjOJa4Ur.js";import{T as a}from"./TextField-dk8ohGrM.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-uaHXLWWn.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-6y1uyLW-.js";import"./index-C5XcXpqZ.js";import"./index-CkkxylJC.js";import"./getThemeProps-c4SFdySs.js";import"./FormControl-DnvnDIXl.js";import"./useFormControl-CcJOLgWp.js";import"./isMuiElement-DTzlJsRN.js";import"./memoTheme-BL7bpbHs.js";import"./styled-BO7G47yj.js";import"./FormLabel-SdjkMI1b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CWR6OID-.js";import"./useSlot-o-fNBmTz.js";import"./mergeSlotProps-CBY1an78.js";import"./useReducedMotion-IetLgFVd.js";import"./Select-Cvn42IPu.js";import"./useSlotProps-DlPMI78v.js";import"./Popover-CK-oB8RK.js";import"./mergeSlotProps-Ca6GGq1H.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BvK7sMyO.js";import"./Transition-l-vlNc2v.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-DSLWCqeO.js";import"./Modal-slsQjg-B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D-wCF1HB.js";import"./index-rCnh9KzN.js";import"./index-B8eYhDVe.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-CjcUo-YQ.js";import"./Paper-CAXoqR0r.js";import"./useRovingTabIndex-HZUEvnho.js";import"./List-Be-PLFT-.js";import"./useControlled-CWYA69dj.js";import"./useTimeout-uoJ0oiLL.js";import"./createSvgIcon-Dfp4SmtZ.js";import"./OutlinedInput-SvsorhhK.js";import"./InputLabel-Cqv1-B9m.js";const re={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-TBLfhqhU.js.map
