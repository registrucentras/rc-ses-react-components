import { Components } from '@mui/material'
import type { Theme } from '@mui/material/styles'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color, colorPrimitives } from '../colorTokens'
import { effectTokens as effect } from '../effectTokens'
import { sizeTokens as size } from '../sizeTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

// Existing control dimensions remain usable when DS CSS variables are absent.
const withFallback = (reference: string, value: string) =>
  `${reference.slice(0, -1)}, ${value})`

// Internal to the theme and wrapper; these do not add foundation tokens or props.
export const buttonDimensions = {
  small: `calc(${withFallback(typography['line-height-button-compact'], '1.25rem')} + ${withFallback(space['button-padding-y-small'], '0.5rem')} * 2)`,
  medium: `calc(${withFallback(typography['line-height-button-regular'], '1.25rem')} + ${withFallback(space['button-padding-y-regular'], '0.75rem')} * 2)`,
  linkMedium: `calc(${withFallback(typography['line-height-button-regular'], '1.125rem')} + ${withFallback(space['button-padding-y-regular'], '0.625rem')} * 2)`,
  large: withFallback(space['space-48'], '3rem'),
  iconPaddingSmall: withFallback(space['button-padding-icon-only-small'], '0'),
  iconPaddingRegular: withFallback(space['button-padding-icon-only-regular'], '0'),
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
        color: color['action-link-text'],
        fontSize: withFallback(typography['font-size-button-regular'], '0.875rem'),
        lineHeight: withFallback(typography['line-height-button-regular'], '1.125rem'),
        fontWeight: 600,
        height: buttonDimensions.linkMedium,
        // Link has no padding role at this size; retain its compact primitive.
        padding: `${withFallback(space['button-padding-y-regular'], '0.8125rem')} ${withFallback(space['space-4'], '0')}`,

        '&.Mui-disabled': {
          opacity: 1,

          '&.MuiButton-colorPrimary': {
            color: color['text-disabled'],
          },
        },

        '&:not(.Mui-disabled)': {
          'svg path': {
            fill: 'currentColor',
          },

          '&:hover': {
            backgroundColor: 'transparent',
            color: color['action-link-text-hover'],

            'svg path': {
              fill: 'currentColor',
            },
          },

          '&:active': {
            backgroundColor: 'transparent',
            color: color['action-link-text-hover'],

            'svg path': {
              fill: 'currentColor',
            },
          },

          '&:focus-visible:not(:active)': { boxShadow: effect['focus-ring-default'] },
        },

        '&.MuiButton-sizeSmall': {
          fontWeight: 400,
          height: buttonDimensions.small,
          fontSize: withFallback(typography['font-size-button-compact'], '0.875rem'),
          lineHeight: withFallback(typography['line-height-button-compact'], '1.125rem'),
          padding: `${withFallback(space['button-padding-y-small'], '0.625rem')} ${withFallback(space['space-4'], '0.5rem')}`,
          '.MuiButton-startIcon': {
            // No six-unit gap role exists for Small buttons.
            marginRight: space['space-6'],
          },
          '.MuiButton-endIcon': {
            marginLeft: space['space-6'],
          },
        },

        '&.MuiButton-sizeLarge': {
          fontSize: withFallback(typography['font-size-button-regular'], '0.9375rem'),
          padding: `${withFallback(space['button-padding-y-regular'], '0.6875rem')} 0`,
        },

        '.MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: space['gap-sm'],
        },

        '.MuiButton-endIcon': {
          marginLeft: space['gap-sm'],
        },

        // Preserve the existing Link loading layout, using the spacing primitive.
        '&.MuiButton-loadingPositionStart.MuiButton-loading': {
          paddingLeft: space['space-24'],
          '.MuiButton-loadingIndicatorStart': { left: 0 },
        },
        '&.MuiButton-loadingPositionEnd.MuiButton-loading': {
          paddingRight: space['space-24'],
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
        color: color['text-secondary'],
        fontSize: withFallback(typography['font-size-button-compact'], '0.875rem'),
        lineHeight: withFallback(typography['line-height-button-compact'], '1rem'),
        padding: `${withFallback(space['button-padding-y-regular'], '0.6875rem')} ${withFallback(space['space-4'], '0.25rem')}`,

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
      borderRadius: border['radius-button'],
      fontSize: withFallback(typography['font-size-button-regular'], '0.9375rem'),
      height: buttonDimensions.medium,
      letterSpacing: 0,
      lineHeight: withFallback(typography['line-height-button-regular'], '1.125rem'),
      // Private layout alias keeps media queries from overriding consumer padding.
      '--_rc-button-padding-x': withFallback(space['space-16'], '1.25rem'),
      padding: `${withFallback(space['button-padding-y-regular'], '0.8125rem')} var(--_rc-button-padding-x)`,
      position: 'relative',
      textTransform: 'none',
      // No horizontal Button role exists in the current map; retain its primitives.
      variants: [
        {
          props: { size: 'medium' },
          style: ({ theme }) => ({
            [(theme as Theme).breakpoints.up('sm')]: {
              '--_rc-button-padding-x': withFallback(space['space-20'], '1.25rem'),
            },
          }),
        },
      ],
      '.MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: space['gap-sm'],
      },
      '.MuiButton-endIcon': {
        marginRight: 0,
        marginLeft: space['gap-sm'],
      },
      '.MuiButton-startIcon > svg, .MuiButton-endIcon > svg, & > svg': {
        width: size['icon-size-button'],
        height: size['icon-size-button'],
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
          color: color['text-disabled'],
        },
      },
      '&.MuiButton-contained:focus-visible:not(:active), &.MuiButton-outlined:focus-visible:not(:active)':
        { boxShadow: effect['focus-ring-default'] },

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
      fontSize: withFallback(typography['font-size-button-compact'], '0.9375rem'),
      lineHeight: withFallback(typography['line-height-button-compact'], '1.125rem'),
      '--_rc-button-padding-x': withFallback(space['space-12'], '0.75rem'),
      padding: `${withFallback(space['button-padding-y-small'], '0.5rem')} var(--_rc-button-padding-x)`,
      variants: [
        {
          props: { size: 'small' },
          style: ({ theme }) => ({
            [(theme as Theme).breakpoints.up('sm')]: {
              '--_rc-button-padding-x': withFallback(space['space-16'], '0.75rem'),
            },
          }),
        },
      ],
      '.MuiButton-startIcon': {
        // No six-unit gap role exists for Small buttons.
        marginRight: space['space-6'],
      },
      '.MuiButton-endIcon': {
        marginLeft: space['space-6'],
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
      padding: `${withFallback(space['button-padding-y-regular'], '0.9375rem')} ${withFallback(space['space-36'], '2.25rem')}`,
    },

    contained: {
      '&.MuiButton-colorPrimary': {
        color: color['action-primary-text'],
        backgroundColor: color['action-primary-bg'],

        '&:hover': {
          backgroundColor: color['action-primary-bg-hover'],
        },
        '&:active': {
          backgroundColor: color['action-primary-bg-pressed'],
        },
      },

      '&.MuiButton-colorGrey': {
        color: color['text-default'],
        backgroundColor: color['surface-muted'],

        '&:hover': {
          backgroundColor: colorPrimitives.neutrals[200],
        },
        '&:active': {
          backgroundColor: colorPrimitives.neutrals[300],
        },
      },

      '&.MuiButton-colorDark': {
        color: color['text-inverse'],
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
        color: color['action-destructive-text'],
        backgroundColor: color['action-destructive-bg'],

        '&:hover': {
          backgroundColor: color['action-destructive-bg-hover'],
        },
        '&:active': {
          backgroundColor: color['action-destructive-bg-pressed'],
        },
      },
      '&.Mui-disabled': {
        backgroundColor: color['action-primary-bg-disabled'],
        color: color['action-primary-text-disabled'],
        opacity: 1,
      },
    },

    outlined: {
      borderColor: color['action-secondary-border'],
      borderWidth: border['border-default'],

      '&.MuiButton-colorPrimary': {
        borderColor: colorPrimitives.cyans[600],
        color: colorPrimitives.cyans[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: color['surface-brand-subtle'],
        },
        '&:active': {
          backgroundColor: colorPrimitives.cyans[100],
        },
      },

      '&.MuiButton-colorGrey': {
        borderColor: color['action-secondary-border'],
        color: color['action-secondary-text'],
        backgroundColor: color['action-secondary-bg'],

        '&:hover': {
          backgroundColor: color['action-secondary-bg-hover'],
          borderColor: color['action-secondary-border-hover'],
        },
        '&:active': {
          backgroundColor: color['surface-muted'],
        },
        '&.Mui-disabled.MuiButton-loading': {
          borderColor: color['action-secondary-border'],
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
        color: color['text-inverse'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: colorPrimitives.overlays.white[8],
        },
        '&:active': {
          backgroundColor: colorPrimitives.overlays.white[16],
        },
        '&.Mui-disabled': {
          backgroundColor: 'transparent',
          borderColor: color['text-disabled'],
          color: color['text-disabled'],

          '& .MuiButton-loadingIndicator': {
            color: color['text-disabled'],
          },
          '&.MuiButton-loadingPositionCenter': {
            color: 'transparent',
          },
        },
      },

      '&.MuiButton-colorGhost': {
        borderColor: 'transparent',
        color: color['text-inverse'],
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
        backgroundColor: color['action-primary-bg-disabled'],
        borderColor: color['border-subtle'],
        color: color['text-disabled'],
        opacity: 1,
      },
    },
    text: {
      '&.MuiButton-colorGrey': {
        color: color['text-secondary'],

        '&:hover': {
          color: colorPrimitives.neutrals[700],
        },
        '&:active': {
          color: colorPrimitives.neutrals[900],
        },
      },

      '&.MuiButton-colorDark': {
        color: color['text-default'],

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
