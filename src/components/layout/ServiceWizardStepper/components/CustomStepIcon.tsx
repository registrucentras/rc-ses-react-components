import { StepIconProps } from '@mui/material'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import palette from '@/theme/palette'

const CustomStepIcon = ({ active, completed, className, style }: StepIconProps) => {
  if (completed) {
    return (
      <CheckCircleFillIcon
        className={className}
        style={style}
        fillColor={palette.primary[400]}
        size={20}
      />
    )
  }

  if (active) {
    return (
      <DotCircleFilledIcon
        className={className}
        style={style}
        fillColor={palette.primary[400]}
        size={20}
      />
    )
  }

  return (
    <CircleFilledIcon
      className={className}
      style={style}
      fillColor={palette.grey[300]}
      size={20}
    />
  )
}

export default CustomStepIcon
