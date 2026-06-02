import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import i18n from '@/i18n/i18n'

import RcSesLoader from './index'

const getDefaultLoaderLabel = () => i18n.t('components.Loader.loading', { ns: 'common' })

describe('RcSesLoader', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('lt')
  })

  it('should render loader with default label', () => {
    render(<RcSesLoader />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(getDefaultLoaderLabel())).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it.each([
    ['small', '24px'],
    ['medium', '40px'],
    ['large', '64px'],
  ] as const)('should render the proper loader size', (size, expectedSize) => {
    render(<RcSesLoader size={size} />)

    expect(screen.getByRole('progressbar')).toHaveStyle({
      height: expectedSize,
      width: expectedSize,
    })
  })

  it('should render custom label', () => {
    render(<RcSesLoader label='Duomenys kraunami' />)

    expect(screen.getByText('Duomenys kraunami')).toBeInTheDocument()
  })

  it('should hide label and set aria-label when showLabel is false', () => {
    render(<RcSesLoader showLabel={false} />)

    expect(screen.queryByText(getDefaultLoaderLabel())).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      getDefaultLoaderLabel(),
    )
  })

  it('should use custom label for aria-label when label is string and showLabel is false', () => {
    render(<RcSesLoader label='Duomenys kraunami' showLabel={false} />)

    expect(screen.queryByText('Duomenys kraunami')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Duomenys kraunami')
  })
})
