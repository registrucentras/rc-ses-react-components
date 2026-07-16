import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import SelectableCardListItem from './SelectableCardListItem'

const renderItem = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('SelectableCardListItem', () => {
  test('renders title and subtitle', () => {
    renderItem(
      <SelectableCardListItem
        title='Main title'
        subtitle='Some subtitle'
        selected={false}
        onSelect={vi.fn()}
        listItems={[]}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Main title' })).toBeInTheDocument()
    expect(screen.getByText('Some subtitle')).toBeInTheDocument()
  })

  test('omits subtitle when not provided', () => {
    renderItem(
      <SelectableCardListItem
        title='Title only'
        selected={false}
        onSelect={vi.fn()}
        listItems={[]}
      />,
    )

    expect(screen.getByText('Title only')).toBeInTheDocument()
    expect(screen.queryByText('Some subtitle')).not.toBeInTheDocument()
  })

  test('renders loading skeletons when isLoading is true', () => {
    const { container } = renderItem(
      <SelectableCardListItem
        title=''
        selected={false}
        onSelect={vi.fn()}
        isLoading
        listItems={[]}
      />,
    )

    expect(container.querySelectorAll('.MuiSkeleton-root').length).toBeGreaterThan(0)
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  })

  test('radio is checked when selected=true', () => {
    renderItem(
      <SelectableCardListItem
        title='Selected'
        selected
        onSelect={vi.fn()}
        listItems={[]}
      />,
    )

    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('radio is unchecked when selected=false', () => {
    renderItem(
      <SelectableCardListItem
        title='Not selected'
        selected={false}
        onSelect={vi.fn()}
        listItems={[]}
      />,
    )

    expect(screen.getByRole('radio')).not.toBeChecked()
  })

  test('renders list items when provided', () => {
    renderItem(
      <SelectableCardListItem
        title='With list'
        selected={false}
        onSelect={vi.fn()}
        listItems={[{ text: 'List entry A' }, { text: 'List entry B' }]}
      />,
    )

    expect(screen.getByText('List entry A')).toBeInTheDocument()
    expect(screen.getByText('List entry B')).toBeInTheDocument()
  })

  test('calls onSelect once when Enter key is pressed on radio', () => {
    const onSelect = vi.fn()
    renderItem(
      <SelectableCardListItem
        title='Test'
        selected={false}
        onSelect={onSelect}
        listItems={[]}
      />,
    )

    const radio = screen.getByRole('radio')
    radio.focus()
    fireEvent.keyDown(radio, { key: 'Enter', code: 'Enter' })

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  test('calls onSelect once when radio is clicked (no double-call)', () => {
    const onSelect = vi.fn()
    renderItem(
      <SelectableCardListItem
        title='Test'
        selected={false}
        onSelect={onSelect}
        listItems={[]}
      />,
    )

    const radio = screen.getByRole('radio')
    fireEvent.click(radio)

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  test('calls onSelect once when card is clicked outside radio', () => {
    const onSelect = vi.fn()
    renderItem(
      <SelectableCardListItem
        title='Test title'
        selected={false}
        onSelect={onSelect}
        listItems={[]}
      />,
    )

    // click on the title area (outside the radio)
    const titleElement = screen.getByRole('heading', { name: 'Test title' })
    fireEvent.click(titleElement)

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  test('loading card does not call onSelect when clicked', () => {
    const onSelect = vi.fn()
    const { container } = renderItem(
      <SelectableCardListItem
        title='Loading'
        selected={false}
        onSelect={onSelect}
        isLoading
        listItems={[]}
      />,
    )

    // get the card container and try to click it
    const cardContent = container.querySelector('[class*="MuiCardContent"]')
    if (cardContent) {
      fireEvent.click(cardContent)
    }

    // should not call onSelect due to pointerEvents: 'none'
    expect(onSelect).not.toHaveBeenCalled()
  })
})
