import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  AccordionProps as MuiAccordionProps,
  useMediaQuery,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

import IconProps from '@/assets/IconProps'
import { ArrowRightIcon, CaretDownIcon } from '@/assets/icons/phosphorIcons'
import RcSesButton from '@/components/common/Button'
import IconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import normalizeSx from '@/components/utils/normalizeSx'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { accordionSummaryRootStyles } from '@/theme/light/MuiAccordionSummary'
import { duration, easing } from '@/theme/motion'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import '@/theme/tokens.css'
import { typographyTokens } from '@/theme/typographyTokens'

import useAccordionController from './hooks/useAccordionController'

export interface AccordionMenuItem {
  label: string
  href: string
  current?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface AccordionProps extends Omit<MuiAccordionProps, 'children'> {
  id: string
  controller: ReturnType<typeof useAccordionController>
  type?: 'default' | 'menu'
  description?: React.ReactNode
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  Icon?: React.JSXElementConstructor<IconProps>
  menuItems?: AccordionMenuItem[]
  allLink?: AccordionMenuItem
  children?: React.ReactNode
}

const bodyText = {
  fontFamily: typographyTokens['font-family'],
  fontSize: typographyTokens['font-size-body-regular'],
  lineHeight: typographyTokens['line-height-body-regular'],
  fontWeight: typographyTokens['font-weight-body-regular'],
  letterSpacing: typographyTokens['letter-spacing-body-regular'],
}

function RcSesAccordion({
  children,
  controller,
  id,
  onChange,
  type = 'default',
  description,
  headingLevel = 3,
  Icon,
  menuItems = [],
  allLink,
  disabled: disabledProp,
  expanded: expandedProp,
  slots,
  slotProps,
  sx,
  ...accordionProps
}: AccordionProps) {
  const menu = type === 'menu'
  const [touchPressed, setTouchPressed] = useState(false)
  const item = controller.state[id]
  const canToggle = menu || item?.canToggle !== false
  const disabled = !menu && (disabledProp ?? item?.disabled ?? false)
  const expanded = !canToggle || (expandedProp ?? item?.expanded ?? false)
  const title = item?.title ?? ''
  const subtitle = description === undefined ? item?.description : description
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const currentHref = menu
    ? (menuItems.find((link) => link.current)?.href ??
      (allLink?.current ? allLink.href : undefined))
    : undefined
  const currentKey = currentHref ? `${id}:${currentHref}` : undefined
  const previousCurrentHref = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (currentKey && currentKey !== previousCurrentHref.current) controller.open(id)
    previousCurrentHref.current = currentKey
  }, [controller, currentKey, id])

  const handleOnChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (!canToggle || disabled) return
    if (menu && isExpanded) controller.open(id)
    else controller.toggleAccordion(id, isExpanded)
    onChange?.(event, isExpanded)
  }

  const text = (
    <Box
      component='span'
      sx={{
        display: 'flex',
        minWidth: 0,
        flex: 1,
        flexDirection: 'column',
        gap: spacingRoleBasedTokens['space-4'],
        overflowWrap: 'anywhere',
        textAlign: 'left',
      }}
    >
      <Box component='span' sx={menu ? bodyText : undefined}>
        {title}
      </Box>
      {!menu && subtitle && (
        <Box
          component='span'
          sx={{
            color: disabled
              ? colorTokens['text-disabled']
              : colorTokens['text-secondary'],
            fontSize: typographyTokens['font-size-body-small'],
            lineHeight: typographyTokens['line-height-body-small'],
            fontWeight: typographyTokens['font-weight-body-small'],
            letterSpacing: typographyTokens['letter-spacing-body-small'],
          }}
        >
          {subtitle}
        </Box>
      )}
    </Box>
  )

  return (
    <Accordion
      {...accordionProps}
      disabled={disabled}
      expanded={expanded}
      onChange={handleOnChange}
      data-accordion-type={type}
      slots={{ ...slots, heading: menu ? 'div' : `h${headingLevel}` }}
      slotProps={{
        ...slotProps,
        region: (ownerState) => ({
          ...(typeof slotProps?.region === 'function'
            ? slotProps.region(ownerState)
            : slotProps?.region),
          id: `${id}-content`,
          'aria-labelledby': menu ? undefined : `${id}-header`,
          role: menu ? 'presentation' : 'region',
        }),
        transition: (ownerState) => ({
          ...(typeof slotProps?.transition === 'function'
            ? slotProps.transition(ownerState)
            : slotProps?.transition),
          timeout: reducedMotion ? 0 : duration.standard,
          easing: easing.standard,
        }),
      }}
      sx={[
        menu
          ? {
              border: 0,
              borderRadius: 0,
              margin: 0,
              '&&': { margin: 0 },
              '&.Mui-expanded': { margin: 0 },
              '&:has(.MuiAccordionSummary-root.Mui-focusVisible)': { outline: 'none' },
              '& .MuiAccordionSummary-root': {
                minHeight: '64px',
                padding: spacingRoleBasedTokens['space-16'],
                borderRadius: 0,
                backgroundColor: colorTokens['surface-base'],
                borderBottom: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
                '&:hover:not(.Mui-disabled), &:active, &[data-touch-pressed="true"]:not(.Mui-disabled)':
                  {
                    backgroundColor: colorTokens['surface-sunken'],
                  },
                '&.Mui-focusVisible': {
                  backgroundColor: colorTokens['surface-base'],
                  outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
                  outlineOffset: `calc(-1 * ${borderTokens['border-focus']})`,
                },
              },
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: spacingRoleBasedTokens['space-12'],
                minWidth: 0,
              },
              '& .MuiAccordionDetails-root': {
                backgroundColor: colorTokens['surface-sunken'],
                padding: `0 ${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-8']}`,
                borderBottom: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
              },
            }
          : {},
        {
          '& .MuiAccordionSummary-expandIconWrapper': {
            color: disabled ? colorTokens['text-disabled'] : colorTokens['text-default'],
            flexShrink: 0,
          },
          '& .MuiAccordionSummary-expandIconWrapper svg': {
            width: sizeTokens['icon-size-24'],
            height: sizeTokens['icon-size-24'],
          },
          '@media (prefers-reduced-motion: reduce)': {
            '& *, & *::before, & *::after': {
              transition: 'none !important',
              animation: 'none !important',
            },
          },
        },
        ...normalizeSx(sx),
      ]}
    >
      {canToggle ? (
        <AccordionSummary
          data-touch-pressed={menu && touchPressed ? true : undefined}
          onTouchStart={menu ? () => setTouchPressed(true) : undefined}
          onTouchMove={menu ? () => setTouchPressed(false) : undefined}
          onTouchEnd={menu ? () => setTouchPressed(false) : undefined}
          onTouchCancel={menu ? () => setTouchPressed(false) : undefined}
          id={`${id}-header`}
          aria-controls={`${id}-content`}
          aria-label={menu ? title : undefined}
          expandIcon={<CaretDownIcon aria-hidden='true' focusable='false' />}
        >
          {menu && Icon && (
            <Box component='span' aria-hidden='true'>
              <IconWithSquareBackground Icon={Icon} size={24} variant='soft' />
            </Box>
          )}
          {text}
        </AccordionSummary>
      ) : (
        <Box
          id={`${id}-header`}
          className={`MuiAccordionSummary-root${disabled ? ' Mui-disabled' : ''}`}
          aria-disabled={disabled || undefined}
          sx={{
            ...accordionSummaryRootStyles,
            display: 'flex',
            '&:hover:not(.Mui-disabled)': {
              backgroundColor: colorTokens['surface-sunken'],
            },
            fontSize: typographyTokens['font-size-heading-card-title'],
            fontWeight: typographyTokens['font-weight-heading-card-title'],
            lineHeight: typographyTokens['line-height-heading-card-title'],
            letterSpacing: typographyTokens['letter-spacing-heading-card-title'],
          }}
        >
          {text}
        </Box>
      )}
      <AccordionDetails>
        {menu ? (
          <Box component='ul' sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((link) => (
              <Box component='li' key={link.href}>
                <Link
                  href={link.href}
                  onClick={link.onClick}
                  aria-current={link.current ? 'page' : undefined}
                  underline='none'
                  sx={{
                    ...bodyText,
                    display: 'block',
                    minHeight: '44px',
                    padding: `${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-8']}`,
                    overflowWrap: 'anywhere',
                    color: link.current
                      ? colorTokens['control-selected']
                      : colorTokens['text-default'],
                    boxShadow: link.current
                      ? `inset 0 calc(-1 * ${borderTokens['stroke-2']}) ${colorTokens['control-selected']}`
                      : 'none',
                    '&:hover': {
                      color: colorTokens['text-link-hover'],
                      backgroundColor: colorTokens['surface-sunken'],
                    },
                    '&:focus-visible': {
                      outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
                      outlineOffset: `calc(-1 * ${borderTokens['border-focus']})`,
                    },
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
            {children}
            {allLink && (
              <Box component='li' sx={{ pl: spacingRoleBasedTokens['space-4'] }}>
                <RcSesButton
                  component='a'
                  variant='link'
                  href={allLink.href}
                  onClick={allLink.onClick}
                  aria-current={allLink.current ? 'page' : undefined}
                  endIcon={<ArrowRightIcon aria-hidden='true' />}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    minHeight: '44px',
                    whiteSpace: 'normal',
                    overflowWrap: 'anywhere',
                    textAlign: 'left',
                  }}
                >
                  {allLink.label}
                </RcSesButton>
              </Box>
            )}
          </Box>
        ) : (
          children
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default RcSesAccordion
