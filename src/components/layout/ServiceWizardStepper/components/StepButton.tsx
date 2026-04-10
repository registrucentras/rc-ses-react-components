import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'

import StepStatusBubble, { StepStatus } from './StepStatusBubble'

interface StepButtonProps {
  status: StepStatus
  position?: {
    left: string
    top: string
  }
  size: number
  isClickable: boolean
  onClick: () => void
  transform?: string
  sx?: SxProps<Theme>
}

const StepButton: React.FC<StepButtonProps> = ({
  status,
  position,
  size,
  isClickable,
  onClick,
  transform,
  sx,
}) => (
  <Box<'button'>
    component='button'
    type='button'
    disabled={!isClickable}
    onClick={onClick}
    sx={{
      all: 'unset',
      position: 'absolute',
      left: position?.left,
      top: position?.top,
      transform,
      width: size,
      height: size,
      cursor: isClickable ? 'pointer' : 'default',
      ...sx,
    }}
  >
    <StepStatusBubble status={status} />
  </Box>
)

export default StepButton
