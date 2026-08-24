import { ThemeProvider } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'
import { describe, expect, test } from 'vitest'

import theme from '@/theme/light'
import palette from '@/theme/palette'

import RcSesDatepicker from '.'

// Pinned so the calendar does not follow the current date.
const REFERENCE = new Date(2026, 0, 15)
const MAX = new Date(2026, 0, 20)

function Harness() {
  const {
    control,
    formState: { errors },
  } = useForm<{ date: string | null }>({ defaultValues: { date: null } })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
        <RcSesDatepicker
          id='date'
          name='date'
          control={control}
          label='Data'
          errors={errors?.date}
          slotProps={{
            datepicker: { open: true, referenceDate: REFERENCE, maxDate: MAX },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

function SelectedHarness() {
  const {
    control,
    formState: { errors },
  } = useForm<{ date: string | null }>({
    defaultValues: { date: '2026-01-15T00:00:00.000Z' },
  })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
        <RcSesDatepicker
          id='date'
          name='date'
          control={control}
          label='Data'
          errors={errors?.date}
          slotProps={{ datepicker: { open: true, referenceDate: REFERENCE } }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

const rgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16)
  // eslint-disable-next-line no-bitwise
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`
}

const dayColour = (label: string) =>
  window.getComputedStyle(screen.getByRole('gridcell', { name: label })).color

describe('RcSesDatepicker calendar day colours', () => {
  // Pinned here rather than left to the visual suite: a colour-only change on a
  // few glyphs stays under its diff budget.
  test('a selectable weekday uses the default day colour', () => {
    render(<Harness />)

    expect(dayColour('19')).toBe(rgb(palette.grey['900']))
  })

  test('a disabled weekday is greyed out', () => {
    render(<Harness />)

    expect(dayColour('21')).toBe(rgb(palette.grey['400']))
  })

  // 1.x paints it white; v9 lost that to the theme's day colour.
  test('the selected day is white on the blue fill', () => {
    render(<SelectedHarness />)

    const selected = document.querySelector('.Mui-selected') as HTMLElement
    const cs = window.getComputedStyle(selected)

    expect(cs.backgroundColor).toBe(rgb(palette.primary['500']))
    expect(cs.color).toBe('rgb(255, 255, 255)')
  })

  test('a disabled weekend day stays red, as in 1.x', () => {
    render(<Harness />)

    expect(dayColour('24')).toBe(rgb(palette.error['600']))
  })
})

// The picker field is not a MUI OutlinedInput, so it needs its own overrides to
// match the other inputs.
describe('RcSesDatepicker field styling', () => {
  test('the field keeps the shared input radius and background', () => {
    render(<Harness />)

    const field = document.querySelector('.MuiPickersInputBase-root') as HTMLElement
    const cs = window.getComputedStyle(field)

    expect(cs.borderRadius).toBe('0.5rem')
    expect(cs.backgroundColor).toBe('rgb(255, 255, 255)')
  })

  test('the value text matches a plain input', () => {
    render(<Harness />)

    const sections = document.querySelector(
      '.MuiPickersInputBase-sectionsContainer',
    ) as HTMLElement
    const cs = window.getComputedStyle(sections)

    expect(cs.fontSize).toBe('0.9375rem')
    expect(cs.height).toBe('1.125rem')
    expect(cs.color).toBe(rgb(palette.grey['900']))
  })
})
