import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,u as p,a}from"./index-C0iiplMS.js";import{F as d}from"./FieldView-BeHDZRgt.js";import"./index-yBjzXJbu.js";import"./WarningDiamondFillIcon-B5tgaNdj.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./createTheme-ClYpPn9r.js";import"./styled-wPX_n2pi.js";import"./generateUtilityClasses-B2ID6taa.js";import"./defaultTheme-Ca0qI0zY.js";import"./useSlot-CuWxPpqt.js";import"./resolveComponentProps-US7Z0XfO.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./DefaultPropsProvider-DlaphqLI.js";import"./useControlled-DKQkVSHg.js";import"./utils-lKY8cqOr.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-DMf7ls7Q.js";import"./useTheme-CmrYzTbF.js";import"./useTimeout-DgQ6HlaJ.js";import"./composeClasses-fLhin0tj.js";import"./Paper-BJpnW-nv.js";import"./ButtonBase-D81Lsw8O.js";import"./useIsFocusVisible-DPtOLna9.js";import"./palette-ClGEQNft.js";import"./index-2tQkZB-T.js";import"./index-89Bjl92K.js";import"./CheckCircleFillIcon-8AwLfp6d.js";import"./InfoFillIcon-DxB5lQUF.js";import"./WarningFillIcon-KbN-F540.js";import"./colorManipulator-CxtuIvtX.js";import"./DotCircleFilledIcon-CwEjIX73.js";import"./createSvgIcon-ikBOYRqt.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-pBqVVZo2.js";import"./CaretLeftIcon-B-8nUByR.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-B5icZ0cQ.js";import"./Button-DxCJAxdE.js";import"./Box-CscsmZ--.js";import"./useMediaQuery-BtGG8NJu.js";import"./getThemeProps-DrzoWQ6J.js";import"./ExpandChevronsIcon-Dw9vxjOg.js";import"./index-e6BxIX1I.js";import"./index-CUbLQLhc.js";import"./useTranslation-5b1lrk9S.js";import"./Grid-gxGiWgv6.js";import"./Container-6FgYmvWb.js";import"./useThemeProps-CSNa12iN.js";const go={title:"components/navigation/Accordion",component:s,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function l(o){const{disabled:r}=o,i=p({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(d,{children:e.jsx(a,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(s,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const u=o=>{const{disabled:r}=o;return`
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const fo=["Main"];export{t as Main,fo as __namedExportsOrder,go as default};
//# sourceMappingURL=Accordion.stories-C99kfeyM.js.map
