import{j as e}from"./iframe-BWS6zQMz.js";import{R as n,u as c,a as s}from"./index-aMFibC_4.js";import{F as m}from"./FieldView-BSYBkMhe.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-eAANWYbH.js";import"./useSlot-Bkup3aP4.js";import"./mergeSlotProps-_45-cUn6.js";import"./useReducedMotion-CfPpIXVN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-cxgvJEOf.js";import"./useControlled-CxgWzzXT.js";import"./Collapse-340Hq3a8.js";import"./Transition-DeWWejMj.js";import"./Paper-CDC3ILca.js";import"./ButtonBase-BewuQVTu.js";import"./useTimeout-BZcpWzuj.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BSlEWN15.js";import"./CircleFilledIcon-t3tSlqQq.js";import"./DotCircleFilledIcon-C1Wm952Y.js";import"./createSvgIcon-CMhxM9eb.js";import"./isMuiElement-Dtw5vHzO.js";import"./useRovingTabIndex-BfSI9um_.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-BqppVlt3.js";import"./CaretLeftIcon-B_uKmuzx.js";import"./CaretLeft.es-DNnMJr67.js";import"./CaretRightBoldIcon-uz0nfcZk.js";import"./Button-XvsZBX5v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Cw2ibV5X.js";import"./Box-nGGPDb0l.js";import"./index-BgMBnxBe.js";import"./getThemeProps-B9Q2Lx8Z.js";import"./ExpandChevronsIcon-D5U4FUBq.js";import"./index-C-8v3-Dd.js";import"./index-BovgYkIQ.js";import"./useTranslation-CreZPdz2.js";import"./index-DMYSYZ2f.js";import"./Grid-D5uoy0zh.js";import"./useThemeProps-vSHdI7N0.js";import"./Container-CQszsAlw.js";const ro={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-u4gXWhA0.js.map
