import{j as e}from"./iframe-DH4qN6RW.js";import{R as n,u as c,a as s}from"./index-DV1aDYFB.js";import{F as m}from"./FieldView-DCkn8BrA.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CK_PyRMI.js";import"./useSlot-NZAvEDkN.js";import"./mergeSlotProps-K5nwa9TY.js";import"./useReducedMotion-C91mrZ9N.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-B9VpZwp9.js";import"./Collapse-DGLF4EeD.js";import"./Transition-Dokv7qa9.js";import"./Paper-BpCrmnas.js";import"./ButtonBase-C-9qJJHs.js";import"./useTimeout-CBuPVYG_.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BQJZDFKc.js";import"./DotCircleFilledIcon-VhbbSLNX.js";import"./createSvgIcon-dzckMoQm.js";import"./isMuiElement-D1Z74QmW.js";import"./useRovingTabIndex-Dr5WoVGM.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-46BpCump.js";import"./Button-DWSpZymV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-OheINwk7.js";import"./Box-UQ-nMKC9.js";import"./index-bqMyNNjM.js";import"./getThemeProps-B1dtPntZ.js";import"./index-_Cy8IfGt.js";import"./index-CbIAFF1C.js";import"./useTranslation-BJ43atvg.js";import"./index-CfH1OXqv.js";import"./Grid-BRn-0kfO.js";import"./useThemeProps-DEDtm07s.js";import"./Container-FxDzkdSE.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DYOJatAx.js.map
