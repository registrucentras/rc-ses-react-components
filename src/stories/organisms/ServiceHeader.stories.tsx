import Typography from '@mui/material/Typography'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import RcSesServiceHeader from '@/components/layout/ServiceHeader'

const meta: Meta<typeof RcSesServiceHeader> = {
  title: 'Organisms/ServiceHeader',
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#f0f2f5',
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

export const TokenBindings: Story = {
  ...Default,
  args: { ...Default.args, backgroundColor: undefined },
}

export const TokenOverrides: Story = {
  ...TokenBindings,
  render: (args) => (
    <div
      style={
        {
          '--rc-color-surface-base': '#f0f2f5',
          '--rc-space-10': '16px',
        } as React.CSSProperties
      }
    >
      <RcSesServiceHeader {...args}>
        <Typography variant='body1'>{args.children}</Typography>
      </RcSesServiceHeader>
    </div>
  ),
}
