import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Meta, StoryContext } from '@storybook/react-vite'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'

import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesDatepicker> = {
  title: 'components/inputs/DatePicker',
  component: RcSesDatepicker,
  argTypes: {
    clearable: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {},
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

// Every story that opens the calendar pins itself to this month, so the visual
// baselines do not change with the calendar date.
const REFERENCE_DATE = new Date(2026, 0, 15)

function DatePickerDemo(args: any) {
  const { clearable, datepickerProps, disabled, error, label, open, rules, value } = args

  const {
    control,
    formState: { errors },
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      date: value ?? null,
    },
  })

  return (
    <Fields>
      <FieldView>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
          <RcSesDatepicker
            id='date'
            name='date'
            clearable={clearable}
            control={control}
            disabled={disabled}
            rules={rules}
            label={label}
            errors={error ? { type: 'manual', message: error } : errors?.date}
            slotProps={
              open || datepickerProps
                ? {
                    datepicker: {
                      ...(open ? { open: true } : {}),
                      // Pinned month: without it the calendar follows the
                      // current date and the visual baseline would change
                      // every month.
                      referenceDate: REFERENCE_DATE,
                      ...(datepickerProps ?? {}),
                    },
                  }
                : undefined
            }
          />
        </LocalizationProvider>
      </FieldView>
    </Fields>
  )
}
const codeBlock = (args: any) => {
  const { clearable, label, rules } = args
  return `
  import RcSesDatepicker from '@/components/form/inputs/Datepicker'

  const MyComponent = () => (

  const {control,formState: { errors }} = useForm<SingleStepFormModel>({mode: 'all',defaultValues: {date: null}})

     <RcSesDatepicker
        id='date'
        name='date'
        clearable=${clearable}
        control={control}
        rules=${rules.required ? '{{ required: true }}' : '{{ required: false }}'}
        label='${label}'
        errors={errors?.date}
      />

  );`
}

export const Main = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    label: 'Terminas',
    rules: { required: true },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (code: string, storyContext: StoryContext) =>
          codeBlock(storyContext.args),
      },
    },
  },
}

/**
 * The calendar popup carries the `MuiPickersLayout` theme overrides, and it only
 * mounts once the picker is opened - so nothing covered them until this story
 * (SAV-5648 / LIB-02).
 */
export const CalendarOpen = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
  },
  parameters: {
    docs: {
      description: {
        story: 'The picker with its calendar open, pinned to a fixed month.',
      },
    },
  },
}

/**
 * Disabled days, the case that regressed on x-date-pickers 9. Anything after the
 * 20th is out of range, so those days must render greyed out rather than merely
 * being unclickable. Weekends stay red even when disabled, matching 1.x.
 */
export const CalendarWithDisabledDates = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
    datepickerProps: { maxDate: new Date(2026, 0, 20) },
  },
}

/**
 * A scattered disable rule rather than a range, so disabled days appear between
 * selectable ones. Covers the same styling from a different angle.
 */
export const CalendarWithDisabledRule = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
    datepickerProps: {
      shouldDisableDate: (date: Date) => [8, 9, 10, 22, 23].includes(date.getDate()),
    },
  },
}

/**
 * A selected day, so the `Mui-selected` override in `MuiPickersLayout` is covered.
 */
export const CalendarWithValue = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
    value: '2026-01-15T00:00:00.000Z',
  },
}

/**
 * The whole field disabled, which is a different state from a disabled day.
 */
export const Disabled = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    disabled: true,
    label: 'Terminas',
    rules: { required: true },
  },
}

/**
 * The field in its error state, closed - the input border and helper text.
 */
export const WithError = {
  render: (args: any) => <DatePickerDemo {...args} />,
  args: {
    clearable: true,
    error: 'Privaloma pasirinkti datą',
    label: 'Terminas',
    rules: { required: true },
  },
}
