import { Button, Typography } from '@mui/material'
import type { Meta } from '@storybook/react-vite'
import React from 'react'

import RcSesTooltip from '@/components/common/Tooltip'

const meta = {
  title: 'Atoms/Tooltip',
  component: RcSesTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Tooltip content',
    },
    placement: {
      control: 'select',
      options: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
      description: 'Popper placement relative to the trigger',
    },
    slotProps: {
      control: false,
      description: 'Overrides for default trigger button',
    },
    children: {
      control: false,
      description: 'Custom trigger element, must forward ref!',
    },
  },
} satisfies Meta<typeof RcSesTooltip>

export default meta

export const Default = {
  args: {
    title:
      'Deklaruojant išvykimą iš Lietuvos nurodoma užsienio valstybė, į kurią išvykstama.',
  },
  tags: ['snapshot-fullpage'],
  render: (args: any) => {
    const triggerRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
      // Wait for tooltip to be fully rendered and positioned
      const timer = setTimeout(() => {
        const button = triggerRef.current?.querySelector('button')
        if (button) {
          button.click()
          // Force a small paint delay to ensure the tooltip pops in
          // and MUI calculates its position before screenshot
        }
      }, 500)

      return () => clearTimeout(timer)
    }, [])

    return (
      <Typography>
        Išvykimo valstybė
        <span ref={triggerRef}>
          <RcSesTooltip {...args} />
        </span>
      </Typography>
    )
  },
} as const

export const CustomTrigger = {
  args: {
    title: 'Papildoma informacija apie paslaugą.',
  },
  render: (args: any) => (
    <RcSesTooltip {...args}>
      <Button variant='text'>Mygtukas</Button>
    </RcSesTooltip>
  ),
  parameters: {
    docs: {
      source: {
        code: `<RcSesTooltip title="Papildoma informacija apie paslaugą.">
  <Button variant="text">Mygtukas</Button>
</RcSesTooltip>`,
      },
    },
  },
} as const
