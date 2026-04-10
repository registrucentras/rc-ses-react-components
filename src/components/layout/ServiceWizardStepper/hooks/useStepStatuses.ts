import { useMemo } from 'react'

import { ProgressStep } from '../ServiceProgressStepperTypes'
import { getStatus } from '../utils'

const useStepStatuses = (steps: ProgressStep[], activeStep: number) =>
  useMemo(() => steps.map((_, i) => getStatus(i, activeStep)), [steps, activeStep])

export default useStepStatuses
