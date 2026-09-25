import{j as e}from"./iframe-CvdsVNq9.js";import{R as n,u as c,a as s}from"./index-CqWdVWLW.js";import{F as m}from"./FieldView-CQzPrFJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme--kAmOKvp.js";import"./useSlot-DCxkw9sd.js";import"./mergeSlotProps-D8F8XP8I.js";import"./useReducedMotion-Dm_7FdVW.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BGmp-9YK.js";import"./Collapse-DY47tvMK.js";import"./Transition-CdzMT_AO.js";import"./Paper-fcEdRBdZ.js";import"./ButtonBase-DzZUG8VX.js";import"./useTimeout-Bkz083f3.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-D5lOVEHW.js";import"./CircleFilledIcon-BVKtOcUu.js";import"./DotCircleFilledIcon-Ba-oILhQ.js";import"./createSvgIcon-DVqaudWb.js";import"./isMuiElement-b_C275FK.js";import"./useRovingTabIndex-T8hc1tXf.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CI1-Nmif.js";import"./CaretLeftIcon-CNlpPZtj.js";import"./CaretLeft.es-BmNDsuGS.js";import"./CaretRightBoldIcon-C1kn15NM.js";import"./Button-C080bCIA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DkL0sT73.js";import"./Box-DQwK3gZ0.js";import"./index-B_W2GlLq.js";import"./getThemeProps-tRce7t8w.js";import"./ExpandChevronsIcon-CU4II39x.js";import"./index-BofUTA5O.js";import"./index-4IZ3xxT3.js";import"./useTranslation-DIRr1Pd9.js";import"./index-Q1xHUF-M.js";import"./Grid-ChMpKGLI.js";import"./useThemeProps-ovGfayJ1.js";import"./Container-BTqxgxA_.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BOMlcUGP.js.map
