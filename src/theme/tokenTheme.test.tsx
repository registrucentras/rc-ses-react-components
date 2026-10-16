import { Box, ThemeProvider, Typography, useTheme } from '@mui/material'
import { alpha, createTheme, decomposeColor } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Button from '@/components/common/Button'
import FullPageLoader from '@/components/loaders/FullPageLoader'
import legacyTheme from '@/theme/light'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'

const tokenTheme = createRcSesTokenTheme()

function css(theme = tokenTheme) {
  return JSON.stringify(theme.generateStyleSheets?.())
}

function Probe() {
  const theme = useTheme()
  return (
    <output data-testid='theme-probe' data-spacing={theme.spacing(-1, 0.5, 'auto')}>
      {theme.vars?.palette.primary.main}
    </output>
  )
}

describe('native token theme adapter', () => {
  test('preserves the existing theme, public palette and theme extension API', () => {
    expect(legacyTheme.vars).toBeUndefined()
    expect(legacyTheme.spacing(1)).toBe('8px')
    expect(
      createTheme(legacyTheme, { shape: { borderRadius: 6 } }).shape.borderRadius,
    ).toBe(6)
    expect(tokenTheme.palette.primary.main).toBe(legacyTheme.palette.primary.main)
    expect(decomposeColor(tokenTheme.palette.primary.main)).toEqual(
      decomposeColor(legacyTheme.palette.primary.main),
    )
    expect(alpha(tokenTheme.palette.common.white, 0.72)).toBe(
      alpha(legacyTheme.palette.common.white, 0.72),
    )
    expect(tokenTheme.colorSchemes?.dark).toBeUndefined()
  })

  test('native MUI CSS declarations point to semantic colors, primitives and shape', () => {
    expect(tokenTheme.vars?.palette.primary.main).toBe(
      'var(--rc-mui-palette-primary-main, #06a0d4)',
    )
    expect(css()).toContain('var(--rc-color-control-selected, #06a0d4)')
    expect(css()).toContain('var(--rc-color-text-default, #1f2733)')
    expect(css()).toContain('var(--rc-color-neutrals-300, #c5cad1)')
    expect(css()).toContain('var(--rc-radius-4, 4px)')
    expect(tokenTheme.vars?.shape.borderRadius).toBe(
      'var(--rc-mui-shape-borderRadius, 4px)',
    )
  })

  test('spacing supports MUI defaults, negatives, fractions, multiple arguments and strings', () => {
    expect(tokenTheme.spacing()).toBe('var(--rc-space-8, 8px)')
    expect(tokenTheme.spacing(2)).toBe('var(--rc-space-16, 16px)')
    expect(tokenTheme.spacing(-1, 0.5, 'auto', 0)).toBe(
      'calc(-1 * var(--rc-space-8, 8px)) var(--rc-space-4, 4px) auto 0px',
    )
    expect(tokenTheme.spacing(1.75)).toBe('calc(var(--rc-space-8, 8px) * 1.75)')
    expect(tokenTheme.spacing(20)).toBe('calc(var(--rc-space-8, 8px) * 20)')
  })

  test('typography dimensions come only from theme.typography for mapped variants', () => {
    expect(tokenTheme.typography.h1.fontSize).toBe(
      'var(--rc-typography-font-size-heading-h1, var(--rc-mui-h1-fallback-fontSize, 1.5rem))',
    )
    expect(
      tokenTheme.typography.h1[
        legacyTheme.breakpoints.up('md') as keyof typeof tokenTheme.typography.h1
      ],
    ).toEqual({
      '--rc-mui-h1-fallback-fontSize': '2.25rem',
      '--rc-mui-h1-fallback-lineHeight': '3rem',
    })
    expect(tokenTheme.components?.MuiTypography?.styleOverrides?.h2).toEqual({
      fontWeight: '500',
    })
    expect(legacyTheme.components?.MuiTypography?.styleOverrides?.h2).toMatchObject({
      fontSize: '2rem',
      lineHeight: '2.75rem',
    })
  })

  test('legacy component configuration is preserved without general tokenization', () => {
    Object.entries(legacyTheme.components ?? {}).forEach(([name, component]) => {
      if (name !== 'MuiTypography') {
        expect(
          tokenTheme.components?.[name as keyof typeof tokenTheme.components],
          name,
        ).toEqual(component)
      }
    })
  })

  test('explicit consumer overrides retain precedence', () => {
    const customized = createRcSesTokenTheme({
      palette: { primary: { main: '#123456' } },
      spacing: 10,
      shape: { borderRadius: 6 },
      typography: { h2: { fontSize: '3rem', fontWeight: 700 } },
      components: {
        MuiCard: { styleOverrides: { root: { borderColor: 'rebeccapurple' } } },
        MuiTypography: { styleOverrides: { h2: { fontWeight: 400 } } },
      },
    })
    expect(customized.spacing(2)).toBe('calc(2 * var(--rc-mui-spacing, 10px))')
    expect(customized.typography.h2.fontSize).toBe('3rem')
    expect(customized.components?.MuiTypography?.styleOverrides?.h2).toMatchObject({
      fontWeight: 400,
    })
    expect(css(customized)).toContain('"--rc-mui-palette-primary-main":"#123456"')
    expect(css(customized)).toContain('"--rc-mui-shape-borderRadius":"6px"')
    expect(customized.components?.MuiCard?.styleOverrides?.root).toMatchObject({
      borderColor: 'rebeccapurple',
    })
  })

  test('consumer component literals and callbacks are not tokenized', () => {
    const callback = () => ({ borderColor: '#c5cad1', padding: '1rem' })
    const customized = createRcSesTokenTheme({
      components: {
        MuiCard: {
          styleOverrides: { root: { borderColor: '#c5cad1', padding: '1rem' } },
          variants: [
            { props: { variant: 'outlined' }, style: { backgroundColor: '#06a0d4' } },
          ],
        },
        MuiCardHeader: { styleOverrides: { root: callback } },
      },
    })
    expect(customized.components?.MuiCard?.styleOverrides?.root).toMatchObject({
      borderColor: '#c5cad1',
      padding: '1rem',
    })
    expect(customized.components?.MuiCard?.variants?.[0].style).toEqual({
      backgroundColor: '#06a0d4',
    })
    expect(customized.components?.MuiCardHeader?.styleOverrides?.root).toBe(callback)
  })

  test('typography customizes individual properties without disabling responsive dimensions', () => {
    const customized = createRcSesTokenTheme({
      typography: { h2: { fontWeight: 700 }, h1: { fontSize: '3rem' } },
    })
    expect(customized.typography.h2.fontSize).toBe(tokenTheme.typography.h2.fontSize)
    expect(customized.typography.h2.lineHeight).toBe(tokenTheme.typography.h2.lineHeight)
    expect(customized.typography.h2.fontWeight).toBe(700)
    expect(customized.components?.MuiTypography?.styleOverrides?.h2).toEqual({})
    expect(
      customized.typography.h1[
        legacyTheme.breakpoints.up('md') as keyof typeof customized.typography.h1
      ],
    ).toEqual({
      '--rc-mui-h1-fallback-fontSize': '2.25rem',
      '--rc-mui-h1-fallback-lineHeight': '3rem',
    })
    const sized = createRcSesTokenTheme({
      typography: { h2: { fontSize: '3rem', lineHeight: '4rem' } },
    })
    expect(sized.typography.h2.fontSize).toBe('3rem')
    expect(sized.typography.h2.lineHeight).toBe('4rem')
  })

  test('function typography input is resolved against the consumer palette', () => {
    const customized = createRcSesTokenTheme({
      palette: { primary: { main: '#123456' } },
      typography: (palette) => ({ h2: { color: palette.primary.main, fontWeight: 700 } }),
    })
    expect(customized.typography.h2.color).toBe('#123456')
    expect(customized.typography.h2.fontWeight).toBe(700)
    expect(customized.typography.h2.fontSize).toBe(tokenTheme.typography.h2.fontSize)
    expect(customized.typography.h2.lineHeight).toBe(tokenTheme.typography.h2.lineHeight)
  })

  test('h6 has no inferred token role and keeps its existing overrides', () => {
    expect(tokenTheme.typography.h6).toEqual(legacyTheme.typography.h6)
    expect(tokenTheme.components?.MuiTypography?.styleOverrides?.h6).toEqual(
      legacyTheme.components?.MuiTypography?.styleOverrides?.h6,
    )
  })

  test('ThemeProvider resolves the native theme and existing JS color consumers still render', () => {
    render(
      <ThemeProvider theme={tokenTheme}>
        <Probe />
        <Box sx={{ p: 2, borderRadius: 2, color: 'text.primary' }}>
          <Typography variant='h2'>Token heading</Typography>
          <Button>Continue</Button>
        </Box>
        <FullPageLoader showLabel={false} />
      </ThemeProvider>,
    )
    expect(screen.getByTestId('theme-probe')).toHaveTextContent(
      'var(--rc-mui-palette-primary-main)',
    )
    expect(screen.getByTestId('theme-probe')).toHaveAttribute(
      'data-spacing',
      tokenTheme.spacing(-1, 0.5, 'auto'),
    )
    expect(
      screen.getByRole('button', { name: 'Continue', hidden: true }),
    ).toBeInTheDocument()
  })
})
