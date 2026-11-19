import { IconButton, InputAdornment } from '@mui/material'
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { usePickerAdapter } from '@mui/x-date-pickers/hooks'
import { parseISO } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'
import React, { useEffect, useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { CalendarBlankIcon, XCircleFillIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import CalendarViewsHeader, {
  calendarViewsStyles,
} from './components/CalendarViewsHeader'
import RcSesDatepickerActionBar from './components/RcSesDatepickerActionBar'

type TFieldProps = UseControllerProps<any, any>
type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

export type SingleDatepickerProps = TFieldProps &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    clearable?: boolean
    slotProps?: {
      datepicker?: DatePickerProps
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesDatepicker = React.forwardRef<HTMLInputElement, SingleDatepickerProps>(
  (props, ref) => {
    const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker' })

    const { id: idProp, clearable, errors, label, slotProps, ...controllerProps } = props

    // v9 no longer exports MuiPickersAdapterContext from LocalizationProvider;
    // usePickerAdapter is the public replacement for the `utils` adapter.
    const dateAdapter = usePickerAdapter()

    const {
      field: { onChange, value, disabled },
    } = useController(controllerProps)

    const id = useMemo(() => idProp ?? uuidv4(), [idProp])

    const [modelValue, setModelValue] = React.useState<Date | null>(
      value ? parseISO(value) : null,
    )
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
      setOpen(true)
      slotProps?.datepicker?.onOpen?.()
    }
    const handleClose = () => {
      setOpen(false)
      slotProps?.datepicker?.onClose?.()
    }

    const handleOnChange = (newValue: Date | null) => {
      try {
        onChange((newValue && fromZonedTime(newValue, 'UTC').toISOString()) ?? '')
      } catch {
        onChange(null)
      }
    }

    useEffect(() => {
      if (value !== modelValue) setModelValue(value ? parseISO(value) : null)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
      <RcSesFormControlWrapper
        id={id}
        errors={errors}
        label={label}
        required={!!props?.rules?.required}
        {...slotProps?.wrapper}
      >
        <DatePicker
          inputRef={ref}
          closeOnSelect
          dayOfWeekFormatter={(date: Date) =>
            dateAdapter.format(date, 'weekdayShort').substring(0, 2)
          }
          disabled={disabled}
          onChange={handleOnChange}
          format={dateAdapter.formats.keyboardDate}
          views={['day']}
          openTo='day'
          showDaysOutsideCurrentMonth
          slots={{
            actionBar: RcSesDatepickerActionBar,
            calendarHeader: CalendarViewsHeader,
            openPickerIcon: CalendarBlankIcon,
          }}
          {...(slotProps?.datepicker ?? {})}
          open={slotProps?.datepicker?.open ?? open}
          onOpen={handleOpen}
          onClose={handleClose}
          slotProps={{
            mobilePaper: {
              ...slotProps?.datepicker?.slotProps?.mobilePaper,
              sx: [
                {
                  '&&': {
                    minWidth: '340px',
                    maxWidth: 'calc(100vw - 32px)',
                    margin: spacingRoleBasedTokens['space-16'],
                    borderRadius: borderTokens['radius-12'],
                  },
                },
                ...(Array.isArray(slotProps?.datepicker?.slotProps?.mobilePaper?.sx)
                  ? slotProps.datepicker.slotProps.mobilePaper.sx
                  : [slotProps?.datepicker?.slotProps?.mobilePaper?.sx ?? {}]),
              ],
            },
            field: {
              openPickerButtonPosition: 'start',
              ...(slotProps?.datepicker?.slotProps?.field ?? {}),
            },
            layout: {
              ...slotProps?.datepicker?.slotProps?.layout,
              sx: [
                { '.MuiDateCalendar-root': calendarViewsStyles, minWidth: '340px' },
                ...(Array.isArray(slotProps?.datepicker?.slotProps?.layout?.sx)
                  ? slotProps.datepicker.slotProps.layout.sx
                  : [slotProps?.datepicker?.slotProps?.layout?.sx ?? {}]),
              ],
            },
            actionBar: {
              actions: [],
              ...(slotProps?.datepicker?.slotProps?.actionBar ?? {}),
            },
            inputAdornment: {
              position: 'start',
              sx: { mr: spacingRoleBasedTokens['space-0'] },
              ...(slotProps?.datepicker?.slotProps?.inputAdornment ?? {}),
            },
            textField: (ownerState) => {
              const consumerProps = slotProps?.datepicker?.slotProps?.textField
              const textFieldProps =
                typeof consumerProps === 'function'
                  ? consumerProps(ownerState)
                  : consumerProps
              return {
                id,
                error: !!errors,
                fullWidth: true,
                ...textFieldProps,
                onClick: (event) => {
                  textFieldProps?.onClick?.(event)
                  if (
                    !event.defaultPrevented &&
                    !disabled &&
                    !slotProps?.datepicker?.disabled &&
                    !slotProps?.datepicker?.disableOpenPicker &&
                    !(event.target as Element).closest('button')
                  ) {
                    handleOpen()
                  }
                },

                slotProps: {
                  input: {
                    endAdornment: !!value && clearable && (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label={t('aria.clearValue')}
                          onClick={(event) => {
                            event.stopPropagation()
                            handleOnChange(null)
                          }}
                        >
                          <XCircleFillIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                },
              }
            },
            toolbar: { hidden: true },
          }}
          value={modelValue}
          sx={{
            '.MuiInputBase-input': {
              paddingLeft: spacingRoleBasedTokens['space-0'],
              paddingRight: spacingRoleBasedTokens['space-0'],
            },
            ...(slotProps?.datepicker?.sx ?? {}),
          }}
        />
      </RcSesFormControlWrapper>
    )
  },
)

export default RcSesDatepicker
