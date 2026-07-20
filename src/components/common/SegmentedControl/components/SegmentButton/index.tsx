import { Button as MuiButton } from '@mui/material'
import React, { useCallback, useMemo } from 'react'

import { grey, primary } from '@/theme/palette'

const SIZE_STYLES: Record<'small' | 'regular', React.CSSProperties> = {
  small: {
    width: 'auto',
    maxWidth: '160px',
    minHeight: '36px',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  regular: {
    width: 'auto',
    maxWidth: '180px',
    minHeight: '44px',
    padding: '10px 16px',
    fontSize: '15px',
    lineHeight: '20px',
  },
}

export interface RcSesSegmentOption {
  id: string
  label: string
  disabled?: boolean
  panelId?: string
}

export interface RcSesSegmentButtonProps {
  option: RcSesSegmentOption
  isSelected: boolean
  isFocused: boolean
  size: 'small' | 'regular'
  ariaRole: 'tab' | 'radio'
  onClick: (optionId: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void
  onFocus: () => void
}

const RcSesSegmentButton = React.forwardRef<HTMLButtonElement, RcSesSegmentButtonProps>(
  (
    { option, isSelected, isFocused, size, ariaRole, onClick, onKeyDown, onFocus },
    ref,
  ) => {
    const isDisabled = option.disabled
    const sizeStyles = SIZE_STYLES[size]

    const textColor = useMemo(() => {
      if (isDisabled) return `${grey['500']} !important`
      if (isSelected) return `${grey['900']} !important`
      return `${primary['700']} !important`
    }, [isDisabled, isSelected])

    const buttonStyles = useMemo(
      () =>
        ({
          flex: '0 1 auto',
          minWidth: '0',
          height: 'auto',
          wordBreak: 'break-word',
          fontFamily: '"Public Sans", sans-serif !important',
          border: `2px solid ${isFocused && !isDisabled ? primary['500'] : 'transparent'}`,
          backgroundColor: isSelected
            ? `${primary['50']} !important`
            : 'transparent !important',
          color: textColor,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          fontWeight: 500,
          borderRadius: '8px',
          transition: 'all 150ms ease-in-out',
          whiteSpace: 'normal',
          outline: 'none',
          ...sizeStyles,
        }) as React.CSSProperties,
      [sizeStyles, isDisabled, isSelected, isFocused, textColor],
    )

    const handleClick = useCallback(() => {
      onClick(option.id)
    }, [option.id, onClick])

    return (
      <MuiButton
        ref={ref}
        type='button'
        onClick={handleClick}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        disabled={isDisabled}
        role={ariaRole}
        aria-checked={ariaRole === 'radio' ? isSelected : undefined}
        aria-selected={ariaRole === 'tab' ? isSelected : undefined}
        aria-controls={option.panelId}
        tabIndex={isFocused && !isDisabled ? 0 : -1}
        sx={{
          ...buttonStyles,
          '&.Mui-disabled': {
            backgroundColor: 'transparent !important',
          },
        }}
      >
        {option.label}
      </MuiButton>
    )
  },
)

export default RcSesSegmentButton
