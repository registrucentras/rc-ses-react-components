import{j as e}from"./iframe-BxN2aOIa.js";import{R as n,u as c,a as s}from"./index-CXqGR6xx.js";import{F as m}from"./FieldView-CkSHkI3i.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BVBNHufc.js";import"./styled-BsEOJ7Su.js";import"./useSlot-q86-9NE5.js";import"./mergeSlotProps-B4h1H-dp.js";import"./useReducedMotion-CrmomAaN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-afzfsliS.js";import"./Collapse-CiXY-LG_.js";import"./Transition-Bh6brsxE.js";import"./Paper-fxMzV1Mw.js";import"./ButtonBase-Cth_t4CJ.js";import"./useTimeout-Dg4iDwNI.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-l6ClpxRp.js";import"./CircleFilledIcon-D9My80Gd.js";import"./DotCircleFilledIcon-M_V2s40Y.js";import"./createSvgIcon-qqYVnU0S.js";import"./isMuiElement-DItnQ27I.js";import"./useRovingTabIndex-B7h1txQr.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-Cv1Z6t_X.js";import"./CaretLeftIcon-BJDS6vdE.js";import"./CaretLeft.es-BJGpg7g-.js";import"./CaretRightBoldIcon-h-cUKmpA.js";import"./Button-BEfHjqZI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DnJkOcDD.js";import"./Box-BDzBaYrG.js";import"./index-N2iF4w5a.js";import"./getThemeProps-CY5Ak8Sk.js";import"./ExpandChevronsIcon-CZ-wZz8u.js";import"./index-TN3SpjhK.js";import"./index-C9nt7SdT.js";import"./useTranslation-WvGZYAOX.js";import"./index-DOzLr19r.js";import"./Grid-Bc_rbR3G.js";import"./useThemeProps-Dah9Wuql.js";import"./Container-BsWQAkxP.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-CKCq1TVQ.js.map
