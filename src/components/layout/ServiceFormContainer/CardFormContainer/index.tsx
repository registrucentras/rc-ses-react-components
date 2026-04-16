import { Container } from '@mui/system'

import RcSesCard, { RcSesCardProps } from '@/components/common/Card'
import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper/'

import { StepItem } from '../../ServiceWizardStepper/StepperTypes'

type LayoutMode = 'column' | 'row'
interface RcSesCardFormContainerProps extends RcSesCardProps {
  steps: StepItem[]
  onStepClick?: (steps: StepItem[]) => void
  layout?: LayoutMode
}

const RcSesCardFormContainer = ({
  steps,
  onStepClick,
  layout = 'column',
  children,
  ...cardProps
}: RcSesCardFormContainerProps) => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: layout,
      },
      gap: '24px',
      paddingBottom: '64px',
    }}
  >
    <ServiceWizardStepper
      steps={steps}
      onStepClick={onStepClick}
      orientation={layout === 'row' ? 'vertical' : 'horizontal'}
    />
    <RcSesCard
      {...cardProps}
      sx={{
        width: '100%',
      }}
    >
      {children}
    </RcSesCard>
  </Container>
)

export default RcSesCardFormContainer
