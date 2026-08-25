import{j as e}from"./iframe-DKIA2rOT.js";import{R as n,u as c,a as s}from"./index-De7fE0Zg.js";import{F as m}from"./FieldView-Cjmi5C6W.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CJhLlGp2.js";import"./styled-D2Kg73AK.js";import"./useSlot-UVVr_XRt.js";import"./mergeSlotProps-B276xKU6.js";import"./useReducedMotion-D3pzCHL1.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BGOXL5Tu.js";import"./Collapse-a1rqvTiQ.js";import"./Transition-CWzsbyhP.js";import"./Paper-BUNYPuTN.js";import"./ButtonBase-BLZeRCIM.js";import"./useTimeout-FpvsUoOx.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Dhj1jJlC.js";import"./CircleFilledIcon-tJCmvphp.js";import"./DotCircleFilledIcon-c5Y31plN.js";import"./createSvgIcon-rtH60cjJ.js";import"./isMuiElement-D7VD9JyV.js";import"./useRovingTabIndex-B00L50nk.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-D9tkWrao.js";import"./CaretLeftIcon-b8bgxD_I.js";import"./CaretLeft.es-BYSDdtDx.js";import"./CaretRightBoldIcon-BgyJEsSp.js";import"./Button-HOzZfRBB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Dm8EDMQr.js";import"./Box-CdkPCbnp.js";import"./index-BkzgOx3l.js";import"./getThemeProps-D8sQR2PQ.js";import"./ExpandChevronsIcon-CCzpmEBb.js";import"./index-DcH3HdUN.js";import"./index-DbN1GPcL.js";import"./useTranslation-r072frdu.js";import"./index-Izin7uBw.js";import"./Grid-CQrcAuAd.js";import"./useThemeProps-CzOpF3UF.js";import"./Container-BCThmkSO.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const eo=["Main"];export{t as Main,eo as __namedExportsOrder,to as default};
//# sourceMappingURL=Accordion.stories-DINwJlxB.js.map
