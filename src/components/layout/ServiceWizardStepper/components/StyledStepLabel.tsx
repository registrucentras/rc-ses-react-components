import { StepLabel, styled } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import stepperColors from '../stepperTokens'

export type StepState = 'completed' | 'active' | 'pending'

interface StyledStepLabelProps {
  stepState: StepState
  orientation?: 'vertical' | 'horizontal'
  isLast?: boolean
}

const StyledStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) =>
    prop !== 'stepState' && prop !== 'orientation' && prop !== 'isLast',
})<StyledStepLabelProps>(({ stepState, orientation, isLast }) => ({
  '&& .MuiStepLabel-label': {
    fontWeight: 500,
    fontSize: typographyTokens['font-size-heading-h4'],
    lineHeight: typographyTokens['line-height-heading-h4'],
    color: stepperColors.label,
  },

  ...(orientation === 'vertical' && {
    '&& .MuiStepLabel-label.Mui-active': {
      fontSize: typographyTokens['font-size-heading-h4'],
      lineHeight: typographyTokens['line-height-heading-h4'],
      fontWeight: 500,
      color: stepperColors.label,
    },
  }),

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
        width: borderTokens['stroke-2'],
        height: '14px',
        borderRadius: borderTokens['radius-2'],
        backgroundColor:
          stepState === 'completed'
            ? stepperColors.progress
            : colorTokens['border-default'],
        marginTop: spacingRoleBasedTokens['space-4'],
      },
    }),

  ...(orientation === 'horizontal' && {
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      marginTop: spacingRoleBasedTokens['space-4'],
    },
  }),
}))

export default StyledStepLabel
