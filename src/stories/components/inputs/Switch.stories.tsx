import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesSwitch from '@/components/common/Switch'

const meta = {
  title: 'components/inputs/Switch',
  component: RcSesSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RcSesSwitch>

export default meta
type Story = StoryObj<typeof meta>

type ControlledDemoProps = {
  initialChecked?: boolean
  disabled?: boolean
  label?: string
}

function ControlledDemo({
  initialChecked = false,
  disabled = false,
  label = 'Notifications',
}: ControlledDemoProps) {
  const [checked, setChecked] = useState(initialChecked)
  return (
    <RcSesSwitch
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={(_event, value) => setChecked(value)}
    />
  )
}

export const On: Story = {
  args: { label: 'Notifications', checked: true, onChange: () => {} },
  render: () => <ControlledDemo initialChecked />,
}

export const Off: Story = {
  args: { label: 'Notifications', checked: false, onChange: () => {} },
  render: () => <ControlledDemo />,
}

export const OnDisabled: Story = {
  name: 'On, Disabled',
  args: { label: 'Notifications', checked: true, onChange: () => {} },
  render: () => <ControlledDemo initialChecked disabled />,
}

export const OffDisabled: Story = {
  name: 'Off, Disabled',
  args: { label: 'Notifications', checked: false, onChange: () => {} },
  render: () => <ControlledDemo disabled />,
}

export const LongLabel: Story = {
  name: 'Long label',
  args: { label: 'Notifications', checked: false, onChange: () => {} },
  render: () => (
    <div style={{ maxWidth: '16rem' }}>
      <ControlledDemo label='Send me an email whenever there is a new comment on any of my open service requests' />
    </div>
  ),
}
