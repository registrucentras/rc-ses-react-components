import { Box, Typography } from '@mui/material'
import { Meta, StoryContext, StoryObj } from '@storybook/react-vite'
import { useForm, useWatch } from 'react-hook-form'

import RcSesPhoneInput from '@/components/form/inputs/PhoneInput'
import RcSesSelect from '@/components/form/inputs/Select'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSelect> = {
  title: 'Atoms/Select',
  component: RcSesSelect,
  parameters: {
    docs: {
      description: {
        component:
          'RcSesSelect naudoja DS tokenus, išlaikydamas esamą API: chips, limitTags, paiešką ir selectAll. Nauja tekstinė santrauka ir kitokia „Visi“ logika nepriklauso šiam tokenų perrišimui.',
      },
    },
  },
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

  const { label, disabled, placeholder, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesSelect
          id='selection'
          name='selection'
          control={control}
          label={label}
          disabled={disabled}
          placeholder={placeholder}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
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
  const { label, disabled, placeholder, slotProps } = args
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
      placeholder="${placeholder ?? ''}"
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

function SelectTokenPreview({ customized = false }: { customized?: boolean }) {
  const { control } = useForm<{
    single: string | null
    multiple: string[]
    grouped: string[]
    invalid: string | null
    disabled: string | null
    loading: string | null
  }>({
    defaultValues: {
      single: null,
      multiple: ['first', 'second'],
      grouped: [],
      invalid: null,
      disabled: 'first',
      loading: null,
    },
  })
  const values = useWatch({ control })
  const options = [
    { value: 'first', label: 'First option', description: 'Option description' },
    { value: 'second', label: 'Second option' },
    { value: 'third', label: 'Third option' },
  ]
  return (
    <Box sx={{ width: '26.75rem', maxWidth: '100%', p: 2 }}>
      <RcSesSelect
        id='tokens-single'
        name='single'
        label='Single'
        control={control}
        options={options}
        slotProps={{
          wrapper: { labelOnTop: true, description: 'Field description' },
          field: customized
            ? {
                sx: {
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '3px',
                    bgcolor: 'rebeccapurple',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'purple' },
                  },
                },
                slotProps: {
                  paper: {
                    sx: { bgcolor: 'lavender', boxShadow: 'none', borderRadius: '3px' },
                  },
                },
              }
            : undefined,
        }}
      />
      <RcSesSelect
        id='tokens-multiple'
        name='multiple'
        label='Multiple'
        control={control}
        options={options}
        multiple
        limitTags={1}
        slotProps={{ wrapper: { labelOnTop: true } }}
      />
      <RcSesSelect
        id='tokens-grouped'
        name='grouped'
        label='Grouped'
        control={control}
        options={options}
        multiple
        dropdownSearch
        selectAll
        slotProps={{
          wrapper: { labelOnTop: true },
          field: {
            groupBy: (option) => (option.value === 'third' ? 'Group B' : 'Group A'),
          },
        }}
      />
      <RcSesSelect
        id='tokens-invalid'
        name='invalid'
        label='Error'
        control={control}
        options={options}
        errors={{ type: 'manual', message: 'Invalid selection' }}
        slotProps={{ wrapper: { labelOnTop: true } }}
      />
      <RcSesSelect
        id='tokens-disabled'
        name='disabled'
        label='Disabled'
        control={control}
        options={options}
        disabled
        slotProps={{ wrapper: { labelOnTop: true } }}
      />
      <RcSesSelect
        id='tokens-loading'
        name='loading'
        label='Loading'
        control={control}
        options={[]}
        loading
        slotProps={{ wrapper: { labelOnTop: true } }}
      />
      <Box
        component='pre'
        data-testid='select-values'
        sx={{ whiteSpace: 'pre-wrap', fontSize: '.75rem' }}
      >
        {JSON.stringify(values)}
      </Box>
    </Box>
  )
}

export const TokenBindings: Story = { render: () => <SelectTokenPreview /> }
export const TokenOverrides: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Vartotojo `slotProps.field.sx` ir sąrašo `sx` perrašymai Single laukui turi pirmenybę prieš tokenų stilius. Violetinės spalvos naudojamos tik šiam patikrinimui.',
      },
    },
  },
  render: () => <SelectTokenPreview customized />,
}

interface VariantsFormModel {
  singleSelect: string | null
  groupedSelect: string | null
  groupedMultiSelect: string[]
  singleSearchSelect: string | null
  descriptionSelect: string | null
  multiSelect: string[]
  limitedMultiSelect: string[]
  multiSearchSelect: string[]
  phoneInput: string
}

const variantOptions = [
  { value: 'option-1', label: '1st option' },
  { value: 'option-2', label: '2st option' },
  { value: 'option-3', label: '3rd option' },
  { value: 'option-4', label: '4th option' },
  { value: 'option-5', label: '5th option' },
  {
    value: 'long-option-1',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    value: 'long-option-2',
    label:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const groupedVariantOptions: ({
  group: string
} & {
  value: string
  label: string
})[] = [
  { value: 'group-1-option-1', label: '1st option', group: 'Group 1' },
  { value: 'group-1-option-2', label: '2st option', group: 'Group 1' },
  { value: 'group-1-option-3', label: '3rd option', group: 'Group 1' },
  { value: 'group-2-option-4', label: '4th option', group: 'Group 2' },
  { value: 'group-2-option-5', label: '5th option', group: 'Group 2' },
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
        groupedMultiSelect: ['group-2-option-4', 'group-2-option-5'],
        singleSearchSelect: null,
        descriptionSelect: 'option-3',
        multiSelect: ['option-1', 'option-3'],
        limitedMultiSelect: ['option-1', 'option-2', 'option-3'],
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

          <VariantCard
            title='Grouped multi select + search'
            description='Grupė yra pati savarankiškai pažymima reikšmė - pažymėjus grupę pažymimi visi jos nariai, nužymėjus bet kurį narį grupė automatiškai nužymima.'
          >
            <RcSesSelect
              id='grouped-multi-select'
              name='groupedMultiSelect'
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
              multiple
              dropdownSearch
              selectAll
              dropdownSearchPlaceholder='Ieškoti'
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
            title='Multi select + limit tags'
            description='Daugybinis pasirinkimas su limitTags={1}, kai pertekliniai pasirinkimai sutraukiami i +N.'
          >
            <RcSesSelect
              id='limited-multi-select'
              name='limitedMultiSelect'
              control={control}
              label='Pasirinkti'
              slotProps={{ wrapper: { labelOnTop: true } }}
              multiple
              limitTags={1}
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
