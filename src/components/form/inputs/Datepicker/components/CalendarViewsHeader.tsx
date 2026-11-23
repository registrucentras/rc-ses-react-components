import { Box, IconButton } from '@mui/material'
import { PickerDay } from '@mui/x-date-pickers/PickerDay'
import type { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader'
import { usePickerAdapter, usePickerTranslations } from '@mui/x-date-pickers/hooks'
import { addMonths, endOfMonth, endOfYear, startOfMonth } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from '@/assets/icons/phosphorIcons'
import Button from '@/components/common/Button'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

// A six-week calendar with 44px days determines the shared height for all views.
export const calendarViewsStyles = {
  position: 'relative',
  width: '340px',
  maxWidth: '100%',
  height: '388px',
  minHeight: '388px',
  maxHeight: '388px',
  boxSizing: 'border-box',
  // Contain outgoing month slides; the inner padding leaves room for focus rings.
  overflow: 'hidden',
  padding: spacingRoleBasedTokens['space-16'],
  '&:has([data-calendar-view="months"]) [role="grid"]:not([data-calendar-options]), &:has([data-calendar-view="years"]) [role="grid"]:not([data-calendar-options])':
    { display: 'none' },
} as const

type View = 'calendar' | 'months' | 'years'

function CalendarViewsHeader(props: PickersCalendarHeaderProps) {
  const {
    currentMonth,
    onMonthChange,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    disabled,
    labelId,
  } = props
  const adapter = usePickerAdapter()
  const translations = usePickerTranslations()
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker.views' })
  const [view, setView] = useState<View>('calendar')
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const [block, setBlock] = useState(() => Math.floor(year / 10) * 10)
  const [focused, setFocused] = useState(month)
  const grid = useRef<HTMLDivElement>(null)
  const root = useRef<HTMLDivElement>(null)
  const now = new Date()
  const lower = disablePast && now > minDate ? now : minDate
  const upper = disableFuture && now < maxDate ? now : maxDate

  const isDisabled = (index: number) => {
    const date =
      view === 'years' ? new Date(block + index, 0, 1) : new Date(year, index, 1)
    const end = view === 'years' ? endOfYear(date) : endOfMonth(date)
    return !!disabled || date > upper || end < lower
  }

  useEffect(() => {
    if (view !== 'calendar')
      grid.current?.querySelector<HTMLButtonElement>('button[tabindex="0"]')?.focus()
  }, [view, block])

  const goTo = (next: View) => {
    if (next === 'years') {
      setBlock(Math.floor(year / 10) * 10)
      setFocused(year - Math.floor(year / 10) * 10)
    }
    if (next === 'months') setFocused(month)
    setView(next)
    if (next === 'calendar') {
      requestAnimationFrame(() => {
        const calendar = root.current?.closest('.MuiDateCalendar-root')
        const day =
          calendar?.querySelector<HTMLButtonElement>(
            'button[data-timestamp][tabindex="0"]:not(.MuiPickerDay-dayOutsideMonth)',
          ) ??
          calendar?.querySelector<HTMLButtonElement>(
            'button[data-timestamp]:not(:disabled):not(.MuiPickerDay-dayOutsideMonth)',
          )
        day?.focus()
      })
    }
  }

  const select = (index: number) => {
    if (isDisabled(index)) return
    const date =
      view === 'years' ? new Date(block + index, month, 1) : new Date(year, index, 1)
    // Navigation changes the visible period, never the selected day/range.
    onMonthChange(date)
    goTo(view === 'years' ? 'months' : 'calendar')
  }

  const keyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const offsets: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -3,
      ArrowDown: 3,
      Home: -(index % 3),
      End: 2 - (index % 3),
    }
    if (!(event.key in offsets)) return
    event.preventDefault()
    let next = index + offsets[event.key]
    const step = offsets[event.key] < 0 ? -1 : 1
    while (next >= 0 && next < 12 && isDisabled(next)) next += step
    if (next < 0 || next > 11) return
    setFocused(next)
    grid.current
      ?.querySelector<HTMLButtonElement>(`button[data-index="${next}"]`)
      ?.focus()
  }

  const previousDisabled =
    view === 'years'
      ? block <= lower.getFullYear()
      : view === 'months' || endOfMonth(addMonths(currentMonth, -1)) < lower
  const nextDisabled =
    view === 'years'
      ? block + 11 >= upper.getFullYear()
      : view === 'months' || startOfMonth(addMonths(currentMonth, 1)) > upper
  const navigate = (direction: number) => {
    if (view === 'years') {
      setBlock(block + direction * 12)
      setFocused(direction > 0 ? 0 : 11)
    } else onMonthChange(addMonths(currentMonth, direction))
  }
  let heading = `${adapter.format(currentMonth, 'month')} ${adapter.format(currentMonth, 'year')}`
  if (view === 'months') heading = String(year)
  if (view === 'years') heading = `${block} - ${block + 11}`
  const viewName = t(view)
  const selectedIndex = view === 'years' ? year - block : month
  let tabStop = focused
  if (isDisabled(tabStop))
    tabStop = Array.from({ length: 12 }, (_, i) => i).find((i) => !isDisabled(i)) ?? -1

  let headerAction = t('chooseMonth')
  let nextView: View = 'months'
  if (view === 'months') {
    headerAction = t('chooseYear')
    nextView = 'years'
  }
  if (view === 'years') headerAction = t('returnMonths')

  return (
    <Box
      ref={root}
      data-calendar-view={view}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          if (view !== 'calendar') {
            event.preventDefault()
            event.stopPropagation()
            goTo(view === 'years' ? 'months' : 'calendar')
          }
          // Allow Escape to propagate when in calendar view to close the Popover
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '44px',
          mb: spacingRoleBasedTokens['space-12'],
        }}
      >
        <IconButton
          className='MuiPickersArrowSwitcher-button'
          aria-label={view === 'years' ? t('previousYears') : translations.previousMonth}
          disabled={!!disabled || previousDisabled}
          onClick={() => navigate(-1)}
          sx={{ width: '44px', height: '44px', color: colorTokens['action-link-text'] }}
        >
          <CaretLeftIcon size={24} />
        </IconButton>
        <Button
          variant='link'
          aria-label={headerAction}
          onClick={() => goTo(nextView)}
          disabled={disabled}
          sx={{
            minHeight: '44px',
            p: spacingTokens['spacing-aliases-button-padding-x-link'],
            gap: spacingTokens['spacing-aliases-button-icon-text-gap-regular'],
            color: colorTokens['action-link-text'],
            fontSize: typographyTokens['font-size-button-regular'],
            lineHeight: typographyTokens['line-height-button-regular'],
          }}
        >
          <span id={labelId}>{heading}</span>
          <CaretDownIcon size={24} />
        </Button>
        <IconButton
          className='MuiPickersArrowSwitcher-button'
          aria-label={view === 'years' ? t('nextYears') : translations.nextMonth}
          disabled={!!disabled || nextDisabled}
          onClick={() => navigate(1)}
          sx={{ width: '44px', height: '44px', color: colorTokens['action-link-text'] }}
        >
          <CaretRightIcon size={24} />
        </IconButton>
      </Box>
      <Box
        role='status'
        aria-live='polite'
        aria-atomic='true'
        sx={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clipPath: 'inset(50%)',
        }}
      >
        {viewName}: {heading}
      </Box>
      {view !== 'calendar' && (
        <Box
          ref={grid}
          data-calendar-options
          role='grid'
          aria-label={viewName}
          sx={{
            position: 'absolute',
            // Below the panel padding, the 44px header and its bottom margin.
            top: `calc(${spacingRoleBasedTokens['space-16']} + 44px + ${spacingRoleBasedTokens['space-12']})`,
            bottom: spacingRoleBasedTokens['space-16'],
            left: spacingRoleBasedTokens['space-16'],
            right: spacingRoleBasedTokens['space-16'],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            py: spacingRoleBasedTokens['space-12'],
          }}
        >
          {Array.from({ length: 4 }, (_, row) => (
            <Box
              key={row}
              role='row'
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: spacingRoleBasedTokens['space-10'],
              }}
            >
              {Array.from({ length: 3 }, (unused, column) => {
                const index = row * 3 + column
                const date =
                  view === 'years'
                    ? new Date(block + index, 0, 1)
                    : new Date(year, index, 1)
                const monthLabel = adapter.format(date, 'month')
                const label =
                  view === 'years'
                    ? String(block + index)
                    : monthLabel.charAt(0).toLocaleUpperCase() + monthLabel.slice(1)
                return (
                  <PickerDay
                    key={index}
                    day={date}
                    today={false}
                    selected={index === selectedIndex}
                    disabled={isDisabled(index)}
                    role='gridcell'
                    aria-label={label}
                    aria-selected={index === selectedIndex}
                    data-index={index}
                    tabIndex={index === tabStop ? 0 : -1}
                    onDaySelect={() => select(index)}
                    onKeyDown={(event) => keyDown(event, index)}
                    sx={{
                      '&&': {
                        width: '100%',
                        minWidth: '44px',
                        height: '48px',
                        margin: 0,
                        transition: 'none',
                        borderRadius: borderTokens['radius-8'],
                        color: colorTokens['text-default'],
                        fontSize: typographyTokens['font-size-body-regular'],
                        lineHeight: typographyTokens['line-height-body-regular'],
                        '&:hover': { backgroundColor: colorTokens['surface-muted'] },
                        '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
                          backgroundColor: colorTokens['control-selected'],
                          color: colorTokens['text-inverse'],
                        },
                        '&.Mui-disabled': { color: colorTokens['text-disabled'] },
                        '&.Mui-selected.Mui-focusVisible': {
                          boxShadow: `0 0 0 2px ${colorTokens['surface-base']}, 0 0 0 4px ${colorTokens['border-focus']}`,
                        },
                        '&.Mui-focusVisible': {
                          boxShadow: effectTokens['focus-ring-default'],
                        },
                      },
                    }}
                  >
                    {label}
                  </PickerDay>
                )
              })}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default CalendarViewsHeader
