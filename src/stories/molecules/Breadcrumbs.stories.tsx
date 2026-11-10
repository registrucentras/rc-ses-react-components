import { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

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
  title: 'Molecules/Breadcrumbs',
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

export const TokenBindings: Story = {
  args: {
    path: [
      { label: 'Home', path: '#home' },
      { label: 'Services', path: '#services' },
      { label: 'Current page', path: '#current' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumbs use the Figma Body/Micro role, 6px separator spacing and DS color tokens. Link behavior is preserved.',
      },
    },
  },
}

export const TokenOverrides: Story = {
  ...TokenBindings,
  render: (args) => (
    <div
      style={
        {
          '--rc-color-text-secondary': '#008561',
          '--rc-color-text-default': '#0e6790',
          '--rc-space-6': '10px',
        } as CSSProperties
      }
    >
      <RcSesBreadcrumbs {...args} />
    </div>
  ),
}

export const ConsumerOverrides: Story = {
  ...TokenBindings,
  args: {
    ...TokenBindings.args,
    sx: {
      fontSize: '18px',
      '& .MuiBreadcrumbs-li': {
        paddingTop: '3px',
        paddingBottom: '3px',
        '& a': { color: '#008561' },
      },
    },
  },
}
