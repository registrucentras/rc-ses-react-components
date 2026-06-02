import { Box, BoxProps, Modal, Paper } from '@mui/material'
import { alpha } from '@mui/material/styles'

import RcSesLoader, { RcSesLoaderProps } from '@/components/loaders/Loader'

export type RcSesLoaderBackdrop = 'dark' | 'light'

// dimensions are based on the Figma design specifications
const FULL_PAGE_LOADER_CONTAINER_WIDTH = 187
const FULL_PAGE_LOADER_CONTAINER_HEIGHT = 198

type FullPageLoaderContentProps = Pick<RcSesLoaderProps, 'label' | 'showLabel'>

export interface RcSesFullPageLoaderProps
  extends Omit<BoxProps, 'children' | 'sx'>,
    FullPageLoaderContentProps {
  backdrop?: RcSesLoaderBackdrop
}

function RcSesFullPageLoader({
  backdrop = 'light',
  label,
  showLabel,
  ...props
}: RcSesFullPageLoaderProps) {
  return (
    <Modal
      disableEscapeKeyDown
      open
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: (theme) =>
              backdrop === 'dark'
                ? alpha(theme.palette.grey[900], 0.45)
                : alpha(theme.palette.common.white, 0.72),
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          inset: 0,
          placeItems: 'center',
          position: 'fixed',
        }}
        {...props}
      >
        <Paper
          elevation={4}
          sx={{
            borderRadius: 2,
            boxSizing: 'border-box',
            display: 'grid',
            height: FULL_PAGE_LOADER_CONTAINER_HEIGHT,
            placeItems: 'center',
            width: FULL_PAGE_LOADER_CONTAINER_WIDTH,
          }}
        >
          <RcSesLoader label={label} showLabel={showLabel} size='large' />
        </Paper>
      </Box>
    </Modal>
  )
}

export default RcSesFullPageLoader
