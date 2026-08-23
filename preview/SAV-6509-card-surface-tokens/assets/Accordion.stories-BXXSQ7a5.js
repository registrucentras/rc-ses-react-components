import{j as e}from"./iframe-CoMwiuCm.js";import{R as n,u as c,a as s}from"./index-CEVE5eYn.js";import{F as m}from"./FieldView-tGBFag63.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-ujX2kvIT.js";import"./styled-CyAuT0hD.js";import"./useSlot-36z-bxay.js";import"./mergeSlotProps-D2Gu3GfK.js";import"./useReducedMotion-DuL6HRZm.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CdFX_s3Z.js";import"./Collapse-DyU6P9Yn.js";import"./Transition-rbEE_fR-.js";import"./Paper-C7GrVb74.js";import"./ButtonBase-B8LEeIJ7.js";import"./useTimeout-DVG4jXaf.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-fY_ewiAk.js";import"./CircleFilledIcon-CBJVQ8ln.js";import"./DotCircleFilledIcon-BabHlpCD.js";import"./createSvgIcon-D7xeO6Wg.js";import"./isMuiElement-Dfmop9DH.js";import"./useRovingTabIndex-DuOU3Trt.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CxC575L_.js";import"./CaretLeftIcon-CZsUzSaN.js";import"./CaretLeft.es-D9k3upRx.js";import"./CaretRightBoldIcon-6Wj9Sfx-.js";import"./Button-CUo4Ivao.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Bam7XOua.js";import"./Box-CbJuhaIY.js";import"./index-BXJ_n2ed.js";import"./getThemeProps-CEwx2nVw.js";import"./ExpandChevronsIcon-CLLxZLV2.js";import"./index-DnEYtzpg.js";import"./index-Dy4BGkfg.js";import"./useTranslation-JnoXzG5u.js";import"./index-CKdsl0Rd.js";import"./Grid-B5spcp13.js";import"./useThemeProps-FJjeJPHG.js";import"./Container-eiJVXP_u.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BXXSQ7a5.js.map
