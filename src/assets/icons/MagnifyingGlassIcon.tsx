import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function MagnifyingGlassIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          d='m21.528 20.47-4.694-4.693a8.26 8.26 0 1 0-1.06 1.06l4.693 4.695a.75.75 0 1 0 1.06-1.061Zm-17.78-9.969a6.75 6.75 0 1 1 6.75 6.75 6.758 6.758 0 0 1-6.75-6.75Z'
          fill='currentColor'
        />
      </svg>
    </SvgIcon>
  )
}

export default MagnifyingGlassIcon
