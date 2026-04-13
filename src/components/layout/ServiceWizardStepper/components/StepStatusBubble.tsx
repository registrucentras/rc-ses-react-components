import type { ThemeColors } from '@/assets/ThemeColors'
import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'

export enum StepStatus {
  COMPLETED = 'completed',
  ACTIVE = 'active',
  PENDING = 'pending',
}
type StepStatusBubbleProps = {
  status: StepStatus
}

const completedColor = resolvePaletteColorPath('primary.400' as ThemeColors)
const activeColor = resolvePaletteColorPath('primary.400' as ThemeColors)
const pendingColor = resolvePaletteColorPath('grey.300' as ThemeColors)

function StepStatusBubble({ status }: StepStatusBubbleProps) {
  if (status === 'completed') {
    return <CheckCircleFillIcon fillColor={completedColor} size={20} />
  }

  if (status === 'active') {
    return <DotCircleFilledIcon fillColor={activeColor} size={20} />
  }

  return <CircleFilledIcon fillColor={pendingColor} size={20} />
}

export type { StepStatusBubbleProps }
export default StepStatusBubble
