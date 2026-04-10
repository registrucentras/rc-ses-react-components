import { describe, expect, test } from 'vitest'

import { StepStatus } from './components/StepStatusBubble'
import {
  ICON_RADIUS,
  Y_CENTER,
  getColor,
  getLabelAlignment,
  getLabelStyle,
  getStatus,
  getStepPositionPercent,
  stepperColors,
} from './utils'

describe('Stepper Utils', () => {
  describe('derived values', () => {
    test('ICON_RADIUS is half of icon size', () => {
      expect(ICON_RADIUS).toBeGreaterThan(0)
    })

    test('Y_CENTER is positive and reasonable', () => {
      expect(Y_CENTER).toBeGreaterThan(0)
      expect(Y_CENTER).toBeLessThan(100)
    })
  })

  describe('getStatus', () => {
    test.each([
      [0, 3, StepStatus.COMPLETED],
      [1, 2, StepStatus.ACTIVE],
      [2, 2, StepStatus.PENDING],
    ])('index %i with activeStep %i → %s', (index, activeStep, expected) => {
      expect(getStatus(index, activeStep)).toBe(expected)
    })

    test('handles boundaries correctly', () => {
      expect(getStatus(0, 1)).toBe(StepStatus.ACTIVE)
      expect(getStatus(0, 2)).toBe(StepStatus.COMPLETED)

      const last = 4
      expect(getStatus(last, 3)).toBe(StepStatus.PENDING)
      expect(getStatus(last, 5)).toBe(StepStatus.ACTIVE)
      expect(getStatus(last, 6)).toBe(StepStatus.COMPLETED)
    })

    test('progression is consistent', () => {
      const steps = 3

      for (let active = 1; active <= steps; active += 1) {
        for (let i = 0; i < steps; i += 1) {
          const status = getStatus(i, active)

          if (i + 1 < active) expect(status).toBe(StepStatus.COMPLETED)
          else if (i + 1 === active) expect(status).toBe(StepStatus.ACTIVE)
          else expect(status).toBe(StepStatus.PENDING)
        }
      }
    })
  })

  describe('getStepPositionPercent', () => {
    test('single step is centered', () => {
      expect(getStepPositionPercent(0, 1)).toBe(50)
    })

    test.each([
      [0, 3, 0],
      [1, 3, 50],
      [2, 3, 100],
    ])('index %i of %i → %i%', (index, count, expected) => {
      expect(getStepPositionPercent(index, count)).toBeCloseTo(expected, 1)
    })

    test('positions are evenly distributed', () => {
      const count = 5
      const positions = Array.from({ length: count }, (_, i) =>
        getStepPositionPercent(i, count),
      )

      const diffs = positions.slice(1).map((p, i) => p - positions[i])

      diffs.forEach((diff) => {
        expect(diff).toBeCloseTo(diffs[0], 1)
      })
    })

    test('positions are monotonically increasing', () => {
      const count = 5
      const positions = Array.from({ length: count }, (_, i) =>
        getStepPositionPercent(i, count),
      )

      for (let i = 1; i < positions.length; i += 1) {
        expect(positions[i]).toBeGreaterThan(positions[i - 1])
      }
    })

    test('handles out-of-range indexes gracefully', () => {
      expect(getStepPositionPercent(-1, 3)).toBeLessThanOrEqual(0)
      expect(getStepPositionPercent(5, 3)).toBeGreaterThanOrEqual(100)
    })
  })

  describe('getColor', () => {
    test('returns consistent mapping with status', () => {
      expect(getColor(0, 3)).toBe(stepperColors.completedLabel)
      expect(getColor(2, 3)).toBe(stepperColors.activeLabel)
      expect(getColor(3, 3)).toBe(stepperColors.pendingLabel)
    })

    test('completed steps share same color', () => {
      expect(getColor(0, 3)).toBe(getColor(1, 3))
    })

    test('pending steps share same color', () => {
      expect(getColor(3, 3)).toBe(getColor(4, 3))
    })
  })

  describe('getLabelAlignment', () => {
    test('first step aligns left', () => {
      const a = getLabelAlignment(0, 3)
      expect(a.justifyContent).toBe('flex-start')
      expect(a.textAlign).toBe('left')
    })

    test('last step aligns right', () => {
      const a = getLabelAlignment(2, 3)
      expect(a.justifyContent).toBe('flex-end')
      expect(a.textAlign).toBe('right')
    })

    test('middle step aligns center', () => {
      const a = getLabelAlignment(1, 3)
      expect(a.justifyContent).toBe('center')
      expect(a.textAlign).toBe('center')
    })
  })

  describe('getLabelStyle', () => {
    test('returns valid CSS structure', () => {
      const style = getLabelStyle(1, 3, 50)

      expect(style).toMatchObject({
        position: 'absolute',
        display: 'flex',
      })

      expect(style.left).toBeDefined()
      expect(style.width).toBeDefined()
      expect(style.top).toBeDefined()
    })

    test('first step applies left offset', () => {
      const style = getLabelStyle(0, 3, 0)

      expect(typeof style.left).toBe('string')
      expect(style.left).toMatch(/calc\(.+% - 8px\)/)
    })

    test('last step expands width', () => {
      const style = getLabelStyle(2, 3, 100)

      expect(typeof style.width).toBe('string')
      expect(style.width).toMatch(/calc\(.+% \+ 8px\)/)
    })

    test('middle step has no pixel adjustments', () => {
      const style = getLabelStyle(1, 3, 50)

      expect(style.left).not.toMatch(/px/)
      expect(style.width).not.toMatch(/px/)
    })

    test('justifyContent matches alignment logic', () => {
      expect(getLabelStyle(0, 3, 0).justifyContent).toBe('flex-start')
      expect(getLabelStyle(1, 3, 50).justifyContent).toBe('center')
      expect(getLabelStyle(2, 3, 100).justifyContent).toBe('flex-end')
    })

    test('width is always positive', () => {
      const style = getLabelStyle(1, 5, 25)
      const width = parseFloat(style.width as string)

      expect(width).toBeGreaterThan(0)
    })
  })

  describe('integration', () => {
    test('all utilities produce consistent output', () => {
      const stepCount = 4
      const activeStep = 3

      for (let i = 0; i < stepCount; i += 1) {
        const status = getStatus(i, activeStep)
        const position = getStepPositionPercent(i, stepCount)
        const color = getColor(i, activeStep)
        const alignment = getLabelAlignment(i, stepCount)
        const style = getLabelStyle(i, stepCount, getStepPositionPercent(i, stepCount))

        expect(Object.values(StepStatus)).toContain(status)
        expect(position).toBeGreaterThanOrEqual(0)
        expect(position).toBeLessThanOrEqual(100)
        expect(color).toBeDefined()
        expect(alignment).toHaveProperty('justifyContent')
        expect(style).toHaveProperty('position')
      }
    })
  })
})
