import{j as e}from"./iframe-BKE99rMd.js";import{R as n,u as c,a as s}from"./index-CXHriF2q.js";import{F as m}from"./FieldView-LeLwbttT.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CbGhTmIX.js";import"./styled-Dzzr0uTF.js";import"./useSlot-B4rnxt3W.js";import"./mergeSlotProps-B_4B5fKf.js";import"./useReducedMotion-Cys5vbHo.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-TiMBBr88.js";import"./Collapse-BeO65C5l.js";import"./Transition-C1tB99Po.js";import"./Paper-C-U8nldl.js";import"./ButtonBase-KJMN54Xg.js";import"./useTimeout-RXID5Ik9.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BxL0DrL3.js";import"./CircleFilledIcon-C9a4djwh.js";import"./DotCircleFilledIcon-Ck2khaEi.js";import"./createSvgIcon-Gslqq66x.js";import"./isMuiElement-BksAJO6H.js";import"./useRovingTabIndex-B4-4z7Iu.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CtpWahwv.js";import"./CaretLeftIcon-CCaNqN0H.js";import"./CaretLeft.es-DWrcFDzg.js";import"./CaretRightBoldIcon-B4dbpqW8.js";import"./Button-DJl8QoHU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-De_jGrqs.js";import"./Box-CY-P5Dpm.js";import"./index-CX6FelY2.js";import"./getThemeProps-O_Ofa9og.js";import"./ExpandChevronsIcon-Cct8M3CC.js";import"./index-BTKciI9l.js";import"./index-Bi4Q9zYU.js";import"./useTranslation-3tv-1h0A.js";import"./index-BYzmxz9M.js";import"./Grid-BS9GqmJ4.js";import"./useThemeProps-CZ60oZHX.js";import"./Container-BGejOn8Y.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const eo=["Main"];export{t as Main,eo as __namedExportsOrder,to as default};
//# sourceMappingURL=Accordion.stories-CMWMySaI.js.map
