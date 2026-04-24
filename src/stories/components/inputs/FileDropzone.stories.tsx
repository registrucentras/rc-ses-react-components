/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'
import { FieldError, useForm } from 'react-hook-form'

import RcSesFileDropzone from '@/components/form/inputs/FileDropzone'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

type FormModel = {
  documents: File[]
  documentsDisabled: File[]
  documentsError: File[]
}

const meta: Meta<typeof RcSesFileDropzone> = {
  title: 'components/inputs/FileDropzone',
  component: RcSesFileDropzone,
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

const Template: StoryFn<typeof RcSesFileDropzone> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      documents: [],
      documentsDisabled: [],
      documentsError: [],
    },
  })

  const { label, slotProps } = args

  return (
    <Fields>
      <FieldView>
        <RcSesFileDropzone
          id='documents'
          name='documents'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={errors?.documents as FieldError | undefined}
          slotProps={slotProps}
        />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews</PreviewTitle>

        <RcSesFileDropzone
          id='documentsDisabled'
          name='documentsDisabled'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          errors={errors?.documentsDisabled as FieldError | undefined}
          slotProps={slotProps}
        />

        <RcSesFileDropzone
          id='documentsError'
          name='documentsError'
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
  label: 'Upload files',
  slotProps: {
    wrapper: {
      labelSubtitle: 'Tinkami formatai: .doc, .docx, .pdf',
    },
  },
}
