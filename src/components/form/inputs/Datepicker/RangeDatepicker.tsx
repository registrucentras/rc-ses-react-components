import {
  Box,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  useMediaQuery,
} from '@mui/material'
import type { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickerDay, PickerDayProps } from '@mui/x-date-pickers/PickerDay'
import { usePickerAdapter } from '@mui/x-date-pickers/hooks'
import { format, parseISO } from 'date-fns'
import React, { createContext, useContext, useId, useMemo, useRef, useState } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  CalendarBlankIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  XCircleFillIcon,
} from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import FormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import { DateRangeValue, readRange, selectRange } from './rangeModel'

export type RangeDatepickerProps = UseControllerProps<any, any> &
  Pick<RcSesFormControlWrapperProps, 'label' | 'errors'> & {
    id?: string
    clearable?: boolean
    placeholder?: string
    slotProps?: {
      wrapper?: Partial<Omit<RcSesFormControlWrapperProps, 'label' | 'errors'>>
      calendar?: Omit<
        DateCalendarProps,
        | 'value'
        | 'defaultValue'
        | 'onChange'
        | 'slots'
        | 'slotProps'
        | 'disabled'
        | 'readOnly'
      >
    }
  }

const RangeContext = createContext<{
  range: DateRangeValue
  preview: string | null
  setPreview: (day: string) => void
}>({ range: [null, null], preview: null, setPreview: () => {} })

function PreviousIcon() {
  return <CaretLeftIcon size={24} />
}
function NextIcon() {
  return <CaretRightIcon size={24} />
}
function SwitchViewIcon() {
  return <CaretDownIcon size={24} />
}

function RangeDay(props: PickerDayProps) {
  const {
    range: [start, end],
    preview,
    setPreview,
  } = useContext(RangeContext)
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker.range' })
  const { day: date, disabled, onMouseEnter, onFocus, ...dayProps } = props
  const day = format(date, 'yyyy-MM-dd')
  const endpoint = day === start || day === end
  const low = start && preview && !end ? [start, preview].sort()[0] : start
  const high = start && preview && !end ? [start, preview].sort()[1] : end
  const inside = !!low && !!high && day >= low && day <= high
  let status = ''
  if (endpoint) status = day === start ? t('start') : t('end')
  else if (inside) status = end ? t('inRange') : t('preview')

  let rangeState: string | undefined
  if (endpoint) rangeState = day === start ? 'start' : 'end'
  else if (inside) rangeState = end ? 'in-range' : 'preview'

  return (
    <PickerDay
      {...dayProps}
      day={date}
      disabled={disabled}
      selected={endpoint}
      aria-selected={endpoint}
      aria-label={`${day}${status ? `, ${status}` : ''}`}
      data-range-state={rangeState}
      onMouseEnter={(event, hoveredDate) => {
        onMouseEnter?.(event, hoveredDate)
        if (!disabled) setPreview(day)
      }}
      onFocus={(event, focusedDate) => {
        onFocus?.(event, focusedDate)
        if (!disabled) setPreview(day)
      }}
      sx={{
        '&&': {
          width: '44px',
          height: '44px',
          margin: 0,
          borderRadius: inside && !endpoint ? 0 : borderTokens['radius-8'],
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
          color: colorTokens['text-default'],
          backgroundColor: inside ? colorTokens['surface-brand-subtle'] : 'transparent',
          '&.MuiPickerDay-dayOutsideMonth': { color: colorTokens['text-muted'] },
          '&.MuiPickerDay-today': {
            outline: `${borderTokens['stroke-1']} solid var(--rc-color-cyans-500)`,
            outlineOffset: `calc(-1 * ${borderTokens['stroke-1']})`,
          },
          '&:hover': { backgroundColor: colorTokens['surface-muted'] },
          '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
            backgroundColor: colorTokens['control-selected'],
            color: colorTokens['text-inverse'],
          },
          '&.Mui-disabled': { color: colorTokens['text-disabled'] },
          '&.Mui-focusVisible': {
            boxShadow: effectTokens['focus-ring-default'],
            zIndex: 1,
          },
          '&.Mui-selected.Mui-focusVisible': {
            boxShadow: `0 0 0 2px ${colorTokens['surface-base']}, 0 0 0 4px ${colorTokens['border-focus']}`,
          },
        },
      }}
    />
  )
}

const RangeDatepicker = React.forwardRef<HTMLInputElement, RangeDatepickerProps>(
  (props, ref) => {
    const {
      id: idProp,
      clearable,
      placeholder,
      label,
      errors,
      slotProps,
      ...controller
    } = props
    const { field } = useController(controller)
    const generatedId = useId()
    const id = idProp ?? generatedId
    const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker' })
    const adapter = usePickerAdapter()
    const anchor = useRef<HTMLDivElement>(null)
    const input = useRef<HTMLInputElement | null>(null)
    const [open, setOpen] = useState(false)
    const [preview, setPreview] = useState<string | null>(null)
    const range = useMemo(() => readRange(field.value), [field.value])
    const [start, end] = range
    const calendarValue = useMemo(
      () => (start ? parseISO(end ?? start) : null),
      [start, end],
    )
    const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
    const display = start ? `${start}${end ? ` - ${end}` : ''}` : ''
    let announcement = t('range.chooseStart')
    if (start) announcement = t('range.chooseEnd', { start })
    if (start && end) announcement = t('range.selected', { start, end })
    const rangeContext = useMemo(() => ({ range, preview, setPreview }), [range, preview])
    const close = () => {
      setOpen(false)
      setPreview(null)
      field.onBlur()
      input.current?.focus()
    }
    const chooseDay = (date: Date | null) => {
      if (!date) return
      const next = selectRange(range, date)
      field.onChange(next)
      setPreview(null)
      if (next[1]) close()
    }

    return (
      <FormControlWrapper
        id={id}
        label={label}
        errors={errors}
        required={!!controller.rules?.required}
        {...slotProps?.wrapper}
      >
        <TextField
          ref={anchor}
          inputRef={(element) => {
            input.current = element
            field.ref(element)
            if (typeof ref === 'function') ref(element)
            else if (ref) ref.current = element
          }}
          id={id}
          name={field.name}
          value={display}
          fullWidth
          disabled={field.disabled}
          error={!!errors}
          placeholder={placeholder ?? 'YYYY-MM-DD - YYYY-MM-DD'}
          onBlur={field.onBlur}
          onClick={() => {
            if (!field.disabled) setOpen(true)
          }}
          onKeyDown={(event) => {
            if (
              event.target === input.current &&
              ['Enter', ' ', 'ArrowDown'].includes(event.key) &&
              !field.disabled
            ) {
              event.preventDefault()
              setOpen(true)
            }
          }}
          slotProps={{
            htmlInput: {
              role: 'combobox',
              readOnly: true,
              'aria-haspopup': 'dialog',
              'aria-expanded': open,
              'aria-controls': open ? `${id}-calendar` : undefined,
              'aria-describedby': `${id}-status${errors ? ` ${id}-errors` : ''}`,
            },
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <IconButton
                    aria-label={t('aria.openCalendar')}
                    aria-haspopup='dialog'
                    aria-expanded={open}
                    aria-controls={open ? `${id}-calendar` : undefined}
                    disabled={field.disabled}
                    onClick={() => setOpen(true)}
                  >
                    <CalendarBlankIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment:
                clearable && start ? (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label={t('aria.clearValue')}
                      disabled={field.disabled}
                      onClick={(event) => {
                        event.stopPropagation()
                        field.onChange([null, null])
                        setPreview(null)
                        input.current?.focus()
                      }}
                    >
                      <XCircleFillIcon />
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
            },
          }}
        />
        <Box
          id={`${id}-status`}
          role='status'
          aria-live='polite'
          aria-atomic='true'
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            clipPath: 'inset(50%)',
          }}
        >
          {announcement}
        </Box>
        <Popover
          transitionDuration={reducedMotion ? 0 : undefined}
          open={open && !field.disabled}
          anchorEl={() => anchor.current}
          onClose={close}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          slotProps={{
            paper: {
              id: `${id}-calendar`,
              role: 'dialog',
              'aria-modal': true,
              'aria-label': t('range.calendar'),
              sx: {
                width: '340px',
                maxWidth: 'calc(100vw - 32px)',
                borderRadius: borderTokens['radius-12'],
                border: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
                backgroundColor: colorTokens['surface-base'],
                boxShadow: effectTokens['elevation-md'],
              },
            },
          }}
        >
          <Box
            role='status'
            aria-live='polite'
            aria-atomic='true'
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              clipPath: 'inset(50%)',
            }}
          >
            {announcement}
          </Box>
          <RangeContext.Provider value={rangeContext}>
            <DateCalendar
              // Months and Years views are not styled to the Calendar-popover design yet.
              views={['day']}
              {...slotProps?.calendar}
              autoFocus
              dayOfWeekFormatter={(date) =>
                adapter.format(date, 'weekdayShort').substring(0, 2)
              }
              reduceAnimations
              showDaysOutsideCurrentMonth
              value={calendarValue}
              onChange={chooseDay}
              slots={{
                day: RangeDay,
                leftArrowIcon: PreviousIcon,
                rightArrowIcon: NextIcon,
                switchViewIcon: SwitchViewIcon,
              }}
              sx={{
                width: '100%',
                overflow: 'visible',
                maxHeight: 'none',
                height: 'auto',
                padding: `calc(${spacingRoleBasedTokens['space-16']} - ${borderTokens['stroke-1']})`,
                '.MuiDayCalendar-weekContainer': { margin: 0 },
                '.MuiDayCalendar-weekDayLabel': {
                  width: '44px',
                  height: '24px',
                  margin: 0,
                  fontSize: typographyTokens['font-size-body-caption'],
                  lineHeight: typographyTokens['line-height-body-caption'],
                  color: colorTokens['text-secondary'],
                },
                '.MuiDayCalendar-header': {
                  marginBottom: spacingRoleBasedTokens['space-12'],
                },
                '.MuiDayCalendar-monthContainer': { overflow: 'visible' },
                '.MuiDateCalendar-viewTransitionContainer': { overflow: 'visible' },
                '.MuiDayCalendar-slideTransition': { minHeight: 0, overflow: 'visible' },
                '.MuiPickersCalendarHeader-root': {
                  padding: 0,
                  margin: 0,
                  minHeight: '44px',
                  justifyContent: 'space-between',
                  marginBottom: spacingRoleBasedTokens['space-12'],
                },
                '.MuiPickersCalendarHeader-labelContainer': {
                  color: colorTokens['action-link-text'],
                  margin: '0 auto',
                  order: 0,
                },
                '.MuiPickersCalendarHeader-label': {
                  margin: 0,
                  fontSize: typographyTokens['font-size-body-regular'],
                  lineHeight: typographyTokens['line-height-body-regular'],
                },
                '.MuiPickersArrowSwitcher-root': { display: 'contents' },
                '.MuiPickersArrowSwitcher-spacer': { display: 'none' },
                '.MuiPickersArrowSwitcher-button:first-of-type': { order: -1 },
                '.MuiPickersArrowSwitcher-button:last-of-type': { order: 1 },
                '.MuiPickersArrowSwitcher-button, .MuiPickersCalendarHeader-switchViewButton':
                  {
                    color: colorTokens['action-link-text'],
                    width: '44px',
                    minWidth: '44px',
                    height: '44px',
                    flexShrink: 0,
                    margin: 0,
                  },
              }}
            />
          </RangeContext.Provider>
        </Popover>
      </FormControlWrapper>
    )
  },
)

export default RangeDatepicker
