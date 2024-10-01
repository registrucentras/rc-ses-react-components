import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar'
import { usePickersTranslations } from '@mui/x-date-pickers/hooks'

function RcSesDatepickerActionBar(props: PickersActionBarProps) {
  const { actions, onCancel, ...other } = props

  const translations = usePickersTranslations()

  if (actions == null || actions.length === 0) {
    return null
  }

  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case 'cancel':
        return (
          <Button key={actionType} variant='link' onClick={onCancel}>
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
