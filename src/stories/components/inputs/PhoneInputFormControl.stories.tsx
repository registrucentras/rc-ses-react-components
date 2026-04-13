/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'
import RcSesPhoneInputFormControl from '@/components/form/inputs/PhoneInputFormControl'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

type FormModel = {
  phone: string
}

const meta: Meta<typeof RcSesPhoneInputFormControl> = {
  title: 'components/common/inputs/PhoneInputFormControl',
  component: RcSesPhoneInputFormControl,
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

const Template: StoryFn<typeof RcSesPhoneInputFormControl> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      phone: '',
    },
  })

  const { label, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesFormControlWrapper
          id='phone'
          label={label}
          errors={errors?.phone}
          required
          {...slotProps?.wrapper}
        >
          <RcSesPhoneInputFormControl
            id='phone'
            name='phone'
            control={control}
            rules={{ required: true }}
            label={label}
            errors={errors?.phone}
            slotProps={slotProps}
          />
        </RcSesFormControlWrapper>
      </FieldView>
    </Fields>
  )
}

export const Main = Template.bind({})
Main.args = {
  label: 'Phone number',
}
