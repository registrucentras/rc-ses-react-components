import{j as e}from"./iframe-CIXJIlmg.js";import{R as n,u as c,a as s}from"./index-D3NBtGww.js";import{F as m}from"./FieldView-Cac3sYlQ.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DbAlV__5.js";import"./useSlot-SIPNhSkR.js";import"./mergeSlotProps-BECWxVr6.js";import"./useReducedMotion-C2r5ARSO.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CXmrIiYq.js";import"./Collapse-kHUVipS0.js";import"./Transition-CbbeNW5N.js";import"./Paper-lGlETzE4.js";import"./ButtonBase-CWd8qBAx.js";import"./useTimeout-BZ2e3185.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B2UYL6mp.js";import"./CircleFilledIcon-7ReBOdDn.js";import"./DotCircleFilledIcon-BA9d9zAF.js";import"./createSvgIcon-CBC4dTeQ.js";import"./isMuiElement-BS8x97GT.js";import"./useRovingTabIndex-CthBHq02.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-ER2HEyLs.js";import"./CaretLeftIcon-B4mFONLL.js";import"./CaretLeft.es-B3-Yjb57.js";import"./CaretRightBoldIcon-BBwMHh8s.js";import"./Button-BbHkjFiN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BzifdDUv.js";import"./Box-DL7cVOPT.js";import"./index-C2lZ4br8.js";import"./getThemeProps-8inDuFsL.js";import"./ExpandChevronsIcon-C2MEYm9j.js";import"./index-j0nIKNjn.js";import"./index-dOFqxQxA.js";import"./useTranslation-Cjiqd4Vw.js";import"./index-C8-UiIJn.js";import"./Grid-Bvf8oZEe.js";import"./useThemeProps-BxDmLf3H.js";import"./Container-Dym5MBAY.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-Ct1WU-3z.js.map
