import{j as e}from"./iframe-BZfsYcrl.js";import{R as n,u as c,a as s}from"./index-CdU3TC7w.js";import{F as m}from"./FieldView-B5Xrft8X.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BL7bpbHs.js";import"./styled-BO7G47yj.js";import"./useSlot-o-fNBmTz.js";import"./mergeSlotProps-CBY1an78.js";import"./useReducedMotion-IetLgFVd.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CWYA69dj.js";import"./Collapse-BqWq4IzA.js";import"./Transition-l-vlNc2v.js";import"./Paper-CAXoqR0r.js";import"./ButtonBase-BepGfpEs.js";import"./useTimeout-uoJ0oiLL.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CPmNSPFP.js";import"./CircleFilledIcon-DPbaH-x6.js";import"./DotCircleFilledIcon-BO3CQkal.js";import"./createSvgIcon-Dfp4SmtZ.js";import"./isMuiElement-DTzlJsRN.js";import"./useRovingTabIndex-HZUEvnho.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BIIi_0Xq.js";import"./CaretLeftIcon-CJKkXzWI.js";import"./CaretLeft.es-1eM5ceiI.js";import"./CaretRightBoldIcon-DV--Rlro.js";import"./Button-CQzKbFgw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CzQvxfZV.js";import"./Box-uaHXLWWn.js";import"./index-CkkxylJC.js";import"./getThemeProps-c4SFdySs.js";import"./ExpandChevronsIcon-Dv6wZp-p.js";import"./index-C_oJLvP2.js";import"./index-B0lu2bfL.js";import"./useTranslation-6y1uyLW-.js";import"./index-C5XcXpqZ.js";import"./Grid-ByhkFIJI.js";import"./useThemeProps-CoVPxnKt.js";import"./Container-OJyd0kBm.js";const to={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-3nn3xpx9.js.map
