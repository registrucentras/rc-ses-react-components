import { Box } from '@mui/material'

import ListWithIconsItem from './components/ListWithIconsItem'

export interface ListWithIconsItemData {
  id: string
  icon?: React.ReactNode
  text?: string
  disabled?: boolean
  tooltip?: string
}

export interface ListWithIconsProps {
  items: ListWithIconsItemData[]
  layout?: 'horizontal' | 'vertical'
  isLoading?: boolean
}

const ListWithIcons = ({ items, layout = 'vertical', isLoading }: ListWithIconsProps) => (
  <Box
    component='ul'
    sx={{
      p: 0,
      m: 0,
      width: '100%',
      minWidth: {
        md: 120,
      },
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: layout === 'horizontal' ? 'row' : 'column',
      },
      flexWrap: layout === 'horizontal' ? 'wrap' : 'nowrap',
      gap: {
        xs: '4px',
        md: layout === 'horizontal' ? '16px' : '8px',
      },
    }}
  >
    {items.map((item) => (
      <ListWithIconsItem key={item.id} {...item} isLoading={isLoading} />
    ))}
  </Box>
)

export default ListWithIcons
