import{j as e}from"./iframe-CjFGEJ81.js";import{R as n,u as c,a as s}from"./index-Dx_hnpC-.js";import{F as m}from"./FieldView-D2yNCByH.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DFx0ml1c.js";import"./useSlot-BwsQXOGo.js";import"./mergeSlotProps-OLCsfSrB.js";import"./useReducedMotion-CWb8_6d6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DDkb7FJx.js";import"./Collapse-BHB7mR1u.js";import"./Transition-CoHa3Tgg.js";import"./Paper-CEnJXVd5.js";import"./ButtonBase-BGPEe8VH.js";import"./useTimeout-CdIpb-RI.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Bv662XeW.js";import"./CircleFilledIcon-DmtMB5Ma.js";import"./DotCircleFilledIcon-CNwUkK3B.js";import"./createSvgIcon-C3Akv2PH.js";import"./isMuiElement-9PScNQuI.js";import"./useRovingTabIndex-C8CHEHDW.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-h3VZ4hZp.js";import"./CaretLeftIcon-Dri5uQZU.js";import"./CaretLeft.es-SgfS4e-m.js";import"./CaretRightBoldIcon-B8HJta-x.js";import"./Button-BzdBkSVk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CsIoyIUN.js";import"./Box-DMvscq7a.js";import"./index-1QXoUmnr.js";import"./getThemeProps-CfVypnpI.js";import"./ExpandChevronsIcon-CvvJGdIB.js";import"./index-BHNw9Qrx.js";import"./index-DlekAIJB.js";import"./useTranslation-e2fLiw4Y.js";import"./index-ogy7vhUw.js";import"./Grid-BdQQf7fZ.js";import"./useThemeProps-DQD1Zk_d.js";import"./Container-DYaD7Htu.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BzjKOf4s.js.map
