import { Button, ButtonProps } from '@mui/material'

import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import CaretRightBoldIcon from '@/assets/icons/CaretRightBoldIcon'
import palette from '@/theme/palette'

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
        minWidth: 40,
        width: 40,
        height: 40,
        padding: 0,
        borderRadius: 2,
        borderColor: palette.grey[600],
        color: palette.grey[800],

        '&:hover': {
          borderColor: palette.grey[800],
          backgroundColor: palette.grey[800],
          color: '#fff',
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
