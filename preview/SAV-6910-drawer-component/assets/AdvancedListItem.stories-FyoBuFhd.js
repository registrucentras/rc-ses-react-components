import{j as e,N as J,T as W,s as _,r as n,U as V}from"./iframe-DB1EF-x_.js";import{A as a}from"./index-9uS2qi4v.js";import{S as i}from"./Stack-BkWRlZW_.js";import{T as m}from"./Typography-DUTz8Atk.js";import{T as c}from"./TextField-B3_cDruX.js";import{A as G}from"./Avatar-B7RdXPHO.js";import{F as z}from"./FormControl-C5Hy8blQ.js";import{F}from"./FormLabel-C3rn3CZT.js";import{R as B}from"./RadioGroup-DIUjSCfO.js";import{F as M}from"./FormControlLabel-Dx9oFgZg.js";import{R as E}from"./Radio-BOtgJFbr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUkIK3h-.js";import"./useTranslation-DSJywBrb.js";import"./index-DWsPbBEP.js";import"./Box-D4Jm7AAj.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./index-CjXnnaq5.js";import"./Tooltip-vTQH1WZq.js";import"./useReducedMotion-C4RkVMNI.js";import"./memoTheme-VhH0Ke8H.js";import"./useSlot-CdVtEC6U.js";import"./mergeSlotProps-D1VQHPIF.js";import"./useTimeout-Bp9Z3NaC.js";import"./useControlled-D8_om1HX.js";import"./getReactElementRef-DCy1rOni.js";import"./Grow-BKz0f3qP.js";import"./Transition-jXxGhKeR.js";import"./utils-BL043Ngk.js";import"./Popper-CXIyauks.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BOvFD5eV.js";import"./index-BmS_ntgN.js";import"./index-CH-QCW2k.js";import"./setRef-CQn2LYBI.js";import"./useSlotProps-7xO63P3d.js";import"./isFocusVisible-B8k4qzLc.js";import"./Skeleton-Dq2XRKNJ.js";import"./motion-DxZzVqw5.js";import"./SimpleCheckbox-CZx4hQ7x.js";import"./loading-CWtJfum3.js";import"./SwitchBase-Bq3OTH_b.js";import"./useFormControl-CWEpkjEg.js";import"./ButtonBase-Bt3PjvxV.js";import"./createSvgIcon-D74Ga_RM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-DYFVJgHy.js";import"./IconButton-BL8T53Uu.js";import"./CircularProgress-CBcVl4sl.js";import"./index-BEec_9vn.js";import"./index-BDBp3RTl.js";import"./Button-BuIKW3by.js";import"./index-Bs-jsbYq.js";import"./usePrefersReducedMotion-DB0RAuzG.js";import"./Collapse-CSqCBnZJ.js";import"./useThemeProps-KgNX7ntt.js";import"./getThemeProps-__gKXzXy.js";import"./Select-yXGDQHDB.js";import"./Popover-BXp0xn43.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-ChBBJl8b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Backdrop-D7k8my25.js";import"./Fade-BfRDaHk2.js";import"./Paper-C5KcvUpZ.js";import"./useRovingTabIndex-BJ8EBiC5.js";import"./List-CLyni-vL.js";import"./OutlinedInput-DEyC0sHh.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-N7yAWwku.js";import"./FormHelperText-YVXxzo4-.js";import"./isMuiElement-BJmv-8vH.js";const At={title:"Organisms/AdvancedListItem",component:a,tags:["autodocs","deprecated"],args:{title:"Įrašo pavadinimas",subtitle:"a.k. 3850.........",state:"rest"}},u={},x={args:{state:"selected"}},g={args:{state:"disabled"}},h={args:{state:"error"}},k={name:"Preset: Įgaliotojai (reorder + actions)",render:()=>e.jsx(a,{title:"Jonas Jonaitis",subtitle:"a.k. 3850.........",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}},trailing:{type:"actions",actions:[{label:"Keisti",icon:J,onClick:()=>{}},{label:"Pašalinti",icon:W,onClick:()=>{}}]}})},H=()=>{const[r,s]=n.useState(!1);return e.jsx(a,{title:"Petras Petraitis",subtitle:"Vadovas",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}},trailing:{type:"toggle",checked:r,onChange:s}})},S={name:"Preset: JA atstovai redaguojama (reorder + toggle)",render:()=>e.jsx(H,{})},y={name:"Preset: JA atstovai peržiūra (status badge)",render:()=>e.jsx(a,{title:"Ona Onaitė",subtitle:"a.k. 3850.........",trailing:{type:"status",label:"Laukiama parašo",color:"warning"}})},X=()=>{const[r,s]=n.useState(!0);return e.jsx(a,{title:"Nekilnojamasis daiktas",subtitle:"Unikalus Nr. 4400.....",state:r?"selected":"rest",leading:{type:"checkbox",checked:r,onChange:s}})},j={name:"Preset: Pasirenkamas sąrašas (checkbox, selected)",render:()=>e.jsx(X,{})},$=[{id:"rep-1",title:"Petras Petraitis",subtitle:"Vadovas",initials:"PP"},{id:"rep-2",title:"Ona Onaitė",subtitle:"Prokuristė",initials:"OO"}],Y=()=>{const[r,s]=n.useState(["rep-1"]);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:$.map(t=>{const o=r.includes(t.id);return e.jsx(a,{title:t.title,subtitle:t.subtitle,state:o?"selected":"rest",leadingMedia:e.jsx(G,{sx:{width:"2rem",height:"2rem"},children:t.initials}),leading:{type:"checkbox",checked:o,onChange:l=>s(d=>l?[...d,t.id]:d.filter(p=>p!==t.id))}},t.id)})})},b={name:"Leading-media: avatar + checkbox people list",render:()=>e.jsx(Y,{})},P={name:"Preset: Krepšelis (price)",render:()=>e.jsx(a,{title:"NTR išrašas (objekto)",subtitle:"Elektroninis dokumentas (PDF)",trailing:{type:"price",amount:"12,00 €",caption:"su PVM"}})},D=[{id:"owner-individual",title:"Savininkas fizinis asmuo"},{id:"owner-legal",title:"Savininkas juridinis asmuo"}],q=()=>{const[r,s]=n.useState(D[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:D.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leading:{type:"radio",name:"owner-type",checked:r===t.id,onChange:()=>s(t.id)},expanded:r===t.id,expandedContent:t.id==="owner-legal"?e.jsxs(i,{sx:{gap:1.5},children:[e.jsx(c,{label:"Įmonės pavadinimas",size:"small"}),e.jsx(c,{label:"Įmonės kodas",size:"small"}),e.jsx(c,{label:"Adresas",size:"small"})]}):void 0},t.id))})},v={name:"GRM-12030: radio-expand (only one open at a time)",render:()=>e.jsx(q,{})},Q=[{id:"rep-1",title:"Petras Petraitis",subtitle:"Vadovas"},{id:"rep-2",title:"Ona Onaitė",subtitle:"Prokuristė"}],Z=()=>{const[r,s]=n.useState(["rep-1"]);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:Q.map(t=>{const o=r.includes(t.id);return e.jsx(a,{title:t.title,subtitle:t.subtitle,state:o?"selected":"rest",leading:{type:"checkbox",checked:o,onChange:l=>s(d=>l?[...d,t.id]:d.filter(p=>p!==t.id))},expanded:o,expandedContent:e.jsx(c,{label:"Kontaktinis el. paštas",size:"small"})},t.id)})})},C={name:"GRM-12030: checkbox-expand (several open independently)",render:()=>e.jsx(Z,{})},ee=()=>{const[r,s]=n.useState(!0),[t,o]=n.useState("yes");return e.jsx(a,{title:"Savininkas juridinis asmuo",state:r?"selected":"rest",leading:{type:"radio",checked:r,onChange:s},expanded:r,expandedContent:e.jsxs(i,{sx:{gap:1.5},children:[e.jsx(c,{label:"Įmonės pavadinimas",size:"small"}),e.jsx(c,{label:"Adresas",size:"small"}),e.jsxs(z,{children:[e.jsx(F,{id:"declaration-label",children:"Deklaracija teikiama"}),e.jsxs(B,{"aria-labelledby":"declaration-label",value:t,onChange:l=>o(l.target.value),children:[e.jsx(M,{value:"yes",control:e.jsx(E,{}),label:"Taip"}),e.jsx(M,{value:"no",control:e.jsx(E,{}),label:"Ne"})]})]})]})})},w={name:"GRM-12030: nested radio group inside expanded content",render:()=>e.jsx(ee,{})},te=()=>{const[r,s]=n.useState(!0);return e.jsx(a,{title:"Nekilnojamasis daiktas su ilgu turiniu",state:r?"selected":"rest",leading:{type:"checkbox",checked:r,onChange:s},expanded:r,expandedContent:e.jsx(i,{sx:{gap:1.5},children:Array.from({length:10}).map((t,o)=>e.jsx(c,{label:`Laukas ${o+1}`,size:"small"},o))})})},R={name:"GRM-12030: long expanded content (no internal scroll)",render:()=>e.jsx(te,{})},ae=()=>{const[r,s]=n.useState(!1),[t,o]=n.useState(!1),[l,d]=n.useState(!1),[p,U]=n.useState(1);return e.jsxs(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:[e.jsx(a,{title:"Nėra",subtitle:"Show-trailing: nėra (trailing praleistas)"}),e.jsx(a,{title:"Actions",subtitle:"Show-trailing: actions",trailing:{type:"actions",actions:[{label:"Keisti",icon:J,onClick:()=>{}},{label:"Pašalinti",icon:W,onClick:()=>{}}]}}),e.jsx(a,{title:"Toggle",subtitle:"Show-trailing: toggle",trailing:{type:"toggle",checked:r,onChange:s}}),e.jsx(a,{title:"Status",subtitle:"Show-trailing: status",trailing:{type:"status",label:"Laukiama parašo",color:"warning"}}),e.jsx(a,{title:"Checkbox",subtitle:"Show-trailing: checkbox",trailing:{type:"checkbox",checked:t,onChange:o}}),e.jsx(a,{title:"Radio",subtitle:"Show-trailing: radio",trailing:{type:"radio",checked:l,onChange:d}}),e.jsx(a,{title:"Chevron",subtitle:"Show-trailing: chevron",trailing:{type:"chevron"},onClick:()=>console.log("Chevron row clicked — navigate to details")}),e.jsx(a,{title:"Price",subtitle:"Show-trailing: price",trailing:{type:"price",amount:"12,00 €",caption:"su PVM"}}),e.jsx(a,{title:"Stepper",subtitle:"Show-trailing: stepper",trailing:{type:"stepper",value:p,onChange:U,min:0}}),e.jsx(a,{title:"Price (su Pašalinti)",subtitle:"Show-trailing: price + onDelete",trailing:{type:"price",amount:"12,00 €",caption:"su PVM",onDelete:()=>{}}})]})},I={name:"Preset: Show-trailing (visos trailing reikšmės)",render:()=>e.jsx(ae,{})},re=()=>{const[r,s]=n.useState(!1),[t,o]=n.useState(!1);return e.jsxs(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:[e.jsx(a,{title:"Nėra",subtitle:"Show-leading: nėra (leading praleistas)"}),e.jsx(a,{title:"Reorder (abu)",subtitle:"Show-leading: reorder-both",leading:{type:"reorder",onMoveUp:()=>{},onMoveDown:()=>{}}}),e.jsx(a,{title:"Reorder (aukštyn)",subtitle:"Show-leading: reorder-up",leading:{type:"reorder",onMoveUp:()=>{}}}),e.jsx(a,{title:"Reorder (žemyn)",subtitle:"Show-leading: reorder-down",leading:{type:"reorder",onMoveDown:()=>{}}}),e.jsx(a,{title:"Checkbox",subtitle:"Show-leading: checkbox",leading:{type:"checkbox",checked:r,onChange:s}}),e.jsx(a,{title:"Radio",subtitle:"Show-leading: radio",leading:{type:"radio",checked:t,onChange:o}}),e.jsx(a,{title:"Drag",subtitle:"Show-leading: drag",leading:{type:"drag","aria-label":"Vilkti ir pertvarkyti"}}),e.jsx(a,{title:"Icon",subtitle:"Show-leading: icon",leading:{type:"icon",icon:V,"aria-label":"Naudotojas"}}),e.jsx(a,{title:"Avatar",subtitle:"Show-leading: avatar",leading:{type:"avatar",initials:"JP"}}),e.jsx(a,{title:"Index",subtitle:"Show-leading: index",leading:{type:"index",index:1}})]})},T={name:"Preset: Show-leading (visos leading reikšmės)",render:()=>e.jsx(re,{})},K=[{id:"with-name",title:"Rodyti su asmens vardu, pavarde ir gimimo data"},{id:"anonymised",title:"Nuasmenintas (be asmens vardo, pavardės, gimimo datos ir asmens kodo)"}],se=()=>{const[r,s]=n.useState(K[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:K.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leading:{type:"radio",name:"universal-preset",checked:r===t.id,onChange:()=>s(t.id)}},t.id))})},A={name:"Preset: pasirenkamų radijo eilučių sąrašas (universalus)",render:()=>e.jsx(se,{})},O=[{id:"swedbank",title:"Swedbank",initials:"SW"},{id:"seb",title:"SEB bankas",initials:"SE"},{id:"luminor",title:"Luminor",initials:"Lu"}],ie=()=>{const[r,s]=n.useState(O[0].id);return e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:O.map(t=>e.jsx(a,{title:t.title,state:r===t.id?"selected":"rest",leadingMedia:e.jsx(G,{variant:"rounded",sx:{width:"2rem",height:"2rem",bgcolor:"grey.200",color:"grey.700"},children:t.initials}),leading:{type:"radio",name:"payment-method",checked:r===t.id,onChange:()=>s(t.id)}},t.id))})},N={name:"Preset: Payment tile (Card + Radio + Leading-media logo)",render:()=>e.jsx(ie,{})},ne=[{id:"ntr-israsas",title:"NTR išrašas (objekto)",subtitle:"Reg. Nr. 4400-1234-5678",amount:"12,00 €"},{id:"jar-israsas",title:"JAR išrašas",subtitle:"Įmonės kodas 300000000",amount:"8,00 €"},{id:"kadastro-israsas",title:"Kadastro žemėlapio ištrauka",subtitle:"Reg. Nr. 4400-9876-5432",amount:"5,00 €"}],oe=()=>e.jsx(i,{sx:{gap:1,width:"100%",maxWidth:"32rem"},children:ne.map(r=>e.jsx(a,{title:r.title,subtitle:r.subtitle,trailing:{type:"price",amount:r.amount,caption:"su PVM",onDelete:()=>{},deleteAriaLabel:`Pašalinti "${r.title}" iš krepšelio`}},r.id))}),L={name:"Preset: Krepšelis (su trynimu)",render:()=>e.jsx(oe,{})},f={name:"Meta info: textColor tokens (default/secondary/muted/disabled/link/linkHover)",render:()=>e.jsxs(i,{sx:{gap:2,width:"100%",maxWidth:"32rem"},children:[e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: default"}),e.jsx(a,{title:"Prašymas pateiktas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Sukurta 2026-01-05",textColor:"default"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: secondary"}),e.jsx(a,{title:"Papildoma informacija",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Antrinis tekstas",textColor:"secondary"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: muted"}),e.jsx(a,{title:"Archyvuotas įrašas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Nebeaktualu",textColor:"muted"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: link"}),e.jsx(a,{title:"Nuoroda",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Peržiūrėti dokumentą",textColor:"link"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: default + secondary + link (multiple meta items in one row)"}),e.jsx(a,{title:"Keli meta elementai vienoje eilutėje",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Sukurta 2026-01-05",textColor:"default"},{text:"Antrinis tekstas",textColor:"secondary"},{text:"Peržiūrėti dokumentą",textColor:"link"}]})]}),e.jsxs(i,{sx:{gap:.5},children:[e.jsx(m,{variant:"caption",sx:{color:"text.secondary"},children:"textColor: custom color from the palette"}),e.jsx(a,{title:"JADIS pažymėjimas",subtitle:"Reg. Nr. 4400-1234-5678",metaItems:[{text:"Peržiūrėti dokumentą",textColor:_[700]}]})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Preset: JA atstovai redaguojama (reorder + toggle)',
  render: () => <JaAtstovaiRedaguojamaStory />
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Preset: JA atstovai peržiūra (status badge)',
  render: () => <AdvancedListItem title='Ona Onaitė' subtitle='a.k. 3850.........' trailing={{
    type: 'status',
    label: 'Laukiama parašo',
    color: 'warning'
  }} />
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Pasirenkamas sąrašas (checkbox, selected)',
  render: () => <PasirenkamasSarasasStory />
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Leading-media: avatar + checkbox people list',
  render: () => <LeadingMediaStory />
}`,...b.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Krepšelis (price)',
  render: () => <AdvancedListItem title='NTR išrašas (objekto)' subtitle='Elektroninis dokumentas (PDF)' trailing={{
    type: 'price',
    amount: '12,00 €',
    caption: 'su PVM'
  }} />
}`,...P.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: radio-expand (only one open at a time)',
  render: () => <RadioExpandStory />
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: checkbox-expand (several open independently)',
  render: () => <CheckboxExpandStory />
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: nested radio group inside expanded content',
  render: () => <NestedRadioGroupStory />
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'GRM-12030: long expanded content (no internal scroll)',
  render: () => <LongExpandedContentStory />
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Show-trailing (visos trailing reikšmės)',
  render: () => <TrailingShowcaseStory />
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Show-leading (visos leading reikšmės)',
  render: () => <LeadingShowcaseStory />
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Preset: pasirenkamų radijo eilučių sąrašas (universalus)',
  render: () => <UniversalPresetStory />
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Payment tile (Card + Radio + Leading-media logo)',
  render: () => <PaymentTileStory />
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Preset: Krepšelis (su trynimu)',
  render: () => <KrepselisWithDeleteStory />
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Meta info: textColor tokens (default/secondary/muted/disabled/link/linkHover)',
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
          textColor: default + secondary + link (multiple meta items in one row)
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
          textColor: custom color from the palette
        </Typography>
        <AdvancedListItem title='JADIS pažymėjimas' subtitle='Reg. Nr. 4400-1234-5678' metaItems={[{
        text: 'Peržiūrėti dokumentą',
        textColor: secondary['700']
      }]} />
      </Stack>
    </Stack>
}`,...f.parameters?.docs?.source}}};const Nt=["Main","Selected","Disabled","ErrorState","IgaliotojaiPreset","JaAtstovaiRedaguojamaPreset","JaAtstovaiPerziuraPreset","PasirenkamasSarasasPreset","CheckboxWithLeadingMedia","KrepselisPreset","RadioExpand","CheckboxExpand","NestedRadioGroup","LongExpandedContent","TrailingShowcase","LeadingShowcase","UniversalPreset","PaymentTilePreset","KrepselisWithDeletePreset","MetaInfoTones"];export{C as CheckboxExpand,b as CheckboxWithLeadingMedia,g as Disabled,h as ErrorState,k as IgaliotojaiPreset,y as JaAtstovaiPerziuraPreset,S as JaAtstovaiRedaguojamaPreset,P as KrepselisPreset,L as KrepselisWithDeletePreset,T as LeadingShowcase,R as LongExpandedContent,u as Main,f as MetaInfoTones,w as NestedRadioGroup,j as PasirenkamasSarasasPreset,N as PaymentTilePreset,v as RadioExpand,x as Selected,I as TrailingShowcase,A as UniversalPreset,Nt as __namedExportsOrder,At as default};
//# sourceMappingURL=AdvancedListItem.stories-FyoBuFhd.js.map
