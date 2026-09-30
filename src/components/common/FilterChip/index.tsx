import { Box, Tooltip } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import { common, grey, primary } from '@/theme/palette'

export interface RcSesFilterChipProps {
  label: string
  onRemove: () => void
  disabled?: boolean
  testId?: string
}

const neutralStyle = {
  border: `1px solid ${grey['300']}`,
  background: common.white,
  color: grey['900'],
  iconColor: grey['900'],
  '&:hover': {
    border: `1px solid ${grey['400']}`,
    background: grey['100'],
  },
}

function RcSesFilterChip(props: RcSesFilterChipProps) {
  const { label, onRemove, disabled = false, testId } = props
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesFilterChip' })

  const labelRef = useRef<HTMLSpanElement>(null)
  const [isTruncated, setIsTruncated] = useState(false)

  useEffect(() => {
    if (labelRef.current) {
      setIsTruncated(labelRef.current.scrollWidth > labelRef.current.clientWidth)
    }
  }, [label])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) return

      // Space, Backspace, Delete, or Enter to remove
      if ([' ', 'Backspace', 'Delete', 'Enter'].includes(event.key)) {
        event.preventDefault()
        onRemove()
      }
    },
    [disabled, onRemove],
  )

  const handleClick = useCallback(() => {
    if (!disabled) {
      onRemove()
    }
  }, [disabled, onRemove])

  return (
    <Tooltip title={isTruncated ? label : ''} placement='top' arrow>
      <Box
        component='div'
        role='button'
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        data-testid={testId}
        aria-label={t('aria.label', { label })}
        aria-disabled={disabled}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          height: '2rem',
          pl: '0.75rem',
          pr: '0.5rem',
          borderRadius: '9999px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'all 200ms ease-in-out',
          ...neutralStyle,
          '&:focus': {
            outline: 'none',
            border: `2px solid ${primary['500']} !important`,
            background: common.white,
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
      >
        <Box
          component='span'
          ref={labelRef}
          sx={{
            display: 'block',
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '200px',
          }}
        >
          {label}
        </Box>
        <Box
          component='span'
          aria-hidden
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 16,
            height: 16,
          }}
        >
          <CloseIcon
            size={16}
            fillColor={neutralStyle.iconColor}
            aria-hidden
            focusable={false}
          />
        </Box>
      </Box>
    </Tooltip>
  )
}

export default RcSesFilterChip
