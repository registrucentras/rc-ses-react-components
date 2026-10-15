import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import tokenTheme from '@/theme/tokenTheme'

const meta = {
  title: 'Foundations/Spacing',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Tokens: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Spacing roles</Typography>
        {Object.entries(spacingRoleBasedTokens)
          .filter(([name]) => !name.startsWith('primitives-'))
          .map(([name, value]) => (
            <Box
              key={name}
              data-testid={name}
              sx={
                name.startsWith('gap-')
                  ? { display: 'flex', gap: value }
                  : { py: value, px: name.startsWith('padding-') ? value : 0 }
              }
            >
              <span>{name}</span>
              <span>A</span>
              <span>B</span>
            </Box>
          ))}
        <Box data-testid='theme-spacing' sx={{ p: 3 }}>
          theme.spacing(3)
        </Box>
        <Box data-testid='fraction-spacing' sx={{ p: 1.75 }}>
          theme.spacing(1.75)
        </Box>
      </Stack>
    </ThemeProvider>
  ),
}
