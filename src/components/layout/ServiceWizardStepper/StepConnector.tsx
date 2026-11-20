import styled from '@emotion/styled'
import { StepConnector as MuiStepConnector, stepConnectorClasses } from '@mui/material'

import { colorTokens } from '@/theme/colorTokens'
import theme from '@/theme/light'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import stepperColors from './stepperTokens'

const StepConnector = styled(MuiStepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: spacingRoleBasedTokens['space-12'],
    [theme.breakpoints.up('md')]: {
      top: 9,
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: stepperColors.progress,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: stepperColors.progress,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: colorTokens['border-default'],
  },
}))

export default StepConnector
