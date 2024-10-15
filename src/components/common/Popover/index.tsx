import { Box, Popover } from '@mui/material'
import type { PopoverProps } from '@mui/material'

type Props = Exclude<PopoverProps, 'content'> & {
  header?: React.ReactNode
}
function RcSesPopover(props: Props) {
  const { header, children, ...popoverProps } = props

  return (
    <Popover {...popoverProps}>
      {!!header && (
        <Box sx={{ fontWeight: 600, lineHeight: '1.12rem', mb: 1 }}>{header}</Box>
      )}
      {children}
    </Popover>
  )
}

export default RcSesPopover
