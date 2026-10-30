import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import type { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader'
import { usePickerAdapter, usePickerTranslations } from '@mui/x-date-pickers/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  CaretDoubleLeftBoldIcon,
  CaretDoubleRightBoldIcon,
  CaretLeftBoldIcon,
  CaretRightBoldIcon,
} from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const CustomCalendarHeaderRoot = styled('div')({
  alignItems: 'center',
  borderBottomColor: colorTokens['border-subtle'],
  borderBottomStyle: 'solid',
  borderBottomWidth: borderTokens['stroke-1'],
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: spacingRoleBasedTokens['space-8'],
  padding: `${spacingRoleBasedTokens['space-4']} ${spacingRoleBasedTokens['space-8']}`,
})

const StepperButton = styled(IconButton)({
  height: spacingRoleBasedTokens['space-48'],
  padding: `${spacingRoleBasedTokens['space-0']} ${spacingRoleBasedTokens['space-4']}`,

  path: {
    fill: colorTokens['text-secondary'],
  },

  '&:hover, &:focus, &:active': {
    backgroundColor: 'transparent',
    path: {
      fill: colorTokens['text-default'],
    },
  },
  '&.Mui-focusVisible': { boxShadow: effectTokens['focus-ring-default'] },
})

// PickersCalendarHeaderProps is no longer generic in x-date-pickers 9.
function RcSesDatepickerCalendarHeader(props: PickersCalendarHeaderProps) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesDatepicker' })

  const { currentMonth, onMonthChange } = props

  // v9 no longer exports MuiPickersAdapterContext, and useLocalizationContext is
  // not public either, so the adapter and the translations come from separate
  // hooks. Both are guaranteed by the picker context, so no null guard is needed.
  const utils = usePickerAdapter()
  const localeText = usePickerTranslations()

  const selectNextMonth = () => onMonthChange(utils.addMonths(currentMonth, 1))

  const selectNextYear = () => onMonthChange(utils.addYears(currentMonth, 1))

  const selectPreviousMonth = () => onMonthChange(utils.addMonths(currentMonth, -1))

  const selectPreviousYear = () => onMonthChange(utils.addYears(currentMonth, -1))

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
        sx={{
          flexGrow: 1,
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
          color: colorTokens['text-default'],
          fontWeight: 500,
          textAlign: 'center',
        }}
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
