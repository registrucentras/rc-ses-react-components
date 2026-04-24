import{j as e}from"./jsx-runtime-CUA6FXPC.js";import{R as a,u as m,a as l}from"./index-yFxRZASj.js";import{F as d}from"./FieldView-DlSIX70K.js";import"./index-z7qk6wml.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./WarningDiamondFillIcon-ELnPx8VI.js";import"./IconBase.es-DjmddrNl.js";import"./DefaultPropsProvider-CQ3SScwb.js";import"./styled-Daztrkv7.js";import"./useSlot-D2klu800.js";import"./resolveComponentProps-DhO2ZoN1.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-DUpnZ31D.js";import"./useControlled-B5uRKyCK.js";import"./utils-C1ZKQ1NO.js";import"./index-EdaIQj1o.js";import"./index--5oNNx0P.js";import"./useTheme-9nhYiUal.js";import"./palette-QicdTY_r.js";import"./Paper-DSbm6YCQ.js";import"./ButtonBase-Dl49DJwZ.js";import"./useIsFocusVisible-Bu7saxPt.js";import"./index-kHdMr0n5.js";import"./index-BCxq3IvY.js";import"./WarningFillIcon-B-6mAluf.js";import"./colorManipulator-vIAUXSYP.js";import"./DotCircleFilledIcon-v8rpIRE-.js";import"./createSvgIcon-HNnMVEjO.js";import"./isMuiElement-CYARxs4c.js";import"./Skeleton-DWw24buQ.js";import"./CaretLeftIcon-D9i8HN0g.js";import"./CaretLeft.es-1l3k0mFs.js";import"./CaretRightBoldIcon-AI-gELqb.js";import"./Button-jDihIosU.js";import"./Box-DKPq_8I0.js";import"./createBox-BiBTuV_q.js";import"./useMediaQuery-Bir-LBgV.js";import"./getThemeProps-BHzTOnww.js";import"./ExpandChevronsIcon-5SAkCLP3.js";import"./index-DAIq58k-.js";import"./Grid-CxpsPUEe.js";import"./Container-BrZjYAns.js";import"./useThemeProps-DiTfLFzM.js";const eo={title:"components/navigation/Accordion",component:a,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]},p=t=>{const{disabled:r}=t,n=m({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(d,{children:e.jsx(l,{showProgressStepper:!0,accordionController:n,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(a,{id:"form",controller:n,disabled:r,children:"Here goes Accordeon content"})})})},u=t=>{const{disabled:r}=t;return`
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
  );`},o=p.bind({});o.args={disabled:!1};o.parameters={docs:{source:{type:"dynamic",transform:(t,r)=>u(r.args)}}};var i,c,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    disabled
  } = args;
  const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: true,
        expanded: false,
        state: 'active',
        title: 'Accordion title'
      }
    }
  });
  return <FieldView>
      <RcSesServiceFormContainer showProgressStepper accordionController={accordionController} slotProps={{
      container: {
        maxWidth: 'lg'
      }
    }}>
        <RcSesAccordion id='form' controller={accordionController} disabled={disabled}>
          Here goes Accordeon content
        </RcSesAccordion>
      </RcSesServiceFormContainer>
    </FieldView>;
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const no=["Main"];export{o as Main,no as __namedExportsOrder,eo as default};
//# sourceMappingURL=Accordion.stories-ua25DY-N.js.map
