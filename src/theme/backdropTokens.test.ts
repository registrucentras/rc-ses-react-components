import { expect, test } from 'vitest'

import { backdropTokens } from './backdropTokens'

test('backdrops mix the inverse and base surfaces at the designer-defined opacity', () => {
  expect(backdropTokens).toEqual({
    'backdrop-dark':
      'color-mix(in srgb, var(--rc-color-surface-inverse) 55%, transparent)',
    'backdrop-light': 'color-mix(in srgb, var(--rc-color-surface-base) 70%, transparent)',
  })
})
