import{j as e}from"./iframe-DLZCP6iO.js";import{R as n,u as c,a as s}from"./index-BFPeQ9mT.js";import{F as m}from"./FieldView-BxGcDeO0.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B4NoaLLX.js";import"./useSlot-C54_Tkze.js";import"./mergeSlotProps-DAbh-wpk.js";import"./useReducedMotion-ChxmCBJX.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-bSwhgPZO.js";import"./Collapse-BpAu0HnP.js";import"./Transition-Cbfn9G0c.js";import"./Paper-iveQ9KeI.js";import"./ButtonBase-CS4BKQG-.js";import"./useTimeout-Bp0NEb_2.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CdgryTOv.js";import"./DotCircleFilledIcon-CKypKgaj.js";import"./createSvgIcon-CxF7t9SL.js";import"./isMuiElement-DmdtL9vO.js";import"./useRovingTabIndex-T05ACygD.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-B_iaYJ68.js";import"./Button-CEaqIJTh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-D-vmsGR4.js";import"./Box-DnaOQCIt.js";import"./index-HQmijVcf.js";import"./getThemeProps-Cs4zLxVN.js";import"./index-DkIepUFp.js";import"./index-BLkwxODt.js";import"./useTranslation-r4JRHfXp.js";import"./index-BuvsHkXm.js";import"./Grid-CpvLZYs2.js";import"./useThemeProps-9cC1MP-G.js";import"./Container-B9gVHu-_.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DcSuivw_.js.map
