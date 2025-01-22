/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesSearchableField from '@/components/form/inputs/SearchableField'
import ObjectIdentifierSearchModal from '@/examples/SingleStepForm/components/ObjectIdentifierSearchModal'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSearchableField> = {
  title: 'components/common/inputs/SearchableField',
  component: RcSesSearchableField,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesSearchableField> = (args) => {
  const { label } = args
  const {
    control,
    formState: { errors },
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      searchable: '',
    },
  })

  return (
    <RcSesSearchableField
      control={control}
      id='searchable'
      errors={errors?.searchable}
      label={label}
      name='searchable'
      rules={{ required: true }}
      ModalComponent={ObjectIdentifierSearchModal}
      slotProps={{
        wrapper: {
          // fieldSuffix: (
          //   <RcSesButtonWithPopover popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
          // ),
        },
      }}
    />
  )
}

const codeBlock = (args: any) => {
  const { label } = args
  return `
  import RcSesSearchableField from '@/components/form/inputs/SearchableField'

  const MyComponent = () => (

  const { control, formState: { errors } } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { searchable: '', } })

    <RcSesSearchableField
      control={control}
      id='searchable'
      errors={errors?.searchable}
      label='${label}'
      name='searchable'
      rules={{ required: true }}
      ModalComponent={ObjectIdentifierSearchModal}
      slotProps={{
        wrapper: {
          fieldSuffix: (
            <RcSesButtonWithPopover popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
          ),
        },
      }}
    />
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'This is label',
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
