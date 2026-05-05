import { Meta, StoryObj } from '@storybook/react'

import RcSesTabPanel from '@/components/common/Tabs/TabPanel'

const meta: Meta<typeof RcSesTabPanel> = {
  title: 'components/tabs/TabPanel',
  component: RcSesTabPanel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Visible: Story = {
  render: () => (
    <RcSesTabPanel activeTab={0} index={0}>
      Panel is visible (activeTab matches index)
    </RcSesTabPanel>
  ),
}

export const WithContent: Story = {
  render: () => (
    <RcSesTabPanel activeTab={0} index={0}>
      <div>
        <h3>Panel Title</h3>
        <p>Panel with structured content</p>
      </div>
    </RcSesTabPanel>
  ),
}
