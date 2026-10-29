import{j as r}from"./iframe-CWj8oZOZ.js";import{B as a}from"./Box-DrHRxVUy.js";import{T as u}from"./Typography-p54XM_E9.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./memoTheme-rzYRwBep.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function d(){var e="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/theme/layoutTokens.ts",t="d63da94901dc7bba29520786fb1c470df4bdac81",s=globalThis,c="__coverage__",l={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/theme/layoutTokens.ts",statementMap:{0:{start:{line:1,column:21},end:{line:10,column:1}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/theme/layoutTokens.ts"],names:[],mappings:"AACA,MAAM,eAAe;AAAA,EACnB,gBAAgB;AAAA,EAChB,0BAA0B;AAAA,EAC1B,0BAA0B;AAAA,EAC1B,wBAAwB;AAAA,EACxB,iBAAiB;AAAA,EACjB,QAAQ;AAAA,EACR,6BAA6B;AAAA,EAC7B,iBAAiB;AACnB;AAEA,SAAS;AACT,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d63da94901dc7bba29520786fb1c470df4bdac81"},n=s[c]||(s[c]={});(!n[e]||n[e].hash!==t)&&(n[e]=l);var m=n[e];return d=function(){return m},m}d();const i=(d().s[0]++,{"column-width":"var(--rc-layout-column-width)","container-medium-width":"var(--rc-layout-container-medium-width)","container-narrow-width":"var(--rc-layout-container-narrow-width)","container-wide-width":"var(--rc-layout-container-wide-width)","grid-width-lg":"var(--rc-layout-grid-width-lg)",gutter:"var(--rc-layout-gutter)","outer-container-max-width":"var(--rc-layout-outer-container-max-width)","outer-padding":"var(--rc-layout-outer-padding)"}),v={title:"Foundations/Layout",tags:["no-snapshot"],parameters:{layout:"fullscreen"}},o={parameters:{docs:{description:{story:"Admin panel container: full width minus the responsive outer padding, with no max-width. The specimen uses 12 equal stretch columns with token gutters. The nominal column-width token is not used as a minimum."}}},render:()=>r.jsxs(a,{"data-testid":"layout-fluid",sx:{width:"100%",boxSizing:"border-box",px:i["outer-padding"]},children:[r.jsx(u,{variant:"h2",children:"Fluid container and grid"}),r.jsx(a,{"data-testid":"layout-grid",sx:{display:"grid",gridTemplateColumns:"repeat(12, minmax(0, 1fr))",gap:i.gutter},children:Array.from({length:12},(e,t)=>r.jsx(a,{"data-testid":"layout-cell",sx:{minWidth:0,minHeight:"2rem",border:"0.0625rem solid",borderColor:"divider",display:"grid",placeItems:"center"},children:t+1},t))}),["narrow","medium","wide"].map(e=>r.jsxs(a,{"data-testid":`layout-${e}`,sx:{width:"100%",maxWidth:i[`container-${e}-width`],marginInline:"auto",border:"0.0625rem solid",borderColor:"divider"},children:[e," container"]},e))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Admin panel container: full width minus the responsive outer padding, with no max-width. The specimen uses 12 equal stretch columns with token gutters. The nominal column-width token is not used as a minimum.'
      }
    }
  },
  render: () => <Box data-testid='layout-fluid' sx={{
    width: '100%',
    boxSizing: 'border-box',
    px: layoutTokens['outer-padding']
  }}>
      <Typography variant='h2'>Fluid container and grid</Typography>
      <Box data-testid='layout-grid' sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: layoutTokens.gutter
    }}>
        {Array.from({
        length: 12
      }, (_, index) => <Box key={index} data-testid='layout-cell' sx={{
        minWidth: 0,
        minHeight: '2rem',
        border: '0.0625rem solid',
        borderColor: 'divider',
        display: 'grid',
        placeItems: 'center'
      }}>
            {index + 1}
          </Box>)}
      </Box>
      {(['narrow', 'medium', 'wide'] as const).map(variant => <Box key={variant} data-testid={\`layout-\${variant}\`} sx={{
      width: '100%',
      maxWidth: layoutTokens[\`container-\${variant}-width\`],
      marginInline: 'auto',
      border: '0.0625rem solid',
      borderColor: 'divider'
    }}>
          {variant} container
        </Box>)}
    </Box>
}`,...o.parameters?.docs?.source}}};const B=["Fluid"];export{o as Fluid,B as __namedExportsOrder,v as default};
//# sourceMappingURL=Layout.stories-DbFyiKhe.js.map
