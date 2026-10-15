import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

import { spacingRoleBasedTokens } from './spacingRoleBasedTokens'
import { spacingTokens } from './spacingTokens'

const blocks = readFileSync('src/theme/tokens.css', 'utf8').split('@media')
// The role-based Figma scale includes zero; 36 remains a legacy-only primitive.
const primitiveSizes = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

test('both exported collections exist in every mode and all aliases resolve without cycles', () => {
  expect(blocks).toHaveLength(4)
  expect(Object.keys(spacingTokens)).toHaveLength(106)
  expect(Object.keys(spacingRoleBasedTokens)).toHaveLength(33)
  blocks.forEach((block) => {
    const declarations = new Map(
      Array.from(
        block.matchAll(/(--rc-spacing-[\w-]+): ([^;]+);/g),
        ([, name, value]) => [name, value],
      ),
    )
    expect(declarations.size).toBe(139)
    Object.values({ ...spacingTokens, ...spacingRoleBasedTokens }).forEach(
      (reference) => {
        expect(declarations.has(reference.slice(4, -1))).toBe(true)
      },
    )
    declarations.forEach((value, name) => {
      const visited = new Set([name])
      let current = value
      while (current.startsWith('var(')) {
        const target = current.slice(4, -1)
        expect(visited.has(target)).toBe(false)
        visited.add(target)
        expect(declarations.has(target)).toBe(true)
        current = declarations.get(target)!
      }
      expect(current).toMatch(/^[\d.]+rem$/)
    })
    primitiveSizes.forEach((size) => {
      expect(declarations.get(`--rc-spacing-role-based-primitives-space-${size}`)).toBe(
        `${size / 16}rem`,
      )
    })
    const roleEntries = Array.from(declarations).filter(([name]) =>
      /^--rc-spacing-role-based-(padding|gap)-/.test(name),
    )
    expect(roleEntries).toHaveLength(12)
    roleEntries.forEach(([, value]) =>
      expect(value).toMatch(/^var\(--rc-spacing-role-based-primitives-space-\d+\)$/),
    )
    expect(
      Array.from(declarations.keys()).filter((name) =>
        name.startsWith('--rc-spacing-role-based-component-'),
      ),
    ).toHaveLength(5)
  })
})
