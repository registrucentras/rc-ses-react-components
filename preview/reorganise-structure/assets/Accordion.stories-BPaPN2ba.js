import{j as e}from"./iframe-D8XfDVau.js";import{R as n,u as c,a as s}from"./index-DTHxtODS.js";import{F as m}from"./FieldView-C7U5AwQz.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BWkKHYer.js";import"./styled-CAQoJkW_.js";import"./useSlot-DScEVbLP.js";import"./mergeSlotProps-ClX-yLlC.js";import"./useReducedMotion-6iJMK1Zp.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BV6X3azl.js";import"./Collapse-CP_ZD819.js";import"./Transition-DWaOF2D8.js";import"./Paper-BNx6QOVi.js";import"./ButtonBase-DxJjZtua.js";import"./useTimeout-D08Iq3s4.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CcQ3OS7C.js";import"./CircleFilledIcon-Bm6RoJYO.js";import"./DotCircleFilledIcon-Ds9jQv_V.js";import"./createSvgIcon-DgpSHggq.js";import"./isMuiElement-DobG8foc.js";import"./useRovingTabIndex-An_EQJTU.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-Cpl1Php4.js";import"./CaretLeftIcon-Wsyle1A5.js";import"./CaretLeft.es-B4uw_EnS.js";import"./CaretRightBoldIcon-BzJ3vSwq.js";import"./Button-Ci3bRa3Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-D2so7SOO.js";import"./Box-CZMuzs8o.js";import"./index-CUmbJqH-.js";import"./getThemeProps-Bfef8K0E.js";import"./ExpandChevronsIcon-CG2ZYJtV.js";import"./index-BffwS75y.js";import"./index-KOz3fce0.js";import"./useTranslation-CT8kmkZR.js";import"./index-CFxMxkRl.js";import"./Grid-DIf-HfrQ.js";import"./useThemeProps--SfYDZ0J.js";import"./Container-t2xYg_zx.js";const to={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BPaPN2ba.js.map
