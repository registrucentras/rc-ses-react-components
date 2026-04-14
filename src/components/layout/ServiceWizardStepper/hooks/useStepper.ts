import { useState } from 'react'

import { StepItem } from '../StepperTypes'

const updateSteps = (index: number, prev: StepItem[]): StepItem[] =>
  prev.map((step, i) => {
    if (i < index) return { ...step, state: 'completed' }
    if (i === index) return { ...step, state: 'active' }
    return { ...step, state: 'pending' }
  })

const useStepper = (steps: StepItem[]) => {
  const [stepEntries, setStepEntries] = useState<StepItem[]>(steps)

  const activeStep = stepEntries.findIndex((s) => s.state === 'active')

  const goToStep = (index: number) => {
    if (index < 0 || index > activeStep) return
    setStepEntries((prev) => updateSteps(index, prev))
  }

  return {
    stepEntries,
    activeStep: activeStep === -1 ? 0 : activeStep,
    goToStep,
  }
}

export default useStepper
