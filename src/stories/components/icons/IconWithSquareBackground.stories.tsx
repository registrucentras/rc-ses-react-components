import { Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'

const meta: Meta<typeof RcSesIconWithSquareBackground> = {
  title: 'components/icons/IconWithSquareBackground',
  component: RcSesIconWithSquareBackground,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [40, 44],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'muted'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    Icon: InfoFillIcon,
    size: 44,
    variant: 'solid',
  },
}

const SIZES = [40, 44] as const
const VARIANTS = ['solid', 'soft', 'muted'] as const

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
                  Icon={InfoFillIcon}
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
