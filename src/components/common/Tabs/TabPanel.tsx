import { Box } from '@mui/material'
import React from 'react'

type Props = {
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
        backgroundColor: 'white',
        borderBottomLeftRadius: '.375rem',
        borderBottomRightRadius: '.375rem',
      }}
      {...rest}
    >
      {activeTab === index && children}
    </Box>
  )
}

export default RcSesTabPanel
