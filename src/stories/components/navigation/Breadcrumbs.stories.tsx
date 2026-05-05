import { Meta, StoryObj } from '@storybook/react'

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
  title: 'components/navigation/Breadcrumbs',
  component: RcSesBreadcrumbs,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesBreadcrumbs>

export const Main: Story = {
  args: {
    path: Path,
  },
}
