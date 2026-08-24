import{j as e}from"./iframe-ybkpfesg.js";import{R as n,u as c,a as s}from"./index-_byjpr-6.js";import{F as m}from"./FieldView-amNSTYrM.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-ECsbPGKm.js";import"./styled-njvUt4qA.js";import"./useSlot-BlVZbT1E.js";import"./mergeSlotProps-CiBTEtNE.js";import"./useReducedMotion-DIXOm1dN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-DnLNWN0m.js";import"./Collapse-un1eDRNG.js";import"./Transition-CfffW1cW.js";import"./Paper-pO_IgRPd.js";import"./ButtonBase-r2gcnXMY.js";import"./useTimeout-D8jYUdJi.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CC-KOm0L.js";import"./CircleFilledIcon-D8HNNGS6.js";import"./DotCircleFilledIcon-M4Q-eBY0.js";import"./createSvgIcon-BLNt29BT.js";import"./isMuiElement-CKl0ogKm.js";import"./useRovingTabIndex-4wnxatgI.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BvGzCXHs.js";import"./CaretLeftIcon-B_lo_lZq.js";import"./CaretLeft.es-DXKZkmR8.js";import"./CaretRightBoldIcon-sCM9wQxE.js";import"./Button-RvM5TopQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BS6Tejhx.js";import"./Box-CxkQqgRU.js";import"./index-DgHx3A_v.js";import"./getThemeProps-DRvL5G6T.js";import"./ExpandChevronsIcon-CA_Pssgk.js";import"./index-Bw4aByXx.js";import"./index-DivCRy4_.js";import"./useTranslation-DFTACu-G.js";import"./index-BBRVc8X4.js";import"./Grid-CpKjbcL2.js";import"./useThemeProps-DjU7c1YM.js";import"./Container-CwNkIq78.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-KV-ICImi.js.map
