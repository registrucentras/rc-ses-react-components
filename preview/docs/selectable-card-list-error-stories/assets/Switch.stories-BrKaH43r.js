import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-CqJgnuY1.js";import{R as O}from"./index-D37-LfKP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./palette-ClGEQNft.js";import"./createTheme-cc7C8_Rz.js";import"./generateUtilityClasses-w1ShjUKg.js";import"./SwitchBase-DRxmbktx.js";import"./styled-CQgu8tRE.js";import"./defaultTheme-SlYxhCq1.js";import"./useFormControl-xtefzQVn.js";import"./useControlled-DKQkVSHg.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Cbvckr1-.js";import"./DefaultPropsProvider-DYP4WNeP.js";import"./useTimeout-DgQ6HlaJ.js";import"./TransitionGroupContext-BmD4SPXa.js";import"./useIsFocusVisible-DPtOLna9.js";import"./FormControlLabel-DeF6DrpW.js";import"./formControlState-Dq1zat_P.js";import"./Typography-zwmJPfbY.js";import"./Stack-Cbjk-YGY.js";import"./useThemeProps-Byb0HM77.js";import"./getThemeProps-anNa02Cr.js";import"./useTheme-BNEP3wvB.js";const ae={title:"components/inputs/Switch",component:O,parameters:{layout:"centered"},tags:["autodocs"]};function r({initialChecked:N=!1,disabled:S=!1,label:j="Notifications"}){const[v,y]=L.useState(N);return e.jsx(O,{label:j,checked:v,disabled:S,onChange:(E,w)=>y(w)})}const n={args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(r,{initialChecked:!0})},a={args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(r,{})},o={name:"On, Disabled",args:{label:"Notifications",checked:!0,onChange:()=>{}},render:()=>e.jsx(r,{initialChecked:!0,disabled:!0})},t={name:"Off, Disabled",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx(r,{disabled:!0})},s={name:"Long label",args:{label:"Notifications",checked:!1,onChange:()=>{}},render:()=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{label:"Send me an email whenever there is a new comment on any of my open service requests"})})};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked />
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo />
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,h,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'On, Disabled',
  args: {
    label: 'Notifications',
    checked: true,
    onChange: () => {}
  },
  render: () => <ControlledDemo initialChecked disabled />
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,b,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Off, Disabled',
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <ControlledDemo disabled />
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,x,D;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Long label',
  args: {
    label: 'Notifications',
    checked: false,
    onChange: () => {}
  },
  render: () => <div style={{
    maxWidth: '16rem'
  }}>
      <ControlledDemo label='Send me an email whenever there is a new comment on any of my open service requests' />
    </div>
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const oe=["On","Off","OnDisabled","OffDisabled","LongLabel"];export{s as LongLabel,a as Off,t as OffDisabled,n as On,o as OnDisabled,oe as __namedExportsOrder,ae as default};
//# sourceMappingURL=Switch.stories-BrKaH43r.js.map
