import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'
import React from 'react'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import getLoadingIcon from '@/components/utils/loading'

export type SimpleCheckboxProps = MuiCheckboxProps & {
  loading?: boolean
}

function RcSesSimpleCheckbox({ loading, ...props }: SimpleCheckboxProps) {
  return (
    <MuiCheckbox
      checkedIcon={getLoadingIcon(<CheckBoldIcon />, loading)}
      icon={getLoadingIcon(<CheckUncheckedBoldIcon />, loading)}
      {...props}
      disableRipple
    />
  )
}

export default RcSesSimpleCheckbox
