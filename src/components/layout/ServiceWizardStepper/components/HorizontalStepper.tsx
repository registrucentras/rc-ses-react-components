import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useCallback, useMemo } from 'react'

import { ServiceProgressStepperProps } from '../ServiceProgressStepperTypes'
import useStepStatuses from '../hooks/useStepStatuses'
import {
  ICON_RADIUS,
  STEPPER_LAYOUT,
  Y_CENTER,
  getColor,
  getLabelAlignment,
  getLabelStyle,
  getStepPositionPercent,
} from '../utils'
import HorizontalStepperButton from './HorizontalStepperButton'
import StepButton from './StepButton'
import StepConnector from './StepConnector'
import StepLabel from './StepLabel'

const HorizontalStepper: React.FC<ServiceProgressStepperProps> = ({
  className,
  steps,
  activeStep,
  handleBack,
  onStepClick,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const stepCount = steps.length

  const stepStatuses = useStepStatuses(steps, activeStep)

  const stepPositions = useMemo(
    () => steps.map((_, i) => getStepPositionPercent(i, stepCount)),
    [steps, stepCount],
  )

  const leftSpacingPx = isMobile ? 88 : 0
  const rightSpacingPx = isMobile ? 88 : 0

  const handleStepClick = useCallback(
    (i: number) => () => onStepClick?.(i),
    [onStepClick],
  )

  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        position: 'relative',
        height: STEPPER_LAYOUT.svgHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isMobile && activeStep > 1 && (
        <Box
          sx={{
            position: 'absolute',
            left: 20,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HorizontalStepperButton
            direction='back'
            disabled={activeStep === 1}
            onClick={handleBack}
          />
        </Box>
      )}

      <Box
        sx={{
          width: '100%',
          position: 'relative',
          height: STEPPER_LAYOUT.svgHeight,

          marginLeft: `${leftSpacingPx}px`,
          marginRight: `${rightSpacingPx}px`,
        }}
      >
        {steps.slice(0, -1).map((step, index) => {
          const x1 = stepPositions[index]
          const x2 = stepPositions[index + 1]

          return (
            <StepConnector
              key={step.id}
              status={stepStatuses[index]}
              position={{
                left: `calc(${x1}% + ${ICON_RADIUS + 4}px)`,
                top: `${Y_CENTER - 1}px`,
                width: `calc(${x2}% - ${x1}% - ${STEPPER_LAYOUT.iconSize + 8}px)`,
                height: '2px',
              }}
            />
          )
        })}

        {steps.map((step, index) => {
          const status = stepStatuses[index]
          const isClickable = status === 'completed' && Boolean(onStepClick)

          return (
            <StepButton
              key={step.id}
              status={status}
              position={{
                left: `${stepPositions[index]}%`,
                top: `${Y_CENTER}px`,
              }}
              size={STEPPER_LAYOUT.iconSize}
              isClickable={isClickable}
              onClick={handleStepClick(index)}
              transform='translate(-50%, -50%)'
            />
          )
        })}

        {!isMobile &&
          steps.map((step, index) => {
            const status = stepStatuses[index]

            return (
              <StepLabel
                label={step.label}
                status={status}
                color={getColor(index, activeStep)}
                sx={{
                  ...getLabelStyle(index, stepCount, stepPositions[index]),
                  textAlign: getLabelAlignment(index, stepCount).textAlign,
                }}
              />
            )
          })}
      </Box>
    </Box>
  )
}

export default HorizontalStepper
