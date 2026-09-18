import{j as e}from"./iframe-C--2Qp2X.js";import{R as n,u as c,a as s}from"./index-KuJpXeZa.js";import{F as m}from"./FieldView-BBLw7l9t.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CW9I2BsA.js";import"./useSlot-49pSelQI.js";import"./mergeSlotProps-NJatU-kK.js";import"./useReducedMotion-tZYExsTl.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DNtm-Nt1.js";import"./Collapse-BN7eMqRP.js";import"./Transition-DI4lKCF5.js";import"./Paper-CHPMOkXk.js";import"./ButtonBase-C76MDgVV.js";import"./useTimeout-CHxIJTjf.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-sE-57eOk.js";import"./CircleFilledIcon-BYx6FNPE.js";import"./DotCircleFilledIcon-CXwz-INS.js";import"./createSvgIcon-DNnr0kMq.js";import"./isMuiElement-DtkWQt7s.js";import"./useRovingTabIndex-CS0hfLqd.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DXugO-p_.js";import"./CaretLeftIcon-DtIYI6RD.js";import"./CaretLeft.es-C_10HHtb.js";import"./CaretRightBoldIcon-CX0NAejk.js";import"./Button-DDdAyZix.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-oRpgeBw_.js";import"./Box-B3fhZflc.js";import"./index-WsMdPy7x.js";import"./getThemeProps-ByoHHWaa.js";import"./ExpandChevronsIcon-C6ZQPiPM.js";import"./index-e-BPGM8w.js";import"./index-FFXGUcHW.js";import"./useTranslation-CFUE4C6U.js";import"./index-BfDjRW8d.js";import"./Grid-7hRsQx_C.js";import"./useThemeProps-ozKYHKTs.js";import"./Container-BJMcLppt.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const to=["Main"];export{t as Main,to as __namedExportsOrder,ro as default};
//# sourceMappingURL=Accordion.stories-V2WEXkj_.js.map
