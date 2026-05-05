/* eslint-disable react/function-component-definition */
import { Box, Typography } from '@mui/material'
import { Meta, StoryContext, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesPhoneInput from '@/components/form/inputs/PhoneInput'
import RcSesSelect from '@/components/form/inputs/Select'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSelect> = {
  title: 'components/inputs/Select',
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

type Story = StoryObj<typeof RcSesSelect>

function SelectDemo(args: any) {
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

export const Main: Story = {
  render: (args: any) => <SelectDemo {...args} />,
  args: {
    label: 'Label',
    disabled: false,
    slotProps: { wrapper: { labelOnTop: false } },
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

type VariantsFormModel = {
  singleSelect: string | null
  groupedSelect: string | null
  singleSearchSelect: string | null
  descriptionSelect: string | null
  multiSelect: string[]
  multiSearchSelect: string[]
  phoneInput: string
}

const variantOptions = [
  { value: 'option-1', label: '1st option' },
  { value: 'option-2', label: '2st option' },
  { value: 'option-3', label: '3rd option' },
  { value: 'option-4', label: '4th option' },
  { value: 'option-5', label: '5th option' },
]

const groupedVariantOptions: Array<
  {
    group: string
  } & {
    value: string
    label: string
  }
> = [
  { value: 'group-1-option-1', label: '1st option', group: 'GROUP 1' },
  { value: 'group-1-option-2', label: '2st option', group: 'GROUP 1' },
  { value: 'group-1-option-3', label: '3rd option', group: 'GROUP 1' },
  { value: 'group-2-option-4', label: '4th option', group: 'GROUP 2' },
  { value: 'group-2-option-5', label: '5th option', group: 'GROUP 2' },
]

const optionsWithDescriptions = [
  {
    value: 'option-1',
    label: '1st option',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    value: 'option-2',
    label: '2st option',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard.',
  },
  {
    value: 'option-3',
    label: '3rd option',
    description: 'Lorem ipsum is simply dummy text has been the industry standard.',
  },
  {
    value: 'option-4',
    label: '4th option',
    description: 'Lorem ipsum has been the industry standard.',
  },
]

const VariantCard = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) => (
  <Box>
    <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: '.25rem' }}>
      {title}
    </Typography>
    <Typography
      sx={{ color: '#667085', fontSize: '.75rem', mb: '1rem', minHeight: '2rem' }}
    >
      {description}
    </Typography>
    {children}
  </Box>
)

export const AllVariants: Story = {
  render: () => {
    const { control } = useForm<VariantsFormModel>({
      mode: 'all',
      defaultValues: {
        singleSelect: null,
        groupedSelect: null,
        singleSearchSelect: null,
        descriptionSelect: 'option-3',
        multiSelect: ['option-1', 'option-3'],
        multiSearchSelect: ['option-1', 'option-3', 'option-4', 'option-5'],
        phoneInput: '',
      },
    })

    return (
      <Box sx={{ p: '1rem 0' }}>
        <Box
          sx={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              xl: 'repeat(4, minmax(0, 1fr))',
            },
          }}
        >
          <VariantCard
            title='Basic'
            description='Bazinis variantas skirtas iprastiems atvejams.'
          >
            <RcSesSelect
              id='single-select'
              name='singleSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              options={variantOptions}
            />
          </VariantCard>

          <VariantCard
            title='Wide + descriptions'
            description='Didesnis variantas su aprasymais kiekvienai opcijai.'
          >
            <RcSesSelect
              id='description-select'
              name='descriptionSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              options={optionsWithDescriptions}
            />
          </VariantCard>

          <VariantCard
            title='Grouped'
            description='Sugrupuotos parinktys pagal kategorijas.'
          >
            <RcSesSelect
              id='grouped-select'
              name='groupedSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{
                wrapper: { labelOnTop: true },
                field: {
                  groupBy: (option) =>
                    groupedVariantOptions.find(
                      (groupedOption) => groupedOption.value === option.value,
                    )?.group ?? '',
                },
              }}
              options={groupedVariantOptions}
            />
          </VariantCard>

          <VariantCard title='Basic + search' description='Bazinis variantas su paieska.'>
            <RcSesSelect
              id='single-search-select'
              name='singleSearchSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              dropdownSearch
              dropdownSearchPlaceholder='Ieškoti'
              options={variantOptions}
            />
          </VariantCard>

          <VariantCard
            title='Multi select'
            description='Variantas kai galima pasirinkti kelias reiksmes.'
          >
            <RcSesSelect
              id='multi-select'
              name='multiSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              multiple
              options={variantOptions}
            />
          </VariantCard>

          <VariantCard
            title='Multi select + search'
            description='Daugybinis pasirinkimas su paieska ir select all.'
          >
            <RcSesSelect
              id='multi-search-select'
              name='multiSearchSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              multiple
              dropdownSearch
              selectAll
              dropdownSearchPlaceholder='Ieškoti'
              options={variantOptions}
            />
          </VariantCard>

          <VariantCard
            title='Phone input'
            description='Telefono numerio įvesties laukas su šalies kodo pasirinkimu.'
          >
            <RcSesPhoneInput
              id='phone-input'
              name='phoneInput'
              control={control}
              label='Phone number'
              slotProps={{ wrapper: { labelOnTop: true } }}
            />
          </VariantCard>
        </Box>
      </Box>
    )
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
}
