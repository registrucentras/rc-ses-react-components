import{j as e,r as w}from"./iframe-9i3zOe15.js";import{R as n}from"./index-BDL9AJH7.js";import{F as u}from"./FieldPreview-Di_m7d3t.js";import{F as m}from"./FieldView-C-ub9IZT.js";import{F as h}from"./Fields-AvHDhykS.js";import{P as p}from"./PreviewTitle-BwR9v8Iv.js";import{B as a}from"./Box-By9EthZ3.js";import{T as c}from"./Typography-BOGuBK5G.js";import"./preload-helper-PPVm8Dsz.js";import"./CircleFilledIcon-D5wVBQSs.js";import"./useTranslation-CJ_O_2FM.js";import"./index-Beyit_TJ.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./memoTheme-CK40nyy-.js";import"./styled-H9qSqxDp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const b=["neutral","success","warning","error","info","brand"],y=["small","regular"],A={title:"Atoms/Badge",component:n,tags:["autodocs"]},r={render:s=>e.jsx(h,{children:e.jsx(m,{children:e.jsx(n,{...s})})}),args:{label:"Dabartinė",variant:"success",size:"regular",showIcon:!0,showClose:!1}},x=[{key:"icon",label:"Icon",showIcon:!0,showClose:!1},{key:"close",label:"Close",showIcon:!1,showClose:!0},{key:"both",label:"Icon + Close",showIcon:!0,showClose:!0},{key:"plain",label:"Plain",showIcon:!1,showClose:!1}],i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"6 types × 2 sizes × show icon × show close = 48 variants"}),e.jsxs(a,{sx:{display:"grid",gridTemplateColumns:"90px 70px repeat(4, 1fr)",rowGap:1.5,columnGap:2,alignItems:"center",maxWidth:720},children:[e.jsx(a,{}),e.jsx(a,{}),x.map(s=>e.jsx(c,{align:"center",variant:"body2",sx:{color:"text.secondary"},children:s.label},s.key)),b.map(s=>y.map((d,g)=>e.jsxs(w.Fragment,{children:[g===0&&e.jsx(c,{variant:"body2",sx:{fontWeight:600,gridRow:"span 2"},children:s}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:d}),x.map(o=>e.jsx(a,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(n,{label:"Label",variant:s,size:d,showIcon:o.showIcon,showClose:o.showClose,onClose:o.showClose?()=>{}:void 0})},o.key))]},`${s}-${d}`)))]})]})},l={render:()=>e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx(p,{children:"truncated in a constrained container (hover/focus for full text)"}),e.jsx(a,{sx:{maxWidth:160},children:e.jsx(n,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular",showClose:!0,onClose:()=>{}})})]}),e.jsxs(u,{children:[e.jsx(p,{children:"grows freely when space allows"}),e.jsx(n,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular"})]})]})},t={render:()=>e.jsx(m,{children:e.jsxs(c,{variant:"body1",component:"p",children:["Įrašo būsena: ",e.jsx(n,{label:"Dabartinė",variant:"success",size:"small"})," ","greta teksto eilutėje."]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        {combos.map(combo => <Typography key={combo.key} align='center' variant='body2' sx={{
        color: 'text.secondary'
      }}>
            {combo.label}
          </Typography>)}
        {variants.map(variant => sizes.map((size, sizeIndex) => <Fragment key={\`\${variant}-\${size}\`}>
              {sizeIndex === 0 && <Typography variant='body2' sx={{
          fontWeight: 600,
          gridRow: 'span 2'
        }}>
                  {variant}
                </Typography>}
              <Typography variant='body2' sx={{
          color: 'text.secondary'
        }}>
                {size}
              </Typography>
              {combos.map(combo => <Box key={combo.key} sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
                  <RcSesBadge label='Label' variant={variant} size={size} showIcon={combo.showIcon} showClose={combo.showClose} onClose={combo.showClose ? () => {} : undefined} />
                </Box>)}
            </Fragment>))}
      </Box>
    </>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <FieldView>
      <Typography variant='body1' component='p'>
        Įrašo būsena: <RcSesBadge label='Dabartinė' variant='success' size='small' />{' '}
        greta teksto eilutėje.
      </Typography>
    </FieldView>
}`,...t.parameters?.docs?.source}}};const D=["Main","AllCombinations","LongLabel","BaselineAlignment"];export{i as AllCombinations,t as BaselineAlignment,l as LongLabel,r as Main,D as __namedExportsOrder,A as default};
//# sourceMappingURL=Badge.stories-CCDmHyTO.js.map
