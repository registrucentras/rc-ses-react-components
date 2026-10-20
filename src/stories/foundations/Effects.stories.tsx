import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Snackbar,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

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
          Elevation tokens are selected by component role. Numeric MUI shadows stay
          unchanged.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {(['sm', 'md', 'lg'] as const).map((role) => (
            <Paper
              key={role}
              elevation={0}
              data-testid={`elevation-${role}`}
              sx={{
                p: 3,
                borderRadius: '1rem',
                bgcolor: colorTokens['surface-base'],
                boxShadow: effectTokens[`elevation-${role}`],
              }}
            >
              Elevation/{role}
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
      </Stack>
    </ThemeProvider>
  ),
}

export const ComponentRoles: Story = {
  tags: ['no-snapshot'],
  render: function Render() {
    const [overlay, setOverlay] = useState<
      'popover' | 'menu' | 'dialog' | 'snackbar' | null
    >(null)
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
    return (
      <ThemeProvider theme={tokenTheme}>
        <Stack spacing={3} sx={{ p: 2 }}>
          <Typography variant='h2'>Elevation by component role</Typography>
          <Typography>
            Popover, Menu and Select use md; Dialog and SnackbarContent use lg. Escape
            closes each specimen.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {(['popover', 'menu', 'dialog', 'snackbar'] as const).map((role) => (
              <Button
                key={role}
                onClick={(event) => {
                  setAnchor(event.currentTarget)
                  setOverlay(role)
                }}
              >
                Open {role}
              </Button>
            ))}
          </Box>
          <TextField
            select
            label='Role select'
            defaultValue='one'
            slotProps={{
              select: {
                MenuProps: { slotProps: { paper: { className: 'effects-role-select' } } },
              },
            }}
          >
            <MenuItem value='one'>Select dropdown: md</MenuItem>
            <MenuItem value='two'>Second option</MenuItem>
          </TextField>
          <Popover
            open={overlay === 'popover'}
            anchorEl={anchor}
            onClose={() => setOverlay(null)}
            slotProps={{ paper: { className: 'effects-role-popover' } }}
          >
            <Typography>Popover: md</Typography>
          </Popover>
          <Menu
            open={overlay === 'menu'}
            anchorEl={anchor}
            onClose={() => setOverlay(null)}
            slotProps={{ paper: { className: 'effects-role-menu' } }}
          >
            <MenuItem>Menu: md</MenuItem>
          </Menu>
          <Dialog
            open={overlay === 'dialog'}
            onClose={() => setOverlay(null)}
            slotProps={{ paper: { className: 'effects-role-dialog' } }}
          >
            <DialogTitle>Dialog: lg</DialogTitle>
          </Dialog>
          <Snackbar
            open={overlay === 'snackbar'}
            message='SnackbarContent: lg'
            onClose={() => setOverlay(null)}
            slotProps={{ content: { className: 'effects-role-snackbar' } }}
          />
          <Typography>
            Legacy shadows below are references for missing-token fallbacks.
          </Typography>
          <ThemeProvider theme={legacyTheme}>
            {([8, 24, 6] as const).map((level) => (
              <Paper
                key={level}
                elevation={level}
                data-testid={`legacy-shadow-${level}`}
                sx={{ p: 2 }}
              >
                Legacy elevation {level}
              </Paper>
            ))}
          </ThemeProvider>
        </Stack>
      </ThemeProvider>
    )
  },
}
