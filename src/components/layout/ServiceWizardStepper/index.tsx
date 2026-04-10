import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import { ServiceProgressStepperProps } from './ServiceProgressStepperTypes'
import HorizontalStepper from './components/HorizontalStepper'
import VerticalStepper from './components/VerticalStepper'

const ServiceProgressStepper: React.FC<ServiceProgressStepperProps> = ({
  className,
  steps,
  activeStep,
  handleBack,
  onStepClick,
  orientation = 'vertical',
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const isVertical = orientation === 'vertical' && !isMobile

  if (isVertical) {
    return (
      <VerticalStepper
        className={className}
        steps={steps}
        activeStep={activeStep}
        onStepClick={onStepClick}
      />
    )
  }

  return (
    <HorizontalStepper
      className={className}
      steps={steps}
      activeStep={activeStep}
      handleBack={handleBack}
      onStepClick={onStepClick}
    />
  )
}

export default ServiceProgressStepper
