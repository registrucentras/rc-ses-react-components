import { act, renderHook } from '@testing-library/react'

import { StepItem } from '../StepperTypes'
import useStepper from './useStepper'

describe('useStepper', () => {
  const steps: StepItem[] = [
    { id: '1', title: 'Step 1', state: 'completed' },
    { id: '2', title: 'Step 2', state: 'active' },
    { id: '3', title: 'Step 3', state: 'pending' },
  ]

  it('returns initial stepEntries and activeStep', () => {
    const { result } = renderHook(() => useStepper(steps))
    expect(result.current.stepEntries).toHaveLength(3)
    expect(result.current.activeStep).toBe(1)
  })

  it('goToStep updates step states correctly', () => {
    const { result } = renderHook(() => useStepper(steps))
    act(() => {
      result.current.goToStep(0)
    })
    expect(result.current.stepEntries[0].state).toBe('active')
    expect(result.current.stepEntries[1].state).toBe('pending')
    expect(result.current.stepEntries[2].state).toBe('pending')
  })

  it('goToStep does nothing for invalid index', () => {
    const { result } = renderHook(() => useStepper(steps))
    act(() => {
      result.current.goToStep(-1)
      result.current.goToStep(5)
    })

    expect(result.current.stepEntries[1].state).toBe('active')
  })
})
