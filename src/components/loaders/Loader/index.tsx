import { Stack, StackProps, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import RcSesPalette from '@/theme/palette'

const LOADER_SIZE_MAP = {
  small: {
    gap: 1,
    spinnerSize: '24px',
    textVariant: 'body2',
  },
  medium: {
    gap: 1.5,
    spinnerSize: '40px',
    textVariant: 'body1',
  },
  large: {
    gap: 2,
    spinnerSize: '64px',
    textVariant: 'body1',
  },
} as const

export type RcSesLoaderSize = keyof typeof LOADER_SIZE_MAP

export interface RcSesLoaderProps extends Omit<StackProps, 'children'> {
  label?: string
  size?: RcSesLoaderSize
  showLabel?: boolean
}

function RcSesLoader({
  'aria-label': ariaLabel,
  label,
  size = 'medium',
  showLabel = true,
  sx,
  ...props
}: RcSesLoaderProps) {
  const { t } = useTranslation('common', { keyPrefix: 'components.Loader' })
  const { gap, spinnerSize, textVariant } = LOADER_SIZE_MAP[size]
  const resolvedLabel = label ?? t('loading')

  return (
    <Stack
      role='status'
      aria-live='polite'
      aria-label={!showLabel ? (ariaLabel ?? resolvedLabel) : ariaLabel}
      alignItems='center'
      gap={gap}
      sx={[{ color: RcSesPalette.primary[700] }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <RcSesLoadingSpinner color='inherit' size={spinnerSize} />
      {showLabel && (
        <Typography color='text.secondary' variant={textVariant}>
          {resolvedLabel}
        </Typography>
      )}
    </Stack>
  )
}

export default RcSesLoader
