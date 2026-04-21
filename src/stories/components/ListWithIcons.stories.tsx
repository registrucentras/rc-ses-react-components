import type { Meta, StoryObj } from '@storybook/react'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import ListWithIcons, { type ListWithIconsItemData } from '@/components/common/ListWithIcons'

const baseItems: ListWithIconsItemData[] = [
  {
    id: 'status-ok',
    icon: <CheckCircleFillIcon size={20} />,
    text: 'Application received',
    tooltip: 'The submission was successfully received.',
  },
  {
    id: 'status-review',
    icon: <WarningFillIcon size={20} />,
    text: 'Requires review',
    tooltip: 'A specialist will review the provided details.',
  },
  {
    id: 'status-disabled',
    icon: <WarningFillIcon size={20} />,
    text: 'Unavailable item',
    tooltip: 'This item is currently disabled.',
    disabled: true,
  },
]

const meta = {
  title: 'components/common/ListWithIcons',
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
