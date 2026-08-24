import{j as e}from"./iframe-CqM0kNtH.js";import{R as n,u as c,a as s}from"./index-BEuNZRRh.js";import{F as m}from"./FieldView-BqUEI8wY.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DZJbfodP.js";import"./styled-BYHcej8r.js";import"./useSlot-CSTK_FJP.js";import"./mergeSlotProps-CI-s7Sgg.js";import"./useReducedMotion-DpvjNof6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-tiMX0yVk.js";import"./Collapse-CURl877l.js";import"./Transition-gHSu7nPO.js";import"./Paper-DU9H_c0-.js";import"./ButtonBase-3qX6OyPT.js";import"./useTimeout-Cc8Sxz4z.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-D9P-tb1Q.js";import"./CircleFilledIcon-Buroap3S.js";import"./DotCircleFilledIcon-kZNcM8AS.js";import"./createSvgIcon-6ZjW8ZLv.js";import"./isMuiElement-BO41yisd.js";import"./useRovingTabIndex-h1PCEWsb.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-UvPmT2RP.js";import"./CaretLeftIcon-B3AMVH_G.js";import"./CaretLeft.es-B25Y6Rkd.js";import"./CaretRightBoldIcon-BbEemFtG.js";import"./Button-0KM-S0pe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CeN1eDvi.js";import"./Box-DFIgObqJ.js";import"./index-pKO3cpTj.js";import"./getThemeProps-D5N8Q2mb.js";import"./ExpandChevronsIcon-CDVc2Kgg.js";import"./index-BJCbJIFa.js";import"./index-X6-p1Aln.js";import"./useTranslation-CbQZblmO.js";import"./index-acrWP_0L.js";import"./Grid-BG8s4Qka.js";import"./useThemeProps-DMXgMQP6.js";import"./Container-BWPN4upM.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-CigqR9Jw.js.map
