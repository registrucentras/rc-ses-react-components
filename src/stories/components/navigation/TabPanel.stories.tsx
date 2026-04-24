import { Meta, StoryObj } from '@storybook/react'

import RcSesTabPanel from '@/components/common/Tabs/TabPanel'

const meta: Meta<typeof RcSesTabPanel> = {
  title: 'components/navigation/Tabs/TabPanel',
  component: RcSesTabPanel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Visible: Story = {
  args: {
    activeTab: 0,
    index: 0,
    children: 'Panel is visible (activeTab matches index)',
  },
}

export const WithContent: Story = {
  args: {
    activeTab: 0,
    index: 0,
    children: (
      <div>
        <h3>Panel Title</h3>
        <p>Panel with structured content</p>
      </div>
    ),
  },
}
