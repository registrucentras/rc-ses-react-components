import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import RcSesFooter from './index'

const renderFooter = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesFooter', () => {
  test('renders footer text', () => {
    renderFooter(<RcSesFooter text='Footer text' />)

    expect(screen.getByText('Footer text')).toBeInTheDocument()
  })
})
