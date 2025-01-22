/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesSelect from '@/components/form/inputs/Select'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSelect> = {
  title: 'components/common/inputs/Select',
  component: RcSesSelect,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {},
      },
    },
    onInputChange: {
      table: {
        disable: true,
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    errors: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    loading: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesSelect> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { selection: '' } })

  const { label, disabled, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          label={label}
          disabled={disabled}
          slotProps={slotProps}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on side</PreviewTitle>
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Active'
          errors={errors?.selection}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          errors={errors?.selection}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Error'
          errors={{ message: 'Error Message', type: 'required' }}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on top</PreviewTitle>
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Active'
          slotProps={{ wrapper: { labelOnTop: true } }}
          errors={errors?.selection}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          slotProps={{ wrapper: { labelOnTop: true } }}
          errors={errors?.selection}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          rules={{ required: true }}
          label='Error'
          slotProps={{ wrapper: { labelOnTop: true } }}
          errors={{ message: 'Error', type: 'required' }}
          options={[
            { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
            { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
          ]}
        />
      </FieldPreviewRow>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { label, disabled, slotProps } = args
  return `
  import RcSesSelect from '@/components/form/inputs/Select'


  const MyComponent = () => (

  const { control, formState: { errors } } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { selection: '', } })

    <RcSesSelect
      id="selection"
      name="selection"
      control={control}
      rules={{ required: true }}
      label="${label}"
      disabled={${disabled}}
      errors={errors?.selection}
      slotProps=${slotProps.wrapper.labelOnTop ? '{{ wrapper: { labelOnTop: true } }}' : '{{ wrapper: { labelOnTop: false} }}'}
      options={[
        { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
        { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
      ]}

    />
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'Label',
  disabled: false,
  slotProps: { wrapper: { labelOnTop: false } },
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
