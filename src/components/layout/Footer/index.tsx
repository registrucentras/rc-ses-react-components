import { Box, Container, Typography } from '@mui/material'

import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const footerTextColor = 'var(--rc-color-neutrals-200)'
const footerBackground = 'var(--rc-color-neutrals-950)'

interface Props {
  text: string
}

function RcSesFooter({ text }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: footerBackground,
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
            fontSize: typographyTokens['font-size-body-small'],
            lineHeight: typographyTokens['line-height-body-small'],
            whiteSpace: 'pre-line',
          }}
          variant='body2'
        >
          {text}
        </Typography>
      </Container>
    </Box>
  )
}

export default RcSesFooter
