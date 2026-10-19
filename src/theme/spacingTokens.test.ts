import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { spacingRoleBasedTokens } from './spacingRoleBasedTokens'
import { spacingTokens } from './spacingTokens'

const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
// One shared primitive scale includes zero and the legacy 36px step.
const primitiveSizes = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 36, 40, 48, 64, 80, 96]
const references = [
  ...Object.values(spacingTokens),
  ...Object.values(spacingRoleBasedTokens),
]

test('both exported collections exist in every mode and all aliases resolve without cycles', () => {
  expect(blocks).toHaveLength(4)
  expect(Object.keys(spacingTokens)).toHaveLength(106)
  expect(Object.keys(spacingRoleBasedTokens)).toHaveLength(34)
  const declarations = new Map<string, string>()
  blocks.forEach((block, mode) => {
    const label = ['xs', 'sm', 'md', 'lg'][mode]
    Array.from(
      block.matchAll(
        /(--rc-(?:space-|legacy-space-|padding-|gap-|button-padding-|input-padding-y)[\w-]*): ([^;]+);/g,
      ),
    ).forEach(([, name, value]) => declarations.set(name, value))
    references.forEach((reference) => {
      expect(declarations.has(reference.slice(4, -1)), `${label}: ${reference}`).toBe(
        true,
      )
    })
    declarations.forEach((value, name) => {
      const visited = new Set([name])
      let current = value
      while (current.startsWith('var(')) {
        const target = current.slice(4, -1)
        expect(visited.has(target), `${label}: alias cycle at ${target}`).toBe(false)
        visited.add(target)
        expect(declarations.has(target), `${label}: missing ${target}`).toBe(true)
        current = declarations.get(target)!
      }
      expect(current).toMatch(/^[\d.]+rem$/)
    })
    primitiveSizes.forEach((size) => {
      expect(declarations.get(`--rc-space-${size}`)).toBe(`${size / 16}rem`)
    })
    const roleEntries = Array.from(declarations).filter(([name]) =>
      /^--rc-(padding|gap)-/.test(name),
    )
    expect(roleEntries).toHaveLength(12)
    roleEntries.forEach(([, value]) => expect(value).toMatch(/^var\(--rc-space-\d+\)$/))
    expect(
      Array.from(declarations.keys()).filter((name) =>
        /^--rc-(button-padding-|input-padding-y$)/.test(name),
      ),
    ).toHaveLength(5)
  })
})
