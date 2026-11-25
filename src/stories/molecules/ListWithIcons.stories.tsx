import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { CheckCircleFillIcon, WarningFillIcon } from '@/assets/icons/phosphorIcons'
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
  title: 'Molecules/ListWithIcons',
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

const toneItems: ListWithIconsItemData[] = [
  { text: 'Default', textColor: 'default' },
  { text: 'Secondary', textColor: 'secondary' },
  { text: 'Muted', textColor: 'muted' },
  { text: 'Link', textColor: 'link' },
]

export const TextTones: Story = {
  name: 'Text tones (DS "Text" tokens)',
  args: {
    items: toneItems,
  },
}

const customColorItems: ListWithIconsItemData[] = [
  { text: 'Custom palette color', textColor: '#008561' },
]

export const CustomColor: Story = {
  name: 'Custom color (palette variant instead of a named tone)',
  args: {
    items: customColorItems,
  },
}

export const TokenBindings: Story = {
  args: {
    items: toneItems.map((item) => ({
      ...item,
      icon: CheckCircleFillIcon,
      tooltip: 'Meta-info tooltip',
    })),
  },
}

export const TokenOverrides: Story = {
  render: (args) => (
    <div
      style={
        {
          '--rc-color-text-secondary': '#0079ad',
          '--rc-icon-size-inline': '20px',
        } as CSSProperties
      }
    >
      <ListWithIcons {...args} />
    </div>
  ),
}
