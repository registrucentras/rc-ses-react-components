import IconProps from '../IconProps'

function SpinnerGapBoldIcon({ className = undefined }: IconProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
    >
      <path
        fill='#06A0D4'
        d='M13.1 3v3A1.1 1.1 0 1 1 11 6V3A1.1 1.1 0 1 1 13 3Zm7.9 7.9h-3a1.1 1.1 0 1 0 0 2.2h3a1.1 1.1 0 1 0 0-2.2Zm-4 4.5a1.1 1.1 0 1 0-1.6 1.6l2.2 2.2a1.1 1.1 0 0 0 1.6-1.6L17 15.4ZM12 17a1.1 1.1 0 0 0-1.1 1.1v3a1.1 1.1 0 1 0 2.2 0v-3a1.1 1.1 0 0 0-1.1-1.1Zm-5-1.5-2.2 2.2a1.1 1.1 0 0 0 1.6 1.6L8.6 17A1.1 1.1 0 1 0 7 15.4ZM7 12A1.1 1.1 0 0 0 6 10.9H3A1.1 1.1 0 1 0 3 13h3A1.1 1.1 0 0 0 7.1 12Zm-.7-7.2a1.1 1.1 0 0 0-1.6 1.6L7 8.6A1.1 1.1 0 1 0 8.6 7L6.4 4.8Z'
      />
    </svg>
  )
}

export default SpinnerGapBoldIcon
