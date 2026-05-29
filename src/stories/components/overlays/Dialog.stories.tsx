import { Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import RcSesButton from '@/components/common/Button'
import RcSesDialog, { RcSesDialogProps } from '@/components/overlays/Dialog'

const meta: Meta<typeof RcSesDialog> = {
  component: RcSesDialog,
  title: 'components/overlays/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RcSesDialog>

function DialogStory({
  dialogTitle,
  size,
  children,
  ...props
}: RcSesDialogProps & { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle={dialogTitle}
        size={size}
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        {children}
      </RcSesDialog>
    </>
  )
}

export const Basic: Story = {
  render: (args) => (
    <DialogStory {...args}>
      <Typography>Are you sure you want to proceed?</Typography>
    </DialogStory>
  ),
  args: {
    dialogTitle: 'Confirm Action',
  },
  parameters: {
    docs: {
      source: {
        code: `import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function BasicDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Confirm Action'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>Are you sure you want to proceed?</Typography>
      </RcSesDialog>
    </>
  )
}`,
      },
    },
  },
}

export const SmallDialog: Story = {
  render: (args) => (
    <DialogStory {...args}>
      <Typography>
        This is a <b>small</b> dialog (480px width).
      </Typography>
    </DialogStory>
  ),
  args: {
    dialogTitle: 'Small Dialog',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size dialog (480px width).',
      },
      source: {
        code: `import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function SmallDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Small Dialog'
        size='sm'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a small dialog (480px width).</Typography>
      </RcSesDialog>
    </>
  )
}`,
      },
    },
  },
}

export const MediumDialog: Story = {
  render: (args) => (
    <DialogStory {...args}>
      <Typography>
        This is a <b>medium</b> dialog (600px width).
      </Typography>
    </DialogStory>
  ),
  args: {
    dialogTitle: 'Medium Dialog',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size (600px width) dialog. This is the default size.',
      },
      source: {
        code: `import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function MediumDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Medium Dialog'
        size='md'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a medium dialog (600px width).</Typography>
      </RcSesDialog>
    </>
  )
}`,
      },
    },
  },
}

export const LargeDialog: Story = {
  render: (args) => (
    <DialogStory {...args}>
      <Typography>
        This is a <b>large</b> dialog (800px width).
      </Typography>
    </DialogStory>
  ),
  args: {
    dialogTitle: 'Large Dialog',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size (800px width) dialog for content-heavy forms or information.',
      },
      source: {
        code: `import { useState } from 'react'
import { Typography } from '@mui/material'
import { RcSesButton, RcSesDialog } from '@registrucentras/rc-ses-react-components'

export function LargeDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Open Dialog
      </RcSesButton>
      <RcSesDialog
        open={open}
        onClose={() => setOpen(false)}
        dialogTitle='Large Dialog'
        size='lg'
        actions={
          <>
            <RcSesButton onClick={() => setOpen(false)} color='grey' variant='outlined'>
              Cancel
            </RcSesButton>
            <RcSesButton onClick={() => setOpen(false)} variant='contained'>
              Confirm
            </RcSesButton>
          </>
        }
      >
        <Typography>This is a large dialog (800px width).</Typography>
      </RcSesDialog>
    </>
  )
}`,
      },
    },
  },
}
