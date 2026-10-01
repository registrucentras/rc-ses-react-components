import{j as e}from"./iframe-D0jLDCyy.js";import{R as n,u as c,a as s}from"./index-DLDNjwXr.js";import{F as m}from"./FieldView-1kVNQyC2.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-oRxAc6ym.js";import"./useSlot-C-6CIQUZ.js";import"./mergeSlotProps-CHZ8RNr1.js";import"./useReducedMotion-C3SGip4Q.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BAEmdUmm.js";import"./Collapse-DNsRcgXN.js";import"./Transition-DJ8-p2TX.js";import"./Paper-BWthU5P3.js";import"./ButtonBase-6ciF6z-q.js";import"./useTimeout-CDcRADDE.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-xfQ8NiHy.js";import"./DotCircleFilledIcon-D6S1qmqk.js";import"./createSvgIcon-DwALGO4p.js";import"./isMuiElement-CSycxeR8.js";import"./useRovingTabIndex-Dm27_fDL.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-EdNw0h4m.js";import"./Button-DCM95yy5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DnIeUfOm.js";import"./Box-DLTNzQRD.js";import"./index-N8zdu1dh.js";import"./getThemeProps-DHMzSV2A.js";import"./index-DhQrJKte.js";import"./index-X-FRkxQ9.js";import"./useTranslation-57T-zMgF.js";import"./index-KTkfoED2.js";import"./Grid-Bk19VOpE.js";import"./useThemeProps-CZUSC78-.js";import"./Container-BcgpCv3Z.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-D-8f9Dr9.js.map
