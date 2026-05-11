import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import SimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'

const meta = {
  title: 'components/inputs/SimpleCheckbox',
  component: SimpleCheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleCheckbox>

export default meta
type Story = StoryObj<typeof meta>

function BasicDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <SimpleCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

export const Basic: Story = {
  render: () => <BasicDemo />,
}
