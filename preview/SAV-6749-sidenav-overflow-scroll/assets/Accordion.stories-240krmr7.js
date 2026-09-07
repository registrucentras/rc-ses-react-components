import{j as e}from"./iframe-BdIC5JIw.js";import{R as n,u as c,a as s}from"./index-Dykxwajh.js";import{F as m}from"./FieldView-DB4lh9no.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DeIom0d1.js";import"./styled-BMLyWrvt.js";import"./useSlot-CqtniRLn.js";import"./mergeSlotProps-DYy-47iY.js";import"./useReducedMotion-D5fdMDJ-.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DqWQHykN.js";import"./Collapse-CKdTfjrR.js";import"./Transition-BU1TLRmF.js";import"./Paper-CAFh-EjE.js";import"./ButtonBase-CxuycdSQ.js";import"./useTimeout-CHjk5pg7.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-D07htbws.js";import"./CircleFilledIcon-MFOo7lpD.js";import"./DotCircleFilledIcon-Cqv_WVwQ.js";import"./createSvgIcon-D6ARCQYX.js";import"./isMuiElement--ac9dWHz.js";import"./useRovingTabIndex-YcSgv9Yo.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BLExkjx7.js";import"./CaretLeftIcon-CKBUY6Kg.js";import"./CaretLeft.es-BkSxzI4a.js";import"./CaretRightBoldIcon-DPUb2pBf.js";import"./Button-B4y_3rSG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CHbci8NP.js";import"./Box-CrHJNcO2.js";import"./index-Dj-BmdEi.js";import"./getThemeProps-a7HTrIfw.js";import"./ExpandChevronsIcon-C7PktGlv.js";import"./index-B5MSJram.js";import"./index-Di0rj9CR.js";import"./useTranslation-BjZKU32-.js";import"./index-B64AvGqR.js";import"./Grid-BNpwi7P9.js";import"./useThemeProps-CceLCOeA.js";import"./Container-DM4sdJVd.js";const to={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-240krmr7.js.map
