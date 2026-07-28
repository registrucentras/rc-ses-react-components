import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesSearchableField from './SearchableField'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))

/**
 * Added ahead of the inputProps -> slotProps migration (SAV-5648 / LIB-08b).
 * This component had no tests, and its "click the field to open the modal"
 * behaviour is wired through the input slot - the same API that silently stopped
 * forwarding event handlers on Switch in MUI 6, where types keep passing and only
 * the runtime breaks. These tests pin the behaviour so the migration is verifiable.
 */

type ModalProps = {
  open: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}

const StubModal = ({ open, onSubmit, onClose }: ModalProps) =>
  open ? (
    <div data-testid='stub-modal'>
      <button type='button' onClick={() => onSubmit('picked-value')}>
        pick
      </button>
      <button type='button' onClick={onClose}>
        close
      </button>
    </div>
  ) : null

const TestWrapper = ({ defaultValue = '' }: { defaultValue?: string }) => {
  const { control } = useForm({ defaultValues: { object: defaultValue } })
  return (
    <ThemeProvider theme={theme}>
      <RcSesSearchableField
        id='object'
        name='object'
        control={control}
        label='Objektas'
        ModalComponent={StubModal}
      />
    </ThemeProvider>
  )
}

const getField = () => screen.getByRole('textbox') as HTMLInputElement

describe('RcSesSearchableField', () => {
  it('should render the field with the value from the form', () => {
    render(<TestWrapper defaultValue='1099-2018-8012' />)
    expect(getField().value).toBe('1099-2018-8012')
  })

  it('should keep the field read-only so the value can only come from the modal', () => {
    render(<TestWrapper />)
    expect(getField()).toHaveAttribute('readonly')
  })

  it('should not show the modal initially', () => {
    render(<TestWrapper />)
    expect(screen.queryByTestId('stub-modal')).not.toBeInTheDocument()
  })

  // The behaviour most at risk from the slot migration: this onClick is passed
  // through the input slot rather than directly on the element.
  it('should open the modal when the field itself is clicked', () => {
    render(<TestWrapper />)
    fireEvent.click(getField())
    expect(screen.getByTestId('stub-modal')).toBeInTheDocument()
  })

  it('should open the modal when the search adornment button is clicked', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByRole('button', { name: 'searchAriaLabel' }))
    expect(screen.getByTestId('stub-modal')).toBeInTheDocument()
  })

  it('should write the value chosen in the modal back into the field', () => {
    render(<TestWrapper />)
    fireEvent.click(getField())
    fireEvent.click(screen.getByText('pick'))
    expect(getField().value).toBe('picked-value')
  })

  it('should close the modal without changing the value', () => {
    render(<TestWrapper defaultValue='kept' />)
    fireEvent.click(getField())
    fireEvent.click(screen.getByText('close'))
    expect(screen.queryByTestId('stub-modal')).not.toBeInTheDocument()
    expect(getField().value).toBe('kept')
  })

  it('should only offer the clear button once there is a value', () => {
    const { unmount } = render(<TestWrapper />)
    expect(
      screen.queryByRole('button', { name: 'clearValueAriaLabel' }),
    ).not.toBeInTheDocument()
    unmount()

    render(<TestWrapper defaultValue='1099-2018-8012' />)
    expect(
      screen.getByRole('button', { name: 'clearValueAriaLabel' }),
    ).toBeInTheDocument()
  })

  it('should clear the value when the clear button is clicked', () => {
    render(<TestWrapper defaultValue='1099-2018-8012' />)
    fireEvent.click(screen.getByRole('button', { name: 'clearValueAriaLabel' }))
    expect(getField().value).toBe('')
  })
})
