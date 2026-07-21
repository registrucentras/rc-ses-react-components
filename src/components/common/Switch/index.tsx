import { FormControlLabel, Switch, type SwitchProps } from '@mui/material'

import palette from '@/theme/palette'

export type RcSesSwitchProps = SwitchProps &
  ({ label: string; ariaLabel?: string } | { label?: undefined; ariaLabel: string })

const formControlLabelStyles = {
  marginLeft: 0,
  alignItems: 'center',
  '& .MuiFormControlLabel-label': {
    paddingLeft: '0.625rem',
  },
  '&.Mui-disabled .MuiFormControlLabel-label': {
    color: palette.grey['500'],
  },
}

function RcSesSwitch(props: RcSesSwitchProps) {
  const { label, ariaLabel, disabled, ...switchProps } = props

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !disabled) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  const inputProps = {
    ...(label === undefined && { 'aria-label': ariaLabel }),
    role: 'switch',
    onKeyDown: handleKeyDown,
  }

  const switchEl = <Switch disabled={disabled} inputProps={inputProps} {...switchProps} />

  return label ? (
    <FormControlLabel
      control={switchEl}
      label={label}
      disabled={disabled}
      sx={formControlLabelStyles}
    />
  ) : (
    switchEl
  )
}

export default RcSesSwitch
