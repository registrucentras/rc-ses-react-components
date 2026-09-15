import{j as e}from"./iframe-DmAJgr6L.js";import{R as n,u as c,a as s}from"./index-CWiNxrzI.js";import{F as m}from"./FieldView-BCGNhOJE.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DMo-wQMj.js";import"./useSlot-BnOHDpy3.js";import"./mergeSlotProps-BsHJzxNw.js";import"./useReducedMotion-D2uNiKbM.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Bjr2D1NM.js";import"./Collapse-CoND7FQl.js";import"./Transition-C3q9S2Kz.js";import"./Paper-C1Xd44jR.js";import"./ButtonBase-DzEAXjV-.js";import"./useTimeout-qjNguLme.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CRWGQmud.js";import"./CircleFilledIcon-c8evO4NI.js";import"./DotCircleFilledIcon-BMZzHdDP.js";import"./createSvgIcon-Yp_CxVPD.js";import"./isMuiElement-CAxCabuM.js";import"./useRovingTabIndex-DqRvgWIU.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BF5pD0KD.js";import"./CaretLeftIcon-CYBdD931.js";import"./CaretLeft.es-BdZ53Pf8.js";import"./CaretRightBoldIcon-C1G3qX7E.js";import"./Button-C4eFM7_6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BLdJ-rMM.js";import"./Box-CGoCt1Qp.js";import"./index-9R0s7Yy7.js";import"./getThemeProps-BNJl-ERH.js";import"./ExpandChevronsIcon-D3NpLFg2.js";import"./index-BMLsLfm7.js";import"./index-D4jfxpBT.js";import"./useTranslation-BU0aV3gs.js";import"./index-Bb58hqyp.js";import"./Grid-dQhLV_GU.js";import"./useThemeProps-Cme00NEv.js";import"./Container-Bnu4ZFgJ.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-CBbHig0i.js.map
