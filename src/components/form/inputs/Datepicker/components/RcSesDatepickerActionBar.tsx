import { Button, DialogActions } from '@mui/material'
import { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar'
import { usePickersTranslations } from '@mui/x-date-pickers/hooks'

function RcSesDatepickerActionBar(props: PickersActionBarProps) {
  const { actions, onAccept, onCancel, onClear, onSetToday, ...other } = props

  const translations = usePickersTranslations()

  if (actions == null || actions.length === 0) {
    return null
  }

  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case 'clear':
        return (
          <Button key={actionType} color='error' onClick={onClear} variant='text'>
            {translations.clearButtonLabel}
          </Button>
        )
      case 'cancel':
        return (
          <Button key={actionType} onClick={onCancel} variant='text'>
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
