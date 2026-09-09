import{j as e}from"./iframe-Ooowi1hp.js";import{R as n,u as c,a as s}from"./index-D8H0LxH3.js";import{F as m}from"./FieldView-DwrUtvmH.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BMYD4lBk.js";import"./useSlot-nE-oSZ0r.js";import"./mergeSlotProps-C0aPw3Mi.js";import"./useReducedMotion-TJp5-EWY.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-ChFMn5qC.js";import"./Collapse-BDNbOLO5.js";import"./Transition-BnyGZ2sF.js";import"./Paper-bpwoE9tm.js";import"./ButtonBase-kD0o8bKc.js";import"./useTimeout-B368JUcF.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B0lOtelo.js";import"./CircleFilledIcon-DdBGWw_o.js";import"./DotCircleFilledIcon-PFVzsEhA.js";import"./createSvgIcon-B7qz8k6l.js";import"./isMuiElement-CQMGhR6J.js";import"./useRovingTabIndex-D4A9x4lK.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CKsxKotz.js";import"./CaretLeftIcon-CsyeOrLp.js";import"./CaretLeft.es-Cdk3UDQD.js";import"./CaretRightBoldIcon-Jz5AoSuS.js";import"./Button-BeUqHRET.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Dwi1Gc9J.js";import"./Box-D2TrkABV.js";import"./index-ZP87n-gW.js";import"./getThemeProps-CJQ_L7vF.js";import"./ExpandChevronsIcon-Bb77dem7.js";import"./index-C-bXvypU.js";import"./index-Dl4t5ELG.js";import"./useTranslation-CU372kPQ.js";import"./index-m8oJFxud.js";import"./Grid-iBIkqj7S.js";import"./useThemeProps-CwlJSw4g.js";import"./Container-BbU6PrAx.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DDDAKDM0.js.map
