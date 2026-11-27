import { Box, Typography, styled } from '@mui/material'
import React, { forwardRef } from 'react'

import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

type HeaderNavItemState = 'rest' | 'hover' | 'current' | 'focus' | 'open'

interface HeaderNavItemProps {
  label: string
  state?: HeaderNavItemState
  isCurrent?: boolean
  isOpen?: boolean
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  submenuId?: string
  className?: string
  ariaLabel?: string
}

const StyledContainer = styled(Box)<{ $state: HeaderNavItemState }>(({ $state }) => {
  const getBackgroundColor = () => {
    switch ($state) {
      case 'hover':
      case 'open':
        return colorTokens['surface-sunken']
      default:
        return 'transparent'
    }
  }

  const getBorderStyle = () => {
    if ($state === 'focus') {
      return `2px solid ${colorTokens['border-focus']}`
    }
    return 'none'
  }

  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingRoleBasedTokens['space-8'],
    paddingX: spacingRoleBasedTokens['space-8'],
    paddingY: spacingRoleBasedTokens['space-16'],
    backgroundColor: getBackgroundColor(),
    border: getBorderStyle(),
    borderRadius: 0,
    minHeight: '54px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'background-color 150ms ease-in-out, border-color 150ms ease-in-out',
    position: 'relative',

    '&:hover': {
      backgroundColor: colorTokens['surface-sunken'],
    },
  }
})

const StyledLabel = styled(Typography)<{ $state: HeaderNavItemState }>(({ $state }) => {
  const getColor = () => {
    switch ($state) {
      case 'hover':
        return colorTokens['text-link-hover']
      case 'current':
      case 'open':
        return colorTokens['control-selected']
      default:
        return colorTokens['text-default']
    }
  }

  return {
    color: getColor(),
    fontFamily: typographyTokens['font-family'],
    fontSize: typographyTokens['font-size-body-regular'],
    fontWeight: 400,
    lineHeight: typographyTokens['line-height-body-regular'],
    letterSpacing: 0,
    margin: 0,
    padding: 0,
  }
})

const ActiveIndicator = styled(Box)<{ $visible: boolean }>(({ $visible }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '2px',
  backgroundColor: colorTokens['control-selected'],
  opacity: $visible ? 1 : 0,
  transition: 'opacity 150ms ease-in-out',
}))

const CaretIcon = styled(Box)<{ $isOpen: boolean }>(({ $isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: sizeTokens['icon-size-16'],
  height: sizeTokens['icon-size-16'],
  flexShrink: 0,
  color: 'currentColor',
  transform: $isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 150ms ease-in-out',
}))

const HeaderNavItem = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  HeaderNavItemProps
>(
  (
    {
      label,
      state = 'rest',
      isCurrent = false,
      isOpen = false,
      href,
      onClick,
      submenuId,
      className,
      ariaLabel,
    },
    ref,
  ) => {
    // Determine effective state
    let effectiveState: HeaderNavItemState = state || 'rest'
    if (isCurrent) {
      effectiveState = 'current'
    } else if (isOpen) {
      effectiveState = 'open'
    }

    // Determine if this is a link or button
    const isLink = href && !isOpen
    const isButton = isOpen || !!submenuId

    // Derive visibility from content presence
    const hasDropdown = !!submenuId

    // Build accessible name
    const accessibleName = ariaLabel || label

    const content = (
      <>
        <StyledLabel $state={effectiveState} as='span'>
          {label}
        </StyledLabel>

        {hasDropdown && (
          <CaretIcon $isOpen={isOpen} aria-hidden='true'>
            {/* Caret down icon - rotates to up when open */}
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path
                d='M12.5 6L8 10.5L3.5 6'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </CaretIcon>
        )}

        <ActiveIndicator
          $visible={effectiveState === 'current' || effectiveState === 'open'}
        />
      </>
    )

    if (isLink) {
      const StyledLink = StyledContainer.withComponent('a')
      return (
        <StyledLink
          $state={effectiveState}
          aria-current={isCurrent ? 'page' : undefined}
          aria-label={accessibleName}
          ref={ref}
          className={className}
          title={label}
          href={href}
        >
          {content}
        </StyledLink>
      )
    }

    if (isButton) {
      const StyledButton = StyledContainer.withComponent('button')
      return (
        <StyledButton
          $state={effectiveState}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={submenuId}
          aria-label={accessibleName}
          ref={ref}
          className={className}
          title={label}
          onClick={onClick as any}
          type='button'
        >
          {content}
        </StyledButton>
      )
    }

    // Default: render as div if no href or onClick
    return (
      <StyledContainer
        $state={effectiveState}
        role='menuitem'
        aria-label={accessibleName}
        ref={ref}
        className={className}
        title={label}
        onClick={onClick as any}
      >
        {content}
      </StyledContainer>
    )
  },
)

HeaderNavItem.displayName = 'HeaderNavItem'

export default HeaderNavItem
export type { HeaderNavItemProps, HeaderNavItemState }
