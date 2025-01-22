import { Meta, StoryContext, StoryFn } from '@storybook/react'

import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const meta: Meta<typeof RcSesServiceFormActions> = {
  title: 'components/common/form/ServiceFormActions',
  component: RcSesServiceFormActions,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesServiceFormActions> = (args) => (
  <Fields>
    <FieldView>
      <RcSesServiceFormActions {...args} />
    </FieldView>
  </Fields>
)

const codeBlock = (args: any) => {
  return `
  import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
  
  const MyComponent = () => (
    <RcSesServiceFormActions/>
  );`
}

export const Main = Template.bind({})
Main.args = {
 
}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => {
        return codeBlock(storyContext.args)
      },
    },
  },
}