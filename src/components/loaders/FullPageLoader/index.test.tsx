import { ThemeProvider, alpha } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { beforeEach, describe, expect, it } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import RcSesFullPageLoader from './index'

const getDefaultLoaderLabel = () => i18n.t('components.Loader.loading', { ns: 'common' })

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesFullPageLoader', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('lt')
  })

  it('should render paper container in full page mode', () => {
    renderWithTheme(<RcSesFullPageLoader />)

    expect(screen.getByRole('status').closest('.MuiPaper-root')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveStyle({ height: '64px', width: '64px' })
  })

  it('should render light backdrop variant', () => {
    renderWithTheme(<RcSesFullPageLoader backdrop='light' />)

    const backdrop = document.querySelector('.MuiBackdrop-root') as HTMLElement

    expect(backdrop).toHaveStyle({
      backgroundColor: alpha(theme.palette.common.white, 0.72),
    })
  })

  it('should render dark backdrop variant', () => {
    renderWithTheme(<RcSesFullPageLoader backdrop='dark' />)

    const backdrop = document.querySelector('.MuiBackdrop-root') as HTMLElement

    expect(backdrop).toHaveStyle({
      backgroundColor: alpha(theme.palette.grey[900], 0.45),
    })
  })

  it('should prevent and restore background focus', () => {
    const backgroundButton = document.createElement('button')
    backgroundButton.textContent = 'Background action'
    document.body.appendChild(backgroundButton)
    backgroundButton.focus()

    const { unmount } = renderWithTheme(<RcSesFullPageLoader />)

    expect(backgroundButton).not.toHaveFocus()

    unmount()

    expect(backgroundButton).toHaveFocus()
    document.body.removeChild(backgroundButton)
  })

  it('should pass loader props to base loader', () => {
    renderWithTheme(<RcSesFullPageLoader label='Duomenys kraunami' showLabel={false} />)

    expect(screen.queryByText('Duomenys kraunami')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Duomenys kraunami')
  })

  it('should use translated aria-label when label is hidden', () => {
    renderWithTheme(<RcSesFullPageLoader showLabel={false} />)

    expect(screen.queryByText(getDefaultLoaderLabel())).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      getDefaultLoaderLabel(),
    )
  })
})
