import { FormControlLabel, Switch } from '@mui/material'

import palette from '@/theme/palette'

type BaseProps = {
  checked: boolean
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export type RcSesSwitchProps = BaseProps &
  ({ label: string; ariaLabel?: string } | { label?: undefined; ariaLabel: string })

const formControlLabelStyles = {
  marginLeft: 0,
  '& .MuiFormControlLabel-label': {
    paddingLeft: '0.625rem',
  },
  '&.Mui-disabled .MuiFormControlLabel-label': {
    color: palette.grey['500'],
  },
}

function RcSesSwitch(props: RcSesSwitchProps) {
  const { checked, disabled, onChange, label, ariaLabel } = props

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !disabled) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  const inputProps = {
    'aria-label': ariaLabel ?? label,
    role: 'switch',
    'aria-checked': checked,
    onKeyDown: handleKeyDown,
  }

  const switchEl = (
    <Switch
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      inputProps={inputProps}
    />
  )

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
