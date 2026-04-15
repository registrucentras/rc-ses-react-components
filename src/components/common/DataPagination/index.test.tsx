import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import DataPagination from './index'

const renderPagination = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

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
})
