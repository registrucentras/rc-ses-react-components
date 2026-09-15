import{j as t}from"./iframe-53dMxhzt.js";import{R as i}from"./index-BKUO2XNO.js";import{T as a}from"./TextField-DnDBQtuS.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CQICBkkQ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-urEMo4ix.js";import"./index-g9f4j9SL.js";import"./index-CUMcdaC_.js";import"./getThemeProps-Dihfq7MA.js";import"./FormControl-D7rKaEBH.js";import"./useFormControl-Cvy5-x4f.js";import"./isMuiElement--ivCE6-m.js";import"./memoTheme-KH1_yQA8.js";import"./FormLabel-C1nvSTBH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-DBvt5jRn.js";import"./useSlot-CIJABV9b.js";import"./mergeSlotProps-BxLgALXr.js";import"./useReducedMotion-Drl8qeIC.js";import"./Select-C8B8Hgyp.js";import"./useSlotProps-CZ0BHCeY.js";import"./Popover-CjpREst_.js";import"./mergeSlotProps-74V31LTd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DW4aR2L4.js";import"./Transition-CQH-_I6Z.js";import"./utils-cxgvJEOf.js";import"./getReactElementRef-BBcaCj9q.js";import"./Modal-DmsPKbXd.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-vTMJL6Rj.js";import"./index-Dfu1as-p.js";import"./index-BhX2nANL.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BQhrTZ1Q.js";import"./Paper-DczdsqbF.js";import"./useRovingTabIndex-YleGPovh.js";import"./List-C1u1hcLu.js";import"./useControlled-Bb3jnFRn.js";import"./useTimeout-BSILN_yK.js";import"./createSvgIcon-B94Z1Oyz.js";import"./OutlinedInput-CbhZcSCt.js";import"./InputLabel-0Y_k-16g.js";const ee={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(a,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=FormControlWrapper.stories-BZ_pj8Kx.js.map
