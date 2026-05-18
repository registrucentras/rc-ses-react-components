import Typography from '@mui/material/Typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import RcSesServiceHeader from '@/components/layout/ServiceHeader'
import { common, grey } from '@/theme/palette'

const meta: Meta<typeof RcSesServiceHeader> = {
  title: 'components/layout/ServiceHeader',
  component: RcSesServiceHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    backgroundColor: { control: 'text' },
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
    backgroundColor: common.white,
  },
  render: (args) => (
    <RcSesServiceHeader
      title={args.title}
      breadcrumbsProps={args.breadcrumbsProps}
      backgroundColor={args.backgroundColor}
    >
      {args.children && <Typography variant='body1'>{args.children}</Typography>}
    </RcSesServiceHeader>
  ),
}

export const CustomBackground: Story = {
  args: {
    title: 'Service Title',
    children: 'This is a description of the service with custom background.',
    breadcrumbsProps: breadcrumbs,
    backgroundColor: grey['100'],
  },
  render: (args) => (
    <RcSesServiceHeader
      title={args.title}
      breadcrumbsProps={args.breadcrumbsProps}
      backgroundColor={args.backgroundColor}
    >
      {args.children && <Typography variant='body1'>{args.children}</Typography>}
    </RcSesServiceHeader>
  ),
}
