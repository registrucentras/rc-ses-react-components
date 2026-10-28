import { Box } from '@mui/material'

import { CheckIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

interface Props {
  checked: boolean
}

function OptionCheckbox({ checked }: Props) {
  return (
    <Box aria-hidden sx={{ flexShrink: 0, py: spacingRoleBasedTokens['space-8'] }}>
      <Box
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          height: sizeTokens['icon-size-24'],
          justifyContent: 'center',
          padding: spacingRoleBasedTokens['space-2'],
          width: sizeTokens['icon-size-24'],
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: checked
              ? colorTokens['control-selected']
              : colorTokens['surface-base'],
            border: checked
              ? `${borderTokens['stroke-1']} solid ${colorTokens['control-selected']}`
              : `${borderTokens['stroke-2']} solid ${colorTokens['control-border']}`,
            borderRadius: borderTokens['radius-4'],
            boxSizing: 'border-box',
            display: 'flex',
            height: sizeTokens['icon-size-control'],
            justifyContent: 'center',
            width: sizeTokens['icon-size-control'],
          }}
        >
          {checked && (
            <CheckIcon
              size={14}
              weight='bold'
              fillColor={colorTokens['control-foreground']}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default OptionCheckbox
