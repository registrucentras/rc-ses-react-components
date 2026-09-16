import{j as e}from"./iframe-BL6TfiF8.js";import{R as n,u as c,a as s}from"./index-BB0Vg-Fs.js";import{F as m}from"./FieldView-krgFnafl.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-ilhfXMHW.js";import"./useSlot-ChGHh0xv.js";import"./mergeSlotProps-CMBTMKO6.js";import"./useReducedMotion-BwTtuJ8i.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-C5ebXLLz.js";import"./Collapse-VSiz0PcA.js";import"./Transition-Dm_cEf0X.js";import"./Paper-BjAlaxju.js";import"./ButtonBase-LL0hUdks.js";import"./useTimeout-Dl239K_i.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BeudNd7o.js";import"./CircleFilledIcon-C3gMxo73.js";import"./DotCircleFilledIcon-CbmU5TkT.js";import"./createSvgIcon-CDugASXJ.js";import"./isMuiElement-kbBX_Z8Z.js";import"./useRovingTabIndex-CwzN7tD6.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DAAn5MWQ.js";import"./CaretLeftIcon-0v_Z8923.js";import"./CaretLeft.es-Bd95G5Wu.js";import"./CaretRightBoldIcon-B1MhxKGg.js";import"./Button-DLe4jBsU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-ColG-00L.js";import"./Box-Be2iuQIH.js";import"./index-t3NzGZ43.js";import"./getThemeProps-6j1Y0ZA1.js";import"./ExpandChevronsIcon-COnAux2u.js";import"./index-BTANRXAZ.js";import"./index-Cz50J4P8.js";import"./useTranslation-CdPXEjz7.js";import"./index-I4KNXR0w.js";import"./Grid-CN3PAjHl.js";import"./useThemeProps-fifQT4LH.js";import"./Container-BUoyZra7.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BxV7IvKX.js.map
