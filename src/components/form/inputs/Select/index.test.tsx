import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import theme from '@/theme/light'

import RcSesSelect from '.'

type TestWrapperProps = {
  defaultValue?: string | null
}

const options = [
  {
    value: 'long-option',
    label: 'Juridiniu asmenu registro isplestinis pavadinimas su ilgu tekstu',
  },
  {
    value: 'short-option',
    label: 'Trumpas pasirinkimas',
  },
]

type UnregisterTestWrapperProps = {
  shouldUnregister?: boolean
}

const UnregisterTestWrapper = ({ shouldUnregister }: UnregisterTestWrapperProps) => {
  const { control, getValues } = useForm({
    defaultValues: { selection: 'short-option' as string | null },
  })
  const [mounted, setMounted] = useState(true)
  const [formValues, setFormValues] = useState('')

  const slotProps =
    shouldUnregister === undefined ? undefined : { controller: { shouldUnregister } }

  return (
    <ThemeProvider theme={theme}>
      {mounted && (
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          label='Pasirinkti'
          options={options}
          slotProps={slotProps}
        />
      )}

      <button type='button' onClick={() => setMounted(false)}>
        Hide
      </button>
      <button type='button' onClick={() => setFormValues(JSON.stringify(getValues()))}>
        Read
      </button>
      <div data-testid='form-values'>{formValues}</div>
    </ThemeProvider>
  )
}

const TestWrapper = ({ defaultValue = null }: TestWrapperProps) => {
  const { control } = useForm({
    defaultValues: {
      selection: defaultValue,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <RcSesSelect
        id='selection'
        name='selection'
        control={control}
        label='Pasirinkti'
        options={options}
      />
    </ThemeProvider>
  )
}

describe('RcSesSelect', () => {
  test('single select rodo pilna pasirinktos reiksmes label', () => {
    render(<TestWrapper defaultValue='long-option' />)

    expect(
      screen.getByText(
        'Juridiniu asmenu registro isplestinis pavadinimas su ilgu tekstu',
      ),
    ).toBeInTheDocument()
  })

  test('single select lieka pasirenkamas klaviatura kai niekas nepasirinkta', async () => {
    render(<TestWrapper />)

    const input = screen.getByRole('combobox')
    expect(input).not.toHaveAttribute('readonly')

    fireEvent.mouseDown(input)
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'Enter' })

    await waitFor(() => {
      expect(
        screen.getByText(
          'Juridiniu asmenu registro isplestinis pavadinimas su ilgu tekstu',
        ),
      ).toBeInTheDocument()
    })
  })

  test('single select siulo visas parinktis kai reiksme jau pasirinkta', async () => {
    render(<TestWrapper defaultValue='long-option' />)

    fireEvent.mouseDown(screen.getByRole('combobox'))

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(options.length)
    })
  })

  test('single select leidzia pakeisti jau pasirinkta reiksme', async () => {
    render(<TestWrapper defaultValue='long-option' />)

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(await screen.findByRole('option', { name: 'Trumpas pasirinkimas' }))

    await waitFor(() => {
      expect(
        screen.getByText('Trumpas pasirinkimas', { selector: 'div' }),
      ).toBeInTheDocument()
    })
  })

  test('single select neleidzia rasti kai reiksme jau pasirinkta', () => {
    render(<TestWrapper defaultValue='long-option' />)

    expect(screen.getByRole('combobox')).toHaveAttribute('readonly')
  })

  test('drops the value from the form by default when the field unmounts', () => {
    render(<UnregisterTestWrapper />)

    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Read' }))

    expect(screen.getByTestId('form-values')).not.toHaveTextContent('short-option')
  })

  test('keeps the value when slotProps.controller turns shouldUnregister off', () => {
    render(<UnregisterTestWrapper shouldUnregister={false} />)

    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Read' }))

    expect(screen.getByTestId('form-values')).toHaveTextContent('short-option')
  })
})
