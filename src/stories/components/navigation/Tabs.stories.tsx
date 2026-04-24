import { Meta, StoryObj } from '@storybook/react'

import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabs from '@/components/common/Tabs/Tabs'

const meta: Meta<typeof RcSesTabs> = {
  title: 'components/navigation/Tabs/Tabs',
  component: RcSesTabs,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <RcSesTabs {...args}>
      <RcSesTab label='Tab 1' />
      <RcSesTab label='Tab 2' />
      <RcSesTab label='Tab 3' />
    </RcSesTabs>
  ),
}

export const WithIcons: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <RcSesTabs {...args}>
      <RcSesTab label='Home' icon='🏠' iconPosition='start' />
      <RcSesTab label='Settings' icon='⚙️' iconPosition='start' />
      <RcSesTab label='Profile' icon='👤' iconPosition='start' />
    </RcSesTabs>
  ),
}
