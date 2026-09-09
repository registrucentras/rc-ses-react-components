import{j as e}from"./iframe-Dmy5OsZp.js";import{R as n,u as c,a as s}from"./index-CHFQH-En.js";import{F as m}from"./FieldView-CpwA5cdu.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DmCaGGeP.js";import"./useSlot-Bg8xemmP.js";import"./mergeSlotProps-CXnRZAlP.js";import"./useReducedMotion-BELgimr9.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-QqQwDceE.js";import"./Collapse-CuOqZ7Cs.js";import"./Transition-ga13M-K2.js";import"./Paper-6Zp7Q31B.js";import"./ButtonBase-DySzV9CC.js";import"./useTimeout-CGhjfAMx.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BKR_ubm4.js";import"./CircleFilledIcon-TFxY4SMY.js";import"./DotCircleFilledIcon-QXF_rT6j.js";import"./createSvgIcon-4cHXy5Ra.js";import"./isMuiElement-CuMGnHOC.js";import"./useRovingTabIndex-tfyciPoU.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-afILwxD5.js";import"./CaretLeftIcon-Dttg8uPB.js";import"./CaretLeft.es-Dc1K9219.js";import"./CaretRightBoldIcon-C78_9NNC.js";import"./Button-oSHIuCnS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Dsdalcfg.js";import"./Box-Dg8R0yTf.js";import"./index-Bx60OW6S.js";import"./getThemeProps-C45_k9EL.js";import"./ExpandChevronsIcon-DtW5eJua.js";import"./index-SCjBBnk3.js";import"./index-Dnt-8AIb.js";import"./useTranslation-BonW3LF0.js";import"./index-DomZp9LF.js";import"./Grid-CXWLyvh-.js";import"./useThemeProps-Cy9go_Ho.js";import"./Container-Dl9G5Uno.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-B-P9JfEq.js.map
