import{j as e}from"./iframe-HWDs9uQF.js";import{R as n,u as c,a as s}from"./index-D7Pchlx5.js";import{F as m}from"./FieldView-XBMqAElD.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-0w7JW093.js";import"./styled-DT5MOZ0R.js";import"./useSlot-bkgOc2Wj.js";import"./mergeSlotProps-oAUXU-0N.js";import"./useReducedMotion-CBECBIS6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Bgcv4LsH.js";import"./Collapse-CqFd1H1t.js";import"./Transition-Cw8F8IPM.js";import"./Paper-DeJfx7zk.js";import"./ButtonBase-D0Csj8lI.js";import"./useTimeout-CX0D3V4f.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-98eDegBY.js";import"./CircleFilledIcon-BaVlM6JG.js";import"./DotCircleFilledIcon-DW_7K_y2.js";import"./createSvgIcon-B4aLZDOG.js";import"./isMuiElement-DMxNgnw4.js";import"./useRovingTabIndex-Dy07x_Xi.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-jsTgqmKu.js";import"./CaretLeftIcon-D1ZYEdXO.js";import"./CaretLeft.es-mKgN-u-o.js";import"./CaretRightBoldIcon-DFTJ1KvJ.js";import"./Button-Cqgn5993.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BABzUbfC.js";import"./Box-NDdpnIYT.js";import"./index-sjbRUJC3.js";import"./getThemeProps-Ghm6ReLB.js";import"./ExpandChevronsIcon-BvQnLSZf.js";import"./index-D_ZABdYf.js";import"./index-BcCuim4-.js";import"./useTranslation-CVqsNLkS.js";import"./index-Dkq6HwrI.js";import"./Grid-BPo8q-7U.js";import"./useThemeProps-wDrruK16.js";import"./Container-DHfVJly8.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BVugkNkW.js.map
