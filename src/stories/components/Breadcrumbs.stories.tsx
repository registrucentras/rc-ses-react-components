/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'

const Path = [
  {
    label: 'Level 2',
    path: 'level-2',
  },
  {
    label: 'Level 3',
    path: 'level-3',
  },
]

const meta: Meta<typeof RcSesBreadcrumbs> = {
  title: 'components/common/Breadcrumbs',
  component: RcSesBreadcrumbs,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesBreadcrumbs> = (args) => (
  <RcSesBreadcrumbs {...args} />
)

export const Main = Template.bind({})
Main.args = {
  path: Path,
}
