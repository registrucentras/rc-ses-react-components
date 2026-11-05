import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { layoutTokens } from './layoutTokens'

// Layout.zip: xs, sm, md, lg. All 8 exported values are dimensions, in px.
const expected = {
  'column-width': [72, 72, 72, 72],
  'container-narrow-width': [343, 720, 744, 744],
  'container-medium-width': [343, 720, 936, 936],
  'container-wide-width': [343, 720, 1128, 1128],
  'grid-width-lg': [1128, 1128, 1128, 1128],
  gutter: [16, 16, 24, 24],
  'outer-container-max-width': [1200, 1200, 1200, 1200],
  'outer-padding': [16, 24, 24, 36],
} as const

test('all 8 layout dimensions match Figma in rem across four CSS modes', () => {
  const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
  expect(blocks).toHaveLength(4)
  expect(blocks[1]).toContain('min-width: 600px')
  expect(blocks[2]).toContain('min-width: 900px')
  expect(blocks[3]).toContain('min-width: 1200px')
  expect(Object.keys(layoutTokens).sort()).toEqual(Object.keys(expected).sort())
  const declarations = new Map<string, string>()
  blocks.forEach((block, mode) => {
    const changes = new Map(
      Array.from(block.matchAll(/--rc-layout-([\w-]+): ([^;]+);/g), ([, key, value]) => [
        key,
        value,
      ]),
    )
    changes.forEach((value, key) => declarations.set(key, value))
    expect(declarations.size).toBe(8)
    Object.entries(expected).forEach(([key, values]) => {
      expect(declarations.get(key)).toBe(`${values[mode] / 16}rem`)
      expect(layoutTokens[key as keyof typeof layoutTokens]).toBe(
        `var(--rc-layout-${key})`,
      )
    })
  })
})
