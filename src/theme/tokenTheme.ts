import {
  type CssVarsTheme,
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles'

import legacyTheme from '@/theme/light'
import legacyPalette, { common } from '@/theme/palette'

import './tokens.css'

/** Keep color-scheme configuration inside the adapter until dark tokens exist. */
export type RcSesTokenThemeOptions = Omit<ThemeOptions, 'cssVariables' | 'colorSchemes'>

export type RcSesNativeTheme = Theme &
  Pick<
    CssVarsTheme,
    | 'cssVarPrefix'
    | 'rootSelector'
    | 'colorSchemeSelector'
    | 'defaultColorScheme'
    | 'getCssVar'
    | 'getColorSchemeSelector'
    | 'shouldSkipGeneratingVar'
    | 'vars'
    | 'colorSchemes'
    | 'generateStyleSheets'
    | 'generateSpacing'
    | 'generateThemeVars'
  >

const cssVarPrefix = 'rc-mui'
const token = (name: string, fallback: string) => `var(--rc-${name}, ${fallback})`
const spacingPrimitives = new Set([
  0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 36, 40, 48, 64, 80, 96,
])
const radiusPrimitives = new Set([0, 2, 4, 6, 8, 10, 12, 16, 20, 24])
const colorFamilies = {
  primary: 'cyans',
  secondary: 'greens',
  grey: 'neutrals',
  warning: 'yellows',
  error: 'red',
} as const

function spacingLength(pixels: number, fallback: string): string {
  const absolute = Math.abs(pixels)
  const absoluteFallback = pixels < 0 ? fallback.replace(/^-/, '') : fallback
  const baseFallback = /rem$/.test(fallback) ? '0.5rem' : '8px'
  const value = spacingPrimitives.has(absolute)
    ? token(`spacing-spacing-primitives-${absolute}`, absoluteFallback)
    : `calc(${token('spacing-spacing-primitives-8', baseFallback)} * ${absolute / 8})`
  // Preserve the identity value; multiplication by zero can be unitless in sx.
  if (pixels === 0) return fallback
  return pixels < 0 ? `calc(-1 * ${value})` : value
}

function tokenSpacing(factor: number | string): string {
  return typeof factor === 'string'
    ? factor
    : spacingLength(factor * 8, `${factor * 8}px`)
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    Object.getPrototypeOf(value) === Object.prototype
  )
}

function mapTree<T>(value: T, transform: (key: string, item: unknown) => unknown): T {
  if (Array.isArray(value))
    return value.map((item: unknown) => mapTree(item, transform)) as T
  if (typeof value === 'function') {
    const callback = value as (...args: unknown[]) => unknown
    return ((...args: unknown[]) => mapTree(callback(...args), transform)) as T
  }
  if (!isPlainObject(value)) return value
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [
      key,
      transform(key, mapTree(item, transform)),
    ]),
  ) as T
}

const colorReferences = new Map<string, string>([
  [common.white, token('colors-white', common.white)],
])
Object.entries(colorFamilies).forEach(([family, collection]) => {
  const shades = legacyPalette[family as keyof typeof legacyPalette]
  Object.entries(shades).forEach(([shade, value]) => {
    if (shade !== 'main')
      colorReferences.set(
        value.toLowerCase(),
        token(`colors-${collection}-${shade}`, value),
      )
  })
})

function colorValue(value: string): string {
  // Already-authored variable references (including their fallbacks) are authoritative.
  if (value.includes('var(')) return value
  return value
    .replace(/#[\da-f]{3,8}\b/gi, (hex) => colorReferences.get(hex.toLowerCase()) ?? hex)
    .replace(
      /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/g,
      (original, r: string, g: string, b: string, alpha?: string) => {
        const hex = `#${[r, g, b].map((part) => Number(part).toString(16).padStart(2, '0')).join('')}`
        const reference = colorReferences.get(hex)
        if (!reference) return original
        return alpha === undefined || Number(alpha) === 1 ? reference : original
      },
    )
}

function styleValue(key: string, value: unknown): unknown {
  const spacingProperty = /^(padding|margin|gap|rowGap|columnGap)/.test(key)
  const radiusProperty = /border.*Radius$/.test(key)
  if (typeof value === 'number' && spacingProperty)
    return spacingLength(value, `${value}px`)
  if (typeof value !== 'string' || value.includes('var(')) return value
  const colored = colorValue(value)
  if (!spacingProperty && !radiusProperty) return colored
  return colored.replace(
    /(-?[\d.]+)(px|rem)\b/g,
    (original, amount: string, unit: string) => {
      const pixels = Number(amount) * (unit === 'rem' ? 16 : 1)
      if (spacingProperty) return spacingLength(pixels, original)
      return radiusPrimitives.has(pixels)
        ? token(`borders-radius-primitives-${pixels}`, original)
        : original
    },
  )
}

const typographyRoles = {
  h1: 'heading-h1',
  h2: 'heading-h2',
  h3: 'heading-h3',
  h4: 'heading-h4',
  h5: 'heading-h5',
  body1: 'body-regular',
  body2: 'body-small',
  caption: 'body-caption',
  subtitle1: 'body-lead',
  subtitle2: 'body-micro',
  button: 'button-regular',
  overline: 'body-micro',
} as const

function typographyStyle<T>(style: T, role: string): T {
  return mapTree(style, (key, value) => {
    if (
      (key === 'fontSize' || key === 'lineHeight') &&
      (typeof value === 'number' || typeof value === 'string')
    ) {
      const fallback =
        typeof value === 'number' && key === 'fontSize' ? `${value}px` : String(value)
      return token(
        `typography-${key === 'fontSize' ? 'font-size' : 'line-height'}-${role}`,
        fallback,
      )
    }
    return value
  })
}

/**
 * Opt-in native MUI CSS-variable theme. The raw palette and numeric shape stay
 * usable by existing JS consumers; MUI's generated CSS resolves from DS tokens.
 * RcSesTheme remains the unchanged legacy fallback.
 */
export function createRcSesTokenTheme(
  options: RcSesTokenThemeOptions = {},
): RcSesNativeTheme {
  const customTypography =
    typeof options.typography === 'function'
      ? options.typography(
          options.palette
            ? createTheme(legacyTheme, { palette: options.palette }).palette
            : legacyTheme.palette,
        )
      : options.typography
  const normalizedOptions = { ...options }
  if (customTypography === undefined) delete normalizedOptions.typography
  else normalizedOptions.typography = customTypography
  const fallback = createTheme(legacyTheme, normalizedOptions)
  // Tokenize only library-owned styles. Consumer styles are merged afterwards.
  const typography = { ...legacyTheme.typography }
  const components = Object.fromEntries(
    Object.entries(legacyTheme.components ?? {}).map(
      ([name, component]: [string, unknown]) => {
        if (!isPlainObject(component)) return [name, component]
        return [
          name,
          {
            ...component,
            styleOverrides: mapTree(component.styleOverrides, styleValue),
            variants: Array.isArray(component.variants)
              ? component.variants.map((variant: unknown) =>
                  isPlainObject(variant)
                    ? { ...variant, style: mapTree(variant.style, styleValue) }
                    : variant,
                )
              : component.variants,
          },
        ]
      },
    ),
  ) as NonNullable<ThemeOptions['components']>

  const typographySlots = { ...components.MuiTypography?.styleOverrides }
  Object.entries(typographyRoles).forEach(([variant, role]) => {
    const variantKey = variant as keyof typeof typographyRoles
    typography[variantKey] = typographyStyle(typography[variantKey], role)
    const slot = typographySlots[variantKey as keyof typeof typographySlots]
    if (slot) {
      Object.assign(typographySlots, { [variant]: typographyStyle(slot, role) })
    }
  })
  Object.entries(customTypography ?? {}).forEach(([variant, custom]) => {
    if (!isPlainObject(custom) || !Object.hasOwn(typography, variant)) return
    const attributes = Object.fromEntries(
      Object.entries(custom).filter(
        ([, value]) => value !== undefined && !isPlainObject(value),
      ),
    )
    const overrideProperty = (key: string, value: unknown) =>
      Object.hasOwn(attributes, key) ? attributes[key] : value
    const variantKey = variant as keyof typeof typographyRoles
    // Root font overrides must also win over inherited responsive declarations.
    Object.assign(typography, {
      [variant]: mapTree(typography[variantKey], overrideProperty),
    })
    const slot = typographySlots[variantKey as keyof typeof typographySlots]
    if (slot) {
      const adjusted = mapTree(slot, overrideProperty)
      Object.assign(typographySlots, {
        [variant]: isPlainObject(adjusted) ? { ...adjusted, ...attributes } : adjusted,
      })
    }
  })
  components.MuiTypography = {
    ...components.MuiTypography,
    styleOverrides: typographySlots,
  }

  const adapted = createTheme(
    {
      ...legacyTheme,
      typography,
      components,
      spacing: tokenSpacing,
    },
    normalizedOptions,
  )

  const theme = createTheme({
    ...options,
    palette: undefined,
    cssVariables: {
      nativeColor: true,
      cssVarPrefix,
      colorSchemeSelector: 'data-rc-color-scheme',
    },
    colorSchemes: { light: { palette: fallback.palette } },
    typography: adapted.typography,
    components: adapted.components,
    spacing: options.spacing ?? tokenSpacing,
    shape: fallback.shape,
    breakpoints: fallback.breakpoints,
    direction: fallback.direction,
    mixins: fallback.mixins,
    shadows: fallback.shadows,
    transitions: fallback.transitions,
    zIndex: fallback.zIndex,
  }) as RcSesNativeTheme

  const bindings = new Map<string, string>()
  const bind = (palettePath: string, name: string) => {
    const parts = palettePath.split('.')
    let value: unknown = fallback.palette
    let custom: unknown = options.palette
    parts.forEach((part) => {
      value = isPlainObject(value) ? value[part] : undefined
      custom = isPlainObject(custom) ? custom[part] : undefined
    })
    if (typeof value === 'string' && custom === undefined) {
      bindings.set(`--${cssVarPrefix}-palette-${parts.join('-')}`, token(name, value))
    }
  }
  Object.entries(colorFamilies).forEach(([family, collection]) => {
    const shades = legacyPalette[family as keyof typeof legacyPalette]
    Object.keys(shades)
      .filter((shade) => shade !== 'main')
      .forEach((shade) => bind(`${family}.${shade}`, `colors-${collection}-${shade}`))
    bind(`${family}.main`, `colors-${collection}-500`)
    ;(['light', 'dark'] as const).forEach((shade) => {
      const value =
        fallback.palette[family as 'primary' | 'secondary' | 'warning' | 'error'][shade]
      const reference = colorReferences.get(value?.toLowerCase())
      const customColor =
        options.palette?.[family as 'primary' | 'secondary' | 'warning' | 'error']
      if (
        reference &&
        (!isPlainObject(customColor) || !Object.hasOwn(customColor, shade))
      ) {
        bindings.set(`--${cssVarPrefix}-palette-${family}-${shade}`, reference)
      }
    })
  })
  ;['dark', 'light', 'ghost'].forEach((family) => {
    Object.keys(legacyPalette.grey).forEach((shade) =>
      bind(`${family}.${shade}`, `colors-neutrals-${shade === 'main' ? '500' : shade}`),
    )
  })
  ;['primary', 'secondary', 'warning', 'error', 'success', 'info'].forEach((family) => {
    const palette = fallback.palette[family as 'primary']
    bind(
      `${family}.contrastText`,
      palette.contrastText === common.white
        ? 'color-tokens-text-inverse'
        : 'color-tokens-text-default',
    )
  })
  const semanticBindings = {
    'primary.main': 'control-selected',
    'text.primary': 'text-default',
    'text.secondary': 'text-secondary',
    'text.disabled': 'text-disabled',
    'background.default': 'surface-base',
    'background.paper': 'surface-raised',
    divider: 'border-subtle',
    'common.white': 'text-inverse',
    'action.active': 'text-secondary',
    'action.disabled': 'text-disabled',
    'action.disabledBackground': 'control-disabled',
    'success.main': 'status-success-icon',
    'success.light': 'status-success-bg',
    'success.dark': 'status-success-text',
    'info.main': 'status-info-icon',
    'info.light': 'status-info-bg',
    'info.dark': 'status-info-text',
  }
  Object.entries(semanticBindings).forEach(([palettePath, name]) =>
    bind(palettePath, `color-tokens-${name}`),
  )
  bind('action.hover', 'colors-overlays-black-4')
  bind('action.selected', 'colors-overlays-black-8')
  if (options.shape?.borderRadius === undefined)
    bindings.set(
      `--${cssVarPrefix}-shape-borderRadius`,
      token('borders-radius-primitives-4', '4px'),
    )

  // Bind at CSS emission rather than replacing theme.palette strings. This
  // preserves alpha()/decomposeColor() callers and native MUI theme.vars.
  const { generateStyleSheets } = theme
  if (!generateStyleSheets) throw new Error('MUI CSS variables are unavailable')
  theme.generateStyleSheets = () =>
    generateStyleSheets().map((sheet) =>
      mapTree(sheet, (key, value) => bindings.get(key) ?? value),
    )
  return theme
}

const tokenTheme = createRcSesTokenTheme()
export default tokenTheme
