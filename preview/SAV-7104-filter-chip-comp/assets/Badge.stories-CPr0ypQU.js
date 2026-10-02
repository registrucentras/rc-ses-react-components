import{j as e,r as y,C as v,a as f}from"./iframe-N0sjxTWe.js";import{R as a}from"./index-B-Xmd8OH.js";import{F as u}from"./FieldPreview-DhXaIisA.js";import{F as m}from"./FieldView-CCE3ohd4.js";import{F as g}from"./Fields-JY6XV0iK.js";import{P as r}from"./PreviewTitle-Dv2fHGv6.js";import{B as n}from"./Box-BJ4bJd8I.js";import{T as p}from"./Typography-ppgHlemW.js";import"./preload-helper-PPVm8Dsz.js";import"./useTranslation-DosvPdoQ.js";import"./index-CHJLtLDu.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./memoTheme-LpOBnG9S.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const h=["neutral","success","warning","error","info","brand"],j=["small","regular"],D={title:"Atoms/Badge",component:a,tags:["autodocs"]},i={render:s=>e.jsx(g,{children:e.jsx(m,{children:e.jsx(a,{...s})})}),args:{label:"Dabartinė",variant:"success",size:"regular",showIcon:!0,showClose:!1}},w=[{key:"icon",label:"Icon",showIcon:!0,showClose:!1},{key:"close",label:"Close",showIcon:!1,showClose:!0},{key:"both",label:"Icon + Close",showIcon:!0,showClose:!0},{key:"plain",label:"Plain",showIcon:!1,showClose:!1}],l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"6 types × 2 sizes × show icon × show close = 48 variants"}),e.jsxs(n,{sx:{display:"grid",gridTemplateColumns:"90px 70px repeat(4, 1fr)",rowGap:1.5,columnGap:2,alignItems:"center",maxWidth:720},children:[e.jsx(n,{}),e.jsx(n,{}),w.map(s=>e.jsx(p,{align:"center",variant:"body2",sx:{color:"text.secondary"},children:s.label},s.key)),h.map(s=>j.map((x,b)=>e.jsxs(y.Fragment,{children:[b===0&&e.jsx(p,{variant:"body2",sx:{fontWeight:600,gridRow:"span 2"},children:s}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:x}),w.map(o=>e.jsx(n,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(a,{label:"Label",variant:s,size:x,showIcon:o.showIcon,showClose:o.showClose,onClose:o.showClose?()=>{}:void 0})},o.key))]},`${s}-${x}`)))]})]})},t={render:()=>e.jsxs(g,{children:[e.jsxs(m,{children:[e.jsx(r,{children:"With custom icon (Clock)"}),e.jsx(n,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:h.map(s=>e.jsx(a,{label:s,variant:s,size:"regular",icon:e.jsx(v,{})},s))})]}),e.jsxs(u,{children:[e.jsx(r,{children:"With custom icon (Check)"}),e.jsx(n,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:h.map(s=>e.jsx(a,{label:s,variant:s,size:"regular",icon:e.jsx(f,{})},s))})]})]})},c={render:()=>e.jsxs(g,{children:[e.jsxs(m,{children:[e.jsx(r,{children:"truncated in a constrained container (hover/focus for full text)"}),e.jsx(n,{sx:{maxWidth:160},children:e.jsx(a,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular",showClose:!0,onClose:()=>{}})})]}),e.jsxs(u,{children:[e.jsx(r,{children:"grows freely when space allows"}),e.jsx(a,{label:"Labai ilgas būsenos pavadinimas, kuris netelpa",variant:"info",size:"regular"})]})]})},d={render:()=>e.jsx(m,{children:e.jsxs(p,{variant:"body1",component:"p",children:["Įrašo būsena: ",e.jsx(a,{label:"Dabartinė",variant:"success",size:"small"})," ","greta teksto eilutėje."]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Fields>
      <FieldView>
        <PreviewTitle>With custom icon (Clock)</PreviewTitle>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          {variants.map(variant => <RcSesBadge key={variant} label={variant} variant={variant} size='regular' icon={<ClockIcon />} />)}
        </Box>
      </FieldView>
      <FieldPreview>
        <PreviewTitle>With custom icon (Check)</PreviewTitle>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          {variants.map(variant => <RcSesBadge key={variant} label={variant} variant={variant} size='regular' icon={<CheckIcon />} />)}
        </Box>
      </FieldPreview>
    </Fields>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FieldView>
      <Typography variant='body1' component='p'>
        Įrašo būsena: <RcSesBadge label='Dabartinė' variant='success' size='small' />{' '}
        greta teksto eilutėje.
      </Typography>
    </FieldView>
}`,...d.parameters?.docs?.source}}};const G=["Main","AllCombinations","WithCustomIcon","LongLabel","BaselineAlignment"];export{l as AllCombinations,d as BaselineAlignment,c as LongLabel,i as Main,t as WithCustomIcon,G as __namedExportsOrder,D as default};
//# sourceMappingURL=Badge.stories-CPr0ypQU.js.map
