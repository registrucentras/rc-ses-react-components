import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import RcSesEmptyState from '.'

const content = { title: 'Nėra rezultatų', description: 'Pakeiskite paiešką' }

describe('EmptyState', () => {
  test('uses the requested heading hierarchy and associates the region', () => {
    render(<RcSesEmptyState {...content} headingLevel={3} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(content.title)
    expect(screen.getByRole('region', { name: content.title })).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
  })

  test('announces only warning/error when requested and clears stale announcements', async () => {
    const { rerender } = render(<RcSesEmptyState {...content} type='error' />)
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    rerender(<RcSesEmptyState {...content} type='error' announce />)
    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(
        `${content.title}. ${content.description}`,
      ),
    )
    rerender(<RcSesEmptyState {...content} type='info' announce />)
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
  })

  test('compact hides hints; showAction hides the duplicate action', () => {
    const onClick = vi.fn()
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <RcSesEmptyState
          {...content}
          size='compact'
          hint='Patarimas'
          action={{ label: 'Ieškoti', onClick }}
        />
      </ThemeProvider>,
    )
    expect(screen.queryByText('Patarimas')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Ieškoti' }))
    expect(onClick).toHaveBeenCalledOnce()
    rerender(
      <RcSesEmptyState
        {...content}
        showAction={false}
        action={{ label: 'Ieškoti', onClick }}
      />,
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
