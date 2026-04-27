import{j as r}from"./jsx-runtime-CUA6FXPC.js";import{r as x}from"./index-z7qk6wml.js";import{D as d}from"./index-8Xgs4mjz.js";import{B as y}from"./Box-Bw9i7Bet.js";import{T as f}from"./Typography-EOcFdSjP.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-DjmddrNl.js";import"./ArrowRightIcon-C3c-fMFm.js";import"./Skeleton-BF9aUL2N.js";import"./DefaultPropsProvider-C85juv10.js";import"./styled-B7PEox7f.js";import"./colorManipulator-DnbABVGE.js";import"./palette-DW5JBtDV.js";import"./Button-CMpU3nxP.js";import"./ButtonBase-C8XVWg5R.js";import"./TransitionGroupContext-CFTfohW9.js";import"./useIsFocusVisible-CTcnAXki.js";import"./useTheme-B_YD_k6t.js";import"./useMediaQuery-B3sOGpc7.js";import"./getThemeProps-CY3DWdQx.js";import"./index-Ck6dHkRz.js";import"./createSvgIcon-dN7utv6K.js";import"./useControlled-B5uRKyCK.js";const G={title:"components/navigation/DataPagination",component:d,tags:["autodocs"],args:{count:12,defaultPage:1,prevLabel:"Atgal",nextLabel:"Kitas"},argTypes:{count:{control:{type:"number"}},defaultPage:{control:{type:"number"}},page:{control:{type:"number"}},onChange:{action:"pageChanged"},prevLabel:{control:{type:"text"}},nextLabel:{control:{type:"text"}}}},t={},o={render:e=>{const[a,u]=x.useState(e.page??1);return r.jsxs(y,{display:"flex",flexDirection:"column",gap:2,children:[r.jsxs(f,{variant:"body2",children:["Current page: ",a]}),r.jsx(d,{...e,page:a,onChange:n=>{var p;u(n),(p=e.onChange)==null||p.call(e,n)}})]})},args:{page:1}};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,c,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const H=["Uncontrolled","Controlled"];export{o as Controlled,t as Uncontrolled,H as __namedExportsOrder,G as default};
//# sourceMappingURL=DataPagination.stories-6_eDGuas.js.map
