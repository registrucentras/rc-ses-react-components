import { Box, Button, ButtonProps } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

interface PaginationButtonProps extends ButtonProps {
  label: string
  icon: React.ReactNode
  iconPosition?: 'start' | 'end'
}

const baseButtonSx = {
  '&&': {
    minWidth: 40,
    height: 40,
    px: spacingRoleBasedTokens['space-12'],
    borderRadius: borderTokens['radius-button'],
    fontSize: typographyTokens['font-size-body-small'],
    fontWeight: 400,
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: colorTokens['text-default'],

    display: 'flex',
    alignItems: 'center',
    gap: spacingRoleBasedTokens['space-4'],

    '&:hover': {
      backgroundColor: 'var(--rc-color-neutrals-200)',
    },

    '&:active, &.Mui-selected': {
      backgroundColor: 'var(--rc-color-neutrals-300)',
    },

    '&.Mui-focusVisible': {
      backgroundColor: 'var(--rc-color-neutrals-50)',
      border: `${borderTokens['border-focus']} solid var(--rc-color-neutrals-950)`,
      boxShadow: 'none',
    },

    '&.Mui-disabled': {
      backgroundColor: 'var(--rc-color-neutrals-100)',
      color: 'var(--rc-color-neutrals-500)',
    },
  },
}

const PaginationButton = ({
  label,
  icon,
  iconPosition = 'start',
  ...props
}: PaginationButtonProps) => (
  <Button variant='text' color='inherit' disableRipple {...props} sx={baseButtonSx}>
    {iconPosition === 'start' && icon}

    <Box sx={{ display: { xs: 'none', md: 'block' } }}>{label}</Box>

    {iconPosition === 'end' && icon}
  </Button>
)

export default PaginationButton
