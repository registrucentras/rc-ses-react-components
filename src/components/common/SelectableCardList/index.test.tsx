import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import SelectableCardList, { type SelectableCardListItemData } from './index'

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

const makeItems = (count: number): SelectableCardListItemData[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Item ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
  }))

describe('SelectableCardList', () => {
  test('renders skeleton cards when items is undefined', () => {
    const { container } = renderList(
      <SelectableCardList onSelect={vi.fn()} />,
    )

    expect(container.querySelectorAll('.MuiSkeleton-root').length).toBeGreaterThan(0)
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  })

  test('renders all items on the first page when count <= PAGE_SIZE', () => {
    renderList(
      <SelectableCardList items={makeItems(3)} onSelect={vi.fn()} />,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  test('shows only 5 items per page', () => {
    renderList(
      <SelectableCardList items={makeItems(8)} onSelect={vi.fn()} />,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 5')).toBeInTheDocument()
    expect(screen.queryByText('Item 6')).not.toBeInTheDocument()
  })

  test('navigating to next page shows the next set of items', () => {
    renderList(
      <SelectableCardList
        items={makeItems(8)}
        onSelect={vi.fn()}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Kitas' }))

    expect(screen.getByText('Item 6')).toBeInTheDocument()
    expect(screen.getByText('Item 7')).toBeInTheDocument()
    expect(screen.getByText('Item 8')).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
  })

  test('calls onSelect with the correct item id when a card is clicked', async () => {
    const onSelect = vi.fn()

    renderList(
      <SelectableCardList items={makeItems(3)} onSelect={onSelect} />,
    )

    fireEvent.click(screen.getByText('Item 2'))

    expect(onSelect).toHaveBeenCalledWith('item-2')
  })

  test('selected item has its radio checked', () => {
    const items = makeItems(3)

    renderList(
      <SelectableCardList items={items} selectedId='item-2' onSelect={vi.fn()} />,
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[1]).toBeChecked()
    expect(radios[0]).not.toBeChecked()
    expect(radios[2]).not.toBeChecked()
  })

  test('renders error node and hides list when error is provided', () => {
    renderList(
      <SelectableCardList
        items={makeItems(3)}
        onSelect={vi.fn()}
        error={<p>Something went wrong</p>}
      />,
    )

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
  })
})
