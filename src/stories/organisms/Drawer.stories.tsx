import { Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesButton from '@/components/common/Button'
import Drawer from '@/components/overlays/Drawer'

const meta = {
  title: 'Organisms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    onClose: { control: false },
  },
  args: {
    title: 'Filtrai',
    showFooter: true,
    children: (
      <Stack sx={{ gap: '1rem' }}>
        <Typography variant='body2'>
          Turinys (slot) - filtrai, paieška, sąrašas, facetai
        </Typography>
      </Stack>
    ),
  },
} satisfies Meta<typeof Drawer>

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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RcSesButton variant='contained' onClick={() => setIsOpen(true)}>
          Open Drawer
        </RcSesButton>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story:
          'Basic drawer that slides in from the right. Use the trigger button to open; close with the close button, Escape key, or backdrop click. Footer shows by default with action buttons. Supports keyboard navigation (Tab/Shift+Tab focus trap, Esc to close).',
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
    showFooter={true}
  >
    {/* Drawer content */}
  </Drawer>
</>`,
      },
    },
  },
}
