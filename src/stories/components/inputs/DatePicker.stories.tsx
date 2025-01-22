/* eslint-disable react/function-component-definition */
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'

import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesDatepicker> = {
  title: 'components/common/inputs/DatePicker',
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

const Template: StoryFn<typeof RcSesDatepicker> = (args) => {
  const { clearable, label, rules } = args

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

export const Main = Template.bind({})
Main.args = {
  clearable: true,
  label: 'Terminas',
  rules: { required: true },
}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) =>
        codeBlock(storyContext.args),
    },
  },
}
