import{j as e}from"./iframe-CDc5tlXL.js";import{R as n,u as c,a as s}from"./index-D__0V4NZ.js";import{F as m}from"./FieldView-B0dH6lPg.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DMsyr4pX.js";import"./styled-DCBzl_Uz.js";import"./useSlot-Dt5M4lwq.js";import"./mergeSlotProps-BZhOP4mI.js";import"./useReducedMotion-C1TE5Xmo.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CzYodwTZ.js";import"./Collapse-ffRDUoP6.js";import"./Transition-Bgw2VyRd.js";import"./Paper-DpzUUUdF.js";import"./ButtonBase-BQloCDHI.js";import"./useTimeout-2ekXw_1X.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-jhYH8G-B.js";import"./CircleFilledIcon-vwI14X4o.js";import"./DotCircleFilledIcon-Bm1vvqz7.js";import"./createSvgIcon-G59Oy1ku.js";import"./isMuiElement-Cnq1RAJH.js";import"./useRovingTabIndex-D2LTuwoh.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-aGEw2IpM.js";import"./CaretLeftIcon-BmeV39-c.js";import"./CaretLeft.es-DX-HcN_e.js";import"./CaretRightBoldIcon-BUyOlWct.js";import"./Button-zVCLClob.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CPZ4yQwq.js";import"./Box-BYAnJ6bV.js";import"./index-ClfTdE4D.js";import"./getThemeProps-DvFdQtVg.js";import"./ExpandChevronsIcon-SmUl1ppi.js";import"./index-DNjlpGis.js";import"./index-DRYmo45s.js";import"./useTranslation-BCbzYpi_.js";import"./index-BrC7kUr4.js";import"./Grid-D521uic4.js";import"./useThemeProps-qnay-ofv.js";import"./Container-2VZ4KDd8.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-CJYwwFPJ.js.map
