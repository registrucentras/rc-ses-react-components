import TextField from '@mui/material/TextField'
import { Meta, StoryObj } from '@storybook/react-vite'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'

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
