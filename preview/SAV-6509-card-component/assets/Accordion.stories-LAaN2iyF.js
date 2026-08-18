import{j as e}from"./iframe-C13r2uq4.js";import{R as n,u as c,a as s}from"./index-D0KWB2aF.js";import{F as m}from"./FieldView-DUDxy_Sb.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BL9_zouD.js";import"./styled-C5Cpl9Hg.js";import"./useSlot-D1DO7XZG.js";import"./mergeSlotProps-Cetg_dIF.js";import"./useReducedMotion-CPJAJ76I.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-UlJJ76QZ.js";import"./Collapse-DSCsA26o.js";import"./Transition-DoEdyHDp.js";import"./Paper-8A5KFI8B.js";import"./ButtonBase-BITqhGut.js";import"./useTimeout-BAzONqqq.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B7SIsKWR.js";import"./CircleFilledIcon-o0r9RiUw.js";import"./DotCircleFilledIcon-CcO_QMJp.js";import"./createSvgIcon-DQ8HIZ8H.js";import"./isMuiElement-CxAMsiCV.js";import"./useRovingTabIndex-CWMijPyd.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-D6IU1ckI.js";import"./CaretLeftIcon-Dgd8h1ur.js";import"./CaretLeft.es-D5QwuKzO.js";import"./CaretRightBoldIcon-KQPCsxb-.js";import"./Button-sFTKQuYG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DYnVxxe9.js";import"./Box-C8b6XI0k.js";import"./index-C7jmlDg2.js";import"./getThemeProps-D4cg4RAv.js";import"./ExpandChevronsIcon-LWiBPte7.js";import"./index-jE4YWDu_.js";import"./index-u8G8aCY_.js";import"./useTranslation-D1nEMT37.js";import"./index-hTPor64m.js";import"./Grid-_vyoUB8z.js";import"./useThemeProps-C6PIrR1E.js";import"./Container-1AOwSgxW.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-LAaN2iyF.js.map
