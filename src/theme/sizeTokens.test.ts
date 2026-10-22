import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { sizeTokens } from './sizeTokens'

// Sizes.zip / Default.tokens.json: six primitives and five direct aliases.
test('all 11 Sizes tokens match Figma in rem and aliases resolve without cycles', () => {
  const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
  const declarations = new Map(
    Array.from(
      blocks[0].matchAll(/--rc-(icon-size-[\w-]+): ([^;]+);/g),
      ([, key, value]) => [key, value],
    ),
  )
  const expected = new Map<string, string>()
  ;[8, 12, 16, 20, 24, 32].forEach((value) =>
    expected.set(`icon-size-${value}`, `${value / 16}rem`),
  )
  Object.entries({ inline: 16, button: 20, control: 20, badge: 12, feature: 24 }).forEach(
    ([role, primitive]) => {
      expected.set(`icon-size-${role}`, `var(--rc-icon-size-${primitive})`)
    },
  )
  expect(declarations).toEqual(expected)
  expect(Object.keys(sizeTokens).sort()).toEqual([...expected.keys()].sort())
  expected.forEach((value, key) => {
    expect(sizeTokens[key as keyof typeof sizeTokens]).toBe(`var(--rc-${key})`)
    if (value.startsWith('var(')) {
      const target = value.slice('var(--rc-'.length, -1)
      expect(declarations.has(target)).toBe(true)
      expect(declarations.get(target)).toMatch(/^[\d.]+rem$/)
    }
  })
  blocks.slice(1).forEach((block) => expect(block).not.toContain('--rc-icon-size-'))
})
