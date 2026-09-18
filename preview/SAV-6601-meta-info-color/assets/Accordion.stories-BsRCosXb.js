import{j as e}from"./iframe-C4pznSxB.js";import{R as n,u as c,a as s}from"./index-KWIhNyE6.js";import{F as m}from"./FieldView-C5Ye-xJK.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CT5MQfOE.js";import"./useSlot-DYZldupo.js";import"./mergeSlotProps-D_CTyZdL.js";import"./useReducedMotion-B7QXwOH9.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-BSVqjK6C.js";import"./Collapse-Bt_NjwxT.js";import"./Transition-Cx3BLusM.js";import"./Paper-BEkcHUKJ.js";import"./ButtonBase-Bl4XtCLZ.js";import"./useTimeout-TLp9lcma.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-D4Vwdn6a.js";import"./CircleFilledIcon-5N7NuG1g.js";import"./DotCircleFilledIcon-DO01ZMv4.js";import"./createSvgIcon-OKnq_7bx.js";import"./isMuiElement-CoCSgR_J.js";import"./useRovingTabIndex-CfOCYoQw.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DT2wtn05.js";import"./CaretLeftIcon-DfNHfB3y.js";import"./CaretLeft.es-r8WI52tD.js";import"./CaretRightBoldIcon-BOku06f6.js";import"./Button-C2ts-QaL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-D2psk_8m.js";import"./Box-DcG0H_In.js";import"./index-C6BECpTB.js";import"./getThemeProps-h9caLrl1.js";import"./ExpandChevronsIcon-CeIvZnSw.js";import"./index-DrkqSnNn.js";import"./index-Dz91i4x4.js";import"./useTranslation-BmJbiKtf.js";import"./index-MdniPBWm.js";import"./Grid-DjyPcSeu.js";import"./useThemeProps-DC5PynE9.js";import"./Container-Dn2MPAnf.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BsRCosXb.js.map
