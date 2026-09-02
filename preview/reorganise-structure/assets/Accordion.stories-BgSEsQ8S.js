import{j as e}from"./iframe-9i3zOe15.js";import{R as n,u as c,a as s}from"./index-7OKpMcIZ.js";import{F as m}from"./FieldView-C-ub9IZT.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CK40nyy-.js";import"./styled-H9qSqxDp.js";import"./useSlot-BamECmBW.js";import"./mergeSlotProps-BunaTRiY.js";import"./useReducedMotion-hEJ8tpyY.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-D3TiPTPH.js";import"./Collapse-CtmogRwR.js";import"./Transition-B90lwJb3.js";import"./Paper-ZhtoCPvf.js";import"./ButtonBase-BG5MV2ud.js";import"./useTimeout-C1B6BPiE.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BpnncYiH.js";import"./CircleFilledIcon-D5wVBQSs.js";import"./DotCircleFilledIcon-BuAVIJFm.js";import"./createSvgIcon-3JPue9kG.js";import"./isMuiElement-BkN6bxXg.js";import"./useRovingTabIndex-VoHt1S7e.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-djNrF37_.js";import"./CaretLeftIcon-C80fMYQv.js";import"./CaretLeft.es-DdYwPiB0.js";import"./CaretRightBoldIcon-D7yfhGY6.js";import"./Button-zQpoYWox.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BhDT9ItQ.js";import"./Box-By9EthZ3.js";import"./index-CBjGaFng.js";import"./getThemeProps-Cxw-WB6g.js";import"./ExpandChevronsIcon-DMcq6Y5D.js";import"./index-D07waPta.js";import"./index-BkRoZ043.js";import"./useTranslation-CJ_O_2FM.js";import"./index-Beyit_TJ.js";import"./Grid-BhzMu68Q.js";import"./useThemeProps-CVM5RI7L.js";import"./Container-B6-uV_4p.js";const to={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BgSEsQ8S.js.map
