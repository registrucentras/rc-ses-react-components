import{j as e}from"./iframe-D1J7piOu.js";import{R as n,u as c,a as s}from"./index-DVt_WHYU.js";import{F as m}from"./FieldView-BdV625wM.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-2XFybQck.js";import"./styled-BmYYxeAn.js";import"./useSlot-pngzeqLj.js";import"./mergeSlotProps-CxPYJr0J.js";import"./useReducedMotion-DIgncRyX.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DO0lmKG2.js";import"./Collapse-CBb0PLwa.js";import"./Transition-C3nKxn9i.js";import"./Paper-DmNvMrsC.js";import"./ButtonBase-D60Bsi_D.js";import"./useTimeout-4G0du0zC.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B8cRR2bE.js";import"./CircleFilledIcon-DrbDskXW.js";import"./DotCircleFilledIcon-DP_hIaUr.js";import"./createSvgIcon-C1i8tHEp.js";import"./isMuiElement-BhnIl1Id.js";import"./useRovingTabIndex-Be4qdqNs.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-C9fda4J9.js";import"./CaretLeftIcon-7QDhtb9w.js";import"./CaretLeft.es-tbubXRuO.js";import"./CaretRightBoldIcon-0NBcJw9z.js";import"./Button-5v3BpIL_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CnpgLuED.js";import"./Box-5Xc60Tol.js";import"./index-Bo4t1slL.js";import"./getThemeProps-Co39uY0E.js";import"./ExpandChevronsIcon-CREvU9qa.js";import"./index-Bo-ZRteA.js";import"./index-NItWjrM4.js";import"./useTranslation-lP-iNOoW.js";import"./index-Jq1w8r2X.js";import"./Grid-PgV-c6Ew.js";import"./useThemeProps-cQsVncAt.js";import"./Container-CHI4s4Op.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-pTGD8Tru.js.map
