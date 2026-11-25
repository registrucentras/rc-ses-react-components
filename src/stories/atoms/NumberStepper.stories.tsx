import { Box } from '@mui/material'
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

interface FormModel {
  countable: number
  countable2: number
  countable3: number
}

const meta: Meta<typeof RcSesNumberStepper> = {
  title: 'Atoms/NumberStepper',
  component: RcSesNumberStepper,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    control: { table: { disable: true } },
    errors: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    rules: { table: { disable: true } },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesNumberStepper>

function NumberStepperDemo(args: any) {
  const { control } = useForm<FormModel>({
    mode: 'all',
    defaultValues: { countable: 0, countable2: 0, countable3: 0 },
  })
  const { label, disabled, min, max, step, displayStepperControls, slotProps, name, id } =
    args

  return (
    <Fields>
      <FieldView>
        <RcSesNumberStepper
          id={id}
          name={name}
          control={control}
          disabled={disabled}
          step={step}
          displayStepperControls={displayStepperControls}
          label={label}
          rules={{ required: false, min, max }}
          slotProps={slotProps}
        />
      </FieldView>
      <FieldPreview>
        <PreviewTitle>State previews</PreviewTitle>
        <RcSesNumberStepper
          id='countable2'
          name='countable2'
          control={control}
          disabled
          step={1}
          displayStepperControls
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
          displayStepperControls
          errors={{ message: 'Error Message', type: 'required' }}
          label={label}
          rules={{ required: false, min: 0, max: 100 }}
          slotProps={slotProps}
        />
      </FieldPreview>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { label, disabled, min, max, step, name, id } = args
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

export const Main: Story = {
  render: (args) => <NumberStepperDemo {...args} />,
  args: {
    label: 'Label',
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    displayStepperControls: true,
    slotProps: { wrapper: { labelSubtitle: 'optional' } },
    id: 'countable',
    name: 'countable',
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_code: string, storyContext: StoryContext) =>
          codeBlock(storyContext.args),
      },
    },
  },
}

export const TokenBindings: Story = {
  ...Main,
  parameters: {
    docs: {
      description: {
        story:
          'Existing field states come from the shared Input theme. Stepper buttons use color, border and size token maps without changing increment, decrement or boundary behavior.',
      },
    },
  },
}

export const TokenOverrides: Story = {
  ...Main,
  render: (args) => (
    <div
      style={
        {
          '--rc-color-surface-sunken': '#dcf4fc',
          '--rc-color-neutrals-200': '#b9e9fa',
          '--rc-color-text-muted': '#6b747f',
        } as CSSProperties
      }
    >
      <NumberStepperDemo {...args} />
    </div>
  ),
}

export const ConsumerOverrides: Story = {
  ...Main,
  render: (args) => (
    <Box sx={{ '& .custom-quantity input': { fontSize: '21px' } }}>
      <NumberStepperDemo {...args} />
    </Box>
  ),
  args: {
    ...Main.args,
    slotProps: { wrapper: { className: 'custom-quantity' } },
  },
}
