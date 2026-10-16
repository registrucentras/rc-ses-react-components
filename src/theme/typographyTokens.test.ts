import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { typographyTokens } from './typographyTokens'

// Typography.zip Figma export: xs, sm, md, lg; values in px at a 16px root.
const expected = {
  'heading-h1': [
    [28, 32],
    [30, 36],
    [36, 40],
    [36, 40],
  ],
  'heading-h2': [
    [20, 26],
    [22, 28],
    [24, 32],
    [24, 32],
  ],
  'heading-h3': [
    [16, 22],
    [18, 24],
    [18, 24],
    [18, 24],
  ],
  'heading-card-title': [
    [18, 24],
    [18, 24],
    [20, 28],
    [20, 28],
  ],
  'heading-h4': [
    [16, 22],
    [16, 22],
    [16, 22],
    [16, 22],
  ],
  'heading-h5': [
    [14, 20],
    [14, 20],
    [14, 20],
    [14, 20],
  ],
  'body-large': [
    [16, 24],
    [16, 24],
    [16, 24],
    [16, 24],
  ],
  'body-lead': [
    [16, 24],
    [16, 24],
    [16, 24],
    [16, 24],
  ],
  'body-regular': [
    [15, 22],
    [15, 22],
    [15, 22],
    [15, 22],
  ],
  'body-small': [
    [14, 20],
    [14, 20],
    [14, 20],
    [14, 20],
  ],
  'body-caption': [
    [13, 18],
    [13, 18],
    [13, 18],
    [13, 18],
  ],
  'body-micro': [
    [12, 20],
    [12, 20],
    [12, 20],
    [12, 20],
  ],
  'button-regular': [
    [15, 20],
    [15, 20],
    [15, 20],
    [15, 20],
  ],
  'button-compact': [
    [14, 20],
    [14, 20],
    [14, 20],
    [14, 20],
  ],
} as const

test('all 28 typography dimensions match the Figma export in four discrete modes', () => {
  const css = readFileSync('src/theme/tokens.css', 'utf8')
  const blocks = css.split('@media')
  expect(blocks).toHaveLength(4)
  expect(blocks[1]).toContain('min-width: 600px')
  expect(blocks[2]).toContain('min-width: 900px')
  expect(blocks[3]).toContain('min-width: 1200px')
  expect(Object.keys(typographyTokens)).toHaveLength(28)
  const values = new Map<string, number>()
  blocks.forEach((block, index) => {
    for (const [, key, amount] of block.matchAll(
      /--rc-typography-([\w-]+): ([\d.]+)rem;/g,
    )) {
      values.set(key, Number(amount) * 16)
    }
    expect(values.size).toBe(28)
    Object.entries(expected).forEach(([role, modes]) => {
      expect(
        values.get(`font-size-${role}`),
        `${['xs', 'sm', 'md', 'lg'][index]}: font-size-${role}`,
      ).toBe(modes[index][0])
      expect(
        values.get(`line-height-${role}`),
        `${['xs', 'sm', 'md', 'lg'][index]}: line-height-${role}`,
      ).toBe(modes[index][1])
    })
  })
  expect(css).not.toContain('clamp(')
})
