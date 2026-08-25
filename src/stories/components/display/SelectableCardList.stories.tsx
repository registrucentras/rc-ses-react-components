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
import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'

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
  title: 'components/display/SelectableCardList',
  component: SelectableCardList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'Paginates items client-side, showing 5 per page on desktop and 3 per page on mobile (below the `md` breakpoint). The page resets to 1 whenever the page size changes, e.g. when resizing across the breakpoint.',
          '',
          'The `error` prop is a data-loading failure state: whatever node it receives is rendered **instead of** the cards and the pagination. It is not meant for form validation messages - for those wrap the list in `RcSesFormControlWrapper` and pass `errors`, which keeps the cards visible and shows the message below them. Compare the `Error` and `ValidationError` stories.',
        ].join('\n'),
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
  parameters: {
    docs: {
      description: {
        story:
          'Data-loading failure state. `items` is still populated here, yet the cards and the pagination are replaced by the `error` node - that is what this prop does. Use it when the list could not be fetched, not to report an invalid selection.',
      },
    },
  },
}

export const ValidationError: Story = {
  render: (args) => (
    <RcSesFormControlWrapper
      label='Service option'
      required
      errors={{ type: 'required', message: 'Select one of the options' }}
    >
      <SelectableCardListStory {...args} onSelect={args.onSelect ?? (() => {})} />
    </RcSesFormControlWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The way to report an invalid selection: wrap the list in `RcSesFormControlWrapper` and pass the react-hook-form `fieldState.error` as `errors`. The cards stay selectable and the message renders below them. Leave the list's own `error` prop unset.",
      },
    },
  },
}
