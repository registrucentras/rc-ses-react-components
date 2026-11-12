import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { spacingTokens } from '../spacingTokens'
import { typographyTokens } from '../typographyTokens'

// Figma defines these effects locally, without matching foundation effect roles.
const modalShadow =
  '0 8px 24px color-mix(in srgb, var(--rc-color-neutrals-950) 12%, transparent)'
const modalBackdrop = 'color-mix(in srgb, var(--rc-color-neutrals-950) 50%, transparent)'

const MuiDialog: Components['MuiDialog'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiDialogTitle-root': {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: '2rem',
        padding: '2rem 2.25rem 1rem',
      },
      '.MuiDialogContent-root': { padding: '.5rem 2.25rem 2.25rem' },
      '.MuiDialogActions-root': { padding: '.5rem 2.25rem 2rem' },
      // Drawer and BottomSheet also use MuiDialog; migrate only this wrapper.
      '&:where(.RcSesDialog-root)': {
        '.MuiBackdrop-root': { backgroundColor: modalBackdrop },
        '.MuiDialogTitle-root': {
          color: colorTokens['text-default'],
          fontSize: typographyTokens['font-size-heading-h2'],
          fontWeight: 500,
          lineHeight: typographyTokens['line-height-heading-h2'],
          letterSpacing: '-0.01em',
          padding: `0 0 ${spacingRoleBasedTokens['space-12']}`,
        },

        '.MuiDialogContent-root': {
          color: colorTokens['text-default'],
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
          padding: 0,
        },

        '.MuiDialogActions-root': {
          padding: `${spacingTokens['spacing-aliases-card-section-gap']} 0 0`,
          gap: spacingRoleBasedTokens['space-12'],
          '& > :not(style) ~ :not(style)': { marginLeft: 0 },
        },
        '.MuiDialog-paper': {
          backgroundColor: colorTokens['surface-base'],
          backgroundImage: 'none',
          color: colorTokens['text-default'],
          border: `${borderTokens['border-default']} solid ${colorTokens['border-default']}`,
          borderRadius: borderTokens['radius-modal'],
          boxShadow: modalShadow,
          padding: spacingRoleBasedTokens['space-32'],
        },
      },
    },
  },
}

export default MuiDialog
