import{j as e}from"./iframe-DIOS2Xs-.js";import{R as n,u as c,a as s}from"./index-TFXykhtK.js";import{F as m}from"./FieldView-KbjT3brY.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-cL0Lxgrt.js";import"./useSlot-DUQLMGYY.js";import"./mergeSlotProps-CBo5lHvY.js";import"./useReducedMotion-CyR_aof-.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-D2yXpyaz.js";import"./Collapse-BoXmrG-c.js";import"./Transition-W3gddqAt.js";import"./Paper-BDsRSRWD.js";import"./ButtonBase-D5J5_y1K.js";import"./useTimeout-CbcTbdO9.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CZ3XOKEL.js";import"./DotCircleFilledIcon-CAN6HRH5.js";import"./createSvgIcon-CtJXxj_L.js";import"./isMuiElement-D3eNu0YM.js";import"./useRovingTabIndex-KG8aOeg9.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-3LuUlmu-.js";import"./Button-BsPW2YNk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-tutnJqdG.js";import"./Box-CnyjR_Rz.js";import"./index-k50jqr8f.js";import"./getThemeProps-BlN99lCY.js";import"./index-C9XqkG5q.js";import"./index-D0_E7u8a.js";import"./useTranslation-ChOueL7C.js";import"./index-DWbova_M.js";import"./Grid-D4uGfs3X.js";import"./useThemeProps-bSF8pjEF.js";import"./Container-CchJTY_B.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-Cv7WoOyJ.js.map
