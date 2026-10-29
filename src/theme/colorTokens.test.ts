import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'

import { colorPrimitives, colorTokens } from './colorTokens'

const css = readFileSync('src/theme/tokens.css', 'utf8')
const primitives = new Map(
  Array.from(
    css.matchAll(/(--rc-color-[\w-]+): (?!var\()([^;]+);/g),
    ([, key, value]) => [key, value],
  ),
)
const semantics = new Map(
  Array.from(
    css.matchAll(/(--rc-color-[\w-]+): var\((--rc-[\w-]+)\);/g),
    ([, key, value]) => [key, value],
  ),
)

describe('Figma Light color foundations', () => {
  test('all 60 primitives and 64 semantic aliases exist and aliases resolve without cycles', () => {
    expect(primitives.size).toBe(60)
    expect(semantics.size).toBe(64)
    const references = Object.values(colorTokens).map((value) => value.slice(4, -1))
    expect(references.filter((reference) => semantics.has(reference))).toHaveLength(64)
    expect(colorTokens['cyans-100']).toBe('var(--rc-color-cyans-100)')
    references.forEach((reference) => {
      expect(semantics.has(reference) || primitives.has(reference)).toBe(true)
    })
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
    expect(semantics.get('--rc-color-surface-sunken')).toBe('--rc-color-neutrals-50')
    expect(semantics.get('--rc-color-surface-muted')).toBe('--rc-color-neutrals-100')
    expect(semantics.get('--rc-color-text-secondary')).toBe('--rc-color-neutrals-600')
    expect(colorPrimitives.neutrals[50]).toBe('#f9fafb')
    expect(colorPrimitives.neutrals[600]).toBe('#6b747f')
  })
  test('controls, borders and icons use the accessible Figma primitives', () => {
    Object.entries({
      'text-muted': 'neutrals-600',
      'border-strong': 'neutrals-600',
      'border-focus': 'cyans-600',
      'border-focus-error': 'red-600',
      'border-brand-subtle': 'cyans-200',
      'control-border': 'neutrals-600',
      'control-unselected': 'neutrals-600',
      'control-unselected-hover': 'neutrals-700',
      'control-selected': 'cyans-600',
      'control-selected-hover': 'cyans-700',
      'status-info-icon': 'cyans-800',
      'status-success-icon': 'greens-800',
      'status-warning-icon': 'yellows-800',
    }).forEach(([role, primitive]) => {
      expect(semantics.get(`--rc-color-${role}`), role).toBe(`--rc-color-${primitive}`)
    })
  })
})
