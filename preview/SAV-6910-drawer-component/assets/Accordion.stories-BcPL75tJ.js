import{j as e}from"./iframe-DB1EF-x_.js";import{R as n,u as c,a as s}from"./index-BmxBGbVC.js";import{F as m}from"./FieldView-ChkY4y2M.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-VhH0Ke8H.js";import"./useSlot-CdVtEC6U.js";import"./mergeSlotProps-D1VQHPIF.js";import"./useReducedMotion-C4RkVMNI.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-D8_om1HX.js";import"./Collapse-CSqCBnZJ.js";import"./Transition-jXxGhKeR.js";import"./Paper-C5KcvUpZ.js";import"./ButtonBase-Bt3PjvxV.js";import"./useTimeout-Bp9Z3NaC.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CIoSANkG.js";import"./DotCircleFilledIcon-B4EIUmnw.js";import"./createSvgIcon-D74Ga_RM.js";import"./isMuiElement-BJmv-8vH.js";import"./useRovingTabIndex-BJ8EBiC5.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-Dq2XRKNJ.js";import"./Button-BuIKW3by.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CBcVl4sl.js";import"./Box-D4Jm7AAj.js";import"./index-CjKLscX-.js";import"./getThemeProps-__gKXzXy.js";import"./index-BEec_9vn.js";import"./index-BDBp3RTl.js";import"./useTranslation-DSJywBrb.js";import"./index-DWsPbBEP.js";import"./Grid-DrVog_ES.js";import"./useThemeProps-KgNX7ntt.js";import"./Container-CIf2Sbfn.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
  import RcSesAccordion from '@/components/common/Accordion'
  import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'

  const MyComponent = () => (
  const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: true,
        expanded: false,
        state: 'active',
        title: "Accordion title",
      },
    },
  });

    <RcSesAccordion controller={accordionController} disabled="${r}">
       This is content
    </RcSesAccordion>
  );`},t={render:o=>e.jsx(a,{...o}),args:{disabled:!1},parameters:{docs:{source:{type:"dynamic",transform:(o,r)=>p(r.args)}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AccordionDemo {...args} />,
  args: {
    disabled: false
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (code: string, storyContext: StoryContext) => codeBlock(storyContext.args)
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const X=["Main"];export{t as Main,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Accordion.stories-BcPL75tJ.js.map
