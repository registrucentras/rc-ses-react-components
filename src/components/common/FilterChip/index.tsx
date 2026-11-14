import { Chip, Tooltip, useForkRef } from '@mui/material'
import { forwardRef, useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

export interface RcSesFilterChipProps {
  label: string
  onRemove: () => void
  testId?: string
}

const RcSesFilterChip = forwardRef<HTMLDivElement, RcSesFilterChipProps>((props, ref) => {
  const { label, onRemove, testId } = props
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesFilterChip' })

  const [isTruncated, setIsTruncated] = useState(false)
  const chipRef = useRef<HTMLDivElement>(null)
  const forkRef = useForkRef(chipRef, ref)

  useLayoutEffect(() => {
    const checkTruncation = () => {
      const labelElement = chipRef.current?.querySelector('.MuiChip-label') as HTMLElement
      if (labelElement) {
        setIsTruncated(labelElement.scrollWidth > labelElement.clientWidth)
      }
    }

    checkTruncation()

    const observer = new ResizeObserver(checkTruncation)
    if (chipRef.current) {
      observer.observe(chipRef.current)
    }

    return () => observer.disconnect()
  }, [label])

  return (
    <Tooltip title={isTruncated ? label : ''} placement='top' arrow>
      <Chip
        ref={forkRef}
        label={label}
        onClick={onRemove}
        onDelete={onRemove}
        deleteIcon={<CloseIcon size={16} aria-hidden focusable={false} />}
        aria-label={t('aria.label', { label })}
        data-testid={testId}
        sx={{
          maxWidth: '100%',
          padding: `${spacingRoleBasedTokens['space-6']} ${spacingRoleBasedTokens['space-8']} ${spacingRoleBasedTokens['space-6']} ${spacingRoleBasedTokens['space-12']}`,
          gap: spacingRoleBasedTokens['space-4'],
          borderRadius: borderTokens['radius-pill'],
          borderColor: colorTokens['border-default'],
          backgroundColor: colorTokens['surface-base'],
          color: colorTokens['text-default'],
          '& .MuiChip-label': {
            fontSize: typographyTokens['font-size-body-small'],
            fontWeight: 400,
            lineHeight: typographyTokens['line-height-body-small'],
            minWidth: 0,
            padding: 0,
          },
          '& .MuiChip-deleteIcon': {
            color: colorTokens['text-default'],
            margin: 0,
            flexShrink: 0,
          },
          '&.MuiChip-clickable:hover': {
            borderColor: colorTokens['border-strong'],
            backgroundColor: colorTokens['surface-muted'],
          },
          '&.Mui-focusVisible': {
            borderColor: colorTokens['border-focus'],
            borderWidth: borderTokens['stroke-2'],
            backgroundColor: colorTokens['surface-base'],
            outlineOffset: 0,
          },
        }}
        variant='outlined'
      />
    </Tooltip>
  )
})

RcSesFilterChip.displayName = 'RcSesFilterChip'

export default RcSesFilterChip
