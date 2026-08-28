import{j as e}from"./iframe-BZ0rEFpA.js";import{R as n,u as c,a as s}from"./index-DuNEsHn0.js";import{F as m}from"./FieldView-Bv_54cLf.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BcRt8z4c.js";import"./styled-D09lcIxe.js";import"./useSlot-CCYGnOby.js";import"./mergeSlotProps-DgdDDrzk.js";import"./useReducedMotion-B35PtJBu.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Cfcz5xOQ.js";import"./Collapse-ByuJ_DSn.js";import"./Transition-6UNKhS_3.js";import"./Paper-DKwKLgK_.js";import"./ButtonBase-BG6CzAt0.js";import"./useTimeout-DgTJde3A.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DHD4FBOc.js";import"./CircleFilledIcon-P4rDtO_P.js";import"./DotCircleFilledIcon-DFYNNgGS.js";import"./createSvgIcon-DYL2AorN.js";import"./isMuiElement-C2sqC0sW.js";import"./useRovingTabIndex-Bqq4F5zW.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BFvVj0h1.js";import"./CaretLeftIcon-BeU9j9r9.js";import"./CaretLeft.es-DJ3unQFI.js";import"./CaretRightBoldIcon-B8EB1p2I.js";import"./Button-CM-agp5e.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CWE1umCJ.js";import"./Box-sexgdGyS.js";import"./index-DZ1Ss5-U.js";import"./getThemeProps-yOwtWQXa.js";import"./ExpandChevronsIcon-Cj5DYNry.js";import"./index-ceZ66SlJ.js";import"./index-DwPRL8V3.js";import"./useTranslation-BtOK83HT.js";import"./index-B8rQppoK.js";import"./Grid-C6ChbE21.js";import"./useThemeProps-A5robEux.js";import"./Container-CuxHHegT.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-Bd69o5IF.js.map
