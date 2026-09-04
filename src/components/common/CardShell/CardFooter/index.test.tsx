import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import RcSesCardFooter from '.'

const renderCardFooter = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCardFooter', () => {
  test('renders its children', () => {
    renderCardFooter(
      <RcSesCardFooter>
        <button type='button'>Atšaukti</button>
        <button type='button'>Tęsti</button>
      </RcSesCardFooter>,
    )

    expect(screen.getByRole('button', { name: 'Atšaukti' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })

  test('defaults to pushing the first and last child apart', () => {
    renderCardFooter(
      <RcSesCardFooter testIds={{ root: 'footer' }}>
        <button type='button'>Tęsti</button>
      </RcSesCardFooter>,
    )

    expect(screen.getByTestId('footer')).toHaveStyle({
      justifyContent: 'space-between',
    })
  })

  test.each([
    ['start', 'flex-start'],
    ['between', 'space-between'],
    ['end', 'flex-end'],
  ] as const)('align="%s" maps to justify-content %s', (align, expected) => {
    renderCardFooter(
      <RcSesCardFooter align={align} testIds={{ root: 'footer' }}>
        <button type='button'>Tęsti</button>
      </RcSesCardFooter>,
    )

    expect(screen.getByTestId('footer')).toHaveStyle({ justifyContent: expected })
  })
})
