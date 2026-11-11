import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { typographyTokens } from '../typographyTokens'

const MuiPagination: Components['MuiPagination'] = {
  defaultProps: {
    hidePrevButton: true,
    hideNextButton: true,
  },
}

const MuiPaginationItem: Components['MuiPaginationItem'] = {
  styleOverrides: {
    root: {
      borderRadius: borderTokens['radius-button'],
      height: 40,
      width: 40,
      fontSize: typographyTokens['font-size-body-small'],
      fontWeight: 400,
      color: colorTokens['text-default'],

      '&:hover': {
        backgroundColor: 'var(--rc-color-neutrals-200)',
      },

      '&:active': {
        backgroundColor: 'var(--rc-color-neutrals-300)',
      },

      '&.Mui-focusVisible': {
        border: `var(--rc-border-focus) solid var(--rc-color-neutrals-950)`,
        backgroundColor: 'var(--rc-color-neutrals-50)',
      },

      '&.Mui-disabled': {
        backgroundColor: 'var(--rc-color-neutrals-100)',
        color: 'var(--rc-color-neutrals-500)',
      },

      '&.Mui-selected': {
        backgroundColor: 'var(--rc-color-neutrals-800)',
        color: 'var(--rc-color-white)',

        '&:hover': {
          backgroundColor: 'var(--rc-color-neutrals-800)',
        },
      },
      '&.MuiPaginationItem-ellipsis': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        fontSize: typographyTokens['font-size-body-small'],
      },
    },
  },
}

export { MuiPagination, MuiPaginationItem }
