import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { RowComponentProps } from 'react-window'

import { borderTokens } from '@/theme/borderTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

// react-window 2 passes `index` and `style` plus whatever is given in `rowProps`,
// replacing v1's single `data` array.
type Props = RowComponentProps<{ items: any[] }>

function RowComponent(props: Props) {
  const { items, index, style } = props
  const [{ key, ...optionProps }, option] = items[index]

  return (
    <Stack
      key={key}
      component='li'
      sx={{
        alignItems: 'center !important',
        backgroundSize: 'auto',
        borderRadius: borderTokens['radius-6'],
        flexDirection: 'row !important',
        gap: spacingRoleBasedTokens['space-12'],
        right: 0,
        m: '0 !important',
      }}
      {...optionProps}
      style={style}
    >
      <Box
        className={`flag-sprite-map flag-${option?.iso}`}
        component='span'
        sx={{
          backgroundSize: '2.25rem auto',
          borderRadius: borderTokens['radius-full'],
          flexShrink: 0,
          height: sizeTokens['icon-size-24'],
          objectFit: 'cover',
          width: sizeTokens['icon-size-24'],
        }}
        title={option?.name}
      />
      <Typography component='span'>{option.name}</Typography>
      <Typography component='span' sx={{ flexShrink: 0, ml: 'auto' }}>
        {option.code}
      </Typography>
    </Stack>
  )
}

export default RowComponent
