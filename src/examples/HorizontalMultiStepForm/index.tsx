import { Typography } from '@mui/material'

import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'
import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'

const steps3: StepItem[] = [
  { state: 'completed', title: '1-2 žodžių tekstas' },
  { state: 'active', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
]

const steps4: StepItem[] = [
  { state: 'active', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
]

const steps5: StepItem[] = [
  { state: 'completed', title: '1-2 žodžių tekstas' },
  { state: 'completed', title: '1-2 žodžių tekstas' },
  { state: 'active', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
  { state: 'pending', title: '1-2 žodžių tekstas' },
]

function HorizontalMultipleStepForm() {
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
          Šiakkme puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </ServiceHeader>

      <div
        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ServiceWizardStepper steps={steps3} />
        <ServiceWizardStepper steps={steps4} />
        <ServiceWizardStepper steps={steps5} />
      </div>
      <ServiceWizardStepper steps={steps5} />
    </ServicePage>
  )
}

export default HorizontalMultipleStepForm
