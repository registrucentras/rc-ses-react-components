import { Button, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'
import RcSesSelect from '@/components/form/inputs/Select'
import RcSesTextField from '@/components/form/inputs/TextField'

const meta: Meta<typeof RcSesFormControlWrapper> = {
  title: 'Molecules/FormControlWrapper',
  component: RcSesFormControlWrapper,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    hideLabel: { control: 'boolean' },
    labelOnTop: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function SharedLabelsPreview() {
  const [disabled, setDisabled] = useState(false)
  const { control } = useForm({ defaultValues: { top: 'first', side: 'first' } })
  const errors = { type: 'manual', message: 'Klaidos tekstas' }
  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: 800 }}>
      <Button onClick={() => setDisabled((value) => !value)}>Toggle disabled</Button>
      {(['top', 'side'] as const).map((mode) => (
        <Stack key={mode} spacing={2}>
          <RcSesTextField
            id={`shared-text-${mode}`}
            label={`TextField ${mode}`}
            disabled={disabled}
            errors={errors}
            slotProps={{
              wrapper: {
                className: `shared-text-${mode}`,
                labelOnTop: mode === 'top',
                description: 'Pagalbinis tekstas',
              },
            }}
          />
          <RcSesSelect
            id={`shared-select-${mode}`}
            name={mode}
            control={control}
            label={`Select ${mode}`}
            disabled={disabled}
            errors={errors}
            options={[{ value: 'first', label: 'Pirmas pasirinkimas' }]}
            slotProps={{
              wrapper: {
                className: `shared-select-${mode}`,
                labelOnTop: mode === 'top',
                description: 'Pagalbinis tekstas',
              },
            }}
          />
        </Stack>
      ))}
    </Stack>
  )
}

export const SharedLabels: Story = {
  tags: ['no-snapshot'],
  render: () => <SharedLabelsPreview />,
}

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'This is a helpful description',
    hideLabel: false,
    labelOnTop: false,
    required: false,
  },
  render: (args) => (
    <RcSesFormControlWrapper {...args}>
      <TextField id='input' placeholder='Type text here' size='small' fullWidth />
    </RcSesFormControlWrapper>
  ),
}

export const WithError: Story = {
  args: {
    label: 'Label',
    hideLabel: false,
    labelOnTop: false,
    required: true,
    errors: { type: 'required', message: 'This field is required' },
  },
  render: (args) => (
    <RcSesFormControlWrapper {...args}>
      <TextField id='input' placeholder='Type text here' size='small' fullWidth error />
    </RcSesFormControlWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pass the react-hook-form `fieldState.error` as `errors` and the message renders below the field, leaving the field itself untouched. This is the validation pattern for any wrapped control, including ones that are not inputs - see `SelectableCardList` → `ValidationError`. When `errors.type` is `required` and no `message` is set, a translated fallback is shown instead.',
      },
    },
  },
}
