import { StepLabel, styled } from '@mui/material'

import { grey } from '@/theme/palette'

import { StepItem } from './StepperTypes'

interface StyledStepLabelProps {
  stepState: StepItem['state']
  orientation?: 'vertical' | 'horizontal'
}

const StyledStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) => prop !== 'stepState' && prop !== 'orientation',
})<StyledStepLabelProps>(({ stepState, orientation }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: stepState === 'active' ? 700 : 400,
    color: stepState === 'pending' ? grey[500] : grey[800],
  },

  ...(orientation === 'vertical' && {
    '&.MuiStepLabel-root.MuiStepLabel-vertical .MuiStepLabel-label': {
      marginTop: 0,
    },
  }),

  ...(orientation === 'horizontal' && {
    '& .MuiStepLabel-label': {
      marginTop: 4,
    },
  }),
}))

export default StyledStepLabel
