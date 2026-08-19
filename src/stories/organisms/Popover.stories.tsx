import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ReactNode, useState } from 'react'

import RcSesPopover from '@/components/common/Popover'

/**
 * `RcSesButtonWithPopover` owns the popover's open state internally and starts
 * closed, so `MuiPopover` never reached a visual baseline (SAV-5648 / LIB-02).
 * These stories render the popover itself, already open against a fixed anchor.
 */
const meta: Meta<typeof RcSesPopover> = {
  title: 'Organisms/Popover',
  component: RcSesPopover,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof RcSesPopover>

function OpenPopover({ children, header }: { children: ReactNode; header?: ReactNode }) {
  // A callback ref rather than an effect: the popover needs a mounted anchor
  // element, and assigning one from an effect trips react-hooks/set-state-in-effect.
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  return (
    <Box sx={{ pb: '12rem' }}>
      <Box
        ref={setAnchorEl}
        sx={{
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: 1,
          display: 'inline-block',
          px: 1.5,
          py: 1,
        }}
      >
        Anchor
      </Box>

      <RcSesPopover anchorEl={anchorEl} header={header} open={Boolean(anchorEl)}>
        {children}
      </RcSesPopover>
    </Box>
  )
}

export const Default: Story = {
  args: {
    header: 'Information',
    children: 'Hover or click the question icon to see this popover content',
  },
  render: (args) => <OpenPopover header={args.header}>{args.children}</OpenPopover>,
}

export const WithoutHeader: Story = {
  args: {
    children: 'Tinkami formatai: .doc, .xdoc, .pdf, .pages',
  },
  render: (args) => <OpenPopover>{args.children}</OpenPopover>,
}
