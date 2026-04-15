import { AccordionControllerState } from '../common/Accordion/types/AccordionControllerState'
import { StepItem } from '../layout/ServiceWizardStepper/StepperTypes'

function mapAccordionStateToSteps(state: AccordionControllerState): StepItem[] {
  return Object.entries(state).map(([id, step]) => ({
    id,
    title: step.title,
    state: step.state,
  }))
}

export default mapAccordionStateToSteps
