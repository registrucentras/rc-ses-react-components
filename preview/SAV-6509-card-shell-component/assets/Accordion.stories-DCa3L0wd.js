import{j as e}from"./iframe-B0a5cRrA.js";import{R as n,u as c,a as s}from"./index-BFemxXXt.js";import{F as m}from"./FieldView-DD7vZcqa.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BpVJj_XA.js";import"./styled-BO4zBib_.js";import"./useSlot-BkBPfirf.js";import"./mergeSlotProps-c0rKe2EB.js";import"./useReducedMotion-BNjk1fMW.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-a1jt0lBR.js";import"./Collapse-CkcmsAhE.js";import"./Transition-OEiMwS_s.js";import"./Paper-DNKCHY6r.js";import"./ButtonBase-MIh0Lih_.js";import"./useTimeout-CnHrVmCV.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Z5sHgR00.js";import"./CircleFilledIcon-DqV82GFT.js";import"./DotCircleFilledIcon-DpaA1snn.js";import"./createSvgIcon-7c7HfPSk.js";import"./isMuiElement-9Nka3bde.js";import"./useRovingTabIndex-BnPTNTRW.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-rlvO7HKt.js";import"./CaretLeftIcon-Bl8dN7E1.js";import"./CaretLeft.es-C8IaLPfV.js";import"./CaretRightBoldIcon-CvwjDSo3.js";import"./Button-qUD34kup.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BPYZz674.js";import"./Box-JwHjOJK2.js";import"./index-DVUliPcy.js";import"./getThemeProps-ytyz6A1P.js";import"./ExpandChevronsIcon-B_72W4Tf.js";import"./index-C1bBRgWe.js";import"./index-C-nvfCv0.js";import"./useTranslation-C-eB6PcU.js";import"./index-D3f_OKmC.js";import"./Grid-BxQCqCri.js";import"./useThemeProps-ByPSYIhG.js";import"./Container-D54Sce_X.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DCa3L0wd.js.map
