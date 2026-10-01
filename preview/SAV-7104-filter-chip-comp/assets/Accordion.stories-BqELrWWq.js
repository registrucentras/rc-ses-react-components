import{j as e}from"./iframe-oOAmD4TE.js";import{R as n,u as c,a as s}from"./index-DDRQO2Wp.js";import{F as m}from"./FieldView-Bkl6G3dQ.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C0p7kxQG.js";import"./useSlot-BN0PjiqS.js";import"./mergeSlotProps-B6sCsr3A.js";import"./useReducedMotion-D241Nrf-.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./utils-BL043Ngk.js";import"./useControlled-Cherjg2E.js";import"./Collapse-D_zOmlrM.js";import"./Transition-D0oBGu9f.js";import"./Paper-L7RkEDKt.js";import"./ButtonBase-LWwyvxNZ.js";import"./useTimeout-rly75plW.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DjJazLzt.js";import"./DotCircleFilledIcon-CN0g-8Rh.js";import"./createSvgIcon-HazpAT27.js";import"./isMuiElement-DdmivqqS.js";import"./useRovingTabIndex-Dy6zaBQo.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerDocument-DW-IO8s5.js";import"./setRef-CQn2LYBI.js";import"./Skeleton-CIhwxcWt.js";import"./Button-CBpA4Q43.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DuH1QHQ2.js";import"./Box-D3q7z-6H.js";import"./index-BL-L9z4B.js";import"./getThemeProps-Cw3bEYjS.js";import"./index-DbpqsCqH.js";import"./index-uCV5HJUJ.js";import"./useTranslation-C9H_ZzmQ.js";import"./index-Crc7zUyM.js";import"./Grid-D3AWijOV.js";import"./useThemeProps-BRimgksQ.js";import"./Container-C2wMGeOj.js";const U={title:"Organisms/Accordion",component:n,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"]};function a(o){const{disabled:r}=o,i=c({initialState:{form:{canToggle:!0,expanded:!1,state:"active",title:"Accordion title"}}});return e.jsx(m,{children:e.jsx(s,{showProgressStepper:!0,accordionController:i,slotProps:{container:{maxWidth:"lg"}},children:e.jsx(n,{id:"form",controller:i,disabled:r,children:"Here goes Accordeon content"})})})}const p=o=>{const{disabled:r}=o;return`
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
//# sourceMappingURL=Accordion.stories-BqELrWWq.js.map
