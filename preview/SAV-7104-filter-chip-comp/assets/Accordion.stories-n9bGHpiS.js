import{j as e}from"./iframe-Cjp_IX4-.js";import{R as n,u as c,a as s}from"./index-B2bP7nKJ.js";import{F as m}from"./FieldView-DVnr6ipi.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-D15reA2A.js";import"./useSlot-C7hxQ6x9.js";import"./mergeSlotProps-2lSdLbI8.js";import"./useReducedMotion-DKfXsk34.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-Cm386vix.js";import"./Collapse-D_MZWOuY.js";import"./Transition-BzfWRqCn.js";import"./Paper-Bgh8-EjC.js";import"./ButtonBase-whkrnnr7.js";import"./useTimeout-BYcu_ljG.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BAKcX-Ce.js";import"./DotCircleFilledIcon-Cap2S2cW.js";import"./createSvgIcon-CcJh0wP_.js";import"./isMuiElement-NJUFshCj.js";import"./useRovingTabIndex-2UvlKjFD.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DCpRJRe6.js";import"./Button-BFxZCPL3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BnX1_miL.js";import"./Box-BcdkQe3w.js";import"./index-CXHivHp2.js";import"./getThemeProps-BSX0jFNT.js";import"./index-BXg-7Yau.js";import"./index-bq8Y2HiM.js";import"./useTranslation-BG6djY5l.js";import"./index-85OFsWrz.js";import"./Grid-ekzQhHHU.js";import"./useThemeProps-bwEehLEH.js";import"./Container-HtA3r3Yl.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-n9bGHpiS.js.map
