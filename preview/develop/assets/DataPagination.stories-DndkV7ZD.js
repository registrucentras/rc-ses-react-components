import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-CqJgnuY1.js";import{D as d}from"./index-Cjyf8AA0.js";import{B as y}from"./Box-5aQFj6Xp.js";import{T as f}from"./Typography-mMfwcPcY.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./ArrowRightIcon-BAellIOR.js";import"./Skeleton-_xACatEu.js";import"./defaultTheme-DebpQvRx.js";import"./styled-WTV67GdG.js";import"./DefaultPropsProvider-BVIYNtGV.js";import"./composeClasses-fLhin0tj.js";import"./colorManipulator-Ds2GocCg.js";import"./palette-DnsgEXz1.js";import"./Button-CtXxu81K.js";import"./ButtonBase-CM0MFk-i.js";import"./TransitionGroupContext-9aFOjLlw.js";import"./useIsFocusVisible-2h147_XD.js";import"./useTheme-BhEcWWRH.js";import"./useTheme-DSnQEdl-.js";import"./useMediaQuery-DBSxzD_Z.js";import"./getThemeProps-B6U0-t43.js";import"./index-D2rszWUr.js";import"./createSvgIcon-b3XQm1yC.js";import"./useControlled-DKQkVSHg.js";const M={title:"components/navigation/DataPagination",component:d,tags:["autodocs"],args:{count:12,defaultPage:1,prevLabel:"Atgal",nextLabel:"Kitas"},argTypes:{count:{control:{type:"number"}},defaultPage:{control:{type:"number"}},page:{control:{type:"number"}},onChange:{action:"pageChanged"},prevLabel:{control:{type:"text"}},nextLabel:{control:{type:"text"}}}},t={},o={render:e=>{const[a,u]=x.useState(e.page??1);return r.jsxs(y,{display:"flex",flexDirection:"column",gap:2,children:[r.jsxs(f,{variant:"body2",children:["Current page: ",a]}),r.jsx(d,{...e,page:a,onChange:n=>{var p;u(n),(p=e.onChange)==null||p.call(e,n)}})]})},args:{page:1}};var i,s,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var g,c,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.page ?? 1);
    return <Box display='flex' flexDirection='column' gap={2}>
        <Typography variant='body2'>Current page: {page}</Typography>
        <DataPagination {...args} page={page} onChange={nextPage => {
        setPage(nextPage);
        args.onChange?.(nextPage);
      }} />
      </Box>;
  },
  args: {
    page: 1
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Uncontrolled","Controlled"];export{o as Controlled,t as Uncontrolled,N as __namedExportsOrder,M as default};
//# sourceMappingURL=DataPagination.stories-DndkV7ZD.js.map
