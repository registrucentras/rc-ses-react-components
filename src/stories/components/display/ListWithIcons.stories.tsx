import type { Meta, StoryObj } from '@storybook/react'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import ListWithIcons from '@/components/common/ListWithIcons'
import { type ListWithIconsItemData } from '@/components/common/ListWithIcons/ListWithIcons.types'

const baseItems: ListWithIconsItemData[] = [
  {
    icon: CheckCircleFillIcon,
    text: 'Application received',
    tooltip: 'The submission was successfully received.',
  },
  {
    icon: WarningFillIcon,
    text: 'Requires review',
    tooltip: 'A specialist will review the provided details.',
  },
  {
    icon: WarningFillIcon,
    text: 'Unavailable item',
    tooltip: 'This item is currently disabled.',
    disabled: true,
  },
]

const meta = {
  title: 'components/display/ListWithIcons',
  component: ListWithIcons,
  tags: ['autodocs'],
  args: {
    items: baseItems,
    layout: 'vertical',
    isLoading: false,
  },
  argTypes: {
    layout: {
      control: {
        type: 'radio',
      },
      options: ['vertical', 'horizontal'],
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    items: {
      control: false,
    },
  },
} satisfies Meta<typeof ListWithIcons>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
