import { QuestionIcon as Question } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function QuestionIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return <Question {...rest} className={className} size={size} color={fillColor} />
}

export default QuestionIcon
