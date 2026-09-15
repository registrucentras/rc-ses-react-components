import{j as t}from"./iframe-DmAJgr6L.js";import{R as i}from"./index-iJwradN8.js";import{T as a}from"./TextField-CqMO1IQB.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CGoCt1Qp.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-BU0aV3gs.js";import"./index-Bb58hqyp.js";import"./index-9R0s7Yy7.js";import"./getThemeProps-BNJl-ERH.js";import"./FormControl-DDieaJmB.js";import"./useFormControl-lqmZh8ip.js";import"./isMuiElement-CAxCabuM.js";import"./memoTheme-DMo-wQMj.js";import"./FormLabel-DWkOaBG8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-BB6iBoA4.js";import"./useSlot-BnOHDpy3.js";import"./mergeSlotProps-BsHJzxNw.js";import"./useReducedMotion-D2uNiKbM.js";import"./Select-f4p1cUsc.js";import"./useSlotProps-CDJJD7IT.js";import"./Popover-D20nafUU.js";import"./mergeSlotProps-BHteHkvv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DANamxmD.js";import"./Transition-C3q9S2Kz.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-B2BLRCNW.js";import"./Modal-CdErHP3I.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-KSoMUVdt.js";import"./index-CL_rdWzl.js";import"./index-C9tNxrEi.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-_AlWc6c0.js";import"./Paper-C1Xd44jR.js";import"./useRovingTabIndex-DqRvgWIU.js";import"./List-DtMzSA8u.js";import"./useControlled-Bjr2D1NM.js";import"./useTimeout-qjNguLme.js";import"./createSvgIcon-Yp_CxVPD.js";import"./OutlinedInput-DVlF2HdO.js";import"./InputLabel-DC0uPzpo.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-NbX0d0jm.js.map
