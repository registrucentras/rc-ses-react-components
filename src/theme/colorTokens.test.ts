import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'

import { colorPrimitives, colorTokenSchemes, colorTokens } from './colorTokens'

const css = readFileSync('src/theme/tokens.css', 'utf8')
const primitives = new Map(
  Array.from(css.matchAll(/(--rc-colors-[\w-]+): ([^;]+);/g), ([, key, value]) => [
    key,
    value,
  ]),
)
const semantics = new Map(
  Array.from(
    css.matchAll(/(--rc-color-tokens-[\w-]+): var\((--rc-[\w-]+)\);/g),
    ([, key, value]) => [key, value],
  ),
)

describe('Figma Light color foundations', () => {
  test('all 60 primitives and 63 semantic aliases exist and aliases resolve without cycles', () => {
    expect(primitives.size).toBe(60)
    expect(semantics.size).toBe(63)
    expect(Object.values(colorTokens)).toHaveLength(63)
    semantics.forEach((target, key) => {
      const visited = new Set([key])
      let current = target
      while (semantics.has(current)) {
        expect(visited.has(current)).toBe(false)
        visited.add(current)
        current = semantics.get(current)!
      }
      expect(primitives.has(current)).toBe(true)
    })
  })
  test('sunken and muted remain distinct and secondary text uses neutral 600', () => {
    expect(semantics.get('--rc-color-tokens-surface-sunken')).toBe(
      '--rc-colors-neutrals-50',
    )
    expect(semantics.get('--rc-color-tokens-surface-muted')).toBe(
      '--rc-colors-neutrals-100',
    )
    expect(semantics.get('--rc-color-tokens-text-secondary')).toBe(
      '--rc-colors-neutrals-600',
    )
    expect(colorPrimitives.neutrals[50]).toBe('#f9fafb')
    expect(colorPrimitives.neutrals[600]).toBe('#6b747f')
    expect(colorTokenSchemes.light).toBe(colorTokens)
    expect(colorTokenSchemes.dark).toBeUndefined()
  })
})
