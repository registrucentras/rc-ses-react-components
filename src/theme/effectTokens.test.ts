import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { effectTokens } from './effectTokens'

test('five effects match the supplied Figma Dev Mode CSS, including shadow layer order', () => {
  const expected = {
    'elevation-sm': '0 4px 6px 0 rgb(0 0 0 / 0.08), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
    'elevation-md': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
    'elevation-lg': '0 8px 16px 0 rgb(0 0 0 / 0.12)',
    'focus-ring-default': '0 0 0 2px var(--rc-color-border-focus)',
    'focus-ring-error': '0 0 0 2px var(--rc-color-border-focus-error)',
  }
  const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
  const declarations = Object.fromEntries(
    Array.from(
      blocks[0].matchAll(/--rc-((?:elevation|focus-ring)-[\w-]+): ([^;]+);/g),
      ([, name, value]) => [name, value],
    ),
  )
  expect(declarations).toEqual(expected)
  expect(Object.keys(effectTokens).sort()).toEqual(Object.keys(expected).sort())
  Object.entries(effectTokens).forEach(([name, reference]) => {
    expect(reference).toBe(`var(--rc-${name})`)
  })
  blocks
    .slice(1)
    .forEach((block) => expect(block).not.toMatch(/--rc-(?:elevation|focus-ring)-/))
})
