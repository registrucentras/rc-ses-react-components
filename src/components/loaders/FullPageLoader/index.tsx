import { Box, BoxProps, Modal, Paper } from '@mui/material'

import RcSesLoader, { RcSesLoaderProps } from '@/components/loaders/Loader'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'

export type RcSesLoaderBackdrop = 'dark' | 'light'

// dimensions are based on the Figma design specifications
const FULL_PAGE_LOADER_CONTAINER_WIDTH = 187
const FULL_PAGE_LOADER_CONTAINER_HEIGHT = 198

// Figma backdrops: Surface/inverse at 55% (dark), Surface/base at 70% (light).
const BACKDROP_COLOR = {
  dark: `color-mix(in srgb, ${colorTokens['surface-inverse']} 55%, transparent)`,
  light: `color-mix(in srgb, ${colorTokens['surface-base']} 70%, transparent)`,
}

type FullPageLoaderContentProps = Pick<RcSesLoaderProps, 'label' | 'showLabel'>

export interface RcSesFullPageLoaderProps
  extends Omit<BoxProps, 'children' | 'sx'>, FullPageLoaderContentProps {
  backdrop?: RcSesLoaderBackdrop
}

function RcSesFullPageLoader({
  backdrop = 'light',
  label,
  showLabel,
  ...props
}: RcSesFullPageLoaderProps) {
  return (
    // MUI 9 removed disableEscapeKeyDown in favour of inspecting the `reason`
    // argument in onClose. Dropping it changes nothing here: this Modal is
    // permanently open and takes no onClose, so Escape already had no effect.
    <Modal
      open
      slotProps={{
        backdrop: {
          sx: { backgroundColor: BACKDROP_COLOR[backdrop] },
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
          elevation={0}
          sx={{
            backgroundColor: colorTokens['surface-base'],
            borderRadius: borderTokens['radius-16'],
            boxShadow: effectTokens['elevation-lg'],
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
