import{j as e}from"./iframe-9i3zOe15.js";import{U as b}from"./UserIcon-BjpxBtOp.js";import{R as f}from"./index-D07waPta.js";import{R as y,a as S,b as w}from"./index-BjLBbnjI.js";import{I as C}from"./IconWithCircularBackground-CRkhs4Ka.js";import{B as x}from"./Box-By9EthZ3.js";import{T as v}from"./Typography-BOGuBK5G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkRoZ043.js";import"./CircularProgress-BhDT9ItQ.js";import"./memoTheme-CK40nyy-.js";import"./styled-H9qSqxDp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CJ_O_2FM.js";import"./index-Beyit_TJ.js";import"./Button-zQpoYWox.js";import"./ButtonBase-BG5MV2ud.js";import"./useReducedMotion-hEJ8tpyY.js";import"./useTimeout-C1B6BPiE.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-B9nIV3_T.js";import"./useThemeProps-CVM5RI7L.js";import"./getThemeProps-Cxw-WB6g.js";import"./index-BDL9AJH7.js";import"./CircleFilledIcon-D5wVBQSs.js";import"./resolvePaletteColorPath-BLJn5fq7.js";const $={title:"Molecules/CardShell",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"CardShell is a low-level building-block component for card structure and styling. It provides header, content, and footer slots with different variants (card, subcard) and themes (default, brand, sunken). Unlike a ready-to-use Card component, CardShell has no built-in content and serves as a foundation for building more complex cards."}},viewport:{options:{mobile375:{name:"Mobile 375",styles:{height:"900px",width:"375px"}},tablet768:{name:"Tablet 768",styles:{height:"900px",width:"768px"}}}},controls:{include:["variant","theme","fullHeight","borderless","header","children","footer","testIds"]}},argTypes:{variant:{control:"select",options:["card","subcard"],description:"Visual variant of the card"},theme:{control:"select",options:["default","brand","sunken"],description:"Color theme of the card"},fullHeight:{control:"boolean",description:"Whether the card should take full height of its container"},borderless:{control:"boolean",description:"Renders the shell without any border"},header:{control:!1,description:"Header content (ReactNode)"},children:{control:!1,description:"Main content (ReactNode)"},footer:{control:!1,description:"Footer content (ReactNode)"},testIds:{control:!1,description:"Test IDs for the card elements"}}},a=()=>e.jsx(S,{title:"Kortelės antraštė",description:"Paaiškinimas apie šios kortelės turinį"}),r=()=>e.jsx(x,{sx:{alignItems:"center",color:"text.primary",display:"flex",justifyContent:"center",minHeight:{xs:"9.625rem",md:"11.5rem"},px:3,width:"100%"},children:e.jsx(v,{align:"center",children:"Turinys (Body slot)"})}),t=()=>e.jsxs(w,{children:[e.jsx(f,{color:"grey",variant:"outlined",children:"Atšaukti"}),e.jsx(f,{children:"Tęsti"})]}),o={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},n={args:{variant:"subcard",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},s={args:{variant:"card",theme:"brand",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},i={args:{variant:"card",theme:"sunken",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},c={args:{variant:"card",theme:"default",header:e.jsx(S,{actions:e.jsx(f,{color:"grey",variant:"outlined",children:"Redaguoti"}),count:4,description:"Paaiškinimas apie šios kortelės turinį",icon:e.jsx(C,{Icon:b,size:"medium"}),title:"Pasirinktos teisės"}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},d={args:{variant:"card",theme:"brand",borderless:!0,header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},l={args:{variant:"card",theme:"default",children:e.jsx(r,{}),footer:e.jsx(t,{})}},m={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{})}},p={args:{variant:"card",theme:"default",children:e.jsx(r,{})}},h={args:{variant:"card",theme:"default",fullHeight:!0,header:e.jsx(a,{}),children:e.jsx(x,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(v,{align:"center",children:"Pilno aukščio turinys"})}),footer:e.jsx(t,{})},decorators:[j=>e.jsx(x,{sx:{height:"500px"},children:e.jsx(j,{})})]},u={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})},tags:["viewport-375","!autodocs"],globals:{viewport:{value:"mobile375"}}},g={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})},tags:["viewport-768","!autodocs"],globals:{viewport:{value:"tablet768"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subcard',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'brand',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'sunken',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <RcSesTitleBlock actions={<RcSesButton color='grey' variant='outlined'>
            Redaguoti
          </RcSesButton>} count={4} description='Paaiškinimas apie šios kortelės turinį' icon={<RcSesIconWithCircularBackground Icon={UserIcon} size='medium' />} title='Pasirinktos teisės' />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'brand',
    borderless: true,
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    fullHeight: true,
    header: <SampleHeader />,
    children: <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Typography align='center'>Pilno aukščio turinys</Typography>
      </Box>,
    footer: <SampleFooter />
  },
  decorators: [Story => <Box sx={{
    height: '500px'
  }}>
        <Story />
      </Box>]
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  },
  // Two separate mechanisms, deliberately: the tag sets Playwright's browser
  // width for the baseline, the global sets the canvas iframe width for anyone
  // reviewing in Storybook. Docs pages render stories inline at the container's
  // width, where neither applies, so this one is kept out of the docs page
  // rather than showing a desktop card under a mobile heading.
  tags: ['viewport-375', '!autodocs'],
  globals: {
    viewport: {
      value: 'mobile375'
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  },
  tags: ['viewport-768', '!autodocs'],
  globals: {
    viewport: {
      value: 'tablet768'
    }
  }
}`,...g.parameters?.docs?.source}}};const ee=["Default","SubcardVariant","BrandTheme","SunkenTheme","HeaderComplete","Borderless","WithoutHeader","WithoutFooter","ContentOnly","FullHeight","MobileViewport","TabletViewport"];export{d as Borderless,s as BrandTheme,p as ContentOnly,o as Default,h as FullHeight,c as HeaderComplete,u as MobileViewport,n as SubcardVariant,i as SunkenTheme,g as TabletViewport,m as WithoutFooter,l as WithoutHeader,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=CardShell.stories-A-ntIz92.js.map
