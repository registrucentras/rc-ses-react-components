import{j as e}from"./iframe-PQNPox6x.js";import{R as n,u as c,a as s}from"./index-twCJByDs.js";import{F as m}from"./FieldView-ne_kyftr.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CYeapeeR.js";import"./useSlot-CkhfrMvL.js";import"./mergeSlotProps-dLBz28oI.js";import"./useReducedMotion-B2zDJY0G.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-YXqHIotn.js";import"./Collapse-C8BwawJV.js";import"./Transition-CViAjQpO.js";import"./Paper-Bo96e-OI.js";import"./ButtonBase-LcxrZym2.js";import"./useTimeout-A-wIdcEE.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Oop76gJK.js";import"./CircleFilledIcon-FEco6Xbl.js";import"./DotCircleFilledIcon-CZLdQpG1.js";import"./createSvgIcon-DmISCbpy.js";import"./isMuiElement-CxlQKXPQ.js";import"./useRovingTabIndex-B1WdAkZG.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-0WjNM51f.js";import"./CaretLeftIcon-CTbqPtLp.js";import"./CaretLeft.es-CVqRLo1i.js";import"./CaretRightBoldIcon-TLtlYw0d.js";import"./Button-BzTkFXn3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DTlolVZ-.js";import"./Box-DngV8o5X.js";import"./index-CPTUD4rR.js";import"./getThemeProps-D5djJePg.js";import"./ExpandChevronsIcon-Dh-78aSa.js";import"./index-DzIJt5Xb.js";import"./index-Cnaxsh1i.js";import"./useTranslation-PauY0rwW.js";import"./index-Dm6qHZ_l.js";import"./Grid-DqE5xnP4.js";import"./useThemeProps-BOtmJ91y.js";import"./Container-CWtXMkTd.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-WELolsrT.js.map
