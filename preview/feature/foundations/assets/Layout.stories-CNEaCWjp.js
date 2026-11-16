import{j as n}from"./iframe-C5f9Zc7Z.js";import{l as i}from"./layoutTokens-B7J1AaD6.js";import{B as t}from"./Box-B61C4jPN.js";import{T as a}from"./Typography-Cu6X7zgN.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./memoTheme-aFWhReI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const x={title:"Fixtures/Foundations/Layout",tags:["no-snapshot","!dev"],parameters:{layout:"fullscreen"}},r={parameters:{docs:{description:{story:"Admin panel container: full width minus the responsive outer padding, with no max-width. The specimen uses 12 equal stretch columns with token gutters. The nominal column-width token is not used as a minimum."}}},render:()=>n.jsxs(t,{"data-testid":"layout-fluid",sx:{width:"100%",boxSizing:"border-box",px:i["outer-padding"]},children:[n.jsx(a,{variant:"h2",children:"Fluid container and grid"}),n.jsx(t,{"data-testid":"layout-grid",sx:{display:"grid",gridTemplateColumns:"repeat(12, minmax(0, 1fr))",gap:i.gutter},children:Array.from({length:12},(e,o)=>n.jsx(t,{"data-testid":"layout-cell",sx:{minWidth:0,minHeight:"2rem",border:"0.0625rem solid",borderColor:"divider",display:"grid",placeItems:"center"},children:o+1},o))}),["narrow","medium","wide"].map(e=>n.jsxs(t,{"data-testid":`layout-${e}`,sx:{width:"100%",maxWidth:i[`container-${e}-width`],marginInline:"auto",border:"0.0625rem solid",borderColor:"divider"},children:[e," container"]},e))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const g=["Fluid"];export{r as Fluid,g as __namedExportsOrder,x as default};
//# sourceMappingURL=Layout.stories-CNEaCWjp.js.map
