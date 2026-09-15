import{j as e}from"./iframe-SUDf0pfh.js";import{R as n,u as c,a as s}from"./index-DaEOGU56.js";import{F as m}from"./FieldView-D-YcWbNk.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B2w2pmGx.js";import"./useSlot-BcHO_DW4.js";import"./mergeSlotProps-BH6x0T2M.js";import"./useReducedMotion-C-CLhidq.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CrXLB48T.js";import"./Collapse-CaykMWrn.js";import"./Transition-BCXvKXmN.js";import"./Paper-DRh0kzsr.js";import"./ButtonBase-dWsXfNEj.js";import"./useTimeout-Cv6yp324.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DVMG1av-.js";import"./CircleFilledIcon-DvoTqP-p.js";import"./DotCircleFilledIcon-crgxrY63.js";import"./createSvgIcon-BtOTbZE6.js";import"./isMuiElement-BkWU0MlN.js";import"./useRovingTabIndex-Do3kGd40.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DOf8_EEc.js";import"./CaretLeftIcon-CRyOH7kd.js";import"./CaretLeft.es-DGjCG6oy.js";import"./CaretRightBoldIcon-7Hnl1nPj.js";import"./Button-BuI9TwTx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Duh4AKNM.js";import"./Box-C4UNQdoE.js";import"./index-NpZ1h6xs.js";import"./getThemeProps-DygoEgat.js";import"./ExpandChevronsIcon-DSzQV2_y.js";import"./index-BNtr_iZg.js";import"./index-BvcJrMoH.js";import"./useTranslation-CJDYDvRS.js";import"./index-BvLRHYUn.js";import"./Grid-CRZrsO_G.js";import"./useThemeProps-C0lSVaWI.js";import"./Container-5hD80HyA.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const to=["Main"];export{t as Main,to as __namedExportsOrder,ro as default};
//# sourceMappingURL=Accordion.stories-DRrfvF0M.js.map
