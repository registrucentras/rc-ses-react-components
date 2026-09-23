import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import AdvancedListItemShell from '.'

describe('AdvancedListItemShell', () => {
  it('renders the required content slot', () => {
    render(<AdvancedListItemShell content={<span>Content</span>} />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('omits leading/trailing/expanded regions when not provided', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        testIds={{
          root: 'root',
          leading: 'leading',
          trailing: 'trailing',
          expanded: 'expanded',
        }}
      />,
    )

    expect(screen.queryByTestId('leading')).not.toBeInTheDocument()
    expect(screen.queryByTestId('trailing')).not.toBeInTheDocument()
    expect(screen.queryByTestId('expanded')).not.toBeInTheDocument()
  })

  it('renders as a bordered/rounded card by default', () => {
    render(
      <AdvancedListItemShell content={<span>Content</span>} testIds={{ root: 'root' }} />,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveStyle({ borderRadius: '0.5rem' })
    expect(root.style.border).not.toBe('none')
  })

  it('exposes aria-expanded/aria-controls on the root when it is the toggle (clickable + has an expanded slot)', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Details</span>}
        isExpanded
        onClick={vi.fn()}
        testIds={{ root: 'root' }}
      />,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('aria-expanded', 'true')
    expect(root).toHaveAttribute('aria-controls')
  })

  it('does not expose aria-expanded/aria-controls on the root when there is no onClick', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Details</span>}
        isExpanded
        testIds={{ root: 'root' }}
      />,
    )

    const root = screen.getByTestId('root')
    expect(root).not.toHaveAttribute('aria-expanded')
    expect(root).not.toHaveAttribute('aria-controls')
  })

  it('renders as a flush row with no border/radius when container="row"', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        container='row'
        testIds={{ root: 'root' }}
      />,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveStyle({ borderRadius: '0px' })
    expect(root).toHaveStyle({ borderBottomWidth: '0.0625rem' })
  })

  it('renders leading and trailing slots when provided', () => {
    render(
      <AdvancedListItemShell
        leading={<span>Leading</span>}
        content={<span>Content</span>}
        trailing={<span>Trailing</span>}
        testIds={{ leading: 'leading', trailing: 'trailing' }}
      />,
    )

    expect(screen.getByTestId('leading')).toHaveTextContent('Leading')
    expect(screen.getByTestId('trailing')).toHaveTextContent('Trailing')
  })

  it('does not render a falsy leading/trailing slot', () => {
    render(
      <AdvancedListItemShell
        leading={false}
        content={<span>Content</span>}
        trailing={null}
        testIds={{ leading: 'leading', trailing: 'trailing' }}
      />,
    )

    expect(screen.queryByTestId('leading')).not.toBeInTheDocument()
    expect(screen.queryByTestId('trailing')).not.toBeInTheDocument()
  })

  it('keeps the expanded slot content stable while toggling isExpanded', () => {
    const { rerender } = render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Expanded content</span>}
        isExpanded={false}
        testIds={{ expanded: 'expanded' }}
      />,
    )

    expect(screen.getByTestId('expanded')).toBeInTheDocument()
    expect(screen.getByText('Expanded content')).toBeInTheDocument()

    rerender(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Expanded content</span>}
        isExpanded
        testIds={{ expanded: 'expanded' }}
      />,
    )

    expect(screen.getByText('Expanded content')).toBeInTheDocument()
  })

  it('calls onClick when the root is clicked and not disabled', () => {
    const onClick = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        testIds={{ root: 'root' }}
      />,
    )

    fireEvent.click(screen.getByTestId('root'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when a click originates from an interactive control inside a slot', () => {
    const onClick = vi.fn()
    const onDelete = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        trailing={
          <button type='button' onClick={onDelete}>
            Delete
          </button>
        }
      />,
    )

    fireEvent.click(screen.getByText('Delete'))
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('does not expose role="button" on the root, even when clickable', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={vi.fn()}
        testIds={{ root: 'root' }}
      />,
    )

    expect(screen.getByTestId('root')).not.toHaveAttribute('role', 'button')
  })

  it('does not put the root in the tab order', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={vi.fn()}
        testIds={{ root: 'root' }}
      />,
    )

    expect(screen.getByTestId('root')).toHaveAttribute('tabIndex', '-1')
  })

  it('exposes aria-selected when state="selected"', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        state='selected'
        testIds={{ root: 'root' }}
      />,
    )

    expect(screen.getByTestId('root')).toHaveAttribute('aria-selected', 'true')
  })

  it('does not expose aria-selected for non-selected states', () => {
    render(
      <AdvancedListItemShell content={<span>Content</span>} testIds={{ root: 'root' }} />,
    )

    expect(screen.getByTestId('root')).not.toHaveAttribute('aria-selected')
  })

  it('does not call onClick when state is disabled', () => {
    const onClick = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        state='disabled'
        testIds={{ root: 'root' }}
      />,
    )

    fireEvent.click(screen.getByTestId('root'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('makes slot controls unreachable via Tab when disabled', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        trailing={<button type='button'>Delete</button>}
        state='disabled'
        testIds={{ root: 'root' }}
      />,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('inert')
  })
})
