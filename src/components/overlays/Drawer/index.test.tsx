import { fireEvent, render, screen } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import commonEn from '@/i18n/namespaces/common/en.json'
import commonLt from '@/i18n/namespaces/common/lt.json'

import Drawer from '.'

beforeAll(() => {
  if (!i18n.isInitialized) {
    i18n.init({
      lng: 'lt',
      resources: {
        lt: { common: commonLt },
        en: { common: commonEn },
      },
    })
  }
})

describe('Drawer', () => {
  it('renders when isOpen is true', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={vi.fn()}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    expect(screen.getByText('Test Drawer')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('does not display when isOpen is false', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen={false} title='Test Drawer' onClose={vi.fn()}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    const drawer = container.querySelector('[role="dialog"]')
    expect(drawer).toHaveStyle({ transform: `translateX(440px)` })
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer
          isOpen
          title='Test Drawer'
          onClose={onClose}
          testIds={{ closeButton: 'test-close-btn' }}
        >
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    const closeButton = screen.getByTestId('test-close-btn')
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn()
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer
          isOpen
          title='Test Drawer'
          onClose={onClose}
          testIds={{ backdrop: 'test-backdrop' }}
        >
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    const backdrop = screen.getByTestId('test-backdrop')
    fireEvent.click(backdrop)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn()
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={onClose}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders footer by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={vi.fn()}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    expect(screen.getByText('Išvalyti')).toBeInTheDocument()
    expect(screen.getByText('Rodyti paslaugas')).toBeInTheDocument()
  })

  it('does not render footer when showFooter is false', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={vi.fn()} showFooter={false}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    expect(screen.queryByText('Išvalyti')).not.toBeInTheDocument()
    expect(screen.queryByText('Rodyti paslaugas')).not.toBeInTheDocument()
  })

  it('has proper ARIA attributes', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={vi.fn()}>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('renders with custom className', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <Drawer isOpen title='Test Drawer' onClose={vi.fn()} className='custom-drawer'>
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    const drawer = container.querySelector('.custom-drawer')
    expect(drawer).toBeInTheDocument()
  })

  it('renders with testIds', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Drawer
          isOpen
          title='Test Drawer'
          onClose={vi.fn()}
          testIds={{
            root: 'test-drawer-root',
            header: 'test-drawer-header',
            body: 'test-drawer-body',
            footer: 'test-drawer-footer',
            closeButton: 'test-drawer-close',
            backdrop: 'test-drawer-backdrop',
          }}
        >
          Test content
        </Drawer>
      </I18nextProvider>,
    )

    expect(screen.getByTestId('test-drawer-root')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-header')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-body')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-footer')).toBeInTheDocument()
    expect(screen.getByTestId('test-drawer-backdrop')).toBeInTheDocument()
  })
})
