import { Button, Typography } from '@mui/material'
import { useState } from 'react'

import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'

const steps: StepItem[] = [
  { id: '1', title: '1-2 žodžių tekstas' },
  { id: '2', title: '1-2 žodžių tekstas' },
  { id: '3', title: '1-2 žodžių tekstas' },
  { id: '4', title: '1-2 žodžių tekstas' },
]

function CardMultipleStepForm() {
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleStepClick = (index: number) => {
    if (index > activeStep) return
    setActiveStep(index)
  }

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            {
              label: 'Horizontalios formos su vedliu pavyzdys',
              path: '/horizontal-sample-form-multiple-steps',
            },
          ],
        }}
        title='Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą'
      >
        <Typography variant='body1'>
          Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </ServiceHeader>

      <RcSesCardFormContainer
        steps={steps}
        activeStep={activeStep}
        onStepClick={handleStepClick}
        title='Test'
        description='Test description'
        leadingActions={
          activeStep !== 0 && (
            <Button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          )
        }
        trailingActions={
          <>
            <Button variant='outlined'>Button</Button>
            <Button
              variant='contained'
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </>
        }
      >
        <Typography variant='body1'>{`Current Step: ${activeStep + 1}`}</Typography>
      </RcSesCardFormContainer>
    </ServicePage>
  )
}

export default CardMultipleStepForm
