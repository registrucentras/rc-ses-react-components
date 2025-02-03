import IconProps from '../IconProps'

function CheckUncheckedBoldIcon({ className = undefined }: IconProps) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='22' height='22' rx='3' fill='white' />
      <rect
        className='checkbox-stroke'
        x='1'
        y='1'
        width='22'
        height='22'
        rx='3'
        stroke='#8E959E'
        strokeWidth='2'
      />
    </svg>
  )
}

export default CheckUncheckedBoldIcon
