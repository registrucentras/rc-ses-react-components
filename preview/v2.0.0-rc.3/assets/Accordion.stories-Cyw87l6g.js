import{j as e}from"./iframe-DFr7-kBt.js";import{R as n,u as c,a as s}from"./index-CbwbF0_N.js";import{F as m}from"./FieldView-CG6xyyYb.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CYLlGCL0.js";import"./styled-LpAaHYDj.js";import"./useSlot-BZ9gey8t.js";import"./mergeSlotProps-CAyQVs75.js";import"./useReducedMotion-DEB_0ZrJ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BFWem-9L.js";import"./Collapse-DGZFiAih.js";import"./Transition-BhDqb2nV.js";import"./Paper-N5AmWjwx.js";import"./ButtonBase-BR8KIHUL.js";import"./useTimeout-C97wSRuf.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BR2pS6D7.js";import"./CircleFilledIcon-bzc2js4J.js";import"./DotCircleFilledIcon-B2pJ5oC-.js";import"./createSvgIcon-BTtv7Jcm.js";import"./isMuiElement-DHc78XPg.js";import"./useRovingTabIndex-DVrV0sY8.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BtGpUaAQ.js";import"./CaretLeftIcon-CRyEdeTI.js";import"./CaretLeft.es-3ttyY3OI.js";import"./CaretRightBoldIcon-B0hpCNdB.js";import"./Button-CkcBLVZk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CWAzyHKA.js";import"./Box-iOShl6QB.js";import"./index-Dw28MbBD.js";import"./getThemeProps-C3cmgeoQ.js";import"./ExpandChevronsIcon-B68nHrIz.js";import"./index-CziRbnO8.js";import"./index-CAeqhVwG.js";import"./useTranslation-C8V_LLGy.js";import"./index-DYb1boq2.js";import"./Grid-1Qe3-Vxl.js";import"./useThemeProps-D2ZTvupf.js";import"./Container-tnLei1z_.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-Cyw87l6g.js.map
