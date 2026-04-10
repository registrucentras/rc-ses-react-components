import IconProps from '../IconProps'

function DotOutlineIcon({ className, fillColor, strokeColor }: IconProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill={fillColor}
      viewBox='0 0 24 24'
    >
      <circle cx='12' cy='12' r='10' fill={fillColor} />
      <circle cx='12' cy='12' r='4' fill={strokeColor} />
    </svg>
  )
}

export default DotOutlineIcon
