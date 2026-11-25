import { Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CSSProperties, useState } from 'react'

import RcSesSwitch from '@/components/common/Switch'

const meta = {
  title: 'Atoms/Switch',
  component: RcSesSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RcSesSwitch>

export default meta
type Story = StoryObj<typeof meta>

interface ControlledDemoProps {
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

export const TokenBindings: Story = {
  args: { label: 'Notifications' },
  render: () => (
    <Stack spacing={2}>
      <ControlledDemo label='Unchecked switch' />
      <ControlledDemo label='Checked switch' initialChecked />
      <ControlledDemo label='Disabled unchecked switch' disabled />
      <ControlledDemo label='Disabled checked switch' initialChecked disabled />
    </Stack>
  ),
}

export const TokenOverrides: Story = {
  ...TokenBindings,
  render: () => (
    <div
      style={
        {
          '--rc-color-control-selected': '#008561',
          '--rc-color-control-selected-hover': '#00664e',
        } as CSSProperties
      }
    >
      <ControlledDemo initialChecked />
    </div>
  ),
}

export const ConsumerOverrides: Story = {
  args: { label: 'Custom switch' },
  render: () => (
    <RcSesSwitch
      label='Custom switch'
      defaultChecked
      sx={{
        '& .MuiSwitch-track': { backgroundColor: '#008561' },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#008561',
        },
      }}
    />
  ),
}
