import { FormControlLabel } from '@mui/material'
import { Meta, StoryContext, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesCheckboxFormControl from '@/components/form/inputs/CheckboxFormControl'
import SimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const variants = ['outlined', 'flat']

const meta: Meta<typeof RcSesCheckboxFormControl> = {
  title: 'components/form/CheckboxFormControl',
  component: RcSesCheckboxFormControl,
  argTypes: {
    variant: {
      options: variants,
      mapping: variants,
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    slotProps: { table: { disable: true } },
    loading: { table: { disable: true } },
    id: { table: { disable: true } },
    errors: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    rules: { table: { disable: true } },
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    disabled: { table: { disable: true } },
    label: { table: { disable: true } },
  },
  tags: ['autodocs'],
}

type FormModel = {
  agreement: string
}

export default meta

type Story = StoryObj<typeof RcSesCheckboxFormControl>

function CheckboxFormControlDemo(args: any) {
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

export const Main: Story = {
  render: (args) => <CheckboxFormControlDemo {...args} />,
  args: {
    label: 'This is label',
    children: 'This is body',
    variant: 'outlined',
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

type IndeterminateFormModel = {
  parent: boolean
  child1: boolean
  child2: boolean
  child3: boolean
}

function CheckboxIndeterminateDemo() {
  const { control, watch, setValue } = useForm<IndeterminateFormModel>({
    mode: 'all',
    defaultValues: {
      parent: false,
      child1: false,
      child2: false,
      child3: false,
    },
  })

  const child1Value = watch('child1')
  const child2Value = watch('child2')
  const child3Value = watch('child3')

  const childValues = [child1Value, child2Value, child3Value]

  const handleParentChange = (newChildValues: boolean[]) => {
    setValue('child1', newChildValues[0])
    setValue('child2', newChildValues[1])
    setValue('child3', newChildValues[2])
  }

  return (
    <Fields>
      <FieldView>
        <div>
          <RcSesCheckboxFormControl
            id='parent'
            name='parent'
            control={control}
            variant='flat'
            childValues={childValues}
            onChildValuesChange={handleParentChange}
          >
            <strong>Pasirinkti visus</strong>
          </RcSesCheckboxFormControl>
          <div
            style={{
              paddingLeft: '2rem',
              marginTop: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <FormControlLabel
              control={
                <SimpleCheckbox
                  checked={child1Value}
                  onChange={(e) => setValue('child1', e.target.checked)}
                />
              }
              label='Pasirinkimas 1'
            />
            <FormControlLabel
              control={
                <SimpleCheckbox
                  checked={child2Value}
                  onChange={(e) => setValue('child2', e.target.checked)}
                />
              }
              label='Pasirinkimas 2'
            />
            <FormControlLabel
              control={
                <SimpleCheckbox
                  checked={child3Value}
                  onChange={(e) => setValue('child3', e.target.checked)}
                />
              }
              label='Pasirinkimas 3'
            />
          </div>
        </div>
      </FieldView>
    </Fields>
  )
}

export const Indeterminate: Story = {
  render: () => <CheckboxIndeterminateDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate status is determined by the state of child checkboxes.',
      },
      source: {
        type: 'code',
        code: `<RcSesCheckboxFormControl
  id='parent'
  variant='flat'
  childValues={[child1, child2, child3]}
  onChildValuesChange={handleParentChange}
>
  <strong>Pasirinkti visus</strong>
</RcSesCheckboxFormControl>

<div style={{ paddingLeft: '2rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
  <FormControlLabel
    control={<SimpleCheckbox checked={child1} onChange={(e) => setChild1(e.target.checked)} />}
    label='Pasirinkimas 1'
  />
  <FormControlLabel
    control={<SimpleCheckbox checked={child2} onChange={(e) => setChild2(e.target.checked)} />}
    label='Pasirinkimas 2'
  />
  <FormControlLabel
    control={<SimpleCheckbox checked={child3} onChange={(e) => setChild3(e.target.checked)} />}
    label='Pasirinkimas 3'
  />
</div>`,
      },
    },
  },
}
