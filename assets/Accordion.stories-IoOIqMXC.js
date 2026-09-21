import{j as e}from"./iframe-CK086RzA.js";import{R as n,u as c,a as s}from"./index-Ccm6dKgX.js";import{F as m}from"./FieldView-B1pN_m41.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B9yv6Iln.js";import"./useSlot-FnP_z458.js";import"./mergeSlotProps-DTY1dVaV.js";import"./useReducedMotion-vAHoQU6O.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Dlmbrjgj.js";import"./Collapse-Cyd4nD7m.js";import"./Transition-BYCA2Tgx.js";import"./Paper-cKasQ_1Y.js";import"./ButtonBase-BN7ybivh.js";import"./useTimeout-D-kiCzpT.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BZBS8s62.js";import"./CircleFilledIcon-BxhyTCLU.js";import"./DotCircleFilledIcon-DioeZY1_.js";import"./createSvgIcon-BKXxhAZ1.js";import"./isMuiElement-DNORpw2M.js";import"./useRovingTabIndex-CcWqApAc.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-B_JQD5Cn.js";import"./CaretLeftIcon-BcTbk7ja.js";import"./CaretLeft.es-D8sg_o-J.js";import"./CaretRightBoldIcon-CzoNLqTJ.js";import"./Button-hBQdmQgv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-C4iCEMwq.js";import"./Box-COcNGsME.js";import"./index-BWyttAlu.js";import"./getThemeProps-Cx_CYi5z.js";import"./ExpandChevronsIcon-Cte3a7pR.js";import"./index-DuWPu-hG.js";import"./index-66mtk00X.js";import"./useTranslation-Cx_jOgT7.js";import"./index-BRxwbWXG.js";import"./Grid-DdI3WORC.js";import"./useThemeProps-VYGWxZcG.js";import"./Container-uGVFvB43.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-IoOIqMXC.js.map
