/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

type FormModel = {
  chooseOne: string
}

const variants = ['outlined', 'filled', 'flat']

const meta: Meta<typeof RcSesRadioButtonGroup> = {
  title: 'components/common/inputs/RadioButtonGroup',
  component: RcSesRadioButtonGroup,
  argTypes: {
    variant: {
      options: variants,
      mapping: variants,
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesRadioButtonGroup> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      chooseOne: '',
    },
  })
  const { label, options } = args

  return (
    <Fields>
      <FieldView>
        <RcSesRadioButtonGroup
          id='chooseOne'
          name='chooseOne'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={errors?.chooseOne}
          options={options}
          hideNativeRadio
        />
      </FieldView>
      <FieldPreviewRow>
        <PreviewTitle>State previews buttons</PreviewTitle>
        <RcSesRadioButtonGroup
          id='chooseOne'
          name='chooseOne'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={{ message: 'Error Message', type: 'required' }}
          options={options}
          hideNativeRadio
        />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews radio</PreviewTitle>
        <RcSesRadioButtonGroup
          id='chooseOne'
          name='chooseOne'
          control={control}
          rules={{ required: true }}
          label='Flat'
          options={options}
          variant='flat'
        />
        <RcSesRadioButtonGroup
          id='chooseOne'
          name='chooseOne'
          control={control}
          rules={{ required: true }}
          label='Filled'
          options={options}
          variant='filled'
        />

        <RcSesRadioButtonGroup
          id='chooseOne'
          name='chooseOne'
          control={control}
          rules={{ required: true }}
          label='Outlined'
          options={options}
          variant='outlined'
        />
      </FieldPreviewRow>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { label } = args
  return `
  import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'

  const MyComponent = () => (

  const {control,formState: { errors }} = useForm<FormModel>({mode: 'all', defaultValues: {chooseOne: ''}})

    <RcSesRadioButtonGroup
      id='chooseOne'
      name='chooseOne'
      control={control}
      rules={{ required: true }}
      label="${label}"
      errors={errors?.chooseOne}
      options={[
        { label: 'Pick 1', value: 'pick1' },
        { label: 'Pick 2', value: 'pick2' },
        { label: 'Pick 3', value: 'pick3' },
        { label: 'Pick 4', value: 'pick4' },
      ]}
      hideNativeRadio
    />
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'Label',
  options: [
    { label: 'Pick 1', value: 'pick1' },
    { label: 'Pick 2', value: 'pick2' },
    { label: 'Pick 3', value: 'pick3' },
    { label: 'Pick 4', value: 'pick4' },
  ],
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
