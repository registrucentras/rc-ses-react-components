import{j as e}from"./iframe-CCeyCrqp.js";import{R as n,u as c,a as s}from"./index-B9qvtVSN.js";import{F as m}from"./FieldView-BOOUbHTc.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C0wvpSvw.js";import"./useSlot-MlE46m0F.js";import"./mergeSlotProps-DQxfus8Q.js";import"./useReducedMotion-iqnEsf7n.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BXaRoU1G.js";import"./Collapse-CSuLYgSL.js";import"./Transition-BgyDU6Ie.js";import"./Paper-8RwezajL.js";import"./ButtonBase-Dusap62A.js";import"./useTimeout-CV9EbYuy.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-r3HT80_W.js";import"./DotCircleFilledIcon-1tqiQrYq.js";import"./createSvgIcon-_19mzxF9.js";import"./isMuiElement-Ee0aDokq.js";import"./useRovingTabIndex-CPiYoeeP.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-ks6rvrpR.js";import"./Button-Br3wNhu3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BgRDWzqe.js";import"./Box-CD0Ckri3.js";import"./index-2HIw6w0N.js";import"./getThemeProps-DYXXmbe9.js";import"./index-BNiRjy7V.js";import"./index-BfgpvDGX.js";import"./useTranslation-DSzKp9dp.js";import"./index-D_hGba6M.js";import"./Grid-B5dFQKZy.js";import"./useThemeProps-Ccu5qU4F.js";import"./Container-C914Q5R8.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-uODwQxmG.js.map
