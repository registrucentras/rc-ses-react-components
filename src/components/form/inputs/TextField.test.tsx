import { InputAdornment, ThemeProvider } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { vi } from 'vitest'

import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import theme from '@/theme/light'

import RcSesTextField from './TextField'

describe('RcSesTextField token migration', () => {
  test('input sx overrides token defaults for padding', () => {
    render(
      <ThemeProvider theme={theme}>
        <RcSesTextField
          label='Custom input'
          slotProps={{
            field: {
              slotProps: {
                input: {
                  sx: {
                    '& .MuiInputBase-input': { fontSize: '20px', padding: '4px 8px' },
                  },
                },
              },
            },
          }}
        />
      </ThemeProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveStyle({ padding: '4px 8px' })
  })

  test('input slot callbacks and sx arrays retain their overrides and props', () => {
    render(
      <ThemeProvider theme={theme}>
        <RcSesTextField
          label='Callback input'
          slotProps={{
            field: {
              slotProps: {
                input: (ownerState) => ({
                  readOnly: true,
                  sx: [
                    { '& .MuiInputBase-input': { fontSize: '18px' } },
                    (activeTheme) => ({
                      '& .MuiInputBase-input': {
                        fontSize: ownerState.disabled ? '16px' : '24px',
                        padding: activeTheme.spacing(1),
                      },
                    }),
                  ],
                }),
              },
            },
          }}
        />
      </ThemeProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
    expect(screen.getByRole('textbox')).toHaveStyle({ padding: '8px' })
  })

  test.each(['small', 'large'] as const)(
    'adornments preserve the %s spinner geometry',
    (size) => {
      render(
        <ThemeProvider theme={theme}>
          <RcSesLoadingSpinner size={size} />
          <RcSesTextField
            label='Loading input'
            slotProps={{
              field: {
                slotProps: {
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <RcSesLoadingSpinner size={size} />
                      </InputAdornment>
                    ),
                  },
                },
              },
            }}
          />
        </ThemeProvider>,
      )
      const [standalone, adorned] = screen.getAllByRole('progressbar')
      expect(adorned.style.width).toBe(standalone.style.width)
      const standaloneSvg = standalone.querySelector('svg')!
      const adornedSvg = adorned.querySelector('svg')!
      expect(getComputedStyle(adornedSvg).width).toBe(
        getComputedStyle(standaloneSvg).width,
      )
      expect(getComputedStyle(adornedSvg).height).toBe(
        getComputedStyle(standaloneSvg).height,
      )
    },
  )

  test('retains native change events and input ref', () => {
    const ref = createRef<HTMLInputElement>()
    const onChange = vi.fn()
    render(
      <ThemeProvider theme={theme}>
        <RcSesTextField label='Vardas' ref={ref} onChange={onChange} />
      </ThemeProvider>,
    )
    const input = screen.getByRole('textbox', { name: 'Vardas' })
    fireEvent.change(input, { target: { value: 'Jonas' } })
    expect(onChange.mock.calls[0][0].target.value).toBe('Jonas')
    expect(ref.current).toBe(input)
  })

  test('retains native defaultValue and form reset', () => {
    render(
      <form data-testid='form'>
        <RcSesTextField label='Vardas' slotProps={{ field: { defaultValue: 'Jonas' } }} />
      </form>,
    )
    const input = screen.getByRole('textbox')
    const form = screen.getByTestId<HTMLFormElement>('form')
    fireEvent.change(input, { target: { value: 'Petras' } })
    form.reset()
    expect(input).toHaveValue('Jonas')
  })

  test('retains required and disabled attributes', () => {
    render(<RcSesTextField label='Vardas' required disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(screen.getByRole('textbox')).toBeRequired()
  })

  test('retains multiline and wrapper error API', () => {
    render(
      <RcSesTextField
        label='Aprašymas'
        multiline
        errors={{ type: 'required', message: 'Įveskite aprašymą' }}
        slotProps={{
          field: { rows: 4 },
          wrapper: { labelOnTop: true, description: 'Pagalba' },
        }}
      />,
    )
    const input = screen.getByRole('textbox', { name: 'Aprašymas' })
    expect(input.tagName).toBe('TEXTAREA')
    expect(input).toHaveAttribute('rows', '4')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Įveskite aprašymą')).toBeVisible()
    expect(screen.getByText('Pagalba')).toBeVisible()
  })
})
