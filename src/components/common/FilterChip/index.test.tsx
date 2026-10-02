import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'

import RcSesFilterChip from '.'

const getRemoveAriaLabel = (label: string) =>
  i18n.t('components.RcSesFilterChip.aria.label', { label, ns: 'input' })

describe('RcSesFilterChip', () => {
  const mockOnRemove = vi.fn()

  beforeEach(async () => {
    vi.clearAllMocks()
    await i18n.changeLanguage('en')
  })

  it('renders with label', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    expect(screen.getByText('Test Filter')).toBeInTheDocument()
  })

  it('calls onRemove when clicked', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: getRemoveAriaLabel('Test Filter'),
    })
    fireEvent.click(chip)

    expect(mockOnRemove).toHaveBeenCalledOnce()
  })

  it('calls onRemove when Enter is pressed', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: getRemoveAriaLabel('Test Filter'),
    })
    fireEvent.keyDown(chip, { key: 'Enter' })

    expect(mockOnRemove).toHaveBeenCalledOnce()
  })

  it('calls onRemove when Backspace is pressed', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: getRemoveAriaLabel('Test Filter'),
    })
    fireEvent.keyDown(chip, { key: 'Backspace' })

    expect(mockOnRemove).toHaveBeenCalledOnce()
  })

  it('calls onRemove when Delete is pressed', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: getRemoveAriaLabel('Test Filter'),
    })
    fireEvent.keyDown(chip, { key: 'Delete' })

    expect(mockOnRemove).toHaveBeenCalledOnce()
  })

  it('has proper accessibility attributes', () => {
    render(<RcSesFilterChip label='Status' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: getRemoveAriaLabel('Status'),
    })
    expect(chip).toHaveAttribute('aria-label', 'Remove filter: Status')
  })

  it('supports custom testId', () => {
    render(
      <RcSesFilterChip
        label='Test Filter'
        onRemove={mockOnRemove}
        testId='custom-chip-id'
      />,
    )

    expect(screen.getByTestId('custom-chip-id')).toBeInTheDocument()
  })

  it('is keyboard accessible with Tab', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button')
    expect(chip).toHaveAttribute('tabIndex', '0')
  })
})
