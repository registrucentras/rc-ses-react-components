import { StepLabel, styled } from '@mui/material'

import palette, { grey } from '@/theme/palette'

import { StepItem } from '../StepperTypes'

interface StyledStepLabelProps {
  stepState: StepItem['state']
  orientation?: 'vertical' | 'horizontal'
  isLast?: boolean
}

const StyledStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) =>
    prop !== 'stepState' && prop !== 'orientation' && prop !== 'isLast',
})<StyledStepLabelProps>(({ stepState, orientation, isLast }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: stepState === 'active' ? 700 : 400,
    color: stepState === 'pending' ? grey[500] : grey[800],
  },

  ...(orientation === 'vertical' &&
    !isLast && {
      '&.MuiStepLabel-root.MuiStepLabel-vertical .MuiStepLabel-label': {
        marginTop: 0,
      },

      '& .MuiStepLabel-iconContainer': {
        position: 'relative',
      },

      '& .MuiStepLabel-iconContainer::after': {
        content: '""',
        position: 'absolute',
        top: '100%',
        left: '9px',
        width: '2px',
        height: '14px',
        borderRadius: '2px',
        backgroundColor:
          stepState === 'completed' ? palette.primary[400] : palette.grey[300],
        marginTop: '4px',
      },
    }),

  ...(orientation === 'horizontal' && {
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      marginTop: 4,
    },
  }),
}))

export default StyledStepLabel
