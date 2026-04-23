import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
      />,
    )

    expect(screen.getByText('Main title')).toBeInTheDocument()
    expect(screen.getByText('Some subtitle')).toBeInTheDocument()
  })

  test('omits subtitle when not provided', () => {
    renderItem(
      <SelectableCardListItem title='Title only' selected={false} onSelect={vi.fn()} />,
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
      />,
    )

    expect(container.querySelectorAll('.MuiSkeleton-root').length).toBeGreaterThan(0)
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  })

  test('radio is checked when selected=true', () => {
    renderItem(
      <SelectableCardListItem title='Selected' selected onSelect={vi.fn()} />,
    )

    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('radio is unchecked when selected=false', () => {
    renderItem(
      <SelectableCardListItem title='Not selected' selected={false} onSelect={vi.fn()} />,
    )

    expect(screen.getByRole('radio')).not.toBeChecked()
  })

  test('calls onSelect when card is clicked', async () => {
    const onSelect = vi.fn()

    renderItem(
      <SelectableCardListItem title='Clickable' selected={false} onSelect={onSelect} />,
    )

    await userEvent.click(screen.getByText('Clickable'))

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  test('renders list items when provided', () => {
    renderItem(
      <SelectableCardListItem
        title='With list'
        selected={false}
        onSelect={vi.fn()}
        listItems={[
          { id: 'a', text: 'List entry A' },
          { id: 'b', text: 'List entry B' },
        ]}
      />,
    )

    expect(screen.getByText('List entry A')).toBeInTheDocument()
    expect(screen.getByText('List entry B')).toBeInTheDocument()
  })
})
