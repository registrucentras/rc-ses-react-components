import { Box, Stack, Typography } from '@mui/material'
import { CheckIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { sizeTokens } from '@/theme/sizeTokens'
import '@/theme/tokens.css'

const meta = {
  title: 'Foundations/Sizes',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['primitives', 'aliases'] as const).map((group) => (
        <Stack key={group} spacing={1}>
          <Typography variant='h2'>Icon {group}</Typography>
          {Object.entries(sizeTokens)
            .filter(([name]) => name.startsWith(`icon-${group}-`))
            .map(([name, value]) => (
              <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckIcon
                  data-testid={name}
                  aria-hidden
                  style={{ width: value, height: value, flexShrink: 0 }}
                />
                <span>{name}</span>
              </Box>
            ))}
        </Stack>
      ))}
    </Stack>
  ),
}
