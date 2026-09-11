import{j as e}from"./iframe-CW-h-lR4.js";import{R as n,u as c,a as s}from"./index-DYhobNOe.js";import{F as m}from"./FieldView-BTc39BKd.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BKfEdFx3.js";import"./useSlot-BO7i3VQ5.js";import"./mergeSlotProps-B-_5mrGf.js";import"./useReducedMotion-Dh1mS691.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-D2hBJt6o.js";import"./Collapse-BS6TXHPL.js";import"./Transition-DO28_7Te.js";import"./Paper-BApN13o7.js";import"./ButtonBase-BrKqmiWE.js";import"./useTimeout-Bq0Rqasq.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CpHZPB-i.js";import"./CircleFilledIcon-CzS9o4Jz.js";import"./DotCircleFilledIcon-BGediXzo.js";import"./createSvgIcon-2rdIogPM.js";import"./isMuiElement-DQGIe1Uv.js";import"./useRovingTabIndex-B890Glzo.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DC_XUbI9.js";import"./CaretLeftIcon-DerA3jqF.js";import"./CaretLeft.es-CZbGCcIf.js";import"./CaretRightBoldIcon-BuLEqlMT.js";import"./Button-CnDMTalq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-B3E4aKNC.js";import"./Box-QFZvygG7.js";import"./index-BhXJMVwl.js";import"./getThemeProps-BksAypjP.js";import"./ExpandChevronsIcon-DEYyNXVm.js";import"./index-4nzuLQ_u.js";import"./index-CcDZ9GMN.js";import"./useTranslation-C65dd5Za.js";import"./index-DhWHs75O.js";import"./Grid-DDwo1PC9.js";import"./useThemeProps-CnvbWpDc.js";import"./Container-CYz7TUaw.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DH8tjnSc.js.map
