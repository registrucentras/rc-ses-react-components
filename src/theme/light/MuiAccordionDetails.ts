import { Components } from '@mui/material'

const MuiAccordionDetails: Components['MuiAccordionDetails'] = {
  defaultProps: {
    sx: {
      padding: {
        xs: '1.25rem 1rem 2.5rem',
        md: '2.5rem 2rem 4rem',
      },
    },
  },
  styleOverrides: {
    root: {},
  },
}

export default MuiAccordionDetails
