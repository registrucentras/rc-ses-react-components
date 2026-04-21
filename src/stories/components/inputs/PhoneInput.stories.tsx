/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesPhoneInput from '@/components/form/inputs/PhoneInput'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

type FormModel = {
  phone: string
  phoneDisabled: string
  phoneError: string
}

const meta: Meta<typeof RcSesPhoneInput> = {
  title: 'components/common/inputs/PhoneInput',
  component: RcSesPhoneInput,
  argTypes: {
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
    id: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesPhoneInput> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      phone: '',
      phoneDisabled: '',
      phoneError: '',
    },
  })

  const { label, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesPhoneInput
          id='phone'
          name='phone'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={errors?.phone}
          slotProps={slotProps}
        />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews</PreviewTitle>
        <RcSesPhoneInput
          id='phoneDisabled'
          name='phoneDisabled'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          errors={errors?.phoneDisabled}
          slotProps={slotProps}
        />
        <RcSesPhoneInput
          id='phoneError'
          name='phoneError'
          control={control}
          rules={{ required: true }}
          label='Error'
          errors={{ message: 'Error Message', type: 'required' }}
          slotProps={slotProps}
        />
      </FieldPreviewRow>
    </Fields>
  )
}

export const Main = Template.bind({})
Main.args = {
  label: 'Phone number',
}
