import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import AdvancedList, { type AdvancedListItemData } from './index'

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material')

  return {
    ...actual,
    useMediaQuery: vi.fn(() => false),
  }
})

const mockedUseMediaQuery = vi.mocked(useMediaQuery)

beforeEach(() => {
  mockedUseMediaQuery.mockReturnValue(false)
})

const renderList = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const makeItems = (count: number): AdvancedListItemData[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Item ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
  }))

describe('AdvancedList', () => {
  test('renders all items on the first page when count <= page size', () => {
    renderList(<AdvancedList items={makeItems(3)} />)

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  test('shows only 5 items per page', () => {
    renderList(<AdvancedList items={makeItems(8)} />)

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 5')).toBeInTheDocument()
    expect(screen.queryByText('Item 6')).not.toBeInTheDocument()
  })

  test('navigating to next page shows the next set of items', () => {
    renderList(<AdvancedList items={makeItems(8)} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kitas' }))

    expect(screen.getByText('Item 6')).toBeInTheDocument()
    expect(screen.getByText('Item 7')).toBeInTheDocument()
    expect(screen.getByText('Item 8')).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
  })

  test("passes each item's own leading/trailing/expanded config through to AdvancedListItem", () => {
    const onChange = vi.fn()

    renderList(
      <AdvancedList
        items={[
          {
            id: 'radio-item',
            title: 'Savininkas juridinis asmuo',
            leading: { type: 'radio', checked: true, onChange },
            expanded: true,
            expandedContent: <input aria-label='Įmonės kodas' />,
          },
        ]}
      />,
    )

    expect(screen.getByRole('radio')).toBeChecked()
    expect(screen.getByLabelText('Įmonės kodas')).toBeInTheDocument()
  })

  test('renders error node and hides the list when error is provided', () => {
    renderList(<AdvancedList items={makeItems(3)} error={<p>Something went wrong</p>} />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
  })

  test('does not render pagination controls when everything fits on one page', () => {
    renderList(<AdvancedList items={makeItems(2)} />)

    expect(screen.queryByRole('button', { name: 'Kitas' })).not.toBeInTheDocument()
  })
})
