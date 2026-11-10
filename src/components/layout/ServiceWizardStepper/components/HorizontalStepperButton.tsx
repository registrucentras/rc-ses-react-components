import { Button, ButtonProps } from '@mui/material'

import { CaretLeftIcon, CaretRightBoldIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import stepperColors from '../stepperTokens'

type Props = ButtonProps & {
  direction: 'back' | 'forward'
}

const HorizontalStepperButton = ({ direction, sx, ...rest }: Props) => {
  const isBack = direction === 'back'

  return (
    <Button
      variant='outlined'
      color='inherit'
      {...rest}
      sx={{
        minWidth: spacingRoleBasedTokens['space-36'],
        width: spacingRoleBasedTokens['space-36'],
        height: spacingRoleBasedTokens['space-36'],
        padding: spacingRoleBasedTokens['space-0'],
        borderRadius: borderTokens['radius-8'],
        borderColor: colorTokens['control-unselected'],
        color: stepperColors.label,

        '&:hover': {
          borderColor: stepperColors.label,
          backgroundColor: stepperColors.label,
          color: colorTokens['text-inverse'],
        },

        '&.Mui-disabled': {
          opacity: 0.5,
        },

        ...sx,
      }}
    >
      {isBack ? <CaretLeftIcon /> : <CaretRightBoldIcon />}
    </Button>
  )
}

export default HorizontalStepperButton
