import { Box, Button, ButtonProps } from '@mui/material'

import palette from '@/theme/palette'

interface PaginationButtonProps extends ButtonProps {
  label: string
  icon: React.ReactNode
  iconPosition?: 'start' | 'end'
}

const baseButtonSx = {
  '&&': {
    minWidth: 40,
    height: 40,
    px: 1.5,
    borderRadius: 2,
    fontSize: 14,
    fontWeight: 300,
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: palette.grey[800],

    display: 'flex',
    alignItems: 'center',
    gap: 0.5,

    '&:hover': {
      backgroundColor: palette.grey[200],
    },

    '&:active': {
      backgroundColor: palette.grey[300],
    },

    '&.Mui-focusVisible': {
      border: `2px solid ${palette.grey[950]}`,
      backgroundColor: palette.grey[50],
    },

    '&.Mui-disabled': {
      backgroundColor: palette.grey[100],
      color: palette.grey[500],
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
