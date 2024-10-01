import { Components } from '@mui/material'

import palette from '../palette'

const MuiAccordion: Components['MuiAccordion'] = {
  defaultProps: {
    elevation: 0,
    disableGutters: true,
    sx: {
      borderWidth: {
        xs: 0,
        md: '1px',
      },
      borderRadius: {
        xs: 0,
        md: '.375rem',
      },
      margin: {
        xs: '.5rem 0',
        md: '1rem 0',
      },
    },
  },
  styleOverrides: {
    root: {
      borderColor: palette.grey['400'],
      borderStyle: 'solid',
      padding: 0,

      ':before': {
        content: 'unset',
      },

      '&.Mui-expanded': {
        '.MuiAccordionSummary-content': {
          margin: '1rem 0',
        },

        '.MuiAccordionSummary-root': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
}

export default MuiAccordion
