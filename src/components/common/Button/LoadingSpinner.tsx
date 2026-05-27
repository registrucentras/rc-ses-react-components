import { CircularProgress } from '@mui/material'

const VALID_SPINNER_COLORS = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'inherit',
] as const

type SpinnerColor = (typeof VALID_SPINNER_COLORS)[number]

const SPINNER_SIZE_MAP = {
  small: '16px',
  medium: '20px',
  large: '24px',
} as const

// Custom colors that aren't MUI standard map to inherit (uses parent color)
const CUSTOM_COLOR_MAP: Record<string, SpinnerColor> = {
  light: 'inherit',
  ghost: 'inherit',
  dark: 'inherit',
}

export function getSpinnerColor(color: any): SpinnerColor {
  if (VALID_SPINNER_COLORS.includes(color)) {
    return color
  }
  return CUSTOM_COLOR_MAP[color] ?? 'inherit'
}

interface LoadingSpinnerProps {
  color?: SpinnerColor
  size?: 'small' | 'medium' | 'large' | string
}

function LoadingSpinner({ color = 'inherit', size = 'medium' }: LoadingSpinnerProps) {
  const spinnerSize = SPINNER_SIZE_MAP[size as keyof typeof SPINNER_SIZE_MAP] ?? size

  return (
    <CircularProgress
      size={spinnerSize}
      color={color}
      variant="determinate"
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
          animationDuration: '2s',
        },
      }}
    />
  )
}

export default LoadingSpinner
