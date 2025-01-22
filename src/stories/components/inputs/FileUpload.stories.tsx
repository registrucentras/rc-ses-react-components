/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesFileUpload from '@/components/form/inputs/FileUpload'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

type FormModel = {
  uploadFile: string
  uploadFile2: string
  uploadFile3: string
}

const meta: Meta<typeof RcSesFileUpload> = {
  title: 'components/common/inputs/FileUpload',
  component: RcSesFileUpload,
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
    slotProps: {
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

const Template: StoryFn<typeof RcSesFileUpload> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: { uploadFile: '', uploadFile2: '', uploadFile3: '' },
  })

  const { label } = args

  return (
    <Fields>
      <FieldView>
        <RcSesFileUpload
          id='uploadFile'
          name='uploadFile'
          control={control}
          rules={{ required: true }}
          label={label}
          errors={errors?.uploadFile}
          slotProps={{
            wrapper: { labelSubtitle: 'Tinkami formatai: .doc, .xdoc, .pdf, .pages' },
          }}
        />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews</PreviewTitle>

        <RcSesFileUpload
          id='uploadFile2'
          name='uploadFile2'
          control={control}
          rules={{ required: true }}
          label='Disabled'
          disabled
          errors={errors?.uploadFile2}
        />

        <RcSesFileUpload
          id='uploadFile3'
          name='uploadFile3'
          control={control}
          rules={{ required: true }}
          label='Error'
          errors={{ message: 'Error Message', type: 'required' }}
        />

        {/* <RcSesFileUpload
          id='fileUpload2'
          name='fileUpload'
          control={control}
          rules={{ required: true }}
          label='Failo įkėlimas'
          errors={errors?.fileUpload}
          slotProps={{
            wrapper: {
              fieldSuffix: (
                <RcSesButtonWithPopover popoverContent='Tinkami formatai: .doc, .xdoc, .pdf, .pages' />
              ),
            },
          }}
        /> */}
      </FieldPreviewRow>
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const { label } = args
  return `
  import RcSesFileUpload from '@/components/form/inputs/FileUpload'


  const MyComponent = () => (

  const { control, formState: { errors } } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { fileUpload: '', } })

    <RcSesFileUpload
      id="fileUpload"
      name="fileUpload"
      control={control}
      rules={{ required: true }}
      label="${label}"
      errors={errors?.fileUpload}
      slotProps={{
        wrapper: { labelSubtitle: 'File formats: .doc, .xdoc, .pdf, .pages' },
      }}
    />

  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'Upload file',
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
