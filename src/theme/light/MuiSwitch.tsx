import { Components } from '@mui/material'

import palette, { common } from '../palette'

const MuiSwitch: Components['MuiSwitch'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: '2.25rem',
      height: '1.25rem',
      padding: 0,
    },
    switchBase: {
      padding: 0,
      margin: '0.125rem',
      transition: 'transform 200ms ease-in-out',

      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
      },

      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover + .MuiSwitch-track': {
        backgroundColor: palette.grey['500'], // unchecked hover
      },
      '&.Mui-focusVisible + .MuiSwitch-track': {
        boxShadow: `0 0 0 2px ${common.white}, 0 0 0 4px ${palette.grey['950']}`, // DS focus ring, >=3:1 against surrounding background
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: palette.grey['200'], // unchecked disabled
        opacity: 1,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: common.white,
      },

      '&.Mui-checked': {
        transform: 'translateX(1rem)',
        color: common.white,

        '& + .MuiSwitch-track': {
          backgroundColor: palette.primary['500'], // checked default
          opacity: 1,
          border: 0,
        },
        '&:hover + .MuiSwitch-track': {
          backgroundColor: palette.primary['600'], // checked hover
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: palette.grey['500'], // checked disabled
          opacity: 1,
        },
      },
    },
    thumb: {
      boxSizing: 'border-box',
      width: '1rem',
      height: '1rem',
      borderRadius: '9999px',
      backgroundColor: common.white,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.18)',
    },
    track: {
      borderRadius: '9999px',
      backgroundColor: palette.grey['400'], // unchecked default
      opacity: 1,
      // kept active under prefers-reduced-motion: only the sliding transform is suppressed
      transition: 'background-color 200ms ease-in-out',
    },
  },
}

export default MuiSwitch
