import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import type { Meta, StoryContext } from '@storybook/react-vite'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'

import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesDatepicker> = {
  title: 'Atoms/DatePicker',
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

function DatePickerDemo(args: any) {
  const { clearable, label, open, rules } = args

  const {
    control,
    formState: { errors },
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      date: null,
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
            rules={rules}
            label={label}
            errors={errors?.date}
            slotProps={
              open
                ? {
                    datepicker: {
                      open: true,
                      // Pinned month: without it the calendar follows the
                      // current date and the visual baseline would change
                      // every month.
                      referenceDate: new Date(2026, 0, 15),
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
