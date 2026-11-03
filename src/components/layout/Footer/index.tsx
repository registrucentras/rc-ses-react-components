import { Box, Container, Typography } from '@mui/material'

import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const footerTextColor = 'var(--rc-color-neutrals-200)'

interface Props {
  text: string
}

function RcSesFooter({ text }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: colorTokens['surface-inverse'],
        px: {
          xs: spacingRoleBasedTokens['space-16'],
          md: spacingRoleBasedTokens['space-32'],
        },
        py: spacingRoleBasedTokens['space-24'],
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          component='div'
          sx={{
            color: footerTextColor,
            lineHeight: typographyTokens['line-height-body-small'],
            whiteSpace: 'pre-line',
          }}
          variant='caption'
        >
          {text}
        </Typography>
      </Container>
    </Box>
  )
}

export default RcSesFooter
