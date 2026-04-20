import { Container } from '@mui/material'

import RcSesCard, { RcSesCardProps } from '@/components/common/Card'
import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper/'

import { StepItem } from '../../ServiceWizardStepper/StepperTypes'

export type LayoutMode = 'column' | 'row'

export interface RcSesCardFormContainerProps extends RcSesCardProps {
  steps: StepItem[]
  onStepClick?: (steps: StepItem[]) => void
  layout?: LayoutMode
  isLoading?: boolean
}

const RcSesCardFormContainer = ({
  steps,
  onStepClick,
  layout,
  children,
  isLoading = false,
  ...cardProps
}: RcSesCardFormContainerProps) => {
  const getLayoutDirection = () => {
    if (layout != null) return layout
    if (steps.length > 4) {
      return 'row'
    }
    return 'column'
  }

  const layoutDirection = getLayoutDirection()

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: getLayoutDirection(),
        },
        gap: '24px',
        paddingBottom: '64px',
      }}
    >
      {steps.length > 2 && (
        <ServiceWizardStepper
          steps={steps}
          onStepClick={onStepClick}
          orientation={layoutDirection === 'row' ? 'vertical' : 'horizontal'}
          isLoading={isLoading}
        />
      )}

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
}

export default RcSesCardFormContainer
