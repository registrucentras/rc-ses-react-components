import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,u as p,a}from"./index-p33sXwtk.js";import{F as d}from"./FieldView-dc8eDZK6.js";import"./index-yBjzXJbu.js";import"./WarningDiamondFillIcon-D2hmvnrK.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./createTheme-D6RA70PE.js";import"./styled-Dkeuwysr.js";import"./generateUtilityClasses-B7bTzFb3.js";import"./defaultTheme-DwyOR__H.js";import"./useSlot-CYPwlsP7.js";import"./resolveComponentProps-BXZWSpOs.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./DefaultPropsProvider-uYObnQd7.js";import"./useControlled-DKQkVSHg.js";import"./utils-bVf-jb0b.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-DUEJPP8Y.js";import"./useTheme-B_bIrg9O.js";import"./useTimeout-DgQ6HlaJ.js";import"./composeClasses-fLhin0tj.js";import"./Paper-D7h8fcaq.js";import"./ButtonBase-BNb0seNi.js";import"./useIsFocusVisible-DPtOLna9.js";import"./palette-ClGEQNft.js";import"./index-C1FmUH7z.js";import"./index-fjXKyFs7.js";import"./CheckCircleFillIcon-8AwLfp6d.js";import"./CloseIcon-mqFSY7qB.js";import"./InfoFillIcon-DxB5lQUF.js";import"./WarningFillIcon-KbN-F540.js";import"./colorManipulator-BSQQ6ag_.js";import"./CircleFilledIcon-DmSE65BN.js";import"./DotCircleFilledIcon-I9KMgBZE.js";import"./createSvgIcon-DS9gVdWq.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-utglQR3P.js";import"./CaretLeftIcon-B-8nUByR.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-B5icZ0cQ.js";import"./Button-BA148XhL.js";import"./Box-CELVN5Dd.js";import"./useMediaQuery-DeqIpXRZ.js";import"./getThemeProps-DSN7qTkp.js";import"./ExpandChevronsIcon-Dw9vxjOg.js";import"./index-BUokzmaX.js";import"./index-C9XPVhf1.js";import"./useTranslation-5b1lrk9S.js";import"./Grid-BKFLkRA4.js";import"./Container-BCkeDmmX.js";import"./useThemeProps-CnjVZVIg.js";const Ao={title:"components/navigation/Accordion",component:s,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function l(o){const{disabled:r}=o,i=p({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(d,{children:e.jsx(a,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(s,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const u=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-bfh1eBCT.js.map
