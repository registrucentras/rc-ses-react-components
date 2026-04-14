import { createContext, useContext } from 'react'

import { StepItem } from './StepperTypes'

export const StepperContext = createContext<StepItem[]>([])

export const useStepperContext = () => useContext(StepperContext)
