import IconProps from '../IconProps'

function CircleFilledIcon({ className, fillColor }: IconProps) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10' fill={fillColor} />
    </svg>
  )
}
export default CircleFilledIcon
