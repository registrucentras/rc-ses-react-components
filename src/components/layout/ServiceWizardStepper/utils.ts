import { ThemeColors } from '@/assets/ThemeColors'
import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'

import { StepStatus } from './components/StepStatusBubble'

export const STEPPER_LAYOUT = {
  iconSize: 20,
  svgHeight: 40,
  horizontalMargin: 0,
  iconGapPx: 4,
  verticalStepHeight: 45,
  verticalIconX: 20,
}

export const ICON_RADIUS = STEPPER_LAYOUT.iconSize / 2
export const Y_CENTER = STEPPER_LAYOUT.svgHeight / 2 + 0.5
const LABEL_Y_OFFSET = Y_CENTER + 14

export const stepperColors = {
  activeLine: resolvePaletteColorPath('primary.400' as ThemeColors),
  pendingLine: resolvePaletteColorPath('grey.200' as ThemeColors),
  completedLabel: resolvePaletteColorPath('grey.800' as ThemeColors),
  activeLabel: resolvePaletteColorPath('grey.800' as ThemeColors),
  pendingLabel: resolvePaletteColorPath('grey.main' as ThemeColors),
}

export const getStatus = (index: number, activeStep: number): StepStatus => {
  if (index + 1 < activeStep) return StepStatus.COMPLETED
  if (index + 1 === activeStep) return StepStatus.ACTIVE
  return StepStatus.PENDING
}

export const getStepPositionPercent = (index: number, stepsLength: number) => {
  if (stepsLength === 1) return 50

  const availableWidth = 100 - 2 * STEPPER_LAYOUT.horizontalMargin
  return STEPPER_LAYOUT.horizontalMargin + (index * availableWidth) / (stepsLength - 1)
}

export const getColor = (index: number, activeStep: number) => {
  const status = getStatus(index, activeStep)
  if (status === StepStatus.COMPLETED) return stepperColors.completedLabel
  if (status === StepStatus.ACTIVE) return stepperColors.activeLabel
  return stepperColors.pendingLabel
}

export const getLabelAlignment = (
  index: number,
  stepCount: number,
): {
  justifyContent: React.CSSProperties['justifyContent']
  textAlign: React.CSSProperties['textAlign']
} => {
  const isFirst = index === 0
  const isLast = index === stepCount - 1

  if (isFirst) return { justifyContent: 'flex-start', textAlign: 'left' }
  if (isLast) return { justifyContent: 'flex-end', textAlign: 'right' }

  return { justifyContent: 'center', textAlign: 'center' }
}

const getSlotBounds = (index: number, stepCount: number, stepWidth: number) => {
  if (stepCount === 1) {
    return { left: 0, width: 100 }
  }

  const stepSpacing = 100 / (stepCount - 1)

  const isFirst = index === 0
  const isLast = index === stepCount - 1

  const left = isFirst ? stepWidth - stepSpacing / 2 : stepWidth - stepSpacing / 2
  const right = isLast ? stepWidth + stepSpacing / 2 : stepWidth + stepSpacing / 2

  return {
    left: Math.max(0, left),
    width: Math.min(100, right) - Math.max(0, left),
  }
}

export const getLabelStyle = (
  index: number,
  stepCount: number,
  stepWidth: number,
): React.CSSProperties => {
  const { left, width } = getSlotBounds(index, stepCount, stepWidth)

  const isFirst = index === 0
  const isLast = index === stepCount - 1

  return {
    position: 'absolute',
    left: isFirst ? `calc(${left}% - 8px)` : `${left}%`,
    width: isLast ? `calc(${width}% + 8px)` : `${width}%`,
    top: `${LABEL_Y_OFFSET}px`,
    display: 'flex',
    justifyContent: getLabelAlignment(index, stepCount).justifyContent,
  }
}
