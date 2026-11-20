import { InputAdornment, ThemeProvider } from '@mui/material'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesTextField from './TextField'

test('Text has a connected label, native required semantics and no implicit icon or star', () => {
  render(<RcSesTextField label='Name' required />)
  const input = screen.getByRole('textbox', { name: 'Name' })
  expect(input).toBeRequired()
  expect(document.querySelector('.MuiFormLabel-asterisk')).not.toBeInTheDocument()
  expect(document.querySelector('.MuiInputAdornment-root')).not.toBeInTheDocument()
})

test('error replaces helper text and preserves extra description IDs', () => {
  const { rerender } = render(
    <RcSesTextField
      id='name'
      label='Name'
      helperText='Help'
      aria-describedby='external'
    />,
  )
  expect(screen.getByRole('textbox')).toHaveAttribute(
    'aria-describedby',
    'external name-description',
  )
  rerender(
    <RcSesTextField
      id='name'
      label='Name'
      helperText='Help'
      errorText='Required'
      aria-describedby='external'
    />,
  )
  const input = screen.getByRole('textbox')
  expect(input).toHaveAttribute('aria-invalid', 'true')
  expect(screen.queryByText('Help')).not.toBeInTheDocument()
  expect(screen.getByText('Required')).toHaveAttribute('id', 'name-errors')
  expect(input).toHaveAttribute('aria-describedby', 'external name-errors')
})

test('optional marker is visual text, required never renders a star', () => {
  const { rerender } = render(<RcSesTextField label='Name' />)
  expect(screen.getByText(/neprivaloma|optional/)).toBeVisible()
  expect(screen.getByRole('textbox')).not.toBeRequired()
  rerender(<RcSesTextField label='Name' optionalLabel={null} />)
  expect(screen.queryByText(/neprivaloma|optional/)).not.toBeInTheDocument()
})

test('Search clears a native uncontrolled field and delivers the normal change event', () => {
  const onChange = vi.fn()
  render(
    <RcSesTextField
      preset='search'
      label='Search'
      required
      defaultValue='Query'
      onChange={onChange}
    />,
  )
  const input = screen.getByRole('searchbox')
  fireEvent.click(screen.getByRole('button', { name: /Išvalyti|Clear/ }))
  expect(input).toHaveValue('')
  expect(onChange).toHaveBeenCalledOnce()
  expect(onChange.mock.calls[0][0].target).toBe(input)
  expect(input).toHaveFocus()
  expect(screen.queryByRole('button', { name: /Išvalyti|Clear/ })).not.toBeInTheDocument()
})

test('Search clearing works with controlled parent values', () => {
  function Controlled() {
    const [value, setValue] = useState('Query')
    return (
      <RcSesTextField
        preset='search'
        label='Search'
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    )
  }
  render(<Controlled />)
  fireEvent.click(screen.getByRole('button', { name: /Išvalyti|Clear/ }))
  expect(screen.getByRole('searchbox')).toHaveValue('')
})

test('Search clearing updates react-hook-form and no nested form is rendered', () => {
  function Form() {
    const { register, watch, reset } = useForm({ defaultValues: { query: 'Query' } })
    return (
      <form>
        <RcSesTextField {...register('query')} preset='search' label='Search' />
        <output>{watch('query') || 'Empty'}</output>
        <button type='button' onClick={() => reset({ query: 'Reset query' })}>
          Reset
        </button>
      </form>
    )
  }
  render(<Form />)
  expect(document.querySelectorAll('form')).toHaveLength(1)
  fireEvent.click(screen.getByRole('button', { name: /Išvalyti|Clear/ }))
  expect(screen.getByText('Empty')).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
  expect(screen.getByRole('searchbox')).toHaveValue('Reset query')
  expect(screen.getByRole('button', { name: /Išvalyti|Clear/ })).toBeVisible()
})

test('uncontrolled native reset also resets Clear visibility', async () => {
  render(
    <form data-testid='form'>
      <RcSesTextField preset='search' label='Search' defaultValue='' />
    </form>,
  )
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Typed' } })
  expect(screen.getByRole('button', { name: /Išvalyti|Clear/ })).toBeVisible()
  act(() => screen.getByTestId<HTMLFormElement>('form').reset())
  await waitFor(() =>
    expect(
      screen.queryByRole('button', { name: /Išvalyti|Clear/ }),
    ).not.toBeInTheDocument(),
  )
  expect(screen.getByRole('searchbox')).toHaveValue('')
})

test.each(['readOnly', 'disabled'] as const)('%s prevents Search clearing', (state) => {
  render(
    <RcSesTextField
      preset='search'
      label='Search'
      defaultValue='Query'
      {...{ [state]: true }}
    />,
  )
  const input = screen.getByRole('searchbox')
  expect(screen.getByRole('button', { name: /Išvalyti|Clear/ })).toBeDisabled()
  expect(input).toHaveValue('Query')
  if (state === 'readOnly') {
    expect(input).toHaveAttribute('readonly')
    expect(input).not.toBeDisabled()
    act(() => input.focus())
    expect(input).toHaveFocus()
  } else expect(input).toBeDisabled()
})

test('Password toggles presentation without changing value or submitting', () => {
  const submit = vi.fn((event) => event.preventDefault())
  render(
    <form onSubmit={submit}>
      <RcSesTextField preset='password' label='Password' required defaultValue='Secret' />
    </form>,
  )
  const input = screen.getByLabelText('Password')
  const toggle = screen.getByRole('button', { name: /slaptažodį|password/ })
  expect(input).toHaveAttribute('type', 'password')
  fireEvent.click(toggle)
  expect(input).toHaveAttribute('type', 'text')
  expect(toggle).toHaveAttribute('aria-pressed', 'true')
  expect(input).toHaveValue('Secret')
  expect(submit).not.toHaveBeenCalled()
  fireEvent.click(toggle)
  expect(input).toHaveAttribute('type', 'password')
})

test('Phone and Number preserve native data, prefixes and non-interactive units', () => {
  render(
    <>
      <RcSesTextField preset='phone' label='Phone' defaultValue='600 00000' />
      <RcSesTextField preset='number' label='Amount' suffix='€' defaultValue='12,00' />
    </>,
  )
  expect(screen.getByRole('textbox', { name: /Phone/ })).toHaveAttribute('type', 'tel')
  const amount = screen.getByRole('textbox', { name: /Amount/ })
  expect(amount).toHaveAttribute('inputmode', 'decimal')
  expect(amount).toHaveValue('12,00')
  expect(screen.getByText('+370')).toBeVisible()
  expect(screen.getByText('€').closest('button')).toBeNull()
})

test('MUI slot callbacks, additional descriptions and native refs are preserved', () => {
  const ref = createRef<HTMLInputElement>()
  render(
    <ThemeProvider theme={theme}>
      <RcSesTextField
        label='Custom'
        ref={ref}
        helperText='Help'
        id='custom'
        slotProps={{
          input: () => ({
            startAdornment: (
              <InputAdornment position='start'>Custom prefix</InputAdornment>
            ),
          }),
          htmlInput: () => ({ 'aria-describedby': 'additional', maxLength: 10 }),
        }}
      />
    </ThemeProvider>,
  )
  const input = screen.getByRole('textbox')
  expect(ref.current).toBe(input)
  expect(input).toHaveAttribute('maxlength', '10')
  expect(input).toHaveAttribute('aria-describedby', 'additional custom-description')
  expect(screen.getByText('Custom prefix')).toBeVisible()
})

test('existing nested field and wrapper APIs retain values, classes and sx targets', () => {
  render(
    <RcSesTextField
      label='Existing'
      slotProps={{
        field: { defaultValue: '123', className: 'field-custom', sx: { width: '300px' } },
        wrapper: {
          className: 'wrapper-custom',
          labelOnTop: false,
          description: 'Existing help',
        },
      }}
    />,
  )
  const input = screen.getByRole('textbox')
  expect(input).toHaveValue('123')
  const field = input.closest('.field-custom')
  expect(field).toHaveClass('MuiTextField-root')
  expect(field).toHaveStyle({ width: '300px' })
  expect(input.closest('.wrapper-custom')).toContainElement(
    screen.getByText('Existing help'),
  )
})

test('custom slots override presets, null can remove a preset adornment', () => {
  render(
    <RcSesTextField
      preset='search'
      label='Search'
      defaultValue='Query'
      leading={null}
      trailing={<span>Custom trailing</span>}
    />,
  )
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(screen.getByText('Custom trailing')).toBeVisible()
})

test('Loading is announced and does not falsely mark the field disabled', () => {
  render(<RcSesTextField label='Loading field' loading />)
  expect(screen.getByRole('textbox')).toHaveAttribute('aria-busy', 'true')
  expect(screen.getByRole('textbox')).not.toBeDisabled()
  expect(screen.getByRole('status')).toHaveAccessibleName(/Kraunama|Loading/)
})
