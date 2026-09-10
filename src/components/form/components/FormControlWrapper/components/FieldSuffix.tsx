import { Box, SxProps, Theme } from '@mui/material'

interface Props {
  children: React.ReactNode
  sx?: SxProps<Theme>
}

function FieldSuffix({ children, sx = undefined }: Props) {
  if (!children) return null

  return <Box sx={sx}>{children}</Box>
}

export default FieldSuffix
