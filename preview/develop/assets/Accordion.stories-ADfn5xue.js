import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,u as p,a}from"./index-CNN5cpzA.js";import{F as d}from"./FieldView-CTfNV-zm.js";import"./index-yBjzXJbu.js";import"./CaretDownIcon-Bi_rhDjR.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./createTheme-cc7C8_Rz.js";import"./styled-CQgu8tRE.js";import"./generateUtilityClasses-w1ShjUKg.js";import"./defaultTheme-SlYxhCq1.js";import"./useSlot-xHpqHB2n.js";import"./resolveComponentProps-D3cSQ9RO.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./DefaultPropsProvider-DYP4WNeP.js";import"./useControlled-DKQkVSHg.js";import"./Collapse-Bmi6Xoe_.js";import"./utils-Cm1mxZmw.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-WIcaZj6B.js";import"./useTheme-BNEP3wvB.js";import"./useTimeout-DgQ6HlaJ.js";import"./composeClasses-fLhin0tj.js";import"./Paper-Df_biMBR.js";import"./ButtonBase-Cbvckr1-.js";import"./useIsFocusVisible-DPtOLna9.js";import"./palette-ClGEQNft.js";import"./index-Cd4Hf2iu.js";import"./index-DAb-ZS_Y.js";import"./WarningFillIcon-Dc8mHKpO.js";import"./CloseIcon-C-u9hzi-.js";import"./InfoFillIcon-82wzIcgI.js";import"./WarningCircleIcon-pM1srtuV.js";import"./colorManipulator-C0jAUUq8.js";import"./CircleFilledIcon-1NXGIxKT.js";import"./DotCircleFilledIcon-hDM4y7CI.js";import"./createSvgIcon-Cj1taIyO.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-YBmJTOND.js";import"./CaretLeftIcon-Do3bT2Dg.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-buCNQJTx.js";import"./Button-T7WPtmVQ.js";import"./Box-Dsbm8PjI.js";import"./useMediaQuery-Ci9tg4hk.js";import"./getThemeProps-anNa02Cr.js";import"./ExpandChevronsIcon-BLL4v97i.js";import"./index-tBUvS5sA.js";import"./index-Cs1seLgX.js";import"./useTranslation-5b1lrk9S.js";import"./Grid-Dutnn9EJ.js";import"./Container-qXXom0S9.js";import"./useThemeProps-Byb0HM77.js";const xo={title:"components/navigation/Accordion",component:s,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function l(o){const{disabled:r}=o,e=p({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return i.jsx(d,{children:i.jsx(a,{showProgressStepper:!0,accordionController:e,slotProps:{container:{maxWidth:"lg"}},children:i.jsx(s,{id:"form",controller:e,disabled:r,children:"Here goes Accordeon content"})})})}const u=o=>{const{disabled:r}=o;return`
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
  );`},t={render:o=>i.jsx(l,{...o}),args:{disabled:!1},parameters:{docs:{source:{type:"dynamic",transform:(o,r)=>u(r.args)}}}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Co=["Main"];export{t as Main,Co as __namedExportsOrder,xo as default};
//# sourceMappingURL=Accordion.stories-ADfn5xue.js.map
