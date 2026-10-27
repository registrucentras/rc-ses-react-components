import { styled } from '@mui/material/styles'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'
import { colorTokens as color } from '@/theme/colorTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import '@/theme/tokens.css'
import { typographyTokens as typography } from '@/theme/typographyTokens'

const TextFieldControl = styled(RcSesFormControlWrapper, {
  shouldForwardProp: (prop) => prop !== 'fieldDisabled',
})<{ fieldDisabled?: boolean }>(({ labelOnTop, fieldDisabled }) => ({
  marginBlock: space['space-8'],
  '&& .MuiFormLabel-root': {
    color: fieldDisabled ? color['text-disabled'] : color['text-default'],
    fontSize: labelOnTop
      ? typography['font-size-body-caption']
      : typography['font-size-body-regular'],
    lineHeight: labelOnTop
      ? typography['line-height-body-caption']
      : typography['line-height-body-regular'],
    paddingRight: space['space-24'],
    '& .MuiFormLabel-asterisk': {
      color: color['status-error-border'],
      marginLeft: space['space-2'],
    },
    '& .rc-ses-label-subtitle': {
      color: color['text-secondary'],
      fontSize: typography['font-size-body-caption'],
      lineHeight: typography['line-height-body-caption'],
      marginTop: space['space-2'],
    },
  },
  '&& .MuiFormHelperText-root': {
    color: fieldDisabled ? color['text-disabled'] : color['text-secondary'],
    fontSize: typography['font-size-body-caption'],
    lineHeight: typography['line-height-body-caption'],
    fontStyle: 'normal',
    fontWeight: 400,
    marginInline: space['space-0'],
    marginTop: space['space-4'],
    '&.Mui-error': {
      color: fieldDisabled ? color['text-disabled'] : color['status-error-border'],
    },
  },
}))

export default TextFieldControl
