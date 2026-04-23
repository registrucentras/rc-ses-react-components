import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import QuestionIcon from '@/assets/icons/QuestionIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import SelectableCardList, {
  type SelectableCardListItemData,
  type SelectableCardListProps,
} from '@/components/common/SelectableCardList'

const buildItems = (): SelectableCardListItemData[] =>
  Array.from({ length: 8 }, (_, index) => ({
    id: `item-${index + 1}`,
    title: `Service option ${index + 1}`,
    subtitle: index % 2 === 0 ? 'Recommended for most users' : 'Alternative flow',
    listItems: [
      {
        icon: InfoFillIcon,
        text: 'Estimated time: 3 business days',
        tooltip: 'Estimated processing duration.',
      },
      {
        icon: QuestionIcon,
        text: 'Requires identity verification',
        tooltip: 'You may be asked to verify your identity.',
      },
      {
        icon: WarningFillIcon,
        text: 'Additional fees may apply',
        tooltip: 'Fees depend on selected add-ons.',
        disabled: index % 3 === 0,
      },
    ],
  }))

const meta = {
  title: 'components/common/SelectableCardList',
  component: SelectableCardList,
  tags: ['autodocs'],
  args: {
    items: buildItems(),
    selectedId: null,
    error: undefined,
    onSelect: () => {},
  },
  argTypes: {
    onSelect: {
      action: 'itemSelected',
    },
    items: {
      control: false,
    },
    error: {
      control: false,
    },
  },
} satisfies Meta<typeof SelectableCardList>

export default meta

type Story = StoryObj<typeof meta>

const SelectableCardListStory = ({
  onSelect,
  selectedId: initialSelectedId,
  ...restArgs
}: SelectableCardListProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId ?? null)

  return (
    <SelectableCardList
      {...restArgs}
      selectedId={selectedId}
      onSelect={(id) => {
        setSelectedId(id)
        onSelect(id)
      }}
    />
  )
}

export const Main: Story = {
  render: (args) => (
    <SelectableCardListStory {...args} onSelect={args.onSelect ?? (() => {})} />
  ),
}

export const Loading: Story = {
  args: {
    items: undefined,
  },
}

export const Error: Story = {
  args: {
    error: 'Unable to load selectable cards. Please try again.',
  },
}
