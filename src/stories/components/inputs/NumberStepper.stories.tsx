import { Meta, StoryContext, StoryFn } from '@storybook/react'
import Fields from '@/components/storybook/Fields'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import { useForm } from 'react-hook-form'
import FieldView from '@/components/storybook/FieldView'
import FieldPreview from '@/components/storybook/FieldPreview'
import PreviewTitle from '@/components/storybook/PreviewTitle'

type FormModel = {
  countable: number
  countable2: number
  countable3: number
}

const meta: Meta<typeof RcSesNumberStepper> = {
  title: 'components/common/inputs/NumberStepper',
  component: RcSesNumberStepper,
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    control: {
      table: {
        disable: true
      }
    },
    errors: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    onBlur: {
      table: {
        disable: true
      }
    },
    rules: {
      table: {
        disable: true
      }
    }
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesNumberStepper> = (args) => {
  const { control, formState: { errors } } = useForm<FormModel>({ mode: 'all', defaultValues: { countable: 0, countable2: 0, countable3: 0 } })
  const { label, disabled, min, max, step, displayStepperControls, slotProps, name, id } = args

  return (
    <Fields>


      <FieldView >
        <RcSesNumberStepper
          id={id}
          name={name}
          control={control}
          disabled={disabled}
          step={step}
          displayStepperControls={displayStepperControls}
          label={label}
          rules={{ required: false, min: min, max: max }}
          slotProps={slotProps}
        />
      </FieldView>
      <FieldPreview>
        <PreviewTitle>State previews</PreviewTitle>
        <RcSesNumberStepper
          id='countable2'
          name='countable2'
          control={control}
          disabled={true}
          step={1}
          displayStepperControls={true}
          label={label}
          rules={{ required: false, min: 0, max: 1 }}
          slotProps={slotProps}
        />
        <RcSesNumberStepper
          id='countable3'
          name='countable3'
          control={control}
          disabled={false}
          step={1}
          displayStepperControls={true}
          errors={{ message: "Error Message", type: 'required' }}
          label={label}
          rules={{ required: false, min: 0, max: 100 }}
          slotProps={slotProps}
        />
      </FieldPreview>

    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { label, disabled, min, max, step, displayStepperControls, slotProps, name, id } = args
  return `
  import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
  
  const MyComponent = () => (

  const {control,formState: { errors }} = useForm<SingleStepFormModel>({mode: 'all',defaultValues: { countable: 0,}})

  <RcSesNumberStepper
    id="${id}"
    name="${name}"
    control={control}
    disabled={${disabled}}
    step={${step}}
    displayStepperControls={displayStepperControls}
    errors={errors?.numberOfCopies}
    label="${label}"
    rules={{ required: false, min: ${min}, max: ${max} }}
    slotProps={{ wrapper: { labelSubtitle: '(neprivaloma)' } }}
  />
  );`

}


export const Main = Template.bind({})
Main.args = {
  label: 'Label',
  disabled: false,
  min: 0,
  max: 100,
  step: 1,
  displayStepperControls: true,
  slotProps: { wrapper: { labelSubtitle: 'optional' } },
  id: 'countable',
  name: 'countable'
}


Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => { return codeBlock(storyContext.args) },
    },
  },
};
