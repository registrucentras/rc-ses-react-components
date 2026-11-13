import { Box } from '@mui/material'
import React from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'

interface Props {
  activeTab: number
  children?: React.ReactNode
  index: number
}
function RcSesTabPanel({ activeTab, children, index, ...rest }: Props) {
  return (
    <Box
      role='tabpanel'
      hidden={activeTab !== index}
      id={`rc-ses-tab-panel-${index}`}
      aria-labelledby={`rc-ses-tab--${index}`}
      sx={{
        backgroundColor: colorTokens['surface-base'],
        borderBottomLeftRadius: borderTokens['radius-6'],
        borderBottomRightRadius: borderTokens['radius-6'],
      }}
      {...rest}
    >
      {activeTab === index && children}
    </Box>
  )
}

export default RcSesTabPanel
