import{j as e}from"./iframe-Ds4s8oTi.js";import{R as n,u as c,a as s}from"./index-C_Xz3MF1.js";import{F as m}from"./FieldView-D04aSATr.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B-FYPYde.js";import"./styled-CecYOk8h.js";import"./useSlot-v-ywOTNI.js";import"./mergeSlotProps-ipqOZJ4S.js";import"./useReducedMotion-CB3LzTEJ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CoA_4ah7.js";import"./Collapse-BQJKHlyD.js";import"./Transition-BFAXAphd.js";import"./Paper-Dk3utH5m.js";import"./ButtonBase-BtV5OV_v.js";import"./useTimeout-eICbmkm6.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Dv-oBLLd.js";import"./CircleFilledIcon-YCwhSEOf.js";import"./DotCircleFilledIcon-a1KOU7Y7.js";import"./createSvgIcon-BNLz6kPy.js";import"./isMuiElement-BPvVXR_t.js";import"./useRovingTabIndex-v2OoIn-A.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-7jPqOkxR.js";import"./CaretLeftIcon-B8BVexRv.js";import"./CaretLeft.es-CLy9x1gV.js";import"./CaretRightBoldIcon-sj5Bo8Iz.js";import"./Button-CtL0ivwm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-B5XjQaUY.js";import"./Box-BLaXOY2g.js";import"./index-DYnIHy9c.js";import"./getThemeProps-CNiZfhMD.js";import"./ExpandChevronsIcon-Da7JRbri.js";import"./index-DutzImOL.js";import"./index-C3aftzLl.js";import"./useTranslation-CdDr35GR.js";import"./index-Dua3nwbc.js";import"./Grid-Ck_0vecM.js";import"./useThemeProps-mmmZB9Ox.js";import"./Container-RGN-uzpj.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DNvh86t8.js.map
