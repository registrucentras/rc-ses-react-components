import{j as e}from"./iframe-CxFnmTa9.js";import{R as n,u as c,a as s}from"./index-COKFKLif.js";import{F as m}from"./FieldView-BTG9Bzsu.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DxnCLtx9.js";import"./useSlot-DxKbsYp1.js";import"./mergeSlotProps-Cfhql7K9.js";import"./useReducedMotion-CMqbDeni.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-DAGhwAee.js";import"./Collapse-BLyc1fYl.js";import"./Transition-BHwb5M02.js";import"./Paper-RWucSN_Q.js";import"./ButtonBase-DHRWo2vN.js";import"./useTimeout-DI70m57E.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Dlcu5Pqc.js";import"./DotCircleFilledIcon-RZ4pugqw.js";import"./createSvgIcon-BqRQESq8.js";import"./isMuiElement-BgUCMpUu.js";import"./useRovingTabIndex-CwH9-1Uw.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-JgUA_3N7.js";import"./Button-X2PIutPk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CjncD_Eg.js";import"./Box-CCd5-pZb.js";import"./index-BM7gKbq3.js";import"./getThemeProps-CrEDX5QR.js";import"./index-ChJdNHIx.js";import"./index-CqDXoFg5.js";import"./useTranslation-vg14c-fa.js";import"./index-BJpi2Fk2.js";import"./Grid-DxhchOjj.js";import"./useThemeProps-DbmuMVlM.js";import"./Container-DmRx0296.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DHFjvl3U.js.map
