import { Meta, StoryObj } from '@storybook/react'

import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const meta: Meta<typeof RcSesServiceFormActions> = {
  title: 'components/form/ServiceFormActions',
  component: RcSesServiceFormActions,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesServiceFormActions>

const codeBlock = () => `
  import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'

  const MyComponent = () => (
    <RcSesServiceFormActions/>
  );`

export const Main: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesServiceFormActions {...args} />
      </FieldView>
    </Fields>
  ),
  args: {},
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: () => codeBlock(),
      },
    },
  },
}
