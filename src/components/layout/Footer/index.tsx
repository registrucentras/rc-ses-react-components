import { Box, Container, Typography } from '@mui/material'

import palette from '@/theme/palette'

type Props = {
  text: string
}

function RcSesFooter({ text }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: palette.grey['900'],
        px: { xs: 2, md: 4 },
        py: 3,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          color={palette.grey['200']}
          component='div'
          sx={{ lineHeight: '1.25rem', whiteSpace: 'pre-line' }}
          variant='caption'
        >
          {text}
        </Typography>
      </Container>
    </Box>
  )
}

export default RcSesFooter
