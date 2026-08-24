import{j as e}from"./iframe-ybkpfesg.js";import{U as C}from"./UserIcon-CbJXryeT.js";import{R as x}from"./index-Bw4aByXx.js";import{R as k,a as v,b as j}from"./index-aUVLDZhp.js";import{I as w}from"./IconWithCircularBackground-RTAl3Okr.js";import{B as S}from"./Box-CxkQqgRU.js";import{T as b}from"./Typography-C7IK21PQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DivCRy4_.js";import"./CircularProgress-BS6Tejhx.js";import"./memoTheme-ECsbPGKm.js";import"./styled-njvUt4qA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-DFTACu-G.js";import"./index-BBRVc8X4.js";import"./Button-RvM5TopQ.js";import"./ButtonBase-r2gcnXMY.js";import"./useReducedMotion-DIXOm1dN.js";import"./useTimeout-D8jYUdJi.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-DDzOwmMd.js";import"./useThemeProps-DjU7c1YM.js";import"./getThemeProps-DRvL5G6T.js";import"./index-sh5UGZO2.js";import"./CircleFilledIcon-D8HNNGS6.js";import"./resolvePaletteColorPath-CiHtyhJn.js";const ee={title:"components/display/CardShell",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"CardShell is a low-level building-block component for card structure and styling. It provides header, content, and footer slots with different variants (card, subcard) and themes (default, brand, sunken). Unlike a ready-to-use Card component, CardShell has no built-in content and serves as a foundation for building more complex cards."}},viewport:{options:{mobile375:{name:"Mobile 375",styles:{height:"900px",width:"375px"}},tablet768:{name:"Tablet 768",styles:{height:"900px",width:"768px"}}}},controls:{include:["variant","theme","fullHeight","borderless","header","children","footer","testIds"]}},argTypes:{variant:{control:"select",options:["card","subcard"],description:"Visual variant of the card"},theme:{control:"select",options:["default","brand","sunken"],description:"Color theme of the card"},fullHeight:{control:"boolean",description:"Whether the card should take full height of its container"},borderless:{control:"boolean",description:"Renders the shell without any border"},header:{control:!1,description:"Header content (ReactNode)"},children:{control:!1,description:"Main content (ReactNode)"},footer:{control:!1,description:"Footer content (ReactNode)"},testIds:{control:!1,description:"Test IDs for the card elements"}}},a=()=>e.jsx(j,{title:"Kortelės antraštė",description:"Paaiškinimas apie šios kortelės turinį"}),r=()=>e.jsx(S,{sx:{alignItems:"center",color:"text.primary",display:"flex",justifyContent:"center",minHeight:{xs:"9.625rem",md:"11.5rem"},px:3,width:"100%"},children:e.jsx(b,{align:"center",children:"Turinys (Body slot)"})}),t=()=>e.jsxs(v,{children:[e.jsx(x,{color:"grey",variant:"outlined",children:"Atšaukti"}),e.jsx(x,{children:"Tęsti"})]}),o={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},n={args:{variant:"subcard",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},s={args:{variant:"card",theme:"brand",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},i={args:{variant:"card",theme:"sunken",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},d={args:{variant:"card",theme:"default",header:e.jsx(j,{actions:e.jsx(x,{color:"grey",variant:"outlined",children:"Redaguoti"}),count:4,description:"Paaiškinimas apie šios kortelės turinį",icon:e.jsx(w,{Icon:C,size:"medium"}),title:"Pasirinktos teisės"}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},c={args:{variant:"card",theme:"brand",borderless:!0,header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})}},l={args:{variant:"card",theme:"default",children:e.jsx(r,{}),footer:e.jsx(t,{})}},m={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(v,{align:"start",stretchOnMobile:!1,children:e.jsx(x,{variant:"link",children:"Žiūrėti visas"})})}},p={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{})}},h={args:{variant:"card",theme:"default",children:e.jsx(r,{})}},u={args:{variant:"card",theme:"default",fullHeight:!0,header:e.jsx(a,{}),children:e.jsx(S,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{align:"center",children:"Pilno aukščio turinys"})}),footer:e.jsx(t,{})},decorators:[y=>e.jsx(S,{sx:{height:"500px"},children:e.jsx(y,{})})]},g={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})},tags:["viewport-375","!autodocs"],globals:{viewport:{value:"mobile375"}}},f={args:{variant:"card",theme:"default",header:e.jsx(a,{}),children:e.jsx(r,{}),footer:e.jsx(t,{})},tags:["viewport-768","!autodocs"],globals:{viewport:{value:"tablet768"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <RcSesCardHeader actions={<RcSesButton color='grey' variant='outlined'>
            Redaguoti
          </RcSesButton>} count={4} description='Paaiškinimas apie šios kortelės turinį' icon={<RcSesIconWithCircularBackground Icon={UserIcon} size='medium' />} title='Pasirinktos teisės' />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'brand',
    borderless: true,
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    children: <SampleContent />,
    footer: <RcSesCardFooter align='start' stretchOnMobile={false}>
        <RcSesButton variant='link'>Žiūrėti visas</RcSesButton>
      </RcSesCardFooter>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const re=["Default","SubcardVariant","BrandTheme","SunkenTheme","HeaderComplete","Borderless","WithoutHeader","FooterSingleLink","WithoutFooter","ContentOnly","FullHeight","MobileViewport","TabletViewport"];export{c as Borderless,s as BrandTheme,h as ContentOnly,o as Default,m as FooterSingleLink,u as FullHeight,d as HeaderComplete,g as MobileViewport,n as SubcardVariant,i as SunkenTheme,f as TabletViewport,p as WithoutFooter,l as WithoutHeader,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=CardShell.stories-BFRGWkFz.js.map
