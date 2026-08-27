import{j as e}from"./iframe-4itHtakA.js";import{R as n,u as c,a as s}from"./index-CrMo74K0.js";import{F as m}from"./FieldView-Cd7bhV6s.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CfQ1zA65.js";import"./styled-DgEdj7s4.js";import"./useSlot-DPLhoEDb.js";import"./mergeSlotProps-CUcZKY51.js";import"./useReducedMotion-_Yf0GJLM.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BUAFe-wL.js";import"./Collapse-CjFXqpx_.js";import"./Transition-F1nlcH21.js";import"./Paper-Dzysxa52.js";import"./ButtonBase-BcywKLhn.js";import"./useTimeout-CbfqwwjM.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Bz_Y6qlK.js";import"./CircleFilledIcon-BNyNZr5V.js";import"./DotCircleFilledIcon-BdJQ_apX.js";import"./createSvgIcon-Bid2ujLn.js";import"./isMuiElement-BeNsPdVw.js";import"./useRovingTabIndex-DncuCE9x.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-D-pn4Qgf.js";import"./CaretLeftIcon-BA8l41nI.js";import"./CaretLeft.es-BfDJYDhD.js";import"./CaretRightBoldIcon-DopyKyy1.js";import"./Button-D3mT1lcx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DWJuWLra.js";import"./Box-CBDh0cM0.js";import"./index-BazhxRYC.js";import"./getThemeProps-o7LOUnPw.js";import"./ExpandChevronsIcon-CjclMWcR.js";import"./index-BOrlYBkJ.js";import"./index-DACJn7s8.js";import"./useTranslation-B-mkc8DM.js";import"./index-qtMiWci0.js";import"./Grid-DtYZ4x0b.js";import"./useThemeProps-PWSiOkQj.js";import"./Container-Dl6D3Of5.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BEWA5T72.js.map
