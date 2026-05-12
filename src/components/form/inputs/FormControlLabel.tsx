import { FormControlLabel, FormControlLabelProps, Skeleton } from '@mui/material'
import React, { ReactNode } from 'react'

export type RcSesFormControlLabelProps = Omit<FormControlLabelProps, 'label'> & {
  loading?: boolean
  label: ReactNode
  skeletonWidth?: number
  skeletonHeight?: number
}

function RcSesFormControlLabel({
  loading = false,
  label,
  skeletonWidth = 100,
  skeletonHeight = 20,
  ...props
}: RcSesFormControlLabelProps) {
  return (
    <FormControlLabel
      {...props}
      label={
        loading ? (
          <Skeleton
            width={skeletonWidth}
            height={skeletonHeight}
            sx={{ display: 'inline-block' }}
          />
        ) : (
          label
        )
      }
    />
  )
}

export default RcSesFormControlLabel
