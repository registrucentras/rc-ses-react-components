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

const groupedOptions = [
  { value: 'rc', label: 'Registrų centras', group: 'Nekilnojamasis turtas' },
  { value: 'vtpsi', label: 'VTPSI', group: 'Nekilnojamasis turtas' },
  { value: 'regitra', label: 'Regitra', group: 'Transportas' },
]

type GroupedFormModel = {
  providers: string[]
}

type GroupedMultiTestWrapperProps = {
  defaultValue?: string[]
  dropdownSearch?: boolean
}

const GroupedMultiTestWrapper = ({
  defaultValue = [],
  dropdownSearch = false,
}: GroupedMultiTestWrapperProps) => {
  const { control, getValues } = useForm<GroupedFormModel>({
    defaultValues: { providers: defaultValue },
  })
  const [formValues, setFormValues] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <RcSesSelect
        id='providers'
        name='providers'
        control={control}
        label='Teikėjai'
        multiple
        dropdownSearch={dropdownSearch}
        selectAll
        options={groupedOptions}
        slotProps={{
          field: {
            groupBy: (option) =>
              groupedOptions.find((o) => o.value === option.value)?.group ?? '',
          },
        }}
      />

      <button type='button' onClick={() => setFormValues(JSON.stringify(getValues()))}>
        Read
      </button>
      <div data-testid='form-values'>{formValues}</div>
    </ThemeProvider>
  )
}

const readGroupedFormValues = (): GroupedFormModel => {
  fireEvent.click(screen.getByRole('button', { name: 'Read' }))
  return JSON.parse(screen.getByTestId('form-values').textContent ?? '{}')
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

  test('clicking a group selects all of its members', async () => {
    render(<GroupedMultiTestWrapper />)

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(
      // The badge showing the group's member count is part of the row's
      // accessible name (it's not aria-hidden - screen readers should
      // announce the count), so this can't be an exact-string match.
      await screen.findByRole('option', { name: /^Nekilnojamasis turtas/ }),
    )

    const { providers } = readGroupedFormValues()
    expect([...providers].sort()).toEqual(['rc', 'vtpsi'])
  })

  test('unchecking one member un-checks its (previously fully-selected) group', async () => {
    render(<GroupedMultiTestWrapper defaultValue={['rc', 'vtpsi']} />)

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(await screen.findByRole('option', { name: 'Registrų centras' }))

    const { providers } = readGroupedFormValues()
    expect(providers).toEqual(['vtpsi'])
  })

  test('re-clicking a fully-selected group deselects all of its members', async () => {
    render(<GroupedMultiTestWrapper defaultValue={['rc', 'vtpsi']} />)

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(
      // The badge showing the group's member count is part of the row's
      // accessible name (it's not aria-hidden - screen readers should
      // announce the count), so this can't be an exact-string match.
      await screen.findByRole('option', { name: /^Nekilnojamasis turtas/ }),
    )

    const { providers } = readGroupedFormValues()
    expect(providers).toEqual([])
  })

  test('the group row is reachable by keyboard and Enter toggles it', async () => {
    render(<GroupedMultiTestWrapper />)

    const input = screen.getByRole('combobox')
    fireEvent.mouseDown(input)
    await screen.findByRole('option', { name: 'Registrų centras' })

    // The group marker is the first option ahead of its own members.
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'Enter' })

    const { providers } = readGroupedFormValues()
    expect([...providers].sort()).toEqual(['rc', 'vtpsi'])
  })

  test('keyboard Enter on the "select all" row selects every option', async () => {
    render(<GroupedMultiTestWrapper dropdownSearch />)

    const input = screen.getByRole('combobox')
    fireEvent.mouseDown(input)
    await screen.findByRole('option', { name: 'Registrų centras' })

    // The search field is the first row, "Visi" the second.
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'Enter' })

    const { providers } = readGroupedFormValues()
    expect([...providers].sort()).toEqual(['rc', 'regitra', 'vtpsi'])
  })
})
