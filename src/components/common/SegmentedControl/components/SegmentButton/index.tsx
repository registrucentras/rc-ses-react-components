import { Button as MuiButton } from '@mui/material'
import React, { useCallback, useMemo } from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const SIZE_STYLES: Record<'small' | 'regular', React.CSSProperties> = {
  small: {
    width: 'auto',
    maxWidth: '100%',
    minHeight: spacingRoleBasedTokens['space-36'],
    padding: `calc(${spacingRoleBasedTokens['space-8']} - ${borderTokens['border-focus']}) calc(${spacingRoleBasedTokens['space-16']} - ${borderTokens['border-focus']})`,
    fontSize: typographyTokens['font-size-button-compact'],
    lineHeight: typographyTokens['line-height-button-compact'],
  },
  regular: {
    width: 'auto',
    maxWidth: '100%',
    minHeight: '44px',
    padding: `calc(${spacingRoleBasedTokens['space-12']} - ${borderTokens['border-focus']}) calc(${spacingRoleBasedTokens['space-20']} - ${borderTokens['border-focus']})`,
    fontSize: typographyTokens['font-size-button-regular'],
    lineHeight: typographyTokens['line-height-button-regular'],
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
      if (isDisabled)
        return isSelected ? colorTokens['text-secondary'] : colorTokens['text-disabled']
      if (isSelected) return colorTokens['text-default']
      return colorTokens['text-link']
    }, [isDisabled, isSelected])

    const buttonStyles = useMemo(
      () => ({
        flex: '1 1 auto',
        minWidth: '0',
        height: 'auto',
        wordBreak: 'break-word',
        fontFamily: '"Public Sans", sans-serif',
        border: `${borderTokens['border-focus']} solid ${
          isSelected
            ? colorTokens[isDisabled ? 'control-disabled-selected' : 'border-focus']
            : 'transparent'
        }`,

        backgroundColor: isSelected ? colorTokens['surface-brand-subtle'] : 'transparent',

        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontWeight: 500,
        borderRadius: borderTokens['radius-button'],
        transition: 'all 150ms ease-in-out',
        whiteSpace: 'normal',
        ...sizeStyles,
      }),
      [sizeStyles, isDisabled, isSelected, textColor],
    )

    const handleClick = useCallback(() => {
      onClick(option.id)
    }, [option.id, onClick])

    return (
      <MuiButton
        ref={ref}
        variant='text'
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
              backgroundColor: isSelected
                ? colorTokens['surface-brand-subtle']
                : colorTokens['surface-base'],
            },
            '&:focus-visible': {
              borderColor: colorTokens['border-focus'],
              color: isSelected
                ? colorTokens['text-default']
                : colorTokens['text-secondary'],
            },
            '&.Mui-disabled': {
              color: textColor,
              backgroundColor: isSelected
                ? colorTokens['surface-brand-subtle']
                : 'transparent',
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
