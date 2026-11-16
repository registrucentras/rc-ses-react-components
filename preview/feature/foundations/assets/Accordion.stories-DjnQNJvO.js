import{j as e}from"./iframe-C5f9Zc7Z.js";import{R as n,u as c,a as s}from"./index-DAZS2NzF.js";import{F as m}from"./FieldView-BKsOS0Ud.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-aFWhReI0.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-B4Netmu2.js";import"./Collapse-DPgkmqk-.js";import"./Transition-EJymIB3U.js";import"./useTheme-DJRvu-BM.js";import"./Paper-Dn22t17M.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTimeout-C0xJNvSp.js";import"./index-DcoC7pjq.js";import"./DotCircleFilledIcon-6PkdHZo6.js";import"./createSvgIcon-DJbAJPfa.js";import"./isMuiElement-BSR4zhUB.js";import"./useRovingTabIndex-C3X7iciN.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-DJGJzGuv.js";import"./Button-CpdT9tS7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DCfJ8UYi.js";import"./Box-B61C4jPN.js";import"./index-IQQzWx4v.js";import"./getThemeProps-Cw8NFX3f.js";import"./index-BNMNfPN2.js";import"./index-BFL_h1cZ.js";import"./useTranslation-Dn-vvyCO.js";import"./index-Bexat51j.js";import"./Grid-C-0E1uYt.js";import"./useThemeProps-CaOGKB9m.js";import"./Container-D97tgtJr.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-DjnQNJvO.js.map
