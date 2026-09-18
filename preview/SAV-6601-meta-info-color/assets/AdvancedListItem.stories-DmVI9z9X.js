import{j as e,s as _,r as n}from"./iframe-C--2Qp2X.js";import{N as O,T as W}from"./TrashIcon-CK4M4_tN.js";import{U as z}from"./UserIcon-CTc4kV9n.js";import{A as a,a as G}from"./index-D8BHsLfM.js";import{S as i}from"./Stack-DysbpuFp.js";import{T as l}from"./Typography-Bh7iKLnp.js";import{T as p}from"./TextField-CvqvkpZ-.js";import{F as V}from"./FormControl-DEPC401e.js";import{F}from"./FormLabel-fhjabWU5.js";import{R as H}from"./RadioGroup-B8rv_AmV.js";import{F as M}from"./FormControlLabel-3ZuoMEUB.js";import{R as E}from"./Radio-BqttM850.js";import"./preload-helper-PPVm8Dsz.js";import"./Minus.es-DcNdjLdG.js";import"./Plus.es-D5NJJZpx.js";import"./index-CwBW7hu8.js";import"./CircleFilledIcon-BYx6FNPE.js";import"./useTranslation-CFUE4C6U.js";import"./index-BfDjRW8d.js";import"./Box-B3fhZflc.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./index-DYNbFQVf.js";import"./Tooltip-DiX1jyrz.js";import"./useReducedMotion-tZYExsTl.js";import"./memoTheme-CW9I2BsA.js";import"./useSlot-49pSelQI.js";import"./mergeSlotProps-NJatU-kK.js";import"./useTimeout-CHxIJTjf.js";import"./useControlled-DNtm-Nt1.js";import"./getReactElementRef-DrfRwelJ.js";import"./Grow-CivEum08.js";import"./Transition-DI4lKCF5.js";import"./utils-cxgvJEOf.js";import"./Popper-Bk7juvLi.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BsoXsUn3.js";import"./index-D054tarV.js";import"./index-BCzH-lMd.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-C12XKbDW.js";import"./isFocusVisible-B8k4qzLc.js";import"./Skeleton-DXugO-p_.js";import"./SimpleCheckbox-Ce8FC09e.js";import"./CheckBoldIcon-D221v_PU.js";import"./CheckUncheckedBoldIcon-BnXCD9Gw.js";import"./loading-CIs-ksDW.js";import"./Checkbox-Bz0q7jzO.js";import"./SwitchBase-BH7X-fxU.js";import"./useFormControl-B8iYuwxM.js";import"./ButtonBase-C76MDgVV.js";import"./createSvgIcon-DNnr0kMq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-COhtAqW0.js";import"./IconButton-t2skZq8G.js";import"./CircularProgress-oRpgeBw_.js";import"./CaretRightBoldIcon-CX0NAejk.js";import"./index-e-BPGM8w.js";import"./index-FFXGUcHW.js";import"./Button-DDdAyZix.js";import"./index-DNL857l4.js";import"./Collapse-BN7eMqRP.js";import"./useThemeProps-ozKYHKTs.js";import"./getThemeProps-ByoHHWaa.js";import"./Select-yRg1O9Hh.js";import"./Popover-CEUf_a0w.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-DSfFTXON.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-BukVhqDh.js";import"./Paper-CHPMOkXk.js";import"./useRovingTabIndex-CS0hfLqd.js";import"./List-DQe-ZfER.js";import"./OutlinedInput-aotRFEOK.js";import"./InputLabel-CIEb7zJb.js";import"./FormHelperText-CaXBHDJn.js";import"./isMuiElement-DtkWQt7s.js";const Mt={title:"Organisms/AdvancedListItem",component:a,tags:["autodocs"],args:{title:"Įrašo pavadinimas",subtitle:"a.k. 3850.........",state:"rest"}},u={},x={args:{state:"selected"}},g={args:{state:"disabled"}},h={args:{state:"error"}},k={name:"Preset: Įgaliotojai (reorder + actions)",render:()=>e.jsx(a,{title:"Jonas Jonaitis",subtitle:"a.k. 3850.........",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}},trailing:{type:"actions",actions:[{label:"Keisti",icon:O,onClick:()=>{}},{label:"Pašalinti",icon:W,onClick:()=>{}}]}})},B=()=>{const[r,s]=n.useState(!1);return e.jsx(a,{title:"Petras Petraitis",subtitle:"Vadovas",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}},trailing:{type:"toggle",checked:r,onChange:s}})},y={name:"Preset: JA atstovai redaguojama (reorder + toggle)",render:()=>e.jsx(B,{})},S={name:"Preset: JA atstovai peržiūra (status badge)",render:()=>e.jsx(a,{title:"Ona Onaitė",subtitle:"a.k. 3850.........",trailing:{type:"status",label:"Laukiama parašo",color:"warning"}})},X=()=>{const[r,s]=n.useState(!0);return e.jsx(a,{title:"Nekilnojamasis daiktas",subtitle:"Unikalus Nr. 4400.....",state:r?"selected":"rest",leading:{type:"checkbox",checked:r,onChange:s}})},j={name:"Preset: Pasirenkamas sąrašas (checkbox, selected)",render:()=>e.jsx(X,{})},$=[{id:"rep-1",title:"Petras Petraitis",subtitle:"Vadovas",initials:"PP"},{id:"rep-2",title:"Ona Onaitė",subtitle:"Prokuristė",initials:"OO"}],Y=()=>{const[r,s]=n.useState(["rep-1"]);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:$.map(t=>{const o=r.includes(t.id);return e.jsx(a,{title:t.title,subtitle:t.subtitle,state:o?"selected":"rest",leadingMedia:e.jsx(G,{sx:{width:"2rem",height:"2rem"},children:t.initials}),leading:{type:"checkbox",checked:o,onChange:d=>s(c=>d?[...c,t.id]:c.filter(m=>m!==t.id))}},t.id)})})},b={name:"Leading-media: avatar + checkbox people list",render:()=>e.jsx(Y,{})},v={name:"Preset: Krepšelis (price)",render:()=>e.jsx(a,{title:"NTR išrašas (objekto)",subtitle:"Elektroninis dokumentas (PDF)",trailing:{type:"price",amount:"12,00 €",caption:"su PVM"}})},D=[{id:"owner-individual",title:"Savininkas fizinis asmuo"},{id:"owner-legal",title:"Savininkas juridinis asmuo"}],q=()=>{const[r,s]=n.useState(D[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:D.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leading:{type:"radio",name:"owner-type",checked:r===t.id,onChange:()=>s(t.id)},expanded:r===t.id,expandedContent:t.id==="owner-legal"?e.jsxs(i,{sx:{gap:1.5},children:[e.jsx(p,{label:"Įmonės pavadinimas",size:"small"}),e.jsx(p,{label:"Įmonės kodas",size:"small"}),e.jsx(p,{label:"Adresas",size:"small"})]}):void 0},t.id))})},C={name:"GRM-12030: radio-expand (only one open at a time)",render:()=>e.jsx(q,{})},Q=[{id:"rep-1",title:"Petras Petraitis",subtitle:"Vadovas"},{id:"rep-2",title:"Ona Onaitė",subtitle:"Prokuristė"}],Z=()=>{const[r,s]=n.useState(["rep-1"]);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:Q.map(t=>{const o=r.includes(t.id);return e.jsx(a,{title:t.title,subtitle:t.subtitle,state:o?"selected":"rest",leading:{type:"checkbox",checked:o,onChange:d=>s(c=>d?[...c,t.id]:c.filter(m=>m!==t.id))},expanded:o,expandedContent:e.jsx(p,{label:"Kontaktinis el. paštas",size:"small"})},t.id)})})},P={name:"GRM-12030: checkbox-expand (several open independently)",render:()=>e.jsx(Z,{})},ee=()=>{const[r,s]=n.useState(!0),[t,o]=n.useState("yes");return e.jsx(a,{title:"Savininkas juridinis asmuo",state:r?"selected":"rest",leading:{type:"radio",checked:r,onChange:s},expanded:r,expandedContent:e.jsxs(i,{sx:{gap:1.5},children:[e.jsx(p,{label:"Įmonės pavadinimas",size:"small"}),e.jsx(p,{label:"Adresas",size:"small"}),e.jsxs(V,{children:[e.jsx(F,{id:"declaration-label",children:"Deklaracija teikiama"}),e.jsxs(H,{"aria-labelledby":"declaration-label",value:t,onChange:d=>o(d.target.value),children:[e.jsx(M,{value:"yes",control:e.jsx(E,{}),label:"Taip"}),e.jsx(M,{value:"no",control:e.jsx(E,{}),label:"Ne"})]})]})]})})},I={name:"GRM-12030: nested radio group inside expanded content",render:()=>e.jsx(ee,{})},te=()=>{const[r,s]=n.useState(!0);return e.jsx(a,{title:"Nekilnojamasis daiktas su ilgu turiniu",state:r?"selected":"rest",leading:{type:"checkbox",checked:r,onChange:s},expanded:r,expandedContent:e.jsx(i,{sx:{gap:1.5},children:Array.from({length:10}).map((t,o)=>e.jsx(p,{label:`Laukas ${o+1}`,size:"small"},o))})})},w={name:"GRM-12030: long expanded content (no internal scroll)",render:()=>e.jsx(te,{})},ae=()=>{const[r,s]=n.useState(!1),[t,o]=n.useState(!1),[d,c]=n.useState(!1),[m,U]=n.useState(1);return e.jsxs(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:[e.jsx(a,{title:"Nėra",subtitle:"Show-trailing: nėra (trailing praleistas)"}),e.jsx(a,{title:"Actions",subtitle:"Show-trailing: actions",trailing:{type:"actions",actions:[{label:"Keisti",icon:O,onClick:()=>{}},{label:"Pašalinti",icon:W,onClick:()=>{}}]}}),e.jsx(a,{title:"Toggle",subtitle:"Show-trailing: toggle",trailing:{type:"toggle",checked:r,onChange:s}}),e.jsx(a,{title:"Status",subtitle:"Show-trailing: status",trailing:{type:"status",label:"Laukiama parašo",color:"warning"}}),e.jsx(a,{title:"Checkbox",subtitle:"Show-trailing: checkbox",trailing:{type:"checkbox",checked:t,onChange:o}}),e.jsx(a,{title:"Radio",subtitle:"Show-trailing: radio",trailing:{type:"radio",checked:d,onChange:c}}),e.jsx(a,{title:"Chevron",subtitle:"Show-trailing: chevron",trailing:{type:"chevron"},onClick:()=>console.log("Chevron row clicked — navigate to details")}),e.jsx(a,{title:"Price",subtitle:"Show-trailing: price",trailing:{type:"price",amount:"12,00 €",caption:"su PVM"}}),e.jsx(a,{title:"Stepper",subtitle:"Show-trailing: stepper",trailing:{type:"stepper",value:m,onChange:U,min:0}}),e.jsx(a,{title:"Price (su Pašalinti)",subtitle:"Show-trailing: price + onDelete",trailing:{type:"price",amount:"12,00 €",caption:"su PVM",onDelete:()=>{}}})]})},R={name:"Preset: Show-trailing (visos trailing reikšmės)",render:()=>e.jsx(ae,{})},re=()=>{const[r,s]=n.useState(!1),[t,o]=n.useState(!1);return e.jsxs(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:[e.jsx(a,{title:"Nėra",subtitle:"Show-leading: nėra (leading praleistas)"}),e.jsx(a,{title:"Reorder (abu)",subtitle:"Show-leading: reorder-both",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}}}),e.jsx(a,{title:"Reorder (aukštyn)",subtitle:"Show-leading: reorder-up",leading:{type:"reorder",onMoveUp:()=>{}}}),e.jsx(a,{title:"Reorder (žemyn)",subtitle:"Show-leading: reorder-down",leading:{type:"reorder",onMoveDown:()=>{}}}),e.jsx(a,{title:"Checkbox",subtitle:"Show-leading: checkbox",leading:{type:"checkbox",checked:r,onChange:s}}),e.jsx(a,{title:"Radio",subtitle:"Show-leading: radio",leading:{type:"radio",checked:t,onChange:o}}),e.jsx(a,{title:"Drag",subtitle:"Show-leading: drag",leading:{type:"drag","aria-label":"Vilkti ir pertvarkyti"}}),e.jsx(a,{title:"Icon",subtitle:"Show-leading: icon",leading:{type:"icon",icon:z,"aria-label":"Naudotojas"}}),e.jsx(a,{title:"Avatar",subtitle:"Show-leading: avatar",leading:{type:"avatar",initials:"JP"}}),e.jsx(a,{title:"Index",subtitle:"Show-leading: index",leading:{type:"index",index:1}})]})},N={name:"Preset: Show-leading (visos leading reikšmės)",render:()=>e.jsx(re,{})},J=[{id:"with-name",title:"Rodyti su asmens vardu, pavarde ir gimimo data"},{id:"anonymised",title:"Nuasmenintas (be asmens vardo, pavardės, gimimo datos ir asmens kodo)"}],se=()=>{const[r,s]=n.useState(J[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:J.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leading:{type:"radio",name:"universal-preset",checked:r===t.id,onChange:()=>s(t.id)}},t.id))})},T={name:"Preset: pasirenkamų radijo eilučių sąrašas (universalus)",render:()=>e.jsx(se,{})},K=[{id:"swedbank",title:"Swedbank",initials:"SW"},{id:"seb",title:"SEB bankas",initials:"SE"},{id:"luminor",title:"Luminor",initials:"Lu"}],ie=()=>{const[r,s]=n.useState(K[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:K.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leadingMedia:e.jsx(G,{variant:"rounded",sx:{width:"2rem",height:"2rem",bgcolor:"grey.200",color:"grey.700"},children:t.initials}),leading:{type:"radio",name:"payment-method",checked:r===t.id,onChange:()=>s(t.id)}},t.id))})},A={name:"Preset: Payment tile (Card + Radio + Leading-media logo)",render:()=>e.jsx(ie,{})},ne=[{id:"ntr-israsas",title:"NTR išrašas (objekto)",subtitle:"Reg. Nr. 4400-1234-5678",amount:"12,00 €"},{id:"jar-israsas",title:"JAR išrašas",subtitle:"Įmonės kodas 300000000",amount:"8,00 €"},{id:"kadastro-israsas",title:"Kadastro žemėlapio ištrauka",subtitle:"Reg. Nr. 4400-9876-5432",amount:"5,00 €"}],oe=()=>e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:ne.map(r=>e.jsx(a,{title:r.title,subtitle:r.subtitle,trailing:{type:"price",amount:r.amount,caption:"su PVM",onDelete:()=>{},deleteAriaLabel:`Pašalinti "${r.title}" iš krepšelio`}},r.id))}),L={name:"Preset: Krepšelis (su trynimu)",render:()=>e.jsx(oe,{})},f={name:"Meta info: Text tokenai (default/secondary/muted/disabled/link/linkHover)",render:()=>e.jsxs(i,{sx:{gap:2,width:"100%",maxWidth:"32rem"},children:[e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: default"}),e.jsx(a,{title:"Prašymas pateiktas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Sukurta 2026-01-05",textColor:"default"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: secondary"}),e.jsx(a,{title:"Papildoma informacija",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Antrinis tekstas",textColor:"secondary"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: muted"}),e.jsx(a,{title:"Archyvuotas įrašas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Nebeaktualu",textColor:"muted"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: disabled"}),e.jsx(a,{title:"Neaktyvus įrašas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Nepasiekiama",textColor:"disabled"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: link"}),e.jsx(a,{title:"Nuoroda",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Peržiūrėti dokumentą",textColor:"link"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: linkHover"}),e.jsx(a,{title:"Nuoroda (hover)",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Peržiūrėti dokumentą",textColor:"linkHover"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: default + secondary + link (keli meta elementai vienoje eilutėje)"}),e.jsx(a,{title:"Keli meta elementai vienoje eilutėje",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Sukurta 2026-01-05",textColor:"default"},{text:"Antrinis tekstas",textColor:"secondary"},{text:"Peržiūrėti dokumentą",textColor:"link"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(l,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: custom spalva iš palette (pvz. JADIS)"}),e.jsx(a,{title:"JADIS pažymėjimas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"JADIS",textColor:_[700]}]})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'selected'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Įgaliotojai (reorder + actions)',
  render: () => <AdvancedListItem title='Jonas Jonaitis' subtitle='a.k. 3850.........' leading={{
    type: 'reorder',
    onMoveUp: () => {},
    onMoveDown: () => {}
  }} trailing={{
    type: 'actions',
    actions: [{
      label: 'Keisti',
      icon: NotePencilIcon,
      onClick: () => {}
    }, {
      label: 'Pašalinti',
      icon: TrashIcon,
      onClick: () => {}
    }]
  }} />
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Preset: JA atstovai redaguojama (reorder + toggle)',
  render: () => <JaAtstovaiRedaguojamaStory />
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Preset: JA atstovai peržiūra (status badge)',
  render: () => <AdvancedListItem title='Ona Onaitė' subtitle='a.k. 3850.........' trailing={{
    type: 'status',
    label: 'Laukiama parašo',
    color: 'warning'
  }} />
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Pasirenkamas sąrašas (checkbox, selected)',
  render: () => <PasirenkamasSarasasStory />
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Leading-media: avatar + checkbox people list',
  render: () => <LeadingMediaStory />
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Krepšelis (price)',
  render: () => <AdvancedListItem title='NTR išrašas (objekto)' subtitle='Elektroninis dokumentas (PDF)' trailing={{
    type: 'price',
    amount: '12,00 €',
    caption: 'su PVM'
  }} />
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: radio-expand (only one open at a time)',
  render: () => <RadioExpandStory />
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: checkbox-expand (several open independently)',
  render: () => <CheckboxExpandStory />
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: nested radio group inside expanded content',
  render: () => <NestedRadioGroupStory />
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: long expanded content (no internal scroll)',
  render: () => <LongExpandedContentStory />
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Show-trailing (visos trailing reikšmės)',
  render: () => <TrailingShowcaseStory />
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Show-leading (visos leading reikšmės)',
  render: () => <LeadingShowcaseStory />
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Preset: pasirenkamų radijo eilučių sąrašas (universalus)',
  render: () => <UniversalPresetStory />
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Payment tile (Card + Radio + Leading-media logo)',
  render: () => <PaymentTileStory />
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Krepšelis (su trynimu)',
  render: () => <KrepselisWithDeleteStory />
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Meta info: Text tokenai (default/secondary/muted/disabled/link/linkHover)',
  render: () => <Stack sx={{
    gap: 2,
    width: '100%',
    maxWidth: '32rem'
  }}>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: default
        </Typography>
        <AdvancedListItem title='Prašymas pateiktas' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Sukurta 2026-01-05',
        textColor: 'default'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: secondary
        </Typography>
        <AdvancedListItem title='Papildoma informacija' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Antrinis tekstas',
        textColor: 'secondary'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: muted
        </Typography>
        <AdvancedListItem title='Archyvuotas įrašas' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Nebeaktualu',
        textColor: 'muted'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: disabled
        </Typography>
        <AdvancedListItem title='Neaktyvus įrašas' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Nepasiekiama',
        textColor: 'disabled'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: link
        </Typography>
        <AdvancedListItem title='Nuoroda' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Peržiūrėti dokumentą',
        textColor: 'link'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: linkHover
        </Typography>
        <AdvancedListItem title='Nuoroda (hover)' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Peržiūrėti dokumentą',
        textColor: 'linkHover'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: default + secondary + link (keli meta elementai vienoje eilutėje)
        </Typography>
        <AdvancedListItem title='Keli meta elementai vienoje eilutėje' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Sukurta 2026-01-05',
        textColor: 'default'
      }, {
        text: 'Antrinis tekstas',
        textColor: 'secondary'
      }, {
        text: 'Peržiūrėti dokumentą',
        textColor: 'link'
      }]} />
      </Stack>
      <Stack sx={{
      gap: 0.5
    }}>
        <Typography variant='caption' sx={{
        color: 'text.secondary'
      }}>
          textColor: custom spalva iš palette (pvz. JADIS)
        </Typography>
        <AdvancedListItem title='JADIS pažymėjimas' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'JADIS',
        textColor: secondary['700']
      }]} />
      </Stack>
    </Stack>
}`,...f.parameters?.docs?.source}}};const Et=["Main","Selected","Disabled","ErrorState","IgaliotojaiPreset","JaAtstovaiRedaguojamaPreset","JaAtstovaiPerziuraPreset","PasirenkamasSarasasPreset","CheckboxWithLeadingMedia","KrepselisPreset","RadioExpand","CheckboxExpand","NestedRadioGroup","LongExpandedContent","TrailingShowcase","LeadingShowcase","UniversalPreset","PaymentTilePreset","KrepselisWithDeletePreset","MetaInfoTones"];export{P as CheckboxExpand,b as CheckboxWithLeadingMedia,g as Disabled,h as ErrorState,k as IgaliotojaiPreset,S as JaAtstovaiPerziuraPreset,y as JaAtstovaiRedaguojamaPreset,v as KrepselisPreset,L as KrepselisWithDeletePreset,N as LeadingShowcase,w as LongExpandedContent,u as Main,f as MetaInfoTones,I as NestedRadioGroup,j as PasirenkamasSarasasPreset,A as PaymentTilePreset,C as RadioExpand,x as Selected,R as TrailingShowcase,T as UniversalPreset,Et as __namedExportsOrder,Mt as default};
//# sourceMappingURL=AdvancedListItem.stories-DmVI9z9X.js.map
