import{j as e,l as x,m as g,t as h,i as S}from"./iframe-C5f9Zc7Z.js";import{R as n}from"./TextField-DvqNUhPI.js";import{R as f}from"./index-BFL_h1cZ.js";import{F as T}from"./FieldPreviewRow-feMyCMJc.js";import{F as w}from"./FieldView-BKsOS0Ud.js";import{F as j}from"./Fields-BIJAo_7-.js";import{P as k}from"./PreviewTitle-DafhOo6c.js";import{c as F}from"./tokenTheme-BcZLwVpt.js";import{S as s}from"./Stack-n0USQ4NM.js";import{I as t}from"./InputAdornment-BRl14iQW.js";import{T as l}from"./TextField-oNSncVaQ.js";import{A as O}from"./Autocomplete-CnpEowmp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfAdRlSU.js";import"./Box-B61C4jPN.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-Dn-vvyCO.js";import"./index-Bexat51j.js";import"./index-IQQzWx4v.js";import"./getThemeProps-Cw8NFX3f.js";import"./FormControl-CK27828S.js";import"./useFormControl-Cxw3h7Uq.js";import"./isMuiElement-BSR4zhUB.js";import"./memoTheme-aFWhReI0.js";import"./FormLabel-BBfBuyLi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CDg-yryp.js";import"./v4-Dnyct6Ft.js";import"./CircularProgress-DCfJ8UYi.js";import"./utils-BL043Ngk.js";import"./useThemeProps-CaOGKB9m.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./Typography-Cu6X7zgN.js";import"./useSlot-BTezwFP2.js";import"./mergeSlotProps-CZMRNJ0v.js";import"./useReducedMotion-BHCwGahe.js";import"./Select-BusCaZhm.js";import"./useSlotProps-BH4z5ryB.js";import"./Popover-D7KVqWPM.js";import"./mergeSlotProps-CBY2sUhi.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B3_FIueW.js";import"./Transition-EJymIB3U.js";import"./useTheme-DJRvu-BM.js";import"./getReactElementRef-D27myLnX.js";import"./Modal-eG75g-HH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-8Uyjteef.js";import"./index-5H17TRWc.js";import"./index-f9HBXLTa.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-DZSngBJJ.js";import"./Paper-Dn22t17M.js";import"./useRovingTabIndex-C3X7iciN.js";import"./List-B019eLJ7.js";import"./OutlinedInput-C5zfYCDl.js";import"./useControlled-B4Netmu2.js";import"./useTimeout-C0xJNvSp.js";import"./createSvgIcon-DJbAJPfa.js";import"./InputLabel-CYzpi1R6.js";import"./Close-kO8uNmWX.js";import"./Popper-XpW4iyei.js";import"./Chip-05GrKjDf.js";import"./ButtonBase-Dh7CHqXH.js";import"./IconButton-DYL-CqTP.js";const Ee={title:"Atoms/TextField",component:n,tags:["autodocs"]},I=F(),o={tags:["no-snapshot"],render:()=>e.jsx(s,{spacing:3,children:[["legacy",h],["tokens",I]].map(([r,a])=>e.jsxs(S,{theme:a,children:[e.jsx(l,{label:`${r} rest`}),e.jsx(l,{label:`${r} error`,error:!0}),e.jsx(l,{label:`${r} disabled`,disabled:!0}),e.jsx(O,{options:["Pirmas","Antras"],renderInput:b=>e.jsx(l,{...b,label:`${r} autocomplete`})})]},r))})},v=r=>{const{slotProps:a,disabled:b,label:P}=r;return`
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${P}" slotProps=${a.wrapper.labelOnTop?"{{ wrapper: { labelOnTop: true } }}":"{{ wrapper: { labelOnTop: false} }}"} disabled="${b}" />
  );`},i={render:r=>e.jsxs(j,{children:[e.jsx(w,{children:e.jsx(n,{...r})}),e.jsxs(T,{children:[e.jsx(k,{children:"State previews label on side"}),e.jsx(n,{label:"Label"}),e.jsx(n,{errors:{message:"Klaidos pranešimas",type:"required"},label:"Label"}),e.jsx(n,{disabled:!0,label:"Label"})]}),e.jsxs(T,{children:[e.jsx(k,{children:"State previews label on top"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},label:"Label"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},errors:{message:"Klaidos pranešimas",type:"required"},label:"Label"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},disabled:!0,label:"Label"})]})]}),args:{label:"label",disabled:!1,multiline:!0,slotProps:{wrapper:{labelOnTop:!1}}},parameters:{docs:{source:{type:"dynamic",transform:(r,a)=>v(a.args)}}}},p={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Tuščias laukas",slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Užpildytas laukas",slotProps:{wrapper:{labelOnTop:!0},field:{defaultValue:"Įvesta reikšmė"}}}),e.jsx(n,{label:"Išjungtas laukas",disabled:!0,slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Klaida ir error hover",errors:{type:"required",message:"Įveskite reikšmę"},slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Užveskite pelę arba sufokusuokite"}}}),e.jsx(n,{label:"Išjungtas laukas su klaida",disabled:!0,errors:{type:"required",message:"Įveskite reikšmę"},slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Tik skaitymui",slotProps:{wrapper:{labelOnTop:!0},field:{defaultValue:"Tik skaitymui",slotProps:{input:{readOnly:!0}}}}})]})},d={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Paieška",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Ieškoti paslaugų",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:e.jsx(x,{"aria-hidden":!0})})}}}}}),e.jsx(n,{label:"Telefonas",slotProps:{wrapper:{labelOnTop:!0},field:{type:"tel",placeholder:"600 00000",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:"+370"})}}}}}),e.jsx(n,{label:"Suma",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"12,00",slotProps:{input:{endAdornment:e.jsx(t,{position:"end",children:"€"})},htmlInput:{inputMode:"decimal"}}}}}),e.jsx(n,{label:"Leading / trailing",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Tekstas su ikonomis",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:e.jsx(x,{"aria-hidden":!0})}),endAdornment:e.jsx(t,{position:"end",children:e.jsx(g,{"aria-hidden":!0})})}}}}})]})},m={args:{label:"Suteikiamų teisių aprašymas",multiline:!0,slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{rows:4,placeholder:"Pvz., atstovauti VMI, pateikti prašymus ir gauti dokumentus"}}}},u={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Custom input",slotProps:{wrapper:{labelOnTop:!0},field:{slotProps:{input:{sx:{"& .MuiInputBase-input":{fontSize:"20px",padding:"4px 8px"}}}}}}}),e.jsx(n,{label:"Callback input",slotProps:{wrapper:{labelOnTop:!0},field:{slotProps:{input:()=>({sx:[{"& .MuiInputBase-input":{fontSize:"18px"}},r=>({"& .MuiInputBase-input":{fontSize:"24px",padding:r.spacing(1)}})]})}}}})]})},c={render:()=>e.jsx(s,{spacing:3,sx:{maxWidth:600},children:["small","large"].map(r=>e.jsx("div",{role:"group","aria-label":`Loading ${r}`,children:e.jsx(n,{label:`Kraunama (${r})`,slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Ieškoma…",slotProps:{htmlInput:{"aria-busy":!0},input:{endAdornment:e.jsx(t,{position:"end",children:e.jsx(f,{size:r})})}}}}})},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  tags: ['no-snapshot'],\n  render: () => <Stack spacing={3}>\n      {([['legacy', theme], ['tokens', tokenTheme]] as const).map(([name, activeTheme]) => <ThemeProvider key={name} theme={activeTheme}>\n          <TextField label={`${name} rest`} />\n          <TextField label={`${name} error`} error />\n          <TextField label={`${name} disabled`} disabled />\n          <Autocomplete options={['Pirmas', 'Antras']} renderInput={params => <TextField {...params} label={`${name} autocomplete`} />} />\n        </ThemeProvider>)}\n    </Stack>\n}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Fields>
      <FieldView>
        <RcSesTextField {...args} />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on side</PreviewTitle>
        <RcSesTextField label='Label' />
        <RcSesTextField errors={{
        message: 'Klaidos pranešimas',
        type: 'required'
      }} label='Label' />
        <RcSesTextField disabled label='Label' />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on top</PreviewTitle>
        <RcSesTextField slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} label='Label' />
        <RcSesTextField slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} errors={{
        message: 'Klaidos pranešimas',
        type: 'required'
      }} label='Label' />
        <RcSesTextField slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} disabled label='Label' />
      </FieldPreviewRow>
    </Fields>,
  args: {
    label: 'label',
    disabled: false,
    multiline: true,
    slotProps: {
      wrapper: {
        labelOnTop: false
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, storyContext: StoryContext) => codeBlock(storyContext.args)
      }
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    maxWidth: 600
  }}>
      <RcSesTextField label='Tuščias laukas' slotProps={{
      wrapper: {
        labelOnTop: true,
        description: 'Pagalbinis tekstas'
      },
      field: {
        placeholder: 'Tekstas'
      }
    }} />
      <RcSesTextField label='Užpildytas laukas' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        defaultValue: 'Įvesta reikšmė'
      }
    }} />
      <RcSesTextField label='Išjungtas laukas' disabled slotProps={{
      wrapper: {
        labelOnTop: true,
        description: 'Pagalbinis tekstas'
      },
      field: {
        placeholder: 'Tekstas'
      }
    }} />
      <RcSesTextField label='Klaida ir error hover' errors={{
      type: 'required',
      message: 'Įveskite reikšmę'
    }} slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        placeholder: 'Užveskite pelę arba sufokusuokite'
      }
    }} />
      <RcSesTextField label='Išjungtas laukas su klaida' disabled errors={{
      type: 'required',
      message: 'Įveskite reikšmę'
    }} slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        placeholder: 'Tekstas'
      }
    }} />
      <RcSesTextField label='Tik skaitymui' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        defaultValue: 'Tik skaitymui',
        slotProps: {
          input: {
            readOnly: true
          }
        }
      }
    }} />
    </Stack>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    maxWidth: 600
  }}>
      <RcSesTextField label='Paieška' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        placeholder: 'Ieškoti paslaugų',
        slotProps: {
          input: {
            startAdornment: <InputAdornment position='start'>
                    <MagnifyingGlass aria-hidden />
                  </InputAdornment>
          }
        }
      }
    }} />
      <RcSesTextField label='Telefonas' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        type: 'tel',
        placeholder: '600 00000',
        slotProps: {
          input: {
            startAdornment: <InputAdornment position='start'>+370</InputAdornment>
          }
        }
      }
    }} />
      <RcSesTextField label='Suma' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        placeholder: '12,00',
        slotProps: {
          input: {
            endAdornment: <InputAdornment position='end'>€</InputAdornment>
          },
          htmlInput: {
            inputMode: 'decimal'
          }
        }
      }
    }} />
      <RcSesTextField label='Leading / trailing' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        placeholder: 'Tekstas su ikonomis',
        slotProps: {
          input: {
            startAdornment: <InputAdornment position='start'>
                    <MagnifyingGlass aria-hidden />
                  </InputAdornment>,
            endAdornment: <InputAdornment position='end'>
                    <Info aria-hidden />
                  </InputAdornment>
          }
        }
      }
    }} />
    </Stack>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Suteikiamų teisių aprašymas',
    multiline: true,
    slotProps: {
      wrapper: {
        labelOnTop: true,
        description: 'Pagalbinis tekstas'
      },
      field: {
        rows: 4,
        placeholder: 'Pvz., atstovauti VMI, pateikti prašymus ir gauti dokumentus'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    maxWidth: 600
  }}>
      <RcSesTextField label='Custom input' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        slotProps: {
          input: {
            sx: {
              '& .MuiInputBase-input': {
                fontSize: '20px',
                padding: '4px 8px'
              }
            }
          }
        }
      }
    }} />
      <RcSesTextField label='Callback input' slotProps={{
      wrapper: {
        labelOnTop: true
      },
      field: {
        slotProps: {
          input: () => ({
            sx: [{
              '& .MuiInputBase-input': {
                fontSize: '18px'
              }
            }, activeTheme => ({
              '& .MuiInputBase-input': {
                fontSize: '24px',
                padding: activeTheme.spacing(1)
              }
            })]
          })
        }
      }
    }} />
    </Stack>
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    maxWidth: 600
  }}>
      {(['small', 'large'] as const).map(size => <div key={size} role='group' aria-label={\`Loading \${size}\`}>
          <RcSesTextField label={\`Kraunama (\${size})\`} slotProps={{
        wrapper: {
          labelOnTop: true
        },
        field: {
          placeholder: 'Ieškoma…',
          slotProps: {
            htmlInput: {
              'aria-busy': true
            },
            input: {
              endAdornment: <InputAdornment position='end'>
                        <RcSesLoadingSpinner size={size} />
                      </InputAdornment>
            }
          }
        }
      }} />
        </div>)}
    </Stack>
}`,...c.parameters?.docs?.source}}};const Ge=["SharedInputStates","Main","TokenStates","Adornments","Multiline","InputStyleOverrides","Loading"];export{d as Adornments,u as InputStyleOverrides,c as Loading,i as Main,m as Multiline,o as SharedInputStates,p as TokenStates,Ge as __namedExportsOrder,Ee as default};
//# sourceMappingURL=TextField.stories-w13w3BHe.js.map
