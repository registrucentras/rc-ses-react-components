import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import QuestionIcon from '@/assets/icons/QuestionIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import type { ListWithIconsItemData } from '@/components/common/ListWithIcons/ListWithIcons.types'
import SelectableCardList, {
  type SelectableCardListItemData,
  type SelectableCardListProps,
} from '@/components/common/SelectableCardList'

const getListItems = (index: number): ListWithIconsItemData[] => {
  switch (index) {
    case 7:
      return []

    case 6:
      return [{ text: 'International shipping' }]

    default:
      return [
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
        {
          text: 'International shipping',
        },
      ]
  }
}

const buildItems = (): SelectableCardListItemData[] =>
  Array.from({ length: 8 }, (_, index) => ({
    id: `item-${index + 1}`,
    title: `Service option ${index + 1}`,
    subtitle: index % 2 === 0 ? 'Recommended for most users' : 'Alternative flow',
    listItems: getListItems(index),
    hasActionButton: index === 0,
    actionButtonLabel: 'Action',
    onActionButtonClick: () => {},
  }))

const meta = {
  title: 'Organisms/SelectableCardList',
  component: SelectableCardList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Paginates items client-side, showing 5 per page on desktop and 3 per page on mobile (below the `md` breakpoint). The page resets to 1 whenever the page size changes, e.g. when resizing across the breakpoint.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story:
          'Responsive page size: desktop shows 5 cards per page, mobile (below md) shows 3 cards per page. When page size changes across breakpoints, current page is reset to 1.',
      },
    },
  },
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
