import { MuiPickersAdapterContext } from '@mui/x-date-pickers'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { fromZonedTime } from 'date-fns-tz'
import { forwardRef, useContext, useState } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import RcSesDatepickerActionBar from './components/RcSesDatepickerActionBar'
import RcSesDatepickerCalendarHeader from './components/RcSesDatepickerCalendarHeader'

type Props = Partial<RcSesFormControlWrapperProps> &
  UseControllerProps<any, any> & {
    slotProps?: {
      datepicker?: DatePickerProps<Date, boolean>
    }
  }

const RcSesDatepicker = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { control, description, errors, label, labelSubtitle, name, rules, slotProps } =
    props

  const dateAdapterContext = useContext(MuiPickersAdapterContext)

  const {
    field: { onChange, value, disabled },
  } = useController({
    control,
    name,
    rules,
  })

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const [modelValue, setModelValue] = useState<Date | null>(value)

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
      labelSubtitle={labelSubtitle}
      description={description}
      errors={errors}
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
        slotProps={{
          actionBar: { actions: ['cancel'] },
          inputAdornment: { position: 'start' },
          textField: { id, error: !!errors },
        }}
        value={modelValue}
        {...(slotProps?.datepicker ?? {})}
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
