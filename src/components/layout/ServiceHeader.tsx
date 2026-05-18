import { Box, Container, Typography } from '@mui/material'
import React, { type CSSProperties } from 'react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import theme from '@/theme/light'
import { common } from '@/theme/palette'

type Props = {
  breadcrumbsProps: React.ComponentProps<typeof RcSesBreadcrumbs>
  children?: React.ReactNode
  title: string
  backgroundColor?: CSSProperties['backgroundColor']
}
function ServiceHeader({
  breadcrumbsProps,
  children,
  title,
  backgroundColor = common.white,
}: Props) {
  return (
    <Box sx={{ backgroundColor }}>
      <Container
        sx={{
          pb: { xs: '2rem', md: '2.25rem' },
          pt: { xs: '.375rem', md: '1.5rem' },
          px: '1rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <RcSesBreadcrumbs
          {...breadcrumbsProps}
          sx={{
            pb: { xs: '.25rem', md: '.5rem' },
            fontSize: '0.75rem',
            lineHeight: '1.25rem',
          }}
        />

        <Typography
          variant='h1'
          sx={{
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
              mt: { xs: '.25rem', md: '.5rem' },
              rowGap: '10px',

              '.MuiTypography-body1': {
                fontSize: '1rem',
                lineHeight: '1.5rem',

                [theme.breakpoints.down('md')]: {
                  fontSize: '.8125rem',
                  lineHeight: '1.125rem',
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
