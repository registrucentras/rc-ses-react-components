import type { ThemeColors } from '@/assets/ThemeColors'
import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import DotOutlineIcon from '@/assets/icons/DotOutlineIcon'
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
const checkColor = resolvePaletteColorPath('grey.50' as ThemeColors)
const activeInnerColor = resolvePaletteColorPath('grey.50' as ThemeColors)

function StepStatusBubble({ status }: StepStatusBubbleProps) {
  return (
    <svg
      width='20px'
      height='20px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {status === 'completed' && (
        <CheckCircleFillIcon fillColor={completedColor} strokeColor={checkColor} />
      )}
      {status === 'active' && (
        <DotOutlineIcon fillColor={activeColor} strokeColor={activeInnerColor} />
      )}
      {status === 'pending' && <CircleFilledIcon fillColor={pendingColor} />}
    </svg>
  )
}

export type { StepStatusBubbleProps }
export default StepStatusBubble
