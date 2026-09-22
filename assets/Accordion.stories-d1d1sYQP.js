import{j as e}from"./iframe-8F-1qP3V.js";import{R as n,u as c,a as s}from"./index-kTa9KfVa.js";import{F as m}from"./FieldView-BsPfL7mE.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CDzKC7uG.js";import"./useSlot-fsgtw8Qa.js";import"./mergeSlotProps-DgnSvjsl.js";import"./useReducedMotion-DyCRlWa8.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BPpkgbmb.js";import"./Collapse-6uYXwZAg.js";import"./Transition-ViiNI94I.js";import"./Paper-BGm3rRzE.js";import"./ButtonBase-Cpbeu3kt.js";import"./useTimeout-C_JD2QJM.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Bt9bBA9f.js";import"./CircleFilledIcon-DtnlEa5r.js";import"./DotCircleFilledIcon-D4zdrrYG.js";import"./createSvgIcon-Bz1xeszO.js";import"./isMuiElement-DGzn-oNQ.js";import"./useRovingTabIndex-Bk45mlYV.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DUNvSgJ-.js";import"./CaretLeftIcon-DMs0-1Cj.js";import"./CaretLeft.es-Ck2_g5Sg.js";import"./CaretRightBoldIcon-2PCPsHJ4.js";import"./Button-lIpLr0Iq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CexaGNCy.js";import"./Box-CSIWYHNT.js";import"./index-DVvE6QoQ.js";import"./getThemeProps-CMD_Ly-2.js";import"./ExpandChevronsIcon-CB15SgOl.js";import"./index-CddxNvX5.js";import"./index-BxkR2B1A.js";import"./useTranslation-DohRkd8W.js";import"./index-Q1bzoxxZ.js";import"./Grid-DZ28OOKU.js";import"./useThemeProps-cbgZ9sWW.js";import"./Container-CSSlRN3s.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-d1d1sYQP.js.map
