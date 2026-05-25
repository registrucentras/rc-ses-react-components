import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s,u as p,a}from"./index-CRmIU376.js";import{F as d}from"./FieldView-B38GlVrK.js";import"./index-yBjzXJbu.js";import"./WarningDiamondFillIcon-CH4oXtHr.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./createTheme-CE_F1kTP.js";import"./styled-C6YoRvUv.js";import"./generateUtilityClasses-Bd2LNSfu.js";import"./defaultTheme-Dm7VEHNB.js";import"./useSlot-fZOY3HgB.js";import"./resolveComponentProps-C1F0sgKN.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-5O8tYVKT.js";import"./DefaultPropsProvider-5ViKjXxd.js";import"./useControlled-DKQkVSHg.js";import"./utils-Lzp63aZj.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-QGUwL8H7.js";import"./useTheme-I6SAPIjI.js";import"./composeClasses-fLhin0tj.js";import"./Paper-CtGlVrv4.js";import"./ButtonBase-DX0QcqVB.js";import"./useIsFocusVisible-BAiRvXvd.js";import"./palette-ClGEQNft.js";import"./index-BHe4ARcY.js";import"./index-Cwr-3gDT.js";import"./CheckCircleFillIcon-Bql_fcTY.js";import"./InfoFillIcon-Bfb9a4Dx.js";import"./WarningFillIcon-FNT7Ikck.js";import"./colorManipulator-CUiWywnD.js";import"./DotCircleFilledIcon-f7T89HoM.js";import"./createSvgIcon-WGYP2OZw.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-6_jdm7cD.js";import"./CaretLeftIcon-Do3bT2Dg.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-buCNQJTx.js";import"./Button-CXP1VsqQ.js";import"./Box-Bp3IibaX.js";import"./useMediaQuery-BF8yednL.js";import"./getThemeProps-Q2IHMZ6M.js";import"./ExpandChevronsIcon-BLL4v97i.js";import"./index-DpfbuZGv.js";import"./Grid-ByFqrimb.js";import"./Container-BMMaYo2n.js";import"./useThemeProps-DyBR4_Qm.js";const ao={title:"components/navigation/Accordion",component:s,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function l(o){const{disabled:r}=o,i=p({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(d,{children:e.jsx(a,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(s,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const u=o=>{const{disabled:r}=o;return`
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const lo=["Main"];export{t as Main,lo as __namedExportsOrder,ao as default};
//# sourceMappingURL=Accordion.stories-DTura4sT.js.map
