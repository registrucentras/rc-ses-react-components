import { StepIconProps } from '@mui/material'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import palette from '@/theme/palette'

import { useStepperContext } from '../context/StepperContext'

const CustomStepIcon = ({ icon, ...props }: StepIconProps) => {
  const steps = useStepperContext()

  const stepIndex = Number(icon) - 1
  const state = steps[stepIndex]?.state
  const { className, style } = props

  switch (state) {
    case 'active':
      return (
        <DotCircleFilledIcon
          className={className}
          style={style}
          fillColor={palette.primary[400]}
          size={20}
        />
      )
    case 'completed':
      return (
        <CheckCircleFillIcon
          className={className}
          style={style}
          fillColor={palette.primary[400]}
          size={20}
        />
      )
    default:
      return (
        <CircleFilledIcon
          className={className}
          style={style}
          fillColor={palette.grey[300]}
          size={20}
        />
      )
  }
}

export default CustomStepIcon
