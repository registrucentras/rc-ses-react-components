import{j as e}from"./iframe-BkkYpBD0.js";import{R as n,u as c,a as s}from"./index-Wnx2buhR.js";import{F as m}from"./FieldView-D8AFqAP9.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C6MVMLFE.js";import"./useSlot-DxRDek2m.js";import"./mergeSlotProps-B3ergg2j.js";import"./useReducedMotion-G16E0poK.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Bvnlc0ko.js";import"./Collapse-OfOy_Pgs.js";import"./Transition-D3DS5bT6.js";import"./Paper-D6ybWWg3.js";import"./ButtonBase-BPt2o7Yh.js";import"./useTimeout-C_O9fHa0.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DDp-kNlo.js";import"./CircleFilledIcon-C7XrGo4Z.js";import"./DotCircleFilledIcon-B578gQ23.js";import"./createSvgIcon-WKjnuApF.js";import"./isMuiElement-3kk6wyWp.js";import"./useRovingTabIndex-X6XEz1T9.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-LGQDun6U.js";import"./CaretLeftIcon-CMCAvA8W.js";import"./CaretLeft.es-BGfOSL53.js";import"./CaretRightBoldIcon-DutxirY1.js";import"./Button-9yb4KMSq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DEi2THL0.js";import"./Box-B6YNYajT.js";import"./index-UxqRa_nw.js";import"./getThemeProps-CN3PDUsJ.js";import"./ExpandChevronsIcon-DiQgyf1r.js";import"./index-C7c_6ZQa.js";import"./index-aCZpPvpO.js";import"./useTranslation-CK6dFzOf.js";import"./index-DJ0VZX_0.js";import"./Grid-XdG-__jU.js";import"./useThemeProps-DXPtl_q2.js";import"./Container-By3sHiND.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-TaBaVN54.js.map
