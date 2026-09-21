import{j as e}from"./iframe-CK086RzA.js";import{U as k}from"./UserIcon-DwOVWeau.js";import{R as x}from"./index-DuWPu-hG.js";import{R as C,a as b,b as j}from"./index-B7X8iXsE.js";import{I as w}from"./IconWithCircularBackground-kujEwprO.js";import{B as S}from"./Box-COcNGsME.js";import{T as v}from"./Typography-OJqOExV4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-66mtk00X.js";import"./CircularProgress-C4iCEMwq.js";import"./memoTheme-B9yv6Iln.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-cxgvJEOf.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Cx_jOgT7.js";import"./index-BRxwbWXG.js";import"./Button-hBQdmQgv.js";import"./ButtonBase-BN7ybivh.js";import"./useReducedMotion-vAHoQU6O.js";import"./useTimeout-D-kiCzpT.js";import"./isFocusVisible-B8k4qzLc.js";import"./Stack-Cx2ve3hu.js";import"./useThemeProps-VYGWxZcG.js";import"./getThemeProps-Cx_CYi5z.js";import"./index-CMNOlI5l.js";import"./CircleFilledIcon-BxhyTCLU.js";import"./resolvePaletteColorPath-sCKcxSkH.js";const $={title:"Molecules/CardShell",component:C,tags:["autodocs"],parameters:{docs:{description:{component:"CardShell is a low-level building-block component for card structure and styling. It provides header, content, and footer slots with different variants (card, subcard) and themes (default, brand, sunken). Unlike a ready-to-use Card component, CardShell has no built-in content and serves as a foundation for building more complex cards."}},viewport:{options:{mobile375:{name:"Mobile 375",styles:{height:"900px",width:"375px"}},tablet768:{name:"Tablet 768",styles:{height:"900px",width:"768px"}}}},controls:{include:["variant","theme","fullHeight","borderless","contentGap","footerGap","header","children","footer","testIds"]}},argTypes:{variant:{control:"select",options:["card","subcard"],description:"Visual variant of the card"},theme:{control:"select",options:["default","brand","sunken"],description:"Color theme of the card"},fullHeight:{control:"boolean",description:"Whether the card should take full height of its container"},borderless:{control:"boolean",description:"Renders the shell without any border"},contentGap:{control:"text",description:"Overrides the variant preset's header-to-content gap (e.g. '1.5rem')"},footerGap:{control:"text",description:"Overrides the variant preset's content-to-footer gap (e.g. '1.5rem')"},header:{control:!1,description:"Header content (ReactNode)"},children:{control:!1,description:"Main content (ReactNode)"},footer:{control:!1,description:"Footer content (ReactNode)"},testIds:{control:!1,description:"Test IDs for the card elements"}}},t=()=>e.jsx(b,{title:"Kortelės antraštė",description:"Paaiškinimas apie šios kortelės turinį"}),r=()=>e.jsx(S,{sx:{alignItems:"center",backgroundColor:"grey.100",borderRadius:1,border:"1px dashed",borderColor:"grey.300",color:"text.primary",display:"flex",justifyContent:"center",minHeight:{xs:"9.625rem",md:"11.5rem"},px:3,width:"100%"},children:e.jsx(v,{align:"center",children:"Turinys (Body slot)"})}),a=()=>e.jsxs(j,{children:[e.jsx(x,{color:"grey",variant:"outlined",children:"Atšaukti"}),e.jsx(x,{children:"Tęsti"})]}),o={args:{variant:"card",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},n={args:{variant:"subcard",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},s={args:{variant:"card",theme:"brand",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},i={args:{variant:"card",theme:"sunken",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},d={args:{variant:"card",theme:"default",header:e.jsx(b,{actions:e.jsx(x,{color:"grey",variant:"outlined",children:"Redaguoti"}),count:4,description:"Paaiškinimas apie šios kortelės turinį",icon:e.jsx(w,{Icon:k,size:"medium"}),title:"Pasirinktos teisės"}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},c={args:{variant:"card",theme:"brand",borderless:!0,header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})}},l={args:{variant:"card",theme:"default",children:e.jsx(r,{}),footer:e.jsx(a,{})}},p={args:{variant:"card",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{})}},m={args:{variant:"card",theme:"default",children:e.jsx(r,{})}},h={args:{variant:"card",theme:"default",fullHeight:!0,header:e.jsx(t,{}),children:e.jsxs(S,{sx:{alignItems:"center",backgroundColor:"grey.100",border:"1px dashed",borderColor:"grey.300",borderRadius:1,display:"flex",flexDirection:"column",gap:1,height:"100%",justifyContent:"center",px:3},children:[e.jsx(v,{align:"center",variant:"h6",children:"Pilno aukščio turinys"}),e.jsx(v,{align:"center",variant:"body2",sx:{color:"text.secondary"},children:"Šis blokas užpildo visą turimą aukštį tarp antraštės ir poraštės, nepriklausomai nuo turinio kiekio."})]}),footer:e.jsx(a,{})},decorators:[y=>e.jsx(S,{sx:{height:"500px"},children:e.jsx(y,{})})]},u={args:{variant:"card",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})},tags:["viewport-375","!autodocs"],globals:{viewport:{value:"mobile375"}}},g={args:{variant:"card",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(a,{})},tags:["viewport-768","!autodocs"],globals:{viewport:{value:"tablet768"}}},f={args:{variant:"card",theme:"default",header:e.jsx(t,{}),children:e.jsx(r,{}),footer:e.jsx(j,{align:"start",children:e.jsx(x,{variant:"link",children:"Peržiūrėti DUK"})})},tags:["viewport-375","!autodocs"],globals:{viewport:{value:"mobile375"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    header: <RcSesTitleBlock actions={<RcSesButton color='grey' variant='outlined'>
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    fullHeight: true,
    header: <SampleHeader />,
    children: <Box sx={{
      alignItems: 'center',
      backgroundColor: 'grey.100',
      border: '1px dashed',
      borderColor: 'grey.300',
      borderRadius: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      height: '100%',
      justifyContent: 'center',
      px: 3
    }}>
        <Typography align='center' variant='h6'>
          Pilno aukščio turinys
        </Typography>
        <Typography align='center' variant='body2' sx={{
        color: 'text.secondary'
      }}>
          Šis blokas užpildo visą turimą aukštį tarp antraštės ir poraštės, nepriklausomai
          nuo turinio kiekio.
        </Typography>
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <RcSesCardFooter align='start'>
        <RcSesButton variant='link'>Peržiūrėti DUK</RcSesButton>
      </RcSesCardFooter>
  },
  tags: ['viewport-375', '!autodocs'],
  globals: {
    viewport: {
      value: 'mobile375'
    }
  }
}`,...f.parameters?.docs?.source}}};const ee=["Default","SubcardVariant","BrandTheme","SunkenTheme","HeaderComplete","Borderless","WithoutHeader","WithoutFooter","ContentOnly","FullHeight","MobileViewport","TabletViewport","LeftAlignedFooterMobileViewport"];export{c as Borderless,s as BrandTheme,m as ContentOnly,o as Default,h as FullHeight,d as HeaderComplete,f as LeftAlignedFooterMobileViewport,u as MobileViewport,n as SubcardVariant,i as SunkenTheme,g as TabletViewport,p as WithoutFooter,l as WithoutHeader,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=CardShell.stories-BA-hrzw3.js.map
