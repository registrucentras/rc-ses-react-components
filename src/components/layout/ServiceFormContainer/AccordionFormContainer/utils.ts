import { AccordionControllerState } from '../../../common/Accordion/types/AccordionControllerState'
import { StepItem } from '../../ServiceWizardStepper/StepperTypes'

function mapAccordionStateToSteps(state: AccordionControllerState): StepItem[] {
  return Object.entries(state).map(([id, step]) => ({
    id,
    title: step.title,
  }))
}

export default mapAccordionStateToSteps
