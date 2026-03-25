import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { RowComponentProps } from 'react-window'

import type { ListItemData } from './ListboxComponent'

type Props = RowComponentProps<{
  itemData: ListItemData[]
}>

function RowComponent(props: Props) {
  const { ariaAttributes, index, itemData, style } = props
  const rowData = itemData[index]

  if (!rowData) return null

  const [{ key, ...optionProps }, option] = rowData

  return (
    <Stack
      {...ariaAttributes}
      key={key}
      component='li'
      sx={{
        alignItems: 'center !important',
        backgroundSize: 'auto',
        flexDirection: 'row !important',
        gap: 1.5,
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
          borderRadius: '50%',
          flexShrink: 0,
          height: '1.5rem',
          objectFit: 'cover',
          width: '1.5rem',
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
