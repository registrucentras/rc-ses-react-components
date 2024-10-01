import { Components } from '@mui/material'

import palette from '../palette'

const MuiStepper: Components['MuiStepper'] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
    vertical: {
      '.MuiStepLabel-root': {
        alignItems: 'center',
        minHeight: '2rem',
        paddingBottom: 0,
        paddingTop: 0,
      },

      '.MuiStepLabel-iconContainer': {
        paddingRight: '.625rem',
      },

      '.MuiStepLabel-labelContainer': {
        color: palette.grey['700'],
        fontSize: '.875rem',
        fontWeight: 400,
        lineHeight: '1.125rem',

        '.Mui-active': {
          color: palette.grey['900'],
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: '1.25rem',
        },
      },

      '.MuiStepConnector-root': {
        height: '2rem',
        marginBottom: '-1rem',
        marginLeft: '11.5px',
        marginTop: '-1rem',
        zIndex: '-1',

        '.MuiStepConnector-line': {
          borderColor: palette.grey['100'],
          borderLeftWidth: '2px',
          minHeight: '2rem',
        },
      },
    },
  },
}

export default MuiStepper
