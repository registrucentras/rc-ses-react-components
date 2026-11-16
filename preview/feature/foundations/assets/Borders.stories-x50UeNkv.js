import{j as t,i as a,n as m}from"./iframe-C5f9Zc7Z.js";import{c as p}from"./tokenTheme-BcZLwVpt.js";import{S as n}from"./Stack-n0USQ4NM.js";import{T as u}from"./Typography-Cu6X7zgN.js";import{B as i}from"./Box-B61C4jPN.js";import{C as l}from"./Card-1KgHiFLR.js";import{B as s}from"./Button-CpdT9tS7.js";import{T as o}from"./TextField-oNSncVaQ.js";import{A as x}from"./Autocomplete-CnpEowmp.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Dn22t17M.js";import"./useTheme-DJRvu-BM.js";import"./utils-BL043Ngk.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTimeout-C0xJNvSp.js";import"./useReducedMotion-BHCwGahe.js";import"./CircularProgress-DCfJ8UYi.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./Select-BusCaZhm.js";import"./useSlotProps-BH4z5ryB.js";import"./Popover-D7KVqWPM.js";import"./mergeSlotProps-CBY2sUhi.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./getReactElementRef-D27myLnX.js";import"./Modal-eG75g-HH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DZSngBJJ.js";import"./useRovingTabIndex-C3X7iciN.js";import"./List-B019eLJ7.js";import"./OutlinedInput-C5zfYCDl.js";import"./useFormControl-Cxw3h7Uq.js";import"./FormControl-CK27828S.js";import"./isMuiElement-BSR4zhUB.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-B4Netmu2.js";import"./createSvgIcon-DJbAJPfa.js";import"./InputLabel-CYzpi1R6.js";import"./FormLabel-BBfBuyLi.js";import"./FormHelperText-CDg-yryp.js";import"./Close-kO8uNmWX.js";import"./Popper-XpW4iyei.js";import"./Chip-05GrKjDf.js";import"./IconButton-DYL-CqTP.js";const c=p(),h=p({components:{MuiButton:{styleOverrides:{root:{borderRadius:"3px"}}}}}),vt={title:"Fixtures/Foundations/Borders",tags:["no-snapshot","!dev"],parameters:{layout:"padded"}},r={parameters:{docs:{description:{story:"Input description specifies 6 px, but the Figma export alias points to 8 px. The exported reference is used; designer confirmation is still required."}}},render:()=>t.jsx(a,{theme:c,children:t.jsxs(n,{spacing:2,children:[t.jsx(u,{variant:"h2",children:"Radius primitives and aliases"}),t.jsx(i,{sx:{display:"flex",flexWrap:"wrap",gap:2},children:Object.entries(m).filter(([e])=>e.startsWith("radius-")).map(([e,d])=>t.jsx(i,{"data-testid":e,sx:{borderRadius:d,border:"1px solid",p:2},children:e},e))}),t.jsx(i,{"data-testid":"theme-radius",sx:{borderRadius:2,border:"1px solid",p:2},children:"theme.shape.borderRadius * 2"}),t.jsx(l,{"data-testid":"theme-card",sx:{p:2},children:"Card radius alias"}),t.jsx(s,{"data-testid":"theme-button",children:"Button radius alias"}),t.jsx(o,{"data-testid":"theme-input",label:"Input radius alias"}),t.jsx(x,{"data-testid":"theme-autocomplete",options:["One","Two"],renderInput:e=>t.jsx(o,{...e,label:"Autocomplete radius alias"})}),t.jsx(o,{"data-testid":"theme-input-error",label:"Error input radius alias",error:!0}),t.jsx(a,{theme:h,children:t.jsx(s,{"data-testid":"custom-radius",children:"Consumer override: 3px"})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Input description specifies 6 px, but the Figma export alias points to 8 px. The exported reference is used; designer confirmation is still required.'
      }
    }
  },
  render: () => <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Radius primitives and aliases</Typography>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
      }}>
          {Object.entries(borderTokens).filter(([name]) => name.startsWith('radius-')).map(([name, value]) => <Box key={name} data-testid={name} sx={{
          borderRadius: value,
          border: '1px solid',
          p: 2
        }}>
                {name}
              </Box>)}
        </Box>
        <Box data-testid='theme-radius' sx={{
        borderRadius: 2,
        border: '1px solid',
        p: 2
      }}>
          theme.shape.borderRadius * 2
        </Box>
        <Card data-testid='theme-card' sx={{
        p: 2
      }}>
          Card radius alias
        </Card>
        <Button data-testid='theme-button'>Button radius alias</Button>
        <TextField data-testid='theme-input' label='Input radius alias' />
        <Autocomplete data-testid='theme-autocomplete' options={['One', 'Two']} renderInput={params => <TextField {...params} label='Autocomplete radius alias' />} />
        <TextField data-testid='theme-input-error' label='Error input radius alias' error />
        <ThemeProvider theme={customTheme}>
          <Button data-testid='custom-radius'>Consumer override: 3px</Button>
        </ThemeProvider>
      </Stack>
    </ThemeProvider>
}`,...r.parameters?.docs?.source}}};const gt=["Radius"];export{r as Radius,gt as __namedExportsOrder,vt as default};
//# sourceMappingURL=Borders.stories-x50UeNkv.js.map
