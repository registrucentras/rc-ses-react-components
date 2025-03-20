import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import theme from '@/theme/light'
import Colors from '@/theme/palette'

type Props = {
  breadcrumbsProps: React.ComponentProps<typeof RcSesBreadcrumbs>
  children?: React.ReactNode
  title: string
}
function ServiceHeader({ breadcrumbsProps, children, title }: Props) {
  return (
    <Box sx={{ backgroundColor: Colors.primary['50'] }}>
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
        <Box sx={{ mb: { xs: '.875rem', md: '.375rem' } }}>
          <RcSesBreadcrumbs {...breadcrumbsProps} />
        </Box>

        <Typography
          variant='h1'
          sx={{
            lineHeight: { xs: '2rem', md: '2.125rem' },
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
                lineHeight: '1.3125rem',

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
