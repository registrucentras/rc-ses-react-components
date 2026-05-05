import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesPhoneInputFormControl from '@/components/form/inputs/PhoneInputFormControl'

const meta: Meta<typeof RcSesPhoneInputFormControl> = {
  title: 'components/inputs/PhoneInputFormControl',
  component: RcSesPhoneInputFormControl,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function PhoneInputFormControlDemo({ label = 'Phone Number' }: { label?: string }) {
  const { control } = useForm({
    defaultValues: {
      phone: '',
    },
  })

  return <RcSesPhoneInputFormControl control={control} label={label} name='phone' />
}

export const Default: Story = {
  args: {
    label: 'Phone Number',
  },
  render: ({ label }) => <PhoneInputFormControlDemo label={label} />,
}
