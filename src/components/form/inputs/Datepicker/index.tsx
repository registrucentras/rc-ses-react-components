import { IconButton, InputAdornment } from '@mui/material'
import { MuiPickersAdapterContext } from '@mui/x-date-pickers'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { fromZonedTime } from 'date-fns-tz'
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'

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
  const { id: idProp, clearable, errors, label, slotProps, ...controllerProps } = props

  const dateAdapterContext = React.useContext(MuiPickersAdapterContext)

  const {
    field: { onChange, value, disabled },
  } = useController(controllerProps)

  // eslint-disable-next-line react/destructuring-assignment
  const id = idProp ?? crypto.randomUUID()

  const [modelValue, setModelValue] = React.useState<Date | null>(value)

  const handleOnChange = (newValue: Date | null) => {
    setModelValue(newValue)

    try {
      onChange((newValue && fromZonedTime(newValue, 'UTC').toISOString()) ?? '')
    } catch (_) {
      onChange(newValue)
    }
  }

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <DatePicker
        inputRef={ref}
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
            ...(slotProps?.datepicker?.slotProps?.inputAdornment ?? {}),
          },
          textField: {
            id,
            error: !!errors,
            InputProps: {
              endAdornment: !!value && clearable && (
                <InputAdornment position='end' sx={{ mr: -1 }}>
                  <IconButton onClick={() => handleOnChange(null)}>
                    <XCircleFillIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
            ...(slotProps?.datepicker?.slotProps?.textField ?? {}),
          },
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
