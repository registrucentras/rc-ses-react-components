import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '../../../../theme/light'
import RcSesCategoryTile from './CategoryTile'

const renderTile = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCategoryTile', () => {
  test('renders heading with link as the accessible name', () => {
    renderTile(
      <RcSesCategoryTile
        title='Paslaugos sutartiniems klientams'
        description='Peržiūrėkite pagrindinius duomenis be užsakymo.'
        href='/kategorija'
      />,
    )

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Paslaugos sutartiniems klientams',
      }),
    ).toBeInTheDocument()

    const link = screen.getByRole('link', {
      name: 'Paslaugos sutartiniems klientams',
    })
    expect(link).toHaveAttribute('href', '/kategorija')
    expect(
      screen.getByText('Peržiūrėkite pagrindinius duomenis be užsakymo.'),
    ).toBeInTheDocument()
  })

  test('icon and arrow are decorative (aria-hidden)', () => {
    renderTile(
      <RcSesCategoryTile
        title='Kategorija'
        href='/kategorija'
        icon={<svg data-testid='tile-icon' />}
        testIds={{ icon: 'tile-icon-wrap', arrow: 'tile-arrow' }}
      />,
    )

    expect(screen.getByTestId('tile-icon-wrap')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('tile-arrow')).toHaveAttribute('aria-hidden', 'true')
  })

  test('supports custom heading level', () => {
    renderTile(<RcSesCategoryTile title='Kategorija' href='/k' headingLevel={2} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Kategorija' })).toBeInTheDocument()
  })
})
