import { QuestionIcon as Question } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface QuestionFillIconProps extends IconProps {
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill'
}

function QuestionFillIcon({
  className,
  size = 16,
  fillColor,
  weight = 'fill',
  ...rest
}: QuestionFillIconProps) {
  return (
    <Question
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}

export default QuestionFillIcon
