import { IconButton, InputAdornment, useMediaQuery } from '@mui/material'
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { MuiPickersAdapterContext } from '@mui/x-date-pickers/LocalizationProvider'
import { parseISO } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'
import React, { useEffect, useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'
import theme from '@/theme/light'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import RcSesDatepickerActionBar from './components/RcSesDatepickerActionBar'
import RcSesDatepickerCalendarHeader from './components/RcSesDatepickerCalendarHeader'

type TFieldProps = UseControllerProps<any, any>
type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = TFieldProps &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    clearable?: boolean
    slotProps?: {
      datepicker?: DatePickerProps<Date, boolean>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesDatepicker = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker' })
  const upMd = useMediaQuery(theme.breakpoints.up('md'))

  const { id: idProp, clearable, errors, label, slotProps, ...controllerProps } = props

  const dateAdapterContext = React.useContext(MuiPickersAdapterContext)

  const {
    field: { onChange, value, disabled },
  } = useController(controllerProps)

  const id = useMemo(() => idProp ?? uuidv4(), [idProp])

  const [modelValue, setModelValue] = React.useState<Date | null>(
    value ? parseISO(value) : null,
  )

  const handleOnChange = (newValue: Date | null) => {
    try {
      onChange((newValue && fromZonedTime(newValue, 'UTC').toISOString()) ?? '')
    } catch (_) {
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
          dateAdapterContext?.utils?.format(date, 'weekdayShort').substring(0, 2) ?? ''
        }
        disabled={disabled}
        onChange={handleOnChange}
        openTo='day'
        showDaysOutsideCurrentMonth
        slots={{
          actionBar: RcSesDatepickerActionBar,
          calendarHeader: RcSesDatepickerCalendarHeader,
          openPickerIcon: CalendarBlankIcon,
        }}
        {...(slotProps?.datepicker ?? {})}
        slotProps={{
          actionBar: {
            actions: ['cancel'],
            ...(slotProps?.datepicker?.slotProps?.actionBar ?? {}),
          },
          inputAdornment: {
            position: 'start',
            sx: { mr: '0 !important' },
            ...(slotProps?.datepicker?.slotProps?.inputAdornment ?? {}),
          },
          textField: {
            id,
            error: !!errors,
            fullWidth: true,
            InputProps: {
              ...(!upMd
                ? {
                    startAdornment: (
                      <InputAdornment
                        aria-label={t('aria.openCalendar')}
                        position='start'
                        sx={{ mr: 0 }}
                      >
                        <IconButton>
                          <CalendarBlankIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {}),
              endAdornment: !!value && clearable && (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label={t('aria.clearValue')}
                    onClick={() => handleOnChange(null)}
                  >
                    <XCircleFillIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
            ...(slotProps?.datepicker?.slotProps?.textField ?? {}),
          },
          toolbar: { hidden: true },
        }}
        value={modelValue}
        sx={{
          '.MuiInputBase-input': {
            paddingLeft: 0,
            paddingRight: 0,
          },
          ...(slotProps?.datepicker?.sx ?? {}),
        }}
      />
    </RcSesFormControlWrapper>
  )
})

export default RcSesDatepicker
