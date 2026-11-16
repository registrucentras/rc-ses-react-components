import { Box, Stack, StackProps, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import { colorTokens } from '@/theme/colorTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

// CircularProgress draws its stroke in a 44-unit viewBox.
const SPINNER_VIEWBOX = 44

// Spinner and stroke sizes in px, per the Figma Spinner sizes.
const LOADER_SIZE_MAP = {
  small: {
    spinnerSize: 24,
    strokeWidth: 2.5,
    fontSize: typographyTokens['font-size-body-small'],
    lineHeight: typographyTokens['line-height-body-small'],
  },
  medium: {
    spinnerSize: 40,
    strokeWidth: 3,
    fontSize: typographyTokens['font-size-body-regular'],
    lineHeight: typographyTokens['line-height-body-regular'],
  },
  large: {
    spinnerSize: 64,
    strokeWidth: 4,
    fontSize: typographyTokens['font-size-body-regular'],
    lineHeight: typographyTokens['line-height-body-regular'],
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
  const { spinnerSize, strokeWidth, fontSize, lineHeight } = LOADER_SIZE_MAP[size]
  const resolvedLabel = label ?? t('loading')

  return (
    <Stack
      role='status'
      aria-live='polite'
      aria-label={!showLabel ? (ariaLabel ?? resolvedLabel) : ariaLabel}
      {...props}
      sx={[
        {
          alignItems: 'center',
          gap: spacingTokens['spacing-aliases-stack-tight'],
        },
        { color: colorTokens['text-link'] },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          '& .MuiCircularProgress-circle': {
            strokeWidth: (strokeWidth * SPINNER_VIEWBOX) / spinnerSize,
          },
        }}
      >
        {/* Track: a full ring under the arc, the same width as its stroke. */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `${strokeWidth}px solid ${colorTokens['border-subtle']}`,
          }}
        />
        <RcSesLoadingSpinner color='inherit' size={`${spinnerSize}px`} />
      </Box>
      {showLabel && (
        <Typography
          sx={{
            color: colorTokens['text-secondary'],
            fontSize,
            lineHeight,
            fontWeight: 400,
          }}
        >
          {resolvedLabel}
        </Typography>
      )}
    </Stack>
  )
}

export default RcSesLoader
