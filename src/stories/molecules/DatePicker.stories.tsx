import { Box, Button } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Meta, StoryContext } from '@storybook/react-vite'
import { lt } from 'date-fns/locale/lt'
import { useForm, useWatch } from 'react-hook-form'

import RcSesDatepicker, { DateRangeValue } from '@/components/form/inputs/Datepicker'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesDatepicker> = {
  title: 'Molecules/DatePicker',
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

// Pinned so the visual baselines do not change with the calendar date.
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
 * mounts once the picker is opened - so nothing covered them until this story.
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
      story: { inline: false, iframeHeight: 560 },
      description: {
        story: 'The picker with its calendar open, pinned to a fixed month.',
      },
    },
  },
}

/**
 * Days past the 20th are out of range: they must read as greyed out, not merely
 * be unclickable. The existing red distinction for weekends is preserved.
 */
export const CalendarWithDisabledDates = {
  render: (args: any) => <DatePickerDemo {...args} />,
  // The calendar is portalled, so inline in the docs page it escapes this
  // story's block and covers its neighbours. Its own iframe contains it.
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 560 },
    },
  },
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
    datepickerProps: { maxDate: new Date(2026, 0, 20) },
  },
}

/**
 * A scattered rule rather than a range, so disabled days sit between selectable
 * ones.
 */
export const CalendarWithDisabledRule = {
  render: (args: any) => <DatePickerDemo {...args} />,
  // The calendar is portalled, so inline in the docs page it escapes this
  // story's block and covers its neighbours. Its own iframe contains it.
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 560 },
    },
  },
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
 * Covers the `Mui-selected` day styling.
 */
export const CalendarWithValue = {
  render: (args: any) => <DatePickerDemo {...args} />,
  // The calendar is portalled, so inline in the docs page it escapes this
  // story's block and covers its neighbours. Its own iframe contains it.
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 560 },
    },
  },
  args: {
    clearable: true,
    label: 'Terminas',
    open: true,
    rules: { required: true },
    value: '2026-01-15T00:00:00.000Z',
  },
}

/**
 * The whole field disabled - a different state from a disabled day.
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
 * The error state: input border and helper text.
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

export const TokenBindings = {
  ...CalendarWithValue,
  parameters: {
    ...CalendarWithValue.parameters,
    docs: {
      ...CalendarWithValue.parameters.docs,
      description: {
        story:
          'Existing single-date calendar styles rebound to typography, color, spacing, radius and elevation tokens. Cell dimensions, circular shape, weekend coloring, props and navigation are preserved.',
      },
    },
  },
}

export const ConsumerOverrides = {
  ...Main,
  tags: ['no-snapshot'],
  args: {
    ...Main.args,
    datepickerProps: {
      sx: {
        '& .MuiPickersInputBase-sectionsContainer': {
          fontSize: '23px',
          lineHeight: '29px',
        },
      },
    },
  },
}

function RangeDemo({
  selected = false,
  disabled = false,
}: {
  selected?: boolean
  disabled?: boolean
}) {
  const { control, reset } = useForm<{ period: DateRangeValue }>({
    defaultValues: { period: selected ? ['2026-06-10', '2026-06-17'] : [null, null] },
  })
  const period = useWatch({ control, name: 'period' })
  return (
    <Box sx={{ width: '100%', maxWidth: '520px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
        <RcSesDatepicker
          selection='range'
          id='period'
          name='period'
          control={control}
          label='Date range'
          clearable
          disabled={disabled}
          slotProps={{
            wrapper: { labelOnTop: true },
            calendar: { referenceDate: new Date(2026, 5, 10) },
          }}
        />
      </LocalizationProvider>
      <Box component='output' aria-label='Stored range' sx={{ display: 'block', mt: 2 }}>
        {JSON.stringify(period)}
      </Box>
      <Button onClick={() => reset({ period: [null, null] })}>Reset form</Button>
    </Box>
  )
}

export const Range = {
  render: () => <RangeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "With `selection='range'` one field picks a period. The form value is a pair of plain local dates, `['2026-06-10', '2026-06-17']`: `[start, null]` while the end is still being picked and `[null, null]` when empty. Both dates are inclusive calendar days without a time or timezone, so read them as dates on the backend (e.g. `LocalDate`) and build any time window there. Unlike Single, which stores a UTC timestamp, values in any other format, such as ISO timestamps, are read as empty.",
      },
    },
  },
}
export const RangeSelected = { render: () => <RangeDemo selected /> }
export const RangeDisabled = { render: () => <RangeDemo selected disabled /> }

function ViewsDemo({
  range = false,
  bounded = false,
}: {
  range?: boolean
  bounded?: boolean
}) {
  const { control } = useForm<{ single: string | null; period: DateRangeValue }>({
    defaultValues: { single: '2026-06-10T00:00:00.000Z', period: ['2026-06-10', null] },
  })
  const bounds = bounded
    ? { minDate: new Date(2026, 3, 1), maxDate: new Date(2026, 8, 30) }
    : {}
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={lt}>
      <Box sx={{ width: '100%', maxWidth: '450px' }}>
        {range ? (
          <RcSesDatepicker
            selection='range'
            id='views-range'
            name='period'
            control={control}
            label='Range views'
            slotProps={{
              wrapper: { labelOnTop: true },
              calendar: { referenceDate: REFERENCE_DATE, ...bounds },
            }}
          />
        ) : (
          <RcSesDatepicker
            id='views-single'
            name='single'
            control={control}
            label='Single views'
            slotProps={{
              wrapper: { labelOnTop: true },
              datepicker: { referenceDate: REFERENCE_DATE, ...bounds },
            }}
          />
        )}
      </Box>
    </LocalizationProvider>
  )
}

export const SingleViews = { render: () => <ViewsDemo /> }
export const RangeViews = { render: () => <ViewsDemo range /> }
export const BoundedViews = { render: () => <ViewsDemo range bounded /> }
