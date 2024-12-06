import { Meta, StoryContext, StoryFn } from '@storybook/react'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import Fields from '@/components/storybook/Fields'
import FieldView from '@/components/storybook/FieldView'
import RcSesTextField from '@/components/form/inputs/TextField'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'


const meta: Meta<typeof RcSesTextField> = {
  title: 'components/common/inputs/TextField',
  component: RcSesTextField,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesTextField> = (args) => (
  <Fields>
    <FieldView >
      <RcSesTextField {...args} />
    </FieldView>

    <FieldPreviewRow>
      <PreviewTitle>State previews label on side</PreviewTitle>
      <RcSesTextField label="Label" />
      <RcSesTextField errors={{ message: "Klaidos pranešimas", type: 'required' }} label="Label" />
      <RcSesTextField disabled label="Label" />
    </FieldPreviewRow>

    <FieldPreviewRow>
      <PreviewTitle>State previews label on top</PreviewTitle>
      <RcSesTextField slotProps={{ wrapper: { labelOnTop: true } }} label="Label" />
      <RcSesTextField slotProps={{ wrapper: { labelOnTop: true } }} errors={{ message: "Klaidos pranešimas", type: 'required' }} label="Label" />
      <RcSesTextField slotProps={{ wrapper: { labelOnTop: true } }} disabled label="Label" />
    </FieldPreviewRow>
  </Fields>
)

const codeBlock = (args: any) => {
  const { slotProps, disabled, label } = args
  return `
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${label}" slotProps=${slotProps.wrapper.labelOnTop ? "{{ wrapper: { labelOnTop: true } }}" : "{{ wrapper: { labelOnTop: false} }}"} disabled="${disabled}" />
  );`

}


export const Main = Template.bind({})
Main.args = {
  label: 'label',
  disabled: false,
  slotProps: { wrapper: { labelOnTop: false } },
}


Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => { return codeBlock(storyContext.args) },
    },
  },
};
