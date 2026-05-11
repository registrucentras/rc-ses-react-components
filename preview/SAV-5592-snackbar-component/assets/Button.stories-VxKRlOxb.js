import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{f as Vr}from"./index-BGr-S0p9.js";import{P as e}from"./PlusBoldIcon-VZtObbET.js";import{R as Tr}from"./index-DtWF16OK.js";import{g as o}from"./palette-BXEHCUmK.js";import"./index-yBjzXJbu.js";import"./index-CqJgnuY1.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./IconBase.es-CLqjCiWW.js";import"./Button-CXP1VsqQ.js";import"./createTheme-CE_F1kTP.js";import"./generateUtilityClasses-Bd2LNSfu.js";import"./styled-C6YoRvUv.js";import"./defaultTheme-Dm7VEHNB.js";import"./DefaultPropsProvider-5ViKjXxd.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DX0QcqVB.js";import"./TransitionGroupContext-5O8tYVKT.js";import"./useIsFocusVisible-BAiRvXvd.js";const P=["contained","outlined","link","text"],B=["primary","secondary","grey","dark","error","inherit","success","info","warning","light","ghost"],on={title:"components/actions/Button",component:Tr,parameters:{layout:"centered"},argTypes:{variant:{options:P,mapping:P,control:{type:"select",labels:P},table:{defaultValue:{}}},color:{options:B,mapping:B,control:{type:"select",labels:B},table:{defaultValue:{}}},disabled:{control:{type:"boolean"},table:{defaultValue:{}}},iconOnly:{control:{type:"boolean"},table:{defaultValue:{}}}},tags:["autodocs"],args:{children:"Button",onClick:Vr()}},a={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},t={args:{variant:"contained",color:"primary",disabled:!1}},s={args:{variant:"contained",color:"primary",disabled:!1,startIcon:r.jsx(e,{})}},i={args:{variant:"contained",color:"primary",disabled:!1,endIcon:r.jsx(e,{})}},c={args:{"aria-label":"Add",children:r.jsx(e,{}),color:"primary",iconOnly:!0,variant:"contained"}},l={parameters:a,args:{color:"primary",variant:"outlined"}},d={parameters:a,args:{color:"primary",variant:"outlined",startIcon:r.jsx(e,{})}},u={parameters:a,args:{color:"primary",variant:"outlined",endIcon:r.jsx(e,{})}},m={parameters:a,args:{"aria-label":"Add",children:r.jsx(e,{}),color:"primary",iconOnly:!0,variant:"outlined"}},p={args:{color:"secondary",variant:"contained"}},g={parameters:a,args:{color:"secondary",variant:"outlined"}},y={args:{color:"grey",variant:"contained"}},h={parameters:a,args:{color:"grey",variant:"outlined"}},b={args:{variant:"contained",children:"Button",color:"warning"}},v={parameters:a,args:{variant:"outlined",children:"Button",color:"warning"}},C={args:{color:"error",variant:"contained"}},f={parameters:a,args:{color:"error",variant:"outlined"}},I={args:{variant:"outlined",color:"light",children:"Light Button"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},O={args:{variant:"outlined",color:"light",startIcon:r.jsx(e,{}),children:"Light Button with Icon"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},x={args:{variant:"outlined",color:"light",children:"Light Button Disabled",disabled:!0},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},S={args:{"aria-label":"Close",children:r.jsx(e,{}),color:"ghost",iconOnly:!0,variant:"outlined"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]},j={args:{"aria-label":"Close",children:r.jsx(e,{}),color:"ghost",disabled:!0,iconOnly:!0,variant:"outlined"},decorators:[n=>r.jsx("div",{style:{backgroundColor:o[900],padding:"0.5rem",borderRadius:"0.5rem",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:r.jsx(n,{})})]};var k,R,W;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false
  }
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
     // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'))
     // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument()
  }, */
}`,...(W=(R=t.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var w,L,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    startIcon: <PlusBoldIcon />
  }
}`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var D,G,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    endIcon: <PlusBoldIcon />
  }
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var V,T,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'contained'
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var M,Y,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined'
  }
}`,...(q=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var z,F,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    startIcon: <PlusBoldIcon />
  }
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,N;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    endIcon: <PlusBoldIcon />
  }
}`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'outlined'
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    variant: 'contained'
  }
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var nr,er,ar;g.parameters={...g.parameters,docs:{...(nr=g.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'secondary',
    variant: 'outlined'
  }
}`,...(ar=(er=g.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var or,tr,sr;y.parameters={...y.parameters,docs:{...(or=y.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    variant: 'contained'
  }
}`,...(sr=(tr=y.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var ir,cr,lr;h.parameters={...h.parameters,docs:{...(ir=h.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'grey',
    variant: 'outlined'
  }
}`,...(lr=(cr=h.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var dr,ur,mr;b.parameters={...b.parameters,docs:{...(dr=b.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'warning'
  }
}`,...(mr=(ur=b.parameters)==null?void 0:ur.docs)==null?void 0:mr.source}}};var pr,gr,yr;v.parameters={...v.parameters,docs:{...(pr=v.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    variant: 'outlined',
    children: 'Button',
    color: 'warning'
  }
}`,...(yr=(gr=v.parameters)==null?void 0:gr.docs)==null?void 0:yr.source}}};var hr,br,vr;C.parameters={...C.parameters,docs:{...(hr=C.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    color: 'error',
    variant: 'contained'
  }
}`,...(vr=(br=C.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Cr,fr,Ir;f.parameters={...f.parameters,docs:{...(Cr=f.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  parameters: disableColorContrast,
  args: {
    color: 'error',
    variant: 'outlined'
  }
}`,...(Ir=(fr=f.parameters)==null?void 0:fr.docs)==null?void 0:Ir.source}}};var Or,xr,Sr;I.parameters={...I.parameters,docs:{...(Or=I.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(Sr=(xr=I.parameters)==null?void 0:xr.docs)==null?void 0:Sr.source}}};var jr,Pr,Br;O.parameters={...O.parameters,docs:{...(jr=O.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    startIcon: <PlusBoldIcon />,
    children: 'Light Button with Icon'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(Br=(Pr=O.parameters)==null?void 0:Pr.docs)==null?void 0:Br.source}}};var kr,Rr,Wr;x.parameters={...x.parameters,docs:{...(kr=x.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button Disabled',
    disabled: true
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(Wr=(Rr=x.parameters)==null?void 0:Rr.docs)==null?void 0:Wr.source}}};var wr,Lr,Er;S.parameters={...S.parameters,docs:{...(wr=S.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    iconOnly: true,
    variant: 'outlined'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(Er=(Lr=S.parameters)==null?void 0:Lr.docs)==null?void 0:Er.source}}};var Dr,Gr,Ar;j.parameters={...j.parameters,docs:{...(Dr=j.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    disabled: true,
    iconOnly: true,
    variant: 'outlined'
  },
  decorators: [Story => <div style={{
    backgroundColor: grey[900],
    padding: '0.5rem',
    borderRadius: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(Ar=(Gr=j.parameters)==null?void 0:Gr.docs)==null?void 0:Ar.source}}};const tn=["PrimaryContained","PrimaryContainedWithPrefixIcon","PrimaryContainedWithSuffixIcon","PrimaryContainedIconOnly","PrimaryOutlined","PrimaryOutlinedWithPrefixIcon","PrimaryOutlinedWithSuffixIcon","PrimaryOutlinedIconOnly","SecondaryContained","SecondaryOutlined","GreyContained","GreyOutlined","WarningContained","WarningOutlined","ErrorContained","ErrorOutlined","LightOutlined","LightOutlinedWithIcon","LightOutlinedDisabled","GhostOutlinedIconOnly","GhostOutlinedIconOnlyDisabled"];export{C as ErrorContained,f as ErrorOutlined,S as GhostOutlinedIconOnly,j as GhostOutlinedIconOnlyDisabled,y as GreyContained,h as GreyOutlined,I as LightOutlined,x as LightOutlinedDisabled,O as LightOutlinedWithIcon,t as PrimaryContained,c as PrimaryContainedIconOnly,s as PrimaryContainedWithPrefixIcon,i as PrimaryContainedWithSuffixIcon,l as PrimaryOutlined,m as PrimaryOutlinedIconOnly,d as PrimaryOutlinedWithPrefixIcon,u as PrimaryOutlinedWithSuffixIcon,p as SecondaryContained,g as SecondaryOutlined,b as WarningContained,v as WarningOutlined,tn as __namedExportsOrder,on as default};
//# sourceMappingURL=Button.stories-VxKRlOxb.js.map
