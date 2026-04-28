import type { Meta, StoryObj } from '@storybook/react'

import Logo from '@/assets/Logo'

const meta = {
  title: 'assets/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
