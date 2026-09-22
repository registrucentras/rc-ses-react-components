import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}
function ServicePage({ children }: Props) {
  return <Box>{children}</Box>
}

export default ServicePage
