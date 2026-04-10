import { renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { StepStatus } from '../components/StepStatusBubble'
import useStepStatuses from './useStepStatuses'

const mockSteps = [
  { id: 'step1', label: 'Step 1' },
  { id: 'step2', label: 'Step 2' },
  { id: 'step3', label: 'Step 3' },
]

describe('useStepStatuses', () => {
  describe('basic functionality', () => {
    test('returns array of statuses', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 2))

      expect(result.current).toHaveLength(mockSteps.length)
    })

    test('returns correct length matching steps', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 1))

      expect(result.current.length).toBe(3)
    })
  })

  describe('step status assignment', () => {
    test('marks steps before activeStep as completed', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 3))

      expect(result.current[0]).toBe(StepStatus.COMPLETED)
      expect(result.current[1]).toBe(StepStatus.COMPLETED)
    })

    test('marks activeStep as active', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 2))

      expect(result.current[1]).toBe(StepStatus.ACTIVE)
    })

    test('marks steps after activeStep as pending', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 1))

      expect(result.current[1]).toBe(StepStatus.PENDING)
      expect(result.current[2]).toBe(StepStatus.PENDING)
    })
  })

  describe('edge cases', () => {
    test('handles single step', () => {
      const single = [{ id: 'only', label: 'Only' }]
      const { result } = renderHook(() => useStepStatuses(single, 1))

      expect(result.current.length).toBe(1)
      expect(result.current[0]).toBe(StepStatus.ACTIVE)
    })

    test('handles activeStep at beginning (1)', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 1))

      expect(result.current[0]).toBe(StepStatus.ACTIVE)
      expect(result.current[1]).toBe(StepStatus.PENDING)
      expect(result.current[2]).toBe(StepStatus.PENDING)
    })

    test('handles activeStep at end', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 3))

      expect(result.current[0]).toBe(StepStatus.COMPLETED)
      expect(result.current[1]).toBe(StepStatus.COMPLETED)
      expect(result.current[2]).toBe(StepStatus.ACTIVE)
    })

    test('handles many steps', () => {
      const manySteps = Array.from({ length: 10 }, (_, i) => ({
        id: `step${i}`,
        label: `Step ${i + 1}`,
      }))

      const { result } = renderHook(() => useStepStatuses(manySteps, 5))

      expect(result.current.length).toBe(10)
      expect(result.current[4]).toBe(StepStatus.ACTIVE)
      // Steps before active
      for (let i = 0; i < 4; i += 1) {
        expect(result.current[i]).toBe(StepStatus.COMPLETED)
      }
      // Steps after active
      for (let i = 5; i < 10; i += 1) {
        expect(result.current[i]).toBe(StepStatus.PENDING)
      }
    })
  })

  describe('reactivity', () => {
    test('updates statuses when activeStep changes', () => {
      const { result, rerender } = renderHook(
        ({ steps, activeStep }) => useStepStatuses(steps, activeStep),
        {
          initialProps: { steps: mockSteps, activeStep: 1 },
        },
      )

      expect(result.current[0]).toBe(StepStatus.ACTIVE)

      rerender({ steps: mockSteps, activeStep: 2 })

      expect(result.current[0]).toBe(StepStatus.COMPLETED)
      expect(result.current[1]).toBe(StepStatus.ACTIVE)
    })

    test('updates statuses when steps change', () => {
      const initialSteps = [
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
      ]
      const newSteps = [
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
        { id: 'c', label: 'C' },
      ]

      const { result, rerender } = renderHook(
        ({ steps, activeStep }) => useStepStatuses(steps, activeStep),
        {
          initialProps: { steps: initialSteps, activeStep: 1 },
        },
      )

      expect(result.current.length).toBe(2)

      rerender({ steps: newSteps, activeStep: 1 })

      expect(result.current.length).toBe(3)
    })

    test('memoizes result when inputs are referentially equal', () => {
      const steps = mockSteps

      const { result, rerender } = renderHook(
        ({ steps: hookSteps, activeStep }) => useStepStatuses(hookSteps, activeStep),
        {
          initialProps: { steps, activeStep: 1 },
        },
      )

      const first = result.current

      rerender({ steps, activeStep: 1 })

      expect(result.current).toBe(first)
    })

    test('recalculates when dependencies change', () => {
      const { result, rerender } = renderHook(
        ({ steps, activeStep }) => useStepStatuses(steps, activeStep),
        {
          initialProps: { steps: mockSteps, activeStep: 1 },
        },
      )

      const firstResult = result.current

      rerender({ steps: mockSteps, activeStep: 2 })

      expect(result.current).not.toBe(firstResult)
    })
  })

  describe('integration with activeStep values', () => {
    test('handles activeStep progression from 1 to 3', () => {
      const { result, rerender } = renderHook(
        ({ steps, activeStep }) => useStepStatuses(steps, activeStep),
        {
          initialProps: { steps: mockSteps, activeStep: 1 },
        },
      )

      // Step 1
      expect(result.current[0]).toBe(StepStatus.ACTIVE)
      expect(result.current[1]).toBe(StepStatus.PENDING)
      expect(result.current[2]).toBe(StepStatus.PENDING)

      // Step 2
      rerender({ steps: mockSteps, activeStep: 2 })
      expect(result.current[0]).toBe(StepStatus.COMPLETED)
      expect(result.current[1]).toBe(StepStatus.ACTIVE)
      expect(result.current[2]).toBe(StepStatus.PENDING)

      // Step 3
      rerender({ steps: mockSteps, activeStep: 3 })
      expect(result.current[0]).toBe(StepStatus.COMPLETED)
      expect(result.current[1]).toBe(StepStatus.COMPLETED)
      expect(result.current[2]).toBe(StepStatus.ACTIVE)
    })

    test('handles activeStep greater than steps length', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 10))

      expect(result.current[2]).toBe(StepStatus.COMPLETED)
    })

    test('handles activeStep less than 1', () => {
      const { result } = renderHook(() => useStepStatuses(mockSteps, 0))

      expect(result.current[0]).toBe(StepStatus.PENDING)
    })
  })
})
