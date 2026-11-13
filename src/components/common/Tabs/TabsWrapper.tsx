import { Box, Typography } from '@mui/material'
import React from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

interface Props {
  children?: React.ReactNode
  heading?: React.ReactNode
}
function RcSesTabsWrapper({ children, heading }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: colorTokens['surface-sunken'],
        borderColor: colorTokens['border-default'],
        borderRadius: borderTokens['radius-6'],
        borderStyle: 'solid',
        borderWidth: borderTokens['stroke-1'],
        pt: spacingRoleBasedTokens['space-16'],
        width: '100%',
      }}
    >
      {!!heading && (
        <Typography
          variant='h4'
          sx={{
            px: spacingRoleBasedTokens['space-24'],
            pb: spacingRoleBasedTokens['space-16'],
          }}
        >
          {heading}
        </Typography>
      )}
      {children}
    </Box>
  )
}

export default RcSesTabsWrapper
