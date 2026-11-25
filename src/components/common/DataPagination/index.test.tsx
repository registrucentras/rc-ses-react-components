import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import DataPagination from '.'
import ExpandButton from './components/ExpandButton'

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

beforeEach(async () => {
  await i18n.changeLanguage('lt')
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

    expect(screen.getByRole('button', { name: 'Eiti į 1 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('button', { name: 'Eiti į 2 puslapį' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Eiti į 3 puslapį' })).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Eiti į 4 puslapį' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Eiti į 10 puslapį' })).toBeInTheDocument()
  })

  test('shows five initial numeric buttons and the last page on desktop', () => {
    mockedUseMediaQuery.mockReturnValue(false)

    renderPagination(<DataPagination count={10} defaultPage={1} />)

    expect(screen.getByRole('button', { name: 'Eiti į 1 puslapį' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Eiti į 5 puslapį' })).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Eiti į 6 puslapį' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Eiti į 10 puslapį' })).toBeInTheDocument()
  })

  test.each([0, 1, 10])(
    'hides record pagination for %i records on desktop',
    (totalItems) => {
      renderPagination(<DataPagination totalItems={totalItems} />)
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    },
  )

  test('ceil-divides records and exposes exactly one current page and disabled semantics', () => {
    renderPagination(<DataPagination totalItems={23} defaultPage={3} />)
    expect(screen.getByRole('navigation', { name: 'Puslapiavimas' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Eiti į 3 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(document.querySelectorAll('[aria-current="page"]')).toHaveLength(1)
    expect(
      screen.queryByRole('button', { name: 'Eiti į 4 puslapį' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Kitas puslapis' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Kitas puslapis' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  test('uses five records per mobile page and supports independent service overrides', () => {
    mockedUseMediaQuery.mockReturnValue(true)
    const view = renderPagination(<DataPagination totalItems={11} desktopPageSize={3} />)
    expect(screen.getByRole('button', { name: 'Eiti į 3 puslapį' })).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Eiti į 4 puslapį' }),
    ).not.toBeInTheDocument()
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={11} desktopPageSize={3} mobilePageSize={2} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 6 puslapį' })).toBeInTheDocument()
  })

  test('preserves the first visible record across controlled breakpoint changes and reports size/page once', () => {
    const onChange = vi.fn()
    const onPageSizeChange = vi.fn()
    const renderView = (page: number) => (
      <ThemeProvider theme={theme}>
        <DataPagination
          totalItems={100}
          page={page}
          onChange={onChange}
          onPageSizeChange={onPageSizeChange}
        />
      </ThemeProvider>
    )
    const view = render(renderView(4))
    mockedUseMediaQuery.mockReturnValue(true)
    view.rerender(renderView(4))
    expect(screen.getByRole('button', { name: 'Eiti į 7 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(onChange).toHaveBeenCalledExactlyOnceWith(7)
    expect(onPageSizeChange).toHaveBeenCalledExactlyOnceWith(5, 7)
    view.rerender(renderView(7))
    expect(onChange).toHaveBeenCalledTimes(1)
    mockedUseMediaQuery.mockReturnValue(false)
    view.rerender(renderView(7))
    expect(screen.getByRole('button', { name: 'Eiti į 4 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(onPageSizeChange).toHaveBeenLastCalledWith(10, 4)
    expect(onChange).toHaveBeenLastCalledWith(4)
  })

  test('remaps an uncontrolled page when service sizes change and clamps a reduced total', () => {
    const view = renderPagination(
      <DataPagination totalItems={100} desktopPageSize={4} defaultPage={6} />,
    )
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={100} desktopPageSize={10} defaultPage={6} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 3 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={12} desktopPageSize={10} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 2 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('legacy page counts do not remap on resize', () => {
    const onChange = vi.fn()
    const view = renderPagination(
      <DataPagination count={10} defaultPage={4} onChange={onChange} />,
    )
    mockedUseMediaQuery.mockReturnValue(true)
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination count={10} defaultPage={4} onChange={onChange} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 4 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(onChange).not.toHaveBeenCalled()
  })

  test('round-trip resizing retains a record whose index is not aligned to the larger page size', () => {
    mockedUseMediaQuery.mockReturnValue(true)
    const view = renderPagination(<DataPagination totalItems={100} defaultPage={4} />)
    mockedUseMediaQuery.mockReturnValue(false)
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={100} defaultPage={4} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 2 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    mockedUseMediaQuery.mockReturnValue(true)
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={100} defaultPage={4} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 4 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('desktop ellipses retain first, last and two neighbouring pages', () => {
    renderPagination(<DataPagination count={20} defaultPage={10} />)
    expect(
      screen
        .getAllByRole('button', { name: /Eiti į/ })
        .map((button) => button.textContent),
    ).toEqual(['1', '8', '9', '10', '11', '12', '20'])
    expect(document.querySelectorAll('.MuiPaginationItem-ellipsis')).toHaveLength(2)
  })

  test('loading only follows the network flag and restores the selected page', () => {
    const view = renderPagination(
      <DataPagination totalItems={100} defaultPage={4} isLoading />,
    )
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByRole('status', { name: 'Įkeliami įrašai' })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    view.rerender(
      <ThemeProvider theme={theme}>
        <DataPagination totalItems={100} defaultPage={4} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 4 puslapį' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('invalid sizes fall back to defaults and clicking the active page does not emit', () => {
    const onChange = vi.fn()
    renderPagination(
      <DataPagination
        totalItems={11}
        desktopPageSize={0}
        mobilePageSize={NaN}
        onChange={onChange}
      />,
    )
    expect(screen.getByRole('button', { name: 'Eiti į 2 puslapį' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Eiti į 1 puslapį' }))
    expect(onChange).not.toHaveBeenCalled()
  })

  test('ExpandButton is a labelled, controlled alternative with expanded semantics', () => {
    mockedUseMediaQuery.mockReturnValue(true)
    const onClick = vi.fn()
    const view = renderPagination(
      <ExpandButton expanded={false} aria-controls='records' onClick={onClick} />,
    )
    const button = screen.getByRole('button', { name: 'Rodyti daugiau' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'records')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
    view.rerender(
      <ThemeProvider theme={theme}>
        <ExpandButton expanded aria-controls='records' />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: 'Rodyti mažiau' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
