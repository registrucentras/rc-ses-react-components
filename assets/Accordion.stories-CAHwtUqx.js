import{j as e}from"./iframe-CFOSKsKV.js";import{R as n,u as c,a as s}from"./index-b0aaL8mD.js";import{F as m}from"./FieldView-CfVNlCKI.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DLCVBTsn.js";import"./useSlot-CkEQy1t2.js";import"./mergeSlotProps-Dhqtg-Xf.js";import"./useReducedMotion-JJA_AOnj.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-NdbuKUB-.js";import"./Collapse-BGi_PU6X.js";import"./Transition-CnTrZDfM.js";import"./Paper-DO1t76Pb.js";import"./ButtonBase-DitXGn9G.js";import"./useTimeout-2I4hfrP6.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DwVxmpjb.js";import"./CircleFilledIcon-KabHUHeC.js";import"./DotCircleFilledIcon-DxYKUbbe.js";import"./createSvgIcon-RdYeASNo.js";import"./isMuiElement-_JmeSMpX.js";import"./useRovingTabIndex-ClBGXDCx.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-ZA0lXtCU.js";import"./CaretLeftIcon-CQe_wSKC.js";import"./CaretLeft.es-pjU_65Xw.js";import"./CaretRightBoldIcon-9I1-IL7H.js";import"./Button-B46L7KHh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Bto0Zv32.js";import"./Box-DcIq7zYG.js";import"./index-BYTNuqJS.js";import"./getThemeProps-CqC5edNP.js";import"./ExpandChevronsIcon-D5z8M8qs.js";import"./index-uJeHPCQ6.js";import"./index-DT8StaPB.js";import"./useTranslation-DvSGbzvs.js";import"./index-C4UOkcZq.js";import"./Grid-DnMGCa6f.js";import"./useThemeProps-BUON2eh3.js";import"./Container-qVNRObxt.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-CAHwtUqx.js.map
