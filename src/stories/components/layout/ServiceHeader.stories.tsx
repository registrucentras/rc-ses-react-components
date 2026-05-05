import Typography from '@mui/material/Typography'
import { Meta, StoryObj } from '@storybook/react'

import RcSesServiceHeader from '@/components/layout/ServiceHeader'

const meta: Meta<typeof RcSesServiceHeader> = {
  title: 'components/layout/ServiceHeader',
  component: RcSesServiceHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Service Title',
    children: 'This is a description of the service.',
    breadcrumbsProps: {
      path: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Service Title', path: '/services/service' },
      ],
    },
  },
  render: (args) => (
    <RcSesServiceHeader title={args.title} breadcrumbsProps={args.breadcrumbsProps}>
      {args.children && <Typography variant='body1'>{args.children}</Typography>}
    </RcSesServiceHeader>
  ),
}
