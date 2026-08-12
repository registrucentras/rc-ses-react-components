import{j as e}from"./iframe-D3fOdZ35.js";import{R as n,u as c,a as s}from"./index-B-inBoDp.js";import{F as m}from"./FieldView-DUDvic3W.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-9gTyD0zP.js";import"./styled-DWg5Hs8k.js";import"./useSlot-CMS7T6Hr.js";import"./mergeSlotProps-CpPkqB12.js";import"./useReducedMotion-nB1n_tnM.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BCCVHrgF.js";import"./Collapse-B79gz9af.js";import"./Transition-BFO0VIVX.js";import"./Paper-DVxjbtH4.js";import"./ButtonBase-D2mBlO7C.js";import"./useTimeout-DqyKXmLo.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CStby-Bw.js";import"./CircleFilledIcon-XYJOb-_V.js";import"./DotCircleFilledIcon-B-Di-Lo6.js";import"./createSvgIcon-2MkT5p1b.js";import"./isMuiElement-CbpTzoaH.js";import"./useRovingTabIndex-CaCpgxsi.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CxyOi9mn.js";import"./CaretLeftIcon-DqlOR40z.js";import"./CaretLeft.es-BNJLRNDB.js";import"./CaretRightBoldIcon-DpUMczJ0.js";import"./Button-CpH0-JA8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-B6in5ncN.js";import"./Box-S8hTbfLp.js";import"./index-eN9eySox.js";import"./getThemeProps-Cialh9rJ.js";import"./ExpandChevronsIcon-D-4c9mLh.js";import"./index-Dm4Mgffv.js";import"./index-jGjEOIsV.js";import"./useTranslation-CirGUWIv.js";import"./index-DFGSHzH5.js";import"./Grid-fx0enVRa.js";import"./useThemeProps-DPs8nzyE.js";import"./Container-Dmh2SR8b.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DpCQPBCo.js.map
