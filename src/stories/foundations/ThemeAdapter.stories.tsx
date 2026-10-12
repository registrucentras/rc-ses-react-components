import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '@/components/common/Button'
import tokenTheme, { createRcSesTokenTheme } from '@/theme/tokenTheme'

const meta = {
  title: 'Foundations/Theme Adapter',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Tokens: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={2}>
        <Typography variant='h1' data-testid='token-theme-heading'>
          Foundacijų tokenų tema
        </Typography>
        <Typography variant='body1'>
          Tipografija prisitaiko prie ekrano pločio. Spalvos, tarpai ir radiusai gaunami
          iš dizaino tokenų.
        </Typography>
        <Box
          data-testid='token-theme-probe'
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          Spalvų, tarpų ir radiuso pavyzdys
        </Box>
        <Box>
          <Button>Bibliotekos mygtukas</Button>
        </Box>
      </Stack>
    </ThemeProvider>
  ),
}

const customTheme = createRcSesTokenTheme({
  typography: {
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '3rem' },
    h3: { fontWeight: 700 },
  },
  components: { MuiCard: { styleOverrides: { root: { borderColor: '#c5cad1' } } } },
})

export const ConsumerOverrides: Story = {
  render: () => (
    <ThemeProvider theme={customTheme}>
      <Stack spacing={2}>
        <Typography variant='h1' data-testid='custom-h1'>
          Vartotojo h1 dydis
        </Typography>
        <Typography variant='h2' data-testid='custom-h2'>
          Vartotojo h2 dydis
        </Typography>
        <Typography variant='h3' data-testid='custom-h3'>
          Vartotojo ?rifto svoris
        </Typography>
        <Card data-testid='literal-card'>
          <CardContent data-testid='base-rem-padding'>
            Vartotojo border spalva ir bibliotekos padding
          </CardContent>
        </Card>
        <TextField label='Bibliotekos input padding' data-testid='base-rem-input' />
      </Stack>
    </ThemeProvider>
  ),
}
