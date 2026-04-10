import { Grid, Typography } from '@mui/material'
import React from 'react'

import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper'
import { StepItem } from '@/types/common/Step'

const stepItems: Array<Pick<StepItem, 'id' | 'label'>> = [
  { id: 'juridinisAsmuo', label: 'Juridinis asmuo' },
  { id: 'IšrašoNustatymai', label: 'Išrašo nustatymai' },
  { id: 'serviceIssuance', label: 'Peržiūra' },
]

function MultipleHorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(2)

  const handleStepClick = (index: number) => {
    const clickedStepNumber = index + 1
    if (clickedStepNumber < activeStep) {
      setActiveStep(clickedStepNumber)
    }
  }

  const handleBack = () => {
    setActiveStep((current) => Math.max(1, current - 1))
  }

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            { label: 'Horizontalaus vedlio pavyzdys', path: '/horizontal-stepper' },
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
      <Grid
        container
        columns={1}
        sx={{ justifyContent: 'center', width: '100%', margin: '0 auto' }}
      >
        <ServiceWizardStepper
          orientation='horizontal'
          steps={stepItems}
          activeStep={activeStep}
          onStepClick={handleStepClick}
          handleBack={handleBack}
        />
      </Grid>
    </ServicePage>
  )
}

export default MultipleHorizontalStepper
