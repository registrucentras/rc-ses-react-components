import{r as f,j as e,i as d,t as T,o as a,c as t}from"./iframe-C5f9Zc7Z.js";import{c as k}from"./tokenTheme-BcZLwVpt.js";import{S as h}from"./Stack-n0USQ4NM.js";import{T as r}from"./Typography-Cu6X7zgN.js";import{B as l}from"./Box-B61C4jPN.js";import{B as P}from"./Button-CpdT9tS7.js";import{T as x}from"./TextField-oNSncVaQ.js";import{M as m}from"./MenuItem-BPhEetl2.js";import{P as S}from"./Popover-D7KVqWPM.js";import{M as j}from"./Select-BusCaZhm.js";import{D as w}from"./Dialog-CwChPKZP.js";import{D as C}from"./DialogTitle-D593z435.js";import{S as E}from"./Snackbar-ByuygIyq.js";import{P as g}from"./Paper-Dn22t17M.js";import{A as M}from"./Autocomplete-CnpEowmp.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CaOGKB9m.js";import"./getThemeProps-Cw8NFX3f.js";import"./memoTheme-aFWhReI0.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./utils-BL043Ngk.js";import"./ButtonBase-Dh7CHqXH.js";import"./useTheme-DJRvu-BM.js";import"./useTimeout-C0xJNvSp.js";import"./useReducedMotion-BHCwGahe.js";import"./CircularProgress-DCfJ8UYi.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./OutlinedInput-C5zfYCDl.js";import"./useFormControl-Cxw3h7Uq.js";import"./FormControl-CK27828S.js";import"./isMuiElement-BSR4zhUB.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-BQgAPKnO.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./InputLabel-CYzpi1R6.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./FormLabel-BBfBuyLi.js";import"./FormHelperText-CDg-yryp.js";import"./List-B019eLJ7.js";import"./useRovingTabIndex-C3X7iciN.js";import"./setRef-CQn2LYBI.js";import"./listItemTextClasses-CbyehWdQ.js";import"./dividerClasses-BusXqZ0M.js";import"./mergeSlotProps-CBY2sUhi.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./getReactElementRef-D27myLnX.js";import"./Modal-eG75g-HH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./contains-DSD8CO72.js";import"./Fade-DZSngBJJ.js";import"./useSlotProps-BH4z5ryB.js";import"./useControlled-B4Netmu2.js";import"./createSvgIcon-DJbAJPfa.js";import"./dialogTitleClasses-BUJMfYqj.js";import"./ClickAwayListener-BvBe8UMY.js";import"./Close-kO8uNmWX.js";import"./Popper-XpW4iyei.js";import"./Chip-05GrKjDf.js";import"./IconButton-DYL-CqTP.js";const b=k(),Ve={title:"Fixtures/Foundations/Effects",tags:["!dev"],parameters:{layout:"padded"}},i={render:()=>e.jsx(d,{theme:b,children:e.jsxs(h,{spacing:3,sx:{p:2},children:[e.jsx(r,{variant:"h2",children:"Elevation and focus rings"}),e.jsx(r,{children:"Elevation tokens are selected by component role. Numeric MUI shadows stay unchanged."}),e.jsx(l,{sx:{display:"flex",flexWrap:"wrap",gap:3},children:["sm","md","lg"].map(o=>e.jsxs(g,{elevation:0,"data-testid":`elevation-${o}`,sx:{p:3,borderRadius:"1rem",bgcolor:t["surface-base"],boxShadow:a[`elevation-${o}`]},children:["Elevation/",o]},o))}),e.jsx(r,{children:"Focus references and Tab specimens. Component rebinding belongs to phase 2."}),["default","error"].map(o=>e.jsxs(l,{sx:{display:"flex",flexWrap:"wrap",gap:3},children:[e.jsxs(l,{"data-testid":`focus-reference-${o}`,sx:{boxShadow:a[`focus-ring-${o}`],p:2,borderRadius:"0.375rem",border:"1px solid",borderColor:t[o==="default"?"border-focus":"border-strong"],bgcolor:t["surface-base"]},children:["Focus-ring/",o]}),e.jsxs(l,{component:"button",type:"button","data-testid":`focus-${o}`,sx:{p:2,border:"1px solid",borderColor:t[o==="default"?"border-focus":"border-strong"],borderRadius:"0.375rem",bgcolor:t["surface-base"],color:"text.primary",boxShadow:a["elevation-md"],"&:focus-visible":{outline:"none",boxShadow:`${a["elevation-md"]}, ${a[`focus-ring-${o}`]}`}},children:["Tab: ",o," ring with elevation"]})]},o)),e.jsx(M,{"data-testid":"effects-autocomplete",options:["Elevation/md popup"],renderInput:o=>e.jsx(x,{...o,label:"Autocomplete popup uses md"})})]})})},c={tags:["no-snapshot"],render:function(){const[p,s]=f.useState(null),[u,v]=f.useState(null);return e.jsx(d,{theme:b,children:e.jsxs(h,{spacing:3,sx:{p:2},children:[e.jsx(r,{variant:"h2",children:"Elevation by component role"}),e.jsx(r,{children:"Popover, Menu and Select use md; Dialog and SnackbarContent use lg. Escape closes each specimen."}),e.jsx(l,{sx:{display:"flex",flexWrap:"wrap",gap:2},children:["popover","menu","dialog","snackbar"].map(n=>e.jsxs(P,{onClick:y=>{v(y.currentTarget),s(n)},children:["Open ",n]},n))}),e.jsxs(x,{select:!0,label:"Role select",defaultValue:"one",slotProps:{select:{MenuProps:{slotProps:{paper:{className:"effects-role-select"}}}}},children:[e.jsx(m,{value:"one",children:"Select dropdown: md"}),e.jsx(m,{value:"two",children:"Second option"})]}),e.jsx(S,{open:p==="popover",anchorEl:u,onClose:()=>s(null),slotProps:{paper:{className:"effects-role-popover"}},children:e.jsx(r,{children:"Popover: md"})}),e.jsx(j,{open:p==="menu",anchorEl:u,onClose:()=>s(null),slotProps:{paper:{className:"effects-role-menu"}},children:e.jsx(m,{children:"Menu: md"})}),e.jsx(w,{open:p==="dialog",onClose:()=>s(null),slotProps:{paper:{className:"effects-role-dialog"}},children:e.jsx(C,{children:"Dialog: lg"})}),e.jsx(E,{open:p==="snackbar",message:"SnackbarContent: lg",onClose:()=>s(null),slotProps:{content:{className:"effects-role-snackbar"}}}),e.jsx(r,{children:"Legacy shadows below are references for missing-token fallbacks."}),e.jsx(d,{theme:T,children:[8,24,6].map(n=>e.jsxs(g,{elevation:n,"data-testid":`legacy-shadow-${n}`,sx:{p:2},children:["Legacy elevation ",n]},n))})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3} sx={{
      p: 2
    }}>
        <Typography variant='h2'>Elevation and focus rings</Typography>
        <Typography>
          Elevation tokens are selected by component role. Numeric MUI shadows stay
          unchanged.
        </Typography>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3
      }}>
          {(['sm', 'md', 'lg'] as const).map(role => <Paper key={role} elevation={0} data-testid={\`elevation-\${role}\`} sx={{
          p: 3,
          borderRadius: '1rem',
          bgcolor: colorTokens['surface-base'],
          boxShadow: effectTokens[\`elevation-\${role}\`]
        }}>
              Elevation/{role}
            </Paper>)}
        </Box>
        <Typography>
          Focus references and Tab specimens. Component rebinding belongs to phase 2.
        </Typography>
        {(['default', 'error'] as const).map(role => <Box key={role} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3
      }}>
            <Box data-testid={\`focus-reference-\${role}\`} sx={{
          boxShadow: effectTokens[\`focus-ring-\${role}\`],
          p: 2,
          borderRadius: '0.375rem',
          border: '1px solid',
          borderColor: colorTokens[role === 'default' ? 'border-focus' : 'border-strong'],
          bgcolor: colorTokens['surface-base']
        }}>
              Focus-ring/{role}
            </Box>
            <Box component='button' type='button' data-testid={\`focus-\${role}\`} sx={{
          p: 2,
          border: '1px solid',
          borderColor: colorTokens[role === 'default' ? 'border-focus' : 'border-strong'],
          borderRadius: '0.375rem',
          bgcolor: colorTokens['surface-base'],
          color: 'text.primary',
          boxShadow: effectTokens['elevation-md'],
          '&:focus-visible': {
            outline: 'none',
            boxShadow: \`\${effectTokens['elevation-md']}, \${effectTokens[\`focus-ring-\${role}\`]}\`
          }
        }}>
              Tab: {role} ring with elevation
            </Box>
          </Box>)}
        <Autocomplete data-testid='effects-autocomplete' options={['Elevation/md popup']} renderInput={params => <TextField {...params} label='Autocomplete popup uses md' />} />
      </Stack>
    </ThemeProvider>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['no-snapshot'],
  render: function Render() {
    const [overlay, setOverlay] = useState<'popover' | 'menu' | 'dialog' | 'snackbar' | null>(null);
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
    return <ThemeProvider theme={tokenTheme}>
        <Stack spacing={3} sx={{
        p: 2
      }}>
          <Typography variant='h2'>Elevation by component role</Typography>
          <Typography>
            Popover, Menu and Select use md; Dialog and SnackbarContent use lg. Escape
            closes each specimen.
          </Typography>
          <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2
        }}>
            {(['popover', 'menu', 'dialog', 'snackbar'] as const).map(role => <Button key={role} onClick={event => {
            setAnchor(event.currentTarget);
            setOverlay(role);
          }}>
                Open {role}
              </Button>)}
          </Box>
          <TextField select label='Role select' defaultValue='one' slotProps={{
          select: {
            MenuProps: {
              slotProps: {
                paper: {
                  className: 'effects-role-select'
                }
              }
            }
          }
        }}>
            <MenuItem value='one'>Select dropdown: md</MenuItem>
            <MenuItem value='two'>Second option</MenuItem>
          </TextField>
          <Popover open={overlay === 'popover'} anchorEl={anchor} onClose={() => setOverlay(null)} slotProps={{
          paper: {
            className: 'effects-role-popover'
          }
        }}>
            <Typography>Popover: md</Typography>
          </Popover>
          <Menu open={overlay === 'menu'} anchorEl={anchor} onClose={() => setOverlay(null)} slotProps={{
          paper: {
            className: 'effects-role-menu'
          }
        }}>
            <MenuItem>Menu: md</MenuItem>
          </Menu>
          <Dialog open={overlay === 'dialog'} onClose={() => setOverlay(null)} slotProps={{
          paper: {
            className: 'effects-role-dialog'
          }
        }}>
            <DialogTitle>Dialog: lg</DialogTitle>
          </Dialog>
          <Snackbar open={overlay === 'snackbar'} message='SnackbarContent: lg' onClose={() => setOverlay(null)} slotProps={{
          content: {
            className: 'effects-role-snackbar'
          }
        }} />
          <Typography>
            Legacy shadows below are references for missing-token fallbacks.
          </Typography>
          <ThemeProvider theme={legacyTheme}>
            {([8, 24, 6] as const).map(level => <Paper key={level} elevation={level} data-testid={\`legacy-shadow-\${level}\`} sx={{
            p: 2
          }}>
                Legacy elevation {level}
              </Paper>)}
          </ThemeProvider>
        </Stack>
      </ThemeProvider>;
  }
}`,...c.parameters?.docs?.source}}};const _e=["Overview","ComponentRoles"];export{c as ComponentRoles,i as Overview,_e as __namedExportsOrder,Ve as default};
//# sourceMappingURL=Effects.stories-BUX6r_LU.js.map
