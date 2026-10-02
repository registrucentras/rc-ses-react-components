import{j as e}from"./iframe-N0sjxTWe.js";import{R as n,u as c,a as s}from"./index-BfuIO8Jn.js";import{F as m}from"./FieldView-CCE3ohd4.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-LpOBnG9S.js";import"./useSlot-LtUwORjM.js";import"./mergeSlotProps-D-WjszGF.js";import"./useReducedMotion-CGoDzkj_.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BILiV_6a.js";import"./Collapse-BkVIbBfZ.js";import"./Transition-Bj7LlLEo.js";import"./Paper-BVZzkreY.js";import"./ButtonBase-CPL9Lwnh.js";import"./useTimeout-_E1FaURO.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-2T2fRbf3.js";import"./DotCircleFilledIcon-7DUWiZE9.js";import"./createSvgIcon-DLCnYxX8.js";import"./isMuiElement-B-Ikhj-N.js";import"./useRovingTabIndex-CytWUXyl.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CAQtUIfV.js";import"./Button-BxLOPotA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BTSHHO3S.js";import"./Box-BJ4bJd8I.js";import"./index-oPKfwai7.js";import"./getThemeProps-CBtNjmVo.js";import"./index-DBSnRFAn.js";import"./index-DCkn6xwv.js";import"./useTranslation-DosvPdoQ.js";import"./index-CHJLtLDu.js";import"./Grid-DJvSKQVP.js";import"./useThemeProps-D5Q118PB.js";import"./Container-D7BQ3-qh.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-Dx62gXQK.js.map
