import{a3 as p,a4 as c,j as m}from"./iframe-C5f9Zc7Z.js";import{L as l}from"./index-D9rnTVxT.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-B61C4jPN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Typography-Cu6X7zgN.js";import"./memoTheme-aFWhReI0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Tooltip-DxcoceIo.js";import"./useTheme-DJRvu-BM.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./useTimeout-C0xJNvSp.js";import"./useControlled-B4Netmu2.js";import"./getReactElementRef-D27myLnX.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./utils-BL043Ngk.js";import"./Popper-XpW4iyei.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-BH4z5ryB.js";import"./Skeleton-DJGJzGuv.js";const u=[{icon:p,text:"Application received",tooltip:"The submission was successfully received."},{icon:c,text:"Requires review",tooltip:"A specialist will review the provided details."},{icon:c,text:"Unavailable item",tooltip:"This item is currently disabled.",disabled:!0}],P={title:"Molecules/ListWithIcons",component:l,tags:["autodocs"],args:{items:u,layout:"vertical",isLoading:!1},argTypes:{layout:{control:{type:"radio"},options:["vertical","horizontal"]},isLoading:{control:{type:"boolean"}},items:{control:!1}}},e={},o={args:{layout:"horizontal"}},t={args:{isLoading:!0}},d=[{text:"Default",textColor:"default"},{text:"Secondary",textColor:"secondary"},{text:"Muted",textColor:"muted"},{text:"Link",textColor:"link"}],r={name:'Text tones (DS "Text" tokens)',args:{items:d}},g=[{text:"Custom palette color",textColor:"#008561"}],s={name:"Custom color (palette variant instead of a named tone)",args:{items:g}},a={args:{items:d.map(n=>({...n,icon:p,tooltip:"Meta-info tooltip"}))}},i={render:n=>m.jsx("div",{style:{"--rc-color-text-secondary":"#0079ad","--rc-icon-size-inline":"20px"},children:m.jsx(l,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Text tones (DS "Text" tokens)',
  args: {
    items: toneItems
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Custom color (palette variant instead of a named tone)',
  args: {
    items: customColorItems
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: toneItems.map(item => ({
      ...item,
      icon: CheckCircleFillIcon,
      tooltip: 'Meta-info tooltip'
    }))
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    '--rc-color-text-secondary': '#0079ad',
    '--rc-icon-size-inline': '20px'
  } as CSSProperties}>
      <ListWithIcons {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};const U=["Main","Horizontal","Loading","TextTones","CustomColor","TokenBindings","TokenOverrides"];export{s as CustomColor,o as Horizontal,t as Loading,e as Main,r as TextTones,a as TokenBindings,i as TokenOverrides,U as __namedExportsOrder,P as default};
//# sourceMappingURL=ListWithIcons.stories-r9jcSVLs.js.map
