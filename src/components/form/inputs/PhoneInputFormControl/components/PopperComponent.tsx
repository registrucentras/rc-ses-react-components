import { autocompleteClasses } from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'

import { colorTokens } from '@/theme/colorTokens'
import { typographyTokens } from '@/theme/typographyTokens'

interface Props {
  anchorEl?: any
  disablePortal?: boolean
  open: boolean
}
function PopperComponent(props: Props) {
  const { disablePortal, anchorEl, open, ...other } = props
  return (
    <Box
      {...other}
      sx={{
        width: 'auto !important',

        [`& .${autocompleteClasses.paper}`]: {
          boxShadow: 'none',
          color: 'inherit',
          fontSize: typographyTokens['font-size-body-caption'],
          margin: 0,
          width: 'auto',
        },
        [`& .${autocompleteClasses.listbox}`]: {
          backgroundColor: colorTokens['surface-base'],
          padding: 0,
          scrollbarWidth: 'thin',
        },
        [`&.${autocompleteClasses.popperDisablePortal}`]: {
          position: 'relative',
        },
      }}
    />
  )
}

export default PopperComponent
