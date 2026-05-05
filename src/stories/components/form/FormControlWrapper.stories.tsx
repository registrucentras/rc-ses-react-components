import TextField from '@mui/material/TextField'
import { Meta, StoryObj } from '@storybook/react'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'

const meta: Meta<typeof RcSesFormControlWrapper> = {
  title: 'components/form/FormControlWrapper',
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
