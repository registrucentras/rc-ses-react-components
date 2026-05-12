import { FormControlLabel, FormControlLabelProps, Skeleton } from '@mui/material'
import React from 'react'

interface FormControlLabelWithLoadingProps extends Omit<FormControlLabelProps, 'label'> {
  loading?: boolean
  label: React.ReactNode
  skeletonWidth?: number
  skeletonHeight?: number
}

function FormControlLabelWithLoading({
  loading = false,
  label,
  skeletonWidth = 100,
  skeletonHeight = 20,
  ...props
}: FormControlLabelWithLoadingProps) {
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

export default FormControlLabelWithLoading
