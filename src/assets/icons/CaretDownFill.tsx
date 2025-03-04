import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function CaretDownFill(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          d='M20 9.5 12.5 17a.7.7 0 0 1-1 0L4 9.5a.8.8 0 0 1 .5-1.3h15a.8.8 0 0 1 .5 1.3Z'
          fill='currentColor'
        />
      </svg>
    </SvgIcon>
  )
}

export default CaretDownFill
