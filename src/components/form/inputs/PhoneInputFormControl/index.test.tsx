import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesPhoneInputFormControl from '.'

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))

const TestComponent = () => {
  const { control } = useForm({
    defaultValues: {
      phone: '',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <RcSesPhoneInputFormControl
        control={control}
        errors={undefined}
        label='Phone'
        name='phone'
      />
    </ThemeProvider>
  )
}

describe('RcSesPhoneInputFormControl', () => {
  test('default country is LT and mask is ### ## ###', () => {
    render(<TestComponent />)

    const input = screen.getByRole('textbox')
    expect(input.getAttribute('placeholder')).toBe('### ## ###')
    expect(screen.getByText('+370')).toBeInTheDocument()
  })

  /**
   * The country dropdown renders through a virtualised react-window list, which
   * no other check reaches: it only mounts on click, so the visual baselines
   * (static screenshots) never see it. Added ahead of the react-window 1 -> 2
   * migration so that rewrite is verifiable.
   */
  describe('country dropdown', () => {
    const openDropdown = () => {
      fireEvent.click(screen.getByRole('button', { name: 'aria.countrySelectorLabel' }))
    }

    test('renders the full country list when opened', () => {
      render(<TestComponent />)
      openDropdown()

      // Every country renders rather than a virtualised window: the list's height
      // is set to rowCount * rowHeight, so react-window considers all rows
      // visible. Pinned as-is to keep the react-window 2 migration comparable.
      expect(screen.getAllByRole('option').length).toBeGreaterThan(200)
    })

    test('shows country name and dial code on a row', () => {
      render(<TestComponent />)
      openDropdown()

      expect(screen.getByText('Lithuania')).toBeInTheDocument()
      expect(screen.getAllByText('+370').length).toBeGreaterThan(0)
    })

    test('filters rows by the search input', () => {
      render(<TestComponent />)
      openDropdown()

      const search = screen.getByPlaceholderText('search')
      fireEvent.change(search, { target: { value: 'LATV' } })

      expect(screen.getByText('Latvia')).toBeInTheDocument()
      expect(screen.queryByText('Lithuania')).not.toBeInTheDocument()
    })

    test('selecting a country updates the dial code and mask', () => {
      render(<TestComponent />)
      openDropdown()

      fireEvent.click(screen.getByText('Latvia'))

      expect(screen.getByText('+371')).toBeInTheDocument()
      expect(screen.queryByText('+370')).not.toBeInTheDocument()
    })
  })
})
