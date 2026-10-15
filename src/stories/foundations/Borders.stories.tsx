import { Box, Button, Card, Stack, ThemeProvider, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { borderTokens } from '@/theme/borderTokens'
import tokenTheme from '@/theme/tokenTheme'

const meta = {
  title: 'Foundations/Borders',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Radius: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Input description specifies 6 px, but the Figma export alias points to 8 px. The exported reference is used; designer confirmation is still required.',
      },
    },
  },
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Radius primitives and aliases</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {Object.entries(borderTokens)
            .filter(([name]) => name.startsWith('radius-'))
            .map(([name, value]) => (
              <Box
                key={name}
                data-testid={name}
                sx={{ borderRadius: value, border: '1px solid', p: 2 }}
              >
                {name}
              </Box>
            ))}
        </Box>
        <Box
          data-testid='theme-radius'
          sx={{ borderRadius: 2, border: '1px solid', p: 2 }}
        >
          theme.shape.borderRadius * 2
        </Box>
        <Card data-testid='theme-card' sx={{ p: 2 }}>
          Card radius alias
        </Card>
        <Button data-testid='theme-button'>Button radius alias</Button>
      </Stack>
    </ThemeProvider>
  ),
}
