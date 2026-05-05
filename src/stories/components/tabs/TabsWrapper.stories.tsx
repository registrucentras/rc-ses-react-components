import { Meta, StoryObj } from '@storybook/react'

import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabPanel from '@/components/common/Tabs/TabPanel'
import RcSesTabs from '@/components/common/Tabs/Tabs'
import RcSesTabsWrapper from '@/components/common/Tabs/TabsWrapper'

const meta: Meta<typeof RcSesTabsWrapper> = {
  title: 'components/tabs/TabsWrapper',
  component: RcSesTabsWrapper,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Section Title',
  },
  render: (args) => (
    <RcSesTabsWrapper heading={args.heading}>
      <RcSesTabs value={0}>
        <RcSesTab label='Tab' />
      </RcSesTabs>
      <RcSesTabPanel activeTab={0} index={0}>
        Tab content
      </RcSesTabPanel>
    </RcSesTabsWrapper>
  ),
}
