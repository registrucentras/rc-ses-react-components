import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DE548F1E.js";import{af as d}from"./index-gxO2j-ug.js";import{p as l,s as p,g as a,w as c,e as x}from"./palette-ClGEQNft.js";import"./index-yBjzXJbu.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-AaZiSNjc.js";import"../sb-preview/runtime.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./index-C_pJYAGD.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function n(i){const r={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundations/Colors"}),`
`,e.jsx(r.h1,{id:"-color-palette",children:"🎨 Color Palette"}),`
`,e.jsxs(r.p,{children:["All color tokens used throughout RC SES React Components are defined centrally in ",e.jsx(r.code,{children:"src/theme/palette.tsx"})," and can be imported from the library."]}),`
`,e.jsx(r.h2,{id:"primary-color",children:"Primary Color"}),`
`,e.jsx(r.p,{children:"Used for main actions, links, and interactive elements."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"32px"},children:Object.entries(l).map(([t,o])=>e.jsxs(r.div,{style:{textAlign:"center"},children:[e.jsx(r.div,{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"8px",marginBottom:"8px",border:"1px solid #ddd"}}),e.jsx(r.div,{style:{fontSize:"12px",fontWeight:"600"},children:t}),e.jsx(r.div,{style:{fontSize:"11px",color:"#666",fontFamily:"monospace"},children:o})]},t))}),`
`,e.jsx(r.h2,{id:"secondary-color",children:"Secondary Color"}),`
`,e.jsx(r.p,{children:"Used for secondary actions and highlights."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"32px"},children:Object.entries(p).map(([t,o])=>e.jsxs(r.div,{style:{textAlign:"center"},children:[e.jsx(r.div,{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"8px",marginBottom:"8px",border:"1px solid #ddd"}}),e.jsx(r.div,{style:{fontSize:"12px",fontWeight:"600"},children:t}),e.jsx(r.div,{style:{fontSize:"11px",color:"#666",fontFamily:"monospace"},children:o})]},t))}),`
`,e.jsx(r.h2,{id:"neutral-colors-grey",children:"Neutral Colors (Grey)"}),`
`,e.jsx(r.p,{children:"Used for text, borders, backgrounds, and disabled states."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"32px"},children:Object.entries(a).map(([t,o])=>e.jsxs(r.div,{style:{textAlign:"center"},children:[e.jsx(r.div,{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"8px",marginBottom:"8px",border:"1px solid #ddd"}}),e.jsx(r.div,{style:{fontSize:"12px",fontWeight:"600"},children:t}),e.jsx(r.div,{style:{fontSize:"11px",color:"#666",fontFamily:"monospace"},children:o})]},t))}),`
`,e.jsx(r.h2,{id:"warning-color",children:"Warning Color"}),`
`,e.jsx(r.p,{children:"Used for warning messages and alerts."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"32px"},children:Object.entries(c).map(([t,o])=>e.jsxs(r.div,{style:{textAlign:"center"},children:[e.jsx(r.div,{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"8px",marginBottom:"8px",border:"1px solid #ddd"}}),e.jsx(r.div,{style:{fontSize:"12px",fontWeight:"600"},children:t}),e.jsx(r.div,{style:{fontSize:"11px",color:"#666",fontFamily:"monospace"},children:o})]},t))}),`
`,e.jsx(r.h2,{id:"error-color",children:"Error Color"}),`
`,e.jsx(r.p,{children:"Used for error messages and destructive actions."}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",marginBottom:"32px"},children:Object.entries(x).map(([t,o])=>e.jsxs(r.div,{style:{textAlign:"center"},children:[e.jsx(r.div,{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"8px",marginBottom:"8px",border:"1px solid #ddd"}}),e.jsx(r.div,{style:{fontSize:"12px",fontWeight:"600"},children:t}),e.jsx(r.div,{style:{fontSize:"11px",color:"#666",fontFamily:"monospace"},children:o})]},t))}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.p,{children:"Import and use color tokens in your components:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`// Import the entire palette
import palette from '@/theme/palette'

// Use in components
<Box sx={{ backgroundColor: palette.primary['50'] }} />

// Or destructure specific colors
import { primary, error, grey } from '@/theme/palette'

const color = primary['600']
`})})]})}function R(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{R as default};
//# sourceMappingURL=Colors-BN6_gypM.js.map
