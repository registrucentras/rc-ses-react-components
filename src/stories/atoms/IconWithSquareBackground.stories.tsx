import { Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InfoFillIcon, InfoIcon } from '@/assets/icons/phosphorIcons'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'

const meta: Meta<typeof RcSesIconWithSquareBackground> = {
  title: 'Atoms/IconWithSquareBackground',
  component: RcSesIconWithSquareBackground,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40, 44, 48, 56, 64],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'cyan', 'muted', 'green'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    Icon: InfoIcon,
    size: 44,
    variant: 'solid',
  },
}

const SIZES = [16, 20, 24, 32, 40, 44, 48, 56, 64] as const
const VARIANTS = ['solid', 'cyan', 'muted', 'green'] as const

export const AllVariantsAndSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack spacing={3}>
      {SIZES.map((size) => (
        <Stack key={size} spacing={1}>
          <Typography variant='caption'>size: {size}</Typography>
          <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            {VARIANTS.map((variant) => (
              <Stack key={variant} spacing={0.5} sx={{ alignItems: 'center' }}>
                <RcSesIconWithSquareBackground
                  Icon={InfoIcon}
                  size={size}
                  variant={variant}
                />
                <Typography variant='caption'>{variant}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
}
