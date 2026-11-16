import{j as n,c as p,P as i,r as R}from"./iframe-C5f9Zc7Z.js";import{R as e}from"./index-BNMNfPN2.js";import{P as C}from"./PreviewTitle-DafhOo6c.js";import{B as s}from"./Box-B61C4jPN.js";import{T as d}from"./Typography-Cu6X7zgN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFL_h1cZ.js";import"./CircularProgress-DCfJ8UYi.js";import"./memoTheme-aFWhReI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Dn-vvyCO.js";import"./index-Bexat51j.js";import"./Button-CpdT9tS7.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./useReducedMotion-BHCwGahe.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,A=["contained","outlined","link","text"],L=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],an={title:"Atoms/Button",component:e,parameters:{layout:"centered"},argTypes:{variant:{options:A,control:{type:"select"}},color:{options:L,control:{type:"select"}},disabled:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},children:{control:"text"}},args:{children:"Button",onClick:D()},tags:["autodocs"]},u={args:{variant:"contained",color:"primary",disabled:!1,iconOnly:!1,loading:!1}},E=[{name:"Primary",variant:"contained",color:"primary"},{name:"Secondary",variant:"outlined",color:"grey"},{name:"Error",variant:"contained",color:"error"},{name:"Link",variant:"link",color:"primary"}],m={parameters:{layout:"padded"},render:()=>n.jsx(s,{sx:{display:"grid",gap:4},children:E.flatMap(a=>["medium","small"].map(t=>n.jsxs(s,{children:[n.jsxs(d,{sx:{mb:2},children:[a.name," — ",t==="medium"?"Regular":"Small"]}),n.jsxs(s,{sx:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:2,alignItems:"center"},children:[["none","left","right","only"].map(r=>n.jsx(d,{children:r},r)),["rest","disabled","loading"].flatMap(r=>["none","left","right","only"].map(o=>n.jsx(e,{"data-testid":`ds-${a.name}-${t}-${r}-${o}`,variant:a.variant,color:a.color,size:t,disabled:r==="disabled",loading:r==="loading",loadingPosition:o==="only"||o==="none"?"center":{left:"start",right:"end"}[o],iconOnly:o==="only","aria-label":o==="only"?"Pridėti":void 0,startIcon:o==="left"?n.jsx(i,{}):void 0,endIcon:o==="right"?n.jsx(i,{}):void 0,children:o==="only"?n.jsx(i,{}):"Button"},`${r}-${o}`)))]})]},`${a.name}-${t}`)))})},g={parameters:{layout:"padded"},render:()=>n.jsxs(s,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[n.jsx(e,{startIcon:n.jsx(i,{}),children:"Pridėti pasirinktas (4)"}),n.jsx(e,{variant:"outlined",color:"grey",children:"Atšaukti"}),n.jsx(e,{color:"error",children:"Pašalinti"}),n.jsx(e,{variant:"link",children:"Skaityti daugiau"})]})},y={tags:["no-snapshot"],render:()=>n.jsxs(s,{sx:{display:"flex",gap:2},children:[n.jsx(e,{iconOnly:!0,"aria-label":"Custom button",sx:{width:"5rem",height:"4rem",borderRadius:"3px"},children:n.jsx(i,{})}),n.jsx(e,{sx:{px:0},children:"Custom padding"})]})},_={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},v=[{variant:"contained",color:"primary"},{variant:"contained",color:"secondary"},{variant:"contained",color:"grey"},{variant:"contained",color:"warning"},{variant:"contained",color:"error"},{variant:"outlined",color:"primary"},{variant:"outlined",color:"secondary"},{variant:"outlined",color:"grey"},{variant:"outlined",color:"warning"},{variant:"outlined",color:"error"},{variant:"link",color:"primary"},{variant:"link",color:"grey"},{variant:"text",color:"primary"},{variant:"text",color:"grey"}],k=[{variant:"outlined",color:"light"},{variant:"outlined",color:"ghost"}],M=a=>a.reduce((t,{variant:r})=>(t[r]=(t[r]??0)+1,t),{}),j={iconOnly:!0,"aria-label":"Add",children:n.jsx(i,{})},c=[{key:"default",label:"Default",args:{}},{key:"prefixIcon",label:"Prefix Icon",args:{startIcon:n.jsx(i,{})}},{key:"suffixIcon",label:"Suffix Icon",args:{endIcon:n.jsx(i,{})}},{key:"iconOnly",label:"Icon Only",args:j},{key:"disabled",label:"Disabled",args:{disabled:!0}},{key:"loading",label:"Loading",args:{loading:!0}},{key:"loadingStart",label:"Loading Position Start",args:{loading:!0,loadingPosition:"start",startIcon:n.jsx(i,{})}},{key:"loadingEnd",label:"Loading Position End",args:{loading:!0,loadingPosition:"end",endIcon:n.jsx(i,{})}},{key:"loadingIconOnly",label:"Loading Icon Only",args:{...j,loading:!0}}],T=({combos:a,onDark:t=!1})=>{const r=M(a),o=t?p["text-inverse"]:p["text-secondary"];return n.jsxs(s,{sx:{display:"grid",gridTemplateColumns:`110px 90px repeat(${c.length}, minmax(140px, 1fr))`,rowGap:1.5,columnGap:1.5,alignItems:"center"},children:[n.jsx(s,{}),n.jsx(s,{}),c.map(l=>n.jsx(d,{align:"center",variant:"body2",sx:{color:o},children:l.label},l.key)),a.map(({variant:l,color:f},S)=>{const w=a[S-1]?.variant,P=l!==w,I=r[l];return n.jsxs(R.Fragment,{children:[P?n.jsx(d,{variant:"body2",sx:{color:t?p["text-inverse"]:void 0,fontWeight:600,gridRow:`span ${I}`},children:l}):null,n.jsx(d,{variant:"body2",sx:{color:o},children:f}),c.map(B=>{const{children:O,...$}=B.args;return n.jsx(s,{sx:{display:"flex",justifyContent:"center"},children:n.jsx(e,{variant:l,color:f,...$,children:O??"Button"})},B.key)})]},`${l}-${f}`)})]})},x={parameters:{layout:"padded"},render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(C,{children:["Light surface: ",v.length," variant+color rows x ",c.length," ","states = ",v.length*c.length," buttons. Axe color-contrast stays enforced here."]}),n.jsx(T,{combos:v})]})},h={parameters:{..._,layout:"padded"},render:()=>n.jsxs(s,{sx:{backgroundColor:p["surface-inverse"],borderRadius:1,p:3,color:p["text-inverse"],width:"fit-content",minWidth:"100%"},children:[n.jsxs(C,{children:["Dark surface: ",k.length," variant+color rows x ",c.length," ","states = ",k.length*c.length," buttons. Axe color-contrast is disabled - light/ghost render on top of this dark backdrop."]}),n.jsx(T,{combos:k,onDark:!0})]})},b={tags:["no-snapshot"],parameters:{layout:"padded"},render:()=>n.jsxs(s,{sx:{display:"grid",gap:2,justifyItems:"start"},children:[n.jsx(d,{children:"Click with the mouse, release, then move the pointer away. The current link must return to its base color, even while focused. Then use Tab to reach it: a visible keyboard focus indicator must appear."}),n.jsx(d,{children:"Current library behavior"}),n.jsx(e,{variant:"link",children:"Current link"}),n.jsx(e,{variant:"link",disabled:!0,children:"Disabled link"}),n.jsx(d,{children:"Before: local simulation only, not library behavior"}),n.jsx(e,{variant:"link",sx:{"&:not(.Mui-disabled):focus":{color:p["text-default"]}},children:"Before: retained focus color"})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    iconOnly: false,
    loading: false
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: 4
  }}>
      {designRoles.flatMap(role => (['medium', 'small'] as const).map(size => <Box key={\`\${role.name}-\${size}\`}>
            <Typography sx={{
        mb: 2
      }}>
              {role.name} — {size === 'medium' ? 'Regular' : 'Small'}
            </Typography>
            <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, max-content)',
        gap: 2,
        alignItems: 'center'
      }}>
              {(['none', 'left', 'right', 'only'] as const).map(position => <Typography key={position}>{position}</Typography>)}
              {(['rest', 'disabled', 'loading'] as const).flatMap(state => (['none', 'left', 'right', 'only'] as const).map(position => <Button key={\`\${state}-\${position}\`} data-testid={\`ds-\${role.name}-\${size}-\${state}-\${position}\`} variant={role.variant} color={role.color} size={size} disabled={state === 'disabled'} loading={state === 'loading'} loadingPosition={position === 'only' || position === 'none' ? 'center' : ({
          left: 'start',
          right: 'end'
        } as const)[position]} iconOnly={position === 'only'} aria-label={position === 'only' ? 'Pridėti' : undefined} startIcon={position === 'left' ? <PlusBoldIcon /> : undefined} endIcon={position === 'right' ? <PlusBoldIcon /> : undefined}>
                    {position === 'only' ? <PlusBoldIcon /> : 'Button'}
                  </Button>))}
            </Box>
          </Box>))}
    </Box>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap'
  }}>
      <Button startIcon={<PlusBoldIcon />}>Pridėti pasirinktas (4)</Button>
      <Button variant='outlined' color='grey'>
        Atšaukti
      </Button>
      <Button color='error'>Pašalinti</Button>
      <Button variant='link'>Skaityti daugiau</Button>
    </Box>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  render: () => <Box sx={{
    display: 'flex',
    gap: 2
  }}>
      <Button iconOnly aria-label='Custom button' sx={{
      width: '5rem',
      height: '4rem',
      borderRadius: '3px'
    }}>
        <PlusBoldIcon />
      </Button>
      <Button sx={{
      px: 0
    }}>Custom padding</Button>
    </Box>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <>
      <PreviewTitle>
        Light surface: {lightSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {lightSurfaceCombos.length * states.length} buttons. Axe color-contrast
        stays enforced here.
      </PreviewTitle>
      <CombinationsGrid combos={lightSurfaceCombos} />
    </>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...disableColorContrast,
    layout: 'padded'
  },
  render: () => <Box sx={{
    backgroundColor: colors['surface-inverse'],
    borderRadius: 1,
    p: 3,
    color: colors['text-inverse'],
    width: 'fit-content',
    minWidth: '100%'
  }}>
      <PreviewTitle>
        Dark surface: {darkSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {darkSurfaceCombos.length * states.length} buttons. Axe color-contrast is
        disabled - light/ghost render on top of this dark backdrop.
      </PreviewTitle>
      <CombinationsGrid combos={darkSurfaceCombos} onDark />
    </Box>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  parameters: {
    layout: 'padded'
  },
  render: () => <Box sx={{
    display: 'grid',
    gap: 2,
    justifyItems: 'start'
  }}>
      <Typography>
        Click with the mouse, release, then move the pointer away. The current link must
        return to its base color, even while focused. Then use Tab to reach it: a visible
        keyboard focus indicator must appear.
      </Typography>
      <Typography>Current library behavior</Typography>
      <Button variant='link'>Current link</Button>
      <Button variant='link' disabled>
        Disabled link
      </Button>
      <Typography>Before: local simulation only, not library behavior</Typography>
      <Button variant='link' sx={{
      '&:not(.Mui-disabled):focus': {
        color: colors['text-default']
      }
    }}>
        Before: retained focus color
      </Button>
    </Box>
}`,...b.parameters?.docs?.source}}};const tn=["PrimaryContained","DesignCombinations","TokenBindings","TokenOverrides","CoreCombinations","DarkSurfaceCombinations","LinkFocus"];export{x as CoreCombinations,h as DarkSurfaceCombinations,m as DesignCombinations,b as LinkFocus,u as PrimaryContained,g as TokenBindings,y as TokenOverrides,tn as __namedExportsOrder,an as default};
//# sourceMappingURL=Button.stories-CpgLp6QG.js.map
