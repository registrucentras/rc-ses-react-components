import { FormControl, FormControlLabel, Radio, Stack } from '@mui/material'
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'

import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

interface FormModel {
  chooseOne: string
}

const variants = ['outlined', 'filled', 'flat']

const meta: Meta<typeof RcSesRadioButtonGroup> = {
  title: 'Molecules/RadioButtonGroup',
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

type Story = StoryObj<typeof RcSesRadioButtonGroup>

function RadioButtonGroupDemo(args: any) {
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

export const Main: Story = {
  render: (args) => <RadioButtonGroupDemo {...args} />,
  args: {
    label: 'Label',
    options: [
      { label: 'Pick 1', value: 'pick1' },
      { label: 'Pick 2', value: 'pick2' },
      { label: 'Pick 3', value: 'pick3' },
      { label: 'Pick 4', value: 'pick4' },
    ],
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

export const TokenBindings = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Radio />} label='Unchecked radio' />
      <FormControlLabel control={<Radio defaultChecked />} label='Checked radio' />
      <FormControlLabel control={<Radio disabled />} label='Disabled unchecked radio' />
      <FormControlLabel
        control={<Radio disabled defaultChecked />}
        label='Disabled checked radio'
      />
      <FormControl error>
        <FormControlLabel sx={{ ml: 0 }} control={<Radio />} label='Error radio' />
      </FormControl>
      <FormControlLabel
        control={
          <Radio defaultChecked sx={{ '&.Mui-checked': { color: 'rgb(10, 20, 30)' } }} />
        }
        label='Custom radio styles'
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Native Radio states use the shared MUI token overrides. Existing 24px SVG geometry, radio spacing and group behavior are preserved.',
      },
    },
  },
}

function KeyboardPreview() {
  const { control } = useForm({ defaultValues: { choice: 'first' } })
  return (
    <RcSesRadioButtonGroup
      id='keyboard-choice'
      name='choice'
      label='Keyboard selection'
      control={control}
      options={[
        { label: 'First option', value: 'first' },
        { label: 'Second option', value: 'second' },
      ]}
      variant='flat'
    />
  )
}

export const KeyboardSelection = {
  tags: ['no-snapshot'],
  render: () => <KeyboardPreview />,
}
