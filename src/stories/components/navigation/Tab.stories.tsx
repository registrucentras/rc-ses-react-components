import { Meta, StoryObj } from '@storybook/react'

import RcSesTab from '@/components/common/Tabs/Tab'

const meta: Meta<typeof RcSesTab> = {
  title: 'components/navigation/Tabs/Tab',
  component: RcSesTab,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    icon: { control: 'text' },
    iconPosition: {
      control: { type: 'select', options: ['top', 'bottom', 'start', 'end'] },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Tab Label' },
}

export const WithIcon: Story = {
  args: { label: 'Home', icon: '⭐', iconPosition: 'start' },
}

export const Disabled: Story = {
  args: { label: 'Disabled Tab', disabled: true },
}
