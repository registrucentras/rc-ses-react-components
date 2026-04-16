import { Button, Typography } from '@mui/material'
import { useState } from 'react'

import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'

const steps: StepItem[] = [
  { id: '1', state: 'completed', title: '1-2 žodžių tekstas' },
  { id: '2', state: 'active', title: '1-2 žodžių tekstas' },
  { id: '3', state: 'pending', title: '1-2 žodžių tekstas' },
]

function CardMultipleStepForm() {
  const [currentSteps, setSteps] = useState(steps)
  const activeStep = currentSteps.findIndex((s) => s.state === 'active')

  const handleBack = () => {
    if (activeStep <= 0) return

    const updatedSteps: StepItem[] = currentSteps.map((step, index) => {
      if (index < activeStep - 1) return { ...step, state: 'completed' }
      if (index === activeStep - 1) return { ...step, state: 'active' }
      return { ...step, state: 'pending' }
    })

    setSteps(updatedSteps)
  }

  const handleNext = () => {
    const activeIndex = currentSteps.findIndex((s) => s.state === 'active')
    if (activeIndex === -1 || activeIndex === currentSteps.length - 1) return
    const updatedSteps: StepItem[] = currentSteps.map((step, index) => {
      if (index < activeIndex + 1) return { ...step, state: 'completed' }
      if (index === activeIndex + 1) return { ...step, state: 'active' }
      return { ...step, state: 'pending' }
    })
    setSteps(updatedSteps)
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
        layout='column'
        steps={currentSteps}
        onStepClick={(newSteps) => setSteps(newSteps)}
        title='Test'
        description='Test description'
        leadingActions={
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
        trailingActions={
          <>
            <Button variant='outlined'>Button</Button>
            <Button
              variant='contained'
              onClick={handleNext}
              disabled={activeStep === currentSteps.length - 1}
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
