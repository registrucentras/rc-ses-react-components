import{j as e}from"./iframe-CWj8oZOZ.js";import{R as i,u as c,a as s}from"./index-DLnPZbTG.js";import{F as m}from"./FieldView-DJ2yHtHS.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-rzYRwBep.js";import"./useSlot-CB-gizTQ.js";import"./mergeSlotProps-Bkc5NF6i.js";import"./useReducedMotion-CPcVPcQI.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-CBD9UJuw.js";import"./Collapse-TQ7sUsxp.js";import"./Transition-6wjDhKPT.js";import"./Paper-BqPJ_771.js";import"./ButtonBase-DNQcAHDH.js";import"./useTimeout-BiQanTB9.js";import"./index-EJLA3fV_.js";import"./DotCircleFilledIcon-D-Rxt74w.js";import"./createSvgIcon-Bv-KOEm-.js";import"./isMuiElement-Dhmu_ULU.js";import"./useRovingTabIndex-w3Nact0Q.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BLL7J1Hl.js";import"./Button-BbYEBjTl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-o7WJEzHT.js";import"./Box-DrHRxVUy.js";import"./index-DK_AopQY.js";import"./getThemeProps-CVYSyeY6.js";import"./index-DLMeF1Qm.js";import"./index-D7JPb8lP.js";import"./useTranslation-CoaK2LVL.js";import"./index-Ban65MQl.js";import"./Grid-BffAMcs6.js";import"./useThemeProps-HF0yvPmk.js";import"./Container-Bc_LY58_.js";const Q={title:"Organisms/Accordion",component:i,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,n=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:n,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(i,{id:"form",controller:n,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const U=["Main"];export{t as Main,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Accordion.stories-JhyzUfxm.js.map
