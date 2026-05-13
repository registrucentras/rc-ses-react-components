import Typography from '@mui/material/Typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import RcSesServiceHeader from '@/components/layout/ServiceHeader'

type ServiceHeaderProps = React.ComponentProps<typeof RcSesServiceHeader>

const meta: Meta<typeof RcSesServiceHeader> = {
  title: 'components/layout/ServiceHeader',
  component: RcSesServiceHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    backgroundColor: {
      control: 'inline-radio',
      options: ['primary', 'white'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const breadcrumbs = {
  path: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Service Title', path: '/services/service' },
  ],
}

export const Default: Story = {
  args: {
    title: 'Service Title',
    children: 'This is a description of the service.',
    breadcrumbsProps: breadcrumbs,
    backgroundColor: 'primary',
  },
  render: (args) => (
    <RcSesServiceHeader
      title={args.title}
      breadcrumbsProps={args.breadcrumbsProps}
      backgroundColor={args.backgroundColor as ServiceHeaderProps['backgroundColor']}
    >
      {args.children && <Typography variant='body1'>{args.children}</Typography>}
    </RcSesServiceHeader>
  ),
}

export const WhiteBackground: Story = {
  args: {
    title: 'Service Title',
    children: 'This is a description of the service.',
    breadcrumbsProps: breadcrumbs,
    backgroundColor: 'white',
  },
  render: (args) => (
    <RcSesServiceHeader
      title={args.title}
      breadcrumbsProps={args.breadcrumbsProps}
      backgroundColor={args.backgroundColor as ServiceHeaderProps['backgroundColor']}
    >
      {args.children && <Typography variant='body1'>{args.children}</Typography>}
    </RcSesServiceHeader>
  ),
}
