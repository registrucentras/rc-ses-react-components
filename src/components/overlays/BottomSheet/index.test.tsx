import { fireEvent, render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import RcSesBottomSheet from '.'

describe('RcSesBottomSheet', () => {
  beforeAll(() => {
    // jsdom does not implement pointer capture; the handle calls it unconditionally.
    Element.prototype.setPointerCapture = vi.fn()
    Element.prototype.releasePointerCapture = vi.fn()
  })

  it('renders as a dialog with the title as its accessible name', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()} title='Pasirinkite padalinį'>
        Content
      </RcSesBottomSheet>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAccessibleName('Pasirinkite padalinį')
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders without a header when neither title nor showBack is given', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()}>
        Content
      </RcSesBottomSheet>,
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('renders the primary and secondary action buttons with their labels', () => {
    const onPrimaryAction = vi.fn()
    const onSecondaryAction = vi.fn()
    render(
      <RcSesBottomSheet
        open
        onClose={vi.fn()}
        title='Filtrai'
        primaryActionLabel='Taikyti'
        onPrimaryAction={onPrimaryAction}
        secondaryActionLabel='Atšaukti'
        onSecondaryAction={onSecondaryAction}
      >
        Content
      </RcSesBottomSheet>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Taikyti' }))
    fireEvent.click(screen.getByRole('button', { name: 'Atšaukti' }))

    expect(onPrimaryAction).toHaveBeenCalledTimes(1)
    expect(onSecondaryAction).toHaveBeenCalledTimes(1)
  })

  it('renders no footer when no action label is given', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('does not render a back button by default', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('calls onBack, not onClose, when the back button is pressed', () => {
    const onBack = vi.fn()
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} onBack={onBack} showBack title='2 iš 2'>
        Content
      </RcSesBottomSheet>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onBack).toHaveBeenCalledTimes(1)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes on Escape even when backdrop close is disabled', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai' disableBackdropClose>
        Content
      </RcSesBottomSheet>,
    )

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })

    expect(onClose).toHaveBeenCalledWith(expect.anything(), 'escapeKeyDown')
  })

  it('closes on backdrop click by default', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    fireEvent.click(document.querySelector('.MuiBackdrop-root') as HTMLElement)

    expect(onClose).toHaveBeenCalledWith(expect.anything(), 'backdropClick')
  })

  it('ignores backdrop clicks when disableBackdropClose is set', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai' disableBackdropClose>
        Content
      </RcSesBottomSheet>,
    )

    fireEvent.click(document.querySelector('.MuiBackdrop-root') as HTMLElement)

    expect(onClose).not.toHaveBeenCalled()
  })

  it('always anchors the paper to the bottom of the viewport - there is no desktop presentation', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()} title='Pasirinkite padalinį'>
        Content
      </RcSesBottomSheet>,
    )

    expect(document.querySelector('.MuiDialog-container')).toHaveStyle({
      alignItems: 'flex-end',
    })
  })

  it('caps the sheet width for size="md" instead of the sm full-bleed default', () => {
    render(
      <RcSesBottomSheet open onClose={vi.fn()} title='Filtrai' size='md'>
        Content
      </RcSesBottomSheet>,
    )

    expect(document.querySelector('.MuiDialog-paper')).toHaveStyle({ maxWidth: '480px' })
  })

  it('dismisses via a swipe on the handle past the distance threshold', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    const handle = screen.getByTestId('rc-ses-bottom-sheet-handle')
    fireEvent.pointerDown(handle, { clientY: 0, pointerId: 1, isPrimary: true })
    fireEvent.pointerUp(handle, { clientY: 150, pointerId: 1 })

    expect(onClose).toHaveBeenCalledWith(expect.anything(), 'swipeDown')
  })

  it('does not dismiss when the handle drag stays under the threshold', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    const handle = screen.getByTestId('rc-ses-bottom-sheet-handle')
    fireEvent.pointerDown(handle, { clientY: 0, pointerId: 1, isPrimary: true })
    fireEvent.pointerUp(handle, { clientY: 10, pointerId: 1 })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('lets a caller-supplied aria-describedby win over the generated one', () => {
    render(
      <RcSesBottomSheet
        open
        onClose={vi.fn()}
        title='Filtrai'
        aria-describedby='external-description'
      >
        Content
      </RcSesBottomSheet>,
    )

    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-describedby',
      'external-description',
    )
  })

  it('does not dismiss on a pointercancel, even past the distance threshold', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    const handle = screen.getByTestId('rc-ses-bottom-sheet-handle')
    fireEvent.pointerDown(handle, { clientY: 0, pointerId: 1, isPrimary: true })
    fireEvent.pointerCancel(handle, { clientY: 150, pointerId: 1 })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('ignores a right-click on the handle', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    const handle = screen.getByTestId('rc-ses-bottom-sheet-handle')
    fireEvent.pointerDown(handle, {
      clientY: 0,
      pointerId: 1,
      pointerType: 'mouse',
      button: 2,
      isPrimary: true,
    })
    fireEvent.pointerUp(handle, { clientY: 150, pointerId: 1, pointerType: 'mouse' })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('passes the real pointer event through to onClose on swipe-dismiss', () => {
    const onClose = vi.fn()
    render(
      <RcSesBottomSheet open onClose={onClose} title='Filtrai'>
        Content
      </RcSesBottomSheet>,
    )

    const handle = screen.getByTestId('rc-ses-bottom-sheet-handle')
    fireEvent.pointerDown(handle, { clientY: 0, pointerId: 1, isPrimary: true })
    fireEvent.pointerUp(handle, { clientY: 150, pointerId: 1 })

    const [event, reason] = onClose.mock.calls[0]
    expect(reason).toBe('swipeDown')
    expect(event).toMatchObject({ type: 'pointerup' })
  })
})
