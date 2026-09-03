import { Box } from '@mui/material'

import CheckIcon from '@/assets/icons/CheckIcon'
import palette from '@/theme/palette'

type Props = {
  checked: boolean
}

function OptionCheckbox({ checked }: Props) {
  return (
    <Box aria-hidden sx={{ flexShrink: 0, py: '.5rem' }}>
      <Box
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          height: '1.5rem',
          justifyContent: 'center',
          padding: '.125rem',
          width: '1.5rem',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: checked ? palette.primary.main : 'white',
            border: checked
              ? `1px solid ${palette.primary.main}`
              : `2px solid ${palette.grey['500']}`,
            borderRadius: '.25rem',
            boxSizing: 'border-box',
            display: 'flex',
            height: '1.25rem',
            justifyContent: 'center',
            width: '1.25rem',
          }}
        >
          {checked && <CheckIcon size={14} weight='bold' fillColor='white' />}
        </Box>
      </Box>
    </Box>
  )
}

export default OptionCheckbox
