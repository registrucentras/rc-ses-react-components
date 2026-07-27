import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesInlineAlert from './index'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

const renderAlert = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesInlineAlert', () => {
  test('renders children', () => {
    renderAlert(<RcSesInlineAlert>Alert message</RcSesInlineAlert>)
    expect(screen.getByText('Alert message')).toBeInTheDocument()
  })

  describe('aria per variant', () => {
    const politeVariants = ['neutral', 'info', 'success'] as const
    const assertiveVariants = ['warning', 'error'] as const

    politeVariants.forEach((variant) => {
      test(`${variant} renders with role=status and aria-live=polite`, () => {
        renderAlert(<RcSesInlineAlert variant={variant}>msg</RcSesInlineAlert>)
        const alert = screen.getByRole('status')
        expect(alert).toHaveAttribute('aria-live', 'polite')
      })
    })

    assertiveVariants.forEach((variant) => {
      test(`${variant} renders with role=alert and aria-live=assertive`, () => {
        renderAlert(<RcSesInlineAlert variant={variant}>msg</RcSesInlineAlert>)
        const alert = screen.getByRole('alert')
        expect(alert).toHaveAttribute('aria-live', 'assertive')
      })
    })

    test('default neutral (role=status)', () => {
      renderAlert(<RcSesInlineAlert>msg</RcSesInlineAlert>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })
  })

  describe('icon', () => {
    test('is rendered and hidden from screen readers', () => {
      const { container } = renderAlert(<RcSesInlineAlert>msg</RcSesInlineAlert>)
      const icon = container.querySelector('svg[aria-hidden="true"]')
      expect(icon).toBeInTheDocument()
    })

    test('is not rendered when showIcon=false', () => {
      const { container } = renderAlert(
        <RcSesInlineAlert showIcon={false}>Message</RcSesInlineAlert>,
      )
      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })
  })

  describe('close button', () => {
    test('renders with translated aria-label and calls onClose', () => {
      const onClose = vi.fn()
      renderAlert(<RcSesInlineAlert onClose={onClose}>Message</RcSesInlineAlert>)

      const closeButton = screen.getByRole('button', { name: 'close' })
      fireEvent.click(closeButton)
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    test('is not rendered when showClose=false', () => {
      renderAlert(
        <RcSesInlineAlert showClose={false} onClose={vi.fn()}>
          msg
        </RcSesInlineAlert>,
      )
      expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument()
    })

    test('is not rendered with no onClose prop', () => {
      renderAlert(<RcSesInlineAlert>Message</RcSesInlineAlert>)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('action', () => {
    test('renders label and calls onActionClick', () => {
      const onActionClick = vi.fn()
      renderAlert(
        <RcSesInlineAlert actionLabel='Veiksmas' onActionClick={onActionClick}>
          Message
        </RcSesInlineAlert>,
      )

      const action = screen.getByRole('button', { name: 'Veiksmas' })
      fireEvent.click(action)
      expect(onActionClick).toHaveBeenCalledTimes(1)
    })

    test('is not rendered when showAction={false}', () => {
      renderAlert(
        <RcSesInlineAlert showAction={false} actionLabel='Veiksmas'>
          Message
        </RcSesInlineAlert>,
      )
      expect(screen.queryByRole('button', { name: 'Veiksmas' })).not.toBeInTheDocument()
    })
  })

  test('action comes before close in tab order', () => {
    renderAlert(
      <RcSesInlineAlert actionLabel='Veiksmas' onClose={vi.fn()}>
        Message
      </RcSesInlineAlert>,
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('Veiksmas')
    expect(buttons[1]).toHaveAttribute('aria-label', 'close')
  })
})
