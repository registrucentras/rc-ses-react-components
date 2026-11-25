import {
  Alert,
  Box,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '@/components/common/Button'
import legacyTheme from '@/theme/light'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'

const tokenTheme = createRcSesTokenTheme()

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

        <Typography variant='h6' data-testid='legacy-h6'>
          Legacy H6
        </Typography>

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
    h2: { fontSize: '3rem', lineHeight: '4rem', fontWeight: 700 },
    body1: { fontWeight: 700 },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: { fontWeight: 400 },
        h5: { fontSize: '3.5rem', lineHeight: '4.5rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderColor: '#c5cad1' },
      },
    },
  },
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

        <Typography variant='body1' data-testid='custom-weight'>
          Vartotojo šrifto svoris
        </Typography>

        <Typography variant='h5' data-testid='component-typography'>
          Component override
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

export const TypographyScale: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3}>
        <Typography variant='body2'>
          Keisk ekrano plotį ir stebėk šriftų dydžius bei eilučių aukščius.
        </Typography>

        <Typography variant='h1'>H1 — puslapio antraštė</Typography>
        <Typography variant='h2'>H2 — skyriaus antraštė</Typography>
        <Typography variant='h3'>H3 — poskyrio antraštė</Typography>
        <Typography variant='h4'>H4 — antraštė</Typography>
        <Typography variant='h5'>H5 — antraštė</Typography>
        <Typography variant='h6'>H6 — esamas bibliotekos stilius</Typography>

        <Divider />

        <Typography variant='body1'>
          Body1 — pagrindinis tekstas. Ilgesnis sakinys leidžia įvertinti teksto
          skaitomumą, eilučių aukštį ir persilaužimą mažame ekrane.
        </Typography>

        <Typography variant='body2'>Body2 — mažesnis pagrindinis tekstas.</Typography>

        <Typography variant='subtitle1'>Subtitle1 — papildomas tekstas.</Typography>

        <Typography variant='subtitle2'>
          Subtitle2 — papildomas smulkus tekstas.
        </Typography>

        <Typography variant='caption'>Caption — paaiškinimas arba pastaba.</Typography>

        <Typography variant='button'>Button — mygtuko tekstas</Typography>

        <Typography variant='overline'>Overline — papildoma žyma</Typography>
      </Stack>
    </ThemeProvider>
  ),
}

export const SpacingAndRadius: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3}>
        <Typography variant='h2'>Tarpai ir kampų apvalinimas</Typography>

        <Typography variant='body2'>
          Skaičiai yra MUI daugikliai. Padding naudoja spacing, o borderRadius — temos
          bazinį radiusą. Stulpelių išdėstymas keičiamas per sx breakpointus.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 2,
          }}
        >
          {[0.5, 1, 2, 3].map((factor) => (
            <Box
              key={factor}
              sx={{
                p: factor,
                borderRadius: factor,
                bgcolor: 'grey.100',
                border: '1px solid',
                borderColor: 'grey.300',
              }}
            >
              <Typography variant='body2'>Padding: {factor}</Typography>
              <Typography variant='body2'>Radius: {factor}</Typography>
            </Box>
          ))}
        </Box>

        <Divider />

        <Typography variant='h3'>Tarpas tarp elementų</Typography>

        {[0.5, 1, 2, 4].map((factor) => (
          <Box key={factor}>
            <Typography variant='caption'>Gap: {factor}</Typography>

            <Stack direction='row' spacing={factor} sx={{ mt: 1 }}>
              {[1, 2, 3].map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </ThemeProvider>
  ),
}

export const Palette: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3}>
        <Typography variant='h2'>Temos spalvos</Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {['primary', 'secondary', 'success', 'info', 'warning', 'error'].map(
            (color) => (
              <Box
                key={color}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: `${color}.main`,
                  color: `${color}.contrastText`,
                }}
              >
                <Typography variant='body1'>{color}.main</Typography>
              </Box>
            ),
          )}
        </Box>

        <Divider />

        <Typography sx={{ color: 'text.primary' }}>Pagrindinis tekstas</Typography>

        <Typography sx={{ color: 'text.secondary' }}>Papildomas tekstas</Typography>

        <Typography sx={{ color: 'text.disabled' }}>Neaktyvus tekstas</Typography>

        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography>Background.paper paviršius ir divider kraštinė</Typography>
        </Box>
      </Stack>
    </ThemeProvider>
  ),
}

export const ComponentsPreview: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Stack spacing={3} sx={{ maxWidth: '40rem' }}>
        <Typography variant='h2'>Komponentų peržiūra</Typography>

        <Typography variant='body2'>
          Patikrink hover, focus, pasirinktas ir disabled būsenas. Mygtukas yra RC
          komponentas, kiti šiame pavyzdyje — MUI komponentai.
        </Typography>

        <Stack direction='row' spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Button variant='contained'>Pagrindinis</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='text'>Text</Button>
          <Button disabled>Neaktyvus</Button>
        </Stack>

        <TextField label='Įprastas laukas' />

        <TextField
          label='Laukas su klaida'
          error
          helperText='Patikrinkite įvestą reikšmę.'
          defaultValue='Neteisinga reikšmė'
        />

        <TextField label='Neaktyvus laukas' disabled />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <FormControlLabel control={<Checkbox defaultChecked />} label='Pasirinkta' />

          <FormControlLabel control={<Checkbox />} label='Nepasirinkta' />

          <FormControlLabel control={<Switch defaultChecked />} label='Įjungta' />
        </Stack>

        <Alert severity='info'>Informacinis pranešimas</Alert>
        <Alert severity='success'>Veiksmas atliktas sėkmingai</Alert>
        <Alert severity='warning'>Įspėjimas</Alert>
        <Alert severity='error'>Įvyko klaida</Alert>

        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant='h3'>Kortelės antraštė</Typography>

              <Typography variant='body1'>
                Kortelės, teksto ir mygtuko derinys.
              </Typography>

              <Box>
                <Button>Tęsti</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  ),
}

export const H1Fallback: Story = {
  render: () => (
    <Stack spacing={2}>
      <ThemeProvider theme={legacyTheme}>
        <Typography variant='h1' data-testid='fallback-legacy-h1'>
          Legacy H1
        </Typography>
      </ThemeProvider>
      <ThemeProvider theme={tokenTheme}>
        <Box data-testid='missing-token-example'>
          <Typography variant='h1' data-testid='fallback-token-h1'>
            Token H1 without DS variables
          </Typography>
        </Box>
      </ThemeProvider>
    </Stack>
  ),
  play: ({ canvasElement }) => {
    const example = canvasElement.querySelector<HTMLElement>(
      '[data-testid="missing-token-example"]',
    )!
    Array.from(getComputedStyle(document.documentElement))
      .filter((name) => name.startsWith('--rc-') && !name.startsWith('--rc-mui-'))
      .forEach((name) => example.style.setProperty(name, 'initial'))
  },
}

const headingWeightTheme = createRcSesTokenTheme({
  typography: { h2: { fontWeight: 700 } },
})
export const HeadingWeight: Story = {
  render: () => (
    <ThemeProvider theme={headingWeightTheme}>
      <Typography variant='h2' data-testid='weight-h2'>
        H2 fontWeight 700
      </Typography>
    </ThemeProvider>
  ),
}
