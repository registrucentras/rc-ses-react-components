import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { createRcSesTokenTheme } from '@/theme/tokenTheme'
import { typographyRoleVariants } from '@/theme/typographyTokens'

const tokenTheme = createRcSesTokenTheme()

const meta = {
  title: 'Foundations/Typography',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Dimensions: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h2'>Typography from theme</Typography>
        <Typography>
          All 14 roles use theme typography variants. Existing font attributes are
          retained; new named styles inherit family and weight until the Figma text styles
          export is available.
        </Typography>
        {Object.entries(typographyRoleVariants).map(([role, variant]) => (
          <Typography key={role} variant={variant} data-testid={role}>
            {role}: Aa Bb 0123456789
          </Typography>
        ))}
      </Stack>
    </ThemeProvider>
  ),
}

export const Inheritance: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Box sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
        {(['headingCardTitle', 'bodyLarge', 'buttonCompact'] as const).map((variant) => (
          <Typography key={variant} variant={variant} data-testid={variant}>
            {variant}: inherited family and weight
          </Typography>
        ))}
      </Box>
    </ThemeProvider>
  ),
}
