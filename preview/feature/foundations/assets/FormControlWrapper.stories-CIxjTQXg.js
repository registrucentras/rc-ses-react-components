import{j as r,r as c}from"./iframe-C5f9Zc7Z.js";import{u as h}from"./index.esm-BZtNsSTL.js";import{R as i}from"./index-BfAdRlSU.js";import{R as u}from"./index-CNTsE57L.js";import{R as f}from"./TextField-DvqNUhPI.js";import{T as n}from"./TextField-oNSncVaQ.js";import{S as p}from"./Stack-n0USQ4NM.js";import{B as b}from"./Button-CpdT9tS7.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B61C4jPN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Dn-vvyCO.js";import"./index-Bexat51j.js";import"./index-IQQzWx4v.js";import"./getThemeProps-Cw8NFX3f.js";import"./FormControl-CK27828S.js";import"./useFormControl-Cxw3h7Uq.js";import"./isMuiElement-BSR4zhUB.js";import"./memoTheme-aFWhReI0.js";import"./FormLabel-BBfBuyLi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CDg-yryp.js";import"./index-CR1U8-fu.js";import"./v4-Dnyct6Ft.js";import"./Autocomplete-CnpEowmp.js";import"./Select-BusCaZhm.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./useSlotProps-BH4z5ryB.js";import"./Popover-D7KVqWPM.js";import"./mergeSlotProps-CBY2sUhi.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./utils-BL043Ngk.js";import"./useTheme-DJRvu-BM.js";import"./getReactElementRef-D27myLnX.js";import"./Modal-eG75g-HH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DZSngBJJ.js";import"./Paper-Dn22t17M.js";import"./useRovingTabIndex-C3X7iciN.js";import"./List-B019eLJ7.js";import"./OutlinedInput-C5zfYCDl.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-B4Netmu2.js";import"./useTimeout-C0xJNvSp.js";import"./createSvgIcon-DJbAJPfa.js";import"./Close-kO8uNmWX.js";import"./Popper-XpW4iyei.js";import"./Chip-05GrKjDf.js";import"./ButtonBase-Dh7CHqXH.js";import"./IconButton-DYL-CqTP.js";import"./CircularProgress-DCfJ8UYi.js";import"./InputLabel-CYzpi1R6.js";import"./useThemeProps-CaOGKB9m.js";const ke={title:"Molecules/FormControlWrapper",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},hideLabel:{control:"boolean"},labelOnTop:{control:"boolean"},required:{control:"boolean"}}};function g(){const[t,d]=c.useState(!1),{control:m}=h({defaultValues:{top:"first",side:"first"}}),l={type:"manual",message:"Klaidos tekstas"};return r.jsxs(p,{spacing:3,sx:{width:"100%",maxWidth:800},children:[r.jsx(b,{onClick:()=>d(e=>!e),children:"Toggle disabled"}),["top","side"].map(e=>r.jsxs(p,{spacing:2,children:[r.jsx(f,{id:`shared-text-${e}`,label:`TextField ${e}`,disabled:t,errors:l,slotProps:{wrapper:{className:`shared-text-${e}`,labelOnTop:e==="top",description:"Pagalbinis tekstas"}}}),r.jsx(u,{id:`shared-select-${e}`,name:e,control:m,label:`Select ${e}`,disabled:t,errors:l,options:[{value:"first",label:"Pirmas pasirinkimas"}],slotProps:{wrapper:{className:`shared-select-${e}`,labelOnTop:e==="top",description:"Pagalbinis tekstas"}}})]},e))]})}const s={tags:["no-snapshot"],render:()=>r.jsx(g,{})},o={args:{label:"Label",description:"This is a helpful description",hideLabel:!1,labelOnTop:!1,required:!1},render:t=>r.jsx(i,{...t,children:r.jsx(n,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0})})},a={args:{label:"Label",hideLabel:!1,labelOnTop:!1,required:!0,errors:{type:"required",message:"This field is required"}},render:t=>r.jsx(i,{...t,children:r.jsx(n,{id:"input",placeholder:"Type text here",size:"small",fullWidth:!0,error:!0})}),parameters:{docs:{description:{story:"Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  render: () => <SharedLabelsPreview />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Ce=["SharedLabels","Default","WithError"];export{o as Default,s as SharedLabels,a as WithError,Ce as __namedExportsOrder,ke as default};
//# sourceMappingURL=FormControlWrapper.stories-CIxjTQXg.js.map
