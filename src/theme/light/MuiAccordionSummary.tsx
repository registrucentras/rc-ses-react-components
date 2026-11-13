import { Components } from '@mui/material'

import { CaretDownIcon } from '@/assets/icons/phosphorIcons'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { spacingTokens } from '../spacingTokens'
import { typographyTokens } from '../typographyTokens'

// The header sits inside the section's 1px border, so its corners use the
// card radius minus that border.
const HEADER_RADIUS = `calc(${borderTokens['radius-card']} - ${borderTokens['stroke-1']})`

const MuiAccordionSummary: Components['MuiAccordionSummary'] = {
  defaultProps: {
    expandIcon: <CaretDownIcon />,
    sx: {
      backgroundColor: {
        xs: colorTokens['surface-base'],
        md: colorTokens['surface-sunken'],
      },
      borderRadius: {
        xs: 0,
        md: HEADER_RADIUS,
      },
    },
  },
  styleOverrides: {
    root: {
      // The header is a <button>, which does not inherit the page font by default.
      fontFamily: 'inherit',
      gap: spacingTokens['spacing-aliases-stack-default'],
      paddingBlock: spacingRoleBasedTokens['space-20'],
      paddingInline: spacingTokens['spacing-aliases-card-padding-x'],

      '&:hover:not(.Mui-disabled)': {
        backgroundColor: colorTokens['surface-muted'],
      },

      // The section outline marks focus (MuiAccordion); keep the header fill.
      '&.Mui-focusVisible': {
        backgroundColor: colorTokens['surface-sunken'],
      },

      '&.Mui-disabled': {
        color: colorTokens['text-disabled'],
        opacity: 1,
      },
    },
    content: {
      color: 'inherit',
      fontSize: typographyTokens['font-size-heading-card-title'],
      fontWeight: 500,
      lineHeight: typographyTokens['line-height-heading-card-title'],
      margin: 0,
    },
  },
}

export default MuiAccordionSummary
