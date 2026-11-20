import { Box, Container, Typography } from '@mui/material'
import React, { type CSSProperties } from 'react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

interface Props {
  breadcrumbsProps: React.ComponentProps<typeof RcSesBreadcrumbs>
  children?: React.ReactNode
  title: string
  backgroundColor?: CSSProperties['backgroundColor']
}
function ServiceHeader({
  breadcrumbsProps,
  children,
  title,
  backgroundColor = colorTokens['surface-base'],
}: Props) {
  return (
    <Box sx={{ backgroundColor }}>
      <Container
        disableGutters
        sx={{
          pb: spacingTokens['spacing-aliases-header-padding-bottom'],
          pt: spacingTokens['spacing-aliases-header-padding-top'],
          px: spacingTokens['spacing-aliases-header-padding-x'],
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <RcSesBreadcrumbs
          {...breadcrumbsProps}
          sx={{
            pb: spacingRoleBasedTokens['space-6'],
          }}
        />

        <Typography
          variant='h1'
          sx={{
            '&&': {
              fontSize: typographyTokens['font-size-heading-h1'],
              lineHeight: typographyTokens['line-height-heading-h1'],
            },
          }}
        >
          {title}
        </Typography>

        {!!children && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: spacingRoleBasedTokens['space-8'],
              rowGap: spacingRoleBasedTokens['space-10'],

              '.MuiTypography-body1': {
                fontSize: typographyTokens['font-size-body-large'],
                lineHeight: typographyTokens['line-height-body-large'],
              },
            }}
          >
            {children}
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default ServiceHeader
