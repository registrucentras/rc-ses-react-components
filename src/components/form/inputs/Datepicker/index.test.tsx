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

const rgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16)
  // eslint-disable-next-line no-bitwise
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`
}

const dayColour = (label: string) =>
  window.getComputedStyle(screen.getByRole('gridcell', { name: label })).color

describe('RcSesDatepicker calendar day colours', () => {
  // x-date-pickers 9 moved the disabled colour into a `variants` entry, which
  // the theme's descendant selector outranked - disabled days stopped looking
  // disabled. The visual suite cannot be relied on for this: the affected
  // glyphs are a small fraction of a full page screenshot.
  test('a selectable weekday uses the default day colour', () => {
    render(<Harness />)

    expect(dayColour('19')).toBe(rgb(palette.grey['900']))
  })

  test('a disabled weekday is greyed out', () => {
    render(<Harness />)

    expect(dayColour('21')).toBe(rgb(palette.grey['400']))
  })

  test('a disabled weekend day stays red, as in 1.x', () => {
    render(<Harness />)

    expect(dayColour('24')).toBe(rgb(palette.error['600']))
  })
})
