import { Box } from '@mui/material'

import { CheckIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import { sizeTokens as size } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'

interface Props {
  checked: boolean
}

function OptionCheckbox({ checked }: Props) {
  return (
    <Box aria-hidden sx={{ flexShrink: 0, py: space['space-0'] }}>
      <Box
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          height: size['icon-size-24'],
          justifyContent: 'center',
          padding: space['space-2'],
          width: size['icon-size-24'],
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: checked ? color['control-selected'] : color['surface-base'],
            border: checked
              ? `${border['stroke-1']} solid ${color['control-selected']}`
              : `${border['stroke-2']} solid ${color['control-border']}`,
            borderRadius: border['radius-4'],
            boxSizing: 'border-box',
            display: 'flex',
            height: size['icon-size-control'],
            justifyContent: 'center',
            width: size['icon-size-control'],
          }}
        >
          {checked && (
            <CheckIcon size={14} weight='bold' fillColor={color['control-foreground']} />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default OptionCheckbox
