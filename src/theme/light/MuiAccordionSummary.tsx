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

export const accordionSummaryRootStyles = {
  fontFamily: typographyTokens['font-family'],
  gap: spacingTokens['spacing-aliases-stack-default'],
  paddingBlock: spacingRoleBasedTokens['space-20'],
  paddingInline: spacingTokens['spacing-aliases-card-padding-x'],
  backgroundColor: colorTokens['surface-sunken'],
  borderRadius: HEADER_RADIUS,
  minHeight: '44px',
  '&:hover:not(.Mui-disabled)': { backgroundColor: colorTokens['surface-muted'] },
  '&.Mui-focusVisible': { backgroundColor: colorTokens['surface-sunken'] },
  '&.Mui-disabled': { color: colorTokens['text-disabled'], opacity: 1 },
}

const MuiAccordionSummary: Components['MuiAccordionSummary'] = {
  defaultProps: {
    expandIcon: <CaretDownIcon />,
    sx: {
      backgroundColor: colorTokens['surface-sunken'],
      borderRadius: HEADER_RADIUS,
    },
  },
  styleOverrides: {
    root: accordionSummaryRootStyles,
    content: {
      color: 'inherit',
      fontSize: typographyTokens['font-size-heading-card-title'],
      fontWeight: typographyTokens['font-weight-heading-card-title'],
      lineHeight: typographyTokens['line-height-heading-card-title'],
      letterSpacing: typographyTokens['letter-spacing-heading-card-title'],
      margin: 0,
    },
  },
}

export default MuiAccordionSummary
