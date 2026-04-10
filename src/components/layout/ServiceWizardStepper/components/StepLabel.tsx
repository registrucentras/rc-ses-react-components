import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'

import { StepStatus } from './StepStatusBubble'

interface StepLabelProps {
  label: string
  status: StepStatus
  color: string
  sx?: SxProps<Theme>
}

const StepLabel: React.FC<StepLabelProps> = ({ label, status, color, sx }) => (
  <Box
    sx={{
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: status === 'active' ? 700 : 400,
      color,
      whiteSpace: 'normal',
      overflowWrap: 'break-word',
      ...sx,
    }}
  >
    {label}
  </Box>
)

export default StepLabel
