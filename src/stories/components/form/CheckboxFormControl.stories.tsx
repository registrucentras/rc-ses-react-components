import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesCheckboxFormControl from '@/components/form/inputs/CheckboxFormControl'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const variants = ['outlined', 'flat']

const meta: Meta<typeof RcSesCheckboxFormControl> = {
  title: 'components/common/form/CheckboxFormControl',
  component: RcSesCheckboxFormControl,
  argTypes: {
    variant: {
      options: variants,
      mapping: variants,
      table: {
        defaultValue: { summary: 'outlined' },
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
    errors: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

type FormModel = {
  agreement: string
}

export default meta

const Template: StoryFn<typeof RcSesCheckboxFormControl> = (args) => {
  const { variant, children } = args
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: '',
    },
  })

  return (
    <Fields>
      <FieldView>
        <RcSesCheckboxFormControl
          id='agreement'
          name='agreement'
          control={control}
          errors={errors?.agreement}
          variant={variant}
        >
          {children}
        </RcSesCheckboxFormControl>
      </FieldView>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { variant, children } = args
  return `
  import RcSesCheckboxFormControl from '@/components/form/inputs/CheckboxFormControl';

  const MyComponent = () => (

  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      agreement: '',
    },
  })

    <RcSesCheckboxFormControl
      id='agreement'
      name='agreement'
      control={control}
      errors={errors?.agreement}
      variant="${variant}"
    >
     ${children}
    </RcSesCheckboxFormControl>
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'This is label',
  children: 'This is body',
  variant: 'outlined',
}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => {
        return codeBlock(storyContext.args)
      },
    },
  },
}
