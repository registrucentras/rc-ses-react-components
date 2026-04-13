import { QuestionIcon as Question } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function QuestionFillIcon({ className, size = 16, fillColor }: IconProps) {
  return <Question className={className} size={size} weight='fill' color={fillColor} />
}

export default QuestionFillIcon
