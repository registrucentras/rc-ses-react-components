import Typography from '@mui/material/Typography'
import { Meta, StoryObj } from '@storybook/react'

import RcSesServicePage from '@/components/layout/ServicePage'

const meta: Meta<typeof RcSesServicePage> = {
  title: 'components/layout/ServicePage',
  component: RcSesServicePage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RcSesServicePage>
      <Typography variant='h2' sx={{ mb: 2 }}>
        Page Content
      </Typography>
      <Typography variant='body1'>
        This is the main content area of the service page.
      </Typography>
    </RcSesServicePage>
  ),
}
