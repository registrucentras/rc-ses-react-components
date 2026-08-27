import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as i}from"./index-xTxOkCQZ.js";import{T as d}from"./TextField-7D162PAK.js";import"./index-yBjzXJbu.js";import"./i18n-Ce2IhVqf.js";import"./useTranslation-5b1lrk9S.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-DAb-ZS_Y.js";import"./createTheme-cc7C8_Rz.js";import"./palette-ClGEQNft.js";import"./CaretDownIcon-Bi_rhDjR.js";import"./IconBase.es-CLqjCiWW.js";import"./WarningFillIcon-Dc8mHKpO.js";import"./CloseIcon-C-u9hzi-.js";import"./InfoFillIcon-82wzIcgI.js";import"./WarningCircleIcon-pM1srtuV.js";import"./colorManipulator-C0jAUUq8.js";import"./Box-Dsbm8PjI.js";import"./generateUtilityClasses-w1ShjUKg.js";import"./useTheme-BNEP3wvB.js";import"./useMediaQuery-Ci9tg4hk.js";import"./getThemeProps-anNa02Cr.js";import"./DefaultPropsProvider-DYP4WNeP.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./FormControl-CRcy307k.js";import"./styled-CQgu8tRE.js";import"./defaultTheme-SlYxhCq1.js";import"./useFormControl-xtefzQVn.js";import"./isMuiElement-BPC6wUcC.js";import"./composeClasses-fLhin0tj.js";import"./FormLabel-CbzaKCQw.js";import"./formControlState-Dq1zat_P.js";import"./FormHelperText-C6wwUF79.js";import"./useId-vJrmKHVH.js";import"./OutlinedInput-OlC-4fJh.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-BFM0LYBX.js";import"./Select-SaFHYfH4.js";import"./index-SEmL6I_r.js";import"./useSlotProps-BbwbZ62_.js";import"./resolveComponentProps-D3cSQ9RO.js";import"./Popover-DqxNoDzg.js";import"./Grow-C9XPs6SB.js";import"./useTheme-WIcaZj6B.js";import"./utils-Cm1mxZmw.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTimeout-DgQ6HlaJ.js";import"./Modal-DWKvciyg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-gBdJDSTA.js";import"./Fade-Dm2Rdl3z.js";import"./Paper-Df_biMBR.js";import"./useControlled-DKQkVSHg.js";import"./createSvgIcon-Cj1taIyO.js";const ge={title:"components/form/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}},e={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:o=>t.jsx(i,{...o,children:t.jsx(d,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},r={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:o=>t.jsx(i,{...o,children:t.jsx(d,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};var a,s,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,n,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const Te=["Default","WithError"];export{e as Default,r as WithError,Te as __namedExportsOrder,ge as default};
//# sourceMappingURL=FormControlWrapper.stories-8W1APhms.js.map
