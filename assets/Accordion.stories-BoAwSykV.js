import{j as e}from"./iframe-C_NnAH3O.js";import{R as n,u as c,a as s}from"./index-CoXyTOmd.js";import{F as m}from"./FieldView-Cj4Hhmyc.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-zpaftJ9d.js";import"./useSlot-Dd1Twsf2.js";import"./mergeSlotProps-jCuRpWpY.js";import"./useReducedMotion-BGQeRJwt.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-CY73jyGe.js";import"./Collapse-BFYFHLGf.js";import"./Transition-BqZbke8Y.js";import"./Paper-Dqm7GmzT.js";import"./ButtonBase-E5hlw0IM.js";import"./useTimeout-CZmdQNFb.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BvddXU90.js";import"./DotCircleFilledIcon-DJZ-TjbR.js";import"./createSvgIcon-DCcPQbEF.js";import"./isMuiElement-DZ_Fnqto.js";import"./useRovingTabIndex-B3b773rh.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-Dvcl36Rr.js";import"./Button-CQeYMiD3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CoQOorNH.js";import"./Box-coGxeeMj.js";import"./index-CC_gc_FN.js";import"./getThemeProps-F4eg-9Wj.js";import"./index-CGMiMEuH.js";import"./index-Cth-MnkW.js";import"./useTranslation-XqT5Jr9n.js";import"./index-Ckerqtrv.js";import"./Grid-zlgjgJvS.js";import"./useThemeProps-BfnPn3LL.js";import"./Container-yDC2EUOv.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BoAwSykV.js.map
