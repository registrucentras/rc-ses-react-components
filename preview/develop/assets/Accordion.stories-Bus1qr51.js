import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as m,u as a,a as p}from"./index-Cy_45gA6.js";import{F as l}from"./FieldView-DFTJO-a5.js";import"./index-yBjzXJbu.js";import"./WarningDiamondFillIcon-DuhQ7VGO.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./defaultTheme-DebpQvRx.js";import"./styled-WTV67GdG.js";import"./useSlot-De_UQg_z.js";import"./resolveComponentProps-DkRHGtN-.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-9aFOjLlw.js";import"./DefaultPropsProvider-BVIYNtGV.js";import"./useControlled-DKQkVSHg.js";import"./utils-r0a3jgTl.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-BhEcWWRH.js";import"./useTheme-DSnQEdl-.js";import"./composeClasses-fLhin0tj.js";import"./Paper-BSF9GRTr.js";import"./ButtonBase-CM0MFk-i.js";import"./useIsFocusVisible-2h147_XD.js";import"./palette-DnsgEXz1.js";import"./index-Fiv7NPMM.js";import"./index-N7TCJonw.js";import"./CheckCircleFillIcon-D8nshN66.js";import"./InfoFillIcon-hYqaTFre.js";import"./WarningFillIcon-BzTJp-M1.js";import"./colorManipulator-Ds2GocCg.js";import"./DotCircleFilledIcon-Cdb7K71C.js";import"./createSvgIcon-b3XQm1yC.js";import"./isMuiElement-BPC6wUcC.js";import"./Skeleton-_xACatEu.js";import"./CaretLeftIcon-CfjbmzRV.js";import"./CaretLeft.es-CdHrrt0k.js";import"./CaretRightBoldIcon-DsRrIf-O.js";import"./Button-CtXxu81K.js";import"./Box-5aQFj6Xp.js";import"./useMediaQuery-DBSxzD_Z.js";import"./getThemeProps-B6U0-t43.js";import"./ExpandChevronsIcon-DJbAaUDV.js";import"./index-DgmoX8bI.js";import"./Grid-DdUqV8sm.js";import"./Container-8jLtJEXX.js";import"./useThemeProps-By2fPmSy.js";const mo={title:"components/navigation/Accordion",component:m,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]},d=t=>{const{disabled:r}=t,i=a({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(l,{children:e.jsx(p,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(m,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})},u=t=>{const{disabled:r}=t;return`
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
  );`},o=d.bind({});o.args={disabled:!1};o.parameters={docs:{source:{type:"dynamic",transform:(t,r)=>u(r.args)}}};var n,c,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const ao=["Main"];export{o as Main,ao as __namedExportsOrder,mo as default};
//# sourceMappingURL=Accordion.stories-Bus1qr51.js.map
