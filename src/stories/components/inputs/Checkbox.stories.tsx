/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const variants = ['outlined', 'flat']

const lorem = 'Lorem Ipsum has been the standard.'

type FormModel = {
  agreement: string
}

const meta: Meta<typeof RcSesCheckbox> = {
  title: 'components/common/inputs/Checkbox',
  component: RcSesCheckbox,
  argTypes: {
    variant: {
      options: variants,
      mapping: variants,
      table: {
        defaultValue: { summary: 'flat' },
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    slotProps: {
      table: {
        disable: true,
      },
    },
    loading: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    errors: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesCheckbox> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: '',
    },
  })
  const { label, disabled, variant } = args

  return (
    <Fields>
      <FieldView>
        <RcSesCheckbox
          id='agreement'
          name='agreement'
          control={control}
          errors={errors?.agreement}
          label={label}
          disabled={disabled}
          variant={variant}
          rules={{ required: true }}
        >
          {lorem}
        </RcSesCheckbox>
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews outlined</PreviewTitle>
        <RcSesCheckbox
          id='active'
          name='active'
          control={control}
          errors={errors?.agreement}
          label='Active'
          rules={{ required: true }}
        >
          {lorem}
        </RcSesCheckbox>
        <RcSesCheckbox
          id='disabled'
          name='disabled'
          control={control}
          errors={errors?.agreement}
          label='Disabled'
          rules={{ required: true }}
          disabled
        >
          {lorem}
        </RcSesCheckbox>
        <RcSesCheckbox
          id='error'
          name='error'
          control={control}
          errors={{ message: 'Error Message', type: 'required' }}
          label='Error'
          rules={{ required: true }}
        >
          {lorem}
        </RcSesCheckbox>
      </FieldPreviewRow>
      <FieldPreviewRow>
        <PreviewTitle>State previews flat</PreviewTitle>
        <RcSesCheckbox
          id='flatActive'
          name='flatActive'
          control={control}
          errors={errors?.agreement}
          label='Active'
          variant='flat'
        >
          {lorem}
        </RcSesCheckbox>
        <RcSesCheckbox
          id='flatDisabled'
          name='flatDisabled'
          control={control}
          errors={errors?.agreement}
          label='Disabled'
          variant='flat'
        >
          {lorem}
        </RcSesCheckbox>
        <RcSesCheckbox
          id='flatError'
          name='flatError'
          control={control}
          errors={errors?.agreement}
          label='Error'
          variant='flat'
        >
          {lorem}
        </RcSesCheckbox>
      </FieldPreviewRow>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { variant, label, children, disabled } = args
  return `
  import RcSesCheckbox from '@/components/form/inputs/Checkbox'

  const MyComponent = () => (

  const {control,formState: { errors }} = useForm<FormModel>({mode: 'all', defaultValues: {agreement: ''}})

    <RcSesCheckbox
          id='agreement'
          name='agreement'
          control={control}
          errors={errors?.agreement}
          label="${label}"
          variant="${variant}"
          children="${children}"
          disabled="${disabled}"
        />
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'Click Me',
  variant: 'outlined',
  children: 'This is content',
  disabled: false,
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
