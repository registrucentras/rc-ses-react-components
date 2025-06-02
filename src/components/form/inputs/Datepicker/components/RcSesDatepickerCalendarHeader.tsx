import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { MuiPickersAdapterContext } from '@mui/x-date-pickers/LocalizationProvider'
import type { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader'
import React from 'react'
import { useTranslation } from 'react-i18next'

import CaretDoubleLeftBoldIcon from '@/assets/icons/CaretDoubleLeftBoldIcon'
import CaretDoubleRightBoldIcon from '@/assets/icons/CaretDoubleRightBoldIcon'
import CaretLeftBoldIcon from '@/assets/icons/CaretLeftBoldIcon'
import CaretRightBoldIcon from '@/assets/icons/CaretRightBoldIcon'
import palette from '@/theme/palette'

const CustomCalendarHeaderRoot = styled('div')({
  alignItems: 'center',
  borderBottomColor: palette.grey['200'],
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '.5rem',
  padding: '.25rem .5rem',
})

const StepperButton = styled(IconButton)({
  height: '3rem',
  padding: '0 .25rem',

  path: {
    fill: palette.grey['500'],
  },

  '&:hover, &:focus, &:active': {
    backgroundColor: 'transparent',
    path: {
      fill: palette.grey['900'],
    },
  },
})

function RcSesDatepickerCalendarHeader(props: PickersCalendarHeaderProps<Date>) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker' })

  const { currentMonth, onMonthChange } = props

  const dateAdapterContext = React.useContext(MuiPickersAdapterContext)
  const { utils, localeText } = dateAdapterContext ?? {}

  if (!utils) return null

  const selectNextMonth = () => onMonthChange(utils.addMonths(currentMonth, 1), 'left')

  const selectNextYear = () => onMonthChange(utils.addYears(currentMonth, 1), 'left')

  const selectPreviousMonth = () =>
    onMonthChange(utils.addMonths(currentMonth, -1), 'right')

  const selectPreviousYear = () =>
    onMonthChange(utils.addYears(currentMonth, -1), 'right')

  const monthLabel = utils.format(currentMonth, 'month')

  return (
    <CustomCalendarHeaderRoot>
      <Stack direction='row'>
        <StepperButton onClick={selectPreviousYear} title={t('prevYear')}>
          <CaretDoubleLeftBoldIcon />
        </StepperButton>
        <StepperButton onClick={selectPreviousMonth} title={localeText?.previousMonth}>
          <CaretLeftBoldIcon />
        </StepperButton>
      </Stack>

      <Typography
        variant='body2'
        sx={{ flexGrow: 1, fontSize: '.9375rem', fontWeight: 500, textAlign: 'center' }}
      >
        {monthLabel.charAt(0).toLocaleUpperCase() + monthLabel.substring(1)}{' '}
        {utils.format(currentMonth, 'year')}
      </Typography>

      <Stack direction='row'>
        <StepperButton onClick={selectNextMonth} title={localeText?.nextMonth}>
          <CaretRightBoldIcon />
        </StepperButton>
        <StepperButton onClick={selectNextYear} title={t('nextYear')}>
          <CaretDoubleRightBoldIcon />
        </StepperButton>
      </Stack>
    </CustomCalendarHeaderRoot>
  )
}

export default RcSesDatepickerCalendarHeader
