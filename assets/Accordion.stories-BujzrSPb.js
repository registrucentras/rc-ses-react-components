import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,u as p,a}from"./index-Buj1mv9w.js";import{F as d}from"./FieldView-BeHDZRgt.js";import"./index-yBjzXJbu.js";import"./WarningDiamondFillIcon-DDLCLvbs.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./createTheme-ClYpPn9r.js";import"./styled-wPX_n2pi.js";import"./generateUtilityClasses-B2ID6taa.js";import"./defaultTheme-Ca0qI0zY.js";import"./useSlot-CuWxPpqt.js";import"./resolveComponentProps-US7Z0XfO.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./useControlled-DKQkVSHg.js";import"./utils-lKY8cqOr.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-DMf7ls7Q.js";import"./useTheme-CmrYzTbF.js";import"./useTimeout-DgQ6HlaJ.js";import"./composeClasses-fLhin0tj.js";import"./Paper-BJpnW-nv.js";import"./ButtonBase-D81Lsw8O.js";import"./useIsFocusVisible-DPtOLna9.js";import"./palette-ClGEQNft.js";import"./index-QDOo6Yxw.js";import"./index-DiIPydUN.js";import"./CheckCircleFillIcon-CTO4S3o5.js";import"./CloseIcon-C-u9hzi-.js";import"./InfoFillIcon-82wzIcgI.js";import"./WarningFillIcon-Czvvjkzt.js";import"./colorManipulator-CxtuIvtX.js";import"./CircleFilledIcon-1NXGIxKT.js";import"./DotCircleFilledIcon-hDM4y7CI.js";import"./createSvgIcon-ikBOYRqt.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-pBqVVZo2.js";import"./CaretLeftIcon-Do3bT2Dg.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-buCNQJTx.js";import"./Button-DxCJAxdE.js";import"./Box-CscsmZ--.js";import"./useMediaQuery-BtGG8NJu.js";import"./getThemeProps-DrzoWQ6J.js";import"./ExpandChevronsIcon-BLL4v97i.js";import"./index-BPn3hzK2.js";import"./index-Cq3w-bFz.js";import"./useTranslation-5b1lrk9S.js";import"./Grid-gxGiWgv6.js";import"./Container-6FgYmvWb.js";import"./useThemeProps-CSNa12iN.js";const Ao={title:"components/navigation/Accordion",component:s,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function l(o){const{disabled:r}=o,i=p({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(d,{children:e.jsx(a,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(s,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const u=o=>{const{disabled:r}=o;return`
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
  );`},t={render:o=>e.jsx(l,{...o}),args:{disabled:!1},parameters:{docs:{source:{type:"dynamic",transform:(o,r)=>u(r.args)}}}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const xo=["Main"];export{t as Main,xo as __namedExportsOrder,Ao as default};
//# sourceMappingURL=Accordion.stories-BujzrSPb.js.map
