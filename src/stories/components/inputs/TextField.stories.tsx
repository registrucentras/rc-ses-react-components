import { Meta, StoryContext, StoryObj } from '@storybook/react'

import RcSesTextField from '@/components/form/inputs/TextField'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const meta: Meta<typeof RcSesTextField> = {
  title: 'components/inputs/TextField',
  component: RcSesTextField,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesTextField>

const codeBlock = (args: any) => {
  const { slotProps, disabled, label } = args
  return `
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${label}" slotProps=${slotProps.wrapper.labelOnTop ? '{{ wrapper: { labelOnTop: true } }}' : '{{ wrapper: { labelOnTop: false} }}'} disabled="${disabled}" />
  );`
}

export const Main: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesTextField {...args} />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on side</PreviewTitle>
        <RcSesTextField label='Label' />
        <RcSesTextField
          errors={{ message: 'Klaidos pranešimas', type: 'required' }}
          label='Label'
        />
        <RcSesTextField disabled label='Label' />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on top</PreviewTitle>
        <RcSesTextField slotProps={{ wrapper: { labelOnTop: true } }} label='Label' />
        <RcSesTextField
          slotProps={{ wrapper: { labelOnTop: true } }}
          errors={{ message: 'Klaidos pranešimas', type: 'required' }}
          label='Label'
        />
        <RcSesTextField
          slotProps={{ wrapper: { labelOnTop: true } }}
          disabled
          label='Label'
        />
      </FieldPreviewRow>
    </Fields>
  ),
  args: {
    label: 'label',
    disabled: false,
    multiline: true,
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
