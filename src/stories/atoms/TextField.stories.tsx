import {
  Autocomplete,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
} from '@mui/material'
import { Info, MagnifyingGlass } from '@phosphor-icons/react'
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite'

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
