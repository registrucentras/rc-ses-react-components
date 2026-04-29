import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabs from '@/components/common/Tabs/Tabs'

const meta: Meta<typeof RcSesTabs> = {
  title: 'components/tabs/Tabs',
  component: RcSesTabs,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function DefaultTabsWrapper() {
  const [value, setValue] = useState(0)
  return (
    <Box>
      <RcSesTabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <RcSesTab label='Tab 1' />
        <RcSesTab label='Tab 2' />
        <RcSesTab label='Tab 3' />
      </RcSesTabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && <p>Content for Tab 1 goes here</p>}
        {value === 1 && <p>Content for Tab 2 goes here</p>}
        {value === 2 && <p>Content for Tab 3 goes here</p>}
      </Box>
    </Box>
  )
}

function WithIconsTabsWrapper() {
  const [value, setValue] = useState(0)
  return (
    <Box>
      <RcSesTabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <RcSesTab label='Home' icon='🏠' iconPosition='start' />
        <RcSesTab label='Settings' icon='⚙️' iconPosition='start' />
        <RcSesTab label='Profile' icon='👤' iconPosition='start' />
      </RcSesTabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && <p>Welcome to the Home tab</p>}
        {value === 1 && <p>Adjust your Settings here</p>}
        {value === 2 && <p>View your Profile information</p>}
      </Box>
    </Box>
  )
}

export const Default: Story = {
  render: () => <DefaultTabsWrapper />,
}

export const WithIcons: Story = {
  render: () => <WithIconsTabsWrapper />,
}
