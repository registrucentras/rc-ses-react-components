import{j as e}from"./iframe-CaAjgiDY.js";import{R as n,u as c,a as s}from"./index-aW4q2uOl.js";import{F as m}from"./FieldView-DK9bchGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-j16Ll7-O.js";import"./styled-iySC8Kfl.js";import"./useSlot-KaxbMqBB.js";import"./mergeSlotProps-DG9sKMqj.js";import"./useReducedMotion-cdwx6IhJ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CgJahenF.js";import"./Collapse-lxQaZr-z.js";import"./Transition-U382hHqT.js";import"./Paper-8Jt0t79l.js";import"./ButtonBase-DLvnTUYF.js";import"./useTimeout-C5WAOen6.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DzINBbff.js";import"./CircleFilledIcon-DiDlbiua.js";import"./DotCircleFilledIcon-BVbxrWFC.js";import"./createSvgIcon-CzFQeY6W.js";import"./isMuiElement-BHbNq57c.js";import"./useRovingTabIndex-CHzFyUgU.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-COOGOSYK.js";import"./CaretLeftIcon-BIdwxMgO.js";import"./CaretLeft.es-BR2upmIb.js";import"./CaretRightBoldIcon-D3xmIwir.js";import"./Button-DeXV5bwr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-C_e8dJbt.js";import"./Box-C4yjFnYh.js";import"./index-Bifpqbe0.js";import"./getThemeProps-DbMGsGZh.js";import"./ExpandChevronsIcon-CK7yyAEu.js";import"./index-DhUVNJMy.js";import"./index-30vMHB-b.js";import"./useTranslation-CUllinC0.js";import"./index-CgDxUWFz.js";import"./Grid-EMUHTdqP.js";import"./useThemeProps-ChL75rBy.js";import"./Container-CdsBJDo9.js";const to={title:"components/navigation/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-XrxTMXeS.js.map
