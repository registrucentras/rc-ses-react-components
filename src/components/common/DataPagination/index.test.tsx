import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import DataPagination from './index'

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material')

  return {
    ...actual,
    useMediaQuery: vi.fn(() => false),
  }
})

const renderPagination = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const mockedUseMediaQuery = vi.mocked(useMediaQuery)

beforeEach(() => {
  mockedUseMediaQuery.mockReturnValue(false)
})

describe('DataPagination', () => {
  test('renders labels and disables previous button on first page', () => {
    renderPagination(
      <DataPagination count={5} prevLabel='Previous page' nextLabel='Next page' />,
    )

    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeEnabled()
  })

  test('updates internal page and calls onChange in uncontrolled mode', () => {
    const onChange = vi.fn()

    renderPagination(
      <DataPagination
        count={3}
        defaultPage={1}
        onChange={onChange}
        prevLabel='Previous page'
        nextLabel='Next page'
      />,
    )

    const nextButton = screen.getByRole('button', { name: 'Next page' })

    fireEvent.click(nextButton)
    fireEvent.click(nextButton)

    expect(onChange).toHaveBeenNthCalledWith(1, 2)
    expect(onChange).toHaveBeenNthCalledWith(2, 3)
    expect(nextButton).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeEnabled()
  })

  test('does not call onChange when trying to go before page 1', () => {
    const onChange = vi.fn()

    renderPagination(
      <DataPagination
        count={4}
        defaultPage={1}
        onChange={onChange}
        prevLabel='Previous page'
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))

    expect(onChange).not.toHaveBeenCalled()
  })

  test('uses controlled page value and only emits next page in callback', () => {
    const onChange = vi.fn()

    renderPagination(
      <DataPagination
        count={5}
        page={1}
        onChange={onChange}
        prevLabel='Previous page'
        nextLabel='Next page'
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))

    expect(onChange).toHaveBeenCalledWith(2)
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  test('shows 1 2 3 ... x page buttons on mobile', () => {
    mockedUseMediaQuery.mockReturnValue(true)

    renderPagination(<DataPagination count={10} defaultPage={1} />)

    expect(screen.getByRole('button', { name: 'page 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 3' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Go to page 4' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 10' })).toBeInTheDocument()
  })

  test('shows 1 2 3 4 ... x page buttons on desktop', () => {
    mockedUseMediaQuery.mockReturnValue(false)

    renderPagination(<DataPagination count={10} defaultPage={1} />)

    expect(screen.getByRole('button', { name: 'page 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to page 10' })).toBeInTheDocument()
  })
})
