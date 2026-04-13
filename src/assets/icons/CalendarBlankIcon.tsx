import { CalendarBlankIcon as CalendarBlank } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CalendarBlankIcon({ className, size = 24, fillColor }: IconProps) {
  return <CalendarBlank className={className} size={size} color={fillColor} />
}

export default CalendarBlankIcon
