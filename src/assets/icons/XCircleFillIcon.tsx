import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function XCircleFillIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          d='M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.751.751 0 0 1 1.06 1.06L13.06 12l2.47 2.47Z'
          fill='currentColor'
        />
      </svg>
    </SvgIcon>
  )
}

export default XCircleFillIcon
