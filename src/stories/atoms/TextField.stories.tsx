import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { Info, MagnifyingGlass } from '@phosphor-icons/react'
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EnvelopeSimpleIcon } from '@/assets/icons/phosphorIcons'
import RcSesTextField from '@/components/form/inputs/TextField'
import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import theme from '@/theme/light'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'

const meta: Meta<typeof RcSesTextField> = {
  title: 'Atoms/TextField',
  component: RcSesTextField,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesTextField>

const tokenTheme = createRcSesTokenTheme()

// Raw MUI inputs prove the shared styles do not depend on RcSesTextField sx.
export const SharedInputStates: Story = {
  tags: ['no-snapshot'],
  render: () => (
    <Stack spacing={3}>
      {(
        [
          ['legacy', theme],
          ['tokens', tokenTheme],
        ] as const
      ).map(([name, activeTheme]) => (
        <ThemeProvider key={name} theme={activeTheme}>
          <TextField label={`${name} rest`} />
          <TextField label={`${name} error`} error />
          <TextField label={`${name} disabled`} disabled />
          <Autocomplete
            options={['Pirmas', 'Antras']}
            renderInput={(params) => (
              <TextField {...params} label={`${name} autocomplete`} />
            )}
          />
        </ThemeProvider>
      ))}
    </Stack>
  ),
}

const codeBlock = (args: any) => {
  const { slotProps, disabled, label } = args
  return `
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${label}" slotProps=${slotProps.wrapper.labelOnTop ? '{{ wrapper: { labelOnTop: true } }}' : '{{ wrapper: { labelOnTop: false} }}'} disabled="${disabled}" />
  );`
}

export const Main: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesTextField {...args} />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on side</PreviewTitle>
        <RcSesTextField label='Label' />
        <RcSesTextField
          errors={{ message: 'Klaidos pranešimas', type: 'required' }}
          label='Label'
        />
        <RcSesTextField disabled label='Label' />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on top</PreviewTitle>
        <RcSesTextField slotProps={{ wrapper: { labelOnTop: true } }} label='Label' />
        <RcSesTextField
          slotProps={{ wrapper: { labelOnTop: true } }}
          errors={{ message: 'Klaidos pranešimas', type: 'required' }}
          label='Label'
        />
        <RcSesTextField
          slotProps={{ wrapper: { labelOnTop: true } }}
          disabled
          label='Label'
        />
      </FieldPreviewRow>
    </Fields>
  ),
  args: {
    label: 'label',
    disabled: false,
    multiline: true,
    slotProps: { wrapper: { labelOnTop: false } },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, storyContext: StoryContext) =>
          codeBlock(storyContext.args),
      },
    },
  },
}

export const TokenStates: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 600 }}>
      <RcSesTextField
        label='Tuščias laukas'
        slotProps={{
          wrapper: { labelOnTop: true, description: 'Pagalbinis tekstas' },
          field: { placeholder: 'Tekstas' },
        }}
      />
      <RcSesTextField
        label='Užpildytas laukas'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: { defaultValue: 'Įvesta reikšmė' },
        }}
      />
      <RcSesTextField
        label='Išjungtas laukas'
        disabled
        slotProps={{
          wrapper: { labelOnTop: true, description: 'Pagalbinis tekstas' },
          field: { placeholder: 'Tekstas' },
        }}
      />
      <RcSesTextField
        label='Klaida ir error hover'
        errors={{ type: 'required', message: 'Įveskite reikšmę' }}
        slotProps={{
          wrapper: { labelOnTop: true },
          field: { placeholder: 'Užveskite pelę arba sufokusuokite' },
        }}
      />
      <RcSesTextField
        label='Išjungtas laukas su klaida'
        disabled
        errors={{ type: 'required', message: 'Įveskite reikšmę' }}
        slotProps={{ wrapper: { labelOnTop: true }, field: { placeholder: 'Tekstas' } }}
      />
      <RcSesTextField
        label='Tik skaitymui'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            defaultValue: 'Tik skaitymui',
            slotProps: { input: { readOnly: true } },
          },
        }}
      />
    </Stack>
  ),
}

export const Adornments: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 600 }}>
      <RcSesTextField
        label='Paieška'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            placeholder: 'Ieškoti paslaugų',
            slotProps: {
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <MagnifyingGlass aria-hidden />
                  </InputAdornment>
                ),
              },
            },
          },
        }}
      />
      <RcSesTextField
        label='Telefonas'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            type: 'tel',
            placeholder: '600 00000',
            slotProps: {
              input: {
                startAdornment: <InputAdornment position='start'>+370</InputAdornment>,
              },
            },
          },
        }}
      />
      <RcSesTextField
        label='Suma'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            placeholder: '12,00',
            slotProps: {
              input: { endAdornment: <InputAdornment position='end'>€</InputAdornment> },
              htmlInput: { inputMode: 'decimal' },
            },
          },
        }}
      />
      <RcSesTextField
        label='Leading / trailing'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            placeholder: 'Tekstas su ikonomis',
            slotProps: {
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <MagnifyingGlass aria-hidden />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Info aria-hidden />
                  </InputAdornment>
                ),
              },
            },
          },
        }}
      />
    </Stack>
  ),
}

export const Multiline: Story = {
  args: {
    label: 'Suteikiamų teisių aprašymas',
    multiline: true,
    slotProps: {
      wrapper: { labelOnTop: true, description: 'Pagalbinis tekstas' },
      field: {
        rows: 4,
        placeholder: 'Pvz., atstovauti VMI, pateikti prašymus ir gauti dokumentus',
      },
    },
  },
}

export const InputStyleOverrides: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 600 }}>
      <RcSesTextField
        label='Custom input'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            slotProps: {
              input: {
                sx: { '& .MuiInputBase-input': { fontSize: '20px', padding: '4px 8px' } },
              },
            },
          },
        }}
      />
      <RcSesTextField
        label='Callback input'
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            slotProps: {
              input: () => ({
                sx: [
                  { '& .MuiInputBase-input': { fontSize: '18px' } },
                  (activeTheme) => ({
                    '& .MuiInputBase-input': {
                      fontSize: '24px',
                      padding: activeTheme.spacing(1),
                    },
                  }),
                ],
              }),
            },
          },
        }}
      />
    </Stack>
  ),
}

export const Loading: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 600 }}>
      {(['small', 'large'] as const).map((size) => (
        <div key={size} role='group' aria-label={`Loading ${size}`}>
          <RcSesTextField
            label={`Kraunama (${size})`}
            slotProps={{
              wrapper: { labelOnTop: true },
              field: {
                placeholder: 'Ieškoma…',
                slotProps: {
                  htmlInput: { 'aria-busy': true },
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <RcSesLoadingSpinner size={size} />
                      </InputAdornment>
                    ),
                  },
                },
              },
            }}
          />
        </div>
      ))}
    </Stack>
  ),
}

const inputArgs: Story['args'] = {
  label: 'Antraštė',
  required: true,
  placeholder: 'Tekstas',
  helperText: 'Pagalbinis tekstas',
  explainer: 'Papildomas lauko paaiškinimas.',
}
const inputDecorators: Story['decorators'] = [
  (InputStory) => (
    <Box sx={{ width: 360, maxWidth: '100%' }}>
      <InputStory />
    </Box>
  ),
]

export const Input: Story = { args: inputArgs, decorators: inputDecorators }
export const Error: Story = {
  args: { ...inputArgs, errorText: 'Įveskite reikšmę' },
  decorators: inputDecorators,
}
export const ReadOnly: Story = {
  args: { ...inputArgs, readOnly: true, defaultValue: 'Galima pažymėti ir kopijuoti' },
  decorators: inputDecorators,
}
export const Disabled: Story = {
  args: { ...inputArgs, disabled: true, defaultValue: 'Tekstas' },
  decorators: inputDecorators,
}
export const Optional: Story = {
  args: { ...inputArgs, required: false },
  decorators: inputDecorators,
}
export const LoadingState: Story = {
  args: { ...inputArgs, loading: true },
  decorators: inputDecorators,
}
export const Password: Story = {
  args: {
    ...inputArgs,
    preset: 'password',
    label: 'Slaptažodis',
    defaultValue: 'Slaptas123!',
  },
  decorators: inputDecorators,
}
export const Phone: Story = {
  args: { ...inputArgs, preset: 'phone', label: 'Telefonas', defaultValue: '600 00000' },
  decorators: inputDecorators,
}
export const Number: Story = {
  args: {
    ...inputArgs,
    preset: 'number',
    label: 'Suma',
    suffix: '€',
    defaultValue: '12,00',
  },
  decorators: inputDecorators,
}
export const Search: Story = {
  args: { ...inputArgs, preset: 'search', label: 'Paieška', defaultValue: 'Registrai' },
  decorators: inputDecorators,
}
export const Presets: Story = {
  decorators: inputDecorators,
  render: () => (
    <Stack spacing={3}>
      <RcSesTextField
        label='Vardas, pavardė'
        required
        defaultValue='Jonas Jonaitis'
        helperText='Kaip nurodyta dokumentuose'
      />
      <RcSesTextField
        preset='search'
        required
        placeholder='Ieškoti paslaugų'
        slotProps={{ htmlInput: { 'aria-label': 'Paieška' } }}
      />
      <RcSesTextField
        preset='password'
        label='Slaptažodis'
        required
        defaultValue='Slaptas123!'
        helperText='Mažiausiai 8 simboliai'
      />
      <RcSesTextField
        preset='phone'
        label='Telefonas'
        required
        defaultValue='600 00000'
      />
      <RcSesTextField
        preset='number'
        label='Suma'
        required
        suffix='€'
        defaultValue='12,00'
      />
    </Stack>
  ),
}

export const PresetAdornments: Story = {
  decorators: inputDecorators,
  render: () => (
    <Stack spacing={3}>
      <RcSesTextField
        label='El. paštas'
        required
        leading={<EnvelopeSimpleIcon size={20} aria-hidden />}
        type='email'
      />
      <RcSesTextField label='Svoris' preset='number' required suffix='kg' />
      <RcSesTextField label='Kodas' required prefix='LT' />
      <RcSesTextField
        label='Ilga etiketė, kuri prireikus laužoma ir neturi būti nukirsta'
        required
        defaultValue={'Labai ilga įmonės pavadinimo reikšmė '.repeat(8)}
      />
    </Stack>
  ),
}

export const InputStates: Story = {
  decorators: inputDecorators,
  render: () => (
    <Stack spacing={3}>
      <RcSesTextField
        label='Tuščias laukas'
        required
        placeholder='Tekstas'
        helperText='Pagalbinis tekstas'
        explainer='Lauko paaiškinimas'
      />
      <RcSesTextField label='Užpildytas laukas' required defaultValue='Įvesta reikšmė' />
      <RcSesTextField
        label='Klaida'
        required
        errorText='Įveskite reikšmę'
        helperText='Šis tekstas pakeičiamas klaida'
      />
      <RcSesTextField
        label='Tik skaitymui'
        readOnly
        required
        defaultValue='Galima fokusuoti ir kopijuoti'
      />
      <RcSesTextField
        label='Išjungtas laukas'
        disabled
        required
        defaultValue='Tekstas'
        helperText='Pagalbinis tekstas'
      />
      <RcSesTextField label='Kraunama' loading required />
      <RcSesTextField label='Papildomas laukas' />
    </Stack>
  ),
}

function ControlledDemo() {
  const [value, setValue] = useState('Registrai')
  return (
    <Stack spacing={2}>
      <RcSesTextField
        preset='search'
        label='Paieška'
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Box component='output' aria-label='Reikšmė'>
        {value || 'Tuščia'}
      </Box>
      <Button onClick={() => setValue('Atkurta')}>Atkurti</Button>
    </Stack>
  )
}
export const Controlled: Story = {
  decorators: inputDecorators,
  render: () => <ControlledDemo />,
}

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { companyCode: '', companyName: '', address: '', search: '' },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })
  const [submitted, setSubmitted] = useState(false)
  return (
    <Stack
      component='form'
      noValidate
      spacing={2}
      onSubmit={handleSubmit(() => setSubmitted(true))}
    >
      <Typography variant='body2'>
        Visi laukai privalomi, jei nenurodyta „(neprivaloma)“.
      </Typography>
      <RcSesTextField
        {...register('companyCode', { required: 'Įveskite įmonės kodą' })}
        label='Įmonės kodas'
        required
        helperText='Įveskite įmonės kodą iš registro'
        errorText={errors.companyCode?.message}
      />
      <RcSesTextField
        {...register('companyName', { required: 'Įveskite pavadinimą' })}
        label='Pavadinimas'
        required
        errorText={errors.companyName?.message}
      />
      <RcSesTextField {...register('address')} label='Buveinė' />
      <RcSesTextField {...register('search')} preset='search' label='Papildoma paieška' />
      <Button type='submit' variant='contained'>
        Tęsti
      </Button>
      {submitted && <Box role='status'>Duomenys pateikti</Box>}
    </Stack>
  )
}
export const Form: Story = {
  decorators: inputDecorators,
  render: () => <FormDemo />,
}

export const NativeReset: Story = {
  decorators: inputDecorators,
  render: () => (
    <Stack component='form' spacing={2}>
      <RcSesTextField preset='search' label='Paieška' required defaultValue='' />
      <Button type='reset'>Išvalyti formą</Button>
    </Stack>
  ),
}
