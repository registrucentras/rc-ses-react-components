import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import RcSesLoadingSpinner from './index'

describe('RcSesLoadingSpinner', () => {
  it('should render a progress bar', () => {
    render(<RcSesLoadingSpinner />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
  })

  it('should render with default color inherit', () => {
    render(<RcSesLoadingSpinner />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveClass('MuiCircularProgress-colorInherit')
  })

  it('should render with custom color', () => {
    render(<RcSesLoadingSpinner color='primary' />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveClass('MuiCircularProgress-colorPrimary')
  })

  it('should render with custom size', () => {
    render(<RcSesLoadingSpinner size='small' />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveStyle({ width: '16px', height: '16px' })
  })

  it('should render with medium size by default', () => {
    render(<RcSesLoadingSpinner />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveStyle({ width: '20px', height: '20px' })
  })

  it('should support custom pixel size string', () => {
    render(<RcSesLoadingSpinner size='32px' />)

    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveStyle({ width: '32px', height: '32px' })
  })
})
