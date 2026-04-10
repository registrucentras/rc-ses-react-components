import IconProps from '../IconProps'

function CheckCircleFillIcon({
  className,
  fillColor = 'none',
  strokeColor = 'white',
}: IconProps) {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='10' fill={fillColor} />
      <path
        d='M16 9.5L11 14.5L8 12.5'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CheckCircleFillIcon
