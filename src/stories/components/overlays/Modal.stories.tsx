import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import RcSesModal from '@/components/overlays/Modal'

const meta: Meta<typeof RcSesModal> = {
  component: RcSesModal,
  title: 'components/overlays/Modal',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RcSesModal>

function ModalDemo(args: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant='contained'>
        Open Modal
      </Button>
      <RcSesModal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onPrimaryAction={() => setOpen(false)}
        onSecondaryAction={() => setOpen(false)}
      />
    </>
  )
}

export const Destructive: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Ar tikrai norite pašalinti?',
    message: 'Aprašymo tekstas.',
    variant: 'destructive',
    secondaryActionLabel: 'Atšaukti',
    showIcon: true,

    primaryActionLabel: 'Pašalinti',
  },
}

export const Confirm: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Ar tikrai norite tęsti?',
    message: 'Aprašymo tekstas.',
    variant: 'confirm',
    showIcon: true,

    secondaryActionLabel: 'Atšaukti',
    primaryActionLabel: 'Tęsti',
  },
}

export const Success: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Pavyko!',
    message: 'Aprašymo tekstas.',
    variant: 'success',
    showIcon: true,

    primaryActionLabel: 'Uždaryti',
  },
}

export const Info: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Informacija',
    message: 'Aprašymo tekstas.',
    variant: 'info',
    showIcon: true,

    primaryActionLabel: 'Suprantu',
  },
}

export const WithoutIcon: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Ar tikrai norite pašalinti?',
    message: 'Aprašymo tekstas.',
    variant: 'destructive',
    showIcon: false,
    secondaryActionLabel: 'Atšaukti',
    primaryActionLabel: 'Pašalinti',
  },
}
