import { Button, DialogActions } from '@mui/material'
import type { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar'
import { usePickerActionsContext, usePickerTranslations } from '@mui/x-date-pickers/hooks'

function RcSesDatepickerActionBar(props: PickersActionBarProps) {
  const { actions, ...other } = props

  const translations = usePickerTranslations()
  // x-date-pickers 9 dropped the onAccept/onCancel/onClear/onSetToday props from
  // PickersActionBarProps; the actions now come from the picker's context.
  const { clearValue, cancelValueChanges } = usePickerActionsContext()

  if (actions == null || actions.length === 0) {
    return null
  }

  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case 'clear':
        return (
          <Button key={actionType} color='error' onClick={clearValue} variant='text'>
            {translations.clearButtonLabel}
          </Button>
        )
      case 'cancel':
        return (
          <Button key={actionType} onClick={cancelValueChanges} variant='text'>
            {translations.cancelButtonLabel}
          </Button>
        )

      default:
        return null
    }
  })

  return <DialogActions {...other}>{buttons}</DialogActions>
}

export default RcSesDatepickerActionBar
