import { alpha, createTheme, decomposeColor } from '@mui/material/styles'
import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { borderTokens } from './borderTokens'
import { colorTokens } from './colorTokens'
import { effectTokens } from './effectTokens'
import { layoutTokens } from './layoutTokens'
import theme from './light'
import { sizeTokens } from './sizeTokens'
import { spacingRoleBasedTokens } from './spacingRoleBasedTokens'
import { spacingTokens } from './spacingTokens'
import { typographyTokens } from './typographyTokens'

const css = readFileSync('src/theme/tokens.css', 'utf8')
const blocks = css
  .split('@media')
  .map((block) =>
    Array.from(
      block.matchAll(/(--rc-[\w-]+): ([^;]+);/g),
      ([, name, value]) => [name, value] as const,
    ),
  )
const modeNames = ['xs', 'sm', 'md', 'lg']

// Representative Figma dimensions in px. These cover changing declarations,
// inherited values, both spacing layers and the lg-only outer-padding override.
const responsiveDimensions = {
  '--rc-typography-font-size-heading-h1': [28, 30, 36, 36],
  '--rc-typography-line-height-heading-h1': [32, 36, 40, 40],
  '--rc-typography-font-size-heading-h2': [20, 22, 24, 24],
  '--rc-typography-font-size-heading-card-title': [18, 18, 20, 20],
  '--rc-padding-lg': [20, 20, 24, 24],
  '--rc-padding-xl': [24, 24, 32, 32],
  '--rc-gap-xl': [16, 16, 24, 24],
  '--rc-legacy-space-card-padding-top': [16, 20, 24, 24],
  '--rc-legacy-space-tooltip-max-width': [288, 400, 448, 448],
  '--rc-layout-container-narrow-width': [343, 720, 744, 744],
  '--rc-layout-container-fluid-max-width': [1600, 1600, 1600, 1600],
  '--rc-layout-gutter': [16, 16, 24, 24],
  '--rc-layout-outer-padding': [16, 24, 24, 36],
} as const

test('CSS cascade keeps responsive dimensions and every alias valid in each mode', () => {
  expect(
    Array.from(css.matchAll(/min-width: (\d+)px/g), (match) => Number(match[1])),
  ).toEqual([600, 900, 1200])
  expect(blocks).toHaveLength(4)
  const effective = new Map<string, string>()
  const references = [
    colorTokens,
    effectTokens,
    spacingTokens,
    spacingRoleBasedTokens,
    borderTokens,
    sizeTokens,
    typographyTokens,
    layoutTokens,
  ].flatMap((map) => Object.values(map))
  blocks.forEach((block, mode) => {
    const label = modeNames[mode]
    const declared = new Set<string>()
    block.forEach(([name, value]) => {
      expect(declared.has(name), `${label}: duplicate ${name}`).toBe(false)
      declared.add(name)
      expect(effective.get(name), `${label}: redundant ${name}`).not.toBe(value)
      if (mode > 0)
        expect(name, `${label}: static token redeclared`).not.toMatch(
          /^--rc-(space-|radius-|stroke-|border-|color-|icon-size-)/,
        )
      effective.set(name, value)
    })
    const resolve = (name: string, visited = new Set<string>()): string => {
      expect(visited.has(name), `${label}: alias cycle at ${name}`).toBe(false)
      expect(effective.has(name), `${label}: missing token ${name}`).toBe(true)
      visited.add(name)
      const value = effective.get(name)!
      const alias = value.match(/^var\((--rc-[\w-]+)\)$/)
      return alias ? resolve(alias[1], visited) : value
    }
    effective.forEach((_, name) => {
      const pattern = /^--rc-(?:elevation|focus-ring)-/.test(name)
        ? /^(?:-?[\d.]+(?:px)? ){3,4}rgb\([\d. /]+\)(?:, (?:-?[\d.]+(?:px)? ){3,4}rgb\([\d. /]+\))*$/
        : /^(?:rgb\([\d. /]+\)|[\d.]+(?:rem|px))$/
      expect(resolve(name), `${label}: invalid value for ${name}`).toMatch(pattern)
    })
    references.forEach((reference) =>
      expect(
        effective.has(reference.slice(4, -1)),
        `${label}: missing reference ${reference}`,
      ).toBe(true),
    )
    Object.entries(responsiveDimensions).forEach(([name, values]) =>
      expect(resolve(name), `${label}: ${name}`).toBe(`${values[mode] / 16}rem`),
    )
  })
})

test('one shared scale and explicit radius/alpha corrections retain their token references', () => {
  const root = new Map(blocks[0])
  const steps = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 36, 40, 48, 64, 80, 96]
  expect([...root.keys()].filter((name) => name.startsWith('--rc-space-'))).toHaveLength(
    17,
  )
  steps.forEach((step) => {
    const name = `--rc-space-${step}`
    expect(root.get(name), `xs: ${name}`).toBe(`${step / 16}rem`)
    expect(
      spacingRoleBasedTokens[`space-${step}` as keyof typeof spacingRoleBasedTokens],
      name,
    ).toBe(`var(${name})`)
  })
  expect(Object.keys(spacingRoleBasedTokens)).toHaveLength(34)
  expect(
    Object.keys(spacingRoleBasedTokens).filter((name) => /^(button|input)-/.test(name)),
  ).toHaveLength(5)
  Object.entries({
    '--rc-padding-md': 'var(--rc-space-16)',
    '--rc-legacy-space-card-padding-top': 'var(--rc-space-16)',
    '--rc-radius-input': 'var(--rc-radius-8)',
    '--rc-radius-full': '9999px',
    '--rc-borders-button-border-radius': 'var(--rc-radius-8)',
    '--rc-borders-container-border-radius': 'var(--rc-radius-16)',
    '--rc-color-overlays-black-4': 'rgb(0 0 0 / 0.04)',
    '--rc-color-overlays-black-8': 'rgb(0 0 0 / 0.08)',
    '--rc-color-overlays-white-8': 'rgb(255 255 255 / 0.08)',
    '--rc-color-overlays-white-16': 'rgb(255 255 255 / 0.16)',
  }).forEach(([name, value]) => expect(root.get(name), `xs: ${name}`).toBe(value))
  expect(css).not.toMatch(
    /--rc-(colors-|color-tokens-|spacing-role-based-|spacing-spacing-primitives-|borders-radius-|borders-stroke-|sizes-)/,
  )
})

test('legacy theme keeps its original spacing API, numeric shape and JS colors', () => {
  expect(theme.spacing()).toBe('8px')
  expect(theme.spacing(2)).toBe('16px')
  expect(theme.spacing(4.5)).toBe('36px')
  expect(theme.spacing(-1, 0.5, 'auto', 0)).toBe('-8px 4px auto 0px')
  expect(theme.spacing(1.75)).toBe('14px')
  expect(theme.spacing('1rem')).toBe('1rem')
  expect(createTheme({ ...theme, spacing: 10 }).spacing(2)).toBe('20px')
  expect(createTheme({ ...theme, shape: { borderRadius: 6 } }).shape.borderRadius).toBe(6)
  expect(typeof theme.shape.borderRadius).toBe('number')
  expect(alpha(theme.palette.primary.main, 0.2)).toBe('rgba(6, 160, 212, 0.2)')
  expect(decomposeColor(theme.palette.primary.main).values).toEqual([6, 160, 212])
})
