import{j as e}from"./iframe-53dMxhzt.js";import{R as n,u as c,a as s}from"./index-BiLjEoqp.js";import{F as m}from"./FieldView-D10QYETz.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-KH1_yQA8.js";import"./useSlot-CIJABV9b.js";import"./mergeSlotProps-BxLgALXr.js";import"./useReducedMotion-Drl8qeIC.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-Bb3jnFRn.js";import"./Collapse-DLyOdiJx.js";import"./Transition-CQH-_I6Z.js";import"./Paper-DczdsqbF.js";import"./ButtonBase-BJC28pW6.js";import"./useTimeout-BSILN_yK.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-Bw5X1z-k.js";import"./CircleFilledIcon-CzVro1N9.js";import"./DotCircleFilledIcon-CEOqv5V9.js";import"./createSvgIcon-B94Z1Oyz.js";import"./isMuiElement--ivCE6-m.js";import"./useRovingTabIndex-YleGPovh.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-lfL1O8dX.js";import"./CaretLeftIcon-CiCKsFGE.js";import"./CaretLeft.es-C20Z0TKX.js";import"./CaretRightBoldIcon-DjmGLzUm.js";import"./Button-Du8wq9Ow.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-B6N1HeCa.js";import"./Box-CQICBkkQ.js";import"./index-CUMcdaC_.js";import"./getThemeProps-Dihfq7MA.js";import"./ExpandChevronsIcon-CxKt3YcH.js";import"./index-B8zgEUyt.js";import"./index-1xFUD18g.js";import"./useTranslation-urEMo4ix.js";import"./index-g9f4j9SL.js";import"./Grid-DUm8XoJ6.js";import"./useThemeProps-DCWrL-05.js";import"./Container-D291urho.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DfwQdwcH.js.map
