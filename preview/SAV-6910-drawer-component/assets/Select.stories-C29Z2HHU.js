import{j as e}from"./iframe-DB1EF-x_.js";import{u as S}from"./index.esm-DZGgkpfy.js";import{R as P}from"./PhoneInput-NE21-ZzP.js";import{R as t}from"./index-Bqg3A8wA.js";import{F as b}from"./FieldPreviewRow-CRxybQZF.js";import{F as v}from"./FieldView-ChkY4y2M.js";import{F as x}from"./Fields-h8yMjxsY.js";import{P as g}from"./PreviewTitle-XcMstgTY.js";import{B as d}from"./Box-D4Jm7AAj.js";import{T as k}from"./Typography-DUTz8Atk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxIkyzSt.js";import"./useTranslation-DSJywBrb.js";import"./index-DWsPbBEP.js";import"./index-CjKLscX-.js";import"./getThemeProps-__gKXzXy.js";import"./FormControl-C5Hy8blQ.js";import"./useFormControl-CWEpkjEg.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./isMuiElement-BJmv-8vH.js";import"./memoTheme-VhH0Ke8H.js";import"./FormLabel-C3rn3CZT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormHelperText-YVXxzo4-.js";import"./index-BuTfNiXz.js";import"./TextField-B3_cDruX.js";import"./useSlot-CdVtEC6U.js";import"./mergeSlotProps-D1VQHPIF.js";import"./useReducedMotion-C4RkVMNI.js";import"./Select-yXGDQHDB.js";import"./useSlotProps-7xO63P3d.js";import"./Popover-BXp0xn43.js";import"./mergeSlotProps-DYFVJgHy.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BKz0f3qP.js";import"./Transition-jXxGhKeR.js";import"./utils-BL043Ngk.js";import"./getReactElementRef-DCy1rOni.js";import"./Modal-ChBBJl8b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BOvFD5eV.js";import"./index-BmS_ntgN.js";import"./index-CH-QCW2k.js";import"./setRef-CQn2LYBI.js";import"./getActiveElement-BQgAPKnO.js";import"./contains-DSD8CO72.js";import"./Backdrop-D7k8my25.js";import"./Fade-BfRDaHk2.js";import"./Paper-C5KcvUpZ.js";import"./useRovingTabIndex-BJ8EBiC5.js";import"./List-CLyni-vL.js";import"./useControlled-D8_om1HX.js";import"./useTimeout-Bp9Z3NaC.js";import"./createSvgIcon-D74Ga_RM.js";import"./OutlinedInput-DEyC0sHh.js";import"./inputLabelClasses-CWr5hV2f.js";import"./InputLabel-N7yAWwku.js";import"./InputAdornment-DMcdWRGp.js";import"./Stack-BkWRlZW_.js";import"./useThemeProps-KgNX7ntt.js";import"./Autocomplete-OGXAua1o.js";import"./Close-CWgsGJwZ.js";import"./Popper-CXIyauks.js";import"./Chip-C2EA5kVt.js";import"./ButtonBase-Bt3PjvxV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BL8T53Uu.js";import"./CircularProgress-CBcVl4sl.js";import"./Button-BuIKW3by.js";import"./Divider-CBHcemWs.js";import"./dividerClasses-BusXqZ0M.js";import"./ClickAwayListener-C-JAgq0k.js";import"./v4-Dnyct6Ft.js";import"./index-BUkIK3h-.js";const Ue={title:"Atoms/Select",component:t,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}},onInputChange:{table:{disable:!0}},control:{table:{disable:!0}},errors:{table:{disable:!0}},options:{table:{disable:!0}},name:{table:{disable:!0}},rules:{table:{disable:!0}},id:{table:{disable:!0}},loading:{table:{disable:!0}}},tags:["autodocs"]};function y(i){const{control:r,formState:{errors:o}}=S({mode:"all",defaultValues:{selection:""}}),{label:u,disabled:c,placeholder:n,slotProps:h}=i;return e.jsxs(x,{children:[e.jsx(v,{children:e.jsx(t,{id:"selection",name:"selection",control:r,label:u,disabled:c,placeholder:n,slotProps:h,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})}),e.jsxs(b,{children:[e.jsx(g,{children:"State previews label on side"}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Active",placeholder:n,errors:o?.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Disabled",disabled:!0,placeholder:n,errors:o?.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Error",placeholder:n,errors:{message:"Error Message",type:"required"},options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})]}),e.jsxs(b,{children:[e.jsx(g,{children:"State previews label on top"}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Active",slotProps:{wrapper:{labelOnTop:!0}},placeholder:n,errors:o?.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Disabled",disabled:!0,slotProps:{wrapper:{labelOnTop:!0}},placeholder:n,errors:o?.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),e.jsx(t,{id:"selection",name:"selection",control:r,rules:{required:!0},label:"Error",slotProps:{wrapper:{labelOnTop:!0}},placeholder:n,errors:{message:"Error",type:"required"},options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})]})]})}const j=i=>{const{label:r,disabled:o,placeholder:u,slotProps:c}=i;return`
  import RcSesSelect from '@/components/form/inputs/Select'


  const MyComponent = () => (

  const { control, formState: { errors } } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { selection: '', } })

    <RcSesSelect
      id="selection"
      name="selection"
      control={control}
      rules={{ required: true }}
      label="${r}"
      disabled={${o}}
      placeholder="${u??""}"
      errors={errors?.selection}
      slotProps=${c.wrapper.labelOnTop?"{{ wrapper: { labelOnTop: true } }}":"{{ wrapper: { labelOnTop: false} }}"}
      options={[
        { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
        { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
      ]}

    />
  );`},s={render:i=>e.jsx(y,{...i}),args:{label:"Label",disabled:!1,slotProps:{wrapper:{labelOnTop:!1}}},parameters:{docs:{source:{type:"dynamic",transform:(i,r)=>j(r.args)}}}},l=[{value:"option-1",label:"1st option"},{value:"option-2",label:"2st option"},{value:"option-3",label:"3rd option"},{value:"option-4",label:"4th option"},{value:"option-5",label:"5th option"},{value:"long-option-1",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{value:"long-option-2",label:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}],p=[{value:"group-1-option-1",label:"1st option",group:"Group 1"},{value:"group-1-option-2",label:"2st option",group:"Group 1"},{value:"group-1-option-3",label:"3rd option",group:"Group 1"},{value:"group-2-option-4",label:"4th option",group:"Group 2"},{value:"group-2-option-5",label:"5th option",group:"Group 2"}],f=[{value:"option-1",label:"1st option",description:"Lorem ipsum is simply dummy text of the printing and typesetting industry."},{value:"option-2",label:"2st option",description:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard."},{value:"option-3",label:"3rd option",description:"Lorem ipsum is simply dummy text has been the industry standard."},{value:"option-4",label:"4th option",description:"Lorem ipsum has been the industry standard."}],a=({title:i,description:r,children:o})=>e.jsxs(d,{children:[e.jsx(k,{sx:{fontWeight:700,fontSize:"1rem",mb:".25rem"},children:i}),e.jsx(k,{sx:{color:"#667085",fontSize:".75rem",mb:"1rem",minHeight:"2rem"},children:r}),o]}),m={render:()=>{const{control:i}=S({mode:"all",defaultValues:{singleSelect:null,groupedSelect:null,groupedMultiSelect:["group-2-option-4","group-2-option-5"],singleSearchSelect:null,descriptionSelect:"option-3",multiSelect:["option-1","option-3"],limitedMultiSelect:["option-1","option-2","option-3"],multiSearchSelect:["option-1","option-3","option-4","option-5"],phoneInput:""}});return e.jsx(d,{sx:{p:"1rem 0"},children:e.jsxs(d,{sx:{display:"grid",gap:"2rem",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, minmax(0, 1fr))",xl:"repeat(4, minmax(0, 1fr))"}},children:[e.jsx(a,{title:"Basic",description:"Bazinis variantas skirtas iprastiems atvejams.",children:e.jsx(t,{id:"single-select",name:"singleSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},options:l})}),e.jsx(a,{title:"Wide + descriptions",description:"Didesnis variantas su aprasymais kiekvienai opcijai.",children:e.jsx(t,{id:"description-select",name:"descriptionSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},options:f})}),e.jsx(a,{title:"Grouped",description:"Sugrupuotos parinktys pagal kategorijas.",children:e.jsx(t,{id:"grouped-select",name:"groupedSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0},field:{groupBy:r=>p.find(o=>o.value===r.value)?.group??""}},options:p})}),e.jsx(a,{title:"Grouped multi select + search",description:"Grupė yra pati savarankiškai pažymima reikšmė - pažymėjus grupę pažymimi visi jos nariai, nužymėjus bet kurį narį grupė automatiškai nužymima.",children:e.jsx(t,{id:"grouped-multi-select",name:"groupedMultiSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0},field:{groupBy:r=>p.find(o=>o.value===r.value)?.group??""}},multiple:!0,dropdownSearch:!0,selectAll:!0,dropdownSearchPlaceholder:"Ieškoti",options:p})}),e.jsx(a,{title:"Basic + search",description:"Bazinis variantas su paieska.",children:e.jsx(t,{id:"single-search-select",name:"singleSearchSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},dropdownSearch:!0,dropdownSearchPlaceholder:"Ieškoti",options:l})}),e.jsx(a,{title:"Multi select",description:"Variantas kai galima pasirinkti kelias reiksmes.",children:e.jsx(t,{id:"multi-select",name:"multiSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},multiple:!0,options:l})}),e.jsx(a,{title:"Multi select + limit tags",description:"Daugybinis pasirinkimas su limitTags={1}, kai pertekliniai pasirinkimai sutraukiami i +N.",children:e.jsx(t,{id:"limited-multi-select",name:"limitedMultiSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},multiple:!0,limitTags:1,options:l})}),e.jsx(a,{title:"Multi select + search",description:"Daugybinis pasirinkimas su paieska ir select all.",children:e.jsx(t,{id:"multi-search-select",name:"multiSearchSelect",control:i,label:"Pasirinkti",slotProps:{wrapper:{labelOnTop:!0}},multiple:!0,dropdownSearch:!0,selectAll:!0,dropdownSearchPlaceholder:"Ieškoti",options:l})}),e.jsx(a,{title:"Phone input",description:"Telefono numerio įvesties laukas su šalies kodo pasirinkimu.",children:e.jsx(P,{id:"phone-input",name:"phoneInput",control:i,label:"Phone number",slotProps:{wrapper:{labelOnTop:!0}}})})]})})},parameters:{controls:{disable:!0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <SelectDemo {...args} />,
  args: {
    label: 'Label',
    disabled: false,
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<VariantsFormModel>({
      mode: 'all',
      defaultValues: {
        singleSelect: null,
        groupedSelect: null,
        groupedMultiSelect: ['group-2-option-4', 'group-2-option-5'],
        singleSearchSelect: null,
        descriptionSelect: 'option-3',
        multiSelect: ['option-1', 'option-3'],
        limitedMultiSelect: ['option-1', 'option-2', 'option-3'],
        multiSearchSelect: ['option-1', 'option-3', 'option-4', 'option-5'],
        phoneInput: ''
      }
    });
    return <Box sx={{
      p: '1rem 0'
    }}>
        <Box sx={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          xl: 'repeat(4, minmax(0, 1fr))'
        }
      }}>
          <VariantCard title='Basic' description='Bazinis variantas skirtas iprastiems atvejams.'>
            <RcSesSelect id='single-select' name='singleSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} options={variantOptions} />
          </VariantCard>

          <VariantCard title='Wide + descriptions' description='Didesnis variantas su aprasymais kiekvienai opcijai.'>
            <RcSesSelect id='description-select' name='descriptionSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} options={optionsWithDescriptions} />
          </VariantCard>

          <VariantCard title='Grouped' description='Sugrupuotos parinktys pagal kategorijas.'>
            <RcSesSelect id='grouped-select' name='groupedSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            },
            field: {
              groupBy: option => groupedVariantOptions.find(groupedOption => groupedOption.value === option.value)?.group ?? ''
            }
          }} options={groupedVariantOptions} />
          </VariantCard>

          <VariantCard title='Grouped multi select + search' description='Grupė yra pati savarankiškai pažymima reikšmė - pažymėjus grupę pažymimi visi jos nariai, nužymėjus bet kurį narį grupė automatiškai nužymima.'>
            <RcSesSelect id='grouped-multi-select' name='groupedMultiSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            },
            field: {
              groupBy: option => groupedVariantOptions.find(groupedOption => groupedOption.value === option.value)?.group ?? ''
            }
          }} multiple dropdownSearch selectAll dropdownSearchPlaceholder='Ieškoti' options={groupedVariantOptions} />
          </VariantCard>

          <VariantCard title='Basic + search' description='Bazinis variantas su paieska.'>
            <RcSesSelect id='single-search-select' name='singleSearchSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} dropdownSearch dropdownSearchPlaceholder='Ieškoti' options={variantOptions} />
          </VariantCard>

          <VariantCard title='Multi select' description='Variantas kai galima pasirinkti kelias reiksmes.'>
            <RcSesSelect id='multi-select' name='multiSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} multiple options={variantOptions} />
          </VariantCard>

          <VariantCard title='Multi select + limit tags' description='Daugybinis pasirinkimas su limitTags={1}, kai pertekliniai pasirinkimai sutraukiami i +N.'>
            <RcSesSelect id='limited-multi-select' name='limitedMultiSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} multiple limitTags={1} options={variantOptions} />
          </VariantCard>

          <VariantCard title='Multi select + search' description='Daugybinis pasirinkimas su paieska ir select all.'>
            <RcSesSelect id='multi-search-select' name='multiSearchSelect' control={control} label='Pasirinkti' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} multiple dropdownSearch selectAll dropdownSearchPlaceholder='Ieškoti' options={variantOptions} />
          </VariantCard>

          <VariantCard title='Phone input' description='Telefono numerio įvesties laukas su šalies kodo pasirinkimu.'>
            <RcSesPhoneInput id='phone-input' name='phoneInput' control={control} label='Phone number' slotProps={{
            wrapper: {
              labelOnTop: true
            }
          }} />
          </VariantCard>
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...m.parameters?.docs?.source}}};const Je=["Main","AllVariants"];export{m as AllVariants,s as Main,Je as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Select.stories-C29Z2HHU.js.map
