import { QuestionIcon as Question } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function QuestionFillIcon({
  className,
  size = 16,
  fillColor,
  weight = 'fill',
  ...rest
}: IconProps) {
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
