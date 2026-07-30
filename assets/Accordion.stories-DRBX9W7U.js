import{j as e}from"./iframe-CzYWeAAM.js";import{R as n,u as c,a as s}from"./index-Dn8D_ZBT.js";import{F as m}from"./FieldView-CIB0eb3h.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B8PBHXaB.js";import"./styled-o9dTP5_L.js";import"./useSlot-DnlNrRlP.js";import"./mergeSlotProps-BZ3kvavi.js";import"./useReducedMotion-CkBLeDCZ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-6NanGQiB.js";import"./Transition-DVaobtwT.js";import"./Paper-avUaDfz-.js";import"./ButtonBase-C7ZLRxu4.js";import"./useTimeout-B5xTyLR2.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BGFBbX3w.js";import"./CircleFilledIcon-BmJf7JvV.js";import"./DotCircleFilledIcon-BF35glJx.js";import"./createSvgIcon-CZozAuyK.js";import"./isMuiElement-CuNyLYNc.js";import"./useRovingTabIndex-DkSpIyoX.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-B7W9ihh2.js";import"./CaretLeftIcon-Cpk_DSDI.js";import"./CaretLeft.es-BBz0DJcJ.js";import"./CaretRightBoldIcon-D6r4HjTa.js";import"./Button-CCTDme_E.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-k9i1uSbX.js";import"./Box-DS5v1r08.js";import"./index-BGB6hCM8.js";import"./getThemeProps-CSIavC_u.js";import"./ExpandChevronsIcon-CIsyeeN2.js";import"./index-DXgFnsmM.js";import"./index-DLhCLZmA.js";import"./useTranslation-C3PgZEFh.js";import"./index-BXD3M11i.js";import"./Grid-Dd6trtQn.js";import"./useThemeProps-Bc6SXOIC.js";import"./Container-RSSxjAD9.js";const ro={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DRBX9W7U.js.map
