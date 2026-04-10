type StepStatusLineProps = {
  x1: number
  x2: number
  y: number
  completed: boolean
  strokeWidth?: number
  activeColor?: string
  pendingColor?: string
}

function StepStatusLine({
  x1,
  x2,
  y,
  completed,
  strokeWidth = 2,
  activeColor = '#50C9F3',
  pendingColor = '#DCE0E5',
}: StepStatusLineProps) {
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={completed ? activeColor : pendingColor}
      strokeWidth={strokeWidth}
      vectorEffect='non-scaling-stroke'
      strokeLinecap='round'
    />
  )
}

export type { StepStatusLineProps }
export default StepStatusLine
