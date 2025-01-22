/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'

import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

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

const codeBlock = (args: any) => `
  import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'

  const MyComponent = () => (
    <RcSesServiceFormActions/>
  );`

export const Main = Template.bind({})
Main.args = {}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) =>
        codeBlock(storyContext.args),
    },
  },
}
