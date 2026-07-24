import { Components } from '@mui/material'

import palette from '../palette'

const MuiTooltip: Components['MuiTooltip'] = {
  styleOverrides: {
    tooltip: {
      backgroundColor: '#fff',
      color: palette.grey['900'],
      maxWidth: 480,
      padding: '12px 16px',
      fontSize: '0.9rem',
      fontWeight: 400,
      lineHeight: 1.5,
      borderRadius: '8px',
      boxShadow: 'none',
      filter: 'drop-shadow(0 6px 24px rgba(0, 0, 0, 0.16))',

      '@keyframes rcses-tooltip': {
        from: { transform: 'translate3d(0, var(--rcses-tooltip-shift, 6px), 0)' },
        to: { transform: 'none' },
      },

      '@media (prefers-reduced-motion: no-preference)': {
        animation: 'rcses-tooltip 160ms ease-out',
      },

      '[data-popper-placement*="bottom"] &': {
        '--rcses-tooltip-shift': '-6px',
      },
    },

    arrow: {
      color: '#fff',
      fontSize: '1rem',
    },
  },
}

export default MuiTooltip
