import { CircularProgress } from '@mui/material'

const SPINNER_SIZE_MAP = {
  small: '16px',
  medium: '20px',
  large: '24px',
} as const

export type RcSesSpinnerColor =
  'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'

export interface RcSesLoadingSpinnerProps {
  color?: RcSesSpinnerColor
  size?: 'small' | 'medium' | 'large' | string
}

function RcSesLoadingSpinner({
  color = 'inherit',
  size = 'medium',
}: RcSesLoadingSpinnerProps) {
  const spinnerSize = SPINNER_SIZE_MAP[size as keyof typeof SPINNER_SIZE_MAP] ?? size

  return (
    <CircularProgress
      size={spinnerSize}
      color={color}
      variant='determinate'
      value={75}
      sx={{
        animation: 'spin 1s linear infinite',
        '@keyframes spin': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
        },
      }}
    />
  )
}

export default RcSesLoadingSpinner
