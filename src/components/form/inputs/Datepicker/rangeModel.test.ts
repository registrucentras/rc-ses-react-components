import { describe, expect, test } from 'vitest'

import { readRange, selectRange } from './rangeModel'

describe('DatePicker range model', () => {
  test('starts a new range and preserves a partial selection', () => {
    expect(selectRange([null, null], new Date(2026, 5, 10))).toEqual(['2026-06-10', null])
    expect(readRange(['2026-06-10', null])).toEqual(['2026-06-10', null])
  })
  test('normalizes reverse selection and supports one-day ranges', () => {
    expect(selectRange(['2026-06-17', null], new Date(2026, 5, 10))).toEqual([
      '2026-06-10',
      '2026-06-17',
    ])
    expect(selectRange(['2026-06-10', null], new Date(2026, 5, 10))).toEqual([
      '2026-06-10',
      '2026-06-10',
    ])
  })
  test('restarts after a complete selection and spans years', () => {
    expect(selectRange(['2026-06-10', '2026-06-17'], new Date(2026, 11, 31))).toEqual([
      '2026-12-31',
      null,
    ])
    expect(selectRange(['2026-12-31', null], new Date(2027, 0, 5))).toEqual([
      '2026-12-31',
      '2027-01-05',
    ])
  })
  test('rejects malformed form values without crashing', () => {
    expect(readRange(undefined)).toEqual([null, null])
    expect(readRange(['invalid', '2026-06-10'])).toEqual([null, null])
    expect(readRange(['2026-06-17', '2026-06-10'])).toEqual(['2026-06-10', '2026-06-17'])
  })
})
