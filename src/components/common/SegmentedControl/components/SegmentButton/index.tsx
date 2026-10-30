import { Button as MuiButton } from '@mui/material'
import React, { useCallback, useMemo } from 'react'

import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens as typography } from '@/theme/typographyTokens'

const SIZE_STYLES: Record<'small' | 'regular', React.CSSProperties> = {
  small: {
    width: 'auto',
    maxWidth: '160px',
    minHeight: space['space-36'],
    padding: `${space['space-8']} ${space['space-12']}`,
    fontSize: typography['font-size-button-compact'],
    lineHeight: typography['line-height-button-compact'],
  },
  regular: {
    width: 'auto',
    maxWidth: '180px',
    minHeight: '44px',
    padding: `${space['space-10']} ${space['space-16']}`,
    fontSize: typography['font-size-button-regular'],
    lineHeight: typography['line-height-button-regular'],
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
      if (isDisabled) return color['text-disabled']
      if (isSelected) return color['text-default']
      return color['text-link']
    }, [isDisabled, isSelected])

    const buttonStyles = useMemo(
      () => ({
        flex: '0 1 auto',
        minWidth: '0',
        height: 'auto',
        wordBreak: 'break-word',
        fontFamily: '"Public Sans", sans-serif',
        border: `${border['border-focus']} solid ${isFocused && !isDisabled ? color['border-focus'] : 'transparent'}`,

        backgroundColor: isSelected ? color['surface-brand-subtle'] : 'transparent',

        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontWeight: 500,
        borderRadius: border['radius-button'],
        transition: 'all 150ms ease-in-out',
        whiteSpace: 'normal',
        ...sizeStyles,
      }),
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
          '&&': {
            ...buttonStyles,
            '&:hover, &:active': {
              color: textColor,
              backgroundColor: isSelected ? color['surface-brand-subtle'] : 'transparent',
            },
            '&.Mui-disabled': {
              color: textColor,
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        {option.label}
      </MuiButton>
    )
  },
)

export default RcSesSegmentButton
