import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { borderTokens } from './borderTokens'

// Borders.zip, Mode 1: 11 radius primitives, 8 aliases, 2 legacy radii, 7 strokes.
test('all 28 Borders tokens match the export, with acyclic primitive aliases', () => {
  const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
  const declarations = new Map(
    Array.from(
      blocks[0].matchAll(/--rc-((?:radius-|stroke-|border-|borders-)[\w-]+): ([^;]+);/g),
      ([, key, value]) => [key, value],
    ),
  )
  const expected = new Map<string, string>()
  ;[0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 9999].forEach((value) => {
    expected.set(
      `radius-${value === 9999 ? 'full' : value}`,
      value === 9999 ? '9999px' : `${value / 16}rem`,
    )
  })
  Object.entries({
    button: '8',
    card: '16',
    chip: '4',
    input: '8',
    'list-item': '8',
    modal: '16',
    pill: 'full',
    subcard: '12',
  }).forEach(([role, primitive]) => {
    expected.set(`radius-${role}`, `var(--rc-radius-${primitive})`)
  })
  expected.set('borders-button-border-radius', 'var(--rc-radius-8)')
  expected.set('borders-container-border-radius', 'var(--rc-radius-16)')
  ;[0, 1, 2, 4].forEach((value) => expected.set(`stroke-${value}`, `${value}px`))
  Object.entries({ accent: 4, default: 1, focus: 2 }).forEach(([role, value]) =>
    expected.set(`border-${role}`, `var(--rc-stroke-${value})`),
  )
  expect(declarations).toEqual(expected)
  expect(Object.keys(borderTokens).sort()).toEqual(
    [...expected.keys()].map((key) => key.replace(/^borders-/, '')).sort(),
  )
  expected.forEach((value, key) => {
    expect(borderTokens[key.replace(/^borders-/, '') as keyof typeof borderTokens]).toBe(
      `var(--rc-${key})`,
    )
    if (value.startsWith('var(')) {
      const target = value.slice('var(--rc-'.length, -1)
      expect(declarations.has(target)).toBe(true)
      expect(declarations.get(target)).toMatch(/^[\d.]+(rem|px)$/)
    }
  })
  blocks
    .slice(1)
    .forEach((block) =>
      expect(block).not.toMatch(/--rc-(?:radius-|stroke-|border-|borders-)/),
    )
})
