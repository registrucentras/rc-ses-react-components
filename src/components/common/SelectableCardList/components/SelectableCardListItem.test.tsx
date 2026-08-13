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

  test('renders action button with label when hasActionButton is true', () => {
    renderItem(
      <SelectableCardListItem
        title='With action'
        selected={false}
        onSelect={vi.fn()}
        listItems={[]}
        hasActionButton
        actionButtonLabel='Veiksmas'
      />,
    )

    expect(screen.getByRole('button', { name: 'Veiksmas' })).toBeInTheDocument()
  })

  test('omits action button when hasActionButton is false', () => {
    renderItem(
      <SelectableCardListItem
        title='No action'
        selected={false}
        onSelect={vi.fn()}
        listItems={[]}
        actionButtonLabel='Veiksmas'
      />,
    )

    expect(screen.queryByRole('button', { name: 'Veiksmas' })).not.toBeInTheDocument()
  })

  test('clicking action button calls onActionButtonClick and not onSelect', () => {
    const onSelect = vi.fn()
    const onActionButtonClick = vi.fn()
    renderItem(
      <SelectableCardListItem
        title='With action'
        selected={false}
        onSelect={onSelect}
        listItems={[]}
        hasActionButton
        actionButtonLabel='Veiksmas'
        onActionButtonClick={onActionButtonClick}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Veiksmas' }))

    expect(onActionButtonClick).toHaveBeenCalledTimes(1)
    expect(onSelect).not.toHaveBeenCalled()
  })

  test('loading card is not selectable', () => {
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

    // no radio is rendered while loading, so there is no keyboard tab stop
    expect(screen.queryByRole('radio')).toBeNull()

    // mouse clicks are blocked by pointer-events on the card root
    const card = container.querySelector('.MuiCard-root')
    expect(card).toHaveStyle('pointer-events: none')
  })
})
