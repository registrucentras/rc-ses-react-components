import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import RcSesBreadcrumbs from '@/components/common/Breadcrumbs'
import theme from '@/theme/light'
import Colors from '@/theme/palette'

const StyledDescriptionBox = styled(Box)`
  .MuiTypography-body1 {
    line-height: 1.3125rem;

    ${theme.breakpoints.down('md')} {
      font-size: 0.8125rem;
      line-height: 1.125rem;
    }
  }
`

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
          <StyledDescriptionBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: { xs: '.25rem', md: '.5rem' },
              rowGap: '10px',
            }}
          >
            {children}
          </StyledDescriptionBox>
        )}
      </Container>
    </Box>
  )
}

export default ServiceHeader
