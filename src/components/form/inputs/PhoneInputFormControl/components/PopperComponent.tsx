import { autocompleteClasses } from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'

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
          fontSize: 13,
          margin: 0,
          width: 'auto',
        },
        [`& .${autocompleteClasses.listbox}`]: {
          backgroundColor: '#fff',
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
