import { StepIconProps } from '@mui/material'

import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import { CheckCircleFillIcon, CircleFilledIcon } from '@/assets/icons/phosphorIcons'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'

import stepperColors from '../stepperTokens'

const CustomStepIcon = ({ active, completed, className, style }: StepIconProps) => {
  if (completed) {
    return (
      <CheckCircleFillIcon
        className={className}
        style={{
          width: sizeTokens['icon-size-20'],
          height: sizeTokens['icon-size-20'],
          ...style,
        }}
        fillColor={stepperColors.progress}
        size={20}
      />
    )
  }

  if (active) {
    return (
      <DotCircleFilledIcon
        className={className}
        style={{
          width: sizeTokens['icon-size-20'],
          height: sizeTokens['icon-size-20'],
          ...style,
        }}
        fillColor={stepperColors.progress}
        size={20}
      />
    )
  }

  return (
    <CircleFilledIcon
      className={className}
      style={{
        width: sizeTokens['icon-size-20'],
        height: sizeTokens['icon-size-20'],
        ...style,
      }}
      fillColor={colorTokens['border-default']}
      size={20}
    />
  )
}

export default CustomStepIcon
