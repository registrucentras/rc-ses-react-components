import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import RcSesBadge from '.'

const getCloseAriaLabel = (label: string) =>
  i18n.t('components.RcSesBadge.aria.close', { label, ns: 'input' })

const renderBadge = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesBadge', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('lt')
  })

  it('renders the label', () => {
    renderBadge(<RcSesBadge label='Dabartinė' variant='success' size='regular' />)

    expect(screen.getByText('Dabartinė')).toBeInTheDocument()
  })

  it('sets the label as the title attribute for truncation tooltips', () => {
    renderBadge(
      <RcSesBadge label='Labai ilgas pavadinimas' variant='info' size='regular' />,
    )

    expect(screen.getByText('Labai ilgas pavadinimas')).toHaveAttribute(
      'title',
      'Labai ilgas pavadinimas',
    )
  })

  it.each([
    ['small', '1.625rem'],
    ['regular', '2.125rem'],
  ] as const)('renders the %s size', (size, expectedHeight) => {
    const { container } = renderBadge(
      <RcSesBadge label='Label' variant='neutral' size={size} />,
    )

    expect(container.firstChild).toHaveStyle({ height: expectedHeight })
  })

  it('shows the status icon by default', () => {
    const { container } = renderBadge(
      <RcSesBadge label='Label' variant='neutral' size='regular' />,
    )

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('hides the status icon when showIcon is false', () => {
    const { container } = renderBadge(
      <RcSesBadge label='Label' variant='neutral' size='regular' showIcon={false} />,
    )

    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('does not render a close button by default', () => {
    renderBadge(<RcSesBadge label='Label' variant='neutral' size='regular' />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('renders a close button with a translated aria-label when showClose is true', () => {
    renderBadge(
      <RcSesBadge
        label='Dabartinė'
        variant='neutral'
        size='regular'
        showClose
        onClose={() => {}}
      />,
    )

    expect(
      screen.getByRole('button', { name: getCloseAriaLabel('Dabartinė') }),
    ).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn()
    renderBadge(
      <RcSesBadge
        label='Dabartinė'
        variant='neutral'
        size='regular'
        showClose
        onClose={handleClose}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: getCloseAriaLabel('Dabartinė') }))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('renders in English when the language is changed', async () => {
    await i18n.changeLanguage('en')
    renderBadge(
      <RcSesBadge
        label='Current'
        variant='neutral'
        size='regular'
        showClose
        onClose={() => {}}
      />,
    )

    expect(
      screen.getByRole('button', { name: getCloseAriaLabel('Current') }),
    ).toBeInTheDocument()
  })

  it('does not throw when the close button is clicked without an onClose handler', () => {
    renderBadge(<RcSesBadge label='Label' variant='neutral' size='regular' showClose />)

    expect(() =>
      fireEvent.click(screen.getByRole('button', { name: getCloseAriaLabel('Label') })),
    ).not.toThrow()
  })
})
