import{j as e}from"./iframe-DEwrbrvD.js";import{R as n,u as c,a as s}from"./index-BjGY2Ea4.js";import{F as m}from"./FieldView-CK5pY1Wa.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DbaPA1El.js";import"./styled-BW4KM9Aa.js";import"./useSlot-xM4xXIxO.js";import"./mergeSlotProps-BYLa1DQO.js";import"./useReducedMotion-Dah1E74K.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DqjhZN7Y.js";import"./Collapse-Dg530hXh.js";import"./Transition-D9MnA48u.js";import"./Paper-CJUMGq0O.js";import"./ButtonBase-EKSXrX1t.js";import"./useTimeout-4iFrUsfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CY8tgkwu.js";import"./CircleFilledIcon-DQicT4tf.js";import"./DotCircleFilledIcon-B4URK_-y.js";import"./createSvgIcon-B4ybSFrF.js";import"./isMuiElement-Bh2tt8QV.js";import"./useRovingTabIndex-DikSUTLl.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CRiSK3oE.js";import"./CaretLeftIcon-OxtYWCz7.js";import"./CaretLeft.es-CY-xQRCi.js";import"./CaretRightBoldIcon-BwUtxc8r.js";import"./Button-B4c_IgBt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CUue3zbD.js";import"./Box-gYI2czhc.js";import"./index-CPKWHu1X.js";import"./getThemeProps-NjVA3jNG.js";import"./ExpandChevronsIcon-DWiPgM-q.js";import"./index-B52v3YFq.js";import"./index-DB-Tp_zI.js";import"./useTranslation-C8aYK3Na.js";import"./index-DR7-7uGN.js";import"./Grid-B0cBR4Hn.js";import"./useThemeProps-CSGci79c.js";import"./Container-D61wMoW1.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-G651FE54.js.map
