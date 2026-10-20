import{j as e}from"./iframe-Bb9hrTs5.js";import{R as n,u as c,a as s}from"./index-CLrhX3A9.js";import{F as m}from"./FieldView-Dl70gBwG.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-p8JXWL0F.js";import"./useSlot-9rNfCgwk.js";import"./mergeSlotProps-CNFXYXAR.js";import"./useReducedMotion-CPrdhxjO.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-C6e5Otch.js";import"./Collapse-Ce8MS0Cs.js";import"./Transition-BOXj5PVK.js";import"./Paper-nS0kJyke.js";import"./ButtonBase-Drj8X9vv.js";import"./useTimeout-Cf7H1spV.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-r1tZONT2.js";import"./DotCircleFilledIcon-BD6mCmvN.js";import"./createSvgIcon-DZBHmjZW.js";import"./isMuiElement-CHsYhzMx.js";import"./useRovingTabIndex-C3SQGcCu.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DuBNYQHj.js";import"./Button-BLkklnrJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DkrunArh.js";import"./Box-Dcnp2oxJ.js";import"./index-EB_c9Ef3.js";import"./getThemeProps-DviRSJyb.js";import"./index-B4c7oqO1.js";import"./index-CgvutyJy.js";import"./useTranslation-BpQYDfNB.js";import"./index-DnLLPA-0.js";import"./Grid-DE1tIQkI.js";import"./useThemeProps-CbLnFNnY.js";import"./Container-CA2iMTq7.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
}`,...t.parameters?.docs?.source}}};const X=["Main"];export{t as Main,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Accordion.stories-CDnFyQz1.js.map
