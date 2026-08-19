import{j as e}from"./iframe-BZi_IIKT.js";import{R as n,u as c,a as s}from"./index-BBdS-ZJm.js";import{F as m}from"./FieldView-CoAnn3KM.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BAlo7ZiK.js";import"./styled-Bj6thygr.js";import"./useSlot-DAqoujkc.js";import"./mergeSlotProps-CGnkhCdb.js";import"./useReducedMotion-BStgDSTd.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Cm7_xhBl.js";import"./Collapse-_AIJk8lz.js";import"./Transition-BstEuZ5E.js";import"./Paper-CclxtKEA.js";import"./ButtonBase-suQXw5PM.js";import"./useTimeout-hVRA184I.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DBwZ9kfT.js";import"./CircleFilledIcon-C7JHE_bs.js";import"./DotCircleFilledIcon-x1fSq7XD.js";import"./createSvgIcon-Bm06yZPs.js";import"./isMuiElement-nh9RpZ0V.js";import"./useRovingTabIndex-DKcWXLDX.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DLnlZARl.js";import"./CaretLeftIcon---CZXn2O.js";import"./CaretLeft.es-BA8uLkJE.js";import"./CaretRightBoldIcon-wvfsnpN0.js";import"./Button-DdYFElO8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-D9QxgJAT.js";import"./Box-CTF0TH7R.js";import"./index-B6xvRptj.js";import"./getThemeProps-Bxk-lJdw.js";import"./ExpandChevronsIcon-BAEXJKq-.js";import"./index-BTimCFAx.js";import"./index-DgdLTPoX.js";import"./useTranslation-C-kmrHRC.js";import"./index-Dntby98u.js";import"./Grid-8hxVnXWm.js";import"./useThemeProps-Ba-udxiK.js";import"./Container-ClYerIiF.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DPHnGjeN.js.map
