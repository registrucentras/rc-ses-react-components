import { Chip, Tooltip, useForkRef } from '@mui/material'
import { forwardRef, useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import { common, grey, primary } from '@/theme/palette'

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
          borderColor: grey['300'],
          backgroundColor: common.white,
          color: grey['900'],
          '& .MuiChip-label': {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.25rem',
            minWidth: 0,
            pl: '0.75rem',
            pr: 0,
          },
          '& .MuiChip-deleteIcon': {
            color: grey['900'],
            margin: '0 0.5rem 0 0.25rem',
            flexShrink: 0,
          },
          '&.MuiChip-clickable:hover': {
            borderColor: grey['400'],
            backgroundColor: grey['100'],
          },
          '&:hover .MuiChip-deleteIcon': {
            color: grey['900'],
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${primary['500']}`,
            outlineOffset: '-2px',
            backgroundColor: common.white,
          },
        }}
        variant='outlined'
      />
    </Tooltip>
  )
})

RcSesFilterChip.displayName = 'RcSesFilterChip'

export default RcSesFilterChip
