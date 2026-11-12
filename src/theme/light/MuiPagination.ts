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
      margin: 0,
      borderRadius: borderTokens['radius-button'],
      height: 40,
      width: 40,
      fontSize: typographyTokens['font-size-body-small'],
      lineHeight: typographyTokens['line-height-body-small'],
      fontWeight: 400,
      color: 'var(--rc-color-neutrals-800)',
      '&:hover': {
        backgroundColor: 'var(--rc-color-neutrals-200)',
        color: colorTokens['text-default'],
      },
      '&:active': {
        backgroundColor: 'var(--rc-color-neutrals-300)',
        color: colorTokens['text-default'],
      },
      '&.Mui-focusVisible': {
        border: `${borderTokens['border-focus']} solid var(--rc-color-neutrals-950)`,
        backgroundColor: 'var(--rc-color-neutrals-50)',
        color: colorTokens['text-default'],
      },
      '&.Mui-disabled': {
        backgroundColor: 'var(--rc-color-neutrals-100)',
        color: colorTokens['text-disabled'],
      },
      '&.Mui-selected': {
        backgroundColor: 'var(--rc-color-neutrals-800)',
        color: colorTokens['text-inverse'],
        '&:hover': {
          backgroundColor: 'var(--rc-color-neutrals-800)',
        },
      },
    },
  },
}

export { MuiPagination, MuiPaginationItem }
