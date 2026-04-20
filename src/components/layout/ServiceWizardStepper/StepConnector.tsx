import styled from '@emotion/styled'
import { StepConnector as MuiStepConnector, stepConnectorClasses } from '@mui/material'

import theme from '@/theme/light'
import palette from '@/theme/palette'

const StepConnector = styled(MuiStepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
    [theme.breakpoints.up('md')]: {
      top: 9,
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: palette.primary[400],
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: palette.primary[400],
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: palette.grey[300],
  },
}))

export default StepConnector
