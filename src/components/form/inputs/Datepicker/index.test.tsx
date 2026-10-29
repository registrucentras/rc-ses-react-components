import { ThemeProvider } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'
import { describe, expect, test } from 'vitest'

import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import theme from '@/theme/light'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import RcSesDatepicker from '.'

// Pinned so the calendar does not follow the current date.
const REFERENCE = new Date(2026, 0, 15)
const MAX = new Date(2026, 0, 20)

interface HarnessProps {
  /** Seeds the field, so a day renders as selected. */
  value?: string | null
  /** Bounds the calendar, so later days render as disabled. */
  maxDate?: Date
}

function Harness({ value = null, maxDate }: HarnessProps) {
  const {
    control,
    formState: { errors },
  } = useForm<{ date: string | null }>({ defaultValues: { date: value } })

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
            datepicker: { open: true, referenceDate: REFERENCE, maxDate },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

// JSDOM preserves var() references; resolved colours and live updates are tested in Playwright.
const dayColour = (label: string) =>
  window.getComputedStyle(screen.getByRole('gridcell', { name: label })).color

describe('RcSesDatepicker calendar day colours', () => {
  // Pinned here rather than left to the visual suite: a colour-only change on a
  // few glyphs stays under its diff budget.
  test('a selectable weekday uses the default day colour', () => {
    render(<Harness maxDate={MAX} />)

    expect(dayColour('19')).toBe(color['text-default'])
  })

  test('a disabled weekday is greyed out', () => {
    render(<Harness maxDate={MAX} />)

    expect(dayColour('21')).toBe(color['text-disabled'])
  })

  // 1.x paints it white; v9 lost that to the theme's day colour.
  test('the selected day is white on the blue fill', () => {
    render(<Harness value='2026-01-15T00:00:00.000Z' />)

    const selected = document.querySelector('.Mui-selected') as HTMLElement
    const cs = window.getComputedStyle(selected)

    expect(cs.backgroundColor).toBe(color['cyans-500'])
    expect(cs.color).toBe(color['text-inverse'])
  })

  test('a disabled weekend preserves the existing red distinction through a token', () => {
    render(<Harness maxDate={MAX} />)

    expect(dayColour('24')).toBe(color['red-600'])
  })
})

// The picker field is not a MUI OutlinedInput, so it needs its own overrides to
// match the other inputs.
describe('RcSesDatepicker field styling', () => {
  test('the field keeps the shared input radius and background', () => {
    render(<Harness />)

    const field = document.querySelector('.MuiPickersInputBase-root') as HTMLElement
    const cs = window.getComputedStyle(field)

    expect(cs.borderRadius).toBe(border['radius-input'])
    expect(cs.backgroundColor).toBe(color['surface-base'])
  })

  test('the value text matches a plain input', () => {
    render(<Harness />)

    const sections = document.querySelector(
      '.MuiPickersInputBase-sectionsContainer',
    ) as HTMLElement
    const cs = window.getComputedStyle(sections)

    expect(cs.fontSize).toBe(typography['font-size-body-regular'])
    expect(cs.lineHeight).toBe(typography['line-height-body-regular'])
    expect(cs.height).toBe(typography['line-height-body-regular'])
    expect(cs.color).toBe(color['text-default'])
  })
})
