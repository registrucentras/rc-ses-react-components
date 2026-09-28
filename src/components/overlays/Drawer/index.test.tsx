import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import RcSesDrawer from '.'

describe('RcSesDrawer', () => {
  it('renders when isOpen is true', () => {
    render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={vi.fn()}>
        Test content
      </RcSesDrawer>,
    )

    expect(screen.getByText('Test Drawer')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('does not display when isOpen is false', () => {
    const { container } = render(
      <RcSesDrawer isOpen={false} title='Test Drawer' onClose={vi.fn()}>
        Test content
      </RcSesDrawer>,
    )

    const drawer = container.querySelector('[role="dialog"]')
    expect(drawer).toHaveStyle({ transform: `translateX(440px)` })
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(
      <RcSesDrawer
        isOpen
        title='Test Drawer'
        onClose={onClose}
        testIds={{ closeButton: 'test-close-btn' }}
      >
        Test content
      </RcSesDrawer>,
    )

    const closeButton = screen.getByTestId('test-close-btn')
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn()
    const { container } = render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={onClose}>
        Test content
      </RcSesDrawer>,
    )

    const backdrop = container.querySelector('.MuiBackdrop-root')
    if (backdrop) {
      fireEvent.click(backdrop)
      expect(onClose).toHaveBeenCalledTimes(1)
    }
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn()
    render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={onClose}>
        Test content
      </RcSesDrawer>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders footer when action labels are provided', () => {
    render(
      <RcSesDrawer
        isOpen
        title='Test Drawer'
        onClose={vi.fn()}
        secondaryActionLabel='Cancel'
        primaryActionLabel='Apply'
      >
        Test content
      </RcSesDrawer>,
    )

    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Apply')).toBeInTheDocument()
  })

  it('does not render footer when no action labels are provided', () => {
    render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={vi.fn()}>
        Test content
      </RcSesDrawer>,
    )

    expect(
      screen.queryByRole('button', { name: /cancel|apply/i }),
    ).not.toBeInTheDocument()
  })

  it('calls onPrimaryAction when primary button is clicked', () => {
    const onPrimaryAction = vi.fn()
    render(
      <RcSesDrawer
        isOpen
        title='Test Drawer'
        onClose={vi.fn()}
        primaryActionLabel='Apply'
        onPrimaryAction={onPrimaryAction}
      >
        Test content
      </RcSesDrawer>,
    )

    fireEvent.click(screen.getByText('Apply'))

    expect(onPrimaryAction).toHaveBeenCalledTimes(1)
  })

  it('calls onSecondaryAction when secondary button is clicked', () => {
    const onSecondaryAction = vi.fn()
    render(
      <RcSesDrawer
        isOpen
        title='Test Drawer'
        onClose={vi.fn()}
        secondaryActionLabel='Cancel'
        onSecondaryAction={onSecondaryAction}
      >
        Test content
      </RcSesDrawer>,
    )

    fireEvent.click(screen.getByText('Cancel'))

    expect(onSecondaryAction).toHaveBeenCalledTimes(1)
  })

  it('has proper ARIA attributes', () => {
    render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={vi.fn()}>
        Test content
      </RcSesDrawer>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('renders with custom className', () => {
    const { container } = render(
      <RcSesDrawer isOpen title='Test Drawer' onClose={vi.fn()} className='custom-drawer'>
        Test content
      </RcSesDrawer>,
    )

    const drawer = container.querySelector('.custom-drawer')
    expect(drawer).toBeInTheDocument()
  })

  it('renders with testIds', () => {
    render(
      <RcSesDrawer
        isOpen
        title='Test Drawer'
        onClose={vi.fn()}
        testIds={{
          root: 'test-drawer-root',
          header: 'test-drawer-header',
          body: 'test-drawer-body',
          footer: 'test-drawer-footer',
          closeButton: 'test-drawer-close',
        }}
      >
        Test content
      </RcSesDrawer>,
    )

    expect(screen.getByTestId('test-drawer-root')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-header')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-body')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-close')).toBeInTheDocument()
  })
})
