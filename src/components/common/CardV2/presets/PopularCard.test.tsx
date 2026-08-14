import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '../../../../theme/light'
import RcSesPopularCard from './PopularCard'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesPopularCard', () => {
  test('renders title, order CTA and more link', () => {
    renderCard(
      <RcSesPopularCard
        title='Gyvenamosios vietos deklaravimas'
        orderHref='/uzsakyti'
        moreHref='/placiau'
      />,
    )

    expect(screen.getByText('Gyvenamosios vietos deklaravimas')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Užsakyti' })).toHaveAttribute(
      'href',
      '/uzsakyti',
    )
    expect(screen.getByRole('link', { name: 'Plačiau' })).toHaveAttribute(
      'href',
      '/placiau',
    )
  })

  test('supports click handlers and custom labels', () => {
    const onOrder = vi.fn()
    const onMore = vi.fn()

    renderCard(
      <RcSesPopularCard
        title='Paslauga'
        orderLabel='Pradėti'
        onOrderClick={onOrder}
        moreLabel='Daugiau'
        onMoreClick={onMore}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Pradėti' }))
    fireEvent.click(screen.getByRole('button', { name: 'Daugiau' }))
    expect(onOrder).toHaveBeenCalledTimes(1)
    expect(onMore).toHaveBeenCalledTimes(1)
  })

  test('omits footer when no actions provided', () => {
    renderCard(<RcSesPopularCard title='Paslauga' />)

    expect(screen.queryByText('Užsakyti')).not.toBeInTheDocument()
    expect(screen.queryByText('Plačiau')).not.toBeInTheDocument()
  })

  test('header is OFF - no heading element rendered', () => {
    renderCard(<RcSesPopularCard title='Paslauga' orderHref='/x' />)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
