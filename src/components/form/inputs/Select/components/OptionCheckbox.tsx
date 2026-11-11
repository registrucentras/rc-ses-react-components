import { Box } from '@mui/material'

import RcSesCheckboxMark from '@/components/common/CheckboxMark'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

interface Props {
  checked: boolean
  disabled?: boolean
}

function OptionCheckbox({ checked, disabled }: Props) {
  return (
    <Box aria-hidden sx={{ flexShrink: 0, py: spacingRoleBasedTokens['space-8'] }}>
      <RcSesCheckboxMark type={checked ? 'checked' : 'unchecked'} disabled={disabled} />
    </Box>
  )
}

export default OptionCheckbox
