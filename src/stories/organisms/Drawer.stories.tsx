import { Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesButton from '@/components/common/Button'
import RcSesDrawer from '@/components/overlays/Drawer'

const meta = {
  title: 'Organisms/Drawer',
  component: RcSesDrawer,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    onClose: { control: false },
    onPrimaryAction: { control: false },
    onSecondaryAction: { control: false },
  },
  args: {
    title: 'Filtrai',
    secondaryActionLabel: 'Išvalyti',
    primaryActionLabel: 'Rodyti paslaugas',
    children: (
      <Stack sx={{ gap: '1rem' }}>
        <Typography variant='body2'>
          Turinys (slot) - filtrai, paieška, sąrašas
        </Typography>
      </Stack>
    ),
  },
} satisfies Meta<typeof RcSesDrawer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RcSesButton variant='contained' onClick={() => setIsOpen(true)}>
          Open Drawer
        </RcSesButton>
        <RcSesDrawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic drawer that slides in from the right. Use the trigger button to open; close with the close button, Escape key, or backdrop click. Footer action buttons are optional and configurable via primaryActionLabel/onPrimaryAction and secondaryActionLabel/onSecondaryAction. Supports keyboard navigation (Tab/Shift+Tab focus trap, Esc to close).',
      },
      source: {
        code: `const [isOpen, setIsOpen] = useState(false)

<>
  <RcSesButton variant='contained' onClick={() => setIsOpen(true)}>
    Open Drawer
  </RcSesButton>
  <Drawer
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title='Filtrai'
    secondaryActionLabel='Cancel'
    onSecondaryAction={() => setIsOpen(false)}
    primaryActionLabel='Apply'
    onPrimaryAction={() => setIsOpen(false)}
  >
    {/* Drawer content */}
  </Drawer>
</>`,
      },
    },
  },
}
