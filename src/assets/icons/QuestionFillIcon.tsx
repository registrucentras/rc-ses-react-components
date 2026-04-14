import { QuestionIcon as Question } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function QuestionFillIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <Question
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default QuestionFillIcon
