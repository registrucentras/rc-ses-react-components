import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import RcSesFooter from '.'

const renderFooter = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesFooter', () => {
  test('renders footer text', () => {
    renderFooter(<RcSesFooter text='Footer text' />)

    expect(screen.getByText('Footer text')).toBeInTheDocument()
  })

  // The footer sits on grey[900], so if the text colour is ever dropped it turns
  // black on near black and the footer reads as an empty band. That is how it
  // shipped in 2.0.0-rc.1: MUI 9 takes `color` only as a palette key, so a raw
  // value handed to it is discarded. The visual suite does not catch this - the
  // text is ~6.5k pixels of a 921k full page shot, under the 1% diff budget.
  test('renders the text in grey[200] rather than inheriting', () => {
    renderFooter(<RcSesFooter text='Footer text' />)

    expect(window.getComputedStyle(screen.getByText('Footer text')).color).toBe(
      'rgb(220, 224, 229)',
    )
  })
})
