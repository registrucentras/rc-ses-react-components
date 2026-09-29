import{j as e}from"./iframe-CW1nC9EC.js";import{R as n,u as c,a as s}from"./index-DBmM7M0V.js";import{F as m}from"./FieldView-Df2dfUax.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-WC5a--Ga.js";import"./useSlot-BUhAOODe.js";import"./mergeSlotProps-DUGl7YHD.js";import"./useReducedMotion-B0llTQGe.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-DkLHsb0q.js";import"./Collapse-D_wmUn4K.js";import"./Transition-DNm0mrTd.js";import"./Paper-CtAd-XN_.js";import"./ButtonBase-DgwO5xi1.js";import"./useTimeout-DGu56jBl.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-dczzXS9A.js";import"./DotCircleFilledIcon-Cfn-tH4M.js";import"./createSvgIcon-C25dUdhG.js";import"./isMuiElement-DfjQiJQq.js";import"./useRovingTabIndex-f5gAJlCE.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-C12XnmiQ.js";import"./Button-DovR1CpN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CQzR5JRh.js";import"./Box-d--AGXCa.js";import"./index-Bt1orgPy.js";import"./getThemeProps-cGSZ6ReL.js";import"./index-DGGFRjDT.js";import"./index-8dN7tO9f.js";import"./useTranslation-CsWhOeXs.js";import"./index-DWafusMb.js";import"./Grid-_8CdAHSH.js";import"./useThemeProps-Dm3KHC-b.js";import"./Container-Ceig4S3q.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const X=["Main"];export{t as Main,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Accordion.stories-deJb0fWe.js.map
