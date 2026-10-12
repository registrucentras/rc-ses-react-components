import { Box, ThemeProvider, Typography, useTheme } from '@mui/material'
import { alpha, createTheme, decomposeColor } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Button from '@/components/common/Button'
import FullPageLoader from '@/components/loaders/FullPageLoader'
import legacyTheme from '@/theme/light'
import tokenTheme, { createRcSesTokenTheme } from '@/theme/tokenTheme'

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
    expect(legacyTheme.palette.text.secondary).toBe('#6b747f')
    expect(tokenTheme.palette.text.secondary).toBe('#6b747f')
    expect(css()).toContain('var(--rc-color-tokens-text-secondary, #6b747f)')
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
    expect(css()).toContain('var(--rc-color-tokens-control-selected, #06a0d4)')
    expect(css()).toContain('var(--rc-color-tokens-text-default, #1f2733)')
    expect(css()).toContain('var(--rc-colors-neutrals-300, #c5cad1)')
    expect(css()).toContain('var(--rc-borders-radius-primitives-4, 4px)')
    expect(tokenTheme.vars?.shape.borderRadius).toBe(
      'var(--rc-mui-shape-borderRadius, 4px)',
    )
  })

  test('spacing supports MUI defaults, negatives, fractions, multiple arguments and strings', () => {
    expect(tokenTheme.spacing()).toBe('var(--rc-spacing-spacing-primitives-8, 8px)')
    expect(tokenTheme.spacing(2)).toBe('var(--rc-spacing-spacing-primitives-16, 16px)')
    expect(tokenTheme.spacing(-1, 0.5, 'auto', 0)).toBe(
      'calc(-1 * var(--rc-spacing-spacing-primitives-8, 8px)) var(--rc-spacing-spacing-primitives-4, 4px) auto 0px',
    )
    expect(tokenTheme.spacing(1.75)).toBe(
      'calc(var(--rc-spacing-spacing-primitives-8, 8px) * 1.75)',
    )
    expect(tokenTheme.spacing(20)).toBe(
      'calc(var(--rc-spacing-spacing-primitives-8, 8px) * 20)',
    )
  })

  test('responsive typography replaces the legacy variant overrides too', () => {
    expect(tokenTheme.typography.h1.fontSize).toBe(
      'var(--rc-typography-font-size-heading-h1, 1.5rem)',
    )
    expect(
      tokenTheme.typography.h1[
        legacyTheme.breakpoints.up('md') as keyof typeof tokenTheme.typography.h1
      ],
    ).toEqual({
      fontSize: 'var(--rc-typography-font-size-heading-h1, 2.25rem)',
      lineHeight: 'var(--rc-typography-line-height-heading-h1, 3rem)',
    })
    expect(tokenTheme.components?.MuiTypography?.styleOverrides?.h2).toMatchObject({
      fontSize: 'var(--rc-typography-font-size-heading-h2, 2rem)',
      lineHeight: 'var(--rc-typography-line-height-heading-h2, 2.75rem)',
    })
  })

  test('shared component styles use token colors without editing component sources', () => {
    expect(tokenTheme.components?.MuiCard?.styleOverrides?.root).toMatchObject({
      borderColor: 'var(--rc-colors-neutrals-300, #c5cad1)',
      borderRadius: 'var(--rc-borders-radius-primitives-16, 1rem)',
    })
    expect(JSON.stringify(tokenTheme.components?.MuiInputBase?.styleOverrides)).toContain(
      'rgba(31,39,51, .2)',
    )
  })

  test('explicit consumer overrides retain precedence', () => {
    const customized = createRcSesTokenTheme({
      palette: { primary: { main: '#123456' } },
      spacing: 10,
      shape: { borderRadius: 6 },
      typography: { h2: { fontSize: '3rem' } },
      components: {
        MuiCard: { styleOverrides: { root: { borderColor: 'rebeccapurple' } } },
      },
    })
    expect(customized.spacing(2)).toBe('calc(2 * var(--rc-mui-spacing, 10px))')
    expect(customized.typography.h2.fontSize).toBe('3rem')
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
    expect(customized.components?.MuiTypography?.styleOverrides?.h2).toMatchObject({
      fontSize: 'var(--rc-typography-font-size-heading-h2, 2rem)',
      fontWeight: 700,
    })
    expect(
      customized.typography.h1[
        legacyTheme.breakpoints.up('md') as keyof typeof customized.typography.h1
      ],
    ).toMatchObject({ fontSize: '3rem' })
    const sized = createRcSesTokenTheme({ typography: { h2: { fontSize: '3rem' } } })
    expect(sized.components?.MuiTypography?.styleOverrides?.h2).toMatchObject({
      fontSize: '3rem',
    })
    expect(sized.typography.h2.lineHeight).toBe(tokenTheme.typography.h2.lineHeight)
  })

  test('library spacing preserves rem fallbacks and h6 has no inferred token role', () => {
    expect(tokenTheme.components?.MuiCardContent?.styleOverrides?.root).toMatchObject({
      padding:
        'var(--rc-spacing-spacing-primitives-20, 1.25rem) var(--rc-spacing-spacing-primitives-24, 1.5rem)',
    })
    expect(JSON.stringify(tokenTheme.components?.MuiInputBase?.styleOverrides)).toContain(
      'calc(var(--rc-spacing-spacing-primitives-8, 0.5rem) * 1.625)',
    )
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
