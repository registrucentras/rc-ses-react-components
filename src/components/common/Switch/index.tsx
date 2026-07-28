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

  // The handler has to sit on the Switch root rather than on the input: as of
  // MUI 6, SwitchBase applies plain attributes from the input slot but silently
  // drops event handlers, so an onKeyDown passed through `slotProps.input` (or
  // the deprecated `inputProps`) never fires. keydown bubbles up from the input,
  // so a root-level handler still sees it.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' || disabled) {
      return
    }
    event.preventDefault()
    // currentTarget is the root, so reach for the checkbox to toggle it.
    event.currentTarget.querySelector<HTMLInputElement>('input[type="checkbox"]')?.click()
  }

  // `slotProps.input` rather than `inputProps`: the latter is deprecated in MUI 6
  // and removed in v7.
  const inputProps = {
    ...(label === undefined && { 'aria-label': ariaLabel }),
    role: 'switch',
  }

  const switchEl = (
    <Switch
      disabled={disabled}
      onKeyDown={handleKeyDown}
      slotProps={{ input: inputProps }}
      {...switchProps}
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
