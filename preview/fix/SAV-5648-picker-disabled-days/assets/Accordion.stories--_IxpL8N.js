import{j as e}from"./iframe-BwPslW8W.js";import{R as n,u as c,a as s}from"./index-CPYDz-td.js";import{F as m}from"./FieldView-DBRezRp0.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CSnFk_W4.js";import"./styled-CUS1Zr32.js";import"./useSlot-DQz6AuOb.js";import"./mergeSlotProps-DVo5DjQd.js";import"./useReducedMotion-CldT2M52.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CBx4JZ8z.js";import"./Collapse-Vhyrw9fl.js";import"./Transition-moHopyEx.js";import"./Paper-BlqWBvqz.js";import"./ButtonBase-BXZjo4di.js";import"./useTimeout-BvcfnN7Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CX4Dtpj8.js";import"./CircleFilledIcon-5T_A1tDs.js";import"./DotCircleFilledIcon-C0hcRePr.js";import"./createSvgIcon-BJRX6FXo.js";import"./isMuiElement-BBJeXbiZ.js";import"./useRovingTabIndex-DNK78r8H.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-B4PiT2rK.js";import"./CaretLeftIcon-BPpyujp4.js";import"./CaretLeft.es-BeKH9IgF.js";import"./CaretRightBoldIcon-8fTwrn3a.js";import"./Button-Cok6ZmSY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-0-EyNdu8.js";import"./Box-DemTRFVz.js";import"./index-pSQ3MRf1.js";import"./getThemeProps-DUxMuqxj.js";import"./ExpandChevronsIcon-CO5l24rQ.js";import"./index-DI0L_GwN.js";import"./index-BcYR7muP.js";import"./useTranslation-CeLQRDEO.js";import"./index-BQhBOMpE.js";import"./Grid-CnFv2do3.js";import"./useThemeProps-un9EzMFf.js";import"./Container-BESYhRb0.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories--_IxpL8N.js.map
