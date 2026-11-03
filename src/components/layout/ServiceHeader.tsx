import { Box, Container, Typography } from '@mui/material'
import React, { type CSSProperties } from 'react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import { colorTokens } from '@/theme/colorTokens'
import theme from '@/theme/light'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
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
        sx={{
          pb: {
            xs: spacingRoleBasedTokens['space-32'],
            md: spacingRoleBasedTokens['space-36'],
          },
          pt: {
            xs: spacingRoleBasedTokens['space-6'],
            md: spacingRoleBasedTokens['space-24'],
          },
          px: spacingRoleBasedTokens['space-16'],
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <RcSesBreadcrumbs
          {...breadcrumbsProps}
          sx={{
            pb: {
              xs: spacingRoleBasedTokens['space-4'],
              md: spacingRoleBasedTokens['space-8'],
            },
            fontSize: typographyTokens['font-size-body-micro'],
            lineHeight: typographyTokens['line-height-body-micro'],
          }}
        />

        <Typography
          variant='h1'
          sx={{
            // The h1 token changes at other breakpoints; retain the existing 32/40px pair.
            lineHeight: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {title}
        </Typography>

        {!!children && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: {
                xs: spacingRoleBasedTokens['space-4'],
                md: spacingRoleBasedTokens['space-8'],
              },
              rowGap: spacingRoleBasedTokens['space-10'],

              '.MuiTypography-body1': {
                fontSize: typographyTokens['font-size-body-large'],
                lineHeight: typographyTokens['line-height-body-large'],

                [theme.breakpoints.down('md')]: {
                  fontSize: typographyTokens['font-size-body-caption'],
                  lineHeight: typographyTokens['line-height-body-caption'],
                },
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
