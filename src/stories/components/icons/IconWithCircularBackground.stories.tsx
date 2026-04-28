import { Meta, StoryObj } from '@storybook/react'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import RcSesIconWithCircularBackground from '@/components/common/IconWithCircularBackground'

const meta: Meta<typeof RcSesIconWithCircularBackground> = {
  title: 'components/icons/IconWithCircularBackground',
  component: RcSesIconWithCircularBackground,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'mediumLarge', 'large'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      },
    },
    bgShade: { control: 'text' },
    iconShade: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    Icon: CheckBoldIcon,
    size: 'medium',
    color: 'primary',
    bgShade: '50',
    iconShade: '600',
  },
}
