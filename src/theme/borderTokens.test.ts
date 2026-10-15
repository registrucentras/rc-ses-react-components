import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { borderTokens } from './borderTokens'

// Borders.zip, Mode 1: 11 radius primitives, 8 aliases, 2 legacy radii, 7 strokes.
test('all 28 Borders tokens match the export, with acyclic primitive aliases', () => {
  const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
  const declarations = new Map(
    Array.from(
      blocks[0].matchAll(/--rc-borders-([\w-]+): ([^;]+);/g),
      ([, key, value]) => [key, value],
    ),
  )
  const expected = new Map<string, string>()
  ;[0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 9999].forEach((value) => {
    expected.set(
      `radius-primitives-${value === 9999 ? 'full' : value}`,
      `${value / 16}rem`,
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
    expected.set(
      `radius-aliases-${role}`,
      `var(--rc-borders-radius-primitives-${primitive})`,
    )
  })
  expected.set('button-border-radius', '0.5rem')
  expected.set('container-border-radius', '1rem')
  ;[0, 1, 2, 4].forEach((value) =>
    expected.set(`stroke-primitives-${value}`, `${value}px`),
  )
  Object.entries({ accent: 4, default: 1, focus: 2 }).forEach(([role, value]) =>
    expected.set(
      `stroke-aliases-border-${role}`,
      `var(--rc-borders-stroke-primitives-${value})`,
    ),
  )
  expect(declarations).toEqual(expected)
  expect(Object.keys(borderTokens).sort()).toEqual([...expected.keys()].sort())
  expected.forEach((value, key) => {
    expect(borderTokens[key as keyof typeof borderTokens]).toBe(
      `var(--rc-borders-${key})`,
    )
    if (value.startsWith('var(')) {
      const target = value.slice('var(--rc-borders-'.length, -1)
      expect(declarations.has(target)).toBe(true)
      expect(declarations.get(target)).toMatch(/^[\d.]+(rem|px)$/)
    }
  })
  blocks.slice(1).forEach((block) => expect(block).not.toContain('--rc-borders-'))
})
