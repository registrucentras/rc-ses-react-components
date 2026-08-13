import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as z}from"./index-CqJgnuY1.js";import{R as a}from"./index-O9sDE8ln.js";import{F as I}from"./FieldPreview-D3PXgTUD.js";import{F as m}from"./FieldView-CTfNV-zm.js";import{F as T}from"./Fields-Du3uOIyp.js";import{P as d}from"./PreviewTitle-68aiuSUC.js";import{B as o}from"./Box-Dsbm8PjI.js";import{T as c}from"./Typography-zwmJPfbY.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./CircleFilledIcon-1NXGIxKT.js";import"./IconBase.es-CLqjCiWW.js";import"./CloseIcon-C-u9hzi-.js";import"./palette-ClGEQNft.js";import"./useTranslation-5b1lrk9S.js";import"./generateUtilityClasses-w1ShjUKg.js";import"./createTheme-cc7C8_Rz.js";import"./useTheme-BNEP3wvB.js";import"./styled-CQgu8tRE.js";import"./defaultTheme-SlYxhCq1.js";import"./DefaultPropsProvider-DYP4WNeP.js";import"./composeClasses-fLhin0tj.js";const P=["neutral","success","warning","error","info","brand"],L=["small","regular"],se={title:"components/display/Badge",component:a,tags:["autodocs"]},r={render:s=>e.jsx(T,{children:e.jsx(m,{children:e.jsx(a,{...s})})}),args:{label:"Dabartinė",variant:"success",size:"regular",showIcon:!0,showClose:!1}},h=[{key:"icon",label:"Icon",showIcon:!0,showClose:!1},{key:"close",label:"Close",showIcon:!1,showClose:!0},{key:"both",label:"Icon + Close",showIcon:!0,showClose:!0},{key:"plain",label:"Plain",showIcon:!1,showClose:!1}],i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"6 types × 2 sizes × show icon × show close = 48 variants"}),e.jsxs(o,{sx:{display:"grid",gridTemplateColumns:"90px 70px repeat(4, 1fr)",rowGap:1.5,columnGap:2,alignItems:"center",maxWidth:720},children:[e.jsx(o,{}),e.jsx(o,{}),h.map(s=>e.jsx(c,{align:"center",color:"text.secondary",variant:"body2",children:s.label},s.key)),P.map(s=>L.map((p,k)=>e.jsxs(z.Fragment,{children:[k===0&&e.jsx(c,{sx:{gridRow:"span 2"},variant:"body2",fontWeight:600,children:s}),e.jsx(c,{color:"text.secondary",variant:"body2",children:p}),h.map(n=>e.jsx(o,{display:"flex",justifyContent:"center",children:e.jsx(a,{label:"Label",variant:s,size:p,showIcon:n.showIcon,showClose:n.showClose,onClose:n.showClose?()=>{}:void 0})},n.key))]},`${s}-${p}`)))]})]})},l={render:()=>e.jsxs(T,{children:[e.jsxs(m,{children:[e.jsx(d,{children:"truncated in a constrained container (hover/focus for full text)"}),e.jsx(o,{sx:{maxWidth:160},children:e.jsx(a,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular",showClose:!0,onClose:()=>{}})})]}),e.jsxs(I,{children:[e.jsx(d,{children:"grows freely when space allows"}),e.jsx(a,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular"})]})]})},t={render:()=>e.jsx(m,{children:e.jsxs(c,{variant:"body1",component:"p",children:["Įrašo būsena: ",e.jsx(a,{label:"Dabartinė",variant:"success",size:"small"})," ","greta teksto eilutėje."]})})};var x,g,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Fields>
      <FieldView>
        <RcSesBadge {...args} />
      </FieldView>
    </Fields>,
  args: {
    label: 'Dabartinė',
    variant: 'success',
    size: 'regular',
    showIcon: true,
    showClose: false
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,b,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <PreviewTitle>
        6 types × 2 sizes × show icon × show close = 48 variants
      </PreviewTitle>
      <Box sx={{
      display: 'grid',
      gridTemplateColumns: '90px 70px repeat(4, 1fr)',
      rowGap: 1.5,
      columnGap: 2,
      alignItems: 'center',
      maxWidth: 720
    }}>
        <Box />
        <Box />
        {combos.map(combo => <Typography key={combo.key} align='center' color='text.secondary' variant='body2'>
            {combo.label}
          </Typography>)}
        {variants.map(variant => sizes.map((size, sizeIndex) => <Fragment key={\`\${variant}-\${size}\`}>
              {sizeIndex === 0 && <Typography sx={{
          gridRow: 'span 2'
        }} variant='body2' fontWeight={600}>
                  {variant}
                </Typography>}
              <Typography color='text.secondary' variant='body2'>
                {size}
              </Typography>
              {combos.map(combo => <Box key={combo.key} display='flex' justifyContent='center'>
                  <RcSesBadge label='Label' variant={variant} size={size} showIcon={combo.showIcon} showClose={combo.showClose} onClose={combo.showClose ? () => {} : undefined} />
                </Box>)}
            </Fragment>))}
      </Box>
    </>
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,f,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Fields>
      <FieldView>
        <PreviewTitle>
          truncated in a constrained container (hover/focus for full text)
        </PreviewTitle>
        <Box sx={{
        maxWidth: 160
      }}>
          <RcSesBadge label='Labai ilgas būsenos pavadinimas, kuris netelpa' variant='info' size='regular' showClose onClose={() => {}} />
        </Box>
      </FieldView>
      <FieldPreview>
        <PreviewTitle>grows freely when space allows</PreviewTitle>
        <RcSesBadge label='Labai ilgas būsenos pavadinimas, kuris netelpa' variant='info' size='regular' />
      </FieldPreview>
    </Fields>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,F,B;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <FieldView>
      <Typography variant='body1' component='p'>
        Įrašo būsena: <RcSesBadge label='Dabartinė' variant='success' size='small' />{' '}
        greta teksto eilutėje.
      </Typography>
    </FieldView>
}`,...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const ae=["Main","AllCombinations","LongLabel","BaselineAlignment"];export{i as AllCombinations,t as BaselineAlignment,l as LongLabel,r as Main,ae as __namedExportsOrder,se as default};
//# sourceMappingURL=Badge.stories-DbwymIXK.js.map
