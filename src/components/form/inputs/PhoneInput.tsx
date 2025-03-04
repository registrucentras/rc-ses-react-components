import React, { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import RcSesFormControlWrapper from '../components/FormControlWrapper'
import RcSesPhoneInputFormControl, {
  RcSesPhoneInputFormControlProps,
} from './PhoneInputFormControl'

function RcSesPhoneInput(props: RcSesPhoneInputFormControlProps) {
  const { errors, label, slotProps } = props

  // eslint-disable-next-line react/destructuring-assignment
  const id = useMemo(() => props.id ?? uuidv4(), [props.id])

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!props?.rules?.required}
      {...slotProps?.wrapper}
    >
      <RcSesPhoneInputFormControl {...props} />
    </RcSesFormControlWrapper>
  )
}

export default RcSesPhoneInput
