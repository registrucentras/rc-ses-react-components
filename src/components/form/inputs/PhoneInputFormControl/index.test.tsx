import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesPhoneInputFormControl from './index'

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
})
