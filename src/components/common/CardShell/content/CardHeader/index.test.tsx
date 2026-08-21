import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'

import RcSesCardHeader from '.'

const renderCardHeader = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCardHeader', () => {
  test('renders title and description', () => {
    renderCardHeader(
      <RcSesCardHeader title='Test Title' description='Test description' />,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  test('uses default heading level 3 when not provided', () => {
    renderCardHeader(<RcSesCardHeader title='Test Title' />)

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  test('respects custom headingLevel prop', () => {
    renderCardHeader(<RcSesCardHeader title='Test Title' headingLevel={2} />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Test Title' }),
    ).toBeInTheDocument()
  })

  test('omits description when not provided', () => {
    renderCardHeader(
      <RcSesCardHeader title='Test Title' testIds={{ description: 'description' }} />,
    )

    expect(screen.queryByTestId('description')).not.toBeInTheDocument()
  })

  test('applies testIds correctly', () => {
    renderCardHeader(
      <RcSesCardHeader
        description='Test description'
        testIds={{
          root: 'header-root',
          heading: 'header-heading',
          description: 'header-desc',
        }}
        title='Test Title'
      />,
    )

    expect(screen.getByTestId('header-root')).toBeInTheDocument()
    expect(screen.getByTestId('header-heading')).toBeInTheDocument()
    expect(screen.getByTestId('header-desc')).toBeInTheDocument()
  })

  test('handles ReactNode as title', () => {
    renderCardHeader(
      <RcSesCardHeader
        title={
          <span>
            Complex <strong>Title</strong>
          </span>
        }
      />,
    )

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getByText('Complex')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  test('handles ReactNode as description', () => {
    renderCardHeader(
      <RcSesCardHeader
        description={
          <span>
            Description with <em>emphasis</em>
          </span>
        }
        title='Test Title'
      />,
    )

    expect(screen.getByText('Description with')).toBeInTheDocument()
    expect(screen.getByText('emphasis')).toBeInTheDocument()
  })

  test('heading levels 2 through 6 render correctly', () => {
    const levels = [2, 3, 4, 5, 6] as const

    levels.forEach((level) => {
      const { unmount } = renderCardHeader(
        <RcSesCardHeader headingLevel={level} title={`Level ${level} Title`} />,
      )

      expect(
        screen.getByRole('heading', { level, name: `Level ${level} Title` }),
      ).toBeInTheDocument()
      unmount()
    })
  })
})
