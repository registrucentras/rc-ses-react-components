import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorPrimitives, colorTokens } from '../colorTokens'
import { effectTokens } from '../effectTokens'
import { sizeTokens } from '../sizeTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { spacingTokens } from '../spacingTokens'
import { typographyTokens } from '../typographyTokens'

// Internal to the theme and wrapper; these do not add foundation tokens or props.
export const buttonDimensions = {
  small: `calc(${typographyTokens['line-height-button-compact']} + ${spacingTokens['spacing-aliases-button-padding-y-small']} * 2)`,
  medium: `calc(${typographyTokens['line-height-button-regular']} + ${spacingTokens['spacing-aliases-button-padding-y-regular']} * 2)`,
  large: spacingRoleBasedTokens['space-48'],
  iconPaddingSmall: spacingTokens['spacing-aliases-button-padding-icon-only-small'],
  iconPaddingRegular: spacingTokens['spacing-aliases-button-padding-icon-only-regular'],
}

// Extra legacy colors have no DS action roles. Their existing primitives are retained.
const MuiButton: Components['MuiButton'] = {
  variants: [
    {
      props: {
        variant: 'text',
      },
      style: {
        color: colorPrimitives.cyans[600],
      },
    },
    {
      props: {
        variant: 'link',
      },
      style: {
        color: colorTokens['action-link-text'],
        fontSize: typographyTokens['font-size-button-regular'],
        lineHeight: typographyTokens['line-height-button-regular'],
        fontWeight: 500,
        minWidth: 0,
        height: buttonDimensions.medium,
        padding: `${spacingTokens['spacing-aliases-button-padding-y-regular']} ${spacingTokens['spacing-aliases-button-padding-x-link']}`,

        '&.Mui-disabled': {
          opacity: 1,

          '&.MuiButton-colorPrimary': {
            color: colorTokens['text-disabled'],
          },
        },

        '&:not(.Mui-disabled)': {
          'svg path': {
            fill: 'currentColor',
          },

          '&:hover': {
            backgroundColor: 'transparent',
            color: colorTokens['action-link-text-hover'],

            'svg path': {
              fill: 'currentColor',
            },
          },

          '&:active': {
            backgroundColor: 'transparent',
            color: colorTokens['action-link-text-hover'],

            'svg path': {
              fill: 'currentColor',
            },
          },

          '&:focus-visible:not(:active)': {
            boxShadow: effectTokens['focus-ring-default'],
          },
        },

        '&.MuiButton-sizeSmall': {
          fontWeight: 500,
          height: buttonDimensions.small,
          fontSize: typographyTokens['font-size-button-compact'],
          lineHeight: typographyTokens['line-height-button-compact'],
          padding: `${spacingTokens['spacing-aliases-button-padding-y-small']} ${spacingTokens['spacing-aliases-button-padding-x-link']}`,
          '.MuiButton-startIcon': {
            marginRight: spacingTokens['spacing-aliases-button-icon-text-gap-small'],
          },
          '.MuiButton-endIcon': {
            marginLeft: spacingTokens['spacing-aliases-button-icon-text-gap-small'],
          },
        },

        '&.MuiButton-sizeLarge': {
          fontSize: typographyTokens['font-size-button-regular'],
          padding: `${spacingTokens['spacing-aliases-button-padding-y-regular']} 0`,
        },

        '.MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: spacingTokens['spacing-aliases-button-icon-text-gap-regular'],
        },

        '.MuiButton-endIcon': {
          marginLeft: spacingTokens['spacing-aliases-button-icon-text-gap-regular'],
        },

        // Preserve the existing Link loading layout, using the spacing primitive.
        '&.MuiButton-loadingPositionStart.MuiButton-loading': {
          paddingLeft: spacingRoleBasedTokens['space-24'],
          '.MuiButton-loadingIndicatorStart': { left: 0 },
        },
        '&.MuiButton-loadingPositionEnd.MuiButton-loading': {
          paddingRight: spacingRoleBasedTokens['space-24'],
          '.MuiButton-loadingIndicatorEnd': { right: 0 },
        },
      },
    },
    {
      props: {
        color: 'grey',
        variant: 'link',
      },
      style: {
        color: colorTokens['text-secondary'],
        fontSize: typographyTokens['font-size-button-compact'],
        lineHeight: typographyTokens['line-height-button-compact'],
        padding: `${spacingTokens['spacing-aliases-button-padding-y-regular']} ${spacingTokens['spacing-aliases-button-padding-x-link']}`,

        '&:not(.Mui-disabled)': {
          '&:hover': {
            backgroundColor: 'transparent',
            color: colorPrimitives.neutrals[700],
          },

          '&:active': {
            backgroundColor: 'transparent',
            color: colorPrimitives.neutrals[900],
          },
        },
      },
    },
    {
      props: {
        color: 'dark',
        variant: 'link',
      },
      style: {
        color: colorPrimitives.neutrals[700],
        textDecoration: 'underline',
      },
    },
  ],
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      borderRadius: borderTokens['radius-button'],
      fontSize: typographyTokens['font-size-button-regular'],
      height: buttonDimensions.medium,
      letterSpacing: 0,
      lineHeight: typographyTokens['line-height-button-regular'],
      // Private layout alias; the loading indicators read it too.
      '--_rc-button-padding-x': spacingTokens['spacing-aliases-button-padding-x-regular'],
      padding: `${spacingTokens['spacing-aliases-button-padding-y-regular']} var(--_rc-button-padding-x)`,
      position: 'relative',
      textTransform: 'none',
      '.MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: spacingTokens['spacing-aliases-button-icon-text-gap-regular'],
      },
      '.MuiButton-endIcon': {
        marginRight: 0,
        marginLeft: spacingTokens['spacing-aliases-button-icon-text-gap-regular'],
      },
      '.MuiButton-startIcon > svg, .MuiButton-endIcon > svg, & > svg': {
        width: sizeTokens['icon-size-button'],
        height: sizeTokens['icon-size-button'],
        flexShrink: 0,
      },
      '.MuiButton-loadingIndicatorStart': {
        left: 'var(--_rc-button-padding-x)',
      },
      '.MuiButton-loadingIndicatorEnd': {
        right: 'var(--_rc-button-padding-x)',
      },

      '&.MuiButton-loadingPositionCenter.MuiButton-loading.Mui-disabled': {
        color: 'transparent',
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          visibility: 'hidden',
        },
        '& .MuiButton-loadingIndicator': {
          color: colorTokens['text-disabled'],
        },
      },
      '&.MuiButton-contained:focus-visible:not(:active), &.MuiButton-outlined:focus-visible:not(:active)':
        { boxShadow: effectTokens['focus-ring-default'] },

      '.MuiButton-startIcon, .MuiButton-endIcon, & > svg': {
        color: 'inherit',

        'svg [fill]:not([fill="none"])': {
          fill: 'currentColor',
        },

        'svg [stroke]:not([stroke="none"])': {
          stroke: 'currentColor',
        },

        '& [fill]:not([fill="none"])': {
          fill: 'currentColor',
        },

        '& [stroke]:not([stroke="none"])': {
          stroke: 'currentColor',
        },
      },
    },

    sizeSmall: {
      height: buttonDimensions.small,
      fontSize: typographyTokens['font-size-button-compact'],
      lineHeight: typographyTokens['line-height-button-compact'],
      '--_rc-button-padding-x': spacingTokens['spacing-aliases-button-padding-x-small'],
      padding: `${spacingTokens['spacing-aliases-button-padding-y-small']} var(--_rc-button-padding-x)`,
      '.MuiButton-startIcon': {
        marginRight: spacingTokens['spacing-aliases-button-icon-text-gap-small'],
      },
      '.MuiButton-endIcon': {
        marginLeft: spacingTokens['spacing-aliases-button-icon-text-gap-small'],
      },
      '.MuiButton-loadingIndicatorStart': {
        left: 'var(--_rc-button-padding-x)',
      },
      '.MuiButton-loadingIndicatorEnd': {
        right: 'var(--_rc-button-padding-x)',
      },
    },

    sizeLarge: {
      // No DS Large role exists; retain its horizontal primitive.
      padding: `${spacingTokens['spacing-aliases-button-padding-y-regular']} ${spacingRoleBasedTokens['space-36']}`,
    },

    contained: {
      '&.MuiButton-colorPrimary': {
        color: colorTokens['action-primary-text'],
        backgroundColor: colorTokens['action-primary-bg'],

        '&:hover': {
          backgroundColor: colorTokens['action-primary-bg-hover'],
        },
        '&:active': {
          backgroundColor: colorTokens['action-primary-bg-pressed'],
        },
      },

      '&.MuiButton-colorGrey': {
        color: colorTokens['text-default'],
        backgroundColor: colorTokens['surface-muted'],

        '&:hover': {
          backgroundColor: colorPrimitives.neutrals[200],
        },
        '&:active': {
          backgroundColor: colorPrimitives.neutrals[300],
        },
      },

      '&.MuiButton-colorDark': {
        color: colorTokens['text-inverse'],
        backgroundColor: colorPrimitives.neutrals[900],

        '&:hover': {
          backgroundColor: colorPrimitives.neutrals[800],
        },
        '&:active': {
          backgroundColor: colorPrimitives.neutrals[700],
        },
      },

      '&.MuiButton-colorSecondary': {
        color: colorPrimitives.greens[950],
        backgroundColor: colorPrimitives.greens[200],

        '&:hover': {
          backgroundColor: colorPrimitives.greens[300],
        },
        '&:active': {
          backgroundColor: colorPrimitives.greens[400],
        },
      },

      '&.MuiButton-colorWarning': {
        color: colorPrimitives.yellows[950],
        backgroundColor: colorPrimitives.yellows[200],

        '&:hover': {
          backgroundColor: colorPrimitives.yellows[300],
        },
        '&:active': {
          backgroundColor: colorPrimitives.yellows[400],
        },
      },

      '&.MuiButton-colorError': {
        color: colorTokens['action-destructive-text'],
        backgroundColor: colorTokens['action-destructive-bg'],

        '&:hover': {
          backgroundColor: colorTokens['action-destructive-bg-hover'],
        },
        '&:active': {
          backgroundColor: colorTokens['action-destructive-bg-pressed'],
        },
      },
      '&.Mui-disabled': {
        backgroundColor: colorTokens['action-primary-bg-disabled'],
        color: colorTokens['action-primary-text-disabled'],
        opacity: 1,
      },
    },

    outlined: {
      borderColor: colorTokens['action-secondary-border'],
      borderWidth: borderTokens['border-default'],

      '&.MuiButton-colorPrimary': {
        borderColor: colorPrimitives.cyans[600],
        color: colorPrimitives.cyans[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorTokens['surface-brand-subtle'],
        },
        '&:active': {
          backgroundColor: colorPrimitives.cyans[100],
        },
      },

      '&.MuiButton-colorGrey': {
        borderColor: colorTokens['action-secondary-border'],
        color: colorTokens['action-secondary-text'],
        backgroundColor: colorTokens['action-secondary-bg'],

        '&:hover': {
          backgroundColor: colorTokens['action-secondary-bg-hover'],
          borderColor: colorTokens['action-secondary-border-hover'],
        },
        '&:active': {
          backgroundColor: colorTokens['surface-muted'],
        },
        '&.Mui-disabled.MuiButton-loading': {
          borderColor: colorTokens['action-secondary-border'],
        },
      },

      '&.MuiButton-colorSecondary': {
        borderColor: colorPrimitives.greens[600],
        color: colorPrimitives.greens[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.greens[50],
        },
        '&:active': {
          backgroundColor: colorPrimitives.greens[100],
        },
      },

      '&.MuiButton-colorWarning': {
        borderColor: colorPrimitives.yellows[600],
        color: colorPrimitives.yellows[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.yellows[50],
        },
        '&:active': {
          backgroundColor: colorPrimitives.yellows[100],
        },
      },

      '&.MuiButton-colorError': {
        borderColor: colorPrimitives.red[600],
        color: colorPrimitives.red[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.red[50],
        },
        '&:active': {
          backgroundColor: colorPrimitives.red[100],
        },
      },

      '&.MuiButton-colorLight': {
        borderColor: colorPrimitives.neutrals[50],
        color: colorTokens['text-inverse'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.overlays.white[8],
        },
        '&:active': {
          backgroundColor: colorPrimitives.overlays.white[16],
        },
        '&.Mui-disabled': {
          backgroundColor: 'transparent',
          borderColor: colorTokens['text-disabled'],
          color: colorTokens['text-disabled'],

          '& .MuiButton-loadingIndicator': {
            color: colorTokens['text-disabled'],
          },
          '&.MuiButton-loadingPositionCenter': {
            color: 'transparent',
          },
        },
      },

      '&.MuiButton-colorGhost': {
        borderColor: 'transparent',
        color: colorTokens['text-inverse'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.overlays.white[8],
        },
        '&:active': {
          backgroundColor: colorPrimitives.overlays.white[16],
        },
        '&.Mui-disabled': {
          backgroundColor: 'transparent',
          borderColor: `transparent`,

          color: colorPrimitives.neutrals[300],
          '& .MuiButton-loadingIndicator': {
            color: colorPrimitives.neutrals[300],
          },

          '&.MuiButton-loadingPositionCenter': {
            color: 'transparent',
          },
        },
      },
      '&.Mui-disabled': {
        backgroundColor: colorTokens['action-primary-bg-disabled'],
        borderColor: colorTokens['border-subtle'],
        color: colorTokens['text-disabled'],
        opacity: 1,
      },
    },
    text: {
      '&.MuiButton-colorGrey': {
        color: colorTokens['text-secondary'],

        '&:hover': {
          color: colorPrimitives.neutrals[700],
        },
        '&:active': {
          color: colorPrimitives.neutrals[900],
        },
      },

      '&.MuiButton-colorDark': {
        color: colorTokens['text-default'],

        '&:hover': {
          color: colorPrimitives.neutrals[800],
        },
        '&:active': {
          color: colorPrimitives.neutrals[700],
        },
      },

      '&.MuiButton-colorSecondary': {
        color: colorPrimitives.greens[600],

        '&:hover': {
          color: colorPrimitives.greens[700],
        },
        '&:active': {
          color: colorPrimitives.greens[900],
        },
      },

      '&.MuiButton-colorWarning': {
        color: colorPrimitives.yellows[600],

        '&:hover': {
          color: colorPrimitives.yellows[700],
        },
        '&:active': {
          color: colorPrimitives.yellows[900],
        },
      },

      '&.MuiButton-colorError': {
        color: colorPrimitives.red[600],

        '&:hover': {
          color: colorPrimitives.red[700],
        },
        '&:active': {
          color: colorPrimitives.red[900],
        },
      },
    },
  },
}

export default MuiButton
