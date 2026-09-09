import{j as e}from"./iframe-CENckQZf.js";import{R as n,u as c,a as s}from"./index-C066U54O.js";import{F as m}from"./FieldView-oBIyD76S.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DuGMjUk-.js";import"./useSlot-C1HhZ5nJ.js";import"./mergeSlotProps-DpW5LE0-.js";import"./useReducedMotion-DHyYPphk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DHaLmav_.js";import"./Collapse-CmDYfr0d.js";import"./Transition-Du9SiglK.js";import"./Paper-DVIpeCUm.js";import"./ButtonBase-brzhBtL2.js";import"./useTimeout-BgjeWFP0.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CeOR3Drp.js";import"./CircleFilledIcon-vJZ0s9il.js";import"./DotCircleFilledIcon-B4CzkVyj.js";import"./createSvgIcon-lcJLfaPz.js";import"./isMuiElement-C5JV2-BW.js";import"./useRovingTabIndex-DdDv_c1w.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-8Msd68Ku.js";import"./CaretLeftIcon-o3Ib2ys9.js";import"./CaretLeft.es-vcSN-wOt.js";import"./CaretRightBoldIcon-B4oxMvmt.js";import"./Button-CsSJcaA1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-tRY1Cioi.js";import"./Box-bPJk0iff.js";import"./index-Bh5LF4yA.js";import"./getThemeProps-u1OGT0GL.js";import"./ExpandChevronsIcon-DvA06eTz.js";import"./index-o44aIkem.js";import"./index-yJlyccKm.js";import"./useTranslation-CHfF30OX.js";import"./index-C3151_T8.js";import"./Grid-BGYUmfga.js";import"./useThemeProps-DCr6k5Tt.js";import"./Container-B9RHhIe3.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DO7O7H8i.js.map
