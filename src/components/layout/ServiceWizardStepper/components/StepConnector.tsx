import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'

import { stepperColors } from '../utils'

interface StepConnectorProps {
  status: 'completed' | 'active' | 'pending'
  position?: {
    left?: string
    top: string
    width?: string
    height?: string
  }
  sx?: SxProps<Theme>
}

const StepConnector: React.FC<StepConnectorProps> = ({ status, position, sx }) => {
  const backgroundColor =
    status === 'completed' ? stepperColors.activeLine : stepperColors.pendingLine

  return (
    <Box
      data-testid='connector-line'
      sx={{
        position: 'absolute',
        left: position?.left,
        top: position?.top,
        width: position?.width,
        height: position?.height,
        background: backgroundColor,
        borderRadius: 1,
        ...sx,
      }}
    />
  )
}

export default StepConnector
