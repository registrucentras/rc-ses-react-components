import{j as e}from"./iframe-D8onu3Il.js";import{R as n,u as c,a as s}from"./index-ByUetIHD.js";import{F as m}from"./FieldView-Cvs2oo01.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-ByP6l3WP.js";import"./useSlot-0hqKP31s.js";import"./mergeSlotProps-CtJy0bkm.js";import"./useReducedMotion-S5WBUSCK.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-BkQrdjrD.js";import"./Collapse-BMdLlLLW.js";import"./Transition-JR6nE1GZ.js";import"./Paper-xBmAxO1y.js";import"./ButtonBase-l9Mv48rv.js";import"./useTimeout-Bu-Sqgn5.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DjpGR7cd.js";import"./DotCircleFilledIcon-DiNhOEw4.js";import"./createSvgIcon-DBuEwFKf.js";import"./isMuiElement-V6Y-Cv9q.js";import"./useRovingTabIndex-DISI3nzs.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DbVm9xXF.js";import"./Button-Dr3_vkL8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-D2Knbgho.js";import"./Box-B_hQFEfd.js";import"./index-DTjs1aja.js";import"./getThemeProps-C7ekJs6a.js";import"./index-DQTe0fJd.js";import"./index-DgSfOX8m.js";import"./useTranslation-DRn7UXSP.js";import"./index-xg7iecTZ.js";import"./Grid-cSD_mHYA.js";import"./useThemeProps-D3RbaZUZ.js";import"./Container-B3iEKQM8.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BJDAYjrI.js.map
