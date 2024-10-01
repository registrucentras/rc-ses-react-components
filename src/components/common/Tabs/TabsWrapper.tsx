import { Box, Typography } from '@mui/material'
import React from 'react'

import palette from '@/theme/palette'

type Props = {
  children?: React.ReactNode
  heading?: React.ReactNode
}
function RcSesTabsWrapper({ children, heading }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: palette.grey['50'],
        borderColor: palette.grey['400'],
        borderRadius: '.375rem',
        borderStyle: 'solid',
        borderWidth: 1,
        pt: 2,
        width: '100%',
      }}
    >
      {!!heading && (
        <Typography variant='h4' sx={{ px: 3, pb: 2 }}>
          {heading}
        </Typography>
      )}
      {children}
    </Box>
  )
}

export default RcSesTabsWrapper
