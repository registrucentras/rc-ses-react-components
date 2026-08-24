import{j as e}from"./iframe-CzBnpCzZ.js";import{R as n,u as c,a as s}from"./index-DSRhi9-u.js";import{F as m}from"./FieldView-cyW7_AlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CbC9DnsE.js";import"./styled-E5ospQGM.js";import"./useSlot-CO3lY_ZD.js";import"./mergeSlotProps-CQAP196L.js";import"./useReducedMotion-mqmhIx3V.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DFIulGaS.js";import"./Collapse-CRSHQASk.js";import"./Transition-Bz2A-hyL.js";import"./Paper-mmX9vFPP.js";import"./ButtonBase-duWavqVn.js";import"./useTimeout-CaPM7nBf.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BcICBmXA.js";import"./CircleFilledIcon-eFylapSI.js";import"./DotCircleFilledIcon-G61-nfj3.js";import"./createSvgIcon-CrsfC__T.js";import"./isMuiElement-DYIWxzeK.js";import"./useRovingTabIndex-CIqDV5jj.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-Chz13wgl.js";import"./CaretLeftIcon-CtxPLBmp.js";import"./CaretLeft.es-j1Ig7tLp.js";import"./CaretRightBoldIcon-BjbRiLbm.js";import"./Button-BdbVCB-0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-C5rpXsRH.js";import"./Box-C1bUN6mW.js";import"./index-ntVi6ts9.js";import"./getThemeProps-BnwtSr4k.js";import"./ExpandChevronsIcon-DUzdIwcA.js";import"./index-rVwhbznU.js";import"./index-BcnD9Tps.js";import"./useTranslation-DtwMPBfH.js";import"./index-CnCZWoso.js";import"./Grid-BwuwztMs.js";import"./useThemeProps-BTJJc82F.js";import"./Container-Dg30p4pf.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DS3zHi2u.js.map
