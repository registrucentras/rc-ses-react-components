import { Box } from '@mui/material'
import React, { useCallback } from 'react'

import { ServiceProgressStepperProps } from '../ServiceProgressStepperTypes'
import useStepStatuses from '../hooks/useStepStatuses'
import { STEPPER_LAYOUT, getColor } from '../utils'
import StepButton from './StepButton'
import StepConnector from './StepConnector'
import StepLabel from './StepLabel'

const ICON_GAP_PX = 4
const VERTICAL_STEP_HEIGHT = 45
const VERTICAL_ICON_X = 20
const VERTICAL_LABEL_X = VERTICAL_ICON_X + STEPPER_LAYOUT.iconSize + 12

const VerticalStepper: React.FC<ServiceProgressStepperProps> = ({
  className,
  steps,
  activeStep,
  onStepClick,
}) => {
  const stepStatuses = useStepStatuses(steps, activeStep)

  const containerHeight = steps.length * VERTICAL_STEP_HEIGHT

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
        height: containerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          height: containerHeight,
        }}
      >
        {steps.slice(0, -1).map((step, index) => (
          <StepConnector
            key={step.id}
            status={stepStatuses[index]}
            position={{
              left: `${VERTICAL_ICON_X + STEPPER_LAYOUT.iconSize / 2 - 1}px`,
              top: `${
                index * VERTICAL_STEP_HEIGHT +
                (VERTICAL_STEP_HEIGHT - STEPPER_LAYOUT.iconSize) / 2 +
                STEPPER_LAYOUT.iconSize +
                ICON_GAP_PX
              }px`,
              width: '2px',
              height: `${
                VERTICAL_STEP_HEIGHT - STEPPER_LAYOUT.iconSize - 2 * ICON_GAP_PX
              }px`,
            }}
          />
        ))}

        {steps.map((step, index) => {
          const status = stepStatuses[index]
          const isClickable = status === 'completed' && Boolean(onStepClick)

          return (
            <StepButton
              key={step.id}
              status={status}
              position={{
                left: `${VERTICAL_ICON_X}px`,
                top: `${
                  index * VERTICAL_STEP_HEIGHT +
                  (VERTICAL_STEP_HEIGHT - STEPPER_LAYOUT.iconSize) / 2
                }px`,
              }}
              size={STEPPER_LAYOUT.iconSize}
              isClickable={isClickable}
              onClick={handleStepClick(index)}
            />
          )
        })}

        {steps.map((step, index) => {
          const status = stepStatuses[index]

          return (
            <StepLabel
              key={`${step.id}-label`}
              label={step.label}
              status={status}
              color={getColor(index, activeStep)}
              sx={{
                position: 'absolute',
                left: `${VERTICAL_LABEL_X}px`,
                top: `${
                  index * VERTICAL_STEP_HEIGHT + (VERTICAL_STEP_HEIGHT - 16) / 2
                }px`,
                maxWidth: 'calc(100% - 60px)',
                textAlign: 'left',
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default VerticalStepper
