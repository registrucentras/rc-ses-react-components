import { Components } from '@mui/material'

import CaretDownIcon from '@/assets/icons/CaretDownIcon'

import palette from '../palette'

const MuiAccordionSummary: Components['MuiAccordionSummary'] = {
  defaultProps: {
    expandIcon: <CaretDownIcon />,
    sx: {
      backgroundColor: {
        xs: 'white',
        md: palette.grey['50'],
      },
      borderRadius: {
        xs: 0,
        md: '.375rem',
      },
    },
  },
  styleOverrides: {
    root: {
      paddingLeft: '1.5rem',
    },
    content: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '1.5rem',
      margin: '1rem 0 1rem 0',
      padding: '.5rem 0',
    },
  },
}

export default MuiAccordionSummary
