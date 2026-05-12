import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'

export type SimpleCheckboxProps = MuiCheckboxProps & {
  loading?: boolean
}

function RcSesSimpleCheckbox({ loading, ...props }: SimpleCheckboxProps) {
  return (
    <MuiCheckbox
      checkedIcon={loading ? undefined : <CheckBoldIcon />}
      icon={loading ? undefined : <CheckUncheckedBoldIcon />}
      {...props}
      disableRipple
    />
  )
}

export default RcSesSimpleCheckbox
