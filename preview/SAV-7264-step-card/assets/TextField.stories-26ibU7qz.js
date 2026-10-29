import{j as e,h as x,i as h,t as g,k as S}from"./iframe-CWj8oZOZ.js";import{R as n}from"./TextField-BpkuMfQO.js";import{R as f}from"./index-D7JPb8lP.js";import{F as T}from"./FieldPreviewRow-BosOxs8S.js";import{F as w}from"./FieldView-DJ2yHtHS.js";import{F as j}from"./Fields-Ce0kRwl5.js";import{P as k}from"./PreviewTitle-Dh-ZF7DV.js";import{c as F}from"./tokenTheme-qVsiXXng.js";import{S as s}from"./Stack-CkZqBFdB.js";import{I as t}from"./InputAdornment-BU9WuHof.js";import{T as l}from"./TextField-DWaN9C8V.js";import{A as O}from"./Autocomplete-BSqe6cLe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXKHBdS.js";import"./Box-DrHRxVUy.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./useTranslation-CoaK2LVL.js";import"./index-Ban65MQl.js";import"./index-DK_AopQY.js";import"./getThemeProps-CVYSyeY6.js";import"./FormControl-CqI-8RUQ.js";import"./useFormControl-DFU56Ddn.js";import"./isMuiElement-Dhmu_ULU.js";import"./memoTheme-rzYRwBep.js";import"./FormLabel-BDZA67Vl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-CtYyHc3P.js";import"./v4-Dnyct6Ft.js";import"./CircularProgress-o7WJEzHT.js";import"./utils-BL043Ngk.js";import"./useThemeProps-HF0yvPmk.js";import"./inputAdornmentClasses-BS08dJ3O.js";import"./Typography-p54XM_E9.js";import"./useSlot-CB-gizTQ.js";import"./mergeSlotProps-Bkc5NF6i.js";import"./useReducedMotion-CPcVPcQI.js";import"./Select-BWXnTc4L.js";import"./useSlotProps-BEid7iq9.js";import"./Popover-D2neVCI1.js";import"./mergeSlotProps-B3s8xX8O.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-25DxD-fu.js";import"./Transition-6wjDhKPT.js";import"./getReactElementRef-YHCFHVm5.js";import"./Modal-CLuF_jcr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BcPZnrEN.js";import"./index-DQ13ji2A.js";import"./index-BnqEAZ8e.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Fade-Bsi1esff.js";import"./Paper-BqPJ_771.js";import"./useRovingTabIndex-w3Nact0Q.js";import"./List-D-TBVhcB.js";import"./OutlinedInput-K6qwtIwS.js";import"./useControlled-CBD9UJuw.js";import"./useTimeout-BiQanTB9.js";import"./createSvgIcon-Bv-KOEm-.js";import"./InputLabel-B3mHetsL.js";import"./Close-B5CWgjyd.js";import"./Popper-CAppPN4C.js";import"./Chip-D8rv1PjY.js";import"./ButtonBase-DNQcAHDH.js";import"./IconButton-CE1wGVKF.js";const _e={title:"Atoms/TextField",component:n,tags:["autodocs"]},I=F(),o={tags:["no-snapshot"],render:()=>e.jsx(s,{spacing:3,children:[["legacy",g],["tokens",I]].map(([r,a])=>e.jsxs(S,{theme:a,children:[e.jsx(l,{label:`${r} rest`}),e.jsx(l,{label:`${r} error`,error:!0}),e.jsx(l,{label:`${r} disabled`,disabled:!0}),e.jsx(O,{options:["Pirmas","Antras"],renderInput:b=>e.jsx(l,{...b,label:`${r} autocomplete`})})]},r))})},v=r=>{const{slotProps:a,disabled:b,label:P}=r;return`
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${P}" slotProps=${a.wrapper.labelOnTop?"{{ wrapper: { labelOnTop: true } }}":"{{ wrapper: { labelOnTop: false} }}"} disabled="${b}" />
  );`},i={render:r=>e.jsxs(j,{children:[e.jsx(w,{children:e.jsx(n,{...r})}),e.jsxs(T,{children:[e.jsx(k,{children:"State previews label on side"}),e.jsx(n,{label:"Label"}),e.jsx(n,{errors:{message:"Klaidos pranešimas",type:"required"},label:"Label"}),e.jsx(n,{disabled:!0,label:"Label"})]}),e.jsxs(T,{children:[e.jsx(k,{children:"State previews label on top"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},label:"Label"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},errors:{message:"Klaidos pranešimas",type:"required"},label:"Label"}),e.jsx(n,{slotProps:{wrapper:{labelOnTop:!0}},disabled:!0,label:"Label"})]})]}),args:{label:"label",disabled:!1,multiline:!0,slotProps:{wrapper:{labelOnTop:!1}}},parameters:{docs:{source:{type:"dynamic",transform:(r,a)=>v(a.args)}}}},p={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Tuščias laukas",slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Užpildytas laukas",slotProps:{wrapper:{labelOnTop:!0},field:{defaultValue:"Įvesta reikšmė"}}}),e.jsx(n,{label:"Išjungtas laukas",disabled:!0,slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Klaida ir error hover",errors:{type:"required",message:"Įveskite reikšmę"},slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Užveskite pelę arba sufokusuokite"}}}),e.jsx(n,{label:"Išjungtas laukas su klaida",disabled:!0,errors:{type:"required",message:"Įveskite reikšmę"},slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Tekstas"}}}),e.jsx(n,{label:"Tik skaitymui",slotProps:{wrapper:{labelOnTop:!0},field:{defaultValue:"Tik skaitymui",slotProps:{input:{readOnly:!0}}}}})]})},d={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Paieška",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Ieškoti paslaugų",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:e.jsx(x,{"aria-hidden":!0})})}}}}}),e.jsx(n,{label:"Telefonas",slotProps:{wrapper:{labelOnTop:!0},field:{type:"tel",placeholder:"600 00000",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:"+370"})}}}}}),e.jsx(n,{label:"Suma",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"12,00",slotProps:{input:{endAdornment:e.jsx(t,{position:"end",children:"€"})},htmlInput:{inputMode:"decimal"}}}}}),e.jsx(n,{label:"Leading / trailing",slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Tekstas su ikonomis",slotProps:{input:{startAdornment:e.jsx(t,{position:"start",children:e.jsx(x,{"aria-hidden":!0})}),endAdornment:e.jsx(t,{position:"end",children:e.jsx(h,{"aria-hidden":!0})})}}}}})]})},m={args:{label:"Suteikiamų teisių aprašymas",multiline:!0,slotProps:{wrapper:{labelOnTop:!0,description:"Pagalbinis tekstas"},field:{rows:4,placeholder:"Pvz., atstovauti VMI, pateikti prašymus ir gauti dokumentus"}}}},u={render:()=>e.jsxs(s,{spacing:3,sx:{maxWidth:600},children:[e.jsx(n,{label:"Custom input",slotProps:{wrapper:{labelOnTop:!0},field:{slotProps:{input:{sx:{"& .MuiInputBase-input":{fontSize:"20px",padding:"4px 8px"}}}}}}}),e.jsx(n,{label:"Callback input",slotProps:{wrapper:{labelOnTop:!0},field:{slotProps:{input:()=>({sx:[{"& .MuiInputBase-input":{fontSize:"18px"}},r=>({"& .MuiInputBase-input":{fontSize:"24px",padding:r.spacing(1)}})]})}}}})]})},c={render:()=>e.jsx(s,{spacing:3,sx:{maxWidth:600},children:["small","large"].map(r=>e.jsx("div",{role:"group","aria-label":`Loading ${r}`,children:e.jsx(n,{label:`Kraunama (${r})`,slotProps:{wrapper:{labelOnTop:!0},field:{placeholder:"Ieškoma…",slotProps:{htmlInput:{"aria-busy":!0},input:{endAdornment:e.jsx(t,{position:"end",children:e.jsx(f,{size:r})})}}}}})},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  tags: ['no-snapshot'],\n  render: () => <Stack spacing={3}>\n      {([['legacy', theme], ['tokens', tokenTheme]] as const).map(([name, activeTheme]) => <ThemeProvider key={name} theme={activeTheme}>\n          <TextField label={`${name} rest`} />\n          <TextField label={`${name} error`} error />\n          <TextField label={`${name} disabled`} disabled />\n          <Autocomplete options={['Pirmas', 'Antras']} renderInput={params => <TextField {...params} label={`${name} autocomplete`} />} />\n        </ThemeProvider>)}\n    </Stack>\n}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ee=["SharedInputStates","Main","TokenStates","Adornments","Multiline","InputStyleOverrides","Loading"];export{d as Adornments,u as InputStyleOverrides,c as Loading,i as Main,m as Multiline,o as SharedInputStates,p as TokenStates,Ee as __namedExportsOrder,_e as default};
//# sourceMappingURL=TextField.stories-26ibU7qz.js.map
