import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'
import React from 'react'

import RcSesCheckboxMark from '@/components/common/CheckboxMark'
import getLoadingIcon from '@/components/utils/loading'

export type SimpleCheckboxProps = MuiCheckboxProps & {
  loading?: boolean
}

function RcSesSimpleCheckbox({ loading, ...props }: SimpleCheckboxProps) {
  return (
    <MuiCheckbox
      checkedIcon={getLoadingIcon(
        <RcSesCheckboxMark type='checked' disabled={props.disabled} />,
        loading,
      )}
      icon={getLoadingIcon(<RcSesCheckboxMark disabled={props.disabled} />, loading)}
      indeterminateIcon={getLoadingIcon(
        <RcSesCheckboxMark type='indeterminate' disabled={props.disabled} />,
        loading,
      )}
      {...props}
      disableRipple
    />
  )
}

export default RcSesSimpleCheckbox
