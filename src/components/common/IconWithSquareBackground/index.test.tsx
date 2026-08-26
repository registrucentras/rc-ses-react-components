import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import theme from '@/theme/light'

import RcSesIconWithSquareBackground from './'

const renderTile = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesIconWithSquareBackground', () => {
  test('renders the provided icon inside the tile', () => {
    const { container } = renderTile(
      <RcSesIconWithSquareBackground Icon={InfoFillIcon} />,
    )

    expect(container.querySelector('.IconWithSquareBackground-root')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  test('defaults to the 44 size', () => {
    const { container } = renderTile(
      <RcSesIconWithSquareBackground Icon={InfoFillIcon} />,
    )

    const root = container.querySelector('.IconWithSquareBackground-root') as HTMLElement
    expect(root).toHaveStyle({ height: '2.75rem', width: '2.75rem' })
  })

  test('applies the 40 size tokens when size=40', () => {
    const { container } = renderTile(
      <RcSesIconWithSquareBackground Icon={InfoFillIcon} size={40} />,
    )

    const root = container.querySelector('.IconWithSquareBackground-root') as HTMLElement
    expect(root).toHaveStyle({ height: '2.5rem', width: '2.5rem' })
  })

  test.each(['solid', 'soft', 'muted'] as const)(
    'renders without crashing for the %s variant',
    (variant) => {
      const { container } = renderTile(
        <RcSesIconWithSquareBackground Icon={InfoFillIcon} variant={variant} />,
      )

      expect(
        container.querySelector('.IconWithSquareBackground-root'),
      ).toBeInTheDocument()
    },
  )
})
