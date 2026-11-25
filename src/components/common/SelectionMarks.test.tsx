import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import SimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'
import theme from '@/theme/light'

import CheckboxMark from './CheckboxMark'
import RadioMark from './RadioMark'

describe('selection marks', () => {
  it('renders decorative marks without inputs, labels or focusable elements', () => {
    const { container } = render(
      <>
        <CheckboxMark />
        <RadioMark />
      </>,
    )
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2)
    expect(container.querySelector('input, button, [tabindex]')).toBeNull()
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
    expect(container.textContent).toBe('')
  })

  it('distinguishes checked and mixed glyphs from an empty box', () => {
    const { container, rerender } = render(<CheckboxMark />)
    expect(container.querySelector('svg')).toBeNull()
    rerender(<CheckboxMark type='checked' />)
    const checkPath = container.querySelector('path')?.getAttribute('d')
    expect(checkPath).toBeTruthy()
    rerender(<CheckboxMark type='indeterminate' />)
    expect(container.querySelector('path')?.getAttribute('d')).not.toBe(checkPath)
  })

  it('adds a visible radio dot only for the selected state', () => {
    const { container, rerender } = render(<RadioMark />)
    expect(container.querySelector('[data-rc-radio-dot]')).toBeNull()
    rerender(<RadioMark type='selected' disabled />)
    expect(container.querySelector('[data-rc-radio-dot]')).not.toBeNull()
    expect(container.querySelector('[data-rc-checkbox-mark]')).toBeNull()
  })

  it('native checkbox selection and mixed state use the shared marks', () => {
    const { container, rerender } = render(
      <ThemeProvider theme={theme}>
        <Checkbox slotProps={{ input: { 'aria-label': 'Select item' } }} />
      </ThemeProvider>,
    )
    const input = screen.getByRole('checkbox', { name: 'Select item' })
    fireEvent.click(input)
    expect(input).toBeChecked()
    expect(container.querySelector('[data-rc-checkbox-mark="checked"]')).not.toBeNull()
    rerender(
      <ThemeProvider theme={theme}>
        <Checkbox indeterminate />
      </ThemeProvider>,
    )
    expect(
      container.querySelector('[data-rc-checkbox-mark="indeterminate"]'),
    ).not.toBeNull()
  })

  it('native radio selection switches independent radio marks', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <RadioGroup defaultValue='a'>
          <FormControlLabel control={<Radio />} value='a' label='A' />
          <FormControlLabel control={<Radio />} value='b' label='B' />
        </RadioGroup>
      </ThemeProvider>,
    )
    fireEvent.click(screen.getByRole('radio', { name: 'B' }))
    expect(screen.getByRole('radio', { name: 'B' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'A' })).not.toBeChecked()
    expect(container.querySelectorAll('[data-rc-radio-mark="selected"]')).toHaveLength(1)
  })

  it('preserves loading placeholders and caller-supplied checkbox icons', () => {
    const { container, rerender } = render(<SimpleCheckbox loading indeterminate />)
    expect(container.querySelector('.MuiSkeleton-root')).not.toBeNull()
    expect(container.querySelector('[data-rc-checkbox-mark]')).toBeNull()
    rerender(<SimpleCheckbox icon={<span data-testid='custom-icon' />} />)
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })
})
