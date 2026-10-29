import{j as t,k as a,l as m}from"./iframe-CWj8oZOZ.js";import{c as p}from"./tokenTheme-qVsiXXng.js";import{S as n}from"./Stack-CkZqBFdB.js";import{T as u}from"./Typography-p54XM_E9.js";import{B as i}from"./Box-DrHRxVUy.js";import{C as l}from"./Card-CefmRuYH.js";import{B as s}from"./Button-BbYEBjTl.js";import{T as o}from"./TextField-DWaN9C8V.js";import{A as c}from"./Autocomplete-BSqe6cLe.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-rzYRwBep.js";import"./useThemeProps-HF0yvPmk.js";import"./getThemeProps-CVYSyeY6.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BqPJ_771.js";import"./useReducedMotion-CPcVPcQI.js";import"./utils-BL043Ngk.js";import"./ButtonBase-DNQcAHDH.js";import"./useTimeout-BiQanTB9.js";import"./CircularProgress-o7WJEzHT.js";import"./useSlot-CB-gizTQ.js";import"./mergeSlotProps-Bkc5NF6i.js";import"./Select-BWXnTc4L.js";import"./useSlotProps-BEid7iq9.js";import"./Popover-D2neVCI1.js";import"./mergeSlotProps-B3s8xX8O.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-25DxD-fu.js";import"./Transition-6wjDhKPT.js";import"./getReactElementRef-YHCFHVm5.js";import"./Modal-CLuF_jcr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BcPZnrEN.js";import"./index-DQ13ji2A.js";import"./index-BnqEAZ8e.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Bsi1esff.js";import"./useRovingTabIndex-w3Nact0Q.js";import"./List-D-TBVhcB.js";import"./OutlinedInput-K6qwtIwS.js";import"./useFormControl-DFU56Ddn.js";import"./FormControl-CqI-8RUQ.js";import"./isMuiElement-Dhmu_ULU.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./useControlled-CBD9UJuw.js";import"./createSvgIcon-Bv-KOEm-.js";import"./InputLabel-B3mHetsL.js";import"./FormLabel-BDZA67Vl.js";import"./FormHelperText-CtYyHc3P.js";import"./Close-B5CWgjyd.js";import"./Popper-CAppPN4C.js";import"./Chip-D8rv1PjY.js";import"./IconButton-CE1wGVKF.js";const x=p(),h=p({components:{MuiButton:{styleOverrides:{root:{borderRadius:"3px"}}}}}),Bt={title:"Foundations/Borders",tags:["no-snapshot"],parameters:{layout:"padded"}},r={parameters:{docs:{description:{story:"Input description specifies 6 px, but the Figma export alias points to 8 px. The exported reference is used; designer confirmation is still required."}}},render:()=>t.jsx(a,{theme:x,children:t.jsxs(n,{spacing:2,children:[t.jsx(u,{variant:"h2",children:"Radius primitives and aliases"}),t.jsx(i,{sx:{display:"flex",flexWrap:"wrap",gap:2},children:Object.entries(m).filter(([e])=>e.startsWith("radius-")).map(([e,d])=>t.jsx(i,{"data-testid":e,sx:{borderRadius:d,border:"1px solid",p:2},children:e},e))}),t.jsx(i,{"data-testid":"theme-radius",sx:{borderRadius:2,border:"1px solid",p:2},children:"theme.shape.borderRadius * 2"}),t.jsx(l,{"data-testid":"theme-card",sx:{p:2},children:"Card radius alias"}),t.jsx(s,{"data-testid":"theme-button",children:"Button radius alias"}),t.jsx(o,{"data-testid":"theme-input",label:"Input radius alias"}),t.jsx(c,{"data-testid":"theme-autocomplete",options:["One","Two"],renderInput:e=>t.jsx(o,{...e,label:"Autocomplete radius alias"})}),t.jsx(o,{"data-testid":"theme-input-error",label:"Error input radius alias",error:!0}),t.jsx(a,{theme:h,children:t.jsx(s,{"data-testid":"custom-radius",children:"Consumer override: 3px"})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const vt=["Radius"];export{r as Radius,vt as __namedExportsOrder,Bt as default};
//# sourceMappingURL=Borders.stories-BHsV4as_.js.map
