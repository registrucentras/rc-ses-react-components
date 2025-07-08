import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiFormControlLabel: Components['MuiFormControlLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      position: 'relative',

      '&:hover': {
        '.MuiRadio-root': {
          backgroundColor: `rgba(${decomposeColor(palette.primary[400]).values}, .2)`,

          '[data-name="outer"]': {
            stroke: palette.primary[500],
          },
        },
      },

      '&:active': {
        '.MuiRadio-root': {
          '[data-name="inner"]': {
            fill: palette.primary[100],
          },
        },
      },

      '.MuiFormControlLabel-asterisk': {
        color: palette.error[600],
        fontWeight: 600,
        marginLeft: '.125rem',
      },

      '.PrivateSwitchBase-input': {
        '&:focus, &:focus-visible': {
          '& + svg': {
            outline: `.125rem solid ${palette.grey[950]}`,
            outlineOffset: '.125rem',
            outlineStyle: 'auto',
          },
        },
      },
    },
  },
}

export default MuiFormControlLabel
