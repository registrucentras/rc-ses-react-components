import {
  Autocomplete,
  Box,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import legacyTheme from '@/theme/light'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'

const tokenTheme = createRcSesTokenTheme()

const meta = {
  title: 'Foundations/Effects',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3} sx={{ p: 2 }}>
        <Typography variant='h2'>Elevation and focus rings</Typography>
        <Typography>
          Adapter mapping: MUI elevation 1 = sm, 4 = md, 8 = lg. Other levels keep legacy
          shadows.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {(
            [
              { role: 'sm', level: 1 },
              { role: 'md', level: 4 },
              { role: 'lg', level: 8 },
            ] as const
          ).map(({ role, level }) => (
            <Paper
              key={role}
              elevation={level}
              data-testid={`elevation-${role}`}
              sx={{ p: 3, borderRadius: '1rem', bgcolor: colorTokens['surface-base'] }}
            >
              Elevation/{role} through theme.shadows[{level}]
            </Paper>
          ))}
        </Box>
        <Typography>
          Focus references and Tab specimens. Component rebinding belongs to phase 2.
        </Typography>
        {(['default', 'error'] as const).map((role) => (
          <Box key={role} sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box
              data-testid={`focus-reference-${role}`}
              sx={{
                boxShadow: effectTokens[`focus-ring-${role}`],
                p: 2,
                borderRadius: '0.375rem',
                border: '1px solid',
                borderColor:
                  colorTokens[role === 'default' ? 'border-focus' : 'border-strong'],
                bgcolor: colorTokens['surface-base'],
              }}
            >
              Focus-ring/{role}
            </Box>
            <Box
              component='button'
              type='button'
              data-testid={`focus-${role}`}
              sx={{
                p: 2,
                border: '1px solid',
                borderColor:
                  colorTokens[role === 'default' ? 'border-focus' : 'border-strong'],
                borderRadius: '0.375rem',
                bgcolor: colorTokens['surface-base'],
                color: 'text.primary',
                boxShadow: effectTokens['elevation-md'],
                '&:focus-visible': {
                  outline: 'none',
                  boxShadow: `${effectTokens['elevation-md']}, ${effectTokens[`focus-ring-${role}`]}`,
                },
              }}
            >
              Tab: {role} ring with elevation
            </Box>
          </Box>
        ))}
        <Autocomplete
          data-testid='effects-autocomplete'
          options={['Elevation/md popup']}
          renderInput={(params) => (
            <TextField {...params} label='Autocomplete popup uses md' />
          )}
        />
        <ThemeProvider theme={legacyTheme}>
          <Paper elevation={4} data-testid='legacy-elevation-4' sx={{ p: 2 }}>
            Legacy elevation 4: fallback reference when DS tokens are absent
          </Paper>
        </ThemeProvider>
      </Stack>
    </ThemeProvider>
  ),
}
